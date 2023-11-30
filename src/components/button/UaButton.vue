<template>
  <button
    class="ua-button"
    :type="type"
    :class="[
			buttonClas,
      {
        circle,
        onlyIcon,
        plain,
      },
    ]"
  >
    <field-addition v-if="prefix" :option="prefix" class="ua-button__prefix" />

    <slot v-else name="prefix" />

    <span
      v-if="slots.default || value"
      class="ua-button__default"
      :class="{
        notPrefix: !slots.prefix && !prefix,
        notSuffix: !slots.suffix && !suffix,
      }"
    >
      <span v-if="value">{{ value }}</span>
      <slot v-else-if="slots.default" name="default" />
    </span>

    <field-addition v-if="suffix" :option="suffix" class="ua-button__suffix" />

    <slot v-else name="suffix" />
  </button>
</template>

<script lang="ts" setup>
import { computed, useSlots } from "vue";
import type { UaFieldAddition } from "@/components/form/types/form-input";
import FieldAddition from "@/components/form/addition/FieldAddition.vue";
import { COLOR_TYPES, COLOR_TYPES_COLOR } from "@/components/types";

const slots = useSlots();

interface Props {
  type?: 'button' | 'reset' | 'submit'
  prefix?: UaFieldAddition;
  suffix?: UaFieldAddition;
  value?: string;
  styleType?: (typeof COLOR_TYPES)[keyof typeof COLOR_TYPES] | '';
  circle?: boolean;
  plain?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  type: 'button',
  styleType: '',
  value: '',
  circle: false,
  plain: false,
});

const buttonClas = computed<string>(() => {
	if (props.styleType) {
		const color = COLOR_TYPES_COLOR[props.styleType];
		return props.plain
			? `ua-b-${color} ua-bg-white ua-text-${color}`
			: `ua-bg-${color} ua-b-${color} ua-text-white`
	}

	return 'ua-bg-white ua-text-black ua-b-black'
});

const onlyIcon = computed(
  () =>
    props.circle &&
    !props.value &&
    !slots.default &&
    (!props.prefix || !props.suffix)
);
</script>

<style lang="scss">
@import "@/assets/default-theme/_default-theme.scss";
</style>