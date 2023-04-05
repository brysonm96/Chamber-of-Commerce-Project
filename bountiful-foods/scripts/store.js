document.querySelector('#drinkForm').addEventListener('submit', function() {
    let count = parseInt(localStorage.getItem('submitCount') || '0');
    count++;
    localStorage.setItem('submitCount', count.toString());
  });