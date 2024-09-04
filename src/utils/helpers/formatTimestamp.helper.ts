export function formatTimestamp(timestamp: number) {
  const milliseconds = timestamp * 1000;
  const date = new Date(milliseconds);
  return date.toLocaleDateString("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
