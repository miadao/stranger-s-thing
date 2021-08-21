import { Link } from 'react-router-dom';
import React, { useEffect, useState, Fragment } from 'react';


const Posts = () => {
    const BASE_URL ='https://strangers-things.herokuapp.com/api/2105-vpi-web-pt-class'
    const [posts, setPosts] = useState([]);
  

    useEffect (() => {
        const fetchPosts = async () => {
            const response = await fetch(`${BASE_URL}/posts`);
            const data = await response.json();
            console.log("1", data) //see the structure of the posts data
            console.log(posts)
            setPosts(data);
        }
        fetchPosts();
    }, [])
    
    return  <div className="Posts">
          
        <section className="AllPosts">
            <h1>Posts</h1>
            {/* {
                posts 
                ?
                posts.map((post) => 
                    <Fragment key={post.id}>
                        <span>{post.location}</span>
                        <span>{post.willDeliver}</span>
                        <span>{post.messages}</span>
                        <span>{post.active}</span>
                </Fragment>)
                :
                null
            }   */}
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