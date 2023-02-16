import {Navigate} from 'react-router-dom'
import {useAuthContext} from '../context/AuthContext'

const ProtectedRoute = ({children}) => {
  // AuthContextを利用してuserオブジェクトを取り出し
  const {user} = useAuthContext()
  if (user === undefined) {
    return <p>Loading...</p>
  }
  if (!user) {
    return <Navigate to='/login' />
  }
  return children
}

export default ProtectedRoute