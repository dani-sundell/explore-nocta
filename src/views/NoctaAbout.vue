<script setup>
import NavClose from "@/components/NavClose.vue"
import CreatureData from "./../data/creature-data.json"
import { useRoute } from "vue-router"
</script>

<template>
    <main class="alt">
        <nav class="nav--container open">
  <div class="nav--logo"><RouterLink to="/"><img src="https://dsundell.studio.mcad.edu/design-studio/nocta/imgs/icon-compass.png" alt="compass icon"></RouterLink></div>
  <div class="nav--right">
    <div class="nav--location-text type-tertiary"
    >About</div>
    <RouterLink to="/wayfind"><div class="about--nav--hmbgr">
      <i class="about--lines hmbgr"></i>
      <i class="about--lines hmbgr"></i>
      <i class="about--lines hmbgr"></i>
    </div></RouterLink>
  </div>
</nav>

    <div class="about--container">
        <div class="creature--headline--container">
            <div class="creature--headline--type--container">
                <h1 class="creature--headline--type nonhanging-padding">
                        <span class="type-secondary">it was a stormy night in</span>
                        <span class="type-primary about--type">1689</span>
                </h1>
                <div class="about--details">
                    <div class="creature--body--container">
                        <div class="about--body type-body">
                            <p>On June 21, Lucien Duguay washed up on the shores of Lake Nocta — half-drowned and shivering. The frenchman was a naturalist aboard the <i>Bête de Mer</i> when the storm seemingly overtook the vessel — though there is debate about what truly sunk the <i>Bête de Mer</i>.</p><p>Duguay was the only surviving member of the crew and found himself alone and lost in the area now called <i>Nocta</i>. The frenchman planned to somehow travel north to find others at <i>Cap Diamant</i>, but spent several nights near Lake Nocta surviving off berries, acorns, and, importantly, fish.</p><p>Years after the shipwreck, Duguay ultimately decided to return to Nocta due to its unique flora and fauna. His discovery of the <i>Salmo noctem</i> (night salmon), the rare, delicious, and valuable species of salmon known for its obsidian, opalescent scales, became the basis of Nocta’s economy and stimulated the growth of the town for the next three-hundred years. In fact, the town motto <i>&#8220;Cum cetera finiuntur, nox manet&#8221;</i> (when all else ends, the night remains) was inspired by Duguay’s survival on the <i>Salmo noctem</i>, which provided him continuous sustenance through his hardship.</p><p>The town became populated with fishermen and lumberjacks, who brought their families along with them. For centuries, Nocta was a thriving harbor community known for its unique exports.</p><p>Duguay learned soon after returning to found the township that the strange lake ecosystem brought curses alongside its blessings. Consistent strange occurrences and tragedies stalled the town’s growth. Ships frequently disappeared without a trace in the harbor. Lumberjacks would go missing in the woods. It quickly developed a reputation of being plagued by disaster and peril. Yet, there was a constant stream of newcomers in Nocta since its founding — carelessly chasing the riches that <i>Salmo noctem</i> could bring them without any concern for the danger.</p><p>Now, Nocta is nearly abandoned. Only the descendants of oldest residents remain — those who have become accustomed to the terrors of the region. It’s rumored that the only remaining inhabitants are the perpetrators of the horrors themselves.</p><p>Nocta’s economy still thrives on the export of <i>Salmo noctem</i>, but it’s also become a popular tourist destination for brave (perhaps, foolish) thrill seekers hoping to catch a glimpse of Nocta’s famous lake monster, Nina, and the long list of resident ghosts that are said to live there.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="about--content">
            <div class="about--img">
            </div>
        </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      story: true,
      history: false,
      hover: false
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
    },
  methods: {
    storyShow() {
            this.story = true
            this.history = false
            console.log("story", this.story)
        },
    historyShow() {
           this.history = true
           this.story = false
           console.log("history", this.history)
        },
      handleHover(s){
        this.hover = s;
      }
    }
};
</script>
