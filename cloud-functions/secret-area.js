const Axios = require('axios')

exports.handler = (event, context, callback) => {
	const secretContent = `
	<h3>Welcome to the Secret Area</h3>
	<p>Here we can tell you the sky color is <strong>blue</strong>.</p>
	`
	let body

	if (event.body) {
		body = JSON.parse(event.body)
    handleSubmit()
	} else {
		body = {} 
	}

  async handleSubmit() {

    let user = new FormData();

    user.append("app_name", "contact_application_csc")
    user.append('username', "mmmohajer70")
    user.append('password', "Pass4ContactApplication")

    try {
      const response = await Axios.post("https://v1.stormapi.com/users/login", user)
      console.log(response)
    } catch(err) {
      console.log(err)
    }
  }
}