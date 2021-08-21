const AddPost = () => {
    return (
        <section className="AddNewPosts"> 
            <h1>Add New Posts</h1>
            
                <div>
                    <label> Title: </label>
                    <input type="text"/>
                </div>

                <div>
                    <label> Description: </label>
                    <input type="text"/>
                </div>

                <div>
                    <label> Price: </label>
                    <input type="text"/>
                </div>

                <div>
                    <label> Location: </label>
                    <input type="text"/>
                </div>

                <div>
                    <input type="checkbox"/>
                    <label>Willing to Deliver?</label>
                </div>

                <button type="submit">Create Post</button>
            </section>
    ) 
}

export default AddPost;