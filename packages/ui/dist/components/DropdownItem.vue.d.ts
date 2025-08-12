declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        left?(_: {}): any;
        default?(_: {}): any;
        right?(_: {}): any;
        submenu?(_: {}): any;
    };
    refs: {
        tray: HTMLDivElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    showOnHover: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    click: (data: any) => any;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    showOnHover: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onClick?: ((data: any) => any) | undefined;
}>, {
    showOnHover: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {
    tray: HTMLDivElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
