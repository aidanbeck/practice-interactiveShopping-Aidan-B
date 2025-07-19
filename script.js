const nameInput = document.getElementById("nameInput");
const addItemButton = document.getElementById("addItemButton");
const itemList = document.getElementById("itemList");

function removeItem(id) {
    document.getElementById(id).remove();
}

function editItem(id) {
    let listEntry = document.getElementById(id);
    listEntry.innerHTML = '';

    // Create Input
    let renameInput = document.createElement("input");
    renameInput.value = id;
    renameInput.id = `${id}Save`;
    listEntry.appendChild(renameInput);

    // Create Save Button
    let saveButton = document.createElement("button");
    saveButton.innerHTML = '💾';
    saveButton.addEventListener("click", () => saveItem(id));
    listEntry.appendChild(saveButton);
}

function saveItem(id) {
    let element = document.getElementById(id);

    let newName = document.getElementById(`${id}Save`).value;
    let newElement = createItem(newName);

    element.replaceWith(newElement);
}

function createItem(name) {

    // Create Label
    let label = document.createElement("span");
    label.innerHTML = name + " ";

    // Create Remove Button
    let removeButton = document.createElement("button");
    removeButton.innerHTML = '-';
    removeButton.addEventListener("click", () => removeItem(name));

    // Create Edit Button
    let editButton = document.createElement("button");
    editButton.innerHTML = '✎';
    editButton.addEventListener("click", () => editItem(name));

    // Create List Element
    let li = document.createElement("li");
    li.id = name;
    li.appendChild(label);
    li.appendChild(editButton);
    li.appendChild(removeButton);

    return li;
}

addItemButton.addEventListener("click", () => {

    if (nameInput.value == '' || nameInput.value == undefined) { return; }

    let newItem = createItem(nameInput.value);
    itemList.appendChild(newItem);
    nameInput.value = '';
});