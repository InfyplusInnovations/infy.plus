<template>
  <div class="p-5 my-auto w-full flex justify-center items-center py-10">
    <div class="w-full max-w-4xl">
      <h3 class="font-bold text-white text-xl font-secondary">
        <span class="text-2xl text-blue-400">PRODUCTS</span> <br />
        Open source applications we built that respect your privacy and freedom
      </h3>
      <div class="py-5">
        <div
          class="p-5 my-5 bg-slate-800 rounded-lg flex gap-3 items-center flex-wrap"
        >
          <div class="p-3">
            <img
              src="/img/products/tonightshow.png"
              alt=""
              class="w-20 -rotate-12"
            />
          </div>
          <div class="">
            <h3 class="font-bold font-primary text-blue-400">Tonight'show</h3>
            <p class="font-secondary text-slate-300">
              An application the that suggests you great movies to watch
              everyday
            </p>
            <div class="py-5">
              <a
                href="https://tonightshow.netlify.app"
                target="_bank"
                class="px-3 py-2 text-center text-lg font-secondary bg-blue-400 hover:bg-blue-300 rounded-full w-20"
                >View</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { EyeIcon, UserGroupIcon, CogIcon } from "@heroicons/vue/solid";
import Button from "../shared/Button.vue";

export default {
  components: { EyeIcon, UserGroupIcon, CogIcon, Button },
  setup() {},
};
</script>
