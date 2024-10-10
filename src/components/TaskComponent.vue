<template>
  <div class="task-container">
    <div class="title">
      <h2 class="bold">
        <slot name="heading"></slot>
      </h2>
    </div>
    <div class="details">
      <h3>
        <div class="bold">Opis Zadania:</div>
        <slot name="taskDescription"></slot>
      </h3>
    </div>
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.task-container {
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
      flex-direction: column;
      gap: 5px;
    }
  }
}
</style>
