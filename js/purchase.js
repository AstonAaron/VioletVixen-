const books = [
  {
    title: "Book One",
    image: "https://via.placeholder.com/200",
    link: "https://amazon.com"
  },
  {
    title: "Book Two",
    image: "https://via.placeholder.com/200",
    link: "https://amazon.com"
  },
  {
    title: "Book Three",
    image: "https://via.placeholder.com/200",
    link: "https://amazon.com"
  },
  {
    title: "Book Four",
    image: "https://via.placeholder.com/200",
    link: "https://amazon.com"
  },
  {
    title: "Book Five",
    image: "https://via.placeholder.com/200",
    link: "https://amazon.com"
  },
  {
    title: "Book Six",
    image: "https://via.placeholder.com/200",
    link: "https://amazon.com"
  },
  {
    title: "Book Seven",
    image: "https://via.placeholder.com/200",
    link: "https://amazon.com"
  },
  {
    title: "Book Eight",
    image: "https://via.placeholder.com/200",
    link: "https://amazon.com"
  },
  {
    title: "Book Nine",
    image: "https://via.placeholder.com/200",
    link: "https://amazon.com"
  }
];

const container = document.getElementById("bookContainer");

books.forEach(book => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <img src="${book.image}" alt="${book.title}">
    <h3>${book.title}</h3>
    <button onclick="window.location.href='${book.link}'">Buy Now</button>
  `;

  container.appendChild(card);
});