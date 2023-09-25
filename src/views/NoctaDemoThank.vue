<script setup>
import NavClose from "@/components/NavClose.vue";
</script>

<template>
  <main class="reg">

    <div class="splash--container">
        <div class="splash--headline--container">
            <h1 class="demo--headline--type">
                <div class="type-secondary">thank you for</div>
                <div class="type-primary">Playing</div>
            </h1>
            <div class="splash--module--line"></div>
            <div class="demo--body--container">
                <div class="demo--body">
                  <p><span class="demo--body-bold quote span-white">Please fill out the survey to leave feedback.</span></p></div>
            </div>
            <a href="https://forms.gle/9DnqvBv86FbyStsc8"><div class="splash--container--button type-tertiary">Go to Survey</div></a>
        </div>
    </div>

  </main>
</template>

<script>
export default {
  data() {
    return {
      clickedWip: false,
      base: true,
      lake: false,
      woods: false,
      lighthouse: false,
      town: false,
      hover: true,
      homeImage: 'https://dsundell.studio.mcad.edu/design-studio/nocta/imgs/base.jpg'
    }
  },
    computed: {
      message() {
        if (this.$route.meta.slogan === "yes") {
          console.log('yes slogan');
          return this.hover === true ? "WHEN ALL ELSE ENDS, THE NIGHT REMAINS" : "Cum cetera finiuntur, nox manet";
        } else {
          console.log('no slogan');
          return this.item.locationName;
        }
      },
      getHomeImage() {
        if (this.hover === true) {
        console.log(this.homeImage,"hello")
        return this.homeImage
        }
      }
    },
  methods: {
      showModule() {
        this.clickedWip = true;
      },
      hideModule() {
        this.clickedWip = false;
      },
      handleWoodsHover(s){
        this.woods = s;
        this.hover = s;
      },
      handleLakeHover(s){
        this.lake = s;
        this.hover = s;
        console.log("lake check", this.lake);
        console.log("mouse check", this.mouseX);
      },
      handleLighthouseHover(s){
        this.lighthouse = s;
        this.hover = s;
      },
      handleTownHover(s){
        this.town = s;
        this.hover = s;
        console.log("town check", this.town);
      }
    }
};
</script>
