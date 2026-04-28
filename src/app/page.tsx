import AnalyticsDashboard from "@/components/AnalyticsDashboard/AnalyticsDashboard";
import EventStream from "@/components/EventStream/EventStream";
import Header from "@/components/Header/Header";
import InsightPanel from "@/components/InsightPanel/InsightPanel";
import SituationPanel from "@/components/SituationPanel/SituationPanel";
import VideoPanel from "@/components/VideoPanel/VideoPanel";

export default function Home() {
  return (
    <div className="mb-25 flex flex-col gap-12.5 px-12.5">
      <Header />
      <SituationPanel />
      <section className="flex gap-12.5">
        <VideoPanel />
        <EventStream />
      </section>
      <section className="flex gap-12.5">
        <InsightPanel />
        <AnalyticsDashboard />
      </section>
    </div>
  );
}
