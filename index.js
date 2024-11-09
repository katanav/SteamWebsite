document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    document.querySelector('.loading-overlay').style.display = 'flex';

    
    setTimeout(function() {
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        var errorMessage = document.getElementById('error-message');

        if (username === "user" && password === "pass") {
            
            if (errorMessage) {
                errorMessage.textContent = "Login successful!";
                errorMessage.style.color = "white"; 
            }

            
            setTimeout(function() {
                window.location.href = "home.html";
            }, 1000); 
        } else {
            
            if (errorMessage) {

                errorMessage.textContent = "Invalid username or password!";
                errorMessage.style.color = "red"; 
            }
            
            document.querySelector('.loading-overlay').style.display = 'none';
        }
    }, 2000); 
});