<template>
	<button
		class="ua-button"
		:class="{
			circle,
			onlyIcon
		}"
	>
		<field-addition
			v-if="prefix"
			:option="prefix"
			class="ua-button__prefix"
		/>

		<slot v-else name="prefix" />

		<span
			v-if="slots.default || value"
			class="ua-button__default"
			:class="{
				notPrefix: !slots.prefix && !prefix,
				notSuffix: !slots.suffix && !suffix
			}"
		>
			<span v-if="value">{{ value }}</span>
			<slot v-else-if="slots.default" name="default" />
		</span>

		<field-addition
			v-if="suffix"
			:option="suffix"
			class="ua-button__suffix"
		/>

		<slot v-else name="suffix" />
	</button>
</template>

<script lang="ts" setup>
import { computed, onMounted, useSlots } from "vue";
import type { UaFieldAddition } from "@/components/form/types/form-input";
import FieldAddition from "@/components/form/addition/FieldAddition.vue";

const slots = useSlots();

interface Props {
	slots: any
  prefix?: UaFieldAddition
	suffix?: UaFieldAddition
	value?: string
	type?: string
	circle?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: '',
	value: '',
	circle: false
})

const onlyIcon = computed(() =>
	props.circle && !props.value && !slots.default && (!props.prefix || !props.suffix));

onMounted(() => {
	console.log(slots);
})
</script>

<style lang="scss">
@import "src/assets/default-theme/_variables.scss";
.ua-button {
	border: 1px solid $primary-blue;
	background-color: $primary-blue;
	color: $white;

	font-size: 1rem;
	font-weight: 400;

	border-radius: 8px;
	padding: .625rem 1rem;

	display: flex;
	align-items: center;
	justify-content: space-between;

	transition: all $duration;

	&.circle {
		border-radius: 1000px;
	}

	&.onlyIcon {
		padding: .625rem;
	}

	&__default {
		margin: 0 .5rem;

		&.notPrefix {
			margin: 0 .5rem 0 0;
		}

		&.notSuffix {
			margin: 0 0 0 .5rem;
		}

		&.notPrefix.notSuffix {
			margin: 0;
		}
	}

	&:hover {
		cursor: pointer;
		opacity: .85;
	}

	&:active {
		opacity: .3;
	}
}
</style>
