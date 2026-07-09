const translations = {
  "zh-Hant": {
    "hero.badge": "ANDROID 封閉測試招募中",
    "hero.lead": "快一點，再快一點。和 8-bit 萌寵一起挑戰你的反應極限。",
    "hero.cta": "加入封閉測試",
    "hero.details": "查看測試任務",
    "stats.recruits": "預計招募人數",
    "stats.days": "需持續參與天數",
    "stats.platform": "目前測試平台",
    "game.eyebrow": "反應遊戲 × 像素萌寵",
    "game.title": "你的手速，也會養出專屬搭檔",
    "game.body": "點擊指定顏色、累積 Combo、突破無限關卡。萌寵能提供有限度的慢動作與輔助技能，但最後一擊仍然要靠你。",
    "game.feature1": "簡單上手、逐步加速的反應關卡",
    "game.feature2": "8-bit 萌寵養成、技能與狀態照護",
    "game.feature3": "雙語介面、成績圖卡與獎勵廣告測試",
    "game.caption": "實際 Android 測試畫面",
    "mission.eyebrow": "CLOSED BETA MISSION",
    "mission.title": "這 14 天，需要你一起完成",
    "mission.intro": "Google Play 要求至少 12 位測試者連續參與 14 天。我們會招募更多人，避免有人中途退出造成測試重來。",
    "mission.step1.title": "留下 Gmail",
    "mission.step1.body": "提供你在 Google Play 使用的 Gmail 帳號。",
    "mission.step2.title": "加入測試",
    "mission.step2.body": "收到連結後選擇加入，並從 Play 商店安裝 PokeDot。",
    "mission.step3.title": "保持 14 天",
    "mission.step3.body": "期間不要退出測試；有空時玩幾關、照顧萌寵。",
    "mission.step4.title": "告訴我們感受",
    "mission.step4.body": "回報卡頓、誤觸、翻譯或任何讓你困惑的地方。",
    "pet.eyebrow": "你的測試夥伴",
    "pet.title": "它會幫忙，但不會替你玩",
    "pet.body": "測試萌寵的命中率、能量、心情與親密度是否真的有感，也幫我們找出照護節奏太快或太慢的地方。",
    "signup.eyebrow": "READY?",
    "signup.title": "成為 PokeDot 第一批挑戰者",
    "signup.body": "需要 Android 手機與 Google Play Gmail。你的信箱只用於加入封閉測試與必要的測試通知。",
    "signup.cta": "寄信申請測試",
    "signup.pending": "我們會將 Google Play 測試網址回寄給你。",
    "footer.privacy": "隱私權政策",
    "footer.contact": "聯絡我們"
  },
  en: {
    "hero.badge": "ANDROID CLOSED BETA",
    "hero.lead": "Tap fast. Then tap faster. Push your reaction speed with an 8-bit pet by your side.",
    "hero.cta": "Join the closed beta",
    "hero.details": "View the test mission",
    "stats.recruits": "Testers we aim to recruit",
    "stats.days": "Days to stay opted in",
    "stats.platform": "Current test platform",
    "game.eyebrow": "REACTION GAME × PIXEL PETS",
    "game.title": "Your reflexes raise a partner of your own",
    "game.body": "Tap the target color, build combos, and climb endless stages. Pets offer limited slow-motion and support skills, but every decisive tap is still yours.",
    "game.feature1": "Easy to learn, increasingly intense reaction stages",
    "game.feature2": "8-bit pet care, skills, energy, mood, and bonding",
    "game.feature3": "Bilingual UI, result cards, and rewarded-ad testing",
    "game.caption": "Captured from the Android test build",
    "mission.eyebrow": "CLOSED BETA MISSION",
    "mission.title": "A 14-day mission we complete together",
    "mission.intro": "Google Play requires at least 12 testers to stay opted in continuously for 14 days. We are recruiting extra testers so one dropout does not reset the run.",
    "mission.step1.title": "Submit your Gmail",
    "mission.step1.body": "Use the Gmail account connected to Google Play on your phone.",
    "mission.step2.title": "Opt in and install",
    "mission.step2.body": "Open the invitation, join the test, and install PokeDot from Google Play.",
    "mission.step3.title": "Stay for 14 days",
    "mission.step3.body": "Remain opted in. Play a few stages and care for your pet when you can.",
    "mission.step4.title": "Tell us what felt off",
    "mission.step4.body": "Report stutters, missed taps, unclear copy, or anything that breaks the flow.",
    "pet.eyebrow": "YOUR TEST PARTNER",
    "pet.title": "It helps, but it never plays for you",
    "pet.body": "Help us test whether pet accuracy, energy, mood, and bond feel meaningful, and whether the care rhythm is too demanding or too quiet.",
    "signup.eyebrow": "READY?",
    "signup.title": "Become one of PokeDot's first challengers",
    "signup.body": "You need an Android phone and a Google Play Gmail account. Your email is used only for closed-test access and essential test updates.",
    "signup.cta": "Apply by email",
    "signup.pending": "We will reply with your Google Play testing link.",
    "footer.privacy": "Privacy policy",
    "footer.contact": "Contact"
  }
};

const languageButtons = document.querySelectorAll("[data-language]");
const translatableElements = document.querySelectorAll("[data-i18n]");

function setLanguage(language) {
  const dictionary = translations[language] || translations["zh-Hant"];
  document.documentElement.lang = language;
  document.title = language === "en" ? "PokeDot Closed Beta" : "PokeDot 封閉測試招募";

  translatableElements.forEach((element) => {
    const text = dictionary[element.dataset.i18n];
    if (text) element.textContent = text;
  });

  languageButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.language === language));
  });

  localStorage.setItem("pokedot-beta-language", language);
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});

const preferredLanguage =
  localStorage.getItem("pokedot-beta-language") ||
  (navigator.language.toLowerCase().startsWith("zh") ? "zh-Hant" : "en");

setLanguage(preferredLanguage);
