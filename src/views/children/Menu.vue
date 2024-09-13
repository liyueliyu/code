<template>
  <div class="flex" :style="`width:${menu.length * 20}vw`">
    <div
      @click="emit('click', item, index)"
      v-for="(item, index) in props.menu"
      :key="item.name"
      class="flex flex-col items-center w-[20vw]"
    >
      <div class="relative">
        <img :src="item.iconUrl" class="w-[8vw] filter" alt="" />
        <span
          class="text-[2.564vw] text-white absolute top-[54%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          v-if="index === 0"
          >{{ new Date().getDate() }}</span
        >
      </div>
      <span class="text-[2.99vw] text-[#576c6c]">{{ item.name }}</span>
    </div>
  </div>
</template>
<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  menu: {
    type: Array,
    Required: true,
  },
});
const emit = defineEmits(["click"]);
</script>

<style scoped>
.filter {
filter: url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27><filter id=%27colorize%27><feColorMatrix type='matrix' values='1 0 0 0 0.698 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'/></filter></svg>#colorize");
}
</style>
