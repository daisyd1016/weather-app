function celsius(event) {
  event.preventDefault();
  let number = document.querySelector(".number");
  number.innerHTML = "16° ";
}
let degrees = document.querySelector("#cel");
degrees.addEventListener("click", celsius);

function fahrenheit(event) {
  event.preventDefault();
  let number = document.querySelector(".number");
  number.innerHTML = "61° ";
}
let temp = document.querySelector("#fah");
temp.addEventListener("click", fahrenheit);
