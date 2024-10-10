<template>
  <HeaderComponent></HeaderComponent>
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
</template>

<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
</script>
