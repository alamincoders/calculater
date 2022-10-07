let string = "";
const buttons = document.querySelectorAll(".button");
const closeIcon = document.querySelectorAll(".closeIcon");
// const closeBtn = document.getElementById("closeBtn");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML === "=") {
      string = eval(string);
      document.querySelector(".input").value = string;
    } else if (e.target.innerHTML === "AC") {
      string = "";
      document.querySelector(".input").value = string;
    } else if (e.target === closeBtn) {
      string = string.slice(0, -1);
      document.querySelector(".input").value = string;
    } else {
      console.log(e.target);
      string = string + e.target.innerHTML;
      document.querySelector(".input").value = string;
    }
  });
});
