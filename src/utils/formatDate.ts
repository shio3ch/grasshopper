/**
 * Format a date as a localized string (Japanese locale).
 */
export function formatDate(date: Date): string {
  return date.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Format a date as an ISO 8601 date string (YYYY-MM-DD) for use in
 * the `datetime` attribute of `<time>` elements.
 */
export function toISODateString(date: Date): string {
  return date.toISOString().slice(0, 10);
}
