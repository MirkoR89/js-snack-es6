//                           JSNACK 1

// E01S01
//L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.

/*let number1 = Number(prompt(`Inserisci un primo numero`));
let number2 = Number(prompt(`Inserisci un secondo numero`));

const printMaxNumber = (num1, num2) => `${num1 > num2 ? console.log(num1) : console.log(num2)}`;

printMaxNumber(number1, number2);*/

// E02S01
//L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

/*let word1 = (prompt(`Inserisci la prima parola`));
let word2 = (prompt(`Inserisci la seconda parola`));

const longWord = (word1, word2) => `${word1.length > word2.length ? console.log(word1) : console.log(word2)}`;

longWord (word1, word2);*/

// E03S01
//Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while.

/*let sum = 0;
for (let i = 0; i < 5; i++) {
  let userNumber = Number(prompt(`Inserisci un numero`));
  console.log(`${sum = sum + userNumber}`);
}*/


// E04S01
//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

/*const userList = [`Mario Rossi`, `Luca Bianchi`, `Andrea Verdi`];

for (let i = 0; i < userList.length; i++) {
  let userName = prompt(`Inserisci il tuo nome e cognome`);
  console.log(`${userName} ${userList.includes(userName) ? "può partecipare alla festa" : "è uno sfigato! Torna a casa" }`);
}*/

// E05S01
//Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.

  for (var i = 0; i < 6; i++) {
    const listNumber = [];
    let userNumber = Number(prompt(`Inserisci un numero`));
    `${userNumber % 2 != 0 ? listNumber.push(userNumber) && console.log(listNumber) : "Il numero è pari"}`;
  }
