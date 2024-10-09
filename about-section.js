document.addEventListener("DOMContentLoaded", function() {
    const aboutSection = document.querySelector("#about");
    const aboutImage = document.querySelector(".about-image__animation");
    const heading = document.querySelector(".heading__animation");
    const content = document.querySelector(".content__animation");

    function fadeIn(element) {
        element.classList.add("active");
    }

    function checkScroll() {
        // Hakkımızda bölümünün ekranın görünür kısmında olup olmadığını kontrol edin
        const aboutSectionPosition = aboutSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (aboutSectionPosition < windowHeight / 2) { // Eğer hakkımızda bölümü ekranın yarısından fazlası görünüyorsa
            fadeIn(aboutImage);
            fadeIn(heading);
            fadeIn(content);

            // Scroll olayını bir kez dinledikten sonra dinleyiciyi kaldırın
            window.removeEventListener("scroll", checkScroll);
        }
    }

    // Scroll olayını dinleme
    window.addEventListener("scroll", checkScroll);
});
