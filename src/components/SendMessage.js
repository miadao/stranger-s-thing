import React, { useState } from 'react';
import { BASE_URL } from '../api';

const SendMessage = ({messages, setMessages, token}) => {

    const BASE_URL ='https://strangers-things.herokuapp.com/api/2105-vpi-web-pt'
    
    const  SendMessages = async (event) => {
      try {
      event.preventDefault();
      const response = await fetch(`${BASE_URL}/posts/POST_ID/messages`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          message: {
              content: messages
          }
        })
      })
      const data = await response.json();
      setMessages([])
      } catch (error) {
        console.error(error);
      }
    }
    

        return (
            <fieldset className="SendMessage"> 
<<<<<<< HEAD
                
                
                <div>
                  <label> Send Message: </label>
                  <input id ="messages" type="text" name={messages}/>
                </div>

                <br></br>

    
                  <div id="SendMessageButton"> 
                    <button type="click" name="event" class="button" onSubmit={SendMessages
                    
                    
                    
                    }>Send Message</button>
                  </div>
                    
              </fieldset>
=======
              <h1>Send Message</h1>
                
              <form onSubmit={SendMessages}>
                <label> Message: </label>
                <input 
                id ="messages" 
                type="text" 
                name="messages" 
                value={messages}
                onChange={(event)=>setMessages(event.target.value)} />
                <br/>

                <button id="SendMessageButton" type="submit" name="event">Send Message</button>
              </form>
            </fieldset>
>>>>>>> 15363adeb4318a69e7bfc3bcc7ee4f9008922fb1
        )  

    
}

export default SendMessage;

//How to send to server?
//How to get server to store this message in the other user?>