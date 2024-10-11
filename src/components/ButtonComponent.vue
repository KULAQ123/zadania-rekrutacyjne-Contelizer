<template>
  <component
    :is="href?.length ? 'a' : to?.length ? 'RouterLink' : 'div'"
    :href="href"
    :to="to"
    class="button-container"
    :class="{
      radius: radius,
      onlyIcon: onlyIcon,
      cursor: ripple,
      white: white,
    }"
    :target="blank ? '_blank' : undefined"
  >
    <div class="content-container" :class="{ 'black-text': blackText }">
      <slot name="icon"></slot>
      <div v-if="!onlyIcon" class="text">
        {{ text }}
      </div>
    </div>
  </component>
</template>

<script setup>
defineProps({
  href: {
    type: String,
  },
  to: {
    type: String,
  },
  text: {
    type: String,
  },
  radius: {
    type: Boolean,
    default: false,
  },
  onlyIcon: {
    type: Boolean,
    default: false,
  },
  blackText: {
    type: Boolean,
    default: false,
  },
  blank: {
    type: Boolean,
    default: false,
  },
  ripple: {
    type: Boolean,
    default: true,
  },
  white: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.button-container {
  border-radius: 8px;
  padding: 10px 18px;
  background: var(--color-7);
  transition: all 0.3s;
  user-select: none;

  .content-container {
    justify-content: center;
    align-items: center;
    display: flex;

    .text {
      font-weight: 500;
      font-size: 1rem;
      line-height: 1.3;
    }

    &.black-text {
      color: #222222;
    }
  }

  &.cursor {
    cursor: pointer;
  }

  &.radius {
    animation: anime 15s linear infinite;
    background: var(--color-radial-2);
    background-size: 600%;
  }

  &.onlyIcon {
    height: 44px;
    width: 44px;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &.white {
    background: #f8f8f8;
    transition: all 0.3s;

    &:hover {
      background: radial-gradient(
        circle,
        rgba(86, 204, 242, 1) 0%,
        rgba(47, 128, 237, 1) 50%,
        rgba(144, 58, 255, 1) 100%
      );
      animation: animeGradient 15s linear infinite;
      background-size: 600%;
      transform: scale(1.1);
      transition: all 0.3s;
    }
  }

  &:hover {
    transform: scale(1.1);
    transition: all 0.3s;
  }

  @keyframes animeGradient {
    0% {
      background-position: 0 50%;
    }

    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0 50%;
    }
  }
}
</style>
