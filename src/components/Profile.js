import React from 'react';
const Profile = () => {
    
    const BASE_URL ='https://strangers-things.herokuapp.com/api/2105-vpi-web-pt'
    const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTIyYzk1YzgzZGUzODAwMTcxMzhjZGMiLCJ1c2VybmFtZSI6IkRhbmllbCIsImlhdCI6MTYyOTY2OTcyNH0.y4yLHm8FxL3fd9JC2FAQEK4cavHQDWn0_ct_Rwv572E"

    
    fetch (`${BASE_URL}/users/me`, {
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${TOKEN}`
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