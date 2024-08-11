const apiUrl = "https://fakestoreapi.com/products/";
let dropDownContent = document.querySelectorAll(".dropContents");
let box = document.querySelectorAll(".box");
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const box5 = document.getElementById("box5");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");

const title1 = document.getElementById("title1");
const price1 = document.getElementById("price1");
const rating1 = document.getElementById("rating1");
const title2 = document.getElementById("title2");
const price2 = document.getElementById("price2");
const rating2 = document.getElementById("rating2");
const title3 = document.getElementById("title3");
const price3 = document.getElementById("price3");
const rating3 = document.getElementById("rating3");
const title4 = document.getElementById("title4");
const price4 = document.getElementById("price4");
const rating4 = document.getElementById("rating4");

const load1 = document.getElementById("load1");
const load2 = document.getElementById("load2");
const load3 = document.getElementById("load3");
const load4 = document.getElementById("load4");

fetchData();

async function fetchData()
{
    let api = `${apiUrl}${1}`;
    let response = await fetch(api);
    let result = await response.json();
    img1.style.backgroundImage = `url(${result.image})`;
    img1.style.backgroundSize = "contain";
    img1.style.backgroundRepeat = "no-repeat";
    img1.style.backgroundPosition = "center";
    title1.textContent = result.title;
    price1.textContent = `$${result.price}`;
    rating1.textContent = `${result.rating.rate} (${result.rating.count})`;
    load1.classList.add("invisible");


    api = `${apiUrl}${2}`;
    response = await fetch(api);
    result = await response.json();
    console.log(result);
    img2.style.backgroundImage = `url(${result.image})`;
    img2.style.backgroundSize = "contain";
    img2.style.backgroundRepeat = "no-repeat";
    img2.style.backgroundPosition = "center";
    title2.textContent = result.title;
    price2.textContent = `$${result.price}`;
    rating2.textContent = `${result.rating.rate} (${result.rating.count})`;
    load2.classList.add("invisible");

    api = `${apiUrl}${3}`;
    response = await fetch(api);
    result = await response.json();
    console.log(result);
    img3.style.backgroundImage = `url(${result.image})`;
    img3.style.backgroundSize = "contain";
    img3.style.backgroundRepeat = "no-repeat";
    img3.style.backgroundPosition = "center";
    title3.textContent = result.title;
    price3.textContent = `$${result.price}`;
    rating3.textContent = `${result.rating.rate} (${result.rating.count})`;
    load3.classList.add("invisible");

    api = `${apiUrl}${4}`;
    response = await fetch(api);
    result = await response.json();
    console.log(result);
    img4.style.backgroundImage = `url(${result.image})`;
    img4.style.backgroundSize = "contain";
    img4.style.backgroundRepeat = "no-repeat";
    img4.style.backgroundPosition = "center";
    title4.textContent = result.title;
    price4.textContent = `$${result.price}`;
    rating4.textContent = `${result.rating.rate} (${result.rating.count})`;
    load4.classList.add("invisible");
}
    

