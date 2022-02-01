<template>
  <div class="h-screen w-screen absolute -z-20">
    <bg-star class="fixed opacity-60 -z-10" />
    <div class="h-screen w-screen overflow-y-auto">
      <div class="h-screen flex justify-center items-center">
        <div class="text-white text-2xl">COOL</div>
      </div>
      <div class="h-screen flex justify-center items-center">
        <div class="text-white text-2xl">COOL</div>
      </div>
    </div>
  </div>
</template>
<script>
import BgStar from "@/components/bg/BgStar.vue";
export default {
  components: { BgStar },
  setup() {},
};
</script>
