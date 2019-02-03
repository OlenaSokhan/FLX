var inputMoney = prompt('Input amount of money');
var discount = prompt('Input the discount');
var withDiscount;
var withoutDiscount;
var saved;

withDiscount = (1 / 100) * discount;
withoutDiscount = (inputMoney - (inputMoney * withDiscount)).toFixed(2);

saved = (inputMoney - withoutDiscount).toFixed(2);

if (inputMoney < 0 || inputMoney > 9999999) {
    alert('Invalid input data')
} else if (discount < 0 || discount > 99) {
    alert('Invalid input data')
} else {
    alert('Price without discount:' + inputMoney);
    alert('Discount:' + discount + '%');
    alert('Price with discount:' + withoutDiscount);
    alert('Saved:' + saved)

}

