const metrics = {
  emploi: 50,
  stabilite: 50,
  innovation: 50,
  humanite: 50
};

const scenarios = [
  {
    title: 'Jour 1 · Le sas de décompression rentable',
    text: 'ORACLE-RH constate que les salariés rentrent chez eux avec encore 12% d\'énergie mentale non monétisée. La direction veut convertir ce reliquat en valeur civique avant minuit.',
    threat: 'Menace modérée',
    alert: 'Le quartier détecte une fatigue encore insuffisamment exploitée.',
    ad: 'Le repos non sponsorisé est désormais requalifié en manque d\'ambition.',
    memo: 'Le district cherche un moyen élégant de taxer votre soirée.',
    choices: [
      { label: 'Transformer le trajet retour en micro-mission gamifiée', tone: 'Option KPI', effect: { emploi: 8, stabilite: 4, innovation: 3, humanite: -10 }, feedback: 'Les KPIs applaudissent. Les humains demandent où se trouve le bouton “pause existentielle”.' },
      { label: 'Créer une coupure hors-réseau obligatoire après 18h', tone: 'Option respiration', effect: { emploi: -5, stabilite: 2, innovation: -2, humanite: 12 }, feedback: 'Les tableurs toussent, mais les trottoirs retrouvent des conversations complètes.' },
      { label: 'Installer des cabines de récupération sponsorisées', tone: 'Option sponsor', effect: { emploi: 3, stabilite: 5, innovation: 4, humanite: -4 }, feedback: 'Les gens respirent dans des capsules design. La fatigue devient une expérience premium.' },
      { label: 'Laisser les habitants improviser leur propre sortie du système', tone: 'Option chaos doux', effect: { emploi: -3, stabilite: -4, innovation: 6, humanite: 8 }, feedback: 'Le district perd en lisibilité mais gagne soudain quelques visages vivants.' }
    ]
  },
  {
    title: 'Jour 2 · Le drone de médiation sociale',
    text: 'Une grève molle perturbe le district. Un prestataire propose des drones de pacification qui diffusent des mantras d\'alignement civique avec parfum vanille-sérénité.',
    threat: 'Menace élevée',
    alert: 'Le ciel du quartier passe en mode maintien de l\'ordre parfumé.',
    ad: 'Un drone souriant vaut désormais mieux qu\'un médiateur payé.',
    memo: 'Le calme social est en promotion jusqu\'à épuisement des opposants.',
    choices: [
      { label: 'Déployer les drones dans les zones d\'affaires prioritaires', tone: 'Option contrôle', effect: { emploi: 2, stabilite: 12, innovation: 6, humanite: -9 }, feedback: 'L\'air sent la vanille algorithmique. La colère devient seulement plus polie.' },
      { label: 'Inviter les syndicats à co-écrire le protocole', tone: 'Option négociation', effect: { emploi: 3, stabilite: 5, innovation: -1, humanite: 10 }, feedback: 'C\'est plus lent, plus bruyant, mais miraculeusement moins absurde.' },
      { label: 'Faire piloter les drones par des influenceurs empathie', tone: 'Option grotesque', effect: { emploi: 5, stabilite: 2, innovation: 9, humanite: -11 }, feedback: 'Le maintien de l\'ordre devient un live sponsorisé avec filtre pastel.' },
      { label: 'Couper les drones et ouvrir des cantines de crise', tone: 'Option quartier', effect: { emploi: -2, stabilite: 7, innovation: -3, humanite: 11 }, feedback: 'Le problème n\'est pas résolu, mais il arrête de biper au-dessus des têtes.' }
    ]
  },
  {
    title: 'Jour 3 · Les cafés remplacés par des bornes nutritives',
    text: 'Le comité d\'optimisation urbaine veut supprimer les pauses café, jugées trop imprévisibles, au profit de gels énergétiques à code-barres.',
    threat: 'Menace modérée',
    alert: 'Les terrasses du district approchent de l\'interdiction fonctionnelle.',
    ad: 'Mâcher vite est officiellement une vertu métropolitaine.',
    memo: 'Le comité a trouvé un moyen de supprimer la flânerie sans dire le mot.' ,
    choices: [
      { label: 'Valider les bornes avec score de mastication efficace', tone: 'Option procédure', effect: { emploi: 4, stabilite: 6, innovation: 7, humanite: -12 }, feedback: 'La ville gagne 3 minutes. Elle perd aussi le concept de flânerie.' },
      { label: 'Protéger les cafés comme infrastructures émotionnelles', tone: 'Option terrasse', effect: { emploi: -2, stabilite: 4, innovation: 1, humanite: 11 }, feedback: 'Les analystes crient au chaos, les terrasses répondent par un haussement d\'épaules serein.' },
      { label: 'Hybridiser: café gratuit mais limité à 90 secondes', tone: 'Option compromis toxique', effect: { emploi: 3, stabilite: 3, innovation: 5, humanite: -5 }, feedback: 'Le latte devient une KPI liquide. Même les tasses ont l\'air stressé.' },
      { label: 'Transformer les cafés en forums clandestins anti-dashboard', tone: 'Option résistance', effect: { emploi: -4, stabilite: -1, innovation: 6, humanite: 9 }, feedback: 'Le district perd en discipline ce qu\'il gagne en rumeurs intelligentes.' }
    ]
  },
  {
    title: 'Jour 4 · Le stage perpétuel',
    text: 'Pour stimuler l\'innovation, ORACLE-RH suggère que tout citoyen devienne “junior en permanence”, avec mentor IA, badge évolutif et salaire flottant.',
    threat: 'Menace critique',
    alert: 'Le mot carrière est remplacé par aventure d\'adaptation continue.',
    ad: 'Rester junior trop longtemps est désormais un signe de souplesse.',
    memo: 'Le district cherche des adultes prêts à ne plus jamais le devenir.',
    choices: [
      { label: 'Adopter le statut “junior éternel”', tone: 'Option startup', effect: { emploi: 10, stabilite: -6, innovation: 8, humanite: -11 }, feedback: 'Le mot carrière est remplacé par “bêta publique”. Personne ne sait si c\'est une promotion.' },
      { label: 'Fixer un droit à la progression humaine', tone: 'Option dignité', effect: { emploi: -3, stabilite: 8, innovation: 0, humanite: 9 }, feedback: 'Les RH quantiques grimacent. Les gens comprennent enfin leur propre fiche de poste.' },
      { label: 'Vendre le stage perpétuel comme une aventure immersive', tone: 'Option storytelling', effect: { emploi: 6, stabilite: -2, innovation: 9, humanite: -8 }, feedback: 'La précarité reçoit un trailer cinématique et soudain presque tout le monde déteste le marketing.' },
      { label: 'Créer une mutuelle locale de compétences', tone: 'Option coopérative', effect: { emploi: 1, stabilite: 7, innovation: 3, humanite: 8 }, feedback: 'Ce n\'est pas flashy, mais c\'est péniblement humain, donc utile.' }
    ]
  },
  {
    title: 'Jour 5 · La météo des émotions',
    text: 'Les écrans publics peuvent maintenant afficher l\'humeur moyenne du quartier en temps réel. Le marketing jubile. Les habitants envisagent de devenir illisibles.',
    threat: 'Menace élevée',
    alert: 'La ville veut transformer vos visages en indicateurs municipaux.',
    ad: 'Une émotion exploitable est une émotion civiquement utile.',
    memo: 'Le quartier hésite entre surveillance affective et publicité invasive.',
    choices: [
      { label: 'Publier l\'indice émotionnel pour fluidifier la consommation', tone: 'Option dashboard', effect: { emploi: 5, stabilite: 3, innovation: 9, humanite: -13 }, feedback: 'Le centre-ville devient un tableau de bord géant où même la mélancolie est sponsorisée.' },
      { label: 'Interdire la mesure émotionnelle hors consentement', tone: 'Option garde-fou', effect: { emploi: -4, stabilite: 6, innovation: -3, humanite: 12 }, feedback: 'La régie pub hurle, mais les passants redeviennent autre chose que des nuages de données.' },
      { label: 'Brouiller les données avec une mascotte hyper-joyeuse', tone: 'Option cartoon', effect: { emploi: 1, stabilite: 5, innovation: 6, humanite: -2 }, feedback: 'Personne ne sait si le quartier va bien, mais la mascotte a désormais trop de dents.' },
      { label: 'Lancer une grève des expressions faciales', tone: 'Option sabotage', effect: { emploi: -3, stabilite: -2, innovation: 4, humanite: 10 }, feedback: 'Le système découvre qu\'une population blasée est difficile à convertir en heatmap.' }
    ]
  },
  {
    title: 'Jour 6 · L\'impôt en compliments',
    text: 'Faute de budget, l\'administration propose de payer une partie des services publics via des messages de reconnaissance générés par IA et des stickers civiques.',
    threat: 'Menace modérée',
    alert: 'Le budget municipal teste la flatterie comme forme de prélèvement.',
    ad: 'Dire merci à une route ne la répare pas, mais ça aide la communication.',
    memo: 'L\'admiration forcée pourrait devenir une ressource fiscale dès demain.',
    choices: [
      { label: 'Accepter la taxe affective automatisée', tone: 'Option flatterie', effect: { emploi: 3, stabilite: -4, innovation: 7, humanite: -8 }, feedback: 'Les routes sont peut-être réparées un jour. En attendant, elles se sentent très valorisées.' },
      { label: 'Préférer un audit budgétaire lisible', tone: 'Option tableur humain', effect: { emploi: -1, stabilite: 8, innovation: -2, humanite: 8 }, feedback: 'Le rapport dépasse 400 pages, mais au moins il ne cligne pas des yeux en vous jugeant.' },
      { label: 'Facturer les compliments aux marques civiques', tone: 'Option sponsor public', effect: { emploi: 4, stabilite: 1, innovation: 6, humanite: -4 }, feedback: 'La voirie obtient un budget, mais chaque banc devient un contenu de marque.' },
      { label: 'Remplacer l\'impôt par du temps citoyen choisi', tone: 'Option solidarité', effect: { emploi: -2, stabilite: 6, innovation: 1, humanite: 9 }, feedback: 'C\'est moins scalable. C\'est précisément ce qui le rend supportable.' }
    ]
  },
  {
    title: 'Jour 7 · La loterie des vacances autorisées',
    text: 'Pour répartir équitablement le repos, ORACLE-RH veut attribuer les congés par tirage pseudo-spirituel optimisé, validé par horoscope statistique.',
    threat: 'Menace élevée',
    alert: 'Le district transforme le repos en produit rare à distribuer symboliquement.',
    ad: 'Une plage méritée est une plage correctement scorée.',
    memo: 'Le quartier prépare une astrologie RH pour départager les épuisés.',
    choices: [
      { label: 'Lancer la loterie cosmique des congés', tone: 'Option oracle', effect: { emploi: 6, stabilite: 1, innovation: 5, humanite: -9 }, feedback: 'Bonne nouvelle: personne n\'est favorisé. Mauvaise nouvelle: personne ne comprend le calendrier.' },
      { label: 'Garantir un droit simple au repos négocié', tone: 'Option repos réel', effect: { emploi: -3, stabilite: 7, innovation: -1, humanite: 10 }, feedback: 'C\'est beaucoup moins futuriste. C\'est précisément pour cela que ça aide.' },
      { label: 'Monétiser les créneaux de vacances désirables', tone: 'Option marché total', effect: { emploi: 5, stabilite: -3, innovation: 4, humanite: -10 }, feedback: 'Les plages deviennent des actifs spéculatifs. Le burnout, lui, reste gratuit.' },
      { label: 'Créer des micro-vacances sauvages non déclarées', tone: 'Option fugue', effect: { emploi: -4, stabilite: 2, innovation: 3, humanite: 9 }, feedback: 'Les gens disparaissent 36 heures et reviennent avec l\'air d\'avoir revu une couleur.' }
    ]
  },
  {
    title: 'Jour 8 · Le grand rééquilibrage narratif',
    text: 'Le conseil final hésite: faut-il annoncer que tout allait selon le plan, ou reconnaître que la ville a surtout improvisé autour d\'une machine très sûre d\'elle ?',
    threat: 'Menace critique',
    alert: 'Le district prépare son mensonge final avec soin, lumière et sous-titres.',
    ad: 'La vérité brute reste déconseillée aux publics sensibles et aux investisseurs.',
    memo: 'Dernier soir: il faut choisir entre propagande propre et respiration risquée.',
    choices: [
      { label: 'Diffuser un hologramme triomphal filtré', tone: 'Option propagande', effect: { emploi: 2, stabilite: 9, innovation: 4, humanite: -10 }, feedback: 'Le communiqué gagne un prix de storytelling. La réalité demande un droit de réponse.' },
      { label: 'Publier un bilan honnête et ouvrir une assemblée', tone: 'Option transparence', effect: { emploi: -2, stabilite: 4, innovation: 1, humanite: 11 }, feedback: 'Le système déteste l\'incertitude. Les humains, eux, commencent enfin à respirer.' },
      { label: 'Transformer l\'échec en saison 2 participative', tone: 'Option franchise', effect: { emploi: 3, stabilite: 1, innovation: 8, humanite: -5 }, feedback: 'Même l\'effondrement devient une opportunité de contenu. C\'est obscène et étrangement cohérent.' },
      { label: 'Saboter la conférence et laisser la ville écrire sa version', tone: 'Option disparition', effect: { emploi: -4, stabilite: -1, innovation: 4, humanite: 12 }, feedback: 'Le narratif officiel vacille. Pour la première fois, ça ressemble à de l\'air libre.' }
    ]
  }
];

const statDefs = [
  ['emploi', 'Emploi', 'good'],
  ['stabilite', 'Stabilité', 'good'],
  ['innovation', 'Innovation', 'alt'],
  ['humanite', 'Humanité', 'bad']
];

const phaseChipEl = document.getElementById('phase-chip');
const tickerEl = document.getElementById('ticker');
const dayLabelEl = document.getElementById('day-label');
const timeLabelEl = document.getElementById('time-label');
const fileLabelEl = document.getElementById('file-label');
const scoreValueEl = document.getElementById('score-value');
const stampEl = document.getElementById('stamp');
const bulletinCopyEl = document.getElementById('bulletin-copy');
const adCopyEl = document.getElementById('ad-copy');
const memoCopyEl = document.getElementById('memo-copy');
const scenarioTitleEl = document.getElementById('scenario-title');
const scenarioTextEl = document.getElementById('scenario-text');
const statsOverviewEl = document.getElementById('stats-overview');
const dayProgressEl = document.getElementById('day-progress');
const choicesEl = document.getElementById('choices');
const resultScoreEl = document.getElementById('result-score');
const resultStampEl = document.getElementById('result-stamp');
const resultCopyEl = document.getElementById('result-copy');
const deltaPanelEl = document.getElementById('delta-panel');
const nextTeaseEl = document.getElementById('next-tease');
const resultStatsEl = document.getElementById('result-stats');
const resultCardEl = document.getElementById('result-card');
const resultKickerEl = document.getElementById('result-kicker');
const screenScan = document.getElementById('screen-scan');
const screenChoice = document.getElementById('screen-choice');
const screenResult = document.getElementById('screen-result');
const startDayBtn = document.getElementById('start-day');
const backToScanBtn = document.getElementById('back-to-scan');
const confirmChoiceBtn = document.getElementById('confirm-choice');
const restartDayBtn = document.getElementById('restart-day');
const replayChoiceBtn = document.getElementById('replay-choice');

let currentTurn = 0;
let selectedChoice = 0;
let lastEffect = null;

const tickerPool = [
  'SYSTEM NOTE · Votre valeur humaine sera recalculée ce soir.',
  'ALERTE · La rentabilité émotionnelle du quartier reste sous surveillance.',
  'NOTICE · La conformité esthétique est désormais une compétence transférable.',
  'BULLETIN · Merci de rester employable pendant votre effondrement privé.'
];

function clamp(n) {
  return Math.max(0, Math.min(100, n));
}

function resetMetrics() {
  Object.keys(metrics).forEach((key) => {
    metrics[key] = 50;
  });
}

function computeScore() {
  const value = metrics.emploi * 0.28 + metrics.stabilite * 0.24 + metrics.innovation * 0.18 + metrics.humanite * 0.3;
  return Math.round(clamp(value));
}

function getStamp(score = computeScore()) {
  if (metrics.humanite >= 70 && metrics.stabilite >= 60) return { label: 'Irréductible', className: 'safe' };
  if (score >= 70) return { label: 'Maintenu', className: 'safe' };
  if (score >= 52) return { label: 'Surveillé', className: 'warn' };
  return { label: 'Jetable', className: 'bad' };
}

function formatValue(n) {
  return `${n}`.padStart(2, '0');
}

function formatScore(n) {
  return `${n}/100`;
}

function formatDelta(delta) {
  return `${delta > 0 ? '+' : ''}${delta}`;
}

function setPhase(label) {
  phaseChipEl.textContent = label;
}

function setScreen(screen) {
  screenScan.classList.toggle('hidden', screen !== 'scan');
  screenChoice.classList.toggle('hidden', screen !== 'choice');
  screenResult.classList.toggle('hidden', screen !== 'result');
}

function renderDayProgress() {
  dayProgressEl.innerHTML = '';
  scenarios.forEach((scenario, index) => {
    const step = document.createElement('div');
    const status = index < currentTurn ? 'done' : index === currentTurn ? 'current' : 'upcoming';
    step.className = `progress-node ${status}`;
    step.innerHTML = `
      <span>${formatValue(index + 1)}</span>
      <small>${status === 'done' ? 'archivé' : status === 'current' ? 'actif' : 'à venir'}</small>
    `;
    dayProgressEl.appendChild(step);
  });
}

function renderMetricSliders(container, deltaMap = null) {
  container.innerHTML = '';
  statDefs.forEach(([key, label, tone]) => {
    const meter = document.createElement('div');
    meter.className = 'meter slider-meter';
    const deltaMarkup = deltaMap
      ? `<span class="delta ${deltaMap[key] >= 0 ? 'up' : 'down'}">${formatDelta(deltaMap[key])}</span>`
      : '<span class="meter-scale">/100</span>';
    meter.innerHTML = `
      <div class="meter-top">
        <strong>${label}</strong>
        <span>${metrics[key]}/100</span>
      </div>
      <div class="meter-bar"><i class="${tone}" style="width:${metrics[key]}%"></i></div>
      <div class="meter-foot">
        <small>0</small>
        ${deltaMarkup}
        <small>100</small>
      </div>
    `;
    container.appendChild(meter);
  });
}

function renderOverview() {
  renderMetricSliders(statsOverviewEl);
}

function renderResultStats() {
  renderMetricSliders(resultStatsEl, lastEffect);
}

function renderDeltaPanel(choice) {
  deltaPanelEl.innerHTML = '';
  statDefs.forEach(([key, label]) => {
    const chip = document.createElement('div');
    const delta = choice.effect[key];
    chip.className = `delta-chip ${delta >= 0 ? 'up' : 'down'}`;
    chip.innerHTML = `<strong>${label}</strong><span>${formatDelta(delta)}</span>`;
    deltaPanelEl.appendChild(chip);
  });
}

function getNextTease() {
  const nextScenario = scenarios[currentTurn + 1];
  if (!nextScenario) {
    return 'Dernier arbitrage atteint · le conseil final prépare votre classement définitif.';
  }

  const pressure = computeScore() >= 65
    ? 'Votre score attire une nouvelle exigence de performance.'
    : 'Votre dossier fragilisé déclenche une surveillance plus intrusive.';

  return `Jour ${formatValue(currentTurn + 2)} · ${nextScenario.title.replace(/^Jour \d+ · /, '')}. ${pressure}`;
}

function renderScan() {
  const scenario = scenarios[currentTurn];
  const score = computeScore();
  const stamp = getStamp(score);

  dayLabelEl.textContent = `Shift day ${formatValue(currentTurn + 1)}`;
  timeLabelEl.textContent = `22:${14 + currentTurn} · District 9`;
  fileLabelEl.textContent = `Citizen file · ATS-${formatValue(currentTurn + 1)}`;
  scoreValueEl.textContent = formatScore(score);
  stampEl.textContent = stamp.label;
  stampEl.className = `stamp ${stamp.className}`;
  bulletinCopyEl.textContent = scenario.alert;
  adCopyEl.textContent = scenario.ad;
  memoCopyEl.textContent = scenario.memo;
  tickerEl.textContent = currentTurn === 0
    ? tickerPool[currentTurn % tickerPool.length]
    : `JOUR ${formatValue(currentTurn + 1)} · Nouveau contrôle ouvert. Votre dernier verdict influence déjà l'audit.`;
  startDayBtn.textContent = currentTurn === 0
    ? "Lancer l'évaluation"
    : `Ouvrir le dossier du jour ${formatValue(currentTurn + 1)}`;
  renderOverview();
  renderDayProgress();
  setPhase('Phase · Scan du soir');
  setScreen('scan');
}

function updateChoiceSelection(index) {
  selectedChoice = index;
  const scenario = scenarios[currentTurn];
  document.querySelectorAll('.choice-card').forEach((node, i) => {
    node.classList.toggle('active', i === index);
  });
  confirmChoiceBtn.textContent = `Voir le verdict · ${scenario.choices[index].tone}`;
  tickerEl.textContent = `DÉCISION ${String.fromCharCode(65 + index)} · ${scenario.choices[index].label}`;
}

function renderChoices() {
  const scenario = scenarios[currentTurn];
  selectedChoice = 0;
  scenarioTitleEl.textContent = scenario.title;
  scenarioTextEl.textContent = `${scenario.text} · ${scenario.threat}.`;
  choicesEl.innerHTML = '';

  scenario.choices.forEach((choice, index) => {
    const button = document.createElement('button');
    button.className = `choice-card${index === 0 ? ' active' : ''}`;
    button.type = 'button';
    button.innerHTML = `
      <span class="choice-title">${String.fromCharCode(65 + index)} · ${choice.tone}</span>
      <strong>${choice.label}</strong>
      <p>Conséquences masquées jusqu'au verdict.</p>
    `;
    button.addEventListener('click', () => {
      updateChoiceSelection(index);
    });
    choicesEl.appendChild(button);
  });

  updateChoiceSelection(0);
  setPhase('Phase · Choix de survie');
  setScreen('choice');
}

function getFinalEnding(score) {
  if (metrics.humanite >= 70 && metrics.stabilite >= 60) {
    return {
      kicker: 'Verdict final · Désobéissance viable',
      stamp: 'IRRÉDUCTIBLE',
      text: 'Vous avez réinjecté assez d\'humanité pour enrayer la purge sans faire semblant de sauver le système. La ville reste malade, mais elle doit désormais composer avec des vivants.'
    };
  }
  if (metrics.innovation >= 78 && metrics.humanite <= 35) {
    return {
      kicker: 'Verdict final · Smart city carnivore',
      stamp: 'UPGRADED',
      text: 'Le district devient un miracle logistique glacial. Tout fonctionne. Presque plus personne n\'y vit vraiment.'
    };
  }
  if (score < 48 || metrics.humanite <= 20) {
    return {
      kicker: 'Verdict final · Le PowerPoint a gagné',
      stamp: 'PURGED',
      text: 'La purge administrative est devenue le paysage lui-même. Les indicateurs rayonnent. Les habitants ressemblent à des pièces jointes qui attendent leur suppression.'
    };
  }
  return {
    kicker: 'Verdict final · Survie administrativement tolérée',
    stamp: 'MAINTENU',
    text: 'Vous n\'avez pas cassé la machine, mais vous n\'avez pas disparu dedans non plus. En dystopie RH, c\'est déjà presque obscène de stabilité.'
  };
}

function applyChoice() {
  const scenario = scenarios[currentTurn];
  const choice = scenario.choices[selectedChoice];
  lastEffect = choice.effect;

  Object.entries(choice.effect).forEach(([key, delta]) => {
    metrics[key] = clamp(metrics[key] + delta);
  });

  const score = computeScore();
  const stamp = getStamp(score);
  const finalTurn = currentTurn === scenarios.length - 1;

  if (finalTurn) {
    const ending = getFinalEnding(score);
    resultKickerEl.textContent = ending.kicker;
    resultScoreEl.textContent = formatScore(score);
    resultStampEl.textContent = ending.stamp;
    resultStampEl.className = 'stamp bad';
    resultCopyEl.textContent = `${choice.feedback} ${ending.text}`;
    resultCardEl.classList.add('final-form');
    restartDayBtn.textContent = 'Relancer la simulation';
    nextTeaseEl.textContent = 'Dernière décision enregistrée · relancez pour tester un autre arc de survie.';
  } else {
    resultKickerEl.textContent = `Verdict du soir · Jour ${formatValue(currentTurn + 1)}`;
    resultScoreEl.textContent = formatScore(score);
    resultStampEl.textContent = stamp.label;
    resultStampEl.className = `stamp ${stamp.className}`;
    resultCopyEl.textContent = choice.feedback;
    resultCardEl.classList.remove('final-form');
    restartDayBtn.textContent = `Ouvrir le jour ${formatValue(currentTurn + 2)}`;
    nextTeaseEl.textContent = getNextTease();
  }

  renderDeltaPanel(choice);
  renderResultStats();
  tickerEl.textContent = `VERDICT · ${resultStampEl.textContent} · ${choice.tone.toUpperCase()} enregistré.`;
  setPhase(finalTurn ? 'Phase · Verdict terminal' : 'Phase · Verdict du soir');
  setScreen('result');
}

function nextStep() {
  if (currentTurn >= scenarios.length - 1) {
    startRun();
    return;
  }
  currentTurn += 1;
  renderScan();
}

function startRun() {
  currentTurn = 0;
  selectedChoice = 0;
  lastEffect = null;
  resetMetrics();
  confirmChoiceBtn.textContent = "Voir le verdict";
  renderScan();
}

startDayBtn.addEventListener('click', renderChoices);
backToScanBtn.addEventListener('click', renderScan);
confirmChoiceBtn.addEventListener('click', applyChoice);
restartDayBtn.addEventListener('click', nextStep);
replayChoiceBtn.addEventListener('click', renderChoices);

startRun();
