const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingr = document.querySelector('#ingredients');

const firstIngr = document.createElement('li');
firstIngr.classList.add('item')
firstIngr.textContent = 'Potatoes';

const secondIngr = document.createElement('li');
secondIngr.classList.add('item')
secondIngr.textContent = 'Mushrooms';

const thirdIngr = document.createElement('li');
thirdIngr.classList.add('item')
thirdIngr.textContent = 'Garlic';

const fourthIngr = document.createElement('li');
fourthIngr.classList.add('item')
fourthIngr.textContent = 'Tomatos';

const fifthIngr = document.createElement('li');
fifthIngr.classList.add('item')
fifthIngr.textContent = 'Herbs';

const sixIngr = document.createElement('li');
sixIngr.classList.add('item')
sixIngr.textContent = 'Condiments';

ingr.append(firstIngr, secondIngr, thirdIngr, fourthIngr, fifthIngr, sixIngr);
console.log(ingr);