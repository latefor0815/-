const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // 여기서 로그인 폼 데이터를 처리하고 서버로 전송하는 코드를 작성할 수 있습니다.
    // 예: fetch 또는 XMLHttpRequest를 사용하여 서버로 데이터 전송
    // fetch('/login', {
    //     method: 'POST',
    //     body: new FormData(loginForm)
    // }).then(response => {
    //     // 응답 처리
    // }).catch(error => {
    //     console.error('Error:', error);
    // });
});
