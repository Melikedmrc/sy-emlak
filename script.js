window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    var navbar = document.getElementById("navbar");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const konumElement = document.querySelector('.konum');
    const konumAdres = encodeURIComponent("Yavuz Mahallesi, Peştemalcı Caddesi, Bayol Pasajı No:16/34 Süleymanpaşa/Tekirdağ");
    konumElement.addEventListener('click', function () {
        window.open(`https://www.google.com/search?q=${konumAdres}`, '_blank');
    });
});


// document.addEventListener('DOMContentLoaded', function () {
//     const logo = document.getElementById('home');
//     logo.addEventListener('click', function () {
//         window.location.href = 'index.html'; // veya anasayfanın URL'sini girin
//     });
// });