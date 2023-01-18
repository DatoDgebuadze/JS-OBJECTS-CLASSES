

/* This code creates a Phone class with its constructor and several methods 
for changing different aspects of the phone. The constructor takes in several arguments such as maker, model, releaseYear, hasFaceID, storage, specs,
 and ownedby.
  It then creates a new instance of the Phone class called datosPhone and passes in the specified values.
*/

class Phone {
    constructor(maker, model, releaseYear, hasFaceID, storage, specs, ownedby) {
        this.maker = maker;
        this.model = model;
        this.releaseYear = releaseYear;
        this.hasFaceID = hasFaceID;
        this.storage = storage;
        this.specs = specs;
        this.ownedby = ownedby
    }
/* The code then uses the toggleFaceID(), 
addStorage(), upgradeRam(), and changeOwner() 
methods to change the values of the datosPhone instance. 
The toggleFaceID() method toggles the hasFaceID boolean value, the addStorage() method adds a new value to the storage array, 
the upgradeRam() method changes the ram value of the specs object, and the changeOwner() method changes the ownedby value.
*/
toggleFaceID() {
        this.hasFaceID = !this.hasFaceID;
    }

    addStorage(gb) {
        this.storage.push(gb);
    }

    upgradeRam(ram) {
        this.specs.ram = ram;
    }
    changeOwner(newOwner){
        this.ownedby = newOwner;
    }
}

/* This code creates a new class called Phone that has properties such as brand, model, yearReleased, faceID, storageCapacity, specs, and owner. The class also includes methods such as toggleFaceID, addStorage, upgradeRam and changeOwner.
When an instance of the Phone class is created, the constructor function is called and initializes its properties with the arguments passed to it. 
After that, the toggleFaceID, addStorage, upgradeRam and changeOwner methods are called to modify the properties of the object. Finally, the modified object is logged to the console.
*/


const datosPhone = new Phone("Apple", "iPhone 12 Pro", 2020, true, [64, 128, 256], { ram: 6, processor: "A14 Bionic", screenResolution: "2778 x 1284"  }, "Davit Dgebuadze");
console.log(datosPhone);

datosPhone.toggleFaceID(false);
datosPhone.addStorage(512);
datosPhone.upgradeRam(8);
datosPhone.changeOwner("Davit Dgebuadze");
console.log(datosPhone);
