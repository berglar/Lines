
function main() {
  var s = Snap("#svg");
  Snap.load("lines.svg", function (f) {
    s.append(f);
    var m = new Snap.Matrix();
    m.scale(6,6);
    s.animate({transform: m}, 1000, mina.easein, function() {
      // individual lines.
      s.selectAll("path").forEach(function(line) {
        var m = new Snap.Matrix();
        var dist = 0.5;
        m.translate(0, (Math.random()*dist)-(dist/2));
        var wiggle = function() {
          m = m.invert();
          line.animate({transform: m}, 100, mina.bounce, wiggle);
        };
        wiggle();
      })
    });
  });
}

document.addEventListener("DOMContentLoaded", function(event) {
  setTimeout(function() {
    main();
  }, 1000);
});

