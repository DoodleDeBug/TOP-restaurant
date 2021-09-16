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
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("imgContainer");

    const image = document.createElement("img");
    image.classList.add("image");
    image.src = img;

    galleryContainer.appendChild(imgContainer);
    imgContainer.appendChild(image);
  });
}

export default gallery;
