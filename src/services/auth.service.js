import axios from 'axios';

const API_URL = process.env.URL + 'auth/';

class AuthService {
  login(user) {

    return axios
      .post(API_URL + 'login', {
        email: user.email,
        password: user.password
      })
      .then(response => {
        if (response.data.access_token) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    return axios.post(API_URL + 'signup', {
      name: user.name,
      email: user.email,
      password: user.password,
      role_id: user.role_id
    });
  }
}

export default new AuthService();