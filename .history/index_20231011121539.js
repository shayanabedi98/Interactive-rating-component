let btn = document.querySelectorAll('.btn button');

for (let i = 0; i < btn.length; i++) {
    btn.addEventListener('click', function(e) {
        console.log(e)
    })
}