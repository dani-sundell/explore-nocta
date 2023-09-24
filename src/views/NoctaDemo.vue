<script setup>
import NavClose from "@/components/NavClose.vue";
</script>

<template>
  <main class="reg">

    <div class="splash--container">
        <div class="splash--headline--container">
            <h1 class="demo--headline--type">
                <div class="type-secondary">wlecome to the demo of</div>
                <div class="type-primary">Nocta</div>
            </h1>
            <div class="splash--module--line"></div>
            <div class="demo--body--container">
                <div class="demo--body">
                  <p><span class="demo--body-bold quote span-white">Explore your surroundings.</span></p>
                  You can interact with objects when the cursor turns
                  <span class="demo--body-bold quote span-red">red</span><img src="https://dsundell.studio.mcad.edu/design-studio/nocta/imgs/active-cursor.svg" alt="active cursor">. For the best experience, please turn
                    <span class="demo--body-bold quote span-gold">sound on</span>
                    <img src="https://dsundell.studio.mcad.edu/design-studio/nocta/imgs/icon-sound-on.png" alt="sound icon">
                    and view on desktop.</div>
            </div>
            <div class="splash--module--line"></div>
            <h2 class="demo--headline--type">
                <div class="type-secondary">do you wish to proceed?</div>
            </h2>
            <RouterLink to="/lighthouse"><div class="splash--container--button type-tertiary">Yes</div></RouterLink>
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
