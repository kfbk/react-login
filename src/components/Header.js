import {Link} from 'react-router-dom'
import {useAuthContext} from '../context/AuthContext'

const Header = () => {
  const {user, logout} = useAuthContext()
  return (
    <div style={{display:'flex', justifyContent:'space-between'}}>
      <h1>
        <Link to="/">MERN Home</Link>
      </h1>
      <div>
        {user? (
          <div>
            <span>{user.email}</span>
            <button onClick={logout}>
              Logout
            </button>
          </div>
        ): (
          <div>
            <Link to="/login">Login</Link>
            <span>　</span>
            <Link to="/signup">Signup</Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header