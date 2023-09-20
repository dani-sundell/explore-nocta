<script setup>
import { RouterLink, RouterView } from "vue-router"
import { useRoute } from 'vue-router'
import PuzzleScript from "@/components/PuzzleScript.vue";
</script>

<template>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in"> 
          <component :is="Component" />
        </transition>
      </router-view>
      <div class="audio--button" @click="audioToggle">
        <img v-show="soundOn" kay="on" src="imgs/icon-sound-on.png" alt="sound on">
        <img v-show="soundOff" kay="off" src="imgs/icon-sound-off.png" alt="sound off">
      </div>
</template>

<style>
@import "@/assets/main.css";
/* router transition styles */
.fade-enter-active,
.fade-leave-active {
  transition-duration: .75s;
  transition-property: opacity;
  transition-timing-function: ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.checker-enter-active {
  transition-duration: 1s;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(1,-0.55,.67,.3);
}
.checker-leave-active {
  transition-duration: 1s;
  transition-property: opacity;
  transition-timing-function: ease;
}
.checker-enter-from,
.checker-leave-to {
  opacity: 0;
}

.story-enter-active,
.story-leave-active {
  transition-duration: .75s;
  transition-property: opacity;
  transition-timing-function: ease;
}
.story-enter-from,
.story-leave-to {
  opacity: 0;
}

.label-enter-active,
.label-leave-active {
  transition-duration: .25s;
  transition-property: opacity;
  transition-timing-function: ease;
}
.label-enter-from,
.label-leave-to {
  opacity: 0;
}
</style>

<script>
const lakeNoise = new Audio('imgs/lake.wav');
lakeNoise.volume = .025;
lakeNoise.loop = true;

const noctaMusic = new Audio('imgs/anthem.mp3');
noctaMusic.volume = 1;
noctaMusic.loop = true;

const noctaWind = new Audio('imgs/wind.wav');
noctaWind.volume = 0;
noctaWind.loop = true;

const noctaGhost = new Audio('imgs/ghost.mp3');
noctaGhost.volume = .05;
noctaGhost.loop = false;

export default {
  setup() {

  },
  data() {
    return {
      audio: false,
      soundOn: false,
      soundOff: true,
      playGhost: false,
      puzzleExists: false,
      cursorInactive: false
    }
  },
  methods: {
    audioToggle() {
            if (!this.audio) {
            this.soundOn = true
            this.soundOff = false
            this.audio = true
            noctaWind.play()
            lakeNoise.play()
            noctaMusic.play()
            } else {
              this.soundOff = true
              this.soundOn = false
              this.audio = false
              noctaWind.pause()
              lakeNoise.pause()
              noctaMusic.pause()
            }
          },
    ghost() {
            if (this.$route.name === "lighthouse" && this.audio === true) {
              // console.log('ghost sound check');
              noctaGhost.play()
            } else {
              // console.log('no sound ghost');
              noctaGhost.pause()
            }
          },
    puzzleExistsCheck() {
      if (this.$route.name === "lighthouse") {
        this.puzzleExists = true
        console.log('puzzle check yes')
      } else {
        this.puzzleExists = false
        console.log('puzzle check no')
      }
    }
  },
  watch: {
    $route(to, from) {
      // console.log("route changed");
      this.puzzleExistsCheck();
      setTimeout(() => this.ghost(), 1000);
  }
}
};

</script>
