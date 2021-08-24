import { Link } from 'react-router-dom';
import React, { useEffect, Fragment } from 'react';


const Posts = (props) => {
    const {posts, setPosts} = props || {};
    const BASE_URL ='https://strangers-things.herokuapp.com/api/2105-vpi-web-pt'
    const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTIyYzk1YzgzZGUzODAwMTcxMzhjZGMiLCJ1c2VybmFtZSI6IkRhbmllbCIsImlhdCI6MTYyOTY2OTcyNH0.y4yLHm8FxL3fd9JC2FAQEK4cavHQDWn0_ct_Rwv572E"
    fetch(`${BASE_URL}/posts`, {
        method: 'GET',
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${TOKEN}`
        },
       
    }).then(res => res.json())
      .then(result => console.log('ME ENDPOINT', result))
      .catch(err => console.error('ME ENDPOINT', err));

      setPosts(posts) //check

    console.log("2",posts)
    
    return  <div className="Posts">
          
        <section className="AllPosts">
            <h1>Posts</h1>
            {
                posts && posts.map((post) => 
                    <Fragment key={post.id}>
                        <span>{post.description}</span>
                        <span>{post.price}</span>
                        <span>{post.seller}</span>
                        <span>{post.location}</span>
                    </Fragment>)
            }  
        </section>
        
        {/* TO DO */}
        {/* Need to check the looping to see if this is correct. 
        Want to loop over each post to see if each post belongs to the user and render it to the post page */}
            
            
        <section> 
            <label>Search: </label>
            <input type="text"></input>
            <button type="submit">Search</button>

                {/* TO DO LIST*/}
                {/* need onclick function, then read the data and list the posts upon user clicking, use Search component
                , 
                then add delete, edit and send message buttons to each of the post. after fetching the post list
                from the server,
                
                then have each button do what it needs to do. We have components for Search, Edit and Send Message
                
                Delete is just a button that wipes the data. Don't need this as a component?*/}

        </section>
           
        <section>
            <Link to="/AddPost"><button className="AddPost">Add Post</button></Link>
        </section>  
    </div>
}

export default Posts;