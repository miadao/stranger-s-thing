export const BASE_URL ='https://strangers-things.herokuapp.com/api/2105-vpi-web-pt-class/posts';

export async function fetchData() {
    try {
        const response = await fetch({BASE_URL});
        const data = response.json();
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}
