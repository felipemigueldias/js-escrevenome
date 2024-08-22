let cor;
function setup() {
  createCanvas(1400, 1000);
  background("220");
  cor = color("black");
}

function draw() {
  
  
  stroke(cor);
  fill(cor);
  
   if(keyIsPressed){ 
  cor = color(random(0,255),random(0,255),random(0,255));}
  //console.log(mouseIsPressed);
  if(mouseIsPressed){
      rect(mouseX,mouseY,20,30);
}
}
