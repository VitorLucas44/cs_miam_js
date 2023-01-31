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
        price: "14,95",
        image: "./public/img/menu/menu-item-1.png",
},
    {
        productName: "fazefaze",
        category: "Breakfast",
        price: "20",
        image: "./public/img/menu/menu-item-2.png",
},
    {
        productName: "afzefezaazef",
        category: "Dinner",
        price: "21",
        image: "./public/img/menu/menu-item-6.png",
},
    {
    productName: "afzefezaazef",
    category: "Dinner",
    price: "21",
    image: "./public/img/menu/menu-item-6.png",
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
        price: "8,99",
        image: "./public/img/menu/menu-item-4.png",
},
{
    productName: "fazefaez",
    category: "Starters",
    price: "8,99",
    image: "./public/img/menu/menu-item-4.png",
},
    {
        productName: "fazfzaefaze",
        category: "Lunch",
        price: "10,99",
        image: "./public/img/menu/menu-item-5.png",
},
{
    productName: "fazfzaefaze",
    category: "Lunch",
    price: "10,99",
    image: "./public/img/menu/menu-item-5.png",
},
    {
        productName: "azfeafze",
        category: "Breakfast",
        price: "10,99",
        image: "./public/img/menu/menu-item-1.png",
},
    {
        productName: "afzefaez",
        category: "Lunch",
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