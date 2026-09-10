/**
 * Ask Lokesh & Varsha - Digital Dharma App Logic
 */

const VARSHA_URL = "varsha.webp";
const LOKESH_URL = "lokesh.webp";
const STARTER_IDS = ["DD01-Q001", "DD02-Q001", "DD03-Q001", "DD09-Q001"];

let KB = [];
let TOPICS = [];
let KB_BY_ID = {};
let currentAnswerer = "VARSHA";
let lang = "en";
let reviewQueue = [];
let autoAnswerMinScore = 0.55;

const UNKNOWN_ANSWER = {
  en: "That's an interesting question. We don't have an answer for that one yet.",
  ta: "அது ஒரு சுவாரஸ்யமான கேள்வி. எங்களிடம் இன்னும் பதில் இல்லை."
};

const STOPWORDS = new Set([
  "a","an","the","is","are","am","was","were","be","been","being",
  "do","does","did","doing","to","of","in","on","for","and","or","but","if","then","so",
  "i","me","my","you","your","it","its","this","that","these","those","he","she","they",
  "we","us","our","what","when","where","why","how","who","whom","should","would","could",
  "can","will","shall","may","might","must","not","no","don","dont","doesn","didn",
  "someone","something","somebody","about","with","at","by","from","up","out","as",
  "have","has","had","there","here","just","really","very","get","got"
]);

const chatEl = document.getElementById('chat');
const inputEl = document.getElementById('questionInput');
const sendBtn = document.getElementById('sendBtn');
const queueChip = document.getElementById('queueChip');
const queueCount = document.getElementById('queueCount');
const drawerBackdrop = document.getElementById('drawerBackdrop');
const drawerClose = document.getElementById('drawerClose');
const queueList = document.getElementById('queueList');
const btnEn = document.getElementById('btnEn');
const btnTa = document.getElementById('btnTa');
const btnLessons = document.getElementById('btnLessons');
const btnReset = document.getElementById('btnReset');
const loadingScrim = document.getElementById('loadingScrim');

function normalize(str) { 
  return (str || '').toLowerCase().replace(/[^\w\s]/g,' ').replace(/\s+/g,' ').trim(); 
}

function stem(word) {
  if(word.length > 4 && word.endsWith('ied')) return word.slice(0,-3) + 'y';
  if(word.length > 5 && word.endsWith('ing')) return word.slice(0,-3);
  if(word.length > 4 && word.endsWith('ed')) return word.slice(0,-2);
  if(word.length > 4 && word.endsWith('ies')) return word.slice(0,-3) + 'y';
  if(word.length > 4 && word.endsWith('es')) return word.slice(0,-2);
  if(word.length > 4 && word.endsWith('s') && !word.endsWith('ss')) return word.slice(0,-1);
  return word;
}

function rawTokens(str) { return normalize(str).split(' ').filter(Boolean); }
function contentTokens(str) { return rawTokens(str).filter(t => !STOPWORDS.has(t)).map(stem); }

function jaccard(aTokens, bTokens) {
  const a = new Set(aTokens), b = new Set(bTokens);
  if(a.size === 0 || b.size === 0) return 0;
  let inter = 0;
  for(const t of a) if(b.has(t)) inter++;
  return inter / (new Set([...a, ...b]).size);
}

function scoreQuestion(inputNorm, inputContent, q) {
  for(const phrase of (q.match_phrases || [])) {
    if(normalize(phrase) === inputNorm) return 1.0;
  }
  const kwStemmed = new Set((q.keywords || []).map(k => stem(normalize(k))));
  let kwHits = 0;
  for(const tok of inputContent) {
    for(const kw of kwStemmed) {
      if(kw === tok || kw.includes(tok) || tok.includes(kw)) { kwHits++; break; }
    }
  }
  const keywordScore = inputContent.length ? kwHits / inputContent.length : 0;
  let bestPhraseJ = 0;
  for(const phrase of (q.match_phrases || [])) {
    bestPhraseJ = Math.max(bestPhraseJ, jaccard(contentTokens(phrase), inputContent));
  }
  const questionJ = jaccard(contentTokens(q.question), inputContent);
  let final = Math.min(1, 0.55 * keywordScore + 0.35 * bestPhraseJ + 0.1 * questionJ);
  if(inputContent.length < 2) final = Math.min(final, 0.5);
  return final;
}

function rankCandidates(input) {
  const inputNorm = normalize(input);
  const inputContent = contentTokens(input);
  const scored = KB.map(q => ({ q, score: scoreQuestion(inputNorm, inputContent, q) }));
  scored.sort((a, b) => b.score - a.score);
  return scored;
}

function nextCharacter() { 
  currentAnswerer = currentAnswerer === "VARSHA" ? "LOKESH" : "VARSHA"; 
}

function charInfo(id) {
  return id === "VARSHA"
    ? { name: "Varsha", cls: "varsha", avatar: VARSHA_URL }
    : { name: "Lokesh", cls: "lokesh", avatar: LOKESH_URL };
}

function setLang(l) {
  lang = l;
  btnEn.classList.toggle('active', l === 'en');
  btnTa.classList.toggle('active', l === 'ta');
  inputEl.placeholder = l === 'en' ? "Type your question…" : "உங்கள் கேள்வியை தட்டச்சு செய்யவும்…";
}

function scrollToBottom() { requestAnimationFrame(() => { chatEl.scrollTop = chatEl.scrollHeight; }); }
function scrollToHome() { requestAnimationFrame(() => { chatEl.scrollTop = 0; }); }
function escapeHtml(str) { const d = document.createElement('div'); d.innerText = str; return d.innerHTML; }

function addUserMessage(text) {
  const wrap = document.createElement('div');
  wrap.className = 'msg user';
  wrap.innerHTML = `<div class="bubble-wrap"><div class="bubble">${escapeHtml(text)}</div></div>`;
  chatEl.appendChild(wrap);
  scrollToBottom();
}

function addBotMessage({ character, text, topicTag, lessonUrl, unknown = false, extraNode = null }) {
  const info = charInfo(character);
  const wrap = document.createElement('div');
  wrap.className = 'msg bot';
  const bubbleClass = unknown ? 'bubble unknown' : `bubble ${info.cls}`;
  let metaHtml = '';
  if(topicTag || lessonUrl) {
    metaHtml = `<div class="meta-row">
      ${topicTag ? `<span class="topic-tag">${topicTag}</span>` : ''}
      ${lessonUrl ? `<a class="lesson-link" href="${lessonUrl}" target="_blank" rel="noopener">Read the lesson ↗</a>` : ''}
    </div>`;
  }
  wrap.innerHTML = `
    <img class="avatar-sm" src="${info.avatar}" alt="${info.name}">
    <div class="bubble-wrap">
      <span class="speaker-name ${info.cls}">${info.name}</span>
      <div class="${bubbleClass}">${escapeHtml(text)}</div>
      ${metaHtml}
    </div>`;
  if(extraNode) wrap.querySelector('.bubble-wrap').appendChild(extraNode);
  chatEl.appendChild(wrap);
  scrollToBottom();
  return wrap;
}

function addTypingIndicator(character) {
  const info = charInfo(character);
  const wrap = document.createElement('div');
  wrap.className = 'msg bot'; wrap.id = 'typingIndicator';
  wrap.innerHTML = `
    <img class="avatar-sm" src="${info.avatar}" alt="${info.name}">
    <div class="bubble-wrap">
      <span class="speaker-name ${info.cls}">${info.name}</span>
      <div class="bubble ${info.cls} typing"><span></span><span></span><span></span></div>
    </div>`;
  chatEl.appendChild(wrap);
  scrollToBottom();
}

function removeTypingIndicator() {
  const el = document.getElementById('typingIndicator');
  if(el) el.remove();
}

function relatedChipsNode(currentId, topicId) {
  const pool = KB.filter(q => q.topicId === topicId && q.id !== currentId);
  if(pool.length === 0) return null;
  const startIdx = Math.floor(Math.random() * pool.length);
  const picks = [];
  for(let i = 0; i < Math.min(2, pool.length); i++) {
    picks.push(pool[(startIdx + i) % pool.length]);
  }
  const wrap = document.createElement('div');
  wrap.className = 'related-wrap';
  wrap.innerHTML = `<p class="related-label">You could also ask</p>`;
  const row = document.createElement('div');
  row.className = 'chip-row';
  picks.forEach(q => {
    const chip = document.createElement('button');
    chip.className = 'chip';
    chip.textContent = lang === 'en' ? q.question : (q.question_ta || q.question);
    chip.onclick = () => {
      row.querySelectorAll('.chip').forEach(el => el.disabled = true);
      row.style.opacity = '0.5';
      askById(q.id);
    };
    row.appendChild(chip);
  });
  wrap.appendChild(row);
  return wrap;
}

function deliverAnswer(qItem, character) {
  const text = lang === 'en' ? qItem.answer : (qItem.answer_ta || qItem.answer);
  const extra = relatedChipsNode(qItem.id, qItem.topicId);
  addBotMessage({
    character, text,
    topicTag: `${qItem.icon} ${qItem.topicTitle}`,
    lessonUrl: qItem.lessonUrl,
    extraNode: extra
  });
  nextCharacter();
}

function deliverUnknown(inputText, character) {
  const btn = document.createElement('button');
  btn.className = 'suggest-btn';
  btn.textContent = lang === 'en' ? '🙋 Suggest this question' : '🙋 இந்த கேள்வியை பரிந்துரைக்கவும்';
  btn.onclick = () => {
    reviewQueue.push({ text: inputText, ts: new Date() });
    updateQueueCount();
    btn.textContent = lang === 'en' ? '✓ Added to review queue' : '✓ சேர்க்கப்பட்டது';
    btn.disabled = true;
  };
  addBotMessage({ character, text: UNKNOWN_ANSWER[lang], unknown: true, extraNode: btn });
  nextCharacter();
}

function askById(id) {
  const q = KB_BY_ID[id];
  if(!q) return;
  addUserMessage(lang === 'en' ? q.question : (q.question_ta || q.question));
  const character = currentAnswerer;
  addTypingIndicator(character);
  setTimeout(() => {
    removeTypingIndicator();
    deliverAnswer(q, character);
  }, 450 + Math.random() * 250);
}

function handleAsk() {
  const raw = inputEl.value.trim();
  if(!raw) return;
  addUserMessage(raw);
  inputEl.value = '';
  sendBtn.disabled = true;
  const character = currentAnswerer;
  addTypingIndicator(character);
  setTimeout(() => {
    removeTypingIndicator();
    const ranked = rankCandidates(raw);
    const top = ranked[0];
    if(top && top.score >= autoAnswerMinScore) {
      deliverAnswer(top.q, character);
    } else {
      deliverUnknown(raw, character);
    }
    sendBtn.disabled = false;
    inputEl.focus();
  }, 550 + Math.random() * 350);
}

function updateQueueCount() { queueCount.textContent = reviewQueue.length; }

function openDrawer() {
  queueList.innerHTML = '';
  if(reviewQueue.length === 0) {
    queueList.innerHTML = '<div class="queue-empty">No submitted questions yet.</div>';
  } else {
    reviewQueue.slice().reverse().forEach(item => {
      const div = document.createElement('div');
      div.className = 'queue-item';
      div.innerHTML = `<div class="q">${escapeHtml(item.text)}</div><div class="t">${item.ts.toLocaleString()}</div>`;
      queueList.appendChild(div);
    });
  }
  drawerBackdrop.classList.add('open');
}

function closeDrawer() { drawerBackdrop.classList.remove('open'); }

function openTopic(topicId, topicTitle, topicIcon) {
  const qs = KB.filter(q => q.topicId === topicId);
  const character = currentAnswerer;
  const row = document.createElement('div');
  row.className = 'chip-row';
  qs.forEach(q => {
    const chip = document.createElement('button');
    chip.className = 'chip';
    chip.textContent = lang === 'en' ? q.question : (q.question_ta || q.question);
    chip.onclick = () => {
      row.querySelectorAll('.chip').forEach(el => el.disabled = true);
      row.style.opacity = '0.5';
      askById(q.id);
    };
    row.appendChild(chip);
  });
  addBotMessage({
    character,
    text: lang === 'en'
      ? `Here's what you can ask about ${topicIcon} ${topicTitle}:`
      : `${topicIcon} ${topicTitle} பற்றி நீங்கள் கேட்கக்கூடியவை:`,
    extraNode: row
  });
}

function buildHomeCard() {
  const card = document.createElement('div');
  card.className = 'home-card';

  const lessonsLabel = document.createElement('p');
  lessonsLabel.className = 'label';
  lessonsLabel.textContent = 'Or pick a lesson';
  card.appendChild(lessonsLabel);

  const grid = document.createElement('div');
  grid.className = 'lesson-grid';
  TOPICS.forEach(t => {
    const tile = document.createElement('button');
    tile.className = 'lesson-tile';
    tile.innerHTML = `<span class="ic">${t.icon}</span><span class="tt">${escapeHtml(t.title)}</span>`;
    tile.onclick = () => openTopic(t.id, t.title, t.icon);
    grid.appendChild(tile);
  });
  card.appendChild(grid);

  const startersLabel = document.createElement('p');
  startersLabel.className = 'label';
  startersLabel.textContent = 'Try one of these';
  card.appendChild(startersLabel);

  const list = document.createElement('div');
  list.className = 'starter-list';
  STARTER_IDS.forEach(id => {
    const q = KB_BY_ID[id];
    if(!q) return;
    const chip = document.createElement('button');
    chip.className = 'starter-chip';
    chip.textContent = q.question;
    chip.onclick = () => askById(id);
    list.appendChild(chip);
  });
  card.appendChild(list);

  return card;
}

function resetChat() {
  chatEl.innerHTML = '';
  currentAnswerer = 'VARSHA';
  addBotMessage({
    character: currentAnswerer,
    text: "Hi — I'm Varsha, and Lokesh is here too. Ask us about staying safe online, or about being a good person. You can type a question, or pick a lesson."
  });
  nextCharacter();
  chatEl.appendChild(buildHomeCard());
  scrollToBottom();
}

async function bootstrap() {
  try {
    const [enRes, taRes] = await Promise.all([
      fetch('digital_dharma.json'),
      fetch('digital_dharma_ta.json')
    ]);

    const enData = await enRes.json();
    const taData = await taRes.json();

    TOPICS = (enData.topics || []).map(t => ({
      id: t.id,
      title: t.title,
      icon: t.icon,
      lessonUrl: t.lessonUrl
    }));

    const taMap = {};
    (taData.topics || []).forEach(top => {
      (top.questions || []).forEach(q => {
        taMap[q.id] = {
          question_ta: q.question_ta,
          answer_ta: q.answer_ta
        };
      });
    });

    KB = [];
    (enData.topics || []).forEach(top => {
      (top.questions || []).forEach(q => {
        const trans = taMap[q.id] || {};
        KB.push({
          ...q,
          topicId: top.id,
          topicTitle: top.title,
          icon: top.icon,
          lessonUrl: top.lessonUrl,
          question_ta: trans.question_ta || q.question,
          answer_ta: trans.answer_ta || q.answer
        });
      });
    });

    KB_BY_ID = {};
    KB.forEach(q => { KB_BY_ID[q.id] = q; });

    if(enData.matching && enData.matching.thresholds) {
      autoAnswerMinScore = enData.matching.thresholds.clarificationMinScore || 0.55;
    }

    loadingScrim.classList.add('hidden');
    resetChat();
  } catch (err) {
    loadingScrim.textContent = "Error loading Digital Dharma knowledge base.";
    console.error("Hydration failed:", err);
  }
}

sendBtn.addEventListener('click', handleAsk);
inputEl.addEventListener('keydown', (e) => { if(e.key === 'Enter') handleAsk(); });
queueChip.addEventListener('click', openDrawer);
drawerClose.addEventListener('click', closeDrawer);
btnEn.addEventListener('click', () => setLang('en'));
btnTa.addEventListener('click', () => setLang('ta'));
btnLessons.addEventListener('click', scrollToHome);
btnReset.addEventListener('click', resetChat);

if('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('../sw.js', { scope: '/' })
      .catch(err => console.warn('SW registration error:', err));
  });
}

bootstrap();
