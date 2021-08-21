import { Link } from 'react-router-dom';

const Posts = () => {
    

    return (
        <div className="Posts">
          
            <section>
                <h1>Posts</h1>
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
            
    )
}

export default Posts;