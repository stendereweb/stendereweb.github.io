let circleX = 100;
let circleY = 100;
let diameter = 50;


function setup(){
    createCanvas(windowWidth,
        windowHeight);

}

function draw() {
    background(0);

    fill("white")
    noStroke();

    circle (mouseX, mouseY, 50);
    stroke("black");
    noFill();
    circle(circleX, circleY, 50);

    if (mouseX > circleX - 25 && mouseX < circleX + 25) {
        if (mouseY > circleY - 25 && mouseY < circleY + 25) {

            // the mouse has entered the circle
            // move the circle to a new random location

            circleX = random(0, width);
            circleY = random(0, height);
            diameter = diameter -10 

    }

}
}