require("dotenv").config({ path: ".env.local" });

async function sendReminders() {
  try {
    const url = "http://localhost:3000/api/send-reminders";
    
    console.log("🚀 Sending reminder emails...");
    console.log(`URL: ${url}`);
    
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.CRON_SECRET || "your-secret-key"}`,
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    
    console.log("\n📊 Results:");
    console.log(JSON.stringify(result, null, 2));
    
    if (response.ok) {
      console.log("\n✅ Success!");
    } else {
      console.log("\n❌ Failed!");
      console.log(`Status: ${response.status}`);
    }
  } catch (error) {
    console.error("\n❌ Error:", error.message);
    console.error("\nMake sure the development server is running:");
    console.error("  npm run dev");
  }
}

sendReminders();
