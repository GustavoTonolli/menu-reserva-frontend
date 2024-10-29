import IMenu from 'src/interfaces/IMenu'
import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

interface State {
  menuItens: IMenu[]
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    menuItens: [
      {
        id: '1',
        name: 'Pizza',
        price: 'R$ 30',
        category: 'principal',
        image:
          'https://images.pexels.com/photos/19239118/pexels-photo-19239118/free-photo-of-comida-alimento-refeicao-italiano.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'Uma pizza deliciosa com ingredientes deliciosos.',
      },
      {
        id: '2',
        name: 'Salada',
        price: 'R$ 25',
        category: 'entrada',
        image:
          'https://images.pexels.com/photos/8992844/pexels-photo-8992844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'salada de verdura com um toque delicioso.',
      },
    ],
  },
})
