function contact() {
  const content = document.getElementById("content");

  const section = document.createElement("div");
  section.classList.add("section");

  const title = document.createElement("h2");
  title.innerText = "Contact";

  section.appendChild(title);

  content.appendChild(section);
}

export default contact;
