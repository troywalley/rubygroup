require 'sinatra'
require 'sendgrid-ruby'
require 'sinatra'

include SendGrid

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

get '/send_mail' do
	@firstname = params[:firstname]
	@email = params[:email]
	@guests = params[:guests]
	@more_info = params[:more_info]
	@mail_body = @firstname.to_s << @email.to_s << @guests.to_s << @more_info.to_s

	from = Email.new(email: @email)
	subject = "Thank You For Your Interest!"
	mail = Mail.new(from, subject, to, content)
	to = Email.new(email: 'samralmeida@icloud.com')
	content = Content.new(type: 'text/plain', value: @mail_body)

	sg = SendGrid::API.new(api_key: ENV['SENDGRID_API_KEY'])
	response = sg.client.mail._('send').post(request_body: mail.to_json)
	puts response.status_code
	puts response.body
	puts response.headers

	erb :thank_you

end



get '/gallery' do
erb :gallery
end

