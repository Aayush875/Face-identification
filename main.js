camera=document.getElementById("camera")

Webcam.set({
    width:350,
    height:300,
    image_format:"jpg",
    jpg_quality:95
})
Webcam.attach(camera)

function capture() {

    Webcam.snap(function(data_uri) {
        document.getElementById("output").innerHTML= '<img id="object_recognise" src="'+data_uri+'"/>';
    });
}

console.log("ml5 version is ",ml5.version)

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/qRjMRWXch/model.json",modelloaded)

function modelloaded() {
    console.log("Model is loaded")
}

function identify()
{
    img=document.getElementById("object_recognise")
    classifier.classify(img,gotresult)
}

function gotresult(error,result)
{
    if(error) {
        console.error(error)
    }
    else{
        console.log(result)
        document.getElementById("object").innerHTML=result[0].label
        document.getElementById("accuracy").innerHTML=result[0].confidence.toFixed(3)
    }
}