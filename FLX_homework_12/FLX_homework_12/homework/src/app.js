const rootNode = document.getElementById('root');
let nul = 0;
const todoItems = [];


// 1
let divFirst = document.createElement('div');
divFirst.id = 'first';
let h1=document.createElement('h1');
h1.innerText = 'Simple Todo Applications';
let addButton = document.createElement('button');
addButton.id='btnId';
addButton.innerText= 'Add new task';
let p=document.createElement('p');
p.innerText='Todo is empty';
p.id='hidden';
let ul=document.createElement('ul');
ul.id='items';
divFirst.style.display = 'block';
window.location.hash = '';


rootNode.appendChild(divFirst);
divFirst.appendChild(h1);
divFirst.appendChild(addButton);
divFirst.appendChild(p);
divFirst.appendChild(ul);

//2
let divSecond = document.createElement('div');
divSecond.id='add';
let h1Add=document.createElement('h1');
h1Add.innerText='Add task';
let input=document.createElement('input');
input.setAttribute('type','text');
input.id='input';
input.className='input';
let buttonCancel = document.createElement('button');
buttonCancel.innerText='Cancel';
let buttonAdd=document.createElement('button');
buttonAdd.innerText='Save changes';
divSecond.style.display = 'none';



rootNode.appendChild(divSecond);
divSecond.appendChild(h1Add);
divSecond.appendChild(input);
divSecond.appendChild(buttonCancel);
divSecond.appendChild(buttonAdd);

//3
let divThird = document.createElement('div');
divThird.id='modify';
let h1Mod=document.createElement('h1');
h1Mod.innerText='Modify item';
let input2=document.createElement('input');
input2.setAttribute('type','text');
input2.id='inputMod';
input2.className='input';
let buttonCancel2 = document.createElement('button');
buttonCancel2.innerText='Cancel';
let buttonAdd2=document.createElement('button');
buttonAdd2.innerText='Save changes';
divThird.style.display = 'none';


rootNode.appendChild(divThird);
divThird.appendChild(h1Mod);
divThird.appendChild(input2);
divThird.appendChild(buttonCancel2);
divThird.appendChild(buttonAdd2);

function newItems() {
    let li = document.createElement('li');
    li.className='item';
    let value = document.getElementById('input').value;
    document.getElementById('input').value='';
    let text = document.createTextNode(value);
    li.appendChild(text);
    ul.appendChild(li);
    let checkBtn = document.createElement('button');
    checkBtn.innerText = 'check';
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText= 'delete';

    let img=document.createElement('img');
    img.className='img';
    img.src = './assets/img/todo-s.png';

    let img2=document.createElement('img');
    img2.className='img2';
    img2.src = './assets/img/remove-s.jpg';


    li.insertBefore(img,li.firstChild);
    li.appendChild(img2);

    if(img){
        img.addEventListener('click',function () {
            img.src = './assets/img/done-s.png';
        })
    }

    if(img2){
        img2.addEventListener('click', function () {
            let inputItem = this.parentNode;
            let item = inputItem.parentNode;
            item.removeChild(inputItem);
        })
    }

    // if(li){
    //     li.addEventListener('click',function () {
    //         divSecond.style.display = 'none';
    //         divFirst.style.display = 'none';
    //         divThird.style.display = 'block';
    //         li.value=input.value
    //     })
    // }

}

if (addButton) {
    addButton.addEventListener('click', function() {
        divSecond.style.display = 'block';
        divFirst.style.display = 'none';
        window.location.hash = 'add'
    });
}
if (buttonAdd) {
    buttonAdd.addEventListener('click', function() {
        document.getElementById('hidden').style.display = 'none';
        divSecond.style.display = 'none';
        divFirst.style.display = 'block';
        newItems();
        window.location.hash = ''

    });
}


if(buttonCancel){
    buttonCancel.addEventListener('click',function () {
        document.getElementById('hidden').style.display = 'none';
        divSecond.style.display = 'none';
        divFirst.style.display = 'block';
        window.location.hash = '';
        document.getElementById('input').value='';
    })
}

