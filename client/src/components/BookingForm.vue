<template>
  <form v-on:submit="handleSubmit">
    <h2>New Booking</h2>
    <div>
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name"/>
    </div>
    <div>
      <label for="email">Email:</label>
      <input type="text" id="email" v-model="email"/>
    </div>
    <div>
      <label for="check-in">Check In:</label>
      <input type="checkbox" id="check-in" v-model="checkInStatus"/>
    </div>
    <input type="submit" value="Save" id="save"/>
  </form>
</template>

<script>
import BoookingService from '../services/BookingService.js';
import BookingService from '../services/BookingService.js';

export default {
    name: "booking-form",
    data(){
      return {
        name: "",
        email: "",
        checkInStatus: false
      }
    },
    methods:{
      handleSubmit(event){
        event.preventDefault();

        const payload = {
          name: this.name,
          email: this.email,
          checkInStatus: this.checkInStatus
        };
        BookingService.postBooking(payload)
        .then(booking => {
          eventBus.$emit('booking-added', booking);
        });
      }
    }
}
</script>

<style>

</style>