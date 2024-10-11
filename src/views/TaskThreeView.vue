<template>
  <div class="content">
    <TaskComponent>
      <template #heading>Zadanie trzecie</template>
      <template #taskDescription
        >Napisz w Vue3 obsługę API dostępnego pod adresem
        <a href="https://gorest.co.in/" target="_blank">https://gorest.co.in/</a
        >. Aplikacja powinna posiadać widok listy użytkowników (pobranych z API)
        oraz mieć możliwość ich wyszukiwania i edycji istniejących
        wpisów.</template
      >
      <template #default><TaskThreeComponent></TaskThreeComponent> </template>
    </TaskComponent>
  </div>
</template>

<script setup>
import TaskComponent from "@/components/TaskComponent.vue";
import TaskThreeComponent from "@/components/TaskThreeComponent.vue";
</script>

<style lang="scss" scoped></style>
