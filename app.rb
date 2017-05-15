require 'sinatra'
# require 'sendgrid-ruby'

# include SendGrid

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



# from = Email.new(email: 'samralmeida@icloud.com')
# subject = 'Thank You For Your Interest!'
# to = Email.new(email: 'samralmeida@icloud.com')
# content = Content.new(type: 'text/plain', value: 'Hello, Email!')
# mail = Mail.new(from, subject, to, content)

# sg = SendGrid::API.new(api_key: ENV['2OqhD1yvTpWfTA2kKhPF6w'])
# response = sg.client.mail._('send').post(request_body: mail.to_json)
# puts response.status_code
# puts response.body
# puts response.headers