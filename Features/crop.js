class Crop extends Painting {
    constructor(ctxReal, ctxDraft) {
        super();
        this.ctxDraft = ctxDraft;
        this.ctxReal = ctxReal;
        this.ctxDraft.linewidth = 7;
    }

    onMouseDown(coord, event) {
        this.orig = coord;
        this.image = canvasReal.toDataURL("image/png");
    }

    onDragging(coord, event) {
        this.ctxDraft.strokeStyle = "red"
        this.ctxDraft.linewidth = 7;

        this.width = coord[0] - this.orig[0];
        this.height = coord[1] - this.orig[1];

        this.ctxDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.ctxDraft.strokeRect(this.orig[0], this.orig[1], this.width, this.height);
    }

    onMouseUp(coord) {
        this.width = coord[0] - this.orig[0];
        this.height = coord[1] - this.orig[1];

        this.ctxDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.ctxDraft.strokeRect(this.orig[0], this.orig[1], this.width, this.height);

        let crop_canvas = document.createElement('canvas');
        crop_canvas.width = this.width;
        crop_canvas.height = this.height;

        crop_canvas.getContext('2d').drawImage(canvasReal, this.orig[0], this.orig[1], this.width, this.height, 0, 0, crop_canvas.width, crop_canvas.height);
        // $(image_target).attr('src', crop_canvas.toDataURL("image/png"));
        let url =  crop_canvas.toDataURL("image/png")
        console.log(url)
        // window.open(url);

        function debugBase64(base64URL){
            var win = window.open();
            win.document.write('<iframe src="' + base64URL  + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>');
        }

        debugBase64(url)


        this.ctxDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    };

}
$('#crop-button').on('click',function(e){
    currentFunction = new Crop(ctxreal,ctxdraft);
 })

 $( "#canvas-real" ).keydown(function() {
    alert( "Handler for .keydown() called." );
  });