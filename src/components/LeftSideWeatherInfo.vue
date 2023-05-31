<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const weatherData = computed(() => store.getters['weather/getWeatherData']);


</script>

<template>
  <div class="left__side__info__wrapper" v-if="weatherData && Object.keys(weatherData).length > 0">
    <p class="city__name">{{ weatherData.name || '' }}</p>
    <p class="temperature">{{ weatherData.main && Math.round(weatherData.main.temp - 271.15) || '' }} <span>°C</span> </p>
    <p class="condition">{{ weatherData.weather && weatherData.weather[0].description || '' }}</p>
  </div>
  <div v-else>
    Loading...
  </div>
</template>


<style scoped>
.left__side__info__wrapper{
    background-color: #1e213a;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 25px;
    height: auto;
    justify-content: center;
    margin: 130px auto auto;
    width: 100%;
}
.city__name{
    font-size: 36px;
    margin: 0;
    padding: 0;
}

p{
    color: #f5f5f5;
}

span{
    font-size: 60px;
}

.temperature{
    font-size: 100px;
    margin: 0;
    padding: 0;
}
.condition{
    color: #a09fb1;
    font-size: 26px;
    font-weight: 600;
    line-height: 42px;
}
</style>