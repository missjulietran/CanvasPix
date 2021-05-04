class DrawingEllipse extends Painting {
    constructor(ctxReal, ctxDraft) {
        super();
        this.ctxReal = ctxReal;
        this.ctxDraft = ctxDraft;
    }

    onMouseDown(coord, event) {
        this.ctxReal.fillStyle = color;
        this.origX = coord[0];
        this.origY = coord[1];
    }

    onDragging(coord, event) {
        // Manipulating the context draft

        // radius is half of the distance of dragging
        this.radius = [(coord[0] - this.origX), (coord[1] - this.origY)];
        // center is the middle point between the starting point and dragging ending point
        this.center = [(0.5 * (coord[0] + this.origX)), (0.5 * (coord[1] + this.origY))];

        // Allows you to actually draw out your squares
        this.ctxDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);

        this.draw(this.ctxDraft);
    }

    onMouseMove() { }

    // Committing the element to the canvas
    onMouseUp(coord) {
        // Allows you to actually draw out your squares
        this.ctxDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);

        this.draw(this.ctxReal);
    }
    onMouseLeave() { }
    onMouseEnter() { }

    draw(ctx){
        ctx.beginPath();
        ctx.ellipse(this.center[0], this.center[1], Math.abs(this.radius[0]), Math.abs(this.radius[1]), 0, 2 * Math.PI, false);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.lineWidth = 5;
        ctx.strokeStyle = color;
        ctx.stroke();
    }
}

$('#oval-button').on('click',function(e){
    currentFunction = new DrawingEllipse(ctxreal,ctxdraft);
    $("p").css("display", "none");
    $("#oval-inst").css("display","block");
 })