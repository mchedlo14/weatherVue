<script setup>
import { useStore } from "vuex";
import { ref } from "vue";
import LeftSideWeatherInfo from "./LeftSideWeatherInfo.vue";
import DateComponent from './DateComponent.vue'
const API_KEY = "84ea813c1e6a9a5900343f5854c6deb7";

const inputValue = ref("");
const store = useStore();
const weatherDataArray = ref([]);

const checkLocalStorage = () => {
  const savedData = localStorage.getItem("weatherDataArray");
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    const matchingData = parsedData.filter(obj => obj.name === inputValue.value.charAt(0).toUpperCase() + inputValue.value.slice(1));
    if (matchingData.length > 0) {
      store.dispatch("weather/setWeatherData", matchingData[0]);
      return true;
    }
  }
  return false;
};

const getSearchedWeather = async () => {
  if (checkLocalStorage()) {
    return;
  }

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=${API_KEY}`
  );
  const data = await res.json();
  store.dispatch("weather/setWeatherData", data);
  console.log('make a api request')
  weatherDataArray.value.push(data);

  localStorage.setItem("weatherDataArray", JSON.stringify(weatherDataArray.value));
};

</script>

<template>
  <div class="search__wrapper">
    <div class="input__wrapper">
      <input
        v-model="inputValue"
        placeholder="Type Country"
        class="search__field"
      />
      <button class="search__btn" @click="getSearchedWeather">Search</button>
    </div>
    <LeftSideWeatherInfo />
    <DateComponent />
  </div>
</template>

<style scoped>
/* CSS styles */
</style>


<style scoped>
.search__wrapper {
  width: 338px;
  height: 100vh;
  background-color: #1e213a;
  overflow: hidden;
}
.input__wrapper {
  display: flex;
  gap: 5px;
  justify-content: center;
  margin-top: 80px;
}

.search__field {
  width: 222px;
  height: 40px;
  border: 0;
  border-radius: 3px;
  box-shadow: 2px 2px 2px 2px #1e213a;
  outline: none;
  padding-left: 15px;
}
.search__btn {
  background-color: #3c47e9;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  margin-left: 10px;
  width: 86px;
  border: 0;
  border-radius: 3px;
}
.search__btn:hover {
  background-color: #1b2286;
  transition: all 0.5s;
}

@media(max-width:1070px){
    .search__wrapper {
        height: 100vmax;
    }
}

@media(max-width:760px){
  .search__wrapper{
    width: 100%;
  }
}
</style>
