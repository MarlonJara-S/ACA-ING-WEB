(function () {
  'use strict';

  var ICONS = {
    bowl: 'M3 11h18a9 9 0 0 1-18 0Z M8 7.5c0-1.5 1-1.5 1-3 M12 7.5c0-1.5 1-1.5 1-3 M16 7.5c0-1.5 1-1.5 1-3',
    drop: 'M12 2.5s6.5 7.2 6.5 11.5a6.5 6.5 0 0 1-13 0C5.5 9.7 12 2.5 12 2.5Z',
    moon: 'M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z',
    dumbbell: 'M6.5 6.5v11 M3.5 9v6 M17.5 6.5v11 M20.5 9v6 M6.5 12h11',
    sun: 'M12 8a4 4 0 1 0 0 8a4 4 0 1 0 0-8Z M12 2v2.5 M12 19.5V22 M2 12h2.5 M19.5 12H22 M4.9 4.9l1.8 1.8 M17.3 17.3l1.8 1.8 M4.9 19.1l1.8-1.8 M17.3 6.7l1.8-1.8',
    clock: 'M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18Z M12 7v5l3 2',
    star: 'M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9Z',
    arrow: 'M5 12h14 M13 6l6 6-6 6',
    back: 'M19 12H5 M11 6l-6 6 6 6',
    search: 'M10.5 4a6.5 6.5 0 1 0 0 13a6.5 6.5 0 1 0 0-13Z M15.5 15.5 20 20',
    info: 'M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18Z M12 11v5 M12 7.5v.5',
    bulb: 'M9 18h6 M10 21h4 M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3Z'
  };

  var CATS = {
    nutricion: { label: 'Nutrición deportiva', tile: '#F0FDF4', ink: '#15803D', icon: 'bowl', desc: 'Qué comer antes, durante y después de entrenar.' },
    hidratacion: { label: 'Hidratación', tile: '#EFF6FF', ink: '#1D4ED8', icon: 'drop', desc: 'Cuánto y cuándo beber según tu esfuerzo.' },
    recuperacion: { label: 'Recuperación', tile: '#F5F3FF', ink: '#6D28D9', icon: 'moon', desc: 'Sueño, descanso y proteína para volver más fuerte.' }
  };

  var ITEMS = [
    { id: 1, cat: 'nutricion', icon: 'bowl', featured: true, title: 'Carbohidratos antes de entrenar', desc: 'Llena tus reservas de energía para sesiones intensas o largas.', momento: '2 a 3 h antes de entrenar', steps: ['Elige una comida rica en carbohidratos de fácil digestión, como arroz, pasta o avena.', 'Acompáñala con una porción moderada de proteína y poca grasa.', 'Si solo tienes 1 h, opta por un snack ligero, como una banana.'], tip: 'Prueba tus comidas en los entrenamientos; nunca estrenes algo el día de competencia.' },
    { id: 2, cat: 'hidratacion', icon: 'drop', featured: true, title: 'Hidratación en sesiones largas', desc: 'Mantén el rendimiento cuando entrenas más de una hora.', momento: 'Durante el entrenamiento', steps: ['Llega hidratado: bebe agua en las horas previas a la sesión.', 'Toma sorbos pequeños cada 15 a 20 minutos.', 'En sesiones de más de 60 min, considera una bebida con electrolitos.'], tip: 'Una orina de color claro es una señal práctica de buena hidratación.' },
    { id: 3, cat: 'recuperacion', icon: 'dumbbell', featured: true, title: 'Proteína después de entrenar', desc: 'Ayuda a reparar el músculo tras el esfuerzo.', momento: 'En las 2 h siguientes al entrenamiento', steps: ['Incluye una fuente de proteína: huevos, lácteos, carne, legumbres o un batido.', 'Combínala con carbohidratos para reponer energía.', 'Reparte la proteína en las comidas del resto del día.'], tip: 'Tu nutricionista puede ajustar las cantidades a tu peso y a tu deporte.' },
    { id: 4, cat: 'recuperacion', icon: 'moon', featured: false, title: 'Sueño para recuperar', desc: 'Dormir bien también es parte del entrenamiento.', momento: 'Acostarse entre 21:30 y 23:00', steps: ['Mantén horarios regulares, incluso el fin de semana.', 'Evita pantallas entre 30 y 60 min antes de dormir.', 'Duerme en un cuarto oscuro, fresco y silencioso.'], tip: 'Una siesta corta de 20 a 30 min puede ayudar en días de doble sesión.' },
    { id: 5, cat: 'hidratacion', icon: 'sun', featured: false, title: 'Electrolitos cuando hace calor', desc: 'Repón lo que pierdes con el sudor en climas cálidos.', momento: 'Durante y después de entrenar con calor', steps: ['Pésate antes y después de entrenar para estimar el líquido perdido.', 'Reponlo bebiendo de forma gradual, no todo de una vez.', 'Si sudas mucho, usa bebidas o sales con sodio.'], tip: 'Si sientes calambres o mareo, detente y rehidrátate.' },
    { id: 6, cat: 'nutricion', icon: 'clock', featured: false, title: 'Desayuno el día de competencia', desc: 'Una rutina conocida para competir con energía y sin molestias.', momento: '3 a 4 h antes de competir', steps: ['Repite un desayuno que ya probaste en entrenamientos.', 'Prioriza carbohidratos y evita el exceso de fibra y grasa.', 'Termina de comer con tiempo suficiente para la digestión.'], tip: 'Lleva un snack de respaldo por si la competencia se retrasa.' }
  ];

  // Estado en memoria: es una simulación de prototipo y no se guarda.
  var state = { screen: 'inicio', detailId: 1, cat: 'todas', query: '', favs: [], vasos: 0, mins: 0 };

  var app = document.getElementById('app');

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function icon(name, size, stroke, opts) {
    opts = opts || {};
    return '<svg aria-hidden="true" width="' + size + '" height="' + size + '" viewBox="0 0 24 24" fill="' + (opts.fill || 'none') +
      '" stroke="' + stroke + '" stroke-width="' + (opts.sw || 2) + '" stroke-linecap="round" stroke-linejoin="round"><path d="' + ICONS[name] + '"/></svg>';
  }
  function isFav(id) { return state.favs.indexOf(id) !== -1; }
  function byId(id) { return ITEMS.filter(function (i) { return i.id === id; })[0] || ITEMS[0]; }
  function restLabel(m) { var h = Math.floor(m / 60), r = m % 60; return h + ' h' + (r ? ' ' + r + ' min' : ''); }
  function pct(v, max) { return Math.min(100, Math.round(v / max * 100)); }

  function favBtn(it) {
    var f = isFav(it.id);
    return '<button class="fav-btn" data-fav="' + it.id + '" aria-pressed="' + f + '" aria-label="' + (f ? 'Quitar de favoritos' : 'Guardar en favoritos') + '">' +
      icon('star', 18, f ? '#CA8A04' : '#52525B', { fill: f ? '#FACC15' : 'none' }) + '</button>';
  }
  function recCard(it, opts) {
    opts = opts || {};
    var c = CATS[it.cat];
    var h = opts.small ? 130 : 155;
    return '<article class="card rec">' +
      '<button class="rec-open" data-open="' + it.id + '">' +
      '<span class="tile" style="height:' + h + 'px;background:' + c.tile + '">' + icon(it.icon, opts.small ? 48 : 54, c.ink, { sw: 1.5 }) + '</span>' +
      '<span class="rec-text"><span class="badge">' + esc(c.label) + '</span><span class="rec-title">' + esc(it.title) + '</span>' +
      (opts.small ? '' : '<span class="rec-desc">' + esc(it.desc) + '</span>') + '</span>' +
      '</button>' + favBtn(it) + '</article>';
  }

  function viewInicio() {
    var day = ITEMS[1], dc = CATS[day.cat];
    var cats = Object.keys(CATS).map(function (k) {
      var c = CATS[k];
      var n = ITEMS.filter(function (i) { return i.cat === k; }).length;
      return '<button class="cat-card" data-cat-go="' + k + '">' +
        '<span class="cat-icon" style="background:' + c.tile + '">' + icon(c.icon, 20, c.ink) + '</span>' +
        '<span style="display:flex;flex-direction:column;gap:4px"><span class="cat-title">' + c.label + '</span><span class="cat-desc">' + c.desc + '</span></span>' +
        '<span class="cat-count">' + n + ' recomendaciones' + icon('arrow', 16, '#71717A') + '</span></button>';
    }).join('');
    var featured = ITEMS.filter(function (i) { return i.featured; }).map(function (i) { return recCard(i); }).join('');

    return '' +
      '<div class="hero-wrap"><section class="hero">' +
        '<div class="hero-text">' +
          '<span class="pill"><span class="dot"></span>Para deportistas de alto rendimiento</span>' +
          '<h1 class="h1-hero">Entrena, come y descansa como un profesional.</h1>' +
          '<p class="lead">Recomendaciones saludables de nutrición, hidratación y recuperación para rendir más y recuperarte mejor.</p>' +
          '<div class="btn-row"><button class="btn btn-primary" data-go="biblioteca">Explorar biblioteca' + icon('arrow', 16, '#FAFAFA') + '</button>' +
          '<button class="btn btn-outline" data-go="favoritos">Mis hábitos</button></div>' +
        '</div>' +
        '<div class="hero-card"><div class="card" style="box-shadow:0 1px 3px rgba(0,0,0,0.06)">' +
          '<div class="tile" style="height:168px;background:' + dc.tile + '">' + icon(day.icon, 64, dc.ink, { sw: 1.5 }) + '</div>' +
          '<div class="card-body"><span style="font-size:12px;font-weight:500;color:#71717A">Recomendación del día</span>' +
          '<span style="font-size:17px;font-weight:500;letter-spacing:-0.01em">' + esc(day.title) + '</span>' +
          '<span style="font-size:14px;color:#71717A">' + esc(day.desc) + '</span></div>' +
          '<div class="card-foot"><span class="meta">' + icon('clock', 14, '#71717A') + esc(day.momento) + '</span>' +
          '<button class="btn btn-outline" data-open="' + day.id + '">Ver detalle</button></div>' +
        '</div></div>' +
      '</section></div>' +

      '<section class="section"><div class="section-head"><div><h2 class="h2">Categorías</h2><p class="sub">Elige un tema para ver sus recomendaciones.</p></div></div>' +
        '<div class="grid grid-fit-260">' + cats + '</div></section>' +

      '<section class="section"><div class="section-head"><div><h2 class="h2">Recomendaciones destacadas</h2><p class="sub">Seleccionadas para tu entrenamiento de esta semana.</p></div>' +
        '<button class="btn btn-ghost" data-go="biblioteca">Ver todo →</button></div>' +
        '<div class="grid grid-auto">' + featured + '</div></section>' +

      '<section class="section"><div class="section-head"><div><h2 class="h2">Tu día de hoy</h2><p class="sub">Resumen de tus hábitos registrados.</p></div></div>' +
        '<div class="grid grid-fit-300">' +
          '<button class="stat-card" data-go="favoritos"><span class="stat-label">Hidratación' + icon('drop', 16, '#71717A') + '</span>' +
          '<span class="stat-value">' + state.vasos + ' <small>/ 8 vasos</small></span><span class="progress"><span style="width:' + pct(state.vasos, 8) + '%"></span></span></button>' +
          '<button class="stat-card" data-go="favoritos"><span class="stat-label">Descanso' + icon('moon', 16, '#71717A') + '</span>' +
          '<span class="stat-value">' + restLabel(state.mins) + ' <small>/ 8 h</small></span><span class="progress"><span style="width:' + pct(state.mins, 480) + '%"></span></span></button>' +
        '</div></section>';
  }

  function filtered() {
    var q = state.query.trim().toLowerCase();
    return ITEMS.filter(function (it) {
      if (state.cat !== 'todas' && it.cat !== state.cat) return false;
      if (!q) return true;
      return (it.title + ' ' + it.desc + ' ' + CATS[it.cat].label).toLowerCase().indexOf(q) !== -1;
    });
  }
  function resultsHTML() {
    var list = filtered();
    var count = list.length === 1 ? '1 recomendación' : list.length + ' recomendaciones';
    var body = list.length ? '<div class="grid grid-auto">' + list.map(function (i) { return recCard(i); }).join('') + '</div>' :
      '<div class="empty"><span class="empty-icon">' + icon('search', 20, '#71717A') + '</span>' +
      '<span class="empty-title">No encontramos recomendaciones</span><span class="sub">Prueba con otra palabra o cambia la categoría.</span>' +
      '<button class="btn btn-outline" data-clear style="margin-top:6px">Limpiar filtros</button></div>';
    return { count: count, body: body };
  }
  function viewBiblioteca() {
    var tabs = [['todas', 'Todas'], ['nutricion', 'Nutrición'], ['hidratacion', 'Hidratación'], ['recuperacion', 'Recuperación']].map(function (t) {
      return '<button class="tab" role="tab" data-tab="' + t[0] + '" aria-selected="' + (state.cat === t[0]) + '">' + t[1] + '</button>';
    }).join('');
    var r = resultsHTML();
    return '<div class="page-head"><h1 class="h1">Biblioteca saludable</h1><p class="sub">Busca y filtra recomendaciones de nutrición, hidratación y recuperación.</p></div>' +
      '<form class="search-row" data-search-form role="search">' +
        '<label class="input-wrap">' + icon('search', 16, '#71717A') + '<span class="sr-only">Buscar recomendación</span>' +
        '<input id="q" type="search" autocomplete="off" placeholder="Buscar recomendación… (proteína, sueño, calor)" value="' + esc(state.query) + '"></label>' +
        '<button class="btn btn-primary" type="submit">Buscar</button>' +
      '</form>' +
      '<div class="toolbar"><div class="tabs" role="tablist" aria-label="Filtrar por categoría">' + tabs + '</div>' +
      '<span class="sub" id="count" aria-live="polite">' + r.count + '</span></div>' +
      '<div id="results">' + r.body + '</div>';
  }

  function viewDetalle() {
    var d = byId(state.detailId), c = CATS[d.cat], f = isFav(d.id);
    var related = ITEMS.filter(function (i) { return i.id !== d.id && i.cat === d.cat; })
      .concat(ITEMS.filter(function (i) { return i.id !== d.id && i.cat !== d.cat; })).slice(0, 3);
    var steps = d.steps.map(function (s, i) {
      return '<li><span class="step-n">' + (i + 1) + '</span><span class="step-t">' + esc(s) + '</span></li>';
    }).join('');
    return '<nav class="crumbs" aria-label="Ruta"><button class="btn btn-ghost" data-go="biblioteca" style="padding:0 10px 0 6px;margin-left:-6px">' +
      icon('back', 16, '#09090B') + 'Volver a la biblioteca</button><span aria-hidden="true">/</span><span>' + c.label + '</span></nav>' +
      '<div class="detail">' +
        '<div class="detail-media" style="background:' + c.tile + '">' + icon(d.icon, 140, c.ink, { sw: 1.2 }) + '</div>' +
        '<div class="detail-info">' +
          '<span class="badge">' + c.label + '</span>' +
          '<h1 class="h1-detail">' + esc(d.title) + '</h1>' +
          '<p class="lead" style="font-size:16px;max-width:none">' + esc(d.desc) + '</p>' +
          '<div class="alert" role="note">' + icon('clock', 18, '#09090B') + '<span class="alert-body"><span class="alert-title">Momento ideal</span><span class="alert-desc">' + esc(d.momento) + '</span></span></div>' +
          '<div style="display:flex;flex-direction:column;gap:12px"><h2 style="font-size:15px;font-weight:500;letter-spacing:0">Pasos recomendados</h2><ol class="steps">' + steps + '</ol></div>' +
          '<div class="alert alert-success" role="note">' + icon('bulb', 18, '#15803D') + '<span class="alert-body"><span class="alert-title">Consejo</span><span class="alert-desc">' + esc(d.tip) + '</span></span></div>' +
          '<div class="btn-row"><button class="btn btn-primary" data-fav="' + d.id + '" aria-pressed="' + f + '">' +
            icon('star', 16, '#FACC15', { fill: f ? '#FACC15' : 'none' }) + (f ? 'Quitar de favoritos' : 'Guardar en favoritos') + '</button>' +
            '<button class="btn btn-outline" data-go="favoritos">Ir a mis hábitos</button></div>' +
        '</div>' +
      '</div>' +
      '<div class="separator"></div>' +
      '<section class="section" style="margin-top:28px"><h2 class="h2">Recomendaciones relacionadas</h2>' +
        '<div class="grid grid-auto">' + related.map(function (i) { return recCard(i, { small: true }); }).join('') + '</div></section>';
  }

  function viewFavoritos() {
    var favs = ITEMS.filter(function (i) { return isFav(i.id); });
    var list = favs.length ? '<div class="grid grid-auto">' + favs.map(function (i) { return recCard(i, { small: true }); }).join('') + '</div>' :
      '<div class="empty"><span class="empty-icon">' + icon('star', 20, '#71717A') + '</span><span class="empty-title">Aún no tienes favoritos</span>' +
      '<span class="sub">Guarda recomendaciones con la estrella para tenerlas a mano.</span>' +
      '<button class="btn btn-primary" data-go="biblioteca" style="margin-top:6px">Explorar biblioteca</button></div>';
    function habit(title, goal, iconName, tile, ink, value, unit, p, addAttr, addLabel, subAttr, subLabel, subAria) {
      return '<div class="card habit"><div class="habit-head"><span><span class="habit-title">' + title + '</span><span class="sub">' + goal + '</span></span>' +
        '<span class="habit-icon" style="background:' + tile + '">' + icon(iconName, 18, ink) + '</span></div>' +
        '<span class="habit-value">' + value + ' <small>' + unit + '</small></span>' +
        '<span class="progress"><span style="width:' + p + '%"></span></span>' +
        '<div class="btn-row"><button class="btn btn-primary" ' + addAttr + '>' + addLabel + '</button>' +
        '<button class="btn btn-outline" ' + subAttr + (subAria ? ' aria-label="' + subAria + '"' : '') + '>' + subLabel + '</button></div></div>';
    }
    return '<div class="page-head"><h1 class="h1">Favoritos y hábitos</h1><p class="sub">Registra tus hábitos del día y revisa lo que guardaste.</p></div>' +
      '<div class="alert alert-muted" role="note">' + icon('info', 18, '#09090B') + '<span class="alert-body"><span class="alert-title">Aviso</span><span class="alert-desc">Los registros son una simulación de prototipo y no se guardan.</span></span></div>' +
      '<section class="section" style="margin-top:28px"><h2 class="h2">Registro de hábitos de hoy</h2><div class="grid grid-fit-300">' +
        habit('Hidratación', 'Meta: 8 vasos al día', 'drop', '#EFF6FF', '#1D4ED8', state.vasos, '/ 8 vasos', pct(state.vasos, 8), 'data-habit="vaso+"', '+ 1 vaso', 'data-habit="vaso-"', '− 1', 'Quitar 1 vaso') +
        habit('Descanso', 'Meta: 8 h de sueño', 'moon', '#F5F3FF', '#6D28D9', restLabel(state.mins), '/ 8 h', pct(state.mins, 480), 'data-habit="min+"', '+ 30 min', 'data-habit="min-"', '− 30 min') +
      '</div></section>' +
      '<section class="section" style="margin-top:36px"><h2 class="h2">Mis favoritos (' + favs.length + ')</h2>' + list + '</section>';
  }

  var VIEWS = { inicio: viewInicio, biblioteca: viewBiblioteca, detalle: viewDetalle, favoritos: viewFavoritos };
  var TITLES = { inicio: 'Inicio', biblioteca: 'Biblioteca saludable', detalle: 'Detalle', favoritos: 'Favoritos y hábitos' };

  function render() {
    app.innerHTML = VIEWS[state.screen]();
    var active = state.screen === 'detalle' ? 'biblioteca' : state.screen;
    document.querySelectorAll('.nav-link').forEach(function (b) {
      if (b.getAttribute('data-go') === active) b.setAttribute('aria-current', 'page');
      else b.removeAttribute('aria-current');
    });
    var t = state.screen === 'detalle' ? byId(state.detailId).title : TITLES[state.screen];
    document.title = t + ' · Athletix';
  }
  function renderResults() {
    var r = resultsHTML();
    var res = document.getElementById('results'), cnt = document.getElementById('count');
    if (res) res.innerHTML = r.body;
    if (cnt) cnt.textContent = r.count;
  }

  // Navegación con hash para que funcione el botón Atrás del navegador.
  function go(screen, extra) {
    if (extra) for (var k in extra) state[k] = extra[k];
    var hash = '#/' + screen + (screen === 'detalle' ? '/' + state.detailId : '');
    if (location.hash !== hash) location.hash = hash; else applyHash();
  }
  function applyHash() {
    var parts = location.hash.replace(/^#\/?/, '').split('/');
    var screen = VIEWS[parts[0]] ? parts[0] : 'inicio';
    state.screen = screen;
    if (screen === 'detalle' && parts[1]) state.detailId = parseInt(parts[1], 10) || 1;
    render();
    window.scrollTo(0, 0);
  }

  var toastEl;
  function toast(msg) {
    if (!toastEl) { toastEl = document.createElement('div'); toastEl.className = 'toast'; toastEl.setAttribute('role', 'status'); document.body.appendChild(toastEl); }
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toastEl._t);
    toastEl._t = setTimeout(function () { toastEl.classList.remove('show'); }, 1800);
  }

  document.addEventListener('click', function (e) {
    var el = e.target.closest('button');
    if (!el) return;
    if (el.hasAttribute('data-fav')) {
      var id = parseInt(el.getAttribute('data-fav'), 10);
      var had = isFav(id);
      state.favs = had ? state.favs.filter(function (x) { return x !== id; }) : state.favs.concat([id]);
      toast(had ? 'Quitado de favoritos' : 'Guardado en favoritos');
      if (state.screen === 'biblioteca') renderResults(); else render();
      return;
    }
    if (el.hasAttribute('data-open')) { go('detalle', { detailId: parseInt(el.getAttribute('data-open'), 10) }); return; }
    if (el.hasAttribute('data-cat-go')) { go('biblioteca', { cat: el.getAttribute('data-cat-go'), query: '' }); return; }
    if (el.hasAttribute('data-tab')) {
      state.cat = el.getAttribute('data-tab');
      document.querySelectorAll('.tab').forEach(function (t) { t.setAttribute('aria-selected', String(t === el)); });
      renderResults();
      return;
    }
    if (el.hasAttribute('data-clear')) { state.query = ''; state.cat = 'todas'; render(); return; }
    if (el.hasAttribute('data-habit')) {
      var h = el.getAttribute('data-habit');
      if (h === 'vaso+') state.vasos = Math.min(12, state.vasos + 1);
      if (h === 'vaso-') state.vasos = Math.max(0, state.vasos - 1);
      if (h === 'min+') state.mins = Math.min(720, state.mins + 30);
      if (h === 'min-') state.mins = Math.max(0, state.mins - 30);
      render();
      return;
    }
    if (el.hasAttribute('data-go')) {
      go(el.getAttribute('data-go'));
      if (el.hasAttribute('data-focus-search')) setTimeout(function () { var q = document.getElementById('q'); if (q) q.focus(); }, 0);
    }
  });

  document.addEventListener('input', function (e) {
    if (e.target.id === 'q') { state.query = e.target.value; renderResults(); }
  });
  document.addEventListener('submit', function (e) {
    if (e.target.hasAttribute('data-search-form')) {
      e.preventDefault();
      state.query = document.getElementById('q').value.trim();
      renderResults();
    }
  });

  window.addEventListener('hashchange', applyHash);
  applyHash();
})();
