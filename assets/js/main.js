//DOM import
const albumEl = document.querySelector('#album')

// varible declaration
const postUrl = 'https://lanciweb.github.io/demo/api/pictures/'


popularAlbum(albumEl, postUrl)


/**
 * main function to popolate album in page
 * @param {DOM NODE} albumEl 
 * @param {String} pastUrl 
 * @return {void}
 */
function popularAlbum(albumEl, postUrl) {

    axios.get(postUrl)
        .then((data) => {

            console.log(data);

            const listPostEl = crateListPosts(data.data)

            albumEl.innerHTML = listPostEl

        })
        .catch((error) => {
            console.log(error)
        })
}