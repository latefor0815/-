const donateButton = document.getElementById('dona');
const popup = document.getElementById('popup');
const closeButton = document.getElementById('close');
const confirmButton = document.getElementById('confirmButton');

donateButton.addEventListener('click', () => {
    popup.style.display = 'block';
});

closeButton.addEventListener('click', () => {
    popup.style.display = 'none';
});

confirmButton.addEventListener('click', () => {
    var amount = document.getElementById('amount').value;
    if(amount === '') {
        alert('금액을 입력해주세요.');
    } else {
        alert(amount + '원을 후원해 주셔서 감사합니다!');
        window.location.href = 'dona.html'; // 후원 페이지로 이동
    }
});

function clearAmount() {
    var amountInput = document.getElementById('amount');
    amountInput.value = '';
}
