<script setup>


const date_ = new Date()
const day = date_.getDay()
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


</script>


<template>
  <div className="date__container">
    <p className="today__text">Today</p>
    <p className="today__text period">.</p>
    <p className="today__text">{{days[day]}}</p>
  </div>
</template>


<style scoped>
.date__container{
    align-items: center;
    display: flex;
    height: auto;
    justify-content: space-around;
    margin: 20px auto auto;
    width: 50%;
}
.today__text{
    color: #88869d;
    font-size: 18px;
    font-weight: 500;
}
.period{
    color: #88869d;
    font-size: 18px;
    font-weight: 500;
}
</style>
