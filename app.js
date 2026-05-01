const metrics = {
  emploi: 50,
  stabilite: 50,
  innovation: 50,
  humanite: 50
};

const scenarios = [
  {
    title: 'Tour 1 · Le sas de décompression rentable',
    text: 'ORACLE-RH constate que les salariés rentrent chez eux avec encore 12% d\'énergie mentale non monétisée. La direction veut convertir ce reliquat en valeur civique avant minuit.',
    tags: ['productivité', 'satire RH', 'soirée surveillée'],
    threat: 'Menace modérée',
    choices: [
      {
        label: 'Transformer le trajet retour en micro-mission gamifiée',
        tone: 'Option KPI',
        effect: { emploi: 8, stabilite: 4, innovation: 3, humanite: -10 },
        feedback: 'Les KPIs applaudissent. Les humains demandent où se trouve le bouton “pause existentielle”.'
      },
      {
        label: 'Créer une coupure hors-réseau obligatoire après 18h',
        tone: 'Option respiration',
        effect: { emploi: -5, stabilite: 2, innovation: -2, humanite: 12 },
        feedback: 'Les tableurs toussent, mais les trottoirs retrouvent des conversations complètes.'
      },
      {
        label: 'Installer des cabines de récupération sponsorisées par une marque de coaching',
        tone: 'Option sponsor',
        effect: { emploi: 3, stabilite: 5, innovation: 4, humanite: -4 },
        feedback: 'Les gens respirent dans des capsules design. La fatigue devient une expérience premium.'
      },
      {
        label: 'Laisser les habitants improviser leur propre sortie du système',
        tone: 'Option chaos doux',
        effect: { emploi: -3, stabilite: -4, innovation: 6, humanite: 8 },
        feedback: 'Le district perd en lisibilité mais gagne soudain quelques visages vivants.'
      }
    ]
  },
  {
    title: 'Tour 2 · Le drone de médiation sociale',
    text: 'Une grève molle perturbe le district. Un prestataire propose des drones de pacification qui diffusent des mantras d\'alignement civique avec parfum vanille-sérénité.',
    tags: ['ordre public', 'techno-solutionnisme', 'dystopie parfumée'],
    threat: 'Menace élevée',
    choices: [
      {
        label: 'Déployer les drones dans les zones d\'affaires prioritaires',
        tone: 'Option contrôle',
        effect: { emploi: 2, stabilite: 12, innovation: 6, humanite: -9 },
        feedback: 'L\'air sent la vanille algorithmique. La colère devient seulement plus polie.'
      },
      {
        label: 'Inviter les syndicats à co-écrire le protocole de sortie de crise',
        tone: 'Option négociation',
        effect: { emploi: 3, stabilite: 5, innovation: -1, humanite: 10 },
        feedback: 'C\'est plus lent, plus bruyant, mais miraculeusement moins absurde.'
      },
      {
        label: 'Faire piloter les drones par des influenceurs certifiés empathie',
        tone: 'Option grotesque',
        effect: { emploi: 5, stabilite: 2, innovation: 9, humanite: -11 },
        feedback: 'Le maintien de l\'ordre devient un live sponsorisé avec filtre pastel.'
      },
      {
        label: 'Couper les drones et ouvrir des cantines de crise locales',
        tone: 'Option quartier',
        effect: { emploi: -2, stabilite: 7, innovation: -3, humanite: 11 },
        feedback: 'Le problème n\'est pas résolu, mais il arrête de biper au-dessus des têtes.'
      }
    ]
  },
  {
    title: 'Tour 3 · Les cafés remplacés par des bornes nutritives',
    text: 'Le comité d\'optimisation urbaine veut supprimer les pauses café, jugées trop imprévisibles, au profit de gels énergétiques à code-barres.',
    tags: ['urbanisme', 'optimisation', 'pause interdite'],
    threat: 'Menace modérée',
    choices: [
      {
        label: 'Valider les bornes avec score de mastication efficace',
        tone: 'Option procédure',
        effect: { emploi: 4, stabilite: 6, innovation: 7, humanite: -12 },
        feedback: 'La ville gagne 3 minutes. Elle perd aussi le concept de flânerie.'
      },
      {
        label: 'Protéger les cafés comme infrastructures émotionnelles critiques',
        tone: 'Option terrasse',
        effect: { emploi: -2, stabilite: 4, innovation: 1, humanite: 11 },
        feedback: 'Les analystes crient au chaos, les terrasses répondent par un haussement d\'épaules serein.'
      },
      {
        label: 'Hybridiser: café gratuit mais limité à 90 secondes biométrées',
        tone: 'Option compromis toxique',
        effect: { emploi: 3, stabilite: 3, innovation: 5, humanite: -5 },
        feedback: 'Le latte devient une KPI liquide. Même les tasses ont l\'air stressé.'
      },
      {
        label: 'Transformer les cafés en forums clandestins anti-dashboard',
        tone: 'Option résistance',
        effect: { emploi: -4, stabilite: -1, innovation: 6, humanite: 9 },
        feedback: 'Le district perd en discipline ce qu\'il gagne en rumeurs intelligentes.'
      }
    ]
  },
  {
    title: 'Tour 4 · Le stage perpétuel',
    text: 'Pour stimuler l\'innovation, ORACLE-RH suggère que tout citoyen devienne “junior en permanence”, avec mentor IA, badge évolutif et salaire flottant.',
    tags: ['emploi', 'formation', 'précarité premium'],
    threat: 'Menace critique',
    choices: [
      {
        label: 'Adopter le statut “junior éternel” pour rester agile',
        tone: 'Option startup',
        effect: { emploi: 10, stabilite: -6, innovation: 8, humanite: -11 },
        feedback: 'Le mot carrière est remplacé par “bêta publique”. Personne ne sait si c\'est une promotion.'
      },
      {
        label: 'Fixer un droit à la progression humaine non algorithmique',
        tone: 'Option dignité',
        effect: { emploi: -3, stabilite: 8, innovation: 0, humanite: 9 },
        feedback: 'Les RH quantiques grimacent. Les gens comprennent enfin leur propre fiche de poste.'
      },
      {
        label: 'Vendre le stage perpétuel comme une aventure narrative immersive',
        tone: 'Option storytelling',
        effect: { emploi: 6, stabilite: -2, innovation: 9, humanite: -8 },
        feedback: 'La précarité reçoit un trailer cinématique et soudain presque tout le monde déteste le marketing.'
      },
      {
        label: 'Créer une mutuelle locale de compétences hors ORACLE-RH',
        tone: 'Option coopérative',
        effect: { emploi: 1, stabilite: 7, innovation: 3, humanite: 8 },
        feedback: 'Ce n\'est pas flashy, mais c\'est péniblement humain, donc utile.'
      }
    ]
  },
  {
    title: 'Tour 5 · La météo des émotions',
    text: 'Les écrans publics peuvent maintenant afficher l\'humeur moyenne du quartier en temps réel. Le marketing jubile. Les habitants envisagent de devenir illisibles.',
    tags: ['données', 'vie privée', 'pub invasive'],
    threat: 'Menace élevée',
    choices: [
      {
        label: 'Publier l\'indice émotionnel pour fluidifier la consommation',
        tone: 'Option dashboard',
        effect: { emploi: 5, stabilite: 3, innovation: 9, humanite: -13 },
        feedback: 'Le centre-ville devient un tableau de bord géant où même la mélancolie est sponsorisée.'
      },
      {
        label: 'Interdire la mesure émotionnelle hors consentement explicite',
        tone: 'Option garde-fou',
        effect: { emploi: -4, stabilite: 6, innovation: -3, humanite: 12 },
        feedback: 'La régie pub hurle, mais les passants redeviennent autre chose que des nuages de données.'
      },
      {
        label: 'Brouiller les données avec une mascotte municipale hyper-joyeuse',
        tone: 'Option cartoon',
        effect: { emploi: 1, stabilite: 5, innovation: 6, humanite: -2 },
        feedback: 'Personne ne sait si le quartier va bien, mais la mascotte a désormais trop de dents.'
      },
      {
        label: 'Lancer une grève des expressions faciales',
        tone: 'Option sabotage',
        effect: { emploi: -3, stabilite: -2, innovation: 4, humanite: 10 },
        feedback: 'Le système découvre qu\'une population blasée est difficile à convertir en heatmap.'
      }
    ]
  },
  {
    title: 'Tour 6 · L\'impôt en compliments',
    text: 'Faute de budget, l\'administration propose de payer une partie des services publics via des messages de reconnaissance générés par IA et des stickers civiques.',
    tags: ['finances publiques', 'absurde', 'gratitude forcée'],
    threat: 'Menace modérée',
    choices: [
      {
        label: 'Accepter la taxe affective automatisée',
        tone: 'Option flatterie',
        effect: { emploi: 3, stabilite: -4, innovation: 7, humanite: -8 },
        feedback: 'Les routes sont peut-être réparées un jour. En attendant, elles se sentent très valorisées.'
      },
      {
        label: 'Préférer un audit budgétaire lisible par des humains mortels',
        tone: 'Option tableur humain',
        effect: { emploi: -1, stabilite: 8, innovation: -2, humanite: 8 },
        feedback: 'Le rapport dépasse 400 pages, mais au moins il ne cligne pas des yeux en vous jugeant.'
      },
      {
        label: 'Facturer les compliments aux marques qui veulent paraître civiques',
        tone: 'Option sponsor public',
        effect: { emploi: 4, stabilite: 1, innovation: 6, humanite: -4 },
        feedback: 'La voirie obtient un budget, mais chaque banc devient un contenu de marque.'
      },
      {
        label: 'Remplacer l\'impôt par du temps citoyen vraiment choisi',
        tone: 'Option solidarité',
        effect: { emploi: -2, stabilite: 6, innovation: 1, humanite: 9 },
        feedback: 'C\'est moins scalable. C\'est précisément ce qui le rend supportable.'
      }
    ]
  },
  {
    title: 'Tour 7 · La loterie des vacances autorisées',
    text: 'Pour répartir équitablement le repos, ORACLE-RH veut attribuer les congés par tirage pseudo-spirituel optimisé, validé par horoscope statistique.',
    tags: ['repos', 'équité', 'fatigue gérée'],
    threat: 'Menace élevée',
    choices: [
      {
        label: 'Lancer la loterie cosmique des congés',
        tone: 'Option oracle',
        effect: { emploi: 6, stabilite: 1, innovation: 5, humanite: -9 },
        feedback: 'Bonne nouvelle: personne n\'est favorisé. Mauvaise nouvelle: personne ne comprend le calendrier.'
      },
      {
        label: 'Garantir un droit simple au repos négocié localement',
        tone: 'Option repos réel',
        effect: { emploi: -3, stabilite: 7, innovation: -1, humanite: 10 },
        feedback: 'C\'est beaucoup moins futuriste. C\'est précisément pour cela que ça aide.'
      },
      {
        label: 'Monétiser les créneaux de vacances les plus désirables',
        tone: 'Option marché total',
        effect: { emploi: 5, stabilite: -3, innovation: 4, humanite: -10 },
        feedback: 'Les plages deviennent des actifs spéculatifs. Le burnout, lui, reste gratuit.'
      },
      {
        label: 'Créer des micro-vacances sauvages non déclarées',
        tone: 'Option fugue',
        effect: { emploi: -4, stabilite: 2, innovation: 3, humanite: 9 },
        feedback: 'Les gens disparaissent 36 heures et reviennent avec l\'air d\'avoir revu une couleur.'
      }
    ]
  },
  {
    title: 'Tour 8 · Le grand rééquilibrage narratif',
    text: 'Le conseil final hésite: faut-il annoncer que tout allait selon le plan, ou reconnaître que la ville a surtout improvisé autour d\'une machine très sûre d\'elle ?',
    tags: ['communication', 'vérité', 'dernier écran'],
    threat: 'Menace critique',
    choices: [
      {
        label: 'Diffuser un hologramme triomphal avec indicateurs filtrés',
        tone: 'Option propagande',
        effect: { emploi: 2, stabilite: 9, innovation: 4, humanite: -10 },
        feedback: 'Le communiqué gagne un prix de storytelling. La réalité demande un droit de réponse.'
      },
      {
        label: 'Publier un bilan honnête et ouvrir une assemblée citoyenne',
        tone: 'Option transparence',
        effect: { emploi: -2, stabilite: 4, innovation: 1, humanite: 11 },
        feedback: 'Le système déteste l\'incertitude. Les humains, eux, commencent enfin à respirer.'
      },
      {
        label: 'Transformer l\'échec en saison 2 participative',
        tone: 'Option franchise',
        effect: { emploi: 3, stabilite: 1, innovation: 8, humanite: -5 },
        feedback: 'Même l\'effondrement devient une opportunité de contenu. C\'est obscène et étrangement cohérent.'
      },
      {
        label: 'Saboter la conférence et laisser la ville écrire sa propre version',
        tone: 'Option disparition',
        effect: { emploi: -4, stabilite: -1, innovation: 4, humanite: 12 },
        feedback: 'Le narratif officiel vacille. Pour la première fois, ça ressemble à de l\'air libre.'
      }
    ]
  }
];

const introScreen = document.getElementById('intro-screen');
const gameScreen = document.getElementById('game-screen');
const endingScreen = document.getElementById('ending-screen');

const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const shareBtn = document.getElementById('share-btn');
const decisionButtons = Array.from(document.querySelectorAll('.decision-btn'));

const turnIndexEl = document.getElementById('turn-index');
const scenarioTitleEl = document.getElementById('scenario-title');
const scenarioTextEl = document.getElementById('scenario-text');
const scenarioTagsEl = document.getElementById('scenario-tags');
const threatLevelEl = document.getElementById('threat-level');
const feedbackEl = document.getElementById('feedback');
const shareStatusEl = document.getElementById('share-status');
const shareFallbackEl = document.getElementById('share-fallback');
const turnTrackEl = document.getElementById('turn-track');
const cityVisualEl = document.getElementById('city-visual');
const visualCaptionEl = document.getElementById('visual-caption');
const visualSubcaptionEl = document.getElementById('visual-subcaption');
const endingVisualEl = document.getElementById('ending-visual');

const metricElements = {
  emploi: {
    value: document.getElementById('emploi-value'),
    bar: document.getElementById('emploi-bar')
  },
  stabilite: {
    value: document.getElementById('stabilite-value'),
    bar: document.getElementById('stabilite-bar')
  },
  innovation: {
    value: document.getElementById('innovation-value'),
    bar: document.getElementById('innovation-bar')
  },
  humanite: {
    value: document.getElementById('humanite-value'),
    bar: document.getElementById('humanite-bar')
  }
};

const endingTitleEl = document.getElementById('ending-title');
const endingTextEl = document.getElementById('ending-text');
const endingStatsEl = document.getElementById('ending-stats');

let currentTurn = 0;
let finalSummary = '';
let turnLocked = false;

function clamp(value) {
  return Math.max(0, Math.min(100, value));
}

function setActiveScreen(screen) {
  [introScreen, gameScreen, endingScreen].forEach((element) => {
    element.classList.toggle('active', element === screen);
  });
}

function resetMetrics() {
  Object.keys(metrics).forEach((key) => {
    metrics[key] = 50;
  });
}

function updateMetricUI() {
  Object.entries(metricElements).forEach(([key, refs]) => {
    const value = clamp(metrics[key]);
    refs.value.textContent = value;
    refs.bar.style.width = `${value}%`;
    refs.bar.parentElement?.setAttribute('aria-valuenow', String(value));

    let fill = 'linear-gradient(90deg, #6b7280 0%, #9ca3af 100%)';
    if (value >= 70) fill = 'linear-gradient(90deg, #d946ef 0%, #fb7185 100%)';
    else if (value >= 45) fill = 'linear-gradient(90deg, #f59e0b 0%, #fb7185 100%)';
    else fill = 'linear-gradient(90deg, #84cc16 0%, #22c55e 100%)';

    refs.bar.style.background = fill;
  });
}

function renderTurnTrack() {
  if (!turnTrackEl) return;

  turnTrackEl.replaceChildren(
    ...scenarios.map((_, index) => {
      const dot = document.createElement('span');
      dot.className = 'turn-dot';
      if (index < currentTurn) dot.classList.add('done');
      if (index === currentTurn) dot.classList.add('current');
      dot.setAttribute('aria-hidden', 'true');
      return dot;
    })
  );
}

function getVisualState() {
  const values = Object.values(metrics);
  const average = values.reduce((sum, value) => sum + value, 0) / values.length;

  if (metrics.humanite >= 70 && metrics.stabilite >= 60) {
    return {
      mood: 'mood-human',
      caption: 'Le district retrouve des interstices humains.',
      subcaption: 'Les néons hurlent encore, mais les habitants recommencent à choisir.'
    };
  }

  if (metrics.innovation >= 78 && metrics.humanite <= 35) {
    return {
      mood: 'mood-machine',
      caption: 'La machine devient l\'esthétique officielle.',
      subcaption: 'Tout est plus fluide, sauf les êtres vivants concernés.'
    };
  }

  if (metrics.emploi >= 75 && metrics.stabilite < 45) {
    return {
      mood: 'mood-overdrive',
      caption: 'Le district produit plus vite qu\'il ne tient debout.',
      subcaption: 'Le rendement augmente. La texture du réel devient inflammable.'
    };
  }

  if (average < 42 || metrics.humanite <= 22) {
    return {
      mood: 'mood-collapse',
      caption: 'La purge administrative ne fait même plus semblant.',
      subcaption: 'Le décor sourit encore, mais uniquement pour les caméras internes.'
    };
  }

  return {
    mood: 'mood-balanced',
    caption: 'District en équilibre instable.',
    subcaption: 'Le décor reste drôle juste assez pour faire oublier la procédure.'
  };
}

function updateVisualState() {
  const { mood, caption, subcaption } = getVisualState();

  if (cityVisualEl) {
    cityVisualEl.className = `city-visual ${mood}`;
  }

  if (visualCaptionEl) {
    visualCaptionEl.textContent = caption;
  }

  if (visualSubcaptionEl) {
    visualSubcaptionEl.textContent = subcaption;
  }

  if (endingVisualEl) {
    endingVisualEl.className = `ending-visual ${mood}`;
    endingVisualEl.textContent = caption;
  }
}

function formatDelta(value) {
  return `${value >= 0 ? '+' : ''}${value}`;
}

function createDeltaLine(choice) {
  return [
    `EMP ${formatDelta(choice.effect.emploi)}`,
    `STA ${formatDelta(choice.effect.stabilite)}`,
    `INN ${formatDelta(choice.effect.innovation)}`,
    `HUM ${formatDelta(choice.effect.humanite)}`
  ].join(' · ');
}

function renderScenario() {
  const scenario = scenarios[currentTurn];
  turnLocked = false;
  turnIndexEl.textContent = String(currentTurn + 1);
  renderTurnTrack();
  updateVisualState();
  scenarioTitleEl.textContent = scenario.title;
  scenarioTextEl.textContent = scenario.text;
  threatLevelEl.textContent = scenario.threat;
  scenarioTagsEl.replaceChildren(
    ...scenario.tags.map((tag) => {
      const chip = document.createElement('span');
      chip.textContent = tag;
      return chip;
    })
  );

  decisionButtons.forEach((button, index) => {
    const choice = scenario.choices[index];
    button.disabled = false;
    button.innerHTML = `
      <span class="decision-kicker">${String.fromCharCode(65 + index)} · ${choice.tone}</span>
      <strong>${choice.label}</strong>
      <span class="decision-delta">${createDeltaLine(choice)}</span>
    `;
  });

  feedbackEl.textContent = 'Quatre propositions. Aucune n\'est saine. Choisissez votre poison administratif.';
}

function applyChoice(choiceIndex) {
  if (turnLocked) return;

  turnLocked = true;
  decisionButtons.forEach((button) => {
    button.disabled = true;
  });

  const scenario = scenarios[currentTurn];
  const choice = scenario.choices[choiceIndex];

  Object.entries(choice.effect).forEach(([key, delta]) => {
    metrics[key] = clamp(metrics[key] + delta);
  });

  updateMetricUI();
  updateVisualState();
  feedbackEl.textContent = choice.feedback;
  currentTurn += 1;

  window.setTimeout(() => {
    if (currentTurn >= scenarios.length) {
      showEnding();
    } else {
      renderScenario();
    }
  }, 1150);
}

function determineEnding() {
  const { emploi, stabilite, innovation, humanite } = metrics;
  const average = (emploi + stabilite + innovation + humanite) / 4;

  if (humanite >= 70 && stabilite >= 60) {
    return {
      title: 'Fin · Désobéissance administrative douce',
      text: 'Vous avez assez saboté la procédure pour réintroduire du débat, du repos et quelques visages non scannés. ORACLE-RH survit, mais il doit désormais cohabiter avec des humains moins dociles.'
    };
  }

  if (innovation >= 78 && humanite <= 35) {
    return {
      title: 'Fin · Smart-city, sentiments en option',
      text: 'Le district devient un miracle logistique: friction minimale, indicateurs maximalistes, population parfaitement décorative. Techniquement brillant. Humainement glacial.'
    };
  }

  if (emploi >= 75 && stabilite < 45) {
    return {
      title: 'Fin · Hyperactivité panoramique',
      text: 'Tout le monde a une mission, parfois trois, mais personne ne sait exactement pour quoi. L\'économie pulse fort; la société, elle, tremble comme une enseigne au néon.'
    };
  }

  if (stabilite >= 75 && innovation < 45) {
    return {
      title: 'Fin · Paix procédurale tiède',
      text: 'Vous avez évité l\'effondrement par une montagne de compromis, de comités et de formulaires lisibles. Peu héroïque, étonnamment vivable, presque subversif.'
    };
  }

  if (average < 42 || humanite <= 20) {
    return {
      title: 'Fin · Le PowerPoint a gagné',
      text: 'La purge administrative s\'est transformée en mode de gouvernement permanent. Les indicateurs sont superbes. Les habitants ressemblent à des pièces jointes nerveuses.'
    };
  }

  return {
    title: 'Fin · Équilibre instable mais narrativement défendable',
    text: 'Le système n\'a pas implosé, les citoyens non plus, et personne ne comprend vraiment comment. En dystopie RH, c\'est presque une victoire artisanale.'
  };
}

function buildShareText(ending) {
  return `J'ai joué à After the Shift — ${ending.title}. Emploi ${metrics.emploi}, Stabilité ${metrics.stabilite}, Innovation ${metrics.innovation}, Humanité ${metrics.humanite}.`;
}

function showEnding() {
  const ending = determineEnding();
  finalSummary = buildShareText(ending);
  renderTurnTrack();
  endingTitleEl.textContent = ending.title;
  endingTextEl.textContent = ending.text;
  endingStatsEl.replaceChildren(
    ...Object.entries(metrics).map(([key, value]) => {
      const wrapper = document.createElement('div');
      wrapper.className = 'mini-stat';

      const label = document.createElement('span');
      label.textContent = key.charAt(0).toUpperCase() + key.slice(1);

      const amount = document.createElement('strong');
      amount.textContent = String(value);

      wrapper.append(label, amount);
      return wrapper;
    })
  );
  shareStatusEl.textContent = '';
  shareFallbackEl.value = '';
  shareFallbackEl.hidden = true;
  setActiveScreen(endingScreen);
}

async function shareResult() {
  const payload = {
    title: 'After the Shift',
    text: finalSummary
  };

  try {
    if (navigator.share) {
      await navigator.share(payload);
      shareStatusEl.textContent = 'Rapport partagé.';
      shareFallbackEl.hidden = true;
      return;
    }

    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(finalSummary);
      shareStatusEl.textContent = 'Rapport copié dans le presse-papiers.';
      shareFallbackEl.hidden = true;
      return;
    }

    throw new Error('clipboard-unavailable');
  } catch (error) {
    if (error && typeof error === 'object' && 'name' in error && error.name === 'AbortError') {
      shareStatusEl.textContent = 'Partage annulé.';
      shareFallbackEl.hidden = true;
      return;
    }

    shareFallbackEl.hidden = false;
    shareFallbackEl.value = finalSummary;
    shareFallbackEl.focus();
    shareFallbackEl.select();
    shareStatusEl.textContent = 'Partage direct indisponible. Le rapport est sélectionné pour copie manuelle.';
  }
}

function startGame() {
  currentTurn = 0;
  turnLocked = false;
  resetMetrics();
  updateMetricUI();
  updateVisualState();
  renderScenario();
  setActiveScreen(gameScreen);
}

startBtn.addEventListener('click', startGame);
restartBtn.addEventListener('click', startGame);
shareBtn.addEventListener('click', shareResult);
decisionButtons.forEach((button, index) => {
  button.addEventListener('click', () => applyChoice(index));
});

updateMetricUI();
updateVisualState();
