<script setup>
import warningImage from "../assets/warning.png";
</script>

<template>
  <div class="error__container">
    <img :src="warningImage" alt="image" />
    <p class="error__text">Something went wrong! Please type another Country</p>
  </div>
</template>
<style scoped>
.error__container{
  width: calc(100% - 338px);
  height: 100vh;
  background-color: #100e1d;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
}
img{
  widows: 200px;
  height: 200px;
}
.error__text{
  color: whitesmoke;
  font-size: 30px;
}
@media(max-width:1070px){
    .error__container{
        height: 100vmax;
        justify-content: flex-start;
        padding-top: 80px;
    }
    p{
        font-size: 25px;
        text-align: center;
    }
}

@media(max-width:760px){
  .error__container{
    width: 100%;
  }
  .error__text{
    text-align: center;
  }
}
</style>
