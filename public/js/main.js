//Modal pour le login et register
function toggleModal() {
    document.getElementById("overlay").classList.toggle('active');
}

//Bouton mode clair et sombre
let toggle_btn = document.getElementById('theme-btn');
let body = document.getElementsByTagName('body')[0];
let dark_theme_class = 'dark';

toggle_btn.addEventListener('click', function() {
if (body.classList.contains(dark_theme_class)) {
body.classList.remove(dark_theme_class);
}
else {
body.classList.add(dark_theme_class);
}
});

//Espace JS
//les produits
let products = {
    data: [
    {
        productName: "fazfaez",
        category: "Starters",
        ingredients:"salade, tomate, ognion",
        price: "14,95",
        image: "./public/img/menu/menu-item-1.png",
},
    {
        productName: "fazefaze",
        category: "Breakfast",
        ingredients:"salade, tomate, ognion",
        price: "20",
        image: "./public/img/menu/menu-item-2.png",
},
    {
        productName: "afzefezaazef",
        category: "Dinner",
        ingredients:"salade, tomate, ognion",
        price: "21",
        image: "./public/img/menu/menu-item-6.png",
},
    {
    productName: "afzefezaazef",
    category: "Dinner",
    ingredients:"salade, tomate, ognion",
    price: "21",
    image: "./public/img/menu/menu-item-1.png",
},
{
    productName: "afzefezaazef",
    category: "Dinner",
    price: "21",
    image: "./public/img/menu/menu-item-6.png",
},
    {
        productName: "fazefaez",
        category: "Starters",
        ingredients:"salade, tomate, ognion",
        price: "8,99",
        image: "./public/img/menu/menu-item-2.png",
},
{
    productName: "fazefaez",
    category: "Starters",
    ingredients:"salade, tomate, ognion",
    price: "8,99",
    image: "./public/img/menu/menu-item-4.png",
},
    {
        productName: "fazfzaefaze",
        category: "Lunch",
        ingredients:"salade, tomate, ognion",
        price: "10,99",
        image: "./public/img/menu/menu-item-1.png",
},
{
    productName: "fazfzaefaze",
    category: "Lunch",
    ingredients:"salade, tomate, ognion",
    price: "10,99",
    image: "./public/img/menu/menu-item-5.png",
},
    {
        productName: "azfeafze",
        category: "Breakfast",
        price: "10,99",
        ingredients:"salade, tomate, ognion",
        image: "./public/img/menu/menu-item-1.png",
},
    {
        productName: "afzefaez",
        category: "Lunch",
        ingredients:"salade, tomate, ognion",
        price: "15",
        image: "./public/img/menu/menu-item-4.png",
},
    {
        productName: "fazefaez",
        category: "Breakfast",
        price: "5,95",
        ingredients:"salade, tomate, ognion",
        image: "./public/img/menu/menu-item-2.png",
        },
    ],
};

for (let i of products.data) {
//Create Card
let card = document.createElement("div");
//La carte doit avoir une categorie
card.classList.add("card", i.category);
//image div
let imgContainer = document.createElement("div");
imgContainer.classList.add("image-container");
//img tag
let image = document.createElement("img");
image.setAttribute("src", i.image);
imgContainer.appendChild(image);
card.appendChild(imgContainer);
// /container
let container = document.createElement("div");
container.classList.add("container");
//product name
let name = document.createElement("h5");
name.classList.add("product-name");
name.innerText = i.productName.toUpperCase();
container.appendChild(name);
//ingrédient
let ingredients = document.createElement("h6");
ingredients.innerText = i.ingredients;
container.appendChild(ingredients);
card.appendChild(container);
document.getElementById("products").appendChild(card);
//prix
let price = document.createElement("h7");
price.innerText = "$" + i.price;
container.appendChild(price);
card.appendChild(container);
document.getElementById("products").appendChild(card);
}
//fonction pour les bouton et les catégoris
function filterProduct(value) {
//Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
//check if value equals innerText
if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
} else {
        button.classList.remove("active");
}
});

let elements = document.querySelectorAll(".card");
elements.forEach((element) => {
    if (value == "all") {
        element.classList.remove("hide");
    } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
        element.classList.remove("hide");
    } else {
          //hide other elements
        element.classList.add("hide");
    }
        }
    });
}

//Quand sa va refresh
window.onload = () => {
    ("Starters");
};




// variable et get du testim
let testim = document.getElementById("testim"),
    testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
    testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
    testimleftArrow = document.getElementById("left-arrow"),
    testimRightArrow = document.getElementById("right-arrow"),
    testimSpeed = 4500,
    currentSlide = 0,
    currentActive = 0,
    testimTimer
    ;
window.onload = function () {
// Testim Script
    function playSlide(slide) {
        for (var k = 0; k < testimDots.length; k++) {
            testimContent[k].classList.remove("active");
            testimContent[k].classList.remove("inactive");
            testimDots[k].classList.remove("active");
        }
        if (slide < 0) {
            slide = currentSlide = testimContent.length - 1;
        }
        if (slide > testimContent.length - 1) {
            slide = currentSlide = 0;
        }
        if (currentActive != currentSlide) {
            testimContent[currentActive].classList.add("inactive");
        }
        testimContent[slide].classList.add("active");
        testimDots[slide].classList.add("active");
        currentActive = currentSlide;
        clearTimeout(testimTimer);
        testimTimer = setTimeout(function () {
            playSlide(currentSlide += 1);
        }, testimSpeed)
    }
    testimleftArrow.addEventListener("click", function () {
        playSlide(currentSlide -= 1);
    })
    testimRightArrow.addEventListener("click", function () {
        playSlide(currentSlide += 1);
    })

    for (var l = 0; l < testimDots.length; l++) {
        testimDots[l].addEventListener("click", function () {
            playSlide(currentSlide = testimDots.indexOf(this));
        })
    }
    playSlide(currentSlide);

}


const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".wrapper i");
let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;
const showHideIcons = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}
arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
});
const autoSlide = () => {
    // if there is no image left to scroll then return from here
    if(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;
    positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
    let firstImgWidth = firstImg.clientWidth + 14;
    // getting difference value that needs to add or reduce from carousel left to take middle img center
    let valDifference = firstImgWidth - positionDiff;
    if(carousel.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    // si sa scroll a gauche
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}
const dragStart = (e) => {
    // updatating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}
const dragging = (e) => {
    // scroll vers la gache avec la souri
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}
const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");
    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);
document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);


// carousel3
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})



