import removeLastChild from './remove';

export default function contactUS() {
  removeLastChild();
  const content = document.getElementById('content');
  const notice = document.createElement('h1');
  notice.innerText = 'We are currently closed. Please come back later!';
  content.appendChild(notice);
}
