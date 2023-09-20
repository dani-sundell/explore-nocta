<script setup>
import NavClose from "@/components/NavClose.vue"
</script>

<template>
  <main class="reg" :class="{ inactiveCursor: !cursorInactive, activeCursor: cursorInactive }"> <!-- sets the cursor for non linked objects, see css for a-link and default cursor-->
    <transition name="label" mode="out-in">
      <div class="module--container" v-show="clickedWip" key="clickedWip">
        <div class="module--wip">
          <div class="module--close">
            <div class="module--hmbgr module--hmbgr__alt" @click="hideModule" @mouseenter="handleCursorHover(true)" @mouseleave="handleCursorHover(false)">
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
          <span class="type-secondary">this is</span>
          <span class="type-primary">a Test</span>
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
          >
            <image
              width="5082"
              height="2250"
              xlink:href="https://dsundell.studio.mcad.edu/design-studio/nocta/imgs/base.jpg"
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
      cursorInactive: false
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
      this.cursorInactive = s;
    },
    handleLakeHover(s) {
      this.lake = s;
      this.hover = s;
      this.cursorInactive = s;
      // console.log("cursor check", this.cursorInactive);
      // console.log("lake check", this.lake);
    },
    handleLighthouseHover(s) {
      this.lighthouse = s;
      this.hover = s;
      this.cursorInactive = s;
    },
    handleTownHover(s) {
      this.town = s;
      this.hover = s;
      this.cursorInactive = s;
      // console.log("town check", this.town);
    },
    handleCursorHover(s) {
      this.hover = s;
      this.cursorInactive = s;
      // console.log("cursor check", this.cursorInactive);
    }
  },
};
</script>
