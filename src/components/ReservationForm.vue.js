import { defineComponent, ref } from 'vue';
import { useForm, useField } from 'vee-validate';
import * as yup from 'yup';
import http from '../http'; // Ajuste conforme a localização do seu arquivo http
export default defineComponent({
    name: 'ReservationForm',
    setup() {
        const successMessage = ref('');
        // Configuração de validação com yup
        const schema = yup.object({
            name: yup.string().required('Nome é obrigatório'),
            people_qty: yup.string().required('Quantidade de pessoas é obrigatória'),
            date: yup
                .string()
                .required('Data é obrigatória')
                .matches(/^\d{2}\/\d{2}\/\d{4}$/, 'Data deve estar no formato dd/mm/aaaa'),
            time: yup
                .string()
                .required('Horário é obrigatório')
                .matches(/^\d{2}:\d{2}$/, 'Horário deve estar no formato hh:mm'),
        });
        const { handleSubmit, resetForm } = useForm({
            validationSchema: schema,
            initialValues: {
                name: '',
                people_qty: '',
                date: '',
                time: ''
            },
        });
        // Campos individuais para acessarmos os erros diretamente
        const { value: name, errorMessage: nameError } = useField('name');
        const { value: people_qty, errorMessage: peopleQtyError } = useField('people_qty');
        const { value: date, errorMessage: dateError } = useField('date');
        const { value: time, errorMessage: timeError } = useField('time');
        const submitForm = handleSubmit(async (values) => {
            // Criação do objeto de reserva
            const reservationData = {
                name: values.name,
                people_qty: values.people_qty,
                date: values.date,
                time: values.time,
            };
            try {
                // Enviando a requisição POST
                await http.post('/reservation', reservationData);
                successMessage.value = 'Reserva criada com sucesso!';
                resetForm();
            }
            catch (error) {
                console.error('Erro ao criar reserva:', error);
                successMessage.value = 'Erro ao criar reserva. Tente novamente!';
            }
        });
        return {
            name,
            people_qty,
            date,
            time,
            submitForm,
            successMessage,
            nameError,
            peopleQtyError,
            dateError,
            timeError
        };
    }
});
; /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.VContainer;
    /** @type { [typeof __VLS_components.VContainer, typeof __VLS_components.vContainer, typeof __VLS_components.VContainer, typeof __VLS_components.vContainer, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    var __VLS_6 = {};
    const __VLS_7 = __VLS_resolvedLocalAndGlobalComponents.VForm;
    /** @type { [typeof __VLS_components.VForm, typeof __VLS_components.vForm, typeof __VLS_components.VForm, typeof __VLS_components.vForm, ] } */
    // @ts-ignore
    const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({ ...{ 'onSubmit': {} }, }));
    const __VLS_9 = __VLS_8({ ...{ 'onSubmit': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_8));
    let __VLS_13;
    const __VLS_14 = {
        onSubmit: (__VLS_ctx.submitForm)
    };
    let __VLS_10;
    let __VLS_11;
    const __VLS_15 = __VLS_resolvedLocalAndGlobalComponents.VTextField;
    /** @type { [typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, ] } */
    // @ts-ignore
    const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({ label: ("Nome"), modelValue: ((__VLS_ctx.name)), errorMessages: ((__VLS_ctx.nameError ? [__VLS_ctx.nameError] : [])), outlined: (true), required: (true), }));
    const __VLS_17 = __VLS_16({ label: ("Nome"), modelValue: ((__VLS_ctx.name)), errorMessages: ((__VLS_ctx.nameError ? [__VLS_ctx.nameError] : [])), outlined: (true), required: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
    const __VLS_21 = __VLS_resolvedLocalAndGlobalComponents.VTextField;
    /** @type { [typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, ] } */
    // @ts-ignore
    const __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21({ label: ("Quantidade de pessoas"), modelValue: ((__VLS_ctx.people_qty)), errorMessages: ((__VLS_ctx.peopleQtyError ? [__VLS_ctx.peopleQtyError] : [])), outlined: (true), required: (true), }));
    const __VLS_23 = __VLS_22({ label: ("Quantidade de pessoas"), modelValue: ((__VLS_ctx.people_qty)), errorMessages: ((__VLS_ctx.peopleQtyError ? [__VLS_ctx.peopleQtyError] : [])), outlined: (true), required: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_22));
    const __VLS_27 = __VLS_resolvedLocalAndGlobalComponents.VTextField;
    /** @type { [typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, ] } */
    // @ts-ignore
    const __VLS_28 = __VLS_asFunctionalComponent(__VLS_27, new __VLS_27({ label: ("Data"), modelValue: ((__VLS_ctx.date)), errorMessages: ((__VLS_ctx.dateError ? [__VLS_ctx.dateError] : [])), placeholder: ("dd/mm/aaaa"), outlined: (true), required: (true), }));
    const __VLS_29 = __VLS_28({ label: ("Data"), modelValue: ((__VLS_ctx.date)), errorMessages: ((__VLS_ctx.dateError ? [__VLS_ctx.dateError] : [])), placeholder: ("dd/mm/aaaa"), outlined: (true), required: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_28));
    const __VLS_33 = __VLS_resolvedLocalAndGlobalComponents.VTextField;
    /** @type { [typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, ] } */
    // @ts-ignore
    const __VLS_34 = __VLS_asFunctionalComponent(__VLS_33, new __VLS_33({ label: ("Horário"), modelValue: ((__VLS_ctx.time)), errorMessages: ((__VLS_ctx.timeError ? [__VLS_ctx.timeError] : [])), placeholder: ("hh:mm"), outlined: (true), required: (true), }));
    const __VLS_35 = __VLS_34({ label: ("Horário"), modelValue: ((__VLS_ctx.time)), errorMessages: ((__VLS_ctx.timeError ? [__VLS_ctx.timeError] : [])), placeholder: ("hh:mm"), outlined: (true), required: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_34));
    const __VLS_39 = __VLS_resolvedLocalAndGlobalComponents.VBtn;
    /** @type { [typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ] } */
    // @ts-ignore
    const __VLS_40 = __VLS_asFunctionalComponent(__VLS_39, new __VLS_39({ type: ("submit"), color: ("var(--coral)"), }));
    const __VLS_41 = __VLS_40({ type: ("submit"), color: ("var(--coral)"), }, ...__VLS_functionalComponentArgsRest(__VLS_40));
    __VLS_nonNullable(__VLS_44.slots).default;
    var __VLS_44;
    if (__VLS_ctx.successMessage) {
        const __VLS_45 = __VLS_resolvedLocalAndGlobalComponents.VAlert;
        /** @type { [typeof __VLS_components.VAlert, typeof __VLS_components.vAlert, typeof __VLS_components.VAlert, typeof __VLS_components.vAlert, ] } */
        // @ts-ignore
        const __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45({ ...{ class: ("alert") }, type: ("success"), dismissible: (true), closable: (true), closeLabel: ("Close Alert"), }));
        const __VLS_47 = __VLS_46({ ...{ class: ("alert") }, type: ("success"), dismissible: (true), closable: (true), closeLabel: ("Close Alert"), }, ...__VLS_functionalComponentArgsRest(__VLS_46));
        (__VLS_ctx.successMessage);
        __VLS_nonNullable(__VLS_50.slots).default;
        var __VLS_50;
    }
    __VLS_nonNullable(__VLS_12.slots).default;
    var __VLS_12;
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    __VLS_styleScopedClasses['alert'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
let __VLS_self;
//# sourceMappingURL=ReservationForm.vue.js.map