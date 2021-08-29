import { Link, Redirect } from 'react-router-dom';

const Login = ({loginSuccess, setLoginSuccess}) => {
  
   
    const BASE_URL ='https://strangers-things.herokuapp.com/api/2105-vpi-web-pt'

    
    const authenticate = (event) => {
       
        event.preventDefault();  
        fetch(`${BASE_URL}/users/login`, {
            method: "POST",
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user: {
                    "username": event.target[0].value,
                    "password": event.target[1].value
                }
            })
        })
        .then(response => response.json())
        .then(result => {
            console.log(result);
            localStorage.setItem("token", result.data.token)
            setLoginSuccess(true)
        })
        .catch(console.error);
    } 

    
   

    if (loginSuccess===true){
        return <Redirect to="/profile"/>

    } return (
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
                <Link className="CreateProfile" to="/createProfile">Don't have an account? Sign Up!</Link>
            </form>
            </section>
    )
}

export default Login;