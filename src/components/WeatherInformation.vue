<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const weatherData = computed(() => store.getters["weather/getWeatherData"]);
</script>

<template>
  <div class="weather__information__wrapper" v-if="weatherData && Object.keys(weatherData).length > 0">
    <div class="detail__box">
      <p class="higlights__text">Today's Highlights</p>
      <div class="higlights__box">
        <div class="box">
          <p class="title">Wind Status</p>
          <p class="text">{{ weatherData.wind?.speed }} mph</p>
        </div>
        <div class="box">
          <p class="title">humidity</p>
          <p class="text">{{ weatherData.main?.humidity }}%</p>
        </div>
      </div>
      <div class="higlights__box">
        <div class="box">
          <p class="title">Visibility</p>
          <p class="text">{{ (weatherData.visibility / 1000)?.toFixed(1) }} miles</p>
        </div>
        <div class="box">
          <p class="title">Air Pressure</p>
          <p class="text">{{ weatherData.main?.pressure }} mb</p>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    Loading...
  </div>
</template>

<style scoped>
.weather__information__wrapper {
  width: calc(100% - 338px);
  height: 100vh;
  background-color: #100e1d;
  display: flex;
  justify-content: center;
  align-items: center;
}
.title {
  color: #e7e7eb;
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
}
.text {
  color: #e7e7eb;
  font-size: 60px;
  font-weight: 700;
  line-height: 75px;
  margin: 0;
}

.box {
  width: 328px;
  height: 204px;
  background-color: #1e213a;

  align-items: center;
  background-color: #1e213a;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 328px;
}
.detail__box {
  height: auto;
  max-width: 700px;
  width: 90%;
}

.higlights__text {
  color: #e7e7eb;
  font-weight: 700;
  margin: 0;
  padding: 0;
}

.higlights__box {
  display: flex;
  height: auto;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
}

@media(max-width:1070px){
    .higlights__box{
        flex-direction: column  ;
        gap: 20px;
        justify-content: center;
        align-items: center;
    }
    .weather__information__wrapper {
        height: auto;
    }
    .higlights__text {
        text-align: center;
        padding-top: 30px;
    }
}
</style>
