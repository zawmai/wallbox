


// Menu - toggle expand/collapse feature
const toggleBtn = document.querySelector('.nav__toggle');
const navMenu = document.querySelector('.nav__menu');

function toggleMenuFn(event) {
  if (navMenu.classList.contains("nav__menu--active")) {
    navMenu.classList.remove('nav__menu--active');
  } else {
    navMenu.classList.add('nav__menu--active');
  }
}

toggleBtn.addEventListener('click', toggleMenuFn, false);

// Submenu - toggle expand/collapse feature
const navItems = document.querySelectorAll('.nav__item');

function toggleNavItemFn(event) {
  if (this.classList.contains('nav__submenu--active')) {
    // if submenu is active, remove
    this.classList.remove('nav__submenu--active');
  } else if (navMenu.querySelector('.nav__submenu--active')) {
    // if another active submenu exist, remove, then add
    navMenu.querySelector('.nav__submenu--active').classList.remove('nav__submenu--active');
    subMenu.classList.add('nav__submenu--active');
  } else {
    // if no submenu is active, add
    this.classList.add('nav__submenu--active');
  }
  console.log(this);
}

for (let item of navItems) {
  console.log(item);
  if (item.querySelector('.nav__submenu')) {
    item.addEventListener('click', toggleNavItemFn, false);
    item.addEventListener('keypress', toggleNavItemFn, false);
  }
}