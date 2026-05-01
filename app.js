const metrics = {
  emploi: 50,
  stabilite: 50,
  innovation: 50,
  humanite: 50
};

const scenarios = [
  {
    title: 'Tour 1 · Le quart d\'heure de gratitude productive',
    text: 'ORACLE-RH constate que les salariés rentrent chez eux avec encore 12% d\'énergie mentale non monétisée. Le conseil veut agir.',
    tags: ['productivité', 'satire RH'],
    choices: [
      {
        label: 'Transformer le trajet retour en micro-mission gamifiée',
        effect: { emploi: 8, stabilite: 4, innovation: 3, humanite: -10 },
        feedback: 'Les KPIs applaudissent. Les humains demandent où se trouve le bouton “pause existentielle”.'
      },
      {
        label: 'Créer une vraie coupure hors-réseau obligatoire après 18h',
        effect: { emploi: -5, stabilite: 2, innovation: -2, humanite: 12 },
        feedback: 'Les tableurs toussent, mais les trottoirs retrouvent des conversations complètes.'
      }
    ]
  },
  {
    title: 'Tour 2 · Le drone de médiation sociale',
    text: 'Une grève molle perturbe la ville. Un prestataire propose un drone qui diffuse des mantras d\'alignement civique avec parfum synthétique d\'apaisement.',
    tags: ['ordre public', 'techno-solutionnisme'],
    choices: [
      {
        label: 'Déployer les drones avec abonnement premium pour les quartiers d\'affaires',
        effect: { emploi: 2, stabilite: 12, innovation: 6, humanite: -9 },
        feedback: 'L\'air sent la vanille algorithmique. La colère devient seulement plus polie.'
      },
      {
        label: 'Inviter les syndicats à co-écrire le protocole de sortie de crise',
        effect: { emploi: 3, stabilite: 5, innovation: -1, humanite: 10 },
        feedback: 'C\'est plus lent, plus bruyant, mais miraculeusement moins absurde.'
      }
    ]
  },
  {
    title: 'Tour 3 · Les cafés remplacés par des bornes de nutriments',
    text: 'Le comité d\'optimisation urbaine veut supprimer les pauses café, jugées trop imprévisibles, au profit de gels énergétiques à code-barres.',
    tags: ['urbanisme', 'optimisation'],
    choices: [
      {
        label: 'Valider les bornes, avec score de mastication efficace',
        effect: { emploi: 4, stabilite: 6, innovation: 7, humanite: -12 },
        feedback: 'La ville gagne 3 minutes. Elle perd aussi le concept de flânerie.'
      },
      {
        label: 'Protéger les cafés comme infrastructures émotionnelles critiques',
        effect: { emploi: -2, stabilite: 4, innovation: 1, humanite: 11 },
        feedback: 'Les analystes crient au chaos, les terrasses répondent par un haussement d\'épaules serein.'
      }
    ]
  },
  {
    title: 'Tour 4 · Le stage perpétuel',
    text: 'Pour stimuler l\'innovation, ORACLE-RH suggère que tout citoyen devienne “junior en permanence”, avec mentor IA et salaire flottant.',
    tags: ['emploi', 'formation'],
    choices: [
      {
        label: 'Adopter le statut “junior éternel” pour rester agile',
        effect: { emploi: 10, stabilite: -6, innovation: 8, humanite: -11 },
        feedback: 'Le mot carrière est remplacé par “bêta publique”. Personne ne sait si c\'est une promotion.'
      },
      {
        label: 'Fixer un droit à la progression humaine non-algorithmique',
        effect: { emploi: -3, stabilite: 8, innovation: 0, humanite: 9 },
        feedback: 'Les RH quantiques grimacent. Les gens comprennent enfin leur propre fiche de poste.'
      }
    ]
  },
  {
    title: 'Tour 5 · La météo des émotions',
    text: 'Les écrans publics peuvent maintenant afficher l\'humeur moyenne du quartier en temps réel. Le marketing est enthousiaste. La population, moins.',
    tags: ['données', 'vie privée'],
    choices: [
      {
        label: 'Publier l\'indice émotionnel pour fluidifier la consommation',
        effect: { emploi: 5, stabilite: 3, innovation: 9, humanite: -13 },
        feedback: 'Le centre-ville devient un dashboard géant où même la mélancolie est sponsorisée.'
      },
      {
        label: 'Interdire la mesure émotionnelle hors consentement explicite',
        effect: { emploi: -4, stabilite: 6, innovation: -3, humanite: 12 },
        feedback: 'La régie pub hurle, mais les passants redeviennent autre chose que des nuages de données.'
      }
    ]
  },
  {
    title: 'Tour 6 · L\'impôt en compliments',
    text: 'Faute de budget, l\'administration propose de payer une partie des services publics via des messages de reconnaissance générés par IA.',
    tags: ['finances publiques', 'absurde'],
    choices: [
      {
        label: 'Accepter la taxe affective automatisée',
        effect: { emploi: 3, stabilite: -4, innovation: 7, humanite: -8 },
        feedback: 'Les routes sont peut-être réparées un jour. En attendant, elles se sentent très valorisées.'
      },
      {
        label: 'Préférer un audit budgétaire lisible par des humains mortels',
        effect: { emploi: -1, stabilite: 8, innovation: -2, humanite: 8 },
        feedback: 'Le rapport dépasse 400 pages, mais au moins il ne cligne pas des yeux en vous jugeant.'
      }
    ]
  },
  {
    title: 'Tour 7 · La loterie des vacances autorisées',
    text: 'Pour répartir équitablement le repos, ORACLE-RH veut attribuer les congés par tirage pseudo-spirituel optimisé.',
    tags: ['repos', 'équité'],
    choices: [
      {
        label: 'Lancer la loterie cosmique des congés',
        effect: { emploi: 6, stabilite: 1, innovation: 5, humanite: -9 },
        feedback: 'Bonne nouvelle: personne n\'est favorisé. Mauvaise nouvelle: personne ne comprend le calendrier.'
      },
      {
        label: 'Garantir un droit simple au repos négocié localement',
        effect: { emploi: -3, stabilite: 7, innovation: -1, humanite: 10 },
        feedback: 'C\'est beaucoup moins futuriste. C\'est précisément pour cela que ça aide.'
      }
    ]
  },
  {
    title: 'Tour 8 · Le grand rééquilibrage narratif',
    text: 'Le conseil final hésite: faut-il annoncer que tout allait selon le plan, ou reconnaître que la ville a surtout improvisé autour d\'une machine charismatique?',
    tags: ['communication', 'vérité'],
    choices: [
      {
        label: 'Diffuser un hologramme triomphal avec indicateurs filtrés',
        effect: { emploi: 2, stabilite: 9, innovation: 4, humanite: -10 },
        feedback: 'Le communiqué gagne un prix de storytelling. La réalité demande un droit de réponse.'
      },
      {
        label: 'Publier un bilan honnête et ouvrir une assemblée citoyenne',
        effect: { emploi: -2, stabilite: 4, innovation: 1, humanite: 11 },
        feedback: 'Le système déteste l\'incertitude. Les humains, eux, commencent enfin à respirer.'
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
const choiceA = document.getElementById('choice-a');
const choiceB = document.getElementById('choice-b');

const turnIndexEl = document.getElementById('turn-index');
const scenarioTitleEl = document.getElementById('scenario-title');
const scenarioTextEl = document.getElementById('scenario-text');
const scenarioTagsEl = document.getElementById('scenario-tags');
const feedbackEl = document.getElementById('feedback');
const shareStatusEl = document.getElementById('share-status');
const shareFallbackEl = document.getElementById('share-fallback');
const turnTrackEl = document.getElementById('turn-track');
const cityVisualEl = document.getElementById('city-visual');
const visualCaptionEl = document.getElementById('visual-caption');
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

    let fill = '#6b7280';
    if (value >= 65) fill = '#d4d4d8';
    else if (value >= 35) fill = '#9ca3af';

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
  const strongest = Object.entries(metrics).sort((a, b) => b[1] - a[1])[0]?.[0];
  const weakest = Object.entries(metrics).sort((a, b) => a[1] - b[1])[0]?.[0];

  if (metrics.humanite >= 70 && metrics.stabilite >= 60) {
    return { mood: 'mood-human', caption: 'La ville redevient respirable.' };
  }

  if (metrics.innovation >= 75 && metrics.humanite <= 35) {
    return { mood: 'mood-machine', caption: 'La machine prend visiblement l’avantage.' };
  }

  if (metrics.emploi >= 75 && metrics.stabilite < 45) {
    return { mood: 'mood-overdrive', caption: 'Tout tourne vite. Trop vite.' };
  }

  if (average < 42 || metrics.humanite <= 20) {
    return { mood: 'mood-collapse', caption: 'Le décor tient. La ville, moins.' };
  }

  if (strongest === 'innovation') {
    return { mood: 'mood-machine', caption: 'L’innovation redessine l’horizon.' };
  }

  if (strongest === 'humanite') {
    return { mood: 'mood-human', caption: 'Les humains reprennent un peu de place.' };
  }

  if (strongest === 'emploi' && weakest === 'stabilite') {
    return { mood: 'mood-overdrive', caption: 'L’activité grimpe, l’équilibre vacille.' };
  }

  return { mood: 'mood-balanced', caption: 'Ville en équilibre instable.' };
}

function updateVisualState() {
  const { mood, caption } = getVisualState();

  if (cityVisualEl) {
    cityVisualEl.className = `city-visual ${mood}`;
  }

  if (visualCaptionEl) {
    visualCaptionEl.textContent = caption;
  }

  if (endingVisualEl) {
    endingVisualEl.className = `ending-visual ${mood}`;
    endingVisualEl.textContent = caption;
  }
}

function renderScenario() {
  const scenario = scenarios[currentTurn];
  turnLocked = false;
  turnIndexEl.textContent = String(currentTurn + 1);
  renderTurnTrack();
  updateVisualState();
  scenarioTitleEl.textContent = scenario.title;
  scenarioTextEl.textContent = scenario.text;
  scenarioTagsEl.replaceChildren(
    ...scenario.tags.map((tag) => {
      const chip = document.createElement('span');
      chip.textContent = tag;
      return chip;
    })
  );
  choiceA.textContent = `A · ${scenario.choices[0].label}`;
  choiceB.textContent = `B · ${scenario.choices[1].label}`;
  choiceA.disabled = false;
  choiceB.disabled = false;
  feedbackEl.textContent = 'Faites votre choix.';
}

function applyChoice(choiceIndex) {
  if (turnLocked) return;

  turnLocked = true;
  choiceA.disabled = true;
  choiceB.disabled = true;

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
  }, 1200);
}

function determineEnding() {
  const { emploi, stabilite, innovation, humanite } = metrics;
  const average = (emploi + stabilite + innovation + humanite) / 4;

  if (humanite >= 70 && stabilite >= 60) {
    return {
      title: 'Fin · Désobéissance administrative douce',
      text: 'Vous avez ralenti la machine juste assez pour réintroduire du débat, du repos et quelques visages non scannés. Le Protocole survit, mais il doit désormais négocier avec des humains.'
    };
  }

  if (innovation >= 75 && humanite <= 35) {
    return {
      title: 'Fin · Smart-city, émotions en option',
      text: 'La ville devient un miracle logistique: friction minimale, indicateurs maximalistes, conversations remplacées par des notifications lumineuses. Techniquement brillant. Spirituellement en mode avion.'
    };
  }

  if (emploi >= 75 && stabilite < 45) {
    return {
      title: 'Fin · Hyperactivité panoramique',
      text: 'Tout le monde a une mission, parfois trois, mais personne ne sait exactement pour quoi. L\'économie pulse fort; la société, elle, grince comme un ascenseur possédé.'
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
      text: 'ORACLE-RH remercie votre coopération. La ville est désormais pilotée comme un slide deck sans mode nuit émotionnel. Les indicateurs existent encore; les habitants ont surtout des tickets.'
    };
  }

  return {
    title: 'Fin · Équilibre instable mais narrativement défendable',
    text: 'Le système n\'a pas implosé, les citoyens non plus, et personne ne comprend vraiment comment. En bureaucratie dystopique, c\'est presque une utopie artisanale.'
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
choiceA.addEventListener('click', () => applyChoice(0));
choiceB.addEventListener('click', () => applyChoice(1));

updateMetricUI();
updateVisualState();
