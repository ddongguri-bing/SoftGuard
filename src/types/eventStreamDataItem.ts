type RiskLevel = "danger" | "warning" | "normal";

export interface eventStreamData {
  time: string;
  level: RiskLevel;
  object1?: string;
  object2?: string;
  state?: string;
  location: string;
  vehicle_count?: number;
  pedestrian_count?: number;
  action: string;
}
