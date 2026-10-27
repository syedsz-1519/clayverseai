import { MindMapNode } from '../types';

export const MIND_MAP_NODES: Record<string, MindMapNode> = {
  root: {
    id: 'root',
    title: 'Artificial Intelligence',
    iconName: 'Sparkles',
    level: 'Beginner',
    category: 'Root',
    x: 450,
    y: 280,
    translations: {
      en: {
        title: 'Artificial Intelligence',
        shortDesc: 'Machines performing tasks that usually require human intelligence.',
        analogy: 'Teaching a bicycle to steer and balance itself like an experienced rider.',
        details: 'Artificial Intelligence is the broad umbrella of computer science dedicated to creating software capable of reasoning, pattern recognition, learning, and automated decision making.'
      },
      hi: {
        title: 'आर्टिफिशियल इंटेलिजेंस (AI)',
        shortDesc: 'मशीनों द्वारा इंसानी समझ जैसे कार्य करना।',
        analogy: 'जैसे साइकिल अपने आप संतुलन बनाकर सही रास्ते पर चलने लगे।',
        details: 'कंप्यूटर विज्ञान की वह शाखा जहां मशीनों को डेटा के आधार पर तर्क करने, सीखने और निर्णय लेने की क्षमता दी जाती है।'
      },
      te: {
        title: 'ఆర్టిఫిషియల్ ఇంటెలిజెన్స్ (AI)',
        shortDesc: 'మానవులలాగా ఆలోచించి పనిచేసే యంత్రాలు.',
        analogy: 'ఒక సైకిల్ స్వయంగా బ్యాలెన్స్ చేసుకుంటూ దారిలో ప్రయాణించినట్లు.',
        details: 'కంప్యూటర్లు మనుషుల్లా ఆలోచించడం, నిర్ణయాలు తీసుకోవడం మరియు నేర్చుకోవడం చేసే విస్తృత సాంకేతిక రంగం.'
      },
      mr: {
        title: 'कृत्रिम बुद्धिमत्ता (AI)',
        shortDesc: 'यंत्रांनी मानवाप्रमाणे विचार करून कामे करणे.',
        analogy: 'सायकलने स्वतःचे संतुलन सांभाळत योग्य रस्त्याने चालण्यासारखे.',
        details: 'कम्प्युटरला विचार करण्याची, शिकण्याची आणि योग्य निर्णय घेण्याची क्षमता देणारी अत्याधुनिक प्रणाली.'
      },
      ta: {
        title: 'செயற்கை நுண்ணறிவு (AI)',
        shortDesc: 'மனிதர்களைப் போல சிந்தித்து செயல்படும் கணினி அமைப்புகள்.',
        analogy: 'ஒரு மிதிவண்டி தானே சமநிலை அடைந்து சாலையில் செல்வது போல.',
        details: 'கணினிகள் சுயமாக சிந்தித்து, தரவுகளிலிருந்து கற்றுக்கொண்டு முடிவெடுக்கும் தொழில்நுட்பத் துறை.'
      },
      ur: {
        title: 'مصنوعی ذہانت (AI)',
        shortDesc: 'مشینوں کا انسانی فہم و فراست کے ساتھ کام انجام دینا۔',
        analogy: 'جیسے کوئی سائیکل بغیر سوار کے خود اپنا توازن سنبھال کر چلنے لگے۔',
        details: 'کمپیوٹر سائنس کی وہ شاخ جس میں مشینیں اعداد و شمار سے سیکھ کر فیصلے کرنے کے قابل بنتی ہیں۔'
      },
      'r-ur': {
        title: 'Artificial Intelligence',
        shortDesc: 'Machines ka insaani soch ki tarah kaam karna.',
        analogy: 'Cycle ka khud balance banana aur raasta tay karna.',
        details: 'AI ek broad umbrella field hai jahan software reasoning aur learning karta hai.'
      },
      hin: {
        title: 'Artificial Intelligence',
        shortDesc: 'Machines ka insano jaisi smartness dikhana.',
        analogy: 'Cycle khud se balance bana ke seedhe raste par chal pade.',
        details: 'AI computers ko insano ki tarah dekhne, sunne aur decision lene ki power deta hai.'
      }
    },
    resources: [
      { title: 'AI Explained in 10 Minutes', type: 'YouTube', duration: '10 min', url: 'https://youtube.com' },
      { title: 'The Gentle Introduction to AI', type: 'Article', duration: '5 min read', url: '#' },
      { title: 'Interactive Clay Sandbox', type: 'Interactive Sandbox', duration: 'Hands-on', url: '#' }
    ],
    childrenIds: ['ml', 'dl', 'genai', 'prompting']
  },
  ml: {
    id: 'ml',
    parentId: 'root',
    title: 'Machine Learning',
    iconName: 'Cpu',
    level: 'Beginner',
    category: 'Core',
    x: 180,
    y: 130,
    translations: {
      en: {
        title: 'Machine Learning',
        shortDesc: 'Teaching computers from examples instead of writing rigid rules.',
        analogy: 'Like learning cricket batting: instead of memorizing physics books, you hit 1,000 balls until your muscles instinctively know.',
        details: 'Algorithms find mathematical patterns in historical data and improve performance automatically over time without manual reprogramming.'
      },
      hi: {
        title: 'मशीन लर्निंग (ML)',
        shortDesc: 'नियम लिखने के बजाय ढेरों उदाहरण दिखाकर कंप्यूटर को सिखाना।',
        analogy: 'क्रिकेट में बल्लेबाजी सीखने जैसा: किताब रटने के बजाय 1,000 गेंदें खेलकर हाथ खुद शॉट लगाना सीख जाते हैं।',
        details: 'पुराने डेटा से पैटर्न खोजकर भविष्य के नतीजों का सटीक अनुमान लगाने वाली प्रणाली।'
      },
      te: {
        title: 'మెషిన్ లెర్నింగ్ (ML)',
        shortDesc: 'కోడింగ్ నియమాల కంటే వేలాది ఉదాహరణలతో కంప్యూటర్‌కు శిక్షణ ఇవ్వడం.',
        analogy: 'క్రికెట్ నేర్చుకోవడం లాంటిది: ఫిజిక్స్ చదవడం కంటే 1000 బంతులు ఆడితే చేతులు స్వయంగా షాట్ కొట్టడం నేర్చుకుంటాయి.',
        details: 'గత సమాచారంలోని ప్యాటర్న్‌లను గుర్తించి భవిష్యత్ ఫలితాలను అంచనా వేసే విధానం.'
      },
      mr: {
        title: 'मशीन लर्निंग (ML)',
        shortDesc: 'हजारो उदाहरणे दाखवून कम्प्युटरला शिकवणे.',
        analogy: 'क्रिकेट फलंदाजी शिकण्यासारखे: भौतिकशास्त्र न वाचता सराव करून हात आपोआप चेंडू टोलवायला शिकतात.',
        details: 'डेटा मधील पॅटर्न ओळखून अचूक अंदाज बांधण्याची संगणकीय पद्धती.'
      },
      ta: {
        title: 'மெஷின் லேர்னிங் (ML)',
        shortDesc: 'விதிகளுக்குப் பதிலாக ஆயிரக்கணக்கான உதாரணங்கள் மூலம் கணினிக்கு கற்பித்தல்.',
        analogy: 'கிரிக்கெட் பேட்டிங் பழகுவது போல: தியரி படிக்காமல் பந்துகளை அடித்து பழகி கைகள் சுயமாக இயங்குவது போல.',
        details: 'கடந்த கால தரவுகளின் அடிப்படையில் கணிப்புகள் செய்யும் தொழில்நுட்பம்.'
      },
      ur: {
        title: 'مشین لرننگ (ML)',
        shortDesc: 'کوڈنگ کے سخت اصولوں کے بجائے ہزاروں مثالوں سے کمپیوٹر کو سکھانا۔',
        analogy: 'جیسے کرکٹ میں بیٹنگ سیکھنا: فزکس کی کتاب پڑھنے کے بجائے مسلسل گیندیں کھیلنے سے شاٹ لگانا آ جاتا ہے۔',
        details: 'ڈیٹا کے نمونوں کا تجزیہ کر کے خود بخود اپنی کارکردگی بہتر بنانے کا عمل۔'
      },
      'r-ur': {
        title: 'Machine Learning',
        shortDesc: 'Rules likhne ke bajaye examples se sikhana.',
        analogy: 'Cricket batting practice: 1,000 balls khel kar muscles naturally shot seekh lete hain.',
        details: 'Algorithms historical data mein pattern dhoond kar khud improve hote hain.'
      },
      hin: {
        title: 'Machine Learning',
        shortDesc: 'Rules likhne ke bajaye samples se seekhna.',
        analogy: 'Cricket batting: Kitab padhne se nahi, net practice mein 500 balls khel ke hath set hote hain!',
        details: 'Data patterns ko samajh kar future predictions generate karna.'
      }
    },
    resources: [
      { title: 'Machine Learning for Absolute Beginners', type: 'YouTube', duration: '12 min', url: 'https://youtube.com' },
      { title: 'Types of ML: Supervised vs Unsupervised', type: 'Article', duration: '7 min read', url: '#' }
    ],
    childrenIds: ['supervised', 'unsupervised', 'reinforcement']
  },
  dl: {
    id: 'dl',
    parentId: 'root',
    title: 'Deep Learning',
    iconName: 'Layers',
    level: 'Intermediate',
    category: 'Core',
    x: 180,
    y: 430,
    translations: {
      en: {
        title: 'Deep Learning',
        shortDesc: 'Multi-layered neural networks capable of learning complex abstractions like sound, images, and text.',
        analogy: 'Like making layered puff pastry (baklava or flaky samosa crust): each layer adds depth, folding intricate textures together.',
        details: 'Deep neural networks stack dozens or hundreds of layers to extract increasingly high-level features from raw unprocessed data.'
      },
      hi: {
        title: 'डीप लर्निंग',
        shortDesc: 'गहरी न्यूरल परतों वाला तंत्र जो तस्वीरें और आवाज पहचानता है।',
        analogy: 'जैसे परतदार खस्ता समोसा या बाकरवड़ी: हर परत मिलकर स्वाद को गहराई देती है।',
        details: 'न्यूरल नेटवर्क की कई परतों को जोड़कर जटिल से जटिल ध्वनि, चित्र व टेक्स्ट को समझना।'
      },
      te: {
        title: 'డీప్ లెర్నింగ్',
        shortDesc: 'బహుళ లేయర్ల న్యూరల్ నెట్‌వర్క్‌ల ద్వారా సంక్లిష్ట విషయాలను గ్రహించడం.',
        analogy: 'పొరలు పొరలుగా ఉండే మిఠాయి లాంటిది: ప్రతి పొర ప్రత్యేకమైన రుచిని ఇస్తుంది.',
        details: 'వందలాది పొరల ద్వారా చిత్రాలు, శబ్దాలు మరియు సంభాషణలను అర్థం చేసుకునే పద్ధతి.'
      },
      mr: {
        title: 'डीप लर्निंग',
        shortDesc: 'अनेक थरांचे जाळे जे आवाज आणि प्रतिमा ओळखण्यात पटाईत असते.',
        analogy: 'खाऱ्या बिस्किटांचे अनेक थर: प्रत्येक थरामुळे कुरकुरीतपणा आणि चव वाढते.',
        details: 'अतिशय गुंतागुंतीच्या डेटाचे विश्लेषण करण्यासाठी खोल न्यूरल थरांचा वापर.'
      },
      ta: {
        title: 'டீப் லேர்னிங்',
        shortDesc: 'பல அடுக்கு நரம்பு வலைப்பின்னல்கள் மூலம் சிக்கலான காட்சிகளையும் ஒலிகளையும் கற்றல்.',
        analogy: 'பல அடுக்குகள் கொண்ட இனிப்பு வகை போல: ஒவ்வொரு அடுக்கும் சுவையை கூட்டுவது போல.',
        details: 'சிக்கலான புகைப்படங்கள் மற்றும் குரல்களை அடையாளம் காணும் தொழில்நுட்பம்.'
      },
      ur: {
        title: 'ڈیپ لرننگ',
        shortDesc: 'کثیر تہوں والے نیورل نیٹ ورکس جو تصاویر اور آوازیں باآسانی پہچانتے ہیں۔',
        analogy: 'جیسے پرت دار سموسہ: ہر پرت مل کر منفرد ذائقہ بناتی ہے۔',
        details: 'سینکڑوں مصنوعی پرتوں کے ذریعے انسانی حواس جیسی باریکیاں سمجھنا۔'
      },
      'r-ur': {
        title: 'Deep Learning',
        shortDesc: 'Multi-layer neural networks for images and voice.',
        analogy: 'Layered paratha: har layer alag texture aur depth deti hai.',
        details: 'Multiple layers ke zariye raw data se complex features extract karna.'
      },
      hin: {
        title: 'Deep Learning',
        shortDesc: 'Multiple layers wala deep neural brain.',
        analogy: 'Parat-dar crispy kachori ya samosa crust jismein har layer ka alag roll hota hai.',
        details: 'Photos, videos aur voice recognition ke liye deep neural architectures.'
      }
    },
    resources: [
      { title: 'Neural Networks: How DL actually thinks', type: 'YouTube', duration: '15 min', url: 'https://youtube.com' },
      { title: 'From Perceptron to Deep Nets', type: 'Course', duration: '20 min interactive', url: '#' }
    ],
    childrenIds: ['cnn', 'transformers-node']
  },
  genai: {
    id: 'genai',
    parentId: 'root',
    title: 'Generative AI',
    iconName: 'Wand2',
    level: 'Beginner',
    category: 'Frontier',
    x: 720,
    y: 130,
    translations: {
      en: {
        title: 'Generative AI',
        shortDesc: 'AI that creates brand-new content—essays, code, paintings, and music.',
        analogy: 'A master potter molding wet clay into brand-new diyas and vases each time you describe a new shape.',
        details: 'Unlike traditional AI that only classifies or scores data, Generative AI models generate novel text, audio, images, and videos from probability distributions.'
      },
      hi: {
        title: 'जेनरेटिव AI',
        shortDesc: 'नया कंटेंट बनाने वाला AI - कविता, कोड, चित्र और आवाज़।',
        analogy: 'एक कुशल कुम्हार जो गीली मिट्टी से आपकी मनचाही नई-नई मूर्तियां और दीये तुरंत गढ़ देता है।',
        details: 'पारंपरिक AI केवल चीजें छांटता था, जबकि जेनरेटिव AI नई रचनाएं खुद गढ़ता है।'
      },
      te: {
        title: 'జెనరేటివ్ AI',
        shortDesc: 'సరికొత్త వ్యాసాలు, కోడ్, కళాఖండాలు మరియు సంగీతాన్ని సృష్టించే AI.',
        analogy: 'మట్టితో కొత్త ఆకారాల్లో అందమైన కుండలు మరియు బొమ్మలు చేసే శిల్పి లాంటిది.',
        details: 'కొత్త విషయాలను ఊహించి కొత్త కంటెంట్‌ను సృష్టించే విప్లవాత్మక AI విభాగం.'
      },
      mr: {
        title: 'जनरेटिव्ह AI',
        shortDesc: 'स्वतः नवीन मजकूर, चित्रे, गाणी आणि कोड तयार करणारे AI.',
        analogy: 'ओल्या मातीतून लगेच सुंदर मूर्ती घडवणारा मूर्तिकार.',
        details: 'केवळ वर्गीकरण न करता स्वतः कल्पकतेने नवीन गोष्टी तयार करण्याची क्षमता.'
      },
      ta: {
        title: 'ஜெனரேட்டிவ் AI',
        shortDesc: 'புதிய உரைகள், ஓவியங்கள், குறியீடுகள் மற்றும் பாடல்களை உருவாக்கும் AI.',
        analogy: 'களிமண்ணைக் கொண்டு நாம் கேட்கும் புதுமையான பொம்மைகளைச் செய்யும் குயவர் போல.',
        details: 'புதிய உள்ளடக்கங்களை தாமாகவே உற்பத்தி செய்யும் நவீன செயற்கை நுண்ணறிவு.'
      },
      ur: {
        title: 'جنریٹو AI',
        shortDesc: 'نیا مواد تخلیق کرنے والی مصنوعی ذہانت - تصاویر، اشعار اور کوڈ۔',
        analogy: 'جیسے کوئی ماہر کمہار جو چکنی مٹی سے ہر بار نئی خوبصورت صراحی تیار کر دے۔',
        details: 'صرف درجہ بندی کرنے کے بجائے نیا مواد تخلیق کرنے کا جدید نظام۔'
      },
      'r-ur': {
        title: 'Generative AI',
        shortDesc: 'Naya content banany wala AI: essays, images, music.',
        analogy: 'Kumhar jo mitti se naye naye bartan aur khilone banata hai.',
        details: 'Traditional AI sirf categorize karta tha, GenAI nayi cheezein create karta hai.'
      },
      hin: {
        title: 'Generative AI',
        shortDesc: 'Creative AI jo nayi kahaniya, images aur code banata hai.',
        analogy: 'Clay workshop jahan gili mitti se jo bolo wo shape turant ban jata hai!',
        details: 'Probability aur tokens ke sahare naye realistic outputs banana.'
      }
    },
    resources: [
      { title: 'Generative AI in 5 Minutes', type: 'YouTube', duration: '5 min', url: 'https://youtube.com' },
      { title: 'How Diffusion Models Draw Art', type: 'Article', duration: '8 min read', url: '#' }
    ],
    childrenIds: ['llm-node', 'diffusion-node', 'rag-node']
  },
  prompting: {
    id: 'prompting',
    parentId: 'root',
    title: 'Prompt Crafting',
    iconName: 'MessageSquare',
    level: 'Beginner',
    category: 'Skills',
    x: 720,
    y: 430,
    translations: {
      en: {
        title: 'Prompt Crafting',
        shortDesc: 'The art of structuring questions to unlock an AI’s smartest answers.',
        analogy: 'Giving precise cooking instructions to an eager apprentice cook so the biryani doesn’t get too spicy.',
        details: 'Techniques like role prompting, few-shot examples, and chain-of-thought to guide LLMs reliably.'
      },
      hi: {
        title: 'प्रॉम्प्ट कला (Prompting)',
        shortDesc: 'AI से सबसे सटीक व उपयोगी काम करवाने का तरीका।',
        analogy: 'नए रसोइए को स्पष्ट हिदायत देना कि बिरयानी में मिर्ची कितनी और दम कितनी देर लगाना है।',
        details: 'स्पष्ट संदर्भ, भूमिका और उदाहरण देकर AI से सर्वोत्तम परिणाम प्राप्त करने का हुनर।'
      },
      te: {
        title: 'ప్రాంప్ట్ ఇంజనీరింగ్',
        shortDesc: 'AI నుండి ఉత్తమ ఫలితాలు పొందడానికి సరైన ప్రశ్నలు వేసే కళ.',
        analogy: 'వంటవాడికి ఉప్పు, కారం ఎంత వేయాలో స్పష్టంగా చెప్పినట్లు.',
        details: 'సరైన సూచనలు మరియు ఉదాహరణలతో AI ని నడిపించే పద్ధతులు.'
      },
      mr: {
        title: 'प्रॉम्प्ट रचना',
        shortDesc: 'AI कडून उत्कृष्ट काम करून घेण्यासाठी प्रश्न विचारण्याची कला.',
        analogy: 'नवीन आचाऱ्याला स्वयंपाकाचे प्रमाण अचूक समजावून सांगण्यासारखे.',
        details: 'सविस्तर संदर्भ देऊन AI कडून उत्तम उत्तरे मिळवण्याची पद्धत.'
      },
      ta: {
        title: 'ப்ராம்ப்ட் கலை',
        shortDesc: 'AI-யிடம் இருந்து சிறந்த பதிலை பெற கேள்விகளை வடிவமைக்கும் கலை.',
        analogy: 'சமையல்காரரிடம் மசாலா அளவுகளை மிகத் துல்லியமாக விளக்குவது போல.',
        details: 'சரியான சூழல் மற்றும் உதாரணங்களுடன் AI-யிடம் வேலை வாங்கும் கலை.'
      },
      ur: {
        title: 'پرامپٹ کرافٹنگ',
        shortDesc: 'AI سے بہترین نتائج حاصل کرنے کے لیے سوالات پوچھنے کا فن۔',
        analogy: 'باورچی کو درست ہدایات دینا تاکہ سالن میں مصالحہ بالکل متوازن رہے۔',
        details: 'مثالوں اور واضح تفصیلات کے ساتھ AI کی رہنمائی کا طریقہ۔'
      },
      'r-ur': {
        title: 'Prompt Crafting',
        shortDesc: 'AI se perfect output nikalwane ka tareeqa.',
        analogy: 'Chef ko biryani ke masalon ki exact measurement batana.',
        details: 'Role framing aur clear examples ke zariye model ko steer karna.'
      },
      hin: {
        title: 'Prompt Crafting',
        shortDesc: 'AI se smart kaam karwane ki superpower.',
        analogy: 'Bhai ko shopping list dena: "Sirf biscuit mat laana, Bourbon ka bada packet laana!"',
        details: 'Few-shot prompting aur Chain-of-Thought se AI ko step-by-step sochna sikhana.'
      }
    },
    resources: [
      { title: 'Mastering Prompts for Students', type: 'YouTube', duration: '9 min', url: 'https://youtube.com' },
      { title: 'Interactive Prompt Tester', type: 'Interactive Sandbox', duration: 'Live', url: '#' }
    ],
    childrenIds: ['fewshot', 'chainofthought']
  },
  supervised: {
    id: 'supervised',
    parentId: 'ml',
    title: 'Supervised Learning',
    iconName: 'CheckCircle2',
    level: 'Beginner',
    category: 'ML',
    translations: {
      en: {
        title: 'Supervised Learning',
        shortDesc: 'Learning with labeled answer keys (questions + verified solutions).',
        analogy: 'A math teacher giving you 50 solved homework problems so you master the pattern for the exam.',
        details: 'Models are trained on datasets containing inputs paired with the correct ground-truth outputs.'
      },
      hi: {
        title: 'सुपरवाइज्ड लर्निंग',
        shortDesc: 'सही उत्तरों के साथ सीखने की प्रक्रिया (हल सहित प्रश्न)।',
        analogy: 'शिक्षक द्वारा 50 हल किए हुए गणित के सवाल देना ताकि आप परीक्षा का तरीका समझ सकें।',
        details: 'डेटा में इनपुट के साथ-साथ सही उत्तर भी दिया जाता है जिससे मॉडल गलतियों को सुधारता है।'
      },
      te: {
        title: 'సూపర్‌వైజ్డ్ లెర్నింగ్',
        shortDesc: 'జవాబులతో కూడిన ఉదాహరణల ద్వారా నేర్చుకోవడం.',
        analogy: 'టీచర్ పరిష్కారాలతో కూడిన లెక్కల పుస్తకం ఇచ్చినట్లు.',
        details: 'సరైన సమాధానాలు ఉన్న డేటా ఆధారంగా మోడల్ శిక్షణ పొందుతుంది.'
      },
      mr: {
        title: 'सुपरवाइज्ड लर्निंग',
        shortDesc: 'उत्तरांसहित दिलेल्या उदाहरणांवरून शिकणे.',
        analogy: 'शिक्षकांनी सोडवून दाखवलेली गणिते पाहून नवीन प्रश्न सोडवणे.',
        details: 'इनपुट आणि त्याचे अचूक उत्तर दोन्ही देऊन मॉडेलला शिकवणे.'
      },
      ta: {
        title: 'மேற்பார்வை கற்றல்',
        shortDesc: 'விடைகளுடன் கூடிய பயிற்சிகள் மூலம் கற்றல்.',
        analogy: 'ஆசிரியர் விடைக்குறிப்புகளுடன் கூடிய கணக்குப் புத்தகத்தைக் கொடுத்து பயிற்சி தருவது போல.',
        details: 'சரியான விடைகளுடன் கூடிய தரவுகளைக் கொண்டு பயிற்சி அளிக்கும் முறை.'
      },
      ur: {
        title: 'نگرانی شدہ سیکھنا (Supervised)',
        shortDesc: 'حل شدہ سوالات اور جوابات کے ساتھ ماڈل کو سکھانا۔',
        analogy: 'جیسے استاد کی نگرانی میں کتاب کی مشقیں حل کرنا۔',
        details: 'درست نتائج کے ساتھ ماڈل کو تربیت دینا۔'
      },
      'r-ur': {
        title: 'Supervised Learning',
        shortDesc: 'Solved answers ke sath model ko train karna.',
        analogy: 'Solved past papers se exam ki tayari karna.',
        details: 'Input ke sath expected output provide kiya jata hai.'
      },
      hin: {
        title: 'Supervised Learning',
        shortDesc: 'Answer key ke sath padhai karna.',
        analogy: 'Guide book jismein sawal ke sath step-by-step answer bhi diya ho.',
        details: 'Labeled data jismein question aur answer dono maujood hote hain.'
      }
    },
    resources: [
      { title: 'Supervised Learning in Real Life', type: 'YouTube', duration: '8 min', url: 'https://youtube.com' }
    ]
  },
  unsupervised: {
    id: 'unsupervised',
    parentId: 'ml',
    title: 'Unsupervised Learning',
    iconName: 'Shapes',
    level: 'Intermediate',
    category: 'ML',
    translations: {
      en: {
        title: 'Unsupervised Learning',
        shortDesc: 'Discovering hidden groupings without any labels or teacher guidance.',
        analogy: 'Dumping a mixed basket of coins on a carpet and grouping them by size and color on your own.',
        details: 'Clustering and dimensionality reduction algorithms that identify organic structures in unlabeled data.'
      },
      hi: {
        title: 'अनसुपरवाइज्ड लर्निंग',
        shortDesc: 'बिना किसी शिक्षक के डेटा में छिपे समूह खोजना।',
        analogy: 'ढेर सारे अलग-अलग सिक्कों को उनके आकार और रंग के आधार पर खुद से अलग-अलग ढेरों में बांटना।',
        details: 'बिना किसी लेबल के डेटा की प्राकृतिक बनावट और समूहों (clusters) को पहचानना।'
      },
      te: {
        title: 'అన్‌సూపర్‌వైజ్డ్ లెర్నింగ్',
        shortDesc: 'ఎలాంటి సహాయం లేకుండా స్వయంగా పోలికలను కనిపెట్టడం.',
        analogy: 'రకరకాల నాణేలను వాటి పరిమాణం మరియు రంగు ఆధారంగా స్వయంగా వేరు చేయడం లాంటిది.',
        details: 'డేటాలోని పోలికలను బట్టి స్వతంత్రంగా గ్రూపులుగా విభజించడం.'
      },
      mr: {
        title: 'अनसुपरवाइज्ड लर्निंग',
        shortDesc: 'मार्गदर्शकाशिवाय स्वतःहून गटामध्ये वर्गीकरण करणे.',
        analogy: 'खिशातले विविध नाणी आकार आणि वजनानुसार स्वतःच वेगळे करणे.',
        details: 'लेबल नसलेल्या माहितीमधील साम्य शोधून क्लस्टर तयार करणे.'
      },
      ta: {
        title: 'மேற்பார்வையற்ற கற்றல்',
        shortDesc: 'ஆசிரியரின் வழிகாட்டலின்றி தானாகவே ஒற்றுமைகளைக் கண்டறிதல்.',
        analogy: 'கலந்து கிடக்கும் நாணயங்களை அவற்றின் அளவு மற்றும் நிறத்தின் அடிப்படையில் பிரிப்பது போல.',
        details: 'வழிகாட்டுதல் இல்லாமல் தரவுகளின் இயல்பான குழுக்களைக் கண்டறிதல்.'
      },
      ur: {
        title: 'غیر نگرانی شدہ سیکھنا',
        shortDesc: 'بغیر کسی استاد کے ڈیٹا کے اندر چھپے ہوئے گروپس تلاش کرنا۔',
        analogy: 'مختلف سکے سامنے رکھ کر ان کی بناوٹ کی بنیاد پر خود بخود ڈھیریاں بنانا۔',
        details: 'بغیر کسی پیشگی نتیجے کے ڈیٹا کا اندرونی ڈھانچہ سمجھنا۔'
      },
      'r-ur': {
        title: 'Unsupervised Learning',
        shortDesc: 'Bina teacher ke khud patterns classify karna.',
        analogy: 'Mixed daalon ya coins ko size aur shape se alag karna.',
        details: 'Clustering algorithms jahan koi pre-defined labels nahi hote.'
      },
      hin: {
        title: 'Unsupervised Learning',
        shortDesc: 'Bina teacher ke khud se groups banana.',
        analogy: 'Almirah mein kapde categorize karna: formal ek side, casual ek side bina kisi ke sikhaye!',
        details: 'Customer segmentation aur clustering algorithms.'
      }
    },
    resources: [
      { title: 'Clustering & Customer Segmentation', type: 'Article', duration: '6 min read', url: '#' }
    ]
  },
  reinforcement: {
    id: 'reinforcement',
    parentId: 'ml',
    title: 'Reinforcement Learning',
    iconName: 'Trophy',
    level: 'Advanced',
    category: 'ML',
    translations: {
      en: {
        title: 'Reinforcement Learning',
        shortDesc: 'Learning through trial, error, points, and penalties.',
        analogy: 'Training a pet puppy: give a treat for sitting, gentle "no" for chewing slippers.',
        details: 'An agent explores an environment, taking actions to maximize a cumulative mathematical reward signal.'
      },
      hi: {
        title: 'रीइन्फोर्समेंट लर्निंग',
        shortDesc: 'इनाम और सजा (रिवॉर्ड) के जरिए तजुर्बे से सीखना।',
        analogy: 'पालतू पिल्ले को सिखाना: सही बात मानने पर बिस्कुट देना, चप्पल चबाने पर मना करना।',
        details: 'एजेंट पर्यावरण में क्रियाएं करता है और अधिकतम इनाम हासिल करने की रणनीति सीखता है।'
      },
      te: {
        title: 'రీఇన్‌ఫోర్స్‌మెంట్ లెర్నింగ్',
        shortDesc: 'రివార్డులు మరియు జరిమానాల ద్వారా అనుభవంతో నేర్చుకోవడం.',
        analogy: 'కుక్కపిల్లకు శిక్షణ ఇవ్వడం లాంటిది: మంచి పనికి బిస్కెట్ ఇవ్వడం.',
        details: 'ప్రయత్నిస్తూ, పొరపాట్లను సరిదిద్దుకుంటూ ఉత్తమ ఫలితం సాధించడం.'
      },
      mr: {
        title: 'रीइन्फोर्समेंट लर्निंग',
        shortDesc: 'बक्षीस आणि शिक्षेच्या अनुभवातून स्वतः शिकणे.',
        analogy: 'कुत्र्याला प्रशिक्षण देणे: आज्ञा पाळल्यास खाऊ देणे.',
        details: 'अल्गोरिदम स्वतः चुका करत योग्य मार्गाचा शोध घेतो.'
      },
      ta: {
        title: 'வலுவூட்டல் கற்றல்',
        shortDesc: 'பரிசுகள் மற்றும் தண்டனைகள் மூலம் அனுபவப்பூர்வமாகக் கற்றல்.',
        analogy: 'செல்லப்பிராணிக்கு பயிற்சி அளிப்பது போல: கீழ்ப்படிந்தால் பிஸ்கட் கொடுப்பது.',
        details: 'சுயமாக முயன்று பார்த்து சிறந்த வழியைக் கண்டறியும் முறை.'
      },
      ur: {
        title: 'ری انفورسمنٹ لرننگ',
        shortDesc: 'انعام اور سزا کے اصول پر تجربے سے سیکھنا۔',
        analogy: 'پالتو جانور کو سکھانا: اچھا کام کرنے پر کھانا دینا۔',
        details: 'مسلسل کوشش اور غلطیوں سے بہترین حکمت عملی اپنانا۔'
      },
      'r-ur': {
        title: 'Reinforcement Learning',
        shortDesc: 'Reward aur penalty ke zariye seekhna.',
        analogy: 'Video game khelna: coin collect karne par points, pit girne par game over.',
        details: 'Self-driving cars aur chess-playing bots ka foundation.'
      },
      hin: {
        title: 'Reinforcement Learning',
        shortDesc: 'Inaam aur galti se seekhna.',
        analogy: 'Mario game khelna: coin mila toh maze, aag lagi toh galti se sabak seekhna!',
        details: 'Trial and error se optimal strategy seekhna.'
      }
    },
    resources: [
      { title: 'How AlphaGo Defeated World Champions', type: 'YouTube', duration: '14 min', url: 'https://youtube.com' }
    ]
  },
  'llm-node': {
    id: 'llm-node',
    parentId: 'genai',
    title: 'Large Language Models',
    iconName: 'BookOpen',
    level: 'Intermediate',
    category: 'GenAI',
    translations: {
      en: {
        title: 'Large Language Models (LLMs)',
        shortDesc: 'AI reading and writing human language naturally.',
        analogy: 'A universal translator from science fiction that knows every nuance of dialogue.',
        details: 'Trained on petabytes of text, LLMs learn word associations and logical patterns.'
      },
      hi: {
        title: 'लार्ज लैंग्वेज मॉडल्स',
        shortDesc: 'इंसानी भाषा को सहजता से समझने और बोलने वाला AI।',
        analogy: 'साइंस फिक्शन का ऐसा जादुई अनुवादक जो हर जुबान की बारीकियां समझता है।',
        details: 'करोड़ों वेब पेजों और किताबों के जरिए इंसानी बातचीत के तौर-तरीके सीखना।'
      },
      te: {
        title: 'లార్జ్ లాంగ్వేజ్ మోడల్స్',
        shortDesc: 'మానవ భాషను సహజంగా చదివి మాట్లాడే AI.',
        analogy: 'అన్ని భాషలలోని మెళకువలు తెలిసిన ఒక అద్భుత అనువాదకుడు.',
        details: 'భాషను అర్థం చేసుకుని స్వయంగా కంటెంట్ రాయగల వ్యవస్థ.'
      },
      mr: {
        title: 'लार्ज लँग्वेज मॉडेल्स',
        shortDesc: 'मानवी भाषा अत्यंत सहजतेने समजून घेणारे AI.',
        analogy: 'प्रत्येक भाषेची नस ओळखणारा एक हुशार दुभाषा.',
        details: 'प्रचंड वाचन करून मानवी संवादाची शैली आत्मसात करणारे मॉडेल.'
      },
      ta: {
        title: 'பெரிய மொழி மாதிரிகள்',
        shortDesc: 'மனித மொழியை இயல்பாகப் புரிந்து கொண்டு பேசும் AI.',
        analogy: 'அனைத்து மொழிகளையும் சரளமாகப் பேசும் ஒரு மாயாஜால மொழிபெயர்ப்பாளர்.',
        details: 'மனித உரையாடல்களைப் பிரதிபலிக்கும் வகையில் அமைக்கப்பட்ட மாதிரி.'
      },
      ur: {
        title: 'لارج لینگویج ماڈلز',
        shortDesc: 'انسانی زبان کو روانی کے ساتھ بولنے اور سمجھنے والا AI۔',
        analogy: 'ایسا مترجم جو ہر زبان کے باریک جذبات سمجھتا ہو۔',
        details: 'تحریر، فہم اور خلاصہ نگاری میں معاون ماڈل۔'
      },
      'r-ur': {
        title: 'Large Language Models',
        shortDesc: 'Insaani zuban fluently samajhne wala software.',
        analogy: 'Kharbon pages parha hua digital assistant.',
        details: 'ChatGPT, Gemini aur Claude ka brain.'
      },
      hin: {
        title: 'Large Language Models',
        shortDesc: 'Insani bhasha ko fluent bolne wala AI.',
        analogy: 'Puri duniya ki books padha hua digital pandit!',
        details: 'Next-token prediction se seamless sentences create karna.'
      }
    },
    resources: [
      { title: 'Inside Large Language Models', type: 'YouTube', duration: '11 min', url: 'https://youtube.com' }
    ]
  },
  'rag-node': {
    id: 'rag-node',
    parentId: 'genai',
    title: 'RAG Systems',
    iconName: 'Database',
    level: 'Intermediate',
    category: 'GenAI',
    translations: {
      en: {
        title: 'RAG Systems',
        shortDesc: 'Grounding AI with your own real-time verified documents.',
        analogy: 'An open-book exam: checking private textbooks before writing the answer.',
        details: 'Retrieves relevant chunks from vector databases and feeds them into the prompt context.'
      },
      hi: {
        title: 'आर.ए.जी. (RAG) सिस्टम',
        shortDesc: 'AI को आपके अपने सही दस्तावेजों से जोड़ना।',
        analogy: 'ओपन-बुक परीक्षा: अपनी निजी डायरी से देखकर सही जवाब लिखना।',
        details: 'कंपनी की फाइलों से सटीक अंश निकालकर AI को सटीक जवाब देने में मदद करना।'
      },
      te: {
        title: 'RAG వ్యవస్థలు',
        shortDesc: 'నిజమైన పత్రాలతో AI సమాధానాలను సరిచూసుకోవడం.',
        analogy: 'పుస్తకం చూసి రాసే పరీక్ష లాంటిది.',
        details: 'డాక్యుమెంట్లలోని సమాచారాన్ని వెతికి కచ్చితమైన సమాధానాలు ఇవ్వడం.'
      },
      mr: {
        title: 'RAG प्रणाल्या',
        shortDesc: 'तुमच्या स्वतःच्या दस्तऐवजांच्या आधारे अचूक उत्तरे देणे.',
        analogy: 'पुस्तकातून अचूक संदर्भ शोधून उत्तरे लिहिण्यासारखे.',
        details: 'बाह्य डेटाबेसमधून माहिती मिळवून AI ची विश्वासार्हता वाढवणे.'
      },
      ta: {
        title: 'RAG அமைப்புகள்',
        shortDesc: 'உங்களின் சொந்த ஆவணங்களைக் கொண்டு துல்லியமான பதில் பெறுதல்.',
        analogy: 'கையில் புத்தகத்தை வைத்துக்கொண்டு தேர்வு எழுதுவது போல.',
        details: 'நம்பகமான ஆவணங்களின் அடிப்படையில் AI-யை பதிலளிக்க வைப்பது.'
      },
      ur: {
        title: 'RAG سسٹم',
        shortDesc: 'AI کو آپ کی تصدیق شدہ فائلوں کی بنیاد پر جواب دینے کا طریقہ۔',
        analogy: 'اوپن بک امتحان: کتاب سے دیکھ کر صحیح حوالہ دینا۔',
        details: 'درست اور مستند معلومات فراہم کرنے کا جدید ذریعہ۔'
      },
      'r-ur': {
        title: 'RAG Systems',
        shortDesc: 'Verified documents se facts check karna.',
        analogy: 'Open book test: pehle confirm karo phir likho.',
        details: 'Vector database search + LLM generation.'
      },
      hin: {
        title: 'RAG Systems',
        shortDesc: 'Verified facts ke sath answer dene wala open-book AI.',
        analogy: 'Khuli kitaab dekh ke answer likhna, zero jhooth.',
        details: 'Document search + LLM summarization pipeline.'
      }
    },
    resources: [
      { title: 'Building your first RAG app', type: 'YouTube', duration: '13 min', url: 'https://youtube.com' }
    ]
  }
};
