/* Flow

first function- inquirer asks all questions for employee: name, email, generatesID, then asks role:
second function - if returned role then ask github;office;school
third function uses all returned data to create class instances, saved to an array
fouth function = uses employee objects to generate cards in template
fifth function = writes the template to an html file
sixth function = moves the file to DIST
seventh function = creates/copies CSS to DIST











// Paste your code from the previous activity `03-RPG-Prototypes`
// Convert the constructor function, including the prototype methods, to ES6 Classes.
// =============================================================
// Create two new instances of a `Character`, giving them different names, strength, and hitPoints.
// Call a combination of `printStats()`, `attack()`, and `isAlive()` methods to have the two characters "fight" in your console.
// Create a constructor function called `Character` that takes in 3 arguments: `name`, `strength`, `hitpoints`
// YOUR CODE HERE
//
class Bonus{
    constructor(bonusPoints,bonusHits){
        this.bonusPoints=bonusPoints
        this.bonusHits=bonusHits
    }
    getBonusPoints(){
        return this.bonusPoints
    }
    getBonusHits(){
        return this.bonusHits
    }
}
class Villian extends Bonus {
    constructor(villianName,villianStrength,villianHitpoints,bonusPoints,bonusHits){
       super(bonusPoints,bonusHits)
        this.villianName=villianName
        this.villianStrength=villianStrength
        this.villianHitpoints=villianHitpoints
        
    }
}
class Character extends Bonus {
    constructor(name,strength,hitpoints,bonusPoints,bonusHits){
       super(bonusPoints,bonusHits)
        this.name=name
        this.strength=strength
        this.hitpoints=hitpoints
   
    }
    printStats(){
        console.log("Name:"+ this.name, " Strength:"+ this.strength+" hitpoints:"+this.hitpoints)
     }
   
    isAlive(){
        if(this.hitpoints>0){
            console.log("Name: ", this.name +"  is alive")
        }
        else{
            console.log("Name: ", this.name +"  dead")
        }
     }
     attack (secondCharacter){
        secondCharacter.hitpoints -= this.strength  
        console.log("name: "+ this.name +" attacked "+ secondCharacter.name) 
      
    }
}
let warrior = new Character('Crusher', 10, 75,100,25);
let rogue = new Character('Dodger', 20, 50,200,15);
warrior.printStats();
console.log("BonusHits: ",warrior.getBonusHits(),"bonusPoints:"+warrior.getBonusPoints())
rogue.printStats();
rogue.attack(warrior);
warrior.printStats();
warrior.isAlive();
// Create a prototype method called `printStats()` which prints all of the stats for a character
// YOUR CODE HERE
//
//Character.prototype.test="this is test"
// Character.prototype.printStats= function(){
//    console.log("Name:"+ this.name, " Strength:"+ this.strength+" hitpoints:"+this.hitpoints)
// }
// Create a prototype method called `isAlive()` which prints whether or not this character is alive
// by determining whether their `hitpoints` are above or below zero
// YOUR CODE HERE
//
// Character.prototype.isAlive=function(){
//    if(this.hitpoints>0){
//        console.log("Name: ", this.name +"  is alive")
//    }
//    else{
//        console.log("Name: ", this.name +"  dead")
//    }
// }
// // Create a prototype method called `attack()` which takes in a second character
// // and subtracts this character's `strength` from their `hitpoints`
// // YOUR CODE HERE
// //
// Character.prototype.attack = function(secondCharacter){
//     secondCharacter.hitpoints -= this.strength   
//     return secondCharacter.hitpoints
// }
