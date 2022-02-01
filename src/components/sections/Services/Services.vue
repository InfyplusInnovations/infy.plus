<template>
  <section class="py-12 p-5 flex flex-col items-center">
    <div class="max-w-7xl w-full">
      <div class="">
        <h3 class="font-bold text-white text-xl font-secondary">
          <span class="text-2xl text-blue-400">THINGS</span> <br />
          WE DO BEST
        </h3>
      </div>

      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 py-5">
        <service-card
          v-for="service in services"
          :key="service.id"
          :Details="service"
        >
          <component
            :is="service.component"
            class="w-12 p-3 font-secondary font-bold"
          />
        </service-card>
      </div>
    </div>
  </section>
</template>
<script>
import {
  CodeIcon,
  ServerIcon,
  TemplateIcon,
  DeviceMobileIcon,
} from "@heroicons/vue/outline";

import ServiceCard from "./ServiceCard.vue";
export default {
  components: {
    ServiceCard,
  },
  setup() {
    let services = [
      {
        id: 1,
        name: "Web Design",
        component: TemplateIcon,
        color: "blue",
      },
      {
        id: 2,
        name: "Web Development",
        component: CodeIcon,
        color: "red",
      },
      {
        id: 3,
        name: "Hosting",
        component: ServerIcon,
        color: "yellow",
      },
      {
        id: 4,
        name: "App Development",
        component: DeviceMobileIcon,
        color: "green",
      },
    ];
    return {
      services,
    };
  },
};
</script>
