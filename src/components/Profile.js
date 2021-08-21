const Profile = () => {

    //need props
    //need Welcome "User" to read the username, fetch data and read off the username from data
    //need list for Message to Me, fetch the data
    //need list ofr Message from Me, fetch the data

    return (
        <div className="Profile">   

            <section className="WelcomeUser"> 
                <h1>Welcome "User"</h1>
            </section>

            <section className="MessageToMe"> 
                <h1>Message to Me: </h1>  
            </section>

            <section className="MessageFromMe">
                <h1>Message from Me: </h1>
            </section>

        </div>
    )
}

export default Profile;