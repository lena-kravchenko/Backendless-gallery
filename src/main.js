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

const image1 = document.querySelector('.item__1');
const closeModal1 = document.querySelector('.modal__close--1');
const modalWindow1 = document.querySelector('.modal--1');

image1.addEventListener('click', (event) => {
  modalWindow1.style.display = 'flex';
});

closeModal1.addEventListener('click', (event) => {
  modalWindow1.style.display = 'none';
});

const image2 = document.querySelector('.item__2');
const closeModal2 = document.querySelector('.modal__close--2');
const modalWindow2 = document.querySelector('.modal--2');

image2.addEventListener('click', (event) => {
  modalWindow2.style.display = 'flex';
});

closeModal2.addEventListener('click', (event) => {
  modalWindow2.style.display = 'none';
});

const image3 = document.querySelector('.item__3');
const closeModal3 = document.querySelector('.modal__close--3');
const modalWindow3 = document.querySelector('.modal--3');

image3.addEventListener('click', (event) => {
  modalWindow3.style.display = 'flex';
});

closeModal3.addEventListener('click', (event) => {
  modalWindow3.style.display = 'none';
});

const image4 = document.querySelector('.item__4');
const closeModal4 = document.querySelector('.modal__close--4');
const modalWindow4 = document.querySelector('.modal--4');

image4.addEventListener('click', (event) => {
  modalWindow4.style.display = 'flex';
});

closeModal4.addEventListener('click', (event) => {
  modalWindow4.style.display = 'none';
});

const image5 = document.querySelector('.item__5');
const closeModal5 = document.querySelector('.modal__close--5');
const modalWindow5 = document.querySelector('.modal--5');

image5.addEventListener('click', (event) => {
  modalWindow5.style.display = 'flex';
});

closeModal5.addEventListener('click', (event) => {
  modalWindow5.style.display = 'none';
});

const image6 = document.querySelector('.item__6');
const closeModal6 = document.querySelector('.modal__close--6');
const modalWindow6 = document.querySelector('.modal--6');

image6.addEventListener('click', (event) => {
  modalWindow6.style.display = 'flex';
});

closeModal6.addEventListener('click', (event) => {
  modalWindow6.style.display = 'none';
});

const image7 = document.querySelector('.item__7');
const closeModal7 = document.querySelector('.modal__close--7');
const modalWindow7 = document.querySelector('.modal--7');

image7.addEventListener('click', (event) => {
  modalWindow7.style.display = 'flex';
});

closeModal7.addEventListener('click', (event) => {
  modalWindow7.style.display = 'none';
});

const image8 = document.querySelector('.item__8');
const closeModal8 = document.querySelector('.modal__close--8');
const modalWindow8 = document.querySelector('.modal--8');

image8.addEventListener('click', (event) => {
  modalWindow8.style.display = 'flex';
});

closeModal8.addEventListener('click', (event) => {
  modalWindow8.style.display = 'none';
});

const image9 = document.querySelector('.item__9');
const closeModal9 = document.querySelector('.modal__close--9');
const modalWindow9 = document.querySelector('.modal--9');

image9.addEventListener('click', (event) => {
  modalWindow9.style.display = 'flex';
});

closeModal9.addEventListener('click', (event) => {
  modalWindow9.style.display = 'none';
});

const image10 = document.querySelector('.item__10');
const closeModal10 = document.querySelector('.modal__close--10');
const modalWindow10 = document.querySelector('.modal--10');

image10.addEventListener('click', (event) => {
  modalWindow10.style.display = 'flex';
});

closeModal10.addEventListener('click', (event) => {
  modalWindow10.style.display = 'none';
});

const image11 = document.querySelector('.item__11');
const closeModal11 = document.querySelector('.modal__close--11');
const modalWindow11 = document.querySelector('.modal--11');

image11.addEventListener('click', (event) => {
  modalWindow11.style.display = 'flex';
});

closeModal11.addEventListener('click', (event) => {
  modalWindow11.style.display = 'none';
});

const image12 = document.querySelector('.item__12');
const closeModal12 = document.querySelector('.modal__close--12');
const modalWindow12 = document.querySelector('.modal--12');

image12.addEventListener('click', (event) => {
  modalWindow12.style.display = 'flex';
});

closeModal12.addEventListener('click', (event) => {
  modalWindow12.style.display = 'none';
});
