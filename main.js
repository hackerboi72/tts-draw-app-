var x = 0 
var y = 0
var draw_circle = ""
var draw_rectangle = ""
var SpeechRecognition = window.webkitSpeechRecognition; 
var recognition = new SpeechRecognition()


function start() {
    document.getElementById("status").innerHTML = "System Is Listening, Please Speak"
    recognition.start(); 
}
recognition.Onresult = function(event) {
    console.log(event) 
    var content = event.results[0][0].transcript 
    document.getElementById("status").innerHTML = "Speech Has Been Recognised As" + content   
    if(content== "circle") {
        x = math.floor(Math.random()*900)
        y = math.floor(Math.random()*600)
        document.getElementById("status").innerHTML = "Starting Drawing Circle"
        draw_circle = "set"
    }
    if(content== "rectangle") {
        x = math.floor(Math.random()*900)
        y = math.floor(Math.random()*600)
        document.getElementById("status").innerHTML = "Starting Drawing Rectangle"
        draw_rectangle = "set"
    }
}
function setup() {
 canvas = createCanvas(900,600)
}
function draw() {
    if(draw_circle=="set") {
        radius = Math.floor(Math.random()*100) 
        circle(x,y,radius) 
        document.getElementById("status").innerHTML = "Circle Has Been Drawn"
        draw_circle = "" 
    }
    if(draw_rectangle=="set") { 
        rect(x,y,70,50) 
        document.getElementById("status").innerHTML = "Rectangle Has Been Drawn"
        draw_rectangle = "" 
    }
}
