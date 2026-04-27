const WEEKDAYS = ["일", "월", "화", "수", "목", "금", "토"];

export function formatNow(d: Date) {
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  const day = WEEKDAYS[d.getDay()];
  const hh = String(d.getHours()).padStart(2, "0");
  const mi = String(d.getMinutes()).padStart(2, "0");
  const ss = String(d.getSeconds()).padStart(2, "0");

  return `${yyyy}.${mm}.${dd} (${day}) ${hh}:${mi}:${ss}`;
}
