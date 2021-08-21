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
Header,
Login,
Posts,
Search,
SendMessage,
Home,
Profile,
Edit
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
                        <Posts 
                            posts={posts}
                            setPosts={setPosts}/>

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
                        <CreateProfile />
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


            
            <Edit/>
            <Search/>


            <SendMessage/>

        </Router>
     </div>
}

ReactDOM.render(<App/>, document.getElementById('app'));

