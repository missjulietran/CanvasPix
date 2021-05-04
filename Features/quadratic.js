class DrawingQuadraticCurve extends Painting {
    constructor(ctxReal, ctxDraft) {
        super();
        this.ctxReal = ctxReal;
        this.ctxDraft = ctxDraft;
        this.isSettingControlPoint = false;
        this.lineColor = color;
        this.lineWidth = 5;
    }

    onMouseDown(coord, event) {
        this.ctxDraft.fillStyle = color;
        this.ctxDraft.lineWidth = thickness;
        this.ctxReal.fillStyle = color;
        this.ctxReal.lineWidth = thickness;
        this.ctxDraft.shadowBlur = 0;
        this.ctxReal.shadowBlur = 0;
        if(!this.isSettingControlPoint){
            this.orig = coord;
        }else{
            this.controlPoint = coord;
            this.ctxDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.draw(this.ctxDraft, coord);
        }
    }

    onDragging(coord, event) {
        if(!this.isSettingControlPoint){
            this.endpoint = coord;
            this.ctxDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.draw_straight_line(this.ctxDraft, coord);
        }else{
            this.ctxDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.draw(this.ctxDraft, coord);
        }

        // this.draw(this.ctxDraft);
    }

    onMouseMove() { }

    // Committing the element to the canvas
    onMouseUp(coord) {
        if(!this.isSettingControlPoint){
            this.ctxDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.draw_straight_line(this.ctxDraft, coord);
            this.isSettingControlPoint = true;
        }else{
            this.ctxDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.draw(this.ctxReal, coord);
            this.isSettingControlPoint = false;
        }
    }
    onMouseLeave() {
        // retain the straight line(did not set the control point) if the mouse move to other button 
        // if(!this.isSettingControlPoint){
        //     this.ctxDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        //     this.draw_straight_line(this.ctxDraft, this.endpoint);
        // }
    }

    onMouseEnter() {
        // console.log("entering line")
    }

    draw_straight_line(ctx, coord){
        ctx.beginPath();
        ctx.moveTo(this.orig[0], this.orig[1]);
        ctx.lineTo(coord[0], coord[1]);
        ctx.lineWidth = thickness;
        ctx.strokeStyle = color;
        ctx.closePath();
        ctx.stroke();
    }

    draw(ctx, controlPoint){
        ctx.beginPath();
        ctx.moveTo(this.orig[0], this.orig[1]);
        ctx.quadraticCurveTo(controlPoint[0], controlPoint[1], this.endpoint[0], this.endpoint[1]);
        ctx.lineWidth = thickness;
        ctx.strokeStyle = color;
        ctx.stroke();
    }
}



$('#curve-button').on('click',function(e){
    currentFunction = new DrawingQuadraticCurve(ctxreal,ctxdraft);
    $("p").css("display", "none");
    $("#quad-inst").css("display","block");
 })