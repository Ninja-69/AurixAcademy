// Define campuses (feel free to change names/pages/icons)
const campuses = [
  { name: "Crypto Trading", page: "campuses/crypto.html", emoji: "📈" },
  { name: "Content Creation", page: "campuses/content.html", emoji: "🎥" },
  { name: "Marketing", page: "campuses/marketing.html", emoji: "💼" },
  { name: "AI Tools", page: "campuses/ai.html", emoji: "🤖" }
];

const optionsDiv = document.getElementById('campus-options');
const nextBtn = document.getElementById('next-btn');

let selectedCampus = null;

// Load campuses as clickable cards
campuses.forEach((campus, index) => {
  const div = document.createElement('div');
  div.className = 'cursor-pointer p-4 border rounded-xl hover:bg-yellow-500 hover:text-black transition bg-[#2c2c2c] text-white';
  div.innerHTML = `<div class="text-3xl">${campus.emoji}</div><div class="mt-2 font-semibold">${campus.name}</div>`;

  // Click logic
  div.onclick = () => {
    selectedCampus = campus;
    document.querySelectorAll('#campus-options > div').forEach(d => d.classList.remove('bg-yellow-400', 'text-black'));
    div.classList.add('bg-yellow-400', 'text-black');
    nextBtn.disabled = false;
  };

  optionsDiv.appendChild(div);
});

// Redirect to selected campus
nextBtn.onclick = () => {
  if (selectedCampus) {
    window.location.href = selectedCampus.page;
  }
};
