class StraightLine extends Painting {
    constructor(ctxreal, ctxdraft) {
        super();
        this.ctxreal = ctxreal;
        this.ctxdraft = ctxdraft;
    }

    onMouseDown(coord, event) {
        this.ctxdraft.strokeStyle = color;
        this.ctxreal.strokeStyle = color;
        this.ctxdraft.shadowBlur = 0;
        this.ctxreal.shadowBlur = 0;
        this.ctxdraft.lineWidth = thickness;
        this.ctxreal.lineWidth = thickness;
        this.origX = coord[0];
        this.origY = coord[1];
    }

    onDragging(coord, event) {
        this.ctxdraft.beginPath();
        this.ctxdraft.moveTo(this.origX, this.origY);
        this.ctxdraft.lineTo(coord[0], coord[1]);
        this.ctxdraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height); //need to clear rect before stroke
        this.ctxdraft.stroke();
    }

    onMouseUp(coord) {
        this.ctxdraft.closePath();
        this.ctxreal.beginPath();
        this.ctxreal.lineWidth = 0;
        this.ctxreal.shadowBlur=0;
        this.ctxreal.moveTo(this.origX, this.origY);
        this.ctxreal.lineTo(coord[0], coord[1]);
        this.ctxreal.closePath();
        this.ctxreal.stroke();
    }
}

$('#straight-line-button').click(() => {
    currentFunction = new StraightLine(ctxreal, ctxdraft);
    $("p").css("display", "none");
    $("#straight-inst").css("display","block");
});