<template>
  <div
    :class="`
      bg-gray-800
      border-4 
      ${
        pattern === 'green'
          ? 'border-green-900 hover:border-green-700'
          : pattern === 'red'
          ? 'border-red-900 hover:border-red-700'
          : 'border-blue-900 hover:border-blue-700'
      }
      rounded-lg
      w-72
      h-96
      relative
      flex
      justify-center
      items-center`"
  >
    {{ pattern }}
    <img
      :src="`img/pattern${pattern}.jpg`"
      alt=""
      class="h-full absolute w-full opacity-30 z-0"
    />
    <div
      class="
        absolute
        z-10
        w-24
        h-24
        rounded-full
        bg-red-600
        flex
        justify-center
        items-center
        text-white
        top-10
      "
    >
      LOGO
    </div>

    <Button class="absolute z-10 bottom-5" :color="pattern"> view</Button>
  </div>
</template>
<script>
import Button from "./shared/Button.vue";
export default {
  props: ["pattern"],
  components: {
    Button,
  },
  setup() {},
};
</script>
