import pageLoad from "./pageLoad";
import home from "./home";
import gallery from "./gallery";
import menu from "./menu";
import contact from "./contact";

pageLoad();

//navbar activation
(function () {
  const homebtn = document.getElementById("home");
  const menubtn = document.getElementById("menu");
  const gallerybtn = document.getElementById("gallery");
  const contactbtn = document.getElementById("contact");

  let btns = [homebtn, menubtn, gallerybtn, contactbtn];

  btns.forEach((btn) => {
    let name = btn.id;
    btn.addEventListener("click", () => {
      console.log(`clicked btn ${name}`);
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
