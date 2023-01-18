/*
    COURSE: COMP1013-Web applications with JavaScript
    AUTHOR: Ziad Ewais
    LAB: 2 - Objects and Classes JavaScript
    STUDENT NAME:Davit Dgebuadze
*/

/*
    Welcome to COMP1013 - Web Apps with JS
    Please write your name in the above section beside 'STUDENT NAME'.
    Please write your code where is indicated.
    Submission is through BlackBoard -> Assignments. Upload your file where is indicated by the week number.
    Please refer to Blackboard -> Faculty information to find the suitable time for office hours.
    Please refer to Blackboard -> Lab Assessments grade poilcy to understand how the labs will be graded.
    Enjoy!
*/

/*
    Before submission, make sure to zip your folder that includes all the working files and rename it as following:
        Lab-2-firstName_Lastname
    *******PLEASE DON'T FORGET TO ADD COMMENTS TO YOUR CODE EXPLAINING WHAT THE CODE DOES!******
 */

/**
    Task 1: Create an Object.
    Create a JS object with the following requirements:
        - A unique product object (Plane, Phone, Watch, Printer, PC, Furniture, .... etc)
        - This objects must have at least 5 properties and 3 methods (functions)
        - The properties must vary in dataType. You should have at least one of the following:
            . String
            . Number
            . Boolean
            . Array
            . Another Object

        - The methods should at least do the following:
            . Change the boolean property
            . Add to the Array property
            . Change the inner object property

    Make sure to print the object to the console and call the methods to alter the property values after making the object, 
    then print the object again to make sure the objects has been altered.
 */

//WRITE YOUR CODE BELOW!
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

console.log(phone); // This one logs the default or initial state of the phone object

phone.toggleFaceID(); // toggle the hasFaceID property
phone.addStorage(512);// add a 512GB storage option
phone.addStorage(1024); // add a 1024GB storage option
phone.upgradeRam(8); // upgrade the RAM to 8GB, if you want to add more RAM, Keep using upgradeRam option.

console.log(phone); // log the final state of the phone object







/*
    Task 2: Create a Class:
    Create a new file for a class of the same object you made object using what you learned in class and has the following requirements:
        - Make a new class JS file.
        - Make sure you import the file before creating a instance of the class.
        - Make sure that your class constructor and methods match the properties of the object declared above.
        - Create an instance of the class below with the correct constructor
        - Print the instance object of the class to the console.
        - Call the class methods that will alter the values of the class instance and print them to console
 */
//WRITE YOUR CODE BELOW!