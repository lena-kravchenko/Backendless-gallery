const selectElement = document.querySelector('.theme-toggler');

function initialState(themeName) {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
}
/* 
function toggleTheme() {
  if (localStorage.getItem('theme') === 'dark-theme') {
    initialState('dark-theme');
  }

  if (localStorage.getItem('theme') === 'backendless-theme') {
    initialState('backendless-theme');
  }

  if (localStorage.getItem('theme') === 'light-theme') {
    initialState('light-theme');
  }
} */

selectElement.addEventListener('change', (event) => {
  event.preventDefault();
  initialState(event.target.value);
});
