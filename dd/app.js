// State
let currentLang = 'en'; // 'en' or 'ta'
let ddData = [];
let reviewQueue = [];

const chatEl = document.getElementById('chat');
const questionInput = document.getElementById('questionInput');
const sendBtn = document.getElementById('sendBtn');
const btnEn = document.getElementById('btnEn');
const btnTa = document.getElementById('btnTa');
const btnLessons = document.getElementById('btnLessons');
const btnReset = document.getElementById('btnReset');
const queueChip = document.getElementById('queueChip');
const queueCount = document.getElementById('queueCount');
const drawerBackdrop = document.getElementById('drawerBackdrop');
const drawerClose = document.getElementById('drawerClose');
const queueList = document.getElementById('queueList');
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
      match_phrases: ["what is good touch bad touch", "what is bad touch", "what is safe touch", "difference good bad touch"],
      answer: "Good touch feels safe and caring, like a hug from family when you want it. Bad touch hurts, feels uncomfortable, or touches private parts. If bad touch happens, say no and tell a trusted adult. Call 1098.",
      answer_ta: "நல்ல தொடுதல் பாதுகாப்பாக இருக்கும். தவறான தொடுதல் வலிக்கும், தனி உறுப்புகளை தொடும். நடந்தால் வேண்டாம் என்று சொல்லி பெரியவரிடம் சொல். 1098.",
      speaker: "varsha",
      tags: ["safety_critical"]
    },
    {
      id: "DD12-Q009",
      question: "What is Childline 1098?",
      question_ta: "சைல்ட்லைன் 1098 என்றால் என்ன?",
      keywords: ["1098", "childline", "helpline", "emergency number"],
      match_phrases: ["what is 1098", "what is childline", "how do i call childline", "call 1098", "1098 number", "childline number", "who is childline"],
      answer: "Childline 1098 is a free helpline in India for any child who needs help or feels unsafe. You can call it any time, day or night, and talk to someone who will listen and help. It's free, and you won't get in trouble for calling.",
      answer_ta: "சைல்ட்லைன் 1098 என்பது இந்தியாவில் குழந்தைகளுக்கான இலவச உதவி எண். எப்போது வேண்டுமானாலும் அழைக்கலாம். இலவசம், தண்டனை இல்லை.",
      speaker: "varsha",
      tags: ["safety_critical"]
    }
  ]
};

// Fetch data & initialize
async function init() {
  const fileName = currentLang === 'ta' ? 'digital_dharma_ta.json' : 'digital_dharma.json';
  
  try {
    const res = await fetch(fileName);
    if (res.ok) {
      const data = await res.json();
      ddData = data.topics || (Array.isArray(data) ? data : []);
    } else {
      console.warn(`Failed to fetch ${fileName}, status: ${res.status}`);
    }
  } catch (e) {
    console.warn(`Could not load ${fileName}, using fallback.`, e);
  }

  // Ensure DD12 safety topic is present
  if (!ddData.some(t => t.id === "DD12")) {
    ddData.push(DD12_SAFETY);
  }

  // Load Review Queue from LocalStorage
  try {
    const saved = localStorage.getItem('dd_review_queue');
    if (saved) reviewQueue = JSON.parse(saved);
  } catch (e) {}
  updateQueueBadge();

  if (loadingScrim) loadingScrim.classList.add('hidden');
  renderHomeCard();
}

// Emergency Safety Priority Matcher
function findAnswer(queryText) {
  const q = queryText.toLowerCase().trim();

  // Tier 0: Direct Helpline & 1098 Inquiries
  if (q.includes("1098") || q.includes("childline")) {
    const safety = ddData.find(t => t.id === "DD12");
    const item = safety?.questions?.find(qi => qi.id === "DD12-Q009");
    if (item) return { item, topic: safety, isSafety: true };
  }

  // Tier 1: Emergency Safety Check (Always evaluated first)
  const safety = ddData.find(t => t.id === "DD12");
  if (safety) {
    for (const qItem of safety.questions || []) {
      if (qItem.match_phrases && qItem.match_phrases.some(phrase => q.includes(phrase.toLowerCase()))) {
        return { item: qItem, topic: safety, isSafety: true };
      }
      const matched = (qItem.keywords || []).filter(k => q.includes(k.toLowerCase()));
      if (matched.length >= 2 || (matched.length >= 1 && (q.includes("touch") || q.includes("hurt") || q.includes("unsafe") || q.includes("photo") || q.includes("secret")))) {
        return { item: qItem, topic: safety, isSafety: true };
      }
    }
  }

  // Tier 1.5: Conversational Shortcuts (Identity, Feelings, Greetings)
  if (q.includes("who are you") || q.includes("who r u") || q.includes("what is your name")) {
    const dd11 = ddData.find(t => t.id === "DD11");
    const item = dd11?.questions?.find(qi => qi.id === "DD11-Q006" || qi.id === "DD11-Q002");
    if (item) return { item, topic: dd11, isSafety: false };
  }
  if (q.includes("nobody likes me") || q.includes("no one likes me") || q.includes("i am sad") || q.includes("feel sad")) {
    const dd01 = ddData.find(t => t.id === "DD01");
    const item = dd01?.questions?.find(qi => qi.id === "DD01-Q004");
    if (item) return { item, topic: dd01, isSafety: false };
  }

  // Tier 2: Standard Lesson Matching
  for (const topic of ddData) {
    if (topic.id === "DD12") continue;
    for (const qItem of topic.questions || []) {
      const enQ = (qItem.question_en || qItem.question || '').toLowerCase();
      const taQ = (qItem.question_ta || '').toLowerCase();

      if (qItem.match_phrases && qItem.match_phrases.some(p => q.includes(p.toLowerCase()))) {
        return { item: qItem, topic, isSafety: false };
      }
      if ((enQ && q.includes(enQ)) || (taQ && q.includes(taQ))) {
        return { item: qItem, topic, isSafety: false };
      }
      if (qItem.keywords && qItem.keywords.filter(k => q.includes(k.toLowerCase())).length >= 2) {
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
    
    // Normalizes properties between digital_dharma.json & digital_dharma_ta.json
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

  // Starters
  const starterLabel = document.createElement('div');
  starterLabel.className = 'label';
  starterLabel.textContent = isTa ? "கேள்விகள்" : "Try one of these";
  card.appendChild(starterLabel);

  const starters = isTa ? [
    "உண்மையை ஏன் பேச வேண்டும்?",
    "போலி லிங்க் எப்படி கண்டுபிடிப்பது?",
    "ஸ்ட்ராங் பாஸ்வேர்ட் எதற்கு?",
    "நல்ல தொடுதல் என்றால் என்ன?"
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
  questionInput.value = '';

  const typing = showTypingIndicator();
  setTimeout(() => {
    typing.remove();
    const result = findAnswer(text);
    if (result) {
      const isTa = currentLang === 'ta';
      const ans = isTa 
        ? (result.item.answer_ta || result.item.answer || result.item.answer_en)
        : (result.item.answer_en || result.item.answer);

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
  const item = { question: text, time: new Date().toISOString() };
  reviewQueue.unshift(item);
  try { localStorage.setItem('dd_review_queue', JSON.stringify(reviewQueue)); } catch(e){}
  updateQueueBadge();

  appendBotMessage({
    speaker: "varsha",
    text: isTa
      ? "இந்தக் கேள்விக்கு என்னிடம் இன்னும் அங்கீகரிக்கப்பட்ட பதில் இல்லை. எங்கள் மதிப்பாய்வு வரிசையில் இதை சேர்த்துள்ளேன்!"
      : "I don't have an approved answer for this question yet. I've sent it to our review queue for fact-checking!"
  });
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

function updateQueueBadge() {
  queueCount.textContent = reviewQueue.length;
}

function escapeHtml(str) {
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

// Events
sendBtn.onclick = () => handleUserQuestion(questionInput.value);
questionInput.onkeydown = (e) => { if (e.key === 'Enter') handleUserQuestion(questionInput.value); };

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

// UPDATED: Lessons button now goes to the blog series page
btnLessons.onclick = () => {
  window.open("https://lokeshvarsha.blogspot.com/p/digital-dharma-series-krishnas-timeless.html", "_blank", "noopener");
};

btnReset.onclick = () => renderHomeCard();

queueChip.onclick = () => {
  queueList.innerHTML = reviewQueue.length === 0
    ? '<div class="queue-empty">No pending questions in the review queue.</div>'
    : reviewQueue.map(q => `
        <div class="queue-item">
          <div class="q">${escapeHtml(q.question)}</div>
          <div class="t">${new Date(q.time).toLocaleDateString()}</div>
        </div>
      `).join('');
  drawerBackdrop.classList.add('open');
};
drawerClose.onclick = () => drawerBackdrop.classList.remove('open');

init();
