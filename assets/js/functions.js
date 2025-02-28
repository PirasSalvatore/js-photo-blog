
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

/**
 * crate a String markup contains posts with value in data
 * @param {Array Objects} data 
 * @return {String}
 */
function crateListPosts(data) {
    let listPostEl = ''

    data.forEach((post) => {
        listPostEl += createPostMarkup(post)
    })

    return listPostEl
}

/**
 * generate markup for single post
 * @param {Object} post 
 * @returns {String} Markup
 */
function createPostMarkup(post) {
    const { id, title, date, url } = post

    return `<div class="col position-relative">
                <img src="./assets/img/pin.svg" class="position-absolute pin" alt="">
                <div class="card p-3 ">
                    <img src="${url}" class="card-img-top" alt="${id}">
                    <div class="card-body">
                        <p class="card_date text-secondary">
                            ${date}
                        </p>
                        <h2 class="card-title font_Edu_Tas_Beginner">
                            ${title}
                        </h2>
                    </div>
                </div>
            </div>
            `
}