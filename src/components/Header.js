import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <section className="title"> 
                <h1> Stranger's Things </h1>
            </section>
            
            <section className="links"> 
                <nav>
                    <ul>
                        <li> <Link to="/">Home</Link></li>
                        <li> <Link to="/posts">Posts</Link></li>
                        <li> <Link to="/login">Login</Link></li>
                        <li> <Link to="/profile">Profile</Link></li>
                    </ul>
                </nav>
            </section>
        </div>
    )
}

export default Header;