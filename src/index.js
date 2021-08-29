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
Profile
} from './components';


const App =()=> {
    const BASE_URL ='https://strangers-things.herokuapp.com/api/2105-vpi-web-pt'
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
    const [token, setToken] = useState('');
    const [messagesFromUser, setMessagesFromUser] = useState([]);
    const [messagesToUser, setMessagesToUser] = useState([]);
    

    useEffect (() => {
        if (localStorage.getItem("token") ) {
            setToken(localStorage.getItem("token"))
            setLoginSuccess(true)
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
                            setLoginSuccess={setLoginSuccess}
                            setUsername={setUsername}/>
                        
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
                         messagesFromUser={messagesFromUser}
                         setMessagesFromUser={setMessagesFromUser}
                         messagesToUser={messagesToUser}
                         setMessagesToUser={setMessagesToUser}
                         username={username}
                         setUsername={setUsername}
                         token={token}/>
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

