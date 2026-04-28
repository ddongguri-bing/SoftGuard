import type { StatusTheme, StatusType } from "@/types/status";

export const STATUS_THEME: Record<StatusType, StatusTheme> = {
  danger: {
    dot: "bg-error",
    text: "text-error",
    badge: "bg-error",
    card: "border-error bg-error-opa5 shadow-error",
    previewBorder: "border-error",
  },
  warning: {
    dot: "bg-warning",
    text: "text-warning",
    badge: "bg-warning",
    card: "border-warning bg-warning-opa5 shadow-warning",
    previewBorder: "border-warning",
  },
  normal: {
    dot: "bg-success",
    text: "text-success",
    badge: "bg-success",
    card: "border-success bg-success-opa5 shadow-success",
    previewBorder: "border-success",
  },
};
