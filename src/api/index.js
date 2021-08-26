// export const BASE_URL ='https://strangers-things.herokuapp.com/api/2105-vpi-web-pt';

// export async function fetchData() {
//     try {
//         const response = await fetch(BASE_URL);
//         const data = await response.json();
//         console.log(data);
//     } catch (err) {
//         console.error(err);
//     }
// }
// fetchData();

// export async function fetchSearchResults({
//     title, 
//     location, 
//     title, 
//     price,
// }) {
//     const url = `${BASE_URL}/posts`
//     try {
//         const response = await fetch(url);
//         const data = await response.json();

//         return data;
//     }catch (error){
//         throw error;
//     }
// }