import { LanguageId, VizType } from '../types';

export interface VizTabConfig {
  id: VizType;
  title: Record<LanguageId, string>;
  icon: string;
  badge: string;
  totalSteps: number;
}

export const VIZ_TABS: VizTabConfig[] = [
  {
    id: 'neural-network',
    title: {
      en: 'Neural Network',
      hi: 'न्यूरल नेटवर्क (Forward Pass)',
      te: 'న్యూరల్ నెట్‌వర్క్',
      mr: 'न्यूरल नेटवर्क',
      ta: 'நியூரல் நெட்வொர்க்',
      ur: 'نیورل نیٹ ورک',
      'r-ur': 'Neural Network',
      hin: 'Neural Network'
    },
    icon: 'Network',
    badge: 'Layers & Weights',
    totalSteps: 4
  },
  {
    id: 'ml-pipeline',
    title: {
      en: 'ML Pipeline',
      hi: 'मशीन लर्निंग पाइपलाइन',
      te: 'ML పైప్‌లైన్',
      mr: 'ML पाईपलाईन',
      ta: 'ML பைப்லைன்',
      ur: 'ایم ایل پائپ لائن',
      'r-ur': 'ML Pipeline',
      hin: 'ML Pipeline'
    },
    icon: 'GitCommit',
    badge: 'Raw Data to Model',
    totalSteps: 5
  },
  {
    id: 'pattern-matching',
    title: {
      en: 'Pattern Matching',
      hi: 'पैटर्न पहचान (Classification)',
      te: 'ప్యాటర్న్ మ్యాచింగ్',
      mr: 'पॅटर्न ओळख',
      ta: 'வடிவ பொருத்தம்',
      ur: 'پیٹرن میچنگ',
      'r-ur': 'Pattern Matching',
      hin: 'Pattern Matching'
    },
    icon: 'ScanEye',
    badge: 'Image Recognition',
    totalSteps: 4
  },
  {
    id: 'transformer',
    title: {
      en: 'Transformer Attention',
      hi: 'ट्रांसफॉर्मर अटेंशन (Self-Attention)',
      te: 'ట్రాన్స్‌ఫార్మర్ అటెన్షన్',
      mr: 'ट्रान्सफॉर्मर अटेंशन',
      ta: 'டிரான்ஸ்பார்மர் கவனம்',
      ur: 'ٹرانسفارمر اٹینشن',
      'r-ur': 'Transformer Attention',
      hin: 'Transformer Attention'
    },
    icon: 'Layers3',
    badge: 'Next Word Prediction',
    totalSteps: 4
  },
  {
    id: 'full-workflow',
    title: {
      en: 'Full ML Workflow',
      hi: 'संपूर्ण ML कार्यप्रवाह',
      te: 'పూర్తి వర్క్‌ఫ్లో',
      mr: 'संपूर्ण कार्यप्रवाह',
      ta: 'முழுமையான பணிப்பாய்வு',
      ur: 'مکمل ورک فلو',
      'r-ur': 'Full Workflow',
      hin: 'Full ML Workflow'
    },
    icon: 'Workflow',
    badge: 'End-to-End System',
    totalSteps: 5
  }
];

export interface StepExplanation {
  stepIndex: number;
  stepName: Record<LanguageId, string>;
  explanation: Record<LanguageId, string>;
  analogy: Record<LanguageId, string>;
  activeLayers: string[];
  mascotReaction: 'curious' | 'happy' | 'thinking' | 'celebrating' | 'focused';
}

export const VIZ_EXPLANATIONS: Record<VizType, StepExplanation[]> = {
  'neural-network': [
    {
      stepIndex: 0,
      stepName: {
        en: '1. Input Layer (Receiving Signals)',
        hi: '1. इनपुट लेयर (संकेत ग्रहण करना)',
        te: '1. ఇన్పుట్ లేయర్ (డేటా స్వీకరణ)',
        mr: '1. इनपुट थर (माहिती स्वीकारणे)',
        ta: '1. உள்ளீட்டு அடுக்கு (தரவு பெறுதல்)',
        ur: '1۔ ان پٹ لیئر (معلومات وصول کرنا)',
        'r-ur': '1. Input Layer (Signal milna)',
        hin: '1. Input Layer (Raw data receive hona)'
      },
      explanation: {
        en: 'The network accepts raw numbers from the outside world (like image pixels, house size, or temperature).',
        hi: 'नेटवर्क दुनिया से कच्चा डेटा स्वीकार करता है (जैसे फोटो के पिक्सल या कमरे का तापमान)।',
        te: 'నెట్‌వర్క్ చిత్ర పిక్సెల్‌లు లేదా సంఖ్యలను బయటి నుండి స్వీకరిస్తుంది.',
        mr: 'बाहेरील जगातून आलेली मूळ माहिती किंवा आकडे स्वीकारले जातात.',
        ta: 'வெளி உலகத்திலிருந்து எண்கள் அல்லது புகைப்படத் தகவல்கள் பெறப்படுகின்றன.',
        ur: 'نیٹ ورک تصویر کے پکسلز یا دیگر اعدادی معلومات وصول کرتا ہے۔',
        'r-ur': 'Network bahir se raw numbers (pixels ya temperature) accept karta hai.',
        hin: 'Network bahar se raw data (jaise photo ke pixels ya temperature) receive karta hai.'
      },
      analogy: {
        en: 'Like a cricket umpire receiving visual clues: ball speed, trajectory, and batsman movement.',
        hi: 'जैसे क्रिकेट अंपायर की आंखें गेंद की गति, दिशा और बल्लेबाज के पैरों की हरकत को नोट करती हैं।',
        te: 'క్రికెట్ అంపైర్ బంతి వేగం, బ్యాట్స్‌మెన్ కదలికలను కళ్ళతో గమనించడం లాంటిది.',
        mr: 'अंपायर चेंडूचा वेग आणि फलंदाजाची हालचाल बारकाईने टिपण्यासारखे.',
        ta: 'கிரிக்கெட் நடுவர் பந்தின் வேகம் மற்றும் பேட்ஸ்மேனின் அசைவுகளைக் கவனிப்பது போல.',
        ur: 'جیسے کرکٹ امپائر کی آنکھیں گیند کی رفتار اور بلے باز کی حرکت دیکھیں۔',
        'r-ur': 'Cricket umpire ki aankhein: ball ki speed aur trajectory note karna.',
        hin: 'Cricket umpire ki aankhein: ball ki speed, bounce aur batsman ka footwork dekhna.'
      },
      activeLayers: ['input'],
      mascotReaction: 'curious'
    },
    {
      stepIndex: 1,
      stepName: {
        en: '2. First Hidden Layer (Edges & Low-level Shapes)',
        hi: '2. पहली हिडन लेयर (आकृतियों और किनारों की पहचान)',
        te: '2. మొదటి దాగి ఉన్న లేయర్ (ఆకారాల గుర్తింపు)',
        mr: '2. पहिला गुप्त थर (रेषा आणि आकार शोधणे)',
        ta: '2. முதல் மறைமுக அடுக்கு (வடிவங்களை அறிதல்)',
        ur: '2۔ پہلی پوشیدہ پرت (لائنیں اور اشکال تلاش کرنا)',
        'r-ur': '2. Pehli Hidden Layer (Edges & Lines)',
        hin: '2. First Hidden Layer (Edges aur lines trace karna)'
      },
      explanation: {
        en: 'Neurons combine inputs through weighted connections. They detect simple contours, vertical lines, and color shifts.',
        hi: 'न्यूरॉन्स इनपुट को तौलते हैं और साधारण रेखाएं, किनारे तथा रंगों के बदलाव पहचानते हैं।',
        te: 'న్యూరాన్లు సాధారణ లైన్లు, ఆకారాలు మరియు రంగుల మార్పులను గుర్తిస్తాయి.',
        mr: 'न्यूरॉन्स रेषा, कोपरे आणि रंगांमधील फरक ओळखायला सुरुवात करतात.',
        ta: 'நியூரான்கள் எளிய கோடுகள், மூலைகள் மற்றும் நிற மாற்றங்களைக் கண்டறிகின்றன.',
        ur: 'نیورونز سادہ لکیریں، کونے اور رنگوں کے توازن کا جائزہ لیتے ہیں۔',
        'r-ur': 'Neurons simple edges aur lines identify karte hain weighted lines ke zariye.',
        hin: 'Neurons input lines ko multiply karke simple shapes aur edges dhoondte hain.'
      },
      analogy: {
        en: 'Like looking at a rangoli: noticing individual chalk lines before understanding the full flower pattern.',
        hi: 'जैसे रंगोली देखते समय पहले खड़िया की सफेद रेखाएं देखना, फिर पूरा फूल समझना।',
        te: 'ముగ్గు వేసేటప్పుడు చుక్కలు మరియు గీతలను గుర్తించినట్లు.',
        mr: 'रांगोळीतील एकेक रेषा आणि ठिपके प्रथम लक्षात येण्यासारखे.',
        ta: 'கோலம் போடும் போது புள்ளிகளையும் கோடுகளையும் முதலில் கவனிப்பது போல.',
        ur: 'جیسے کسی خوبصورت نقش و نگار میں پہلے بنیادی لکیروں پر نظر پڑے۔',
        'r-ur': 'Rangoli ki white chalk lines dekhna, pura phool banne se pehle.',
        hin: 'Rangoli ki dotted lines dekhna, pura pattern samajhne se pehle.'
      },
      activeLayers: ['hidden1'],
      mascotReaction: 'thinking'
    },
    {
      stepIndex: 2,
      stepName: {
        en: '3. Second Hidden Layer (Complex Parts: Eyes, Petals)',
        hi: '3. दूसरी हिडन लेयर (जटिल अंग: आंखें, नाक, पंखुड़ियां)',
        te: '3. రెండవ దాగి ఉన్న లేయర్ (కళ్ళు, ముక్కు గుర్తింపు)',
        mr: '3. दुसरा गुप्त थर (डोळे, नाक यांसारखे जटिल भाग)',
        ta: '3. இரண்டாம் மறைமுக அடுக்கு (கண்கள், முகம் போன்ற உறுப்புகள்)',
        ur: '3۔ دوسری پوشیدہ پرت (آنکھیں، ناک اور چہرے کے نقوش)',
        'r-ur': '3. Second Hidden Layer (Complex Parts)',
        hin: '3. Second Hidden Layer (Complex Features)'
      },
      explanation: {
        en: 'Lower-level lines assemble into recognizable parts: circular eyes, whisker patterns, or petal curves.',
        hi: 'छोटी-छोटी रेखाएं मिलकर आंखें, नाक, मूंछें या फूलों की पंखुड़ियों जैसे बड़े अंग बनाती हैं।',
        te: 'చిన్న గీతలు కలిసి కళ్ళు, ముఖం లాంటి సంపూర్ణ ఆకారాలుగా మారతాయి.',
        mr: 'लहान रेषा एकत्र येऊन डोळे, नाक, पाकळ्या अशी मोठी वैशिष्ट्ये तयार होतात.',
        ta: 'சிறிய கோடுகள் இணைந்து கண்கள், இதழ்கள் போன்ற முழுமையான பாகங்களாக உருவாகின்றன.',
        ur: 'سادہ لکیریں مل کر چہرے کے نقوش، ناک اور آنکھیں بناتی ہیں۔',
        'r-ur': 'Choti lines milkar aankhein, naak aur face features combine karti hain.',
        hin: 'Choti lines jud kar aankh, naak aur specific features combine karti hain.'
      },
      analogy: {
        en: 'Like a clay artisan assembling molded clay balls and clay coils into the trunk and ears of a Ganesha idol.',
        hi: 'जैसे मूर्तिकार मिट्टी के गोलों और पट्टियों को जोड़कर गणेश जी की सूंड और कान का रूप देता है।',
        te: 'మట్టితో వినాయకుడి తొండం, చెవులు మరియు చేతులు తీర్చిదిద్దినట్లు.',
        mr: 'मूर्तिकाराने मातीचे अवयव जोडून गणपतीची सोंड आणि कान तयार करण्यासारखे.',
        ta: 'சிற்பி களிமண் உருண்டைகளை இணைத்து விநாயகரின் தும்பிக்கை செய்வது போல.',
        ur: 'جیسے مجسمہ ساز مٹی کے حصوں کو جوڑ کر نقوش اور کان بناتا ہے۔',
        'r-ur': 'Kumhar ka mitti se morat ke kaan aur naak jodna.',
        hin: 'Clay art mein choti mitti ki goli ko jod ke face aur ears assemble karna.'
      },
      activeLayers: ['hidden2'],
      mascotReaction: 'focused'
    },
    {
      stepIndex: 3,
      stepName: {
        en: '4. Output Layer (Final Prediction & Confidence Score)',
        hi: '4. आउटपुट लेयर (अंतिम निर्णय व विश्वास स्कोर)',
        te: '4. అవుట్‌పుట్ లేయర్ (తుది నిర్ణయం)',
        mr: '4. आऊटपुट थर (अंतिम निर्णय आणि टक्केवारी)',
        ta: '4. வெளியீட்டு அடுக்கு (இறுதி முடிவு)',
        ur: '4۔ آؤٹ پٹ لیئر (حتمی فیصلہ اور درستگی)',
        'r-ur': '4. Output Layer (Final Decision)',
        hin: '4. Output Layer (Final Verdict & Score)'
      },
      explanation: {
        en: 'The network outputs probability scores for each category. Highest confidence node lights up brightly!',
        hi: 'नेटवर्क हर संभावित उत्तर के लिए संभावना (probability) बताता है। सबसे ज्यादा अंक वाला नोड चमक उठता है!',
        te: 'నెట్‌వర్క్ ప్రతి ప్రశ్నకు సరైన ఫలితాన్ని శాతంలో లెక్కిస్తుంది. అత్యధిక స్కోరు గెలుస్తుంది!',
        mr: 'नेटवर्क सर्व पर्यायांची शक्यता तपासते आणि सर्वाधिक खात्री असलेला पर्याय उजळतो!',
        ta: 'அனைத்து விடைகளின் சாத்தியக்கூறுகளைக் கணக்கிட்டு, அதிக மதிப்பெண் பெற்ற விடை ஒளிர்கிறது!',
        ur: 'نیٹ ورک تمام ممکنہ جوابات میں سے سب سے زیادہ ممکنہ نتیجے کو منتخب کرتا ہے۔',
        'r-ur': 'Sab se zyada probability score wala node glow karta hai: 98% Cat!',
        hin: 'Probability score calculate hota hai: Highest score wala answer winner ban jata hai!'
      },
      analogy: {
        en: 'The referee raising the winner’s hand in a kabaddi match with 100% certainty.',
        hi: 'जैसे कबड्डी मैच में रेफरी पूरे यकीन के साथ विजेता टीम का हाथ ऊपर उठा दे।',
        te: 'కబడ్డీ మ్యాచ్‌లో రిఫరీ విజేత చేతిని ఆత్మవిశ్వాసంతో పైకెత్తినట్లు.',
        mr: 'कुस्तीच्या फडात पंचाने विजयी मल्लाचा हात वर करून निकाल जाहीर करण्यासारखे.',
        ta: 'கபடி போட்டியில் நடுவர் வெற்றியாளரைத் தீர்மானித்து கையை உயர்த்துவது போல.',
        ur: 'جیسے کبڈی کے میچ میں امپائر جیتنے والے کھلاڑی کا ہاتھ فخر سے اٹھائے۔',
        'r-ur': 'Kabaddi match mein referee ka confident winner announce karna.',
        hin: 'Kabaddi ya cricket match mein third umpire ka Green Light de kar OUT declare karna.'
      },
      activeLayers: ['output'],
      mascotReaction: 'celebrating'
    }
  ],
  'ml-pipeline': [
    {
      stepIndex: 0,
      stepName: {
        en: '1. Raw Data Collection',
        hi: '1. कच्चा डेटा संग्रह',
        te: '1. డేటా సేకరణ',
        mr: '1. डेटा संकलन',
        ta: '1. மூலத் தரவு சேகரிப்பு',
        ur: '1۔ خام ڈیٹا جمع کرنا',
        'r-ur': '1. Raw Data Collection',
        hin: '1. Raw Data Collection'
      },
      explanation: {
        en: 'Gathering messy real-world measurements, user reviews, sensor readings, or photos.',
        hi: 'असली दुनिया से बिना छांटा हुआ डेटा जुटाना (जैसे यूजर रिव्यू, तस्वीरें या तापमान)।',
        te: 'నిజ జీవిత కొలతలు, రివ్యూలు లేదా ఫోటోలను సేకరించడం.',
        mr: 'वापरकर्त्यांच्या नोंदी आणि छायाचित्रे एकत्र करणे.',
        ta: 'நிஜ உலக அளவீடுகள் மற்றும் புகைப்படங்களைச் சேகரித்தல்.',
        ur: 'حقیقی دنیا سے معلومات، تصاویر اور مشاہدات اکٹھا کرنا۔',
        'r-ur': 'Unprocessed information aur files gather karna.',
        hin: 'Market se kacha data, reviews aur measurements collect karna.'
      },
      analogy: {
        en: 'Harvesting raw wheat and spices from farm fields before sorting.',
        hi: 'खेत से गेहूं और मसालों की कच्ची फसल काटना जिसमें धूल और कंकड़ भी होते हैं।',
        te: 'చేను నుండి ధాన్యాన్ని మరియు దినుసులను కోత కోయడం లాంటిది.',
        mr: 'शेतातून कच्चे धान्य आणि मसाले गोळा करण्यासारखे.',
        ta: 'வயலில் இருந்து தானியங்களை அறுத்தெடுப்பது போல.',
        ur: 'کھیت سے تازہ گندم لانا جس میں مٹی اور تنکے بھی ہوں۔',
        'r-ur': 'Khet se fasal kaatna jisme kankad bhi hon.',
        hin: 'Mandi se sabzi aur anaaj ki bori laana bina dhoye.'
      },
      activeLayers: ['step1'],
      mascotReaction: 'curious'
    },
    {
      stepIndex: 1,
      stepName: {
        en: '2. Cleaning & Preprocessing',
        hi: '2. सफाई व तैयारी (Data Cleaning)',
        te: '2. డేటా శుభ్రపరచడం',
        mr: '2. डेटा स्वच्छता',
        ta: '2. தரவு சுத்திகரிப்பு',
        ur: '2۔ ڈیٹا کی صفائی اور تیاری',
        'r-ur': '2. Cleaning & Formatting',
        hin: '2. Data Cleaning & Filtering'
      },
      explanation: {
        en: 'Removing duplicates, filling missing blanks, and formatting everything into neat tables.',
        hi: 'कचरा और दोहराव हटाना, खाली जगहें भरना और डेटा को सुंदर तालिका में ढालना।',
        te: 'తప్పులను తొలగించి, ఖాళీలను పూరించి క్రమబద్ధీకరించడం.',
        mr: 'अनावश्यक माहिती काढून रकाने व्यवस्थित भरणे.',
        ta: 'பிழைகளை நீக்கி, விடுபட்டவற்றை நிரப்பி சீரமைத்தல்.',
        ur: 'غلطیاں درست کرنا اور خالی جگہیں پُر کرنا۔',
        'r-ur': 'Duplicates hatana aur missing blanks fill karna.',
        hin: 'Kachra aur duplicate rows delete karna, formatting sahi karna.'
      },
      analogy: {
        en: 'Washing, picking stones from daal (lentils), and chopping vegetables before cooking.',
        hi: 'दाल पकाने से पहले उसमें से कंकड़ बीनना और सब्जियों को अच्छी तरह धोना।',
        te: 'పప్పు వండటానికి ముందు రాళ్లు ఏరి శుభ్రంగా కడగడం లాంటిది.',
        mr: 'डाळ शिजवण्यापूर्वी त्यातील खडे वेचून स्वच्छ धुण्यासारखे.',
        ta: 'பருப்பு சமைக்கும் முன் கல் பொறுக்கி கழுவுவது போல.',
        ur: 'دال پکانے سے پہلے کنکریاں چننا اور پانی سے دھونا۔',
        'r-ur': 'Daal se kankad nikalna aur sabzi dhona.',
        hin: 'Daal se kankad chunna aur saaf paani se dhona.'
      },
      activeLayers: ['step2'],
      mascotReaction: 'thinking'
    },
    {
      stepIndex: 2,
      stepName: {
        en: '3. Feature Engineering',
        hi: '3. महत्वपूर्ण गुण चुनना (Features)',
        te: '3. ముఖ్య లక్షణాల ఎంపిక',
        mr: '3. वैशिष्ट्ये वेगळी करणे',
        ta: '3. முக்கிய குணாதிசயங்களை பிரித்தல்',
        ur: '3۔ اہم خصوصیات کا انتخاب',
        'r-ur': '3. Important Features Extract Karna',
        hin: '3. Best Features Extract Karna'
      },
      explanation: {
        en: 'Extracting key signals that truly predict the outcome (e.g., location and square footage for house price).',
        hi: 'वे खास खूबियां चुनना जो सही निर्णय लेने में सबसे ज्यादा मददगार हों।',
        te: 'నిర్ణయానికి అవసరమైన ముఖ్యమైన లక్షణాలను వేరుచేయడం.',
        mr: 'अचूक निष्कर्षासाठी आवश्यक असणाऱ्या महत्त्वाच्या बाबी निवडणे.',
        ta: 'முடிவெடுக்க உதவும் முக்கியமான அம்சங்களை மட்டும் தேர்ந்தெடுத்தல்.',
        ur: 'وہ بنیادی خوبیاں تلاش کرنا جو صحیح اندازے میں مدد دیں۔',
        'r-ur': 'Result predict karne ke liye useful attributes select karna.',
        hin: 'House price ke liye location aur square feet jaise main factors choose karna.'
      },
      analogy: {
        en: 'Selecting the secret garam masala blend that defines the biryani\'s aroma.',
        hi: 'बिरयानी के लिए खास खुशबूदार गरम मसाले चुनना जो असली स्वाद तय करते हैं।',
        te: 'బిర్యానీకి అసలైన సువాసన ఇచ్చే మసాలాలను మాత్రమే ఎంచుకున్నట్లు.',
        mr: 'मसाल्याचा असा योग्य सुवास निवडणे ज्यामुळे पदार्थाची खरी चव खुलते.',
        ta: 'சுவையான பிரியாணிக்கு தேவையான வாசனைப் பொருட்களை மட்டும் தேர்ந்தெடுப்பது போல.',
        ur: 'بریانی کے لیے صرف وہی مصالحے چننا جن سے اصل خوشبو آئے۔',
        'r-ur': 'Biryani ka khas secret masala measure karna.',
        hin: 'Biryani ki secret khushbu ke liye best garam masala chuna.'
      },
      activeLayers: ['step3'],
      mascotReaction: 'focused'
    },
    {
      stepIndex: 3,
      stepName: {
        en: '4. Model Training & Validation',
        hi: '4. मॉडल ट्रेनिंग व परीक्षण',
        te: '4. మోడల్ శిక్షణ',
        mr: '4. मॉडेल प्रशिक्षण',
        ta: '4. மாதிரி பயிற்சி மற்றும் சோதனை',
        ur: '4۔ ماڈل کی تربیت اور ٹیسٹنگ',
        'r-ur': '4. Model Training & Testing',
        hin: '4. Model Training & Exam'
      },
      explanation: {
        en: 'The algorithm adjusts its parameters across thousands of iterations until errors shrink.',
        hi: 'अल्गोरिदम हजारों बार अभ्यास करता है जब तक कि गलतियां नगण्य न हो जाएं।',
        te: 'తప్పులు తగ్గే వరకు అల్గారిథమ్ వేలాది సార్లు ప్రాక్టీస్ చేస్తుంది.',
        mr: 'अल्गोरिदम चुका कमी होईपर्यंत हजारो वेळा सराव करतो.',
        ta: 'பிழைகள் குறையும் வரை மாதிரி ஆயிரக்கணக்கான முறை பயிற்சி பெறுகிறது.',
        ur: 'الگورتھم بار بار مشق کر کے اپنی غلطیاں کم ترین سطح پر لاتا ہے۔',
        'r-ur': 'Algorithm thousands of times practice karke weights tune karta hai.',
        hin: 'Algorithm hazaron baar practice karke accurate formula seekhta hai.'
      },
      analogy: {
        en: 'A tabla player rehearsing the same teen-taal rhythm every morning until their fingers glide without looking.',
        hi: 'जैसे तबला वादक रोज रियाज करता है जब तक कि उंगलियां बिना देखे सही थाप न पकड़ लें।',
        te: 'సంగీతకారుడు రోజూ సాధన చేసి వేళ్లు తప్పు లేకుండా పలికించేలా చేయడం లాంటిది.',
        mr: 'तबला वादक रोज रियाज करून अचूक ठेका पकडण्यासारखे.',
        ta: 'தபேலா கலைஞர் தினமும் பயிற்சி செய்து விரல்கள் தாளத்திற்கு ஏற்ப இயங்குவது போல.',
        ur: 'جیسے کوئی موسیقار روزانہ ریاض کر کے اپنی دھن کو بے عیب بنائے۔',
        'r-ur': 'Tabla player ka roz riyaz karna jab tak beat perfect na ho.',
        hin: 'Tabla vadak ka daily riyaz: jab tak ungliyan bina dekhe accurate beat na bajayein!'
      },
      activeLayers: ['step4'],
      mascotReaction: 'thinking'
    },
    {
      stepIndex: 4,
      stepName: {
        en: '5. Deployment to Production',
        hi: '5. लाइव लॉन्च (Deployment)',
        te: '5. లైవ్ లాంచ్',
        mr: '5. प्रत्यक्ष वापरात आणणे',
        ta: '5. நேரலை பயன்பாட்டிற்கு கொண்டு வருதல்',
        ur: '5۔ لائیو لانچ اور مانیٹرنگ',
        'r-ur': '5. Production Deployment',
        hin: '5. Live App Launch'
      },
      explanation: {
        en: 'The trained model is deployed to cloud servers answering live API calls in milliseconds.',
        hi: 'तैयार मॉडल को लाइव ऐप में जोड़ दिया जाता है जहां वह सेकंडों में लाखों लोगों के काम आता है।',
        te: 'శిక్షణ పొందిన మోడల్‌ను లైవ్ యాప్‌లో ఉంచి వినియోగదారులకు అందుబాటులో ఉంచడం.',
        mr: 'तयार मॉडेल ॲपमध्ये जोडून लाखो वापरकर्त्यांसाठी खुले करणे.',
        ta: 'பயிற்சி பெற்ற மாதிரியை இணையத்தில் வெளியிட்டு மக்களின் பயன்பாட்டிற்கு விடுதல்.',
        ur: 'ماڈل کو ایپ میں شامل کر کے صارفین کے لیے چالو کر دینا۔',
        'r-ur': 'Cloud server par model deploy karke live users ke liye launch karna.',
        hin: 'Model ko cloud par host karna taaki live app mein har user answers paa sake.'
      },
      analogy: {
        en: 'Opening the doors of a newly baked sweet shop on Diwali morning to smiling customers.',
        hi: 'दीवाली की सुबह नए खुले मिठाई के डिब्बे ग्राहकों में बांटने जैसा उल्लास।',
        te: 'పండుగ నాడు కొత్తగా తయారుచేసిన మిఠాయిలను అందరికీ పంచినట్లు.',
        mr: 'दिवाळीच्या दिवशी नव्या दुकानातून गरमागरम पेढे ग्राहकांना देण्यासारखा आनंद.',
        ta: 'தீபாவளி அன்று புதிய இனிப்புக் கடையைத் திறந்து மக்களுக்கு இனிப்பு வழங்குவது போல.',
        ur: 'عید کے دن مٹھائی کی دکان کھول کر خوشیاں بانٹنا۔',
        'r-ur': 'Eid par nayi mithai ki shop customers ke liye kholna.',
        hin: 'Diwali morning par garam-garam gulab jamun ki shop customers ke liye khol dena!'
      },
      activeLayers: ['step5'],
      mascotReaction: 'celebrating'
    }
  ],
  'pattern-matching': [
    {
      stepIndex: 0,
      stepName: {
        en: '1. Image Pixel Matrix',
        hi: '1. छवि पिक्सेल मैट्रिक्स',
        te: '1. చిత్రం పిక్సెల్ మాతృక',
        mr: '1. पिक्सेल मॅट्रिक्स',
        ta: '1. பிக்சல் மேட்ரிக்ஸ்',
        ur: '1۔ تصویر کا پکسل میٹرکس',
        'r-ur': '1. Pixel Matrix',
        hin: '1. Image Pixel Matrix'
      },
      explanation: {
        en: 'A digit (e.g. handwritten "7") is converted into a 28x28 grid of brightness values from 0 to 255.',
        hi: 'हाथ से लिखा "7" नंबर 28x28 खानों की ग्रिड में संख्याओं (0 से 255 चमक) में बदल दिया जाता है।',
        te: 'చేతితో రాసిన సంఖ్యను 28x28 గ్రిడ్‌లోని సంఖ్యలుగా మార్చడం.',
        mr: 'हस्ताक्षरातील अंक कॉम्प्युटरच्या चौकोनी पटलावर अंकांच्या रूपात मांडणे.',
        ta: 'எழுதப்பட்ட எண் 28x28 கட்டங்கள் கொண்ட எண்களாக மாற்றப்படுகிறது.',
        ur: 'ہاتھ سے لکھا نمبر عددی میٹرکس میں بدل دیا جاتا ہے۔',
        'r-ur': 'Handwritten digit ko grid of numbers mein represent karna.',
        hin: 'Handwritten "7" ko 28x28 black and white numbers ki grid mein convert karna.'
      },
      analogy: {
        en: 'Like mosaic tiles in a temple courtyard forming an elephant silhouette.',
        hi: 'जैसे आंगन में छोटे-छोटे पत्थरों की टाइलें मिलकर एक हाथी का चित्र बनाती हैं।',
        te: 'చిన్న చిన్న టైల్స్ కలిసి ఒక అందమైన చిత్రాన్ని ఏర్పరిచినట్లు.',
        mr: 'फरशांच्या लहान तुकड्यांतून तयार होणारे सुंदर चित्र.',
        ta: 'சிறு சிறு கற்களைக் கொண்டு தரையில் வரைந்த சித்திரம் போல.',
        ur: 'جیسے چھوٹی ٹائلز مل کر بڑا نقش بناتی ہیں۔',
        'r-ur': 'Mosaic tiles milkar design banati hain.',
        hin: 'Small mosaic tiles jud kar floor par design banayein.'
      },
      activeLayers: ['p1'],
      mascotReaction: 'curious'
    },
    {
      stepIndex: 1,
      stepName: {
        en: '2. Horizontal Bar Filter',
        hi: '2. आड़ी रेखा फ़िल्टर (Horizontal Filter)',
        te: '2. అడ్డ గీతల ఫిల్టర్',
        mr: '2. आडवी रेषा तपासणी',
        ta: '2. படுக்கைக்கோட்டு வடிகட்டி',
        ur: '2۔ افقی لکیر کا فلٹر',
        'r-ur': '2. Top Horizontal Bar Detector',
        hin: '2. Top Sleeping Line Detector'
      },
      explanation: {
        en: 'A sliding 3x3 filter scans for horizontal strokes: "7" lights up strongly at the top roof bar!',
        hi: '3x3 फ़िल्टर ऊपर की आड़ी लकीर ढूंढता है: "7" के सिर पर तेज सिग्नल जल उठता है!',
        te: 'పైభాగంలోని అడ్డగీతను గుర్తించి బలంగా సిగ్నల్ ఇస్తుంది.',
        mr: 'वरच्या आडव्या रेषेवर जास्त प्रकाश दिसतो.',
        ta: 'மேல் பகுதியில் உள்ள படுக்கைக் கோடு பிரகாசமாக ஒளிர்கிறது.',
        ur: 'فلٹر اوپری افقی لکیر کو تلاش کر کے نمایاں کرتا ہے۔',
        'r-ur': '7 ki top horizontal line detect hoti hai.',
        hin: '7 ke upar ki chhat (horizontal line) detect hoti hai.'
      },
      analogy: {
        en: 'Using a magnifying glass to check if the rupee note has the security thread.',
        hi: 'जैसे आवर्धक लेंस से नोट पर सुरक्षा धागा या सीधी रेखा जांचना।',
        te: 'కరెన్సీ నోటుపై ఉన్న సెక్యూరిటీ గీతను భూతద్దంతో పరీక్షించినట్లు.',
        mr: 'भिंग लावून नोटेवरील सुरक्षा रेषा तपासण्यासारखे.',
        ta: 'பூதக்கண்ணாடி வைத்து ரூபாய் நோட்டின் பாதுகாப்பு கோட்டைப் பார்ப்பது போல.',
        ur: 'جیسے نوٹ پر موجود حفاظتی تار کو باریک بینی سے دیکھنا۔',
        'r-ur': 'Currency note ki security strip check karna magnifying glass se.',
        hin: 'Rupee note par magnifying glass laga ke Gandhi ji ke chashme ki line dekhna.'
      },
      activeLayers: ['p2'],
      mascotReaction: 'thinking'
    },
    {
      stepIndex: 2,
      stepName: {
        en: '3. Diagonal Slant Filter',
        hi: '3. तिरछी रेखा फ़िल्टर (Diagonal Filter)',
        te: '3. ఏటవాలు గీతల ఫిల్టర్',
        mr: '3. तिरपी रेषा तपासणी',
        ta: '3. சாய்வு கோட்டு வடிகட்டி',
        ur: '3۔ ترچھی لکیر کا فلٹر',
        'r-ur': '3. Diagonal Leg Detector',
        hin: '3. Slanted Line Detector'
      },
      explanation: {
        en: 'Another filter checks for the diagonal stroke dropping down. High activation matches the stem of "7"!',
        hi: 'दूसरा फ़िल्टर नीचे गिरती तिरछी रेखा पकड़ता है: "7" का निचला तना एकदम मेल खाता है!',
        te: 'ఏటవాలుగా ఉండే కింద గీతను గుర్తించడం.',
        mr: 'खाली येणारी तिरपी रेषा तंतोतंत जुळते.',
        ta: 'கீழ்நோக்கி இறங்கும் சாய்வுக் கோடு துல்லியமாகப் பொருந்துகிறது.',
        ur: 'نیچے کی طرف جاتی ترچھی لکیر کی شناخت۔',
        'r-ur': '7 ki diagonal stem match ho jati hai.',
        hin: '7 ka niche girta hua danda (diagonal leg) match ho jata hai.'
      },
      analogy: {
        en: 'Looking at kite sticks: one horizontal crossbar, one curved spine.',
        hi: 'जैसे पतंग की दो कमानियां: एक आड़ी और एक सीधी-तिरछी।',
        te: 'గాలిపటం కట్టెలు: ఒకటి అడ్డంగా, మరొకటి నిలువుగా ఉన్నట్లు.',
        mr: 'पतंगाच्या दोन काड्या जुळवून पाहण्यासारखे.',
        ta: 'பட்டம் செய்வதற்குத் தேவையான குறுக்கு மற்றும் நெடுக்கான குச்சிகள் போல.',
        ur: 'جیسے پتنگ کی دو تیلیاں: ایک تلی ترچھی اور ایک سیدھی۔',
        'r-ur': 'Patang ki do teeliyan match karna.',
        hin: 'Patang ki horizontally bandhi lakdi aur diagonal khinchav match karna.'
      },
      activeLayers: ['p3'],
      mascotReaction: 'focused'
    },
    {
      stepIndex: 3,
      stepName: {
        en: '4. Classifier Voting (Match = "7")',
        hi: '4. अंतिम मिलान (पहचान = "7")',
        te: '4. వర్గీకరణ విజయం ("7")',
        mr: '4. अंतिम निकाल (अंक = "७")',
        ta: '4. இறுதி அடையாளம் (எண் = "7")',
        ur: '4۔ حتمی تصدیق (نمبر = 7)',
        'r-ur': '4. Final Match: Digit 7',
        hin: '4. Final Match: Digit 7 Confirmed'
      },
      explanation: {
        en: 'Combining top horizontal bar + diagonal stroke rules out 0, 1, 8. Model concludes "7" with 99.4% confidence!',
        hi: 'शीर्ष रेखा + तिरछी रेखा का मिलान 0, 1, 8 को खारिज करता है। AI 99.4% भरोसे से कहता है: "यह 7 है!"',
        te: 'రెండు లక్షణాల ఆధారంగా మిగిలిన సంఖ్యలను తొలగించి "7" అని నిర్ధారించడం.',
        mr: 'दोन्ही पुरावे जोडून AI ९९.४% खात्रीने जाहीर करते की हा अंक "७" आहे!',
        ta: 'இரு முடிவுகளையும் இணைத்து இது "7" என 99.4% உறுதியுடன் அறிவிக்கிறது!',
        ur: 'دونوں خصوصیات مل کر ثابت کرتی ہیں کہ یہ نمبر 7 ہی ہے۔',
        'r-ur': 'Top bar + diagonal stem proves it is digit 7 with 99.4% confidence!',
        hin: 'Top bar + slanted leg milakar AI bolta hai: 100% ye Digit 7 hai!'
      },
      analogy: {
        en: 'Recognizing your childhood friend in a crowded festival just by their distinctive smile and walk.',
        hi: 'मेले की भारी भीड़ में अपने पुराने दोस्त को उसकी खास चाल और मुस्कान से झट पहचान लेना।',
        te: 'తిరునాళ్ళ రద్దీలో స్నేహితుడి నడక చూసి వెంటనే గుర్తుపట్టినట్లు.',
        mr: 'जत्रेच्या गर्दीत मित्राला त्याच्या विशिष्ट हास्यावरून लगेच ओळखण्यासारखे.',
        ta: 'திருவிழா கூட்டத்தில் நண்பனின் நடையை வைத்து அவனை உடனடியாக அடையாளம் காண்பது போல.',
        ur: 'میلے کے ہجوم میں اپنے دوست کو اس کی چال سے دور ہی سے پہچان لینا۔',
        'r-ur': 'Bheed mein dost ko door se pehchan lena.',
        hin: 'Kumbh ke mele mein dost ko uski chaal aur smile se instantly pehchan lena!'
      },
      activeLayers: ['p4'],
      mascotReaction: 'celebrating'
    }
  ],
  'transformer': [
    {
      stepIndex: 0,
      stepName: {
        en: '1. Input Words & Token Embeddings',
        hi: '1. इनपुट शब्द व टोकन वेक्टर्स',
        te: '1. పదాలు & టోకెన్ ఎంబెడ్డింగ్స్',
        mr: '1. शब्द आणि टोकन एम्बेडिंग्स',
        ta: '1. சொற்கள் மற்றும் எம்படிங்ஸ்',
        ur: '1۔ الفاظ اور ٹوکن ایمبیڈنگز',
        'r-ur': '1. Token Embeddings',
        hin: '1. Input Words & Token Vectors'
      },
      explanation: {
        en: 'Sentence "The animal didn\'t cross the street because it was too tired" is turned into vectors.',
        hi: 'पूरे वाक्य के शब्दों को गणितीय वेक्टर में बदला जाता है।',
        te: 'వాక్యంలోని ప్రతి పదాన్ని సంఖ్యా వెక్టర్‌గా మార్చడం.',
        mr: 'वाक्यातील शब्दांचे संख्यांमध्ये रूपांतर केले जाते.',
        ta: 'வாக்கியத்தின் சொற்கள் எண்களாக மாற்றப்படுகின்றன.',
        ur: 'جملے کے الفاظ کو عددی ویکٹرز میں تبدیل کیا جاتا ہے۔',
        'r-ur': 'Sentence ke saare words vectors ban jaate hain.',
        hin: 'Sentence ke saare words parallel number coordinates ban jaate hain.'
      },
      analogy: {
        en: 'Giving each actor on the stage a nametag and script before the play starts.',
        hi: 'नाटक शुरू होने से पहले मंच पर हर कलाकार को उसका नाम और भूमिका की पर्ची देना।',
        te: 'నాటకం ప్రారంభమయ్యే ముందు నటీనటులకు పేర్ల బ్యాడ్జీలు ఇచ్చినట్లు.',
        mr: 'नाटक सुरू होण्यापूर्वी प्रत्येक कलाकाराला त्याची भूमिका समजावून सांगण्यासारखे.',
        ta: 'நாடகம் தொடங்கும் முன் நடிகர்களுக்கு பெயர்ப்பலகை கொடுப்பது போல.',
        ur: 'ڈرامے کے آغاز پر اداکاروں کو ان کے بیج اور کردار دینا۔',
        'r-ur': 'Stage par har actor ko badge aur role assign karna.',
        hin: 'Play shuru hone se pehle har character ko unka badge aur dialogue sheet dena.'
      },
      activeLayers: ['t1'],
      mascotReaction: 'curious'
    },
    {
      stepIndex: 1,
      stepName: {
        en: '2. Query, Key, Value Projections',
        hi: '2. क्वेरी, की, वैल्यू (Q, K, V)',
        te: '2. ప్రశ్న, కీ మరియు విలువలు',
        mr: '2. प्रश्न आणि संदर्भ शोधणे',
        ta: '2. கேள்வி, திறவுகோல் மற்றும் மதிப்பு',
        ur: '2۔ سوال، کلید اور قدر کا جائزہ',
        'r-ur': '2. Q, K, V Projections',
        hin: '2. Query, Key, Value Math'
      },
      explanation: {
        en: 'Every word projects three vectors: what it is looking for (Query), what it offers (Key), and its core meaning (Value).',
        hi: 'हर शब्द 3 वेक्टर बनाता है: वह क्या ढूंढ रहा है (Query), उसके पास क्या है (Key), और उसका असली अर्थ (Value)।',
        te: 'ప్రతి పదం మూడు లక్షణాలను సృష్టిస్తుంది: ప్రశ్న, కీ, మరియు అర్థం.',
        mr: 'प्रत्येक शब्द स्वतःचा अर्थ आणि संदर्भ शोधण्यासाठी तीन दिशांमध्ये विचार करतो.',
        ta: 'ஒவ்வொரு சொல்லும் மூன்று விதமான மதிப்பீடுகளை உருவாக்குகிறது.',
        ur: 'ہر لفظ یہ طے کرتا ہے کہ وہ کیا تلاش کر رہا ہے اور اس کے پاس کیا جواب ہے۔',
        'r-ur': 'Har word 3 vectors banata hai: Query, Key aur Value.',
        hin: 'Har word teen mathematical avatars banata hai: Query, Key, aur Value.'
      },
      analogy: {
        en: 'Filing a library request: Query is your book title slip, Key is the shelf catalog card, Value is the book itself.',
        hi: 'लाइब्रेरी में किताब खोजना: क्वेरी आपकी पर्ची है, की कैटलॉग कार्ड है, और वैल्यू वह किताब है।',
        te: 'లైబ్రరీలో పుస్తకం వెతకడం: స్లిప్ క్వెరీ అయితే, ఇండెక్స్ కార్డు కీ, పుస్తకం విలువ.',
        mr: 'ग्रंथालयात पुस्तक शोधताना स्लिप आणि कॅटलॉग कार्ड जुळवून पुस्तक मिळवण्यासारखे.',
        ta: 'நூலகத்தில் புத்தகத்தைக் கண்டறிய அட்டவணை அட்டையைத் தேடுவது போல.',
        ur: 'لائبریری میں کیٹلاگ کارڈ دیکھ کر متعلقہ کتاب تک پہنچنا۔',
        'r-ur': 'Library mein slip dekar bookshelf se exact book nikalna.',
        hin: 'Library counter pe slip dena (Query), register check karna (Key), aur book milna (Value).'
      },
      activeLayers: ['t2'],
      mascotReaction: 'thinking'
    },
    {
      stepIndex: 2,
      stepName: {
        en: '3. Self-Attention Matrix (Resolving "It")',
        hi: '3. सेल्फ-अटेंशन (सर्वनाम "It" का अर्थ खोजना)',
        te: '3. సెల్ఫ్-అటెన్షన్ (పదాల అనుసంధానం)',
        mr: '3. सेल्फ-अटेंशन मॅट्रिक्स',
        ta: '3. கவனப் பின்னல் (தொடர்பு அறிதல்)',
        ur: '3۔ سیلف اٹینشن (سیاق و سباق کا ربط)',
        'r-ur': '3. Self-Attention Matrix',
        hin: '3. Self-Attention Matrix ("It" kiske liye hai?)'
      },
      explanation: {
        en: 'The word "it" compares itself with all words. Because "tired" connects to living beings, "it" pays 88% attention to "animal" and only 2% to "street"!',
        hi: 'शब्द "it" सभी शब्दों से अपनी तुलना करता है। "tired (थका हुआ)" देखकर वह "animal (जानवर)" पर 88% ध्यान केंद्रित करता है, सड़क पर नहीं!',
        te: '"it" అనే పదం "జంతువు"కి ఎక్కువ ప్రాధాన్యత ఇస్తుంది, ఎందుకంటే అలసిపోవడం జంతువుకే వర్తిస్తుంది.',
        mr: '"it" हा शब्द "प्राणी" शब्दाशी जास्त जोडला जातो, रस्त्याशी नाही.',
        ta: '"it" என்ற சொல் "விலங்கு" என்ற சொல்லுடன் 88% அதிக கவனத்தைப் பெறுகிறது.',
        ur: 'لفظ "it" گلی کے بجائے "جانور" کی طرف زیادہ توجہ دیتا ہے کیونکہ تھکن جاندار کو ہوتی ہے۔',
        'r-ur': '"It" animal ke sath 88% connect karta hai kyunki thaka hua animal hi ho sakta hai.',
        hin: '"It" 88% attention "animal" ko deta hai kyunki thaka hua street nahi, animal hi ho sakta hai!'
      },
      analogy: {
        en: 'Spotlight on a theater stage swinging instantly toward the guilty character when the detective asks "Who did it?".',
        hi: 'जैसे मंच पर जासूस के पूछते ही स्पॉटलाइट सीधे गुनहगार के चेहरे पर पड़ जाए।',
        te: 'డిటెక్టివ్ ప్రశ్న వేయగానే స్పాట్‌లైట్ నేరుగా నిందితుడిపై పడినట్లు.',
        mr: 'नाटकात संशयिताचे नाव घेताच त्याच्यावर प्रकाशझोत पडण्यासारखे.',
        ta: 'துப்பறியும் கதையில் சந்தேகம் உள்ளவர் மீது உடனே வெளிச்சம் பாய்வது போல.',
        ur: 'جیسے اسٹیج پر ملزم کی طرف روشنی کا دائرہ گھوم جائے۔',
        'r-ur': 'Stage par spotlight seedha suspect ke chehre par padna.',
        hin: 'Movie mein CID ke Daya ke sawaal par spotlight seedhe culprit par ghoom jaana!'
      },
      activeLayers: ['t3'],
      mascotReaction: 'focused'
    },
    {
      stepIndex: 3,
      stepName: {
        en: '4. Next Word Generation',
        hi: '4. अगले शब्द का निर्माण',
        te: '4. తదుపరి పదం సృష్టి',
        mr: '4. पुढील शब्दाचा अचूक अंदाज',
        ta: '4. அடுத்த சொல் உருவாக்கம்',
        ur: '4۔ اگلے لفظ کی تخلیق',
        'r-ur': '4. Next Token Prediction',
        hin: '4. Next Word Generation'
      },
      explanation: {
        en: 'With context clear, the decoder predicts the most meaningful continuation word with rich grammar.',
        hi: 'संदर्भ स्पष्ट होने के बाद मॉडल अगले सबसे उपयुक्त शब्द का चुनाव करता है।',
        te: 'సందర్భాన్ని బట్టి తర్వాత పదాన్ని సరైన వ్యాకరణంతో ఎంచుకుంటుంది.',
        mr: 'योग्य व्याकरणानुसार पुढचा सुसंगत शब्द तयार होतो.',
        ta: 'சூழலுக்கு ஏற்ப அடுத்த சொல் சரியாக உருவாக்கப்படுகிறது.',
        ur: 'مکمل سیاق و سباق کے بعد اگلا بہترین لفظ جنریٹ ہوتا ہے۔',
        'r-ur': 'Context clear hone ke baad next word perfectly predict hota hai.',
        hin: 'Poora context samajh ke AI next natural word seamlessly type kar deta hai!'
      },
      analogy: {
        en: 'Finishing a famous proverb effortlessly when a poet pauses midway.',
        hi: 'जैसे मुशायरे में शायर के रुकते ही सामने बैठे श्रोता सही शेर पूरा कर दें।',
        te: 'కవి పద్యం సగం చెప్పి ఆగినప్పుడు మిగిలిన పదాన్ని సభికులు పూర్తి చేసినట్లు.',
        mr: 'कवी अर्धवट थांबल्यावर श्रोत्यांनी ओळ अचूक पूर्ण करण्यासारखे.',
        ta: 'கவிஞர் பாதி பாடல் பாடும் போது நாம் மீதியை முழுமை செய்வது போல.',
        ur: 'جیسے مشاعرے میں مصرع ادھورا رہنے پر سامعین شعر مکمل کریں۔',
        'r-ur': 'Shayar ke pause lene par mashoor sher ka agla misra khud bolna.',
        hin: 'Antakshari mein pehli line sunte hi agla mukhda sabke muh se ek sath nikalna!'
      },
      activeLayers: ['t4'],
      mascotReaction: 'celebrating'
    }
  ],
  'full-workflow': [
    {
      stepIndex: 0,
      stepName: {
        en: '1. Problem Definition & Metric',
        hi: '1. समस्या और लक्ष्य की पहचान',
        te: '1. సమస్య గుర్తింపు',
        mr: '1. समस्येची व्याख्या',
        ta: '1. சிக்கலை வரையறுத்தல்',
        ur: '1۔ مسئلے کی تعریف اور ہدف',
        'r-ur': '1. Problem & Goal Definition',
        hin: '1. Problem Definition & Target'
      },
      explanation: {
        en: 'Defining what we are predicting: "Will a student pass the exam based on study hours, attendance, and quiz scores?"',
        hi: 'लक्ष्य तय करना: क्या छात्र पढ़ाई के घंटे, उपस्थिति और टेस्ट अंकों के आधार पर परीक्षा पास करेगा?',
        te: 'మనం ఏమి అంచనా వేయాలనుకుంటున్నామో స్పష్టమైన లక్ష్యాన్ని నిర్ణయించడం.',
        mr: 'आपल्याला नेमके काय शोधायचे आहे याचे ध्येय निश्चित करणे.',
        ta: 'மாணவர் தேர்ச்சி பெறுவாரா இல்லையா என்பதை கணிக்கும் இலக்கை நிர்ணயித்தல்.',
        ur: 'واضح ہدف طے کرنا کہ ہم کیا پیشن گوئی کرنا چاہتے ہیں۔',
        'r-ur': 'Decide karna ke kya predict karna hai: Student Pass ya Fail.',
        hin: 'Decide karna ki target kya hai: Student exam pass karega ya nahi.'
      },
      analogy: {
        en: 'Deciding the destination on Google Maps before turning on the car ignition.',
        hi: 'गाड़ी स्टार्ट करने से पहले मैप्स पर गंतव्य (मंजिल) चुनना।',
        te: 'కారు స్టార్ట్ చేసే ముందే మ్యాప్‌లో గమ్యాన్ని సెట్ చేయడం.',
        mr: 'गाडी सुरू करण्यापूर्वी नकाशावर मुक्कामाचे ठिकाण ठरवण्यासारखे.',
        ta: 'பயணத்தைத் தொடங்கும் முன் சேருமிடத்தை வரைபடத்தில் குறித்து வைப்பது போல.',
        ur: 'سفر شروع کرنے سے پہلے منزل کا تعین کرنا۔',
        'r-ur': 'Gari start karne se pehle Maps par destination daalna.',
        hin: 'Bike start karne se pehle Google Maps pe location set karna.'
      },
      activeLayers: ['w1'],
      mascotReaction: 'curious'
    },
    {
      stepIndex: 1,
      stepName: {
        en: '2. Data Sourcing & Split (Train/Test)',
        hi: '2. डेटा विभाजन (ट्रेनिंग व टेस्टिंग)',
        te: '2. డేటా విభజన (ట్రైన్/టెస్ట్)',
        mr: '2. डेटाचे विभाजन',
        ta: '2. தரவுப் பிரிப்பு (பயிற்சி/சோதனை)',
        ur: '2۔ ڈیٹا کو دو حصوں میں بانٹنا',
        'r-ur': '2. Train & Test Split (80/20)',
        hin: '2. Train & Test Split (80% / 20%)'
      },
      explanation: {
        en: 'Splitting records into 80% Training (for teaching the model) and 20% Testing (locked in a vault for the final exam).',
        hi: 'डेटा को 80% अभ्यास और 20% परीक्षा के लिए अलग-अलग तिजोरी में रखना।',
        te: 'డేటాను 80% శిక్షణ కోసం, 20% పరీక్ష కోసం వేరు చేయడం.',
        mr: '८०% माहिती सरावासाठी आणि २०% माहिती अंतिम परीक्षेसाठी बाजूला ठेवणे.',
        ta: '80% தரவை பயிற்சிக்காகவும் 20% தரவை சோதனைக்காகவும் பிரித்து வைத்தல்.',
        ur: '80 فیصد ڈیٹا سکھانے کے لیے اور 20 فیصد فائنل ٹیسٹ کے لیے الگ رکھنا۔',
        'r-ur': '80% data model ko sikhane ke liye aur 20% unseen test ke liye rakhna.',
        hin: '80% data practice ke liye aur 20% surprise test ke liye secret rakhna.'
      },
      analogy: {
        en: 'Keeping mock exam papers sealed until test day so the student cannot cheat.',
        hi: 'बोर्ड परीक्षा का प्रश्नपत्र परीक्षा के दिन तक सीलबंद रखना ताकि कोई नकल न कर सके।',
        te: 'పరీక్ష రోజు వరకు ప్రశ్నాపత్రాన్ని సీల్ చేసి భద్రపరిచినట్లు.',
        mr: 'परीक्षेच्या दिवसापर्यंत प्रश्नपत्रिका सीलबंद ठेवण्यासारखे.',
        ta: 'தேர்வு நாள் வரை வினாத்தாளை சீல் வைத்து பாதுகாப்பது போல.',
        ur: 'امتحان کے دن تک پرچہ سیل بند رکھنا تاکہ شفافیت رہے۔',
        'r-ur': 'Exam paper ko test ke din tak seal rakhna taake cheating na ho.',
        hin: 'Board exam ka paper sealed rakhna taaki koi pehle se ratta na maar sake.'
      },
      activeLayers: ['w2'],
      mascotReaction: 'thinking'
    },
    {
      stepIndex: 2,
      stepName: {
        en: '3. Training & Loss Minimization',
        hi: '3. ट्रेनिंग और गलतियां घटाना',
        te: '3. నష్ట నివారణ & శిక్షణ',
        mr: '3. त्रुटी कमी करणे',
        ta: '3. இழப்பைக் குறைத்தல்',
        ur: '3۔ نقصانات کو کم سے کم کرنا',
        'r-ur': '3. Loss Curve Minimization',
        hin: '3. Error Curve Ko Down Karna'
      },
      explanation: {
        en: 'Running gradient descent to slide down the error bowl until the model achieves optimal accuracy.',
        hi: 'गलतियों का ग्राफ नीचे गिरता जाता है और मॉडल की सटीकता बढ़ती जाती है।',
        te: 'మోడల్ తన తప్పులను సరిదిద్దుకుంటూ అత్యుత్తమ ఖచ్చితత్వాన్ని సాధిస్తుంది.',
        mr: 'चुकांचा आलेख खाली येतो आणि अचूकता वेगाने वाढते.',
        ta: 'மாதிரி தனது தவறுகளை படிப்படியாக குறைத்துக் கொண்டு முன்னேறுகிறது.',
        ur: 'غلطیوں کی شرح کم ہوتی جاتی ہے اور ماڈل ہوشیار بنتا جاتا ہے۔',
        'r-ur': 'Error bowl se neeche aakar best weights lock karna.',
        hin: 'Loss function zero ke kareeb pahuchti hai aur model smart banta hai.'
      },
      analogy: {
        en: 'A potter gently rolling a clay bowl until its walls are evenly balanced without wobbles.',
        hi: 'कुम्हार के चाक पर घूमते बर्तन को तब तक संवारना जब तक वह पूरी तरह सुडौल न बन जाए।',
        te: 'కుండ చుట్టూ అసమానతలు పోయేలా మట్టిని సున్నితంగా తీర్చిదిద్దినట్లు.',
        mr: 'चाकावर फिरणाऱ्या मातीच्या मडक्याला हळूवारपणे सुबक आकार देण्यासारखे.',
        ta: 'மண்பாண்டத்தை சுழலும் சக்கரத்தில் சீராக வடித்து எடுப்பது போல.',
        ur: 'کمہار کے چاک پر برتن کو یکساں شکل دینا۔',
        'r-ur': 'Kumhar ka chak par mitti ke bartan ko perfect balance dena.',
        hin: 'Chak par ghumti hui mitti ko dono haathon se perfectly smooth karna.'
      },
      activeLayers: ['w3'],
      mascotReaction: 'focused'
    },
    {
      stepIndex: 3,
      stepName: {
        en: '4. Evaluation on Hidden Test Set',
        hi: '4. छुपे टेस्ट डेटा पर परीक्षा',
        te: '4. పరీక్ష నిర్వహణ',
        mr: '4. अंतिम मूल्यमापन',
        ta: '4. சோதனை மதிப்பீடு',
        ur: '4۔ فائنل ٹیسٹ اور جانچ',
        'r-ur': '4. Final Test Evaluation',
        hin: '4. Surprise Test Evaluation'
      },
      explanation: {
        en: 'Testing the model on the locked 20% data: Accuracy = 94.2%, F1 Score = 0.93. Generalization verified!',
        hi: 'तिजोरी में रखे 20% डेटा पर मॉडल का टेस्ट: 94.2% सटीकता! मॉडल ने रट्टा नहीं मारा, वास्तव में सीखा है।',
        te: 'లాక్ చేసిన 20% డేటాపై పరీక్ష: 94.2% ఖచ్చితత్వం సాధించింది!',
        mr: 'राखून ठेवलेल्या माहितीवर मॉडेलने ९४.२% अचूकता सिद्ध केली!',
        ta: 'ரகசியமாக வைத்த 20% தரவில் மாதிரி 94.2% வெற்றி பெறுகிறது!',
        ur: 'بند پرچے پر 94.2 فیصد درستگی! ماڈل نے رٹا نہیں لگایا بلکہ سمجھا ہے۔',
        'r-ur': 'Locked 20% test set par 94.2% accuracy achieve hui.',
        hin: 'Secret 20% test paper par 94.2% marks! Proof ho gaya ki AI ne ratta nahi mara.'
      },
      analogy: {
        en: 'Scoring an A+ on a board exam with never-before-seen application questions.',
        hi: 'बोर्ड परीक्षा में नए और कठिन सवालों को भी समझदारी से हल करके 95% अंक पाना।',
        te: 'పరీక్షలో సరికొత్త ప్రశ్నలు వచ్చినా అద్భుతమైన మార్కులు సాధించినట్లు.',
        mr: 'अनपेक्षित प्रश्न येऊनही परीक्षेत अव्वल गुण मिळवण्यासारखे.',
        ta: 'புதிய வினாக்கள் வந்தாலும் தேர்வில் முதலிடம் பிடிப்பது போல.',
        ur: 'بورڈ کے امتحانات میں نئے سوالات کا شاندار جواب دے کر اول آنا۔',
        'r-ur': 'Board exams mein unexpected questions par distinction aana.',
        hin: 'Out of syllabus lagne wale questions ko bhi concept laga kar solve kar aana!'
      },
      activeLayers: ['w4'],
      mascotReaction: 'celebrating'
    },
    {
      stepIndex: 4,
      stepName: {
        en: '5. Monitoring & Guardrails',
        hi: '5. सतत निगरानी व सुरक्षा कवच',
        te: '5. పర్యవేక్షణ & రక్షణ',
        mr: '5. सतत देखरेख',
        ta: '5. தொடர் கண்காணிப்பு மற்றும் பாதுகாப்பு',
        ur: '5۔ مستقل نگرانی اور اصول',
        'r-ur': '5. Continuous Monitoring & Safety',
        hin: '5. 24/7 Monitoring & Safety Rules'
      },
      explanation: {
        en: 'Tracking live predictions for data drift, ensuring zero bias, and alerting engineers if distribution shifts.',
        hi: 'लाइव सिस्टम में पक्षपात रोकना और यह सुनिश्चित करना कि मॉडल हमेशा निष्पक्ष व सटीक रहे।',
        te: 'మోడల్ ఎల్లప్పుడూ న్యాయంగా, తప్పులు లేకుండా పనిచేసేలా నిరంతరం పర్యవేక్షించడం.',
        mr: 'कोणताही भेदभाव न होता मॉडेल निष्पक्षपणे काम करेल याची काळजी घेणे.',
        ta: 'பயன்பாட்டில் பாரபட்சம் இன்றி மாதிரி இயங்குவதை உறுதி செய்தல்.',
        ur: 'ماڈل کو غیر جانبدار رکھنے کے لیے مسلسل مانیٹرنگ۔',
        'r-ur': 'Live performance aur fairness track karna taake bias na aaye.',
        hin: 'Live check rakhna ki AI kisi ke sath bhedbhav na kare aur accurate rahe.'
      },
      analogy: {
        en: 'A lighthouse keeper keeping the beacon light rotating through every storm to guide ships safely.',
        hi: 'जैसे समुद्री लाइटहाउस का प्रहरी तूफानों में भी जहाजों को सुरक्षित रास्ता दिखाता रहता है।',
        te: 'లైట్‌హౌస్ తుఫానులో కూడా నౌకలకు సురక్షితమైన దారి చూపించినట్లు.',
        mr: 'दीपगृह वादळातही जहाजांना सुरक्षित मार्ग दाखवत राहण्यासारखे.',
        ta: 'கலங்கரை விளக்கம் புயலிலும் கப்பல்களுக்கு வழிகாட்டுவது போல.',
        ur: 'جیسے لائٹ ہاؤس طوفان میں بھی جہازوں کو محفوظ راستہ دکھاتا ہے۔',
        'r-ur': 'Lighthouse jo tufaan mein bhi sabhi jahazon ko safe rakhta hai.',
        hin: 'Lighthouse keeper jo har toofan mein jahazon ko safe rakhne ke liye light ghumata rehta hai.'
      },
      activeLayers: ['w5'],
      mascotReaction: 'happy'
    }
  ]
};
