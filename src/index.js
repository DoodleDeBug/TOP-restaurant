import pageLoad from "./pageLoad";
import home from "./home";
import gallery from "./gallery";
import menu from "./menu";
import contact from "./contact";

pageLoad();

//navbar activation
(function () {
  const content = document.querySelector("#content");

  const homebtn = document.getElementById("home");
  const menubtn = document.getElementById("menu");
  const gallerybtn = document.getElementById("gallery");
  const contactbtn = document.getElementById("contact");

  let btns = [homebtn, menubtn, gallerybtn, contactbtn];

  btns.forEach((btn) => {
    let name = btn.id;
    btn.addEventListener("click", () => {
      if (document.querySelector(".section") != null) {
        const section = document.querySelector(".section");
        content.removeChild(section);
      }

      switch (name) {
        case "home":
          home();
          break;
        case "menu":
          menu();
          break;
        case "gallery":
          gallery();
          break;
        case "contact":
          contact();
          break;
        default:
          console.log("not work");
      }
    });
  });
})();
