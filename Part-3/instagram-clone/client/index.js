// CODE HERE

console.log('scripts load')

const users = [
    {username: 'admin', password: 'password'}
];

function handleLogin(event) {
    event.preventDefault();
    console.log('form submitted')

    let usernameInput = document.getElementById("username").value;
    let passwordInput = document.getElementById("password").value;

    console.log('usern', usernameInput)

    let isValidUser = users.some(user => {
        return user.username === usernameInput && user.password === passwordInput;
    });

    if (isValidUser) {
        alert('Login Successful');

        window.location.href = 'feed.html'
    } else {
        alert('Invalid login infos, try again!')
    }
}

//document.getElementById('loginForm').addEventListener('submit', handleLogin);

document.addEventListener('DOMContentLoaded', function () {
    const loginForm =document.getElementById('loginForm')

    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    } else {
        console.error("invalid")
    }
})