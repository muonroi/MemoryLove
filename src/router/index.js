import { createRouter, createWebHistory } from "vue-router";
import AboutUs from "../components/AboutUs.vue";
import Home from "../components/HomeUs.vue";

const routes = [{
    path: "/",
    name: "home",
    component: Home,
}, {
    path: "/about",
    name: "about",
    meta: {
        layout: "auth_layout"
    },
    component: AboutUs,
}];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;