import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,
Link,
Route
}from 'react-router-dom';

const App =()=> {
    <h1> We did something today 
        <div>Dan added this.</div>
    </h1>
    return (
        <Router>
        </Router>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));

