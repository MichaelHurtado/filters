/*var a=0;
var va=1;
var b=0;
var vb=1;
function setup() {
  // put setup code here
 	createCanvas(900,600);
 	background(255,0,0);
}

function draw() {
  // put drawing code here
 	fill(random(255),random(255),random(255));
	ellipse(50+a,50+b,50,50);
	a=a+3*va;
	b=b+2*vb;
	if(a<0 || a>500){
		va=va*(-1);
	}
	if(b<0 || b>400){
		vb=vb*(-1);
	}
	//delay(50);
}

function delay(delay){
	var time = millis();
	while(millis()-time<=delay){
	};
}*/


/*
var theta;   
var osc, fft;

function setup() {
  createCanvas(900, 300);
  colorMode(HSB);
  osc = new p5.TriOsc(); 
  osc.amp(.5);

  fft = new p5.FFT();
  osc.start();
}

function draw() {
  background(255);
  
  //theta = map(mouseX,0,width,0,PI/2);

  
  translate(width/2, height);
  stroke((mouseX*230)/900,255,255);
  branch(100);
  var waveform = fft.waveform(); 
  var freq = map(mouseX, 0, width, 40, 880);
  osc.freq(freq);

  var amp = map(mouseY, 0, height, 1, .01);
  osc.amp(amp);
  if(keyIsPressed===false){
  	osc.amp(0);
  }
}

function branch(len) {
  

  var sw = map(len,2,120,1,6);
  strokeWeight(sw);
      
  line(0, 0, 0, -len);
  
  translate(0, -len);

  len *= 0.66;
  
  if (len > 2) {
  	//stroke(map(len,100,18,180,230),255,255);
    push();    
    //rotate(theta);   
    rotate(random(-PI/4,PI/4));
    branch(len);      
    pop();     
    
    push();
    //rotate(-theta);
    rotate(random(-PI/4,PI/4));
    branch(len);
    pop();
  }
}

*/

/*var capture;

function setup() {
  createCanvas(640, 480);
  capture = createCapture(VIDEO);
  capture.size(640, 480);
  capture.hide();
  
}

function draw() {
  //background(255);
  //image(capture, 0, 0, 640, 480);
  //filter('GRAY');
  loadPixels();
  capture.loadPixels();
  for (var y=0; y<height; y++) {
    for (var x=0; x<width; x++) {
      var i = y * width + x;
      var r = red(capture.pixels[i]);
      var g = green(capture.pixels[i]);
      var b = blue(capture.pixels[i]);
      pixels[i]=color(r,g,b); 
    }
  }
  updatePixels();
}*/

var capture;
var graph1;
var graph2;
var graph3;
var graph4;
var graph5;
var graph6;
 
function setup() {
  createCanvas(960,480);
  capture = createCapture(VIDEO);
  capture.size(640,480);
  //capture.hide();
  graph1 = createGraphics(640,480);
  graph2 = createGraphics(640,480);
  graph3 = createGraphics(640,480);
  graph4 = createGraphics(640,480);
  graph5 = createGraphics(640,480);
  graph6 = createGraphics(640,480);
}
 
function draw() {
  background(255);
  graph1.background(255);
  graph2.background(255);
  graph3.background(255);
  graph4.background(255);
  graph5.background(255);
  graph6.background(255);

  graph1.image(capture, 0, 0, 320, 240);
  graph2.image(capture, 0, 0, 320, 240);
  graph3.image(capture, 0, 0, 320, 240);
  graph4.image(capture, 0, 0, 320, 240);
  graph5.image(capture, 0, 0, 320, 240);
  graph6.image(capture, 0, 0, 320, 240);

  graph1.loadPixels();
 
  for (var i = 1; i < graph1.pixels.length; i += 4) {
    graph1.pixels[i] = 0;
  }
  for (var i = 2; i < graph1.pixels.length; i += 4) {
    graph1.pixels[i] = 0;
  }
  graph1.updatePixels();
  image(graph1, 0, 0);

  graph2.loadPixels();

  for (var i = 0; i < graph2.pixels.length; i += 4) {
    graph2.pixels[i] = 0;
  }
  for (var i = 2; i < graph2.pixels.length; i += 4) {
    graph2.pixels[i] = 0;
  }
  graph2.updatePixels();
  image(graph2, 320, 0);

  graph3.loadPixels();

  for (var i = 0; i < graph3.pixels.length; i += 4) {
    graph3.pixels[i] = 0;
  }
  for (var i = 1; i < graph3.pixels.length; i += 4) {
    graph3.pixels[i] = 0;
  }
  graph3.updatePixels();
  image(graph3, 0, 240);
  
  
  image(graph4, 320,240);

  graph5.loadPixels();
  for (var i = 0; i < graph5.pixels.length; i += 4) {
    graph5.pixels[i] = (graph1.pixels[i]*0.21+graph2.pixels[i+1]*0.72+graph3.pixels[i+2]*0.07);
  }
  for (var i = 1; i < graph5.pixels.length; i += 4) {
    graph5.pixels[i] = (graph1.pixels[i-1]*0.21+graph2.pixels[i]*0.72+graph3.pixels[i+1]*0.07);
  }
  for (var i = 2; i < graph5.pixels.length; i += 4) {
    graph5.pixels[i] = (graph1.pixels[i-2]*0.21+graph2.pixels[i-1]*0.72+graph3.pixels[i]*0.07);
  }
  graph5.updatePixels();
  image(graph5, 640, 0);


  var treshold = map(mouseX,0,640,0,255);

  graph6.loadPixels();
  for (var i = 0; i < graph6.pixels.length; i += 4) {
    graph6.pixels[i] = (graph1.pixels[i]*0.21+graph2.pixels[i+1]*0.72+graph3.pixels[i+2]*0.07);
    if (graph6.pixels[i]<treshold) {
      graph6.pixels[i]=0;  
    }
    else{
      graph6.pixels[i]=255;
    }
  }
  for (var i = 1; i < graph6.pixels.length; i += 4) {
    graph6.pixels[i] = (graph1.pixels[i-1]*0.21+graph2.pixels[i]*0.72+graph3.pixels[i+1]*0.07);
    if (graph6.pixels[i]<treshold) {
      graph6.pixels[i]=0;  
    }
    else{
      graph6.pixels[i]=255;
    }
  }
  for (var i = 2; i < graph6.pixels.length; i += 4) {
    graph6.pixels[i] = (graph1.pixels[i-2]*0.21+graph2.pixels[i-1]*0.72+graph3.pixels[i]*0.07);
    if (graph6.pixels[i]<treshold) {
      graph6.pixels[i]=0;  
    }
    else{
      graph6.pixels[i]=255;
    }
  }
  graph6.updatePixels();
  image(graph6, 640, 240);

}