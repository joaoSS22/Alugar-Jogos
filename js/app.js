

function alterarStatus(button) {

    if (button.classList.contains('dashboard__item__button--return')) 
        {
         button.classList.remove('dashboard__item__button--return'); 
         button.textContent = 'alugar'; 

    }else
        {
            button.classList.add('dashboard__item__button--return');
            button.textContent = 'Devolver';
        }
}


