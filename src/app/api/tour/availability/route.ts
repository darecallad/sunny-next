import { NextResponse } from "next/server";
import { getBookings } from "@/lib/tour-bookings";

export const dynamic = 'force-dynamic'; // Ensure this is not cached

export async function GET() {
  try {
    const bookings = await getBookings();
    
    // Count bookings per slot
    const counts: Record<string, number> = {};
    
    bookings.forEach((booking) => {
      if (booking.tourDateTime) {
        counts[booking.tourDateTime] = (counts[booking.tourDateTime] || 0) + 1;
      }
    });

    return NextResponse.json(counts);
  } catch (error) {
    console.error("Error fetching availability:", error);
    return NextResponse.json({}, { status: 500 });
  }
}
