import { useState } from "react";

export default function OepnvSeniorenHilfeWebsite() {
  const [language, setLanguage] = useState("de");

  const text = {
    de: {
      title: "ÖPNV-Hilfe für Senioren in Lippstadt",
      subtitle: "Einfache Videos, Tipps und Anleitungen für Bus, Bahn und ÖPNV-Apps.",
      navHelp: "Hilfe",
      navVideos: "Videos",
      navTips: "App-Tipps",
      navSurvey: "Umfrage",
      navContact: "Kontakt",
      language: "Sprache ändern",
      welcomeTitle: "Willkommen",
      welcomeText:
        "Diese Website hilft älteren Menschen dabei, den öffentlichen Nahverkehr einfacher und sicherer zu nutzen. Hier finden Sie kurze Erklärvideos, einfache Tipps und Unterstützung bei der Nutzung von ÖPNV-Apps.",
      helpTitle: "Was finden Sie hier?",
      help1: "Hilfe beim Finden von Bus- und Bahnverbindungen",
      help2: "Tipps zur Nutzung von Fahrplan-Apps",
      help3: "Erklärvideos für digitale Tickets",
      help4: "Unterstützung beim Erkennen der richtigen Haltestelle",
      videoTitle: "Erklärvideos",
      videoText: "Hier können kurze Videos eingefügt werden, die Schritt für Schritt erklären, wie man digitale Angebote im ÖPNV nutzt.",
      video1: "Wie finde ich meine Verbindung?",
      video2: "Wie kaufe ich ein digitales Ticket?",
      video3: "Wie erkenne ich meine Haltestelle?",
      tipsTitle: "Einfache Tipps für die ÖPNV-App",
      tip1: "Öffnen Sie die App am besten schon vor der Fahrt.",
      tip2: "Geben Sie Start und Ziel langsam und sorgfältig ein.",
      tip3: "Achten Sie auf die Uhrzeit und die richtige Haltestelle.",
      tip4: "Machen Sie einen Screenshot vom Ticket oder der Verbindung.",
      tip5: "Fragen Sie eine vertraute Person, wenn Sie unsicher sind.",
      surveyTitle: "Umfrage zum Projekt",
      surveyText: "Hier kann der Link zur Umfrage oder ein QR-Code eingefügt werden.",
      surveyButton: "Zur Umfrage",
      contactTitle: "Kontakt",
      footer: "Hochschulprojekt – Digitale Mobilität von Senioren im ÖPNV"
    },
    en: {
      title: "Public Transport Help for Seniors in Lippstadt",
      subtitle: "Simple videos, tips and instructions for buses, trains and public transport apps.",
      navHelp: "Help",
      navVideos: "Videos",
      navTips: "App Tips",
      navSurvey: "Survey",
      navContact: "Contact",
      language: "Change language",
      welcomeTitle: "Welcome",
      welcomeText:
        "This website helps older people use public transport more easily and safely. Here you can find short explanation videos, simple tips and support for using public transport apps.",
      helpTitle: "What can you find here?",
      help1: "Help with finding bus and train connections",
      help2: "Tips for using timetable apps",
      help3: "Explanation videos for digital tickets",
      help4: "Support for recognizing the correct stop",
      videoTitle: "Explanation Videos",
      videoText: "Short videos can be added here to explain step by step how to use digital public transport services.",
      video1: "How do I find my connection?",
      video2: "How do I buy a digital ticket?",
      video3: "How do I recognize my stop?",
      tipsTitle: "Simple Tips for the Public Transport App",
      tip1: "Open the app before starting your trip.",
      tip2: "Enter your start and destination slowly and carefully.",
      tip3: "Pay attention to the time and the correct stop.",
      tip4: "Take a screenshot of the ticket or connection.",
      tip5: "Ask someone you trust if you are unsure.",
      surveyTitle: "Project Survey",
      surveyText: "The survey link or QR code can be added here.",
      surveyButton: "Go to Survey",
      contactTitle: "Contact",
      footer: "University Project – Digital Mobility of Seniors in Public Transport"
    },
    ar: {
      title: "مساعدة كبار السن في استخدام المواصلات العامة في ليبشتات",
      subtitle: "فيديوهات بسيطة، نصائح وتعليمات لاستخدام الحافلات والقطارات وتطبيقات المواصلات.",
      navHelp: "المساعدة",
      navVideos: "الفيديوهات",
      navTips: "نصائح التطبيق",
      navSurvey: "الاستبيان",
      navContact: "التواصل",
      language: "تغيير اللغة",
      welcomeTitle: "مرحباً",
      welcomeText:
        "يساعد هذا الموقع كبار السن على استخدام المواصلات العامة بطريقة أسهل وأكثر أماناً. هنا توجد فيديوهات قصيرة ونصائح بسيطة للمساعدة في استخدام تطبيقات المواصلات.",
      helpTitle: "ماذا تجد في هذا الموقع؟",
      help1: "مساعدة في البحث عن مواعيد الحافلات والقطارات",
      help2: "نصائح لاستخدام تطبيقات المواصلات",
      help3: "فيديوهات تشرح شراء التذاكر الرقمية",
      help4: "مساعدة في معرفة محطة النزول الصحيحة",
      videoTitle: "فيديوهات توضيحية",
      videoText: "يمكن إضافة فيديوهات قصيرة هنا تشرح خطوة بخطوة كيفية استخدام الخدمات الرقمية في المواصلات العامة.",
      video1: "كيف أجد رحلتي؟",
      video2: "كيف أشتري تذكرة رقمية؟",
      video3: "كيف أعرف محطة النزول؟",
      tipsTitle: "نصائح بسيطة لاستخدام تطبيق المواصلات",
      tip1: "افتح التطبيق قبل بداية الرحلة.",
      tip2: "اكتب نقطة البداية والوجهة ببطء وبانتباه.",
      tip3: "انتبه للوقت ولمحطة النزول الصحيحة.",
      tip4: "خذ صورة للشاشة للتذكرة أو الرحلة.",
      tip5: "اسأل شخصاً تثق به إذا كنت غير متأكد.",
      surveyTitle: "استبيان المشروع",
      surveyText: "يمكن إضافة رابط الاستبيان أو رمز QR هنا.",
      surveyButton: "الذهاب إلى الاستبيان",
      contactTitle: "التواصل",
      footer: "مشروع جامعي – التنقل الرقمي لكبار السن في المواصلات العامة"
    }
  };

  const t = text[language];
  const isArabic = language === "ar";

  return (
    <div dir={isArabic ? "rtl" : "ltr"} className="min-h-screen bg-slate-100 text-slate-900 font-sans">
      <section className="bg-blue-900 text-white py-16 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">{t.title}</h1>
          <p className="text-xl md:text-2xl leading-relaxed">{t.subtitle}</p>

          <div className="mt-8 bg-white/10 rounded-2xl p-4 inline-block">
            <label className="block mb-2 text-lg font-semibold">{t.language}</label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="text-slate-900 text-lg px-5 py-3 rounded-xl bg-white"
            >
              <option value="de">Deutsch</option>
              <option value="en">English</option>
              <option value="ar">العربية</option>
            </select>
          </div>
        </div>
      </section>

      <nav className="sticky top-0 bg-white shadow-md z-50 py-4 px-4 flex flex-wrap justify-center gap-4 md:gap-8 text-lg font-bold">
        <a href="#hilfe" className="hover:text-blue-700">{t.navHelp}</a>
        <a href="#videos" className="hover:text-blue-700">{t.navVideos}</a>
        <a href="#tipps" className="hover:text-blue-700">{t.navTips}</a>
        <a href="#umfrage" className="hover:text-blue-700">{t.navSurvey}</a>
        <a href="#kontakt" className="hover:text-blue-700">{t.navContact}</a>
      </nav>

      <main>
        <section id="hilfe" className="py-16 px-6 max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">{t.welcomeTitle}</h2>
            <p className="text-xl leading-relaxed">{t.welcomeText}</p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">{t.helpTitle}</h2>
            <div className="grid md:grid-cols-2 gap-6 text-xl">
              <div className="bg-blue-50 rounded-2xl p-6">✅ {t.help1}</div>
              <div className="bg-blue-50 rounded-2xl p-6">✅ {t.help2}</div>
              <div className="bg-blue-50 rounded-2xl p-6">✅ {t.help3}</div>
              <div className="bg-blue-50 rounded-2xl p-6">✅ {t.help4}</div>
            </div>
          </div>
        </section>

        <section id="videos" className="bg-blue-50 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 text-center">{t.videoTitle}</h2>
            <p className="text-xl text-center mb-10 max-w-3xl mx-auto">{t.videoText}</p>

            <div className="grid md:grid-cols-3 gap-8">
              {[t.video1, t.video2, t.video3].map((title, index) => (
                <div key={index} className="bg-white rounded-3xl shadow-lg overflow-hidden">
                  <div className="aspect-video bg-slate-300 flex items-center justify-center text-2xl font-bold text-slate-600">
                    VIDEO {index + 1}
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-blue-900">{title}</h3>
                    <p className="text-lg">YouTube-Video oder eigenes Video hier einfügen.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="tipps" className="py-16 px-6 max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 text-center">{t.tipsTitle}</h2>
          <div className="space-y-5 text-xl">
            {[t.tip1, t.tip2, t.tip3, t.tip4, t.tip5].map((tip, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-md p-6 flex gap-4 items-start">
                <span className="bg-blue-900 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold shrink-0">
                  {index + 1}
                </span>
                <p>{tip}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="umfrage" className="bg-blue-50 py-16 px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">{t.surveyTitle}</h2>
            <p className="text-xl mb-8">{t.surveyText}</p>
            <button className="bg-blue-900 hover:bg-blue-800 text-white text-2xl font-bold px-10 py-5 rounded-2xl shadow-lg">
              {t.surveyButton}
            </button>
            <div className="mt-10 w-52 h-52 bg-slate-200 mx-auto rounded-2xl flex items-center justify-center text-slate-500 text-xl font-bold">
              QR CODE
            </div>
          </div>
        </section>

        <section id="kontakt" className="py-16 px-6 max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 text-center">{t.contactTitle}</h2>
            <div className="space-y-4 text-xl">
              <p><strong>Name:</strong> ___________________</p>
              <p><strong>E-Mail:</strong> ___________________</p>
              <p><strong>Hochschule:</strong> ___________________</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-blue-900 text-white text-center py-8 px-6 text-lg">
        <p>© 2026 {t.footer}</p>
      </footer>
    </div>
  );
}
