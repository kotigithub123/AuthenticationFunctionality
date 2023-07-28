// Write your JS code here
import Component from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'

class Login extends Component {
  successfullSubmit = jwtToken => {
    const {history} = this.props
    history.replace('/')
    Cookies.set('jwt_token', jwtToken, {expires: 30})
  }

  onLogin = async () => {
    const username = 'rahul'
    const password = 'rahul@2021'
    const url = 'https://apis.ccbp.in/login'
    const loginCreds = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(loginCreds),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    this.successfullSubmit(data.jwt_token)
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div>
        <h1>Please Login</h1>
        <button type="button" onClick={this.onLogin}>
          Login with Sample Creds
        </button>
      </div>
    )
  }
}

export default Login
