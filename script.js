(() => {
  const root = document.documentElement;
  const nav = document.getElementById('nav');
  const menuButton = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const pluginData = {
  "delay": {
    "index": "01",
    "code": "MQ-DELAY",
    "title": "Эхо в твоём ритме.",
    "text": "Стереодилей для короткого slap-эхо и ритмических повторов. AMOUNT задаёт количество эффекта, PRE-DELAY — время, FEEDBACK — повторы. SYNC привязывает задержку к темпу проекта, а PING-PONG перемещает повторы между каналами.",
    "summary": "Стереоэхо с синхронизацией, ping-pong, фильтрами повторов и даккингом.",
    "features": [
      [
        "SYNC / PRE-DELAY",
        "Время в миллисекундах или делениях темпа"
      ],
      [
        "FEEDBACK / WIDTH",
        "Повторы и ширина обработанного сигнала"
      ],
      [
        "TONE / LOW / HIGH CUT",
        "Окраска и частотная полоса эха"
      ],
      [
        "DUCK / DELTA",
        "Даккинг и прослушивание только эффекта"
      ]
    ],
    "mode": "STEREO DELAY",
    "value": 45,
    "wave": "delay",
    "accent": "#b765ff",
    "image": "plugin-images/mq-delay.jpg"
  },
  "verb": {
    "index": "02",
    "code": "MQ-VERB",
    "title": "От комнаты до галактики.",
    "text": "Ревербератор с пятью пространствами: ROOM, AMBIENCE, HALL, SHIMMER и GALACTIC. AMOUNT регулирует количество реверба; SIZE, PRE-DELAY, DIFFUSION, TONE и WIDTH формируют пространство. Спектральный DUCK освобождает место источнику в хвосте.",
    "summary": "Пять пространств, спектральный даккинг, фильтры и заморозка хвоста.",
    "features": [
      [
        "5 MODES",
        "Room · Ambience · Hall · Shimmer · Galactic"
      ],
      [
        "SIZE / DIFFUSION",
        "Размер пространства и плотность отражений"
      ],
      [
        "DUCK / SAT",
        "Спектральный даккинг и сатурация реверба"
      ],
      [
        "FREEZE / FILTERS",
        "Заморозка хвоста, low-cut и high-cut"
      ]
    ],
    "mode": "FIVE REVERB SPACES",
    "value": 32,
    "wave": "reverb",
    "accent": "#b765ff",
    "image": "plugin-images/mq-verb.jpg"
  },
  "pulse": {
    "index": "03",
    "code": "MQ-PULSE",
    "title": "Нарисуй свой пульс.",
    "text": "Ритмическая обработка громкости с редактируемой шкалой до 32 шагов. ADSR-огибающая формирует каждый импульс, а MIX смешивает результат с исходным сигналом. Синхронизация с DAW, свободная частота и TAP задают ритм.",
    "summary": "Редактируемые 2–32 шага, ADSR, восемь паттернов и синхронизация с DAW.",
    "features": [
      [
        "PULSE TIMELINE",
        "Редактирование паттерна длиной 2–32 шага"
      ],
      [
        "ADSR / MIX",
        "Attack, Decay, Sustain, Release и баланс"
      ],
      [
        "SYNC / FREE / TAP",
        "Темп DAW, свободная частота или tap tempo"
      ],
      [
        "8 PATTERNS",
        "Восемь слотов, Randomize и Reset"
      ]
    ],
    "mode": "32-STEP PULSE SHAPER",
    "value": 100,
    "wave": "pulse",
    "accent": "#b765ff",
    "image": "plugin-images/mq-pulse.jpg"
  },
  "mobile": {
    "index": "04",
    "code": "MQ-MOBILE",
    "title": "Телефонный звук. Одна ручка.",
    "text": "Одноручный эффект мобильного телефона. MOBILE одновременно сужает частотную полосу, добавляет мягкую сатурацию и увеличивает долю обработки. Компенсация громкости помогает сравнивать характер звука, а не только уровень.",
    "summary": "Сужение частотной полосы, мягкая сатурация и dry/wet под одной ручкой.",
    "features": [
      [
        "MOBILE 0–100%",
        "Полоса, сатурация и баланс движутся вместе"
      ],
      [
        "PHONE BAND",
        "HPF 80–380 Гц · LPF 18–3,2 кГц"
      ],
      [
        "LEVEL COMPENSATION",
        "Компенсация уровня обработанного сигнала"
      ],
      [
        "OFF / 2× / 4×",
        "Оверсемплинг для офлайн-экспорта"
      ]
    ],
    "mode": "PHONE COLOR",
    "value": 100,
    "wave": "mobile",
    "accent": "#b765ff",
    "image": "plugin-images/mq-mobile.jpg"
  },
  "dist": {
    "index": "05",
    "code": "MQ-DIST",
    "title": "От тепла до цифровой грязи.",
    "text": "Одна ручка постепенно раскрывает цепочку clipper → distortion → bitcrusher → адаптивный low-pass. Стадии подключаются плавно и перекрываются: от мягких гармоник к плотному перегрузу и цифровой текстуре. Компенсация громкости и софт-лимитер завершают цепь.",
    "summary": "Клиппер, дисторшн и биткрашер с адаптивным фильтром под одной ручкой.",
    "features": [
      [
        "ONE CONTROL",
        "Плавное управление всей цепью обработки"
      ],
      [
        "CLIP / DIST / CRUSH",
        "Контроль пиков, гармоники и биткрашинг"
      ],
      [
        "ADAPTIVE LPF",
        "Фильтр смягчает верха по мере усиления эффекта"
      ],
      [
        "OFFLINE 2× / 4×",
        "Оверсемплинг при офлайн-экспорте"
      ]
    ],
    "mode": "CLIP · DISTORT · CRUSH",
    "value": 50,
    "wave": "dist",
    "accent": "#b765ff",
    "image": "plugin-images/mq-dist.jpg"
  },
  "chek": {
    "index": "06",
    "code": "MQ-CHEK",
    "title": "Микс из DAW — на iPhone.",
    "text": "Мониторинг мастер-сигнала на iPhone по локальной сети. Плагин передаёт копию звука, не изменяя выход DAW. Нужны приложение-приёмник и устройства в одной сети. Версия MVP: работа на реальном iPhone и Wi-Fi требует отдельной проверки; это не анализатор LUFS и не эквалайзер.",
    "summary": "Передача мастер-сигнала из DAW на iPhone по локальной сети. Версия MVP.",
    "features": [
      [
        "DAW → iPHONE",
        "Проверка микса на другом устройстве"
      ],
      [
        "LOCAL NETWORK",
        "Передача аудио внутри локальной сети"
      ],
      [
        "PASSTHROUGH",
        "Мастер-выход DAW остаётся неизменным"
      ],
      [
        "MVP / RECEIVER",
        "Нужен iOS-приёмник; проверка на устройстве ещё требуется"
      ]
    ],
    "mode": "DAW TO iPHONE / MVP",
    "value": 0,
    "wave": "check",
    "accent": "#b765ff",
    "image": "plugin-images/mq-chek.jpg"
  }
};

  const onScroll = () => {
    nav?.classList.toggle('scrolled', window.scrollY > 28);
  };

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

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
    chek: '960 / 1220'
  };
  const viewerRatios = {
    delay: '1280 / 1036',
    verb: '1164 / 1280',
    pulse: '780 / 620',
    mobile: '1 / 1',
    dist: '1 / 1',
    chek: '960 / 1220'
  };
  document.querySelectorAll('.plugin-screenshot').forEach(button => {
    const key = button.dataset.open;
    const data = pluginData[key];
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
      image.src = data.image;
      image.alt = `Интерфейс ${data.code}`;
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

  root.classList.add('site-ready');
})();

/* Hero tide motion: gentle pointer tilt for the wave panel. */
(() => {
  const stage = document.querySelector('.signal-tide, .signal-prism');
  if (!stage || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  let tx = 0, ty = 0, cx = 0, cy = 0;
  stage.addEventListener('pointermove', event => {
    const r = stage.getBoundingClientRect();
    tx = ((event.clientX - r.left) / r.width - .5) * 2;
    ty = ((event.clientY - r.top) / r.height - .5) * 2;
    stage.style.setProperty('--mx', `${tx}`);
    stage.style.setProperty('--my', `${ty}`);
  });
  stage.addEventListener('pointerleave', () => { tx = 0; ty = 0; });
  const tick = () => {
    cx += (tx - cx) * .08; cy += (ty - cy) * .08;
    stage.style.setProperty('--rx', `${cy * -1.4}deg`);
    stage.style.setProperty('--ry', `${cx * 1.8}deg`);
    requestAnimationFrame(tick);
  };
  tick();
})();
