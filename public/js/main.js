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