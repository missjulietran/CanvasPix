class DrawingBrushLoose extends Painting {
    constructor(ctxReal) {
        super();
        this.ctxReal = ctxReal;
        this.isDrawing = false;
        this.density = 150;
    }

    onMouseDown(coord, event) {
        this.orig = coord;
        this.ctxReal.lineJoin = 'round';
        this.ctxReal.lineCap = 'round';
        this.ctxReal.shadowBlur = 0;
        this.lineColor = color;
        this.ctxReal.lineWidth = thicknessspray;
        this.ctxReal.moveTo(coord[0], coord[1]);
    }

    onDragging(coord, event) {
        this.draw(this.ctxReal, coord);
    }

    onMouseMove() { }

    onMouseUp() { }
    onMouseLeave() { }

    onMouseEnter() { }

    draw(ctx, coord){
        for (let i = this.density; i--; ){
            let radius = thicknessspray;
            let offsetX = this.getRandomInt(-radius, radius);
            let offsetY = this.getRandomInt(-radius, radius);
            ctx.fillStyle = this.lineColor;
            ctx.fillRect(coord[0] + offsetX, coord[1] + offsetY, 1, 1);
        }
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
$('#spray').on('click',function(e){
    currentFunction = new DrawingBrushLoose(ctxreal);
    $("p").css("display", "none");
    $("#spray-inst").css("display","block");
 })