require 'timeout'

module T2
  module WaitFor
    def wait_for(timeout=5, &block)
      result = block.call
      return if result
      Timeout::timeout(timeout) do
        while true
          result = block.call
          break if result
          sleep 0.1
        end
      end
    end
  end

  class Element < SimpleDelegator
    attr_reader :page
    def initialize(el, page)
      super(el)
      @page = page
    end

    def find_by_label(label, el='input')
      find(:xpath, "//label[contains(., '#{label}')]/following-sibling::#{el}")
    end
  end

  class ModalEditor < Element
    def has_delete_link?
      has_link?('Delete')
    end

    def save
      click_button('Save')
    end

    def delete
      click_link('Delete')
    end

    def cancel
      click_button('Cancel')
    end

    def notes(value=nil)
      input = find_by_label('Notes', 'textarea')

      if value
        input.set(value)
      else
        input.value
      end
    end

    def billable(value=nil)
      input = find_field('Billable')
      return input.checked? if value.nil?

      if value
        input.set(true)
      else
        input.set(false)
      end
    end
  end

  class ProjectEditor < ModalEditor
    def name(value=nil)
      input = find_by_label('Name')
      if value
        input.set(value)
      else
        input.value
      end
    end

    def offices(values=nil)
      offices = all('[data-test="office"]')

      if values
        offices.each do |o|
          o.find('input').set(false)
        end

        values.each do |name|
          check(name)
        end
      else
        offices.select{|o| o.find('input').checked?}.map(&:text)
      end
    end

  end

  class AllocationEditor < ModalEditor
    def start_date(value=nil)
      if value
        page.execute_script "
            $('.modal .start-date').val('#{value}').trigger('change');
            return null;
        "
      else
        page.evaluate_script "$('.modal .start-date').val()"
      end
    end

    def end_date(value=nil)
      if value
        page.execute_script "
            $('.modal .end-date').val('#{value}').trigger('change');
            return null;
        "
      else
        page.evaluate_script "$('.modal .end-date').val()"
      end
    end

    def binding(value=nil)
      input = find('[data-test="binding"] input')
      return input.checked? if value.nil?

      if value
        input.set(true)
      else
        input.set(false)
      end
    end

    def person(value=nil)
      el = all('select')[0]
      if value
        el.select(value)
      else
        el.find('option[selected]').text
      end
    end

    def project(value=nil)
      el = all('select')[1]
      if value
        el.select(value)
      else
        el.find('option[selected]').text
      end
    end
  end

  class ProjectView < Element
    def name
      find('.project-descriptor').text
    end

    def allocations
      all('.allocation-content')
    end
  end

  class Application
    include WaitFor
    include Capybara::DSL

    def double_click(el)
      if el.native.respond_to? :double_click
        el.native.double_click
      else
        page.driver.browser.mouse.double_click(el.native)
      end
    end

    def date_selector
      page.find('.calendar-date-selector span')
    end

    def has_date_picker?
      page.has_css?('#ui-datepicker-div')
    end

    def date_picker
      el = page.find('#ui-datepicker-div')

      def el.select_day(day)
        self.click_link(day)
      end
      el
    end

    def set_current_date(text)
      date_selector.click

      selector = '.calendar-date-selector input'

      # This seems to be the most reliable way of setting the date
      page.execute_script """
        $('#{selector}').datepicker('setDate', '#{text}');
        $('#{selector}').datepicker('hide');
      """

      wait_for { not has_date_picker? }
    end

    def calendar_start_date
      page.find('.calendar li', match: :first).text
    end

    def select_office(office)
      page.find('[data-test="offices"]').select(office)
    end

    def projects
      page.all('.project').map do |el|
        next if el['class'] && el['class'].include?('dummy-project')
        ProjectView.new(el, page)
      end.compact
    end

    def create_project
      page.find('.dummy-project .project-descriptor .white-button').click
      project_editor
    end

    def project_editor
      ProjectEditor.new(page.find('.modal'), page)
    end

    def has_editor?
      page.has_css?('.modal')
    end

    def edit_project(project_el)
      double_click project_el.find('.project-descriptor')

      if not has_editor?
        wait_for do
          double_click project_el.find('.project-descriptor')
          has_editor?
        end
      end

      project_editor
    end

    def allocations
      projects.reduce([]) { |memo, proj| memo += proj.allocations.to_a }
    end

    def allocation_editor
      AllocationEditor.new(page.find('.modal'), page)
    end

    def edit_allocation(allocation_el)
      double_click allocation_el
      form = allocation_editor
      form
    end

    def add_allocation_button
      page.find('.add-allocation')
    end

    def visit(path, access_token = nil)
      _auth = access_token ? "?authentication_token=#{access_token}" : ""
      page.visit "/#{_auth}##{path}"
    end

    def sign_out
      visit '/sign_out'
    end

    def sign_in(token)
      visit '/', token
    end
  end
end
