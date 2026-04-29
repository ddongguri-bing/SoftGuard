import SectionHeader from "../common/SectionHeader";

interface SelectorProps {
  text: string;
}

function Selector({ text }: SelectorProps) {
  return (
    <div className="bg-black-first hover:bg-theme-main text-body-small-bold rounded-[6px] px-3.75 py-2">
      {text}
    </div>
  );
}

const scenarios = [
  "시나리오 1: 스마트 횡단보도",
  "시나리오 2: 골목 사각지대 경고",
  "시나리오 3: 킥보드 보행 보조",
];

export default function ScenarioSelector() {
  return (
    <section className="flex flex-col gap-2.5">
      <SectionHeader title="시뮬레이션 시나리오 선택" />
      <div className="flex gap-2.5">
        {scenarios.map((scenario) => (
          <Selector text={scenario} key={scenario} />
        ))}
      </div>
    </section>
  );
}
