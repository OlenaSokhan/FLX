let play = confirm('Do you want to play a game?');
let max = 5;
let min = 0;
let prize;
let prize1;
var attempt = 3;




let random = Math.floor(Math.random() * (max - min + 1) + min);
console.log(random);

if (play === true) {

    for (let a = 0; a < 3; a++) {
        var enterNumber = parseInt(prompt('Enter a number from 0 to 5' +
            "\n" + 'Attempts left - ' + attempt +
            "\n" + 'Total prize - 10' +
            "\n" + 'Possible prize on current attempt: 10$'));

        if (random === enterNumber) {

            if (a === 0) {
                prize = 10;
                alert('Your prize  is ' + prize + '$');
                break;
            } else if (a === 1) {

                prize = 5;
                alert('Your prize  is ' + prize + '$');
                break;
            } else if (a === 2) {

                prize = 3;
                alert('Your prize  is ' + prize + '$');
                break;
            }

        } else {
            attempt--;
        }
    }
    if (random !== enterNumber) {
        prize = 0;
    }
    alert('Thank you for a game. Your prize is: ' + prize + '$');

let playAgain = confirm('Do you want to play again?');

if (playAgain === false) {
        alert('Thank you for a game. Your prize is:' + prize + '$');
} else if (playAgain === true) {


let random1 = Math.floor(Math.random() * ((max * 2) - (min * 2) + 1) + (min * 2));
console.log(random1);

let a2 = 3;
 for (let b = 0; b < 3; b++) {

            let enterNumber = parseInt(prompt('Enter a number from 0 to 10' +
                "\n" + 'Attempts left - ' + a2 +
                "\n" + 'Total prize - 30' +
                "\n" + 'Possible prize on current attempt: 30'));
            if (random1 === enterNumber) {

                if (b === 0) {
                    prize1 = 30;
                    alert('Your prize  is ' + prize1 + '$');
                    break;
                } else if (b === 1) {
                    prize1 = 15;
                    alert('Your prize  is ' + prize1 + '$');
                    break;
                } else if (b === 2) {
                    prize1 = 7;
                    alert('Your prize  is ' + prize1 + '$');
                    break;
                }else {
                    a2--;
                }

            }
        }
        if (random1 !== enterNumber || playAgain === false) {
            prize1 = 0;
        }
    }



    let totall = prize + prize1;
    alert('Your prize -' + totall + '$');





} else if (play === false) {
    alert('You did not become a millionaire, but can.');
}

