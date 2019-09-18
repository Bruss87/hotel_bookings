use hotel;
db.dropDatabase();

db.bookings.insertMany([
    {
        name: "Karolina Kaczmarska",
        email: "karolina@email.com",
        checkInStatus: true
    },
    {
        name: "Liliana Everett",
        email: "liliana@email.com",
        checkInStatus: false
    },
    {
        name: "Tom Hardy",
        email: "tom@email.com",
        checkInStatus: false
    },
])