import { NextRequest, NextResponse } from "next/server";
import { transporter } from "@/lib/email";
import { getBookingsNeedingReminder, updateBooking } from "@/lib/tour-bookings";

export async function POST(request: NextRequest) {
  try {
    // 簡單的驗證機制（可以用環境變數設定密鑰）
    const authHeader = request.headers.get("authorization");
    const expectedAuth = `Bearer ${process.env.CRON_SECRET || "your-secret-key"}`;
    
    if (authHeader !== expectedAuth) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const bookingsToRemind = await getBookingsNeedingReminder();
    
    if (bookingsToRemind.length === 0) {
      return NextResponse.json({
        success: true,
        message: "No reminders to send",
        count: 0,
      });
    }

    let sentCount = 0;
    const errors: string[] = [];

    for (const booking of bookingsToRemind) {
      try {
        await sendReminderEmail(booking);
        await updateBooking(booking.id, { reminderSent: true });
        sentCount++;
      } catch (error) {
        console.error(`Failed to send reminder for booking ${booking.id}:`, error);
        errors.push(booking.id);
      }
    }

    return NextResponse.json({
      success: true,
      message: `Sent ${sentCount} reminders`,
      count: sentCount,
      errors: errors.length > 0 ? errors : undefined,
    });
  } catch (error) {
    console.error("Error in send-reminders:", error);
    return NextResponse.json(
      {
        error: "Failed to process reminders",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

async function sendReminderEmail(booking: any) {
  const isEnglish = booking.locale === "en";
  
  // 格式化日期時間顯示
  const tourDateDisplay = formatTourDateTime(booking.tourDateTime, booking.locale);
  
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #424242; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #7CB342; color: white; padding: 30px; text-align: center; border-radius: 5px 5px 0 0; }
          .content { background-color: #FFFFFF; padding: 30px; border-radius: 0 0 5px 5px; }
          .highlight { background-color: #FFF3E0; padding: 20px; border-left: 4px solid #FF9800; margin: 20px 0; border-radius: 3px; }
          .info-box { background-color: #FFFFFF; padding: 15px; margin: 15px 0; border-radius: 3px; }
          .button { background-color: #FF9800; color: white; padding: 15px 30px; text-decoration: none; display: inline-block; border-radius: 5px; margin: 20px 0; font-weight: bold; }
          .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #FFE0B2; text-align: center; color: #757575; font-size: 12px; }
          h1 { margin: 0; font-size: 28px; }
          h2 { color: #7CB342; font-size: 20px; margin-top: 0; }
          .label { font-weight: bold; color: #7CB342; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🌟 ${isEnglish ? "Tour Reminder" : "參觀提醒"}</h1>
            <p style="font-size: 18px; margin: 10px 0 0 0;">${isEnglish ? "Your tour is tomorrow!" : "您的參觀預約在明天！"}</p>
          </div>
          <div class="content">
            <div class="highlight">
              <h2>📅 ${isEnglish ? "Tour Details" : "參觀詳情"}</h2>
              <p style="font-size: 18px; margin: 10px 0;">
                <strong>${tourDateDisplay}</strong>
              </p>
            </div>

            <div class="info-box">
              <p><span class="label">${isEnglish ? "Name" : "姓名"}:</span> ${booking.firstName} ${booking.lastName}</p>
              <p><span class="label">${isEnglish ? "Tour Language" : "導覽語言"}:</span> ${booking.tourDateTime.includes("Chinese") ? (isEnglish ? "Chinese (Mandarin)" : "中文（國語）") : (isEnglish ? "English" : "英文")}</p>
            </div>

            <div style="background-color: #FFF3E0; padding: 20px; border-radius: 5px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #7CB342;">📍 ${isEnglish ? "Location" : "地點"}</h3>
              <p><strong>Sunny Child Care Center</strong><br>
              2586 Seaboard Ave<br>
              San Jose, CA 95131</p>
              <p><span class="label">${isEnglish ? "Phone" : "電話"}:</span> (510) 333-5943</p>
            </div>

            ${isEnglish ? `
            <div style="margin: 30px 0; padding: 20px; background-color: #F1F8E9; border-radius: 5px;">
              <h3 style="margin-top: 0; color: #7CB342;">💡 What to Expect</h3>
              <ul style="margin: 10px 0;">
                <li>Tour of our classrooms and facilities</li>
                <li>Meet our experienced teachers</li>
                <li>Learn about our bilingual curriculum</li>
                <li>Ask any questions you may have</li>
              </ul>
            </div>
            ` : `
            <div style="margin: 30px 0; padding: 20px; background-color: #F1F8E9; border-radius: 5px;">
              <h3 style="margin-top: 0; color: #7CB342;">💡 參觀內容</h3>
              <ul style="margin: 10px 0;">
                <li>參觀教室和設施</li>
                <li>認識經驗豐富的教師團隊</li>
                <li>了解雙語教學課程</li>
                <li>解答您的任何疑問</li>
              </ul>
            </div>
            `}

            <div style="text-align: center;">
              <a href="https://www.google.com/maps/place/Sunny+Child+Care+Center/@37.3951,-121.9113" class="button" target="_blank">
                ${isEnglish ? "Get Directions" : "取得路線"}
              </a>
            </div>

            <div style="margin-top: 30px; padding: 15px; background-color: #fff; border-radius: 5px; border: 1px solid #ddd;">
              <p style="margin: 0; font-size: 14px;">
                ${isEnglish 
                  ? "If you need to reschedule or have any questions, please call us at (510) 333-5943 or email Center.admin@sunnychildcare.com"
                  : "如需更改預約時間或有任何疑問，請致電 (510) 333-5943 或電郵至 Center.admin@sunnychildcare.com"
                }
              </p>
            </div>
          </div>
          <div class="footer">
            <p>${isEnglish ? "We look forward to meeting you!" : "期待與您見面！"}</p>
            <p>Sunny Child Care / 陽光雙語托兒中心</p>
          </div>
        </div>
      </body>
    </html>
  `;

  const textContent = `
${isEnglish ? "TOUR REMINDER" : "參觀提醒"}
${isEnglish ? "Your tour is tomorrow!" : "您的參觀預約在明天！"}

📅 ${isEnglish ? "Tour Details" : "參觀詳情"}
${tourDateDisplay}

${isEnglish ? "Name" : "姓名"}: ${booking.firstName} ${booking.lastName}
${isEnglish ? "Tour Language" : "導覽語言"}: ${booking.tourDateTime.includes("Chinese") ? (isEnglish ? "Chinese (Mandarin)" : "中文（國語）") : (isEnglish ? "English" : "英文")}

📍 ${isEnglish ? "Location" : "地點"}
Sunny Child Care Center
2586 Seaboard Ave
San Jose, CA 95131
${isEnglish ? "Phone" : "電話"}: (510) 333-5943

${isEnglish ? "If you need to reschedule or have any questions, please call us at (510) 333-5943 or email Center.admin@sunnychildcare.com" : "如需更改預約時間或有任何疑問，請致電 (510) 333-5943 或電郵至 Center.admin@sunnychildcare.com"}

${isEnglish ? "We look forward to meeting you!" : "期待與您見面！"}
Sunny Child Care / 陽光雙語托兒中心
  `;

  const mailOptions = {
    from: `"Sunny Child Care" <${process.env.EMAIL_USER}>`,
    to: booking.email,
    subject: `🌟 ${isEnglish ? "Reminder: Your Tour Tomorrow at Sunny Child Care" : "提醒：明天的 Sunny 托兒中心參觀預約"}`,
    text: textContent,
    html: htmlContent,
  };

  await transporter.sendMail(mailOptions);
}

function formatTourDateTime(tourDateTime: string, locale: string): string {
  // tourDateTime format: "2025-11-22 Friday 10:30 AM - Chinese Tour" or "2025-11-22 Friday 3:30 PM - English Tour"
  const isEnglish = locale === "en";
  
  if (isEnglish) {
    return tourDateTime;
  } else {
    // Convert to Chinese format
    const parts = tourDateTime.split(" ");
    const date = parts[0]; // YYYY-MM-DD
    const [year, month, day] = date.split("-");
    
    const isChinese = tourDateTime.includes("Chinese");
    const isMorning = tourDateTime.includes("10:30 AM");
    
    const time = isMorning ? "上午 10:30" : "下午 3:30";
    const tour = isChinese ? "中文 Tour" : "英文 Tour";
    
    return `${month}/${day} 週五 ${time} ${tour}`;
  }
}

// 允許 GET 請求用於測試
export async function GET() {
  return NextResponse.json({
    message: "Tour reminder endpoint. Use POST with authorization header.",
    usage: "POST with Authorization: Bearer YOUR_SECRET",
  });
}
