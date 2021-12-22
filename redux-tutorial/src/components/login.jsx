import React from 'react'
import {useDispatch} from 'react-redux'
import {login, logout,changeUserInfo} from '../features/user'
import { useSelector } from 'react-redux'
import { useState } from 'react'
function Login() {
    
    const user = useSelector((state)=>state.user.value)
    const [name, setName] = useState(user.name)
    const [age, setAge] = useState(user.age)
    const [email, setEmail] = useState(user.email)

    const dispatch = useDispatch()

    const handleName =(event)=>{
        setName(event.target.value)
    }
    const handleAge = (event)=>{
        setAge(event.target.value)
    }
    const handleEmail = (event)=>{
        setEmail(event.target.value)
    }
    const handleSubmit=()=>{
        dispatch(changeUserInfo({name:name, age:age,email:email,loggedIn:true}))
    }

    const handleLogin=()=>{
        dispatch(login({name:name,age:age,email:email,loggedIn:true}))
    }
    if(user.loggedIn === true){
        return(
            <div>
                <label>Name:</label><input type="text" value={name} placeholder='enter new name' onChange={handleName}/>
                <label>Age:</label><input type="text" value={age} placeholder='enter new age' onChange={handleAge}/>
                <label>Email:</label><input type="text" placeholder='enter new email' value={email} onChange={handleEmail}/>
                <button onClick={handleSubmit}>ChangeUserInfo</button>
                <button onClick={()=>{dispatch(logout())}}>logout</button>
            </div>
        )
    }else if(user.initialStateValue.loggedIn === false){
        return (
            <div> 
                <div>
                    <label>Name:</label><input type="text" value={user.name} placeholder='enter new name' onChange={handleName}/>
                    <label>Age:</label><input type="text" value={user.age} placeholder='enter new age' onChange={handleAge}/>
                    <label>Email:</label><input type="text" placeholder='enter new email' value={user.email} onChange={handleEmail}/>
                </div>
                <div>
                    <button onClick={()=>{handleLogin()}}>login</button>
                </div>
            </div>
        )
        
    }
}

export default Login
