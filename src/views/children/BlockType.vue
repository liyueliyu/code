<template>
  <div>{{ props.data.blockCode }}</div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  type: Object,
  required: true,
});
console.log(props.data);
</script>
<style scoped></style>
