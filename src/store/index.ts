import IMenu from 'src/interfaces/IMenu'
import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import { GET_MENU_ITENS } from './actions-type'
import http from '../http'
import { DEFINE_MENU_ITEMS } from './mutations-type'

interface State {
  menuItens: IMenu[]
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    menuItens: [],
  },
  mutations: {
    [DEFINE_MENU_ITEMS](state, menuItens: IMenu[]) {
      state.menuItens = menuItens
    },
  },
  actions: {
    [GET_MENU_ITENS]({ commit }) {
      http
        .get('menu')
        .then((response) => commit(DEFINE_MENU_ITEMS, response.data))
    },
  },
})
