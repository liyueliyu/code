<template>
  <div>
    <Icon
      icon="mingcute:align-justify-line"
      style="color: black"
      class="ml-[3vw] mt-[2vw]"
    />

    <input type="text" placeholder="" />
    <Icon
      icon="mdi:search"
      style="color: black"
      class="absolute top-[3%] left-[11%]"
    />
    <Icon
      icon="teenyicons:scan-outline"
      style="color: black"
      class="absolute top-[3%] left-[85%]"
    />
  </div>
  <HomePage></HomePage>
  <TabBer></TabBer>
</template>
<script setup>
import { Icon } from "@iconify/vue/dist/iconify";
import HomePage from "@/views/HomePage.vue";
import TabBer from "@/views/TabBer.vue";
</script>
<style scoped>
input {
  position: absolute;
  width: 85vw;
  height: 7vw;
  border: 1px solid rgb(180, 177, 177);
  border-radius: 20px;
  top: 0%;
  left: 9%;
  margin-top: 4px;
}
</style>
