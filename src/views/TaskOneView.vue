<template>
  <div class="content">
    <TaskComponent>
      <template #heading>Zadanie pierwsze</template>
      <template #taskDescription
        >Napisz program w Vue3, który posiada obsługę formularza do wgrania
        pliku tekstowego, a następnie przestawi losowo szyk liter w każdym
        wierszu oprócz pierwszej i ostatniej litery wyrazu. Uwzględnij
        interpunkcję, wielkie/małe litery, wielolinijkowe teksty, polskie
        znaki.</template
      >
      <template #default><TaskOneComponent></TaskOneComponent> </template>
    </TaskComponent>
  </div>
</template>

<script setup>
import TaskComponent from "@/components/TaskComponent.vue";
import TaskOneComponent from "@/components/TaskOneComponent.vue";
</script>

<style lang="scss" scoped></style>
