function setup() {
  createCanvas(2400, 1000);
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
