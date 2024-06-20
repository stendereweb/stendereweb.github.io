function setup() {
    createCanvas(2000, 980); // Set the size of the canvas
    background(220); // Set the background color
  }
  
  function draw() {
    noFill(); // No fill for shapes
  
    // Draw circles with random sizes, positions, stroke weights, and colors
    for (let i = 0; i < 10; i++) {
      stroke(random(255), random(255), random(255), random(100, 255));
      strokeWeight(random(1, 10));
      circle(random(width), random(height), random(10, 200));
    }
  
    // Draw lines with random endpoints, stroke weights, and colors
    for (let i = 0; i < 10; i++) {
      stroke(random(255), random(255), random(255), random(100, 255));
      strokeWeight(random(1, 5));
      line(random(width), random(height), random(width), random(height));
    }
  
    // Additional smaller circles to add detail
    for (let i = 0; i < 20; i++) {
      stroke(random(255), random(255), random(255), random(100, 255));
      strokeWeight(random(1, 3));
      circle(random(width), random(height), random(5, 50));
    }
  
    // Additional larger circles to add variety
    for (let i = 0; i < 5; i++) {
      stroke(random(255), random(255), random(255), random(100, 255));
      strokeWeight(random(5, 15));
      circle(random(width), random(height), random(100, 300));
    }
  
    // Additional lines for more complexity
    for (let i = 0; i < 5; i++) {
      stroke(random(255), random(255), random(255), random(100, 255));
      strokeWeight(random(3, 7));
      line(random(width), random(height), random(width), random(height));
    }
  }