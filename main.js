function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/4F1KVlHA4/', modelReady);
}
function modelReady() {
   classifier.classify(gotResults);
}
function gotResults(error, results) {
    console.log('Got Results');    
}