import {createContext, useContext, useEffect} from 'react'
import useAuth from '../hooks/useAuth'
import axios from '../utils/axios'

const AuthContext = createContext()

export function useAuthContext() {
  // ログイン後に取得できるユーザ情報をアプリケーション内で共有できるようにする
  return useContext(AuthContext)
}

export function AuthProvider({children}) {
  const {user, login, signup, getUser, setUser, logout} = useAuth()
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      axios.defaults.headers.common['Authorization']
        = `Bearer ${token}`
      getUser()
    } else {
      setUser(null)
    }
  }, [getUser, setUser])
  const value = {
    user,
    login,
    signup,
    logout,
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}