import { createContext, useContext, useState } from 'react';

export const LanguageContext = createContext(null);

// Detect device language — default to Arabic if the device is set to Arabic
const deviceLang = navigator.language?.startsWith('ar') ? 'ar' : 'en';

export const translations = {
  en: {
    dir: 'ltr',
    nav: {
      home: 'Home', statistics: 'Statistics', whatAreEDs: 'What Are EDs',
      anorexia: 'Anorexia', symptoms: 'Symptoms', danger: 'The Danger',
      support: 'Support', awareness: 'Awareness', treatment: 'Treatment', promise: 'Promise',
    },
    hero: {
      logo: 'Nour',
      titleWords: ['Breaking', 'the', 'Silence.'],
      subtitle: 'Helping patients and doctors navigate the journey of eating disorder recovery — through awareness, technology, and compassion.',
      cta: 'Begin the Journey',
      scrollHint: 'Scroll to explore',
    },
    stats: {
      eyebrow: 'The Weight of Silence',
      title: 'Heavier than',
      titleEm: 'we perceive',
      items: [
        { value: 9, suffix: '%', label: 'Global Prevalence', description: 'Of the world population suffers from an eating disorder — over 70 million people worldwide.' },
        { value: 2, suffix: 'nd', label: 'Deadliest Mental Illness', description: 'Eating disorders have the second highest mortality rate of any psychiatric illness.' },
        { value: 26, suffix: '%', label: 'Undiagnosed Cases', description: 'Nearly 1 in 4 sufferers never receives a proper diagnosis or professional help.' },
        { value: 3, suffix: 'x', label: 'Teen Risk Increase', description: 'Rates among teenagers and young adults have tripled in the past decade alone.' },
      ],
    },
    whatEDs: {
      eyebrow: 'Understanding',
      title: 'Beyond the Surface',
      body: 'Eating disorders are serious, complex mental and physical health conditions — not choices, not phases. They affect behavior, emotions, and a person\'s relationship with food and body image in profound ways.',
      bodySub: 'They are among the most misunderstood conditions in modern medicine, yet they carry real and devastating consequences for millions of lives.',
      types: ['Anorexia Nervosa', 'Bulimia Nervosa', 'Binge Eating Disorder'],
      quote: '"They are not about food. They are about pain."',
      captionLeft: 'Anorexia Nervosa',
      captionRight: 'Bulimia Nervosa',
    },
    anorexia: {
      eyebrow: 'Understanding Anorexia',
      heading1: 'Anorexia',
      heading2: 'Nervosa',
      definition: 'Anorexia Nervosa is a life-threatening eating disorder characterized by self-starvation and excessive weight loss. It carries one of the highest mortality rates of any mental health condition.',
      points: [
        'Intense fear of weight gain, even when significantly underweight',
        'Severely distorted body image — seeing oneself as larger than reality',
        'Extreme restriction of food intake to maintain low body weight',
        'Obsessive rituals around eating, food, and exercise',
        'Early detection is critical — the sooner treatment begins, the better outcomes',
      ],
      alertBadge: 'High Risk',
      alertText: 'Early intervention can reduce mortality risk by over 80%',
    },
    symptoms: {
      eyebrow: 'Recognizing the Signs',
      title: 'Physical & Behavioral',
      titleEm: 'Symptoms',
      physicalLabel: 'Physical',
      behavioralLabel: 'Behavioral',
      physical: [
        { icon: '⚡', text: 'Rapid or extreme weight loss' },
        { icon: '😴', text: 'Persistent fatigue and dizziness' },
        { icon: '🌿', text: 'Hair loss and dry, brittle skin' },
        { icon: '🔴', text: 'Irregular or missed menstrual cycles' },
        { icon: '🧊', text: 'Sensitivity to cold temperatures' },
      ],
      behavioral: [
        { icon: '🔢', text: 'Obsessive calorie counting and food rituals' },
        { icon: '🚪', text: 'Avoiding meals or eating alone in secret' },
        { icon: '🏃', text: 'Compulsive or excessive exercise routines' },
        { icon: '👥', text: 'Social withdrawal and isolation' },
        { icon: '😰', text: 'Intense anxiety and distress around food' },
      ],
    },
    danger: {
      eyebrow: 'Critical Warning',
      title: 'The Cost of',
      titleEm: 'Neglect',
      subtitle: 'The body cannot survive what the mind refuses to acknowledge. The physical toll is extreme and devastating when left untreated.',
      items: [
        { icon: '🫀', title: 'Cardiovascular Collapse', desc: 'Dangerously low heart rate, cardiac arrest, and life-threatening arrhythmias.' },
        { icon: '🧠', title: 'Bone Density Loss', desc: 'Severe long-term damage to bones, brain function, and hormonal systems.' },
        { icon: '😔', title: 'Depression & Anxiety', desc: 'Dramatically increases risk of co-occurring depression, anxiety, and self-harm.' },
        { icon: '⚠️', title: 'Highest Mortality Risk', desc: 'Among all psychiatric illnesses, eating disorders carry the highest mortality rate.' },
      ],
      hope: 'But there is hope — ',
      hopeBold: 'early treatment dramatically improves recovery chances.',
      hopeSub: 'The sooner help is sought, the greater the possibility of full recovery.',
    },
    support: {
      eyebrow: 'The Role of Support',
      title: 'You Are',
      titleEm: 'Not Alone',
      subtitle: 'Recovery is not a solitary journey. Family, friends, and community play an irreplaceable role in creating the conditions for healing.',
      pillars: [
        { icon: '🤍', title: 'Family & Friends', desc: 'Loved ones who listen without judgment create the safe space needed for healing. Their consistent presence reduces relapse risk significantly.' },
        { icon: '💛', title: 'Emotional Support', desc: 'Consistent emotional validation and compassionate communication help break the cycle of shame that feeds eating disorders.' },
        { icon: '🌟', title: 'Professional Help', desc: 'Encouraging and supporting a loved one to seek professional treatment is one of the most impactful actions supporters can take.' },
      ],
      quote: '"Creating a safe, non-judgmental space is one of the most powerful healing forces available."',
    },
    awareness: {
      eyebrow: 'Why It Matters',
      title: 'Fighting Stigma,',
      titleEm: 'Saving Lives',
      body: 'Awareness is not just compassion — it is a matter of survival. When communities recognize the signs, speak openly, and reduce stigma, people reach out sooner and recovery becomes possible.',
      pullQuote: '"The earlier someone seeks help,\nthe better their chance of recovery."',
      points: [
        'Many cases go unnoticed for years — sometimes decades',
        'Stigma and shame prevent millions from seeking the help they deserve',
        'Recognizing early warning signs can mean the difference between recovery and crisis',
        'Communities, families, and systems must work together to reduce barriers to care',
      ],
    },
    treatment: {
      eyebrow: 'Paths to Healing',
      title: 'Treatment &',
      titleEm: 'Recovery',
      subtitle: 'Recovery is achievable. A comprehensive, personalized approach addresses the mental, physical, and emotional dimensions of healing.',
      items: [
        { icon: '🏥', title: 'Medical Monitoring', desc: 'Nutritional rehabilitation, vital sign monitoring, and managing physical complications under medical supervision.' },
        { icon: '🧠', title: 'Psychotherapy', desc: 'Cognitive Behavioral Therapy (CBT), family-based therapy, and dialectical behavior therapy tailored to the individual.' },
        { icon: '💊', title: 'Medication', desc: 'When appropriate, evidence-based medication supports recovery alongside therapy and nutritional care.' },
        { icon: '♾️', title: 'Long-Term Recovery', desc: 'Ongoing support, relapse prevention strategies, and building a sustainable, healthy relationship with food and self.' },
      ],
      hopeBanner: 'Recovery is possible with the right support.',
    },
    promise: {
      eyebrow: 'Our Commitment',
      title: 'The Promise',
      titleEm: 'of Dawn',
      subtitle: 'Recovery is not linear, but it is always possible. We are committed to providing the resources, knowledge, and support necessary to guide patients back to the light.',
      commitments: [
        { icon: '🤖', text: 'Using AI and technology to improve early detection and care' },
        { icon: '🌐', text: 'Building tools that support both patients and medical professionals' },
        { icon: '💙', text: 'Creating a compassionate, accessible recovery ecosystem' },
        { icon: '🔬', text: 'Continuous development to make treatment more effective and reachable' },
      ],
      cta1: 'Find Help Now',
      cta2: 'Join the Cause',
      footerLogo: 'Nour',
      footerTagline: 'Illuminating the path to recovery — one step at a time.',
    },
  },
  ar: {
    dir: 'rtl',
    nav: {
      home: 'الرئيسية', statistics: 'الإحصائيات', whatAreEDs: 'ما هي الاضطرابات',
      anorexia: 'فقدان الشهية', symptoms: 'الأعراض', danger: 'الخطر',
      support: 'الدعم', awareness: 'التوعية', treatment: 'العلاج', promise: 'الوعد',
    },
    hero: {
      logo: 'نور',
      titleWords: ['كسر', 'الصمت.', ''],
      subtitle: 'مساعدة المرضى والأطباء في رحلة التعافي من اضطرابات الأكل — من خلال الوعي والتكنولوجيا والتعاطف.',
      cta: 'ابدأ الرحلة',
      scrollHint: 'مرر للاستكشاف',
    },
    stats: {
      eyebrow: 'ثقل الصمت',
      title: 'أثقل مما',
      titleEm: 'ندرك',
      items: [
        { value: 9, suffix: '%', label: 'الانتشار العالمي', description: 'من سكان العالم يعانون من اضطراب في الأكل — أكثر من 70 مليون شخص.' },
        { value: 2, suffix: 'nd', label: 'أشد الأمراض النفسية فتكاً', description: 'تحمل اضطرابات الأكل ثاني أعلى معدل وفيات بين الأمراض النفسية.' },
        { value: 26, suffix: '%', label: 'حالات غير مشخصة', description: 'ما يقارب 1 من كل 4 مصابين لا يتلقى تشخيصًا أو مساعدة مهنية.' },
        { value: 3, suffix: 'x', label: 'تزايد خطر المراهقين', description: 'تضاعفت معدلات الإصابة بين المراهقين والشباب ثلاث مرات خلال العقد الماضي.' },
      ],
    },
    whatEDs: {
      eyebrow: 'فهم الاضطرابات',
      title: 'أعمق مما تبدو',
      body: 'اضطرابات الأكل حالات صحية خطيرة ومعقدة — جسديًا ونفسيًا. إنها ليست خيارات أو مراحل عابرة، بل تؤثر على السلوك والعواطف والعلاقة مع الطعام وصورة الجسم.',
      bodySub: 'إنها من أكثر الحالات سوء فهمًا في الطب الحديث، وتحمل عواقب وخيمة لملايين الأرواح.',
      types: ['فقدان الشهية العصبي', 'الشره المرضي', 'اضطراب نهم الأكل'],
      quote: '"إنها ليست عن الطعام. إنها عن الألم."',
      captionLeft: 'فقدان الشهية',
      captionRight: 'الشره المرضي',
    },
    anorexia: {
      eyebrow: 'فهم فقدان الشهية',
      heading1: 'فقدان الشهية',
      heading2: 'العصبي',
      definition: 'فقدان الشهية العصبي اضطراب أكل مهدد للحياة يتسم بتجويع النفس وفقدان الوزن الشديد. يحمل أحد أعلى معدلات الوفيات بين الأمراض النفسية.',
      points: [
        'خوف شديد من اكتساب الوزن حتى عند النحافة الشديدة',
        'صورة مشوهة للجسم — رؤية النفس أكبر مما هي عليه',
        'تقييد مفرط لتناول الطعام للحفاظ على وزن منخفض',
        'طقوس وسواسية حول الأكل والغذاء والتمارين',
        'الكشف المبكر أمر بالغ الأهمية — كلما بدأ العلاج مبكرًا كانت النتائج أفضل',
      ],
      alertBadge: 'خطر مرتفع',
      alertText: 'التدخل المبكر يمكن أن يقلل من خطر الوفاة بأكثر من 80٪',
    },
    symptoms: {
      eyebrow: 'التعرف على العلامات',
      title: 'الأعراض الجسدية',
      titleEm: 'والسلوكية',
      physicalLabel: 'جسدية',
      behavioralLabel: 'سلوكية',
      physical: [
        { icon: '⚡', text: 'فقدان وزن سريع أو مفرط' },
        { icon: '😴', text: 'تعب مستمر ودوخة' },
        { icon: '🌿', text: 'تساقط الشعر وجفاف البشرة' },
        { icon: '🔴', text: 'اضطراب أو انقطاع الدورة الشهرية' },
        { icon: '🧊', text: 'حساسية مفرطة للبرد' },
      ],
      behavioral: [
        { icon: '🔢', text: 'إحصاء وسواسي للسعرات الحرارية' },
        { icon: '🚪', text: 'تجنب الوجبات أو الأكل سرًا' },
        { icon: '🏃', text: 'ممارسة مفرطة وقسرية للرياضة' },
        { icon: '👥', text: 'العزلة الاجتماعية والانسحاب' },
        { icon: '😰', text: 'قلق شديد ومعاناة حول الطعام' },
      ],
    },
    danger: {
      eyebrow: 'تحذير حرج',
      title: 'ثمن',
      titleEm: 'التجاهل',
      subtitle: 'لا يستطيع الجسد تحمّل ما يرفض العقل الاعتراف به. التداعيات الجسدية قاسية ومدمرة عند إهمال العلاج.',
      items: [
        { icon: '🫀', title: 'انهيار القلب والأوعية', desc: 'بطء خطير في معدل ضربات القلب، سكتة قلبية، واضطرابات النظم المهددة للحياة.' },
        { icon: '🧠', title: 'فقدان كثافة العظام', desc: 'تلف حاد طويل الأمد في العظام ووظائف الدماغ والجهاز الهرموني.' },
        { icon: '😔', title: 'الاكتئاب والقلق', desc: 'يرفع بشكل كبير خطر الإصابة بالاكتئاب المصاحب والقلق وإيذاء النفس.' },
        { icon: '⚠️', title: 'أعلى معدلات الوفيات', desc: 'تحمل اضطرابات الأكل أعلى معدل وفيات بين جميع الأمراض النفسية.' },
      ],
      hope: 'لكنّ هناك أمل — ',
      hopeBold: 'العلاج المبكر يحسّن فرص التعافي بشكل كبير.',
      hopeSub: 'كلما طُلبت المساعدة مبكرًا، كانت إمكانية التعافي الكامل أكبر.',
    },
    support: {
      eyebrow: 'دور الدعم',
      title: 'لست',
      titleEm: 'وحدك',
      subtitle: 'التعافي ليس رحلة منفردة. الأسرة والأصدقاء والمجتمع يؤدون دورًا لا غنى عنه في خلق بيئة الشفاء.',
      pillars: [
        { icon: '🤍', title: 'الأسرة والأصدقاء', desc: 'الأحباء الذين يستمعون دون إصدار أحكام يخلقون الفضاء الآمن للشفاء ويقللون خطر الانتكاسة.' },
        { icon: '💛', title: 'الدعم العاطفي', desc: 'التحقق العاطفي المستمر والتواصل الرحيم يساعدان على كسر دوامة الخجل التي تغذي الاضطراب.' },
        { icon: '🌟', title: 'المساعدة المتخصصة', desc: 'تشجيع من نحب على طلب العلاج المتخصص هو من أكثر الخطوات تأثيرًا يمكن للداعمين اتخاذها.' },
      ],
      quote: '"خلق فضاء آمن وخالٍ من الأحكام هو من أقوى قوى الشفاء المتاحة."',
    },
    awareness: {
      eyebrow: 'لماذا يهم',
      title: 'محاربة الوصمة،',
      titleEm: 'إنقاذ الأرواح',
      body: 'التوعية ليست مجرد تعاطف — إنها مسألة بقاء. حين يتعرف المجتمع على العلامات ويتحدث بصراحة ويقلل من الوصمة، يستطيع الناس طلب المساعدة مبكرًا والتعافي.',
      pullQuote: '"كلما طلب الشخص المساعدة مبكرًا،\nكانت فرصته في التعافي أفضل."',
      points: [
        'كثير من الحالات تمر دون ملاحظة لسنوات — وأحيانًا لعقود',
        'الوصمة والخجل يمنعان الملايين من طلب المساعدة التي يستحقونها',
        'التعرف على علامات التحذير المبكرة قد يكون الفرق بين التعافي والأزمة',
        'يجب أن تتعاون المجتمعات والأسر والأنظمة لتقليل العقبات أمام الرعاية',
      ],
    },
    treatment: {
      eyebrow: 'طرق للشفاء',
      title: 'العلاج',
      titleEm: 'والتعافي',
      subtitle: 'التعافي قابل للتحقيق. النهج الشامل والمخصص يعالج الأبعاد النفسية والجسدية والعاطفية للشفاء.',
      items: [
        { icon: '🏥', title: 'المراقبة الطبية', desc: 'إعادة التأهيل الغذائي ومراقبة العلامات الحيوية وإدارة المضاعفات الجسدية تحت إشراف طبي.' },
        { icon: '🧠', title: 'العلاج النفسي', desc: 'العلاج المعرفي السلوكي والعلاج الأسري والعلاج السلوكي الجدلي المصمم خصيصًا للفرد.' },
        { icon: '💊', title: 'الأدوية', desc: 'عند الحاجة، تدعم الأدوية القائمة على الأدلة التعافي جنبًا إلى جنب مع العلاج والرعاية الغذائية.' },
        { icon: '♾️', title: 'التعافي طويل الأمد', desc: 'الدعم المستمر واستراتيجيات الوقاية من الانتكاسة وبناء علاقة صحية مستدامة مع الطعام والنفس.' },
      ],
      hopeBanner: 'التعافي ممكن مع الدعم الصحيح.',
    },
    promise: {
      eyebrow: 'التزامنا',
      title: 'وعد',
      titleEm: 'الفجر',
      subtitle: 'التعافي ليس خطًا مستقيمًا، لكنه ممكن دائمًا. نحن ملتزمون بتوفير الموارد والمعرفة والدعم اللازمين لإرشاد المرضى نحو النور.',
      commitments: [
        { icon: '🤖', text: 'استخدام الذكاء الاصطناعي والتكنولوجيا لتحسين الاكتشاف المبكر والرعاية' },
        { icon: '🌐', text: 'بناء أدوات تدعم المرضى والمهنيين الطبيين على حد سواء' },
        { icon: '💙', text: 'إنشاء نظام بيئي للتعافي رحيم وميسور الوصول' },
        { icon: '🔬', text: 'التطوير المستمر لجعل العلاج أكثر فعالية وإمكانية' },
      ],
      cta1: 'ابحث عن مساعدة',
      cta2: 'انضم للقضية',
      footerLogo: 'نور',
      footerTagline: 'إضاءة طريق التعافي — خطوة بخطوة.',
    },
  },
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(deviceLang);

  const toggleLang = () => setLang(prev => prev === 'en' ? 'ar' : 'en');
  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      <div dir={t.dir} lang={lang} style={{ width: '100%', height: '100%' }}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used within LanguageProvider');
  return ctx;
}
