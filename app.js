var userInput = document.getElementById('userInput');
var btnAddToList = document.getElementById('btnAddToList');
var itemList = document.getElementById('itemList');

function addItemToList() {
    itemList.innerHTML += `<li>${userInput.value}</li>`;
    userInput.value = '';
}

function addItemToListAfterPressEnter(event) {
    if (userInput.value > 0 && event.keyCode === 13) {
        addItemToList();
    }
}

btnAddToList.addEventListener('click', addItemToList);

userInput.addEventListener('keypress', addItemToListAfterPressEnter);

var colorPicker1 = document.querySelector('#colorPicker1');
var colorPicker2 = document.querySelector('#colorPicker2');
var bodyColor = document.querySelector('body');

function colorPicker() {
    bodyColor.style.backgroundImage = `linear-gradient(to right, ${colorPicker1.value} , ${colorPicker2.value} )`;
}

colorPicker1.addEventListener('input',colorPicker);

colorPicker2.addEventListener('input',colorPicker);