noseX=0;
noseY=0;
right_shoulderX=0;
rigth_shoulderY=0;

function preload(){
    clown_nose=loadImage("https://i.postimg.cc/NjDz7WSd/455-4557163-icon-clown-nose-circle-hd-png-download-removebg-preview.png")
    clown_hat=loadImage("https://i.postimg.cc/XqNZFBCH/91z-Yd-i-Oaf-L-AC-UL1500-removebg-preview.png")
    clown_shirt=loadImage("https://i.postimg.cc/GhWLnsmW/440af504-5844-48c1-9f4e-9068fd5dbf54-7ec5892972e6130a3f9c18949c823358-removebg-preview.png")
}

function setup(){
    canvas=createCanvas(500, 500)
    canvas.center();
    video=createCapture(VIDEO);
    video.size(500, 500);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotposes);
}

function draw(){
    image(video, 0, 0, 500, 500);
    image(clown_nose, noseX-35, noseY-25, 70, 60)
    image(clown_hat, noseX-75, noseY-250, 150, 150)
    image(clown_shirt, right_shoulderX-100, rigth_shoulderY-80, 400, 400)

}

function take_picture(){
    save("filteredpicture.png")
}

function modelLoaded(){
    console.log("PoseNet has been loaded");
}

function gotposes(results){
    if(results.length>0){
        console.log(results);
       noseX= results[0].pose.nose.x
       noseY=results[0].pose.nose.y
       console.log("nose x= " + noseX);
       console.log("nose y= " + noseY);

       right_shoulderX=results[0].pose.rightShoulder.x
       rigth_shoulderY=results[0].pose.rightShoulder.y

    }
}