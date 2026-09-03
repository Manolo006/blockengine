/**
 * TEXT DISPLAY GENERATOR & VISUALIZER - MINECRAFT 1.21+
 * Pure Vanilla JavaScript for BlockEngine
 * No dependencies / No external frameworks
 */

(function () {
  'use strict';

  // ── 1. MINECRAFT COLOR PALETTE ──
  const MC_COLORS = {
    white: '#FFFFFF',
    gold: '#FFAA00',
    yellow: '#FFFF55',
    green: '#55FF55',
    dark_green: '#00AA00',
    aqua: '#55FFFF',
    dark_aqua: '#00AAAA',
    blue: '#5555FF',
    dark_blue: '#0000AA',
    light_purple: '#FF55FF',
    dark_purple: '#AA00AA',
    red: '#FF5555',
    dark_red: '#AA0000',
    gray: '#AAAAAA',
    dark_gray: '#555555',
    black: '#000000',
  };

  // ── 2. MINECRAFT-SAFE UNICODE SYMBOLS (UNIFONT & ASCII BITMAP) ──
  const SYMBOL_DATABASE = {
    popular: [
      '★', '☆', '✦', '✧', '✪', '✫', '✬', '✭', '✮', '✯', '✰', '✡',
      '♥', '♡', '❤', '❥', '❣', '♦', '♠', '♣', '♤', '♢', '♧', '♨',
      '♩', '♪', '♫', '♬', '♭', '♮', '♯', '✔', '✘', '✗', '✓', '✕',
      '⚡', '⚠', '☠', '⚙', '⚔', '⛏', '⚒', '⚓', '⚗', '⛨', '⛩', '⛪',
      '☕', '☘', '⚑', '⚐', '✿', '❀', '❁', '❂', '❄', '❅', '❆', '❇',
      '✨', '❖', '◆', '◇', '§', '¶', '†', '‡', '©', '®', '™', '°',
      '•', '·', '☮', '☯', '☢', '☣', '♾', '♿', '✈', '✉', '✌', '✍'
    ],
    arrows: [
      '→', '←', '↑', '↓', '↔', '↕', '↗', '↘', '↙', '↖',
      '➔', '➜', '➝', '➞', '➟', '➠', '➡', '➢', '➣', '➤',
      '➥', '➦', '➧', '➨', '➩', '➪', '➫', '➬', '➭', '➮',
      '➯', '➱', '➲', '➳', '➴', '➵', '➶', '➷', '➸', '🏹',
      '⇒', '⇐', '⇑', '⇓', '⇔', '⇕', '►', '◄', '▲', '▼',
      '▶', '◀', '⏎', '↩', '↪', '⤴', '⤵', '≫', '≪', '↻', '↺'
    ],
    shapes: [
      '■', '□', '▪', '▫', '▬', '▮', '▯', '◼', '◻', '◾', '◽',
      '●', '○', '◉', '◎', '◌', '◍', '◐', '◑', '◒', '◓', '◔', '◕',
      '▣', '▤', '▥', '▦', '▧', '▨', '▩', '▰', '▱', '◆', '◇', '◈',
      '◊', '❑', '❒', '⬟', '⬠', '⬡', '⏣', '△', '▽', '▷', '◁', '⊿',
      '⬥', '⬦', '⬧', '⬨', '⚪', '⚫', '⚬', '◘', '◙', '◜', '◝'
    ],
    pvp: [
      '⚔', '⚒', '⛏', '⚓', '⚗', '⚙', '⚛', '⚜', '⚝', '🛡',
      '🏹', '🗡', '⛨', '⛓', '⛔', '⛽', '♔', '♕', '♖', '♗',
      '♘', '♙', '♚', '♛', '♜', '♝', '♞', '♟', '⚀', '⚁',
      '⚂', '⚃', '⚄', '⚅', '⚆', '⚇', '⚈', '⚉', '⛀', '⛁',
      '⛂', '⛃', '⚰', '⚱', '⚿', '⚽', '⚾', '⛷', '⛸', '⛳'
    ],
    runes: [
      'Ⓐ', 'Ⓑ', 'Ⓒ', 'Ⓓ', 'Ⓔ', 'Ⓕ', 'Ⓖ', 'Ⓗ', 'Ⓘ', 'Ⓙ', 'Ⓚ', 'Ⓛ', 'Ⓜ',
      'Ⓝ', 'Ⓞ', 'Ⓟ', 'Ⓠ', 'Ⓡ', 'Ⓢ', 'Ⓣ', 'Ⓤ', 'Ⓥ', 'Ⓦ', 'Ⓧ', 'Ⓨ', 'Ⓩ',
      '①', '②', '③', '④', '⑤', '⑥', '⑦', '⑧', '⑨', '⑩',
      '❶', '❷', '❸', '❹', '❺', '❻', '❼', '❽', '❾', '❿',
      'ᚠ', 'ᚡ', 'ᚢ', 'ᚣ', 'ᚤ', 'ᚥ', 'ᚦ', 'ᚧ', 'ᚨ', 'ᚩ', 'ᚪ', 'ᚫ', 'ᚬ',
      'ᚭ', 'ᚮ', 'ᚯ', 'ᚰ', 'ᚱ', 'ᚲ', 'ᚳ', 'ᚴ', 'ᚵ', 'ᚶ', 'ᚷ', 'ᚸ', 'ᚹ',
      'ᚺ', 'ᚻ', 'ᚼ', 'ᚽ', 'ᚾ', 'ᚿ', 'ᛀ', 'ᛁ', 'ᛂ', 'ᛃ', 'ᛄ', 'ᛅ', 'ᛆ',
      'ᛇ', 'ᛈ', 'ᛉ', 'ᛊ', 'ᛋ', 'ᛌ', 'ᛍ', 'ᛎ', 'ᛏ', 'ᛐ', 'ᛑ', 'ᛒ', 'ᛓ'
    ],
    box: [
      '─', '━', '│', '┃', '┄', '┅', '┆', '┇', '┈', '┉', '┊', '┋',
      '┌', '┍', '┎', '┏', '┐', '┑', '┒', '┓', '└', '┕', '┖', '┗',
      '┘', '┙', '┚', '┛', '├', '┝', '┞', '┟', '┠', '┡', '┢', '┣',
      '┤', '┥', '┦', '┧', '┨', '┩', '┪', '┫', '┬', '┭', '┮', '┯',
      '┴', '┵', '┶', '┷', '┼', '╀', '╁', '╂', '═', '║', '╔', '╗',
      '╚', '╝', '╠', '╣', '╦', '╩', '╬', '░', '▒', '▓', '█', '▀',
      ' ', '▂', '▃', '▄', '▅', '▆', '▇', '▉', '▊', '▋', '▌', '▍'
    ]
  };

  // ── 3. APPLICATION STATE ──
  const state = {
    text: '★ BlockEngine Studio ★\nDatapack & Command Suite',
    colorMode: 'named', // 'named' or 'custom'
    color: 'gold',
    customHex: '#FFAA00',
    bold: true,
    italic: false,
    underlined: false,
    strikethrough: false,
    obfuscated: false,

    billboard: 'center',
    alignment: 'center',
    lineWidth: 200,
    viewRange: 1.0,
    shadow: true,
    seeThrough: false,
    defaultBackground: true,
    bgColor: '#000000',
    bgAlpha: 100,

    scaleX: 1.0,
    scaleY: 1.0,
    scaleZ: 1.0,
    transX: 0.0,
    transY: 0.0,
    transZ: 0.0,
    rotYaw: 0,
    rotPitch: 0,
    rotRoll: 0,

    interpDuration: 0,
    interpStart: 0,

    posX: '~',
    posY: '~2',
    posZ: '~',
    tags: 'be_text_display',

    bgTheme: 'dark' // viewport background
  };

  // ── 4. DOM REFS ──
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  let dom = {};

  function initDOM() {
    dom = {
      commandCodeText: $('#commandCodeText'),
      commandStatusBadge: $('#commandStatusBadge'),
      inputText: $('#td_input_text'),
      colorSelect: $('#td_color_select'),
      customHexInput: $('#td_custom_hex'),
      colorPreview: $('#td_color_preview'),
      
      toggleBold: $('#td_toggle_bold'),
      toggleItalic: $('#td_toggle_italic'),
      toggleUnderline: $('#td_toggle_underline'),
      toggleStrike: $('#td_toggle_strike'),
      toggleObf: $('#td_toggle_obf'),

      lineWidthInput: $('#td_line_width'),
      viewRangeInput: $('#td_view_range'),
      toggleShadow: $('#td_toggle_shadow'),
      toggleSeeThrough: $('#td_toggle_see_through'),
      toggleDefBg: $('#td_toggle_def_bg'),
      customBgGroup: $('#td_custom_bg_group'),
      bgColorPicker: $('#td_bg_color_picker'),
      bgAlphaInput: $('#td_bg_alpha_input'),
      bgArgbDisplay: $('#td_bg_argb_display'),

      scaleX: $('#td_scale_x'),
      scaleY: $('#td_scale_y'),
      scaleZ: $('#td_scale_z'),
      transX: $('#td_trans_x'),
      transY: $('#td_trans_y'),
      transZ: $('#td_trans_z'),
      rotYaw: $('#td_rot_yaw'),
      rotPitch: $('#td_rot_pitch'),
      rotRoll: $('#td_rot_roll'),

      interpDur: $('#td_interp_dur'),
      interpStart: $('#td_interp_start'),

      posX: $('#td_pos_x'),
      posY: $('#td_pos_y'),
      posZ: $('#td_pos_z'),
      tagsInput: $('#td_tags_input'),

      symbolTabs: $('#td_symbol_tabs'),
      symbolGrid: $('#td_symbol_grid'),
      emojiWarnBox: $('#td_emoji_warn'),
      emojiListText: $('#td_emoji_list'),

      renderBox: $('#td_render_box'),
      viewport: $('#td_viewport')
    };
  }

  // ── 5. MATH & SNBT HELPERS ──
  function floatSuffix(num) {
    const val = Number(num) || 0;
    const str = Number.isInteger(val) ? val.toString() : parseFloat(val.toFixed(4)).toString();
    return `${str}f`;
  }

  function hexToArgbInt(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16) || 0;
    const g = parseInt(hex.slice(3, 5), 16) || 0;
    const b = parseInt(hex.slice(5, 7), 16) || 0;
    const a = Math.max(0, Math.min(255, Number(alpha) || 0));
    return ((a << 24) | (r << 16) | (g << 8) | b) | 0;
  }

  function eulerToQuaternion(yawDeg, pitchDeg, rollDeg) {
    const y = ((yawDeg || 0) * Math.PI) / 360;
    const p = ((pitchDeg || 0) * Math.PI) / 360;
    const r = ((rollDeg || 0) * Math.PI) / 360;

    const cy = Math.cos(y);
    const sy = Math.sin(y);
    const cp = Math.cos(p);
    const sp = Math.sin(p);
    const cr = Math.cos(r);
    const sr = Math.sin(r);

    const qx = sr * cp * cy - cr * sp * sy;
    const qy = cr * sp * cy + sr * cp * sy;
    const qz = cr * cp * sy - sr * sp * cy;
    const qw = cr * cp * cy + sr * sp * sy;

    return [
      Number(qx.toFixed(4)),
      Number(qy.toFixed(4)),
      Number(qz.toFixed(4)),
      Number(qw.toFixed(4))
    ];
  }

  // ── 6. COMMAND GENERATION (1.21+ SPEC) ──
  function buildCommandString() {
    const lines = state.text.split('\n').filter(l => l.length > 0);
    const chosenColor = state.colorMode === 'custom' ? state.customHex : state.color;

    function buildTextObj(str) {
      const obj = { text: str, color: chosenColor };
      if (state.bold) obj.bold = true;
      if (state.italic) obj.italic = true;
      if (state.underlined) obj.underlined = true;
      if (state.strikethrough) obj.strikethrough = true;
      if (state.obfuscated) obj.obfuscated = true;
      return obj;
    }

    let textJson;
    if (lines.length <= 1) {
      textJson = JSON.stringify(buildTextObj(lines[0] || ''));
    } else {
      const arr = lines.map(line => buildTextObj(line));
      textJson = JSON.stringify(arr);
    }

    const nbtParts = [];

    nbtParts.push(`billboard:"${state.billboard}"`);
    nbtParts.push(`line_width:${Math.max(1, parseInt(state.lineWidth, 10) || 200)}`);
    nbtParts.push(`default_background:${state.defaultBackground ? '1b' : '0b'}`);
    nbtParts.push(`shadow:${state.shadow ? '1b' : '0b'}`);
    nbtParts.push(`see_through:${state.seeThrough ? '1b' : '0b'}`);
    nbtParts.push(`alignment:"${state.alignment}"`);

    if (!state.defaultBackground) {
      const argb = hexToArgbInt(state.bgColor, state.bgAlpha);
      nbtParts.push(`background:${argb}`);
    }

    if (state.viewRange !== 1.0) {
      nbtParts.push(`view_range:${floatSuffix(state.viewRange)}`);
    }

    // Custom Tags
    if (state.tags && state.tags.trim()) {
      const tagList = state.tags.split(',').map(t => `"${t.trim()}"`).filter(t => t.length > 2);
      if (tagList.length > 0) {
        nbtParts.push(`Tags:[${tagList.join(',')}]`);
      }
    }

    // Transformation Compound
    const sx = floatSuffix(state.scaleX);
    const sy = floatSuffix(state.scaleY);
    const sz = floatSuffix(state.scaleZ);

    const tx = floatSuffix(state.transX);
    const ty = floatSuffix(state.transY);
    const tz = floatSuffix(state.transZ);

    const [qx, qy, qz, qw] = eulerToQuaternion(state.rotYaw, state.rotPitch, state.rotRoll);
    const rotLeft = `[${floatSuffix(qx)},${floatSuffix(qy)},${floatSuffix(qz)},${floatSuffix(qw)}]`;
    const rotRight = `[0f,0f,0f,1f]`;

    nbtParts.push(`transformation:{left_rotation:${rotLeft},right_rotation:${rotRight},translation:[${tx},${ty},${tz}],scale:[${sx},${sy},${sz}]}`);

    // Interpolation (Smooth animation)
    if (state.interpDuration > 0) {
      nbtParts.push(`interpolation_duration:${parseInt(state.interpDuration, 10)}`);
      nbtParts.push(`start_interpolation:${parseInt(state.interpStart, 10)}`);
    }

    // Direct JSON text component (no outer quotes, no escaping)
    nbtParts.push(`text:${textJson}`);

    const posX = state.posX.trim() || '~';
    const posY = state.posY.trim() || '~2';
    const posZ = state.posZ.trim() || '~';

    return `/summon text_display ${posX} ${posY} ${posZ} {${nbtParts.join(',')}}`;
  }

  // ── 7. SYNTAX HIGHLIGHTER (SAFE SINGLE-PASS) ──
  function escapeHTML(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function highlightCommand(cmd) {
    const safe = escapeHTML(cmd);
    const tokenRegex = /(\/summon\b)|(\btext_display\b)|([~^][0-9.-]*)|("(\\.|[^"\\])*")|(\b[a-zA-Z_]+(?=:))|(\b[0-9.-]+[fbsd]?\b)|(\b(true|false)\b)/g;

    return safe.replace(tokenRegex, (match, cmdKw, entKw, pos, str, key, num, boolVal) => {
      if (cmdKw) return `<span class="hl-cmd">${cmdKw}</span>`;
      if (entKw) return `<span class="hl-ent">${entKw}</span>`;
      if (pos) return `<span class="hl-pos">${pos}</span>`;
      if (str) return `<span class="hl-str">${str}</span>`;
      if (key) return `<span class="hl-key">${key}</span>`;
      if (num) return `<span class="hl-num">${num}</span>`;
      if (boolVal) return `<span class="hl-bool">${boolVal}</span>`;
      return match;
    });
  }

  // ── 8. UPDATE UI & LIVE PREVIEW ──
  function update() {
    const rawCmd = buildCommandString();
    dom.commandCodeText.innerHTML = highlightCommand(rawCmd);

    // Active color
    const effectiveHex = state.colorMode === 'custom' ? state.customHex : (MC_COLORS[state.color] || '#FFAA00');
    dom.colorPreview.style.backgroundColor = effectiveHex;

    // Render Box Styling
    const box = dom.renderBox;
    box.style.color = effectiveHex;
    box.style.fontWeight = state.bold ? '700' : '400';
    box.style.fontStyle = state.italic ? 'italic' : 'normal';

    let deco = [];
    if (state.underlined) deco.push('underline');
    if (state.strikethrough) deco.push('line-through');
    box.style.textDecoration = deco.length ? deco.join(' ') : 'none';

    box.style.animation = state.obfuscated ? 'td-obfuscate 0.1s infinite' : 'none';

    // Alignment
    box.style.textAlign = state.alignment;

    // Background
    if (state.defaultBackground) {
      box.style.backgroundColor = 'rgba(0, 0, 0, 0.35)';
      dom.customBgGroup.style.display = 'none';
    } else {
      dom.customBgGroup.style.display = 'block';
      const r = parseInt(state.bgColor.slice(1, 3), 16) || 0;
      const g = parseInt(state.bgColor.slice(3, 5), 16) || 0;
      const b = parseInt(state.bgColor.slice(5, 7), 16) || 0;
      const a = (state.bgAlpha / 255).toFixed(2);
      box.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`;
      dom.bgArgbDisplay.textContent = hexToArgbInt(state.bgColor, state.bgAlpha);
    }

    // Shadow
    if (state.shadow) {
      box.style.textShadow = `2px 2px 0 rgba(0,0,0,0.8), 1px 1px 0 ${effectiveHex}33`;
    } else {
      box.style.textShadow = 'none';
    }

    // 3D Visual Transform representation in preview
    const scaleAvg = Math.max(0.2, (state.scaleX + state.scaleY + state.scaleZ) / 3);
    const pxSize = Math.max(16, Math.min(54, Math.round(22 * scaleAvg)));
    box.style.fontSize = `${pxSize}px`;

    // Minecraft Line Width Calculation (Minecraft standard chat font metrics)
    // 1 Minecraft font pixel = (pxSize / 9.6) CSS pixels
    const mcPixelScale = pxSize / 9.6;
    const maxWrapPx = Math.max(40, (parseInt(state.lineWidth, 10) || 200) * mcPixelScale);
    box.style.maxWidth = `${maxWrapPx.toFixed(1)}px`;
    box.style.width = 'max-content';

    const tx = (state.transX * 20).toFixed(1);
    const ty = (-state.transY * 20).toFixed(1);
    box.style.transform = `translate(${tx}px, ${ty}px) rotateY(${state.rotYaw}deg) rotateX(${state.rotPitch}deg) rotateZ(${state.rotRoll}deg)`;

    // Text content
    box.textContent = state.text || ' ';

    // Emoji Detection: accurately flags ONLY modern color emojis (Plane 1+, e.g. 😂, 🐉, 🗑, 🚀)
    // All Unicode Basic Multilingual Plane characters (swords, hearts, stars, chess, runes) are fully supported!
    const unsupported = [];
    for (const ch of (state.text || '')) {
      const cp = ch.codePointAt(0);
      if (cp && cp > 0xFFFF) {
        unsupported.push(ch);
      }
    }
    if (unsupported.length > 0) {
      const unique = [...new Set(unsupported)];
      dom.emojiWarnBox.style.display = 'flex';
      dom.emojiListText.textContent = unique.join(' ');
    } else {
      dom.emojiWarnBox.style.display = 'none';
      dom.emojiListText.textContent = '';
    }
  }

  // ── 9. SYMBOL PICKER RENDERER ──
  function renderSymbols(category) {
    dom.symbolGrid.innerHTML = '';
    const list = SYMBOL_DATABASE[category] || [];
    list.forEach(sym => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'td-sym-btn';
      btn.textContent = sym;
      btn.title = `Codice: U+${sym.codePointAt(0).toString(16).toUpperCase()}`;
      btn.onclick = () => insertSymbolAtCursor(sym);
      dom.symbolGrid.appendChild(btn);
    });
  }

  function insertSymbolAtCursor(symbol) {
    const el = dom.inputText;
    const start = el.selectionStart || 0;
    const end = el.selectionEnd || 0;
    const text = el.value;
    el.value = text.substring(0, start) + symbol + text.substring(end);
    el.selectionStart = el.selectionEnd = start + symbol.length;
    el.focus();
    state.text = el.value;
    update();
  }

  // ── 10. PRESET CONFIGURATIONS (CLEAN STATE RESETS) ──
  function resetPresetDefaults() {
    state.colorMode = 'named';
    state.customHex = '#FFAA00';
    state.bold = true;
    state.italic = false;
    state.underlined = false;
    state.strikethrough = false;
    state.obfuscated = false;

    state.billboard = 'center';
    state.alignment = 'center';
    state.lineWidth = 200;
    state.viewRange = 1.0;
    state.shadow = true;
    state.seeThrough = false;
    state.defaultBackground = true;
    state.bgColor = '#000000';
    state.bgAlpha = 140;

    state.scaleX = 1.0;
    state.scaleY = 1.0;
    state.scaleZ = 1.0;
    state.transX = 0.0;
    state.transY = 0.0;
    state.transZ = 0.0;
    state.rotYaw = 0;
    state.rotPitch = 0;
    state.rotRoll = 0;

    state.interpDuration = 0;
    state.interpStart = 0;
    state.tags = 'be_text_display';
  }

  function syncAllUIFromState() {
    dom.inputText.value = state.text;
    dom.colorSelect.value = state.colorMode === 'custom' ? 'custom' : state.color;
    dom.customHexInput.value = state.customHex;
    dom.customHexInput.style.display = state.colorMode === 'custom' ? 'inline-block' : 'none';

    dom.toggleBold.classList.toggle('active', state.bold);
    dom.toggleItalic.classList.toggle('active', state.italic);
    dom.toggleUnderline.classList.toggle('active', state.underlined);
    dom.toggleStrike.classList.toggle('active', state.strikethrough);
    dom.toggleObf.classList.toggle('active', state.obfuscated);

    dom.lineWidthInput.value = state.lineWidth;
    dom.viewRangeInput.value = state.viewRange;
    dom.toggleShadow.classList.toggle('active', state.shadow);
    dom.toggleSeeThrough.classList.toggle('active', state.seeThrough);
    dom.toggleDefBg.classList.toggle('active', state.defaultBackground);

    dom.bgColorPicker.value = state.bgColor;
    dom.bgAlphaInput.value = state.bgAlpha;
    dom.customBgGroup.style.display = state.defaultBackground ? 'none' : 'block';

    dom.scaleX.value = state.scaleX;
    dom.scaleY.value = state.scaleY;
    dom.scaleZ.value = state.scaleZ;
    dom.transX.value = state.transX;
    dom.transY.value = state.transY;
    dom.transZ.value = state.transZ;
    dom.rotYaw.value = state.rotYaw;
    dom.rotPitch.value = state.rotPitch;
    dom.rotRoll.value = state.rotRoll;

    dom.interpDur.value = state.interpDuration;
    dom.interpStart.value = state.interpStart;

    dom.tagsInput.value = state.tags;

    // Billboard pills
    $$('#td_billboard_group .td-pill').forEach(p => {
      p.classList.toggle('active', p.dataset.val === state.billboard);
    });

    // Align pills
    $$('#td_align_group .td-pill').forEach(p => {
      p.classList.toggle('active', p.dataset.val === state.alignment);
    });
  }

  window.loadPreset = function (presetKey) {
    resetPresetDefaults();

    switch (presetKey) {
      case 'title':
        state.text = '✦ MISSIONE COMPLETATA ✦\nHai sconfitto il Boss!';
        state.color = 'gold';
        state.scaleX = 2.0; state.scaleY = 2.0; state.scaleZ = 2.0;
        state.lineWidth = 320;
        state.billboard = 'center';
        state.alignment = 'center';
        state.defaultBackground = false;
        state.bgColor = '#000000';
        state.bgAlpha = 140;
        state.tags = 'be_title';
        break;

      case 'npc':
        state.text = '⚔ Mastro Fabbro ⚔\n[Click Destro per Aprire]';
        state.color = 'aqua';
        state.scaleX = 1.0; state.scaleY = 1.0; state.scaleZ = 1.0;
        state.lineWidth = 200;
        state.billboard = 'vertical';
        state.alignment = 'center';
        state.defaultBackground = true;
        state.tags = 'npc_nameplate';
        break;

      case 'warning':
        state.text = '⚠ ATTENZIONE: ZONA RADIOATTIVA ⚠\nEquipaggia la Tuta Protettiva';
        state.color = 'red';
        state.scaleX = 1.4; state.scaleY = 1.4; state.scaleZ = 1.4;
        state.lineWidth = 280;
        state.billboard = 'fixed';
        state.alignment = 'center';
        state.seeThrough = true;
        state.defaultBackground = false;
        state.bgColor = '#4a0000';
        state.bgAlpha = 180;
        state.tags = 'warning_sign';
        break;

      case 'leaderboard':
        state.text = '╔══ 🏆 TOP KILLER ══╗\n1. PlayerOne - 142 Kills\n2. PlayerTwo - 98 Kills\n3. PlayerThree - 54 Kills\n╚══════════════════╝';
        state.color = 'yellow';
        state.scaleX = 1.1; state.scaleY = 1.1; state.scaleZ = 1.1;
        state.lineWidth = 340;
        state.billboard = 'fixed';
        state.alignment = 'center';
        state.defaultBackground = false;
        state.bgColor = '#0a0a14';
        state.bgAlpha = 210;
        state.tags = 'top_leaderboard';
        break;

      case 'stats':
        state.text = '⚔ SPADA DEL DRAGO +5\nAttacco: +14.5 Danno\nVelocita: +1.6 Rapidita\nDurabilita: 100% Intatta';
        state.color = 'light_purple';
        state.scaleX = 0.9; state.scaleY = 0.9; state.scaleZ = 0.9;
        state.lineWidth = 260;
        state.billboard = 'center';
        state.alignment = 'left';
        state.defaultBackground = false;
        state.bgColor = '#150a24';
        state.bgAlpha = 180;
        state.tags = 'item_lore_card';
        break;
    }

    syncAllUIFromState();
    update();
  };

  // ── 11. EVENT LISTENERS ──
  function setupEventListeners() {
    // Text Input
    dom.inputText.addEventListener('input', (e) => {
      state.text = e.target.value;
      update();
    });

    // Color Selector
    dom.colorSelect.addEventListener('change', (e) => {
      const val = e.target.value;
      if (val === 'custom') {
        state.colorMode = 'custom';
        dom.customHexInput.style.display = 'inline-block';
      } else {
        state.colorMode = 'named';
        state.color = val;
        dom.customHexInput.style.display = 'none';
      }
      update();
    });

    dom.customHexInput.addEventListener('input', (e) => {
      state.customHex = e.target.value;
      update();
    });

    // Style Toggles
    const setupToggle = (btn, key) => {
      btn.addEventListener('click', () => {
        state[key] = !state[key];
        btn.classList.toggle('active', state[key]);
        update();
      });
    };
    setupToggle(dom.toggleBold, 'bold');
    setupToggle(dom.toggleItalic, 'italic');
    setupToggle(dom.toggleUnderline, 'underlined');
    setupToggle(dom.toggleStrike, 'strikethrough');
    setupToggle(dom.toggleObf, 'obfuscated');

    // Billboard & Align Pills
    const setupPills = (containerId, stateKey) => {
      $$(containerId + ' .td-pill').forEach(pill => {
        pill.addEventListener('click', () => {
          $$(containerId + ' .td-pill').forEach(p => p.classList.remove('active'));
          pill.classList.add('active');
          state[stateKey] = pill.dataset.val;
          update();
        });
      });
    };
    setupPills('#td_billboard_group', 'billboard');
    setupPills('#td_align_group', 'alignment');

    // Display Properties
    dom.lineWidthInput.addEventListener('input', (e) => {
      state.lineWidth = parseInt(e.target.value, 10) || 200;
      update();
    });

    dom.viewRangeInput.addEventListener('input', (e) => {
      state.viewRange = parseFloat(e.target.value) || 1.0;
      update();
    });

    dom.toggleShadow.addEventListener('click', () => {
      state.shadow = !state.shadow;
      dom.toggleShadow.classList.toggle('active', state.shadow);
      update();
    });

    dom.toggleSeeThrough.addEventListener('click', () => {
      state.seeThrough = !state.seeThrough;
      dom.toggleSeeThrough.classList.toggle('active', state.seeThrough);
      update();
    });

    dom.toggleDefBg.addEventListener('click', () => {
      state.defaultBackground = !state.defaultBackground;
      dom.toggleDefBg.classList.toggle('active', state.defaultBackground);
      update();
    });

    dom.bgColorPicker.addEventListener('input', (e) => {
      state.bgColor = e.target.value;
      update();
    });

    dom.bgAlphaInput.addEventListener('input', (e) => {
      state.bgAlpha = parseInt(e.target.value, 10) || 0;
      update();
    });

    // Transformations
    const bindNum = (el, key, isFloat) => {
      el.addEventListener('input', (e) => {
        state[key] = isFloat ? (parseFloat(e.target.value) || 0) : (parseInt(e.target.value, 10) || 0);
        update();
      });
    };
    bindNum(dom.scaleX, 'scaleX', true);
    bindNum(dom.scaleY, 'scaleY', true);
    bindNum(dom.scaleZ, 'scaleZ', true);
    bindNum(dom.transX, 'transX', true);
    bindNum(dom.transY, 'transY', true);
    bindNum(dom.transZ, 'transZ', true);
    bindNum(dom.rotYaw, 'rotYaw', false);
    bindNum(dom.rotPitch, 'rotPitch', false);
    bindNum(dom.rotRoll, 'rotRoll', false);

    // Interpolation
    bindNum(dom.interpDur, 'interpDuration', false);
    bindNum(dom.interpStart, 'interpStart', false);

    // Position & Tags
    dom.posX.addEventListener('input', (e) => { state.posX = e.target.value; update(); });
    dom.posY.addEventListener('input', (e) => { state.posY = e.target.value; update(); });
    dom.posZ.addEventListener('input', (e) => { state.posZ = e.target.value; update(); });
    dom.tagsInput.addEventListener('input', (e) => { state.tags = e.target.value; update(); });

    // Symbol Tabs
    $$('#td_symbol_tabs .td-sym-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        $$('#td_symbol_tabs .td-sym-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        renderSymbols(tab.dataset.cat);
      });
    });

    // Background Themes
    $$('.td-bg-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        $$('.td-bg-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        dom.viewport.className = `td-viewport td-vp-${btn.dataset.bg}`;
      });
    });
  }

  // ── 12. COPY & EXPORT ACTIONS ──
  window.copyTextDisplayCommand = async function () {
    const cmd = buildCommandString();
    try {
      await navigator.clipboard.writeText(cmd);
      showFeedback('✅ Comando Copiato negli Appunti!');
    } catch (err) {
      const ta = document.createElement('textarea');
      ta.value = cmd;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      showFeedback('✅ Comando Copiato!');
    }
  };

  window.exportTextDisplayFunction = function () {
    const cmd = buildCommandString();
    const content = `# Generated by BlockEngine Text Display Generator\n# Minecraft Java Edition 1.21+\n\n${cmd}\n`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'summon_text_display.mcfunction';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showFeedback('💾 File .mcfunction scaricato!');
  };

  function showFeedback(msg) {
    const badge = dom.commandStatusBadge;
    const oldText = badge.textContent;
    const oldBg = badge.style.backgroundColor;
    badge.textContent = msg;
    badge.style.backgroundColor = '#1e3a1e';
    setTimeout(() => {
      badge.textContent = oldText;
      badge.style.backgroundColor = oldBg;
    }, 2000);
  }

  // Quick Preset Helper for Coordinates
  window.setQuickCoord = function (x, y, z) {
    dom.posX.value = state.posX = x;
    dom.posY.value = state.posY = y;
    dom.posZ.value = state.posZ = z;
    update();
  };

  // ── 13. INITIALIZE ──
  document.addEventListener('DOMContentLoaded', () => {
    initDOM();
    setupEventListeners();
    renderSymbols('popular');
    update();
  });

})();
