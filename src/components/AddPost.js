import React, { useState } from 'react';
import { BASE_URL } from '../api';

const AddPost = (props) => {
        const {title, setTitle, description, setDescription, price, setPrice, location, setLocation, willDeliver, setWillDeliver} = props;

        const handleSubmit = async (event) => {
            event.preventDefault();
            try {
            const response = await fetch(`${BASE_URL}/posts`, {
                method: 'POST',
                headers:{
                    'Content-Type': 'Application/json'
                },
                body: JSON.stringify({
                    post: {
                        title,
                        description,
                        price,
                        location,
                        willDeliver
                }
                })
            })
            const post = await response.json();
            console.log("post: ", post);
            setPosts([post, ...posts]);
            setTitle('');
            setDescription('');
            setPrice('');
            setLocation('');
            setWillDeliver(false);
        } catch (err) {
            console.error(err);
        }
        };

    return (
        <section className="addNewPost"> 
            <h1>Add New Post</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="title" value={title} placeholder="Title" onChange={(event)=>setTitle(event.target.value)}/>
                    <br/>
                    <input type="text" name="description" value={description} placeholder="Description" onChange={(event)=>setDescription(event.target.value)}/>
                    <br/>
                    <input type="text" name="price" value={price} placeholder="Price" onChange={(event)=>setPrice(event.target.value)}/>
                    <br/>
                    <input type="text" name="location" value={location} placeholder="Location" onChange={(event)=>setLocation(event.target.value)}/>
                    <br/>
                    <label>
                        <input type="checkbox" name="willDeliver" value={willDeliver} onChange={(event)=>setWillDeliver(event.target.value)}/>
                        Willing to Deliver?
                    </label>
                    <br/>
                    <button type="submit">Create Post</button>                    
                </form>
        </section>
    ) 
}

export default AddPost;