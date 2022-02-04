<template>
  <section class="flex flex-col justify-center items-center py-12 p-5">
    <div class="w-full max-w-7xl">
      <div class="">
        <h3 class="font-bold text-white text-xl font-secondary">
          <span class="text-2xl text-blue-400">INTRESTED ?</span> <br />
          LETS TALK IN PERSON
        </h3>
      </div>
      <div class="flex justify-center items-center flex-wrap gap-10">
        <div class="max-w-2xl w-full">
          <form @submit.prevent="formSubmit">
            <input
              type="text"
              class="my-8 block w-full rounded-md text-white bg-gray-800 border-transparent focus:border-blue-500 focus:bg-gray-800 focus:ring-0"
              placeholder="Enter your name"
              required
            />
            <input
              type="email"
              class="my-8 block w-full rounded-md text-white bg-gray-800 border-transparent focus:border-blue-500 focus:bg-gray-800 focus:ring-0"
              placeholder="Enter your email"
              required
            />
            <input
              type="text"
              class="my-8 block w-full rounded-md text-white bg-gray-800 border-transparent focus:border-blue-500 focus:bg-gray-800 focus:ring-0"
              placeholder="Enter your phone"
            />
            <textarea
              name=""
              id=""
              class="my-8 block w-full rounded-md text-white bg-gray-800 border-transparent focus:border-blue-500 focus:bg-gray-800 focus:ring-0"
              placeholder="Message"
            ></textarea>
            <Button color="blue" type="submit">submit</Button>
          </form>
        </div>
        <div class="text-white text-lg font-secondary max-w-lg">
          <div>
            <div class="font-bold text-xl">visit us</div>
            <div class="">
              Infyplus Technologies Prakashgram Idukki Kerala India - 685552
            </div>
            <div class="">Phone :+91-9539876795 +91 8589878253</div>
            <div class="py-5">
              <iframe
                class="ring-4 p-2"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15726.382772891373!2d77.20705012275391!3d9.800235654621817!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd562a62c55ce2bb9!2sINFYPLUS%20INNOVATIONS!5e0!3m2!1sen!2sin!4v1612634760017!5m2!1sen!2sin"
                width="300"
                height="200"
                frameborder="0"
                style="border: 0"
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Button from "../shared/Button.vue";
export default {
  components: { Button },
  setup() {
    const formSubmit = () => {
      console.log("submit");
    };
    return {
      formSubmit,
    };
  },
};
</script>
