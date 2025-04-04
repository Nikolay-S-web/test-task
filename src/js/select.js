(function () {
  const select = document.querySelector('.select');
  const selectTitle = document.querySelector('.select-header__title');
  const selectList = document.querySelector('.select-list');
  const selectItems = document.querySelectorAll('.select-list__item');
  const selectInput = document.querySelector('[name="system-type"]');

  function toggleState() {
    select.classList.toggle('active');
    selectList.classList.toggle('active');
  }

  function selectItem(e) {
    selectTitle.innerHTML = e.innerHTML;
    selectInput.value = e.textContent;
  }

  select.addEventListener('click', toggleState);

  selectItems.forEach((item) => {
    item.addEventListener('click', () => {
      selectItem(item);
    });
  });
})();
