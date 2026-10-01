console.log("Hotel Booking System - [მაგდა ჩიხრაძე]");

//2.1

const roomName: string = "Double Room";
const floor: number = 13;
const isItAvailable: boolean = true;
const price: number = 90;

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
function getRoomCategory(cost: number) {
  if (cost < 100) {
    console.log("economy");
  } else if (cost <= 250) {
    console.log("Standard");
  } else {
    console.log("Luxury");
  }
}

getRoomCategory(2);
getRoomCategory(20000);

//2.4
