import React from 'react'
import {useSelector} from 'react-redux'

function Profile() {

    const user = useSelector((state)=> state.user.value);

    if(user.loggedIn=== true){
        return (
            <div>
                <h1>Profile page</h1>
                <p>Name: {user.name}</p>
                <p>Age: {user.age}</p>
                <p>Email: {user.email}</p>
            </div>
        )   
    }
    else{
        return(
            <div>
                <h1>Profile Page</h1>
                <p>Please enter in your information to log in</p>
            </div>
        )
    }
}

export default Profile
