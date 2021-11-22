<template>
  <li>
    <a :href="linkDetails.link" class="hover:text-blue-400">{{
      linkDetails.linkTitle
    }}</a>
  </li>
</template>
<script>
export default {
  props: ["linkDetails"],
  setup() {},
};
</script>
