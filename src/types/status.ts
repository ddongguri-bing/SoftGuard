export type StatusType = "danger" | "warning" | "normal";

export interface StatusItemData {
  label: string;
  status: StatusType;
}

export interface StatusTheme {
  dot: string;
  text: string;
  badge: string;
  card: string;
  previewBorder: string;
}
