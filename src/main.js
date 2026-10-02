console.log("Hotel Booking System - [მაგდა ჩიხრაძე]");
//2.1
const roomName = "Double Room";
const floor = 13;
const isItAvailable = true;
const price = 90;
console.log(roomName);
console.log(floor);
console.log(isItAvailable);
console.log(price);
//2.2
function getRoomInfo(roomName, floor, isItAvailable, price) {
    return `ოთახი: ${roomName}, სართული: ${floor}, თავისუფალია: ${isItAvailable}, ფასი ღამეში: ${price} ლარი`;
}
console.log(getRoomInfo("Beach view", 14, true, 500)); ///
//2.3
function getRoomCategory(cost) {
    if (cost < 100) {
        return "Economy";
    }
    else if (cost <= 250) {
        return "Standard";
    }
    else {
        return "Luxury";
    }
}
console.log(getRoomCategory(25));
console.log(getRoomCategory(2000));
console.log(getRoomCategory(195));
//2.4
const citiesInAmerica = [
    "New York City",
    "Los Angeles",
    "Houston",
    "Chicago",
    "Phoenix",
];
for (let i = 0; i < citiesInAmerica.length; i++) {
    console.log(i, citiesInAmerica[i]);
}
//2.5
const ratings = [4, 10, 6, 7];
let sum = 0;
for (const rating of ratings) {
    sum += rating;
}
const average = sum / ratings.length;
console.log(average);
//3.3
const hotelInfo = {
    name: "the best hotel ever",
    city: "tbilisi",
    country: "georgia",
    foundedYear: 1900,
    website: "hotelhotel@gmail.com",
};
const hotelRoomInfo = {
    id: 4446669793332,
    name: "double room",
    type: "suite",
    capacity: 5,
    price: 800.99,
};
console.log(hotelRoomInfo);
console.log(hotelInfo);
//3.4
const RoomsArray = [
    {
        id: 560492324,
        name: "single room",
        type: "single",
        capacity: 1,
        price: 50.99,
    },
    {
        id: 5607777745,
        name: "double room",
        type: "double",
        capacity: 3,
        price: 80.99,
    },
    {
        id: 5612343949,
        name: "suite luxury",
        type: "suite",
        capacity: 7,
        price: 590.99,
    },
];
RoomsArray.forEach((room) => {
    console.log(room.name, room.price);
});
//4.1
class Guest {
    firstName;
    lastName;
    email;
    age;
    constructor(firstName2, lastName2, email2, age2) {
        this.firstName = firstName2;
        this.lastName = lastName2;
        this.email = email2;
        this.age = age2;
    }
    getProfile() {
        return `სტუმრის სახელი გვარი: ${this.firstName} ${this.lastName}, ელ-ფოსტა: ${this.email}, ასაკი:${this.age}`;
    }
}
//4.2
const firstGuest = new Guest("magda", "chi", "magdamagda@gmail.com", 21);
console.log(firstGuest);
console.log(firstGuest.firstName, firstGuest.lastName, firstGuest.email);
//4.3
class VipGuest extends Guest {
    getBookedRooms() {
        return ["single room", "double room", "suite room", "luxury room"];
    }
}
const vipGuest = new VipGuest("kote", "kotadze", "example@gmail.com", 25);
console.log(vipGuest.getBookedRooms());
//4.4
console.log(firstGuest.getProfile());
console.log(vipGuest.getProfile());
export {};
//# sourceMappingURL=main.js.map