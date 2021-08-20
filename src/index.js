import React, {useState} from 'react';
import ReactDOM from 'react-dom';


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
ViewProfile
} from './components';


const App =()=> {

    const [user, setUser] = useState({});
    const [posts, setPosts] = useState([])
   
   
    return <div className="app"> 
        <Login
            user={user}
            setUser={setUser}
        />

        <Header
        
        />

        <Posts
            posts={posts}
            setPosts={setPosts}
        />

        <Search/>

        <AddPost/>

        <Delete/>

        <Edit/>

        <SendMessage/>

        <ViewProfile/>

        <CreateProfile
            user={user}
            setUser={setUser}
        />


   


        
        </div>
}

ReactDOM.render(<App/>, document.getElementById('app'));

