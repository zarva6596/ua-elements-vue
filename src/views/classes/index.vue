<template>
  <div>
    Тут будуть універсальні класи якими можна буде робити багато речей.

    <div class="ua-flex ua-mt-100">
      <div class="ua-b ua-px-10">1</div>

      <div class="ua-b ua-mx-100 ua-px-16 ua-py-20">2</div>

      <div class="ua-b">3</div>

      <div class="ua-b lg_ua-pr-200">4</div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
.classes {
  display: flex;

  &__sidebar {
    flex: 0 0 300px;
  }
}
</style>