class Eraser extends Painting {
    constructor(ctxdraft, ctxreal) {
        super();
        this.ctxdraft = ctxdraft;
        this.ctxreal = ctxreal;
    }

    onMouseDown(coord, event) {
        this.ctxdraft.strokeStyle = "white"
        this.ctxdraft.lineWidth = thicknessspray;
        this.ctxreal.shadowBlur = 0;
        this.ctxdraft.beginPath();
        this.ctxdraft.moveTo(coord[0], coord[1]);

    }

    onDragging(coord, event) {
        this.ctxdraft.strokeStyle = "white"
        this.ctxdraft.lineTo(coord[0], coord[1])
        this.ctxdraft.stroke();

    }
    onMouseUp(coord) {
        this.ctxreal.stroke();
    }
}

$('#erase-button').on('click', function (e) {
    currentFunction = new Eraser(ctxdraft, ctxreal);
    $("p").css("display", "none");
    $("#eraser-inst").css("display", "block");
})