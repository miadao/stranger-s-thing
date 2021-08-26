import React, { useState } from 'react';

const CreateProfile = () => {
    const [username, setUsername] = useState([])
    const [password, setPassword] = useState([])
    const [ConfirmPassword, setConfirmPassword] = useState([])
    const BASE_URL ='https://strangers-things.herokuapp.com/api/2105-vpi-web-pt'
    
    // const handleCreateProfile = async (event) => {
    //     event.preventDefault();
        
    // }
    

    return (<form> 
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
            <button onSubmit={(event)=> {
                event.preventDefault()
                if (password === ConfirmPassword) {
                    fetch(`${BASE_URL}/users/register`, {
                        method: 'POST',
                        headers:{
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            user: {
                                "username": document.getElementById("username"),
                                "password": document.getElementById("password")
                            }
                        }) 
                    }) 
                    setUsername('')
                    setPassword('')
                    setConfirmPassword('')
                } else {
                    alert("Password do not match, please try again")
                }
            }}> Create Profile </button>


        </fieldset>
            {console.log("A")}
        </form>
    )  
}

export default CreateProfile;

// TO DO
// Add the condition rendering if password match 
//communicate to the server this new user info to store it so this new user can log in