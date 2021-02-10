import axios from 'axios'
import { useState, useEffect, useRef} from 'react'

const Chat = () =>{
    const messageEl = useRef(null)

    const [data, setData] = useState('')
    
    const [msgs, setMsgs] = useState([])

    const [sMsgs, ssMsgs] =useState({
        message:''
    })

    let cUser = localStorage.getItem('myData')
    let cdata = localStorage.getItem('myData')
    const getData = () => {
        if(cdata === "dhanush"){
            cdata = "praneeth"
        }else{
            cdata = "dhanush"
        }
        setData(cdata)
      }
     
    const getMessages = () =>{
        console.log(cUser)
        axios.post('https://freechat-back.herokuapp.com/user/getmessages',{username:cUser})
        .then(res=> setMsgs(res.data.value))
        .catch(err => console.log(err))
    }
    const handleChange = (e) =>{
        ssMsgs(e.target.value)   
    }

    const updateScroll = () =>{
        if(messageEl){
            messageEl.current.addEventListener('DOMNodeInserted',event=>{
                const { currentTarget: target} = event
                target.scroll({top: target.scrollHeight, behaviour: 'smooth'})
            })
        }
    }
    

    const submit = (e)=>{
        e.preventDefault()
        axios.post('https://freechat-back.herokuapp.com/user/update',{username:cUser,message:sMsgs})
        .then(res => {
            console.log(res)
        })
        .catch(err =>console.log(err))

    }
    useEffect(() => {
        getData()
        getMessages()
        updateScroll()
    
    }, [])

    return(
        <div className="chat-box">
            <div className="profile-head">
                 <span style={{textTransform:'capitalize',fontWeight:'bold'}}>{data}</span><span style={{float:'right',clear:'both',background:'linear-gradient(to right, #33cc33, #00ff99)',padding:'5px',color:'white',borderRadius:'10px'}}><a href='/' style={{textDecoration:'none'}}>Logout</a></span>
            </div>
            <div  className="chat-feed" ref={messageEl}>
                {
                    msgs.map((msg,index)=>{
                        const { username, message} =msg
                        if(localStorage.getItem('myData') === username){
                            return <h3 style={{float:'right',clear:'both',margin:'10px 10px 10px 10px',background:'linear-gradient(to right, #0066ff, #00ccff)',padding:'6px',color:'white',borderRadius:'6px'}}>{message}</h3>
                        }else{
                            return <h3 style={{float:'left',clear:'both',margin:'10px 10px 10px 10px',background:'linear-gradient(to right, #0066ff, #00ccff)',padding:'6px',color:'white',borderRadius:'6px'}}>{message}</h3>
                        }
                    })
                }
                
            </div>
            <div className="message">
                <form onSubmit={submit}>
                    <input type="text" placeholder="send a message..." name="message" onChange={handleChange} value={sMsgs.message}/>
                    <input style={{padding:'8px',margin:'5px',fontSize:'15px',borderRadius:'5px'}} type="submit" value="send"/>
                </form>
                
            </div>

        </div>
    )
}

export default Chat