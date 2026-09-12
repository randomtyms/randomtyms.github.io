// Ask Lokesh & Varsha — Digital Dharma
// Matching: question id (chips) → exact phrase → longest approved phrase.
// No keyword bags. EN+TA are one bank. Chips never re-parse text.

let currentLang = "en";
let ddData = [];

const BHASHINI_CONFIG = {
  enabled: false,
  endpoint: "",
  apiKey: "",
  sourceLang: "en",
  targetLang: "ta",
};

async function translateViaBhashini(text) {
  if (!BHASHINI_CONFIG.enabled || !BHASHINI_CONFIG.endpoint) return null;
  try {
    const res = await fetch(BHASHINI_CONFIG.endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: BHASHINI_CONFIG.apiKey,
      },
      body: JSON.stringify({
        input: [{ source: text }],
        config: {
          language: {
            sourceLanguage: BHASHINI_CONFIG.sourceLang,
            targetLanguage: BHASHINI_CONFIG.targetLang,
          },
        },
      }),
    });
    const data = await res.json();
    return data?.output?.[0]?.target || null;
  } catch (e) {
    console.error("BHASHINI translation failed, falling back to cached Tamil:", e);
    return null;
  }
}

async function resolveTamilText(englishText, cachedTamil) {
  const live = await translateViaBhashini(englishText);
  return live || cachedTamil;
}

const chatEl = document.getElementById("chat");
const btnEn = document.getElementById("btnEn");
const btnTa = document.getElementById("btnTa");
const btnLessons = document.getElementById("btnLessons");
const btnReset = document.getElementById("btnReset");
const loadingScrim = document.getElementById("loadingScrim");

const STARTER_IDS = ["DD01-Q001", "DD02-Q001", "DD03-Q001", "DD12-Q008"];

// Offline failsafe if digital_dharma.json has no DD12.
const DD12_SAFETY = {
  id: "DD12",
  title: "Safety Help - When Someone Hurts You",
  title_en: "Safety Help - When Someone Hurts You",
  title_ta: "பாதுகாப்பு உதவி - துன்புறுத்தல் விழிப்புணர்வு",
  icon: "🛡️",
  lessonUrl: "https://lokeshvarsha.blogspot.com/p/safety-help.html",
  questions: [
    {
      id: "DD12-Q001",
      question: "Next door man hurt me",
      question_en: "Next door man hurt me",
      question_ta: "அக்கம்பக்கத்து நபர் என்னை துன்புறுத்தினார்",
      match_phrases: [
        "next door man hurt me",
        "neighbour hurt me",
        "neighbor hurt me",
        "someone hurt me",
        "someone is hurting me",
        "my uncle hits me",
        "someone at home hurts me",
        "family member hurt me",
        "someone did something bad to me",
      ],
      answer: "I'm so sorry. It's not your fault. You did right telling me. Please tell your parent, guardian, or teacher right now. If you feel unsafe, call Childline 1098 anytime - it's free.",
      answer_en: "I'm so sorry. It's not your fault. You did right telling me. Please tell your parent, guardian, or teacher right now. If you feel unsafe, call Childline 1098 anytime - it's free.",
      answer_ta: "வருந்துகிறேன். இது உன் தவறு இல்லை. உடனே பெற்றோர் அல்லது ஆசிரியரிடம் சொல். பாதுகாப்பில்லை என்றால் 1098-க்கு அழை.",
      speaker: "varsha",
    },
    {
      id: "DD12-Q002",
      question: "He touched me badly",
      question_en: "He touched me badly",
      question_ta: "அவர் என்னை தவறாக தொட்டார்",
      match_phrases: [
        "he touched me badly",
        "she touched me badly",
        "touched me in private parts",
        "touched my private parts",
        "someone touched me badly",
        "badly touched me",
        "somebody is touching me",
        "touching me in a wrong way",
        "someone touched me and i didn't like it",
      ],
      answer: "Thank you for telling me. Bad touch is never your fault. Your body belongs to you. Tell a trusted adult today and don't keep it secret. You can call Childline 1098 for help.",
      answer_en: "Thank you for telling me. Bad touch is never your fault. Your body belongs to you. Tell a trusted adult today and don't keep it secret. You can call Childline 1098 for help.",
      answer_ta: "சொன்னதற்கு நன்றி. தவறான தொடுதல் உன் தவறு இல்லை. உன் உடல் உனக்கே சொந்தம். இன்றே நம்பிக்கையான பெரியவரிடம் சொல். 1098 உதவும்.",
      speaker: "varsha",
    },
    {
      id: "DD12-Q003",
      question: "Someone is asking for my photos",
      question_en: "Someone is asking for my photos",
      question_ta: "யாரோ என் புகைப்படங்களை கேட்கிறார்கள்",
      match_phrases: [
        "someone asking for my photos",
        "asking for private photos",
        "send me your photo",
        "send your pics",
        "asking for nude photo",
        "online asking for pics",
        "asking for my picture",
      ],
      answer: "Don't send photos. Show the message to a trusted adult right away. Block that person. Call Childline 1098 if they pressure you.",
      answer_en: "Don't send photos. Show the message to a trusted adult right away. Block that person. Call Childline 1098 if they pressure you.",
      answer_ta: "புகைப்படம் அனுப்பாதே. உடனே பெரியவரிடம் காட்டு. Block செய். 1098 உதவும்.",
      speaker: "lokesh",
    },
    {
      id: "DD12-Q004",
      question: "I feel unsafe",
      question_en: "I feel unsafe",
      question_ta: "எனக்கு பயமாகவும் பாதுகாப்பற்றதாகவும் உள்ளது",
      match_phrases: [
        "i feel unsafe",
        "i am scared",
        "i feel not safe",
        "i feel unsafe at home",
        "i feel unsafe at school",
        "i am afraid",
        "please help me",
        "can i tell you something bad happened",
        "i don't feel safe with someone",
      ],
      answer: "If you feel unsafe, find a trusted adult near you now. Move to a safe place if you can. You can call Childline 1098 anytime. You deserve to be safe.",
      answer_en: "If you feel unsafe, find a trusted adult near you now. Move to a safe place if you can. You can call Childline 1098 anytime. You deserve to be safe.",
      answer_ta: "பாதுகாப்பில்லை என்றால் அருகில் உள்ள பெரியவரிடம் போ. பாதுகாப்பான இடத்திற்கு போய் 1098-க்கு அழை.",
      speaker: "varsha",
    },
    {
      id: "DD12-Q005",
      question: "Someone told me to keep a secret about touching",
      question_en: "Someone told me to keep a secret about touching",
      question_ta: "தொடுதல் பற்றி ரகசியம் காக்க சொல்கிறார்கள்",
      match_phrases: [
        "told me to keep secret",
        "secret about touching",
        "threatened me to keep secret",
        "said dont tell anyone about touching",
      ],
      answer: "Secrets about touching should not be kept. You won't get in trouble for telling. Tell a trusted adult today. Call 1098 for help.",
      answer_en: "Secrets about touching should not be kept. You won't get in trouble for telling. Tell a trusted adult today. Call 1098 for help.",
      answer_ta: "தொடுதல் பற்றிய ரகசியத்தை வைக்காதே. சொன்னால் தண்டனை இல்லை. இன்றே பெரியவரிடம் சொல். 1098 உதவும்.",
      speaker: "varsha",
    },
    {
      id: "DD12-Q006",
      question: "Someone is scaring me online",
      question_en: "Someone is scaring me online",
      question_ta: "இணையத்தில் யாரோ என்னை மிரட்டுகிறார்கள்",
      match_phrases: [
        "someone scaring me online",
        "threatening me online",
        "blackmailing me",
        "someone scaring me in game",
        "scaring me on chat",
      ],
      answer: "Don't reply. Take a screenshot if you can and show a trusted adult. Block and report that person. Call 1098 for help.",
      answer_en: "Don't reply. Take a screenshot if you can and show a trusted adult. Block and report that person. Call 1098 for help.",
      answer_ta: "பதில் அனுப்பாதே. Screenshot எடுத்து பெரியவரிடம் காட்டு. Block செய். 1098 உதவும்.",
      speaker: "lokesh",
    },
    {
      id: "DD12-Q007",
      question: "He is asking me to meet alone",
      question_en: "He is asking me to meet alone",
      question_ta: "அவர் என்னை தனியாக சந்திக்க அழைக்கிறார்",
      match_phrases: [
        "asking me to meet alone",
        "wants to meet me alone",
        "told me to meet outside",
        "meet me secretly",
      ],
      answer: "Don't go alone. Tell a trusted adult about this message right away. Don't keep meeting plans secret. Call 1098 if you need help.",
      answer_en: "Don't go alone. Tell a trusted adult about this message right away. Don't keep meeting plans secret. Call 1098 if you need help.",
      answer_ta: "தனியாக போகாதே. உடனே பெரியவரிடம் சொல். ரகசிய சந்திப்பு வேண்டாம். 1098 உதவும்.",
      speaker: "varsha",
    },
    {
      id: "DD12-Q008",
      question: "What is good touch and bad touch?",
      question_en: "What is good touch and bad touch?",
      question_ta: "நல்ல தொடுதல் மற்றும் தவறான தொடுதல் என்றால் என்ன?",
      match_phrases: [
        "what is good touch and bad touch",
        "what is good touch bad touch",
        "what is bad touch",
        "what is safe touch",
        "difference good bad touch",
        "good touch and bad touch",
        "நல்ல தொடுதல் மற்றும் தவறான தொடுதல் என்றால் என்ன",
        "நல்ல தொடுதல் என்றால் என்ன",
      ],
      answer: "Good touch feels safe and caring, like a hug from family when you want it. Bad touch hurts, feels uncomfortable, or touches private parts. If bad touch happens, say no and tell a trusted adult. Call 1098.",
      answer_en: "Good touch feels safe and caring, like a hug from family when you want it. Bad touch hurts, feels uncomfortable, or touches private parts. If bad touch happens, say no and tell a trusted adult. Call 1098.",
      answer_ta: "நல்ல தொடுதல் பாதுகாப்பாக இருக்கும். தவறான தொடுதல் வலிக்கும், தனி உறுப்புகளை தொடும். நடந்தால் வேண்டாம் என்று சொல்லி பெரியவரிடம் சொல். 1098.",
      speaker: "varsha",
    },
    {
      id: "DD12-Q009",
      question: "What is 1098? Whose number is 1098?",
      question_en: "What is 1098? Whose number is 1098?",
      question_ta: "1098 யாருடைய எண்? 1098 என்றால் என்ன?",
      match_phrases: [
        "what is 1098",
        "what is childline",
        "how do i call childline",
        "call 1098",
        "1098 number",
        "childline number",
        "who is childline",
        "whose number is 1098",
        "1098 யாருடைய எண்",
        "1098 என்றால் என்ன",
      ],
      answer: "1098 is India's free, 24/7 emergency phone helpline for children (Childline). Kind people answer the phone to help keep you safe from harm, bad touch, or danger. You can call it anytime from any phone without recharge.",
      answer_en: "1098 is India's free, 24/7 emergency phone helpline for children (Childline). Kind people answer the phone to help keep you safe from harm, bad touch, or danger. You can call it anytime from any phone without recharge.",
      answer_ta: "1098 என்பது குழந்தைகளுக்கான இந்தியாவின் இலவச அவசர உதவி எண் (Childline). ஆபத்து அல்லது துன்புறுத்தலில் இருந்து உங்களைப் பாதுகாக்க உதவும் நபர்கள் இதில் பேசுவார்கள். எந்த போனிலிருந்தும் எப்போது வேண்டுமானாலும் இலவசமாக அழைக்கலாம்.",
      speaker: "varsha",
    },
  ],
};

function cleanMatchText(str) {
  return (str || "")
    .toLowerCase()
    .replace(/[?.,!—–\-_:;'"()[\]]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function indexById(list) {
  const map = {};
  (list || []).forEach((item) => {
    if (item && item.id) map[item.id] = item;
  });
  return map;
}

function uniquePhrases(arr) {
  const seen = new Set();
  const out = [];
  (arr || []).forEach((p) => {
    const c = cleanMatchText(p);
    if (!c || seen.has(c)) return;
    seen.add(c);
    out.push(p);
  });
  return out;
}

function mergeTopics(enTopics, taTopics) {
  const taMap = indexById(taTopics);
  return (enTopics || []).map((topic) => {
    const tt = taMap[topic.id] || {};
    const tq = indexById(tt.questions);
    return {
      ...topic,
      title_en: topic.title_en || topic.title,
      title_ta: tt.title_ta || topic.title_ta || topic.title,
      questions: (topic.questions || []).map((q) => {
        const x = tq[q.id] || {};
        return {
          ...q,
          question_en: q.question_en || q.question,
          question_ta: x.question_ta || q.question_ta || q.question,
          answer_en: q.answer_en || q.answer,
          answer_ta: x.answer_ta || q.answer_ta || q.answer,
          speaker: q.speaker || x.speaker,
          match_phrases: uniquePhrases([
            q.question_en || q.question,
            x.question_en,
            x.question_ta || q.question_ta,
            ...(q.match_phrases || []),
            ...(x.match_phrases || []),
          ]),
        };
      }),
    };
  });
}

async function fetchJson(urls) {
  for (const url of urls) {
    try {
      const res = await fetch(url);
      if (res.ok) return await res.json();
    } catch (e) {}
  }
  return null;
}

async function init() {
  const enFile = await fetchJson(["digital_dharma.json", "./digital_dharma.json", "../digital_dharma.json"]);
  const taFile = await fetchJson(["digital_dharma_ta.json", "./digital_dharma_ta.json", "../digital_dharma_ta.json"]);

  const enTopics = enFile ? enFile.topics || (Array.isArray(enFile) ? enFile : []) : [];
  const taTopics = taFile ? taFile.topics || (Array.isArray(taFile) ? taFile : []) : [];

  ddData = mergeTopics(enTopics, taTopics);

  if (!ddData.some((t) => t.id === "DD12")) {
    ddData.push(DD12_SAFETY);
  } else {
    const live = ddData.find((t) => t.id === "DD12");
    const failsafe = indexById(DD12_SAFETY.questions);
    live.questions = (live.questions || []).map((q) => {
      const fb = failsafe[q.id];
      if (!fb) return q;
      return {
        ...q,
        match_phrases: uniquePhrases([...(q.match_phrases || []), ...(fb.match_phrases || [])]),
        speaker: q.speaker || fb.speaker,
      };
    });
  }

  if (loadingScrim) loadingScrim.classList.add("hidden");
  renderHomeCard();
}

function displayQuestion(item) {
  if (currentLang === "ta") return item.question_ta || item.question_en || item.question || "";
  return item.question_en || item.question || "";
}

function findById(id) {
  for (const topic of ddData) {
    const item = (topic.questions || []).find((q) => q.id === id);
    if (item) return { item, topic, isSafety: topic.id === "DD12" };
  }
  return null;
}

function itemPhrases(item) {
  return uniquePhrases([
    item.question_en || item.question,
    item.question_ta,
    ...(item.match_phrases || []),
  ]);
}

// Exact phrase wins. A phrase may sit inside the query only if it is long
// enough to be a real question — never "bad touch" inside "what is good touch and bad touch".
function phraseScore(query, phrase) {
  const q = cleanMatchText(query);
  const p = cleanMatchText(phrase);
  if (!q || !p) return 0;
  if (q === p) return 1000 + p.length;
  if (p.length >= 18 && q.includes(p)) return 100 + p.length;
  if (q.length >= 18 && p.includes(q)) return 80 + q.length;
  return 0;
}

function bestPhraseHit(query, topics, isSafety) {
  let best = null;
  let bestScore = 0;
  topics.forEach((topic) => {
    (topic.questions || []).forEach((item) => {
      itemPhrases(item).forEach((ph) => {
        const score = phraseScore(query, ph);
        if (score > bestScore) {
          bestScore = score;
          best = { item, topic, isSafety };
        }
      });
    });
  });
  return bestScore > 0 ? best : null;
}

function findAnswer(queryText) {
  const qClean = cleanMatchText(queryText);
  const qRaw = (queryText || "").toLowerCase().trim();
  if (!qClean) return null;

  if (/\b1098\b/.test(qRaw) || qClean.includes("childline") || qClean.includes("சைல்ட்லைன்")) {
    return findById("DD12-Q009");
  }

  const safety = ddData.filter((t) => t.id === "DD12");
  const lessons = ddData.filter((t) => t.id !== "DD12");

  const safetyHit = bestPhraseHit(queryText, safety, true);
  if (safetyHit) return safetyHit;

  return bestPhraseHit(queryText, lessons, false);
}

function renderHomeCard() {
  chatEl.innerHTML = "";
  const isTa = currentLang === "ta";

  appendBotMessage({
    speaker: "varsha",
    text: isTa
      ? "வணக்கம்! நான் வர்ஷா, என்னுடன் லோகேஷும் இருக்கிறான். இணையத்தில் பாதுகாப்பாக இருப்பது மற்றும் நல்ல பழக்கங்கள் பற்றி எங்களிடம் கேட்கலாம். கீழே ஒரு பாடத்தை அல்லது கேள்வியை தேர்வு செய்யுங்கள்."
      : "Hi — I'm Varsha, and Lokesh is here too. Ask us about staying safe online, or about being a good person. Pick a lesson, or try one of the questions below.",
  });

  const card = document.createElement("div");
  card.className = "home-card";

  const label = document.createElement("div");
  label.className = "label";
  label.textContent = isTa ? "பாடங்கள்" : "Or pick a lesson";
  card.appendChild(label);

  const grid = document.createElement("div");
  grid.className = "lesson-grid";
  ddData.forEach((topic) => {
    const tile = document.createElement("button");
    tile.type = "button";
    tile.className = "lesson-tile" + (topic.id === "DD12" ? " safety-tile" : "");
    const titleText = isTa
      ? topic.title_ta || topic.title || topic.title_en
      : topic.title_en || topic.title;
    const ic = document.createElement("span");
    ic.className = "ic";
    ic.textContent = topic.icon || "";
    const tt = document.createElement("span");
    tt.className = "tt";
    tt.textContent = titleText;
    tile.appendChild(ic);
    tile.appendChild(tt);
    tile.onclick = () => selectTopic(topic);
    grid.appendChild(tile);
  });
  card.appendChild(grid);

  const starterLabel = document.createElement("div");
  starterLabel.className = "label";
  starterLabel.textContent = isTa ? "கேள்விகள்" : "Try one of these";
  card.appendChild(starterLabel);

  const sList = document.createElement("div");
  sList.className = "starter-list";
  STARTER_IDS.forEach((id) => {
    const found = findById(id);
    if (!found) return;
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "starter-chip";
    chip.textContent = displayQuestion(found.item);
    chip.onclick = () => handleKnown(found);
    sList.appendChild(chip);
  });
  card.appendChild(sList);

  chatEl.appendChild(card);
}

function selectTopic(topic) {
  const chipRow = document.createElement("div");
  chipRow.className = "chip-row";
  (topic.questions || []).forEach((q) => {
    const c = document.createElement("button");
    c.type = "button";
    c.className = "chip";
    c.textContent = displayQuestion(q);
    c.onclick = () => handleKnown({ item: q, topic, isSafety: topic.id === "DD12" });
    chipRow.appendChild(c);
  });
  chatEl.appendChild(chipRow);
  chipRow.scrollIntoView({ behavior: "smooth" });
}

function handleKnown(found) {
  if (!found || !found.item) return;
  appendUserMessage(displayQuestion(found.item));
  presentAnswer(found);
}

function presentAnswer(found) {
  const typing = showTypingIndicator();
  setTimeout(async () => {
    typing.remove();
    const isTa = currentLang === "ta";
    const englishAns = found.item.answer_en || found.item.answer;
    const cachedTamilAns = found.item.answer_ta || found.item.answer || found.item.answer_en;
    const ans = isTa ? await resolveTamilText(englishAns, cachedTamilAns) : englishAns;
    const related =
      found.isSafety || !found.topic
        ? []
        : (found.topic.questions || []).filter((q) => q.id !== found.item.id).slice(0, 2);

    appendBotMessage({
      speaker: found.item.speaker || "varsha",
      text: ans,
      topic: found.topic,
      isSafety: found.isSafety,
      related,
      relatedTopic: found.topic,
    });
  }, 450);
}

function appendUserMessage(text) {
  const msg = document.createElement("div");
  msg.className = "msg user";
  const wrap = document.createElement("div");
  wrap.className = "bubble-wrap";
  const bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.textContent = text;
  wrap.appendChild(bubble);
  msg.appendChild(wrap);
  chatEl.appendChild(msg);
  msg.scrollIntoView({ behavior: "smooth" });
}

function appendBotMessage({ speaker, text, topic, isSafety = false, related = [], relatedTopic }) {
  const isTa = currentLang === "ta";
  const name = speaker === "lokesh" ? (isTa ? "லோகேஷ்" : "Lokesh") : isTa ? "வர்ஷா" : "Varsha";
  const avatarSrc = speaker === "lokesh" ? "lokesh.webp" : "varsha.webp";

  const msg = document.createElement("div");
  msg.className = "msg bot";

  const img = document.createElement("img");
  img.className = "avatar-sm";
  img.src = avatarSrc;
  img.alt = name;

  const wrap = document.createElement("div");
  wrap.className = "bubble-wrap";

  const who = document.createElement("div");
  who.className = "speaker-name " + (isSafety ? "safety" : speaker);
  who.textContent = isSafety ? name + " · Child Safety Alert" : name;

  const bubble = document.createElement("div");
  bubble.className = "bubble " + (isSafety ? "safety-alert" : speaker);
  const parts = String(text || "").split(/(1098)/g);
  parts.forEach((part) => {
    if (part === "1098") {
      const a = document.createElement("a");
      a.href = "tel:1098";
      a.className = "call-link";
      a.textContent = "1098";
      bubble.appendChild(a);
    } else {
      bubble.appendChild(document.createTextNode(part));
    }
  });

  wrap.appendChild(who);
  wrap.appendChild(bubble);

  if (topic) {
    const meta = document.createElement("div");
    meta.className = "meta-row";
    const tag = document.createElement("span");
    tag.className = "topic-tag" + (isSafety ? " safety" : "");
    tag.textContent =
      (topic.icon ? topic.icon + " " : "") +
      (isTa ? topic.title_ta || topic.title || topic.title_en : topic.title_en || topic.title);
    meta.appendChild(tag);
    if (topic.lessonUrl) {
      const link = document.createElement("a");
      link.className = "lesson-link";
      link.href = topic.lessonUrl;
      link.target = "_blank";
      link.rel = "noopener";
      link.textContent = isTa ? "பாடத்தை படிக்கவும் →" : "Read Lesson →";
      meta.appendChild(link);
    }
    wrap.appendChild(meta);
  }

  if (!isSafety && related && related.length) {
    const rwrap = document.createElement("div");
    rwrap.className = "related-wrap";
    const rlabel = document.createElement("div");
    rlabel.className = "related-label";
    rlabel.textContent = isTa ? "மேலும் கேட்கலாம்" : "You could also ask";
    rwrap.appendChild(rlabel);
    const chipRow = document.createElement("div");
    chipRow.className = "chip-row";
    related.forEach((rq) => {
      const c = document.createElement("button");
      c.type = "button";
      c.className = "chip";
      c.textContent = displayQuestion(rq);
      c.onclick = () =>
        handleKnown({
          item: rq,
          topic: relatedTopic || topic,
          isSafety: false,
        });
      chipRow.appendChild(c);
    });
    rwrap.appendChild(chipRow);
    wrap.appendChild(rwrap);
  }

  msg.appendChild(img);
  msg.appendChild(wrap);
  chatEl.appendChild(msg);
  msg.scrollIntoView({ behavior: "smooth" });
}

function showTypingIndicator() {
  const t = document.createElement("div");
  t.className = "msg bot";
  t.innerHTML =
    '<div class="typing" style="margin-left: 42px;"><span></span><span></span><span></span></div>';
  chatEl.appendChild(t);
  t.scrollIntoView({ behavior: "smooth" });
  return t;
}

function setLang(lang) {
  if (currentLang === lang) return;
  currentLang = lang;
  btnEn.classList.toggle("active", lang === "en");
  btnTa.classList.toggle("active", lang === "ta");
  document.documentElement.lang = lang === "ta" ? "ta" : "en";
  renderHomeCard();
}

btnEn.onclick = () => setLang("en");
btnTa.onclick = () => setLang("ta");
btnLessons.onclick = () =>
  window.open(
    "https://lokeshvarsha.blogspot.com/p/digital-dharma-series-krishnas-timeless.html",
    "_blank",
    "noopener",
  );
btnReset.onclick = () => renderHomeCard();

init();
