<template>
  <Wrapper
    :title="props.data.name"
    @clickMore="moreHandler()"
    @clickTitle="titleHandler()"
  >
    <BetterScroll
      :config="{ scrollX: false, scrollY: true, click: true }"
      :dep="props.data"
    >
      <div
        @click="clickHandler(item)"
        v-for="item in props.data.children"
        :key="item.id"
        class="w-[85vw] h-[15vw]"
      >
        <img
          class="w-[15vw] h-[15vw] rounded-sm ml-[4vw] mt-[5vw]"
          :src="item.img"
          alt=""
        />
        <div
          class="line-clamp-2q w-[45vw] h-[5vw] text-xs text-[#ea4d44] font-bold ml-[22vw] mt-[-3vw]"
        >
          {{ item.title }}
        </div>
        <div
          class="line-clamp-2q w-[40vw] h-[5vw] text-sm text-[#7c818e] ml-[50vw] mt-[-5vw]"
        >
          {{ item.artist }}
        </div>
        <div class="ml-[23vw] mt-[-15vw] text-[#3f4b59]">{{ item.song }}</div>
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
