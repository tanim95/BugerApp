import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burgerapp-react-fe429-default-rtdb.firebaseio.com/',
});

export default instance;
