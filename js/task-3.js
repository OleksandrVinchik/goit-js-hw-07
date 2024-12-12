const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', event => {
  const trimmedValue = event.currentTarget.value.trim();
  outputEl.textContent = trimmedValue !== '' ? trimmedValue : 'Anonymous';
});

const containerEl = document.querySelector('body');
containerEl.style.display = 'flex';
containerEl.style.alignItems = 'flex-start';
containerEl.style.justifyContent = 'flex-start';
containerEl.style.flexDirection = 'column';
containerEl.style.gap = '16px';
containerEl.style.background = '#fff';
containerEl.style.borderRadius = '8px';
containerEl.style.padding = '24px';
containerEl.style.width = '402px';
containerEl.style.height = '136px';

inputEl.style.width = '360px';
inputEl.style.height = '40px';
inputEl.style.padding = '8px 16px';
inputEl.style.fontFamily = '"Montserrat", sans-serif';
inputEl.style.fontSize = '16px';
inputEl.style.fontWeight = '400';
inputEl.style.lineHeight = '1.5';
inputEl.style.border = '1px solid #808080';
inputEl.style.borderRadius = '4px';
inputEl.style.color = '#2e2f42';
inputEl.style.outline = 'none';

outputEl.parentElement.style.fontFamily = '"Montserrat", sans-serif';
outputEl.parentElement.style.fontWeight = '600';
outputEl.parentElement.style.fontSize = '24px';
outputEl.parentElement.style.lineHeight = '1.33333';
outputEl.parentElement.style.letterSpacing = '0.04em';
outputEl.parentElement.style.color = '#2e2f42';
outputEl.parentElement.style.margin = '0';
