require_relative 'spec_helper'

feature 'Projects' do
  background do
    app.sign_in 'MyAccessToken'
  end

  scenario 'signing in' do
    app.sign_out
    expect(current_url).to match(/http:\/\/localhost:5001\/sign_out\?return_url=.+/)

    app.visit('/')
    wait_for { current_url.match(/sign_in/) }
    expect(current_url).to match(/http:\/\/localhost:5001\/sign_in\?return_url=.+/)

    app.sign_in('abc')
    expect(current_url).to match(/#\/offices\/.+\/projects/)
  end

  scenario 'updating date field' do
    app.date_selector.click

    expect(app.date_picker).to be_visible
    app.date_picker.select_day(1)

    app.set_current_date('07/01/2013')
    expect(app.calendar_start_date).to eql('Jul 1')

    app.set_current_date('07/14/2013')
    expect(app.calendar_start_date).to eql('Jul 15')

    app.date_selector.click
    app.date_picker.select_day(7)

    expect(app.calendar_start_date).to eql('Jul 8')
  end

  scenario 'create allocation' do
    app.set_current_date('06/01/2013')
    app.select_office('Columbus')

    expect(app.projects.first).to be_visible
    expect(app.projects.first.allocations).to be_empty

    app.add_allocation_button.click
    app.allocation_editor.tap do |form|
      expect(form).to be_visible

      form.start_date('2013-07-14')
      form.end_date('2013-08-14')
      form.person('Dave Anderson')
      form.project('Nexia Home')
      form.notes('Allocation note')
      form.save()
    end

    expect(app.projects.first.allocations).to have(1).allocation
    expect(app.projects.first.allocations.first.text).to match(/Dave/)
  end

  scenario 'cancel new allocation editor' do
    app.set_current_date('06/01/2013')
    app.select_office 'Columbus'

    expect(app.projects.first.allocations).to be_empty

    app.add_allocation_button.click
    app.allocation_editor.tap  do |form|
      expect(form).to be_visible

      form.start_date('2013-07-14')
      form.end_date('2013-08-14')
      form.person('Dave Anderson')
      form.project('Nexia Home')
      form.cancel()
    end

    expect(app.projects.first.allocations).to be_empty
  end

  scenario 'edit allocation' do
    app.set_current_date('06/01/2013')

    allocation = app.projects.first.allocations.first
    app.edit_allocation(allocation).tap do |form|
      form.start_date('2013-06-03')
      form.end_date('2013-08-04')
      form.billable(true)
      form.binding(true)
      form.person('Dan Williams')
      form.notes('my allocation note')
      form.save()

      wait_for { form.is_hidden_or_gone? }
    end

    app.visit('/')
    app.set_current_date('06/01/2013')

    allocation = app.projects.first.allocations.first
    app.edit_allocation(allocation).tap do |form|
      expect(form.start_date).to eql('2013-06-03')
      expect(form.end_date).to eql('2013-08-04')
      expect(form.billable).to be_true
      expect(form.binding).to be_true
      expect(form.person).to eql('Dan Williams')
      expect(form.project).to eql('T3')
      expect(form.notes).to eql('my allocation note')
      form.cancel()
    end
  end

  scenario 'delete allocation' do
    app.set_current_date('06/01/2013')

    first_project = app.projects.first
    expect(first_project).to have(4).allocations

    allocation = first_project.allocations.first
    app.edit_allocation(allocation).tap do |form|
      form.delete()

      wait_for { form.is_hidden_or_gone? }
    end

    expect(first_project).to have(3).allocations

    app.visit('/')
    app.set_current_date('06/01/2013')
    expect(app.projects.first).to have(3).allocations
  end

  scenario 'create project' do
    app.set_current_date('06/01/2013')
    expect(app).to have(1).projects

    app.create_project.tap do |form|
      expect(form).to be_visible
      expect(form).not_to have_delete_link

      form.name('My Project')
      form.billable(true)
      form.offices(['Cincinnati', 'Singapore'])
      form.notes('my project note')
      form.save()

      wait_for { form.is_hidden_or_gone? }
    end

    expect(app).to have(2).projects
    expect(app.projects[1].name).to eql('My Project')

    app.edit_project(app.projects[1]).tap do |form|
      expect(form).to be_visible
      expect(form.name).to eql('My Project')
      expect(form.billable).to be_true
      expect(form.offices).to eql(['Cincinnati', 'Singapore'])
      expect(form.notes).to eql('my project note')
    end
  end

  scenario 'delete project' do
    app.select_office 'Cincinnati'
    app.set_current_date('06/01/2013')

    expect(app).to have(1).projects
    expect(app).to have(4).allocations

    first_project = app.projects.first
    expect(first_project.name).to eql('T3')

    app.edit_project(first_project).tap do |form|
      form.delete()
      wait_for { form.is_hidden_or_gone? }
    end

    expect(app.projects).to be_empty
    expect(app.allocations).to be_empty

    app.visit('/')
    app.set_current_date('06/01/2013')
    app.select_office 'Cincinnati'
    expect(app.projects).to be_empty
    expect(app.allocations).to be_empty
  end

  scenario 'filter by office' do
    app.select_office 'Columbus'
    app.set_current_date('06/01/2013')

    expect(app).to have(1).projects
    expect(app.projects.first.name).to eql('Nexia Home')

    app.select_office 'Cincinnati'
    expect(app).to have(1).projects
    expect(app.projects.first.name).to eql('T3')
  end
end
