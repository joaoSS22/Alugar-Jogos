function alterarStatus(id) 
{
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let validacao = false;
    

    if (imagem.classList.contains('dashboard__item__img--rented')){           
        validacao =  window.confirm('Você quer devolver este jogo?')

        }
    
    if (imagem.classList.contains('dashboard__item__img--rented') && validacao === true) {
                imagem.classList.remove('dashboard__item__img--rented');
                botao.textContent ='Alugar';
                botao.classList.remove('dashboard__item__button--return');

    }else if  (!imagem.classList.contains('dashboard__item__img--rented')){ 
                imagem.classList.add('dashboard__item__img--rented');
                botao.textContent = 'Devolver';
                botao.classList.add('dashboard__item__button--return');
                jogosAlugados++;
                console.log(jogosAlugados);

               }
               
}

let jogosAlugados = 0;