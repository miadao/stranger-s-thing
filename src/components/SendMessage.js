import React, { useState } from 'react';
const SendMessage = () => {
    const [messages, setMessages] = useState([]);

    const BASE_URL ='https://strangers-things.herokuapp.com/api/2105-vpi-web-pt'
    const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTIyYzk1YzgzZGUzODAwMTcxMzhjZGMiLCJ1c2VybmFtZSI6IkRhbmllbCIsImlhdCI6MTYyOTY2OTcyNH0.y4yLHm8FxL3fd9JC2FAQEK4cavHQDWn0_ct_Rwv572E"
    
    const  SendMessages = async (event) => {
      event.preventDefault();
      const response = await fetch(`${BASE_URL}/posts/POST_ID/messages`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${TOKEN}`
        },
        body: JSON.stringify({
          message: {
              content: document.getElementById("messages")
          }
        })
      })
      const data = await response.json();
      setMessages([data])

    }
    

        return (
            <fieldset className="SendMessage"> 
                <h1>Send Message</h1>
                
                <div>
                  <label> Message: </label>
                  <input id ="messages" type="text" name={messages}/>
                </div>

                <br></br>

    
                  <div id="SendMessageButton"> 
                    <button type="click" name="event" class="button" onSubmit={SendMessages
                    
                    
                    
                    }>Send Message</button>
                  </div>
                    
              </fieldset>
        )  

    
}

export default SendMessage;

//How to send to server?
//How to get server to store this message in the other user?>