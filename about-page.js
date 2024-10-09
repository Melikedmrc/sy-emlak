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

//---KONUMA TIKLAMA---//
function openLocation() {
    const konumAdres = encodeURIComponent("Yavuz Mahallesi, Peştemalcı Caddesi, Bayol Pasajı No:16/34 Süleymanpaşa/Tekirdağ");
    window.open(`https://www.google.com/search?q=${konumAdres}`, '_blank');
}

document.addEventListener('DOMContentLoaded', function () {
    const konumElement = document.querySelector('.konum');
    konumElement.addEventListener('click', function () {
        openLocation();
    });
});

//---MOBİL BOYUTA GÖRE LOGO DEĞİŞİMİ---//

// Ekran boyutunu dinleyen bir event listener ekleyelim
window.addEventListener('resize', function() {
    // Ekran genişliğini kontrol edelim
    if (window.innerWidth <= 480) { // Mobil boyut
        // İlk logo görüntüsünü gizleyelim
        document.querySelector('.first_logo').style.display = 'none';
        // Mobil logo görüntüsünü gösterelim
        document.querySelector('.second_logo').style.display = 'block';
    } else { // Diğer boyutlar
        // İlk logo görüntüsünü gösterelim
        document.querySelector('.first_logo').style.display = 'block';
        // Mobil logo görüntüsünü gizleyelim
        document.querySelector('.second_logo').style.display = 'none';
    }
});

// Sayfa yüklendiğinde de kontrol edelim
if (window.innerWidth <= 480) { // Mobil boyut
    // İlk logo görüntüsünü gizleyelim
    document.querySelector('.first_logo').style.display = 'none';
    // Mobil logo görüntüsünü gösterelim
    document.querySelector('.second_logo').style.display = 'block';
} else { // Diğer boyutlar
    // İlk logo görüntüsünü gösterelim
    document.querySelector('.first_logo').style.display = 'block';
    // Mobil logo görüntüsünü gizleyelim
    document.querySelector('.second_logo').style.display = 'none';
}
