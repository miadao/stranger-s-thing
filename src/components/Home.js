import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { 
    fetchData
  } from '../api';

const ViewProfile = () => {
    const forViewProfile = () => {
        console.log("Viewing Profile.")
    }
    return <>
     <Link to="/Profile"><button className="viewProfileBtn" onClick={forViewProfile}>VIEW PROFILE</button> </Link>
    </>;
}

const Home = (/*{username}*/) => {
    let props = { username: "username from API"}; // temporary. need info stored from API.
    const {username} = props;
    return <>
    <h1>Welcome to Stranger's Things!</h1>
    <h3>Logged in as {username}</h3>
    <ViewProfile />
            </>;
}

export default Home;

