const categoriesList = document.querySelector('#categories');
const categoryItems = categoriesList.querySelectorAll('.item');

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach(item => {
  const categoryTitle = item.querySelector('h2').textContent;
  const elementsCount = item.querySelectorAll('ul li').length;
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${elementsCount}`);
});

const categoriesContainer = document.getElementById('categories');
categoriesContainer.style.display = 'flex';
categoriesContainer.style.flexDirection = 'column';
categoriesContainer.style.gap = '24px';

categoryItems.forEach(item => {
  item.style.display = 'flex';
  item.style.flexDirection = 'column';
  item.style.alignItems = 'flex-start';
  item.style.justifyContent = 'flex-start';
  item.style.gap = '16px';
  item.style.padding = '16px';
  item.style.backgroundColor = '#f6f6fe';
  item.style.borderRadius = '8px';
  item.style.width = '392px';
});

const titles = document.querySelectorAll('#categories .item h2');
titles.forEach(title => {
  title.style.fontFamily = '"Montserrat", sans-serif';
  title.style.fontSize = '24px';
  title.style.fontWeight = '600';
  title.style.color = '#2e2f42';
  title.style.lineHeight = 1.33333;
  title.style.margin = '0';
});

const lists = document.querySelectorAll('#categories .item ul');
lists.forEach(list => {
  list.style.display = 'flex';
  list.style.flexDirection = 'column';
  list.style.gap = '8px';
  list.style.padding = '0';
  list.style.margin = '0';
  list.style.width = '100%';
  list.style.listStyle = 'none';
});

const listItems = document.querySelectorAll('#categories .item ul li');
listItems.forEach(li => {
  li.style.border = '1px solid #808080';
  li.style.borderRadius = '8px';
  li.style.padding = '12px';
  li.style.width = '360px';
  li.style.height = '40px';
  li.style.paddingTop = '8px';
  li.style.paddingBottom = '8px';
  li.style.paddingLeft = '16px';
  li.style.alignItems = 'center';
  li.style.fontFamily = '"Montserrat", sans-serif';
  li.style.fontSize = '16px';
  li.style.fontWeight = '400';
  li.style.lineHeight = 1.5;
  li.style.color = '#2e2f42';
  li.style.boxSizing = 'border-box';
});
