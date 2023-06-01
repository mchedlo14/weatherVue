export default {
  namespaced: true,
  state: {
    weatherData: null,
    statusCode: null,
  },
  mutations: {
    SET_WEATHER_DATA(state, data) {
      state.weatherData = data;
    },
    SET_STATUS_CODE(state, statusCode) {
      state.statusCode = statusCode;
    },
  },
  actions: {
    setWeatherData({ commit }, data) {
      commit('SET_WEATHER_DATA', data);
    },
    setStatusCode({ commit }, statusCode) {
      commit('SET_STATUS_CODE', statusCode);
    },
  },
  getters: {
    getWeatherData: (state) => state.weatherData,
    getStatusCode: (state) => state.statusCode,
  },
};