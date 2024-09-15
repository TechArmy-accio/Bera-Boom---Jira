
let token = localStorage.getItem('token');

let login_json = localStorage.getItem('login');
let login_list
if(login_json != null){
    login_list = JSON.parse(login_json);
}

let users_json = localStorage.getItem('users');
let user_list
if(users_json != null){
    user_list = JSON.parse(users_json);
}

let para = document.querySelector('p');


if(login_list){
    
     let email = login_list[token];
     para.innerHTML = `Welcome ${email}`;
}



// str = "asbdbeiou"

// let v = "aeiouAEIOU"


// for(let t of str){
//     if()
// }