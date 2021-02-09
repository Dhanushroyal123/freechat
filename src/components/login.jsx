
const Login = () =>{
    return (
       <div className='login'>
          <h1>Free Chat</h1>
          <div className="login-content">
              <input type="text" placeholder="Username"/><br/>
              <input type="password" placeholder="Password"/><br/>
              <input type="submit" value="Login"/>
          </div>
          <div id="createAcc">
            <span id="acc" style={{color:'white',fontWeight:'bold'}} >New to FREECHAT?<a href="#"> <b style={{color:'white',fontWeight:'400'}}>Create an account</b></a></span>
        </div>
       </div>
    )
}

export default Login