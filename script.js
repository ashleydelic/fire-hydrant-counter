// document.getElementById("count-el").innerText = 5

let countEl = document.getElementById("count-el");
console.log("count-el");

let count = 0;

function increment() {
    count += 1;
    countEl.innerText = count;
    console.log(count);

}

function save() {

}

function remove() {
    count -= 1;
    countEl.innerText = count;
    console.log(count)

}