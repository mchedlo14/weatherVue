<script setup>
import './style.css';
import { useStore } from "vuex";
import SearchComponent from './components/SearchComponent.vue';
import WeatherInformation from './components/WeatherInformation.vue';
import {onMounted,ref} from 'vue'

const lat = ref(0)
const long = ref(0)
const loader = ref(true)

const store = useStore();
const API_KEY = "062ac1a4a436ef122a16194ea8248d1a";

const geoApi = () => {
  if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(currentPosition => {
            lat.value = currentPosition.coords.latitude
            long.value = currentPosition.coords.longitude
          })
        }
        else {
          alert('Geolocation is not supported in this browser')
        }
}

const getWeather = async () => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`
  );
  const data = await res.json();
  store.dispatch("weather/setWeatherData", data);
  loader.value = false
}

onMounted(() => {
  geoApi()
  getWeather()
})

</script>

<template>
  <div class="main__wrapper" v-if="loader===false">
    <SearchComponent />
    <WeatherInformation/>
  </div>
  <div v-else>
    loading
  </div>
</template>

<style scoped>
.main__wrapper{
  display: flex;
}
</style>
