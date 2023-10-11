let rating = document.querySelectorAll('.rating')

for (let i = 0; i < rating.length; i++) {
    rating[i].addEventListener('click', () => {
        rating.style.backgroundColor = 'orange'
    })
}