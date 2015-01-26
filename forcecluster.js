
///////////////////////////////////////////////////////////////////////////////

var w = 1200,
    h = 800,
    nodes,
    clusters,
    svg = d3.select("body").append("svg")
      .attr("width", w)
      .attr("height", h),
    force = d3.layout.force()
		.gravity(0)
		.charge(0)
		.size([w, h])
		.on("tick", function(e) {

		  // from "attractor" block
		  var k = e.alpha * 0.7;
		  nodes.forEach(function(node) {
		    var center = clusters[node.type];
		    node.x += (center.x - node.x) * k;
		    node.y += (center.y - node.y) * k;
		  });

		  svg.selectAll("circle")
		  .each(collide(0.5))
		  .attr("cx", function(d) { return d.x; })
		  .attr("cy", function(d) { return d.y; });

		}),
    nodes = data.map(function (d) {
    	d.x = Math.random() * w;
    	d.y = Math.random() * h;
    	d.radius = 2 * d.rating;
    	return d;
  	}),
  	dataKeys = [
      "game",
      "year",
      "publisher",
      "designers",
      "essayAuthor",
      "gameType",
      "rating"
    ],
    color = d3.scale.category10();

addNodes(nodes);

groupData(dataKeys[0], data);
d3.select('.grouping-title').text(dataKeys[0]);

d3.select('.btn-group').selectAll('button')
    .data(dataKeys)
  .enter().append('button')
    .attr('type', 'button')
    .classed('btn btn-default', true)
    .text(function (d) { return d; })
    .on('click', function(d) {
      groupData(d, data);
      d3.select('.grouping-title').text(d);
    });

function addNodes(nodes) {

  svg.selectAll("circle")
      .data(nodes)
    .enter().append("circle")
      .attr("r", function (d) { return d.radius; })
      .attr("cx", function(d) { return d.x; })
      .attr("cy", function(d) { return d.y; })
      .style("stroke", function (d) {
        return d3.rgb(color(d.gameType)).darker(2);
      })
      .style("fill", function (d) {
        return d3.rgb(color(d.gameType)).brighter(1);
      })
      .on('mouseover', function(d){
        showTooltip(d);
      })
      .on('mouseout', function(d){
        hideToolTip();
      });
}

function showTooltip(d) {

	var tooltip = d3.select('#tooltip'),
	    height;

  d3.select('.tip-catagory').text(d.publisher);
  d3.select('.tip-title').text(d.game);
  d3.select('.tip-type').text(d.gameType);

  d3.select('.tip-values').text(d.designers);

  tooltip.style('display', 'block');

  // height is first meaningful after the display is set to block
  height = parseInt(tooltip.style('height'), 10);

  tooltip.style('left', + (d.x - 93) + 'px')
    .style('top', (d.y - d.radius - height + 3) + 'px');

}

function hideToolTip () {
  d3.select('#tooltip')
    .style('display', 'none');
}

function groupData(dataMember, data){

  var columnGroup = d3.set(data.map(function(d){return d[dataMember];})).values(),

      scale = d3.scale.ordinal()
        .domain(columnGroup)
        .range(d3.range(columnGroup.length)),

      clusterCount = columnGroup.length,
      clusterRows = Math.ceil(Math.sqrt(clusterCount)),
      clusterCols = clusterRows,

      clusterRow = d3.scale.linear()
        .domain([0, clusterRows + 1])
        .range([0, h]),

      clusterCol = d3.scale.linear()
        .domain([0, clusterRows + 1])
        .range([0, w]);


  clusters = d3.range(clusterCount).map(function(i){
    return {
      id: columnGroup[i],
      x: clusterCol(i % clusterCols + 1),
      y: clusterRow(Math.ceil((i+1)/clusterRows))
    };
  });

  updateLabels(clusters, clusterRow, clusterCol);

  nodes.forEach(function (d) {
    d.type = scale(d[dataMember]);
  });

  force.start();

}

function updateLabels(clusters, rowScale, colScale) {

  var labels = d3.selectAll('.cluster-label')
    .data(clusters, function(d){return d.id;});

  labels.enter().append('div')
      .classed('cluster-label',true)
      .text(function(d){
        return d.id;
      })
      .style('opacity', 0.0)
    .transition()
      .duration(2000)
      .style('opacity', 0.9);

  labels.transition()
    .duration(750)
    .style('top', function(d){
      return (d.y + rowScale(0.45)) + 'px';
    })
    .style('left', function(d){
      return (d.x - colScale(0.25)) + 'px';
    })
    .style('opacity', 0.9);

  labels.exit()
    .transition()
    .duration(750)
    .style('opacity', 0.0)
    .remove();

}

function millisToDays (n) {
  return Math.floor(n / 1000 / 60 / 60 / 24);
}

// Resolves collisions between d and all other circles.
function collide(alpha) {
  var quadtree = d3.geom.quadtree(nodes);
  return function(d) {
    var r = 2 * d.radius,
        nx1 = d.x - r,
        nx2 = d.x + r,
        ny1 = d.y - r,
        ny2 = d.y + r;
    quadtree.visit(function(quad, x1, y1, x2, y2) {
      if (quad.point && (quad.point !== d)) {
        var x = d.x - quad.point.x,
            y = d.y - quad.point.y,
            l = Math.sqrt(x * x + y * y),
            r = d.radius + quad.point.radius;
        if (l < r) {
          l = (l - r) / l * alpha;
          d.x -= x *= l;
          d.y -= y *= l;
          quad.point.x += x;
          quad.point.y += y;
        }
      }
      return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
    });
  };
}

///////////////////////////////////////////////////////////////////////////////
