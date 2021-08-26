import React, { useEffect, useState } from 'react';
const Profile = () => {
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



    return (
        <div className="Profile">   

            <section className="WelcomeUser"> 
                <h1>Welcome: </h1>
                {
                  
                    posts.map((post) => 
                        <div key={post.id}>
                            {post.author.username}
                        </div>   
                        
                    )
                     
                        
                } 
            </section>
            {console.log('username')}

            <section className="MessageToMe"> 
                <h1>Message to Me: </h1>  
                {
                posts &&  
                    posts.map((post) => <div key={post.id}>
                        <h3>{post.message}</h3>       
                    </div>)
                } 
            </section>

            <section className="MessageFromMe">
                <h1>Message from Me: </h1>
            </section>

        </div>
    )
}

export default Profile;