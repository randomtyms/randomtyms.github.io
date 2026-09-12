// State
let currentLang = 'en'; // 'en' or 'ta'
let ddData = [];

// ---- BHASHINI INTEGRATION POINT ----
const BHASHINI_CONFIG = {
  enabled: false,
  endpoint: '',
  apiKey: '',
  sourceLang: 'en',
  targetLang: 'ta'
};

async function translateViaBhashini(text) {
  if (!BHASHINI_CONFIG.enabled || !BHASHINI_CONFIG.endpoint) return null;
  try {
    const res = await fetch(BHASHINI_CONFIG.endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': BHASHINI_CONFIG.apiKey
      },
      body: JSON.stringify({
        input: [{ source: text }],
        config: {
          language: {
            sourceLanguage: BHASHINI_CONFIG.sourceLang,
            targetLanguage: BHASHINI_CONFIG.targetLang
          }
        }
      })
    });
    const data = await res.json();
    return data?.output?.[0]?.target || null;
  } catch (e) {
    console.error('BHASHINI translation failed, falling back to cached Tamil:', e);
    return null;
  }
}

async function resolveTamilText(englishText, cachedTamil) {
  const live = await translateViaBhashini(englishText);
  return live || cachedTamil;
}

const chatEl = document.getElementById('chat');
const btnEn = document.getElementById('btnEn');
const btnTa = document.getElementById('btnTa');
const btnLessons = document.getElementById('btnLessons');
const btnReset = document.getElementById('btnReset');
const loadingScrim = document.getElementById('loadingScrim');

// DD12 Emergency Safety Topic (Mandated Offline Failsafe)
const DD12_SAFETY = {
  id: "DD12",
  title: "Safety Help - When Someone Hurts You",
  title_ta: "பாதுகாப்பு உதவி - துன்புறுத்தல் விழிப்புணர்வு",
  icon: "🛡️",
  lessonUrl: "https://lokeshvarsha.blogspot.com/p/safety-help.html",
  priority: "highest",
  neverFallback: true,
  notes: "This topic must bypass unknownQuestion fallback. Always match first.",
  questions: [
    {
      id: "DD12-Q001",
      question: "Next door man hurt me",
      question_ta: "அக்கம்பக்கத்து நபர் என்னை துன்புறுத்தினார்",
      keywords: ["hurt", "hit", "beat", "slap", "next door", "neighbour", "neighbor", "uncle", "man", "hurt me", "relative", "family member", "hits me", "beats me"],
      match_phrases: ["next door man hurt me", "neighbour hurt me", "neighbor hurt me", "man hurt me", "uncle hurt me", "someone hurt me", "someone is hurting me", "next door uncle hit me", "my relative hurt me", "my uncle hits me", "someone at home hurts me", "family member hurt me", "someone did something bad to me"],
      answer: "I'm so sorry. It's not your fault. You did right telling me. Please tell your parent, guardian, or teacher right now. If you feel unsafe, call Childline 1098 anytime - it's free.",
      answer_ta: "வருந்துகிறேன். இது உன் தவறு இல்லை. உடனே பெற்றோர் அல்லது ஆசிரியரிடம் சொல். பாதுகாப்பில்லை என்றால் 1098-க்கு அழை.",
      speaker: "varsha",
      tags: ["safety_critical"]
    },
    {
      id: "DD12-Q002",
      question: "He touched me badly",
      question_ta: "அவர் என்னை தவறாக தொட்டார்",
      keywords: ["touch", "touched", "bad touch", "badly", "private parts", "private", "uncomfortable", "inappropriate", "touching me", "wrong way"],
      match_phrases: ["he touched me badly", "she touched me badly", "bad touch", "touched me in private parts", "touched my private parts", "uncomfortable touch", "someone touched me badly", "badly touched me", "somebody is touching me", "touching me in a wrong way", "someone touched me and i didn't like it"],
      answer: "Thank you for telling me. Bad touch is never your fault. Your body belongs to you. Tell a trusted adult today and don't keep it secret. You can call Childline 1098 for help.",
      answer_ta: "சொன்னதற்கு நன்றி. தவறான தொடுதல் உன் தவறு இல்லை. உன் உடல் உனக்கே சொந்தம். இன்றே நம்பிக்கையான பெரியவரிடம் சொல். 1098 உதவும்.",
      speaker: "varsha",
      tags: ["safety_critical"]
    },
    {
      id: "DD12-Q003",
      question: "Someone is asking for my photos",
      question_ta: "யாரோ என் புகைப்படங்களை கேட்கிறார்கள்",
      keywords: ["photo", "photos", "picture", "pics", "send photo", "private photo", "nude", "asking photo", "image"],
      match_phrases: ["someone asking for my photos", "asking for private photos", "send me your photo", "send your pics", "asking for nude photo", "online asking for pics", "asking for my picture"],
      answer: "Don't send photos. Show the message to a trusted adult right away. Block that person. Call Childline 1098 if they pressure you.",
      answer_ta: "புகைப்படம் அனுப்பாதே. உடனே பெரியவரிடம் காட்டு. Block செய். 1098 உதவும்.",
      speaker: "lokesh",
      tags: ["safety_critical"]
    },
    {
      id: "DD12-Q004",
      question: "I feel unsafe",
      question_ta: "எனக்கு பயமாகவும் பாதுகாப்பற்றதாகவும் உள்ளது",
      keywords: ["unsafe", "scared", "afraid", "fear", "not safe", "help", "scary", "danger", "please help"],
      match_phrases: ["i feel unsafe", "i am scared", "i feel not safe", "i need help", "i feel unsafe at home", "i feel unsafe at school", "i am afraid", "please help me", "i want to tell someone", "can i tell you something bad happened", "i don't feel safe with someone"],
      answer: "If you feel unsafe, find a trusted adult near you now. Move to a safe place if you can. You can call Childline 1098 anytime. You deserve to be safe.",
      answer_ta: "பாதுகாப்பில்லை என்றால் அருகில் உள்ள பெரியவரிடம் போ. பாதுகாப்பான இடத்திற்கு போய் 1098-க்கு அழை.",
      speaker: "varsha",
      tags: ["safety_critical"]
    },
    {
      id: "DD12-Q005",
      question: "Someone told me to keep a secret about touching",
      question_ta: "தொடுதல் பற்றி ரகசியம் காக்க சொல்கிறார்கள்",
      keywords: ["secret", "keep secret", "dont tell", "don't tell", "touching secret", "threat", "threaten"],
      match_phrases: ["told me to keep secret", "said dont tell anyone", "secret about touching", "threatened me to keep secret", "don't tell secret"],
      answer: "Secrets about touching should not be kept. You won't get in trouble for telling. Tell a trusted adult today. Call 1098 for help.",
      answer_ta: "தொடுதல் பற்றிய ரகசியத்தை வைக்காதே. சொன்னால் தண்டனை இல்லை. இன்றே பெரியவரிடம் சொல். 1098 உதவும்.",
      speaker: "varsha",
      tags: ["safety_critical"]
    },
    {
      id: "DD12-Q006",
      question: "Someone is scaring me online",
      question_ta: "இணையத்தில் யாரோ என்னை மிரட்டுகிறார்கள்",
      keywords: ["scare", "scaring", "threat", "threatening", "online", "blackmail", "scam", "frighten"],
      match_phrases: ["someone scaring me online", "threatening me online", "blackmailing me", "someone scaring me in game", "scaring me on chat"],
      answer: "Don't reply. Take a screenshot if you can and show a trusted adult. Block and report that person. Call 1098 for help.",
      answer_ta: "பதில் அனுப்பாதே. Screenshot எடுத்து பெரியவரிடம் காட்டு. Block செய். 1098 உதவும்.",
      speaker: "lokesh",
      tags: ["safety_critical"]
    },
    {
      id: "DD12-Q007",
      question: "He is asking me to meet alone",
      question_ta: "அவர் என்னை தனியாக சந்திக்க அழைக்கிறார்",
      keywords: ["meet", "alone", "meet me", "come alone", "secret meeting", "meet outside"],
      match_phrases: ["asking me to meet alone", "wants to meet me alone", "told me to meet outside", "meet me secretly"],
      answer: "Don't go alone. Tell a trusted adult about this message right away. Don't keep meeting plans secret. Call 1098 if you need help.",
      answer_ta: "தனியாக போகாதே. உடனே பெரியவரிடம் சொல். ரகசிய சந்திப்பு வேண்டாம். 1098 உதவும்.",
      speaker: "varsha",
      tags: ["safety_critical"]
    },
    {
      id: "DD12-Q008",
      question: "What is good touch and bad touch?",
      question_ta: "நல்ல தொடுதல் மற்றும் தவறான தொடுதல் என்றால் என்ன?",
      keywords: ["good touch", "bad touch", "safe touch", "unsafe touch", "private parts", "body safety"],
      match_phrases: ["what is good touch bad touch", "what is bad touch", "what is safe touch", "difference good bad touch", "good touch bad touch difference"],
      answer: "Good touch feels safe and caring, like a hug from family when you want it. Bad touch hurts, feels uncomfortable, or touches private parts. If bad touch happens, say no and tell a trusted adult. Call 1098.",
      answer_ta: "நல்ல தொடுதல் பாதுகாப்பாக இருக்கும். தவறான தொடுதல் வலிக்கும், தனி உறுப்புகளை தொடும். நடந்தால் வேண்டாம் என்று சொல்லி பெரியவரிடம் சொல். 1098.",
      speaker: "varsha",
      tags: ["safety_critical"]
    },
    {
      id: "DD12-Q009",
      question: "What is 1098? Whose number is 1098?",
      question_ta: "1098 யாருடைய எண்? 1098 என்றால் என்ன?",
      keywords: ["1098", "childline", "helpline", "emergency number", "whose number", "phone number"],
      match_phrases: ["what is 1098", "what is childline", "how do i call childline", "call 1098", "1098 number", "childline number", "who is childline", "1098 whose number", "whose number is 1098"],
      answer: "1098 is India's free, 24/7 emergency phone helpline for children (Childline). Kind people answer the phone to help keep you safe from harm, bad touch, or danger. You can call it anytime from any phone without recharge.",
      answer_ta: "1098 என்பது குழந்தைகளுக்கான இந்தியாவின் இலவச அவசர உதவி எண் (Childline). ஆபத்து அல்லது துன்புறுத்தலில் இருந்து உங்களைப் பாதுகாக்க உதவும் நபர்கள் இதில் பேசுவார்கள். எந்த போனிலிருந்தும் எப்போது வேண்டுமானாலும் இலவசமாக அழைக்கலாம்.",
      speaker: "varsha",
      tags: ["safety_critical"]
    }
  ]
};

// Clean text for flexible matching
function cleanMatchText(str) {
  return (str || '')
    .toLowerCase()
    .replace(/[?.,!—–\-_:;'"()[\]]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

// Fetch data & initialize
async function init() {
  const baseName = currentLang === 'ta' ? 'digital_dharma_ta.json' : 'digital_dharma.json';
  const candidateUrls = [baseName, `../${baseName}`, `./${baseName}`];
  let loaded = false;

  for (const url of candidateUrls) {
    try {
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        ddData = data.topics || (Array.isArray(data) ? data : []);
        if (ddData.length > 0) {
          loaded = true;
          break;
        }
      }
    } catch (e) {}
  }

  if (!loaded) {
    console.warn("Could not find data file, using fallback.", baseName);
  }

  // Ensure DD12 safety topic is present
  if (!ddData.some(t => t.id === "DD12")) {
    ddData.push(DD12_SAFETY);
  }

  if (loadingScrim) loadingScrim.classList.add('hidden');
  renderHomeCard();
}

// Emergency Safety Priority Matcher
function findAnswer(queryText) {
  const qClean = cleanMatchText(queryText);
  const qRaw = queryText.toLowerCase().trim();

  // Tier 0: Direct Helpline & 1098 Inquiries
  if (qRaw.includes("1098") || qClean.includes("childline")) {
    const safety = ddData.find(t => t.id === "DD12");
    const item = safety?.questions?.find(qi => qi.id === "DD12-Q009");
    if (item) return { item, topic: safety, isSafety: true };
  }

  // Tier 1: Emergency Safety Check (Always evaluated first)
  const safety = ddData.find(t => t.id === "DD12");
  if (safety) {
    for (const qItem of safety.questions || []) {
      if (qItem.match_phrases && qItem.match_phrases.some(phrase => qClean.includes(cleanMatchText(phrase)))) {
        return { item: qItem, topic: safety, isSafety: true };
      }
      const matched = (qItem.keywords || []).filter(k => qClean.includes(cleanMatchText(k)));
      if (matched.length >= 2 || (matched.length >= 1 && (qClean.includes("touch") || qClean.includes("hurt") || qClean.includes("unsafe") || qClean.includes("photo") || qClean.includes("secret") || qClean.includes("தொடு") || qClean.includes("பாதுகாப்")))) {
        return { item: qItem, topic: safety, isSafety: true };
      }
    }
  }

  // Tier 1.5: Conversational Shortcuts (Identity, Feelings, Greetings)
  if (qClean.includes("who are you") || qClean.includes("who r u") || qClean.includes("what is your name") || qClean.includes("யார் நீங்கள்") || qClean.includes("நீங்கள் யார்")) {
    const dd11 = ddData.find(t => t.id === "DD11");
    const item = dd11?.questions?.find(qi => qi.id === "DD11-Q006" || qi.id === "DD11-Q002");
    if (item) return { item, topic: dd11, isSafety: false };
  }
  if (qClean.includes("nobody likes me") || qClean.includes("no one likes me") || qClean.includes("i am sad") || qClean.includes("feel sad") || qClean.includes("சோகமாக")) {
    const dd01 = ddData.find(t => t.id === "DD01");
    const item = dd01?.questions?.find(qi => qi.id === "DD01-Q004");
    if (item) return { item, topic: dd01, isSafety: false };
  }

  // Tier 2: Standard Lesson Matching (Bidirectional & Normalized)
  for (const topic of ddData) {
    if (topic.id === "DD12") continue;
    for (const qItem of topic.questions || []) {
      const enQClean = cleanMatchText(qItem.question_en || qItem.question);
      const taQClean = cleanMatchText(qItem.question_ta);

      // Match phrases list
      if (qItem.match_phrases && qItem.match_phrases.some(p => qClean.includes(cleanMatchText(p)))) {
        return { item: qItem, topic, isSafety: false };
      }

      // Exact or bidirectional inclusion matching
      if (enQClean && (qClean === enQClean || qClean.includes(enQClean) || enQClean.includes(qClean))) {
        return { item: qItem, topic, isSafety: false };
      }
      if (taQClean && (qClean === taQClean || qClean.includes(taQClean) || taQClean.includes(qClean))) {
        return { item: qItem, topic, isSafety: false };
      }

      // Keyword overlap
      if (qItem.keywords && qItem.keywords.filter(k => qClean.includes(cleanMatchText(k))).length >= 2) {
        return { item: qItem, topic, isSafety: false };
      }
    }
  }

  return null;
}

// UI Rendering Helpers
function renderHomeCard() {
  chatEl.innerHTML = '';
  const isTa = currentLang === 'ta';

  appendBotMessage({
    speaker: "varsha",
    text: isTa 
      ? "வணக்கம்! நான் வர்ஷா, என்னுடன் லோகேஷும் இருக்கிறான். இணையத்தில் பாதுகாப்பாக இருப்பது மற்றும் நல்ல பழக்கங்கள் பற்றி எங்களிடம் கேட்கலாம். கீழே உள்ள தலைப்பை தேர்ந்தெடுக்கவும் அல்லது தட்டச்சு செய்யவும்."
      : "Hi — I'm Varsha, and Lokesh is here too. Ask us about staying safe online, or about being a good person. You can type a question, or pick a lesson."
  });

  const card = document.createElement('div');
  card.className = 'home-card';

  const label = document.createElement('div');
  label.className = 'label';
  label.textContent = isTa ? "பாடங்கள்" : "Or pick a lesson";
  card.appendChild(label);

  const grid = document.createElement('div');
  grid.className = 'lesson-grid';

  ddData.forEach(topic => {
    const tile = document.createElement('div');
    tile.className = 'lesson-tile' + (topic.id === 'DD12' ? ' safety-tile' : '');
    
    const titleText = isTa 
      ? (topic.title_ta || topic.title || topic.title_en)
      : (topic.title_en || topic.title);

    tile.innerHTML = `
      <span class="ic">${topic.icon}</span>
      <span class="tt">${titleText}</span>
    `;
    tile.onclick = () => selectTopic(topic);
    grid.appendChild(tile);
  });
  card.appendChild(grid);

  // Starters aligned to the exact questions in digital_dharma.json & digital_dharma_ta.json
  const starterLabel = document.createElement('div');
  starterLabel.className = 'label';
  starterLabel.textContent = isTa ? "கேள்விகள்" : "Try one of these";
  card.appendChild(starterLabel);

  const starters = isTa ? [
    "நான் ஏன் உண்மையைச் சொல்ல வேண்டும்?",
    "ஒரு லிங்க் போலியானதா என்று எப்படி தெரிந்து கொள்வது?",
    "எனக்கு ஏன் வலுவான கடவுச்சொல் தேவை?",
    "நல்ல தொடுதல் மற்றும் தவறான தொடுதல் என்றால் என்ன?"
  ] : [
    "Why should I tell the truth?",
    "How can I tell if a link is fake?",
    "Why do I need a strong password?",
    "What is good touch and bad touch?"
  ];

  const sList = document.createElement('div');
  sList.className = 'starter-list';
  starters.forEach(st => {
    const chip = document.createElement('div');
    chip.className = 'starter-chip';
    chip.textContent = st;
    chip.onclick = () => handleUserQuestion(st);
    sList.appendChild(chip);
  });
  card.appendChild(sList);

  chatEl.appendChild(card);
}

function selectTopic(topic) {
  const isTa = currentLang === 'ta';
  const chipRow = document.createElement('div');
  chipRow.className = 'chip-row';
  (topic.questions || []).forEach(q => {
    const c = document.createElement('div');
    c.className = 'chip';
    c.textContent = isTa ? (q.question_ta || q.question || q.question_en) : (q.question_en || q.question);
    c.onclick = () => handleUserQuestion(c.textContent);
    chipRow.appendChild(c);
  });
  chatEl.appendChild(chipRow);
  chipRow.scrollIntoView({ behavior: 'smooth' });
}

function handleUserQuestion(text) {
  if (!text || !text.trim()) return;
  appendUserMessage(text);

  const typing = showTypingIndicator();
  setTimeout(async () => {
    typing.remove();
    const result = findAnswer(text);
    if (result) {
      const isTa = currentLang === 'ta';
      const englishAns = result.item.answer_en || result.item.answer;
      const cachedTamilAns = result.item.answer_ta || result.item.answer || result.item.answer_en;
      const ans = isTa
        ? await resolveTamilText(englishAns, cachedTamilAns)
        : englishAns;

      const related = (result.isSafety || !result.topic)
        ? []
        : (result.topic.questions || []).filter(q => q.id !== result.item.id).slice(0, 2);

      appendBotMessage({
        speaker: result.item.speaker || "varsha",
        text: ans,
        topic: result.topic,
        isSafety: result.isSafety,
        related
      });
    } else {
      handleUnknownQuestion(text);
    }
  }, 450);
}

function appendUserMessage(text) {
  const msg = document.createElement('div');
  msg.className = 'msg user';
  msg.innerHTML = `
    <div class="bubble-wrap">
      <div class="bubble">${escapeHtml(text)}</div>
    </div>
  `;
  chatEl.appendChild(msg);
  msg.scrollIntoView({ behavior: 'smooth' });
}

function appendBotMessage({ speaker, text, topic, isSafety = false, related = [] }) {
  const isTa = currentLang === 'ta';
  const name = speaker === 'lokesh' ? (isTa ? 'லோகேஷ்' : 'Lokesh') : (isTa ? 'வர்ஷா' : 'Varsha');
  const avatarSrc = speaker === 'lokesh' ? 'lokesh.webp' : 'varsha.webp';

  let formatted = escapeHtml(text);
  if (formatted.includes("1098")) {
    formatted = formatted.replace(/1098/g, '<a href="tel:1098" class="call-link">📞 1098</a>');
  }

  const topicTitle = topic 
    ? (isTa ? (topic.title_ta || topic.title || topic.title_en) : (topic.title_en || topic.title))
    : '';

  const msg = document.createElement('div');
  msg.className = 'msg bot';
  msg.innerHTML = `
    <img class="avatar-sm" src="${avatarSrc}" alt="${name}">
    <div class="bubble-wrap">
      <div class="speaker-name ${isSafety ? 'safety' : speaker}">${name} ${isSafety ? '· Child Safety Alert' : ''}</div>
      <div class="bubble ${isSafety ? 'safety-alert' : speaker}">${formatted}</div>
      ${topic ? `
        <div class="meta-row">
          <span class="topic-tag ${isSafety ? 'safety' : ''}">${topic.icon} ${topicTitle}</span>
          ${topic.lessonUrl ? `<a class="lesson-link" href="${topic.lessonUrl}" target="_blank" rel="noopener">Read Lesson →</a>` : ''}
        </div>
      ` : ''}
    </div>
  `;
  chatEl.appendChild(msg);

  if (!isSafety && related && related.length) {
    const bubbleWrap = msg.querySelector('.bubble-wrap');
    const wrap = document.createElement('div');
    wrap.className = 'related-wrap';
    const label = document.createElement('div');
    label.className = 'related-label';
    label.textContent = isTa ? 'மேலும் கேட்கலாம்' : 'You could also ask';
    wrap.appendChild(label);
    const chipRow = document.createElement('div');
    chipRow.className = 'chip-row';
    related.forEach(rq => {
      const c = document.createElement('div');
      c.className = 'chip';
      c.textContent = isTa ? (rq.question_ta || rq.question || rq.question_en) : (rq.question_en || rq.question);
      c.onclick = () => handleUserQuestion(c.textContent);
      chipRow.appendChild(c);
    });
    wrap.appendChild(chipRow);
    bubbleWrap.appendChild(wrap);
  }

  msg.scrollIntoView({ behavior: 'smooth' });
}

function handleUnknownQuestion(text) {
  const isTa = currentLang === 'ta';
  appendBotMessage({
    speaker: "varsha",
    text: isTa
      ? "இதற்கு பதில் இப்போது என்னிடம் இல்லை. வேறு வார்த்தைகளில் கேளுங்கள் அல்லது ஒரு பாடத்தைத் தேர்வு செய்யுங்கள். ஏதாவது கவலையாக இருந்தால், அல்லது யாராவது உங்களை காயப்படுத்தினால், எப்போது வேண்டுமானாலும் 1098-ஐ அழைக்கலாம் — இலவசம், மற்றும் உண்மையான உதவி கிடைக்கும்."
      : "I don't have an answer for that one yet! Try asking a different way, or pick a lesson. And if something's worrying you, or someone is hurting you, you can always call 1098 — it's free, anytime, and someone will really help."
  });
}

function escapeHtml(str) {
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

function showTypingIndicator() {
  const t = document.createElement('div');
  t.className = 'msg bot';
  t.innerHTML = `
    <div class="typing" style="margin-left: 42px;">
      <span></span><span></span><span></span>
    </div>
  `;
  chatEl.appendChild(t);
  t.scrollIntoView({ behavior: 'smooth' });
  return t;
}

// Events
btnEn.onclick = () => {
  if (currentLang === 'en') return;
  currentLang = 'en';
  btnEn.classList.add('active');
  btnTa.classList.remove('active');
  init();
};

btnTa.onclick = () => {
  if (currentLang === 'ta') return;
  currentLang = 'ta';
  btnTa.classList.add('active');
  btnEn.classList.remove('active');
  init();
};

btnLessons.onclick = () => window.open('https://lokeshvarsha.blogspot.com/p/digital-dharma-series-krishnas-timeless.html', '_blank', 'noopener');
btnReset.onclick = () => renderHomeCard();

init();
