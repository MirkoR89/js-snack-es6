//                           JSNACK 1

// E01S01
//L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.

/*let number1 = Number(prompt(`Inserisci un primo numero`));
let number2 = Number(prompt(`Inserisci un secondo numero`));

const printMaxNumber = (num1, num2) => {
  if (num1 >num2) {
    console.log(num1);
  } else {
    console.log(num2);
  }
}

 printMaxNumber(number1, number2);*/

// E02S01
//L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

/*let word1 = (prompt(`Inserisci la prima parola`));
let word2 = (prompt(`Inserisci la seconda parola`));

const longWord = (word1, word2) => {
  if (word1.length > word2.length) {
    console.log(word1);
  } else if (word1.length == word2.length) {
    console.log(`Le parole sono lunghe uguali`);
  } else {
    console.log(word2);
  }
}

longWord (word1, word2);*/

// E03S01
//Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while.

let sum = 0;
for (let i = 0; i < 5; i++) {
  let userNumber = Number(prompt(`Inserisci un numero`));
  sum = sum + userNumber;
  console.log(sum);
}
