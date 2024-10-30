import { key } from '../store';
import { computed, defineComponent, ref } from 'vue';
import { useStore } from 'vuex';
import { GET_MENU_ITENS } from '../store/actions-type';
export default defineComponent({
    name: 'Menu',
    setup() {
        const store = useStore(key);
        store.dispatch(GET_MENU_ITENS);
        // Computed property to get the menu items from the store
        const menuItems = computed(() => store.state.menuItens);
        // Reactive property to hold the selected category
        const selectedCategory = ref(null);
        // Method to set the selected category
        const selectCategory = (category) => {
            selectedCategory.value = category;
        };
        // Computed property to filter menu items based on selected category
        const filteredMenuItems = computed(() => {
            return selectedCategory.value
                ? menuItems.value.filter(item => item.category === selectedCategory.value)
                : menuItems.value; // Return all items if no category is selected
        });
        return {
            menuItems,
            selectedCategory,
            selectCategory,
            filteredMenuItems,
        };
    },
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
    __VLS_styleScopedClasses['menu-item'];
    __VLS_styleScopedClasses['menu-item'];
    __VLS_styleScopedClasses['menu-image'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("subtitulo-lg titulo-menu-reserva") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("categoria") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.VBtn;
    /** @type { [typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onClick': {} }, ...{ class: ("categoria-lista") }, }));
    const __VLS_2 = __VLS_1({ ...{ 'onClick': {} }, ...{ class: ("categoria-lista") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    let __VLS_6;
    const __VLS_7 = {
        onClick: (...[$event]) => {
            __VLS_ctx.selectCategory('entrada');
        }
    };
    let __VLS_3;
    let __VLS_4;
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    const __VLS_8 = __VLS_resolvedLocalAndGlobalComponents.VBtn;
    /** @type { [typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ] } */
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({ ...{ 'onClick': {} }, ...{ class: ("categoria-lista") }, }));
    const __VLS_10 = __VLS_9({ ...{ 'onClick': {} }, ...{ class: ("categoria-lista") }, }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    let __VLS_14;
    const __VLS_15 = {
        onClick: (...[$event]) => {
            __VLS_ctx.selectCategory('principal');
        }
    };
    let __VLS_11;
    let __VLS_12;
    __VLS_nonNullable(__VLS_13.slots).default;
    var __VLS_13;
    const __VLS_16 = __VLS_resolvedLocalAndGlobalComponents.VBtn;
    /** @type { [typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ] } */
    // @ts-ignore
    const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({ ...{ 'onClick': {} }, ...{ class: ("categoria-lista") }, }));
    const __VLS_18 = __VLS_17({ ...{ 'onClick': {} }, ...{ class: ("categoria-lista") }, }, ...__VLS_functionalComponentArgsRest(__VLS_17));
    let __VLS_22;
    const __VLS_23 = {
        onClick: (...[$event]) => {
            __VLS_ctx.selectCategory('sobremesa');
        }
    };
    let __VLS_19;
    let __VLS_20;
    __VLS_nonNullable(__VLS_21.slots).default;
    var __VLS_21;
    const __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.VBtn;
    /** @type { [typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ] } */
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ ...{ 'onClick': {} }, ...{ class: ("categoria-lista") }, }));
    const __VLS_26 = __VLS_25({ ...{ 'onClick': {} }, ...{ class: ("categoria-lista") }, }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    let __VLS_30;
    const __VLS_31 = {
        onClick: (...[$event]) => {
            __VLS_ctx.selectCategory('bebida');
        }
    };
    let __VLS_27;
    let __VLS_28;
    __VLS_nonNullable(__VLS_29.slots).default;
    var __VLS_29;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("itens-menu") }, });
    const __VLS_32 = __VLS_resolvedLocalAndGlobalComponents.VContainer;
    /** @type { [typeof __VLS_components.VContainer, typeof __VLS_components.vContainer, typeof __VLS_components.VContainer, typeof __VLS_components.vContainer, ] } */
    // @ts-ignore
    const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({}));
    const __VLS_34 = __VLS_33({}, ...__VLS_functionalComponentArgsRest(__VLS_33));
    const __VLS_38 = __VLS_resolvedLocalAndGlobalComponents.VRow;
    /** @type { [typeof __VLS_components.VRow, typeof __VLS_components.vRow, typeof __VLS_components.VRow, typeof __VLS_components.vRow, ] } */
    // @ts-ignore
    const __VLS_39 = __VLS_asFunctionalComponent(__VLS_38, new __VLS_38({}));
    const __VLS_40 = __VLS_39({}, ...__VLS_functionalComponentArgsRest(__VLS_39));
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.filteredMenuItems))) {
        const __VLS_44 = __VLS_resolvedLocalAndGlobalComponents.VCol;
        /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ] } */
        // @ts-ignore
        const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({ key: ((item.id)), cols: ("12"), md: ("12"), lg: ("12"), }));
        const __VLS_46 = __VLS_45({ key: ((item.id)), cols: ("12"), md: ("12"), lg: ("12"), }, ...__VLS_functionalComponentArgsRest(__VLS_45));
        const __VLS_50 = __VLS_resolvedLocalAndGlobalComponents.VCard;
        /** @type { [typeof __VLS_components.VCard, typeof __VLS_components.vCard, typeof __VLS_components.VCard, typeof __VLS_components.vCard, ] } */
        // @ts-ignore
        const __VLS_51 = __VLS_asFunctionalComponent(__VLS_50, new __VLS_50({ rounded: ("lg"), elevation: ("8"), ...{ class: ("menu-item") }, }));
        const __VLS_52 = __VLS_51({ rounded: ("lg"), elevation: ("8"), ...{ class: ("menu-item") }, }, ...__VLS_functionalComponentArgsRest(__VLS_51));
        const __VLS_56 = __VLS_resolvedLocalAndGlobalComponents.VImg;
        /** @type { [typeof __VLS_components.VImg, typeof __VLS_components.vImg, typeof __VLS_components.VImg, typeof __VLS_components.vImg, ] } */
        // @ts-ignore
        const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({ src: ((item.image)), height: ("150"), contain: (true), ...{ class: ("menu-image") }, }));
        const __VLS_58 = __VLS_57({ src: ((item.image)), height: ("150"), contain: (true), ...{ class: ("menu-image") }, }, ...__VLS_functionalComponentArgsRest(__VLS_57));
        const __VLS_62 = __VLS_resolvedLocalAndGlobalComponents.VCardTitle;
        /** @type { [typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, ] } */
        // @ts-ignore
        const __VLS_63 = __VLS_asFunctionalComponent(__VLS_62, new __VLS_62({}));
        const __VLS_64 = __VLS_63({}, ...__VLS_functionalComponentArgsRest(__VLS_63));
        (item.name);
        __VLS_nonNullable(__VLS_67.slots).default;
        var __VLS_67;
        const __VLS_68 = __VLS_resolvedLocalAndGlobalComponents.VCardSubtitle;
        /** @type { [typeof __VLS_components.VCardSubtitle, typeof __VLS_components.vCardSubtitle, typeof __VLS_components.VCardSubtitle, typeof __VLS_components.vCardSubtitle, ] } */
        // @ts-ignore
        const __VLS_69 = __VLS_asFunctionalComponent(__VLS_68, new __VLS_68({}));
        const __VLS_70 = __VLS_69({}, ...__VLS_functionalComponentArgsRest(__VLS_69));
        (item.price);
        __VLS_nonNullable(__VLS_73.slots).default;
        var __VLS_73;
        const __VLS_74 = __VLS_resolvedLocalAndGlobalComponents.VCardText;
        /** @type { [typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, ] } */
        // @ts-ignore
        const __VLS_75 = __VLS_asFunctionalComponent(__VLS_74, new __VLS_74({}));
        const __VLS_76 = __VLS_75({}, ...__VLS_functionalComponentArgsRest(__VLS_75));
        (item.description);
        __VLS_nonNullable(__VLS_79.slots).default;
        var __VLS_79;
        const __VLS_80 = __VLS_resolvedLocalAndGlobalComponents.VCardActions;
        /** @type { [typeof __VLS_components.VCardActions, typeof __VLS_components.vCardActions, typeof __VLS_components.VCardActions, typeof __VLS_components.vCardActions, ] } */
        // @ts-ignore
        const __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80({}));
        const __VLS_82 = __VLS_81({}, ...__VLS_functionalComponentArgsRest(__VLS_81));
        const __VLS_86 = __VLS_resolvedLocalAndGlobalComponents.VBtn;
        /** @type { [typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ] } */
        // @ts-ignore
        const __VLS_87 = __VLS_asFunctionalComponent(__VLS_86, new __VLS_86({ color: ("var(--coral)"), }));
        const __VLS_88 = __VLS_87({ color: ("var(--coral)"), }, ...__VLS_functionalComponentArgsRest(__VLS_87));
        __VLS_nonNullable(__VLS_91.slots).default;
        var __VLS_91;
        __VLS_nonNullable(__VLS_85.slots).default;
        var __VLS_85;
        __VLS_nonNullable(__VLS_55.slots).default;
        var __VLS_55;
        __VLS_nonNullable(__VLS_49.slots).default;
        var __VLS_49;
    }
    __VLS_nonNullable(__VLS_43.slots).default;
    var __VLS_43;
    __VLS_nonNullable(__VLS_37.slots).default;
    var __VLS_37;
    __VLS_styleScopedClasses['subtitulo-lg'];
    __VLS_styleScopedClasses['titulo-menu-reserva'];
    __VLS_styleScopedClasses['categoria'];
    __VLS_styleScopedClasses['categoria-lista'];
    __VLS_styleScopedClasses['categoria-lista'];
    __VLS_styleScopedClasses['categoria-lista'];
    __VLS_styleScopedClasses['categoria-lista'];
    __VLS_styleScopedClasses['itens-menu'];
    __VLS_styleScopedClasses['menu-item'];
    __VLS_styleScopedClasses['menu-image'];
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
//# sourceMappingURL=Menu.vue.js.map