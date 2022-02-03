<template>
  <div class="ml-3 inline-flex rounded-md shadow">
    <router-link
      to="#"
      class="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium leading-6 text-indigo-600 transition duration-150 ease-in-out hover:text-indigo-500 focus:outline-none"
      >{{ btnText }}</router-link
    >
  </div>
</template>
<script>
export default {
  props: ["btnText"],
  setup() {},
};
</script>
