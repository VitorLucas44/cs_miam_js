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
//vérifier si la valeur est égale à innerTex
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
        //Vérifier si l'élément contient une classe de catégorie
        if (element.classList.contains(value)) {
          //élément d'affichage basé sur la catégorie
        element.classList.remove("hide");
    } else {
          //cacher les autes
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


// CArousel 1
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

// carousel2
const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".wrapper i");
let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;
const showHideIcons = () => {   
// afficher et masquer l'icône précédent/suivant en fonction de la valeur de défilement vers la gauche du carrousel
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}
arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14;
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60);
        //  appel de showHideIcons après 60ms
    });
});
const autoSlide = () => {
    // s'il n'y a plus d'image à faire défiler, revenez d'ici
    if(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;
    positionDiff = Math.abs(positionDiff); // rendre la valeur positionDiff positive
    let firstImgWidth = firstImg.clientWidth + 14;
    // obtenir la valeur de différence qui doit être ajoutée ou réduite du carrousel à gauche pour prendre le centre img du milieu
    let valDifference = firstImgWidth - positionDiff;
    if(carousel.scrollLeft > prevScrollLeft) { // si on scroll vers la droite
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    // si sa scroll a gauche
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}
const dragStart = (e) => {
// mise à jour de la valeur des variables globales lors de l'événement de souris enfoncée 
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



