<template>
  <div class="custom-input">
    <label v-if="label">{{ label }}</label>
    <input
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      :accept="accept"
      @input="$emit('update:modelValue', $event.target.value)"
      :class="{
        error: isValid === false,
        success: isValid === true,
      }"
    />
    <p
      class="message"
      :class="{
        error: isValid === false,
        success: isValid === true,
      }"
    >
      {{ errorMessage }}
    </p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "text",
  },
  placeholder: {
    type: String,
    default: "Wprowadź wartość",
  },
  label: {
    type: String,
    default: "",
  },
  isValid: {
    type: Boolean,
    default: null,
  },
  errorMessage: {
    type: String,
    default: "Wystąpił błąd",
  },
  accept: {
    type: String,
  },
});
</script>

<style lang="scss" scoped>
.custom-input {
  margin: 10px 0;

  input {
    padding: 10px;
    border: 2px solid #ccc;
    border-radius: 5px;
    width: 100%;

    &.success {
      border-color: green;
    }

    &.error {
      border-color: red;
    }
  }

  .message {
    font-size: 0.9em;

    &.success {
      color: green;
    }

    &.error {
      color: red;
    }
  }
}
</style>
