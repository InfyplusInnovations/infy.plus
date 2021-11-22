<template>
  <div class="">
    <div
      :class="`rounded-full p-3 flex my-3 w-72 justify-start items-center text-center  ${
        Details.color == 'red'
          ? 'bg-red-400 hover:bg-red-300'
          : Details.color == 'blue'
          ? 'bg-sky-400 hover:bg-sky-300'
          : Details.color == 'green'
          ? 'bg-teal-400 hover:bg-teal-300'
          : 'bg-yellow-400 hover:bg-yellow-300'
      } `"
    >
      <slot></slot>
      <div class="font-secondary font-bold flex">
        {{ Details.name }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["Details"],
  setup() {},
};
</script>
