// Get references to the modal and buttons
const modal = document.getElementById('modal');
const payButton = document.getElementById('payButton');
const confirmButton = document.getElementById('confirmButton');

// Show modal when the pay button is clicked
payButton.addEventListener('click', () => {
  modal.style.display = 'block'; // Set modal display to block to show it
});

// Handle confirm button inside the modal
confirmButton.addEventListener('click', () => {
  modal.style.display = 'none'; // Hide the modal
  alert('Pembayaran berhasil! Anda akan diarahkan ke halaman utama.'); // Alert user of successful payment
  window.location.href = "index.html";
});

// Optional: Close modal when clicking outside of it
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none'; // Hide the modal if clicked outside
  }
});
