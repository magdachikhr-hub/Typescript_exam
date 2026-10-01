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
function getRoomInfo() {
    return `ოთახი: ${roomName}, სართული:${floor}, თავისუფალია:${isItAvailable}, ფასი ღამეში:${price}`;
}
console.log(getRoomInfo());
//2.3
function getRoomCategory(cost) {
    if (cost < 100) {
        console.log("economy");
    }
    else if (cost <= 250) {
        console.log("Standard");
    }
    else {
        console.log("Luxury");
    }
}
getRoomCategory(2);
getRoomCategory(20000);
export {};
//2.4
//# sourceMappingURL=main.js.map