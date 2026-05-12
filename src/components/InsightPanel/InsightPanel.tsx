import Image from "next/image";

import { getInsights } from "@/api/insights";
import SuggestionIcon from "@/assets/suggestion-icon.svg";
import SectionHeader from "../common/SectionHeader";
import InsightCard from "./InsightCard";

export default async function InsightPanel() {
  const data = await getInsights();

  return (
    <section className="flex flex-4 flex-col gap-2.5">
      <SectionHeader
        title="LLM 사건 요약 및 인사이트"
        label="AI 기반"
        labelClassName="text-theme-light"
      />
      <InsightCard
        title="최신 요약"
        rightSlot={
          <div className="text-body-xsmall text-white-second">
            {data.timeRange}
          </div>
        }
      >
        {data.summary}
      </InsightCard>
      <InsightCard
        icon={
          <Image src={SuggestionIcon} width={20} height={20} alt="운영 제안" />
        }
        title="운영 제안"
      >
        {data.suggestion || "아직 요약 기반 제안된 내용이 없습니다."}
      </InsightCard>
      <div className="flex flex-col gap-1.25">
        <div className="text-body-xsmall-bold text-theme-light">
          유사 사고 데이터 기반 분석
        </div>
        <div className="text-body-small-bold flex gap-1.25">
          <div>이 유형의 실제 사고 전환 확률:</div>
          <div className="text-warning">
            {data.conversionProbability || 0}% (상위 {data.percentile || 0}%)
          </div>
        </div>
      </div>
    </section>
  );
}
