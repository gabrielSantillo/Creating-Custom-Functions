// This function get two numbers, sum then and gets the result of the sum and multiply for five
function doMath(num1, num2) {
    let result = (num1 + num2) * 5;
    return result;
}

// This is the function doMath() being called and being saved in the variable "sum" so its possible to print the result
let sum = doMath(5,1);
console.log(sum);
let sum1 = doMath(10,10);
console.log(sum1);
let sum2 = doMath(53,28);
console.log(sum2);

// This function get a string and then count the number of characters of it. If it has more than 10 characteres, returns True. If not, returns false
function characters(word) {
    let size_string = word.length;

    if(size_string > 10) {
        return true;
    } else {
        return false;
    }
}

// This is the function characters() being called and being saved at the variable result so its possible to print the result
let result = characters(`Franciscote`);
console.log(result);
let result1 = characters(`Gabriel`);
console.log(result1);
let result2 = characters(`Alex`);
console.log(result2);

// This is the function that compare all string in an array that starts with "ph" and return in case the array has some string that matches the conditional
function array_string(array) {

    for(let counter = 0; counter < array.length; counter++){
        let names = array[counter].startsWith(`ph`);
        if(names) {
            return console.log(array[counter]);
        } else {
            console.log(`None name that starts with ph`);
        }
    }
}

// This is the function being called right after an array being created
let array_names = [`Gabriel`, `phoebe`, `Alex`];
array_string(array_names);
let array_names1 = [`Gabriel`, `phoebe`, `Alex`, `phoebo`];
array_string(array_names1);
let array_names2 = [`Gabriel`, `phenomenal`, `Alex`, `Josh`, `phoebe`];
array_string(array_names2);