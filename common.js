const canvasDraft = document.getElementById('canvas-draft');
const canvasReal = document.getElementById('canvas-real');
let ctxreal = canvasReal.getContext("2d");
let ctxdraft = canvasDraft.getContext("2d");
let currentFunction
let dragging = false;
let present=-1;
let history=[];
let color;
let source;
let thickness;
let stamp;
let paste;
let currentPaintSize = 2;
let currentDrawColor = "black";

$(window).on("load",function(e){
    $("#furbygif").delay(1000).fadeOut(2000)
    $("#intro-text").delay(2000).fadeOut(2000)
    $(".instruction-panel").fadeIn(4000)
})

$('#canvas-draft').on("mousedown", function (e) {
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    console.log(mouseX)
    console.log(mouseY)
    currentFunction.onMouseDown([mouseX, mouseY], e)
    dragging = true;
})
$('#canvas-draft').on("mousemove", function (e) {
    if (dragging) {
        let mouseX = e.offsetX;
        let mouseY = e.offsetY;
        console.log(`x${mouseX}`)
        console.log(`y${mouseY}`)
        currentFunction.onDragging([mouseX, mouseY], e)
    }
})

$('#canvas-draft').on("mouseup", function (e) {
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    currentFunction.onMouseUp([mouseX, mouseY], e)
    capture()
    dragging = false;
    
})

class Painting {
    constructor() { }
    onMouseDown() { };
    onDragging() { };
    onMouseUp() { };
    onMouseLeave() { };
    //added
    onMouseFinish() { };
    onMouseDoubleClick(){};

}

