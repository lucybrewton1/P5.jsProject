function preload() {

}
function setup() {
    canvas=createCanvas(600,500);
    canvas.position(650,200);
    video=createCapture(VIDEO);
    video.hide();
}
function draw() {
    canvas.position(650,200);
    image(video,75,75,450,350);
    stroke(250,0,0);
    fill(250,0,0);
    circle(70,70,60);
    circle(530,430,60);
    stroke(0,0,250);
    fill(0,0,250);
    rect(300,415,200,20);
    rect(520,200,20,200);
    rect(100,60,200,20);
    rect(60,100,20,200);
}
function takePhoto() {
    save("P5.js Project");
}