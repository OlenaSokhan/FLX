let rootNode = document.getElementById('root');
const ITEMS = 10;
let counter = 0;
let dragAndDrop = null;
let g = 1;


function newItem() {

    let li = document.createElement('li');
    let value = document.getElementById('input').value;
    let text = document.createTextNode(value);


    if (value === '') {
        document.getElementById('addBtn').disabled = true;
    } else {
        document.getElementById('todo-list').appendChild(li)
    }

    document.getElementById('input').value = '';
    li.setAttribute('draggable', true);
    li.className = 'liItems';

    // icon
    let iconCheck = document.createElement('i');
    let iconCheckText = document.createTextNode('check_box_outline_blank');
    iconCheck.className = 'material-icons';
    iconCheck.appendChild(iconCheckText);

    let checkBtnIcon = document.createElement('button');
    checkBtnIcon.className = 'checkBtn';

    let iconDelete = document.createElement('i');
    let iconDeleteText = document.createTextNode('delete');
    iconDelete.className = 'material-icons';
    iconDelete.appendChild(iconDeleteText);

    let iconDone = document.createElement('i');
    let iconDoneText = document.createTextNode('check_box');
    iconDone.className = 'material-icons';
    iconDone.appendChild(iconDoneText);


    let dltBtn = document.createElement('button');
    dltBtn.className = 'dltBtn';

    checkBtnIcon.appendChild(iconCheck);
    dltBtn.appendChild(iconDelete);
    li.appendChild(checkBtnIcon);
    li.appendChild(text);
    li.appendChild(dltBtn);

    if (++counter > ITEMS) {
        document.getElementById('addBtn').disabled = true;
        document.getElementById('input').disabled = true;


    } else if (counter === ITEMS) {
        let notf = document.createElement('h4');
        let notfText = document.createTextNode('Maximum item per list are created');
        notf.appendChild(notfText);
        document.getElementById('header').appendChild(notf);
        document.getElementById('input').setAttribute('disabled', 'disabled');

    }
    // check
    checkBtnIcon.onclick = function () {
        iconCheck.textContent = 'check_box'
    };
    // delete
    dltBtn.onclick = function () {
        let listItem = this.parentNode;
        let li = listItem.parentNode;
        li.removeChild(listItem);
        counter -= g;
        let input = document.getElementById('input');
        input.removeAttribute('disabled');
        document.querySelector('h4').textContent = '';


    };

    dragAndDropElements(li)

}



function dragStart(e) {
    dragAndDrop = this;
}
function dragOver(e) {
    if (e.preventDefault) {
        e.preventDefault();
    }
}
function handleDrop(e) {
    if (dragAndDrop !== this) {
        dragAndDrop.parentNode.removeChild(dragAndDrop);
        this.parentNode.insertBefore(dragAndDrop, this);
    }
    return false;

}
function dragAndDropElements(e) {
    e.addEventListener('dragstart', dragStart, false);
    e.addEventListener('dragover', dragOver, false);
    e.addEventListener('drop', handleDrop, false);
}

