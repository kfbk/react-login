// test.httpからはSignupできるのに
// ここからがSignup出来ないので、コピペする

import React, { useRef } from 'react';
// import { Link } from 'react-router-dom';
// import useAuth from '../hooks/useAuth';
// useAuth の代わりにuseAuthContextを使う
import {useAuthContext} from '../context/AuthContext'

const Signup = () => {
  // const { signup } = useAuth();
  const {signup} = useAuthContext()

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    signup({
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
  };
  return (
    // 次の文は全く同じ
    // <div style={{display:'flex', flexDirection:'column'}}>
    <div>
      <h1>ユーザ登録</h1>
      <form onSubmit={handleSubmit}>
      <div>
          {/* htmlFor は無くても良い  */}
          <label>Name:</label>
          <input id="name" name="name" ref={nameRef} />
        </div>
        <div>
          <label htmlFor="email">email:</label>
          <input id="email" name="email" ref={emailRef} />
        </div>
        <div>
          <label htmlFor="password">password:</label>
          <input type="password" id="password" name="password" ref={passwordRef} />
        </div>
        <div>
          <button type="submit">ユーザ登録</button>
        </div>
      </form>
    </div>
  )
}

export default Signup