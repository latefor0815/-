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

function createBubble() {
    var bubble = document.createElement('div');
    bubble.classList.add('bubble');
    document.body.appendChild(bubble);
    var delay = Math.random() * 1500; // 0부터 3000 밀리초 사이의 랜덤한 값
    bubble.style.animationDelay = '-' + delay + 'ms';
}

// 일정 시간마다 공기방울 생성
setInterval(createBubble, 3300);