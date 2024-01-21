let letters = []; // Create an array to store letters
let delayFrames = 120; // 60 frames per second * 2 seconds
let addedW = false; // Flag to track if "W" has been added
let delayBetweenLetters = 30; // 60 frames per second * 1 second
let nextLetterTime = 0; // Track when to add the next letter
let lettersToAdd = ["R","O","C","E","S","S"," ","J","O","U","R","N","A","L"]; // Letters to add

function setup() {
  var Canvas = createCanvas(1000, 90);
  Canvas.parent('SketchContainer');
  frameRate(60)
  textSize(20); // Set the text size to 20
  textFont('Courier new');
}

function draw(){
  background(211, 187, 187);

  if (frameCount < delayFrames && !addedW) {
    letters.push("P"); // Add "W" only once
    addedW = true; // Set the flag to indicate that "W" has been added
    nextLetterTime = frameCount + delayBetweenLetters;
  }

  if (frameCount >= nextLetterTime && lettersToAdd.length > 0) {
    letters.push(lettersToAdd.shift()); // Add the next letter from the array
    nextLetterTime = frameCount + delayBetweenLetters;
  }

  const spacing = 20;
  // Display the letters from the array
  for (let i = 0; i < letters.length; i++) {
    text(letters[i], 40 + i * spacing, 60);

     
  console.log("Sketch 1 is running");
  }
}
