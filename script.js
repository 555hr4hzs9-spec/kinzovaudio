(() => {
  const root = document.documentElement;
  const nav = document.getElementById('nav');
  const menuButton = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const pluginData = {
  "ai": {
    "index": "01",
    "code": "MQ-AI",
    "title": "Дубли L/R из твоего вокала.",
    "text": "AI-генератор даблов: загрузите вокал и получите левый и правый дубли для широкой стерео-картины. Возможности шире: превращайте свой голос в любой другой и обучайте модели на базе собственного голоса.",
    "summary": "AI-дубли L/R, конверсия голоса, обучение моделей.",
    "features": [
      ["DOUBLES L/R", "Генерация стерео-даблов из вокала"],
      ["VOICE CONVERT", "Превращение голоса в любой другой"],
      ["TRAIN MODELS", "Обучение моделей на своём голосе"],
      ["WAV EXPORT", "Сохранение даблов в WAV"]
    ],
    "mode": "VOCAL AI APP",
    "value": 100,
    "wave": "ai",
    "accent": "#39d5ff",
    "image": "plugin-images/mq-ai.png",
    "price": "15 000 ₽",
    "kind": "program",
    "platforms": ["MACOS", "APP"]
  },
  "monitor": {
    "index": "02",
    "code": "MQ-MONITOR",
    "title": "Консоль без привязки к карте.",
    "text": "Замена знаменитой консоли, которая работает с любой аудиокартой. Выбирайте входы и выходы, вешайте любимые VST3/AU и мониторьте в реальном времени с минимальной задержкой — восемь каналов под рукой, ничего лишнего.",
    "summary": "Консоль мониторинга с любой картой. Свои VST3/AU, реалтайм.",
    "features": [
      ["ANY INTERFACE", "Работает с любой аудиокартой"],
      ["VST3 / AU HOST", "Любимые плагины внутри консоли"],
      ["8 CHANNELS", "Восемь каналов мониторинга"],
      ["REALTIME", "Мониторинг в реальном времени"]
    ],
    "mode": "CONSOLE APP",
    "value": 0,
    "wave": "monitor",
    "accent": "#39d5ff",
    "image": "plugin-images/mq-monitor.png",
    "price": "15 000 ₽",
    "kind": "program",
    "platforms": ["MACOS", "APP"]
  },
  "chek": {
    "index": "03",
    "code": "MQ-CHEK",
    "title": "Микс из DAW — на iPhone. Без QR-кодов.",
    "text": "MQ-CHEK находит iPhone сам: включите приёмник, и плагин увидит его в локальной сети. Никаких QR-кодов, ручного ввода IP и повторного сопряжения при каждом переподключении — открыл проект и проверяешь микс. Копия мастер-сигнала идёт на телефон, а выход DAW остаётся нетронутым passthrough. На экране всегда живая диагностика: потери, буфер, обрывы, формат, сессия и порт, а честный RTT меряется на самом iPhone, а не угадывается. Это не LUFS-анализатор и не эквалайзер.",
    "summary": "Авто-поиск iPhone в сети без QR-кодов. Диагностика линка и честный RTT.",
    "features": [
      ["АВТО-ПОИСК", "iPhone находится сам — QR-коды не нужны"],
      ["ДИАГНОСТИКА", "Потери, буфер, обрывы, формат и сессия"],
      ["ЧЕСТНЫЙ RTT", "Задержка меряется на iPhone, а не угадывается"],
      ["PASSTHROUGH", "Мастер-выход DAW остаётся неизменным"]
    ],
    "mode": "DAW TO iPHONE / NO QR",
    "value": 0,
    "wave": "check",
    "accent": "#39d5ff",
    "image": "plugin-images/mq-chek.png",
    "price": "5 000 ₽",
    "kind": "plugin",
    "platforms": ["MACOS", "VST3", "AU", "iOS"]
  },
  "verb": {
    "index": "04",
    "code": "MQ-VERB",
    "title": "От комнаты до галактики.",
    "text": "Ревербератор с пятью пространствами: ROOM, AMBIENCE, HALL, SHIMMER и GALACTIC. AMOUNT регулирует количество реверба; SIZE, PRE-DELAY, DIFFUSION, TONE и WIDTH формируют пространство. Спектральный DUCK освобождает место источнику в хвосте.",
    "summary": "Пять пространств, спектральный даккинг, фильтры и заморозка хвоста.",
    "features": [
      ["5 MODES", "Room · Ambience · Hall · Shimmer · Galactic"],
      ["SIZE / DIFFUSION", "Размер пространства и плотность отражений"],
      ["DUCK / SAT", "Спектральный даккинг и сатурация реверба"],
      ["FREEZE / FILTERS", "Заморозка хвоста, low-cut и high-cut"]
    ],
    "mode": "FIVE REVERB SPACES",
    "value": 32,
    "wave": "reverb",
    "accent": "#39d5ff",
    "image": "plugin-images/mq-verb.jpg",
    "price": "Бесплатно",
    "kind": "plugin",
    "platforms": ["MACOS", "VST3", "AU"]
  },
  "pulse": {
    "index": "05",
    "code": "MQ-PULSE",
    "title": "Нарисуй свой пульс.",
    "text": "Ритмическая обработка громкости с редактируемой шкалой до 32 шагов. ADSR-огибающая формирует каждый импульс, а MIX смешивает результат с исходным сигналом. Синхронизация с DAW, свободная частота и TAP задают ритм.",
    "summary": "Редактируемые 2–32 шага, ADSR, восемь паттернов и синхронизация с DAW.",
    "features": [
      ["PULSE TIMELINE", "Редактирование паттерна длиной 2–32 шага"],
      ["ADSR / MIX", "Attack, Decay, Sustain, Release и баланс"],
      ["SYNC / FREE / TAP", "Темп DAW, свободная частота или tap tempo"],
      ["8 PATTERNS", "Восемь слотов, Randomize и Reset"]
    ],
    "mode": "32-STEP PULSE SHAPER",
    "value": 100,
    "wave": "pulse",
    "accent": "#39d5ff",
    "image": "plugin-images/mq-pulse.jpg",
    "price": "Бесплатно",
    "kind": "plugin",
    "platforms": ["MACOS", "VST3", "AU"]
  },
  "mobile": {
    "index": "06",
    "code": "MQ-MOBILE",
    "title": "Телефонный звук. Одна ручка.",
    "text": "Одноручный эффект мобильного телефона. MOBILE одновременно сужает частотную полосу, добавляет мягкую сатурацию и увеличивает долю обработки. Компенсация громкости помогает сравнивать характер звука, а не только уровень.",
    "summary": "Сужение частотной полосы, мягкая сатурация и dry/wet под одной ручкой.",
    "features": [
      ["MOBILE 0–100%", "Полоса, сатурация и баланс движутся вместе"],
      ["PHONE BAND", "HPF 80–380 Гц · LPF 18–3,2 кГц"],
      ["LEVEL COMPENSATION", "Компенсация уровня обработанного сигнала"],
      ["OFF / 2× / 4×", "Оверсемплинг для офлайн-экспорта"]
    ],
    "mode": "PHONE COLOR",
    "value": 100,
    "wave": "mobile",
    "accent": "#39d5ff",
    "image": "plugin-images/mq-mobile.jpg",
    "price": "Бесплатно",
    "kind": "plugin",
    "platforms": ["MACOS", "VST3", "AU"]
  },
  "dist": {
    "index": "07",
    "code": "MQ-DIST",
    "title": "От тепла до цифровой грязи.",
    "text": "Одна ручка постепенно раскрывает цепочку clipper → distortion → bitcrusher → адаптивный low-pass. Стадии подключаются плавно и перекрываются: от мягких гармоник к плотному перегрузу и цифровой текстуре. Компенсация громкости и софт-лимитер завершают цепь.",
    "summary": "Клиппер, дисторшн и биткрашер с адаптивным фильтром под одной ручкой.",
    "features": [
      ["ONE CONTROL", "Плавное управление всей цепью обработки"],
      ["CLIP / DIST / CRUSH", "Контроль пиков, гармоники и биткрашинг"],
      ["ADAPTIVE LPF", "Фильтр смягчает верха по мере усиления эффекта"],
      ["OFFLINE 2× / 4×", "Оверсемплинг при офлайн-экспорте"]
    ],
    "mode": "CLIP · DISTORT · CRUSH",
    "value": 50,
    "wave": "dist",
    "accent": "#39d5ff",
    "image": "plugin-images/mq-dist.jpg",
    "price": "Бесплатно",
    "kind": "plugin",
    "platforms": ["MACOS", "VST3", "AU"]
  },
  "delay": {
    "index": "08",
    "code": "MQ-DELAY",
    "title": "Эхо в твоём ритме.",
    "text": "Стереодилей для короткого slap-эхо и ритмических повторов. AMOUNT задаёт количество эффекта, PRE-DELAY — время, FEEDBACK — повторы. SYNC привязывает задержку к темпу проекта, а PING-PONG перемещает повторы между каналами.",
    "summary": "Стереоэхо с синхронизацией, ping-pong, фильтрами повторов и даккингом.",
    "features": [
      ["SYNC / PRE-DELAY", "Время в миллисекундах или делениях темпа"],
      ["FEEDBACK / WIDTH", "Повторы и ширина обработанного сигнала"],
      ["TONE / LOW / HIGH CUT", "Окраска и частотная полоса эха"],
      ["DUCK / DELTA", "Даккинг и прослушивание только эффекта"]
    ],
    "mode": "STEREO DELAY",
    "value": 45,
    "wave": "delay",
    "accent": "#39d5ff",
    "image": "plugin-images/mq-delay.jpg",
    "price": "Бесплатно",
    "kind": "plugin",
    "platforms": ["MACOS", "VST3", "AU"]
  },
  "detune": {
    "index": "09",
    "code": "MQ-DETUNE",
    "title": "Один морф вместо четырёх ручек.",
    "text": "Атмосферный вокальный detune: одна ручка INTENSITY непрерывно морфирует detune → chorus → flanger → mega-wide doubler без стыков и щелчков. Два micro-pitch голоса, защита низов и моно-совместимость. Маленькая ручка DUCK спектрально пригибает эффект под вокал.",
    "summary": "Морф detune → chorus → flanger → doubler. Спектральный даккинг DUCK.",
    "features": [
      ["INTENSITY 0–100%", "Бесшовный морф четырёх характеров"],
      ["MICRO-PITCH", "Два расстроенных голоса L −24 / R +24 цента"],
      ["SPECTRAL DUCK", "Вокальная полоса −12 дБ, тело почти цело"],
      ["FREE", "Бесплатно: ноль задержки, ~1% CPU"]
    ],
    "mode": "VOCAL MORPH",
    "value": 50,
    "wave": "detune",
    "accent": "#39d5ff",
    "image": "plugin-images/mq-detune.png",
    "price": "Бесплатно",
    "kind": "plugin",
    "platforms": ["MACOS", "VST3", "AU"]
  },
  "detect": {
    "index": "10",
    "code": "MQ-DETECT",
    "title": "Темп и тональность — сразу.",
    "text": "Простой измеритель темпа и тональности с возможностью тапинга: постучите темп пальцем и сразу увидите BPM и тональность материала. Никаких настроек и регистрации — открыл и пользуешься.",
    "summary": "Измеритель темпа и тональности с тапингом. Бесплатно.",
    "features": [
      ["TAP TEMPO", "Настучите темп — BPM посчитается сам"],
      ["KEY DETECT", "Определение тональности материала"],
      ["SIMPLE", "Ничего лишнего: открыл и пользуешься"],
      ["FREE", "Бесплатно, без регистрации"]
    ],
    "mode": "BPM · KEY",
    "value": 0,
    "wave": "detect",
    "accent": "#39d5ff",
    "image": "plugin-images/mq-detect.png",
    "price": "Бесплатно",
    "kind": "plugin",
    "platforms": ["MACOS", "VST3", "AU"]
  }
};

  const onScroll = () => {
    nav?.classList.toggle('scrolled', window.scrollY > 28);
  };

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  const navPanel = document.querySelector('.nav-panel');
  if (navPanel && !reducedMotion) {
    let raf = 0;
    let px = 0;
    let py = 0;
    navPanel.addEventListener('pointermove', event => {
      const rect = navPanel.getBoundingClientRect();
      px = ((event.clientX - rect.left) / rect.width) * 100;
      py = ((event.clientY - rect.top) / rect.height) * 100;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        navPanel.style.setProperty('--gx', `${px.toFixed(1)}%`);
        navPanel.style.setProperty('--gy', `${py.toFixed(1)}%`);
        raf = 0;
      });
    });
  }

  menuButton?.addEventListener('click', () => {
    const open = menuButton.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
    navLinks?.classList.toggle('open', open);
  });

  navLinks?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menuButton?.classList.remove('open');
      menuButton?.setAttribute('aria-expanded', 'false');
      navLinks.classList.remove('open');
    });
  });

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reducedMotion) {
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -4% 0px' });

    revealItems.forEach(item => revealObserver.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add('in-view'));
  }

  const sections = [...document.querySelectorAll('main section[id]')];
  const sectionLinks = [...document.querySelectorAll('.nav-links a')];
  if ('IntersectionObserver' in window) {
    const navObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        sectionLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      });
    }, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });
    sections.forEach(section => navObserver.observe(section));
  }

  const cursor = document.querySelector('.cursor-light');
  if (cursor && window.matchMedia('(hover: hover)').matches && !reducedMotion) {
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;

    window.addEventListener('pointermove', event => {
      targetX = event.clientX;
      targetY = event.clientY;
      cursor.classList.add('visible');
    }, { passive: true });

    document.addEventListener('mouseleave', () => cursor.classList.remove('visible'));

    const followCursor = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      cursor.style.transform = `translate3d(${currentX - 190}px, ${currentY - 190}px, 0)`;
      requestAnimationFrame(followCursor);
    };
    followCursor();
  }

  document.querySelectorAll('.plugin-card').forEach(card => {
    const spotlight = card.querySelector('.card-spot');

    card.addEventListener('pointermove', event => {
      const rect = card.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      spotlight?.style.setProperty('--mx', `${x}%`);
      spotlight?.style.setProperty('--my', `${y}%`);

      if (!reducedMotion && window.matchMedia('(hover: hover)').matches) {
        const rotateY = ((x - 50) / 50) * 2.1;
        const rotateX = ((50 - y) / 50) * 2.1;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
      }
    });

    card.addEventListener('pointerleave', () => {
      card.style.transform = '';
    });
  });

  if (!reducedMotion && window.matchMedia('(hover: hover)').matches) {
    document.querySelectorAll('.magnetic').forEach(button => {
      button.addEventListener('pointermove', event => {
        const rect = button.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        button.style.transform = `translate(${x * 0.08}px, ${y * 0.14}px)`;
      });
      button.addEventListener('pointerleave', () => {
        button.style.transform = '';
      });
    });
  }

  const engineTabs = [...document.querySelectorAll('[data-engine]')];
  const shotRatios = {
    delay: '1280 / 1036',
    verb: '1164 / 1280',
    pulse: '780 / 620',
    mobile: '1 / 1',
    dist: '1 / 1',
    chek: '960 / 1292',
    detune: '1 / 1',
    detect: '420 / 168',
    monitor: '780 / 1640',
    ai: '2252 / 1818'
  };
  const viewerRatios = {
    delay: '1280 / 1036',
    verb: '1164 / 1280',
    pulse: '780 / 620',
    mobile: '1 / 1',
    dist: '1 / 1',
    chek: '960 / 1292',
    detune: '1 / 1',
    detect: '420 / 168',
    monitor: '780 / 1640',
    ai: '2252 / 1818'
  };
  document.querySelectorAll('.plugin-screenshot').forEach(button => {
    const key = button.dataset.open;
    const data = pluginData[key];
    if (!data || !data.image) return;
    button.style.setProperty('--shot-image', `url("${data.image}")`);
    button.style.setProperty('--shot-ratio', shotRatios[key] || '1.24');
  });
  const interfacePanel = document.getElementById('interfacePanel');
  interfacePanel?.style.setProperty('--viewer-image', `url("${pluginData.delay.image}")`);
  interfacePanel?.style.setProperty('--viewer-ratio', viewerRatios.delay);
  engineTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      const data = pluginData[tab.dataset.engine];
      engineTabs.forEach(item => {
        const active = item === tab;
        item.classList.toggle('active', active);
        item.setAttribute('aria-selected', String(active));
        item.tabIndex = active ? 0 : -1;
      });
      const image = document.getElementById('interfaceImage');
      image.src = data.image;
      image.alt = `Интерфейс ${data.code}`;
      interfacePanel?.style.setProperty('--viewer-image', `url("${data.image}")`);
      interfacePanel?.style.setProperty('--viewer-ratio', viewerRatios[tab.dataset.engine] || '1.235');
      document.getElementById('interfacePanel').setAttribute('aria-labelledby', tab.id);
      document.getElementById('viewerName').textContent = data.code;
      document.getElementById('viewerDetails').dataset.open = tab.dataset.engine;
      if (!reducedMotion) image.animate([{opacity:0, transform:'translateY(12px)'},{opacity:1, transform:'none'}], {duration:380, easing:'ease-out'});
    });
    tab.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowRight') next = (index + 1) % engineTabs.length;
      if (event.key === 'ArrowLeft') next = (index - 1 + engineTabs.length) % engineTabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = engineTabs.length - 1;
      if (next !== undefined) { event.preventDefault(); engineTabs[next].focus(); engineTabs[next].click(); }
    });
  });

  const dialog = document.getElementById('pluginDialog');
  const dialogIndex = document.getElementById('dialogIndex');
  const dialogCode = document.getElementById('dialogCode');
  const dialogTitle = document.getElementById('dialogTitle');
  const dialogText = document.getElementById('dialogText');
  const dialogFeatures = document.getElementById('dialogFeatures');
  const dialogClose = dialog?.querySelector('.dialog-close');

  document.querySelectorAll('[data-open]').forEach(button => {
    button.addEventListener('click', () => {
      const data = pluginData[button.dataset.open];
      if (!data || !dialog) return;

      dialog.style.setProperty('--dialog-accent', data.accent);
      dialogIndex.textContent = data.index;
      dialogCode.textContent = data.code;
      dialogTitle.textContent = data.title;
      dialogText.textContent = data.text;
      const image = document.getElementById('dialogImage');
      if (data.image) {
        image.style.display = '';
        image.src = data.image;
        image.alt = `Интерфейс ${data.code}`;
      } else {
        image.style.display = 'none';
      }
      const free = data.price === 'Бесплатно';
      document.getElementById('dialogPrice').textContent = data.price;
      document.getElementById('dialogPrice').classList.toggle('free', free);
      document.getElementById('dialogBuy').querySelector('span').textContent = free ? 'Забрать в Telegram' : 'Купить в Telegram';
      document.getElementById('dialogMeta').innerHTML = (data.platforms || ['MACOS', 'VST3', 'AU']).map(p => `<span>${p}</span>`).join('');
      dialogFeatures.innerHTML = data.features
        .map(([label, text]) => `<div class="dialog-feature"><b>${label}</b><span>${text}</span></div>`)
        .join('');
      dialog.showModal();
      document.body.classList.add('dialog-open');
    });
  });

  const closeDialog = () => {
    dialog?.close();
    document.body.classList.remove('dialog-open');
  };

  dialogClose?.addEventListener('click', closeDialog);
  dialog?.addEventListener('click', event => {
    const rect = dialog.getBoundingClientRect();
    const outside =
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom;
    if (outside) closeDialog();
  });
  dialog?.addEventListener('close', () => document.body.classList.remove('dialog-open'));
  dialog?.querySelector('a[href="#contact"]')?.addEventListener('click', closeDialog);

  /* Hero: techno background lines — full page, dark. */
  const heroBg = document.getElementById('technoBg');
  if (heroBg) {
    const bgCtx = heroBg.getContext('2d');
    const bgDpr = Math.min(window.devicePixelRatio || 1, 2);
    let bgT = 0;
    const bgResize = () => {
      const rect = heroBg.getBoundingClientRect();
      heroBg.width = Math.max(1, Math.floor(window.innerWidth * bgDpr));
      heroBg.height = Math.max(1, Math.floor(window.innerHeight * bgDpr));
      bgCtx.setTransform(bgDpr, 0, 0, bgDpr, 0, 0);
    };
    bgResize();
    window.addEventListener('resize', bgResize);

    const drawBg = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      bgCtx.clearRect(0, 0, w, h);

      // Grid
      const gridSize = 80;
      bgCtx.strokeStyle = 'rgba(0, 0, 0, 0.06)';
      bgCtx.lineWidth = 1;
      for (let x = 0; x <= w; x += gridSize) {
        bgCtx.beginPath();
        bgCtx.moveTo(x, 0);
        bgCtx.lineTo(x, h);
        bgCtx.stroke();
      }
      for (let y = 0; y <= h; y += gridSize) {
        bgCtx.beginPath();
        bgCtx.moveTo(0, y);
        bgCtx.lineTo(w, y);
        bgCtx.stroke();
      }

      // Flowing horizontal lines (dark)
      const lineCount = 6;
      for (let i = 0; i < lineCount; i++) {
        const baseY = (i + 1) * (h / (lineCount + 1));
        const amp = 25 + i * 10;
        const freq = 0.002 + i * 0.0008;
        const speed = 0.4 + i * 0.25;
        bgCtx.beginPath();
        bgCtx.strokeStyle = `rgba(0, 0, 0, ${0.08 + i * 0.03})`;
        bgCtx.lineWidth = 1.2;
        for (let x = 0; x <= w; x += 2) {
          const y = baseY + Math.sin(x * freq + bgT * speed) * amp
                    + Math.sin(x * freq * 0.5 + bgT * speed * 0.7) * (amp * 0.3);
          if (x === 0) bgCtx.moveTo(x, y); else bgCtx.lineTo(x, y);
        }
        bgCtx.stroke();
      }

      // Dark dots at grid intersections
      const dotSpacing = gridSize * 2;
      for (let x = dotSpacing; x < w; x += dotSpacing) {
        for (let y = dotSpacing; y < h; y += dotSpacing) {
          const pulse = Math.sin(bgT * 1.5 + x * 0.008 + y * 0.008) * 0.5 + 0.5;
          const radius = 1.2 + pulse * 1.2;
          bgCtx.fillStyle = `rgba(0, 0, 0, ${0.15 + pulse * 0.15})`;
          bgCtx.beginPath();
          bgCtx.arc(x, y, radius, 0, Math.PI * 2);
          bgCtx.fill();
        }
      }

      bgT += 0.008;
      requestAnimationFrame(drawBg);
    };
    drawBg();
  }

  /* Hero: techno background lines. */
  const heroBg = document.getElementById('heroBg');
  if (heroBg) {
    const bgCtx = heroBg.getContext('2d');
    const bgDpr = Math.min(window.devicePixelRatio || 1, 2);
    let bgT = 0;
    const bgResize = () => {
      const rect = heroBg.getBoundingClientRect();
      heroBg.width = Math.max(1, Math.floor(rect.width * bgDpr));
      heroBg.height = Math.max(1, Math.floor(rect.height * bgDpr));
      bgCtx.setTransform(bgDpr, 0, 0, bgDpr, 0, 0);
    };
    bgResize();
    window.addEventListener('resize', bgResize);

    const drawBg = () => {
      const w = heroBg.width / bgDpr;
      const h = heroBg.height / bgDpr;
      bgCtx.clearRect(0, 0, w, h);

      // Grid
      const gridSize = 60;
      bgCtx.strokeStyle = 'rgba(0, 153, 204, 0.08)';
      bgCtx.lineWidth = 1;
      for (let x = 0; x <= w; x += gridSize) {
        bgCtx.beginPath();
        bgCtx.moveTo(x, 0);
        bgCtx.lineTo(x, h);
        bgCtx.stroke();
      }
      for (let y = 0; y <= h; y += gridSize) {
        bgCtx.beginPath();
        bgCtx.moveTo(0, y);
        bgCtx.lineTo(w, y);
        bgCtx.stroke();
      }

      // Flowing horizontal lines
      const lineCount = 5;
      for (let i = 0; i < lineCount; i++) {
        const baseY = (i + 1) * (h / (lineCount + 1));
        const amp = 20 + i * 8;
        const freq = 0.003 + i * 0.001;
        const speed = 0.5 + i * 0.3;
        bgCtx.beginPath();
        bgCtx.strokeStyle = `rgba(0, 153, 204, ${0.15 + i * 0.05})`;
        bgCtx.lineWidth = 1.5;
        bgCtx.shadowColor = 'rgba(0, 153, 204, 0.4)';
        bgCtx.shadowBlur = 6;
        for (let x = 0; x <= w; x += 2) {
          const y = baseY + Math.sin(x * freq + bgT * speed) * amp
                    + Math.sin(x * freq * 0.5 + bgT * speed * 0.7) * (amp * 0.3);
          if (x === 0) bgCtx.moveTo(x, y); else bgCtx.lineTo(x, y);
        }
        bgCtx.stroke();
        bgCtx.shadowBlur = 0;
      }

      // Glowing dots at grid intersections
      const dotSpacing = gridSize * 2;
      for (let x = dotSpacing; x < w; x += dotSpacing) {
        for (let y = dotSpacing; y < h; y += dotSpacing) {
          const pulse = Math.sin(bgT * 2 + x * 0.01 + y * 0.01) * 0.5 + 0.5;
          const radius = 1.5 + pulse * 1.5;
          const grd = bgCtx.createRadialGradient(x, y, 0, x, y, radius * 4);
          grd.addColorStop(0, `rgba(0, 153, 204, ${0.4 + pulse * 0.4})`);
          grd.addColorStop(1, 'rgba(0, 153, 204, 0)');
          bgCtx.fillStyle = grd;
          bgCtx.beginPath();
          bgCtx.arc(x, y, radius * 4, 0, Math.PI * 2);
          bgCtx.fill();
          bgCtx.fillStyle = `rgba(0, 153, 204, ${0.6 + pulse * 0.4})`;
          bgCtx.beginPath();
          bgCtx.arc(x, y, radius, 0, Math.PI * 2);
          bgCtx.fill();
        }
      }

      bgT += 0.012;
      requestAnimationFrame(drawBg);
    };
    drawBg();
  }
  /* Add download buttons to plugin cards. */
  const downloadUrls = {
    ai:      { win: 'downloads/mq-ai-win.exe', mac: 'downloads/mq-ai-mac.dmg' },
    monitor: { mac: 'downloads/mq-monitor-mac.dmg' },
    chek:    { win: 'downloads/mq-chek-win.exe', mac: 'downloads/mq-chek-mac.dmg' },
    verb:    { win: 'downloads/mq-verb-win.exe', mac: 'downloads/mq-verb-mac.dmg' },
    pulse:   { mac: 'downloads/mq-pulse-mac.dmg' },
    mobile:  { win: 'downloads/mq-mobile-win.exe', mac: 'downloads/mq-mobile-mac.dmg' },
    dist:    { win: 'downloads/mq-dist-win.exe', mac: 'downloads/mq-dist-mac.dmg' },
    delay:   { win: 'downloads/mq-delay-win.zip', mac: 'downloads/mq-delay-mac.zip' },
    detune:  { win: 'downloads/mq-detune-win.exe', mac: 'downloads/mq-detune-mac.pkg' },
    detect:  { win: 'downloads/mq-detect-win.exe', mac: 'downloads/mq-detect-mac.pkg' },
  };

  document.querySelectorAll('.plugin-card').forEach(card => {
    const key = card.dataset.plugin;
    const urls = downloadUrls[key];
    if (!urls) return;
    const wrap = document.createElement('div');
    wrap.className = 'card-downloads';
    if (urls.win) {
      const a = document.createElement('a');
      a.className = 'download-btn';
      a.href = urls.win;
      a.setAttribute('download', '');
      a.innerHTML = '<span>Windows</span><b>↓</b>';
      wrap.appendChild(a);
    }
    if (urls.mac) {
      const a = document.createElement('a');
      a.className = 'download-btn';
      a.href = urls.mac;
      a.setAttribute('download', '');
      a.innerHTML = '<span>macOS</span><b>↓</b>';
      wrap.appendChild(a);
    }
    const link = card.querySelector('.card-link');
    if (link) link.insertAdjacentElement('afterend', wrap);
  });

  /* Add download buttons to plugin cards. */
  const downloadUrls = {
    ai:      { win: 'downloads/mq-ai-win.exe', mac: 'downloads/mq-ai-mac.dmg' },
    monitor: { mac: 'downloads/mq-monitor-mac.dmg' },
    chek:    { win: 'downloads/mq-chek-win.exe', mac: 'downloads/mq-chek-mac.dmg' },
    verb:    { win: 'downloads/mq-verb-win.exe', mac: 'downloads/mq-verb-mac.dmg' },
    pulse:   { mac: 'downloads/mq-pulse-mac.dmg' },
    mobile:  { win: 'downloads/mq-mobile-win.exe', mac: 'downloads/mq-mobile-mac.dmg' },
    dist:    { win: 'downloads/mq-dist-win.exe', mac: 'downloads/mq-dist-mac.dmg' },
    delay:   { win: 'downloads/mq-delay-win.zip', mac: 'downloads/mq-delay-mac.zip' },
    detune:  { win: 'downloads/mq-detune-win.exe', mac: 'downloads/mq-detune-mac.pkg' },
    detect:  { win: 'downloads/mq-detect-win.exe', mac: 'downloads/mq-detect-mac.pkg' },
  };

  document.querySelectorAll('.plugin-card').forEach(card => {
    const key = card.dataset.plugin;
    const urls = downloadUrls[key];
    if (!urls) return;
    const wrap = document.createElement('div');
    wrap.className = 'card-downloads';
    if (urls.win) {
      const a = document.createElement('a');
      a.className = 'download-btn';
      a.href = urls.win;
      a.setAttribute('download', '');
      a.innerHTML = '<span>Windows</span><b>↓</b>';
      wrap.appendChild(a);
    }
    if (urls.mac) {
      const a = document.createElement('a');
      a.className = 'download-btn';
      a.href = urls.mac;
      a.setAttribute('download', '');
      a.innerHTML = '<span>macOS</span><b>↓</b>';
      wrap.appendChild(a);
    }
    const link = card.querySelector('.card-link');
    if (link) link.insertAdjacentElement('afterend', wrap);
  });

  /* Catalog filter: all / plugins / programs / free. */
  (() => {
  const chips = [...document.querySelectorAll('.filter-chip')];
  const cards = [...document.querySelectorAll('.plugin-card')];
  if (!chips.length || !cards.length) return;
  chips.forEach(chip => chip.addEventListener('click', () => {
    chips.forEach(c => c.classList.toggle('active', c === chip));
    const f = chip.dataset.filter;
    cards.forEach(card => {
      const show = f === 'all'
        || (f === 'free' && card.hasAttribute('data-free'))
        || card.dataset.category === f;
      card.classList.toggle('hidden', !show);
    });
  }));
})();

/* Hero tide motion */
  {
  const stage = document.querySelector('.signal-tide, .signal-prism');
  if (!stage || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  let tx = 0, ty = 0, cx = 0, cy = 0;
  stage.addEventListener('pointermove', event => {
    const r = stage.getBoundingClientRect();
    tx = ((event.clientX - r.left) / r.width - .5) * 2;
    ty = ((event.clientY - r.top) / r.height - .5) * 2;
    stage.style.setProperty('--mx', `${tx}`);
    stage.style.setProperty('--my', `${ty}`);
    stage.style.setProperty('--gx', `${(((event.clientX - r.left) / r.width) * 100).toFixed(1)}%`);
    stage.style.setProperty('--gy', `${(((event.clientY - r.top) / r.height) * 100).toFixed(1)}%`);
  });
  stage.addEventListener('pointerleave', () => { tx = 0; ty = 0; });
  const tick = () => {
    cx += (tx - cx) * .08; cy += (ty - cy) * .08;
    stage.style.setProperty('--rx', `${cy * -1.4}deg`);
    stage.style.setProperty('--ry', `${cx * 1.8}deg`);
    requestAnimationFrame(tick);
  };
  tick();
  }

  root.classList.add('site-ready');
})();