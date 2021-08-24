const SendMessage = (props) => {
    const {message} = props;

    const BASE_URL ='https://strangers-things.herokuapp.com/api/2105-vpi-web-pt'
    const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTIyYzk1YzgzZGUzODAwMTcxMzhjZGMiLCJ1c2VybmFtZSI6IkRhbmllbCIsImlhdCI6MTYyOTY2OTcyNH0.y4yLHm8FxL3fd9JC2FAQEK4cavHQDWn0_ct_Rwv572E"
    const POST_ID = "6122c95c83de380017138cdc"
    fetch(`${BASE_URL}/posts/${POST_ID}/messages`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${TOKEN}`
        },
        body: JSON.stringify({
          message: {
              content: `${message}`
          }
        })
      }).then(response => response.json())
        .then(result => {
          console.log(result);
        })
        .catch(console.error);


        return (
            <section className="SendMessage"> 
                <h1>Send Message</h1>
                
                    <div>
                        <label> Message: </label>
                        <input type="text" name={`${message}`}/>
                    </div>
    
                    <div id="SendMessageButton"> 
                    {
                        function SendMessage() {
                            document.getElementById("SendMessageButton").style.display="none";
                            return true;
                        }
                    }
                    <button type="click" name="event" class="button" onClick={SendMessage}>Edit Post</button>
                
                    </div>
                    
                </section>
        )  

    
}

export default SendMessage;

//How to send to server?
//How to get server to store this message in the other user?>