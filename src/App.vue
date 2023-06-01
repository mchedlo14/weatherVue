<script setup>
import "./style.css";
import SearchComponent from "./components/SearchComponent.vue";
import WeatherInformation from "./components/WeatherInformation.vue";
import Loader from "./components/Loader.vue";
import { useStore } from "vuex";
import { onMounted, ref, watch } from "vue";
import { geoApi } from "./utils/geoApi";

const lat = ref(0);
const long = ref(0);
let loader = ref(true);
const store = useStore();
const API_KEY = "84ea813c1e6a9a5900343f5854c6deb7";

const getWeather = async () => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat.value}&lon=${long.value}&appid=${API_KEY}`
  );
  const data = await res.json();
  store.dispatch("weather/setStatusCode", res.status);
  store.dispatch("weather/setWeatherData", data);
  loader.value = false;
};

watch([lat, long], getWeather);

onMounted(() => {
  geoApi(lat, long);
});
</script>

<template>
  <div class="main__wrapper" v-if="!loader">
    <SearchComponent />
    <WeatherInformation />
  </div>
  <Loader v-else />
</template>

<style scoped>
.main__wrapper {
  display: flex;
}

@media (max-width: 760px) {
  .main__wrapper {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
