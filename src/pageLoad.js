function pageLoad() {
  const content = document.getElementById("content");

  const headline = document.createElement("h1");
  headline.innerText = "My Awesome Restaurant";

  const copy = document.createElement("p");
  copy.innerText = "Fresh, Delicious, Awesome Food";

  const container = document.createElement("div");
  container.classList.add("container");
  container.appendChild(headline);
  container.appendChild(copy);

  const nav = document.createElement("nav");
  nav.classList.add("navbar");

  const ul = document.createElement("ul");
  nav.appendChild(ul);

  let navbtns = ["Home", "Menu", "Gallery", "Contact"];

  navbtns.forEach((btn) => {
    const li = document.createElement("li");
    li.innerText = btn;
    li.id = btn.toLowerCase();
    ul.appendChild(li);
  });

  content.appendChild(container);
  content.appendChild(nav);
}

export default pageLoad;
