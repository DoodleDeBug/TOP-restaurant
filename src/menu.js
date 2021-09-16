function menu() {
  const content = document.getElementById("content");

  const section = document.createElement("div");
  section.classList.add("section");
  content.appendChild(section);

  const title = document.createElement("h2");
  title.innerText = "Menu";
  section.appendChild(title);

  let mains = {
    "Salmon and Risotto": "£15.00",
    "Fish Tacos": "£7.00",
    "Skewered Shrimp": "£10.00",
    "Calamari Plate": "£8.00",
  };

  // let salads = {
  //   "Crab Salad": "£9.00",
  //   "Green Salad": "£3.00",
  // };

  let drinks = {
    "Soft Drink": "£2.00",
    "Bottled Water": "£1.00",
  };

  let desserts = {
    "Mini Carrot Cake": "£4.50",
    "Mini Chocolate Cake": "£4.50",
    "Mini Lemon Cake": "£4.50",
  };

  let menuSectionsTitles = {
    Mains: mains,
    // Salads: salads,
    Drinks: drinks,
    Desserts: desserts,
  };

  const keys = Object.keys(menuSectionsTitles);

  keys.forEach((key) => {
    const menuSection = document.createElement("div");
    menuSection.classList.add("menu-section");

    const menuSectionTitle = document.createElement("h3");
    menuSectionTitle.innerText = key;

    const menuSectionContent = document.createElement("div");
    menuSectionContent.classList.add("menu-section-content");

    const ul = document.createElement("ul");
    menuSectionContent.appendChild(ul);

    const menuItems = Object.keys(menuSectionsTitles[key]);
    menuItems.forEach((item) => {
      const li = document.createElement("li");
      li.innerText = `${item}  |  ${menuSectionsTitles[key][item]}`;
      ul.appendChild(li);
    });

    menuSection.appendChild(menuSectionTitle);
    menuSection.appendChild(menuSectionContent);

    section.appendChild(menuSection);
  });
}

export default menu;
