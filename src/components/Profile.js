import React, { useState, useEffect } from 'react';
const Profile = ({setUsername, username, token}) => {
    const [messagesFromUser, setMessagesFromUser] = useState([])
    const [messagesToUser, setMessagesToUser] = useState([])
    
    const BASE_URL ='https://strangers-things.herokuapp.com/api/2105-vpi-web-pt'
    
    useEffect ( () => { 
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
                setMessagesFromUser(data.data.messages)
                setUsername(data.data.username)

            })
            .catch(console.error);
    },[])
            
    return (
        <div className="Profile">   

            <section className="WelcomeUser"> 
                <h1>Welcome {username} !</h1>
            </section>

            <section className="MessageToMe"> 
                <h1>Message to You: </h1>  
                {
                    messagesToUser.map((message) => 
                        <ul key={message._id} className="MessagesToUser">  
                            
                            {message.fromUser.username !== username ? <li> "{message.content}"  -from:{message.fromUser.username}</li> : <h2></h2>}
                              
                        </ul>  
                    ) 
                }
            </section>

            <section className="MessageFromMe">
                <h1>Message from You: </h1>
                {
                     messagesFromUser.map((message) => 
                        <ul key={message._id} className="MessagesFromUser">  
                             
                            {message.fromUser.username === username ? <li> "{message.content}" sent to post:{message.post.title} </li> : <h2></h2>}
                            
                        </ul>
                    )
                }
            </section>

        </div>
    )
}
 

export default Profile;