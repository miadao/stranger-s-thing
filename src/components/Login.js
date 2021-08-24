import { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

const Login = ({setAuthenticated, username, password}) => {
   
    const {LoginSuccess, setLoginSuccess} = useState(false);
   
    function authenticate(event){
        event.preventDefault();  

        //LOGIC
        //check for inputs
        //validate the username and password
        

        //make AJAX request to server, then server will send back response if user is authenticated 
        const BASE_URL ='https://strangers-things.herokuapp.com/api/2105-vpi-web-pt'
        fetch(`${BASE_URL}/users/login`, {
            method: "POST",
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user: {
                    username: `${username}`,
                    password: `${password}`
                }
            })
        }).then(response => response.json())
            .then(result => {
            console.log(result);
            })
            .catch(console.error);

        //write setAuthenticated Function
        //if authenticated, re-directed to home page
        //if not authenicated, display the message to user's screen 
        
        console.log('Login Success!')
        setLoginSuccess(true);
        
    }

    if(LoginSuccess){
        return <Redirect to="/Posts"/>

    }return (
        <section className="login"> 
            <h1>Login</h1>
            <form onSubmit={authenticate}>
                <div>
                    <label>Username: </label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text"/>
                </div>
                <button type="submit">Login</button>
                
                {/* Logic goes here if username and password match database, Login to prompt the user's 
                screen that reads "Login Successfully" */}


                <Link className="CreateProfile" to="/CreateProfile">Don't have an account? Sign Up!</Link>
            </form>
            </section>
    )
}

export default Login;