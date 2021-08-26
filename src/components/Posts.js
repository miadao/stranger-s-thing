import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Edit } from '.';
import SendMessage from './SendMessage';
import { handleDelete } from '../api';

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
            setPosts(data.data.posts);
        }
        fetchPosts();
        
    }, []);
    
    console.log("posts", posts)

    async function handleDelete (postIdToDelete) {
        try {
          console.log('postIdToDelete: ', postIdToDelete)
          const response = await fetch(`${BASE_URL}/posts/${postIdToDelete}`, {
            method: "DELETE",
          })
          const data = await response.json();
          console.log('data: ', data)
          if (data) {
            const newPosts = posts.filter(post => post.id !== postIdToDelete);
            setPosts(newPosts);
            console.log("Message deleted.")
          }
        } catch (err) {
          console.error(err);
        }
      }
    
    return  ( <div className="Posts">
          
       
            <h1>Posts</h1>
            <h2><Link to="/addpost"> <button> Add Posts</button></Link></h2>
            {
                posts &&  
                 posts.map((post) => <div key={post.id} >
                    <section className="AllPosts">
                        <h1>{post.title} </h1>
                        <h2>{post.description}</h2>
                        <h3>{post.price}</h3>
                        <h4>{post.author.username}</h4>
                        <h5>{post.location}</h5>
                        <br></br>
                        <h6>{post.isAuthor === false ? 
                            <SendMessage/> 
                            : 
                            null}
                        </h6>   
                        <h7>{post.isAuthor === true  ? 
                            <Edit/>
                            : 
                            null}
                        </h7>  
                        <h8>{post.isAuthor === true ? 
                            <button type="click" name="event" class="button" onClick={handleDelete(post.id)}>Delete Post</button>
                            : 
                            null}
                        </h8>  
                    </section>
                </div>)
            } 
    </div>
    )
}


export default Posts;