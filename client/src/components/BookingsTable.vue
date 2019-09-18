<template>
  <table>
        <thead>
           <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Check in</th>
           </tr>
        </thead>
        <tbody>
            <tr v-for="booking in bookings" :key="booking.id">
                <td>{{booking.name}}</td>
                <td>{{booking.email}}</td>
                <td>{{booking.checkInStatus}}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    name: "bookings-table",
    props: ["bookings"]
}
</script>

<style>

</style>