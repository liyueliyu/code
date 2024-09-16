<template>
  <div>
    <!-- <Menu :menu="menu"></Menu> -->
    <BlockType
      v-for="item in pageData"
      :data="item"
      :key="item.blockCode"
    ></BlockType>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { getHomePageData } from "@/api";
// import Menu from "./children/Menu.vue";
import BlockType from "@/views/children/BlockType.vue";

// const menu = ref([]);
const pageData = ref([]);
getHomePageData().then((res) => {
  // console.log(
  //   res.data.data.blocks.reduce((prev, current) => {
  //     prev[current.blockCode] = "";
  //     return prev;
  //   }, {})
  // );

  pageData.value = res.data.data.blocks;
  //对后台返回的数据进行预处理，适配组件的props
  // menu.value = res.data.data.blocks
  //   .find((item) => item.blockCode === "HOMEPAGE_BLOCK_OLD_DRAGON_BALL")
  //   .creatives[0].resources.map((item) => ({
  //     name: item.uiElement.mainTitle.title,
  //     iconUrl: item.uiElement.image.imageUrl,
  //   }));
});
</script>

<style scoped>
.filter {
  filter: url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27><filter id=%27colorize%27><feColorMatrix type='matrix' values='1 0 0 0 0.698 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'/></filter></svg>#colorize");
}
</style>
