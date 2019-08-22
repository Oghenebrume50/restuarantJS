import aboutUs from './about-us';
import menu from './menu';
import contactUs from './contact-us';

const tabs = {
  menu,
  aboutUs,
  contactUs,
};


export default function tabSwitch() {
  const menuBtn = document.getElementById('menu');
  const aboutUsBtn = document.getElementById('about-us');
  const contactBtn = document.getElementById('contact-us');
  menuBtn.addEventListener('click', tabs.menu, false);
  aboutUsBtn.addEventListener('click', tabs.aboutUs, false);
  contactBtn.addEventListener('click', tabs.contactUs, false);
}
