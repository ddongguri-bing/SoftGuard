import EventStream from "@/components/EventStream/EventStream";
import Header from "@/components/Header/Header";
import SituationPanel from "@/components/SituationPanel/SituationPanel";
import VideoPanel from "@/components/VideoPanel/VideoPanel";

export default function Home() {
  return (
    <div className="flex flex-col gap-12.5 px-12.5">
      <Header />
      <SituationPanel />
      <div className="flex gap-12.5">
        <VideoPanel />
        <EventStream />
      </div>
    </div>
  );
}
