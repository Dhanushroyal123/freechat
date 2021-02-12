import { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const Login = () =>{
    let history = useHistory()
    const [user, setUser] = useState({
        username:'',
        receiver:'',
        password:''
    })

    const [show, setShow] = useState(false)

    const handleChange = (e) =>{
        const name = e.target.name
        const value = e.target.value
        setUser({...user,[name]:value})
    }
      const remove = () => {
        setShow(false)
      }

    const submit = (e) =>{

        e.preventDefault()
        console.log('submitted')
        axios.post('https://freechat-back.herokuapp.com/user/validate', user)
      .then((res) => { 
        if (res.data.value < 300) {
          localStorage.setItem('myData',user.username)
          localStorage.setItem('myData2',user.receiver)
          history.push('/chat')
        } else {
          setShow(true)
        }
      })
      .catch((err) => setShow(true))

    }

    return (
       <div className='login'>
          <h1>FrEe ChAt</h1>
          {show && (<div
              style={{
                backgroundColor: '#ffe3e6',
                borderRadius: '3px',
                padding: '10px',
                border: '1px solid pink',
                textAlign: 'center',
                width:'280px',
                marginLeft:'22px'
              }}
            >
              <span style={{ fontSize: '13px' }}>
                Incorrect username or password &nbsp; &nbsp; &nbsp; &nbsp;
                <span
                  onClick={remove}
                  style={{
                    color: 'red',
                    fontSize: '15px',
                    cursor: 'pointer',
                  }}
                >
                  &#10006;
                </span>
              </span>
            </div>
          )}
          <div className="login-content">
              <form action="" onSubmit={submit}>
              <input type="text" placeholder="Username" name='username' onChange={handleChange} value={user.username} required/><br/>
              <input type="text" placeholder="Receiver" name='receiver' onChange={handleChange} value={user.receiver} required/><br/>
              <input type="password" placeholder="Password" name='password' onChange={handleChange} value={user.password} required/><br/>
              <input type="submit" value="LOGIN"/>
              </form>
          </div>
          <div id="createAcc">
            <span id="acc" style={{color:'white',fontWeight:'bold'}} >New to FREECHAT ?<a href="/signup"> <b style={{color:'white',fontWeight:'400'}}>Create an account</b></a></span>
        </div>
       </div>
    )
}

export default Login