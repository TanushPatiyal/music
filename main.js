function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();
video = createCapture(VIDEO);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
    }
    function draw() {
        image(video,0,0,600,500);
    }
    song = "";
    song_2 ="";

function preload(){
song =loadSound("music2.mp3");
song_2 =loadSound("music2.mp3"); }
function play(){
song.play() ;
}
function modelLoaded(){
    console.log('PoseNet Is Initialized')}
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX +"leftWristY = "+ leftWristY);
    }}