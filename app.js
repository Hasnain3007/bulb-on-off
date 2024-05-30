


var img = document.getElementById('image')
var btn = document.getElementById('button')
var flag = true
btn.addEventListener('click', () => {
    if (flag == true) {
        img.src = 'on.jpg'
        flag = false
        btn.innerText = 'OFF'
    } else if (flag == false) {
        img.src = 'off.png'
        flag = true
        btn.innerText = 'ON'

    }

})