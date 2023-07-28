// Write your JS code here
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

const LogoutButton = () => {
  const removeJwtToken = () => {
    Cookies.remove('jwt_token')
    return <Redirect to="/login" />
  }
  return (
    <div>
      <button type="button" onClick={removeJwtToken}>
        Logout
      </button>
    </div>
  )
}

export default LogoutButton
