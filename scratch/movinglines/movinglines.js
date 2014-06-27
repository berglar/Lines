
function main() {
  console.log("main");

  var s = Snap("#svg");
  Snap.load("lines.svg", function (f) {
    // Note that we traversre and change attr before SVG
    // is even added to the page
    s.append(f);

    //f.animate({scale: 6.0});

    s.animate({scale: 6.0}, 1000);

    var m = new Snap.Matrix();
    m.scale(4,2);		// play with scaling before and after the rotate 
    m.translate(100,0);   	// this translate will not be applied to the rotation
    m.rotate(45); 		// rotate

    s.animate({transform: m}, 3000);
  });
}

document.addEventListener("DOMContentLoaded", function(event) {
  setTimeout(function() {
    main();
  }, 1000);
});

