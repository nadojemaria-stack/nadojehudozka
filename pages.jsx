/* All five pages in one file to keep import surface small. */

const { useState: useS, useEffect: useE, useRef: useR, useMemo: useM } = React;

/* ============================================================
   1) HUB — all courses
   ============================================================ */
function HubPage({ navigate, owned }) {
  return (
    <main data-screen-label="01 Hub">
      <section className="hub-hero">
        <div className="shell shell--wide">
          <div className="hub-hero__grid">
            <div>
              <div className="eyebrow-row">
                <span className="t-eyebrow">artistshedrina · курсы</span>
                <span className="dot" />
                <span className="t-eyebrow" style={{ color: 'var(--primary)' }}>β открытая</span>
              </div>
              <h1 className="t-display-mega" style={{ margin: '0 0 24px' }}>
                Курсы<br />и интенсивы<br />Марии Щедриной
              </h1>
              <p className="t-body-lg" style={{ maxWidth: 540, margin: 0, color: 'var(--body)' }}>
                Без академических постановок. Один основной курс из&nbsp;трёх уровней — и&nbsp;два коротких интенсива по&nbsp;конкретным темам. Покупаете блок — и&nbsp;он&nbsp;открывается поэтапно.
              </p>
            </div>
            <div className="hub-hero__cover cover-full" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell shell--wide">
          <div className="eyebrow-row" style={{ marginBottom: 24 }}>
            <span className="t-eyebrow">три направления</span>
          </div>
          <div className="course-grid">
            {COURSES.map((c, i) =>
            <button
              key={c.id}
              className={`course-card ${c.featured ? 'course-card--featured' : ''}`}
              onClick={() => {
                if (c.id === 'sketching') navigate({ name: 'aggregator', course: 'sketching' });
              }}
              style={{ gridColumn: c.featured ? 'span 1' : 'auto' }}>
              
                <div className="course-card__art">
                  <Tile cell={c.cover} shape="wide" style={{ height: '100%', borderRadius: 0 }} />
                </div>
                <div className="course-card__body">
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {c.status === 'beta' && <StatusPill kind="beta">β бета</StatusPill>}
                    {c.status === 'open' && <StatusPill kind="owned">открыт</StatusPill>}
                    {c.status === 'soon' && <StatusPill kind="locked">скоро</StatusPill>}
                    {owned[c.id] && <StatusPill kind="owned">куплен</StatusPill>}
                    {c.levels && <span className="t-mono-sm">{c.levels} уровня · {c.tasksPerLevel}×3 заданий</span>}
                    {c.sessions && <span className="t-mono-sm">{c.sessions} встреч</span>}
                  </div>
                  <h2 className={c.featured ? 't-display-md' : 't-display-sm'} style={{ margin: 0 }}>{c.name}</h2>
                  <p className="t-body" style={{ margin: 0 }}>{c.description}</p>
                  <div className="course-card__meta">
                    <Price value={c.price} old={c.priceOld} />
                    <span className="t-mono-sm">{c.cta} →</span>
                  </div>
                </div>
              </button>
            )}
          </div>
        </div>
      </section>

      <section className="section--sm" style={{ borderTop: '1px solid var(--hairline)', borderBottom: '1px solid var(--hairline)', background: 'var(--canvas-soft)' }}>
        <div className="shell shell--wide" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
          {[
          ['15', 'заданий в каждом уровне'],
          ['3', 'наставника-аватара'],
          ['Своим', 'темпом, без дедлайнов'],
          ['Телефон', 'как основное устройство']].
          map(([k, v], i) =>
          <div key={i}>
              <div className="t-display-md" style={{ margin: 0 }}>{k}</div>
              <div className="t-body-sm" style={{ marginTop: 6 }}>{v}</div>
            </div>
          )}
        </div>
      </section>
    </main>);

}

/* ============================================================
   2) AGGREGATOR — sketching levels
   ============================================================ */
function AggregatorPage({ navigate, owned, setOwned }) {
  const course = COURSES.find((c) => c.id === 'sketching');
  const isOwned = owned.sketching;

  return (
    <main data-screen-label="02 Aggregator (Sketching)">
      <section style={{ padding: '56px 0 32px', borderBottom: '1px solid var(--hairline)' }}>
        <div className="shell shell--wide" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 48, alignItems: 'end' }}>
          <div>
            <div className="eyebrow-row">
              <button className="t-eyebrow" onClick={() => navigate({ name: 'hub' })}
              style={{ background: 'none', border: 0, padding: 0, cursor: 'pointer', color: 'var(--muted)' }}>
                ← все курсы
              </button>
              <span className="dot" />
              <span className="t-eyebrow">скетчинг</span>
            </div>
            <h1 className="t-display-mega" style={{ margin: '0 0 24px' }}>{course.name}.</h1>
            <p className="t-body-lg" style={{ maxWidth: 600, margin: 0 }}>
              Три уровня по&nbsp;15&nbsp;заданий. Главная цель набросков — свобода руки и&nbsp;мышления через навык обобщения. Не&nbsp;«нарисуй похоже» — а&nbsp;«схвати главное».
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 28, alignItems: 'center', flexWrap: 'wrap' }}>
              {!isOwned &&
              <>
                  <button className="btn btn--primary btn--lg" onClick={() => setOwned({ ...owned, sketching: true })}>
                    Купить курс — {course.price.toLocaleString('ru-RU')} ₽
                  </button>
                  <span className="t-mono-sm" style={{ textDecoration: 'line-through' }}>{course.priceOld.toLocaleString('ru-RU')} ₽</span>
                  <span className="t-mono-sm" style={{ color: 'var(--primary)' }}>цена беты</span>
                </>
              }
              {isOwned &&
              <>
                  <StatusPill kind="owned">✓ курс открыт</StatusPill>
                  <span className="t-mono-sm">после оплаты появляются все три уровня</span>
                </>
              }
            </div>
          </div>
          <Tile cell={course.cover} shape="square" style={{ borderRadius: 12 }} />
        </div>
      </section>

      <section className="section">
        <div className="shell shell--wide">
          <div className="eyebrow-row" style={{ marginBottom: 24 }}>
            <span className="t-eyebrow">три уровня · открываются последовательно</span>
          </div>
          <div className="level-grid">
            {LEVELS.map((lvl, i) => {
              const locked = !isOwned;
              return (
                <button
                  key={lvl.n}
                  className="level-card"
                  disabled={locked && lvl.n !== 1}
                  onClick={() => {
                    if (locked) return;
                    if (lvl.n === 1) navigate({ name: 'level', n: 1 });
                  }}>
                  
                  <div className="level-card__art">
                    <Tile cell={lvl.cover} shape="landscape" style={{ height: '100%', borderRadius: 0 }} />
                  </div>
                  <div className="level-card__body">
                    <div className="level-card__num">
                      <span>Уровень {lvl.n}</span>
                      <span>·</span>
                      <span>15 заданий</span>
                      <span>·</span>
                      <span>{lvl.durationLabel}</span>
                    </div>
                    <h3 className="t-display-sm" style={{ margin: 0 }}>{lvl.title}</h3>
                    <p className="t-body-sm" style={{ margin: 0 }}>{lvl.sub}</p>
                    <div style={{ display: 'flex', gap: 6, marginTop: 12, flexWrap: 'wrap' }}>
                      <StatusPill kind="beta">β бета</StatusPill>
                      {locked ?
                      <StatusPill kind="locked">купите курс</StatusPill> :
                      <StatusPill kind="owned">открыт</StatusPill>}
                    </div>
                  </div>
                </button>);

            })}
          </div>
        </div>
      </section>

      <section className="section--sm" style={{ borderTop: '1px solid var(--hairline)' }}>
        <div className="shell shell--wide">
          <div className="eyebrow-row" style={{ marginBottom: 16 }}>
            <span className="t-eyebrow">что внутри одного задания</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {[
            ['Чек-ап', 'Что взять, какой настрой, сколько времени.'],
            ['Текст задания', 'Сухо и без лирики. Пример из истории искусства.'],
            ['Три аватара в помощь', 'Ольга (психолог) / Мария (художник) / ЪУЪ (критик) -каждый о своём.'],
            ['Загрузка работы', 'Кнопка СДЕЛАЛ → форма. Рефлексия + фото.']].
            map(([k, v], i) =>
            <div key={i}>
                <div className="t-mono-sm" style={{ color: 'var(--primary)', fontSize: "13px" }}>0{i + 1}</div>
                <h4 className="t-title" style={{ margin: '8px 0 6px' }}>{k}</h4>
                <p className="t-body-sm" style={{ margin: 0 }}>{v}</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>);

}

/* ============================================================
   3) LEVEL — Level 1 task list
   ============================================================ */
function LevelPage({ navigate, owned, history }) {
  const lvl = LEVELS[0];
  const isOwned = owned.sketching;

  // group tasks by block
  const blocks = ['А', 'Б', 'В', 'Г'];
  const blockMeta = {
    'А': { title: 'Рука без головы', sub: 'Задания 1–4. Дома, за столом.' },
    'Б': { title: 'Первый взгляд', sub: 'Задания 5–8. Переход к улице начинается здесь.' },
    'В': { title: 'Первый выбор', sub: 'Задания 9–13. Пленэр и воображаемый слой.' },
    'Г': { title: 'Появляется автор', sub: 'Задания 14–15.' }
  };

  return (
    <main data-screen-label="03 Level 1">
      <section className="shell shell--wide">
        <div className="level-hero">
          <div>
            <div className="eyebrow-row">
              <button className="t-eyebrow" onClick={() => navigate({ name: 'aggregator', course: 'sketching' })}
              style={{ background: 'none', border: 0, padding: 0, cursor: 'pointer', color: 'var(--muted)' }}>
                ← скетчинг
              </button>
              <span className="dot" />
              <span className="t-eyebrow">уровень 01 / 03</span>
            </div>
            <h1 className="t-display-lg" style={{ margin: '0 0 16px' }}>
              «Рисую. Просто рисую.»<br />Карманный помощник художника.
            </h1>
            <p className="t-body-lg" style={{ maxWidth: 640, margin: 0 }}>
              Логика нарастания — по&nbsp;параметру контроля. От&nbsp;«рука без головы» к&nbsp;«я&nbsp;здесь, я&nbsp;смотрю». Задания 1–4 делаются дома. Выход на&nbsp;улицу — с&nbsp;5–6, постепенно.
            </p>
            <div style={{ display: 'flex', gap: 16, marginTop: 24, alignItems: 'center', flexWrap: 'wrap' }}>
              <span className="t-mono-sm">15 заданий</span>
              <span className="t-mono-sm">·</span>
              <span className="t-mono-sm">~3 недели в свободном темпе</span>
              <span className="t-mono-sm">·</span>
              <span className="t-mono-sm" style={{ color: 'var(--primary)' }}>{Object.keys(history).length} / 15 сделано</span>
            </div>
          </div>
          <Tile cell={lvl.cover} shape="square" className="level-hero__art" />
        </div>
      </section>

      <section className="section">
        <div className="shell shell--wide" style={{ maxWidth: 980 }}>
          {blocks.map((b) => {
            const tasks = TASKS.filter((t) => t.block === b);
            return (
              <div key={b}>
                <div className="block-letter">
                  <span className="block-letter__mark">{b}</span>
                  <div>
                    <div className="t-title" style={{ fontWeight: 600 }}>{blockMeta[b].title}</div>
                    <div className="t-mono-sm" style={{ marginTop: 2 }}>{blockMeta[b].sub}</div>
                  </div>
                </div>
                {tasks.map((t) => {
                  const done = !!history[t.n];
                  return (
                    <button key={t.n} className={`task-row ${done ? 'is-done' : ''}`}
                    onClick={() => navigate({ name: 'task', n: t.n })}>
                      <span className="task-row__num">№{String(t.n).padStart(2, '0')}</span>
                      <span className="task-row__title">{t.title}<em>· {t.where}</em></span>
                      <span className="task-row__tags">
                        {t.tags.map((tg, i) => <Tag key={i}>{tg}</Tag>)}
                      </span>
                      <span className="task-row__arrow">{done ? '✓' : '→'}</span>
                    </button>);

                })}
              </div>);

          })}
        </div>
      </section>
    </main>);

}

/* ============================================================
   4) TASK — task page with checkup, body, avatars, upload
   ============================================================ */
function TaskPage({ navigate, taskN, history, addToHistory }) {
  const task = TASKS.find((t) => t.n === taskN);
  const detail = TASK_DETAILS[taskN];
  const formRef = useR(null);
  const [formOpen, setFormOpen] = useS(false);
  const [preview, setPreview] = useS(null);
  const [fileName, setFileName] = useS(null);
  const [reflection, setReflection] = useS({});
  const [mood, setMood] = useS(null);
  const [dragOver, setDragOver] = useS(false);

  const goTask = (n) => navigate({ name: 'task', n });
  const prev = taskN > 1 ? taskN - 1 : null;
  const next = taskN < 15 ? taskN + 1 : null;

  const onFile = (file) => {
    if (!file) return;
    setFileName(file.name);
    const reader = new FileReader();
    reader.onload = (e) => setPreview(e.target.result);
    reader.readAsDataURL(file);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!preview) return;
    addToHistory(taskN, { dataUrl: preview, date: todayLabel(), reflection, mood, fileName });
    navigate({ name: 'after', n: taskN });
  };

  const handlePrev = () => prev && goTask(prev);
  const handleNext = () => next && goTask(next);

  // keyboard nav
  useE(() => {
    const onKey = (e) => {
      if (e.target.matches('input, textarea')) return;
      if (e.key === 'ArrowLeft' && prev) goTask(prev);
      if (e.key === 'ArrowRight' && next) goTask(next);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [taskN]);

  if (!detail) {
    return (
      <main data-screen-label={`04 Task ${taskN} (stub)`}>
        <TaskNav task={task} prev={prev} next={next} onPrev={handlePrev} onNext={handleNext} navigate={navigate} />
        <section className="shell shell--wide section">
          <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center', padding: '80px 0' }}>
            <span className="t-mono-sm">№{String(taskN).padStart(2, '0')} · блок {task.block}</span>
            <h1 className="t-display-lg" style={{ margin: '16px 0 24px' }}>{task.title}</h1>
            <p className="t-body-lg" style={{ color: 'var(--muted)' }}>
              Полный текст этого задания — заглушка для прототипа. В&nbsp;живом курсе здесь будет такая&nbsp;же структура, как у&nbsp;<button onClick={() => goTask(1)} style={{ background: 'none', border: 0, color: 'var(--primary)', cursor: 'pointer', textDecoration: 'underline', font: 'inherit' }}>Задания&nbsp;1</button> или <button onClick={() => goTask(5)} style={{ background: 'none', border: 0, color: 'var(--primary)', cursor: 'pointer', textDecoration: 'underline', font: 'inherit' }}>Задания&nbsp;5</button>.
            </p>
            <div style={{ marginTop: 32, display: 'flex', gap: 12, justifyContent: 'center' }}>
              {prev && <button className="btn btn--ghost" onClick={handlePrev}>← № {String(prev).padStart(2, '0')}</button>}
              {next && <button className="btn btn--ghost" onClick={handleNext}>№ {String(next).padStart(2, '0')} →</button>}
            </div>
          </div>
        </section>
      </main>);

  }

  return (
    <main data-screen-label={`04 Task ${taskN}`}>
      <TaskNav task={task} prev={prev} next={next} onPrev={handlePrev} onNext={handleNext} navigate={navigate} />

      <section className="shell shell--wide">
        <div className="task-header">
          <div>
            <div className="t-mono-sm" style={{ marginBottom: 12 }}>
              задание №{String(taskN).padStart(2, '0')} · блок {task.block} · {task.where}
            </div>
            <h1 className="t-display-lg" style={{ margin: '0 0 8px' }}>{task.title}</h1>
            <p className="t-body-lg" style={{ margin: '8px 0 0', color: 'var(--body)', maxWidth: 580 }}>
              {detail.skill}.
            </p>
            <div className="task-tags">
              {task.tags.map((tg, i) => <Tag key={i}>{tg}</Tag>)}
            </div>
          </div>
          <Tile cell={task.cover} shape="square" className="task-header__art" />
        </div>
      </section>

      <section className="shell shell--wide">
        <div className="checkup">
          <div className="checkup__label">чек-ап</div>
          <div className="checkup__items">
            <div className="checkup__item"><span className="key">Цель</span><span className="t-body">{detail.purpose}.</span></div>
            <div className="checkup__item"><span className="key">Чего избегаем</span><span className="t-body">{detail.avoid}.</span></div>
            <div className="checkup__item"><span className="key">В карман</span><span className="t-body">{detail.checkup.gear}.</span></div>
            <div className="checkup__item"><span className="key">Время</span><span className="t-body">{detail.checkup.time}.</span></div>
            <div className="checkup__item"><span className="key">Настрой</span><span className="t-body" style={{ color: 'var(--primary)' }}>{detail.checkup.mood}</span></div>
          </div>
        </div>
      </section>

      <section className="shell shell--wide">
        <div className="prose" style={{ margin: '32px auto', padding: '0 8px' }}>
          {detail.body.map((p, i) =>
          <p key={i} dangerouslySetInnerHTML={{ __html: p.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>') }} />
          )}
        </div>

        <div className="history-card">
          <Tile cell={detail.history.cell} shape="square" className="history-card__art" />
          <div>
            <div className="history-card__caption">из истории искусства</div>
            <h3 className="t-display-sm" style={{ margin: '0 0 4px' }}>{detail.history.author}</h3>
            <div className="t-mono-sm" style={{ marginBottom: 12 }}>{detail.history.caption} · {detail.history.year}</div>
            <p className="t-body" style={{ margin: 0 }}>{detail.history.note}</p>
          </div>
        </div>
      </section>

      <section className="shell shell--wide">
        <div className="eyebrow-row" style={{ marginTop: 32, marginBottom: 8 }}>
          <span className="t-eyebrow">подсказки</span>
        </div>
        <AvatarRow quotes={detail.quotes} />
      </section>

      <section className="shell shell--wide">
        <div className="done-block">
          {!formOpen ?
          <>
              <button className="done-button" onClick={() => {
              setFormOpen(true);
              setTimeout(() => formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
            }}>
                СДЕЛАЛ
              </button>
              <div className="t-mono-sm" style={{ marginTop: 16 }}>
                нажмите, когда закончили рисовать → откроется форма загрузки
              </div>
            </> :

          <UploadForm
            ref={formRef}
            detail={detail}
            preview={preview}
            fileName={fileName}
            onFile={onFile}
            dragOver={dragOver}
            setDragOver={setDragOver}
            reflection={reflection}
            setReflection={setReflection}
            mood={mood}
            setMood={setMood}
            onSubmit={onSubmit}
            onCancel={() => {setFormOpen(false);setPreview(null);setFileName(null);}} />

          }
        </div>
      </section>

      <section className="shell shell--wide" style={{ paddingBottom: 64 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, padding: '24px 0', borderTop: '1px solid var(--hairline)' }}>
          <div>
            {prev &&
            <button className="btn btn--ghost" onClick={handlePrev}>
                ← задание {String(prev).padStart(2, '0')}
              </button>
            }
          </div>
          <button className="btn btn--ghost" onClick={() => navigate({ name: 'level', n: 1 })}>к списку заданий</button>
          <div>
            {next &&
            <button className="btn btn--ghost" onClick={handleNext}>
                задание {String(next).padStart(2, '0')} →
              </button>
            }
          </div>
        </div>
      </section>
    </main>);

}

function TaskNav({ task, prev, next, onPrev, onNext, navigate }) {
  return (
    <div className="shell shell--wide">
      <div className="task-nav">
        <button onClick={onPrev} disabled={!prev}>
          {prev ? <>← <span style={{ marginLeft: 4 }}>задание {String(prev).padStart(2, '0')}</span></> : <>← начало</>}
        </button>
        <button className="task-nav__center" onClick={() => navigate({ name: 'level', n: 1 })}>
          к&nbsp;списку · {String(task.n).padStart(2, '0')} / 15
        </button>
        <button className="task-nav__right" onClick={onNext} disabled={!next}>
          {next ? <>задание {String(next).padStart(2, '0')} →</> : <>конец уровня →</>}
        </button>
      </div>
    </div>);

}

const UploadForm = React.forwardRef(function UploadForm(
{ detail, preview, fileName, onFile, dragOver, setDragOver, reflection, setReflection, mood, setMood, onSubmit, onCancel }, ref)
{
  const inputRef = useR(null);
  const moods = ['тревожно', 'легко', 'удивлённо', 'раздражённо', 'отпустило'];

  return (
    <div ref={ref} style={{ textAlign: 'left', maxWidth: 720, margin: '0 auto' }}>
      <div className="eyebrow-row" style={{ justifyContent: 'space-between' }}>
        <span className="t-eyebrow">загрузка работы</span>
        <button onClick={onCancel} className="t-mono-sm" style={{ background: 'none', border: 0, cursor: 'pointer', color: 'var(--muted)' }}>отменить</button>
      </div>
      <h3 className="t-display-sm" style={{ margin: '8px 0 4px' }}>Что происходило, пока рисовали?</h3>
      <p className="t-body-sm" style={{ marginTop: 0, color: 'var(--muted)' }}>Все поля кроме файла — необязательные.</p>

      <form className="upload" onSubmit={onSubmit}>
        <div
          className={`dropzone ${dragOver ? 'is-dragover' : ''}`}
          onClick={() => inputRef.current?.click()}
          onDragOver={(e) => {e.preventDefault();setDragOver(true);}}
          onDragLeave={() => setDragOver(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDragOver(false);
            const f = e.dataTransfer.files?.[0];
            if (f) onFile(f);
          }}>
          
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            onChange={(e) => onFile(e.target.files?.[0])}
            style={{ display: 'none' }} />
          
          {!preview ?
          <>
              <div className="dropzone__title">Перетащите фото или нажмите</div>
              <div className="dropzone__hint">JPG / PNG, до 10 МБ. Можно сфотографировать с телефона.</div>
            </> :

          <>
              <img src={preview} alt="Превью" className="dropzone__preview" />
              <div className="dropzone__preview-meta">{fileName} · нажмите, чтобы выбрать другой файл</div>
            </>
          }
        </div>

        <div className="fields">
          {detail.reflectionFields.map((f) =>
          <div className="field" key={f.id}>
              <label htmlFor={f.id}>
                {f.label}
                <span className="from">— {f.from}</span>
              </label>
              <textarea
              id={f.id}
              rows={2}
              placeholder={f.placeholder}
              value={reflection[f.id] || ''}
              onChange={(e) => setReflection({ ...reflection, [f.id]: e.target.value })} />
            
            </div>
          )}

          <div className="field">
            <label>Настроение после задания</label>
            <div className="field--mood-row">
              {moods.map((m) =>
              <button type="button" key={m}
              className={`mood-chip ${mood === m ? 'is-active' : ''}`}
              onClick={() => setMood(mood === m ? null : m)}>
                  {m}
                </button>
              )}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
          <button type="submit" className="btn btn--primary btn--lg" disabled={!preview}>
            Отправить работу
          </button>
          <span className="t-mono-sm" style={{ color: 'var(--muted)' }}>
            {preview ? '✓ файл готов' : 'выберите файл, чтобы отправить'}
          </span>
        </div>
      </form>
    </div>);

});

/* ============================================================
   5) AFTER UPLOAD
   ============================================================ */
function AfterUploadPage({ navigate, taskN, history }) {
  const task = TASKS.find((t) => t.n === taskN);
  const detail = TASK_DETAILS[taskN] || TASK_DETAILS[1];
  const myEntry = history[taskN];
  const mine = Object.entries(history).map(([n, e]) => ({ n: Number(n), ...e })).sort((a, b) => b.n - a.n);
  const next = taskN < 15 ? taskN + 1 : null;

  return (
    <main data-screen-label={`05 After upload (Task ${taskN})`}>
      <section className="shell shell--wide" style={{ paddingTop: 56 }}>
        <div className="t-mono-sm" style={{ marginBottom: 12 }}>задание №{String(taskN).padStart(2, '0')} · {task?.title}</div>
        <h1 className="t-display-lg" style={{ margin: '0 0 16px', maxWidth: 640 }}>Работа загружена.</h1>
        <p className="t-body-lg" style={{ margin: 0, maxWidth: 640, color: 'var(--body)' }}>
          Без поздравлений. Файл лежит в&nbsp;вашей истории; ниже — что говорят про неё ваши трое.
        </p>

        {myEntry &&
        <div className="success-banner" style={{ marginTop: 32 }}>
            <div className="success-banner__icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
            <div>
              <div className="t-title" style={{ margin: 0 }}>{myEntry.fileName || 'Файл сохранён'}</div>
              <div className="t-mono-sm" style={{ marginTop: 2 }}>
                {myEntry.date} · {myEntry.mood ? `настроение: ${myEntry.mood}` : 'без отметки настроения'}
              </div>
            </div>
            <img src={myEntry.dataUrl} alt="Загруженное" style={{ width: 64, height: 64, borderRadius: 8, objectFit: 'cover', border: '1px solid var(--hairline)' }} />
          </div>
        }
      </section>

      <section className="shell shell--wide section--sm">
        <div className="eyebrow-row"><span className="t-eyebrow">реакции после загрузки</span></div>
        <AvatarRow quotes={detail.afterUploadQuotes} />
      </section>

      <section className="shell shell--wide section--sm" style={{ borderTop: '1px solid var(--hairline)' }}>
        <div className="eyebrow-row" style={{ marginBottom: 16 }}>
          <span className="t-eyebrow">мои работы — хронология</span>
        </div>
        {mine.length === 0 ?
        <div className="empty">Пока пусто. Загрузите первую работу.</div> :

        <div className="works-grid works-grid--mine">
            {mine.map((m) =>
          <article key={m.n} className="work-card">
                <div className="work-card__art"><img src={m.dataUrl} alt={`Задание ${m.n}`} /></div>
                <div className="work-card__meta">
                  <span className="work-card__num">№{String(m.n).padStart(2, '0')}</span>
                  <span className="work-card__date">{m.date}</span>
                </div>
              </article>
          )}
          </div>
        }
      </section>

      <section className="shell shell--wide section--sm" style={{ borderTop: '1px solid var(--hairline)' }}>
        <div className="eyebrow-row" style={{ marginBottom: 16, justifyContent: 'space-between', display: 'flex' }}>
          <span className="t-eyebrow">работы участников по этому заданию</span>
          <span className="t-mono-sm">{SAMPLE_WORKS.length} работ</span>
        </div>
        <div className="works-grid">
          {SAMPLE_WORKS.map((w) =>
          <article key={w.id} className="work-card">
              <div className="work-card__art">
                <Tile cell={w.cell} shape="square" style={{ borderRadius: 0, height: '100%' }} />
              </div>
              <div className="work-card__meta">
                <span className="work-card__num">{w.who}</span>
                <span className="work-card__date">{w.date}</span>
              </div>
            </article>
          )}
        </div>
      </section>

      <section className="shell shell--wide" style={{ padding: '48px 0' }}>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', borderTop: '1px solid var(--hairline)', paddingTop: 32 }}>
          <button className="btn btn--ghost" onClick={() => navigate({ name: 'level', n: 1 })}>
            к списку заданий
          </button>
          {next &&
          <button className="btn btn--primary btn--lg" onClick={() => navigate({ name: 'task', n: next })}>
              Следующее задание №{String(next).padStart(2, '0')} →
            </button>
          }
        </div>
      </section>
    </main>);

}

Object.assign(window, { HubPage, AggregatorPage, LevelPage, TaskPage, AfterUploadPage });