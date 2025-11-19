import { promises as fs } from "fs";
import path from "path";

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
}

const BOOKINGS_FILE = path.join(process.cwd(), "data", "tour-bookings.json");

// 確保資料目錄存在
async function ensureDataDir() {
  const dataDir = path.join(process.cwd(), "data");
  try {
    await fs.access(dataDir);
  } catch {
    await fs.mkdir(dataDir, { recursive: true });
  }
}

// 讀取所有預約
export async function getBookings(): Promise<TourBooking[]> {
  try {
    await ensureDataDir();
    const data = await fs.readFile(BOOKINGS_FILE, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    // 如果檔案不存在，返回空陣列
    return [];
  }
}

// 儲存預約
export async function saveBooking(booking: Omit<TourBooking, "id" | "createdAt" | "reminderSent">): Promise<TourBooking> {
  await ensureDataDir();
  const bookings = await getBookings();
  
  const newBooking: TourBooking = {
    ...booking,
    id: `tour-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    createdAt: new Date().toISOString(),
    reminderSent: false,
  };
  
  bookings.push(newBooking);
  await fs.writeFile(BOOKINGS_FILE, JSON.stringify(bookings, null, 2));
  
  return newBooking;
}

// 更新預約（標記提醒已發送）
export async function updateBooking(id: string, updates: Partial<TourBooking>): Promise<void> {
  const bookings = await getBookings();
  const index = bookings.findIndex((b) => b.id === id);
  
  if (index !== -1) {
    bookings[index] = { ...bookings[index], ...updates };
    await fs.writeFile(BOOKINGS_FILE, JSON.stringify(bookings, null, 2));
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
