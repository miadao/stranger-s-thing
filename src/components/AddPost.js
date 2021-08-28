import { BASE_URL } from '../api';
import { useHistory } from 'react-router-dom';

const AddPost = ({token, title, setTitle, description, setDescription, price, setPrice, location, setLocation, willDeliver, setWillDeliver}) => {

        const history = useHistory() 

        const handleSubmit = async (event) => {
            console.log("1")
            event.preventDefault();

            try {
            const response = await fetch(`${BASE_URL}/posts`, {
                method: 'POST',
                headers:{
                    'Content-Type': 'Application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    post: {
                        title: title,
                        description: description,
                        price: price,
                        location: location,
                        willDeliver: willDeliver
                    }
                })
            })
            setTitle('');
            setDescription('');
            setPrice('');
            setLocation('');
            setWillDeliver(false);
            const post = await response.json();
            history.push("/posts")

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