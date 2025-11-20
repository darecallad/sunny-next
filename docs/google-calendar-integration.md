# Google Calendar 自動整合 - Tour Booking

_Created: November 19, 2025_

## ✅ 功能已實現

當家長預約參觀（Schedule Tour）時，Center Admin 會收到包含日曆功能的郵件：

### 📧 郵件內容

**收件人：** Center.admin@sunnychildcare.com

**包含內容：**
1. ✅ 完整的預約資訊（家長、子女、日期時間）
2. ✅ **一鍵添加到 Google Calendar 按鈕**
3. ✅ **.ics 日曆附件**（可用於任何日曆應用）

---

## 🎯 使用方式

### 方法 1：點擊郵件中的按鈕（推薦）

1. **打開郵件**
   - 在頂部會看到黃色的日曆提示區塊
   
2. **點擊「Add to Google Calendar」按鈕**
   - 會自動打開 Google Calendar
   - 所有資訊已預先填好
   - 點擊「儲存」即可

3. **日曆活動包含：**
   - 標題：Campus Tour - [家長姓名] (語言)
   - 日期時間：正確的參觀時間
   - 地點：Sunny Child Care, 2586 Seaboard Ave, San Jose, CA 95131
   - 描述：完整的聯絡資訊
   - 提醒：提前 24 小時提醒

### 方法 2：使用附件 .ics 文件

1. **下載附件**
   - 郵件中會有 `tour-booking.ics` 附件
   
2. **打開附件**
   - 雙擊附件自動打開日曆應用
   - 或右鍵選擇「用 Google Calendar 打開」

3. **確認添加**
   - 檢查日期時間是否正確
   - 點擊「是」或「儲存」

---

## 📅 日曆活動詳情

### 自動生成的資訊

**活動標題格式：**
```
Campus Tour - [First Name] [Last Name] (Chinese/中文)
或
Campus Tour - [First Name] [Last Name] (English)
```

**活動時間：**
- 開始時間：預約的參觀時間
- 結束時間：自動設為 1 小時後
- 時區：America/Los_Angeles (加州時間)

**活動地點：**
```
Sunny Child Care
2586 Seaboard Ave
San Jose, CA 95131
```

**活動描述：**
```
Campus Tour

Contact:
Email: [家長郵箱]
Phone: [家長電話]

Language: Chinese/中文 (或 English)

Location: Sunny Child Care
2586 Seaboard Ave, San Jose, CA 95131
```

**提醒設定：**
- 提前 24 小時提醒

---

## 🔧 技術實現

### ICS 文件格式

系統自動生成符合 iCalendar 標準的 .ics 文件，包含：

- **VERSION**: 2.0
- **METHOD**: REQUEST
- **VALARM**: 24小時前提醒
- **ATTENDEE**: 家長郵箱（會收到更新通知）
- **ORGANIZER**: Center.admin@sunnychildcare.com

### Google Calendar 鏈接

使用 Google Calendar API 的 URL 格式：
```
https://calendar.google.com/calendar/render?action=TEMPLATE&...
```

包含參數：
- `text`: 活動標題
- `dates`: 開始/結束時間（ISO 格式）
- `details`: 活動描述
- `location`: 地點
- `ctz`: 時區（America/Los_Angeles）

---

## 📱 支持的日曆應用

### ✅ 完全支持

1. **Google Calendar** (推薦)
   - 網頁版
   - Android 應用
   - iOS 應用

2. **Apple Calendar** (iOS/macOS)
   - 通過 .ics 附件

3. **Outlook Calendar**
   - 網頁版
   - Windows 應用
   - 移動應用

4. **其他支持 .ics 的日曆應用**
   - Thunderbird
   - Yahoo Calendar
   - Any.do
   - Fantastical

---

## 🎨 郵件設計

### 日曆提示區塊

位置：郵件頂部（Header 下方）

樣式：
- 黃色背景 (#fff3cd)
- 橙色左邊框 (#f2a63b)
- 橙色按鈕，白色文字
- 響應式設計（手機/電腦都好看）

內容：
```
📅 Quick Add to Calendar:
Click the button below or open the attached .ics file 
to add this tour to your Google Calendar.

[➕ Add to Google Calendar] (按鈕)

Or: Open the attached tour-booking.ics file 
to add to any calendar app.
```

---

## 🔄 自動化流程

### 完整流程圖

```
用戶填寫表單
    ↓
提交預約
    ↓
API 接收數據
    ↓
生成 .ics 文件
    ↓
生成 Google Calendar 鏈接
    ↓
發送郵件（HTML + 附件）
    ↓
Admin 收到郵件
    ↓
點擊按鈕或打開附件
    ↓
自動添加到 Google Calendar ✅
    ↓
收到 24 小時前提醒 🔔
```

---

## ✅ 測試清單

部署後測試：

- [ ] 提交一個測試預約
- [ ] 檢查收到的郵件
- [ ] 確認看到「Add to Google Calendar」按鈕
- [ ] 確認有 .ics 附件
- [ ] 點擊按鈕，檢查 Google Calendar 是否打開
- [ ] 確認日期時間正確
- [ ] 確認地點資訊正確
- [ ] 確認聯絡資訊完整
- [ ] 儲存到日曆
- [ ] 檢查日曆中的活動
- [ ] 確認 24 小時提醒已設定

---

## 📝 注意事項

### 1. 日期時間格式要求

**必須包含：**
- 日期：YYYY-MM-DD 格式
- 時間：HH:MM AM/PM 格式
- 範例：`2025-11-22 (Friday) - 10:30 AM - Chinese Tour`

### 2. 時區設定

- 預設使用：America/Los_Angeles (加州時間)
- 如需更改，修改 `ctz` 參數

### 3. 提醒設定

- 預設：提前 24 小時
- 可在 .ics 中修改 `TRIGGER` 值：
  - `-PT1H`：提前 1 小時
  - `-PT24H`：提前 24 小時
  - `-P1D`：提前 1 天

### 4. 郵件客戶端兼容性

**完美支持：**
- Gmail (網頁版和應用)
- Outlook (網頁版和應用)
- Apple Mail

**可能需要手動打開附件：**
- Yahoo Mail
- 某些企業郵件系統

---

## 🚀 未來增強功能（可選）

### 選項 1：Google Calendar API 直接整合

**優點：**
- 自動添加到 Admin 日曆，無需點擊
- 可以自動更新/取消活動

**缺點：**
- 需要 OAuth 認證
- 需要額外的 Google API 配置
- 更複雜的設定

### 選項 2：發送給家長的日曆邀請

**目前狀態：** 只有 Admin 收到

**可以擴展為：**
- 同時發送給家長
- 家長可以接受/拒絕邀請
- 雙方日曆都自動更新

### 選項 3：SMS 提醒

**整合 Twilio：**
- 發送 SMS 提醒
- 提前 24 小時自動發送
- 包含參觀資訊和地址

---

## 📚 相關文件

- API 路由：`src/app/api/tour/route.ts`
- 郵件配置：`src/lib/email.ts`
- 預約儲存：`src/lib/tour-bookings.ts`

---

## 🔗 參考資源

- [iCalendar 規範](https://icalendar.org/)
- [Google Calendar URL Schemes](https://github.com/InteractionDesignFoundation/add-event-to-calendar-docs/blob/main/services/google.md)
- [.ics 文件格式](https://en.wikipedia.org/wiki/ICalendar)

---

_Last Updated: November 19, 2025_
