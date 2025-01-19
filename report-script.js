const modal = document.getElementById('modal');
const submitButton = document.getElementById('submitButton');
const confirmButton = document.getElementById('confirmButton');

submitButton.addEventListener('click', () => {
    modal.style.display = 'flex';
});

confirmButton.addEventListener('click', () => {
    modal.style.display = 'none';
    alert('Laporan Anda telah dikirim!');
});
