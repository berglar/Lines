
var p = d3.select("#path1");

setTimeout(function() {
  p.transition().ease("linear").attr("transform", "translate(100,0)");
}, 1000);

//alert("hello");

