const phone = {
    maker: "Apple", // String property
    model: "iPhone 12 Pro", // String property
    releaseYear: 2020, // Number property
    hasFaceID: true, // Boolean property
    storage: [64, 128, 256], // Array property
    specs: { // Another object property
        ram: 6, // Number property
        processor: "A14 Bionic", // String property
        screenResolution: "2778 x 1284" // String property
    },
    toggleFaceID: function() { // method to change the boolean property
        this.hasFaceID = !this.hasFaceID;
    },
    addStorage: function(gb) { // method to add to the Array property
        this.storage.push(gb);
    },
    upgradeRam: function(ram) { // method to change the inner object property
        this.specs.ram = ram;
    }
};

console.log(phone); // log the initial state of the phone object

phone.toggleFaceID(); // toggle the hasFaceID property
phone.addStorage(512); // add a 512GB storage option
phone.upgradeRam(8); // upgrade the RAM to 8GB

console.log(phone); // log the final state of the phone object