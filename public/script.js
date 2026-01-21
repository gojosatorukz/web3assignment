const API_URL = 'http://localhost:3000/api';

async function register() {
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-pass').value;
    
    const res = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });
    
    const data = await res.json();
    if (res.ok) {
        alert('Успешно! Теперь войдите.');
        showLogin();
    } else {
        document.getElementById('message').innerText = data.error;
    }
}

async function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-pass').value;

    const res = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    if (res.ok) {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('profile-view').style.display = 'block';
        document.getElementById('user-email').innerText = email;
        document.getElementById('message').innerText = '';
    } else {
        document.getElementById('message').innerText = data.error;
    }
}

function showLogin() {
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('message').innerText = '';
}

function showRegister() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
    document.getElementById('message').innerText = '';
}

function logout() {
    location.reload();
}