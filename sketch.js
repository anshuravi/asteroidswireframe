let mode = 0;
let noiseMax = 5;
let aoff = 0;
var inc = 0.1;
var scl = 10;
var cols, rows;

let landscape; 
let back;
let backdrop;
let vortex;
let timer = 10;

function preload (){
  landscape = loadImage('egyptt.png')
  back = loadImage('victorian.png')
  backdrop = loadImage('rome.png')
  vortex = loadImage('vortex.gif')
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  
  switch (mode) {
    case 0:
      background(vortex);
      stroke(255);
  fill(255);
  textSize(55);
  textAlign(CENTER);
  text('Asteroids of the Vortex', width*0.5, height*0.33);
  textSize(25);
  text('Press "Any Key" To Start Game', width*0.5, height*0.66);
      break;
    case 1:
      scene1();
      break;
    case 2:
      scene2();
      break;
    case 3:
      scene3();   
      break;
    default:
      //  
  }
  
  
  /*
  if (mode == 0) {
    // ready
  }
  else if (mode == 1) {
    scene1();
  }
  else if (mode == 2) {
    scene2();
  }
  else if (mode == 3) {
    scene3();
  }
  */
}

function keyPressed() {
 mode++
}

function scene1() {
  background(landscape);
  stroke(0);
  fill(255, 255, 255);
  textSize(50);
  textAlign(CENTER);
  text('Destory the asteroids!', width*0.5, height*0.1);
  textSize(20);
  text('Press any key to travel through time.', width*0.5, height*0.95);
  ellipseMode(CENTER);
  ellipse(width/2, height/2, 40);
  stroke(255);
  fill(255);
   textAlign(CENTER, CENTER);
  textSize(100);
  fill(255)
  text(timer, width/2, 150);
  
  if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer --;
  }
  if (timer == 0) {
    text("GAME OVER", width/2, height*0.7);
    
  }
  
  push()
  translate(width/2, height/2);
stroke(182, 66, 245, 150);
strokeWeight(40)
noFill();
beginShape();
for (let a = 0; a < TWO_PI; a += 0.001) {
  let xoff = map(cos(a), -1, 1, 0, noiseMax) +
             map(cos(aoff), -1, 1, 0, noiseMax);
  let yoff = map(sin(a), -1, 1, 0, noiseMax) +
             map(sin(aoff), -1, 1, 0, noiseMax);
  let r = map(noise(xoff, yoff), 0, 1, 100, 700);
  let x = r * cos(a);
  let y = r * sin(a);
  vertex(x, y);
}
endShape(CLOSE);
aoff += 0.01;
   pop()

   push()
   translate(width/2, height/2);
 stroke(3, 140, 252, 150);
 strokeWeight(40)
 noFill();
 beginShape();
 for (let a = 0; a < TWO_PI; a += 0.001) {
   let xoff = map(cos(a), -1, 1, 0, noiseMax) +
              map(cos(aoff), -1, 1, 0, noiseMax);
   let yoff = map(sin(a), -1, 1, 0, noiseMax) +
              map(sin(aoff), -1, 1, 0, noiseMax);
   let r = map(noise(xoff, yoff), 0, 1, 200, 700);
   let x = r * cos(a);
   let y = r * sin(a);
   vertex(x, y);
 }
 endShape(CLOSE);
 aoff += 0.01;
    pop()

    push()
    translate(width/2, height/2);
   stroke(182, 66, 245, 150);
   strokeWeight(40)
   noFill();
   beginShape();
   for (let a = 0; a < TWO_PI; a += 0.001) {
    let xoff = map(cos(a), -1, 1, 0, noiseMax) +
               map(cos(aoff), -1, 1, 0, noiseMax);
    let yoff = map(sin(a), -1, 1, 0, noiseMax) +
               map(sin(aoff), -1, 1, 0, noiseMax);
    let r = map(noise(xoff, yoff), 0, 1, 300, 700);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
   }
   endShape(CLOSE);
   aoff += 0.01;
     pop()

     push()
     translate(width/2, height/2);
    stroke(3, 140, 252, 150);
    strokeWeight(40)
    noFill();
    beginShape();
    for (let a = 0; a < TWO_PI; a += 0.001) {
     let xoff = map(cos(a), -1, 1, 0, noiseMax) +
                map(cos(aoff), -1, 1, 0, noiseMax);
     let yoff = map(sin(a), -1, 1, 0, noiseMax) +
                map(sin(aoff), -1, 1, 0, noiseMax);
     let r = map(noise(xoff, yoff), 0, 1, 400, 700);
     let x = r * cos(a);
     let y = r * sin(a);
     vertex(x, y);
    }
    endShape(CLOSE);
    aoff += 0.01;
      pop()
  
}

function scene2() {
   background(back);
  stroke(0);
  fill(255, 255, 255);
  textSize(50);
  textAlign(CENTER);
  text('Destory the asteroids!', width*0.5, height*0.1);
  textSize(20);
  text('Press any key to travel through time.', width*0.5, height*0.95);
  ellipseMode(CENTER);
  ellipse(width/2, height/2, 40);
  stroke(255);
  fill(255);
   textAlign(CENTER, CENTER);
  textSize(100);
  fill(255)
  text(timer, width/2, 150);
  
  if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer --;
  }
  if (timer == 0) {
    text("GAME OVER", width/2, height*0.7);
    
  }
  
  push()
  translate(width/2, height/2);
stroke(182, 66, 245, 150);
strokeWeight(40)
noFill();
beginShape();
for (let a = 0; a < TWO_PI; a += 0.001) {
  let xoff = map(cos(a), -1, 1, 0, noiseMax) +
             map(cos(aoff), -1, 1, 0, noiseMax);
  let yoff = map(sin(a), -1, 1, 0, noiseMax) +
             map(sin(aoff), -1, 1, 0, noiseMax);
  let r = map(noise(xoff, yoff), 0, 1, 100, 700);
  let x = r * cos(a);
  let y = r * sin(a);
  vertex(x, y);
}
endShape(CLOSE);
aoff += 0.01;
   pop()

   push()
   translate(width/2, height/2);
 stroke(3, 140, 252, 150);
 strokeWeight(40)
 noFill();
 beginShape();
 for (let a = 0; a < TWO_PI; a += 0.001) {
   let xoff = map(cos(a), -1, 1, 0, noiseMax) +
              map(cos(aoff), -1, 1, 0, noiseMax);
   let yoff = map(sin(a), -1, 1, 0, noiseMax) +
              map(sin(aoff), -1, 1, 0, noiseMax);
   let r = map(noise(xoff, yoff), 0, 1, 200, 700);
   let x = r * cos(a);
   let y = r * sin(a);
   vertex(x, y);
 }
 endShape(CLOSE);
 aoff += 0.01;
    pop()

    push()
    translate(width/2, height/2);
   stroke(182, 66, 245, 150);
   strokeWeight(40)
   noFill();
   beginShape();
   for (let a = 0; a < TWO_PI; a += 0.001) {
    let xoff = map(cos(a), -1, 1, 0, noiseMax) +
               map(cos(aoff), -1, 1, 0, noiseMax);
    let yoff = map(sin(a), -1, 1, 0, noiseMax) +
               map(sin(aoff), -1, 1, 0, noiseMax);
    let r = map(noise(xoff, yoff), 0, 1, 300, 700);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
   }
   endShape(CLOSE);
   aoff += 0.01;
     pop()

     push()
     translate(width/2, height/2);
    stroke(3, 140, 252, 150);
    strokeWeight(40)
    noFill();
    beginShape();
    for (let a = 0; a < TWO_PI; a += 0.001) {
     let xoff = map(cos(a), -1, 1, 0, noiseMax) +
                map(cos(aoff), -1, 1, 0, noiseMax);
     let yoff = map(sin(a), -1, 1, 0, noiseMax) +
                map(sin(aoff), -1, 1, 0, noiseMax);
     let r = map(noise(xoff, yoff), 0, 1, 400, 700);
     let x = r * cos(a);
     let y = r * sin(a);
     vertex(x, y);
    }
    endShape(CLOSE);
    aoff += 0.01;
      pop()
}


function scene3() {
   background(backdrop);
  stroke(0);
  fill(255, 255, 255);
  textSize(50);
  textAlign(CENTER);
  text('Destory the asteroids!', width*0.5, height*0.1);
  textSize(20);
  text('Press any key to travel through time.', width*0.5, height*0.95);
  ellipseMode(CENTER);
  ellipse(width/2, height/2, 40);
  stroke(255);
  fill(255);
   textAlign(CENTER, CENTER);
  textSize(100);
  fill(255)
  text(timer, width/2, 150);
  
  if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer --;
  }
  if (timer == 0) {
    text("GAME OVER", width/2, height*0.7);
    
  }
  
  push()
  translate(width/2, height/2);
stroke(182, 66, 245, 150);
strokeWeight(40)
noFill();
beginShape();
for (let a = 0; a < TWO_PI; a += 0.001) {
  let xoff = map(cos(a), -1, 1, 0, noiseMax) +
             map(cos(aoff), -1, 1, 0, noiseMax);
  let yoff = map(sin(a), -1, 1, 0, noiseMax) +
             map(sin(aoff), -1, 1, 0, noiseMax);
  let r = map(noise(xoff, yoff), 0, 1, 100, 700);
  let x = r * cos(a);
  let y = r * sin(a);
  vertex(x, y);
}
endShape(CLOSE);
aoff += 0.01;
   pop()

   push()
   translate(width/2, height/2);
 stroke(3, 140, 252, 150);
 strokeWeight(40)
 noFill();
 beginShape();
 for (let a = 0; a < TWO_PI; a += 0.001) {
   let xoff = map(cos(a), -1, 1, 0, noiseMax) +
              map(cos(aoff), -1, 1, 0, noiseMax);
   let yoff = map(sin(a), -1, 1, 0, noiseMax) +
              map(sin(aoff), -1, 1, 0, noiseMax);
   let r = map(noise(xoff, yoff), 0, 1, 200, 700);
   let x = r * cos(a);
   let y = r * sin(a);
   vertex(x, y);
 }
 endShape(CLOSE);
 aoff += 0.01;
    pop()

    push()
    translate(width/2, height/2);
   stroke(182, 66, 245, 150);
   strokeWeight(40)
   noFill();
   beginShape();
   for (let a = 0; a < TWO_PI; a += 0.001) {
    let xoff = map(cos(a), -1, 1, 0, noiseMax) +
               map(cos(aoff), -1, 1, 0, noiseMax);
    let yoff = map(sin(a), -1, 1, 0, noiseMax) +
               map(sin(aoff), -1, 1, 0, noiseMax);
    let r = map(noise(xoff, yoff), 0, 1, 300, 700);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
   }
   endShape(CLOSE);
   aoff += 0.01;
     pop()

     push()
     translate(width/2, height/2);
    stroke(3, 140, 252, 150);
    strokeWeight(40)
    noFill();
    beginShape();
    for (let a = 0; a < TWO_PI; a += 0.001) {
     let xoff = map(cos(a), -1, 1, 0, noiseMax) +
                map(cos(aoff), -1, 1, 0, noiseMax);
     let yoff = map(sin(a), -1, 1, 0, noiseMax) +
                map(sin(aoff), -1, 1, 0, noiseMax);
     let r = map(noise(xoff, yoff), 0, 1, 400, 700);
     let x = r * cos(a);
     let y = r * sin(a);
     vertex(x, y);
    }
    endShape(CLOSE);
    aoff += 0.01;
      pop()

}




