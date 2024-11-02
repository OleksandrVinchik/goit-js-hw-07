function getElementWidth(content, padding, border) {
  const ccc = Number.parseFloat(content);
  const ppp = Number.parseFloat(padding);
  const bbb = Number.parseFloat(border);
  const borderBox = Number.parseFloat(ccc + ppp * 2 + bbb * 2);
  return borderBox;
}

console.log(getElementWidth('50px', '8px', '4px'));
console.log(getElementWidth('60px', '12px', '8.5px'));
console.log(getElementWidth('200px', '0px', '0px'));
