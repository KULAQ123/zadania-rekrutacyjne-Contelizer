<template>
  <div class="content">
    <TaskComponent>
      <template #heading>Zadanie drugie</template>
      <template #taskDescription
        >Napisz program w Vue3 do walidacji numeru PESEL zgodnie z oficjalną
        specyfikacją formatu. Przygotuj testy jednostkowe sprawdzające kilka
        danych nieprawidłowych i przynajmniej jeden poprawny numer
        PESEL.</template
      >
      <template #default><TaskTwoComponent></TaskTwoComponent> </template>
    </TaskComponent>
  </div>
</template>

<script setup>
import TaskComponent from "@/components/TaskComponent.vue";
import TaskTwoComponent from "@/components/TaskTwoComponent.vue";
</script>

<style lang="scss" scoped></style>
