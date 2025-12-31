"use client";
import React from "react";
import { useState } from "react";

enum EStats {
  mean,
  median,
  std,
  var,
  IQR,
  CI,
}

interface IWidget {
  statistical_type: EStats;
  description: string;
  additional?: string;
  statistical_value: number;
  icon: string;
}

function IconBox({ icon }: { icon: React.ReactNode }) {
  return (
    <div className="p-3 border border-secondary/30 rounded-lg">{icon}</div>
  );
}

function Widget(data: IWidget) {
  return (
    <div className="w-full h-full bg-linear-to-bl from-primary from-10% to-[#2C2C2C] to-100% rounded-xl flex flex-col justify-between p-6">
      <div className="w-full flex flex-row items-center justify-between">
        <p className="text-3xl">{data.statistical_value}</p>
        <IconBox icon={data.icon} />
      </div>
      <div className="flex flex-col items-start justify-center text-wrap gap-1">
        <h3 className="text-base">{data.statistical_type}</h3>
        <p className="text-[13px] text-secondary/60">{data.description}</p>
      </div>
    </div>
  );
}

export { Widget };
