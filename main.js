x = 0;
y = 0;

screen_width = 0;
screen_height = 0;

apple = "";

speak_data = "";

to_number = "";

draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

 to_number = Number(content);
 if(Number.isInteger(to_number))
 {
   speak_data = "Started drawing apple";
   draw_apple = "set";
 }else{
  speak_data = "The speech has not recognized a number."

 }

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function setup() {
 screen_width = window.innerWidth;
 screen_height = window.innerHeight;

 createCanvas(screen_width, screen_height-150);
 canvas.position(0 - 150);
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    speak_data = to_number + "Apples drawn";

    speak();

    draw_apple = "";

    while (draw_apple == set)
    {
      i = 1;
      if(i <= to_number)
      {
        i = i+1;
      }
      x = Math.floor(Math.random()*700);
      y = Math.floor(Math.random()*400);

      image('apple.png')
    }
  }
}

function preload()
{
  loadImange("apple.png");
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
