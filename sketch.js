function setup() {
  createCanvas(1000, 1400);
  background("220");
}

function draw() {
  
  
  stroke("black");
  fill("black");
  
  //console.log(mouseIsPressed);
  if(mouseIsPressed){
      rect(mouseX,mouseY,20,30);
}
}
