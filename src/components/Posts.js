import React, { useState } from 'react';
import { Link }from 'react-router-dom';
import SendMessage from './SendMessage';
import Delete from './Delete';
import Edit from './Edit';

const Posts = ({username, posts, setPosts}) => {
  
    const [filter, setFilter] = useState('')
   
   
    const BASE_URL ='https://strangers-things.herokuapp.com/api/2105-vpi-web-pt'
    

       fetch (`${BASE_URL}/posts`)
          .then(response=> response.json())
          .then(data => {
            setPosts(data.data.posts)})
    
    const filterPost = (post, text) => {
      if (post.title.toLowerCase().includes(text.toLowerCase())){
        return true
      }
    }

    const filteredPosts = posts.filter (post => filterPost(post, filter))
    const postToDisplay = filter.length > 0 ? filteredPosts : posts; 

    return  ( <div className="Posts">

          <h1> Posts</h1>

          <h2> 
            <input 
              id="filter"
              type="text"
              placeholder="search by title..."
              value= {filter}
              onChange={(event) => setFilter(event.target.value)}
              > 
            </input> 
            <button type="click" onClick={filterPost}>Filter Posts</button>
          </h2>

          <h3><Link to="/addpost"> <button> Add Posts</button></Link></h3> 

            {
              posts &&  
              postToDisplay.map((post) => <div key={post.id} >
                
                <section className="AllPosts">
                    <h1> Title: {post.title} </h1>
                    <h2> Description: {post.description}</h2>
                    <h3> Price: {post.price}</h3>
                    <h4> User: {post.author.username}</h4>
                    <h5> Location: {post.location}</h5>
                    <h6> Deliver: {post.willDeliver ? "Yes" : "No"}</h6>
                   
                     {post.author.username === username ? <Delete/>: <SendMessage/>}  
                     {post.author.username === username ? <Edit/>: null}  
                    
                      
                </section>
              </div>)

            }
   
    </div>
    )
  
}


export default Posts;