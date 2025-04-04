(function () {
  const value = document.querySelector('.range-header__value');
  const input = document.querySelector('.range__input');

  input.addEventListener('input', () => {
    value.textContent = `${input.value} %`;
  });
})();
