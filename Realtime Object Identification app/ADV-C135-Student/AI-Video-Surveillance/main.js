video=""
status=""
function preload(){
    video = createVideo("video.mp4")
}
function setup(){
 canvas = createCanvas(480,380)
 canvas.center()

}
function draw(){
image(video,0,0,480,380)
}
function start(){
    objectDetector=ml5.objectDetector('cocossd',modelLoaded)
    document.getElementById("status").innerHTML="status:detecting objects"
}
function modelLoaded(){
  console.log("modelLoaded")
  status=true;
  video.loop(0);
  video.speed(2.5);
  video.volume(0.5);
}
