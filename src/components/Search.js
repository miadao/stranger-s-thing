import React, { useEffect, useState } from 'react';
import fetchSearchResults from '../api';

const Search = (props) => {
    const [posts, setPosts] = useState([]);
    const [setIsLoading, setSearchResults] = useState([]);
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');

    const BASE_URL ='https://strangers-things.herokuapp.com/api/2105-vpi-web-pt'

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch (`${BASE_URL}/posts`)
            const data = await response.json()
            setPosts(data)
        }
        fetchPosts();

    }, []);

    return <form id="search" onSubmit={async (event) => {
        event.preventDefault()
        setIsLoading(true)

        try{
            const results = await fetchPosts({title, price, location})
            setSearchResults(results)
            }catch(error){
                console.error(error)
            }finally{
                setIsLoading(false)
            }
        }
    }>


    <fieldset>
        <label htmlFor="post"> Search Post</label>
        <input 
            id="searchPost"
            type="text"
            placeholder="enter keywords..."
            value= {title, price, location}
            onChange={(event)  => 
                (fetchPosts() ===
                setTitle(event.target.value))}

            onChange={(event)  => 
                (fetchPosts() ===
                setPrice(event.target.value))}

            onChange={(event)  => 
                (fetchPosts() ===
                setLocation(event.target.value))}
            />
        <button> Search </button>

    </fieldset>





    </form>
    

   

}

export default Search;