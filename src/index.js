function changeImage(index) {
    const images = document.querySelectorAll('.carousel-images img');
    images.forEach(image => {
        image.classList.add('hidden');
    });
    images[index].classList.remove('hidden');

    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    dots[index].classList.add('active');
}