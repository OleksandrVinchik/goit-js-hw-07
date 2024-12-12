function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

button.addEventListener('click', () => {
  const newColor = getRandomHexColor();

  document.body.style.backgroundColor = newColor;
  colorSpan.textContent = newColor;
});

const widget = document.querySelector('.widget');
widget.style.display = 'flex';
widget.style.alignItems = 'center';
widget.style.justifyContent = 'center';
widget.style.flexDirection = 'column';
widget.style.gap = '16px';
widget.style.width = '169px';
widget.style.height = '80px';

button.style.display = 'flex';
button.style.alignItems = 'center';
button.style.justifyContent = 'center';
button.style.flexDirection = 'row';
button.style.gap = '10px';
button.style.borderRadius = '8px';
button.style.padding = '8px 16px';
button.style.width = '148px';
button.style.height = '40px';
button.style.background = '#4e75ff';
button.style.fontFamily = '"Montserrat", sans-serif';
button.style.fontWeight = '500';
button.style.fontSize = '16px';
button.style.lineHeight = '1.5';
button.style.letterSpacing = '0.04em';
button.style.color = '#fff';

colorSpan.style.fontFamily = '"Montserrat", sans-serif';
colorSpan.style.fontWeight = '400';
colorSpan.style.fontSize = '16px';
colorSpan.style.lineHeight = '1.5';
colorSpan.style.letterSpacing = '0.04em';
colorSpan.style.color = '#2e2f42';

const paragraph = document.querySelector('.widget p');

if (!paragraph.classList.contains('new-class')) {
  paragraph.classList.add('new-class');
}

paragraph.style.margin = '0';
paragraph.style.fontFamily = '"Montserrat", sans-serif';
paragraph.style.fontSize = '16px';
paragraph.style.lineHeight = '1.5';
paragraph.style.letterSpacing = '0.04em';
paragraph.style.color = '#2e2f42';
