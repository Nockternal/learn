/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.5 - Activity: Adding SVGs to the screen

const svg = d3.select('#chart-area').append('width',800).append('height',800);
const rect = svg.append('rect');
rect.attr('x', 100)
rect.attr('y',100)
rect.attr('width', 100)
rect.attr('height', 100)
rect.attr('fill', 'blue')
*/
const rect = d3.select("#chart-area")
    .append("svg")
        .attr("width", 800)
        .attr("height", 800).attr("class","canvas")
    .append("rect")
        .attr("x", 100)
        .attr("y",100)
        .attr("width", 100)
        .attr("height", 100)
        .attr("fill", "blue");
