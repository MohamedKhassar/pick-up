let input = document.querySelector("input");
let output = document.querySelector("ul");
let h1 = document.querySelector(".alert");
const btn = document.querySelector(".pick");

// This function checks if the input is empty or not.
// If empty, it displays a toast message asking the user to input a name.
// If not empty, it adds the input name to the output list.
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value == "") {
    Toastify({ 
      text: "input should be written",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top",
      position: "center",
      stopOnFocus: true,
      style: {
        background: "red",
      },
      onClick: function () {},
    }).showToast();
  } else {
    output.appendChild(document.createElement("li")).innerHTML = input.value;
    input.value = "";
    if (output.childElementCount == 1) {
      h1.innerHTML = "the participants";
      h1.classList.replace("alert", "success");
      btn.style.display = "block";
    }
  }
  //  pickUp()
});
// This function is used to handle the 'onClick' event for the 'add name' button.
// When the button is clicked, it calls the 'addNames' function to perform the name addition.
document.querySelector(".pick").addEventListener("click", () => {
  let ul = document.querySelectorAll("li");
  let random = Math.floor(Math.random() * ul.length);
  console.log(random);
  let li = ul[random];
  Toastify({
    text: li.innerHTML,
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "top",
    position: "center",
    stopOnFocus: true,
    style: {
      background: "green",
    },
    onClick: function () {},
  }).showToast();
  li.remove();
  if (output.childElementCount == 0) {
    h1.innerHTML = "add name";
    h1.classList.replace("success", "alert");
    btn.style.display = "none";
  }
});
