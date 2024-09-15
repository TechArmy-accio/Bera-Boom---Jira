let form = document.getElementsByClassName('register-form')[0];

let name_box = document.getElementById('name');
let email_box = document.getElementById('email');
let password_box = document.getElementById('password');
let confirm_password_box = document.getElementById('confirm-password');

let user_list = {};
// access the users from the local storage

let users_json = localStorage.getItem('users');
if(users_json != null){
    user_list = JSON.parse(users_json);
}







form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let name = name_box.value;
    let email = email_box.value;
    let password = password_box.value;
    let confirm_password = confirm_password_box.value;
    
    if(name == '' || email == '' || password == '' || confirm_password == ''){
        alert('Please fill all fields');
        return;
    }

    if(password != confirm_password){
        alert('Passwords do not match');
        return;
    }

    if(email in user_list){ // O(1)
        alert('Email already exists');
        return;
    }

     let user = {
        name: name,
        email: email,
        password: password
    }

    // user_list.push(user);

    user_list[email] = user;  // {email: user, email: user, email: user} 
    

    localStorage.setItem('users', JSON.stringify(user_list));


    alert('Registration successful');


    // name_box.value = '';
    // email_box.value = '';
    // password_box.value = '';
    // confirm_password_box.value = '';

    // reset the form: 
    form.reset();



    // redirect to login page
    window.location.href = './login.html';

   
    
})



// [
//     {}, {}, {}, {}, {}
// ]




// {
//     "a@a.com": {}

        
// }



