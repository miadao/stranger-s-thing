const CreateProfile = () => {
    return (
        <section className="CreateProfile"> 
            <h1>Create Your Profile</h1>
            
                <div>
                    <label> Choose Username: </label>
                    <input type="text"/>
                </div>

                <div>
                    <label> Choose Password: </label>
                    <input type="text"/>
                </div>

                <div>
                    <label> Confirm Password: </label>
                    <input type="text"/>
                </div>

                <button type="submit">Create Profile</button>
            </section>
    )  
}

export default CreateProfile;
