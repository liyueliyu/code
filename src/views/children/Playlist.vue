<template>
  <Wrapper
    :title="props.data.name"
    @clickMore="moreHandler()"
    @clickTitle="titleHandler()"
  >
    <BetterScroll
      :config="{ scrollX: true, scrollY: false, click: true }"
      :dep="props.data"
    >
      <div
        @click="clickHandler(item)"
        v-for="item in props.data.children"
        :key="item.id"
        class="w-[35.812vw]"
      >
        <img
          class="w-[32vw] h-[32vw] rounded-sm ml-[4vw]"
          :src="item.imageUrl"
          alt=""
        />
        <div class="w-[30vw] h-[10vw] ml-[4vw] text-xs">
          {{ item.title }}
        </div>
      </div>
    </BetterScroll>
  </Wrapper>
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
console.log(props.data);
</script>
