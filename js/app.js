function alterarBotao(id) {
    let botao = document.getElementById(id)
    if (botao.classList.contains('dashboard__item__button')) {
        botao.classList.remove('dashboard__item__button');
        botao.classList.add('dashboard__item__button--return');

    }else{
        botao.classList.remove('dashboard__item__button--return');
        botao.classList.add('dashboard__item__button');
    }
    
}
alterarBotao();

function alterarStatus(id) {
    alterarBotao(`game-${id}`);
    
}


