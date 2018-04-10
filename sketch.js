/*
 *
 * Cinema Expandido WEB
 * Mi primer video (12 de febrero 2018)
 * Adrian Santuario Hernández
 * 
 *;
 
 * URL: 
 */


/*
 *****************************************
 *****************************************
 * VARIABLES
 *****************************************
 *****************************************
 */

// Video
var video;

var playing = false;



/*
 *****************************************
 *****************************************
 * LYFE CYCLE METHODS
 *****************************************
 *****************************************
 */


function preload() {

  //Video
  video = createVideo("assets/videos/fingers.mov");
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}

function setup() {
  //createCanvas(600, 400);
  createCanvas(displayWidth, displayHeight);
  initialize();



}

function draw() {
  background(255);


  drawVideo();


}


/*
 *****************************************
 *****************************************
 * INITIALIZE METHODS
 *****************************************
 *****************************************
 */


function initialize() {


  initializeVideo();
}


/*
 *****************************************
 *****************************************
 * VIDEO METHODS
 *****************************************
 *****************************************
 */


function initializeVideo() {

  //video.loop();
  video.hide();
}



function drawVideo() {

  print(video.duration());

  print(video.time());
  
  video.volume(0.5);
  
  video.time(mouseX/windowWidth);
  // Video centrado
  /*
  var correctionXS = (windowWidth / 2) - (video.width / 2);
  var correctionYS = (windowHeight / 2) - (video.height / 2);
  image(video, correctionXS, correctionYS);
  */

  //Pixel
  /*
  var correctionXS = (windowWidth / 2) - (video.width / 2);
  var correctionYS = (windowHeight / 2) - (video.height / 2);
  video.loadPixels();

  video.pixels[0] = 255;
  video.pixels[1] = 0;
  video.pixels[2] = 0;
  video.pixels[3] = 255;

  video.updatePixels();
  image(video, correctionXS, correctionYS);
  */

  //Pixels
  /*
  var correctionXS = (windowWidth / 2) - (video.width / 2);
  var correctionYS = (windowHeight / 2) - (video.height / 2);
  video.loadPixels();

  for (var y = 0; y < video.height; y++) {

    for (var x = 0; x < video.width; x++) {
      var index = (x + y * video.width) * 4;
      video.pixels[index] = 255;
      video.pixels[index + 1] = 0;
      video.pixels[index + 2] = 0;
      video.pixels[index + 3] = 255;

    }

  }
  video.updatePixels();
  image(video, correctionXS, correctionYS);
  */

  //Grano
  var correctionXS = (windowWidth / 2) - (video.width / 2);
  var correctionYS = (windowHeight / 2) - (video.height / 2);

  noStroke();
  fill(0);
  video.loadPixels();



  //var stepSize = round(map(mouseX, 0, windowWidth, 6, 64));
  var stepSize = round(map(video.time(), 0, video.duration(), 6, 64));
  for (var y = 0; y < video.height; y += stepSize) {

    for (var x = 0; x < video.width; x += stepSize) {
      push();

      //rotate(sin(video.time()));
      //translate(sin(video.time())*100, sin(video.time())*250);
      var index = (x + y * video.width) * 4;
      var darkness = (255 - video.pixels[index]) / 255;
      var radius = stepSize * darkness;
      ellipse(x + correctionXS, y + correctionYS, radius, radius);
      pop();
    }

  }



  //video.updatePixels();
  //image(video, correctionXS, correctionYS);



}