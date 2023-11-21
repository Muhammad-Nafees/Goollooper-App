import axios from "axios"
import { host_url, register_endpoint } from ".."



const apiInstance = axios.create({
    baseURL: host_url + register_endpoint
})

export const register = async () => {

    const register_response = await apiInstance.get(host_url + register_endpoint)
    return register_response

}
