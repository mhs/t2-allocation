window.App = Ember.Application.create()

window.App.API_BASEURL = (->
  api_extension = "http://localhost:5000"
  api_extension = "http://t2api.herokuapp.com" unless /localhost/.test document.location.href
  "#{api_extension}/api/v1"
)()
