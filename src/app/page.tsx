import AnalyticsDashboard from "@/components/AnalyticsDashboard/AnalyticsDashboard";
import DeviceStatus from "@/components/DeviceStatus/DeviceStatus";
import EventStream from "@/components/EventStream/EventStream";
import InsightPanel from "@/components/InsightPanel/InsightPanel";
import ScenarioSelector from "@/components/ScenarioSelector/ScenarioSelector";
import SituationPanel from "@/components/SituationPanel/SituationPanel";
import VideoPanel from "@/components/VideoPanel/VideoPanel";

export default function Home() {
  return (
    <div className="mb-25 flex flex-col gap-12.5">
      <SituationPanel />
      <section className="flex gap-12.5">
        <VideoPanel />
        <EventStream />
      </section>
      <section className="flex gap-12.5">
        <InsightPanel />
        <AnalyticsDashboard />
      </section>
      <section className="flex items-center gap-12.5">
        <DeviceStatus />
        <ScenarioSelector />
      </section>
    </div>
  );
}
