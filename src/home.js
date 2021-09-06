function home() {
  const content = document.getElementById("content");

  const section = document.createElement("div");
  section.classList.add("section");

  const title = document.createElement("h2");
  title.innerText = "About Us";

  const p = document.createElement("p");
  p.innerText =
    "We are a resaurant specialising in seafood. We love fish. Come to our resaurant, it's very cool.";

  section.appendChild(title);
  section.appendChild(p);

  content.appendChild(section);
}

export default home;
