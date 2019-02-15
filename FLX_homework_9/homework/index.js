// Task 1
function findTypes(...rest) {
    let typeofarr = [];
    for (let i = 0; i < rest.length; i++) {
        typeofarr.push(typeof rest[i])
    }
    return typeofarr
}

findTypes(6, null, 'number');

// Task2
function executeforEach(arguments, funct) {
    for (let i = 0; i < arguments.length; i++) {
        funct(arguments[i])
    }
}

executeforEach([1, 2, 3], function (el) {
    console.log(el)
});

// Task3
function mapArray(array, funct) {
    let newArray = [];
    executeforEach(array, function (el) {
        newArray.push(funct(el));
        return newArray
    });
}

mapArray([2, 5, 8], function (el) {
    return el + 3;
});

// Task4
function filteredArray(array, funct) {
    let newFilteredArray = [];
    executeforEach(array, function (el) {
        if (funct(el)) {
            newFilteredArray.push(el)
        }
    });
    return newFilteredArray;
}

filteredArray([2, 5, 8], function (el) {
    return el > 3;
});

// Task5
let data = [
    {
        "_id": "5b5e3168c6bf40f2c1235cd6",
        "index": 0,
        "age": 39,
        "eyeColor": "green",
        "name": "Stein",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5b5e3168e328c0d72e4f27d8",
        "index": 1,
        "age": 38,
        "eyeColor": "blue",
        "name": "Cortez",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "5b5e3168cc79132b631c666a",
        "index": 2,
        "age": 2,
        "eyeColor": "blue",
        "name": "Suzette",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5b5e31682093adcc6cd0dde5",
        "index": 3,
        "age": 19,
        "eyeColor": "green",
        "name": "George",
        "favoriteFruit": "banana"
    }
];

function getAmountOfAdultPeople(arr) {
    let arrayOfAdult = [];
    filteredArray(arr ,function (el) {
        if(el['age']>18){
            arrayOfAdult.push(el['age'])
        }
    });
    return arrayOfAdult.length;
}

getAmountOfAdultPeople(data);


// Task6
function getGreenAdultBananaLovers(data) {
    let arrayofname = [];
    filteredArray(data, function (el) {
        if (el.age > 18 && el.eyeColor === 'green' && el.favoriteFruit === 'banana') {
            arrayofname.push(el.name)
        }
        return arrayofname
    });

}
getGreenAdultBananaLovers(data);

// Task7
function key(obj) {
    let arr = [];
    for(let keys in obj) {
        if (obj.hasOwnProperty(keys)) {
        arr.push(keys);
        }
    }
    return arr;
}

key({keyOne: 1, keyTwo: 2, keyThree: 3});

// Task8
function value (obj) {
    let array = [];
    for (let keys in obj) {
        if (obj.hasOwnProperty(keys)) {
            array.push(obj[keys]);
        }
    }
    return array;
}
value({ keyOne: 1, keyTwo: 2, keyThree: 3 });


// Task9

function showFormattedDate(dates) {
    let days = dates.getDate();
    let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let month1 = month[dates.getMonth()];
    let fullyear = dates.getFullYear();
    return `Date: ${days} of ${month1}, ${fullyear}`;
}

showFormattedDate(new Date('2019-01-27T01:10:00'));


// Task10
function isEvenYear(date) {
     let number = date;
     let year = number.getFullYear();
        return year === 0 || !!(year && !(year%2));
    }

    isEvenYear(new Date('2019-01-27T01:10:00'));

// Task11
function isEvenMonth(date) {
    let n = date;
    let month = n.getMonth()+1;
    return !(month % 2);



}

console.log(isEvenMonth(new Date('2019-02-27T01:10:00')));