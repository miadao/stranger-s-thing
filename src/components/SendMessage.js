import React, { useState } from 'react';
import { BASE_URL } from '../api';

const SendMessage = (props) => {
  const [inputMess, setInputMess] = useState('');
  const {messages, setMessages, token, postID} = props;
// console.log(postID);
// console.log(token);
    const  SendMessages = async (event) => {

      event.preventDefault();      
      try {
      const response = await fetch(`${BASE_URL}/posts/${postID}/messages`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          message: {
              content: inputMess
          }
        })
      })
      const data = await response.json();
      setInputMess('');
      } catch (error) {
        console.error(error);
      }
    }

        return (
            <fieldset className="SendMessage"> 
              <h1>Send Message</h1>
                
              <form onSubmit={SendMessages}>
                <label> Message: </label>
                <input 
                id ="messages" 
                type="text" 
                name="messages" 
                value={inputMess}
                onChange={(event)=>setInputMess(event.target.value)} />
                <br/>

                <button id="SendMessageButton" type="submit" name="event">Send Message</button>
              </form>
            </fieldset>
        )  

    
}

export default SendMessage;