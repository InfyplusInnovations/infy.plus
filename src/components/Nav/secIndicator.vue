<template>
  <component :is="sections.component" class="w-12 p-3 text-white" />
</template>

<script>
import {
  BriefcaseIcon,
  HomeIcon,
  InformationCircleIcon,
  PhoneIcon,
} from "@heroicons/vue/outline";
import { onMounted } from "@vue/runtime-core";
export default {
  setup() {
    onMounted(() => {
      window.addEventListener("scroll", () => {
        const work = document.getElementById("work");
        console.log(work.scrollTop);
      });
    });
    let sections = [
      {
        id: 1,
        component: HomeIcon,
        name: "Home",
      },
      {
        id: 2,
        component: BriefcaseIcon,
        name: "Work",
      },
      {
        id: 3,
        component: InformationCircleIcon,
        name: "About",
      },
      {
        id: 4,
        component: PhoneIcon,
        name: "Contact",
      },
    ];

    return {
      sections,
    };
  },
};
</script>

<style></style>
