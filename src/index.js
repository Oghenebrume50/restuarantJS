function setHeader() {
  const content = document.getElementById('content');
  const navbar = document.createElement('nav');
  const name = document.createElement('h1');
  name.innerText = 'Sofiri'
  const menuButton = document.createElement('a')
  menuButton.innerText = 'Menu'
  const aboutUsButton = document.createElement('a')
  aboutUsButton.innerText = 'About us'
  const contactUsButton = document.createElement('a')
  contactUsButton.innerText = 'Contact us'
  navbar.appendChild(name);
  navbar.appendChild(menuButton);
  navbar.appendChild(aboutUsButton);
  navbar.appendChild(contactUsButton);
  content.appendChild(navbar);
}

function render(){
  window.addEventListener('DOMContentLoaded', (event) => {
    setHeader();
  });
}

render();