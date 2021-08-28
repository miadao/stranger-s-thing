import React, { useState } from 'react';
const Delete = ({token, posts}) => {
    
    const [postID, setPostID] = useState('')
    
    const BASE_URL ='https://strangers-things.herokuapp.com/api/2105-vpi-web-pt'


    const handleDelete = async (event) => {
        event.preventDefault()
   
        const response = await fetch(`${BASE_URL}/posts/POST_ID`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
        }).then(response => response.json())
        .then(data => {
            console.log(data)
            console.log(posts)
        })
    }
 
      // const data = response.json();
      // console.log('data: ', data)
      // if (data) {
      //   const newPosts = posts.filter(post => post.id !== postIdToDelete);
      //   setPosts(newPosts);
      //   console.log("Message deleted.")
      // }

      return (
          <form type="submit">
            <div className="Delete">
                {
                    
                }
                <button onClick={handleDelete}>Delete</button>
            </div> 
          </form>
      )
}


export default Delete;
