import removeLastChild from './remove';

export default function aboutUs() {
  removeLastChild();
  const content = document.getElementById('content');
  const container = document.createElement('div');
  container.innerText = 'Passionately personal and genuinely delicious!\n At Sofiri, we turn the ordinary into the extraordinary every day. So, stop in for a romantic dinner, relaxing lunch, or after work gathering at our cozy, sit-down bar...make everyday life a little more special at Sofiri Restaurant! ';
  content.appendChild(container);
}
