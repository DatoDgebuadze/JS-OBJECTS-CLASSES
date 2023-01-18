// object notation js

const cars = {
    type: "Sedan",
    numOfdoors: 4,
    hasSunroof: false,
    accessories:["Light bar", "Coffee Holder", "Heated Seats"],
    wheelDiameter: 16.5,
    "Doorsopen": false,
    owner:{
        Firstname: "john",
        Lastname: "Doe",
        age: 20,
        address: "123 Bank St."
    },

    openDoors: function(doorStatus){
        this.Doorsopen = doorStatus
    }
}

console.log(cars)
console.log(cars.accessories[1])
console.log(cars["Wheeldiameter"])
console.log(cars["owner"].address)
console.log(cars.owner["firstname"])
console.log(cars.owner.Lastname)
console.log(cars["owner"]["address"])

const PrintPage = function(numPages){
    for(let i = 0; i < numPages; i++){
        console.log("Hello " + i)
    }
}
PrintPage(4)

const anotherPrintPage = (numPages) => {
    for(let i=0; i <numPages; i++){
        console.log("Another Hello" + i)
    }
}
anotherPrintPage(5)