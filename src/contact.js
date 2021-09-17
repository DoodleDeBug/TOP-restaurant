function contact() {
  const content = document.getElementById("content");

  const section = document.createElement("div");
  section.classList.add("section");
  content.appendChild(section);

  const title = document.createElement("h2");
  title.innerText = "Contact";
  section.appendChild(title);

  const address = document.createElement("div");
  address.classList.add("address-box", "contact");
  address.innerHTML =
    "<h3>Address</h3><p>Awesome Restaurant</p><p>1 Awesome Lane, Coolville, CO0 1VL</p><p>020 743 8831</p><p><b>awesomefood@email.com</b></p>";
  section.appendChild(address);

  const hours = document.createElement("div");
  hours.classList.add("hours-box", "contact");
  hours.innerHTML =
    '<h3>Opening Hours</h3><div class="hours-section"><h4>Lunch</h4><ul><li>Monday-Friday: 11:50am - 3pm</li><li>Weekends and Bank Holidays: 12pm - 4pm</li></ul></div><div class="hours-section"><h4>Dinner</h4><ul><li>Monday-Friday: 5:30am - 9pm</li><li>Weekends and Bank Holidays: 6pm - 11pm</li></ul></div>';
  section.appendChild(hours);
}

export default contact;
