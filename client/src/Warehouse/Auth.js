import axios from 'axios';

import router from '../router';

import { appURL } from './url';
var api_version = 'v1';

let url = appURL;

const state = {
   token: localStorage.getItem('token') || '',
   user: {},
   status: '',
   error: null,
};
const getters = {
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
         let res = await axios.post(
            `${url}/api/${api_version}/auth/login`,
            user
         );
         if (res && res.data.success) {
            const token = res.data.token;
            const user = res.data.user;
            // Store token into localstorage
            localStorage.setItem('token', token);
            //Set axios defauts
            axios.defaults.headers.common['Authorization'] = token;
            commit('auth_success', token, user);
            return res;
         }
      } catch (err) {
         commit('auth_error', err);
      }
   },

   // Register User
   async register({ commit }, userData) {
      try {
         commit('register_request');
         let res = await axios.post(
            `${url}/api/${api_version}/auth/register`,
            userData
         );
         if (res && res.data.success !== undefined) {
            commit('register_success');
            return res;
         }
      } catch (err) {
         commit('register_error', err);
         //  if (err.response.status == 422) {
         //     console.log('422');
         //     console.log(err.response.data.errors);
         //  }
         //  return err;
      }
   },

   // Get the user profile
   async getProfile({ commit, dispatch }) {
      try {
         commit('profile_request');
         let res = await axios.get(`${url}/api/${api_version}/auth/profile`);
         if (res && res.data.success !== undefined) {
            commit('user_profile', res.data.user);
            return res;
         }
      } catch (err) {
         if (err.response.status == 401) {
            dispatch('logout');
         }
      }
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
      state.error = error.response.data.errors;
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
      state.error = err.response.data.errors;
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
