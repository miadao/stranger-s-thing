const Delete = ({token, key}) => {
    const BASE_URL ='https://strangers-things.herokuapp.com/api/2105-vpi-web-pt'
    const handleDelete = (event) => {
        event.preventDefault()
        fetch(`${BASE_URL}/posts/${key}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }).then(response => response.json())
        .then(result => {console.log(result)
            
        }).catch(console.error)
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
