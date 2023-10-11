let btn = document.querySelectorAll('.btn button');
let submit = document.querySelector('.submit button');
let rating = document.querySelector('.card-rating');
let thankyou = document.querySelector('.card-thankyou');
let clicked;
let selected = document.querySelector('.selected')

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', () => {
        for (let j = 0; j < btn.length; j++) {
            btn[j].style.backgroundColor = '#262f38';
            clicked = false
        }

        btn[i].style.backgroundColor = '#7c8898';
        btn[i].style.color = '#F9FFFF';
        clicked = true

        if (clicked) {
            submit.addEventListener('click', () => {
                rating.style.visibility = 'hidden';
                thankyou.style.visibility = 'visible';
                selected.innerHTML = 'You selected ' + btn[i].value + ' out of 5';
            })
        }
    })
}