export const BASE_URL ='https://strangers-things.herokuapp.com/api/2105-vpi-web-pt-class/posts';

export async function fetchData() {
    try {
        const response = await fetch(BASE_URL);
        const data = await response.json();
    } catch (err) {
        console.error(err);
    }
}

// const BASE_URL ='https://strangers-things.herokuapp.com/api/2105-vpi-web-pt'
// fetch(`${BASE_URL}/users/`).then(res => res.json())
//   .then(result => console.log(result))
//   .catch(err => console.error(err));
