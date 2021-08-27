import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const CreateProfile = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [ConfirmPassword, setConfirmPassword] = useState('')
    const [profileCreated, setProfileCreated] = useState(false)
    const BASE_URL ='https://strangers-things.herokuapp.com/api/2105-vpi-web-pt'
    
    const createAProfile = async ()=> { 
        const response = await fetch(`${BASE_URL}/users/register`, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                "username": username,
                "password": password,
                
                }   
            }) 
        }) 
        console.log(`${BASE_URL}/users/register`)
        const data = await response.json();
        console.log(data)
        setUsername('')
        setPassword('')
        setProfileCreated(true)
     }

    
    const checkPassword = () => {
        if (password === ConfirmPassword) {
            createAProfile()
        } else {
            alert("Password do not match, please try again")
        }
    }
    if(profileCreated){
        return (
            alert("Profile created! Please log in!"),
            <Redirect to="/login"/>
        )

    }

    return (

        <form onSubmit={(event)=> {
            event.preventDefault()
            console.log("B")
            checkPassword()
            }}> 
            
            

            <fieldset>
                <label htmlFor="Username">Create Username</label>
                <input
                    className="CreateUsername"
                    id="username"
                    type="text"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />

                <label htmlFor="Password">Create Password</label>
                <input
                    className="CreatePassword"
                    id="password"
                    type="text"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />

                <label htmlFor="Confirm Password">Confirm Password</label>
                <input
                    className="CreatePassword"
                    id="confirmPassword"
                    type="text"
                    value={ConfirmPassword}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                />
                <br></br>
                <button 
                    type="submit" 
                    name="event" 
                    > Create Profile 
                </button>

            </fieldset>
                {console.log("A")}
     </form>
    )  
}

export default CreateProfile;

// TO DO
// Add the condition rendering if password match 
//communicate to the server this new user info to store it so this new user can log in