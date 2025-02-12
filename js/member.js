document.getElementById('show-login').addEventListener('click', function() {
    document.getElementById('login-section').classList.add('active');
    document.getElementById('register-section').classList.remove('active');
});

document.getElementById('show-register').addEventListener('click', function() {
    document.getElementById('register-section').classList.add('active');
    document.getElementById('login-section').classList.remove('active');
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Simple authentication check (for demonstration purposes)
    if (username === 'user' && password === 'password') {
        alert('Đăng nhập thành công!');
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('register-section').style.display = 'none';
        document.getElementById('logout-button').style.display = 'block';
    } else {
        alert('Sai tên đăng nhập hoặc mật khẩu!');
    }
});

document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Simple registration logic (for demonstration purposes)
    if (password === confirmPassword) {
        alert(`Đăng ký thành công! Username: ${username}`);
        document.getElementById('register-form').reset();
    } else {
        alert('Mật khẩu xác nhận không khớp!');
    }
});

document.getElementById('logout-button').addEventListener('click', function() {
    alert('Đăng xuất thành công!');
    document.getElementById('login-section').style.display = 'block';
    document.getElementById('register-section').style.display = 'block';
    document.getElementById('logout-button').style.display = 'none';
});