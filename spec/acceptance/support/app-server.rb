require 'rack'
require 'rack/handler/webrick'

ROOT_DIR = File.expand_path File.join(File.dirname(__FILE__), '../../..')

app = Rack::Builder.new do
  map "/" do
    use Rack::CommonLogger, $stderr
    use Rack::ShowExceptions
    #use Rack::Static, :urls => ["/styles"], :root => "#{ROOT_DIR}/.tmp/styles"
    use Rack::Static, :urls => ["/scripts", '/styles'], :root => ".tmp"
    use Rack::Static, :urls => ["/"], :root => "app"
    use Rack::Lint
    run lambda {|env| [404, {}, '']}
  end
end
server = Rack::Server.new :app => app, :server => 'webrick', :Port => 3000
server.start
