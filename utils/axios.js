import axios from "axios";

const data = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
})

export default data