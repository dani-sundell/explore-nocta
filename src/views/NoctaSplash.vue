<script setup>
import NavClose from "@/components/NavClose.vue";
</script>

<template>
  <main class="reg">

    <div class="splash--container">
        <div class="splash--headline--container">
            <h1 class="splash--headline--type">
                <div class="type-secondary">you have arrived at</div>
                <div class="type-primary">Nocta</div>
            </h1>
            <div class="splash--module--line"></div>
            <div class="splash--text">
                <div class="type-tertiary">This site includes mentions of intense themes that some may find unpleasant.</div>
                <div class="type-tertiary">If you continue, please turn</div>
                    <div class="sound-stack">
                        <span class="splash--headline--type--quote quote">sound on</span> <img src="https://dsundell.studio.mcad.edu/design-studio/nocta/imgs/icon-sound-on.png" alt="sound icon">
                        </div> 
                    <div class="type-tertiary"> and view on desktop for the best experience.</div>
            </div>
            <div class="splash--module--line"></div>
            <h2 class="splash--headline--type">
                <div class="type-secondary">do you wish to proceed?</div>
            </h2>
            <RouterLink to="/"><div class="splash--container--button type-tertiary">Yes</div></RouterLink>
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
