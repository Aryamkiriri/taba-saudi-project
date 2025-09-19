// بيانات المدن — الطبع + الوصف + الألوان
const citiesData = {
    "الرياض": {
        taba: "الكرم",
        description: "طبعك كريم مثل تراب نجد... ما يبخل حتى لو كان آخر لقمة، ويفتح بيته قبل ما يسأل عن الضيف!",
        icon: "☕",
        primaryColor: "#004d26",
        secondaryColor: "#D32F2F",
        bgColor: "#E8F5E9"
    },
    "جدة": {
        taba: "الشجاعة",
        description: "طبعك شجاع مثل بحر جدة... ما يهاب التحدي، ويحب يواجه الصعاب بصدر رحب وقلب أبيض!",
        icon: "🌊",
        primaryColor: "#0D47A1",
        secondaryColor: "#FF6D00",
        bgColor: "#E3F2FD"
    },
    "الطائف": {
        taba: "الضيافة",
        description: "طبعك ضيافة ورد الطائف... يفرح بالضيف قبل ما يطرق الباب، ويخليك تحس إنك في بيتك!",
        icon: "🌹",
        primaryColor: "#33691E",
        secondaryColor: "#F57F17",
        bgColor: "#FFF8E1"
    },
    "الدمام": {
        taba: "الوفاء",
        description: "وفي مثل نخيل الشرقية... ما ينسى معروف، ولا يقطع ود، ولو مرّت السنين!",
        icon: "🌴",
        primaryColor: "#1B5E20",
        secondaryColor: "#388E3C",
        bgColor: "#F1F8E9"
    },
    "مكة": {
        taba: "الأصالة",
        description: "أصيل مثل جبال مكة... ثابت على المبدأ، عريق في الأخلاق، وقلبه مهبط للخير!",
        icon: "🕋",
        primaryColor: "#BF360C",
        secondaryColor: "#FFA000",
        bgColor: "#FFF3E0"
    },
    "المدينة": {
        taba: "الرحمة",
        description: "قلبك رحمة مثل نسيم المدينة... يحمل الخير لكل من يقابله، ويطيب الجروح بكلمة طيبة!",
        icon: "🕌",
        primaryColor: "#3E2723",
        secondaryColor: "#8D6E63",
        bgColor: "#EFEBE9"
    },
    "القصيم": {
        taba: "الإخلاص",
        description: "مخلص مثل تمر القصيم... حلو من جوا، وطيب في السر والعلن، وما يغير لو غاب الزمن!",
        icon: "🍇",
        primaryColor: "#5D4037",
        secondaryColor: "#A1887F",
        bgColor: "#EFEBE9"
    },
    "تبوك": {
        taba: "الشجاعة",
        description: "شجاع مثل فرسان تبوك — ما يهاب الصعاب ويحب المغامرة.",
        icon: "🏰",
        primaryColor: "#0D47A1",
        secondaryColor: "#FF6D00",
        bgColor: "#E3F2FD"
    },
    "جازان": {
        taba: "الكرم",
        description: "كريم مثل خيرات جازان — ما يفرق بين قريب وغريب.",
        icon: "☕",
        primaryColor: "#33691E",
        secondaryColor: "#F57F17",
        bgColor: "#FFF8E1"
    },
    "نجران": {
        taba: "الوفاء",
        description: "وفي مثل حجار نجران — صلب في الود، ما يتغير مع الزمن.",
        icon: "🏜️",
        primaryColor: "#1B5E20",
        secondaryColor: "#388E3C",
        bgColor: "#F1F8E9"
    },
    "حائل": {
        taba: "الشجاعة",
        description: "شجاع مثل صحراء حائل — واسع الصدر، قوي القلب.",
        icon: "🐎",
        primaryColor: "#BF360C",
        secondaryColor: "#FFA000",
        bgColor: "#FFF3E0"
    },
    "الباحة": {
        taba: "الضيافة",
        description: "طبعك ضيافة جبال الباحة — يفتح بيته قبل ما يفتح بابه.",
        icon: "⛰️",
        primaryColor: "#3E2723",
        secondaryColor: "#8D6E63",
        bgColor: "#EFEBE9"
    },
    "الجوف": {
        taba: "الأصالة",
        description: "أصيل مثل تراث الجوف — محافظ على جذوره، فخور بأصالته.",
        icon: "🏛️",
        primaryColor: "#004d26",
        secondaryColor: "#D32F2F",
        bgColor: "#E8F5E9"
    },
    "default": {
        taba: "الأصالة",
        description: "طبعك أصيل... مثل تراب هذا الوطن الطاهر — فخور بجذورك، محافظ على قيمك، وراسخ في انتمائك!",
        icon: "🇸🇦",
        primaryColor: "#006C35",
        secondaryColor: "#D32F2F",
        bgColor: "#F5F5F5"
    }
};

// عناصر DOM
const nameInput = document.getElementById('nameInput');
const cityInput = document.getElementById('cityInput');
const discoverBtn = document.getElementById('discoverBtn');
const resultSection = document.getElementById('resultSection');
const resultBox = document.getElementById('resultBox');
const bonusMessage = document.getElementById('bonusMessage');
const bgAudio = document.getElementById('bgAudio');

// حدث الزر
discoverBtn.addEventListener('click', function() {
    const name = nameInput.value.trim();
    const city = cityInput.value;

    if (!name || !city) {
        alert("⚠️ الرجاء إدخال الاسم والمدينة!");
        return;
    }

    // تشغيل الموسيقى
    bgAudio.play().catch(e => console.log("فشل تشغيل الصوت:", e));

    // جلب بيانات المدينة
    const data = citiesData[city] || citiesData["default"];

    // بناء HTML النتيجة
    resultBox.innerHTML = `
        <h2 style="color: ${data.primaryColor};">${data.icon} طبعك: ${data.taba} ${data.icon}</h2>
        <div class="user-info" style="color: ${data.secondaryColor};">
            👤 <strong>${name}</strong> — من مدينة <strong>${city}</strong>
        </div>
        <div class="description" style="color: ${data.primaryColor};">
            ${data.description}
        </div>
        <p style="font-size: 1.3em; color: ${data.secondaryColor}; font-weight: bold; letter-spacing: 1px; margin-top: 30px;">
            #عزنا_بطبعنا 🇸🇦
        </p>
    `;

    // تغيير لون الخلفية
    resultBox.style.backgroundColor = data.bgColor;
    resultBox.style.borderColor = data.primaryColor;

    // إظهار النتيجة
    resultSection.classList.remove('hidden');

    // رسالة تحفيزية
    bonusMessage.textContent = `🏆 طبع "${data.taba}" من أنبل الطباع — اللي يملكه، يرفع رأس وطنه!`;
    bonusMessage.style.display = "block";

    // التمرير إلى النتيجة
    resultSection.scrollIntoView({ behavior: 'smooth' });
});