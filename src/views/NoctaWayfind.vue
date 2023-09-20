<script setup>
import NavOpen from "@/components/NavOpen.vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <main class="alt">
    <NavOpen />
    <div class="wayfind--container">
        <div class="wayfind--items">
          <RouterLink to="/about"><div class="wayfind--item type-primary">About</div></RouterLink>
          <RouterLink to="/meta"><div class="wayfind--item type-primary">Meta</div></RouterLink>
        </div>
    </div>
  </main>
</template>