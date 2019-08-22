import removeLastChild from './remove';

export default function menu() {
  const content = document.getElementById('content');
  if (content.lastChild.nodeName !== 'NAV') {
    removeLastChild();
  }
  const div = document.createElement('div');
  div.id = 'img-holder';
  const div1 = document.createElement('div');
  div1.id = 'img-holder1';
  const div2 = document.createElement('div');
  div2.id = 'img-holder2';
  const div3 = document.createElement('div');
  div3.id = 'img-holder3';
  const img1 = document.createElement('img');
  const img2 = document.createElement('img');
  const img3 = document.createElement('img');
  const name1 = document.createElement('h3');
  const name2 = document.createElement('h3');
  const name3 = document.createElement('h3');
  const price1 = document.createElement('h3');
  const price2 = document.createElement('h3');
  const price3 = document.createElement('h3');
  name1.innerText = 'Pizza';
  name2.innerText = 'cocktail';
  name3.innerText = 'desert';
  price1.innerText = '$15';
  price2.innerText = '$20';
  price3.innerText = '$10';

  img1.src = 'https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg';
  img2.src = 'https://cdn.pixabay.com/photo/2010/12/13/10/25/appetizer-2802_960_720.jpg';
  img3.src = 'https://cdn.pixabay.com/photo/2015/09/02/12/41/dish-918613_960_720.jpg';
  div1.appendChild(name1);
  div1.appendChild(price1);
  div1.appendChild(img1);
  div2.appendChild(name2);
  div2.appendChild(price2);
  div2.appendChild(img2);
  div3.appendChild(name3);
  div3.appendChild(price3);
  div3.appendChild(img3);
  div.appendChild(div1);
  div.appendChild(div2);
  div.appendChild(div3);
  content.appendChild(div);
}
