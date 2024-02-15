document.title = "DOM DOM🚘";

const myHeader = document.getElementById("header");

myHeader.style.backgroundColor = "red";
myHeader.style.color = "white";

const addButon = document.getElementById("btn");
console.log(addButon);

addButon.style.backgroundColor = "#bebe";
addButon.style.border = "none";
addButon.style.borderRadius = "10px";
addButon.style.padding = "0.6rem";

addButon.value = "Save";

const h1 = document.getElementById("heading1");
console.log(h1);

h1.textContent = "DOM Introduction";

console.log(h1.textContent);
console.log(h1.innerText);
console.log(h1.innerHTML);

const myInputs = document.getElementsByTagName("input");
console.log(myInputs);
console.log("Size:", myInputs.length);

console.log(myInputs[0]);
console.log(myInputs[1]);

console.log(document.getElementsByTagName("h3")[0]);

console.log(myInputs.item(1));

const myLists = document.getElementsByTagName("li");
const myInputsArr = [...myLists];
console.log(myInputsArr);

myInputsArr.forEach((li) => (li.style.color = "red"));

const myListsArr1 = Array.from(myLists);
console.log(myListsArr1);
myListsArr1.map((li) => (li.style.listStyleType = "none"));

const lists = document.getElementsByClassName("list");

console.log(lists);

const listArr = [...lists];

[...lists].forEach((li) => console.log(li));

listArr.forEach((li) => console.log(li));

// lists[2].innerHTML = "Javascript language";
lists[2].innerHTML = `<h1>Javascript</h1>`;
lists[3].innerText = `<h1>React</h1>`;
lists[4].textContent = `<h1>VUE</h1>`;

const header = document.querySelector("#header");
console.log(header);

const itemLists = document.querySelector(".list");
console.log(itemLists);

const h2 = document.querySelector("h2");
console.log(h2);

const otherH2 = document.querySelector("section h2");

const buton = document.querySelector("section.add-item #btn");
console.log(buton);

const react = document.querySelector("section.item-list ul li:nth-child(4)");
console.log(react);

const listeler = document.querySelectorAll("ul li");
console.log(listeler);

listeler.forEach((li) => console.log(li));

for (const liste of listeler.values()) {
  console.log(liste);
}

console.log("travers");

const addItem = document.querySelector(".add-item");
console.log(addItem);

console.log(addItem.parentElement);
console.log(addItem.parentNode.parentNode);

const listss = document.querySelector(".list");

console.log(listss.textContent);

console.log(listss.closest("section"));
console.log(listss.closest("body").querySelector("header h1").innerText);

console.log(addItem.children);
console.log(addItem.children[2]);

console.log(addItem.firstElementChild);
console.log(addItem.lastElementChild);

console.log(addItem.firstChild);

console.log(document.querySelector("h1").firstChild);

const ul = document.querySelector("ul");

const listsss = ul.children;
console.log(listsss);

const js = lists[2];
console.log(js.innerText);

const css = js.previousElementSibling;
console.log(css.innerText);

const django = js.nextElementSibling.nextElementSibling;
console.log(django.innerHTML);
