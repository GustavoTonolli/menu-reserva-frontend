<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "Wrapper",
});
</script>
<template>
    <main class="conteudo-principal">
        <slot></slot>
    </main>
</template>

<style scoped>
.conteudo-principal {
    padding: 3rem 7.5rem;
    border-radius: 3.75rem 3.75rem 0rem 0rem;
    background: var(--creme, #FFFAF3);
    color: var(--cinza, #444);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
}


@media only screen and (max-width: 1300px) {
    .conteudo-principal {
        padding: 3rem 3.75rem;
        gap: 3.5rem;
    }
}

@media only screen and (max-width: 767px) {
    .conteudo-principal {
        padding: 4rem 1.5rem;
        gap: 4rem;
    }
}
</style>