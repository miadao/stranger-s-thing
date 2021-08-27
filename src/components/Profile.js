import React from 'react';
const Profile = () => {
    
    const BASE_URL ='https://strangers-things.herokuapp.com/api/2105-vpi-web-pt'
    
    
    fetch (`${BASE_URL}/users/me`, {
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        }).then(response => response.json())
        .then(result=>{console.log(result)})
        .catch(console.error)
    
       
       
    return (
        <div className="Profile">   

            <section className="WelcomeUser"> 
                <h1>Welcome: </h1>
                {
                   
                } 
            </section>

            {console.log('username')}

            <section className="MessageToMe"> 
                <h1>Message to Me: </h1>  
                {
                
                } 
            </section>

            <section className="MessageFromMe">
                <h1>Message from Me: </h1>
                {

                }
            </section>

        </div>
    )
}

export default Profile;