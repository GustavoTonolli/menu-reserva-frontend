import { createMemoryHistory, createRouter } from "vue-router";
import Home from "../views/Menu.vue";
import Reservation from "../views/Reservation.vue";
const routes = [
    { path: "/", component: Home },
    { path: "/reservation", component: Reservation },
];
const router = createRouter({
    history: createMemoryHistory(),
    routes,
});
export default router;
//# sourceMappingURL=index.js.map