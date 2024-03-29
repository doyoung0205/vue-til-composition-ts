import Vue from "vue";
import Vuex from "vuex";
import {
  getAuthFromCookie,
  getUserFromCookie,
  saveAuthToCookie,
  saveUserToCookie
} from "@/utils/cookies";
import { LoginResponse } from "@/types/userType";
import { loginUser } from "@/api/auth.ts";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: getUserFromCookie() || "",
    token: getAuthFromCookie() || ""
  },
  getters: {
    isLogin(state) {
      return state.username !== "";
    }
  },
  mutations: {
    setUsername(state, username) {
      state.username = username;
    },
    clearUsername(state) {
      state.username = "";
    },
    setToken(state, token) {
      state.token = token;
    },
    clearToken(state) {
      state.token = "";
    }
  },
  actions: {
    async LOGIN({ commit }, userData) {
      const { data } = await loginUser(userData);
      // const { data } = await loginUser<LoginResponse>(userData);
      console.log(data.token);
      commit("setToken", data.token);
      commit("setUsername", data.user.username);
      saveAuthToCookie(data.token);
      saveUserToCookie(data.user.username);
      return data;
    }
  }
});
