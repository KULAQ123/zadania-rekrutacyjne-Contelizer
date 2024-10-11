<template>
  <div class="task-completion">
    <h1>Walidacja numeru PESEL</h1>
    <InputComponent
      v-model="pesel"
      label="Numer PESEL"
      placeholder="Wprowadź numer PESEL"
      :isValid="isValid"
      :errorMessage="errorMessage"
    />
    <ButtonComponent
      type="button"
      text="Sprawdź"
      radius
      black-text
      white
      @click="validatePesel"
    >
    </ButtonComponent>
  </div>
</template>

<script setup>
import { ref } from "vue";
import InputComponent from "@/components/InputComponent.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";

const pesel = ref("");
const isValid = ref(null);
const errorMessage = ref("");

// Funkcja walidująca PESEL
function validatePesel() {
  if (pesel.value.length !== 11 || !/^\d+$/.test(pesel.value)) {
    if (pesel.value.length === 0) {
      isValid.value = null;
      errorMessage.value = "";
      return;
    }
    isValid.value = false;
    errorMessage.value = "Numer PESEL musi składać się z 11 cyfr.";
    return;
  }

  let weight = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
  let sum = 0;
  let controlNumber = parseInt(pesel.value.substring(10, 11));

  for (let i = 0; i < weight.length; i++) {
    sum += parseInt(pesel.value.substring(i, i + 1)) * weight[i];
  }
  sum = sum % 10;

  isValid.value = (10 - sum) % 10 === controlNumber;
  errorMessage.value = isValid.value
    ? "Numer PESEL jest poprawny."
    : "Numer PESEL jest niepoprawny.";
}
</script>

<style scoped>
.task-completion {
  display: flex;
  flex-direction: column;
  margin: auto;
  gap: 10px;
  padding-top: 100px;
  text-align: center;
  align-items: center;

  .error {
    color: red;
  }

  .success {
    color: green;
  }
}
</style>
