import Cookies from 'js-cookie'
import {Component} from 'react'
import {Redirect, Link} from 'react-router-dom'
import './index.css'

class Login extends Component {
  onClickLoginButton = async () => {
    const loginApiUrl = 'https://apis.ccbp.in/login'
    const userDetails = {
      username: 'rahul',
      password: 'rahul@2021',
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(loginApiUrl, options)
    // console.log(response)
    const data = await response.json()
    // console.log(data)
    const jwtToken = data.jwt_token
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    // console.log(this.props)
    const {history} = this.props
    history.replace('/')
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="login-container">
        <h1>Please Login</h1>
        <Link to="/login">
          <button type="button" onClick={this.onClickLoginButton}>
            Login With Sample Creds
          </button>
        </Link>
      </div>
    )
  }
}
/*
const Login = () => {
  const onClickLoginButton = async () => {
    const loginApiUrl = 'https://apis.ccbp.in/login'
    const userDetails = {
      username: 'rahul',
      password: 'rahul@2021',
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(loginApiUrl, options)
    console.log(response)
    const data = await response.json()
    console.log(data)
    console.log(this.props)
  }

  return (
    <div className="login-container">
      <h1>Please Login</h1>
      <button type="button" onClick={onClickLoginButton}>
        Login With Sample Creds
      </button>
    </div>
  )
}
*/

export default Login
