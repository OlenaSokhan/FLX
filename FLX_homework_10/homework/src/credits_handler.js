function userCard(index) {
    let balance = 100;
    let transactionLimit = 100;
    let historyLogs = [];
    let key = index;

    return {
        getCardOptions: function () {
            return {
                balance: balance,
                transaction_limit: transactionLimit,
                history_logs: historyLogs,
                key: key
            }

        },
        putCredits: function (amount) {
            amount = amount + balance;
            historyLogs.push({
                operationType: 'Received credits',
                credits: amount,
                operationTime: new Date().toLocaleString()
            })
        },
        takeCredits: function (amountOfCredit) {
            if (transactionLimit > amountOfCredit && balance > amountOfCredit) {
                balance = balance - amountOfCredit
            } else {
                console.error('Sorry, you don\'t have enough money')
            }

            historyLogs.push({
                operationType: 'Withdrawal of credits',
                credits: amountOfCredit,
                operationTime: new Date().toLocaleString()
            })
        },
        seeTransactionLimit: function (credits) {
            transactionLimit = credits;

            historyLogs.push({
                operationType: 'Transaction limit change',
                credits: credits,
                operationTime: new Date().toLocaleString()
            })

        },
        transferCredits: function (credits, card) {
            let tax = 0.005;
            let creditTax = credits + credits * tax;
            if (balance >= creditTax && transactionLimit >= creditTax) {
                this.takeCredits(creditTax);
                card.putCredits(credits)
            }

        }

    }


}

class UserAccount {
    constructor(name, cards) {
        this.name = name;
        this.cards = [];
    }

        addCard(){
            let maxCards = 3;
            if (maxCards >= this.cards.length) {
                this.cards.push(userCard(this.cards.length + 1))
            } else {
                console.error('User should have <= 3 cards')
            }
        }
        getCardByKey(key){
            return this.cards[key - 1]
        }

}

// let user = new UserAccount('Bob');
// user.addCard();
// user.addCard();
//
// let card1 = user.getCardByKey(1);
// let card2 = user.getCardByKey(2);
//
// card1.putCredits(500);
// card1.seeTransactionLimit(800);
// card1.transferCredits(300, card2);
//
// card2.takeCredits(50);
//
// console.log(card1.getCardOptions());

