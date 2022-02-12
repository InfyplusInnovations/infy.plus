<template>
  <section class="flex flex-col justify-center items-center py-12 p-5">
    <div class="w-full max-w-7xl">
      <div class="">
        <h3 class="font-bold text-white text-xl font-secondary">
          <span class="text-2xl text-blue-400">ABOUT</span> <br />
          More about I text-xlnfyplus
        </h3>
      </div>
      <div class="flex gap-4 my-5 flex-wrap">
        <div class="bg-slate-800 p-5 rounded md:w-1/3 w-full">
          <h3 class="font-bold font-primary text-blue-400 text-xl">
            About company
          </h3>
          <div class="text-blue-500 p-5">
            <UserGroupIcon class="w-20" />
          </div>
          <router-link
            to="/about"
            class="font-bold text-pink-400 hover:text-pink-300 underline text-lg py-1 font-secondary"
            >Learn More About Infyplus-></router-link
          >
        </div>
        <div class="bg-slate-800 p-5 rounded md:w-1/3 w-full">
          <h3 class="font-bold font-primary text-blue-400 text-xl">
            Our Products
          </h3>
          <div class="text-blue-500 p-5">
            <CollectionIcon class="w-20" />
          </div>
          <router-link
            to="/products"
            class="font-bold text-pink-400 hover:text-pink-300 underline text-lg py-1 font-secondary"
            >Checkout our Awesome Products-></router-link
          >
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { UserGroupIcon, CollectionIcon } from "@heroicons/vue/solid";

export default {
  components: { UserGroupIcon, CollectionIcon },
  setup() {},
};
</script>
