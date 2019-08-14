export default function removeLastElement() {
  const content = document.getElementById('content');
  content.removeChild(content.lastChild);
}
