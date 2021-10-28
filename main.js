status=""
img=""
function preload() {
    img=loadImage("dog_cat.jpg")
    
}

function setup() {
    
    canvas=createCanvas(500,500)
    canvas.center()
    objectDetector=ml5.objectDetector("cocossd", modelLoaded)
    document.getElementById("info").innerHTML="detecting objects"
}
function modelLoaded() {
 console.log("model is working")
 status="true"
 objectDetector.detect(img,gotResult)      
}
function gotResult(Error,result) {
    if (Error) {
        console.log(Error)
        
    }
    else {
        console.log(result)
    }
}

function draw() {
    image(img,0,0,500,500)
    fill("red")
    text("cat",300,100)
    fill("red")
    text("dog",200,50)











    


    
}