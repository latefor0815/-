const donateButton = document.getElementById('donateButton');
const popup = document.getElementById('popup');
const closeButton = document.getElementById('close');
const confirmButton = document.getElementById('confirmButton');

donateButton.addEventListener('click', () => {
    popup.style.display = 'block';
});

closeButton.addEventListener('click', () => {
    popup.style.display = 'none';
});

document.getElementById('confirmButton').addEventListener('click', function() {
    var amount = document.getElementById('amount').value;
    if(amount === '') {
        alert('금액을 입력해주세요.');
    } else {
        // 후원 확인 로직 추가하기
        alert(amount + '원을 후원해주셔서 감사합니다!');
        // 여기에 후원 확인 후 처리할 내용을 추가하세요.
    }
});
