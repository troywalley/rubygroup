require 'sinatra'

get '/' do
@home=true
erb :index
end
get '/about' do
erb :about
end
get '/contact' do
erb :contact
end
get '/gallery' do
erb :gallery
end