<template>
    <span class="subtitulo-lg titulo-menu-reserva">
        Selecione uma categoria abaixo:
    </span>

    <div class="categoria">
        <v-btn @click="selectCategory('entrada')" class="categoria-lista">Entradas</v-btn>
        <v-btn @click="selectCategory('principal')" class="categoria-lista">Pratos Principais</v-btn>
        <v-btn @click="selectCategory('sobremesa')" class="categoria-lista">Sobremesas</v-btn>
        <v-btn @click="selectCategory('bebida')" class="categoria-lista">Bebidas</v-btn>
    </div>

    <div class="itens-menu">
        <v-container>
            <v-row>
                <v-col v-for="item in filteredMenuItems" :key="item.id" cols="12" md="12" lg="12">
                    <v-card rounded="lg" elevation="8" class="menu-item">
                        <v-img :src="item.image" height="150" contain class="menu-image"></v-img>
                        <v-card-title>{{ item.name }}</v-card-title>
                        <v-card-subtitle>{{ item.price }}</v-card-subtitle>
                        <v-card-text>{{ item.description }}</v-card-text>
                        <v-card-actions>
                            <v-btn color="var(--coral)">Adicionar ao Carrinho</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script lang="ts">
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
        const selectedCategory = ref<string | null>(null);

        // Method to set the selected category
        const selectCategory = (category: string) => {
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
</script>

<style scoped>
.categoria {
    margin-bottom: 20px;
}

.categoria-lista {
    margin-right: 10px;
    padding: 10px;
    border-radius: 5px;
    background-color: var(--coral);
    cursor: pointer;
    color: var(--branco);
}

.menu-item {
    display: flex;
    align-items: center;
    text-align: center;
    margin-bottom: 20px;
    padding: 1em;
}

@media (max-width: 960px) {
    .menu-item {
        display: block;
        justify-content: center;
        align-items: center;
        text-align: center;
        align-content: center;
    }

    .menu-image {
        display: block;
        margin: 0 auto;
        border-radius: 10px;
    }

    .menu-item .v-card-actions {
        justify-content: center;
    }
}


.menu-image {
    border-radius: 50%;
    width: 100%;
    max-width: 150px;
    margin-bottom: 15px;
    object-fit: cover;
}
</style>
