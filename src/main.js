document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('[data-tab-button]');
  
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
})

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