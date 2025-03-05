const apiKey = 'b9bcc578-9893-41f8-a030-9a8b0f769dc5';

document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.querySelector('input[type="file"]');
    fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        uploadFile(file);
    });

    getFiles();
});

async function uploadFile(file) {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('https://pixeldrain.com/api/file', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`
        },
        body: formData
    });

    const data = await response.json();
    console.log(data);
}

async function getFiles() {
    const response = await fetch('https://pixeldrain.com/api/user/files', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${apiKey}`
        }
    });

    const data = await response.json();
    console.log(data);
}

// Función de inicio de sesión
function login() {
    const adminPassword = document.getElementById('adminPassword').value;

    // Establece tu propia lógica de autenticación aquí
    if (adminPassword === '..2929..') {
        document.getElementById('admin-section').style.display = 'block';
        document.getElementById('login-section').style.display = 'none';
    } else {
        alert('Contraseña incorrecta');
    }
}
