import removeLastChild from './remove';

export default function aboutUs() {
  removeLastChild();
  const content = document.getElementById('content');
  const container = document.createElement('div');
  container.innerText = 'Enso je jedan od najboljih restorana moderne kuhinje u Beogradu Posvetili smo se stvaranju gastronomskih remek dela uz kombinacije najrazličitijih ukusa, originalnih recepata i spoja vrhunskog kulinarstva i umetnosti u savršena jela. Naš kulinarski tim prati trendove, ali ih i stvara. Šefovi Nedeljko i Uroš su svojom stručnošću i kreativnošću kre irali meni koji je srpsku gastronomsku scenu izjednačio sa svetskim uz orima. Meni je sezonski, menja se na 6 meseci i sastoji se od sezonskih i svežih namirnica iz lokalnog uzgoja, najvećeg kvaliteta.';
  content.appendChild(container);
}
