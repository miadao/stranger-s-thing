const CreateProfile = ({username, password, ConfirmPassword} ) => {

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
        }
    }
    

    return (
        <section className="CreateProfile"> 
            <h1>Create Your Profile</h1>
            
                <div>
                    <label> Choose Username: </label>
                    <input type="text" name={`${username}`}/>
                </div>

                <div>
                    <label> Choose Password: </label>
                    <input type="text" name={`${password}`}/>
                </div>

                <div>
                    <label> Confirm Password: </label>
                    <input type="text" name={`${ConfirmPassword}`}/>
                </div>

                
                
                <button type="click" name="event" class="button" onClick={handleCreateProfile}>Create Profile</button>
               
            
               
                
            </section>
    )  
}

export default CreateProfile;

// TO DO
// Add the condition rendering if password match 
//communicate to the server this new user info to store it so this new user can log in