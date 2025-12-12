import { NextRequest, NextResponse } from "next/server";
import { transporter } from "@/lib/email";
import { cancelBooking, getBookings } from "@/lib/tour-bookings";

export const dynamic = 'force-dynamic';

// Helper function to sanitize inputs
function escapeHtml(unsafe: string): string {
  if (!unsafe) return "";
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function GET() {
  return NextResponse.json({ status: "Cancellation API is active" });
}

export async function POST(request: NextRequest) {
  try {
    const { id } = await request.json();

    if (!id) {
      return NextResponse.json({ error: "Missing booking ID" }, { status: 400 });
    }

    // Find booking details before cancelling
    const bookings = await getBookings();
    const booking = bookings.find((b) => b.id === id);

    if (!booking) {
      console.error(`Cancellation failed: Booking ID ${id} not found. Available IDs: ${bookings.map(b => b.id).join(', ')}`);
      return NextResponse.json({ error: "Booking not found" }, { status: 404 });
    }

    const success = await cancelBooking(id);

    if (!success) {
      return NextResponse.json({ error: "Failed to cancel booking" }, { status: 500 });
    }

    // Sanitize booking details
    const safeFirstName = escapeHtml(booking.firstName);
    const safeLastName = escapeHtml(booking.lastName);
    const safeEmail = escapeHtml(booking.email);
    const safePhone = escapeHtml(booking.phone);
    const safeTourDateTime = escapeHtml(booking.tourDateTime);

    // Send email to admin
    const mailOptions = {
      from: `"Sunny Child Care System" <${process.env.EMAIL_USER}>`,
      to: "Center.admin@sunnychildcare.com",
      subject: `❌ 預約已取消 / Tour Cancelled - ${safeFirstName} ${safeLastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color: #d32f2f;">預約已取消 / Tour Cancelled</h2>
          <p>The following tour has been cancelled by the parent:</p>
          <div style="background: #f5f5f5; padding: 15px; border-radius: 5px;">
            <p><strong>Name:</strong> ${safeFirstName} ${safeLastName}</p>
            <p><strong>Date:</strong> ${safeTourDateTime}</p>
            <p><strong>Email:</strong> ${safeEmail}</p>
            <p><strong>Phone:</strong> ${safePhone}</p>
          </div>
          <p>Please update your calendar accordingly.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Cancellation error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
