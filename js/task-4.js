const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const { email, password } = form.elements;
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (!emailValue || !passwordValue) {
    alert('All form fields must be filled in');
    return;
  }

  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  console.log(formData);
  form.reset();
});

form.style.display = 'flex';
form.style.alignItems = 'flex-start';
form.style.justifyContent = 'flex-start';
form.style.flexDirection = 'column';
form.style.gap = '8px';
form.style.borderRadius = '8px';
form.style.padding = '24px';
form.style.width = '408px';
form.style.height = '256px';
form.style.background = '#fff';

const button = form.querySelector('button');
button.style.display = 'flex';
button.style.alignItems = 'center';
button.style.justifyContent = 'center';
button.style.flexDirection = 'row';
button.style.gap = '10px';
button.style.borderRadius = '8px';
button.style.padding = '8px 16px';
button.style.width = '86px';
button.style.height = '40px';
button.style.background = '#4e75ff';
button.style.fontFamily = '"Montserrat", sans-serif';
button.style.fontWeight = '500';
button.style.fontSize = '16px';
button.style.lineHeight = '1.5';
button.style.letterSpacing = '0.04em';
button.style.color = '#fff';
button.style.marginTop = '8px';

const labels = form.querySelectorAll('label');
labels.forEach(label => {
  label.style.display = 'flex';
  label.style.flexDirection = 'column';
  label.style.gap = '8px';
  label.style.fontFamily = '"Montserrat", sans-serif';
  label.style.fontWeight = '400';
  label.style.fontSize = '16px';
  label.style.lineHeight = '1.5';
  label.style.letterSpacing = '0.04em';
  label.style.color = '#2e2f42';
});

const inputs = form.querySelectorAll('input');
inputs.forEach(input => {
  input.style.width = '360px';
  input.style.height = '40px';
  input.style.padding = '8px';
  input.style.borderRadius = '4px';
  input.style.border = '1px solid #ccc';
});
