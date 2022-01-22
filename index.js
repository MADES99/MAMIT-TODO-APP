
// This target the Add Todo button
var select = document.getElementById('add');

// This get updated as more items are added, giving the input and label a new id and for value.
var abd = 0;

// Add to-do item to the list when the Add Todo is click
select.addEventListener('click',  addToConsole);

// Add to-do to the list
function addToConsole() {
    var form = document.getElementById('value').value;
    if (form) {
        newItem(form); 
    };   
};

// The code below remove the to-do item from the list
const listDiv = document.querySelector('#listItem')

listDiv.addEventListener('click', (e) => {
    if(e.target.id === 'delete') {
        let item = e.target.parentNode;
        let ul = document.querySelector('#itemRow')
        ul.removeChild(item)
    }
});

// The code above remove the to-do item from the list


// The function operate with the addToConsole function, adding the item to the todo list. 
function newItem(text) {
    abd++

    const newEl = `<li> <input type="checkbox" name="checkbox"  id="${abd}" value="value">
    <label for="${abd}">${text}</label>
    <img src="icons8-bin-64.png" alt="bin" id="delete"> </li> `

    var list = document.getElementById('itemRow');
    list.innerHTML += newEl;    
};


