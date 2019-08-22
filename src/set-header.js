export default function setHeader() {
  const content = document.getElementById('content');
  const navbar = document.createElement('nav');
  const div = document.createElement('div');
  const name = document.createElement('h1');
  name.innerText = 'Sofiri';
  const menuButton = document.createElement('button');
  menuButton.innerText = 'Menu';
  menuButton.id = 'menu';
  const aboutUsButton = document.createElement('button');
  aboutUsButton.innerText = 'About us';
  aboutUsButton.id = 'about-us';
  const contactUsButton = document.createElement('button');
  contactUsButton.innerText = 'Contact us';
  contactUsButton.id = 'contact-us';
  navbar.appendChild(name);
  div.appendChild(menuButton);
  div.appendChild(aboutUsButton);
  div.appendChild(contactUsButton);
  navbar.appendChild(div);
  content.appendChild(navbar);
}
