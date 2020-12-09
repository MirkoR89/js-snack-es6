//                           JSNACK 1

// E01S01
//L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.
let number1 = Number(prompt("Inserisci un primo numero"));
let number2 = Number(prompt("Inserisci un secondo numero"));

const printMaxNumber = (num1, num2) => {
  if (num1 >num2) {
    console.log(num1);
  } else {
    console.log(num2);
  }
}

 printMaxNumber(number1, number2);
