import { defineAsyncComponent } from "vue";
export function RegisterGlobalComponents(app) {
    app.component('auth_layout', defineAsyncComponent(() =>
        import ("../Layouts/auth_layout.vue")))
    app.component('default_layout', defineAsyncComponent(() =>
        import ("../Layouts/default_layout.vue")))
}