const userEmail = 'Exwisma';
const userPassword = '1234567890';




function login() {
const email = document.getElementById('userEmail').value
const password = document.getElementById('userPassword').value

if(userEmail === email && userPassword === password){
    window.location.href = 'login.html'
}  
else(
 alert('у вас не правильный пароль или лагин')
)
}