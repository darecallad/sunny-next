import { NextRequest, NextResponse } from "next/server";
import { transporter } from "@/lib/email";
import { saveBooking } from "@/lib/tour-bookings";

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
    if (tourDate) {
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
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #324f7a; color: white; padding: 20px; text-align: center; }
            .content { background-color: #f9f9f9; padding: 30px; border-radius: 5px; margin-top: 20px; }
            .section { margin-bottom: 25px; }
            .section-title { font-size: 18px; font-weight: bold; color: #324f7a; margin-bottom: 10px; border-bottom: 2px solid #f2a63b; padding-bottom: 5px; }
            .field { margin-bottom: 10px; }
            .label { font-weight: bold; color: #324f7a; }
            .value { margin-left: 10px; }
            .message-box { background-color: white; padding: 20px; border-left: 4px solid #f2a63b; margin-top: 15px; }
            .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; text-align: center; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🌟 New Tour Request</h1>
              <p>預約參觀申請</p>
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
                <div class="field">
                  <span class="label">Language / 語言:</span>
                  <span class="value">${locale === "en" ? "English" : "繁體中文"}</span>
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
Language / 語言: ${locale === "en" ? "English" : "繁體中文"}

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
    };

    await transporter.sendMail(mailOptions);

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
