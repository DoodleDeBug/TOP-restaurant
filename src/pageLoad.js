function pageLoad() {
  const content = document.getElementById("content");

  const headline = document.createElement("h1");
  headline.innerText = "My Awesome Restaurant";

  const copy = document.createElement("p");
  copy.innerText = "Fresh, Delicious, Awesome Food";

  content.appendChild(headline);
  content.appendChild(copy);
}

export default pageLoad;
