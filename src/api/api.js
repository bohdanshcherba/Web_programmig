import axios from "axios"

axios.defaults.baseURL = window.location.origin

window.axios = axios

const sharesApi = {
    getAll: () => axios.get(`http://localhost:8080/coffee`),
    searchCoffee: (nameCoffee)=> axios.get(`http://localhost:8080/coffee/search`,{params:{name:nameCoffee}})
};

export default sharesApi;
