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

// * Live preview image on add menu
document.getElementById('dropzone-file').addEventListener('change', function (event) {
    var file = event.target.files[0];
    var reader = new FileReader();

    reader.onload = function (e) {
        var imagePreview = document.getElementById('image-preview');
        imagePreview.innerHTML = '';
        var imgElement = document.createElement('img');
        imgElement.src = e.target.result;
        imgElement.classList.add('object-contain', 'w-full', 'h-full');
        imagePreview.appendChild(imgElement);
    };

    reader.readAsDataURL(file);
});

