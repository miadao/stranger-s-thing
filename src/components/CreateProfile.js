import React, { useState } from 'react';

const CreateProfile = () => {
    const [username, setUsername] = useState([])
    const [password, setPassword] = useState([])
    const [ConfirmPassword, setConfirmPassword] = useState([])
    const BASE_URL ='https://strangers-things.herokuapp.com/api/2105-vpi-web-pt'
    
    const handleCreateProfile = async (event) => {
        event.preventDefault();
        if (password === ConfirmPassword) {
            const response = await fetch(`${BASE_URL}/users/register`, {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user: {
                        "username": `${username}`,
                        "password": `${password}`
                    }
                }) 
            }) 
            const data = await response.json();
            console.log(data)
        }
    }
    

    return (<form> 
       
        
        <fieldset>
            <label htmlFor="Username">Create Username</label>
            <input
                id="username"
                type="text"
                value={username}
            />

            <label htmlFor="Password">Create Password</label>
            <input
                id="password"
                type="text"
                value={password}
            />

            <label htmlFor="Confirm Password">Confirm Password</label>
            <input
                id="confirmPassword"
                type="text"
                value={ConfirmPassword}
            />

            <button onClick={(event)=> {
                
                handleCreateProfile(event.target)
                }
                
            }> Create Profile </button>


        </fieldset>
            {console.log("A")}
        </form>
    )  
}

export default CreateProfile;

// TO DO
// Add the condition rendering if password match 
//communicate to the server this new user info to store it so this new user can log in