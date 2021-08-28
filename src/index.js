import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,
Route,
Switch,
Redirect
} from 'react-router-dom';


import {
AddPost,
CreateProfile,
Header,
Login,
Posts,
Search,
SendMessage,
Profile,
Edit,
} from './components';


const App =()=> {

    const [posts, setPosts] = useState([])
    const [loginSuccess, setLoginSuccess] = useState(false);
    const [username, setUsername] = useState(false);
    const [password, setPassword] = useState(false);
    const [ConfirmPassword, setConfirmPassword] = useState(false);
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    const [willDeliver, setWillDeliver] = useState(false);
    const [description, setDescription] = useState('');
    const [message, setMessage]= useState([])
    const [profile, setProfile] = useState([])
    const [token, setToken] = useState('')

    useEffect (() => {
        console.log("useEffect")
        if (localStorage.getItem("token")) {
            setToken(localStorage.getItem("token"))
        }
    }, [loginSuccess])
    console.log("token", token)
    console.log("JSX")

    return <div className="app"> 
        
        <Router>
            
            <div>
                <Header 
                    loginSuccess={loginSuccess}/>

                <Switch>
                    <Route exact path="/posts">

                        <Posts 
                            posts={posts}
                            setPosts={setPosts}
                            loginSuccess={loginSuccess}/>
                        
                    </Route>

                    <Route path="/edit">

                        <Edit                             
                        posts={posts}
                        setPosts={setPosts}/>
                       
                    </Route>
                        

                    <Route path="/search">

                        <Search/>
                         
                    </Route>
                        

                    <Route path="sendmessage">

                        <SendMessage/>
                        
                    </Route>
                        

                    <Route path="/addPost">

                        <AddPost/>
                        
                    </Route>
                   
                    <Route path="/login">

                        <Login 
                            loginSuccess={loginSuccess}
                            setLoginSuccess={setLoginSuccess}/>
                        
                    </Route>

                    <Route path="/createProfile"> 
                        <CreateProfile 
                            username={username}
                            password={password}
                            ConfirmPassword={ConfirmPassword}
                            setUsername={setUsername}
                            setPassword={setPassword}
                            setConfirmPassword={setConfirmPassword}/>  
                    </Route>


                    <Route path="/profile">
                        <Profile 
                         username={username}
                         setUsername={setUsername}
                         message={message}
                         setMessage={setMessage}
                         profile={profile}
                         setProfile={setProfile}/>
                    </Route>

                    <Route path="/logout">
                        <Redirect to="/login"/>
                        
                    </Route>

                   <Route path="/">
                        <Login
                        loginSuccess={loginSuccess}
                        setLoginSuccess={setLoginSuccess}/>
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

