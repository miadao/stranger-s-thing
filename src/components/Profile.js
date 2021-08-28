import React from 'react';
const Profile = ({token, username, setUsername, messages, setMessages, setProfile}) => {
    
    const BASE_URL ='https://strangers-things.herokuapp.com/api/2105-vpi-web-pt'
    
    
        fetch (`${BASE_URL}/users/me`, {
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
                }
            })
            .then(response => response.json())
            .then(data => {
                // console.log (data)
                setMessages(data.data.messages)
                setUsername(data.data.username)
                setProfile(true)
            })
            .catch(console.error);

            
    return (
        <div className="Profile">   

            <section className="WelcomeUser"> 
                <h1>Welcome: </h1>
                {
                username
                } 
            </section>

            <section className="MessageToMe"> 
                <h1>Message to Me: </h1>  
                {
                messages
                }
            
            </section>

            <section className="MessageFromMe">
                <h1>Message from Me: </h1>
                {
                messages
                }
            </section>

        </div>
    )
}
 

export default Profile;