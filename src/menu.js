import removeLastChild from './remove';

export default function createImages() {
  const content = document.getElementById('content');
  if (content.lastChild.nodeName !== 'NAV') {
    removeLastChild();
  }
  const div = document.createElement('div');
  div.id = 'img-holder';
  const img1 = document.createElement('img');
  const img2 = document.createElement('img');
  const img3 = document.createElement('img');
  img1.src = 'https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg';
  img2.src = 'https://cdn.pixabay.com/photo/2010/12/13/10/25/appetizer-2802_960_720.jpg';
  img3.src = 'https://cdn.pixabay.com/photo/2015/09/02/12/41/dish-918613_960_720.jpg';
  div.appendChild(img1);
  div.appendChild(img2);
  div.appendChild(img3);
  content.appendChild(div);
}
