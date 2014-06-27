
function main() {
  //console.log("main");

  var s = Snap("#svg");
  Snap.load("lines.svg", function (f) {
    s.append(f);
    var m = new Snap.Matrix();
    m.scale(6,6);
    s.animate({transform: m}, 1000);

    // individual lines.
    s.selectAll("path").forEach(function(line) {
      //console.log(line);
      var m = new Snap.Matrix();
      var dist = 10;
      m.translate(0, (Math.random()*dist)-(dist/2));
      line.animate({transform: m}, 3000);
    })
  });
}

document.addEventListener("DOMContentLoaded", function(event) {
  setTimeout(function() {
    main();
  }, 1000);
});
