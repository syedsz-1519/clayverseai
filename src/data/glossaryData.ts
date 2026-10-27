import { GlossaryTerm } from '../types';

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    id: 'llm',
    term: 'Large Language Model (LLM)',
    category: 'Generative AI',
    level: 'Intermediate',
    translations: {
      en: {
        nativeTerm: 'Large Language Model (LLM)',
        tagline: 'A super-read AI that predicts the next word to talk like humans.',
        explanation: 'A deep learning model trained on trillions of words that can understand, generate, summarize, and translate human language.',
        analogy: 'Imagine a person who has read every book in an infinite university library and can predict the exact next word you want to write.',
        example: 'ChatGPT, Gemini, and Claude writing essays or poems for you in seconds.'
      },
      hi: {
        nativeTerm: 'विशाल भाषा मॉडल (LLM)',
        tagline: 'खरबों किताबें पढ़ा हुआ ऐसा AI जो बातचीत कर सकता है।',
        explanation: 'एक ऐसा न्यूरल नेटवर्क जिसने दुनिया भर की किताबें और इंटरनेट पढ़ रखा है और इंसानों की तरह लिख व बोल सकता है।',
        analogy: 'जैसे आपके मोहल्ले का सबसे ज्ञानी दादाजी, जिसने दुनिया की हर किताब पढ़ी हो और जो हर सवाल का समझदारी से जवाब दे दे।',
        example: 'Gemini या ChatGPT से हिंदी में कविता या निबंध लिखवाना।'
      },
      te: {
        nativeTerm: 'లార్జ్ లాంగ్వేజ్ మోడల్ (LLM)',
        tagline: 'కోట్లాది పుస్తకాలు చదివి మనుషుల్లా మాట్లాడే AI మోడల్.',
        explanation: 'అపారమైన సమాచారాన్ని చదివి, మానవ భాషను అర్థం చేసుకుని స్పందించే అధునాతన AI వ్యవస్థ.',
        analogy: 'లైబ్రరీలోని అన్ని పుస్తకాలను పూర్తిగా చదివిన ఒక అసాధారణ పండితుడిలాంటిది.',
        example: 'ChatGPT ద్వారా తెలుగులో కథలు లేదా కోడింగ్ వ్రాయడం.'
      },
      mr: {
        nativeTerm: 'लार्ज लँग्वेज मॉडेल (LLM)',
        tagline: 'अब्जावधी शब्द वाचून माणसांसारखे बोलणारे AI मॉडेल.',
        explanation: 'इंटरनेटवरील प्रचंड मजकूर वाचून भाषा समजून घेणारा आणि स्वतः उत्तरे देणारा न्यूरल नेटवर्क अल्गोरिदम.',
        analogy: 'जणू काही सर्व ग्रंथ तोंडपाठ असलेला एक डिजिटल गुरुजी, जो प्रत्येक प्रश्नाचे सोपे उत्तर देतो.',
        example: 'Gemini कडून मराठीत पत्र किंवा भाषण तयार करून घेणे.'
      },
      ta: {
        nativeTerm: 'பெரிய மொழி மாதிரி (LLM)',
        tagline: 'மில்லியன் கணக்கான புத்தகங்களை படித்து மனிதனைப் போல பேசும் AI.',
        explanation: 'மொழியைப் புரிந்து கொள்ளவும், புதிய உரைகளை உருவாக்கவும் டிரில்லியன் கணக்கான சொற்களில் பயிற்றுவிக்கப்பட்ட மாதிரி.',
        analogy: 'உலகத்திலுள்ள அனைத்து நூலகங்களையும் கரைத்துக் குடித்த ஒரு மகா அறிஞன் போன்றது.',
        example: 'ChatGPT மூலம் தமிழில் கட்டுரை அல்லது கவிதை எழுதுவது.'
      },
      ur: {
        nativeTerm: 'لارج لینگویج ماڈل (LLM)',
        tagline: 'کھربوں الفاظ پڑھ کر انسانوں کی طرح بات کرنے والا ماڈل۔',
        explanation: 'ایک گہرا مصنوعی ذہانت کا نظام جس نے بے شمار کتابیں اور ویب سائٹس پڑھ رکھی ہیں اور یہ اگلے لفظ کی درست پیش گوئی کرتا ہے۔',
        analogy: 'جیسے کوئی ایسا عالم جس نے دنیا کا ہر کتب خانہ پڑھ رکھا ہو اور آپ کے سوال کا فورا جواب دے دے۔',
        example: 'چیٹ جی پی ٹی یا جیمنائی سے اردو میں مضمون لکھوانا۔'
      },
      'r-ur': {
        nativeTerm: 'Large Language Model (LLM)',
        tagline: 'Kharbon alfaaz parh kar insaanon ki tarah bolne wala AI.',
        explanation: 'Aisa AI model jisne internet ki saari kitaabein parhi hain aur wo agla lafz predict karke insaan jaisi guftagu karta hai.',
        analogy: 'Aapke mohallay ka wo buzurg jisne library ki har kitaab parhi ho aur har baat ka jawaab yaad ho.',
        example: 'ChatGPT se Roman Urdu mein recipe ya code likhwana.'
      },
      hin: {
        nativeTerm: 'Large Language Model (LLM)',
        tagline: 'Internet ka saara gyan peene wala super AI reader.',
        explanation: 'Deep learning model jo trillions of words padh kar insaano ki tarah next word predict karta hai aur answers generate karta hai.',
        analogy: 'Jaise class ka wo topper jo exam se pehle puri syllabus chaat gaya ho aur koi bhi sawal pucho to mast explain kare.',
        example: 'Gemini se Instagram caption ya project summary likhwana.'
      }
    },
    relatedTerms: ['transformer', 'token', 'prompt', 'hallucination']
  },
  {
    id: 'prompt',
    term: 'Prompt & Prompt Engineering',
    category: 'Ethics & Prompting',
    level: 'Beginner',
    translations: {
      en: {
        nativeTerm: 'Prompt (AI Instruction)',
        tagline: 'The guiding words or instructions you give to an AI.',
        explanation: 'The input query, command, or context you give to a generative AI to guide it toward the exact output you desire.',
        analogy: 'Like ordering at a tea stall: saying "Chai do" gives anything; saying "Adrak-elaichi wali kadak chai kam cheeni" gives perfection.',
        example: '"Act as an expert math teacher and explain fractions to a 10-year-old using pizza slices."'
      },
      hi: {
        nativeTerm: 'प्रॉम्प्ट (AI को निर्देश)',
        tagline: 'AI को दिया जाने वाला आदेश या सवाल।',
        explanation: 'वह निर्देश, सवाल या संदर्भ जो आप AI को देते हैं ताकि वह आपकी मनचाही दिशा में सटीक जवाब तैयार कर सके।',
        analogy: 'जैसे चाय वाले को स्पष्ट कहना: "सिर्फ चाय मत दो, अदरक-इलायची वाली कड़क चाय कम चीनी में बनाओ!"',
        example: '"एक 10 साल के बच्चे के लिए जलेबी का उदाहरण देकर गुरुत्वाकर्षण समझाओ।"'
      },
      te: {
        nativeTerm: 'ప్రాంప్ట్ (AI సూచన)',
        tagline: 'AI కి మనం ఇచ్చే ప్రశ్న లేదా స్పష్టమైన ఆదేశం.',
        explanation: 'AI నుండి ఖచ్చితమైన సమాధానం రాబట్టడానికి మనం ఇచ్చే స్పష్టమైన ఇన్పుట్ మరియు సందర్భం.',
        analogy: 'హోటల్‌లో సర్వర్‌కి "మంచి దోశ" అనడం కాకుండా, "కారప్పొడి రాసి, నెయ్యితో క్రిస్పీగా కాల్చిన దోశ" అని స్పష్టంగా ఆర్డర్ ఇచ్చినట్లు.',
        example: '"5వ తరగతి విద్యార్థికి అర్థమయ్యేలా చంద్రుడి గురించి కథ చెప్పండి."'
      },
      mr: {
        nativeTerm: 'प्रॉम्प्ट (AI आज्ञा)',
        tagline: 'AI कडून अचूक काम करून घेण्यासाठी दिलेली सूचना.',
        explanation: 'AI ला विचारलेला प्रश्न किंवा कामाचे स्वरूप, ज्यामुळे AI आपल्याला हवी तशी माहिती बनवून देते.',
        analogy: 'हॉटेलमध्ये "चहा द्या" म्हणण्यापेक्षा "आले-वेलची घालून बिनसाखरेचा कडक चहा द्या" असे सविस्तर सांगण्यासारखे.',
        example: '"दहावीच्या मुलासाठी गणितातील पायथागोरस सिद्धांत सोप्या भाषेत सांगा."'
      },
      ta: {
        nativeTerm: 'ப்ராம்ப்ட் (AI கட்டளை)',
        tagline: 'AI-யிடம் இருந்து சரியான பதிலைப் பெற நாம் கொடுக்கும் அறிவுறுத்தல்.',
        explanation: 'நாம் விரும்பும் துல்லியமான பதிலை AI உருவாக்க நாம் கொடுக்கும் உள்ளீடு அல்லது வழிகாட்டுதல்.',
        analogy: 'டீ கடையில் "டீ கொடு" என்று சொல்லாமல், "இஞ்சி, ஏலக்காய் போட்டு சர்க்கரை கம்மியா ஸ்ட்ராங் டீ" என்று ஆர்டர் செய்வது போல.',
        example: '"கிரிக்கெட் விளையாட்டை 8 வயது சிறுவனுக்கு எளிய தமிழில் விளக்கு."'
      },
      ur: {
        nativeTerm: 'پرامپٹ (AI کو دی گئی ہدایت)',
        tagline: 'AI کو دیا جانے والا سوال، کمانڈ یا رہنمائی۔',
        explanation: 'وہ مخصوص الفاظ یا ہدایت جو آپ AI کو فراہم کرتے ہیں تاکہ وہ آپ کی مرضی کے مطابق بہترین جواب بنا کر دے۔',
        analogy: 'جیسے چائے والے کو کہنا: "صرف چائے نہیں، ادرک اور الائچی والی کڑک چائے کم میٹھے کے ساتھ بناؤ"۔',
        example: '"بریانی کی ترکیب ایک نو آموز کو مرحلہ وار آسان الفاظ میں سکھاؤ۔"'
      },
      'r-ur': {
        nativeTerm: 'Prompt',
        tagline: 'AI ko diya gaya clear instruction ya command.',
        explanation: 'Wo sawaal ya context jo aap AI ko dete hain taake wo perfect answer generate kar sake.',
        analogy: 'Dhabe par order dena: Sirf "Khaana lao" kehne ke bajaye "Butter chicken kam mirchi wala fresh naan ke sath" kehna.',
        example: '"Class 8 ke student ke liye AI ko cricket ki misal se samjhao."'
      },
      hin: {
        nativeTerm: 'Prompt (Hukum / Order)',
        tagline: 'AI se kaam karwane ka formula aur exact command.',
        explanation: 'Input text ya context jisse AI samajhta hai ki use exact kya output generate karna hai.',
        analogy: 'Chai tapri pe order: "Bhai kadak adrak wali chai bina shakkar dena" - jitna clear prompt, utna mast result!',
        example: '"Explain neural networks using mom\'s roti-making process."'
      }
    },
    relatedTerms: ['llm', 'token', 'hallucination', 'fine-tuning']
  },
  {
    id: 'neural-network',
    term: 'Neural Network',
    category: 'Neural Networks',
    level: 'Beginner',
    translations: {
      en: {
        nativeTerm: 'Artificial Neural Network (ANN)',
        tagline: 'Interconnected math layers inspired by neurons in the human brain.',
        explanation: 'A computing system composed of interconnected nodes (neurons) organized in layers that process inputs, discover patterns, and make predictions.',
        analogy: 'A multi-step assembly line or committee where each member checks one clue (color, shape, smell) before voting on what fruit it is.',
        example: 'Face unlock on your phone checking eye distance, nose shape, and jawline.'
      },
      hi: {
        nativeTerm: 'कृत्रिम न्यूरल नेटवर्क',
        tagline: 'मानव मस्तिष्क के न्यूरॉन्स से प्रेरित गणितीय जाला।',
        explanation: 'कई परतों (layers) में जुड़े नोड्स का ऐसा नेटवर्क जो डेटा से सीखता है और जटिल पैटर्न पहचानता है।',
        analogy: 'जैसे रसोई में 3 कारीगर: पहला आटा गूंथे, दूसरा बेले, तीसरा सेके - मिलकर बेहतरीन रोटी तैयार होती है।',
        example: 'मोबाइल का फेस-अनलॉक जो चेहरे के अलग-अलग हिस्सों को परखकर पहचानता है।'
      },
      te: {
        nativeTerm: 'న్యూరల్ నెట్‌వర్క్ (నాడీ వలయం)',
        tagline: 'మానవ మెదడు తీరును అనుకరిస్తూ గణిత కణాలతో నిర్మించిన వ్యవస్థ.',
        explanation: 'లేయర్లలో అనుసంధానించబడిన కృత్రిమ న్యూరాన్లు డేటాను విశ్లేషించి ఖచ్చితమైన నిర్ణయాలు తీసుకుంటాయి.',
        analogy: 'ఒక తీర్పు చెప్పడానికి ముగ్గురు పెద్దమనుషులు వరుసగా ఆధారాలను పరిశీలించి నిర్ణయం తీసుకోవడం లాంటిది.',
        example: 'ఫోన్ ఫేస్ అన్‌లాక్ మీ ముఖ కవళికలను గుర్తించడం.'
      },
      mr: {
        nativeTerm: 'कृत्रिम न्यूरल नेटवर्क',
        tagline: 'मानवी मेंदूच्या रचनेवर आधारित कम्प्युटरमधील जाळे.',
        explanation: 'परस्परांशी जोडलेले कृत्रिम मज्जापेशींचे (neurons) थर जे माहितीचे विश्लेषण करून अचूक अंदाज बांधतात.',
        analogy: 'जसे फळबागेतील आंबे तपासण्यासाठी पहिली व्यक्ती रंग पाहते, दुसरी आकार, आणि तिसरी वास - मग ठरते आंबा गोड आहे का.',
        example: 'फोनमधील फेस रेकग्निशन तंत्रज्ञान.'
      },
      ta: {
        nativeTerm: 'நியூரல் நெட்வொர்க் (நரம்பு வலைப்பின்னல்)',
        tagline: 'மனித மூளையின் அமைப்பைப் பின்பற்றி உருவாக்கப்பட்ட கணித வலைப்பின்னல்.',
        explanation: 'பல அடுக்குகளில் ஒன்றோடொன்று இணைக்கப்பட்ட செயற்கை நியூரான்கள் மூலம் தரவுகளைப் பகுப்பாய்வு செய்யும் அமைப்பு.',
        analogy: 'ஒரு தொழிற்சாலையில் ஒவ்வொரு தொழிலாளியும் ஒரு குறிப்பிட்ட வேலையைச் செய்து முழு பொருளை உருவாக்குவது போன்றது.',
        example: 'உங்கள் ஸ்மார்ட்போனின் முக அங்கீகார (Face Unlock) தொழில்நுட்பம்.'
      },
      ur: {
        nativeTerm: 'نیورل نیٹ ورک',
        tagline: 'انسانی دماغ کی طرح باہم جڑے ہوئے گنتی کے نوڈز کا جال۔',
        explanation: 'ایک دوسرے سے جڑے ہوئے مصنوعی خلیات کا ایسا نظام جو ڈیٹا سے پیٹرن سیکھتا ہے اور فیصلے کرتا ہے۔',
        analogy: 'جیسے کسی محکمے میں فائل مختلف افسران کے ہاتھوں سے گزرتی ہے اور ہر کوئی اپنا تجزیہ پیش کرتا ہے۔',
        example: 'موبائل کا چہرہ پہچان کر انلاک کرنا۔'
      },
      'r-ur': {
        nativeTerm: 'Neural Network',
        tagline: 'Insaani dimaagh ke neurons jaisa interconnected digital jaal.',
        explanation: 'Nodes ki connected layers jo data ke patterns ko samajh kar faisla leti hain.',
        analogy: 'Cricket match mein fielders ka network: bowler se lekar keeper aur slips tak sab interconnected hain.',
        example: 'Mobile ka Face Unlock system.'
      },
      hin: {
        nativeTerm: 'Neural Network',
        tagline: 'Dimag ke neurons jaisa layers wala smart logic system.',
        explanation: 'Nodes ki connected layers jo features extract karti hain aur output predict karti hain.',
        analogy: 'Jaise chaat wale bhaiya: pehle papdi, fir aloo, fir dahi, fir chutney daal kar final swaad banate hain layer by layer.',
        example: 'Google Lens jo photo dekh ke bata deta hai ye kaunsa phool hai.'
      }
    },
    relatedTerms: ['backpropagation', 'weights-biases', 'loss-function', 'activation-function']
  },
  {
    id: 'backpropagation',
    term: 'Backpropagation',
    category: 'Neural Networks',
    level: 'Intermediate',
    translations: {
      en: {
        nativeTerm: 'Backpropagation',
        tagline: 'The reverse error-correction loop that helps AI learn from mistakes.',
        explanation: 'An algorithm that calculates the gradient of the loss function and passes it backward through the network to adjust weights and reduce errors.',
        analogy: 'A cricket batsman reviewing slow-motion video after getting bowled, seeing where the bat angle went wrong, and correcting his stance.',
        example: 'A model guessing a cat is a dog, measuring how far off it was, and tweaking its internal knobs so next time it gets it right.'
      },
      hi: {
        nativeTerm: 'बैकप्रॉपैगैशन (गलतियों से सीखना)',
        tagline: 'उलटी दिशा में जाकर गलतियों को सुधारने की विधि।',
        explanation: 'परिणाम में हुई गलती को पीछे की परतों तक भेजकर नेटवर्क के वजन (weights) को सुधारने का गणितीय तरीका।',
        analogy: 'जब सब्जी में नमक ज्यादा हो जाए, तो रसोइया सोचता है कि किस चरण में गलती हुई और अगली बार उतना नमक नहीं डालता।',
        example: 'मॉडल जब गलत जवाब देता है, तो अपने आंतरिक सेटिंग्स को फिर से दुरुस्त करता है।'
      },
      te: {
        nativeTerm: 'బ్యాక్‌ప్రాపగేషన్ (తప్పుల సవరణ)',
        tagline: 'చేసిన తప్పు నుండి పాఠం నేర్చుకుని మెరుగుపడే పద్ధతి.',
        explanation: 'నెట్‌వర్క్ చేసిన తప్పును వెనుక వైపుకి పంపి, భవిష్యత్తులో సరైన ఫలితం వచ్చేలా అంతర్గత బరువులను మార్చే ప్రక్రియ.',
        analogy: 'పరీక్ష రాసిన తర్వాత ఫలితాలు చూసి, ఎక్కడ తప్పు జరిగిందో సరిదిద్దుకోవడం లాంటిది.',
        example: 'AI తప్పుడు సమాధానం ఇచ్చినప్పుడు తిరిగి తనను తాను సరిదిద్దుకోవడం.'
      },
      mr: {
        nativeTerm: 'बॅकप्रॉपॅगेशन (चुकांमधून सुधारणा)',
        tagline: 'चुका शोधून मागे जाऊन नेटवर्कचे सेटिंग दुरुस्त करणे.',
        explanation: 'मॉडेलने केलेल्या चुकीचे प्रमाण मोजून, मागच्या थरांकडे जाऊन वेट्स (weights) बदलण्याची अल्गोरिदम पद्धत.',
        analogy: 'क्रिकेटच्या सरावात चेंडू चुकल्यानंतर प्रशिक्षक फलंदाजाला बॅट पकडण्याची चूक दाखवून देण्यासारखे.',
        example: 'प्रतिमा ओळखण्यात चूक झाल्यावर मॉडेल स्वतःचे पॅरामीटर्स अपडेट करते.'
      },
      ta: {
        nativeTerm: 'பாக்ப்ராபகேஷன் (பிழை திருத்தம்)',
        tagline: 'செய்த தவறிலிருந்து கற்றுக்கொண்டு தன்னைத் திருத்திக் கொள்ளும் முறை.',
        explanation: 'வெளியீட்டில் ஏற்படும் பிழையை பின்னோக்கி அனுப்பி, நியூரல் நெட்வொர்க்கின் எடைகளைச் சரிசெய்யும் வழிமுறை.',
        analogy: 'வில்வித்தை வீரன் குறி தவறியதும், அடுத்த முறை அம்பை எய்யும் கோணத்தை சரிசெய்வது போல.',
        example: 'பூனை படத்தை நாய் என்று தவறாக கணித்த பின், அடுத்த முறை சரியாக கணிக்க தன்னை மாற்றிக்கொள்வது.'
      },
      ur: {
        nativeTerm: 'بیک پروپیگیشن (غلطیوں کی اصلاح)',
        tagline: 'اپنی غلطی کو پیچھے لے جا کر اندرونی پیمانوں کو درست کرنا۔',
        explanation: 'ایک ریاضیاتی عمل جس میں نیٹ ورک کے نقصانات کو پیچھے کی طرف منتقل کر کے وزن کو درست کیا جاتا ہے۔',
        analogy: 'جیسے امتحانات کے بعد استاد کی غلطیوں پر نشان دہی اور آئندہ محنت کا لائحہ عمل۔',
        example: 'جب کمپیوٹر بلی کو کتا کہہ دے تو وہ الٹے قدموں اپنی غلطی سدھارتا ہے۔'
      },
      'r-ur': {
        nativeTerm: 'Backpropagation',
        tagline: 'Ghalati se seekh kar peeche jaakar weights adjust karna.',
        explanation: 'Output error ko reverse direction mein bhej kar network ke internal parameters ko theek karne ka process.',
        analogy: 'Gari chalate waqt turn galat le liya, toh mirror dekh kar steer wapas sahi direction mein lana.',
        example: 'AI training mein har step par ghalati kam hoti jaati hai.'
      },
      hin: {
        nativeTerm: 'Backpropagation',
        tagline: 'Galti se seekhne wala reverse feedback loop.',
        explanation: 'Jab prediction galat hoti hai, toh error ko ulta trace karke weights ko adjust karte hain taaki next prediction accurate ho.',
        analogy: 'Gulab jamun kacha reh gaya? Toh agle batch mein aanch dhimi karke zyada der tak talne ka sabak seekhna.',
        example: 'Image classifier ki accuracy har epoch ke baad badhna.'
      }
    },
    relatedTerms: ['neural-network', 'weights-biases', 'loss-function']
  },
  {
    id: 'hallucination',
    term: 'Hallucination',
    category: 'Generative AI',
    level: 'Beginner',
    translations: {
      en: {
        nativeTerm: 'AI Hallucination',
        tagline: 'When an AI confidently makes up fake facts or imaginary information.',
        explanation: 'When a generative AI produces outputs that sound fluent and authoritative but are factually incorrect or fabricated.',
        analogy: 'A friend who never admits "I don\'t know" and confidently invents a fake movie plot when you ask about a film they never watched.',
        example: 'ChatGPT inventing a court case citation with real-looking lawyer names that never actually existed.'
      },
      hi: {
        nativeTerm: 'हलुसिनेशन (AI का भ्रम)',
        tagline: 'जब AI पूरे आत्मविश्वास के साथ मनगढ़ंत बातें बोल दे।',
        explanation: 'जब कोई जनरेटिव AI मॉडल ऐसे गलत तथ्य या झूठी बातें आत्मविश्वास से लिखता है जिनका वास्तविकता से कोई लेना-देना नहीं होता।',
        analogy: 'वह दोस्त जो कभी "मुझे नहीं पता" नहीं कहता, बल्कि अनजान विषय पर भी पूरा किस्सा खुद गढ़ देता है!',
        example: 'AI द्वारा ऐसी ऐतिहासिक किताब का हवाला देना जो कभी लिखी ही नहीं गई।'
      },
      te: {
        nativeTerm: 'హాలూసినేషన్ (భ్రమ/తప్పుడు సృష్టి)',
        tagline: 'AI పూర్తి ఆత్మవిశ్వాసంతో కల్పిత విషయాలను నిజంలా చెప్పడం.',
        explanation: 'నిజం కాని విషయాలను లేదా లేని సమాచారాన్ని AI ఎంతో నిజాయితీగా సృష్టించి చెప్పే పరిస్థితి.',
        analogy: 'ఏ విషయం అడిగినా "నాకు తెలియదు" అనకుండా సొంత కథలు అల్లే స్నేహితుడి లాంటిది.',
        example: 'లేని సినిమా గురించి కథ మొత్తం నిజంలా చెప్పడం.'
      },
      mr: {
        nativeTerm: 'हॅल्युसिनेशन (AI चा भ्रम)',
        tagline: 'AI ने अत्यंत आत्मविश्वासाने खोटी माहिती खरी म्हणून सांगणे.',
        explanation: 'जेव्हा AI कल्पनाविलास करून चुकीची तथ्ये तयार करते आणि ती पूर्ण खात्रीने समोर मांडते.',
        analogy: 'एखादा माणूस माहिती नसलेल्या रस्त्याचा पत्ता विचारल्यावर स्वतःच खोटा रस्ता ठामपणे सांगतो तसे.',
        example: 'कधीही अस्तित्वात नसलेल्या वैज्ञानिकाचे नाव सांगणे.'
      },
      ta: {
        nativeTerm: 'ஹாலூசினேஷன் (போலி கற்பனை)',
        tagline: 'AI முழு நம்பிக்கையுடன் கற்பனையான தவறான தகவல்களைக் கூறுவது.',
        explanation: 'உண்மையில் இல்லாத அல்லது தவறான தகவல்களை AI மிகுந்த உறுதியுடன் விடையாக அளிக்கும் நிலை.',
        analogy: 'விடை தெரியாவிட்டாலும் தெரியாது என்று சொல்லாமல், சுயமாக ஒரு கதையை அவிழ்த்துவிடும் நபர் போல.',
        example: 'நடைபெறாத ஒரு வரலாற்று நிகழ்வை உண்மையென விவரிப்பது.'
      },
      ur: {
        nativeTerm: 'فریبِ نظر (Hallucination)',
        tagline: 'جب AI اعتماد کے ساتھ من گھڑت کہانیاں یا غلط معلومات سنائے۔',
        explanation: 'جب کوئی لارج لینگویج ماڈل ایسے حقائق پیش کرے جو سننے میں سچے لگیں لیکن حقیقت میں من گھڑت ہوں۔',
        analogy: 'وہ دوست جو کبھی یہ اعتراف نہ کرے کہ مجھے علم نہیں، بلکہ خود سے فرضی قصہ گھڑ لے۔',
        example: 'ایسی کتاب کا حوالہ دینا جو کبھی لکھی ہی نہ گئی ہو۔'
      },
      'r-ur': {
        nativeTerm: 'AI Hallucination',
        tagline: 'Jab AI full confidence ke sath jhooti baatein banye.',
        explanation: 'Aisi situation jab AI model poore yakeen ke sath fake facts produce karta hai jo haqeeqat mein exist nahi karte.',
        analogy: 'Wo dost jo shaam ki mehfil mein gappein maar kar sab ko convince kar leta hai.',
        example: 'Aise court case ka zikr karna jo kabhi hua hi na ho.'
      },
      hin: {
        nativeTerm: 'AI Hallucination (Hawa mein phenkna)',
        tagline: 'Full confidence ke sath galat facts phenkna.',
        explanation: 'Jab AI galat info ko bilkul sach aur authoritative tone mein present karta hai bina sachai check kiye.',
        analogy: 'Exam hall mein answer nahi aata par page bharne ke liye hero ban kar kahani likh aana.',
        example: 'AI kisi fake scientist ka naam aur invented award bata de.'
      }
    },
    relatedTerms: ['llm', 'rag', 'prompt', 'grounding']
  },
  {
    id: 'rag',
    term: 'RAG (Retrieval-Augmented Generation)',
    category: 'Generative AI',
    level: 'Intermediate',
    translations: {
      en: {
        nativeTerm: 'RAG (Retrieval-Augmented Generation)',
        tagline: 'An open-book exam for AI: it looks up your documents before answering.',
        explanation: 'A technique that combines an external search/database retrieval with an LLM, ensuring the AI bases answers on verified factual documents.',
        analogy: 'An open-book examination: instead of relying on memory alone, the student flips open the course syllabus to find the exact formula.',
        example: 'A company bot reading your 500-page internal HR policy PDF and answering maternity leave questions accurately.'
      },
      hi: {
        nativeTerm: 'आर.ए.जी. (RAG - दस्तावेज़ खोज आधारित निर्माण)',
        tagline: 'AI की ओपन-बुक परीक्षा: जवाब देने से पहले आपके दस्तावेज़ पढ़ता है।',
        explanation: 'ऐसी तकनीक जो AI को जवाब देने से पहले आपकी कंपनी की फाइलों या डेटाबेस में सही जानकारी खोजने और फिर उत्तर देने की शक्ति देती है।',
        analogy: 'जैसे ओपन बुक परीक्षा: याददाश्त पर भरोसा करने के बजाय किताब खोलकर सटीक पन्ने से जवाब देखना।',
        example: 'कंपनी के 200 पन्नों के नियम पुस्तिका से आपकी छुट्टियों का सही नियम बताना।'
      },
      te: {
        nativeTerm: 'RAG (రిట్రీవల్-ఆగ్మెంటెడ్ జనరేషన్)',
        tagline: 'AI కి ఓపెన్ బుక్ ఎగ్జామ్ లాంటిది: సమాధానం ఇచ్చే ముందు సమాచారాన్ని వెతుకుతుంది.',
        explanation: 'బాహ్య డేటాబేస్ నుండి ఖచ్చితమైన సమాచారాన్ని వెతికి, దాని ఆధారంగా AI ద్వారా ఖచ్చితమైన సమాధానాలు రూపొందించే సాంకేతికత.',
        analogy: 'గుర్తుంచుకున్న దానిపై కాకుండా, పుస్తకం తెరిచి చూసి సమాధానం రాయడం లాంటిది.',
        example: 'ఆసుపత్రి రికార్డులను పరిశీలించి రోగి వివరాలను విశ్లేషించడం.'
      },
      mr: {
        nativeTerm: 'आर.ए.जी. (RAG तंत्रज्ञान)',
        tagline: 'ओपन-बुक परीक्षेसारखे: उत्तर देण्यापूर्वी तुमचे दस्तऐवज शोधून वाचणे.',
        explanation: 'LLM ला तुमच्या स्वतःच्या फाईल्स आणि डेटाबेसशी जोडून अचूक, विश्वासार्ह उत्तरे मिळवण्याची आधुनिक पद्धत.',
        analogy: 'केवळ आठवणीवर अवलंबून न राहता समोर ठेवलेले पुस्तक उघडून अचूक संदर्भ शोधण्यासारखे.',
        example: 'सरकारी जीआर (GR) वाचून नागरिकांना सोप्या भाषेत नियमांची उत्तरे देणे.'
      },
      ta: {
        nativeTerm: 'RAG (ஆவண தேடல் சார்ந்த உருவாக்கம்)',
        tagline: 'AI-க்கான திறந்த புத்தகத் தேர்வு: பதிலளிக்கும் முன் ஆவணங்களைத் தேடிப் படிக்கும்.',
        explanation: 'வெளிப்புற ஆவணங்களிலிருந்து துல்லியமான தகவல்களை மீட்டெடுத்து, அதன் அடிப்படையில் AI-யை பதிலளிக்க வைக்கும் நுட்பம்.',
        analogy: 'மனப்பாடம் செய்து எழுதாமல், கையில் உள்ள புத்தகத்தைப் பார்த்து சரியான விடையை எழுதுவது போன்றது.',
        example: 'நிறுவனத்தின் கொள்கை ஆவணங்களைப் படித்து ஊழியர்களின் கேள்விகளுக்கு பதிலளிப்பது.'
      },
      ur: {
        nativeTerm: 'آر اے جی (RAG - دستاویزات پر مبنی جواب)',
        tagline: 'اوپن بک امتحان: جواب دینے سے پہلے متعلقہ دستاویزات تلاش کرنا۔',
        explanation: 'ایک جدید طریقہ جس میں AI کسی بیرونی ڈیٹا بیس سے حقائق ڈھونڈ کر لاتا ہے اور پھر ان کی بنیاد پر جواب تیار کرتا ہے۔',
        analogy: 'جیسے کوئی وکیل عدالت میں بحث سے پہلے قانون کی متعلقہ کتاب کھول کر دفعہ چیک کرے۔',
        example: 'کمپنی کی پی ڈی ایف فائلوں کو پڑھ کر ملازمین کے سوالات کا حل بتانا۔'
      },
      'r-ur': {
        nativeTerm: 'RAG',
        tagline: 'Open book exam: pehle documents check karta hai, phir answer deta hai.',
        explanation: 'Technique jahan LLM external database ya documents se info nikal kar factual response banata hai.',
        analogy: 'Open book test: memory par bharosa karne ke bajaye kitaab se confirm karke answer likhna.',
        example: 'Office manual PDF padh kar policies explain karna.'
      },
      hin: {
        nativeTerm: 'RAG (Open-Book AI)',
        tagline: 'Pehle documents padho, fir accurate jawab do.',
        explanation: 'LLM ko external documents aur database se connect karna taaki hallucination na ho aur fact-checked answers milein.',
        analogy: 'Chits ya textbook khol kar exam likhna - zero jhoot, 100% verified facts!',
        example: 'Aapki college syllabus PDF upload karke questions puchna.'
      }
    },
    relatedTerms: ['llm', 'hallucination', 'embeddings', 'vector-database']
  },
  {
    id: 'embeddings',
    term: 'Embeddings & Vectors',
    category: 'NLP',
    level: 'Intermediate',
    translations: {
      en: {
        nativeTerm: 'Embeddings (Vector Representations)',
        tagline: 'Converting words, images, or ideas into numbers where similar meanings sit close together.',
        explanation: 'A technique of representing words or concepts as dense numerical vectors in a multi-dimensional space, capturing semantic relationships.',
        analogy: 'A spice shelf organized by taste: sweet spices (cinnamon, clove) sit together, hot spices (chili, pepper) sit in another corner.',
        example: 'The model understands "King" - "Man" + "Woman" = "Queen" through mathematical coordinates.'
      },
      hi: {
        nativeTerm: 'एम्बेडिंग्स (संख्याओं में अर्थ)',
        tagline: 'शब्दों और विचारों को संख्याओं के नक्शे पर इस तरह बैठाना कि मिलते-जुलते अर्थ पास रहें।',
        explanation: 'शब्दों, वाक्यों या चित्रों को गणितीय संख्याओं (वेक्टर) में बदलना जिससे कंप्यूटर उनके अर्थ और संबंध समझ सके।',
        analogy: 'मसालों की रैक: मीठे मसाले (इलायची, दालचीनी) एक साथ, तीखे मसाले (मिर्च, कालीमिर्च) एक तरफ।',
        example: '"राजा" और "रानी" का फासला वही है जो "आदमी" और "औरत" का है।'
      },
      te: {
        nativeTerm: 'ఎంబెడ్డింగ్స్ (వెక్టర్ ప్రాతినిధ్యం)',
        tagline: 'పదాలను సంఖ్యలుగా మార్చి, సమాన అర్థాలు కలవాటిని దగ్గరగా ఉంచే పద్ధతి.',
        explanation: 'కంప్యూటర్లకు పదాల అర్థాలు అర్థమయ్యేలా వాటిని సంఖ్యాత్మక వెక్టర్స్‌గా మార్చే ప్రక్రియ.',
        analogy: 'సూపర్‌మార్కెట్‌లో ఒకే రకమైన వస్తువులను ఒకే అరలో అమర్చినట్లు.',
        example: '"టీ" మరియు "కాఫీ" ఒకే రకమైన సంఖ్యా స్థానంలో ఉండటం.'
      },
      mr: {
        nativeTerm: 'एम्बेडिंग्स (अंकांमधील अर्थ)',
        tagline: 'शब्दांना अशा संख्यांमध्ये रूपांतरित करणे ज्यामुळे समान अर्थ असणारे शब्द जवळ येतात.',
        explanation: 'भाषा कम्प्युटरला समजण्यासाठी शब्दांना गणिताच्या भूमितीय अवकाशात (vectors) स्थान देणे.',
        analogy: 'किराणा दुकानात गोड पदार्थ एका कप्प्यात आणि तिखट मसाले दुसऱ्या कप्प्यात ठेवण्यासारखे.',
        example: '"सूर्य" आणि "उजेड" यांच्यातील जवळीक गणितात मोजणे.'
      },
      ta: {
        nativeTerm: 'எம்படிங்ஸ் (திசையன் பிரதிநிதித்துவம்)',
        tagline: 'சொற்களை எண்களாக மாற்றி, ஒத்த அர்த்தமுள்ளவற்றை அருகருகே வைக்கும் முறை.',
        explanation: 'சொற்கள் மற்றும் கருத்துக்களை பல பரிமாண எண் திசையன்களாக மாற்றி அவற்றின் பொருளைக் கணிக்கும் முறை.',
        analogy: 'மளிகைக் கடையில் காரப் பொருட்கள் ஒரு பக்கமும் இனிப்புப் பொருட்கள் ஒரு பக்கமும் அடுக்கி வைப்பது போல.',
        example: '"ராஜா" மற்றும் "ராணி" ஆகிய சொற்களின் பொருள் தொடர்பைக் கணிப்பது.'
      },
      ur: {
        nativeTerm: 'ایمبیڈنگز (عددی مفہوم)',
        tagline: 'الفاظ کو نمبروں کے ایسے نقشے پر رکھنا جہاں ہم معنی الفاظ قریب ہوں۔',
        explanation: 'الفاظ یا خیالات کو کثیر الجہتی اعداد (ویکٹرز) میں تبدیل کرنا تاکہ کمپیوٹر ان کے مفہوم کو سمجھ سکے۔',
        analogy: 'مصالحہ جات کا ڈبہ: میٹھے مصالحے ایک طرف، اور تیز مصالحے دوسری طرف ایک ساتھ رکھے ہوں۔',
        example: '"چائے" اور "کافی" کے درمیان تعلق کو اعداد کی صورت ناپنا۔'
      },
      'r-ur': {
        nativeTerm: 'Embeddings',
        tagline: 'Words ko numbers mein badalna jahan milte-julte lafz qareeb baithein.',
        explanation: 'Text ya concepts ko vector space mein numbers ki form mein store karna taake computer semantics samajh sake.',
        analogy: 'Library mein sections: science fiction ki saari books ek jagah, poetry ki doosri jagah.',
        example: '"Chai" aur "Biscuit" vector space mein paas paas hote hain.'
      },
      hin: {
        nativeTerm: 'Embeddings (Maths of Meaning)',
        tagline: 'Words ko numbers ke coordinates dena jahan similar cheezein paas rehti hain.',
        explanation: 'Har word ya image ko ek multi-dimensional number vector mein convert karna jisse semantic meaning preserve rahe.',
        analogy: 'Spotify playlist grouping: Arijit Singh ke sad songs ek corner mein, Punjabi party tracks doosre corner mein!',
        example: '"Biryani" aur "Pulao" vectors will be super close to each other.'
      }
    },
    relatedTerms: ['rag', 'transformer', 'token']
  },
  {
    id: 'overfitting',
    term: 'Overfitting',
    category: 'Fundamentals',
    level: 'Beginner',
    translations: {
      en: {
        nativeTerm: 'Overfitting (Rote Memorization)',
        tagline: 'When AI memorizes training data by heart instead of actually understanding concepts.',
        explanation: 'When a machine learning model learns the training data and noise so closely that it fails to generalize to fresh, unseen data.',
        analogy: 'A student who crams the exact question numbers from past papers; changes "5 + 3" to "5 + 4" on the exam and gets stuck.',
        example: 'A loan approval model that works 100% on old customers but fails completely on new applicants.'
      },
      hi: {
        nativeTerm: 'ओवरफिटिंग (रट्टा मारना)',
        tagline: 'जब AI केवल रट्टा मार लेता है लेकिन नए सवालों पर फेल हो जाता है।',
        explanation: 'जब कोई मॉडल पुराने डेटा के हर छोटे-बड़े शोर (noise) को याद कर लेता है, लेकिन असली दुनिया के नए डेटा पर सही काम नहीं कर पाता।',
        analogy: 'वह छात्र जो पुरानी परीक्षा के सवालों के उत्तर रट लेता है, लेकिन परीक्षा में संख्या बदलते ही जवाब नहीं दे पाता।',
        example: 'पुराने 1000 मरीजों पर 100% सही बीमारी बताना, लेकिन नए मरीज पर गलत साबित होना।'
      },
      te: {
        nativeTerm: 'ఓవర్‌ఫిట్టింగ్ (బట్టీ పట్టడం)',
        tagline: 'అర్థం చేసుకోకుండా కేవలం పాత డేటాను బట్టీ పట్టడం.',
        explanation: 'శిక్షణ డేటాను అతిగా గుర్తుంచుకుని, కొత్త డేటా వచ్చినప్పుడు సరిగ్గా పనిచేయకపోవడం.',
        analogy: 'లెక్కలను అర్థం చేసుకోకుండా కేవలం పుస్తకంలోని సంఖ్యలను బట్టీ పట్టిన విద్యార్థి లాంటిది.',
        example: 'శిక్షణలో 100% స్కోర్ సాధించి, నిజ జీవితంలో విఫలమయ్యే మోడల్.'
      },
      mr: {
        nativeTerm: 'ओव्हरफिटिंग (पाठांतर करणे)',
        tagline: 'संकल्पना न समजता फक्त जुन्या माहितीचे रट्टा मारणे.',
        explanation: 'मॉडेल जुना डेटा इतका तंतोतंत पाठ करते की नवीन डेटा आल्यावर त्याचा अंदाज पूर्णपणे चुकतो.',
        analogy: 'गणिताचे सूत्र न समजता पुस्तकातील उदाहरणे पाठ करणारा विद्यार्थी, परीक्षेत आकडे बदलले की गोंधळतो.',
        example: 'जुन्या ग्राहकांवर चालणारे पण नवीन ग्राहकांसाठी निरुपयोगी ठरणारे मॉडेल.'
      },
      ta: {
        nativeTerm: 'ஓவர்ஃபிட்டிங் (மனப்பாடம் செய்தல்)',
        tagline: 'புரிந்து கொள்ளாமல் பழைய தரவுகளை அப்படியே மனப்பாடம் செய்வது.',
        explanation: 'பயிற்சி தரவுகளை மட்டுமே முழுமையாக மனப்பாடம் செய்து, புதிய தரவுகளில் தவறான முடிவுகளைத் தரும் நிலை.',
        analogy: 'பரீட்சைக்காக கேள்விகளை மனப்பாடம் செய்துவிட்டு, கேள்வி சற்று மாற்றிக் கேட்கப்பட்டதும் விடை தெரியாமல் முழிப்பது போல.',
        example: 'பயிற்சியில் 100% வெற்றி பெற்று, நிஜ பயன்பாட்டில் தோல்வியடையும் மாதிரி.'
      },
      ur: {
        nativeTerm: 'اوور فِٹنگ (رٹہ بازی)',
        tagline: 'سمجھنے کے بجائے پرانے ڈیٹا کو زبانی رٹ لینا۔',
        explanation: 'جب ماڈل تربیت کے دوران دیے گئے ڈیٹا کے ہر معمولی نقطے کو رٹ لے لیکن نئے ڈیٹا پر ناکام ہو جائے۔',
        analogy: 'وہ طالب علم جو پچھلے سال کے پرچے رٹ کر جائے، امتحان میں معمولی تبدیلی پر فیل ہو جائے۔',
        example: 'ماڈل کا ٹریننگ میں تو 99 فیصد اسکور کرنا لیکن نئے کسٹمر پر غلط ثابت ہونا۔'
      },
      'r-ur': {
        nativeTerm: 'Overfitting',
        tagline: 'Concept samajhne ke bajaye data ka ratta marna.',
        explanation: 'Model training data ko itna pakka yaad kar leta hai ke jab naya data aata hai toh fail ho jata hai.',
        analogy: 'Student jo math ke sawaal ka step ratta maar le, exam mein values badal jayein toh zero marks!',
        example: 'Training score 99% but test score only 50%.'
      },
      hin: {
        nativeTerm: 'Overfitting (Ratta Maar AI)',
        tagline: 'Concept samjha nahi, pura training data ratta maar liya.',
        explanation: 'Model training set ko perfectly memorise kar leta hai, par out-of-syllabus naye questions aate hi fail ho jata hai.',
        analogy: '3 Idiots ka Chatur: "Chamatkar" ko "Balatkar" bol gaya kyunki ratta mara tha, meaning nahi samjha tha!',
        example: 'Purane sample par 100% accuracy par live users par blunder.'
      }
    },
    relatedTerms: ['loss-function', 'weights-biases', 'neural-network']
  },
  {
    id: 'transformer',
    term: 'Transformer Architecture',
    category: 'Generative AI',
    level: 'Advanced',
    translations: {
      en: {
        nativeTerm: 'Transformer Architecture',
        tagline: 'The revolutionary AI design with "Self-Attention" that made ChatGPT possible.',
        explanation: 'A deep learning architecture introduced in 2017 that processes whole sentences simultaneously using attention mechanisms to weigh relationships between all words.',
        analogy: 'A master film director watching all actors across the stage at the exact same moment rather than looking at them one by one through a tiny keyhole.',
        example: 'Understanding whether "bank" in "river bank" means money or soil by paying attention to surrounding words.'
      },
      hi: {
        nativeTerm: 'ट्रांसफॉर्मर आर्किटेक्चर',
        tagline: 'क्रांतिकारी AI ढांचा जिसने पूरी दुनिया में चैटबॉट्स की क्रांति ला दी।',
        explanation: '2017 में खोजी गई तकनीक जो पूरे वाक्य के सभी शब्दों को एक साथ देखती है और "अटेंशन" के जरिए उनके आपसी संबंधों को तुरंत भांप लेती है।',
        analogy: 'एक निर्देशक जो मंच पर सभी कलाकारों के हाव-भाव एक साथ देखता है, बजाय एक-एक करके देखने के।',
        example: '"नदी का किनारा" और "बैंक खाता" में \'किनारा\' या \'बैंक\' का सही अर्थ पकड़ना।'
      },
      te: {
        nativeTerm: 'ట్రాన్స్‌ఫార్మర్ ఆర్కిటెక్చర్',
        tagline: 'ChatGPT వంటి ఆధునిక AI ని సాధ్యం చేసిన అద్భుతమైన సాంకేతిక డిజైన్.',
        explanation: 'వాక్యంలోని అన్ని పదాలను ఒకేసారి పరిశీలిస్తూ వాటి మధ్య సంబంధాలను విశ్లేషించే "సెల్ఫ్-అటెన్షన్" ఆధారిత మోడల్.',
        analogy: 'ఒక చిత్రకారుడు కాన్వాస్ మొత్తాన్ని ఒకేసారి చూస్తూ రంగులు వేయడం లాంటిది.',
        example: 'భాషల అనువాదంలో పదాల సందర్భాన్ని ఖచ్చితంగా గుర్తించడం.'
      },
      mr: {
        nativeTerm: 'ट्रान्सफॉर्मर आर्किटेक्चर',
        tagline: 'ज्या तंत्रज्ञानाने आधुनिक AI क्रांती घडवली ते क्रांतिकारी मॉडेल.',
        explanation: 'वाक्यातील सर्व शब्दांवर एकाच वेळी लक्ष (Self-Attention) ठेवून अर्थाचा संदर्भ समजून घेणारा अल्गोरिदम.',
        analogy: 'संगीत दिग्दर्शक वाद्यवृंदातील प्रत्येक वाद्याचा सूर एकाच वेळी ऐकण्यासारखे.',
        example: 'मराठीतून इंग्रजीत संदर्भ न गमावता अचूक भाषांतर करणे.'
      },
      ta: {
        nativeTerm: 'டிரான்ஸ்பார்மர் கட்டமைப்பு',
        tagline: 'நவீன ஜெனரேட்டிவ் AI-க்கு அடித்தளமாக விளங்கும் புரட்சிகர வடிவமைப்பு.',
        explanation: 'ஒரு வாக்கியத்தின் அனைத்து சொற்களையும் ஒரே நேரத்தில் கவனித்து, அவற்றின் தொடர்பைப் புரிந்து கொள்ளும் கவன ஈர்ப்பு (Self-Attention) முறை.',
        analogy: 'மேடையில் உள்ள அனைத்து நடிகர்களின் அசைவுகளையும் ஒரே பார்வையில் கவனிக்கும் நாடக இயக்குநர் போல.',
        example: 'சொற்களின் சூழலைப் புரிந்து கொண்டு துல்லியமாக மொழிபெயர்ப்பது.'
      },
      ur: {
        nativeTerm: 'ٹرانسفارمر آرکیٹیکچر',
        tagline: 'وہ انقلابی ڈیزائن جس نے جدید چیٹ بوٹس کو ممکن بنایا۔',
        explanation: 'ایک جدید نیورل نیٹ ورک جو پورے جملے کو بیک وقت دیکھتا ہے اور "سیلف اٹینشن" کے ذریعے تمام الفاظ کا باہمی تعلق سمجھتا ہے۔',
        analogy: 'جیسے کوئی تجربہ کار ڈائریکٹر جو اسٹیج پر موجود تمام فنکاروں پر ایک ساتھ نظر رکھے۔',
        example: 'مختلف زبانوں میں جملے کا اصل مفہوم سمجھے بغیر ترجمہ نہ کرنا۔'
      },
      'r-ur': {
        nativeTerm: 'Transformer Architecture',
        tagline: 'Wo revolutionary architecture jisne modern GenAI banaya.',
        explanation: 'Deep learning architecture jo pure sentence ko ek sath process karta hai Self-Attention mechanism ke zariye.',
        analogy: 'Cricket captain jo boundary par saare fielders ki position ek nazar mein dekh kar adjust karta hai.',
        example: 'Sentence ke contextual meanings ko accurate samajhna.'
      },
      hin: {
        nativeTerm: 'Transformer (AI ka Bahubali Engine)',
        tagline: 'Self-Attention wala backbone jisse ChatGPT aur Gemini bane hain.',
        explanation: '2017 mein aaya ye architecture jo poore sentence ko parallelly padhta hai aur har word ka doosre word ke sath relation measure karta hai.',
        analogy: 'Drone camera view: poor stadium ko ek frame mein dekhna, na ki ek-ek spectator ko binoculars se dekhna!',
        example: '"Bat" ka matlab cricket bat hai ya chamgadad, ye aas-paas ke words dekh ke instantly samajhna.'
      }
    },
    relatedTerms: ['llm', 'token', 'embeddings']
  },
  {
    id: 'token',
    term: 'Tokens & Tokenization',
    category: 'NLP',
    level: 'Beginner',
    translations: {
      en: {
        nativeTerm: 'Tokens (AI Building Blocks)',
        tagline: 'The bite-sized word chunks that an AI reads and writes.',
        explanation: 'Tokens are the basic units of text (roughly 3-4 letters or part of a word) that an AI breaks text into before processing.',
        analogy: 'Lego bricks or puzzle pieces: a word like "unbreakable" is cut into 3 bricks: "un", "break", and "able".',
        example: 'The prompt "Namaste India" is broken into tokens like ["Nam", "aste", " India"].'
      },
      hi: {
        nativeTerm: 'टोकन (शब्दों के टुकड़े)',
        tagline: 'शब्दों के वे छोटे हिस्से जिन्हें AI एक-एक करके पढ़ता और समझता है।',
        explanation: 'कंप्यूटर किसी वाक्य को सीधे नहीं पढ़ता, बल्कि उसे छोटे-छोटे टुकड़ों (Tokens) में तोड़ता है, जो अक्षर या आधे शब्द हो सकते हैं।',
        analogy: 'जैसे बच्चों के बिल्डिंग ब्लॉक: "अनहोनी" शब्द को तीन ब्लॉकों में बांटना: "अन", "हो", "नी"।',
        example: '"भारत महान है" को AI अलग-अलग 3-4 टोकन के रूप में संसाधित करता है।'
      },
      te: {
        nativeTerm: 'టోకెన్ (పద శకలాలు)',
        tagline: 'AI చదవడానికి వీలుగా పదాలను విభజించే చిన్న భాగాలు.',
        explanation: 'వాక్యాలను ప్రాసెస్ చేయడానికి AI వాటిని చిన్న చిన్న అక్షరాల సముదాయాలుగా (టోకెన్లు) విడగొడుతుంది.',
        analogy: 'లెగో బొమ్మల ముక్కలు: ఒక పెద్ద బొమ్మను నిర్మించడానికి ఉపయోగించే చిన్న ముక్కల లాంటివి.',
        example: 'ఒక వాక్యాన్ని AI చిన్న చిన్న భాగాలుగా మార్చుకోవడం.'
      },
      mr: {
        nativeTerm: 'टोकन (शब्दांचे तुकडे)',
        tagline: 'AI वाचू शकेल अशा स्वरूपात शब्दांचे केलेले लहान तुकडे.',
        explanation: 'वाक्याचे विश्लेषण करण्यासाठी AI शब्दांचे ३-४ अक्षरांचे लहान तुकडे करते, ज्यांना टोकन म्हणतात.',
        analogy: 'जिगसॉ पझलचे तुकडे: अनेक तुकडे जोडून एक संपूर्ण चित्र तयार होते.',
        example: '"महाराष्ट्र" हा शब्द AI साठी २-३ टोकन्समध्ये विभागला जातो.'
      },
      ta: {
        nativeTerm: 'டோக்கன் (சொல் துண்டுகள்)',
        tagline: 'AI எளிதாகப் புரிந்துகொள்ளும் வகையில் சொற்களைப் பிரிக்கும் சிறு பகுதிகள்.',
        explanation: 'உரையை பகுப்பாய்வு செய்ய AI சொற்களை சிறிய எழுத்துக் குழுக்களாகப் பிரிக்கிறது, இவை டோக்கன்கள் எனப்படும்.',
        analogy: 'லெகோ (Lego) செங்கற்கள் போன்றது: சிறிய கட்டைகளை இணைத்து பெரிய கட்டடத்தை உருவாக்குவது போல.',
        example: 'ஒரு நீண்ட சொல்லை 2 அல்லது 3 டோக்கன்களாகப் பிரித்து புரிந்துகொள்ளுதல்.'
      },
      ur: {
        nativeTerm: 'ٹوکن (الفاظ کے ٹکڑے)',
        tagline: 'وہ چھوٹے ٹکڑے جن میں AI الفاظ کو توڑ کر پڑھتا ہے۔',
        explanation: 'کمپیوٹر جملوں کو سمجھنے کے لیے انہیں ۳-۴ حروف کے چھوٹے حصوں یعنی ٹوکنز میں تقسیم کرتا ہے۔',
        analogy: 'جیسے بچوں کے کھیلنے والے بلاکس جنہیں ملا کر نیا کھلونا بنتا ہے۔',
        example: 'ایک لفظ کو مختلف حصوں میں توڑ کر پروسیس کرنا۔'
      },
      'r-ur': {
        nativeTerm: 'Tokenization',
        tagline: 'Text ko chote tukdon mein baantna taake AI samajh sake.',
        explanation: 'Words ko 3-4 characters ke chunks mein divide karna for language processing.',
        analogy: 'Pizza ki slices: pura pizza ek sath nahi kha sakte, slices mein baantna parta hai.',
        example: '1000 words is roughly 1300 tokens in AI calculations.'
      },
      hin: {
        nativeTerm: 'Tokens (AI ke Bite-sized Tukde)',
        tagline: 'Lego bricks jismein AI kisi bhi text ko tod kar padhta hai.',
        explanation: 'Text ke chote pieces (roughly 0.75 words) jismein model text ko divide karke process karta hai.',
        analogy: 'Laddoo ke boondi daane: boondi-boondi milakar motichoor ka laddoo banta hai!',
        example: '1 rupee mein lagbhag 1000 AI tokens process ho sakte hain.'
      }
    },
    relatedTerms: ['llm', 'transformer', 'prompt']
  },
  {
    id: 'weights-biases',
    term: 'Weights & Biases',
    category: 'Neural Networks',
    level: 'Intermediate',
    translations: {
      en: {
        nativeTerm: 'Weights & Biases',
        tagline: 'The millions of adjustable dials and tuning knobs inside an AI.',
        explanation: 'Weights determine the strength of connections between nodes, while biases shift the activation threshold to fit the data better.',
        analogy: 'An audio mixer board at a music concert: the sound engineer slides volume faders up and down until the music sounds harmonious.',
        example: 'Giving higher weight to "fever" and "cough" than "sneezing" when predicting viral infection.'
      },
      hi: {
        nativeTerm: 'वेट्स और बायस (नियंत्रण घुंडियां)',
        tagline: 'AI के दिमाग के अंदर के लाखों ट्यूनिंग नॉब्स जो नतीजे तय करते हैं।',
        explanation: 'वेट्स तय करते हैं कि कौन सा इनपुट कितना महत्वपूर्ण है, और बायस तय करता है कि फैसला लेने के लिए न्यूनतम सीमा क्या होगी।',
        analogy: 'म्यूजिक कॉन्सर्ट का मिक्सर बोर्ड: जहां साउंड इंजीनियर अलग-अलग गिटार और माइक की आवाज के नॉब घुमाकर सही धुन सेट करता है।',
        example: 'सब्जी में स्वाद के लिए नमक के वजन को हल्दी से ज्यादा प्राथमिकता देना।'
      },
      te: {
        nativeTerm: 'వెయిట్స్ & బయాస్ (సర్దుబాటు గుండీలు)',
        tagline: 'AI లోపల ఉండే లక్షలాది సర్దుబాటు నాబ్‌లు.',
        explanation: 'ఏ ఇన్పుట్ ఎంత ముఖ్యమైనదో వెయిట్స్ నిర్ణయిస్తే, ఫలితాన్ని సరిచేయడానికి బయాస్ సహాయపడుతుంది.',
        analogy: 'సంగీత పరికరాల సౌండ్ బాక్స్‌లో బాస్, ట్రెబుల్ నాబ్‌లను సరిచేయడం లాంటిది.',
        example: 'వాతావరణ సూచనలో ఉష్ణోగ్రతకు ఎక్కువ ప్రాధాన్యత ఇవ్వడం.'
      },
      mr: {
        nativeTerm: 'वेट्स आणि बायस',
        tagline: 'AI मॉडेलमधील लाखो अंतर्गत ट्यूनिंग बटणे.',
        explanation: 'वेट्स हे दोन नोड्समधील संबंधांची ताकद दर्शवतात, तर बायस योग्य निर्णय घेण्यासाठी आधारभूत पातळी ठरवतो.',
        analogy: 'रेडिओचे ट्यूनर: योग्य स्टेशन पकडण्यासाठी नॉब हळूहळू फिरवून आवाज स्वच्छ करण्यासारखे.',
        example: 'परीक्षेच्या निकालाचा अंदाज बांधताना अभ्यासाच्या वेळेला जास्त महत्त्व देणे.'
      },
      ta: {
        nativeTerm: 'எடைகள் மற்றும் சார்புகள் (Weights & Biases)',
        tagline: 'AI-க்குள் இருக்கும் சரிசெய்யக்கூடிய லட்சக்கணக்கான திருகு அமைப்புகள்.',
        explanation: 'நியூரான்களுக்கு இடையேயான இணைப்பின் வலிமையை எடைகளும் (Weights), முடிவெடுக்கும் தொடக்கப் புள்ளியை சார்புகளும் (Biases) தீர்மானிக்கின்றன.',
        analogy: 'இசை நிகழ்ச்சியில் ஒலியை சீரமைக்க ஆடியோ மிக்சர் நாப்களை (Knobs) திருப்புவது போல.',
        example: 'நோய் கண்டறிதலில் காய்ச்சலுக்கு அதிக முக்கியத்துவம் கொடுப்பது.'
      },
      ur: {
        nativeTerm: 'وزن اور جھکاؤ (Weights & Biases)',
        tagline: 'AI کے اندرونی اسپیڈ ریگولیٹر جنہیں درست فیصلے کے لیے گھمایا جاتا ہے۔',
        explanation: 'نوڈز کے درمیان رابطے کی مضبوطی کا تعین وزن کرتا ہے اور بائیس حتمی نتیجے کو درست سمت دیتا ہے۔',
        analogy: 'ساؤنڈ سسٹم کے والیوم اور بیس کے کنٹرولز جنہیں گھما کر بہترین آواز حاصل کی جاتی ہے۔',
        example: 'کریڈٹ کارڈ فراڈ پکڑنے کے لیے مشکوک جگہ کو زیادہ وزن دینا۔'
      },
      'r-ur': {
        nativeTerm: 'Weights & Biases',
        tagline: 'AI ke internal volume knobs jo model ki understanding control karte hain.',
        explanation: 'Parameters jo training ke dauraan modify hote hain taake prediction accurate ho sake.',
        analogy: 'Radio tuning dial: jab tak clear awaaz na aaye, thoda ghoomate raho.',
        example: '70 billion parameters ka matlab 70 billion adjustable knobs!'
      },
      hin: {
        nativeTerm: 'Weights & Biases (Tuning Knobs)',
        tagline: 'Model ke andar ki laakhon setting knobs.',
        explanation: 'Weights decide karte hain kaunsa signal kitna strong hai, aur bias output ko shift karta hai threshold cross karne ke liye.',
        analogy: 'Sound mixer ke sliders: Bass badhana, treble ghatana jab tak gaana superhit na baje!',
        example: 'Cricket team selection: player ke recent form ko zyada weight dena.'
      }
    },
    relatedTerms: ['neural-network', 'backpropagation', 'loss-function']
  }
];
