<!-- <template>
  <BetterScroll>
    <div
      v-for="item in props.data"
      :key="item.name"
      class="flex flex-col items-center w-[20vw]"
    >
      <div class="relative">
        <img :src="item.iconUrl" alt="" />
        <span>{{ item.name }}</span>
      </div>
    </div>
  </BetterScroll>
</template>
<script setup>
import { defineProps } from "vue";
import BetterScroll from "@/components/BetterScroll.vue";
const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
});
</script> -->
