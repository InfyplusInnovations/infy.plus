<template>
  <div class="p-5 my-auto w-full flex justify-center items-center py-10">
    <div class="w-full max-w-4xl">
      <h3 class="font-bold text-white text-xl font-secondary">
        <span class="text-2xl text-blue-400">ABOUT</span> <br />
        We are driven by the following ideas in providing you the best digital
        experiences
      </h3>
      <div class="py-5">
        <div
          class="p-5 my-5 bg-slate-800 rounded-lg flex gap-3 items-center flex-wrap"
        >
          <div class="">
            <EyeIcon class="w-10 text-blue-400" />
          </div>
          <div class="">
            <h3 class="font-bold font-primary text-blue-400">
              Privacy Respecting
            </h3>
            <p class="font-secondary text-slate-300">
              The products we create and services we provide respects the
              privacy of the users/clients.We will not compromise the data for
              any profits.The user will be the incharge of data and control the
              access of their data
            </p>
          </div>
        </div>
        <div
          class="p-5 my-5 bg-slate-800 rounded-lg flex gap-3 items-center flex-wrap"
        >
          <div class=""><UserGroupIcon class="w-10 text-blue-400" /></div>
          <div class="">
            <h3 class="font-bold font-primary text-blue-400">
              Focused on people
            </h3>
            <p class="font-secondary text-slate-300">
              Rather than creating a software for our profits we focus on people
              and try to provide a great experience for them.
            </p>
          </div>
        </div>
        <div
          class="p-5 my-5 bg-slate-800 rounded-lg flex gap-3 items-center flex-wrap"
        >
          <div class="">
            <CogIcon class="w-10 text-blue-400" />
          </div>
          <div class="">
            <h3 class="font-bold font-primary text-blue-400">
              Driven by Innovations
            </h3>
            <p class="font-secondary text-slate-300">
              To solve mordern problems we create mordern innovative solutions
              and with every project we try to push ourselfs beyond the limit to
              provide the best experience
            </p>
          </div>
        </div>

        <div
          class="p-5 my-5 bg-slate-800 rounded-lg flex gap-3 items-center flex-wrap"
        >
          <div class="">
            <h3 class="tracking-wider font-primary text-blue-400 font-bold">
              FLOSS
            </h3>
          </div>
          <div class="">
            <h3 class="font-bold font-primary text-blue-400">
              Free And Open Source
            </h3>
            <p class="font-secondary text-slate-300">
              Free and Open software is the future and it ensures privacy and
              security of the software by keeping the source code open to public
              for betterment and study.Every software we create at infyplus as
              our products will be opensource and will follow the free software
              philosophy
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { EyeIcon, UserGroupIcon, CogIcon } from "@heroicons/vue/solid";
export default {
  components: { EyeIcon, UserGroupIcon, CogIcon },
  setup() {},
};
</script>
