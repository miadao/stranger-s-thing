//THIS IS BONUS

const Edit = (props) => {
    const {title, setTitle, description, setDescription, price, setPrice, location, setLocation} = props;
    const BASE_URL ='https://strangers-things.herokuapp.com/api/2105-vpi-web-pt'
    const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTIyYzk1YzgzZGUzODAwMTcxMzhjZGMiLCJ1c2VybmFtZSI6IkRhbmllbCIsImlhdCI6MTYyOTY2OTcyNH0.y4yLHm8FxL3fd9JC2FAQEK4cavHQDWn0_ct_Rwv572E"

  async function editPost() {
    try {
      const response = await fetch(`${BASE_URL}/posts/${id}`, {
          method: "PATCH",
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({
            post: {
              title: title,
              description: description,
              price: price,
              location: location,
              willDeliver: true
            }
          })
        })
        const data = response.json()
        console.log(data);
        if (localStorage.getItem("token")) {
          const newPosts = posts.map(post => {
            
          })
        }
        } catch (err) {
          console.error(err);
        }
      }
          return (<div className="EditPost"> 
                  <h1>Edit Post</h1>
                  <form onSubmit={editPost}>
                    <label> Title: </label>
                    <input 
                    type="text" 
                    name="title" 
                    value={title} 
                    placeholder={title} 
                    onChange={(event)=>setTitle(event.target.value)}/>

                    <label> Description: </label>
                    <input 
                    type="text" 
                    name="description" 
                    value={description} 
                    placeholder={description} 
                    onChange={(event)=>setDescription(event.target.value)}/>

                    <label> Price: </label>
                    <input 
                    type="text" 
                    name="price" 
                    value={price} 
                    placeholder={price} 
                    onChange={(event)=>setPrice(event.target.value)}/>

                    <label> Location: </label>
                    <input 
                    type="text" 
                    name="location" 
                    value={location} 
                    placeholder={location} 
                    onChange={(event)=>setLocation(event.target.value)}/>

                    <button id="EditPostButton" type="submit" name="event">Edit Post</button>
                  </form>
                </div>
          )  
  }

export default Edit;