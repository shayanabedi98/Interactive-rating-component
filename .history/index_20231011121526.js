let btn = document.querySelectorAll('.btn button');

for (let i = 0; i < btn.length; i++) {
    btn.addEvenetListener('click', function(e) {
        console.log(e)
    })
}