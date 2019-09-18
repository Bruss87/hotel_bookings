<template>
  <table>
        <thead>
           <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Check in</th>
              <th>Delete</th>
           </tr>
        </thead>
        <tbody>
            <tr v-for="booking in bookings" :key="booking.id">
                <td>{{booking.name}}</td>
                <td>{{booking.email}}</td>
                <td>{{booking.checkInStatus}}</td>
                <td><button type="button" v-on:click="deleteBooking(booking._id)">Delete</button></td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import {eventBus} from '../main.js'
import BookingService from '../services/BookingService.js'

export default {
    name: "bookings-table",
    props: ["bookings"],
    methods: {
        deleteBooking(id){
            BookingService.deleteBooking(id)
            .then(res => eventBus.$emit('booking-deleted', id))
        }
    }
}
</script>

<style>

</style>