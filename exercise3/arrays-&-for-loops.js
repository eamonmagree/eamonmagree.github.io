/* arrays are just collections of variables */
var fruit1 = "banana";
var fruit2 = "pineapple";
var fruit3 = "apple";
var fruit4 = "peach";
var fruit5 = "orange";

var fruitArray = ["banana", "pineapple", "apple", "peach", "orange"];

fruitArray[1] = "carrot"; /* changes 2nd array of strings to "carrot" */

var mixedArray = [42, "pineapple", true, [3, 6, "nine"] /* this is an array inside an array */, "orange"];

console.log(fruitArray[0]); /* this is referencing the fruitArray above */

for(var fruit of fruitArray){
    if(fruit === "carrot"){
        console.log("this isnt a fruit")
    } else {
        console.log(fruit)
    }
}

for(x of fruitArray){
    
}

/* variables in an array start at 0 - not at 1 */