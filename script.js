"use strict";
let profile = document.querySelector("#picture");

// profile.src = "https://media1.giphy.com/media/QlQdLBS70XJcZY1fLF/giphy.gif?cid=6c09b952mii9co9sdr65b0fvoakxpziehydwbpw7siecphg2&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s";

let question = document.querySelector("#question");
let qrCode = document.querySelector("#qrCode");

question.innerHTML = "Can you help me out with some cash?";

//select button
let yesButton = document.querySelector("#btn-yes");
let noButton = document.querySelector("#btn-no");

//change value in buttons
yesButton.innerHTML = "Yes";
noButton.innerHTML = "No";

//QR button
let abaButton = document.querySelector("#abaButton");
let acButton = document.querySelector("#acButton");

//yes event
yesButton.addEventListener("click", () => {
  //change profile picture
  picture.src =
    "https://i.pinimg.com/originals/03/51/77/03517761c030f245ffa314589f86face.gif";
    //hidden button
  abaButton.classList.remove("hidden");
  acButton.classList.remove("hidden");
  yesButton.classList.add("hidden");
  noButton.classList.add("hidden");

  //Change question to title
  question.innerHTML = "You're a lifesaver! 💖";
});

//no event
noButton.addEventListener("click", () => {
  //change profile picture
  picture.src =
    "https://media1.giphy.com/media/QlQdLBS70XJcZY1fLF/giphy.gif?cid=6c09b952mii9co9sdr65b0fvoakxpziehydwbpw7siecphg2&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s";

    //hidden button
    noButton.classList.add("hidden");

  //Change question to tilte
  question.innerHTML = "អស់លុយចាយហើយ 😿";
});
