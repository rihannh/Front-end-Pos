// *Function for decreasing quantity on menu card Dashboard
function decreaseQuantity() {
    var quantityElement = document.getElementById('quantity');
    var currentQuantity = parseInt(quantityElement.innerText);
    if (currentQuantity > 0) {
        quantityElement.innerText = currentQuantity - 1;
    }
}

// *Function for increasing quantity on menu card Dashboard
function increaseQuantity() {
    var quantityElement = document.getElementById('quantity');
    var currentQuantity = parseInt(quantityElement.innerText);
    quantityElement.innerText = currentQuantity + 1;
}

// *Configuration swiper js for category on menu Dashboard
var swiper = new Swiper('.swiper', {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    initialSlide: 2,
    speed: 600,
    preventClicks: true,
    slidesPerView: '3',
    coverflowEffect: {
        rotate: 0,
        stretch: 80,
        depth: 350,
        modifier: 1,
        slidShadows: true,
    },
    on: {
        click(event) {
            swiper.slideTo(this.clickedIndex);
        },
    },

});
