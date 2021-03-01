exports.handler = (event, context, callback) => {
	const secretContent = `
	<h3>Welcome to the Secret Area</h3>
	<p>Here we can tell you the sky color is <strong>blue</strong></p>
	`
	let body

	if (event.body) {
		body = JSON.parse(event.body) 
	} else {
		body = {} 
	}

	if (body.password == "javascript") {
		callback(null, {
			statusCode: 200,
			body: "Welcome to the super secret area"
		}) 
	} else {
		callback(null, {
			statusCode: 401
		})
	}

}