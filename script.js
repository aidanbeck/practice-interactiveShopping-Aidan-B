const input = document.getElementById("nameInput");
const button = document.getElementById("addItemButton");
const list = document.getElementById("itemList");

button.addEventListener("click", () => {
    
    // Create Remove Button
    let removeItem = document.createElement("button");
    removeItem.innerHTML = '-';
    removeItem.addEventListener("click", function() { // Must not be an arrow function, or the 'this' keyword will not find the button. I am not sure why
        this.parentNode.remove();
    });

    // Create List Element
    let li = document.createElement("li");
    li.innerHTML = input.value + " ";
    li.id = input.value;
    li.appendChild(removeItem);
    list.appendChild(li);

    input.value = '';
});