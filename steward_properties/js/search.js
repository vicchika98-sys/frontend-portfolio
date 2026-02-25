// Toggle search bar visibility
document.getElementById('searchToggle').addEventListener('click', () => {
  const bar = document.getElementById('searchBar');
  bar.classList.toggle('d-none');
  document.getElementById('siteSearchInput').focus();
});

// Site-wide page data
const pages = [
  { title: "Home", url: "index.html", keywords: "home real estate luxury" },
  { title: "About Us", url: "about.html", keywords: "about company mission team" },
  { title: "Services", url: "services.html", keywords: "services construction leasing brokering" },
  { title: "Properties", url: "properties.html", keywords: "properties listings apartments houses land" },
  { title: "Blog", url: "blog.html", keywords: "blog articles news tips" },
  { title: "FAQs", url: "faqs.html", keywords: "faqs questions help support" },
  { title: "Contact", url: "contact.html", keywords: "contact call email location" },
];

const input = document.getElementById('siteSearchInput');
const resultsDiv = document.getElementById('searchResults');

input.addEventListener('input', () => {
  const q = input.value.trim().toLowerCase();
  resultsDiv.innerHTML = "";

  if (!q) return;

  const matches = pages.filter(p =>
    p.title.toLowerCase().includes(q) || p.keywords.includes(q)
  );

  if (matches.length) {
    matches.forEach(p => {
      const div = document.createElement('div');
      div.innerHTML = `<a href="${p.url}" class="d-block py-1">${p.title}</a>`;
      resultsDiv.appendChild(div);
    });
  } else {
    resultsDiv.innerHTML = "<p class='text-muted'>No matches found.</p>";
  }
});
