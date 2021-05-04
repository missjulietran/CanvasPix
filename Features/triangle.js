class DrawingEquilateralTriangle extends Painting {
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
        // this.ctxReal.fillStyle = "#f44";

        // radius is half of the distance of dragging
        this.height = Math.sqrt((coord[0] - this.origX) **2 + (coord[1] - this.origY) **2);
        // center is the middle point between the starting point and dragging ending point
        // let centerX = 0.5 * (coord[0] + this.origX);
        // let centerY = 0.5 * (coord[1] + this.origY);
        // this.center = [centerX, centerY];

        // find angle between the height and vertical
        this.angle = Math.atan2( (coord[1] - this.origY) , (coord[0] - this.origX) );
        // find length of side
        this.sideLength = this.height / Math.cos(Math.PI/6);
        // the coordinates of next vertexes
        this.X = this.origX + this.sideLength * Math.cos(this.angle - Math.PI/6);
        this.Y = this.origY + this.sideLength * Math.sin(this.angle - Math.PI/6);

        this.XX = this.origX + this.sideLength * Math.sin(Math.PI/2 - this.angle - Math.PI/6);
        this.YY = this.origY + this.sideLength * Math.cos(Math.PI/2 - this.angle - Math.PI/6);

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
        ctx.moveTo(this.origX, this.origY);
        ctx.lineTo(this.X, this.Y);
        ctx.lineTo(this.XX, this.YY);
        ctx.closePath();
        ctx.stroke();
        ctx.lineWidth = 3;
        ctx.shadowBlur=0;
        ctx.fillStyle = color;
        ctx.strokeStyle = color;
        ctx.fill();
    }
}


$('#triangle-button').on('click',function(e){
    currentFunction = new DrawingEquilateralTriangle(ctxreal,ctxdraft);
    $("p").css("display", "none");
    $("#triangle-inst").css("display","block");
 })