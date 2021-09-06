function menu() {
  const content = document.getElementById("content");

  const section = document.createElement("div");
  section.classList.add("section");

  const title = document.createElement("h2");
  title.innerText = "Menu";

  const menuSection = document.createElement("div");
  menuSection.classList.add("menu-section");

  const menuSectionTitle = document.createElement("h3");
  menuSectionTitle.innerText = "Mains";

  const menuSectionContent = document.createElement("div");
  menuSectionContent.classList.add("menu-section-content");
  menuSectionContent.innerText = "menu content";

  menuSection.appendChild(menuSectionTitle);
  menuSection.appendChild(menuSectionContent);

  section.appendChild(title);
  section.appendChild(menuSection);

  content.appendChild(section);
}

export default menu;
