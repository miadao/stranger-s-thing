import React, { useState } from 'react';

const Profile = ({token, username, setUsername, setProfile}) => {
    const [messagesFromUser, setMessagesFromUser] = useState([])
    const [messagesToUser, setMessagesToUser] = useState([])
    
    const BASE_URL ='https://strangers-things.herokuapp.com/api/2105-vpi-web-pt'
    
    
        fetch (`${BASE_URL}/users/me`, {
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
                }
            })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setMessagesToUser(data.data.messages)
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
                    messagesToUser.map((messages) => {
                        <div key={messages._id}>  
                            <h1> 
                                {messages.content}
                                {messages.fromUser.username}
                            </h1>
                        </div>
                    })
                
                }
            
            </section>

            <section className="MessageFromMe">
                <h1>Message from "{username}": </h1>
                {
                
                }
            </section>

        </div>
    )
}
 

export default Profile;