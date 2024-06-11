/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'

export default {
    findAllUser: () => {
        return axios.get("https://deploy-tino-perfume.vercel.app/users")
    },
    createUser: (newUser) => {
        return axios.post("https://deploy-tino-perfume.vercel.app/users", newUser)
    },
    deleteUser: (id) => {
        return axios.delete(`https://deploy-tino-perfume.vercel.app/users/${id}`)
    }
}