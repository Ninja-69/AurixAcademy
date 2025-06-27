const campuses = [
  {
    name: "Crypto Trading",
    page: "campuses/crypto.html",
    svg: `<svg class="w-12 h-12 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M3 10l6 6L21 4" />
          </svg>`
  }
];

const container = document.getElementById('campus-options');
const nextBtn = document.getElementById('next-btn');
let selected = null;

campuses.forEach(c => {
  const card = document.createElement('div');
  card.className = 'bg-gray-900 rounded-xl p-6 cursor-pointer flex items-center space-x-4 border-2 border-gray-700 hover:border-yellow-400 transition-fade icon-hover';
  card.innerHTML = `
    <div>${c.svg}</div>
    <div>
      <h2 class="text-xl font-semibold">${c.name}</h2>
    </div>`;
  card.onclick = () => {
    selected = c;
    container.querySelectorAll('div').forEach(d => d.classList.remove('border-yellow-400', 'bg-gray-700'));
    card.classList.add('border-yellow-400', 'bg-gray-700');
    nextBtn.disabled = false;
  };
  container.appendChild(card);
});

nextBtn.onclick = () => {
  if (selected) window.location.href = selected.page;
};
