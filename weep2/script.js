// Global Variables
let currentFontSize = 'medium';
let currentLanguage = 'ar';
const fontSizes = ['small', 'medium', 'large', 'xlarge'];

// Complete Language and Currency System
const translations = {
    ar: {
        // Navigation
        home: "الرئيسية",
        about: "من نحن",
        facilities: "المرافق",
        packages: "الحزم",
        grooming: "العناية والتجميل",
        healthcare: "الرعاية الصحية",
        faq: "الأسئلة الشائعة",
        contact: "تواصل معنا",
        search: "بحث...",
        
        // Page titles
        index: "الرئيسية",
        aboutPage: "من نحن",
        facilitiesPage: "المرافق",
        packagesPage: "الحزم",
        groomingPage: "العناية والتجميل",
        healthcarePage: "الرعاية الصحية",
        faqPage: "الأسئلة الشائعة",
        contactPage: "تواصل معنا",
        
        // Home page content
        welcomeTitle: "مرحبًا بكم في Loving Homes",
        welcomeDesc: "منتجع وصالة حلاقة فاخرة للكلاب، نوفر بيئة آمنة ومريحة لضمان سعادة حيوانك الأليف وراحة بالك.",
        explorePackages: "استكشف الحزم",
        
        // About page content
        aboutTitle: "من نحن",
        aboutDesc1: "Loving Homes هو منتجع متخصص في رعاية الكلاب، نقدم خدمات إقامة، عناية، ورعاية صحية على مدار الساعة.",
        aboutDesc2: "نلتزم بتوفير بيئة آمنة ومليئة بالحب لكل كلب.",
        vision: "رؤيتنا: أن نكون الوجهة الأولى لرعاية الكلاب.",
        mission: "رسالتنا: توفير أعلى مستوى من الراحة والأمان.",
        
        // Facilities page content
        facilitiesTitle: "المرافق",
        facility1: "غرف مزودة بتدفئة/تبريد أرضي وتلفزيون",
        facility2: "مراعي خارجية آمنة",
        facility3: "حظيرة لعب داخلية",
        facility4: "مساحة عشب خاصة",
        facility5: "مسار رشاقة",
        facility6: "منطقة لعب خارجية",
        facility7: "خدمة توصيل من وإلى المكان",
        facility8: "خدمات بيطرية متاحة 24 ساعة",
        
        // Packages page content
        packagesTitle: "الحزم",
        dailyPackage: "الباقة اليومية",
        dailyDesc1: "المشي مرتين يوميًا",
        dailyDesc2: "منطقة لعب خارجية",
        dailyDesc3: "مسار رشاقة",
        dailyDesc4: "حفر حفرة في الرمل",
        dailyPrice: "السعر: 20 دينار أردني",
        
        classicPackage: "الباقة الكلاسيكية",
        classicDesc1: "المشي ثلاث مرات يوميًا",
        classicDesc2: "حظيرة لعب داخلية",
        classicDesc3: "منطقة استرخاء",
        classicDesc4: "جلسة تنظيف",
        classicPrice: "السعر: 35 دينار أردني",
        
        premiumPackage: "الباقة المميزة",
        premiumDesc1: "المشي أربع مرات يوميًا",
        premiumDesc2: "أربعة أنشطة يوميًا",
        premiumDesc3: "تحديثات وصور يومية",
        premiumDesc4: "مكافآت حسب الاتفاق",
        premiumPrice: "السعر: 50 دينار أردني",
        
        customPackage: "باقات مخصصة",
        customDesc: "متوفرة للإقامات الطويلة أو الكلاب ذات المتطلبات الإضافية. يرجى التواصل معنا لترتيبها.",
        
        // Grooming page content
        groomingTitle: "العناية والتجميل",
        grooming1: "جلسة حالقة",
        grooming2: "تنظيف كامل",
        grooming3: "عناية خاصة",
        grooming4: "منطقة استرخاء",
        
        // Healthcare page content
        healthcareTitle: "الرعاية الصحية",
        healthcare1: "خدمات بيطرية 24 ساعة",
        healthcare2: "مراقبة الحيوانات الأليفة",
        healthcare3: "متابعة يومية للحالة الصحية",
        
        // FAQ page content
        faqTitle: "الأسئلة الشائعة",
        faq1: "كيف يمكنني الحجز؟",
        faq2: "هل تتوفر خدمة التوصيل؟",
        faq3: "كيف أطلب باقة مخصصة؟",
        
        // Contact page content
        contactTitle: "تواصل معنا",
        name: "الاسم",
        phone: "رقم الهاتف",
        email: "البريد الإلكتروني",
        message: "رسالتك",
        bookNow: "احجز الآن",
        
        // Features
        features: "مميزاتنا",
        welcomeSectionTitle: "لماذا تختار Loving Homes؟"
    },
    en: {
        // Navigation
        home: "Home",
        about: "About Us",
        facilities: "Facilities",
        packages: "Packages",
        grooming: "Grooming & Spa",
        healthcare: "Health Care",
        faq: "FAQ",
        contact: "Contact Us",
        search: "Search...",
        
        // Page titles
        index: "Home",
        aboutPage: "About Us",
        facilitiesPage: "Facilities",
        packagesPage: "Packages",
        groomingPage: "Grooming & Spa",
        healthcarePage: "Health Care",
        faqPage: "FAQ",
        contactPage: "Contact Us",
        
        // Home page content
        welcomeTitle: "Welcome to Loving Homes",
        welcomeDesc: "A luxury dog grooming salon and resort providing a safe and comfortable environment for your beloved pet.",
        explorePackages: "Explore Packages",
        
        // About page content
        aboutTitle: "About Us",
        aboutDesc1: "Loving Homes is a specialized dog resort offering boarding, grooming, and 24-hour health care services.",
        aboutDesc2: "We are committed to providing a loving and secure environment.",
        vision: "Our Vision: To be the leading dog care destination.",
        mission: "Our Mission: Deliver comfort, safety, and professional care.",
        
        // Facilities page content
        facilitiesTitle: "Facilities",
        facility1: "Rooms with underfloor heating/cooling and TV",
        facility2: "Secure outdoor fields",
        facility3: "Indoor play barn",
        facility4: "Private grass area",
        facility5: "Agility track",
        facility6: "Outdoor play zone",
        facility7: "Pick-up and drop-off service",
        facility8: "24-hour veterinary services",
        
        // Packages page content
        packagesTitle: "Packages",
        dailyPackage: "Daily Package",
        dailyDesc1: "Two walks per day",
        dailyDesc2: "Outdoor play area",
        dailyDesc3: "Agility track",
        dailyDesc4: "Sand digging activity",
        dailyPrice: "Price: 20 JOD",
        
        classicPackage: "Classic Package",
        classicDesc1: "Three walks per day",
        classicDesc2: "Indoor play barn",
        classicDesc3: "Relaxation area",
        classicDesc4: "Grooming session",
        classicPrice: "Price: 35 JOD",
        
        premiumPackage: "Premium Package",
        premiumDesc1: "Four walks per day",
        premiumDesc2: "Four daily activities",
        premiumDesc3: "Daily photo updates",
        premiumDesc4: "Treat rewards as agreed",
        premiumPrice: "Price: 50 JOD",
        
        customPackage: "Custom Packages",
        customDesc: "Available for long stays or dogs with special needs. Please contact us to arrange.",
        
        // Grooming page content
        groomingTitle: "Grooming & Spa",
        grooming1: "Grooming session",
        grooming2: "Full cleaning",
        grooming3: "Special care",
        grooming4: "Relaxation area",
        
        // Healthcare page content
        healthcareTitle: "Health Care",
        healthcare1: "24-hour veterinary services",
        healthcare2: "Pet monitoring",
        healthcare3: "Daily health check",
        
        // FAQ page content
        faqTitle: "Frequently Asked Questions",
        faq1: "How can I book?",
        faq2: "Is pick-up service available?",
        faq3: "How do I request a custom package?",
        
        // Contact page content
        contactTitle: "Contact Us",
        name: "Name",
        phone: "Phone Number",
        email: "Email",
        message: "Your Message",
        bookNow: "Book Now",
        
        // Features
        features: "Our Features",
        welcomeSectionTitle: "Why Choose Loving Homes?"
    },
    zh: {
        // Navigation
        home: "首页",
        about: "关于我们",
        facilities: "设施",
        packages: "套餐",
        grooming: "美容护理",
        healthcare: "健康护理",
        faq: "常见问题",
        contact: "联系我们",
        search: "搜索...",
        
        // Page titles
        index: "首页",
        aboutPage: "关于我们",
        facilitiesPage: "设施",
        packagesPage: "套餐",
        groomingPage: "美容护理",
        healthcarePage: "健康护理",
        faqPage: "常见问题",
        contactPage: "联系我们",
        
        // Home page content
        welcomeTitle: "欢迎来到 Loving Homes",
        welcomeDesc: "一家豪华宠物狗美容与度假中心，为您的爱犬提供安全舒适的环境。",
        explorePackages: "查看套餐",
        
        // About page content
        aboutTitle: "关于我们",
        aboutDesc1: "Loving Homes 是一家专业的狗狗度假中心，提供寄宿、美容和24小时医疗服务。",
        aboutDesc2: "我们致力于为每只狗狗提供安全、充满关爱的环境。",
        vision: "愿景：成为领先的狗狗护理中心。",
        mission: "使命：提供舒适、安全和专业的服务。",
        
        // Facilities page content
        facilitiesTitle: "设施",
        facility1: "配备地暖/制冷和电视的房间",
        facility2: "安全的户外草地",
        facility3: "室内游戏区",
        facility4: "私人草坪",
        facility5: "敏捷训练跑道",
        facility6: "户外活动区",
        facility7: "接送服务",
        facility8: "24小时兽医服务",
        
        // Packages page content
        packagesTitle: "套餐",
        dailyPackage: "每日套餐",
        dailyDesc1: "每天两次散步",
        dailyDesc2: "户外活动区",
        dailyDesc3: "敏捷训练",
        dailyDesc4: "沙地挖掘活动",
        dailyPrice: "价格：20 约旦第纳尔",
        
        classicPackage: "经典套餐",
        classicDesc1: "每天三次散步",
        classicDesc2: "室内游戏区",
        classicDesc3: "放松区域",
        classicDesc4: "美容护理",
        classicPrice: "价格：35 约旦第纳尔",
        
        premiumPackage: "高级套餐",
        premiumDesc1: "每天四次散步",
        premiumDesc2: "每天四项活动",
        premiumDesc3: "每日照片更新",
        premiumDesc4: "根据约定提供奖励",
        premiumPrice: "价格：50 约旦第纳尔",
        
        customPackage: "定制套餐",
        customDesc: "适用于长期住宿或有特殊需求的狗狗。请联系我们安排。",
        
        // Grooming page content
        groomingTitle: "美容护理",
        grooming1: "美容服务",
        grooming2: "全面清洁",
        grooming3: "特别护理",
        grooming4: "放松区域",
        
        // Healthcare page content
        healthcareTitle: "健康护理",
        healthcare1: "24小时兽医服务",
        healthcare2: "宠物监控",
        healthcare3: "每日健康检查",
        
        // FAQ page content
        faqTitle: "常见问题",
        faq1: "如何预订？",
        faq2: "是否提供接送服务？",
        faq3: "如何申请定制套餐？",
        
        // Contact page content
        contactTitle: "联系我们",
        name: "姓名",
        phone: "电话号码",
        email: "电子邮件",
        message: "留言",
        bookNow: "立即预订",
        
        // Features
        features: "我们的特色",
        welcomeSectionTitle: "为什么选择 Loving Homes？"
    }
};

const currencies = {
    JOD: { symbol: "د.أ", rate: 1 },
    USD: { symbol: "$", rate: 1.41 },
    CNY: { symbol: "¥", rate: 10.2 }
};

let currentCurrency = 'JOD';

// Enhanced Search with Section Navigation
const searchData = [
    { text: "الرئيسية", url: "index.html", type: "page" },
    { text: "من نحن", url: "about.html", type: "page" },
    { text: "المرافق", url: "facilities.html", type: "page" },
    { text: "خدمة التوصيل", url: "facilities.html#delivery", type: "section" },
    { text: "غرف بتدفئة", url: "facilities.html#rooms", type: "section" },
    { text: "حظيرة لعب داخلية", url: "facilities.html#playground", type: "section" },
    { text: "مسار رشاقة", url: "facilities.html#agility", type: "section" },
    { text: "الحزم", url: "packages.html", type: "page" },
    { text: "الباقة اليومية", url: "packages.html#daily", type: "section" },
    { text: "المشي مرتين", url: "packages.html#daily-walks", type: "section" },
    { text: "الباقة الكلاسيكية", url: "packages.html#classic", type: "section" },
    { text: "المشي ثلاث مرات", url: "packages.html#classic-walks", type: "section" },
    { text: "الباقة المميزة", url: "packages.html#premium", type: "section" },
    { text: "المشي أربع مرات", url: "packages.html#premium-walks", type: "section" },
    { text: "العناية والتجميل", url: "grooming.html", type: "page" },
    { text: "جلسة حالقة", url: "grooming.html#shaving", type: "section" },
    { text: "تنظيف كامل", url: "grooming.html#cleaning", type: "section" },
    { text: "الرعاية الصحية", url: "healthcare.html", type: "page" },
    { text: "خدمات بيطرية", url: "healthcare.html#veterinary", type: "section" },
    { text: "مراقبة الحيوانات", url: "healthcare.html#monitoring", type: "section" },
    { text: "الأسئلة الشائعة", url: "faq.html", type: "page" },
    { text: "تواصل معنا", url: "contact.html", type: "page" }
];

function performSearch(query) {
    const searchResults = document.getElementById('searchResults');
    
    if (!query || query.length < 1) {
        searchResults.classList.remove('show');
        return;
    }
    
    const results = searchData.filter(item => 
        item.text.toLowerCase().includes(query.toLowerCase())
    );
    
    displaySearchResults(results, query);
}

function displaySearchResults(results, query) {
    const searchResults = document.getElementById('searchResults');
    
    if (results.length === 0) {
        searchResults.innerHTML = '<div class="search-result-item">لا توجد نتائج</div>';
        setTimeout(() => {
            searchResults.classList.add('show');
        }, 50);
        return;
    }
    
    const resultsHTML = results.map((result, index) => {
        const highlightedText = highlightSearchTerm(result.text, query);
        return `<div class="search-result-item" onclick="navigateToPage('${result.url}')" style="animation-delay: ${index * 0.1}s">${highlightedText}</div>`;
    }).join('');
    
    searchResults.innerHTML = resultsHTML;
    setTimeout(() => {
        searchResults.classList.add('show');
    }, 50);
}

function highlightSearchTerm(text, query) {
    if (!query) return text;
    
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<span class="search-highlight">$1</span>');
}

// Language and Currency Functions
function changeLanguage() {
    const select = document.getElementById('languageSelect');
    currentLanguage = select.value;
    
    // Save to localStorage
    localStorage.setItem('selectedLanguage', currentLanguage);
    
    // Update page direction
    document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLanguage;
    
    // Update all translatable elements
    updateTranslations();
    
    // Update language indicator
    const indicator = document.querySelector('.current-lang');
    if (indicator) {
        indicator.textContent = select.options[select.selectedIndex].text.split(' ')[1];
    }
    
    // Update search placeholder
    const searchInput = document.getElementById('smartSearch');
    if (searchInput) {
        searchInput.placeholder = translations[currentLanguage].search || '🔍 بحث...';
    }
}

function updateTranslations() {
    // Update all elements with data-translate attribute
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
    
    // Update navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href) {
            const pageKey = href.replace('.html', '');
            if (translations[currentLanguage][pageKey]) {
                link.textContent = translations[currentLanguage][pageKey];
            }
        }
    });
    
    // Update page title
    const title = document.querySelector('title');
    if (title) {
        const currentPage = window.location.pathname.split('/').pop().replace('.html', '');
        if (currentPage === '' || currentPage === 'index') {
            title.textContent = `${translations[currentLanguage].index} - Loving Homes`;
        } else if (translations[currentLanguage][currentPage + 'Page']) {
            title.textContent = `${translations[currentLanguage][currentPage + 'Page']} - Loving Homes`;
        }
    }
    
    // Update all page content
    updateAllPageContent();
}

function updateAllPageContent() {
    // Update hero section
    const heroTitle = document.querySelector('.hero-content h1');
    if (heroTitle && translations[currentLanguage].welcomeTitle) {
        heroTitle.textContent = translations[currentLanguage].welcomeTitle;
    }
    
    const heroDesc = document.querySelector('.hero-content p');
    if (heroDesc && translations[currentLanguage].welcomeDesc) {
        heroDesc.textContent = translations[currentLanguage].welcomeDesc;
    }
    
    // Update CTA buttons
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        if (translations[currentLanguage].explorePackages) {
            button.textContent = translations[currentLanguage].explorePackages;
        }
    });
    
    // Update section titles
    updateSectionTitles();
    
    // Update page-specific content
    updatePageSpecificContent();
    
    // Update buttons
    updateAllButtons();
    
    // Update form labels
    updateFormLabels();
}

function updateSectionTitles() {
    const sectionTitles = document.querySelectorAll('h2, h3');
    sectionTitles.forEach(title => {
        const text = title.textContent.trim();
        
        // Update features section
        if (text === 'مميزاتنا' || text === 'Our Features' || text === '我们的特色') {
            title.textContent = translations[currentLanguage].features;
        }
        
        // Update welcome section
        if (text === 'لماذا تختار Loving Homes؟' || text === 'Why Choose Loving Homes?' || text === '为什么选择 Loving Homes？') {
            title.textContent = translations[currentLanguage].welcomeSectionTitle;
        }
        
        // Update page-specific titles
        if (text === 'من نحن' || text === 'About Us' || text === '关于我们') {
            title.textContent = translations[currentLanguage].aboutTitle;
        }
        if (text === 'المرافق' || text === 'Facilities' || text === '设施') {
            title.textContent = translations[currentLanguage].facilitiesTitle;
        }
        if (text === 'الحزم' || text === 'Packages' || text === '套餐') {
            title.textContent = translations[currentLanguage].packagesTitle;
        }
        if (text === 'العناية والتجميل' || text === 'Grooming & Spa' || text === '美容护理') {
            title.textContent = translations[currentLanguage].groomingTitle;
        }
        if (text === 'الرعاية الصحية' || text === 'Health Care' || text === '健康护理') {
            title.textContent = translations[currentLanguage].healthcareTitle;
        }
        if (text === 'الأسئلة الشائعة' || text === 'Frequently Asked Questions' || text === '常见问题') {
            title.textContent = translations[currentLanguage].faqTitle;
        }
        if (text === 'تواصل معنا' || text === 'Contact Us' || text === '联系我们') {
            title.textContent = translations[currentLanguage].contactTitle;
        }
    });
}

function updatePageSpecificContent() {
    // Update about page content
    const aboutParagraphs = document.querySelectorAll('p');
    aboutParagraphs.forEach(p => {
        const text = p.textContent.trim();
        if (text.includes('Loving Homes هو منتجع متخصص') || 
            text.includes('Loving Homes is a specialized dog resort') ||
            text.includes('Loving Homes 是一家专业的狗狗度假中心')) {
            p.textContent = translations[currentLanguage].aboutDesc1;
        }
        if (text.includes('نلتزم بتوفير بيئة آمنة') || 
            text.includes('We are committed to providing a loving') ||
            text.includes('我们致力于为每只狗狗提供安全')) {
            p.textContent = translations[currentLanguage].aboutDesc2;
        }
        if (text.includes('رؤيتنا') || text.includes('Our Vision') || text.includes('愿景')) {
            p.textContent = translations[currentLanguage].vision;
        }
        if (text.includes('رسالتنا') || text.includes('Our Mission') || text.includes('使命')) {
            p.textContent = translations[currentLanguage].mission;
        }
    });
    
    // Update facilities list
    updateFacilitiesList();
    
    // Update packages content
    updatePackagesContent();
    
    // Update grooming content
    updateGroomingContent();
    
    // Update healthcare content
    updateHealthcareContent();
    
    // Update FAQ content
    updateFAQContent();
}

function updateFacilitiesList() {
    const facilityItems = document.querySelectorAll('li');
    const facilities = [
        'facility1', 'facility2', 'facility3', 'facility4', 
        'facility5', 'facility6', 'facility7', 'facility8'
    ];
    
    facilityItems.forEach((item, index) => {
        if (index < facilities.length && translations[currentLanguage][facilities[index]]) {
            item.textContent = translations[currentLanguage][facilities[index]];
        }
    });
}

function updatePackagesContent() {
    // Update package titles
    const packageTitles = document.querySelectorAll('h3');
    packageTitles.forEach(title => {
        const text = title.textContent.trim();
        if (text.includes('الباقة اليومية') || text.includes('Daily Package') || text.includes('每日套餐')) {
            title.textContent = translations[currentLanguage].dailyPackage;
        }
        if (text.includes('الباقة الكلاسيكية') || text.includes('Classic Package') || text.includes('经典套餐')) {
            title.textContent = translations[currentLanguage].classicPackage;
        }
        if (text.includes('الباقة المميزة') || text.includes('Premium Package') || text.includes('高级套餐')) {
            title.textContent = translations[currentLanguage].premiumPackage;
        }
        if (text.includes('باقات مخصصة') || text.includes('Custom Packages') || text.includes('定制套餐')) {
            title.textContent = translations[currentLanguage].customPackage;
        }
    });
    
    // Update package descriptions and prices
    const packageElements = document.querySelectorAll('p');
    packageElements.forEach(p => {
        const text = p.textContent.trim();
        
        // Daily package
        if (text.includes('المشي مرتين') || text.includes('Two walks') || text.includes('每天两次')) {
            p.textContent = translations[currentLanguage].dailyDesc1;
        }
        if (text.includes('منطقة لعب خارجية') || text.includes('Outdoor play') || text.includes('户外活动区')) {
            p.textContent = translations[currentLanguage].dailyDesc2;
        }
        if (text.includes('20 دينار') || text.includes('20 JOD') || text.includes('20 约旦')) {
            p.textContent = translations[currentLanguage].dailyPrice;
        }
        
        // Classic package
        if (text.includes('المشي ثلاث') || text.includes('Three walks') || text.includes('每天三次')) {
            p.textContent = translations[currentLanguage].classicDesc1;
        }
        if (text.includes('35 دينار') || text.includes('35 JOD') || text.includes('35 约旦')) {
            p.textContent = translations[currentLanguage].classicPrice;
        }
        
        // Premium package
        if (text.includes('المشي أربع') || text.includes('Four walks') || text.includes('每天四次')) {
            p.textContent = translations[currentLanguage].premiumDesc1;
        }
        if (text.includes('50 دينار') || text.includes('50 JOD') || text.includes('50 约旦')) {
            p.textContent = translations[currentLanguage].premiumPrice;
        }
        
        // Custom package
        if (text.includes('متوفرة للإقامات') || text.includes('Available for long') || text.includes('适用于长期住宿')) {
            p.textContent = translations[currentLanguage].customDesc;
        }
    });
}

function updateGroomingContent() {
    const groomingItems = document.querySelectorAll('li');
    const groomingServices = ['grooming1', 'grooming2', 'grooming3', 'grooming4'];
    
    groomingItems.forEach((item, index) => {
        if (index < groomingServices.length && translations[currentLanguage][groomingServices[index]]) {
            item.textContent = translations[currentLanguage][groomingServices[index]];
        }
    });
}

function updateHealthcareContent() {
    const healthcareItems = document.querySelectorAll('li');
    const healthcareServices = ['healthcare1', 'healthcare2', 'healthcare3'];
    
    healthcareItems.forEach((item, index) => {
        if (index < healthcareServices.length && translations[currentLanguage][healthcareServices[index]]) {
            item.textContent = translations[currentLanguage][healthcareServices[index]];
        }
    });
}

function updateFAQContent() {
    const faqItems = document.querySelectorAll('li');
    const questions = ['faq1', 'faq2', 'faq3'];
    
    faqItems.forEach((item, index) => {
        if (index < questions.length && translations[currentLanguage][questions[index]]) {
            item.textContent = translations[currentLanguage][questions[index]];
        }
    });
}

function updateAllButtons() {
    const buttons = document.querySelectorAll('button, .cta-button');
    buttons.forEach(button => {
        const text = button.textContent.trim();
        if (text === 'احجز الآن' || text === 'Book Now' || text === '立即预订') {
            button.textContent = translations[currentLanguage].bookNow;
        }
    });
}

function updateFormLabels() {
    // Update form labels and placeholders
    const labels = document.querySelectorAll('label');
    labels.forEach(label => {
        const text = label.textContent.trim();
        if (text === 'الاسم' || text === 'Name' || text === '姓名') {
            label.textContent = translations[currentLanguage].name;
        }
        if (text === 'رقم الهاتف' || text === 'Phone Number' || text === '电话号码') {
            label.textContent = translations[currentLanguage].phone;
        }
        if (text === 'البريد الإلكتروني' || text === 'Email' || text === '电子邮件') {
            label.textContent = translations[currentLanguage].email;
        }
        if (text === 'رسالتك' || text === 'Your Message' || text === '留言') {
            label.textContent = translations[currentLanguage].message;
        }
    });
    
    // Update form placeholders
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        const placeholder = input.getAttribute('placeholder');
        if (placeholder) {
            if (placeholder.includes('الاسم') || placeholder.includes('Name') || placeholder.includes('姓名')) {
                input.placeholder = translations[currentLanguage].name;
            }
            if (placeholder.includes('الهاتف') || placeholder.includes('Phone') || placeholder.includes('电话')) {
                input.placeholder = translations[currentLanguage].phone;
            }
            if (placeholder.includes('البريد') || placeholder.includes('Email') || placeholder.includes('邮件')) {
                input.placeholder = translations[currentLanguage].email;
            }
            if (placeholder.includes('الرسالة') || placeholder.includes('Message') || placeholder.includes('留言')) {
                input.placeholder = translations[currentLanguage].message;
            }
        }
    });
}

function changeCurrency() {
    const select = document.getElementById('currencySelect');
    currentCurrency = select.value;
    
    // Save to localStorage
    localStorage.setItem('selectedCurrency', currentCurrency);
    
    // Update currency indicator
    const indicator = document.querySelector('.currency-symbol');
    if (indicator) {
        indicator.textContent = currencies[currentCurrency].symbol;
    }
    
    // Update all prices
    updatePrices();
}

function updatePrices() {
    const priceElements = document.querySelectorAll('[data-price]');
    priceElements.forEach(element => {
        const basePrice = parseFloat(element.getAttribute('data-price'));
        const convertedPrice = basePrice * currencies[currentCurrency].rate;
        element.textContent = `${currencies[currentCurrency].symbol}${convertedPrice.toFixed(2)}`;
    });
}

// Load saved preferences on page load
function loadSavedPreferences() {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    const savedCurrency = localStorage.getItem('selectedCurrency');
    
    if (savedLanguage) {
        const langSelect = document.getElementById('languageSelect');
        if (langSelect) {
            langSelect.value = savedLanguage;
            changeLanguage();
        }
    }
    
    if (savedCurrency) {
        const currSelect = document.getElementById('currencySelect');
        if (currSelect) {
            currSelect.value = savedCurrency;
            changeCurrency();
        }
    }
}

function navigateToPage(url) {
    window.location.href = url;
}

// Close search results when clicking outside
document.addEventListener('click', function(event) {
    const searchContainer = document.querySelector('.search-container');
    const searchResults = document.getElementById('searchResults');
    
    if (searchContainer && !searchContainer.contains(event.target)) {
        searchResults.classList.remove('show');
    }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeFontSize();
    initializeMobileMenu();
    initializeFAQ();
    initializeBookingForms();
    initializeSearch();
    initializeSmartSearch();
});

function initializeSmartSearch() {
    const searchInput = document.getElementById('smartSearch');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            performSearch(this.value);
        });
    }
}

// Font Size Functions
function initializeFontSize() {
    const savedFontSize = localStorage.getItem('fontSize') || 'medium';
    currentFontSize = savedFontSize;
    applyFontSize(savedFontSize);
}

function changeFontSize(action) {
    const currentIndex = fontSizes.indexOf(currentFontSize);
    let newIndex;
    
    if (action === 'increase') {
        newIndex = Math.min(currentIndex + 1, fontSizes.length - 1);
    } else {
        newIndex = Math.max(currentIndex - 1, 0);
    }
    
    const newFontSize = fontSizes[newIndex];
    currentFontSize = newFontSize;
    localStorage.setItem('fontSize', newFontSize);
    applyFontSize(newFontSize);
}

function applyFontSize(size) {
    const body = document.body;
    
    // Remove all font size classes
    fontSizes.forEach(size => {
        body.classList.remove(`font-size-${size}`);
    });
    
    // Add new font size class
    body.classList.add(`font-size-${size}`);
    
    // Update font size controls
    updateFontControls();
}

function updateFontControls() {
    const fontButtons = document.querySelectorAll('.font-btn');
    
    if (fontButtons[0]) {
        fontButtons[0].setAttribute('title', 'تكبير الخط');
        fontButtons[0].setAttribute('aria-label', 'تكبير الخط');
    }
    
    if (fontButtons[1]) {
        fontButtons[1].setAttribute('title', 'تصغير الخط');
        fontButtons[1].setAttribute('aria-label', 'تصغير الخط');
    }
}

// Mobile Menu Functions
function initializeMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    if (mobileToggle && sidebar) {
        mobileToggle.addEventListener('click', toggleSidebar);
        
        // Close sidebar when clicking outside
        document.addEventListener('click', function(event) {
            if (window.innerWidth <= 768) {
                if (!sidebar.contains(event.target) && !mobileToggle.contains(event.target)) {
                    sidebar.classList.remove('active');
                }
            }
        });
    }
}

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.classList.toggle('active');
    }
}

// FAQ Functions
function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', () => toggleFAQ(question));
        }
    });
}

function toggleFAQ(questionElement) {
    const faqItem = questionElement.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    // Close all FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Open clicked item if it wasn't active
    if (!isActive) {
        faqItem.classList.add('active');
    }
}

// FAQ Category Functions
function showCategory(category) {
    const faqItems = document.querySelectorAll('.faq-item');
    const categoryTabs = document.querySelectorAll('.category-tab');
    
    // Update active tab
    categoryTabs.forEach(tab => {
        tab.classList.remove('active');
        if (tab.textContent.includes(getCategoryText(category))) {
            tab.classList.add('active');
        }
    });
    
    // Show/hide FAQ items
    faqItems.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

function getCategoryText(category) {
    const categoryTexts = {
        ar: {
            all: 'جميع الأسئلة',
            booking: 'الحجز',
            services: 'الخدمات',
            health: 'الصحة',
            payment: 'الدفع'
        },
        en: {
            all: 'All Questions',
            booking: 'Booking',
            services: 'Services',
            health: 'Health',
            payment: 'Payment'
        },
        zh: {
            all: '所有问题',
            booking: '预订',
            services: '服务',
            health: '健康',
            payment: '支付'
        }
    };
    
    return categoryTexts[currentLanguage]?.[category] || categoryTexts.ar.all;
}

// Search Functions
function initializeSearch() {
    const searchInput = document.getElementById('faqSearch');
    if (searchInput) {
        searchInput.addEventListener('input', searchFAQ);
    }
}

function searchFAQ() {
    const searchInput = document.getElementById('faqSearch');
    const searchTerm = searchInput.value.toLowerCase();
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('h3').textContent.toLowerCase();
        const answer = item.querySelector('.faq-answer').textContent.toLowerCase();
        
        if (question.includes(searchTerm) || answer.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Form Functions
function initializeBookingForms() {
    const contactForm = document.querySelector('.contact-form');
    const bookingForm = document.querySelector('.booking-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', submitContactForm);
    }
    
    if (bookingForm) {
        bookingForm.addEventListener('submit', submitBookingForm);
    }
    
    // Set minimum date for booking
    const checkInDate = document.getElementById('checkInDate');
    const checkOutDate = document.getElementById('checkOutDate');
    
    if (checkInDate) {
        const today = new Date().toISOString().split('T')[0];
        checkInDate.min = today;
        
        checkInDate.addEventListener('change', function() {
            if (checkOutDate) {
                const minOutDate = new Date(this.value);
                minOutDate.setDate(minOutDate.getDate() + 1);
                checkOutDate.min = minOutDate.toISOString().split('T')[0];
            }
        });
    }
}

function submitContactForm(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    // Validate form
    if (!validateContactForm(data)) {
        return;
    }
    
    // Show success message
    showSuccessMessage('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.');
    
    // Reset form
    event.target.reset();
    
    // In a real application, you would send this data to a server
    console.log('Contact form submitted:', data);
}

function submitBookingForm(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    // Validate form
    if (!validateBookingForm(data)) {
        return;
    }
    
    // Calculate total price
    const totalPrice = calculateTotalPrice(data);
    
    // Show confirmation
    showBookingConfirmation(data, totalPrice);
    
    // In a real application, you would send this data to a server
    console.log('Booking form submitted:', data);
}

function validateContactForm(data) {
    // Basic validation
    if (!data.name || !data.email || !data.phone || !data.subject || !data.message) {
        showErrorMessage('يرجى ملء جميع الحقول المطلوبة.');
        return false;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showErrorMessage('يرجى إدخال بريد إلكتروني صحيح.');
        return false;
    }
    
    // Phone validation (basic)
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    if (!phoneRegex.test(data.phone)) {
        showErrorMessage('يرجى إدخال رقم هاتف صحيح.');
        return false;
    }
    
    return true;
}

function validateBookingForm(data) {
    // Basic validation
    const requiredFields = ['ownerName', 'ownerPhone', 'dogBreed', 'dogAge', 'dogWeight', 'dogGender', 'checkInDate', 'checkOutDate', 'package'];
    
    for (const field of requiredFields) {
        if (!data[field]) {
            showErrorMessage('يرجى ملء جميع الحقول المطلوبة.');
            return false;
        }
    }
    
    // Date validation
    const checkIn = new Date(data.checkInDate);
    const checkOut = new Date(data.checkOutDate);
    const today = new Date();
    
    if (checkIn < today) {
        showErrorMessage('تاريخ الوصول يجب أن يكون في المستقبل.');
        return false;
    }
    
    if (checkOut <= checkIn) {
        showErrorMessage('تاريخ المغادرة يجب أن يكون بعد تاريخ الوصول.');
        return false;
    }
    
    return true;
}

function calculateTotalPrice(data) {
    const prices = {
        daily: 50,
        classic: 80,
        premium: 120,
        custom: 100 // Default for custom packages
    };
    
    const checkIn = new Date(data.checkInDate);
    const checkOut = new Date(data.checkOutDate);
    const nights = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24));
    
    let totalPrice = prices[data.package] * nights;
    
    // Add transport fee
    if (data.transport === 'on') {
        totalPrice += 30;
    }
    
    // Add grooming (estimated)
    if (data.grooming === 'on') {
        totalPrice += 40;
    }
    
    return totalPrice;
}

function showBookingConfirmation(data, totalPrice) {
    const message = `
        تأكيد الحجز:
        
        المالك: ${data.ownerName}
        الهاتف: ${data.ownerPhone}
        الكلب: ${data.dogBreed} (${data.dogAge} سنة, ${data.dogWeight} كجم)
        الفترة: ${data.checkInDate} إلى ${data.checkOutDate}
        الباقة: ${data.package}
        السعر الإجمالي: ${totalPrice} ريال
        
        سيتم التواصل معك لتأكيد التفاصيل.
    `;
    
    alert(message);
}

// Service Selection Functions
function selectPackage(packageType) {
    // Scroll to booking form
    const bookingForm = document.querySelector('.booking-form');
    if (bookingForm) {
        bookingForm.scrollIntoView({ behavior: 'smooth' });
        
        // Pre-select the package
        const packageSelect = document.getElementById('package');
        if (packageSelect) {
            packageSelect.value = packageType;
        }
    }
}

function requestCustom(packageType) {
    // Scroll to contact form
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.scrollIntoView({ behavior: 'smooth' });
        
        // Pre-fill subject
        const subjectSelect = document.getElementById('subject');
        if (subjectSelect) {
            subjectSelect.value = 'packages';
        }
        
        // Pre-fill message
        const messageTextarea = document.getElementById('message');
        if (messageTextarea) {
            messageTextarea.value = `أود طلب باقة مخصصة لـ ${packageType}. يرجى التواصل معي لمناقشة التفاصيل.`;
        }
    }
}

function bookService(serviceType) {
    // Scroll to contact form
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.scrollIntoView({ behavior: 'smooth' });
        
        // Pre-fill subject
        const subjectSelect = document.getElementById('subject');
        if (subjectSelect) {
            subjectSelect.value = 'grooming';
        }
        
        // Pre-fill message
        const messageTextarea = document.getElementById('message');
        if (messageTextarea) {
            messageTextarea.value = `أود حجز جلسة ${serviceType}. يرجى التواصل معي لتحديد الموعد.`;
        }
    }
}

// Utility Functions
function showSuccessMessage(message) {
    showMessage(message, 'success');
}

function showErrorMessage(message) {
    showMessage(message, 'error');
}

function showMessage(message, type, duration = 5000) {
    // Create message element
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = message;
    messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: ${type === 'success' ? '#4CAF50' : '#F44336'};
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        z-index: 10000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        font-weight: 600;
        max-width: 90%;
        text-align: center;
        animation: slideDown 0.3s ease-out;
    `;
    
    // Add animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideDown {
            from {
                transform: translateX(-50%) translateY(-100%);
                opacity: 0;
            }
            to {
                transform: translateX(-50%) translateY(0);
                opacity: 1;
            }
        }
        @keyframes slideUp {
            from {
                transform: translateX(-50%) translateY(0);
                opacity: 1;
            }
            to {
                transform: translateX(-50%) translateY(-100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(messageDiv);
    
    // Remove message after duration
    setTimeout(() => {
        messageDiv.style.animation = 'slideUp 0.3s ease-out';
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.parentNode.removeChild(messageDiv);
            }
        }, 300);
    }, duration);
}

function openMap() {
    // In a real application, this would open Google Maps with the actual location
    const url = 'https://maps.google.com/?q=King+Fahd+Road+Al+Nakheel+Riyadh';
    window.open(url, '_blank');
}

function callEmergency() {
    // In a real application, this would call the actual emergency number
    window.location.href = 'tel:920000000';
}

// Keyboard Navigation
document.addEventListener('keydown', function(event) {
    // ESC key to close mobile menu
    if (event.key === 'Escape') {
        const sidebar = document.querySelector('.sidebar');
        if (sidebar && sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
        }
    }
    
    // Ctrl/Cmd + '+' to increase font size
    if ((event.ctrlKey || event.metaKey) && event.key === '+') {
        event.preventDefault();
        changeFontSize('increase');
    }
    
    // Ctrl/Cmd + '-' to decrease font size
    if ((event.ctrlKey || event.metaKey) && event.key === '-') {
        event.preventDefault();
        changeFontSize('decrease');
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Print styles
window.addEventListener('beforeprint', function() {
    document.body.classList.add('printing');
});

window.addEventListener('afterprint', function() {
    document.body.classList.remove('printing');
});

// Open Google Maps with Hong Kong address
function openMap() {
    const address = "شارع ناثان، منطقة تسيم شا تسوي، هونغ كونغ، الصين";
    const encodedAddress = encodeURIComponent(address);
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    window.open(googleMapsUrl, '_blank');
}

// Performance optimization
let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        // Handle responsive layout changes
        if (window.innerWidth > 768) {
            const sidebar = document.querySelector('.sidebar');
            if (sidebar) {
                sidebar.classList.remove('active');
            }
        }
    }, 250);
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize font size controls
    updateFontControls();
    
    // Initialize mobile menu
    initializeMobileMenu();
    
    // Initialize FAQ functionality
    initializeFAQ();
    
    // Initialize smooth scrolling
    initializeSmoothScrolling();
    
    // Initialize lazy loading
    initializeLazyLoading();
    
    // Initialize keyboard navigation
    initializeKeyboardNavigation();
});
