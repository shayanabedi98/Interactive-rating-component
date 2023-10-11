let rating = document.querySelectorAll('.rating-btn')
let toggled = false

for (let i = 0; i < rating.length; i++) {
    rating[i].addEventListener('click', () => {
        rating[i].style.backgroundColor = 'orange'
    })
}