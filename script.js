const select = document.querySelector('#product');
const para = document.querySelector('#value');

select.addEventListener('change', setProduct);

function setProduct() {
  const choice = select.value;

  if (choice === 'Конфета') {
    para.textContent = '5 рублей';
  } else if (choice === 'Булочка') {
    para.textContent = '30 рублей';
  } else if (choice === 'Батончик') {
    para.textContent = '50 рублей';
  } else if (choice === 'Плитка шоколада') {
    para.textContent = '100 рублей';
  } else if (choice === 'Торт'){
    para.textContent = '300 рублей';
  }
}

const para2 = document.querySelector('#answer');
function click1() {
  let f1 = document.getElementsByName("field1");
  para2.textContent = f1[0].value * parseInt(para.textContent) +" рублей.";
}
