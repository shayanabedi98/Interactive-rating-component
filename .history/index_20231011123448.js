let btn = document.querySelectorAll('.btn button');

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', () => {

        for (let j = 0; j < btn.length; j++) {
            btn[j].style.backgroundColor = '#262f38'
        }

        btn[i].style.backgroundColor = '#7c8898'
    })
}