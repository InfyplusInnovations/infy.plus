<template>
  <section class="py-24 flex flex-col justify-center items-center">
    <div
      class="max-w-7xl w-full grid lg:grid-cols-3 gap-8 md:gap-4 justify-items-center md:grid-cols-2"
    >
      <our-works-card
        pattern="blue"
        logoURL="meeraLogo.png"
        siteURL="https://meerahealthcare.com"
        title="Meerahealthcare"
        content=" is a health care and educational service provider located near nedumkandam idukki"
        imgURL="/img/MeeraHealthcare.png"
      />
      <our-works-card
        pattern="red"
        logoURL="edusatarLogo.png"
        siteURL="https://edustarfastrack.com"
        title="Edustar Fastrack "
        content="is an Excellent public school located at narakakkanam"
        imgURL="/img/EdustarFastrack.png"
      />
      <our-works-card
        pattern="green"
        logoURL="sjupslogo.png"
        siteURL="https://sjupsnarakakkanam.com"
        title="SJUPS Narakakkanam "
        content="is an Excellent public school located at narakakkanam"
        imgURL="/img/school.jpeg"
      />

      <our-works-card
        pattern="red"
        logoURL="RNglobalLogo.png"
        siteURL="https://rnglobalsolution.com"
        title="RN Global"
        content=" is an International nurses recruitment agency, placing thousands of nurses across UK, Ireland, Australia and New Zealand"
        imgURL="/img/RNGlobal.png"
      />
    </div>
  </section>
</template>
<script>
import OurWorksCard from "../OurWorksCard.vue";
export default {
  components: { OurWorksCard },
  setup() {},
};
</script>
