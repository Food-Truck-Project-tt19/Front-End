import axios from 'axios';

const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
    return axios.create({
        header:{ authorization: token },
        baseURL: 'https://localhost'
    });
};

export default axiosWithAuth;