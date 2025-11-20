# Google Search Console 設定指南 - 快速版

_Created: November 19, 2025_

## ✅ 驗證狀態

**Status: 已完成 - 準備驗證**

驗證碼已添加到網站：
```html
<meta name="google-site-verification" content="nv2kB0y_hUkqbG__iE_-boqxuTLEi1pi_DpVybFMods" />
```

位置：`src/app/layout.tsx` (第 78 行)

---

## 📋 接下來的步驟

### 第一步：部署更新到 Vercel

1. **Commit 代碼變更：**
   ```bash
   git add .
   git commit -m "Add Google Search Console verification & GEO SEO optimization"
   git push origin master
   ```

2. **等待 Vercel 自動部署：**
   - Vercel 會自動偵測 GitHub 推送
   - 部署時間：通常 1-2 分鐘
   - 檢查：https://vercel.com/darecallad/sunny-next

3. **確認部署完成：**
   - 訪問 https://www.sunnychildcare.com
   - 查看頁面源代碼 (Ctrl+U)
   - 搜尋 "google-site-verification"
   - 確認看到你的驗證碼

---

### 第二步：在 Google Search Console 完成驗證

1. **返回 Google Search Console**
   - 網址：https://search.google.com/search-console

2. **點擊「驗證」按鈕**
   - 如果已經關閉窗口，重新開始驗證流程
   - 選擇「HTML 標記」方法
   - 應該會看到你之前的驗證碼

3. **點擊「驗證」**
   - Google 會檢查你的網站
   - 應該立即看到 ✅ "驗證成功"
   - 如果失敗，等待 5-10 分鐘後重試（DNS 傳播）

---

### 第三步：提交 Sitemap

**驗證成功後立即進行：**

1. **在左側菜單找到「Sitemap」**

2. **輸入 Sitemap URL：**
   ```
   https://www.sunnychildcare.com/sitemap.xml
   ```

3. **點擊「提交」**
   - 狀態會顯示「成功」
   - Google 會開始索引你的頁面

---

### 第四步：基本設定

#### 1. 設定目標國家和地區

**位置：** 設定 > 國際定位

```
國家/地區：美國 (United States)
```

#### 2. 檢查索引覆蓋範圍

**位置：** 索引 > 網頁

- 查看已索引的頁面數量
- 目標：10-12 頁（所有主要頁面）
- 檢查是否有錯誤或警告

#### 3. 查看行動裝置可用性

**位置：** 體驗 > 行動裝置可用性

- 應該顯示 ✅ 全部通過
- 如有問題，查看詳細報告

---

## 📊 開始監控數據（驗證後 2-3 天）

### 1. 成效報告

**位置：** 成效 > 搜尋結果

**監控指標：**
- **總點擊次數** - 有多少人點擊你的網站
- **總曝光次數** - 你的網站在搜尋結果中顯示多少次
- **平均點閱率 (CTR)** - 點擊次數 ÷ 曝光次數
- **平均排名** - 你的網站在搜尋結果中的平均位置

### 2. 重點關鍵字

**在「查詢」標籤查看這些關鍵字的表現：**

優先級 1（主要關鍵字）：
- childcare san jose
- daycare san jose
- preschool san jose
- bilingual preschool san jose

優先級 2（次要關鍵字）：
- infant care san jose
- toddler daycare san jose
- kindergarten prep san jose
- mandarin preschool san jose

優先級 3（地區特定）：
- childcare san jose 95131
- daycare seaboard ave
- preschool near me (with location data)

### 3. 設定目標排名

**3 個月目標：**
- "bilingual preschool san jose" - 前 10 名
- "childcare san jose 95131" - 前 5 名
- "mandarin daycare san jose" - 前 3 名

**6 個月目標：**
- "childcare san jose" - 進入 Local Pack (前 3)
- "preschool san jose" - 前 10 名
- 所有關鍵字排名提升

---

## 🎯 每週檢查清單

### 星期一早上（10 分鐘）

1. **打開 Google Search Console**
   - https://search.google.com/search-console

2. **查看「概覽」頁面**
   - 總點擊次數（與上週比較）
   - 總曝光次數（是否增加？）
   - 平均點閱率（目標：> 3%）

3. **檢查「覆蓋範圍」**
   - 有效頁面數量（目標：10-12）
   - 是否有新的錯誤？
   - 是否有警告？

4. **查看熱門查詢**
   - 哪些關鍵字帶來最多流量？
   - 排名是上升還是下降？
   - 是否有意外的高排名關鍵字？

### 採取行動（如果需要）

**如果看到：**
- ❌ 索引錯誤 → 檢查 robots.txt 和頁面是否可訪問
- 📉 流量下降 → 檢查網站是否正常運行
- 📈 某關鍵字排名提升 → 在該主題創建更多內容
- 🔍 新的高曝光查詢 → 優化該關鍵字的頁面

---

## 🚀 進階功能（可選）

### 1. 設定郵件通知

**位置：** 設定 > 使用者和權限 > 通知

**啟用通知：**
- ✅ 重大索引問題
- ✅ 手動動作（如果 Google 發現問題）
- ✅ Sitemap 問題

### 2. 連結 Google Analytics

**如果你有 GA4：**
- 在 Search Console 點擊「設定」
- 選擇「關聯 Google Analytics (分析)」
- 可以看到更詳細的行為數據

### 3. 使用網址檢查工具

**測試個別頁面：**
1. 在頂部搜尋欄輸入完整 URL
2. 點擊「檢查網址」
3. 查看 Google 如何看待該頁面
4. 如果未索引，可以「要求建立索引」

---

## 📱 快速參考

### 重要網址

**你的資源：**
- Website: https://www.sunnychildcare.com
- Sitemap: https://www.sunnychildcare.com/sitemap.xml
- Robots: https://www.sunnychildcare.com/robots.txt

**Google 工具：**
- Search Console: https://search.google.com/search-console
- PageSpeed Insights: https://pagespeed.web.dev/
- Mobile-Friendly Test: https://search.google.com/test/mobile-friendly

### 驗證碼

```
nv2kB0y_hUkqbG__iE_-boqxuTLEi1pi_DpVybFMods
```

---

## ❓ 常見問題

### Q: 驗證後多久能看到數據？

**A:** 通常需要 2-3 天
- 第 1 天：驗證完成，sitemap 提交
- 第 2-3 天：Google 開始爬取和索引
- 第 4-7 天：開始看到搜尋數據
- 2-4 週：數據變得有意義

### Q: 為什麼我看不到任何流量？

**A:** 可能原因：
1. 網站太新（剛上線）→ 等待 1-2 週
2. Google 還在索引 → 檢查「覆蓋範圍」
3. 沒有排名 → 繼續 SEO 優化
4. 時區設定 → 檢查日期範圍

### Q: 如何知道 SEO 優化是否有效？

**A:** 觀察這些指標（每週比較）：
- 📈 總曝光次數增加 = SEO 見效
- 📈 平均排名上升 = 關鍵字優化有效
- 📈 點閱率 (CTR) 提高 = 標題描述吸引人
- 📈 點擊次數增加 = 實際流量增長

### Q: 多久應該檢查一次？

**A:** 建議頻率：
- 前 2 週：每天檢查（確保沒問題）
- 1-3 個月：每週檢查一次
- 3 個月後：每月檢查一次
- 有重大更新時：更新後 3-5 天檢查

---

## ✅ 完成檢查表

驗證完成後，確認這些項目：

- [ ] ✅ Google Search Console 驗證成功
- [ ] ✅ Sitemap 已提交
- [ ] ✅ 設定目標國家/地區（美國）
- [ ] ✅ 確認沒有索引錯誤
- [ ] ✅ 行動裝置可用性通過
- [ ] ✅ 設定郵件通知
- [ ] 📅 在日曆設定每週一早上檢查提醒

---

## 📚 相關文檔

- [完整 Google Search Console 設定指南](./google-search-console-setup.md)
- [SEO 優化計劃](./seo-optimization.md)
- [地理位置 & 本地 SEO](./geo-local-seo.md)
- [移動優化指南](./seo-mobile-optimization.md)

---

_Last Updated: November 19, 2025_

**需要幫助？** 
- Google Search Console 說明中心：https://support.google.com/webmasters
- Next.js SEO 文檔：https://nextjs.org/docs/app/building-your-application/optimizing/metadata
