import { redis } from "@/lib/redis";

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
    const data = await redis.get(KV_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Failed to fetch bookings from Redis:", error);
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
    await redis.set(KV_KEY, JSON.stringify(bookings));
    return true;
  } catch (error) {
    console.error("Failed to delete booking from Redis:", error);
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
    await redis.set(KV_KEY, JSON.stringify(bookings));
  } catch (error) {
    console.error("Failed to save booking to Redis:", error);
    // 拋出錯誤，讓上層處理（停止發送郵件）
    throw error;
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
      await redis.set(KV_KEY, JSON.stringify(bookings));
    } catch (error) {
      console.error("Failed to update booking in Redis:", error);
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
