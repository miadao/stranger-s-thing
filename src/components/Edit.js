const EditPost = (props) => {
    const {title, description, price, location} = props;
    const BASE_URL ='https://strangers-things.herokuapp.com/api/2105-vpi-web-pt'
    const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTIyYzk1YzgzZGUzODAwMTcxMzhjZGMiLCJ1c2VybmFtZSI6IkRhbmllbCIsImlhdCI6MTYyOTY2OTcyNH0.y4yLHm8FxL3fd9JC2FAQEK4cavHQDWn0_ct_Rwv572E"
    const POST_ID = "6122c95c83de380017138cdc"
    fetch(`${BASE_URL}/posts/${POST_ID}`, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${TOKEN}`
        },
        body: JSON.stringify({
          post: {
            title: `${title}`,
            description: `${description}`,
            price: `${price}`,
            location: `${location}`,
            willDeliver: true
          }
        })
      }).then(response => response.json())
        .then(result => {
          console.log(result);
        })
        .catch(console.error);


        return (
            <section className="EditPost"> 
                <h1>Edit Post</h1>
                
                    <div>
                        <label> Title: </label>
                        <input type="text" name={`${title}`}/>
                    </div>
    
                    <div>
                        <label> Description: </label>
                        <input type="text" name={`${description}`}/>
                    </div>
    
                    <div>
                        <label> Price: </label>
                        <input type="text" name={`${price}`}/>
                    </div>

                    <div>
                        <label> Location: </label>
                        <input type="text" name={`${location}`}/>
                    </div>

    
                    <div id="EditPostButton"> 
                    {
                        function EditPost() {
                            document.getElementById("EditPostButton").style.display="none";
                            return true;
                        }
                    }
                    <button type="click" name="event" class="button" onClick={EditPost}>Edit Post</button>
                
                    </div>
                    
                </section>
        )  
}

export default EditPost;

//TO DO
//Attach this to the post that belongs to the user
//loop over user post ID to see if post ID belongs to the user then attach it