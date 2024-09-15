

let login_btn = document.getElementById('index-login-btn');
let register_btn = document.getElementById('index-register-btn');




login_btn.addEventListener('click', function(){
    window.location.href = '/pages/login.html';
    // window.open('/pages/login.html', '_blank');
})

register_btn.addEventListener("click", ()=>{
    window.location.href = '/pages/register.html';
})