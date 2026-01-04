"use client";
import { data, IBankInfo } from "./data";
import { scaleLinear, scaleTime } from "@visx/scale";
import { motion } from "motion/react";
import { AxisBottom, AxisLeft } from "@visx/axis";
import { curveMonotoneX } from "d3";
import { ParentSize } from "@visx/responsive";
import { LinePath, AreaClosed } from "@visx/shape";

// Helper functions

const getXminAndMax = (data: IBankInfo[]) => {
  const dates = data.map((d) => new Date(d.date));
  const minDate = new Date(Math.min(...dates.map((d) => d.getTime())));
  const maxDate = new Date(Math.max(...dates.map((d) => d.getTime())));
  return [minDate, maxDate];
};

const getYminAndMax = (data: IBankInfo[]) => {
  const prices = data.map((d) => d.price);
  const Ymax = Math.max(...prices);
  const Ymin = Math.min(...prices);
  return [Ymin, Ymax];
};

// Helper component

function LineGraphInner({ width, height }: { width: number; height: number }) {
  const [minX, maxX] = getXminAndMax(data);
  const [minY, maxY] = getYminAndMax(data);

  const XScale = scaleTime({
    domain: [minX, maxX],
    range: [0, width],
  });

  const YScale = scaleLinear({
    domain: [minY, maxY],
    range: [height, 0],
    round: true,
  });

  return (
    <svg width={width} height={height + 40}>
      <motion.g>
        <AreaClosed
          data={data}
          x={(d) => XScale(new Date(d.date))}
          y={(d) => YScale(d.price)}
          yScale={YScale}
          fill="url(#area-gradient)"
          curve={curveMonotoneX}
        />

        <LinePath
          data={data}
          x={(d) => XScale(new Date(d.date))}
          y={(d) => YScale(d.price)}
          stroke="#fff"
          strokeWidth={2}
          curve={curveMonotoneX}
        />
        <AxisBottom
          scale={XScale}
          top={height + 10}
          stroke="transparent"
          tickLength={4}
          tickLabelProps={() => ({
            fontSize: 10,
            textAnchor: "end",
            angle: -45,
            dx: -5,
            dy: 5,
          })}
        />
        <AxisLeft scale={YScale} stroke="transparent" tickLength={4} />
      </motion.g>
    </svg>
  );
}

function LineGraph() {
  return (
    <div className="h-147 w-full bg-linear-to-bl from-primary from-10% to-[#2C2C2C] to-100% rounded-xl p-4 flex flex-col items-start justify-start gap-4">
      <div className="w-full h-auto">
        <h1 className="font-bold text-xl">SPF500</h1>
      </div>
      <div className="w-full h-128.5">
        <ParentSize>
          {({ width, height }) => (
            <LineGraphInner width={width} height={height} />
          )}
        </ParentSize>
      </div>
    </div>
  );
}

export default LineGraph;
