const ViewProfile = () => {
    const forViewProfile = () => {
        console.log("Viewing Profile.")
    }
    return <>
    <button onClick={forViewProfile}>VIEW PROFILE</button>
    </>;
}

const Home = (/*{username}*/) => {
    let props = { username: "username from API"}; // temporary. need info stored from API.
    const {username} = props;
    return <>
    <h1>Welcome to Stranger's Things!</h1>
    <h3>Loggin in as {username}</h3>
    <ViewProfile />
            </>;
}

export default Home;

