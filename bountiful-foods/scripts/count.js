let count = parseInt(localStorage.getItem('submitCount') || '0');
document.querySelector('#submitCount').textContent = count.toString();