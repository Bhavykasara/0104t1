/*--Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});

Webcam.attach("#camera");



Webcam.snap({
    function(data_url){
        document.getElementById("camera").innerHTML='<img src="'+data_url+'">';
    }
});--*/

function selfie() {
    vedio=document.getElementById("camera");
    navigator.mediaDevices.getUserMedia({video:true})
    .then(stream=> {
        vedio.srcObject=stream;
    }).catch(function(err){
        console.log("Something went wrong");
        console.log(err);
    });
}

console.log("ml5 version",ml5.version);
