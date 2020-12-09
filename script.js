const burger = document.querySelector(".burger")
const nav = document.querySelector('.navigation')


const toggleNav = () => {
    burger.addEventListener('click', () => {
        burger.classList.toggle('active')
        nav.classList.toggle('active')
    })
}
toggleNav()