import React from 'react'
import {useDispatch} from 'react-redux'
import {login, logout,changeUserInfo} from '../features/user'
import { useState } from 'react'
function Login() {

    const [name, setName] = useState('')
    const [age, setAge] = useState(0)
    const [email, setEmail] = useState('')
    const [newProfile,setNewProfile]=useState({})

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
    const handleSubmit=(event)=>{
        setNewProfile({
            name:name,
            age:age,
            email:email
        })
        dispatch(changeUserInfo({name:name, age:age,email:email}))
        event.preventDefault()
    }
    

    return (
        <div>
            <button onClick={()=> {dispatch(login({name:'tyler', age:22, email:'tyler@gmail.com'}))}}>login</button>
            <label>Name:</label><input type="text" value={name} placeholder='enter new name' onChange={handleName}/>
            <label>Age:</label><input type="text" value={age} placeholder='enter new age' onChange={handleAge}/>
            <label>Email:</label><input type="text" placeholder='enter new email' value={email} onChange={handleEmail}/>
            <button onClick={handleSubmit}>ChangeUserInfo</button>
            <button onClick={()=>{dispatch(logout())}}>logout</button>
        </div>
    )
}

export default Login
