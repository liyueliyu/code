<template>
  <div>
    <!-- <Menu v-if="props.data.data.blocks ===HOMEPAGE_BLOCK_OLD_DRAGON_BALL"></Menu> -->
    <component
      :is="blcoktypeComponentMap[props.data.blockCode]"
      :data="propsData"
    ></component>
  </div>
  <!-- <div class="my-1 bg-green-500 text-white">{{ props.data.blockCode }}</div> -->
</template>

<script setup>
import Menu from "./Menu.vue";
import { defineProps, computed } from "vue";
import Banner from "./Banner.vue"

const blcoktypeComponentMap = {
  HOMEPAGE_BANNER: Banner,
  // HOMEPAGE_BLOCK_HOT_TOPIC: "热门话题",
  // HOMEPAGE_BLOCK_MGC_PLAYLIST: "雷达歌单",
  // HOMEPAGE_BLOCK_NEW_ALBUM_NEW_SONG: "新歌新跌",
  // HOMEPAGE_BLOCK_NEW_HOT_COMMENT: "热门评论",
  // HOMEPAGE_BLOCK_OFFICIAL_PLAYLIST: "官方歌单",
  HOMEPAGE_BLOCK_OLD_DRAGON_BALL: Menu,
  // HOMEPAGE_BLOCK_PLAYLIST_RCMD: "推荐歌单",
  // HOMEPAGE_BLOCK_STYLE_RCMD: "",
  // HOMEPAGE_BLOCK_VIDEO_PLAYLIST: "",
  // HOMEPAGE_BLOCK_YUNCUN_PRODUCED: "",
  // HOMEPAGE_MUSIC_CALENDAR: "",
  // HOMEPAGE_MUSIC_MLOG: "",
  // HOMEPAGE_PODCAST24: "",
  // HOMEPAGE_VOICEBOOK_RCMD: "",
  // HOMEPAGE_VOICELIST_RCMD: "",
};
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const propsData = computed(() => {
  if (props.data.blockCode === "HOMEPAGE_BLOCK_OLD_DRAGON_BALL") {
    return props.data.creatives[0].resources.map((item) => ({
      name: item.uiElement.mainTitle.title,
      iconUrl: item.uiElement.image.imageUrl,
    }));
  } if(props.data.blockCode ==="HOMEPAGE_BANNER") {
    return props  ;
  }
});

// console.log(props.data);
console.log("blocktype", propsData);
</script>
<style scoped></style>
