const image = document.querySelector("img");

image.addEventListener("load", function (event) {
  console.log("Image loaded!", event);
});

const audio = document.querySelector("audio");

audio.addEventListener("play", function (event) {
  console.log("Playing", event);
});

const video = document.querySelector("video");

video.addEventListener("pause", function (event) {
  console.log("Pausing", event);
});

video.addEventListener("time", function (event) {
  console.log("Time event:", event);
});

const audio = document.querySelector("audio");
const button = document.querySelector("button");
button.addEventListener("click", function (event) {
  audio.play();
});

const audio = document.querySelector("audio");
const button = document.querySelector("button");
button.addEventListener("click", function (event) {
  audio.pause();
});

const audio = document.querySelector("audio");
const button = document.querySelector("button";
button.addEventListener("click", function (event) {
  audio.stop();
});
