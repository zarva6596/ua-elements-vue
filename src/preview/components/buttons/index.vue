<template>
  <div class="buttons ua-b-r-10 ua-b-b ua-b-dashed ua-b-red">
    <div class="buttons__item">
      <ua-button
        :prefix="{
            type: 'ICON',
            value: 'las la-search'
          }"
        :suffix="{
            type: 'ICON',
            value: 'lab la-researchgate'
          }"
        type="danger"
        plain
      >
        Button
      </ua-button>
    </div>

    <div class="buttons__item">
      <ua-button
        circle
        :prefix="{
          type: 'ICON',
          value: 'las la-search'
        }"
      >
        Button
      </ua-button>
    </div>

    <div class="buttons__item">
      <ua-button
        circle
        :prefix="{
          type: 'ICON',
          value: 'las la-search'
        }"
      />
    </div>

    <div class="buttons__item">
      <ua-button>Button</ua-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import UaButton from "@/components/button/UaButton.vue";
</script>

<style lang="scss">
@import "@/assets/default-theme/variables/variables";

.buttons {
  padding: 20px;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(5, 1fr);

  &__item {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 6px;
    border: 1px solid $blue-400;
  }
}
</style>