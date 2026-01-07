import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { LOCATIONS } from '@/data/data';

export const InteractiveMap: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [points, setPoints] = useState<{ id: string; city: string; pos: [number, number]; value: number }[]>([]);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const width = svgRef.current.clientWidth;
    const height = 240;

    // Simple projection
    const projection = (lat: number, lng: number): [number, number] => {
      const x = ((lng + 180) / 360) * width;
      const y = ((90 - lat) / 180) * height;
      return [x, y];
    };

    const mappedPoints = LOCATIONS.map(loc => ({
      ...loc,
      pos: projection(loc.coords[0], loc.coords[1])
    }));

    setPoints(mappedPoints); 

    const g = svg.append("g");

    // Abstract map background
    g.append("path")
      .attr("d", `M 50,50 Q 150,20 250,50 T 450,80 T 650,50 L 700,200 Q 400,230 100,200 Z`)
      .attr("fill", "#F1F5F9")
      .attr("stroke", "#E2E8F0")
      .attr("stroke-width", 1);

    // Lines between points
    g.selectAll(".link")
      .data(mappedPoints.slice(0, -1))
      .enter()
      .append("line")
      .attr("x1", d => d.pos[0])
      .attr("y1", d => d.pos[1])
      .attr("x2", (d, i) => mappedPoints[i + 1].pos[0])
      .attr("y2", (d, i) => mappedPoints[i + 1].pos[1])
      .attr("stroke", "#C7D2FE")
      .attr("stroke-width", 1)
      .attr("stroke-dasharray", "4 4");

    // Draw points
    const nodes = g.selectAll(".node")
      .data(mappedPoints)
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
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-sm font-semibold text-gray-700">Location Distribution</h4>
        <span className="text-xs text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full font-medium">Real-time</span>
      </div>

      {/* Map container */}
      <div className="relative flex-1 flex items-center justify-center bg-gray-50 rounded-xl overflow-hidden">
        {/* D3 SVG */}
        <svg ref={svgRef} className="w-full h-[240px]"></svg>

        {/* Pulse Indicators dynamically positioned */}
        {points.map((p, i) => (
          <div
            key={p.id}
            className={`absolute w-3 h-3 bg-indigo-500 rounded-full animate-ping`}
            style={{ left: p.pos[0] - 6, top: p.pos[1] - 6 }}
          />
        ))}

        {/* Overlay stats for first city (optional) */}
        {points[0] && (
          <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur p-3 rounded-lg border border-gray-200 shadow-lg text-[10px] max-w-[150px]">
            <p className="font-bold text-gray-900 mb-1">Top Region</p>
            <div className="flex justify-between items-center mb-1">
              <span>{points[0].city}</span>
              <span className="font-bold">{points[0].value}%</span>
            </div>
            <div className="w-full bg-gray-200 h-1 rounded-full">
              <div className="bg-indigo-500 h-full rounded-full" style={{ width: `${points[0].value}%` }}></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
