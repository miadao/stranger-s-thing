const AddPost = () => {

    const BASE_URL ='https://strangers-things.herokuapp.com/api/2105-vpi-web-pt'
        fetch(`${BASE_URL}/posts/`, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                posts: {
                    "Title": `Title`,
                    "Description": "password",
                    "Price":"price",
                    "Location":"location",
                    "willDeliver":"true/false"
                }
            })
        }).then(res => res.json())
          .then(result => console.log(result))
          .catch(err => console.error(err));

    return (
        <section className="AddNewPosts"> 
            <h1>Add New Posts</h1>
                <form>
                    <label> Title: </label>
                    <input type="text"/>
                    <label> Description: </label>
                    <input type="text"/>
                    <label> Price: </label>
                    <input type="text"/>
                    <label> Location: </label>
                    <input type="text"/>
                    <input type="checkbox"/>
                    <label>Willing to Deliver?</label>
                </form>
                <button type="submit">Create Post</button>
            </section>
    ) 
}

export default AddPost;