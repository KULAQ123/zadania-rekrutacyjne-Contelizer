<template>
  <header>
    <div class="content">
      <div class="start-container">
        <ButtonComponent to="/" onlyIcon>
          <template #icon
            ><img src="@/assets/logo.svg" alt="logo-vue" /> </template
        ></ButtonComponent>
      </div>
      <div class="navbar-container">
        <ButtonComponent to="/task-one" text="Zadanie pierwsze">
        </ButtonComponent>
        <ButtonComponent to="/task-two" text="Zadanie drugie">
        </ButtonComponent>
        <ButtonComponent to="/task-three" text="Zadanie trzecie">
        </ButtonComponent>
      </div>
    </div>
  </header>
</template>

<script setup>
import ButtonComponent from "@/components/ButtonComponent.vue";
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: start;
  gap: 350px;

  .start-container {
    display: flex;
    padding-top: 20px;

    img {
      width: 50px;
    }
  }

  .navbar-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding-top: 20px;
  }
}
</style>
