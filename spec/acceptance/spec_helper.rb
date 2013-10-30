require 'capybara/rspec'
require_relative 'support/app'
require 'selenium/webdriver'
require 'capybara/poltergeist'
require 'pry'

APP_PORT = 9001
API_PORT = 5001

Capybara.register_driver :selenium_chrome do |app|
  Capybara::Selenium::Driver.new(app, :browser => :chrome, service_log_path: 'chromedriver.log')
end

driver = ENV['CAPYBARA_DRIVER'] || :selenium_chrome
puts "USING: #{driver}"

#Capybara.default_driver = :poltergeist
#Capybara.default_driver = :selenium_chrome
Capybara.default_driver = driver.to_sym

Capybara.app_host = "http://localhost:#{APP_PORT}"

class Selenium::WebDriver::Chrome::Bridge
  def extract_service_args(opts)
    args = ['--verbose']
    if opts.has_key?(:service_log_path)
      args << "--log-path=#{opts.delete(:service_log_path)}"
    end
    args
  end
end

# hack fix for: https://github.com/jnicklas/capybara/issues/1035
class Selenium::WebDriver::Navigation
  alias_method :original_to, :to
  def to(url)
    url = 'file://reset-session-hack' if url == 'about:blank'
    original_to(url)
  end
end

class Capybara::Node::Element
  def is_hidden_or_gone?
    begin
      not visible?
    rescue Selenium::WebDriver::Error::StaleElementReferenceError, Capybara::Poltergeist::ObsoleteNode
      true
    end
  end
end

module AppHelper
  include T2::WaitFor

  def app
    T2::Application.new
  end
end

class Grunt
  attr_reader :args

  def initialize(args)
    @args = Array(args)
  end

  def start
    command = []
    command << 'grunt'
    command += args
    env = {
      'T2_ENV' => 'test'
    }
    @pid = spawn(env, *command,
                 in: "/dev/null",
                 out: "/dev/null",
                 err: "/dev/null")
  end

  def stop
    Process.kill 'KILL', @pid if @pid
    Process.wait(@pid)
    @pid = nil
  end
end

def is_up?(host, port)
  http = Net::HTTP.start(host, port, {open_timeout: 5, read_timeout: 5})
  not http.head("/").nil?
rescue Timeout::Error, SocketError, Errno::ECONNREFUSED
  false
end

RSpec.configure do |config|
  app_server = Grunt.new('server:acceptance')
  #app_server = Grunt.new('server')
  api_server = Grunt.new(['apiMock:acceptance', '--port', API_PORT.to_s])

  config.color_enabled = true
  config.tty = true
  config.formatter = :documentation # :progress, :html, :textmate

  config.filter_run :focus => true
  config.run_all_when_everything_filtered = true

  config.before :all do
    app_server.start
    wait_for { is_up?('localhost', APP_PORT) }
  end

  config.after :all do
    app_server.stop
  end

  config.before :each do
    api_server.start
    wait_for { is_up?('localhost', API_PORT) }
  end

  config.after :each do
    api_server.stop
  end
end

RSpec.configuration.include AppHelper
