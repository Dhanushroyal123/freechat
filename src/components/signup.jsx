import { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const SignUp = () =>{
    let history = useHistory()
    const [user, setUser] = useState({
        username:'',
        email:'',
        password:'',
    })

    const [show, setShow] = useState(true)

    const handleChange = (e) =>{
        const name = e.target.name
        const value = e.target.value
        setUser({...user,[name]:value})
    }
    const submit = (e) =>{
        e.preventDefault()
        console.log('submitted')
        axios
      .post('https://freechat-back.herokuapp.com/user/save', user)
      .then((res) => {
          history.push('/')
      })
      .catch((err) => setShow(true))

    }

    return (
       <div className='login'>
          <h1>SIGN UP</h1>
          <div className="login-content">
              <form action="" onSubmit={submit}>
              <input type="text" placeholder="Username" name='username' onChange={handleChange} value={user.username}/><br/>
              <input type="email" placeholder="Email" name='email' onChange={handleChange} value={user.email}/><br/>
              <input type="password" placeholder="Password" name='password' onChange={handleChange} value={user.password}/><br/>
              <input type="submit" value="SignUp"/>
              </form>
          </div>
       </div>
    )
}

export default SignUp