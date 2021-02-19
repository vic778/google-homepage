# google-homepage
//creer un jeu pour afficher le fizzbuzz
let answer = parseInt(prompt("please enter the number you would like to FizzBuzz up tp:"));

for (let i= 1; i <= answer; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    }else if(i % 5 === 0) {
        console.log("Buzz");
    }else {
        console.log(i);
    }
    
}
