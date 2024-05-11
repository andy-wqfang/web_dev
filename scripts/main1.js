// import {sqrt} from "mathjs"
const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello World!"

let iceCream = "chocolate";
if (iceCream === "chocolates") {
    alert("yeah i love chocolate");
} else {
    alert("eww but chocolate is my favorite...")
}

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}

document.querySelector("html").addEventListener("click", () => {
    alert("Ouch! stop poking me!")
})