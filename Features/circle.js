class DrawingCircle extends Painting {
    constructor(ctxReal, ctxDraft) {
        super();
        this.ctxReal = ctxReal;
        this.ctxDraft = ctxDraft;
    }

    onMouseDown(coord, event) {
        this.ctxReal.fillStyle = color;
        this.ctxReal.strokeStyle = color;
        this.origX = coord[0];
        this.origY = coord[1];
    }

    onDragging(coord, event) {
        // Manipulating the context draft
        this.ctxDraft.fillStyle = color;
        this.ctxDraft.strokeStyle = color;

        // radius is half of the distance of dragging
        this.radius = 0.5 * Math.sqrt((coord[0] - this.origX) ** 2 + (coord[1] - this.origY) ** 2);
        // center is the middle point between the starting point and dragging ending point
        let centerX = 0.5 * (coord[0] + this.origX);
        let centerY = 0.5 * (coord[1] + this.origY);
        this.center = [centerX, centerY];

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
        ctx.arc(this.center[0], this.center[1], this.radius, 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.lineWidth = 0;
        ctx.shadowBlur=0;
        ctx.fillStyle = color;
        ctx.strokeStyle = color;
        ctx.stroke();
    }
}

$('#circle-button').on('click',function(e){
    currentFunction = new DrawingCircle(ctxreal,ctxdraft);
        $("p").css("display", "none");
        $("#circle-inst").css("display","block");
 })