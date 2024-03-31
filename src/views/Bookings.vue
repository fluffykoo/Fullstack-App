<template>
    <div class="container">
        <h1>Mes réservations</h1>
        <div v-for="booking in bookings" :key="booking.id">
            <h2>{{ booking.listing.title }}</h2>
            <p>Date de début : {{ booking.startDate }}</p>
            <p>Date de fin : {{ booking.endDate }}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Bookings',
    data() {
        return {
            bookings: []
        }
    },
    async created() {
        try {
            // Remplacez 'userId' par l'ID de l'utilisateur actuellement connecté
            const userId = 'userId';
            const response = await axios.get(`http://localhost:3000/bookings?userId=${userId}`);
            this.bookings = response.data;
        } catch (error) {
            console.error(error);
        }
    }
}
</script>