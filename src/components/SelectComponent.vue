<template>
  <div class="custom-select">
    <label v-if="label">{{ label }}</label>
    <select
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
      :class="{ error: isValid === false, success: isValid === true }"
    >
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
    <p
      class="message"
      :class="{ error: isValid === false, success: isValid === true }"
    >
      {{ errorMessage }}
    </p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  modelValue: {
    type: [String, Number],
    required: true,
  },
  options: {
    type: Array,
    required: true,
    default: () => [],
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
    default: "",
  },
});
</script>

<style lang="scss" scoped>
.custom-select {
  margin: 10px 0;

  select {
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
