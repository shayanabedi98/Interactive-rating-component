let btn = document.querySelectorAll('.btn button');
let submit = document.querySelector('.submit button');
let rating = document.querySelector('.card-rating');
let thankyou = document.querySelector('.card-thankyou')

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', () => {
        let clicked = true
        for (let j = 0; j < btn.length; j++) {
            btn[j].style.backgroundColor = '#262f38';
            clicked = false
        }

        btn[i].style.backgroundColor = '#7c8898';
        btn[i].style.color = '#F9FFFF';

        if (clicked) {
            submit.addEventListener('click', () => {

            })
        }
    })
}