import { useHistory } from 'react-router-dom';

const Delete = ({token}) => {
    
    const history = useHistory() 
    const BASE_URL ='https://strangers-things.herokuapp.com/api/2105-vpi-web-pt'

    const handleDelete = () => {
        fetch(`${BASE_URL}/posts/POST_ID`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }).then(response => response.json())
        .then(result => {console.log(result)
            
        }).catch(console.error)
       
        history.push("/posts")
    }
   
    
      return (
          <form onSubmit={handleDelete}>
            <div className="Delete">
                <button type="submit">Delete</button>
            </div> 
          </form>
      )
}


export default Delete;
