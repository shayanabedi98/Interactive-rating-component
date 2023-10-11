let btn = document.querySelectorAll('.btn button');

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function(e) {
        console.log(e)
    })
}