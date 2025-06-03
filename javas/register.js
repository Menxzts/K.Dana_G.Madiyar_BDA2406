function register() {
    let user = document.getElementById("register-name").value;
    let email = document.getElementById("register-email").value;
    let pass = document.getElementById("register-password").value;

    
    if (localStorage.getItem(email)) {
        alert("Пользователь с таким email уже существует.");
    } else {
        localStorage.setItem(email, JSON.stringify({ user: user, password: pass }));
        
        
        
        alert("Регистрация прошла успешно!");
        window.location.href = "login.html"; 
    }
}