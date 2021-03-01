const Axios = require('axios')

exports.handler = (event, context, callback) => {
	const secretContent = `
	<h3>Welcome to the Secret Area</h3>
	<p>Here we can tell you the sky color is <strong>blue</strong>.</p>
	`
	let body

	if (event.body) {
		body = JSON.parse(event.body)
    sendRequest()
	} else {
		body = {} 
	}

  async sendRequest() {
    let response = Axios.post("https://www.google.com", body);
    console.log(response.status)
    console.log(response) 
  }
}