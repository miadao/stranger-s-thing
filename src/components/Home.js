import React, { useEffect, useState } from 'react';

import { 
    fetchData
  } from '../api';

const ViewProfile = () => {
    const forViewProfile = () => {
        console.log("Viewing Profile.")
        console.log(fetchData())
    }
    return <>
    <button className="viewProfileBtn" onClick={forViewProfile}>VIEW PROFILE</button>
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

