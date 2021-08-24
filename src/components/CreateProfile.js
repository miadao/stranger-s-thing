const CreateProfile = (props) => {
    const {username, password} = props;
    const BASE_URL ='https://strangers-things.herokuapp.com/api/2105-vpi-web-pt'
        fetch(`${BASE_URL}/users/register`, {
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
        }).then(res => res.json())
          .then(result => console.log(result))
          .catch(err => console.error(err));

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
                    <input type="text" name="password"/>
                </div>

                <div id="CreateProfileButton"> 
                {
                    function CreateProfile() {
                        document.getElementById("CreateProfileButton").style.display="none";
                        return true;
                    }
                }
                <button type="submit" name="event" class="button" onSubmit={CreateProfile}>Create Profile</button>
               
            
                </div>
                
            </section>
    )  
}

export default CreateProfile;

// TO DO
// Add the condition rendering if password match 
//communicate to the server this new user info to store it so this new user can log in