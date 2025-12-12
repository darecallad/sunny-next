/**
 * Escapes special characters in a string for use in HTML.
 * Prevents XSS attacks when injecting user input into HTML emails.
 */
export function escapeHtml(unsafe: string): string {
  if (!unsafe) return "";
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Escapes special characters in a string for use in ICS (iCalendar) files.
 * Prevents injection attacks and formatting issues in calendar files.
 */
export function escapeICS(unsafe: string): string {
  if (!unsafe) return "";
  return unsafe
    .replace(/\\/g, "\\\\")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,")
    .replace(/\n/g, "\\n");
}
