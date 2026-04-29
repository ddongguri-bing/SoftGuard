import Image from "next/image";

import SuggestionIcon from "@/assets/suggestion-icon.svg";
import SectionHeader from "../common/SectionHeader";
import InsightCard from "./InsightCard";

export default function InsightPanel() {
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
            18:00 ~ 18:12
          </div>
        }
      >
        최근 10분간 남문 사거리에서 우회전 차량과 보행자 간 Near-miss가 7건
        발생했습니다. 특히 18시~19시 사이 동일 유형의 위험이 빈번하게 발생하여,
        야간·저조도 환경에서 충돌 위험이 높아지는 패턴이 관찰됩니다.
      </InsightCard>
      <InsightCard
        icon={
          <Image src={SuggestionIcon} width={20} height={20} alt="운영 제안" />
        }
        title="운영 제안"
      >
        반사경 각도 조절 및 우회전 신호등 설치를 권고합니다. 야간 보행자 인식
        강화를 위한 조명 보강을 제안합니다.
      </InsightCard>
      <div className="flex flex-col gap-1.25">
        <div className="text-body-xsmall-bold text-theme-light">
          유사 사고 데이터 기반 분석
        </div>
        <div className="text-body-small-bold flex gap-1.25">
          <div>이 유형의 실제 사고 전환 확률:</div>
          <div className="text-warning">32.7% (상위 15%)</div>
        </div>
      </div>
    </section>
  );
}
