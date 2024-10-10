<template>
  <div class="pesel-validator">
    <h1>Walidacja numeru PESEL</h1>
    <input type="text" v-model="pesel" placeholder="Wprowadź numer PESEL" />
    <button @click="validatePesel">Sprawdź</button>
    <p v-if="validationMessage" :class="{ error: !isValid, success: isValid }">
      {{ validationMessage }}
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const pesel = ref("");
const isValid = ref(null);
const validationMessage = ref("");

// Funkcja walidująca PESEL
function validatePesel() {
  if (pesel.value.length !== 11 || !/^\d+$/.test(pesel.value)) {
    isValid.value = false;
    validationMessage.value = "Numer PESEL musi składać się z 11 cyfr.";
    return;
  }

  const controlSum =
    pesel.value
      .split("")
      .map(
        (digit, index) =>
          parseInt(digit) * [1, 3, 7, 9, 1, 3, 7, 9, 1, 3][index],
      )
      .reduce((acc, curr) => acc + curr, 0) % 10;

  const lastDigit = parseInt(pesel.value[10]);

  if ((10 - controlSum) % 10 === lastDigit) {
    isValid.value = true;
    validationMessage.value = "Numer PESEL jest poprawny.";
  } else {
    isValid.value = false;
    validationMessage.value = "Numer PESEL jest niepoprawny.";
  }
}
</script>

<style scoped>
.pesel-validator {
  max-width: 400px;
  margin: auto;
  text-align: center;
}

.error {
  color: red;
}

.success {
  color: green;
}
</style>
