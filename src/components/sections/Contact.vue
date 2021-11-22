<template>
  <section
    id="contact"
    class="flex flex-col justify-center items-center py-12 p-5"
  >
    <div class="w-full max-w-7xl">
      <div class="">
        <h3 class="font-bold text-white text-xl font-secondary">
          <span class="text-2xl text-blue-400">INTRESTED ?</span> <br />
          LETS TALK IN PERSON
        </h3>
      </div>
      <div class="max-w-2xl w-full">
        <form>
          <input
            type="text"
            class="
              my-8
              block
              w-full
              rounded-md
              text-white
              bg-gray-800
              border-transparent
              focus:border-blue-500 focus:bg-gray-800 focus:ring-0
            "
            placeholder="Enter your name"
          />
          <input
            type="text"
            class="
              my-8
              block
              w-full
              rounded-md
              text-white
              bg-gray-800
              border-transparent
              focus:border-blue-500 focus:bg-gray-800 focus:ring-0
            "
            placeholder="Enter your name"
          />
          <input
            type="text"
            class="
              my-8
              block
              w-full
              rounded-md
              text-white
              bg-gray-800
              border-transparent
              focus:border-blue-500 focus:bg-gray-800 focus:ring-0
            "
            placeholder="Enter your name"
          />
          <Button color="blue">submit</Button>
        </form>
      </div>
    </div>
  </section>
</template>
<script>
import Button from "../shared/Button.vue";
export default {
  components: { Button },
  setup() {},
};
</script>
