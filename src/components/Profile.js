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
                setMessages(data.data.messages.content)
                setUsername(data.data.username)
                setProfile(true)
            })
            .catch(console.error);

            
    return (
        <div className="Profile">   

            <section className="WelcomeUser"> 
                <h1>Welcome "{username}" !</h1>
                
            </section>

            <section className="MessageToMe"> 
                <h1>Message to "{username}": </h1>  
                {
                messages
                }
            
            </section>

            <section className="MessageFromMe">
                <h1>Message from "{username}": </h1>
                {
                messages
                }
            </section>

        </div>
    )
}
 

export default Profile;