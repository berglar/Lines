;


function main() {
  console.log("main");

  var s = Snap("#svg");
  Snap.load("lines.svg", function (f) {
    // Note that we traversre and change attr before SVG
    // is even added to the page
    s.append(f);

    //f.animate({scale: 6.0});

    s.selectAll("path").animate({stroke: "#f00"}, 1000);
  })

  /*
  d3.xml("lines.svg", function(error, documentFragment) {
    if (error) {console.log(error); return;}

    var svgNode = documentFragment.getElementsByTagName("svg")[0];
    console.log(svgNode);

    d3.select("#lines").node().appendChild(svgNode);

    d3.select("#lines").transition().ease("linear").attr("transform", "scale(6.0)");

    /*
    //use plain Javascript to extract the node

    main_chart_svg.node().appendChild(svgNode);
    //d3's selection.node() returns the DOM node, so we
    //can use plain Javascript to append content

    var innerSVG = main_chart_svg.select("svg");

    innerSVG.transition().duration(1000).delay(1000)
          .select("circle")
          .attr("r", 100);
*/
    
//  });
}

document.addEventListener("DOMContentLoaded", function(event) {
  setTimeout(function() {
    main();
  }, 1000);
});



/*
var p = d3.select("#path1");

setTimeout(function() {
  p.transition().ease("linear").attr("transform", "translate(100,0)");
}, 1000);
*/

//alert("hello");

