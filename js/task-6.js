function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');

function createBoxes(amount) {
  destroyBoxes();

  const elements = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.marginTop = '8px';
    elements.push(box);
    size += 10;
  }

  boxesContainer.append(...elements);
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

createBtn.addEventListener('click', () => {
  const amount = parseInt(input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = '';
  }
});

destroyBtn.addEventListener('click', destroyBoxes);

const controls = document.getElementById('controls');
controls.style.display = 'flex';
controls.style.alignItems = 'flex-start';
controls.style.justifyContent = 'flex-start';
controls.style.flexDirection = 'row';
controls.style.gap = '16px';
controls.style.borderRadius = '8px';
controls.style.padding = '32px';
controls.style.width = '486px';
controls.style.height = '104px';
controls.style.background = '#f6f6fe';

createBtn.style.display = 'flex';
createBtn.style.alignItems = 'center';
createBtn.style.justifyContent = 'center';
createBtn.style.flexDirection = 'row';
createBtn.style.gap = '10px';
createBtn.style.borderRadius = '8px';
createBtn.style.padding = '8px 16px';
createBtn.style.width = '120px';
createBtn.style.height = '40px';
createBtn.style.background = '#4e75ff';
createBtn.style.color = '#fff';
createBtn.style.fontFamily = '"Montserrat", sans-serif';
createBtn.style.fontWeight = '500';
createBtn.style.fontSize = '16px';
createBtn.style.lineHeight = '1.5';
createBtn.style.letterSpacing = '0.04em';
createBtn.style.border = 'none';
createBtn.style.cursor = 'pointer';

destroyBtn.style.display = 'flex';
destroyBtn.style.alignItems = 'center';
destroyBtn.style.justifyContent = 'center';
destroyBtn.style.flexDirection = 'row';
destroyBtn.style.gap = '10px';
destroyBtn.style.borderRadius = '8px';
destroyBtn.style.padding = '8px 16px';
destroyBtn.style.width = '120px';
destroyBtn.style.height = '40px';
destroyBtn.style.background = '#ff4e4e';
destroyBtn.style.color = '#fff';
destroyBtn.style.fontFamily = '"Montserrat", sans-serif';
destroyBtn.style.fontWeight = '500';
destroyBtn.style.fontSize = '16px';
destroyBtn.style.lineHeight = '1.5';
destroyBtn.style.letterSpacing = '0.04em';
destroyBtn.style.border = 'none';
destroyBtn.style.cursor = 'pointer';

boxesContainer.style.display = 'flex';
boxesContainer.style.alignItems = 'flex-start';
boxesContainer.style.justifyContent = 'flex-start';
boxesContainer.style.flexDirection = 'row';
boxesContainer.style.gap = '10px';
boxesContainer.style.borderRadius = '8px';
boxesContainer.style.padding = '32px';
boxesContainer.style.width = '100%';
boxesContainer.style.height = '100%';
boxesContainer.style.background = '#f6f6fe';

input.style.display = 'flex';
input.style.alignItems = 'center';
input.style.justifyContent = 'center';
input.style.flexDirection = 'column';
input.style.gap = '10px';
input.style.border = '1px solid #808080';
input.style.borderRadius = '8px';
input.style.padding = '8px 72px';
input.style.width = '150px';
input.style.height = '40px';
input.style.fontFamily = '"Montserrat", sans-serif';
input.style.fontWeight = '400';
input.style.fontSize = '16px';
input.style.lineHeight = '1.5';
input.style.letterSpacing = '0.04em';
input.style.color = '#2e2f42';

input.style.textAlign = 'center';
input.style.padding = '8px 16px';
