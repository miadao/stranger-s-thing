import React, { useState }from 'react';
import { BASE_URL } from '../api';

const AddPost = () => {
        const [title, setTitle] = useState([])
        const [description, setDescription] = useState([])
        const [price, setPrice] = useState([])
        const [location, setLocation] = useState([])
        const [willDeliver, setWillDeliver] = useState([])

        const handleSubmit = async (event) => {
            event.preventDefault();
            try {
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
                    <input type="text" value={title} placeholder="Title" onChange={(event)=>setTitle(event.target.value)}/>
                    <br/>
                    <input type="text" value={description} placeholder="Description" onChange={(event)=>setDescription(event.target.value)}/>
                    <br/>
                    <input type="text" value={price} placeholder="Price" onChange={(event)=>setPrice(event.target.value)}/>
                    <br/>
                    <input type="text" value={location} placeholder="Location" onChange={(event)=>setLocation(event.target.value)}/>
                    <br/>
                    <label>
                        <input type="checkbox" value={willDeliver} onChange={(event)=>setWillDeliver(event.target.value)}/>
                        Willing to Deliver?
                    </label>
                    <br/>
                    <button type="submit">Create Post</button>                    
                </form>
        </section>
    ) 
}

export default AddPost;