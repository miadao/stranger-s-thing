import { Link } from 'react-router-dom';
    
const Header = ({loginSuccess, setLoginSuccess}) => {
   
    const logOut = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("username")
        setLoginSuccess(false)
    }

    return (
        <div className="header">
            <section className="title"> 
                <h1> Stranger's Things </h1>
            </section>
            
            <section className="links"> 
                <nav>
                    <ul>
                        <li> <Link to="/posts">Posts</Link> </li>
                        <li> { !loginSuccess ? <Link to="/login">Login</Link> : <Link to="/login" onClick={logOut} >Logout</Link>} </li>
                        {/* <li> <Link to="/logout">Logout1</Link> </li> */}
                        <li> { loginSuccess && <Link to="/profile">Profile</Link>}</li>
                        
                    </ul>
                </nav>
            </section>
        </div>
       
    )
}

export default Header;

