function gallery() {
  const content = document.getElementById("content");

  const section = document.createElement("div");
  section.classList.add("section");

  const title = document.createElement("h2");
  title.innerText = "Gallery";

  section.appendChild(title);

  content.appendChild(section);
}

export default gallery;
