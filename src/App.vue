<script setup>
import "./style.css";
import { useStore } from "vuex";
import SearchComponent from "./components/SearchComponent.vue";
import WeatherInformation from "./components/WeatherInformation.vue";
import Loader from "./components/Loader.vue";
import { onMounted, ref, watch } from "vue";

const lat = ref(0);
const long = ref(0);

let loader = ref(true);

const store = useStore();
const API_KEY = "84ea813c1e6a9a5900343f5854c6deb7";

const geoApi = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((currentPosition) => {
      lat.value = currentPosition.coords.latitude;
      long.value = currentPosition.coords.longitude;
    });
  } else {
    alert("Geolocation is not supported in this browser");
  }
};

const getWeather = async () => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat.value}&lon=${long.value}&appid=${API_KEY}`
  );
  const data = await res.json();
  store.dispatch("weather/setWeatherData", data);
  loader.value = false;
};

watch([lat, long], getWeather);
onMounted(() => {
  geoApi();
});
</script>

<template>
  <div class="main__wrapper" v-if="loader === false">
    <SearchComponent />
    <WeatherInformation />
  </div>
  <div v-else>
    <Loader />
  </div>
</template>

<style scoped>
.main__wrapper {
  display: flex;
}
</style>
