require 'sinatra'
require 'sendgrid-ruby'

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
	@email_body = ["Name: " + @firstname.to_s, "Email: " + @email.to_s, "Guests: " + @guests.to_s, "Info: " + @more_info.to_s]
	@email_body = @email_body.join(' ')

	from = Email.new(email: @email)
	subject = "Thank You For Your Interest!"
	to = Email.new(email: 'samralmeida@icloud.com')
	content = Content.new(type: 'text/plain', value: @email_body)
	mail = Mail.new(from, subject, to, content)

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

