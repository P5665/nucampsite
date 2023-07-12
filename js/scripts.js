document.addEventListener("DOMContentLoaded", function () {
    // For this to work need to remove data-bs-ride="carousel" from .carousel level element
    const myCarousel = document.querySelector("#homeCarousel");
    const carouselButton = document.querySelector("#carouselButton");
    const carouselButtonChild = carouselButton.querySelector(".fa-pause");

    const carouselInstance = new bootstrap.Carousel(myCarousel, {
        interval: 2000,
    });

    carouselButton.addEventListener("click", function () {
        if (carouselButtonChild.classList.contains("fa-pause")) {
            myCarousel.removeAttribute("data-bs-ride");
            carouselInstance.pause();
            carouselButtonChild.classList.remove("fa-pause");
            carouselButtonChild.classList.add("fa-play");
        } else {
            carouselInstance.cycle();
            myCarousel.setAttribute("data-bs-ride", "carousel");
            carouselButtonChild.classList.remove("fa-play");
            carouselButtonChild.classList.add("fa-pause");
        }
    });
});
