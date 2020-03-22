require 'sassc'
require 'sinatra/base'

require_relative 'lib/sinatra/find_template'

class PersonalWebsiteApp < Sinatra::Base
  helpers Sinatra::FindTemplate

  configure do
    set :erb, :format => :html5
    set :public_folder, 'public'
    set :views, :scss => 'assets/stylesheets', :default => 'views'
  end

  get '/' do
    erb :index
  end

  get '/index.css' do
    scss :index
  end

  not_found do
    status 404
    erb :lost
  end

  error 500 do
    'Something went wrong, try refreshing the page or come back in a few minutes'
  end
end
