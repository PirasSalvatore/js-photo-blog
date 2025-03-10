
//DOM import
const albumEl = document.querySelector('#album')
const overlayEL = document.querySelector('#overlay')
const imgOverlayEl = document.querySelector('.overlay_container>img')
const btnOverlayEl = document.querySelector('.close')
//const esEL = document.getElementsByClassName(".myclass")

//console.log(overlayEL, imgOverlayEl.src);

// varible declaration
const postUrl = 'https://lanciweb.github.io/demo/api/pictures/'

//main function to popolate an album in a page
popularAlbum(albumEl, overlayEL, imgOverlayEl, postUrl)

btnOverlayEl.addEventListener('click', () => {
    overlayEL.classList.add('d-none')
})