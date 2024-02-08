import axios from 'axios';
const Axios = axios.create({
  baseURL: 'http://localhost:4444/api/v1',
});
export default Axios