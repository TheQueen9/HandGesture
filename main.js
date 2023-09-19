Webcam.set({
width:350,
height:300,
image_format: 'png',
png_quality: 90
})

cam = document.getElementById("camera")
Webcam.attach(cam)

function take_snapshot (){
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id = "capture_snapshot" src = "'+data_uri+'">'
    })
}

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/aM-qc9oKQ/model.json", model_loaded)
function model_loaded() {
    console.log("Model is now Loaded")
}

function Predict_Gesture(){
    click_image = document.getElementById("capture_snapshot")
    classifier.classify(click_image, gotResults)
}

function gotResults(error,results){
if (error) {
    console.error(error)
}
else {
    console.log(results)
    document.getElementById("result_gesture_name1").innerHTML = results[0].label
    document.getElementById("result_gesture_name2").innerHTML = results[1].label
    if (results[0].label == "Up") {
        document.getElementById("update_gesture1").innerHTML = "&#9757;"
    }
    if (results[0].label == "Fist") {
document.getElementById("update_gesture1").innerHTML = "&#9994;"
    }
    if (results[0].label == "Writing") {
        document.getElementById("update_gesture1").innerHTML = "&#9997;"
    }
    if (results[1].label == "Up") {
        document.getElementById("update_gesture2").innerHTML = "&#9757;"
    }
    if (results[1].label == "Fist") {
document.getElementById("gesture2").innerHTML = "&#9994;"
    }
    if (results[1].label == "Writing") {
        document.getElementById("update_gesture2").innerHTML = "&#9997;"
    }
}
}