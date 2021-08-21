import { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

const Login = ({setAuthenticated}) => {
    const {LoginSucess, setLoginSuccess} = useState(false);
    function authenticate(event){
        event.preventDefault();  

        //LOGIC
        //check for inputs
        //validate the username and password
        //make AJAX request to server, then server will send back response if user is authenticated 
        //if authenticated, re-directed to home page
        //if not authenicated, display the message to user's screen 
        
        console.log('Login Success!')
        setLoginSuccess(true);
        
    }

    if(LoginSucess){
        return <Redirect to="/Posts"/>
    } return (
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
                <Link className="CreateProfile" to="/CreateProfile">Don't have an account? Sign Up!</Link>
            </form>
            </section>
    )
}

export default Login;