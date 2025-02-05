const logoutButton = document.querySelector('.nav-link[href="/home.html"]');

logoutButton.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.href = 'index.html';
});