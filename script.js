(() => {
  const root = document.documentElement;
  const nav = document.getElementById('nav');
  const menuButton = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const pluginData = {
    delay: {
      index: '01',
      code: 'MQ-DELAY',
      title: 'Эхо, которое держит темп.',
      text: 'Музыкальный delay с точными делениями, широким стерео и подвижным ping-pong. Feedback и Mix управляют длиной хвоста, а фильтры убирают всё лишнее.',
      accent: '#b765ff',
      features: [
        ['SYNC', '1/2, 1/4, 1/8 и триольные деления'],
        ['PING-PONG', 'Живое движение между каналами'],
        ['DUCKING', 'Чистые повторы под вокалом'],
        ['LOW / HIGH CUT', 'Точная посадка эха в микс']
      ],
      mode: 'RHYTHMIC ECHO',
      value: 36,
      wave: 'delay'
    },
    verb: {
      index: '02',
      code: 'MQ-VERB',
      title: 'Пространство без грязи.',
      text: 'Алгоритмический реверб от плотной комнаты до большого зала и shimmer-атмосфер. Отдельный контроль баланса помогает сохранить источник впереди.',
      accent: '#7f8cff',
      features: [
        ['5 MODES', 'Room, Plate, Hall, Shimmer, Galactic'],
        ['WET / DRY', 'Главный макро без потери ясности'],
        ['FREEZE', 'Бесконечный хвост по одной кнопке'],
        ['DUCKING', 'Вокал остаётся в центре микса']
      ],
      mode: 'ATMOSPHERIC SPACE',
      value: 42,
      wave: 'reverb'
    },
    pulse: {
      index: '03',
      code: 'MQ-PULSE',
      title: 'Движение внутри звука.',
      text: 'Ритмический модулятор, который превращает статичную обработку в живой groove. Все акценты жёстко следуют темпу проекта.',
      accent: '#48e6b3',
      features: [
        ['TEMPO SYNC', 'Пульсация всегда в темпе DAW'],
        ['1/8 + 1/16', 'Быстрые музыкальные режимы'],
        ['DEPTH', 'От лёгкого движения до sidechain'],
        ['SMOOTH', 'Чистые переходы без щелчков']
      ],
      mode: 'RHYTHM MODULATION',
      value: 64,
      wave: 'pulse'
    },
    mobile: {
      index: '04',
      code: 'MQ-MOBILE',
      title: 'Телефонный характер.',
      text: 'Компактный фильтр и линейный обработчик для вокала, синтов и сэмплов. Быстро превращает широкий сигнал в сфокусированный lo-fi источник.',
      accent: '#ff9f5a',
      features: [
        ['12 / 24 dB', 'Две музыкальные крутизны среза'],
        ['BAND PASS', 'Характерный телефонный тон'],
        ['DRIVE', 'Мягкое уплотнение после фильтра'],
        ['WIDTH', 'Контроль ширины обработанного сигнала']
      ],
      mode: 'MOBILE FILTER',
      value: 68,
      wave: 'mobile'
    },
    dist: {
      index: '05',
      code: 'MQ-DIST',
      title: 'Грязь под контролем.',
      text: 'От мягкого тёплого слоя до плотного каскада. Встроенные input/output meter и быстрый баланс позволяют держать агрессию в пределах микса.',
      accent: '#ff5d78',
      features: [
        ['4 MODES', 'Warm, Crush, Bias и Hard'],
        ['CASCADE', 'Два этапа перегруза в одном ядре'],
        ['AUTO GAIN', 'Мощность без прыжков уровня'],
        ['POST FILTER', 'Финальная очистка верхов']
      ],
      mode: 'DRIVE INTENSITY',
      value: 74,
      wave: 'dist'
    },
    chek: {
      index: '06',
      code: 'MQ-CHEK',
      title: 'Проверь сигнал быстрее.',
      text: 'Компактный анализатор, который показывает динамику, пики, частотный баланс и потенциальные проблемы до того, как они становятся заметны в миксе.',
      accent: '#f3dc65',
      features: [
        ['LUFS', 'Мгновенная оценка громкости'],
        ['PHASE', 'Понятная корреляция стерео'],
        ['SPECTRUM', 'Проблемные зоны без перегруза'],
        ['PEAK', 'Контроль цифровых перегрузов']
      ],
      mode: 'SIGNAL ANALYSIS',
      value: 94,
      wave: 'check'
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

  const enginePanel = document.querySelector('.engine-panel');
  const engineTabs = document.querySelectorAll('[data-engine]');
  const engineValue = document.getElementById('engineValue');
  const engineMode = document.getElementById('engineMode');
  const engineDisplay = document.querySelector('.engine-display');
  let activeWave = 'delay';
  let wavePhase = 0;
  let targetLevel = 0.7;
  let currentLevel = 0.7;

  engineTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const key = tab.dataset.engine;
      const data = pluginData[key];
      if (!data) return;

      engineTabs.forEach(item => {
        const active = item === tab;
        item.classList.toggle('active', active);
        item.setAttribute('aria-selected', String(active));
      });

      enginePanel?.style.setProperty('--accent', data.accent);
      enginePanel?.style.setProperty('--accent-soft', data.accent);
      if (engineValue) animateNumber(engineValue, Number(engineValue.textContent), data.value, 360);
      if (engineMode) {
        engineMode.animate(
          [{ opacity: 1, transform: 'translateY(0)' }, { opacity: 0, transform: 'translateY(-8px)' }],
          { duration: 120, fill: 'forwards' }
        ).onfinish = () => {
          engineMode.textContent = data.mode;
          engineMode.animate(
            [{ opacity: 0, transform: 'translateY(8px)' }, { opacity: 1, transform: 'translateY(0)' }],
            { duration: 220, fill: 'forwards' }
          );
        };
      }
      activeWave = data.wave;
      targetLevel = Math.max(.38, Math.min(.96, data.value / 100));
      engineDisplay?.animate(
        [{ filter: 'brightness(1)' }, { filter: 'brightness(1.35)' }, { filter: 'brightness(1)' }],
        { duration: 360, easing: 'ease-out' }
      );
    });
  });

  function animateNumber(element, from, to, duration) {
    const start = performance.now();
    const update = now => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      element.textContent = String(Math.round(from + (to - from) * eased));
      if (progress < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  }

  const canvas = document.getElementById('waveCanvas');
  const ctx = canvas?.getContext('2d');

  function resizeCanvas() {
    if (!canvas || !ctx) return;
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.max(1, Math.round(rect.width * dpr));
    canvas.height = Math.max(1, Math.round(rect.height * dpr));
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function waveValue(type, x, phase) {
    switch (type) {
      case 'reverb':
        return Math.sin(x * 0.046 + phase) * Math.exp(-x * 0.0042) +
          Math.sin(x * 0.11 - phase * .7) * Math.exp(-x * .006) * .38;
      case 'pulse':
        return Math.sin(x * 0.055 + phase) * (Math.sin(x * .17 + phase) > .15 ? .94 : .34);
      case 'mobile':
        return Math.sin(x * .07 + phase) * .55 + Math.sin(x * .018 - phase * .3) * .2;
      case 'dist': {
        const value = Math.sin(x * .07 + phase) + Math.sin(x * .13 - phase * .45) * .42;
        return Math.max(-1, Math.min(1, value * 1.3));
      }
      case 'check':
        return Math.sin(x * .038 + phase) * .46 + Math.sin(x * .17 + phase * .9) * .2 + Math.sin(x * .011) * .22;
      default: {
        const echo = Math.sin(x * .055 + phase) * .55;
        const repeat = Math.sin((x - 68) * .055 + phase) * .3 * (x > 68 ? 1 : 0);
        const repeat2 = Math.sin((x - 136) * .055 + phase) * .17 * (x > 136 ? 1 : 0);
        return echo + repeat + repeat2;
      }
    }
  }

  function drawWave(time) {
    if (!canvas || !ctx) return;
    const rect = canvas.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    if (!width || !height) {
      requestAnimationFrame(drawWave);
      return;
    }

    ctx.clearRect(0, 0, width, height);
    currentLevel += (targetLevel - currentLevel) * .045;
    wavePhase += reducedMotion ? 0 : .027;

    const accent = getComputedStyle(enginePanel).getPropertyValue('--accent').trim() || '#b765ff';
    const middle = height * .56;
    const amplitude = height * .27 * currentLevel;

    const gradient = ctx.createLinearGradient(0, 0, width, 0);
    gradient.addColorStop(0, `${accent}18`);
    gradient.addColorStop(.14, accent);
    gradient.addColorStop(.78, accent);
    gradient.addColorStop(1, `${accent}20`);

    ctx.beginPath();
    for (let x = 0; x <= width; x += 2) {
      const envelope = Math.min(1, x / 45) * Math.min(1, (width - x) / 45);
      const y = middle + waveValue(activeWave, x, wavePhase) * amplitude * envelope;
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 2;
    ctx.shadowColor = accent;
    ctx.shadowBlur = 10;
    ctx.stroke();
    ctx.shadowBlur = 0;

    ctx.beginPath();
    ctx.moveTo(0, middle);
    ctx.lineTo(width, middle);
    ctx.strokeStyle = 'rgba(255,255,255,.055)';
    ctx.lineWidth = 1;
    ctx.stroke();

    if (!reducedMotion) requestAnimationFrame(drawWave);
  }

  if (canvas && ctx) {
    resizeCanvas();
    drawWave(performance.now());
    window.addEventListener('resize', resizeCanvas, { passive: true });
  }

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
