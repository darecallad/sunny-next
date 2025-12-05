import { NextRequest, NextResponse } from "next/server";
import { transporter } from "@/lib/email";
import { saveBooking } from "@/lib/tour-bookings";

// 生成 .ics 日曆文件內容
function generateICS(tourDateTime: string, firstName: string, lastName: string, email: string, phone: string): string {
  // 解析 tour date/time (格式: "2025-11-22 (Friday) - 10:30 AM - Chinese Tour")
  const dateMatch = tourDateTime.match(/^(\d{4}-\d{2}-\d{2})/);
  const timeMatch = tourDateTime.match(/(\d{1,2}:\d{2}\s*[AP]M)/i);
  const isChinese = tourDateTime.includes("Chinese");
  
  if (!dateMatch || !timeMatch) {
    throw new Error("Invalid tour date/time format");
  }

  const tourDate = dateMatch[1]; // "2025-11-22"
  const tourTime = timeMatch[1]; // "10:30 AM"
  
  // 轉換為 ISO 格式的日期時間
  const [year, month, day] = tourDate.split("-").map(Number);
  const [time, meridiem] = tourTime.split(" ");
  let [hours, minutes] = time.split(":").map(Number);
  
  if (meridiem.toUpperCase() === "PM" && hours !== 12) hours += 12;
  if (meridiem.toUpperCase() === "AM" && hours === 12) hours = 0;
  
  const startDate = new Date(year, month - 1, day, hours, minutes);
  const endDate = new Date(startDate.getTime() + 60 * 60 * 1000); // 1 hour tour
  
  // 格式化為 iCal 格式 (YYYYMMDDTHHMMSS)
  const formatICalDate = (date: Date) => {
    const pad = (n: number) => n.toString().padStart(2, '0');
    return `${date.getFullYear()}${pad(date.getMonth() + 1)}${pad(date.getDate())}T${pad(date.getHours())}${pad(date.getMinutes())}${pad(date.getSeconds())}`;
  };
  
  const now = new Date();
  const dtstamp = formatICalDate(now);
  const dtstart = formatICalDate(startDate);
  const dtend = formatICalDate(endDate);
  const uid = `tour-${Date.now()}@sunnychildcare.com`;
  
  const language = isChinese ? "Chinese/中文" : "English";
  const description = `Campus Tour for ${firstName} ${lastName}\\n\\nContact:\\nEmail: ${email}\\nPhone: ${phone}\\n\\nLanguage: ${language}\\n\\nLocation: Sunny Child Care\\n2586 Seaboard Ave, San Jose, CA 95131`;
  
  return `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Sunny Child Care//Tour Booking//EN
CALSCALE:GREGORIAN
METHOD:REQUEST
BEGIN:VEVENT
UID:${uid}
DTSTAMP:${dtstamp}
DTSTART:${dtstart}
DTEND:${dtend}
SUMMARY:Campus Tour - ${firstName} ${lastName} (${language})
DESCRIPTION:${description}
LOCATION:Sunny Child Care, 2586 Seaboard Ave, San Jose, CA 95131
STATUS:CONFIRMED
SEQUENCE:0
ORGANIZER;CN=Sunny Child Care:mailto:Center.admin@sunnychildcare.com
ATTENDEE;CN=${firstName} ${lastName};RSVP=TRUE:mailto:${email}
BEGIN:VALARM
TRIGGER:-PT24H
ACTION:DISPLAY
DESCRIPTION:Reminder: Campus Tour Tomorrow
END:VALARM
END:VEVENT
END:VCALENDAR`;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      tourDateTime,
      children,
      startDate,
      message,
      locale,
    } = body;

    // 基本驗證
    if (!firstName || !lastName || !email || !phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // 從 tourDateTime 提取日期 (YYYY-MM-DD)
    let tourDate = "";
    if (tourDateTime) {
      const dateMatch = tourDateTime.match(/^(\d{4}-\d{2}-\d{2})/);
      if (dateMatch) {
        tourDate = dateMatch[1];
      }
    }

    // 保存預約資訊（用於提醒郵件）
    // 注意：在 Vercel 等 Serverless 環境中，寫入本地文件會失敗。
    // 我們將其包裝在 try-catch 中，以免影響郵件發送。
    if (tourDate) {
      try {
        await saveBooking({
          firstName,
          lastName,
          email,
          phone,
          tourDateTime,
          tourDate,
          children: children || [],
          chineseTour: tourDateTime?.includes("Chinese Tour") ? "Yes" : "No",
          startDate: startDate || "",
          message: message || "",
          locale: locale || "en",
        });
      } catch (saveError) {
        console.warn("Failed to save booking to local file (expected in serverless environment):", saveError);
        // 繼續執行，發送郵件
      }
    }

    // 準備子女資訊
    const childrenInfo = children
      ?.map(
        (child: { month: string; day: string; year: string }, index: number) =>
          `Child ${index + 1}: ${child.month}/${child.day}/${child.year}`
      )
      .join("\n                ");

    // 準備郵件內容 - HTML 格式
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #424242; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #7CB342; color: white; padding: 20px; text-align: center; }
            .content { background-color: #FFFFFF; padding: 30px; border-radius: 5px; margin-top: 20px; }
            .section { margin-bottom: 25px; }
            .section-title { font-size: 18px; font-weight: bold; color: #7CB342; margin-bottom: 10px; border-bottom: 2px solid #FF9800; padding-bottom: 5px; }
            .field { margin-bottom: 10px; }
            .label { font-weight: bold; color: #7CB342; }
            .value { margin-left: 10px; }
            .message-box { background-color: white; padding: 20px; border-left: 4px solid #FF9800; margin-top: 15px; }
            .calendar-btn { display: inline-block; background-color: #FF9800; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold; margin: 10px 5px; }
            .calendar-note { background-color: #FFF3E0; border-left: 4px solid #FF9800; padding: 15px; margin: 20px 0; }
            .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #FFE0B2; text-align: center; color: #757575; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🌟 New Tour Request</h1>
              <p>預約參觀申請</p>
            </div>
            
            <div class="calendar-note">
              <strong>📅 Quick Add to Calendar:</strong><br>
              Click the button below or open the attached .ics file to add this tour to your Google Calendar.
              <div style="text-align: center; margin-top: 15px;">
                <a href="${generateGoogleCalendarLink(tourDateTime, firstName, lastName, email, phone)}" class="calendar-btn" target="_blank">
                  ➕ Add to Google Calendar
                </a>
              </div>
              <p style="margin-top: 10px; font-size: 12px; color: #666;">
                Or: Open the attached <strong>tour-booking.ics</strong> file to add to any calendar app.
              </p>
            </div>

            <div class="content">
              <div class="section">
                <div class="section-title">👤 Parent Information / 家長資訊</div>
                <div class="field">
                  <span class="label">Name / 姓名:</span>
                  <span class="value">${firstName} ${lastName}</span>
                </div>
                <div class="field">
                  <span class="label">Email:</span>
                  <span class="value">${email}</span>
                </div>
                <div class="field">
                  <span class="label">Phone / 電話:</span>
                  <span class="value">${phone}</span>
                </div>
              </div>

              <div class="section">
                <div class="section-title">👶 Child Information / 子女資訊</div>
                <div class="field">
                  <span class="label">Date(s) of Birth:</span>
                  <div style="margin-top: 10px; margin-left: 20px; white-space: pre-line;">${childrenInfo || "Not provided"}</div>
                </div>
              </div>

              <div class="section">
                <div class="section-title">📅 Tour Details / 參觀詳情</div>
                <div class="field">
                  <span class="label">Tour Date & Time / 參觀日期時間:</span>
                  <span class="value">${tourDateTime || "Not specified"}</span>
                </div>
                <div class="field">
                  <span class="label">Desired Start Date / 期望開始日期:</span>
                  <span class="value">${startDate || "Not specified"}</span>
                </div>
              </div>

              ${
                message
                  ? `
              <div class="section">
                <div class="section-title">💬 Comments / 備註</div>
                <div class="message-box">
                  <div style="white-space: pre-wrap;">${message}</div>
                </div>
              </div>
              `
                  : ""
              }
            </div>
            <div class="footer">
              <p>此郵件由 Sunny Child Care 網站自動發送</p>
              <p>This email was automatically sent from Sunny Child Care website</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // 生成 Google Calendar 鏈接的函數
    function generateGoogleCalendarLink(tourDateTime: string, firstName: string, lastName: string, email: string, phone: string): string {
      const dateMatch = tourDateTime.match(/^(\d{4}-\d{2}-\d{2})/);
      const timeMatch = tourDateTime.match(/(\d{1,2}:\d{2}\s*[AP]M)/i);
      const isChinese = tourDateTime.includes("Chinese");
      
      if (!dateMatch || !timeMatch) return "#";
      
      const tourDate = dateMatch[1].replace(/-/g, "");
      const tourTime = timeMatch[1];
      const [time, meridiem] = tourTime.split(" ");
      let [hours, minutes] = time.split(":").map(Number);
      
      if (meridiem.toUpperCase() === "PM" && hours !== 12) hours += 12;
      if (meridiem.toUpperCase() === "AM" && hours === 12) hours = 0;
      
      const startTime = `${hours.toString().padStart(2, '0')}${minutes.toString().padStart(2, '0')}00`;
      const endHours = (hours + 1) % 24;
      const endTime = `${endHours.toString().padStart(2, '0')}${minutes.toString().padStart(2, '0')}00`;
      
      const language = isChinese ? "Chinese/中文" : "English";
      const title = encodeURIComponent(`Campus Tour - ${firstName} ${lastName} (${language})`);
      const description = encodeURIComponent(`Campus Tour\n\nContact:\nEmail: ${email}\nPhone: ${phone}\n\nLanguage: ${language}\n\nLocation: Sunny Child Care\n2586 Seaboard Ave, San Jose, CA 95131`);
      const location = encodeURIComponent("Sunny Child Care, 2586 Seaboard Ave, San Jose, CA 95131");
      
      return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${tourDate}T${startTime}/${tourDate}T${endTime}&details=${description}&location=${location}&ctz=America/Los_Angeles`;
    }

    // 準備純文字版本
    const textContent = `
新的預約參觀申請 / New Tour Request
============================================

👤 PARENT INFORMATION / 家長資訊
--------------------------------------------
Name / 姓名: ${firstName} ${lastName}
Email: ${email}
Phone / 電話: ${phone}

👶 CHILD INFORMATION / 子女資訊
--------------------------------------------
${childrenInfo || "Not provided"}

📅 TOUR DETAILS / 參觀詳情
--------------------------------------------
Tour Date & Time / 參觀日期時間: ${tourDateTime || "Not specified"}
Desired Start Date / 期望開始日期: ${startDate || "Not specified"}

${
  message
    ? `💬 COMMENTS / 備註
--------------------------------------------
${message}
--------------------------------------------`
    : ""
}

============================================
此郵件由 Sunny Child Care 網站自動發送
This email was automatically sent from Sunny Child Care website
    `;

    // 發送郵件
    const mailOptions = {
      from: `"Sunny Child Care Tour Request" <${process.env.EMAIL_USER}>`,
      to: "Center.admin@sunnychildcare.com",
      replyTo: email,
      subject: `🌟 新預約參觀 / New Tour Request - ${firstName} ${lastName}`,
      text: textContent,
      html: htmlContent,
      attachments: tourDateTime ? [
        {
          filename: 'tour-booking.ics',
          content: generateICS(tourDateTime, firstName, lastName, email, phone),
          contentType: 'text/calendar; charset=utf-8; method=REQUEST'
        }
      ] : []
    };

    await transporter.sendMail(mailOptions);

    // --- Send confirmation email to parent ---
    const isChineseTour = tourDateTime?.includes("Chinese Tour");
    
    const parentSubject = isChineseTour 
      ? "預約參觀確認 - Sunny Child Care" 
      : "Tour Confirmation - Sunny Child Care";

    const parentHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #424242; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #FF9800; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
            .content { background-color: #FFFFFF; padding: 30px; border: 1px solid #FFE0B2; border-radius: 0 0 5px 5px; }
            .info-box { background-color: #FFF3E0; padding: 20px; border-left: 4px solid #FF9800; margin: 20px 0; }
            .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #FFE0B2; text-align: center; color: #757575; font-size: 12px; }
            .button { display: inline-block; background-color: #7CB342; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: bold; margin-top: 10px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>${isChineseTour ? "預約參觀確認" : "Tour Confirmation"}</h1>
            </div>
            <div class="content">
              <p>${isChineseTour ? `${firstName} 您好，` : `Dear ${firstName},`}</p>
              <p>
                ${isChineseTour 
                  ? "感謝您預約參觀 Sunny Child Care！我們已收到您的預約請求。" 
                  : "Thank you for scheduling a tour with Sunny Child Care! We have received your booking request."}
              </p>
              
              <div class="info-box">
                <strong>${isChineseTour ? "參觀詳情：" : "Tour Details:"}</strong><br><br>
                <strong>${isChineseTour ? "日期與時間：" : "Date & Time:"}</strong> ${tourDateTime}<br>
                <strong>${isChineseTour ? "地點：" : "Location:"}</strong> 2586 Seaboard Ave, San Jose, CA 95131
              </div>

              <p>
                ${isChineseTour 
                  ? "請點擊下方按鈕將此行程加入您的 Google 日曆：" 
                  : "Click the button below to add this tour to your Google Calendar:"}
              </p>
              
              <div style="text-align: center;">
                <a href="${generateGoogleCalendarLink(tourDateTime, firstName, lastName, email, phone)}" class="button">
                  ${isChineseTour ? "📅 加入 Google 日曆" : "📅 Add to Google Calendar"}
                </a>
              </div>

              <p style="margin-top: 20px;">
                ${isChineseTour 
                  ? "如果您需要更改或取消預約，請直接回覆此郵件或致電 (510) 333-5943。" 
                  : "If you need to reschedule or cancel, please reply to this email or call us at (510) 333-5943."}
              </p>

              <p>
                ${isChineseTour ? "期待與您見面！" : "We look forward to meeting you!"}
              </p>
            </div>
            <div class="footer">
              <p>Sunny Child Care | 2586 Seaboard Ave, San Jose, CA 95131</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send email to parent
    await transporter.sendMail({
      from: `"Sunny Child Care" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: parentSubject,
      html: parentHtml,
      attachments: tourDateTime ? [
        {
          filename: 'tour-booking.ics',
          content: generateICS(tourDateTime, firstName, lastName, email, phone),
          contentType: 'text/calendar; charset=utf-8; method=REQUEST'
        }
      ] : []
    });

    return NextResponse.json({
      success: true,
      message: "Tour request sent successfully",
    });
  } catch (error) {
    console.error("Error sending tour request email:", error);
    return NextResponse.json(
      {
        error: "Failed to send email",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
