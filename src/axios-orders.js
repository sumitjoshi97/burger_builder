import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-97003.firebaseio.com/'
});

export default instance;