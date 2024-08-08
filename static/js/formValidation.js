function validatePassword() {
    var password = document.getElementById('password').value;
    var confirm_password = document.getElementById('confirm_password').value;
    if (password !== confirm_password) {
        document.getElementById('customAlert').style.display = 'block'; 
        document.getElementById('error-message').style.display = 'block';
    } else {
        document.getElementById('error-message').style.display = 'none';
    }
}

function closeCustomAlert() {
    document.getElementById('customAlert').style.display = 'none';
  }
  
document.getElementById('registrar').addEventListener('submit', function(event) {
    var password = document.getElementById('password').value;
    var confirm_password = document.getElementById('confirm_password').value;
    if (password !== confirm_password) {
        event.preventDefault();
        validatePassword(); 
    }
});