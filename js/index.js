const loginBtn = document.getElementById('login');
const signupBtn = document.getElementById('signup');
const donateBtn = document.getElementById('dona');
const animalImages = document.querySelectorAll('.animal-img');

loginBtn.addEventListener('click', () => {
    window.location.href = 'login.html';
});

signupBtn.addEventListener('click', () => {
    window.location.href = '회원가입.html';
});

donateBtn.addEventListener('click', () => {
    document.getElementById('popup').style.display = 'block';
});

animalImages.forEach(img => {
    img.addEventListener('click', () => {
        const animalName = img.alt;
        const searchUrl = `https://ko.wikipedia.org/wiki/${encodeURIComponent(animalName)}`;
        window.open(searchUrl, '_blank');
    });
});

const closeButton = document.getElementById('close');
const confirmButton = document.getElementById('confirmButton');

closeButton.addEventListener('click', () => {
    document.getElementById('popup').style.display = 'none';
});

confirmButton.addEventListener('click', () => {
    window.location.href = 'dona.html';
});