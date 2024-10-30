import { defineComponent } from 'vue';
export default defineComponent({
    name: "Header",
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
    __VLS_styleScopedClasses['banner'];
    __VLS_styleScopedClasses['logo'];
    __VLS_styleScopedClasses['banner'];
    __VLS_styleScopedClasses['foto-banner'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)({ ...{ class: ("banner") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("apresentacao") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ to: ("/"), }));
    const __VLS_2 = __VLS_1({ to: ("/"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ alt: ("Logo Menu Chef"), ...{ class: ("logo") }, src: ("../assets/images/chef.png"), });
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("cabecalho-lg frase-cabecalho") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("texto-verde") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("subtitulo-lg") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ("../assets/images/foto-banner.png"), alt: ("Foto de uma mulher cozinhando com uma bacia de vidro nas mãos. Ela está sorrindo e esta apoiando um celular entre seu rosto e ombro"), ...{ class: ("foto-banner") }, });
    __VLS_styleScopedClasses['banner'];
    __VLS_styleScopedClasses['apresentacao'];
    __VLS_styleScopedClasses['logo'];
    __VLS_styleScopedClasses['cabecalho-lg'];
    __VLS_styleScopedClasses['frase-cabecalho'];
    __VLS_styleScopedClasses['texto-verde'];
    __VLS_styleScopedClasses['subtitulo-lg'];
    __VLS_styleScopedClasses['foto-banner'];
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
//# sourceMappingURL=Header.vue.js.map