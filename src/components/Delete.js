const DeletePost = () => {
    const BASE_URL ='https://strangers-things.herokuapp.com/api/2105-vpi-web-pt'
    const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTIyYzk1YzgzZGUzODAwMTcxMzhjZGMiLCJ1c2VybmFtZSI6IkRhbmllbCIsImlhdCI6MTYyOTY2OTcyNH0.y4yLHm8FxL3fd9JC2FAQEK4cavHQDWn0_ct_Rwv572E"
    
    fetch(`${BASE_URL}/posts/POST_ID`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${TOKEN}`
        }
        
      }).then(response => response.json())
        .then(result => {
          console.log(result);
        })
        .catch(console.error);


        return (
            <section className="DeletePost"> 
                <h1>DeletePost</h1>
    
                    <div id="DeleteButton"> 
                    {
                        function DeletePost() {
                            document.getElementById("DeleteButton").style.display="none";
                            return true;
                        }
                    }
                    <button type="click" name="event" class="button" onClick={DeletePost}>Edit Post</button>
                
                    </div>
                    
                </section>
        )  
}

export default DeletePost;

//TO DO
//Attach this to the post that belongs to the user
//loop over user post ID to see if post ID belongs to the user then attach it