export function formatMonthYear(d: Date): string {
  return d.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

export function formatLongDate(d: Date): string {
  return d.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function formatExperienceRange(
  start: Date,
  end: Date | "Present",
): string {
  const a = formatMonthYear(start);
  if (end === "Present") return `${a} – Present`;
  return `${a} – ${formatMonthYear(end)}`;
}
