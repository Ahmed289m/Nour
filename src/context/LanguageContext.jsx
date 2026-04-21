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
      home: 'الرئيسية', statistics: 'الأرقام', whatAreEDs: 'يعني إيه اضطرابات الأكل',
      anorexia: 'فقدان الشهية العصبي', symptoms: 'العلامات', danger: 'المخاطر',
      support: 'الدعم', awareness: 'التوعية', treatment: 'العلاج', promise: 'وعدنا',
    },
    hero: {
      logo: 'نور',
      titleWords: ['اكسر', 'الصمت'],
      subtitle: 'اضطرابات الأكل مش دلع ولا ضعف إرادة. دي أمراض نفسية باطنية بتأثر على الجسم كله. إحنا هنا عشان نساعد المرضى وأهلهم في رحلة العلاج، ونوفر للأطباء محتوى عملي يساعدهم يقدموا رعاية أدق. اطمئن، إنت مش لوحدك.',
      cta: 'ابدأ الرحلة',
      scrollHint: 'انزل وشوف التفاصيل',
    },
    stats: {
      eyebrow: 'أرقام لازم تتشاف',
      title: 'حجم المشكلة',
      titleEm: 'بوضوح',
      items: [
        { value: 9, suffix: '%', label: 'انتشار عالمي', description: 'حوالي 9% من الناس حول العالم بيعانوا من اضطرابات الأكل، يعني أكتر من 70 مليون شخص.' },
        { value: 2, suffix: '', label: 'تاني أعلى معدل وفيات نفسي', description: 'اضطرابات الأكل من أخطر الاضطرابات النفسية، ومعدل الوفيات فيها من أعلى المعدلات.' },
        { value: 26, suffix: '%', label: 'حالات من غير تشخيص', description: 'قرابة واحد من كل أربعة مصابين ما بيوصلوش لتشخيص سليم أو مساعدة متخصصة.' },
        { value: 3, suffix: ' مرات', label: 'زيادة الخطر عند المراهقين', description: 'معدلات الإصابة عند المراهقين والشباب زادت 3 مرات خلال آخر 10 سنين.' },
      ],
    },
    whatEDs: {
      eyebrow: 'يعني إيه اضطرابات الأكل',
      title: 'مرض نفسي باطني',
      body: 'اضطرابات الأكل مرض نفسي باطني، يعني بدايته نفسية لكن تأثيره الطبي بيظهر على الجسم كله: القلب، الجهاز الهضمي، الهرمونات، العظام، والمناعة. المشكلة مش في الأكل بس، دي حالة طبية ونفسية معقدة ومحتاجة تشخيص دقيق.',
      bodySub: 'عرضيا بنشوف علامات زي نقص وزن سريع أو متذبذب، دوخة وإرهاق، وجع بطن وانتفاخ، اضطراب الدورة عند البنات، ومعاهم سلوكيات زي تجنب الأكل، صيام متكرر، وخوف شديد من زيادة الوزن. عشان كده التشخيص المبكر مهم جدا.',
      types: ['فقدان الشهية العصبي', 'الشره المرضي', 'اضطراب نهم الأكل'],
      quote: '"ده مرض حقيقي، وكل ما نتدخل بدري فرص التعافي بتزيد."',
      captionLeft: 'فقدان الشهية العصبي',
      captionRight: 'الشره المرضي',
    },
    anorexia: {
      eyebrow: 'نفهم فقدان الشهية العصبي',
      heading1: 'فقدان الشهية',
      heading2: 'العصبي',
      definition: 'فقدان الشهية العصبي اضطراب خطير بيخلي الشخص يقلل أكله جدا أو يتعمد ما ياكلش رغم احتياج جسمه. لو ابنك أو بنتك بيقللوا الأكل، أو بيتعمدوا ما ياكلوش أو يصوموا، ودايما بيشتكوا إن بطنهم بتوجعهم، فده مش دلع. غالبا هم خايفين يتكلموا، ولازم تتوجهوا لدكتور متخصص في اضطرابات الأكل عشان التشخيص يكون صح.',
      points: [
        'خوف شديد من زيادة الوزن حتى مع النحافة الواضحة',
        'صورة جسم غير دقيقة تخلي المريض شايف نفسه أضخم من الحقيقة',
        'تقليل قاسي للأكل أو الامتناع عنه لفترات طويلة',
        'انشغال وسواسي بالسعرات والميزان والتمرين',
        'كتير من الأطباء غير المتخصصين ممكن يستبعدوا التشخيص في البداية، عشان كده لازم تقييم عند دكتور متخصص في اضطرابات الأكل',
      ],
      alertBadge: 'ما تتأخرش',
      alertText: 'التشخيص الدقيق عند متخصص، والتدخل المبكر بيفرق جدا في فرص التعافي وتقليل المضاعفات.',
    },
    symptoms: {
      eyebrow: 'إزاي نلقط العلامات بدري',
      title: 'الأعراض',
      titleEm: 'الجسدية والسلوكية',
      physicalLabel: 'جسدية',
      behavioralLabel: 'سلوكية',
      physical: [
        { icon: '⚡', text: 'نزول وزن سريع أو تذبذب واضح في الوزن' },
        { icon: '😴', text: 'إرهاق مستمر، دوخة، وضعف تركيز' },
        { icon: '🌿', text: 'وجع بطن متكرر، إمساك، أو انتفاخ' },
        { icon: '🔴', text: 'اضطراب أو انقطاع الدورة عند البنات' },
        { icon: '🧊', text: 'تساقط شعر، جفاف جلد، وإحساس دائم بالبرد' },
      ],
      behavioral: [
        { icon: '🔢', text: 'حساب سعرات بشكل وسواسي طول الوقت' },
        { icon: '🚪', text: 'تجنب الوجبات أو الأكل في السر' },
        { icon: '🏃', text: 'تعمد الصيام أو تخطي الأكل بدون سبب طبي' },
        { icon: '👥', text: 'ممارسة رياضة بشكل مبالغ فيه لحرق الأكل' },
        { icon: '😰', text: 'انعزال اجتماعي وقلق شديد حوالين الأكل' },
      ],
    },
    danger: {
      eyebrow: 'تحذير مهم',
      title: 'ثمن',
      titleEm: 'التأخير',
      subtitle: 'لما العلاج يتأخر، التأثير ما بيبقاش نفسي بس. الجسم كله بيتأذى، والمضاعفات ممكن تبقى خطيرة وممتدة.',
      items: [
        { icon: '🫀', title: 'مشاكل خطيرة في القلب', desc: 'بطء شديد في ضربات القلب واضطراب في النبض ممكن يوصل لحالات مهددة للحياة.' },
        { icon: '🧠', title: 'ضعف العظام والهرمونات', desc: 'نقص التغذية المستمر بيأثر على العظام، التركيز، والاتزان الهرموني على المدى الطويل.' },
        { icon: '😔', title: 'اكتئاب وقلق أشد', desc: 'الاضطراب بيزود الضغط النفسي وبيرفع احتمالات الاكتئاب والقلق وإيذاء النفس.' },
        { icon: '⚠️', title: 'ارتفاع خطر الوفاة', desc: 'اضطرابات الأكل من أعلى الاضطرابات النفسية في معدلات الوفاة لو من غير علاج مناسب.' },
      ],
      hope: 'بس في أمل - ',
      hopeBold: 'العلاج بدري بيرفع فرص التعافي بشكل واضح.',
      hopeSub: 'كل يوم بدري في طلب المساعدة بيفرق في النتيجة.',
    },
    support: {
      eyebrow: 'قوة الدعم',
      title: 'إنت',
      titleEm: 'مش لوحدك',
      subtitle: 'التعافي مش مشوار فردي. دور الأسرة والأصحاب والمجتمع بيساعد المريض يثبت على العلاج ويرجع يتوازن.',
      pillars: [
        { icon: '🤍', title: 'الأسرة والأصحاب', desc: 'الناس القريبة لما تسمع من غير لوم بتدي أمان حقيقي، وده بيقلل احتمالات الانتكاسة.' },
        { icon: '💛', title: 'الدعم النفسي', desc: 'الكلام الهادي والتفهم المستمر بيساعدوا المريض يطلب مساعدة بدل ما يخبي ألمه.' },
        { icon: '🌟', title: 'المتابعة المتخصصة', desc: 'تشجيع المريض يلتزم مع فريق متخصص في اضطرابات الأكل من أهم أسباب التحسن.' },
      ],
      quote: '"كلمة دعم في وقتها ممكن تنقذ حياة كاملة."',
    },
    awareness: {
      eyebrow: 'ليه التوعية مهمة',
      title: 'اكسر الوصمة،',
      titleEm: 'واحمي حياة',
      body: 'التوعية مش مجرد كلام. كل ما الناس تفهم العلامات وتتعامل من غير حكم، المريض بيتكلم بدري وبيوصل للعلاج في الوقت الصح.',
      pullQuote: '"كل ما التدخل يكون بدري،\nفرص التعافي بتكون أعلى."',
      points: [
        'حالات كتير بتعدي سنين من غير تشخيص واضح',
        'في أوقات كتير التشخيص بيتفوت عند أطباء غير متخصصين أو بيتفسر بشكل غلط',
        'الوصمة والخوف بيخلوا المريض يخبي الأعراض بدل ما يطلب مساعدة',
        'التحويل لدكتور متخصص في اضطرابات الأكل هو الطريق الأدق للتشخيص والعلاج',
      ],
    },
    treatment: {
      eyebrow: 'خطة العلاج',
      title: 'علاج',
      titleEm: 'وتعافي',
      subtitle: 'العلاج الفعال بيحتاج فريق متخصص: طبيب نفسي، باطني، تغذية علاجية، ومعالج نفسي. الخطة بتتبني حسب حالة كل مريض وتاريخ الأعراض.',
      items: [
        { icon: '🏥', title: 'متابعة طبية دقيقة', desc: 'تنظيم التغذية، متابعة العلامات الحيوية، وعلاج أي مضاعفات جسدية تحت إشراف طبي.' },
        { icon: '🧠', title: 'علاج نفسي متخصص', desc: 'جلسات علاج مبنية على الدليل العلمي زي العلاج المعرفي السلوكي والعلاج الأسري.' },
        { icon: '💊', title: 'أدوية عند الحاجة', desc: 'في حالات معينة، الأدوية بتساعد مع الخطة العلاجية تحت متابعة الطبيب المختص.' },
        { icon: '♾️', title: 'خطة منع الانتكاسة', desc: 'متابعة مستمرة وبناء علاقة صحية مع الأكل والجسم لضمان تعافي ثابت على المدى الطويل.' },
      ],
      hopeBanner: 'التعافي ممكن، لما التشخيص يكون صح والدعم يكون مستمر.',
    },
    promise: {
      eyebrow: 'وعدنا',
      title: 'نور',
      titleEm: 'في الطريق',
      subtitle: 'وعدنا إننا نوفر معرفة دقيقة، مساحة آمنة، ودعم مستمر لكل مريض وأسرة، ونساعد الأطباء بأدوات ومحتوى يسهل التشخيص والمتابعة.',
      commitments: [
        { icon: '🤖', text: 'استخدام الذكاء الاصطناعي والتكنولوجيا لتحسين الاكتشاف المبكر والرعاية' },
        { icon: '🌐', text: 'بناء أدوات واضحة تفيد المريض وتساعد الطبيب في القرار' },
        { icon: '💙', text: 'تقديم دعم إنساني يحترم كرامة المريض ويقلل الوصمة' },
        { icon: '🔬', text: 'تطوير مستمر لمحتوى طبي موثوق وسهل الفهم' },
      ],
      cta1: 'اطلب مساعدة دلوقتي',
      cta2: 'شاركنا كطبيب',
      footerLogo: 'نور',
      footerTagline: 'هنساعدك تخرج من الضلمة، اطمن إنت مش لوحدك.',
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
