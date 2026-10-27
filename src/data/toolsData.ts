import { AITool } from '../types';

export const AI_TOOLS_LIST: AITool[] = [
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    category: 'Text & Writing',
    description: {
      en: 'The most popular conversational AI assistant by OpenAI for writing, coding, and brainstorming.',
      hi: 'लेखन, कोडिंग और बातचीत के लिए दुनिया का सबसे लोकप्रिय AI सहायक।',
      te: 'రచన, కోడింగ్ మరియు ఆలోచనల కోసం ప్రసిద్ధ AI సహాయకుడు.',
      mr: 'लेखन आणि कोडिंगसाठी जगप्रसिद्ध AI सहाय्यक.',
      ta: 'எழுதுதல் மற்றும் கோடிங்கிற்கான பிரபலமான AI உதவியாளர்.',
      ur: 'تحریر، کوڈنگ اور گفتگو کے لیے معروف معاون۔',
      'r-ur': 'Writing, coding aur general guidance ke liye top assistant.',
      hin: 'Writing, coding aur brainstorming ke liye world-famous AI bot.'
    },
    freeTier: true,
    link: 'https://chatgpt.com',
    badge: 'Popular',
    pricing: 'Free + $20/mo'
  },
  {
    id: 'gemini',
    name: 'Google Gemini',
    category: 'Research',
    description: {
      en: 'Multimodal AI with massive context window, deeply integrated with Google Search and Workspace.',
      hi: 'विशाल संदर्भ खिड़की वाला Google का AI, जो सीधे Google सर्च से जुड़ा है।',
      te: 'గూగుల్ సెర్చ్ మరియు వర్క్‌స్పేస్‌తో అనుసంధానించబడిన అధునాతన AI.',
      mr: 'गुगल सर्च आणि डॉक्सशी जोडलेले प्रगत AI.',
      ta: 'கூகுள் தேடலுடன் இணைக்கப்பட்ட சக்திவாய்ந்த AI.',
      ur: 'گوگل سرچ سے لیس ملٹی موڈل مصنوعی ذہانت۔',
      'r-ur': 'Google ka powerful multimodal AI with large context.',
      hin: 'Google ka smart multimodal AI jo live internet aur YouTube analyze karta hai.'
    },
    freeTier: true,
    link: 'https://gemini.google.com',
    badge: 'Free Tier',
    pricing: 'Free + Gemini Advanced'
  },
  {
    id: 'claude',
    name: 'Claude 3.7',
    category: 'Text & Writing',
    description: {
      en: 'Known for nuanced, highly articulate writing, safety guardrails, and hybrid reasoning.',
      hi: 'सटीक लेखन, विचारशीलता और कोडिंग क्षमता के लिए सराहा गया AI।',
      te: 'స్పష్టమైన రచన మరియు కోడింగ్ సామర్థ్యాలకు పేరుగాంచిన మోడల్.',
      mr: 'अचूक आणि स्पष्ट लेखनासाठी ओळखले जाणारे AI.',
      ta: 'துல்லியமான எழுத்து மற்றும் ஆய்வுகளுக்கு ஏற்ற AI.',
      ur: 'بہترین تحریری صلاحیتوں اور سوچ بچار کا ماہر۔',
      'r-ur': 'Nuanced writing aur reasoning ke liye best assistant.',
      hin: 'Super clean writing, coding aur thoughtful answers dene wala AI.'
    },
    freeTier: true,
    link: 'https://claude.ai',
    badge: 'Articulate',
    pricing: 'Free + $20/mo'
  },
  {
    id: 'midjourney',
    name: 'Midjourney',
    category: 'Images & Art',
    description: {
      en: 'Industry-leading photorealistic and artistic image generation platform via prompts.',
      hi: 'प्रॉम्प्ट के जरिए अत्यंत सुंदर और असली जैसी कलाकृतियां बनाने वाला प्लेटफॉर्म।',
      te: 'అద్భుతమైన కళాఖండాలు మరియు ఫోటోలను సృష్టించే వేదిక.',
      mr: 'कलात्मक आणि वास्तववादी चित्रे तयार करणारा अव्वल प्लॅटफॉर्म.',
      ta: 'அற்புதமான கலைப்படைப்புகளை உருவாக்கும் முன்னணி தளம்.',
      ur: 'لاجواب تصاویر اور فن پارے تخلیق کرنے والا نظام۔',
      'r-ur': 'Photorealistic images aur cinematic art generator.',
      hin: 'Cinematic lighting aur ultra-realistic paintings banane wala tool.'
    },
    freeTier: false,
    link: 'https://midjourney.com',
    badge: 'Creator Favorite',
    pricing: 'From $10/mo'
  },
  {
    id: 'huggingface',
    name: 'Hugging Face',
    category: 'Research',
    description: {
      en: 'The GitHub of open-source AI: thousands of free models, datasets, and community Spaces.',
      hi: 'ओपन-सोर्स AI का महासागर: हजारों मुफ्त मॉडल, डेटासेट और इंटरएक्टिव स्पेस।',
      te: 'వేలాది ఉచిత AI మోడల్స్ మరియు డేటాసెట్‌ల భాండాగారం.',
      mr: 'हजारो मोफत ओपन-सोर्स AI मॉडेल्सचे दालन.',
      ta: 'இலவச AI மாதிரிகள் மற்றும் தரவுகளின் திறந்தவெளி களஞ்சியம்.',
      ur: 'اوپن سورس مصنوعی ذہانت کا سب سے بڑا گڑھ۔',
      'r-ur': 'Open-source AI models aur datasets ka open hub.',
      hin: 'Open-source AI ka hub jahan 500,000+ models free mein milte hain.'
    },
    freeTier: true,
    link: 'https://huggingface.co',
    badge: 'Open Source',
    pricing: '100% Free'
  },
  {
    id: 'perplexity',
    name: 'Perplexity AI',
    category: 'Research',
    description: {
      en: 'An AI-powered answer engine that searches the web and cites every single source clearly.',
      hi: 'वेब खोज कर हर तथ्य का सटीक स्रोत (citation) बताने वाला उत्तर इंजन।',
      te: 'వెబ్‌లో వెతికి ప్రతి సమాచారానికి ఆధారాలు చూపే సెర్చ్ ఇంజిన్.',
      mr: 'पुराव्यांसह अचूक उत्तरे शोधून देणारे AI सर्च इंजिन.',
      ta: 'ஆதாரங்களுடன் கூடிய பதில்களை இணையத்தில் இருந்து தேடித்தரும் தளம்.',
      ur: 'حوالہ جات کے ساتھ فوری حقائق بتانے والا سرچ انجن۔',
      'r-ur': 'Internet search karke citations ke sath direct answers deta hai.',
      hin: 'Google search ka smart replacement jo har answer ke links aur source dikhata hai.'
    },
    freeTier: true,
    link: 'https://perplexity.ai',
    badge: 'Study Essential',
    pricing: 'Free + Pro'
  },
  {
    id: 'cursor',
    name: 'Cursor Editor',
    category: 'Coding',
    description: {
      en: 'An AI-first code editor built on VS Code that understands your entire repository.',
      hi: 'VS Code पर आधारित AI कोडिंग एडिटर जो पूरे प्रोजेक्ट को समझकर कोड लिखता है।',
      te: 'కోడింగ్ వేగంగా చేయడానికి సరికొत्ता AI ఎడిటర్.',
      mr: 'प्रोग्रामिंगसाठी अत्यंत उपयुक्त AI कोड एडिटर.',
      ta: 'முழு கோடிங் திட்டத்தையும் புரிந்துகொண்டு உதவும் எடிட்டர்.',
      ur: 'کوڈنگ کو تیز ترین بنانے والا جدید ایڈیٹر۔',
      'r-ur': 'Repo-aware AI code editor jo dev productivity 10x karta hai.',
      hin: 'Coders ka dream tool jo pura codebase samajh ke bugs fix karta hai.'
    },
    freeTier: true,
    link: 'https://cursor.com',
    badge: 'Dev Choice',
    pricing: 'Free + $20/mo'
  },
  {
    id: 'elevenlabs',
    name: 'ElevenLabs',
    category: 'Audio & Voice',
    description: {
      en: 'Realistic text-to-speech with natural inflection, emotion, and multilingual voice cloning.',
      hi: 'प्राकृतिक भावनाओं और विभिन्न क्षेत्रीय आवाजों में बोलने वाला AI वॉयस टूल।',
      te: 'సహజమైన మానవ గళాన్ని అనుకరించే అద్భుతమైన వాయిస్ టూల్.',
      mr: 'अस्सल मानवी आवाजाप्रमाणे बोलणारे व्हॉईस AI.',
      ta: 'இயற்கையான மனித குரலை உருவாக்கும் ஒலி தளம்.',
      ur: 'جذباتی اتار چڑھاؤ کے ساتھ بولنے والا صوتی ٹول۔',
      'r-ur': 'Realistic voice generation in multiple Indian accents.',
      hin: 'Human jaisi natural regional voices generate karne wala audio generator.'
    },
    freeTier: true,
    link: 'https://elevenlabs.io',
    badge: 'Voice AI',
    pricing: 'Free + Tiered'
  },
  {
    id: 'runway',
    name: 'Runway Gen-3',
    category: 'Video',
    description: {
      en: 'Cinematic AI video generation from simple text descriptions or reference still images.',
      hi: 'साधारण टेक्स्ट या फोटो से सिनेमा जैसी वीडियो क्लिप बनाने वाला AI।',
      te: 'టెక్స్ట్ నుండి అద్భుతమైన వీడియోలను రూపొందించే సాధనం.',
      mr: 'मजकुरावरून थेट व्हिडिओ तयार करणारे प्रगत साधन.',
      ta: 'உரைகளிலிருந்து வீடியோக்களை உருவாக்கும் தளம்.',
      ur: 'تحریر سے سنیما کوالٹی کی ویڈیوز بنانے والا ٹول۔',
      'r-ur': 'Text prompt se realistic video clips banane wala tool.',
      hin: 'Text prompt likho aur Bollywood style video clips ready.'
    },
    freeTier: true,
    link: 'https://runwayml.com',
    badge: 'Video Frontier',
    pricing: 'Free credits + Pro'
  }
];
