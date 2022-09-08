function setup(){
    canvas=createCanvas(280, 280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth= window.SpeechSynthesis;
}
function preload(){
    classifier=ml5.imageClassifier('DoodleNet');
}