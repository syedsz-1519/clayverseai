import { QuizQuestion } from '../types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
    question: {
      en: 'What is the main difference between traditional programming and Machine Learning?',
      hi: 'पारंपरिक प्रोग्रामिंग और मशीन लर्निंग में मुख्य अंतर क्या है?',
      te: 'సాంప్రదాయ ప్రోగ్రామింగ్ మరియు మెషిన్ లెర్నింగ్ మధ్య ప్రధాన తేడా ఏమిటి?',
      mr: 'पारंपरिक कोडिंग आणि मशीन लर्निंग मधील मुख्य फरक काय?',
      ta: 'வழக்கமான நிரலாக்கத்திற்கும் மெஷின் லேர்னிங்கிற்கும் என்ன வித்தியாசம்?',
      ur: 'روایتی پروگرامنگ اور مشین لرننگ میں بنیادی فرق کیا ہے؟',
      'r-ur': 'Traditional programming aur ML mein main farq kya hai?',
      hin: 'Traditional programming aur Machine Learning mein main difference kya hai?'
    },
    options: {
      en: [
        'ML requires expensive mechanical robots to write code',
        'Traditional coding writes fixed rules; ML learns patterns from examples',
        'Traditional coding is in English, ML is only in binary code',
        'ML never makes any mistakes ever'
      ],
      hi: [
        'मशीन लर्निंग के लिए बड़े रोबोट की जरूरत होती है',
        'पारंपरिक कोडिंग में कड़े नियम लिखते हैं; ML उदाहरणों से खुद सीखता है',
        'पारंपरिक कोडिंग केवल अंग्रेजी में होती है, ML बाइनरी में',
        'ML कभी कोई गलती नहीं करता'
      ],
      te: [
        'ML కి రోబోట్లు అవసరం',
        'కోడింగ్‌లో నియమాలు రాస్తారు; ML ఉదాహరణలతో స్వయంగా నేర్చుకుంటుంది',
        'కోడింగ్ ఇంగ్లీషులో ఉంటుంది, ML కేవలం బైనరీలో ఉంటుంది',
        'ML ఎప్పుడూ తప్పులు చేయదు'
      ],
      mr: [
        'ML साठी महागड्या रोबोट्सची गरज असते',
        'पारंपरिक कोडिंगमध्ये नियम लिहतात; ML उदाहरणांमधून स्वतः शिकते',
        'पारंपरिक कोडिंग फक्त इंग्रजीत असते',
        'ML कधीही चूक करत नाही'
      ],
      ta: [
        'ML-க்கு ரோபோக்கள் தேவை',
        'வழக்கமான முறையில் விதிகளை எழுதுகிறோம்; ML உதாரணங்களிலிருந்து கற்கிறது',
        'வழக்கமான முறை ஆங்கிலத்தில் மட்டுமே இருக்கும்',
        'ML ஒருபோதும் தவறு செய்யாது'
      ],
      ur: [
        'روایتی پروگرامنگ میں اصول لکھے جاتے ہیں، ML مثالوں سے خود سیکھتی ہے',
        'مشین لرننگ کے لیے روبوٹس کی ضرورت ہوتی ہے',
        'روایتی پروگرامنگ صرف انگریزی میں ہوتی ہے',
        'مشین لرننگ کبھی غلطی نہیں کرتی'
      ],
      'r-ur': [
        'Traditional coding mein rules likhte hain; ML examples se patterns seekhta hai',
        'ML ke liye mechanical robots chahiye hote hain',
        'Traditional coding English mein hoti hai, ML binary mein',
        'ML kabhi koi ghalati nahi karta'
      ],
      hin: [
        'Traditional coding mein hard-coded rules likhte hain; ML examples se pattern seekhta hai',
        'ML chalane ke liye expensive mechanical robots chahiye',
        'Coding sirf English mein hoti hai, ML math mein',
        'ML hamesha 100% sahi hota hai bina error ke'
      ]
    },
    correctIndex: 1,
    explanation: {
      en: 'In classic programming, humans write Rules + Data -> Answers. In Machine Learning, we feed Data + Answers -> the machine learns the Rules!',
      hi: 'पारंपरिक कोडिंग में इंसान नियम लिखते हैं; मशीन लर्निंग में हम उदाहरण देते हैं और मशीन खुद नियम खोजती है!',
      te: 'సాంప్రదాయ కోడింగ్‌లో మనం రూల్స్ రాస్తాము; ML లో డేటా ద్వారా కంప్యూటర్ స్వయంగా నియమాలను గ్రహిస్తుంది!',
      mr: 'पारंपरिक पद्धतीत आपण नियम ठरवतो; ML मध्ये संगणक स्वतः उदाहरणांमधून नियम शिकतो!',
      ta: 'வழக்கமான நிரலாக்கத்தில் விதிகளை மனிதர்கள் எழுதுகிறார்கள்; ML-ல் கணினி தரவுகளிலிருந்து விதிகளைக் கற்கிறது!',
      ur: 'روایتی کوڈنگ میں انسان اصول لکھتے ہیں، جبکہ مشین لرننگ میں سسٹم مثالوں سے خود اصول تلاش کرتا ہے!',
      'r-ur': 'Traditional coding mein rules hum likhte hain; ML mein model data dekh kar khud rules dhoondta hai!',
      hin: 'Traditional coding mein: Rules + Data = Answer. Machine Learning mein: Data + Answer = Model Rules learn karta hai!'
    }
  },
  {
    id: 'q2',
    question: {
      en: 'What is an "AI Hallucination"?',
      hi: 'AI की "हलुसिनेशन" (भ्रम) का क्या अर्थ है?',
      te: 'AI "హాలూసినేషన్" అంటే ఏమిటి?',
      mr: 'AI "हॅल्युसिनेशन" म्हणजे काय?',
      ta: 'AI "ஹாலூசினேஷன்" என்றால் என்ன?',
      ur: 'مصنوعی ذہانت میں "Hallucination" کا کیا مطلب ہے؟',
      'r-ur': 'AI "Hallucination" ka kya matlab hota hai?',
      hin: 'AI "Hallucination" ka matlab kya hai?'
    },
    options: {
      en: [
        'When the computer screen starts flickering colors',
        'When an AI confidently invents fake facts or fabricated answers',
        'When the AI goes to sleep at night to save battery',
        'When the internet cable is unplugged'
      ],
      hi: [
        'जब कंप्यूटर की स्क्रीन चमकने लगे',
        'जब AI पूरे आत्मविश्वास के साथ मनगढ़ंत या झूठी बातें सच की तरह बोल दे',
        'जब AI रात को बैटरी बचाने के लिए सो जाए',
        'जब इंटरनेट का तार निकल जाए'
      ],
      te: [
        'కంప్యూటర్ స్క్రీన్ ఫ్లికర్ అవ్వడం',
        'AI పూర్తి ఆత్మవిశ్వాసంతో లేని సమాచారాన్ని నిజంలా సృష్టించి చెప్పడం',
        'బ్యాటరీ ఆదా చేయడానికి AI నిద్రపోవడం',
        'ఇంటర్నెట్ కనెక్షన్ పోవడం'
      ],
      mr: [
        'स्क्रीनवर रंगीत पट्टे येणे',
        'AI ने आत्मविश्वासाने खोटी माहिती खरी म्हणून सांगणे',
        'AI रात्री झोपी जाणे',
        'इंटरनेट बंद पडणे'
      ],
      ta: [
        'கணினி திரை மின்னும் நிலை',
        'AI முழு நம்பிக்கையுடன் தவறான தகவல்களை உண்மையைப் போல கூறுவது',
        'AI உறங்கும் நிலை',
        'இணைய இணைப்பு துண்டிக்கப்படுவது'
      ],
      ur: [
        'جب AI اعتماد کے ساتھ من گھڑت معلومات کو سچ بنا کر پیش کرے',
        'جب کمپیوٹر اسکرین چمکنے لگے',
        'جب AI بیٹری بچانے کے لیے سو جائے',
        'جب انٹرنیٹ کا تار نکل جائے'
      ],
      'r-ur': [
        'Jab AI full confidence ke sath fabricated fake information produce kare',
        'Jab computer screen band ho jaye',
        'Jab AI battery bachane ke liye sleep mode mein chala jaye',
        'Jab internet cable disconnect ho jaye'
      ],
      hin: [
        'Jab AI full confidence ke sath hawa mein feke aur jhooti info generate kare',
        'Jab computer ki screen glitch karne lage',
        'Jab server battery save karne ke liye band ho jaye',
        'Jab keyboard disconnect ho jaye'
      ]
    },
    correctIndex: 1,
    explanation: {
      en: 'LLMs predict statistically probable next tokens; without document grounding (like RAG), they can sound authoritative while completely making things up!',
      hi: 'AI अगले शब्दों की संभावना भांपता है। अगर उसे सही दस्तावेज न दिए जाएं तो वह आत्मविश्वास से झूठी बातें भी गढ़ सकता है!',
      te: 'AI తదుపరి పదాలను అంచనా వేస్తుంది కాబట్టి, ఆధారం లేనప్పుడు అది తప్పుడు విషయాలను నిజంలా చెప్పగలదు.',
      mr: 'AI शब्दांची संभाव्यता मोजते, त्यामुळे पुरावा नसतानाही ते आत्मविश्वासाने खोटे बोलू शकते!',
      ta: 'AI அடுத்த சொற்களின் சாத்தியக்கூறுகளை மட்டுமே கணிப்பதால், ஆதாரமற்ற தகவல்களை உறுதியாகக் கூற வாய்ப்புள்ளது!',
      ur: 'ماڈل اگلے الفاظ کا اندازہ لگاتا ہے، اس لیے وہ بغیر تحقیق کے بھی پراعتماد طریقے سے غلط بات کہہ سکتا ہے!',
      'r-ur': 'LLMs probability par kaam karte hain, is liye bina grounding ke fake facts confidently bol dete hain.',
      hin: 'LLM probability based hota hai: Agar facts check nahi hue toh wo Chatur ki tarah confident hokar galat kahani suna deta hai!'
    }
  },
  {
    id: 'q3',
    question: {
      en: 'Why is RAG (Retrieval-Augmented Generation) like an "Open-Book Exam"?',
      hi: 'RAG तकनीक को "ओपन-बुक परीक्षा" क्यों कहा जाता है?',
      te: 'RAG ని "ఓపెన్ బుక్ ఎగ్జామ్" అని ఎందుకు పిలుస్తారు?',
      mr: 'RAG ला "ओपन-बुक परीक्षा" का म्हणतात?',
      ta: 'RAG தொழில்நுட்பத்தை ஏன் "திறந்த புத்தகத் தேர்வு" என்கிறோம்?',
      ur: 'RAG کو "اوپن بک امتحان" کیوں کہا جاتا ہے؟',
      'r-ur': 'RAG ko "Open-Book Exam" kyun kehte hain?',
      hin: 'RAG ko "Open-Book Exam" kyu bolte hain?'
    },
    options: {
      en: [
        'Because students can bring books into school on Mondays',
        'Because the AI checks your actual documents and verified facts before answering',
        'Because it makes computers 100 times heavier like heavy textbooks',
        'Because it only works when a library is open'
      ],
      hi: [
        'क्योंकि छात्र स्कूल में सोमवार को किताबें लाते हैं',
        'क्योंकि AI केवल याददाश्त पर निर्भर रहने के बजाय आपके असली दस्तावेजों को देखकर उत्तर देता है',
        'क्योंकि यह कंप्यूटर को भारी किताबों जैसा वजनी बना देता है',
        'क्योंकि यह केवल लाइब्रेरी खुली होने पर काम करता है'
      ],
      te: [
        'పుస్తకాలు స్కూల్‌కి తేవడానికి వీలుగా ఉండటం వల్ల',
        'AI గుర్తుపై మాత్రమే కాకుండా, డాక్యుమెంట్లలోని నిజాలను చూసి సమాధానం ఇవ్వడం వల్ల',
        'కంప్యూటర్లు బరువుగా మారడం వల్ల',
        'లైబ్రరీ సమయంలో మాత్రమే పనిచేయడం వల్ల'
      ],
      mr: [
        'विद्यार्थी सोमवारी पुस्तके आणू शकतात म्हणून',
        'AI केवळ स्मरणशक्तीवर न राहता प्रत्यक्ष कागदपत्रे वाचून अचूक उत्तर देते म्हणून',
        'कम्प्युटर पुस्तकांसारखे जड होतात म्हणून',
        'केवळ ग्रंथालयात चालते म्हणून'
      ],
      ta: [
        'மாணவர்கள் புத்தகங்களைக் கொண்டு வரலாம் என்பதால்',
        'AI மனப்பாடத்தை நம்பாமல், உண்மையான ஆவணங்களைப் பார்த்து பதிலளிப்பதால்',
        'கணினி கனமாகிவிடும் என்பதால்',
        'நூலகத்தில் மட்டுமே செயல்படும் என்பதால்'
      ],
      ur: [
        'کیونکہ AI صرف یادداشت پر بھروسہ کرنے کے بجائے مستند دستاویزات دیکھ کر جواب دیتا ہے',
        'کیونکہ طلبہ اسکول میں کتابیں لا سکتے ہیں',
        'کیونکہ اس سے کمپیوٹر بھاری ہو جاتا ہے',
        'کیونکہ یہ صرف لائبریری میں کام کرتا ہے'
      ],
      'r-ur': [
        'Kyunki AI memory par bharosa karne ke bajaye real documents check karke answer deta hai',
        'Kyunki students library mein jaa sakte hain',
        'Kyunki computer 100 times heavy ho jata hai',
        'Kyunki ye sirf daytime mein work karta hai'
      ],
      hin: [
        'Kyunki AI sirf andaza lagane ke bajaye aapke uploaded PDFs aur verified documents dekh ke answer deta hai',
        'Kyunki students library jaa kar exam dete hain',
        'Kyunki ye computer ko heavy books jaisa bana deta hai',
        'Kyunki ye sirf open book format mein type karta hai'
      ]
    },
    correctIndex: 1,
    explanation: {
      en: 'Instead of hallucinating from old training data, RAG retrieves relevant paragraphs from your private database and cites them in the prompt!',
      hi: 'पुराने डेटा से अनुमान लगाने के बजाय RAG आपकी फाइलों से सही पैरा ढूंढकर लाता है और तथ्य-सत्यापित उत्तर देता है!',
      te: 'పాత సమాచారంపై ఆధారపడకుండా, RAG మీ పత్రాల నుండి తాజా సమాచారాన్ని సేకరించి కచ్చితమైన సమాధానం ఇస్తుంది!',
      mr: 'RAG तुमच्या फाईल्समधून अचूक परिच्छेद शोधून विश्वासार्ह आणि पुराव्यासह उत्तर देते!',
      ta: 'பழைய தகவல்களை நம்பாமல், உங்கள் ஆவணங்களிலிருந்து சரியான தகவல்களைத் தேடி எடுத்து துல்லியமான பதிலை அளிக்கிறது!',
      ur: 'پرانے ڈیٹا کے بجائے RAG آپ کے ڈیٹا بیس سے متعلقہ پیراگراف نکال کر درست جواب دیتا ہے!',
      'r-ur': 'RAG private files se exact paragraphs fetch karke factual answer deta hai.',
      hin: 'RAG aapki files se search karta hai aur verified proof ke sath exact answer quote karta hai!'
    }
  }
];
