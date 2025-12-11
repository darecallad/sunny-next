import { NextRequest, NextResponse } from "next/server";
import { transporter } from "@/lib/email";
import { cancelBooking, getBookings } from "@/lib/tour-bookings";

export const dynamic = 'force-dynamic';

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

    // Send email to admin
    const mailOptions = {
      from: `"Sunny Child Care System" <${process.env.EMAIL_USER}>`,
      to: "Center.admin@sunnychildcare.com",
      subject: `❌ 預約已取消 / Tour Cancelled - ${booking.firstName} ${booking.lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color: #d32f2f;">預約已取消 / Tour Cancelled</h2>
          <p>The following tour has been cancelled by the parent:</p>
          <div style="background: #f5f5f5; padding: 15px; border-radius: 5px;">
            <p><strong>Name:</strong> ${booking.firstName} ${booking.lastName}</p>
            <p><strong>Date:</strong> ${booking.tourDateTime}</p>
            <p><strong>Email:</strong> ${booking.email}</p>
            <p><strong>Phone:</strong> ${booking.phone}</p>
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
