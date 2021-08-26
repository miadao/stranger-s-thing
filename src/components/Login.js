import { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

const Login = ({username, password}) => {
   
    const [LoginSuccess, setLoginSuccess] = useState(false);
    
    const BASE_URL ='https://strangers-things.herokuapp.com/api/2105-vpi-web-pt'


    const authenticate = (event) => {
        event.preventDefault();  
        //LOGIC
        //check for inputs
        //validate the username and password
        //make AJAX request to server, then server will send back response if user is authenticated 
        
        fetch(`${BASE_URL}/users/login`, {
            method: "POST",
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user: {
                    "username": username,
                    "password": password
                }
            })
        }).then(response => response.json())
            .then(result => {
            console.log(result);
            })
            .catch(console.error);
        console.log('Login Success!')
        setLoginSuccess(true);
        
    }

    if(LoginSuccess){
        return <Redirect to="/profile"/>

    }return (
        <section className="login"> 
            <h1>Login</h1>
            <form onSubmit={authenticate}
            >
                <div>
                    <label>Username: </label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text"/>
                </div>
                <button type="submit">Login</button>
                <Link className="CreateProfile" to="/CreateProfile">Don't have an account? Sign Up!</Link>
            </form>
            </section>
    )
}

export default Login;