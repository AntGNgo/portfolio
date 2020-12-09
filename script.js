const burger = document.querySelector(".burger")
const nav = document.querySelector('.navigation')
const cards = document.querySelectorAll('.card')


const toggleNav = () => {
    burger.addEventListener('click', () => {
        burger.classList.toggle('active')
        nav.classList.toggle('active')
    })
}

const delayCards = () => {
    cards.forEach((card, i) => {
        console.log('add')
        // if(card.style.animation) {
        //     card.style.animation = ''
        // } else {
            card.style.animation = `fadeInLeft 1.5s backwards ${i / 10 + .5}s`
        // }
    })
}

toggleNav()

cards ? delayCards() : null