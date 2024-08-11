const next = document.getElementById("next");
const prev = document.getElementById("prev");
const back = document.getElementById("back");
const seeMore = document.getElementsByClassName("seeMore");
const carousel = document.querySelector(".carousel");
const list = document.querySelector(".list");
const search = document.getElementById("search");
const input = document.getElementById("input");

next.addEventListener("click", event => {
    move("next");
})

prev.addEventListener("click", event => {
    move("prev"); 
})

function move(direction){
    let item = document.querySelectorAll(".item");
    if(direction === "next"){
        list.appendChild(item[0]);
        carousel.classList.remove("prev", "next");
        carousel.classList.add("next");
    }

    else if(direction === "prev"){
        let last = item.length-1;
        list.prepend(item[last]);
        carousel.classList.remove("next", "prev");
        carousel.classList.add("prev");
    }
}

seeMore.forEach(button => {
    button.onclick.classList.add("showDetail")
});