import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    images: [],
    search: null,
    searchVideo: null,
    user: "",
    video: [],

  },

  getters: {
    allImage: (state) => state.images,
    searchImage: (state) => state.search,
    searchVideo: (state) => state.searchVideo,
    allVideo: (state) => state.video,
    user:(state) => state.user
  },

  mutations: {
    GET_PHOTO(state, photo) {
      state.images = photo;
    },
    SEARCH_VIDEO(state, keyword) {
      state.searchVideo = keyword;
    },
    SEARCH_PHOTO(state, keyword) {
      state.search = keyword;
    },
    getUsername(state,username){
      state.user = username
    },
    GET_VIDEO(state, video) {
      state.video = video;
    },
    
  },

  actions: {
    async getPhoto({ commit }) {
      await axios
        .get(
          `https://api.unsplash.com/photos/?client_id=BdUWQR1k6bJH_vj0c1HLKasFt3p5vpUwpSoQGahCS90&per_page=20`
        )
        .then((response) => {
          commit("GET_PHOTO", response.data);
        });
    },

    async getSearch({ commit }, topic) {
      await axios
        .get(
          `https://api.unsplash.com/search/photos?client_id=BdUWQR1k6bJH_vj0c1HLKasFt3p5vpUwpSoQGahCS90&query=${topic}&per_page=20`
        )
        .then((response) => {
          commit("SEARCH_PHOTO", response.data);
        });
    },
    async getVideo({ commit }) {
      await axios
        .get(
          `https://pixabay.com/api/videos/?key=21144761-09d327287137151053000093b`
        )
        .then((response) => {
          commit("GET_VIDEO", response.data);
        }); 
    },
    async getSearchVideo({ commit }, topic) {
      await axios
        .get(
          `https://pixabay.com/api/videos/?key=21144761-09d327287137151053000093b&q=${topic}`
        )
        .then((response) => {
          commit("SEARCH_VIDEO", response.data);
        }); 
    },
    getUsername({ commit },username){
      commit("getUsername",username)
    }
      
    
  },

  modules: {},
});
