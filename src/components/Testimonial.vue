<template>
  <div class="font-secondary text-white py-5">
    <div class="font-bold text-6xl">"</div>
    <div class="p-4 text-xl">
      <p>{{ content }}</p>
      <div class="p-2 float-right">- {{ client }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["content", "client"],
  components: {},
  setup() {},
};
</script>
