import axios from "./axios"

export const singlePost = async (id)=>{
    try {
        const {data} = axios.get(`/${id}?api_key=b66939d4f30a0c82419ffe7f977d0768`)
        return data
    } catch (error) {
        console.log(error)
    }
}
// `posts/${id}`