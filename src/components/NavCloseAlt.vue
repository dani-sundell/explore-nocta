<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
<nav class="nav--container open">
  <div class="nav--logo"><RouterLink to="/"><img src="https://dsundell.studio.mcad.edu/design-studio/nocta/imgs/icon-compass.png" alt="compass icon"></RouterLink></div>
  <div class="nav--right">
    <div class="nav--location-text type-tertiary" 
    @mouseover="handleHover(true)" @mouseleave="handleHover(false)"
    >{{ message }}</div>
    <RouterLink to="/wayfind"><div class="nav--hmbgr">
      <i class="hmbgr"></i>
      <i class="hmbgr"></i>
      <i class="hmbgr"></i>
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
