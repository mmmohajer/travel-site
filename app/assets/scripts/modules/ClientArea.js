import Axios from 'axios'

class ClientArea {
  constructor() {
    this.injectHTML()
    this.form = document.querySelector(".client-area__form")
    this.field = document.querySelector(".client-area__input")
    this.contentArea = document.querySelector(".client-area__content-area")
    this.events()
  }

  events() {
    this.form.addEventListener("submit", e => {
      e.preventDefault()
      this.sendRequest()
    })
  }

  sendRequest() {
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

  injectHTML() {
    document.body.insertAdjacentHTML('beforeend', `
    <div class="client-area">
      <div class="wrapper wrapper--medium">
        <h2 class="section-title section-title--blue">Secret Client Area</h2>
        <form class="client-area__form" action="">
          <input class="client-area__input" type="text" placeholder="Enter the secret phrase">
          <button class="btn btn--orange">Submit</button>
        </form>
        <div class="client-area__content-area"></div>
      </div>
    </div>
    `)
  }
}

export default ClientArea