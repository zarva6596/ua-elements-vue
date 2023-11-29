<template>
  <div class="ua-form-input">
    <UaFieldLabel
      v-if="label"
      :name="name"
      :label="label"
      :option="labelOption"
    />

    <div class="ua-form-input__input-wrapper">

      <FieldAddition
        v-if="prepend"
        :option="prepend"
        class="ua-form-input__prepend"
      />

      <div class="ua-form-input__text-field">
        <FieldAddition
          v-if="prefix"
          class="ua-form-input__prefix"
          :option="prefix"
        />

        <input
          :id="name"
          v-model="inputValue"
          :type="type"
        >

        <FieldAddition
          v-if="suffix"
          class="ua-form-input__suffix"
          :option="suffix"
        />
      </div>

      <FieldAddition
        v-if="append"
        class="ua-form-input__append"
        :option="append"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { UaFieldAddition, UaInputLabelOption } from '@/components/form/types/form-input';
import FieldAddition from '@/components/form/addition/FieldAddition.vue';
import UaFieldLabel from '@/components/form/addition/UaFieldLabel.vue';

interface Props {
  label?: string
  type?: string
  modelValue: string
  name: string
  placeholder?: string
  prepend?: UaFieldAddition
  append?: UaFieldAddition
  prefix?: UaFieldAddition
  suffix?: UaFieldAddition
  labelOption?: UaInputLabelOption
}

const props = withDefaults(defineProps<Props>(), {
  label: '',
  type: 'text',
});

const emit = defineEmits<{(e: 'update:modelValue', data: string): void,
  (e: 'change', data: string): void}>();

const inputValue = computed({
  get: () => props.modelValue,
  set: (val: string) => {
    emit('update:modelValue', val);
    emit('change', val);
  },
});
</script>
