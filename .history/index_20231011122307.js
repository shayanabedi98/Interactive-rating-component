let btn = document.querySelectorAll('.btn button');

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function(e) {
        e.target = false
        console.log(e)
        if (e.target.className = '') {
            e.target.className = 'selected'
        } else if (e.target.className = 'selected') {
            e.target.className = 'selected'
        }
    })
}