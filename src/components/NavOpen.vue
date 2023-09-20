<script setup>
import { RouterLink } from "vue-router";

// The "X" on this page should eventually link to the page the user was previously on

</script>


<template>
<nav class="nav--container open">
  <div class="nav--logo"><RouterLink to="/"><img src="https://dsundell.studio.mcad.edu/design-studio/nocta/imgs/icon-compass.png" alt="link to home page"></RouterLink></div>
  <div class="nav--right">
    <div class="nav--location-text nav--black-text type-tertiary" 
    @mouseover="handleHover(true)" @mouseleave="handleHover(false)"
    >{{ message }}</div>
    <RouterLink to="/"><div class="nav--hmbgr nav--hmbgr__alt">
      <i class="hmbgr" style="transform: translate(0rem, .3rem) rotate(45deg);"></i>
      <i class="hmbgr" style="display: none;"></i>
      <i class="hmbgr" style="transform: translate(0rem, -0.25rem) rotate(-45deg);"></i>
    </div></RouterLink>
  </div>
</nav>
</template>

<script>
export default {
  data() {
    return {
      hover: false
    };
  },
  computed: {
      message() {
        if (this.$route.meta.slogan === "yes") {
          console.log('yes slogan');
          return this.hover === true ? "WHEN ALL ELSE ENDS, THE NIGHT REMAINS" : "Cum cetera finiuntur, nox manet";
        } else {
          console.log('no slogan');
          return this.$route.name;
        }
      },
    },
    methods: {
      handleHover(s){
        this.hover = s;
      }
    }
};
</script>

<style scoped>

</style>
