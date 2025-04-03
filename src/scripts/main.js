document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('[data-tab-button]');
  const questions = document.querySelectorAll('[data-faq-question]');

  const heroSection = document.querySelector('.hero');
  const heightHero = heroSection.clientHeight;

  window.addEventListener('scroll', function(){
    const posicaoAtual = window.scrollY;
    if ( posicaoAtual < heightHero) {
      hideHeaderElements();
    } else {
      showHeaderElements();
    }
  })
  

  // Seção de atrações, programação das abas

  for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(botao) {
      const abaAlvo = botao.target.getAttribute('data-tab-button');
      const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
        esconderAbas();
        aba.classList.add('show__list--is-active');
        removerActiveButton();
        botao.target.classList.add('show__tabs__button--is-active');
    })
  }

  //seção FAQ, accordion
  for(let i = 0; i < questions.length; i++) {
    questions[i].addEventListener('click', abreOuFechaResposta);
  }


})

function hideHeaderElements() {
  const header = document.querySelector('header');
  header.classList.add('header--is-hidden');
}

function showHeaderElements() {
  const header = document.querySelector('header');
  header.classList.remove('header--is-hidden');
}

function abreOuFechaResposta(elemento) {
  const classe = 'faq__questions__item--is-open'
  const elementoPai = elemento.target.parentNode;
  elementoPai.classList.toggle(classe);
}

function removerActiveButton() {
  const buttons = document.querySelectorAll('[data-tab-button]');

  for(let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('show__tabs__button--is-active');
  }

}

function esconderAbas() {
  const tabsContainer = document.querySelectorAll('[data-tab-id]');
  
  for(let i = 0; i < tabsContainer.length; i++) {
    tabsContainer[i].classList.remove('show__list--is-active');
  }
}