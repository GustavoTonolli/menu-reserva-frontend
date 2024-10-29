<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: "Navbar",
});
</script>
<template>
    <nav class="nav">
        <RouterLink to="/">
            <span class="subtitulo-lg nav-menu">

                Cardápio
            </span>
        </RouterLink>
        <RouterLink to="/reservation">
            <span class="subtitulo-lg nav-menu">
                Fazer reserva
            </span>

        </RouterLink>
    </nav>
</template>
