function logout() {
      localStorage.removeItem('loggedIn');
      localStorage.removeItem('currentUser');
      localStorage.removeItem('currentUserEmail');
      localStorage.removeItem('user');
      localStorage.removeItem('role');
      localStorage.removeItem('myCourses')
      localStorage.removeItem('progress')
      window.location.href = 'HOMEPAGE pre-login.html';
    }

    function loadUsers() {
      const userList = document.getElementById("user-list");
      userList.innerHTML = '';
      for (let key in localStorage) {
        if (localStorage.hasOwnProperty(key) && key.includes("@")) {
          const li = document.createElement("li");
          li.className = "list-group-item d-flex justify-content-between align-items-center";
          li.innerHTML = `
            ${key}
            <button class="btn btn-danger btn-sm" onclick="removeUser('${key}')">Удалить</button>
          `;
          userList.appendChild(li);
        }
      }
    }

    function removeUser(email) {
      if (confirm(`Удалить пользователя ${email}?`)) {
        localStorage.removeItem(email);
        loadUsers();
      }
    }

    function addUser() {
      const name = document.getElementById("register-name").value.trim();
      const email = document.getElementById("register-email").value.trim();
      const password = document.getElementById("register-password").value.trim();

      if (name && email && password) {
        const newUser = {
          user: name,
          email: email,
          password: password
        };
        localStorage.setItem(email, JSON.stringify(newUser));
        alert("Пользователь добавлен!");
        loadUsers();
      } else {
        alert("Заполните все поля.");
      }
    }

    window.onload = function () {
      const userEmail = localStorage.getItem("currentUserEmail");
      const role = localStorage.getItem("role");
      const userData = JSON.parse(localStorage.getItem(userEmail));

      document.getElementById("user").textContent = userData?.user || "Guest";
      document.getElementById("currentUserEmail").textContent = userEmail || "-";

      if (role === 'admin') {
        document.getElementById("admin-panel").style.display = "block";
        loadUsers();
      }
    };