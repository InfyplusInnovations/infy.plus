<template>
  <li>
    <router-link :to="linkDetails.link" class="hover:text-blue-400">{{
      linkDetails.linkTitle
    }}</router-link>
  </li>
</template>
<script>
export default {
  props: ["linkDetails"],
  setup() {},
};
</script>
