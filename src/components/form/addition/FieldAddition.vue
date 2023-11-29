<template>
  <span
    v-if="option.type === FieldAdditionTypes.TEXT"
  >
    {{ option.value }}
  </span>

  <i
    v-else-if="option.type === FieldAdditionTypes.ICON"
    :class="option.value"
  />
</template>

<script setup lang="ts">
import type { UaFieldAddition } from '@/components/form/types/form-input';
import { FieldAdditionTypes } from "@/components/form/types/form-input";

defineProps<{ option: UaFieldAddition }>();
</script>