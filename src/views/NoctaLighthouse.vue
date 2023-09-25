<script setup>
import ContentModal from '../components/ContentModal.vue'
import ContentModalX from '../components/ContentModalX.vue'
import PuzzleScript from '../components/PuzzleScript.vue'
</script>

<template>
  <main class="reg" :class="{ inactiveCursor: !cursorActive, activeCursor: cursorActive }">

  <!-- Module background overlay -->

  <transition name="label" mode="out-in">
    <div class="module--overlay" v-if="moduleOn"></div>
  </transition>

  <!-- Module parent -->

  <transition name="label" mode="out-in">
    <div class="module--container" v-if="moduleOn">
      <div class="module--wip" v-if="moduleOn"> 
        <ContentModalX @click="hideModule" @mouseover="handleCursorHover(true)" @mouseleave="handleCursorHover(false)"/>

        <!-- Module child: headlight -->
        
        <transition name="label" mode="out-in">
          <ContentModal
            v-if="headlightModule"
            key="headlightModule"
            title="the lighthouse"
            :renderBigImg="false"
            :renderInlineImg="false"
            :renderHeadline="true"
            bigImg="https://dsundell.studio.mcad.edu/design-studio/nocta/https://dsundell.studio.mcad.edu/design-studio/nocta/imgs/danger.jpg"
            inlineImg="https://dsundell.studio.mcad.edu/design-studio/nocta/https://dsundell.studio.mcad.edu/design-studio/nocta/imgs/notice.jpg"
            :renderDecision1="true"
            :renderDecision2="true"
            :renderDecision3="false"
            :renderChecker="false"
            >
              <template #body--content--1> 
                <p>
                  Trekking up a rocky slope leads you to the site of a lighthouse in decay. Withered vines crawl up the crumbling exterior mired by what appears to be years of neglect and disrepair. Despite its obvious state of abandonment, you notice a faint set of footprints rounding the ruinous foundation.
                </p>
              </template>

              <template #decision--1><div @click="showHeadlightModuleLocked(true)" class="module--decision--type type--uppercase--small">inspect the other side</div></template>

              <template #decision--2><div @click="hideModule" class="module--decision--type type--uppercase--small">leave</div></template>
              
              <template #decision--3><div class="module--decision--type type--uppercase--small">give up</div></template>

          </ContentModal>
        </transition>

        <transition name="label" mode="out-in">
          <ContentModal
            v-if="headlightModuleLocked"
            key="headlightModuleLocked"
            title="the lighthouse"
            :renderBigImg="false"
            :renderInlineImg="false"
            :renderHeadline="true"
            bigImg="https://dsundell.studio.mcad.edu/design-studio/nocta/imgs/danger.jpg"
            inlineImg="https://dsundell.studio.mcad.edu/design-studio/nocta/imgs/notice.jpg"
            :renderDecision1="true"
            :renderDecision2="true"
            :renderDecision3="false"
            :renderChecker="true"
            >
              <template #body--content--1> 
                <p>The backside of the old lighthouse is in even worse shape, you notice as you carefully wind around to the other side of the structure. The north side of the headlight sits precariously close to the edge of a sharp cliff, dropping several dozen feet below into the dark waters of the desolate lake.</p>
                <p>A rusty door sits closed parallel to the cliff’s edge, leaving you mere yards away from the precipice. The oxidized threshold has clearly been disturbed recently, made evident to you by small flakes of sickly orange trembling in the breeze amongst sparse tufts of yellowed grass near the doorway. Yet, a heavy chain looped through the handle seals the entrance with a padlock and you don’t know the combination.</p>
                <p>You can’t help but fear your friend is locked inside. Maybe the combination is around here somewhere.</p>
              </template>

              <template #body--content--2>
              </template>

              <template #puzzleChecker>
                <PuzzleScript @someEvent="puzzleGuessCheck" v-if="!lighthouseGuessCorrect"/>
                <div class="type--reaction type-secondary">{{ lighthouseGuessResponse }}</div>
              </template>

              <template #decision--1 v-if="lighthouseGuessCorrect"><div @click="showHeadlightModuleUnlocked(true)" class="module--decision--type type--uppercase--small">enter the lighthouse</div></template>

              <template #decision--2><div @click="hideModule" class="module--decision--type type--uppercase--small">leave</div></template>
              
              <template #decision--3><div class="module--decision--type type--uppercase--small">give up</div></template>

          </ContentModal>
        </transition>

        <transition name="label" mode="out-in">
          <ContentModal
            v-if="headlightModuleUnlocked"
            key="headlightModuleUnlocked"
            title="the lighthouse"
            :renderBigImg="false"
            :renderInlineImg="false"
            :renderHeadline="true"
            bigImg="https://dsundell.studio.mcad.edu/design-studio/nocta/imgs/danger.jpg"
            inlineImg="https://dsundell.studio.mcad.edu/design-studio/nocta/imgs/notice.jpg"
            :renderDecision1="true"
            :renderDecision2="true"
            :renderDecision3="false"
            :renderChecker="false"
            >
              <template #body--content--1> 
                <p>
                  The chain falls away and you lean into the door to shove the heavy steel free from the frame. The door scrapes against the concrete as you push your weight against it. Light floods the dark, circular room and your head slowly tilts up to marvel at the steep set of winding metal stairs.
                </p>
              </template>
              
              <template #puzzleChecker>
                <PuzzleScript @someEvent="puzzleGuessCheck" v-if="!lighthouseGuessCorrect"/>
                <div class="type--reaction type-secondary">{{ lighthouseGuessResponse }}</div>
              </template>

              <template #decision--1><div class="module--decision--type type--uppercase--small"><RouterLink to="/thankyou">climb the stairs</RouterLink></div></template>

              <template #decision--2><div @click="hideModule" class="module--decision--type type--uppercase--small">leave</div></template>
              
              <template #decision--3><div class="module--decision--type type--uppercase--small">give up</div></template>

          </ContentModal>
        </transition>
          
        <!-- Module child: notice -->

        <transition name="label" mode="out-in">
          <ContentModal
            v-if="noticeModule"
            key="noticeModule"
            title="Notice"
            :renderBigImg="true"
            :renderInlineImg="false"
            :renderHeadline="false"
            bigImg=" https://dsundell.studio.mcad.edu/design-studio/nocta/imgs/notice.jpg"
            inlineImg="https://dsundell.studio.mcad.edu/design-studio/nocta/imgs/notice.jpg"
            :renderDecision1="false"
            :renderDecision2="false"
            :renderDecision3="false"
            :renderChecker="false"
            >
              <template #body--content--1> 
                You find an old notice on the ground. Maybe you shouldn't be here?
              </template>

              <template #body--content--2>
              </template>

              <template #decision--1 v-if="lighthouseGuessCorrect"><div @click="showNoticeModule(true)" class="module--decision--type type--uppercase--small">enter the lighthouse</div></template>

              <template #decision--2><div @click="hideModule" class="module--decision--type type--uppercase--small">leave</div></template>
              
              <template #decision--3><div class="module--decision--type type--uppercase--small">give up</div></template>

          </ContentModal>
        </transition>

        <!-- Module child: window -->

        <transition name="label" mode="out-in">
          <ContentModal
            v-if="windowModule"
            key="windowModule"
            title="the keeper's house"
            :renderBigImg="false"
            :renderInlineImg="false"
            :renderHeadline="true"
            bigImg="https://dsundell.studio.mcad.edu/design-studio/nocta/imgs/danger.jpg"
            inlineImg="https://dsundell.studio.mcad.edu/design-studio/nocta/imgs/notice.jpg"
            :renderDecision1="true"
            :renderDecision2="true"
            :renderDecision3="false"
            :renderChecker="false"
            >
              <template #body--content--1> 
                <p>
                  The lighthouse neighbors a small, lonely keeper’s house. The exterior is faded and brittle as the dehydrated planks splinter and crack along the path of the wood grain. The breeze whistles through the shattered panes of cloudy glass. Your skin prickles from the chill when you notice something hanging between the shards of broken glass. 
                </p>
                <p>
                  Taking a closer look, you pluck what appears to be the thick jersey cotton of a red garment. Though clearly ripped away from the rest of the fabric, it’s apparent this item hasn’t been here long. Wasn’t your friend wearing a red hoodie when you last saw them?
                </p>
              </template>

              <template #decision--1><div @click="showWindowModuleInterior(true)" class="module--decision--type type--uppercase--small">inspect inside the house</div></template>

              <template #decision--2><div @click="hideModule" class="module--decision--type type--uppercase--small">leave</div></template>
              
              <template #decision--3><div class="module--decision--type type--uppercase--small">give up</div></template>

          </ContentModal>
        </transition>

        <transition name="label" mode="out-in">
          <ContentModal
            v-if="windowModuleInterior"
            key="windowModuleInterior"
            title="the keeper's house"
            :renderBigImg="false"
            :renderInlineImg="false"
            :renderHeadline="true"
            bigImg="https://dsundell.studio.mcad.edu/design-studio/nocta/imgs/danger.jpg"
            inlineImg="https://dsundell.studio.mcad.edu/design-studio/nocta/imgs/notice.jpg"
            :renderDecision1="true"
            :renderDecision2="true"
            :renderDecision3="true"
            :renderChecker="false"
            >
              <template #body--content--1> 
                <p>
                  There’s a knot in your stomach as you find the door on the west side of the building in even worse condition. The door is latched into the frame, yet the surface is littered with splintering gashes and scrapes. Some of the larger wounds have been patched over with haphazardly-placed planks of scrap wood nailed into the original structure. You can feel your will to continue the search for your friend slipping the longer you observe its unsettling  condition, so with a deep, wavering breath your hand finds the icy iron handle and turns.
                </p>
                <p>
                  The cabin is cold and dark as you slowly enter. The wood groans with each step, threatening to shatter under your weight. Light helpfully pours in from the opened windows, and you can see the outline of most of the objects in the room. 
                </p>
                  <div class="type--reaction type-secondary">“...h-hello?”</div>
                <p>
                  you call out, but only the whistling wind replies. 
                </p>
                <p>
                  The interior matches the exterior, you find, as your eyes scan across a sea of broken bottles, mangled furniture, and dark smears. Taking in the ghastly scene, the air in the structure feels suddenly thick and difficult to inhale. A sense of urgency overcomes you as you search among the detritus for a meaningful clue that will help you locate your friend.
                </p>
              </template>

              <template #decision--1><div @click="showWindowModuleNewspaper(true)" class="module--decision--type type--uppercase--small">Check out the table</div></template>

              <template #decision--2><div @click="showWindowModuleJournal(true)" class="module--decision--type type--uppercase--small">Look by the cots</div></template>
              
              <template #decision--3><div @click="showWindowModuleKnife(true)" class="module--decision--type type--uppercase--small">Inspect the floor</div></template>

          </ContentModal>
        </transition>

        <transition name="label" mode="out-in">
          <ContentModal
            v-if="windowModuleNewspaper"
            key="windowModuleNewspaper"
            title="the keeper's house"
            :renderBigImg="false"
            :renderInlineImg="false"
            :renderHeadline="true"
            bigImg="https://dsundell.studio.mcad.edu/design-studio/nocta/imgs/danger.jpg"
            inlineImg="https://dsundell.studio.mcad.edu/design-studio/nocta/imgs/notice.jpg"
            :renderDecision1="true"
            :renderDecision2="true"
            :renderDecision3="false"
            :renderChecker="false"
            >
            <template #body--content--1> 
                <p>There’s a table in the center of the room surrounded by a pair of broken, overturned chairs. There isn’t much of note nearby, but you do find an interior page of the Northman’s Herald sitting beneath an empty bottle. Most of the articles are mundane reports of county-ongoings, but one brief catches your eye.</p>
                <blockquote>
                <p>In the enigmatic lakeside town of Nocta, ME, fear grips the fishing community as reports emerge of mysterious disappearances on the lake. Fishermen speak of violent boat-rocking encounters, near misses, and haunting growls. Local authorities urge caution, posting warning signs about the unknown disturbance tormenting the local fisheries. The lake's secrets remain shrouded in mystery, but locals have given a name to what they believe is a powerful creature hunting lake-goers: Nina.</p>
                </blockquote>
              </template>

              <template #decision--1><div @click="showWindowModuleInterior(true)" class="module--decision--type type--uppercase--small">look around more</div></template>

              <template #decision--2><div @click="hideModule" class="module--decision--type type--uppercase--small">leave</div></template>
              
              <template #decision--3><div class="module--decision--type type--uppercase--small">give up</div></template>

          </ContentModal>
        </transition>

        <transition name="label" mode="out-in">
          <ContentModal
            v-if="windowModuleJournal"
            key="windowModuleJournal"
            title="the keeper's house"
            :renderBigImg="false"
            :renderInlineImg="false"
            :renderHeadline="true"
            bigImg="https://dsundell.studio.mcad.edu/design-studio/nocta/imgs/danger.jpg"
            inlineImg="https://dsundell.studio.mcad.edu/design-studio/nocta/imgs/notice.jpg"
            :renderDecision1="true"
            :renderDecision2="true"
            :renderDecision3="false"
            :renderChecker="false"
            >
              <template #body--content--1> 
                <p>There’s a pair of cots at the far end of the room that seem somehow slept in, despite the inhospitable nature of the cabin. Each is neighbored by a small stool — a makeshift beside table it appears. On one of the stools sits a small well-worn, leather journal with several entries. You skim over most of the contents, which detail presumably the lighthouse keeper’s stay here.</p>
                <blockquote>
                  <p><i>Oct 12</i><br>
                  The judge delivered my sentence this morning — I am to apprentice with Kraver to become the next lighthouse keeper. Not a life I would have chosen, though it is a fate kinder than execution, I suppose.</p>
                  <p><i>Nov 4</i><br>
                  Kraver is a disagreeable man. It is not an easy feat living alone with him in this suffocating cabin. Nightly, I long to see Lara. I often imagine I can see her as I look upon the town across the lake from the top of headlight.</p>
                  <p><i>Jan 4</i><br>
                  A storm hit two days ago. It's the worst we've seen in years. Power is out, radio towers are down, and we're trapped. It’s just me am Kraver stationed at the headlight. We thought help would come, but it hasn't. We're on our own.</p>
                  <p><i>Jan 8</i><br>
                  The days blend together as we wait for rescue. Supplies are dwindling, and we're growing desperate. Kraver isn't himself anymore. He paces around the dying fire, muttering and shaking his head. I can see the madness creeping into his eyes. He's become paranoid, thinking I'll kill him for food. He sleeps with an axe by his side now. I don't know how much longer we can hold on.</p>
                  <p><i>Jan 14</i><br>
                  No sign of rescue. The isolation is driving us to the brink. No more food. I can't wait here to starve or freeze to death. I’m taking Kraver’s axe and heading west for the highway. If this is my last day on earth, I thought of you until the end, Lara.</p>
                  </blockquote>
                  <p>The journal ends here.</p>
              </template>

              <template #decision--1><div @click="showWindowModuleInterior(true)" class="module--decision--type type--uppercase--small">look around more</div></template>

              <template #decision--2><div @click="hideModule" class="module--decision--type type--uppercase--small">leave</div></template>
              
              <template #decision--3><div class="module--decision--type type--uppercase--small">give up</div></template>

          </ContentModal>
        </transition>

        <transition name="label" mode="out-in">
          <ContentModal
            v-if="windowModuleKnife"
            key="windowModuleKnife"
            title="the keeper's house"
            :renderBigImg="false"
            :renderInlineImg="false"
            :renderHeadline="true"
            bigImg="https://dsundell.studio.mcad.edu/design-studio/nocta/imgs/danger.jpg"
            inlineImg="https://dsundell.studio.mcad.edu/design-studio/nocta/imgs/notice.jpg"
            :renderDecision1="true"
            :renderDecision2="true"
            :renderDecision3="false"
            :renderChecker="false"
            >
              <template #body--content--1> 
                <p>Among the scattered shards of fragmented ceramic plates and amber glass, you see a small carving knife on the floor. The hilt is stained with the same dark smudges that cover other surfaces in the room, but you can’t help but feel having it would be useful.</p> 
                <p>Gingerly, you pick up the knife and take it with you.</p>
              </template>

              <template #decision--1><div @click="showWindowModuleInterior(true)" class="module--decision--type type--uppercase--small">look around more</div></template>

              <template #decision--2><div @click="hideModule" class="module--decision--type type--uppercase--small">leave</div></template>
              
              <template #decision--3><div class="module--decision--type type--uppercase--small">give up</div></template>

          </ContentModal>
        </transition>

        <!-- Module child: plaque -->

        <transition name="label" mode="out-in">
          <ContentModal
            v-if="plaqueModule"
            key="plaqueModule"
            title="The Nocta Headlight"
            :renderBigImg="false"
            :renderInlineImg="false"
            :renderHeadline="true"
            bigImg="https://dsundell.studio.mcad.edu/design-studio/nocta/imgs/danger.jpg"
            inlineImg="https://dsundell.studio.mcad.edu/design-studio/nocta/imgs/notice.jpg"
            :renderDecision1="false"
            :renderDecision2="false"
            :renderDecision3="false"
            :renderChecker="false"
            >
              <template #body--content--1> 
                <p>There’s an inconspicuous stone monolith to the right of the lighthouse that houses a small plaque. It must have been brass once, you think, but now the embossed letters appear as dark and grainy as crude iron.</p><blockquote>
                <p>The Nocta headlight was built in 1865 as a beacon to welcome visitors by land and sea to the town. Funded by the Duguay family, the lighthouse became a symbol of the town and helped dramatically reduce the number of shipwrecks that occurred frequently in the 16th century.</p>
                </blockquote>
              </template>

              <template #decision--1 v-if="lighthouseGuessCorrect"><div @click="showNoticeModule(true)" class="module--decision--type type--uppercase--small">enter the lighthouse</div></template>

              <template #decision--2><div @click="hideModule" class="module--decision--type type--uppercase--small">leave</div></template>
              
              <template #decision--3><div class="module--decision--type type--uppercase--small">give up</div></template>

          </ContentModal>
        </transition>        

        <!-- Module child: wood -->
        <transition name="label" mode="out-in">
          <ContentModal
            v-if="woodchopModule"
            key="woodchopModule"
            title="Wood pile"
            :renderBigImg="true"
            :renderInlineImg="false"
            :renderHeadline="false"
            bigImg="https://dsundell.studio.mcad.edu/design-studio/nocta/imgs/wood.jpg"
            inlineImg="https://dsundell.studio.mcad.edu/design-studio/nocta/imgs/notice.jpg"
            :renderDecision1="false"
            :renderDecision2="false"
            :renderDecision3="false"
            :renderChecker="false"
            >
              <template #body--content--1> 
                There’s a stack of wood here that seems to be recently chopped, but the axe is nowhere to be found.
              </template>

              <template #decision--1 v-if="lighthouseGuessCorrect"><div @click="showNoticeModule(true)" class="module--decision--type type--uppercase--small">enter the lighthouse</div></template>

              <template #decision--2><div @click="hideModule" class="module--decision--type type--uppercase--small">leave</div></template>
              
              <template #decision--3><div class="module--decision--type type--uppercase--small">give up</div></template>

          </ContentModal>
        </transition>        

        </div>
      </div>
    </transition>


    <nav class="lighthouse--demo--container">
      <div class="lighthouse--demo--logo">
        <RouterLink to="/demo"><img src="https://dsundell.studio.mcad.edu/design-studio/nocta/imgs/icon-compass.png" alt="compass icon"></RouterLink>
      </div>
      <div class="lighthouse--demo--right">
        <span class="lighthouse--demo--bold quote span-gold">objective:</span>
        <span class="lighthouse--demo--text type-tertiary">{{ playerObjective }}</span>
      </div>
      <div></div>
    </nav>

    <div class="no-overflow--container">
      <div class="lighthouse--container">
        
        <transition name="label" mode="out-in">
        <svg 
        version="1.1" 
        xmlns="http://www.w3.org/2000/svg" 
        xmlns:xlink="http://www.w3.org/1999/xlink"
        height="100%" 
        viewBox="0 0 5082 2250" 
        v-show="lighthouseNoFade" 
        key="lighthouseNoFade">
          <image width="5082" height="2250" xlink:href="https://dsundell.studio.mcad.edu/design-studio/nocta/imgs/lighthouse-no-fade.jpg"></image>
        </svg>
        </transition>

        <transition name="story" mode="out-in">
        <svg 
        version="1.1" 
        xmlns="http://www.w3.org/2000/svg" 
        xmlns:xlink="http://www.w3.org/1999/xlink"
        height="100%" 
        viewBox="0 0 5082 2250" 
        v-show="lighthouseFade" 
        key="lighthouseFade">
          <image width="5082" height="2250" xlink:href="https://dsundell.studio.mcad.edu/design-studio/nocta/imgs/lighthouse-fade.jpg"></image>
        </svg>
        </transition>        

        <!-- hover hotspot overlay + links -->

        <svg
        version="1.1" 
        xmlns="http://www.w3.org/2000/svg" 
        xmlns:xlink="http://www.w3.org/1999/xlink"
        height="100%" 
        viewBox="0 0 5082 2250" 
        opacity="1">
            <image width="5082" height="2250" xlink:href="https://dsundell.studio.mcad.edu/design-studio/nocta/imgs/lighthouse-fade.jpg" opacity="0"></image>
            
            <!-- headlight -->

            <rect x="2590" y="0" fill="#fff" opacity="0" width="530" height="2040" @mouseover="handleCursorHover(true)" 
            @mouseleave="handleCursorHover(false)"
            @click="showHeadlightModule"> 
            </rect>

            <!-- house -->

            <rect x="1650" y="1370" fill="#fff" opacity="0" width="940" height="770"
            @mouseover="handleCursorHover(true)" 
            @mouseleave="handleCursorHover(false)"
            @click="showWindowModule"> 
            </rect>

            <!-- notice -->

            <rect x="2990" y="2040" fill="#fff" opacity="0" width="120" height="120" @mouseover="handleCursorHover(true)" 
            @mouseleave="handleCursorHover(false)"
            @click="showNoticeModule"> 
            </rect>

            <!-- plaque -->

            <rect x="3520" y="1850" fill="#fff" opacity="0" width="170" height="252" @mouseover="handleCursorHover(true)" 
            @mouseleave="handleCursorHover(false)"
            @click="showPlaqueModule"> 
            </rect>

            <!-- woodcut -->

            <rect x="1205" y="2020" fill="#fff" opacity="0" width="345" height="166" @mouseover="handleCursorHover(true)" 
            @mouseleave="handleCursorHover(false)"
            @click="showWoodchopModule"> 
            </rect>                        

        </svg>

      </div>
    </div>
  </main>
</template>

<script>


export default {
  components: {
    PuzzleScript
  },
  data() {
    return {
      // hover colors
      houseHover: false,
      headlightHover: false,
      noticeHover: false,
      // ghost fade 
      lighthouseFade: false,
      lighthouseNoFade: true,

      /* Modules */
      
      // headline modules
      headlightModule: false,
      headlightModuleLocked: false,
      headlightModuleUnlocked: false,
      // window modules
      windowModule: false,
      windowModuleInterior: false,
      windowModuleNewspaper: false,
      windowModuleJournal: false,
      windowModuleKnife: false,
      // notice module
      noticeModule: false,
      // plaque module
      plaqueModule: false,
      woodchopModule: false,
      // hover control
      hover: false,
      cursorActive: false,
      moduleOn: false,
      // Puzzle key
      lighthouseGuessCorrect: false,
      lighthouseGuessResponse: '',
      lighthouseAnswer: 'Nina',
      playerCheckedLighthouse: false,
      playerObjective: ''
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
/*       activate() {
        var that = this;
        setTimeout(function() { 
          that.lighthouseFade = true;
          }, 2000);
      }, */
      changeObjective(){
        if(this.playerCheckedLighthouse == true) {
          this.playerObjective = 'Open the lighthouse'
        } else {
          this.playerObjective = 'Explore your surroundings'
        }
      },
      showNoticeModule() {
        this.noticeModule = true;
        this.moduleOn = true;
      },
      showPlaqueModule() {
        this.plaqueModule = true;
        this.moduleOn = true;
      },
      showWoodchopModule() {
        this.woodchopModule = true;
        this.moduleOn = true;
      },
      showHeadlightModuleLocked() {
        this.headlightModuleLocked = true;
        this.playerCheckedLighthouse = true;
        this.changeObjective();
        this.headlightModule = false;
        this.moduleOn = true;
      },
      showHeadlightModuleUnlocked() {
        this.headlightModuleUnlocked = true;
        this.headlightModuleLocked = false;
        this.moduleOn = true;
      },
      showHeadlightModule() {
        this.headlightModule = true;
        this.moduleOn = true;
      },
      showWindowModule() {
        this.windowModule = true;
        this.windowModuleNewspaper = false;
        this.windowModuleJournal = false;
        this.windowModuleKnife = false;
        this.moduleOn = true;
        this.$emit('toggle-wind-sounds');
      },
      showWindowModuleInterior() {
        if (this.windowModule == true) {
          this.$emit('toggle-wood-sounds');
          this.windowModuleInterior = true;
          this.windowModule = false;
        } if (this.windowModuleNewspaper == true || this.windowModuleJournal == true || this.windowModuleKnife == true) {
          this.moduleOn = false;
          this.windowModuleInterior = false;
          this.windowModule = false;
          this.windowModuleNewspaper = false;
          this.windowModuleJournal = false;
          this.windowModuleKnife = false;
          setTimeout(() => {
            this.moduleOn = true;
            this.windowModuleInterior = true;
            console.log('timeout check')
          }, "250");
        }
      },
      showWindowModuleNewspaper() {
        this.windowModuleNewspaper = true;
        this.windowModuleInterior = false;
        this.moduleOn = true;
      },
      showWindowModuleJournal() {
        this.windowModuleJournal = true;
        this.windowModuleInterior = false;
        this.moduleOn = true;
      },
      showWindowModuleKnife() {
        this.windowModuleKnife = true;
        this.windowModuleInterior = false;
        this.moduleOn = true;
      },
      hideModule() {
        this.headlightModule = false;
        this.noticeModule = false;
        this.windowModule = false;
        this.plaqueModule = false;
        this.woodchopModule = false;
        this.headlightModuleLocked = false;
        this.headlightModuleUnlocked = false;
        this.windowModuleInterior = false;
        this.windowModuleNewspaper = false;
        this.windowModuleJournal = false;
        this.windowModuleKnife = false;
        this.moduleOn = false;
        this.lighthouseGuessResponse = ''
        this.$emit('toggle-wind-sounds-off');
        this.$emit('toggle-wood-sounds-off');
      },
        handleCursorHover(s) {
        this.hover = s;
        this.cursorActive = s;
        console.log('hover check');
      },
      puzzleGuessCheck(event) {
        console.log(event.toLowerCase())
        if(event.toLowerCase()===this.lighthouseAnswer.toLowerCase()) {
          this.lighthouseGuessCorrect = true
          this.lighthouseGuessResponse = 'The lock clicks open.'
          this.$emit('get-unlocked-sound');
        } else {
          this.lighthouseGuessResponse = 'Nothing happens.'
          this.lighthouseGuessCorrect = false
          this.$emit('get-chain-sound');
        }
      }
    },
  beforeMount(){
    /* this.activate(); // fade for ghost img */
    this.changeObjective(); // sets initial objective
  }
};
</script>