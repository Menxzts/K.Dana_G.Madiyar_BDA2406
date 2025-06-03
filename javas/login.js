function login() {
        let email = document.getElementById("login-email").value.trim();
        let pass = document.getElementById("login-password").value;
    
        
        if (email === "admin@gmail.com" && pass === "1111") {
            alert("Вход как администратор!");
    
            localStorage.setItem('loggedIn', 'true');
            localStorage.setItem('currentUserEmail', email);
            localStorage.setItem('role', 'admin');
            localStorage.setItem('user', 'Admin');
    
            window.location.href = "HOMEPAGE post-login.html";
            return;
        }
    
        
        let userDataStr = localStorage.getItem(email);
        if (userDataStr) {
            let userData = JSON.parse(userDataStr);
    
            if (userData.password === pass) {
                alert("Вход успешен!");
    
                localStorage.setItem('loggedIn', 'true');
                localStorage.setItem('currentUserEmail', email);
                localStorage.setItem('user', userData.user || "User");
                localStorage.setItem('role', 'user');
    
                window.location.href = "HOMEPAGE post-login.html";
            } else {
                alert("Неверный пароль.");
            }
        } else {
            alert("Пользователь с таким email не найден.");
        }
    }