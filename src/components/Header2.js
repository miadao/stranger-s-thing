import { Link} from 'react-router-dom';


const Header2 = () => {

    const logOut = () => {
        localStorage.removeItem("token")
    }
    
    return (
        <div className="header2">
            <section className="title2"> 
                <h1> Stranger's Things </h1>
            </section>
            
            <section className="links2"> 
                <nav>
                    <ul>
                        <li> <Link to="/posts">Posts</Link></li>
                        <li> <Link to="/login" onClick={logOut}>Logout</Link></li>
                        <li> <Link to="/profile">Profile</Link></li>
                    </ul>
                </nav>
            </section>
        </div>
    )
}

export default Header2;