<template>
  <div class="info-container">
    <div class="title">
      <h2 class="bold">
        <slot name="heading"></slot>
      </h2>
    </div>
    <div class="details">
      <h3>
        <div class="bold">Imię i nazwisko:</div>
        {{ fullName }}
      </h3>
      <h3>
        <div class="bold">Email:</div>
        {{ email }}
      </h3>
      <h3>
        <div class="bold">Telefon:</div>
        {{ phone }}
      </h3>
      <h3>
        <a :href="profileLinkedIn" target="_blank" class="bold">LinkedIn</a>
      </h3>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  fullName: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  profileLinkedIn: {
    type: String,
  },
});
</script>

<style lang="scss" scoped>
.info-container {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;

  .title {
    border: 1px solid #d3d3d3;
    border-radius: 10px;
    padding: 30px 20px;
  }

  .details {
    gap: 10px;
    display: flex;
    flex-direction: column;
    padding: 30px 20px;

    h3 {
      display: flex;
      gap: 5px;
    }
  }
}
</style>
