
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { LOCATIONS } from '../../data/data';

export const InteractiveMap: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const width = svgRef.current.clientWidth;
    const height = 240;

    // Simulated simple map background
    const g = svg.append("g");
    
    // Abstract map shapes
    g.append("path")
      .attr("d", `M 50,50 Q 150,20 250,50 T 450,80 T 650,50 L 700,200 Q 400,230 100,200 Z`)
      .attr("fill", "#F1F5F9")
      .attr("stroke", "#E2E8F0")
      .attr("stroke-width", 1);

    // Data points
    const projection = (lat: number, lng: number): [number, number] => {
      // Very crude projection for mockup purposes
      const x = ((lng + 180) / 360) * width;
      const y = ((90 - lat) / 180) * height;
      return [x, y];
    };

    const points = LOCATIONS.map(loc => ({
      ...loc,
      pos: projection(loc.coords[0], loc.coords[1])
    }));

    // Draw lines between points to look like a network
    g.selectAll(".link")
      .data(points.slice(0, -1))
      .enter()
      .append("line")
      .attr("x1", d => d.pos[0])
      .attr("y1", d => d.pos[1])
      .attr("x2", (d, i) => points[i+1].pos[0])
      .attr("y2", (d, i) => points[i+1].pos[1])
      .attr("stroke", "#C7D2FE")
      .attr("stroke-width", 1)
      .attr("stroke-dasharray", "4 4");

    // Draw points
    const nodes = g.selectAll(".node")
      .data(points)
      .enter()
      .append("g")
      .attr("class", "node")
      .attr("transform", d => `translate(${d.pos[0]}, ${d.pos[1]})`);

    nodes.append("circle")
      .attr("r", 6)
      .attr("fill", "#6366F1")
      .attr("stroke", "white")
      .attr("stroke-width", 2)
      .style("filter", "drop-shadow(0px 2px 4px rgba(0,0,0,0.1))");

    nodes.append("text")
      .attr("dy", 20)
      .attr("text-anchor", "middle")
      .text(d => d.city)
      .attr("font-size", "10px")
      .attr("fill", "#64748B")
      .attr("font-weight", "500");

  }, []);

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-4 h-full">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-sm font-semibold text-gray-700">Location Distribution</h4>
        <span className="text-xs text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full font-medium">Real-time</span>
      </div>
      <svg ref={svgRef} className="w-full h-[240px]"></svg>
    </div>
  );
};
