    <script lang="ts">
    import ReservationForm from '../components/ReservationForm.vue';
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'Reservation',
        components: { ReservationForm },
    })
</script>
<template>
    <span class="subtitulo-lg titulo-menu-reserva">
        Faça sua Reserva!
    </span>

    <ReservationForm />


</template>

<style scoped></style>