window.addEventListener('DOMContentLoaded', function (event) {
  console.log("DOM fully loaded and parsed");
  let b = document.getElementById("button");
  b.addEventListener("click", onClick);
});

const para2 = document.querySelector('#answer');

function onClick(event) {
  event.preventDefault();
  let f1 = document.getElementsByName("field1");
  if(f1[0].value<=100 && f1[0].value>=1)
    para2.textContent = f1[0].value * parseInt(para.textContent) +" рублей.";
  else
    para2.textContent = "Ошибка\n"+ f1[0].value + "∉[1;100]";
}

const select = document.querySelector('#product');
const para = document.querySelector('#value');

select.addEventListener('change', setProduct);

function setProduct(event) {
  event.preventDefault();
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



