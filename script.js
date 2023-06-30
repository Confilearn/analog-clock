// Repeat the setClock function in every one minutes
setInterval(setClock, 1000);

const hourHand = document.querySelector("#hourHand");
const minuteHand = document.querySelector("#minuteHand");
const secondHand = document.querySelector("#secondHand");

function setClock() {
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
  //   Calls the setRotation function on the element(hourhand, minutehand & secondhand)
  setRotation(secondHand, secondsRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio) {
  // The setProperty method changes the --rotation of its element(hourhand, minutehand & secondhand)
  // from 0 t0 (rotationRatio * 360)
  element.style.setProperty("--rotation", rotationRatio * 360);
}
