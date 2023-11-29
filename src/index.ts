import type { App } from 'vue';
import { UaForm, UaFormItem, UaFormInput, UaFieldLabel, UaButton } from "@/components";
import type { FormSchemaItem } from '@/components/form/types';
import '@/assets/default-theme/_default-theme.scss'

export default {
    install: (app: App) => {
        app.component('UaForm', UaForm);
        app.component('UaFormItem', UaFormItem);
        app.component('UaFormInput', UaFormInput);
        app.component('UaButton', UaButton);
    }
};

export { UaForm, UaFormItem, UaFormInput, UaFieldLabel, FormSchemaItem };