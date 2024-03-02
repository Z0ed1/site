 function toggleTheme() {
   var body = document.querySelector('body');
body.classList.toggle('dark-mode');
}

let currentImage = 0;
    const images = document.querySelectorAll('.gallery1 img');

    setInterval(() => {
        images[currentImage].style.transform = 'translateX(-100%)';

        currentImage = (currentImage + 1) % images.length;

        images[currentImage].style.transform = 'translateX(0)';
    }, 1700);

    function openPopup() {
        var popup = document.getElementById('popup');
        popup.style.display = "block";
    }

    function closePopup() {
        var popup = document.getElementById('popup');
        popup.style.display = "none";
    }

/*Чат ГЫпТ для слабых*/
