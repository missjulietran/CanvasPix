$(window).on("load", function (e) {
   history.push(canvasReal.toDataURL())
   console.log("historylength: " + history.length)
   console.log(history)
   console.log("present :" + present);
})


$('#undo-button').on('click', function (e) {
   present--;
   console.log("present :" + present);
   console.log(history)
   console.log(history[present])
   var img = new Image();
   img.src = history[present];
   console.log(img.src);
   ctxreal.clearRect(0, 0, canvasReal.width, canvasReal.height)
   img.onload = function () { ctxreal.drawImage(img, 0, 0) };
   history.push(canvasReal.toDataURL())


})

$('#redo-button').on('click', function (e) {
   if (present < history.length) {
      present++;
      console.log("present: " + present)
      var img = new Image();
      img.src = history[present];
      ctxreal.clearRect(0, 0, canvasReal.width, canvasReal.height)
      img.onload = function () { ctxreal.drawImage(img, 0, 0) };
      history.push(canvasReal.toDataURL())
   } else throw new Error('future is yet to come')
})

function capture() {
   console.log("present :" + present);
   console.log("historylength: " + history.length)
   if (present !== history.length) { present = history.length }
   history.push(canvasReal.toDataURL())
   console.log("historylength: " + history.length)
   console.log("present :" + present);
   console.log(history)
}


