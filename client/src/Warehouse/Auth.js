import axios from 'axios';

import router from '../router';

import { appURL } from './url';

let url = appURL;

const state = {
  token: localStorage.getItem('token') || '',
  user: {},
  status: '',
  error: null,
};
const getters = {
  // isLoggedIn: function(state){
  //     if(state.token !== ''){
  //         return true;
  //     } else {
  //         return false;
  //     }
  // }
  isLoggedIn: (state) => !!state.token,
  authState: (state) => state.status,
  user: (state) => state.user,
  error: (state) => state.error,
};

const actions = {
  // Login Action
  // eslint-disable-next-line no-unused-vars
  async login({ commit }, user) {
    commit('auth_request');
    try {
      let res = await axios.post(`${url}/api/users/login`, user);
      if (res.data.success) {
        const token = res.data.token;
        const user = res.data.user;
        // Store token into localstorage
        localStorage.setItem('token', token);
        //Set axios defauts
        axios.defaults.headers.common['Authorization'] = token;
        commit('auth_success', token, user);
      }
      return res;
    } catch (err) {
      commit('auth_error', err);
    }
  },

  // Register User
  async register({ commit }, userData) {
    try {
      commit('register_request');
      let res = await axios.post(`${url}/api/users/register`, userData);
      if (res.data.success !== undefined) {
        commit('register_success');
      }
      return res;
    } catch (err) {
      commit('register_error', err);
    }
  },

  // Get the user profile
  async getProfile({ commit }) {
    commit('profile_request');
    let res = await axios.get(`${url}/api/users/profile`);
    commit('user_profile', res.data.user);
    return res;
  },

  // Logout User
  async logout({ commit }) {
    await localStorage.removeItem('token');
    commit('logout');
    delete axios.defaults.headers.common['Authorization'];
    router.push('/login');
    return;
  },
};

const mutations = {
  auth_request(state) {
    state.error = null;
    state.status = 'loading';
  },
  auth_success(state, token, user) {
    state.token = token;
    state.user = user;
    state.status = 'success';
    state.error = null;
  },
  auth_error(state, error) {
    state.error = error.response.data.message;
  },
  register_request(state) {
    state.error = null;
    state.status = 'loading';
  },
  register_success(state) {
    state.error = null;
    state.status = 'success';
  },
  register_error(state, err) {
    state.error = err.response.data.message;
  },
  logout(state) {
    state.error = null;
    state.status = '';
    (state.token = ''), (state.user = '');
  },
  profile_request(state) {
    state.status = 'loading';
  },
  user_profile(state, user) {
    state.user = user;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
