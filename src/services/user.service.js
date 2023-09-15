import axios from 'axios';
import authHeader from './auth-header';

const API_URL = process.env.URL + 'user/';

class UserService {

  getAllEmployeeUsers() {
    return axios.get(API_URL + 'employee', { headers: authHeader() });
  }

}

export default new UserService();