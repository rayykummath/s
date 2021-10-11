prediction="";

Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});

camera=document.getElementById("webcam");

Webcam.attach(camera);

function Captr_Img(){
    Webcam.snap(function(Img){
        document.getElementById("captured_img").innerHTML="<img id='Picture' src='"+Img+"'>";
    });
}

console.log("Ml5 version= ", ml5.version);

cla=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/2ZaHAF8UC/model.json", Modal_loded);

function Modal_loded(){
    console.log("MOOOOOOOOOOODDDDDDDDAAAAAAAAAAALLLLLLLLL LLLLLLLLOOOOOOOODDDDDDDDDDDEEEEEEDDDDDDDDDDDDDD");
}

function Convert_To_Emotion(){
    Pic=document.getElementById("Picture");
    cla.classify(Pic, gotResult);
}
function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        prediction=results[0].label;
        document.getElementById("emotion_result1").innerHTML=prediction;

        if(prediction=="Pointing"){
            document.getElementById("update_emoji").innerHTML="&#128070;"
        }
        if(prediction=="Okay"){
            document.getElementById("update_emoji").innerHTML="&#128076;"
        }
        if(prediction=="Good"){
            document.getElementById("update_emoji").innerHTML="&#128077;"
        }
        if(prediction=="Peace"){
            document.getElementById("update_emoji").innerHTML="&#9996;"
        }
        if(prediction=="Hi"){
            document.getElementById("update_emoji").innerHTML="&#128400;"
        }
    }
}