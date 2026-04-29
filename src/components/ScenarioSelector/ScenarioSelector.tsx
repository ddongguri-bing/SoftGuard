"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import SectionHeader from "../common/SectionHeader";

interface SelectorProps {
  text: string;
  selected: boolean;
  onClick: () => void;
}

function Selector({ text, selected, onClick }: SelectorProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        `text-white-first rounded-[6px] px-3.75 py-2 transition-all`,
        selected
          ? "bg-theme-main text-body-small-bold"
          : "bg-black-first hover:bg-theme-sub hover:text-body-small-bold text-body-small",
      )}
    >
      {text}
    </button>
  );
}

const scenarios = [
  "시나리오 1: 스마트 횡단보도",
  "시나리오 2: 골목 사각지대 경고",
  "시나리오 3: 킥보드 보행 보조",
];

export default function ScenarioSelector() {
  const [selectedScenario, setSelectedScenario] = useState(scenarios[0]);

  return (
    <section className="flex flex-col gap-2.5">
      <SectionHeader title="시뮬레이션 시나리오 선택" />
      <div className="flex gap-2.5">
        {scenarios.map((scenario) => (
          <Selector
            text={scenario}
            selected={selectedScenario === scenario}
            onClick={() => setSelectedScenario(scenario)}
            key={scenario}
          />
        ))}
      </div>
    </section>
  );
}
