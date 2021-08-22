const CreateProfile = () => {
    const BASE_URL ='https://strangers-things.herokuapp.com/api/2105-vpi-web-pt'
        fetch(`${BASE_URL}/users/register`, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    "username": `username`,
                    "password": "password"
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
                    <input type="text" name="username" />
                </div>

                <div>
                    <label> Choose Password: </label>
                    <input type="text2" name="password"/>
                </div>

                <div>
                    <label> Confirm Password: </label>
                    <input type="text3" name="password"/>
                </div>

                <div id="CreateProfileButton"> 
                {
                    function CreateProfile() {
                        document.getElementById("CreateProfileButton").style.display="none";
                        return true;
                    }
                }
                <button type="submit" name="event" class="button" onclick="return CreateProfile()">Create Profile</button>
            
                </div>
                
            </section>
    )  
}

export default CreateProfile;

