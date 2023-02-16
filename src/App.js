// import logo from './logo.svg';
// import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './routes/home'
import Signup from './routes/signup'
import Login from './routes/login'
import {useEffect} from 'react'
import axios from './utils/axios'
import Header from './components/Header'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }
  }, [])
  return (
    <>
      <Header />
      <div style={{display:'flex', justifyContent: 'center', marginTop: '3em'}}>
        {/* Hello satou */}
        <Routes>
          <Route 
            path="/" 
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </div>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
