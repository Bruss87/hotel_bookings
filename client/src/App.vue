<template>
  <div id="app">
    <bookings-table :bookings="bookings" />
    <booking-form />
  </div>
</template>

<script>
import BookingsTable from './components/BookingsTable.vue'
import BookingForm  from './components/BookingForm.vue'
import BookingService from './services/BookingService.js'

export default {
  name: 'app',
  data (){
    return {
      bookings: []
    }
  },
  components: {
     'bookings-table': BookingsTable,
     'booking-form': BookingForm
  },
  mounted(){
    this.fetchData();
  },
  methods:{
    fetchData(){
      BookingService.getBookings()
      .then(bookings => this.bookings = bookings);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
