
let asklogin = prompt('Please enter login', '');
let userPass = 'UserPass';
let adminPass = 'RootPass';
let date = new Date();

if(asklogin === null || asklogin === ''){
    alert('Canceled')
} else if(asklogin.length < 4) {
        alert('I dont know any users having name length less than 4 symbols')
    }else if (asklogin === 'Admin') {
            let pass = prompt('Please enter password', '');
            if ( pass === adminPass) {
                    if(date.getHours() < 20){
                    alert('Good day, dear Admin!')
                        }else if(date.getHours() >= 20){
                       alert('Good evening, dear Admin!')
                            }
            } else if (pass === null || pass === '') {
            alert('Canceled');
            } else {
            alert('Wrong password')
            }
} else if( asklogin === 'User'){
    let pass = prompt('Please enter password', '');
    if ( pass === userPass) {
        if(date.getHours() < 20){
            alert('Good day, dear User!')
        }else if(date.getHours() >= 20){
            alert('Good evening, dear User!')
        }
    } else if (pass === null || pass === '') {
        alert('Canceled');
    } else {
        alert('Wrong password')
    }
} else {
    alert ('I dont know you')
}

