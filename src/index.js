import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,
Route,
Switch,
} from 'react-router-dom';


import {
AddPost,
CreateProfile,
Header,
Login,
Posts,
SendMessage,
Profile,
Edit,

} from './components';


const App =()=> {

    const [posts, setPosts] = useState([])
    const [loginSuccess, setLoginSuccess] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState(false);
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    const [willDeliver, setWillDeliver] = useState(false);
    const [description, setDescription] = useState('');
    const [messages, setMessages]= useState([]);
    const [profile, setProfile] = useState(false);
    const [token, setToken] = useState('');
    

    useEffect (() => {
        if (localStorage.getItem("token")) {
            setToken(localStorage.getItem("token"))
        }
    }, [loginSuccess])
    

    return <div className="app"> 
        <Router>
            <div>
                <Header 
                    loginSuccess={loginSuccess}
                    setLoginSuccess={setLoginSuccess}/>

                <Switch>
                    <Route exact path="/posts">

                        <Posts 
                            posts={posts}
                            setPosts={setPosts}
                            loginSuccess={loginSuccess}
                            title={title}
                            setTitle={setTitle}
                            username={username}
                            token={token}
                            messages={messages}
                            messages={setMessages}
                            />
                        
                    </Route>


                    <Route path="/addPost">

                        <AddPost
                         title={title}
                         setTitle={setTitle}
                         price={price} 
                         setPrice={setPrice} 
                         location={location}
                         setLocation={setLocation}
                         willDeliver={willDeliver}
                         setWillDeliver={setWillDeliver}
                         description={description}
                         setDescription={setDescription}
                         token={token}
                         loginSuccess={loginSuccess}
                         setLoginSuccess={setLoginSuccess}
                        />
                        
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
                         messages={messages}
                         setMessages={setMessages}
                         profile={profile}
                         setProfile={setProfile}
                         token={token}
                         setToken={setToken}/>
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

