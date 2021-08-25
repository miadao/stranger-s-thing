import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



const Posts = () => {
    const [posts, setPosts] = useState([]);

    const BASE_URL ='https://strangers-things.herokuapp.com/api/2105-vpi-web-pt'
    const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTIyYzk1YzgzZGUzODAwMTcxMzhjZGMiLCJ1c2VybmFtZSI6IkRhbmllbCIsImlhdCI6MTYyOTY2OTcyNH0.y4yLHm8FxL3fd9JC2FAQEK4cavHQDWn0_ct_Rwv572E"
    
    useEffect (() => {
        const fetchPosts = async () => {
            const response = await fetch (`${BASE_URL}/posts`, {
            method: 'GET',
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Bearer ${TOKEN}`
                }
            })  
            const data = await response.json();
            setPosts(data);
        }
        fetchPosts();
        
    }, []);
    
    console.log("posts", posts)

   
    
    return  ( <div className="Posts">
          
        <section className="AllPosts">
            <h1>Posts</h1>
            {
                posts &&  posts.length > 0 
                ? posts.map((post) => <div key={post.id}>
                        <h1>{post.description}</h1>
                        <h2>{post.price}</h2>
                        <h3>{post.seller}</h3>
                        <h4>{post.location}</h4>
                   </div>
                )
                :
                null
            } 
        </section>
          
        
        
           
        <section className="AddingPost">
            <Link to="/AddPost"><button className="AddPost">Add Post</button></Link>
        </section>  
    </div>
    )
}

export default Posts;