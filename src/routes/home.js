import axios from "../utils/axios"
import React, {useEffect, useState} from 'react'

const Home = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get('/users')
        setUsers(response.data.users)
      } catch (err) {
        console.log(err)
      }
    }
    getUsers()
  }, [])
  return (
    <div>
      <h1>Home</h1>
      <ul>
        {users &&
          users.map((user) => (
            <li key={user._id}>
              Name:{user.name}/Email:{user.email}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Home