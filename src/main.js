const selectElement = document.querySelector('.theme-toggler');
const themeOptions = document.getElementsByName('theme');

for (let i = 0; i < themeOptions.length; i++) {
  themeOptions[i].onclick = function setRadio() {
    localStorage.setItem('selectedTheme', this.value);
  };
}

if (localStorage.getItem('selectedTheme')) {
  const option = localStorage.getItem('selectedTheme');

  document.querySelector('input[name="theme"][value="' + option + '"]').setAttribute('checked', 'checked');
  document.querySelector('option[name="theme"][value="' + option + '"]').setAttribute('selected', 'selected');

  setTheme();
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

function initialState(themeName) {
  localStorage.setItem('theme', themeName);

  setTheme();
}

selectElement.addEventListener('change', (event) => {
  if (event.target.tagName === 'INPUT' || event.target.tagName === 'SELECT') {
    event.preventDefault();
    initialState(event.target.value);
  }
});

selectElement.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    event.preventDefault();
    initialState(event.target.value);
  }
});
