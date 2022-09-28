let sidebar = document.querySelector('.sidebar');
let closeBtn = document.querySelector('#btn');
let searchBtn = document.querySelector('.bx-search');
let searchBtnInput = document.querySelector('.bx-search + input');
let mainSection = document.querySelector('.home-section');

closeBtn.addEventListener('click', () => {
  sidebar.classList.toggle('open');
  toggleMenuIcon();
});

searchBtn.addEventListener('click', () => {
  sidebar.classList.toggle('open');
  searchBtnInput.focus();
  toggleMenuIcon();
});

mainSection.addEventListener('click', () => {
  if (sidebar.classList.contains('open')) {
    sidebar.classList.remove('open');
    toggleMenuIcon();
  }
});

function toggleMenuIcon() {
  if (sidebar.classList.contains('open')) {
    closeBtn.classList.replace('bx-menu', 'bx-menu-alt-right');
  } else {
    closeBtn.classList.replace('bx-menu-alt-right', 'bx-menu');
  }
}
