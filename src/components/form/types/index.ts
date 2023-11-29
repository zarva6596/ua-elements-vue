import UaFormInput from '@/components/form/UaFormInput.vue';
import type { UaFormInputProps } from '@/components/form/types/form-input';

export const FormElements = {
    element: 'element',
    input: UaFormInput,
} as const;

export interface FormSchemaItem {
    name: string
    element: keyof typeof FormElements
    attr?: UaFormInputProps
    class?: string
    value?: string
    option?: any[]
    children?: FormSchemaItem[]
}
