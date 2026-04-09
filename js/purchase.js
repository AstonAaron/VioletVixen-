//DOM Content for purchase page
const yearEl = document.getElementById("year");
const mobileMenu = document.getElementById("navMenu");
const menuBtn = document.getElementById("menuToggle");
const heading = document.querySelector("h1");
const container = document.getElementById("bookContainer");

const modal = document.getElementById("bookModal");

const books = [
  {
    title: "Babysitter's Game",
    image: "images/Babysitters-game.jpeg",
    description: "A thrilling and risky encounter...",
    rating: "⭐⭐⭐⭐☆",
    price: "$9.99",
    warnings: `
    - Mature themes<br>
    - Power dynamics<br>
    - Explicit content<br>
    - Age gap
  `,
    link: "https://www.amazon.com/Babysitters-Game-Cheaters-Book-ebook/dp/B071K82PGB/ref=books_amazonstores_desktop_mfs_aufs_ap_sc_dsk_0?_encoding=UTF8&pd_rd_w=zrWyX&content-id=amzn1.sym.9c9a049f-252a-49d9-a8c2-e300a1663200&pf_rd_p=9c9a049f-252a-49d9-a8c2-e300a1663200&pf_rd_r=139-8099201-9925314&pd_rd_wg=jHi7t&pd_rd_r=2e921468-af0e-4850-b482-4f41ad5346c5",
  },
  {
    title: "Daddy's Plaything",
    image: "images/Daddy-plaything.jpeg",
    link: "https://amazon.com",
  },
  {
    title: "One Temptation",
    image: "images/One-Temptation.jpeg",
    link: "https://amazon.com",
  },
  {
    title: "Shake Her Sparkler",
    image: "images/Shake-Her-Sparkler.jpeg",
    link: "https://amazon.com",
  },
  {
    title: "Wicked Pumpkin",
    image: "images/Wicked-Pumpkin.jpeg",
    link: "https://amazon.com",
  },
  {
    title: "Wife Swap",
    image: "images/Wife-swap.jpeg",
    link: "https://amazon.com",
  },
  {
    title: "Coming Soon",
    image: "images/coming-soon/Hot-Tub-fun.jpeg",
    link: "https://amazon.com",
  },
  {
    title: "Coming Soon",
    image: "images/coming-soon/Taking-the-babysitter.jpeg",
    link: "https://amazon.com",
  },
  {
    title: "Coming Soon",
    image: "images/coming-soon/Your-dad-makes-three.jpeg",
    link: "https://amazon.com",
  },
];

//container
books.forEach((book, index) => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <img src="${book.image}" alt="${book.title}">
    
    <div class="card-content">
      <h3>${book.title}</h3>

      <div class="card-buttons">
        <button onclick="openModal(${index})">
          Learn More
        </button>
        <button onclick="window.location.href='${book.link}'">
          Buy Now
        </button>
      </div>
    </div>
  `;

  container.appendChild(card);
});

document.getElementById("modalRating").textContent = book.rating || "No rating";

document.getElementById("modalPrice").textContent = book.price || "";
//modal

function openModal(index) {
  const book = books[index];

  modal.classList.add("show");

  document.getElementById("modalImg").src = book.image;
  document.getElementById("modalTitle").textContent = book.title;

  document.getElementById("modalDescription").innerHTML =
    book.description || "No description available.";

  document.getElementById("modalWarnings").innerHTML =
    book.warnings || "No trigger warnings.";

  document.getElementById("modalBuy").onclick = () => {
    window.location.href = book.link;
  };
}

function closeModal() {
  modal.classList.remove("show");
}

// click outside closes modal
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

//nav and scroll effects
function toggleMenu() {
  const menu = document.getElementById("navMenu");
  const toggle = document.getElementById("menuToggle");

  menu.classList.toggle("active");

  if (menu.classList.contains("active")) {
    toggle.textContent = "✕";
  } else {
    toggle.textContent = "☰";
  }
}

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.classList.add("navbar-floating");
  } else {
    navbar.classList.remove("navbar-floating");
  }
});

// Scroll-Responsive CTA Track
let lastScrollY = window.scrollY;
let trackOffset = 0;

window.addEventListener("scroll", function () {
  const track = document.getElementById("ctaTrack");
  if (!track) return;

  const currentScrollY = window.scrollY;
  const maxShift = track.scrollWidth / 2;

  if (currentScrollY > lastScrollY) {
    trackOffset -= 18;
  } else if (currentScrollY < lastScrollY) {
    trackOffset += 18;
  }

  if (trackOffset < -maxShift) {
    trackOffset = 0;
  }

  if (trackOffset > 0) {
    trackOffset = -maxShift;
  }

  track.style.transform = `translateX(${trackOffset}px)`;

  lastScrollY = currentScrollY;
});

// Updates current year in the footer
const setCurrentYear = () => {
  if (!yearEl) return;
  yearEl.textContent = new Date().getFullYear();
};

// --- Event Listeners ---

// 1) set year on page load
setCurrentYear();

// 3) close mobile menu when a link is clicked
if (mobileMenu) {
  mobileMenu.addEventListener("click", (event) => {
    // if the clicked an <a> inside the menu, close the menu
    if (event.target.tagName === "A") {
      closeMobileMenu();
    }
  });
}
function closeMobileMenu() {
  const menu = document.getElementById("navMenu");
  const toggle = document.getElementById("menuToggle");

  menu.classList.remove("active");
  toggle.textContent = "☰";
}
