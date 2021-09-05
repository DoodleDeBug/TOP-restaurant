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

  content.appendChild(container);
}

export default pageLoad;
