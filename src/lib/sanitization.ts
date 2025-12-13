/**
 * Escapes special characters in a string for use in HTML.
 * Prevents XSS attacks when injecting user input into HTML emails.
 */
export function escapeHtml(unsafe: string): string {
  if (typeof unsafe !== "string" || !unsafe) return "";
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
  if (typeof unsafe !== "string" || !unsafe) return "";
  return unsafe
    .replace(/\\/g, "\\\\")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,")
    .replace(/\n/g, "\\n");
}

/**
 * Sanitizes a string for use in email headers (Subject, To, From, etc.).
 * Removes newlines to prevent Header Injection (CRLF injection).
 * Does NOT HTML escape, as headers are plain text.
 */
export function sanitizeHeader(unsafe: string): string {
  if (typeof unsafe !== "string" || !unsafe) return "";
  // Remove line breaks and control characters
  return unsafe.replace(/[\r\n\u0000-\u001F\u007F]/g, "");
}

/**
 * Validates an email address format.
 */
export function isValidEmail(email: string): boolean {
  // Basic email regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validates a phone number format.
 * Allows digits, spaces, dashes, plus sign, and parentheses.
 */
export function isValidPhone(phone: string): boolean {
  // Allow digits, spaces, +, -, (, )
  const phoneRegex = /^[0-9+\-\s()]+$/;
  return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 7; // At least 7 digits
}
