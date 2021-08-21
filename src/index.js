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
Home,
Profile
} from './components';


const App =()=> {

   
    const [posts, setPosts] = useState([])
    const [authenticated, setAuthenticated] = useState(false);
    const {LoginSuccess, setLoginSuccess} = useState(false);
   
   
    return <div className="app"> 
        

        <Router>
            
            <div>
                <Header/>
                <Switch>
                    <Route path="/Posts">
                        <Posts />
                    </Route>
                    <Route path="/Login">
                        <Login 

                            authenticated={authenticated}
                            setAuthenticate={setAuthenticated}
                            LoginSuccess={LoginSuccess}
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

