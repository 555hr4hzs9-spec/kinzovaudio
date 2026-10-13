# KINZOVAUDIO — файл передачи проекта

Дата: 13 октября 2026  
Язык сайта: русский  
Публичный сайт: https://555hr4hzs9-spec.github.io/kinzovaudio/  
GitHub-репозиторий: https://github.com/555hr4hzs9-spec/kinzovaudio  
Ветка: `main`

## Цель проекта

Сайт бренда **KINZOV AUDIO** для шести аудиоплагинов:

- MQ-DELAY
- MQ-VERB
- MQ-PULSE
- MQ-MOBILE
- MQ-DIST
- MQ-CHEK

Стиль: тёмный технологичный сайт аудиоплагинов, фиолетовые акценты, аккуратные
анимации, типографика без лишнего моноширинного текста. Вдохновение по ритму
анимаций — Slimz Plugins, но дизайн должен оставаться самостоятельным.

## Основные файлы

- `index.html` — разметка главной страницы.
- `styles.css` — стили, адаптивность и анимации.
- `script.js` — reveal-анимации, tilt, диалоги, переключатель интерфейсов.
- `plugin-images/` — изображения интерфейсов плагинов.
- `fonts/` — локальные шрифты Inter, Space Grotesk и JetBrains Mono.

## Изображения плагинов

В `plugin-images/` лежат:

- `mq-delay.jpg` — MQ-DELAY.
- `mq-verb.jpg` — MQ-VERB.
- `mq-pulse.jpg` — MQ-PULSE.
- `mq-mobile.jpg` — MQ-MOBILE.
- `mq-dist.jpg` — MQ-DIST.
- `mq-chek.jpg` — MQ-CHEK.

Изображения подключены в карточках, в диалоге деталей и в блоке просмотра
интерфейсов.

## Реальные описания плагинов

### MQ-DELAY

Стереодилей с PRE-DELAY, SYNC, FEEDBACK, TONE, WIDTH, PING-PONG, LOW/HIGH CUT
и DUCK. Используется для slap-эхо и ритмических повторов.

### MQ-VERB

Ревербератор с пятью режимами: ROOM, AMBIENCE, HALL, SHIMMER и GALACTIC.
Есть SIZE, PRE-DELAY, DIFFUSION, TONE, WIDTH, DUCK, SAT, FREEZE и фильтры.

### MQ-PULSE

Ритмический pulse-shaper с редактируемой последовательностью до 32 шагов.
Есть ADSR для каждого шага, MIX, SYNC, FREE/TAP tempo, 8 паттернов,
RANDOMIZE и RESET.

### MQ-MOBILE

Одноручный телефонный эффект: одновременно сужает частотную полосу, добавляет
мягкую сатурацию и смешивает dry/wet. Есть компенсация громкости и offline
oversampling 2x/4x.

### MQ-DIST

Одноручная цепь CLIPPER → DISTORTION → BITCRUSHER → адаптивный LPF →
компенсация громкости → soft limiter. Нужен для мягкого тепла, перегруза и
цифровой текстуры.

### MQ-CHEK

MVP-мониторинг: передаёт копию мастер-сигнала из DAW на iPhone по локальной
сети. Выход DAW остаётся passthrough. Это не LUFS-анализатор и не EQ.

## Что уже опубликовано

Последняя опубликованная версия — коммит `0eca5c4`, URL:

`https://555hr4hzs9-spec.github.io/kinzovaudio/?v=20261013-7`

В ней:

- исправлены desktop/mobile карточки;
- убрана обрезка изображений;
- добавлен размытый фон из самих изображений;
- сохранены анимации карточек и tilt;
- добавлены реальные изображения всех шести плагинов.

Версия `?v=20261013-8` была опубликована ранее с промежуточным hero-блоком
`Signal Console`.

## Текущая незавершённая работа

В рабочей папке уже подготовлен новый hero-концепт **Modular 3D Plugin Rack /
Prism**. Он заменяет старые варианты:

- старый круглый Signal Lab удалён из HTML;
- промежуточный Signal Console также удалён;
- новый класс hero: `.signal-prism`;
- центральное стеклянное ядро `KINZOV ENGINE`;
- шесть плавающих модулей `.prism-module`;
- новые CSS-анимации: `prismSweep`, `coreShine`, `prismOrbit`,
  `prismOrbitReverse`;
- pointer tilt сохранён, но теперь двигает модульный rack;
- в `script.js` добавлен блок `Modular prism motion`.

Новый концепт проверен локально структурно:

- старого `.lab-caption` больше нет;
- `.signal-prism` есть;
- найдено 6 `.prism-module`;
- JavaScript проходит `node --check script.js`.

## Что нужно сделать следующей нейросети

1. Визуально проверить новый `.signal-prism` на desktop и mobile.
2. Если всё выглядит аккуратно — закоммитить `index.html`, `styles.css`,
   `script.js`.
3. Выполнить `git push origin main`.
4. Открыть URL с новым cache-busting параметром, например:
   `https://555hr4hzs9-spec.github.io/kinzovaudio/?v=20261013-9`
5. Проверить:
   - нет ли горизонтального overflow;
   - не перекрывают ли модули заголовок и кнопки;
   - читается ли текст на ширине 390 px;
   - не появляется ли старый hero через остаточные CSS-правила;
   - работают ли клики по всем шести модулям.

## Важные ограничения

- Не возвращать чёрные пустые колонки вокруг изображений плагинов.
- Не использовать `object-fit: cover` для реальных интерфейсов.
- Не добавлять Windows в список поддерживаемых платформ без подтверждения.
- Не описывать MQ-CHEK как анализатор громкости.
- Сохранять название бренда в виде **KINZOV AUDIO** там, где это основной
  визуальный заголовок.
- Не менять реальные изображения плагинов без необходимости.

## Проверка перед публикацией

```bash
node --check script.js
git diff --check
```

После проверки:

```bash
git add index.html styles.css script.js plugin-images CONTINUE_KINZOVAUDIO.md
git commit -m "Continue KINZOVAUDIO visual redesign"
git push origin main
```
