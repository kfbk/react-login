import { useRef } from 'react';
// import {Link, useNavigate} from 'react-router-dom'
// axio の代わりにuseAuthを使う
// import axios from '../utils/axios'
// import useAuth from '../hooks/useAuth'
// useAuth の代わりにuseAuthContextを使う
import {useAuthContext} from '../context/AuthContext'

const Login = () => {
  // const {login} = useAuth()
  const {login} = useAuthContext()
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  // const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   const response = await axios.post('/auth/login', {
    //     email: emailRef.current.value,
    //     password: passwordRef.current.value,
    //   })
    //   // console.log("response.data=", response.data)
    //   const token = response.data.token
    //   axios.defaults.headers.common['Authorization'] =
    //     `Bearer ${token}`
    //   getUser()
    //   navigate('/')
    // } catch (error) {
    //   console.log(error)
    // }
    // 上の代わりに、useAuthを使う
    login({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    })
    console.log(
      `emai:${emailRef.current.value}, password:${passwordRef.current.value}`
    );
  };
  // const getUser = async () => {
  //   const response = await axios.get('/auth/user')
  //   console.log(response.data)
  // }

  return (
    // <div className="App">
    <div style={{textAlign: "center"}}>
      <h1>ログイン</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" ref={emailRef} />
        </div>
        <div>
          <label htmlFor="password">パスワード</label>
          <input id="password" ref={passwordRef} type="password" />
        </div>
        <div>
          <button type="submit">ログイン</button>
        </div>
      </form>
    </div>
  );
}

export default Login