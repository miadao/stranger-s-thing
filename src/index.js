import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,
Route,
Switch
} from 'react-router-dom';


import {
AddPost,
CreateProfile,
Header,
Login,
Posts,
Search,
SendMessage,
Home,
Profile,
Edit,
Delete
} from './components';


const App =()=> {

   
    const [posts, setPosts] = useState([])
    const [authenticated, setAuthenticated] = useState(false);
    const {LoginSuccess, setLoginSuccess} = useState(false);
    const [username, setUsername] = useState(false);
    const [password, setPassword] = useState(false);
    const [ConfirmPassword, setConfirmPassword] = useState(false);
    
   
   
    return <div className="app"> 
        

        <Router>
            
            <div>
                <Header/>
                <Switch>
                    <Route exact path="/posts">
                        <Posts 
                            posts={posts}
                            setPosts={setPosts}/>

                        {/* <Edit/>
                        <Search/>
                        <Delete/>
                        <SendMessage/> */}

                    </Route>

                    <Route path="/AddPost">
                        <AddPost/>
                    </Route>

                    <Route path="/Login">
                        <Login 
                            authenticated={authenticated}
                            setAuthenticate={setAuthenticated}
                            LoginSuccess={LoginSuccess}
                            setLoginSuccess={setLoginSuccess}/>
                    </Route>

                    <Route path="/CreateProfile"> 
                        <CreateProfile 
                            username={username}
                            password={password}
                            ConfirmPassword={ConfirmPassword}
                            setUsername={setUsername}
                            setPassword={setPassword}
                            setConfirmPassword={setConfirmPassword}

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
     </div>
}

ReactDOM.render(<App/>, document.getElementById('app'));

