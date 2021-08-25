import React, {useState} from 'react';
import { BASE_URL } from '../api';

const AddPost = ({post, setPost, title, setTitle, description, setDescription, price, setPrice, location, setLocation, willDeliver, setWillDeliver}) => {

        const handleSubmit = async (event) => {
            event.preventDefault();
            const response = await fetch(`${BASE_URL}/posts`, {
                method: 'POST',
                headers:{
                    'Content-Type': 'Application/json'
                },
                body: JSON.stringify({
                    title,
                    description,
                    price,
                    location,
                    willDeliver
                })
            })
            const post = await response.json();
            console.log("post: ", post);
            setPost([post, ...post]);
            setTitle('');
            setDescription('');
            setPrice('');
            setLocation('');
            setWillDeliver(null);
        };

    return (
        <section className="AddNewPosts"> 
            <h1>Add New Posts</h1>
                <form onSubmit={handleSubmit}>
                    <label> Title: </label>
                    <input type="text" value={title} onChange={(event)=>setTitle(event.target.value)}/>
                    <label> Description: </label>
                    <input type="text" value={description}/>
                    <label> Price: </label>
                    <input type="text" value={price}/>
                    <label> Location: </label>
                    <input type="text" value={location}/>
                    <input type="checkbox" value={willDeliver}/>
                    <label>Willing to Deliver?</label>
                    <button type="submit">Create Post</button>                    
                </form>
        </section>
    ) 
}

export default AddPost;