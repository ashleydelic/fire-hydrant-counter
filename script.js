
let saveEL = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
console.log("count-el");

let count = 0;

function increment() {
    count += 1;
    countEl.innerText = count;
    console.log(count);

}


function save() {
    let savedCount = count + " - ";
    saveEL.textContent += savedCount;
    countEl.textContent = 0;
}

function remove() {
    count -= 1;
    countEl.innerText = count;
    console.log(count)

}