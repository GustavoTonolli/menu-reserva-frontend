<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useForm, useField } from 'vee-validate';
import * as yup from 'yup';
import IReservation from 'src/interfaces/IReservation'; // Importando a interface
import http from '../http'; // Ajuste conforme a localização do seu arquivo http

export default defineComponent({
    name: 'ReservationForm',
    setup() {
        const successMessage = ref('');

        // Configuração de validação com yup
        const schema = yup.object({
            name: yup.string().required('Nome é obrigatório'),
            people_qty: yup.string().required('Quantidade de pessoas é obrigatória'),
            date: yup
                .string()
                .required('Data é obrigatória')
                .matches(/^\d{2}\/\d{2}\/\d{4}$/, 'Data deve estar no formato dd/mm/aaaa'),
            time: yup
                .string()
                .required('Horário é obrigatório')
                .matches(/^\d{2}:\d{2}$/, 'Horário deve estar no formato hh:mm'),
        });

        const { handleSubmit, resetForm } = useForm({
            validationSchema: schema,
            initialValues: {
                name: '',
                people_qty: '',
                date: '',
                time: ''
            },
        });

        // Campos individuais para acessarmos os erros diretamente
        const { value: name, errorMessage: nameError } = useField('name');
        const { value: people_qty, errorMessage: peopleQtyError } = useField('people_qty');
        const { value: date, errorMessage: dateError } = useField('date');
        const { value: time, errorMessage: timeError } = useField('time');

        const submitForm = handleSubmit(async (values) => {
            // Criação do objeto de reserva
            const reservationData: IReservation = {
                name: values.name,
                people_qty: values.people_qty,
                date: values.date,
                time: values.time,
            };

            try {
                // Enviando a requisição POST
                await http.post('/reservation', reservationData);
                successMessage.value = 'Reserva criada com sucesso!';
                resetForm();
            } catch (error) {
                console.error('Erro ao criar reserva:', error);
                successMessage.value = 'Erro ao criar reserva. Tente novamente!';
            }
        });

        return {
            name,
            people_qty,
            date,
            time,
            submitForm,
            successMessage,
            nameError,
            peopleQtyError,
            dateError,
            timeError
        };
    }
});
</script>

<template>
    <v-container>
        <v-form @submit.prevent="submitForm">
            <v-text-field label="Nome" v-model="name" :error-messages="nameError ? [nameError] : []" outlined
                required></v-text-field>

            <v-text-field label="Quantidade de pessoas" v-model="people_qty"
                :error-messages="peopleQtyError ? [peopleQtyError] : []" outlined required></v-text-field>

            <v-text-field label="Data" v-model="date" :error-messages="dateError ? [dateError] : []"
                placeholder="dd/mm/aaaa" outlined required></v-text-field>

            <v-text-field label="Horário" v-model="time" :error-messages="timeError ? [timeError] : []"
                placeholder="hh:mm" outlined required></v-text-field>

            <v-btn type="submit" color="var(--coral)">Enviar</v-btn>

            <v-alert class="alert" v-if="successMessage" type="success" dismissible closable close-label="Close Alert">
                {{ successMessage }}
            </v-alert>
        </v-form>
    </v-container>
</template>

<style scoped>
.alert {
    margin-top: 1.5rem;
}
</style>
