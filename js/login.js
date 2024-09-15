
let form = document.getElementsByClassName('login-form')[0];
let email_box = document.getElementById('email');
let password_box = document.getElementById('password');


let user_list = {};
// access the users from the local storage


let login_list = {}







form.addEventListener('submit', (e)=>{
    e.preventDefault();

    let users_json = localStorage.getItem('users');
    if(users_json != null){
       user_list = JSON.parse(users_json);
    }
  
    let email = email_box.value;
    let password = password_box.value;
   
    
    if(email == '' || password == ''){
        alert('Please fill all fields');
        return;
    }


    if(email in user_list == false){
         alert('User does not exist');
         return;
    }

    if(user_list[email].password != password){
        alert('Password is incorrect');
        return;
    }

    // failed idea:
    // login_list[email] = user_list[email];

    // localStorage.setItem('login', JSON.stringify(login_list));

    let token = generateToken();

    localStorage.setItem('token', token);

    user_list[email].token = token;

    // update the user_list in the local storage

    localStorage.setItem('users', JSON.stringify(user_list));




    login_list[token] = email;

    localStorage.setItem('login', JSON.stringify(login_list));

    alert('Login successful');
    // name_box.value = '';
    // email_box.value = '';
    // password_box.value = '';
    // confirm_password_box.value = '';

    // reset the form: 
    form.reset();


    // redirect to jira page
    window.location.href = 'jira.html';
})



// [
//     {name:"", email:"", password:""}, {}, {}, {}, {}
// ]



function generateToken(){
     let collection = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(<>?){}[]";

     let str = ""
     for(let i = 1; i<=10; i++){
        let index = Math.floor(Math.random() * collection.length);
     str = str + collection[index]
     }

     return str;
}