let first = document.querySelector("#first");
let mainFirst = document.querySelector("#mainImg");
let last = document.querySelector("#last");
let Previous = document.querySelector(".fa-circle-caret-left");
let nextBtn = document.querySelector(".fa-circle-caret-right");
let index = 0;

let imgStorage = ["./Images/KidsAd.jpg", "./Images/MenAd.jpg", "./Images/WomenAd.jpg", "./Images/AccessoriesAd.jpg"];

Previous.addEventListener("click", () => {
    index = (index - 1 + imgStorage.length) % imgStorage.length;
    mainFirst.src = imgStorage[index];
});

nextBtn.addEventListener("click", () => {
    index = (index + 1) % imgStorage.length;
    mainFirst.src = imgStorage[index];
});
