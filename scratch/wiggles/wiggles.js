
T=300;
TT=mina.linear;
MD=1.25;

function main() {
  var s = Snap("#svg");
  Snap.load("lines.svg", function (f) {
    s.append(f);
    var m = new Snap.Matrix();
    m.scale(6,6);
    s.animate({transform: m}, 1000, mina.easein, function() {
      // individual lines.
      s.selectAll("path").forEach(function(line) {
        var randomMatrix = function() {
          var m = new Snap.Matrix();
          m.translate(Math.random()*0.1, (Math.random()*MD)-(MD/2));
          m.rotate(Math.random()*0.5, 150,150);
          return m;
        }
        var wiggle = function() {
          var m = randomMatrix();
          line.animate({transform: m}, T, TT, function() {
            line.animate({transform: m.invert()}, T, TT, function() {
              setTimeout(wiggle, Math.random()*100);
            });
          });
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
