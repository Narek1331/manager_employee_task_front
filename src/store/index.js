import Vue from 'vue'
import Vuex from "vuex";
import AuthService from '../services/auth.service'; 
import TaskService from "../services/task.service";
import UserService from "../services/user.service";
// import axios from "axios";
// import router from '../router'
// import VueAxios from "vue-axios";
Vue.use(Vuex);

const user = JSON.parse(localStorage.getItem('user'));

// const initialState = user
//   ? { status: { loggedIn: true }, user }
//   : { status: { loggedIn: false }, user: null };

export default new Vuex.Store({
  state: { 
    status, 
    user,
    all_tasks:[], 
    employee_users:[] 
  },
  getters:{
    getAllTasks(state){
      return state.all_tasks
    },
    getAllEmployeeUsers(state){
      return state.employee_users
    }
  },
  actions: {
    login({ commit }, user) {

      return AuthService.login(user)
      .then(
        user => {
          return Promise.resolve(user);
        },
        error => {
          return Promise.reject(error);
        }
      );
    },
    logout({ commit }) {
      AuthService.logout();
      commit('logout');
    },
    register({ commit }, user) {
      return AuthService.register(user).then(
        response => {
          return Promise.resolve(response.data);
        },
        error => {
          return Promise.reject(error);
        }
      );
    },
    getAllTasks({ commit },user){
      return TaskService.getAllTasks(user).then(
        response => {
          commit('setAllTask', response.data.datas)

          return Promise.resolve(response.data);
        },
        error => {
          return Promise.reject(error);
        }
      );
    },
    getAllEmployeeUsers({ commit },user){
      return UserService.getAllEmployeeUsers(user).then(
        response => {
          commit('setEmployees', response.data.datas)

          return Promise.resolve(response.data);
        },
        error => {
          return Promise.reject(error);
        }
      );
    },
    storeTask({ commit },task){
      return TaskService.storeTask(task).then(
        response => {
          return Promise.resolve(response.data);
        },
        error => {
          return Promise.reject(error);
        }
      );
    },
    changeTaskStatus({ commit },task){
      return TaskService.changeTaskStatus(task).then(
        response => {
          return Promise.resolve(response.data);
        },
        error => {
          return Promise.reject(error);
        }
      );
    }
  },
  mutations: {
    setAllTask(state, data) {
      state.all_tasks = data
    },
    setEmployees(state, data) {
      state.employee_users = data
    },
  }
})