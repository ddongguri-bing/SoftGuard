interface InfoItemProps {
  title: string;
  children: React.ReactElement;
  gap?: "small" | "large";
}

export default function InfoItem({
  title,
  children,
  gap = "small",
}: InfoItemProps) {
  return (
    <div
      className={`flex flex-col ${gap === "small" ? "gap-2.5" : "gap-3.75"}`}
    >
      <div className="text-body-large-bold">{title}</div>
      <div>{children}</div>
    </div>
  );
}
