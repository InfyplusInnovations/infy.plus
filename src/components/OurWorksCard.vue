<template>
  <div
    id="card"
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
      items-center
      overflow-hidden
      `"
  >
    <img
      :src="`img/pattern${pattern}.jpg`"
      alt=""
      class="h-full absolute w-full opacity-30 z-0"
    />
    <div
      class="flex justify-center items-center transition-all delay-150 ease-in-out"
    >
      <div
        :class="`absolute z-10 w-20 h-20 transition-all delay-150 ease-in-out ${
          pattern === 'green'
            ? 'bg-green-300 hover:bg-green-200'
            : pattern === 'red'
            ? 'bg-gray-200 hover:bg-gray-100'
            : pattern === 'blue'
            ? 'bg-blue-700 hover:bg-blue-500'
            : 'bg-gray-200 hover:bg-gray-300'
        } rounded-full  flex justify-center items-center text-white top-10`"
      >
        <!-- <div
      class="absolute z-10 w-24 h-24 rounded-full bg-gray-300 flex justify-center items-center text-white top-10"
    > -->
        <img :src="`/img/${logoURL}`" alt="" class="p-4" />
      </div>
      <div id="innercontent" class="transition-all delay-300 ease-in-out z-10">
        <div class="pt-10">
          <p class="typography text-white font-primary p-3 text-center">
            <span class="font-bold font-secondary">{{ title }}</span
            >{{ content }}
          </p>
        </div>
        <a
          :href="siteURL"
          target="_bank"
          class="flex justify-center items-center"
        >
          <Button :color="pattern" class="absolute z-10 bottom-5">view</Button>
        </a>
      </div>
    </div>
    <div
      id="currentcontent"
      class="hidden md:block absolute -right-20 -bottom-8 transition-all delay-150 ease-in-out"
    >
      <img :src="imgURL" class="w-80 rounded-md opacity-90" alt="" />
    </div>
  </div>
</template>
<script>
import Button from "./shared/Button.vue";
export default {
  props: ["pattern", "logoURL", "siteURL", "title", "content", "imgURL"],
  components: {
    Button,
  },
  setup() {},
};
</script>
<style scoped>
@media screen and (min-width: 800px) {
  #innercontent {
    opacity: 0;
  }
  #card:hover #innercontent {
    opacity: 100;
  }
  #card:hover #currentcontent {
    bottom: -500px;
  }
}
</style>
