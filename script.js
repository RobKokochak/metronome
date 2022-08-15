const click = new Audio('click.mp3');
const button = document.getElementById('button');
let tempo;
let interval;
// the timing is ok but not exact - setTimeout is not super reliable for this application

button.addEventListener("click", function handleClick() {
  tempo = 60000 / parseInt(document.getElementById("bpm").value);
  clearInterval(interval);
  interval = setInterval(function () {
    click.play();
  }, tempo);
});