class DrawLine extends Painting{
    constructor(ctxreal) {
        super();
        this.context = ctxreal;
    }
    onMouseDown(coord, event) {
        
        //this.context.lineJoin = "round";
        this.context.lineWidth = thickness;
        this.context.beginPath();
        this.context.strokeStyle = color;
        this.context.shadowBlur=0;
        this.context.moveTo(coord[0], coord[1]);
        this.draw(coord[0],coord[1]);
    }
    onDragging(coord, event) {
        this.draw(coord[0],coord[1]);
    }
    onMouseMove(){}
    onMouseUp(){}
    onMouseLeave(){}
    onMouseEnter(){}

    draw(x,y) {
        this.context.lineTo(x,y);
        this.context.moveTo(x,y);
        this.context.closePath();
        this.context.stroke();
    }};

    $('#draw-line-button').click(() => {
        currentFunction = new DrawLine(ctxreal);
        $("p").css("display", "none");
    $("#pencil-inst").css("display","block");
    });