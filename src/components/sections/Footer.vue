<template>
  <section id="Footer w-screen">
    <div class="w-full h-12 flex">
      <div
        class="w-1/2 bg-gradient-to-r from-blue-200 to-pink-300 h-full"
      ></div>
      <div class="w-1/2 bg-gradient-to-r from-pink-200 to-red-200 h-full"></div>
    </div>
    <div class="bg-white">
      <div class="w-full p-5 max-w-7xl mx-auto">
        <h3 class="font-bold text-blue-400 py-3 font-secondary">INFYPLUS</h3>
        <h2 class="font-bold text-2xl text-gray-900 py-3 font-primary">
          Making world a better place by providing Intelligent software
          solutions
        </h2>
        <h3 class="font-bold text-blue-400 py-3 font-secondary">NAVIGATIONS</h3>
        <ul
          class="py-3 font-bold text-gray-900 flex space-x-3 flex-wrap items-start font-secondary"
        >
          <navlink
            :linkDetails="link"
            v-for="link in links"
            :key="link.id"
            class="text-xl"
          />
        </ul>

        <h3 class="font-bold text-blue-400 py-3 font-secondary">
          FOLLOW US ON
        </h3>
      </div>
    </div>
  </section>
</template>
<script>
import Navlink from "../Nav/NavLink.vue";
export default {
  components: { Navlink },
  setup() {
    let links = [
      { id: 1, link: "#", linkTitle: "Home" },
      { id: 2, link: "#", linkTitle: "Works" },
      { id: 3, link: "#", linkTitle: "About" },
      { id: 4, link: "#", linkTitle: "Products" },
      { id: 5, link: "#", linkTitle: "Contact" },
    ];
    return {
      links,
    };
  },
};
</script>
