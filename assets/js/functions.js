
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

            data.data.forEach((elemnt) => {

                albumEl.appendChild(createPostMarkup(elemnt))

            })


        })
        .catch((error) => {
            console.log(error)
        })
}

/**
 * generate markup for single post
 * @param {Object} post 
 * @returns {Node DOM} colum Markup
 */
function createPostMarkup(post) {
    const { id, title, date, url } = post

    //create col
    const colEl = document.createElement("div")
    colEl.classList.add("col", "position-relative")

    //create pin image
    const imgEL = document.createElement("img")
    imgEL.src = "./assets/img/pin.svg"
    imgEL.classList.add("position-absolute", "pin")

    //insert pin image in col
    colEl.appendChild(imgEL)

    //create car
    const cardEL = document.createElement("div")
    cardEL.classList.add("card", "p-3")

    //create card img
    const cradImageEl = document.createElement("img")
    cradImageEl.src = url
    cradImageEl.alt = id
    cradImageEl.classList.add("card-img-top")

    //insert card img in cardEL
    cardEL.appendChild(cradImageEl)

    //create card body
    const cardBodyEl = document.createElement("div")
    cardBodyEl.classList.add("card-body")

    //crate date elemnt
    const pCardBodyEl = document.createElement("p")
    pCardBodyEl.classList.add("card_date", "text-secondary")
    pCardBodyEl.innerText = date

    //insert date elemnt in card body
    cardBodyEl.appendChild(pCardBodyEl)

    //crate title card
    const titleCardBody = document.createElement("h2")
    titleCardBody.classList.add("card-title", "font_Edu_Tas_Beginner")
    titleCardBody.innerText = title.toUpperCase()

    //insert title card in card body
    cardBodyEl.appendChild(pCardBodyEl)

    //insert card body in card
    cardEL.appendChild(cardBodyEl)

    //insert card in col
    colEl.appendChild(cardEL)

    console.log(colEl);



    return colEl
}