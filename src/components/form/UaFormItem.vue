<template>
  <div
    :class="item.class"
  >
    <template v-if="item?.children">
      <div
        v-for="(child, j) in item.children"
        :key="j"
        :class="child.class"
      >
        <ua-form-item
          v-if="child.element === FormElements.element"
          :item="child"
          :form-index="childIndex"
          @change="emit('change', $event)"
        />

        <component
          :is="FormElements[child.element]"
          v-else
          v-model="child.value"
          :name="j + formIndex + childIndex + 'child'"
          v-bind="child.attr"
          @change="onChange(child.name, $event)"
        />
      </div>
    </template>

    <template v-else>
      <slot />
    </template>
  </div>
</template>

<script setup lang="ts">
import type { FormSchemaItem } from '@/components/form/types';
import { onBeforeMount, ref } from 'vue';
import { random } from '@/utils';
import { FormElements } from '@/components/form/types';

defineProps<{ item: FormSchemaItem, formIndex: string }>();

const emit = defineEmits<{(e: 'change', data: { key: string, value: string }): void}>();

const childIndex = ref<string>('');

const onChange = (key: string, value: string) => emit('change', { key, value });

onBeforeMount(() => (childIndex.value = random()));
</script>
