<template>
  <section id="Footer w-screen relative">
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
    <div
      class="bg-black bg-cover w-full h-72 overflow-hidden flex flex-col justify-center items-center p-5"
    >
      <h2
        class="font-bold text-2xl text-center md:text-3xl text-white py-3 font-primary"
      >
        Intrested ? Get in touch with us
      </h2>
      <a href="/#contact" class="px-3 py-3 rounded-lg bg-white text-blue-500">
        contact
      </a>
    </div>
  </section>
</template>
<script>
import ButtonRepo from "../ButtonRepo.vue";
import Navlink from "../Nav/NavLink.vue";
export default {
  components: { Navlink, ButtonRepo },
  setup() {
    let links = [
      { id: 1, link: "/#home", linkTitle: "Home" },
      { id: 2, link: "/#works", linkTitle: "Works" },
      { id: 3, link: "/about", linkTitle: "About" },
      { id: 4, link: "/products", linkTitle: "Products" },
      { id: 5, link: "/#contact", linkTitle: "Contact" },
    ];
    return {
      links,
    };
  },
};
</script>
