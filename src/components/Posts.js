import { Link } from 'react-router-dom';
import React, { useEffect, Fragment } from 'react';


const Posts = (props) => {
    const {posts, setPosts} = props || {};
    const BASE_URL ='https://strangers-things.herokuapp.com/api/2105-vpi-web-pt'
    const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Int1c2VybmFtZX0iLCJwYXNzd29yZCI6IntwYXNzd29yZH0iLCJpYXQiOjE1MTYyMzkwMjJ9.uVMT_PuUroOnLowfiPo7f4jtwgtTThCr4ctRmWLGans'
    
    //FIRST ATTEMPT FAILED (IGNORE CODES BELOW)
    // useEffect (() => {
    //     const fetchPosts = async () => {
    //         const response = await fetch(`${BASE_URL}/posts`);
    //         const data = await response.json();

    //         console.log("1", data) //see the structure of the posts data
    //         console.log("2",posts)

    //         setPosts(data);
    //     }
    //     fetchPosts();
    // }, [])


    fetch(`${BASE_URL}/posts`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${TOKEN}`
        },
    }).then(response => response.json())
    .then(result => {
      console.log(result);
    })
    .catch(console.error);

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