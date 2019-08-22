import removeLastChild from './remove';

export default function contactUS() {
  removeLastChild();
  const div = document.createElement('div');
  const content = document.getElementById('content');
  const email = document.createElement('h1');
  email.innerText = 'Email: fakeowner@gmail.com';
  const phoneno = document.createElement('h1');
  phoneno.innerText = 'Mobile: +23458903885';
  div.appendChild(email);
  div.appendChild(phoneno);
  content.appendChild(div);
}
