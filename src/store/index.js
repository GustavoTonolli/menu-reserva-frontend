import { createStore } from 'vuex';
import { GET_MENU_ITENS } from './actions-type';
import http from '../http';
import { DEFINE_MENU_ITEMS } from './mutations-type';
export const key = Symbol();
export const store = createStore({
    state: {
        menuItens: [],
    },
    mutations: {
        [DEFINE_MENU_ITEMS](state, menuItens) {
            state.menuItens = menuItens;
        },
    },
    actions: {
        [GET_MENU_ITENS]({ commit }) {
            http
                .get('menu')
                .then((response) => commit(DEFINE_MENU_ITEMS, response.data));
        },
    },
});
//# sourceMappingURL=index.js.map