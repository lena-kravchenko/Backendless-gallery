const selectElement = document.querySelector('.theme-toggler');
const themeRadio = document.getElementsByName('theme');

for (let i = 0; i < themeRadio.length; i++) {
  themeRadio[i].onclick = function setRadio() {
    localStorage.setItem('radioPressed', this.value);
  };
}

function setTheme() {
  if (localStorage.getItem('theme') === 'dark-theme') {
    document.documentElement.className = 'dark-theme';
  }

  if (localStorage.getItem('theme') === 'backendless-theme') {
    document.documentElement.className = 'backendless-theme';
  }

  if (localStorage.getItem('theme') === 'light-theme') {
    document.documentElement.className = 'light-theme';
  }
}

if (localStorage.getItem('radioPressed')) {
  const radioPressed = localStorage.getItem('radioPressed');
  document.querySelector('input[name="theme"][value="' + radioPressed + '"]').setAttribute('checked', 'checked');

  setTheme();
}

function initialState(themeName) {
  localStorage.setItem('theme', themeName);

  setTheme();
}

selectElement.addEventListener('change', (event) => {
  event.preventDefault();
  initialState(event.target.value);
});
