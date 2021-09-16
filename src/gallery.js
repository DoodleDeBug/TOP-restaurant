function gallery() {
  const content = document.getElementById("content");

  const section = document.createElement("div");
  section.classList.add("section");
  content.appendChild(section);

  const title = document.createElement("h2");
  title.innerText = "Gallery";
  section.appendChild(title);

  const images = [
    "../assets/tacos.jpg",
    "../assets/risotto.jpg",
    "../assets/calamari.jpg",
    "../assets/chococake.jpg",
    "../assets/skewers.jpg",
  ];

  const galleryContainer = document.createElement("div");
  galleryContainer.classList.add("gallery-container");
  section.appendChild(galleryContainer);

  images.forEach((img) => {
    const imgContainer = document.createElement("img");
    imgContainer.classList.add("image");
    imgContainer.src = img;

    galleryContainer.appendChild(imgContainer);
  });
}

export default gallery;
