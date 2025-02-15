let myNumber;

do {
    myNumber = Number(prompt("Enter a number between 1 and 10: "));
   } while (!(myNumber >= 1 && myNumber <= 10));



console.log(myNumber);