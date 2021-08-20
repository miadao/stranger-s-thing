export const BASE_URL ='https://strangers-things.herokuapp.com/api/2105-vpi-web-pt-class';
fetch({BASE_URL})
.then (res => res.json())
.then(result => {
    console.log(result)
})
