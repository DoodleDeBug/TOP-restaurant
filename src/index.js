import pageLoad from "./pageLoad";
import home from "./home";

pageLoad();

//navbar activation
(function () {
  const homebtn = document.getElementById("home");
  const menubtn = document.getElementById("menu");
  const gallerybtn = document.getElementById("gallery");
  const contactbtn = document.getElementById("contact");

  let btns = [homebtn, menubtn, gallerybtn, contactbtn];

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      console.log(`clicked btn ${btn.id}`);
      home();
    });
  });
})();
