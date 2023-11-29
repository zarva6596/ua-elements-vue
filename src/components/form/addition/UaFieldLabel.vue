<template>
  <label :for="name" class="ua-field-label">
    <FieldAddition
      v-if="option?.prepend"
      :option="option.prepend"

    />

    <slot name="prepend" />

    <FieldAddition
      v-if="option?.prefix"
      :option="option.prefix"
    />

    <slot name="prefix" />

    <span>{{ label }}</span>

    <FieldAddition
      v-if="option?.suffix"
      :option="option.suffix"
    />

    <slot name="suffix" />

    <FieldAddition
        v-if="option?.append"
        :option="option.append"
    />

    <slot name="append" />
  </label>
</template>

<script setup lang="ts">
import FieldAddition from '@/components/form/addition/FieldAddition.vue';
import type { UaInputLabelOption } from '@/components/form/types/form-input';

interface Props {
  name: string
  label: string
  option?: UaInputLabelOption
}

defineProps<Props>();
</script>

<style lang="scss">
.ua-field-label {
  display: flex;
  align-items: center;

  span {
    margin-right: 1rem;
  }
}
</style>