import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { escapeHtml, sanitizeHeader, isValidEmail, isValidPhone } from "@/lib/sanitization";

// Email configuration
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, message, preferredLanguage, locale } = body;

    // Validate required fields
    if (!name || !email || !phone || !message || !preferredLanguage) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate formats
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    if (!isValidPhone(phone)) {
      return NextResponse.json(
        { error: "Invalid phone format" },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeMessage = escapeHtml(message);

    const timestamp = new Date().toLocaleString("en-US", {
      timeZone: "America/Los_Angeles",
      dateStyle: "full",
      timeStyle: "long",
    });

    // Email to admin
    const adminSubject =
      locale === "zh"
        ? `[Sunny Child Care] 新聯絡表單提交 - ${sanitizeHeader(name)}`
        : `[Sunny Child Care] New Contact Form Submission - ${sanitizeHeader(name)}`;

    const adminHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #424242; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #7CB342; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #FFFFFF; padding: 30px; border: 1px solid #FFE0B2; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #7CB342; display: block; margin-bottom: 5px; }
            .value { background: white; padding: 12px; border-left: 4px solid #FF9800; border-radius: 4px; }
            .message-box { background: white; padding: 15px; border: 1px solid #FFE0B2; border-radius: 4px; min-height: 100px; }
            .footer { margin-top: 20px; padding-top: 20px; border-top: 2px solid #FFE0B2; color: #757575; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0; font-size: 24px;">
                ${locale === "zh" ? "新聯絡表單提交" : "New Contact Form Submission"}
              </h1>
            </div>
            <div class="content">
              <p style="font-size: 16px; margin-bottom: 20px;">
                ${
                  locale === "zh"
                    ? "您收到了來自網站聯絡表單的新訊息："
                    : "You have received a new message from the website contact form:"
                }
              </p>

              <div class="field">
                <span class="label">${locale === "zh" ? "姓名：" : "Name:"}</span>
                <div class="value">${safeName}</div>
              </div>

              <div class="field">
                <span class="label">${locale === "zh" ? "電子郵件：" : "Email:"}</span>
                <div class="value">
                  <a href="mailto:${sanitizeHeader(email)}" style="color: #7CB342; text-decoration: none;">
                    ${safeEmail}
                  </a>
                </div>
              </div>

              <div class="field">
                <span class="label">${locale === "zh" ? "聯絡電話：" : "Phone:"}</span>
                <div class="value">
                  <a href="tel:${sanitizeHeader(phone)}" style="color: #7CB342; text-decoration: none;">
                    ${safePhone}
                  </a>
                </div>
              </div>

              <div class="field">
                <span class="label">${locale === "zh" ? "訊息內容：" : "Message:"}</span>
                <div class="message-box">${safeMessage.replace(/\n/g, "<br>")}</div>
              </div>

              <div class="field">
                <span class="label">${locale === "zh" ? "首選語言：" : "Preferred Language:"}</span>
                <div class="value">${preferredLanguage === "zh" ? "中文" : "English"}</div>
              </div>

              <div class="footer">
                <p style="margin: 0;">
                  <strong>${locale === "zh" ? "提交時間：" : "Submitted:"}</strong> ${timestamp}
                </p>
                <p style="margin: 10px 0 0 0;">
                  <strong>${locale === "zh" ? "語言偏好：" : "Language Preference:"}</strong> ${
      locale === "zh" ? "中文" : "English"
    }
                </p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send email to admin
    await transporter.sendMail({
      from: `"Sunny Child Care" <${process.env.EMAIL_USER}>`,
      to: "Center.admin@sunnychildcare.com",
      replyTo: sanitizeHeader(email),
      subject: adminSubject,
      html: adminHtml,
    });

    // Auto-reply to visitor
    const visitorSubject =
      locale === "zh"
        ? "感謝您聯絡 Sunny Child Care"
        : "Thank You for Contacting Sunny Child Care";

    const visitorHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #424242; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #7CB342; color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #FFFFFF; padding: 30px; border: 1px solid #FFE0B2; border-radius: 0 0 8px 8px; }
            .highlight { background: #FFF3E0; padding: 15px; border-left: 4px solid #FF9800; border-radius: 4px; margin: 20px 0; }
            .contact-info { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
            .contact-info p { margin: 8px 0; }
            a { color: #FF9800; text-decoration: none; }
            a:hover { text-decoration: underline; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0; font-size: 28px;">Sunny Child Care</h1>
              <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.95;">
                ${locale === "zh" ? "陽光兒童照顧中心" : "San Jose's Premier Child Care Center"}
              </p>
            </div>
            <div class="content">
              <h2 style="color: #7CB342; margin-top: 0;">
                ${locale === "zh" ? `${name}，您好！` : `Hello ${name}!`}
              </h2>
              
              <p style="font-size: 16px;">
                ${
                  locale === "zh"
                    ? "感謝您聯絡 Sunny Child Care！我們已收到您的訊息，將在 1-2 個工作日內回覆您。"
                    : "Thank you for contacting Sunny Child Care! We have received your message and will respond within 1-2 business days."
                }
              </p>

              <div class="highlight">
                <strong>${locale === "zh" ? "您提交的訊息：" : "Your Message:"}</strong><br>
                ${message.replace(/\n/g, "<br>")}
              </div>

              <p style="font-size: 16px;">
                ${
                  locale === "zh"
                    ? "如果您有緊急問題，請直接致電我們："
                    : "If you have an urgent matter, please feel free to call us directly:"
                }
              </p>

              <div class="contact-info">
                <p><strong>📞 ${locale === "zh" ? "電話：" : "Phone:"}</strong> <a href="tel:+15103335943">(510) 333-5943</a></p>
                <p><strong>📧 ${locale === "zh" ? "電郵：" : "Email:"}</strong> <a href="mailto:Center.admin@sunnychildcare.com">Center.admin@sunnychildcare.com</a></p>
                <p><strong>📍 ${locale === "zh" ? "地址：" : "Address:"}</strong> 2586 Seaboard Ave, San Jose, CA 95131</p>
                <p><strong>🕐 ${locale === "zh" ? "營業時間：" : "Hours:"}</strong> ${
      locale === "zh" ? "週一至週五" : "Mon – Fri"
    }, 8:30 AM – 6:00 PM</p>
              </div>

              <p style="font-size: 16px; margin-top: 25px;">
                ${
                  locale === "zh"
                    ? "期待與您交談！"
                    : "We look forward to speaking with you!"
                }
              </p>

              <p style="margin-top: 25px; color: #666; font-size: 14px;">
                ${
                  locale === "zh"
                    ? "此郵件為系統自動發送，請勿直接回覆。"
                    : "This is an automated message. Please do not reply to this email."
                }
              </p>
            </div>
          </div>
        </body>
      </html>
    `;

    await transporter.sendMail({
      from: `"Sunny Child Care" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: visitorSubject,
      html: visitorHtml,
    });

    return NextResponse.json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("Error sending contact email:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
