let msgMotivacional = document.getElementById('msgMotivacional');
let botao = document.querySelector('#botao');

botao.addEventListener('click', showMsg);


function showMsg(){
    console.log('Olaaaaaa');
    msgMotivacional.innerHTML = 'Quando faltar sorte, faça sobrar atitude: o azar morre de medo de pessoas determinadas.';
    botao.style.background='lightgreen';
}

