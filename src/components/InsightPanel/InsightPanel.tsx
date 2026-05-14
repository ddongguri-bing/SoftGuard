import { getInsights } from "@/api/insights";
import InsightPanelContent from "./InsightPanelContent";

export default async function InsightPanel() {
  const data = await getInsights();

  return <InsightPanelContent initialData={data} />;
}
