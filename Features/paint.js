class Paint extends Painting {
    constructor(ctxreal) {
        super();
        this.ctxreal = ctxreal;
    }

    // On mouse down, ensure that the pen has these features
    onMouseDown(coord, event) {
        this.ctxreal.lineJoin = "round";
        this.ctxreal.lineCap = "round"
        this.ctxreal.drawing = true;
        this.ctxreal.shadowBlur = 3;
        this.ctxreal.shadowColor = color;
        this.ctxreal.strokeStyle = color;
        this.ctxreal.lineWidth = thickness;
        this.ctxreal.beginPath();
        this.ctxreal.moveTo(coord[0], coord[1]);
    }

    onDragging(coord, event) {
        this.draw(coord[0],coord[1]);
    }
    onMouseMove(){}
    onMouseUp(){}
    onMouseLeave(){}
    onMouseEnter(){}

    draw(x,y) {
        this.ctxreal.lineTo(x,y);
        this.ctxreal.moveTo(x,y);
        this.ctxreal.closePath();
        this.ctxreal.stroke();
    }};

$('#paint-button').on("click",function(e){
    currentFunction = new Paint(ctxreal);
    $("p").css("display", "none");
    $("#paint-inst").css("display","block");
});