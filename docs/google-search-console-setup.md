# Google Search Console 設置指南

_Created: November 19, 2025_

## 📊 目標

在 Google Search Console 查看 Sunny Child Care 網站的搜索流量、排名和性能數據。

---

## 🚀 快速設置步驟

### 第 1 步：創建 Google Search Console 帳號

1. 前往 [Google Search Console](https://search.google.com/search-console)
2. 使用你的 Google 帳號登入（建議使用 Center.admin@sunnychildcare.com 或管理員帳號）
3. 點擊 **"Add Property"** 按鈕

### 第 2 步：添加網站資源

選擇資源類型：
- **Domain Property（推薦）**: `sunnychildcare.com`
  - 包含所有子域名和協議（http, https, www, non-www）
  - 需要 DNS 驗證
  
- **URL Prefix Property**: `https://www.sunnychildcare.com`
  - 只追蹤特定 URL
  - 可使用多種驗證方法

**建議：先從 URL Prefix 開始（較簡單），之後可升級到 Domain Property。**

---

## ✅ 驗證網站所有權

### 方法 A: HTML Meta Tag 驗證（最簡單 - 推薦）

1. 在 Google Search Console 選擇 **"HTML tag"** 驗證方法
2. Google 會提供一個驗證碼，例如：
   ```html
   <meta name="google-site-verification" content="1234567890abcdef" />
   ```

3. **將驗證碼添加到網站：**
   
   打開文件：`src/app/layout.tsx`
   
   找到這一行：
   ```typescript
   verification: {
     // google: "your-google-site-verification-code",
   },
   ```
   
   替換為：
   ```typescript
   verification: {
     google: "1234567890abcdef",  // 使用 Google 提供的驗證碼
   },
   ```

4. **部署更新到 Vercel：**
   ```bash
   git add .
   git commit -m "Add Google Search Console verification"
   git push origin master
   ```

5. 等待 Vercel 部署完成（1-2 分鐘）

6. 回到 Google Search Console，點擊 **"Verify"** 按鈕

✅ **完成！** 驗證成功後，你將可以訪問 Search Console 數據。

---

### 方法 B: HTML 文件上傳驗證

1. 下載 Google 提供的 HTML 驗證文件（例如：`google1234567890abcdef.html`）

2. **創建驗證文件：**
   ```bash
   # 在 public 文件夾創建驗證文件
   echo "" > public/google1234567890abcdef.html
   ```

3. 提交並部署：
   ```bash
   git add public/google1234567890abcdef.html
   git commit -m "Add Google verification file"
   git push origin master
   ```

4. 驗證文件將可通過以下 URL 訪問：
   `https://www.sunnychildcare.com/google1234567890abcdef.html`

5. 在 Search Console 點擊 **"Verify"**

---

### 方法 C: DNS 驗證（Domain Property 必須）

1. Google 會提供一個 TXT 記錄，例如：
   ```
   google-site-verification=1234567890abcdef
   ```

2. **登入你的域名註冊商**（例如：GoDaddy, Namecheap, Cloudflare）

3. 添加 DNS TXT 記錄：
   - **Type**: TXT
   - **Name**: @ (或留空)
   - **Value**: `google-site-verification=1234567890abcdef`

4. 保存 DNS 設置（可能需要 24-48 小時生效，但通常幾分鐘內即可）

5. 在 Search Console 點擊 **"Verify"**

---

## 📈 提交 Sitemap

驗證完成後，立即提交 sitemap 以加快索引速度：

1. 在 Google Search Console 左側菜單選擇 **"Sitemaps"**
2. 輸入 sitemap URL：`https://www.sunnychildcare.com/sitemap.xml`
3. 點擊 **"Submit"**

✅ **Sitemap 狀態：** 你應該會看到 "Success" 狀態和 "11 pages discovered"

---

## 🔧 初始設置（驗證後）

### 1. 設置首選域名
1. 前往 **Settings** → **Property settings**
2. 確認首選域名設置為 `https://www.sunnychildcare.com`

### 2. 設置目標國家/地區
1. 前往 **Settings** → **International Targeting**
2. 選擇 **Country/Region**: United States
3. Language: English (主要) + Chinese (次要)

### 3. 設置用戶管理
1. 前往 **Settings** → **Users and permissions**
2. 添加其他需要訪問的團隊成員
3. 權限級別：
   - **Owner**: 完全控制（你的主帳號）
   - **Full**: 完整訪問權限（其他管理員）
   - **Restricted**: 僅查看數據（營銷團隊）

---

## 📊 開始查看數據

### 等待時間
- **驗證後**: 立即可訪問 Search Console
- **數據出現**: 2-3 天內開始看到新數據
- **完整歷史數據**: 僅顯示驗證後的數據（無法追溯之前）

### 主要報告位置

#### 1. Performance Report（性能報告）
**路徑**: Search Console → Performance

**數據指標：**
- **Total Clicks**: 總點擊次數
- **Total Impressions**: 總曝光次數
- **Average CTR**: 平均點擊率
- **Average Position**: 平均排名位置

**查看內容：**
- **Queries**: 用戶搜索的關鍵詞
- **Pages**: 哪些頁面獲得流量
- **Countries**: 流量來源國家
- **Devices**: 設備類型（手機/桌面/平板）

#### 2. URL Inspection（網址檢查）
**路徑**: Search Console → URL Inspection

**用途：**
- 檢查特定頁面的索引狀態
- 請求 Google 重新索引頁面
- 查看 Googlebot 如何看待你的頁面

#### 3. Coverage Report（覆蓋範圍）
**路徑**: Search Console → Coverage

**查看：**
- 已索引頁面數量
- 索引錯誤和警告
- 排除的頁面（noindex, robots.txt 阻止等）

#### 4. Enhancements（增強功能）
**路徑**: Search Console → Enhancements

**包含：**
- Mobile Usability（手機可用性）
- Core Web Vitals（核心網頁指標）
- Breadcrumbs（麵包屑導航）

---

## 🎯 重要監控指標

### 每週檢查（建議）

1. **Search Performance**
   - 總點擊數趨勢
   - Top 10 關鍵詞排名變化
   - CTR 是否改善

2. **Coverage Issues**
   - 是否有新的索引錯誤
   - 所有重要頁面是否已索引（目標：11/11 頁面）

3. **Mobile Usability**
   - 是否有手機可用性問題
   - 目標：0 errors

4. **Core Web Vitals**
   - LCP < 2.5s
   - FID < 100ms
   - CLS < 0.1

### 每月檢查

1. **Keyword Rankings**
   - "childcare San Jose" 排名變化
   - "bilingual preschool San Jose" 排名
   - 其他目標關鍵詞表現

2. **Backlinks**
   - 新增外部連結數量
   - 連結來源質量

3. **Click-Through Rate (CTR)**
   - 各頁面 CTR 是否改善
   - 是否需要優化 meta description

---

## 🚨 常見問題排查

### 問題 1: 驗證失敗
**可能原因：**
- Meta tag 沒有正確添加到 `<head>` 部分
- 網站尚未部署更新
- 使用了錯誤的驗證碼

**解決方案：**
1. 檢查 `layout.tsx` 是否正確添加驗證碼
2. 確認 Vercel 部署已完成
3. 清除瀏覽器緩存並重試
4. 使用 "View Page Source" 確認 meta tag 存在

### 問題 2: 沒有顯示數據
**可能原因：**
- 驗證時間太短（需要 2-3 天）
- 網站尚未被 Google 爬取
- Sitemap 未提交

**解決方案：**
1. 等待 2-3 天讓 Google 爬取網站
2. 提交 sitemap.xml
3. 使用 URL Inspection 工具手動請求索引

### 問題 3: 頁面未被索引
**可能原因：**
- robots.txt 阻止爬取
- 頁面有 noindex meta tag
- 頁面內容質量低或重複

**解決方案：**
1. 檢查 robots.txt 是否正確：`https://www.sunnychildcare.com/robots.txt`
2. 確認頁面沒有 `<meta name="robots" content="noindex">`
3. 使用 URL Inspection 工具診斷具體問題
4. 請求 Google 重新索引該頁面

---

## 📱 Google Search Console App

### 手機監控
下載 Google Search Console 手機應用：
- **iOS**: [App Store](https://apps.apple.com/app/google-search-console/id1227457319)
- **Android**: [Google Play](https://play.google.com/store/apps/details?id=com.google.android.apps.searchconsole)

**功能：**
- 接收索引問題通知
- 快速查看性能數據
- 請求重新索引頁面
- 隨時隨地監控網站健康狀況

---

## 🎓 進階功能

### 1. Rich Results（豐富結果）
如果你的結構化數據（LocalBusiness schema）正確配置，可以在這裡監控：
- **路徑**: Search Console → Enhancements → Rich Results
- 查看是否有 Rich Results 錯誤或警告

### 2. Experience Metrics
監控用戶體驗指標：
- **Core Web Vitals**: 頁面加載速度和穩定性
- **Mobile Usability**: 手機友好性
- **HTTPS**: 安全連接狀態

### 3. Links Report
查看外部和內部連結：
- **External links**: 哪些網站連結到你
- **Top linking sites**: 最多連結的網站
- **Internal links**: 網站內部連結結構

---

## ✅ 設置檢查清單

完成以下步驟以確保 Google Search Console 正確運行：

- [ ] 在 Google Search Console 創建帳號
- [ ] 添加網站資源（URL Prefix: https://www.sunnychildcare.com）
- [ ] 選擇驗證方法（推薦：HTML Meta Tag）
- [ ] 將驗證碼添加到 `src/app/layout.tsx`
- [ ] 提交代碼到 GitHub：`git push origin master`
- [ ] 等待 Vercel 部署完成
- [ ] 在 Search Console 點擊 "Verify" 按鈕
- [ ] 驗證成功後提交 sitemap: `https://www.sunnychildcare.com/sitemap.xml`
- [ ] 設置首選域名和目標國家/地區
- [ ] 添加團隊成員訪問權限（如需要）
- [ ] 下載 Google Search Console 手機應用
- [ ] 設置每週性能報告郵件提醒

---

## 📚 相關資源

- [Google Search Console 官方文檔](https://support.google.com/webmasters/)
- [Search Console 驗證指南](https://support.google.com/webmasters/answer/9008080)
- [Sitemap 最佳實踐](https://developers.google.com/search/docs/advanced/sitemaps/build-sitemap)
- [Core Web Vitals 指南](https://web.dev/vitals/)
- [Rich Results 測試工具](https://search.google.com/test/rich-results)

---

## 📧 需要幫助？

如果遇到問題：
1. 查看 [Google Search Central 社區](https://support.google.com/webmasters/community)
2. 聯繫 Vercel 支持（部署相關問題）
3. 檢查本文檔的"常見問題排查"部分

---

**Last Updated:** November 19, 2025

**Status:** 
- ✅ Sitemap 已創建並可訪問
- ✅ Robots.txt 已配置
- ✅ 驗證代碼位置已預留
- ⏳ 等待你從 Google 獲取驗證碼並添加到 `layout.tsx`
