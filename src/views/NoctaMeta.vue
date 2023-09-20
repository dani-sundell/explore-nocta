<script setup>
import NavClose from "@/components/NavClose.vue";
import CreatureData from "./../data/creature-data.json"
import { useRoute } from "vue-router";
</script>

<template>
    <main class="alt" style="overflow: auto;">
        <nav class="nav--container open">
            <div class="nav--logo"><RouterLink to="/"><img src="https://dsundell.studio.mcad.edu/design-studio/nocta/imgs/icon-compass.png" alt="compass icon"></RouterLink></div>
            <div class="nav--right">
                <div class="nav--location-text type-tertiary"
                >Meta</div>
                <RouterLink to="/wayfind"><div class="about--nav--hmbgr">
                <i class="about--lines hmbgr"></i>
                <i class="about--lines hmbgr"></i>
                <i class="about--lines hmbgr"></i>
                </div></RouterLink>
            </div>
        </nav>

    <div class="meta--container">
        <div class="meta--headline--type--container">
            <div class="meta--headline--type nonhanging-padding">
                    <h1 class="meta--head-one">
                        <img src="https://dsundell.studio.mcad.edu/design-studio/nocta/imgs/icon-eye.png">
                        <span class="type-primary about--type">Nocta</span>
                    </h1>
                    <h2 class="type-secondary">is a place I sometimes find myself.</h2>
                    <div class="meta--head-two">
                        <h3 class="quote">A place as terrifying as it is tantilizing,</h3>
                        <h3 class="quote">where I’ve turned my nightmares into dreams.</h3>
                    </div>
            </div>
            <div class="meta--details">
                    <div class="meta--body type-body">
                        <p>
                            This project is an attempt to unearth the fears we bury. 
                            As a person with a deep understanding of intangible fears, this project is an expression of an internal world riddled with anxieties and irrational fears. I believe some of us are cursed with an unfortunate connection to our fears — somehow both fascinated and terrified all at once. Nocta is my personal manifestation of that dichomy — a place that I both hold dear and would hate to actually visit. There is a lot to learn from these archetypal inhabitants, horrifying as they may be. These creatures, legends, and lore are all reflections of the real fears we live with everyday — the fear of being alone, the fear of losing control, the fear of knowing, the fear of death. These fears are a vital and instructional part of the human experience. And it’s important to look them in the eyes — even if it’s scary.
                        </p>
                        <p>
                            This project has helped me look into the eyes of my fear and better understand where it comes from and how to handle it. I hope that through the story of Nocta, you too can reflect on the things you fear and challenge yourself to face them.
                        </p>
                </div>
            </div>
            <div class="meta--img">
            </div>
        </div>
    </div>
    
    <div class="meta--two--container">
        <img src="https://dsundell.studio.mcad.edu/design-studio/nocta/imgs/bookplate.png" alt="Explore Nocta is a personal endeavor by designer Dani Sundell created in 2022 while studying at the Minneapolis College of Art &amp; Design">
    </div>

    <div class="meta--three-container">
        <div class="meta--three--type">
            <div class="meta--stack--intro">
                <h3 class="quote">This project was accomplished with the help of tools like</h3>
                <div class="meta--stack--tools">
                    <h2 class="type-secondary">photoshop</h2>
                    <h2 class="type-secondary">figma</h2>
                    <h2 class="type-secondary">vue.js</h2>
                    <h2 class="type-secondary">procreate</h2>
                </div>
                <h3 class="quote">&amp; the illuminating writings and research of</h3>
            </div>
            <div class="meta--stack--lit">
                <div class="meta--stack--lit-group">

                    <div class="meta--stack--lit-item">
                        <div class="meta--stack--lit-title type-secondary">
                            Haunted : on Ghosts, Witches, Vampires, Zombies, and Other Monsters of the Natural and Supernatural Worlds
                        </div>
                        <div class="meta--stack--lit-author quote">
                            Braudy, Leo 
                        </div>
                        <div class="meta--stack--lit-press type-body">
                             Yale University Press, 2016
                        </div>
                    </div>
              
                    <div class="meta--stack--lit-item">
                        <div class="meta--stack--lit-title type-secondary">
                            Dead Blondes and Bad Mothers : Monstrosity, Patriarchy, and the Fear of Female Power
                        </div>
                        <div class="meta--stack--lit-author quote">
                            Doyle, Sady
                        </div>
                        <div class="meta--stack--lit-press type-body">
                            Melville House, 2019
                        </div>
                    </div>

                    <div class="meta--stack--lit-item">
                        <div class="meta--stack--lit-title type-secondary">
                            Haunting Experiences : Ghosts in Contemporary Folklore 
                        </div>
                        <div class="meta--stack--lit-author quote">
                            Goldstein, Diane E., et al. 
                        </div>
                        <div class="meta--stack--lit-press type-body">
                            Utah State University Press, 2007
                        </div>
                    </div>
                    
                </div>
                <div class="meta--stack--lit-group">
                    
                    <div class="meta--stack--lit-item">
                        <div class="meta--stack--lit-title type-secondary">
                            Monsters from the Id : the Rise of Horror in Fiction and Film
                        </div>
                        <div class="meta--stack--lit-author quote">
                            Jones, E. Michael
                        </div>
                        <div class="meta--stack--lit-press type-body">
                            Spence Pub. Co., 2000
                        </div>
                    </div>
                    
                    <div class="meta--stack--lit-item">
                        <div class="meta--stack--lit-title type-secondary">
                            The Gothic Literature and History of New England : Secrets of the Restless Dead
                        </div>
                        <div class="meta--stack--lit-author quote">
                            Ringel, Faye
                        </div>
                        <div class="meta--stack--lit-press type-body">
                             Anthem Press, 2022
                        </div>
                    </div>
                    
                    <div class="meta--stack--lit-item">
                        <div class="meta--stack--lit-title type-secondary">
                            Out of the Ordinary : Folklore and the Supernatural
                        </div>
                        <div class="meta--stack--lit-author quote">
                            Walker, Barbara
                        </div>
                        <div class="meta--stack--lit-press type-body">
                             Utah State University Press, 1995
                        </div>
                    </div>
                </div>
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
