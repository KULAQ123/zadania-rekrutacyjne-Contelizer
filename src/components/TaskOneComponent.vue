<template>
  <div class="task-completion">
    <form class="form-container" @submit.prevent="handleFileUpload">
      <input type="file" @change="onFileChange" accept=".txt" />
      <ButtonComponent
        type="button"
        text="Prześlij plik"
        radius
        black-text
        white
        @click="handleFileUpload"
      >
        Prześlij plik
      </ButtonComponent>
    </form>

    <div v-if="textAfterSwitch" class="output">
      <h3>Tekst po przestawieniu losowym szyku liter:</h3>
      <pre>{{ textAfterSwitch }}</pre>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ButtonComponent from "@/components/ButtonComponent.vue";

const file = ref(null);
const textAfterSwitch = ref("");

function handleFileUpload() {
  if (file.value) {
    const reader = new FileReader();
    reader.onload = function () {
      const text = reader.result;
      textAfterSwitch.value = scrambleText(text);
    };
    reader.readAsText(file.value);
  } else {
    alert("Proszę wybrać poprawny plik.");
  }
}

// Funkcja do losowego mieszania liter
function shuffleWord(word) {
  if (word.length <= 3) return word; // Krótkie słowa pozostają bez zmian

  const middle = word.slice(1, -1);
  const shuffled = middle
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");

  return word[0] + shuffled + word[word.length - 1];
}

// Funkcja przetwarzająca tekst w wierszach
function scrambleText(text) {
  return text
    .split(/\r?\n/) // Podziel na wiersze
    .map(function (line) {
      return line
        .split(" ")
        .map(function (word) {
          return shuffleWord(word);
        })
        .join(" ");
    })
    .join("\n");
}

// Obsługa zmiany pliku
function onFileChange(event) {
  file.value = event.target.files[0];
}
</script>

<style lang="scss" scoped>
.task-completion {
  display: flex;
  flex-direction: column;
  margin: auto;
  gap: 40px;
  padding-top: 100px;
  text-align: center;
  align-items: center;

  .form-container {
    display: flex;
    align-items: center;

    input {
      cursor: pointer;
    }
  }

  .output {
    margin-top: 20px;
    text-align: left;
    white-space: pre-wrap;
  }
}
</style>
