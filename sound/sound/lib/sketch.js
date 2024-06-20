

let userHasClicked = false;
let drumsSound;
let pianoSound;

let circleDrumsX;
let circleDrumsY;

let circlePianoX;
let circlePianoY;

function preload() {
  drumsSound = loadSound("assets/drums.mp3");
  pianoSound = loadSound("assets/piano.mp3")

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(60);
  textAlign(CENTER);
  textStyle(BOLD);

  circleDrumsX = random(width);
  circleDrumsY = random(height);

  circlePianoX = random(width);
  circlePianoY = random(height);
}

function draw() {
  background("lightblue");

  fill("red");
  circle(circleDrumsX, circleDrumsY, 80);

  fill("blue");
  circle(circlePianoX, circlePianoY, 80);



  if (userHasClicked == false) {
    text("Please click to start...", width / 2, height / 2);
  } else {


    if (drumsSound.isPlaying() == false) {
      drumsSound.play();
    }
    let distanceDrums = dist(mouseX, mouseY, circleDrumsX, circleDrumsY);
    let volumeDrums = map(distanceDrums, 0, 200, 1, 0);
    volumeDrums = constrain(volumeDrums, 0, 1);
    drumsSound.setVolume(volumeDrums);



    if (pianoSound.isPlaying() == false) {
      pianoSound.play();
    }
    let distancePiano = dist(mouseX, mouseY, circlePianoX, circlePianoY);
    let volumePiano = map(distancePiano, 0, 200, 1, 0);
    volumePiano = constrain(volumePiano, 0, 1);
    pianoSound.setVolume(volumePiano);

    print("drum:" + volumeDrums)
  }




}
function mouseClicked() {
  userHasClicked = true;
}
