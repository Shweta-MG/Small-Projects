// find the parent element
const main = document.getElementById("mainContainer");

// create first element
const list = document.createElement("ol")

// creating a text content to verify if the content is created.
list.textContent = "I am trying to learn appendChild through HTML DOM"

// appending the chile to parent
main.appendChild(list);


// appending child into first child.
const subList = document.createElement("li");
subList.textContent = "I love fruits";
list.appendChild(subList)

// appending a array of fruits as list content.
const fruitList = ["apple", "banana", "orange", "kiwi", "Pitch"];
for (fruit of fruitList){
    let newSubList = document.createElement("li");
    newSubList.textContent = fruit;
    subList.appendChild(newSubList);
}