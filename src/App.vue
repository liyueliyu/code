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
  <div class="btom">
    <ul>
      <li>
        <Icon
          icon="ri:netease-cloud-music-fill"
          style="color: #e72323"
          class="w-[10vw] h-[10vw]"
        />
        <span> 发现</span>
      </li>
      <li>
        <Icon
          icon="ri:netease-cloud-music-fill"
          style="color: #9195a0"
          class="w-[10vw] h-[10vw]"
        />
        <span>播客</span>
      </li>
      <li>
        <Icon
          icon="carbon:music"
          style="color: #9195a0"
          class="w-[10vw] h-[10vw]"
        />
        <span>我的</span>
      </li>
      <li>
        <Icon
          icon="ri:netease-cloud-music-fill"
          style="color: #9195a0"
          class="w-[10vw] h-[10vw]"
        />
        <span>关注</span>
      </li>
      <li>
        <Icon
          icon="ri:netease-cloud-music-fill"
          style="color: #9195a0"
          class="w-[10vw] h-[10vw]"
        />
        <span>社区</span>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { Icon } from "@iconify/vue/dist/iconify";
import HomePage from "@/views/HomePage.vue";
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
.btom {
  width: 100vw;
  height: 15vw;
}

li {
  width: 20vw;
  height: 15vw;
  line-height: 10vw;
  list-style: none;
  float: left;
}
</style>
