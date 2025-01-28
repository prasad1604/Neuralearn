console.log('authenticate.js loaded');

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('login-form');
  if (!form) {
    console.error('Could not find form element with id "login-form"');
    return;
  }

  form.addEventListener('submit', (e) => {
    console.log('Form submitted');
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;
    const agree = document.getElementById('iAgree').checked;

    console.log(`Email: ${email}, Password: ${password}, Role: ${role}, Agree: ${agree}`);

    // Hardcoded credentials for demo purposes only
    const validEmail = 'prasad.kotian506@gmail.com';
    const validPassword = '123456';

    if (email === validEmail && password === validPassword && agree) {
      console.log('Credentials are valid');
      window.location.href = 'home.html';
    } else {
      console.log('Credentials are invalid');
      alert('Invalid email or password');
    }
  });
});