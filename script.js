function changeLang(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';

    // تغيير كل النصوص
    document.querySelectorAll('[data-ar],[data-es]').forEach(el => {
        el.textContent = el.getAttribute(`data-${lang}`);
    });

    // تحديث زر اللغة النشط
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.includes(lang === 'ar' ? 'العربية' : 'Español')) {
            btn.classList.add('active');
        }
    });
}

// افتراضي: العربية
changeLang('ar');
