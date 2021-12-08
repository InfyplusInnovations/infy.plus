<template>
  <nav>
    <div class="w-full flex justify-between absolute">
      <div class="p-5">
        <img src="/img/logo.png" alt="Infy.plus logo" class="w-20" />
      </div>
      <div class="fixed z-50 right-0 p-5">
        <sec-indicator />
        <div
          class="
            p-3
            bg-blue-400
            w-12
            h-12
            rounded-full
            text-center
            cursor-pointer
          "
          @click="menuClick"
        >
          <MenuAlt4Icon v-if="!menuOpen" />

          <XIcon v-else />
        </div>
      </div>
    </div>
    <div
      class="w-screen h-screen fixed bg-black bg-opacity-80 z-40"
      v-if="menuOpen"
    >
      <ul
        class="
          flex flex-col
          space-y-3
          text-white
          font-secondary
          items-center
          h-full
          text-2xl
          justify-center
          font-bold
        "
      >
        <navlink :linkDetails="link" v-for="link in links" :key="link.id" />
        <!-- <li><a href="#work" class="hover:text-blue-400">Work</a></li>
        <li><a href="#about" class="hover:text-blue-400">About</a></li>
        <li><a href="#products" class="hover:text-blue-400">Products</a></li>
        <li><a href="#contact" class="hover:text-blue-400">Contact</a></li> -->
      </ul>
    </div>
  </nav>
</template>
<script>
import { MenuAlt4Icon, XIcon } from "@heroicons/vue/solid";
import { ref } from "@vue/reactivity";
import Navlink from "./Navlink.vue";
import SecIndicator from "./secIndicator.vue";
export default {
  components: {
    MenuAlt4Icon,
    XIcon,
    Navlink,
    SecIndicator,
  },
  setup() {
    let menuOpen = ref(false);
    let menuClick = () => {
      menuOpen.value = !menuOpen.value;
    };
    let links = [
      { id: 1, link: "#", linkTitle: "Home" },
      { id: 2, link: "#", linkTitle: "Works" },
      { id: 3, link: "#", linkTitle: "About" },
      { id: 4, link: "#", linkTitle: "Products" },
      { id: 5, link: "#", linkTitle: "Contact" },
    ];

    return {
      menuOpen,
      menuClick,
      links,
    };
  },
};
</script>
