import axios from 'axios';

//Step 1c: Build a `axiosWithAuth` module to create an instance of axios with the authentication header

export const axiosWithAuth = () => {
    const token = localStorage.getItem("token")
    return axios.create({
        baseURL: "http://localhost:5000",
        headers: {
            Authorization: token
        }
    });
};

export default axiosWithAuth;