<script setup>
import { RouterLink, RouterView } from "vue-router"
import { useRoute } from 'vue-router'
import PuzzleScript from "@/components/PuzzleScript.vue";
</script>

<template>
      <router-view v-slot="{ Component }"
      @toggle-wind-sounds="receiveWindSounds"
      @toggle-wind-sounds-off="killWindSounds"
      @toggle-wood-sounds="receiveWoodSounds"
      @toggle-wood-sounds-off="killWoodSounds"
      @get-chain-sound="receiveChainSound"
      @get-unlocked-sound="receiveUnlockedSound"
      >
        <transition name="fade" mode="out-in"> 
          <component :is="Component" />
        </transition>
      </router-view>
      <div class="audio--button" @click="audioToggle">
        <img v-show="soundOn" kay="on" src="https://dsundell.studio.mcad.edu/design-studio/nocta/imgs/icon-sound-on.png" alt="sound on">
        <img v-show="soundOff" kay="off" src="https://dsundell.studio.mcad.edu/design-studio/nocta/imgs/icon-sound-off.png" alt="sound off">
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
const lakeNoise = new Audio('https://dsundell.studio.mcad.edu/design-studio/nocta/imgs/lake.wav');
lakeNoise.volume = .025;
lakeNoise.loop = true;

const noctaMusic = new Audio('https://dsundell.studio.mcad.edu/design-studio/nocta/imgs/anthem.mp3');
noctaMusic.volume = 1;
noctaMusic.loop = true;

const noctaWind = new Audio('https://dsundell.studio.mcad.edu/design-studio/nocta/imgs/wind.wav');
noctaWind.volume = 0;
noctaWind.loop = true;

const noctaGhost = new Audio('https://dsundell.studio.mcad.edu/design-studio/nocta/imgs/ghost.mp3');
noctaGhost.volume = .05;
noctaGhost.loop = false;

const lighthouseWind = new Audio('https://dsundell.studio.mcad.edu/design-studio/nocta/imgs/wind-whistle.mp3');
lighthouseWind.volume = .5;
lighthouseWind.loop = false;

const lighthouseWood = new Audio('https://dsundell.studio.mcad.edu/design-studio/nocta/imgs/wood-creak.mp3');
lighthouseWood.volume = .2;
lighthouseWood.loop = false;

const lighthouseChain = new Audio('https://dsundell.studio.mcad.edu/design-studio/nocta/imgs/chain.mp3');
lighthouseChain.volume = .75;
lighthouseChain.loop = false;

const lighthouseUnlocked = new Audio('https://dsundell.studio.mcad.edu/design-studio/nocta/imgs/unlocked.mp3');
lighthouseUnlocked.volume = .75;
lighthouseUnlocked.loop = false;

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
      cursorInactive: false,
      timeData: '',
      timeArray: '',
      timer: '',
      playWindSounds: false,
      playWoodSounds: false
    }
  },
  methods: {
    /* Wind sound intervals ⬇️ */
    receiveWindSounds() {
      this.playWindSounds = true
      this.toggleWindSounds() 
    },
    randRange(data) {
       this.timeData = data[Math.floor(data.length * Math.random())];
       return this.timeData;
    },
    toggleWindSounds() {
      if (this.playWindSounds == true && this.soundOn == true){
      this.timeArray = new Array(50000, 36000, 15000, 25000, 20000, 30000, 46000, 19000);

      setTimeout(() => lighthouseWind.play(), 3000);

      clearInterval(this.timer);
      this.timer = setInterval(this.toggleWindSounds, this.randRange(this.timeArray));
      } else {
        lighthouseWind.pause();
      }
    },
    killWindSounds(){
      this.playWindSounds = false
    },
    /* Wind sound intervals ⬆️ */


    /* Wood sound intervals ⬇️ */
    receiveWoodSounds() {
      this.playWoodSounds = true
      this.toggleWoodSounds() 
    },
    randRange(data) {
       this.timeData = data[Math.floor(data.length * Math.random())];
       return this.timeData;
    },
    toggleWoodSounds() {
      if (this.playWoodSounds == true && this.soundOn == true){
      this.timeArray = new Array(52000, 42000, 37000, 23000, 21000, 33000, 47000, 26000);

      setTimeout(() => lighthouseWood.play(), 3000);
      console.log('wood check')

      clearInterval(this.timer);
      this.timer = setInterval(this.toggleWoodSounds, this.randRange(this.timeArray));
      } else {
        lighthouseWood.pause();
        console.log('wood kill')
      }
    },
    killWoodSounds(){
      this.playWoodSounds = false
    },
    /* Wood sound intervals ⬆️ */

    /* Chain sound intervals ⬇️ */
    receiveChainSound() {
      if(this.soundOn == true){
      lighthouseChain.play()
      }
    },
    receiveUnlockedSound() {
      if(this.soundOn == true){
      lighthouseUnlocked.play()
      }
    },
    /* Chain sound intervals ⬆️ */

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
      /* setTimeout(() => this.ghost(), 1000); */
  }
}
};

</script>
