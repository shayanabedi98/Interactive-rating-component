let rating = document.querySelectorAll('.rating-btn')
let toggled = false

for (let i = 0; i < rating.length; i++) {
    rating[i].addEventListener('click', () => {
        toggled = !toggled
        if (toggled) {
            rating[i].style.backgroundColor = 'orange'
        } else if (!toggled) {
            rating[i].style.backgroundColor = 'none'
        }
    })
}