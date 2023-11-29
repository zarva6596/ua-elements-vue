<template>
  <ua-form
    :schema="schema"
    @submit="onSubmit"
  />
</template>

<script setup lang="ts">
import UaForm from "@/components/form/UaForm.vue";
import type { FormSchemaItem } from '@/components/form/types';
import { FieldAdditionTypes } from '@/components/form/types/form-input';

const schema: FormSchemaItem[] = [
  {
    name: 'firstName',
    element: 'input',
    attr: {
      label: 'First name',
      prepend: {
        type: FieldAdditionTypes.TEXT,
        value: 'Prepend'
      },
      labelOption: {
        prefix: {
          type: FieldAdditionTypes.TEXT,
          value: 'Label prefix'
        },
        suffix: {
          type: FieldAdditionTypes.TEXT,
          value: 'Label suffix'
        },
        append: {
          type: FieldAdditionTypes.TEXT,
          value: 'Label append'
        },
        prepend: {
          type: FieldAdditionTypes.TEXT,
          value: 'Label prepend'
        }
      }
    }
  },
  {
    name: 'lastName',
    element: 'input',
    attr: {
      label: 'Last name',
    }
  },
  {
    name: 'row-1',
    element: 'element',
    children: [
      {
        name: 'number',
        element: 'input',
        attr: {
          label: 'Phone number',
          prefix: {
            type: FieldAdditionTypes.TEXT,
            value: 'Prefix text'
          },
          suffix: {
            type: FieldAdditionTypes.TEXT,
            value: 'Suffix text'
          }
        }
      },
      {
        name: 'row-1-1',
        element: 'element',
        children: [
          {
            name: 'email',
            element: 'input',
            attr: {
              label: 'Email',
              prefix: {
                type: FieldAdditionTypes.TEXT,
                value: 'Prefix text'
              },
              suffix: {
                type: FieldAdditionTypes.TEXT,
                value: 'Suffix text'
              },
              append: {
                type: FieldAdditionTypes.TEXT,
                value: 'Append text'
              },
              prepend: {
                type: FieldAdditionTypes.TEXT,
                value: 'Prepend text'
              }
            }
          }
        ]
      }
    ]
  }
];

const onSubmit = (val: Record<string, string | undefined>): void => {
  console.log(val)
}
</script>