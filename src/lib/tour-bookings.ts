import { kv } from "@vercel/kv";

export interface TourBooking {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  tourDateTime: string; // Full datetime string from form
  tourDate: string; // YYYY-MM-DD
  children: Array<{ month: string; day: string; year: string }>;
  chineseTour: string;
  startDate: string;
  message: string;
  locale: string;
  createdAt: string;
  reminderSent: boolean;
  status?: 'confirmed' | 'cancelled';
}

const KV_KEY = "tour-bookings";

// 讀取所有預約
export async function getBookings(): Promise<TourBooking[]> {
  try {
    const bookings = await kv.get<TourBooking[]>(KV_KEY);
    return bookings || [];
  } catch (error) {
    console.error("Failed to fetch bookings from KV:", error);
    return [];
  }
}

// 取消預約
export async function cancelBooking(id: string): Promise<boolean> {
  const bookings = await getBookings();
  const index = bookings.findIndex((b) => b.id === id);
  
  if (index === -1) return false;
  
  // 完全刪除該筆預約
  bookings.splice(index, 1);
  
  try {
    await kv.set(KV_KEY, bookings);
    return true;
  } catch (error) {
    console.error("Failed to delete booking from KV:", error);
    return false;
  }
}

// 儲存預約
export async function saveBooking(booking: Omit<TourBooking, "id" | "createdAt" | "reminderSent" | "status">): Promise<TourBooking> {
  const bookings = await getBookings();
  
  const newBooking: TourBooking = {
    ...booking,
    id: `tour-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    createdAt: new Date().toISOString(),
    reminderSent: false,
    status: 'confirmed',
  };
  
  bookings.push(newBooking);
  
  try {
    await kv.set(KV_KEY, bookings);
  } catch (error) {
    console.error("Failed to save booking to KV:", error);
    // 在這裡我們只記錄錯誤，不拋出，以免影響郵件發送流程
    // 但這意味著提醒功能對這筆預約會失效
  }
  
  return newBooking;
}

// 更新預約（標記提醒已發送）
export async function updateBooking(id: string, updates: Partial<TourBooking>): Promise<void> {
  const bookings = await getBookings();
  const index = bookings.findIndex((b) => b.id === id);
  
  if (index !== -1) {
    bookings[index] = { ...bookings[index], ...updates };
    try {
      await kv.set(KV_KEY, bookings);
    } catch (error) {
      console.error("Failed to update booking in KV:", error);
    }
  }
}

// 獲取需要發送提醒的預約（明天的預約且尚未發送提醒）
export async function getBookingsNeedingReminder(): Promise<TourBooking[]> {
  const bookings = await getBookings();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowDate = tomorrow.toISOString().split("T")[0]; // YYYY-MM-DD
  
  return bookings.filter(
    (booking) => 
      booking.tourDate === tomorrowDate && 
      !booking.reminderSent
  );
}
