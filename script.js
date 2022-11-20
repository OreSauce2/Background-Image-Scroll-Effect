const bgImageEl = document.getElementById('bg-image');
const containerEl = document.getElementById('container');

window.addEventListener9('scroll', () => {
    updateImage();
})

function updateImage() {
    bgImageEl.style.opacity = 1 - window.pageYOffset / 900;
    bgImageEl.style.backgroundSize = 160 % - window.pageYOffset + '%'
}