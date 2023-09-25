<script setup>
import NavClose from "@/components/NavClose.vue"
</script>

<template>
  <main class="reg">
    <transition name="label" mode="out-in">
      <div class="module--container" v-show="clickedWip" key="clickedWip">
        <div class="module--wip">
          <div class="module--close">
            <div class="module--hmbgr module--hmbgr__alt" @click="hideModule">
              <i
                class="module--lines hmbgr"
                style="transform: translate(0rem, 0.3rem) rotate(45deg)"
              ></i>
              <i class="module--lines hmbgr" style="display: none"></i>
              <i
                class="module--lines hmbgr"
                style="transform: translate(0rem, -0.25rem) rotate(-45deg)"
              ></i>
            </div>
          </div>
          <div class="module--img">
            <img
              src="https://dsundell.studio.mcad.edu/design-studio/nocta/imgs/danger.jpg"
            />
          </div>
          <div class="module--type">
            <p>Your pathway is blocked.</p>
          </div>
        </div>
      </div>
    </transition>
    <NavClose />

    <div class="no-overflow--container">
      <div class="headline--container">
        <h1 class="headline--type">
          <span class="type-secondary">Explore</span>
          <span class="type-primary">Nocta</span>
        </h1>
        <div class="type-tertiary">click to visit an area</div>
        <transition name="label" mode="out-in">
          <div class="label" v-if="lake" key="labelLake">The Lake</div>
          <div class="label" v-else-if="lighthouse" key="labelLighthouse">
            The Lighthouse
          </div>
          <div class="label" v-else-if="woods" key="labelWoods">The Woods</div>
          <div class="label" v-else-if="town" key="labelTown">The Town</div>
        </transition>
      </div>
      <div class="locations--container">
        <transition name="label" mode="out-in">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 5082 2250"
            v-show="base"
            key="base"
          >
            <image
              width="5082"
              height="2250"
              xlink:href="https://dsundell.studio.mcad.edu/design-studio/nocta/imgs/base.jpg"
            ></image>
          </svg>
        </transition>

        <transition name="label" mode="out-in">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 5082 2250"
            v-show="woods"
            key="woods"
          >
            <image
              width="5082"
              height="2250"
              xlink:href="https://dsundell.studio.mcad.edu/design-studio/nocta/imgs/woods.jpg"
            ></image>
          </svg>
        </transition>

        <transition name="label" mode="out-in">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 5082 2250"
            v-show="town"
            key="town"
          >
            <image
              width="5082"
              height="2250"
              xlink:href="https://dsundell.studio.mcad.edu/design-studio/nocta/imgs/town.jpg"
            ></image>
          </svg>
        </transition>

        <transition name="label" mode="out-in">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 5082 2250"
            v-show="lake"
            key="lake"
          >
            <image
              width="5082"
              height="2250"
              xlink:href="https://dsundell.studio.mcad.edu/design-studio/nocta/imgs/lake.jpg"
            ></image>
          </svg>
        </transition>

        <transition name="label" mode="out-in">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 5082 2250"
            v-show="lighthouse"
            key="lighthouse"
          >
            <image
              width="5082"
              height="2250"
              xlink:href="https://dsundell.studio.mcad.edu/design-studio/nocta/imgs/lighthouse.jpg"
            ></image>
          </svg>
        </transition>

        <!-- invisible overlay, includes links + hover map -->
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 5082 2250"
          opacity="1"
        >
          <image
            width="5082"
            height="2250"
            xlink:href="https://dsundell.studio.mcad.edu/design-studio/nocta/imgs/base.jpg"
            opacity="0"
          ></image>
          <rect
            x="1995"
            y="882"
            fill="#fff"
            opacity="0"
            width="995"
            height="326"
            @mouseover="handleTownHover(true)"
            @mouseleave="handleTownHover(false)"
            @click="showModule"
            style="cursor: pointer"
          ></rect>
          <rect
            x="0"
            y="868"
            fill="#fff"
            opacity="0"
            width="1158"
            height="1382"
            @mouseover="handleWoodsHover(true)"
            @mouseleave="handleWoodsHover(false)"
            @click="showModule"
            style="cursor: pointer"
          ></rect>
          <rect
            x="1162"
            y="1544"
            fill="#fff"
            opacity="0"
            width="1683"
            height="706"
            @mouseover="handleLakeHover(true)"
            @mouseleave="handleLakeHover(false)"
            @click="showModule"
            style="cursor: pointer"
          ></rect>
          <RouterLink to="/lighthouse">
            <rect
              x="3800"
              y="964"
              fill="#fff"
              opacity="0"
              width="1282"
              height="1095"
              @mouseover="handleLighthouseHover(true)"
              @mouseleave="handleLighthouseHover(false)"
              style="cursor: pointer"
            ></rect>
          </RouterLink>
        </svg>
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
      homeImage:
        "https://dsundell.studio.mcad.edu/design-studio/nocta/imgs/base.jpg",
    };
  },
  computed: {
    message() {
      if (this.$route.meta.slogan === "yes") {
        console.log("yes slogan");
        return this.hover === true
          ? "WHEN ALL ELSE ENDS, THE NIGHT REMAINS"
          : "Cum cetera finiuntur, nox manet";
      } else {
        console.log("no slogan");
        return this.item.locationName;
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
    handleWoodsHover(s) {
      this.woods = s;
      this.hover = s;
    },
    handleLakeHover(s) {
      this.lake = s;
      this.hover = s;
      console.log("lake check", this.lake);
      console.log("mouse check", this.mouseX);
    },
    handleLighthouseHover(s) {
      this.lighthouse = s;
      this.hover = s;
    },
    handleTownHover(s) {
      this.town = s;
      this.hover = s;
      console.log("town check", this.town);
    },
  },
};
</script>
