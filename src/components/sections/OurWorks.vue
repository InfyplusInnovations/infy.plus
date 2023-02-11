<template>
  <section class="py-24 flex flex-col justify-center items-center">
    <div
      class="max-w-7xl w-full grid lg:grid-cols-3 gap-8 md:gap-4 justify-items-center md:grid-cols-2"
    >
          <our-works-card pattern="red" logoURL="marengo_logo.svg" siteURL="https://www.marengoedutech.com/"
            title="Marengo Edutech"
            content=" is an skill development platform for all ages, provides service like psc test series, abacus & math training through dedicated platform"
            imgURL="/img/marengo_website.png" />
      <our-works-card
        pattern="blue"
        logoURL="meeraLogo.png"
        siteURL="https://meerahealthcare.com"
        title="Meerahealthcare"
        content=" is a health care and educational service provider located near nedumkandam idukki"
        imgURL="/img/MeeraHealthcare.png"
      />
   
      <our-works-card
        pattern="green"
        logoURL="sjupslogo.png"
        siteURL="https://sjups.netlify.app/"
        title="SJUPS Narakakkanam "
        content="is an Excellent public school located at narakakkanam"
        imgURL="/img/school.jpeg"
      />

 
      <our-works-card
        pattern="red"
        logoURL="asb_logo.png"
        siteURL="https://aadeshsb.com/"
        title="RN Global"
        content=" ASB is leading strategic growth in energy transition for oil & Gas Greenfield and Brownfield and sustainable infrastructure development across a variety of end markets"
        imgURL="/img/asb_website.png"
      />

          <our-works-card pattern="red" logoURL="RNglobalLogo.png" siteURL="https://rnglobalsolution.com" title="RN Global"
            content=" is an International nurses recruitment agency, placing thousands of nurses across UK, Ireland, Australia and New Zealand"
            imgURL="/img/RNGlobal.png" />
              <our-works-card pattern="red" logoURL="edusatarLogo.png" siteURL="https://edustar.vercel.app/" title="Edustar Fastrack "
                content="Edustar Fastrack is an IELTS Coaching center located at
                          Nedumkandam,Idukki is one of the best IELTS coaching center out
                          there" imgURL="/img/EdustarFastrack.png" />
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
