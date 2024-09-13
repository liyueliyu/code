<template>
  <div>
    <div>{{ Props.data.name }}</div>
    <div class="flex">
      <div v-for="item in props.data.children" :key="item.id">
        <img :src="item.imageUrl" alt="" />
         <div>{{ item.title }}</div>
      </div>
     
     
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
const props = defineProps({
  data: {},
});
</script>
<style scoped></style>
