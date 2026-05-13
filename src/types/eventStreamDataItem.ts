type RiskLevel = "danger" | "warning" | "normal";

export interface eventStreamData {
  id: number;
  time: string;
  level: RiskLevel;
  object1?: string;
  object2?: string;
  state?: string;
  location: string;
  vehicleCount?: number;
  pedestrianCount?: number;
  pmCount?: number;
  action: string;
  videoUrl: string;
  thumbnailUrl: string;
}
