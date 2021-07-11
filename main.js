var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("text_box").innerHTML = "";
    recognition.start();
}
recognition.onresult = function (event) {
    console.log(event);
    var Content = event.results[0][0].transcript;
    document.getElementById("text_box").innerHTML = Content;
    console.log(Content);

    speak();
}
function speak(){
    var synth = window.speechSynthesis;
speak_data = document.getElementById("text_box").value;
var UtterThis = new SpeechSynthesisUtterance(speak_data);
synth.speak(UtterThis)

Webcam.attach(camera)




}
camera = document.getElementById("camera");



Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
  });
  