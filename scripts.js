const apiKey = 'b9bcc578-9893-41f8-a030-9a8b0f769dc5';

const movies = [
    { title: 'La caída de los Black Hawk', url: 'https://pixeldrain.com/l/JfPHStup#', img: 'URL_DE_LA_IMAGEN_1' },
    { title: 'Película 2', url: 'https://pixeldrain.com/your-movie-url-2', img: 'URL_DE_LA_IMAGEN_2' }
];

document.addEventListener('DOMContentLoaded', () => {
    const movieContainer = document.getElementById('movies');
    movies.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.className = 'movie';
        movieDiv.innerHTML = `
            <img src="${movie.img}" alt="${movie.title}" class="movie-poster">
            <h2>${movie.title}</h2>
            <a href="${movie.url}" target="_blank">Ver ahora</a>
        `;
        movieContainer.appendChild(movieDiv);
    });

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

function login() {
    const adminPassword = document.getElementById('adminPassword').value;
    if (adminPassword === '..2929..') {
        document.getElementById('admin-section').style.display = 'block';
        document.getElementById('login-section').style.display = 'none';
    } else {
        alert('Contraseña incorrecta');
    }
}
