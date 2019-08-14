import aboutUs from './about-us';
import createImages from './menu';
import contactUs from './contact-us';

const tabs = {
  menu: createImages,
  aboutUs: aboutUs,
  contactUs: contactUs
}

function setHeader() {
  const content = document.getElementById('content');
  const navbar = document.createElement('nav');
  const div = document.createElement('div');
  const name = document.createElement('h1');
  name.innerText = 'Sofiri'
  const menuButton = document.createElement('button');
  menuButton.innerText = 'Menu'
  menuButton.id = 'menu';
  const aboutUsButton = document.createElement('button');
  aboutUsButton.innerText = 'About us'
  aboutUsButton.id = 'about-us';
  const contactUsButton = document.createElement('button');
  contactUsButton.innerText = 'Contact us'
  contactUsButton.id = 'contact-us';
  navbar.appendChild(name);
  div.appendChild(menuButton);
  div.appendChild(aboutUsButton);
  div.appendChild(contactUsButton);
  navbar.appendChild(div);
  content.appendChild(navbar);
}

function tabSwitch() {
  const menu = document.getElementById('menu');
  const aboutUs = document.getElementById('about-us');
  const contactbtn = document.getElementById('contact-us');
  menu.addEventListener('click', tabs.menu, false);
  aboutUs.addEventListener('click', tabs.aboutUs, false);
  contactbtn.addEventListener('click', tabs.contactUs, false);
}

function render(){
  window.addEventListener('DOMContentLoaded', (event) => {
    setHeader();
    createImages();
    tabSwitch();
    
  });
}

render();