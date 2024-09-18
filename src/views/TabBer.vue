<template>
  <nav class="bottom-nav">
    <ul>
      <li>
        <Icon
          icon="ri:netease-cloud-music-fill"
          style="color: #e72323"
          class="w-[10vw] h-[10vw] ml-[5vw]"
        />
        <span> <a href="#">发现</a></span>
      </li>
      <li>
        <Icon
          icon="ri:netease-cloud-music-fill"
          style="color: #9195a0"
          class="w-[10vw] h-[10vw] ml-[5vw]"
        />
        <span><a href="#">播客</a></span>
      </li>
      <li>
        <Icon
          icon="carbon:music"
          style="color: #9195a0"
          class="w-[10vw] h-[10vw] ml-[5vw]"
        />
        <span><a href="#">我的</a></span>
      </li>
      <li>
        <Icon
          icon="ri:netease-cloud-music-fill"
          style="color: #9195a0"
          class="w-[10vw] h-[10vw] ml-[5vw]"
        />
        <span><a href="#">关注</a></span>
      </li>
      <li>
        <Icon
          icon="ri:netease-cloud-music-fill"
          style="color: #9195a0"
          class="w-[10vw] h-[10vw] ml-[5vw]"
        />
        <span><a href="#">社区</a></span>
      </li>
    </ul>
  </nav>
</template>
<script setup>
import { Icon } from "@iconify/vue";
</script>
<style scoped>
.bottom-nav {
  overflow: hidden;
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 20vw;
  background-color: #f4f4f5;
}

.bottom-nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.bottom-nav li {
  width: 20vw;
  height: 20vw;
  float: left;
}

.bottom-nav li a {
  display: block;
  color: black;
  text-align: center;
  text-decoration: none;
}

.bottom-nav li a:hover {
  background-color: red;
}
</style>
