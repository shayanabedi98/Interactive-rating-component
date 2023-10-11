let btn = document.querySelectorAll('.btn button');

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function(e) {
        console.log(e)
        if (btn.e.target.className = '') {
            btn.e.target.className = 'selected'
        } else if (btn.e.target.className = 'selected') {
            btn.e.target.className = 'selected'
        }
    })
}