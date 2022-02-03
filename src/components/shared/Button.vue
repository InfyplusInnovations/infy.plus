<template>
  <button
    :class="`
      px-3
      py-2
      ${
        color == 'red'
          ? 'bg-red-600 hover:bg-red-500'
          : color == 'green'
          ? 'bg-green-600 hover:bg-green-500'
          : 'bg-blue-600 hover:bg-blue-500'
      }
     
      hover:bg-red-500
      text-center
      text-xl
      font-secondary
      w-60
      h-10
      rounded-full
      text-white`"
  >
    <slot />
  </button>
</template>
<script>
export default {
  props: ["color"],
  setup() {},
};
</script>
