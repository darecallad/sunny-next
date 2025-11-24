// Test email sending functionality
// Run with: node scripts/test-email.js

const nodemailer = require('nodemailer');
require('dotenv').config({ path: '.env.local' });

async function testEmail() {
  console.log('🧪 Testing Email Configuration...\n');

  // Check environment variables
  console.log('📧 Email User:', process.env.EMAIL_USER);
  console.log('🔑 Password:', process.env.EMAIL_PASSWORD ? '✅ Set' : '❌ Not set');
  console.log('📬 Email To:', process.env.EMAIL_TO || 'Center.admin@sunnychildcare.com');
  console.log('');

  // Create transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // Verify connection
  try {
    console.log('🔌 Verifying SMTP connection...');
    await transporter.verify();
    console.log('✅ SMTP connection verified successfully!\n');
  } catch (error) {
    console.error('❌ SMTP connection failed:', error.message);
    return;
  }

  // Send test email
  try {
    console.log('📤 Sending test email...');
    
    const mailOptions = {
      from: `"Sunny Child Care Test" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || 'Center.admin@sunnychildcare.com',
      replyTo: 'test@example.com',
      subject: '🧪 Test Email - Sunny Child Care Tour System',
      text: `
Test Email from Sunny Child Care
================================

This is a test email to verify the tour request email system is working correctly.

Test Details:
- Sent from: ${process.env.EMAIL_USER}
- Sent to: ${process.env.EMAIL_TO || 'Center.admin@sunnychildcare.com'}
- Timestamp: ${new Date().toISOString()}

If you received this email, the email system is configured correctly! ✅

================================
Sunny Child Care - Email System Test
      `,
      html: `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <style>
      body { font-family: Arial, sans-serif; line-height: 1.6; color: #424242; }
      .container { max-width: 600px; margin: 0 auto; padding: 20px; }
      .header { background-color: #7CB342; color: white; padding: 20px; text-align: center; border-radius: 5px; }
      .content { background-color: #FFFFFF; padding: 30px; border-radius: 5px; margin-top: 20px; border: 1px solid #FFE0B2; }
      .success { background-color: #F1F8E9; border-left: 4px solid #7CB342; padding: 15px; margin: 20px 0; }
      .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #FFE0B2; text-align: center; color: #757575; font-size: 12px; }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>🧪 Test Email</h1>
        <p>Sunny Child Care - Tour Request System</p>
      </div>
      <div class="content">
        <div class="success">
          <strong>✅ Email System Test</strong>
        </div>
        <p>This is a test email to verify the tour request email system is working correctly.</p>
        <h3>Test Details:</h3>
        <ul>
          <li><strong>Sent from:</strong> ${process.env.EMAIL_USER}</li>
          <li><strong>Sent to:</strong> ${process.env.EMAIL_TO || 'Center.admin@sunnychildcare.com'}</li>
          <li><strong>Timestamp:</strong> ${new Date().toLocaleString()}</li>
        </ul>
        <p>If you received this email, the email system is configured correctly! ✅</p>
      </div>
      <div class="footer">
        <p>Sunny Child Care - Email System Test</p>
      </div>
    </div>
  </body>
</html>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Test email sent successfully!');
    console.log('📧 Message ID:', info.messageId);
    console.log('📬 Email sent to:', process.env.EMAIL_TO || 'Center.admin@sunnychildcare.com');
    console.log('\n🎉 Email system is working correctly!');
  } catch (error) {
    console.error('❌ Failed to send test email:', error.message);
  }
}

testEmail();
