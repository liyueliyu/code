<template>
  <wrapper
    :title="props.data.name"
    @clickMore="moreHandler"
    @clickTitle="titleHandler"
  >
    <BetterScroll
      :config="{ scrollX: false, scrollY: true, click: true }"
      :dep="props.data"
    >
      <div
        @click="clickHandler(item)"
        v-for="item in props.data.children"
        :key="item.id"
      >
        <img :src="item.img" alt="" />
        <!-- <div>{{ item.name }}</div> -->
        <div>{{ item.title }}</div>
        <div>{{ item.artist }}</div>
      </div>
    </BetterScroll>
  </wrapper>
</template>
<script setup>
import { defineProps } from "vue";
import BetterScroll from "@/components/BetterScroll.vue";
import Wrapper from "@/components/Wrapper.vue";
const props = defineProps({
  data: {},
});
const clickHandler = () => {};

const moreHandler = () => {
  console.log("推荐歌单的更多被点击了");
};

const titleHandler = () => {
  console.log("推荐歌单的标题被点击了");
};
</script>
