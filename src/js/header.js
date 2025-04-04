const handleScroll = () => {
  const header = document.querySelector('header');
  const introTitle = document.querySelector('.promo__title');

  if (introTitle) {
    const introTitlePosition = introTitle.getBoundingClientRect().top;
    const headerHeight = header.offsetHeight;

    if (introTitlePosition <= headerHeight) {
      header.classList.add('header--moved');
    } else {
      header.classList.remove('header--moved');
    }
  }
};

window.addEventListener('scroll', handleScroll);
