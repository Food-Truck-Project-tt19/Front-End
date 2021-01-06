import axios from 'axios'


const axiosWithAuth = () => {
    const token = window.localStorage.getItem('token')
    
    return axios.create({
        headers:{
            Authorization: `Bearer ${token}`
        },
        //fill out baseURL for auth
        baseURL: 'https://ccorvo-foodtruck-tracker-2021.herokuapp.com'
    })
}

export default axiosWithAuth;