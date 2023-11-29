export const FieldAdditionTypes = {
    TEXT: 'TEXT',
    ICON: 'ICON'
} as const;
export interface UaFieldAddition {
  type: keyof typeof FieldAdditionTypes
  value: string
}

export interface UaInputLabelOption {
  prepend: UaFieldAddition
  append: UaFieldAddition
  prefix: UaFieldAddition
  suffix: UaFieldAddition
}
export interface UaFormInputProps {
    label?: string
    type?: string
    modelValue?: string
    name?: string
    placeholder?: string
    prepend?: UaFieldAddition
    append?: UaFieldAddition
    prefix?: UaFieldAddition
    suffix?: UaFieldAddition
    labelOption?: UaInputLabelOption
}