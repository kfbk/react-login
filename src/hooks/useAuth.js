import {useCallback, useState} from 'react'
import axios from '../utils/axios'
import {useNavigate} from 'react-router-dom'

// login , signup関数やgetUser関数によって
// 取得したユーザ情報を保存する
const useAuth = () => {
  const [user, setUser] = useState()
  const navigate = useNavigate()
  
  const signup = async (data) => {
    // console.log('useAuth signup')
    try {
      const response = await axios.post('/auth/signup', data);
      const token = response.data.token;
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      getUser();
      // console.log("satou=",response.data);
      navigate('/');
    } catch (error) {
      console.log("signup-err=", error);
    }
  };
  
  const login = async (data) => {
    // console.log('useAuth login')
    try {
      const response = await axios.post('/auth/login', data)
      const token = response.data.token
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      localStorage.setItem('token', token)
      getUser()
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }
  
  const logout = () => {
    const token = null
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    setUser(null)
    localStorage.removeItem('token')
    navigate('/login')
  }

  // const getUser = async () => {
  const getUser = useCallback(async () => {
    // console.log('useAuth getUser')
    try {
      const response = await axios.get('/auth/user')
      const user = response.data.user
      // 取得したユーザ情報を保存
      console.log("getUser:user=",user)
      setUser(user)
    } catch (err) {
      console.log(err)
    }
  }, [])
  return {user, signup, login, setUser, getUser, logout}
}

export default useAuth