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
import { defineProps, computed } from "vue";
import Menu from "@/views/children/Menu.vue";
import Banner from "@/views/children/Banner.vue";
import Playlist from "@/views/children/Playlist.vue";
import PlayAll from "@/views/children/PlayAll.vue";
import NewList from "@/views/children/NewList.vue";
const blcoktypeComponentMap = {
  HOMEPAGE_BANNER: Banner,
  // HOMEPAGE_BLOCK_HOT_TOPIC: "热门话题",
  // HOMEPAGE_BLOCK_MGC_PLAYLIST: "雷达歌单",
  HOMEPAGE_BLOCK_NEW_ALBUM_NEW_SONG: NewList,
  // HOMEPAGE_BLOCK_NEW_HOT_COMMENT: "热门评论",
  // HOMEPAGE_BLOCK_OFFICIAL_PLAYLIST: "官方歌单",
  HOMEPAGE_BLOCK_OLD_DRAGON_BALL: Menu,
  HOMEPAGE_BLOCK_PLAYLIST_RCMD: Playlist,
  HOMEPAGE_BLOCK_STYLE_RCMD: PlayAll,
  // HOMEPAGE_BLOCK_VIDEO_PLAYLIST: 视频合辑,
  // HOMEPAGE_BLOCK_YUNCUN_PRODUCED: 云村出品,
  // HOMEPAGE_MUSIC_CALENDAR: 音乐日历,
  // HOMEPAGE_MUSIC_MLOG: 精选音乐视频,
  // HOMEPAGE_PODCAST24: 广播,
  // HOMEPAGE_VOICEBOOK_RCMD: 为你严选的精品有声书,
  // HOMEPAGE_VOICELIST_RCMD: "",
};
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const propsData = computed(() => {
  switch (props.data.blockCode) {
    case "HOMEPAGE_BLOCK_OLD_DRAGON_BALL":
      return props.data.creatives[0].resources.map((item) => ({
        name: item.uiElement.mainTitle.title,
        iconUrl: item.uiElement.image.imageUrl,
      }));
    case "HOMEPAGE_BANNER":
      return props.data.extInfo.banners.map((item) => item.pic);
    case "HOMEPAGE_BLOCK_PLAYLIST_RCMD":
      return {
        name: props.data.uiElement.subTitle.title,
        children: props.data.creatives.map((item) => ({
          id: item.resources[0].resourceId,
          playCount: item.resources[0].resourceExtInfo.playCount,
          imageUrl: item.resources[0].uiElement.image.imageUrl,
          title: item.resources[0].uiElement.mainTitle.title,
        })),
      };
    case "HOMEPAGE_BLOCK_STYLE_RCMD":
      return {
        name: props.data.uiElement.subTitle.title,
        children: props.data.creatives.map((item) => ({
          id: item.resources[0].resourceId,
          img: item.resources[0].uiElement.image.imageUrl,
          title: item.resources[0].uiElement.subTitle.title,
          artist: item.resources[0].resourceExtInfo.artists[0].name,
          song: item.resources[0].uiElement.mainTitle.title,
        })),
      };
    case "HOMEPAGE_BLOCK_NEW_ALBUM_NEW_SONG":
      return {
        name: props.data.uiElement.subTitle.title,
        children: props.data.creatives.map((item) => ({
          id: item.resources[0].resourceId,
          img: item.resources[0].uiElement.image.imageUrl,
          title: item.resources[0].uiElement.subTitle.title,
          artist: item.resources[0].resourceExtInfo.artists[0].name,
          // song: item.resources[0].resourceExtInfo.songData.name,
          song: item.resources[0].uiElement.mainTitle.title,
        })),
      };
    default:
      return null;
  }
});

console.log(props.data);
// console.log("blocktype", propsData);
</script>
<style scoped></style>
