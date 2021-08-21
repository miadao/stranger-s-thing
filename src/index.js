import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,
Route,
Link,
Switch
} from 'react-router-dom';


import {
AddPost,
CreateProfile,
Delete,
Edit,
Header,
Login,
Posts,
Search,
SendMessage,
Home
} from './components';


const App =()=> {

   
    const [posts, setPosts] = useState([])
    const [authenticated, setAuthenticated] = useState(false);
    const {LoginSucess, setLoginSuccess} = useState(false);
   
   
    return <div className="app"> 

        <Router>
            <div>
                <nav>
                    <ul>
                        <li> <Link to="/">Home</Link></li>
                        <li> <Link to="/">Posts</Link></li>
                        <li> <Link to="/">Login</Link></li>
                        <li> <Link to="/">Profile</Link></li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/Posts">
                        <Posts />
                    </Route>
                    <Route path="/Login">
                        <Login 

                            authenticated={authenticated}
                            setAuthenticate={setAuthenticated}
                            LoginSucess={LoginSucess}
                            setLoginSuccess={setLoginSuccess}
                        />
                    </Route>
                    <Route path="/Profile">
                        <Profile />
                    </Route>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="*">
                        <h1>404 Error - Page Not Found!</h1>
                    </Route>
                </Switch>
            </div>
        </Router>

        
        <Header/>

        <Posts
            posts={posts}
            setPosts={setPosts}
        />

        <Search/>

        <AddPost/>

        <Delete/>

        <Edit/>

        <SendMessage/>

        <CreateProfile/>

     </div>
}

ReactDOM.render(<App/>, document.getElementById('app'));

