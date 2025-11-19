# 自動提醒郵件系統設置指南
# Automated Reminder Email System Setup Guide

## 概述 / Overview

當家長預約參觀時，系統會：
1. 保存預約資訊到 `data/tour-bookings.json`
2. 在參觀前一天自動發送提醒郵件

When parents book a tour, the system will:
1. Save booking information to `data/tour-bookings.json`
2. Automatically send reminder emails one day before the tour

---

## 設置步驟 / Setup Steps

### 1. 環境變數配置 / Environment Variables

在 `.env.local` 文件中添加：

```env
# 郵件配置（已有）
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASSWORD=your-app-password

# 新增：Cron Job 密鑰
CRON_SECRET=your-strong-random-secret
```

生成強密鑰的方法：
```bash
# 使用 Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"

# 或使用 OpenSSL
openssl rand -base64 32
```

---

### 2. 設置每日自動執行 / Setup Daily Automation

有三種方式設置自動發送提醒郵件：

#### 選項 A: Vercel Cron Jobs（推薦用於生產環境）

1. 在項目根目錄創建 `vercel.json`：

```json
{
  "crons": [{
    "path": "/api/send-reminders",
    "schedule": "0 9 * * *"
  }]
}
```

2. 在 Vercel Dashboard 設置環境變數 `CRON_SECRET`

3. Vercel 會每天早上 9:00 (UTC) 自動調用 API

**注意**: Vercel Cron Jobs 需要 Pro 方案

---

#### 選項 B: 外部 Cron 服務（免費）

使用 [cron-job.org](https://cron-job.org) 或 [EasyCron](https://www.easycron.com/)：

1. 註冊免費帳號
2. 創建新的 Cron Job：
   - **URL**: `https://your-domain.com/api/send-reminders`
   - **Method**: POST
   - **Schedule**: 每天上午 9:00
   - **Headers**: 
     ```
     Authorization: Bearer your-cron-secret
     Content-Type: application/json
     ```

---

#### 選項 C: 本地開發/測試

對於本地開發，可以使用 Node.js 腳本：

創建 `scripts/send-reminders.js`：

```javascript
require('dotenv').config({ path: '.env.local' });

async function sendReminders() {
  const url = 'http://localhost:3000/api/send-reminders';
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.CRON_SECRET}`,
      'Content-Type': 'application/json'
    }
  });
  
  const result = await response.json();
  console.log('Reminder results:', result);
}

sendReminders().catch(console.error);
```

然後在 `package.json` 添加：

```json
{
  "scripts": {
    "send-reminders": "node scripts/send-reminders.js"
  }
}
```

執行：
```bash
npm run send-reminders
```

---

### 3. 系統運作方式 / How It Works

#### 預約流程 / Booking Flow

1. 家長在 `/admission/tuition` 頁面填寫表單
2. 選擇參觀日期時間（動態生成的星期三選項）
3. 提交表單後：
   - 發送確認郵件給中心管理員
   - 保存預約資訊到 `data/tour-bookings.json`
   - 包含完整的參觀日期時間

#### 提醒郵件發送 / Reminder Email Sending

每天當 Cron Job 執行時：

1. 系統讀取 `data/tour-bookings.json`
2. 查找明天的預約（且尚未發送提醒）
3. 對每個預約：
   - 發送提醒郵件給家長
   - 標記 `reminderSent: true`

#### 提醒郵件內容 / Reminder Email Content

包含：
- 📅 參觀日期和時間
- 📍 中心地址和聯絡方式
- 💡 參觀內容介紹
- 🗺️ Google 地圖連結
- 聯絡方式（如需改期）

---

### 4. 測試 / Testing

#### 手動測試提醒系統：

```bash
# 確保開發服務器正在運行
npm run dev

# 在另一個終端執行
curl -X POST http://localhost:3000/api/send-reminders \
  -H "Authorization: Bearer your-cron-secret" \
  -H "Content-Type: application/json"
```

或使用提供的腳本：
```bash
npm run send-reminders
```

#### 檢查預約資料：

查看 `data/tour-bookings.json` 文件查看所有保存的預約。

---

### 5. 監控 / Monitoring

#### 日誌 / Logs

- 成功發送：記錄在 Next.js 控制台
- 失敗：錯誤記錄在控制台和 API 響應中

#### API 響應格式 / API Response Format

成功：
```json
{
  "success": true,
  "message": "Sent 2 reminders",
  "count": 2
}
```

無需發送：
```json
{
  "success": true,
  "message": "No reminders to send",
  "count": 0
}
```

部分失敗：
```json
{
  "success": true,
  "message": "Sent 1 reminders",
  "count": 1,
  "errors": ["tour-1234567890-abc123"]
}
```

---

## 資料結構 / Data Structure

### 預約資料格式 / Booking Data Format

```typescript
{
  "id": "tour-1700000000000-abc123",
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "phone": "(510) 333-5943",
  "tourDateTime": "2025-11-20 Wednesday 10:30 AM - Chinese Tour",
  "tourDate": "2025-11-20",
  "children": [
    { "month": "6", "day": "15", "year": "2022" }
  ],
  "chineseTour": "Yes",
  "startDate": "Within a Month",
  "message": "Looking forward to the tour!",
  "locale": "en",
  "createdAt": "2025-11-18T10:30:00.000Z",
  "reminderSent": false
}
```

---

## 安全考量 / Security Considerations

1. **密鑰保護**: 
   - `CRON_SECRET` 應該是強隨機字串
   - 永遠不要提交到 Git
   - 定期更換

2. **API 驗證**:
   - `/api/send-reminders` 需要 Authorization header
   - 無效密鑰返回 401 Unauthorized

3. **資料保護**:
   - `data/` 目錄應添加到 `.gitignore`
   - 考慮加密敏感資料

---

## 故障排除 / Troubleshooting

### 問題：提醒郵件未發送

1. 檢查 Cron Job 是否正確執行
2. 檢查 `data/tour-bookings.json` 是否存在預約
3. 檢查預約的 `tourDate` 是否為明天
4. 檢查 `reminderSent` 是否為 `false`
5. 檢查郵件配置（EMAIL_USER, EMAIL_PASSWORD）

### 問題：Authorization 錯誤

1. 確認 `.env.local` 中設置了 `CRON_SECRET`
2. 確認 Cron Job 請求包含正確的 Authorization header
3. 格式：`Authorization: Bearer your-secret-here`

### 問題：找不到預約資料

1. 確認 `data/` 目錄存在
2. 確認提交表單時沒有錯誤
3. 檢查 Next.js 控制台日誌

---

## 未來改進 / Future Improvements

1. **資料庫整合**: 遷移到 PostgreSQL/MongoDB
2. **管理後台**: 創建預約管理界面
3. **SMS 提醒**: 添加簡訊提醒選項
4. **多語言提醒**: 根據用戶選擇發送中英文郵件
5. **取消/改期**: 添加線上改期功能
6. **統計分析**: 追蹤預約轉化率

---

## 相關文件 / Related Files

- `src/lib/tour-bookings.ts` - 預約資料管理
- `src/app/api/tour/route.ts` - 預約表單提交
- `src/app/api/send-reminders/route.ts` - 提醒郵件發送
- `src/app/admission/tuition/page.tsx` - 預約表單頁面
- `data/tour-bookings.json` - 預約資料存儲（自動生成）

---

如有問題，請聯絡開發團隊。
For questions, please contact the development team.
