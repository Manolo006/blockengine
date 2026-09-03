/**
 * EXECUTE COMMAND BUILDER - MINECRAFT JAVA EDITION
 * Block-Based /execute Pipeline Builder, Reverse Engineering, Universal Target Selectors & Real-Time Searchable Comboboxes
 */

// ==========================================
// 1. MINECRAFT ENTITIES, TAGS & BIOMES DICTIONARIES
// ==========================================
const MINECRAFT_ENTITIES = [
  "minecraft:allay", "minecraft:area_effect_cloud", "minecraft:armadillo", "minecraft:armor_stand",
  "minecraft:arrow", "minecraft:axolotl", "minecraft:bat", "minecraft:bee", "minecraft:blaze",
  "minecraft:block_display", "minecraft:boat", "minecraft:bogged", "minecraft:breeze",
  "minecraft:breeze_wind_charge", "minecraft:camel", "minecraft:cat", "minecraft:cave_spider",
  "minecraft:chest_boat", "minecraft:chest_minecart", "minecraft:chicken", "minecraft:cod",
  "minecraft:command_block_minecart", "minecraft:cow", "minecraft:creeper", "minecraft:dolphin",
  "minecraft:donkey", "minecraft:dragon_fireball", "minecraft:drowned", "minecraft:egg",
  "minecraft:elder_guardian", "minecraft:end_crystal", "minecraft:ender_dragon", "minecraft:ender_pearl",
  "minecraft:enderman", "minecraft:endermite", "minecraft:evoker", "minecraft:evoker_fangs",
  "minecraft:experience_bottle", "minecraft:experience_orb", "minecraft:eye_of_ender", "minecraft:falling_block",
  "minecraft:fireball", "minecraft:firework_rocket", "minecraft:fox", "minecraft:frog",
  "minecraft:furnace_minecart", "minecraft:ghast", "minecraft:giant", "minecraft:glow_item_frame",
  "minecraft:glow_squid", "minecraft:goat", "minecraft:guardian", "minecraft:hoglin", "minecraft:hopper_minecart",
  "minecraft:horse", "minecraft:husk", "minecraft:illusioner", "minecraft:interaction",
  "minecraft:iron_golem", "minecraft:item", "minecraft:item_display", "minecraft:item_frame",
  "minecraft:leash_knot", "minecraft:lightning_bolt", "minecraft:llama", "minecraft:llama_spit",
  "minecraft:magma_cube", "minecraft:marker", "minecraft:minecart", "minecraft:mooshroom",
  "minecraft:mule", "minecraft:ocelot", "minecraft:ominous_item_spawner", "minecraft:painting",
  "minecraft:panda", "minecraft:parrot", "minecraft:phantom", "minecraft:pig", "minecraft:piglin",
  "minecraft:piglin_brute", "minecraft:pillager", "minecraft:player", "minecraft:polar_bear",
  "minecraft:potion", "minecraft:pufferfish", "minecraft:rabbit", "minecraft:ravager",
  "minecraft:salmon", "minecraft:sheep", "minecraft:shulker", "minecraft:shulker_bullet",
  "minecraft:silverfish", "minecraft:skeleton", "minecraft:skeleton_horse", "minecraft:slime",
  "minecraft:small_fireball", "minecraft:sniffer", "minecraft:snow_golem", "minecraft:snowball",
  "minecraft:spawner_minecart", "minecraft:spectral_arrow", "minecraft:spider", "minecraft:squid",
  "minecraft:stray", "minecraft:strider", "minecraft:tadpole", "minecraft:text_display",
  "minecraft:tnt", "minecraft:tnt_minecart", "minecraft:trader_llama", "minecraft:trident",
  "minecraft:tropical_fish", "minecraft:turtle", "minecraft:vex", "minecraft:villager",
  "minecraft:vindicator", "minecraft:wandering_trader", "minecraft:warden", "minecraft:wind_charge",
  "minecraft:witch", "minecraft:wither", "minecraft:wither_skeleton", "minecraft:wither_skull",
  "minecraft:wolf", "minecraft:zoglin", "minecraft:zombie", "minecraft:zombie_horse",
  "minecraft:zombie_villager", "minecraft:zombified_piglin"
];

const MINECRAFT_ENTITY_TAGS = [
  "#minecraft:undead", "#minecraft:skeletons", "#minecraft:zombies", "#minecraft:raiders",
  "#minecraft:illager", "#minecraft:illager_friends", "#minecraft:arthropods", "#minecraft:arrows",
  "#minecraft:beehive_inhabitors", "#minecraft:boat", "#minecraft:can_breathe_under_water",
  "#minecraft:can_turn_in_boats", "#minecraft:dismounts_underwater", "#minecraft:fall_damage_immune",
  "#minecraft:freeze_hurts_extra_types", "#minecraft:freeze_immune_entity_types", "#minecraft:frog_food",
  "#minecraft:immune_to_infestation", "#minecraft:immune_to_oozing", "#minecraft:impact_projectiles",
  "#minecraft:inverted_healing_and_harm", "#minecraft:not_scary_for_pufferfish",
  "#minecraft:powder_snow_walkable_mobs", "#minecraft:radiates_radiation", "#minecraft:redirectable_projectile",
  "#minecraft:sensitive_to_bane_of_arthropods", "#minecraft:sensitive_to_impaling", "#minecraft:sensitive_to_smite",
  "#minecraft:wither_immune"
];

const MINECRAFT_NEGATIVE_ENTITIES = [
  "!minecraft:player", "!minecraft:armor_stand", "!minecraft:item_frame", "!minecraft:glow_item_frame",
  "!minecraft:marker", "!minecraft:item", "!minecraft:interaction", "!minecraft:creeper",
  "!minecraft:zombie", "!minecraft:skeleton", "!minecraft:spider", "!minecraft:item_display",
  "!minecraft:block_display", "!minecraft:text_display", "!minecraft:experience_orb"
];

const MINECRAFT_NEGATIVE_TAGS = [
  "!#minecraft:undead", "!#minecraft:skeletons", "!#minecraft:zombies", "!#minecraft:raiders",
  "!#minecraft:illager", "!#minecraft:arthropods", "!#minecraft:arrows", "!#minecraft:boat"
];

const MINECRAFT_ITEM_TAGS = [
  "#minecraft:head_armor", "#minecraft:chest_armor", "#minecraft:leg_armor", "#minecraft:foot_armor",
  "#minecraft:swords", "#minecraft:pickaxes", "#minecraft:axes", "#minecraft:shovels", "#minecraft:hoes",
  "#minecraft:tools", "#minecraft:armors", "#minecraft:arrows", "#minecraft:banners", "#minecraft:beacon_payment_items",
  "#minecraft:boats", "#minecraft:chest_boats", "#minecraft:bookshelf_books", "#minecraft:candles",
  "#minecraft:cluster_max_harvestables", "#minecraft:coals", "#minecraft:compasses", "#minecraft:creeper_igniters",
  "#minecraft:decorated_pot_sherds", "#minecraft:enchantable/armor", "#minecraft:enchantable/weapon",
  "#minecraft:enchantable/mining", "#minecraft:enchantable/bow", "#minecraft:enchantable/crossbow",
  "#minecraft:enchantable/durability", "#minecraft:enchantable/equippable", "#minecraft:enchantable/fishing",
  "#minecraft:enchantable/mace", "#minecraft:enchantable/trident", "#minecraft:enchantable/vanishing",
  "#minecraft:fishes", "#minecraft:fox_food", "#minecraft:freeze_immune_wearables", "#minecraft:gold_ores",
  "#minecraft:hanging_signs", "#minecraft:iron_ores", "#minecraft:leaves", "#minecraft:logs",
  "#minecraft:logs_that_burn", "#minecraft:meat", "#minecraft:not_scary_for_pufferfish", "#minecraft:piglin_food",
  "#minecraft:piglin_loved", "#minecraft:piglin_repellents", "#minecraft:planks", "#minecraft:sand",
  "#minecraft:saplings", "#minecraft:signs", "#minecraft:smelted_to_iron", "#minecraft:soul_fire_base_blocks",
  "#minecraft:stairs", "#minecraft:stone_bricks", "#minecraft:stone_buttons", "#minecraft:stone_crafting_materials",
  "#minecraft:stone_tool_materials", "#minecraft:terracotta", "#minecraft:trapdoors", "#minecraft:trim_materials",
  "#minecraft:trim_templates", "#minecraft:trimmable_armor", "#minecraft:villager_plantable_seeds",
  "#minecraft:walls", "#minecraft:warped_stems", "#minecraft:wart_blocks", "#minecraft:wolf_food",
  "#minecraft:wooden_buttons", "#minecraft:wooden_doors", "#minecraft:wooden_fences",
  "#minecraft:wooden_pressure_plates", "#minecraft:wooden_slabs", "#minecraft:wooden_stairs", "#minecraft:wooden_trapdoors",
  "#minecraft:wool", "#minecraft:wool_carpets"
];

const MINECRAFT_SLOT_GROUPS = [
  {
    group: "🛡️ Armor & Equipment",
    slots: [
      "armor.*", "armor.head", "armor.chest", "armor.legs", "armor.feet", "armor.body",
      "weapon", "weapon.*", "weapon.mainhand", "weapon.offhand", "saddle"
    ]
  },
  {
    group: "🎒 Player Inventory & Hotbar",
    slots: [
      "hotbar.*",
      ...Array.from({ length: 9 }, (_, i) => `hotbar.${i}`),
      "inventory.*",
      ...Array.from({ length: 27 }, (_, i) => `inventory.${i}`),
      "player.cursor",
      "player.crafting.*",
      "player.crafting.0", "player.crafting.1", "player.crafting.2", "player.crafting.3"
    ]
  },
  {
    group: "📦 Containers & Blocks",
    slots: [
      "container.*",
      "contents",
      ...Array.from({ length: 54 }, (_, i) => `container.${i}`)
    ]
  },
  {
    group: "🌌 Ender Chest",
    slots: [
      "enderchest.*",
      ...Array.from({ length: 27 }, (_, i) => `enderchest.${i}`)
    ]
  },
  {
    group: "🐴 Horse & Mounts",
    slots: [
      "horse.*", "horse.chest", "horse.armor", "horse.saddle",
      ...Array.from({ length: 15 }, (_, i) => `horse.${i}`)
    ]
  },
  {
    group: "🧑‍🌾 Villager Inventory",
    slots: [
      "villager.*",
      ...Array.from({ length: 8 }, (_, i) => `villager.${i}`)
    ]
  }
];

const ALL_MINECRAFT_SLOTS = MINECRAFT_SLOT_GROUPS.flatMap(g => g.slots);

const MINECRAFT_BIOMES = [
  "minecraft:badlands", "minecraft:bamboo_jungle", "minecraft:basalt_deltas", "minecraft:beach",
  "minecraft:birch_forest", "minecraft:cherry_grove", "minecraft:crimson_forest", "minecraft:dark_forest",
  "minecraft:deep_cold_ocean", "minecraft:deep_dark", "minecraft:deep_frozen_ocean", "minecraft:deep_lukewarm_ocean",
  "minecraft:deep_ocean", "minecraft:desert", "minecraft:dripstone_caves", "minecraft:end_barrens",
  "minecraft:end_highlands", "minecraft:end_midlands", "minecraft:eroded_badlands", "minecraft:flower_forest",
  "minecraft:forest", "minecraft:frozen_ocean", "minecraft:frozen_peaks", "minecraft:frozen_river",
  "minecraft:grove", "minecraft:ice_spikes", "minecraft:jagged_peaks", "minecraft:jungle",
  "minecraft:lukewarm_ocean", "minecraft:lush_caves", "minecraft:mangrove_swamp", "minecraft:meadow",
  "minecraft:mushroom_fields", "minecraft:nether_wastes", "minecraft:ocean", "minecraft:old_growth_birch_forest",
  "minecraft:old_growth_pine_taiga", "minecraft:old_growth_spruce_taiga", "minecraft:plains", "minecraft:river",
  "minecraft:savanna", "minecraft:savanna_plateau", "minecraft:small_end_islands", "minecraft:snowy_beach",
  "minecraft:snowy_plains", "minecraft:snowy_slopes", "minecraft:snowy_taiga", "minecraft:soul_sand_valley",
  "minecraft:sparse_jungle", "minecraft:stony_peaks", "minecraft:stony_shore", "minecraft:sunflower_plains",
  "minecraft:swamp", "minecraft:taiga", "minecraft:the_end", "minecraft:the_void", "minecraft:warm_ocean",
  "minecraft:warped_forest", "minecraft:windswept_forest", "minecraft:windswept_gravelly_hills",
  "minecraft:windswept_hills", "minecraft:windswept_savanna", "minecraft:wooded_badlands"
];

const COMMON_NBT_TAGS = [
  "Health", "Pos", "Pos[0]", "Pos[1]", "Pos[2]", "Motion", "Motion[0]", "Motion[1]", "Motion[2]", "Rotation", "Rotation[0]",
  "CustomName", "NoAI", "Invulnerable", "Fire", "Air", "OnGround", "FallDistance", "Tags",
  "ArmorItems", "ArmorItems[3]", "HandItems[0]", "Inventory",
  "SelectedItem", "SelectedItem.id", "SelectedItem.components", "SelectedItem.count",
  "transformation.scale", "transformation.translation",
  "Items", "Items[0].id", "Items[0].count", "RecordItem", "CookTime", "BurnTime",
  "Command", "SuccessCount", "TransferCooldown", "Bees", "patterns", "primary_effect",
  "data.val", "storage.temp"
];

const SELECTOR_FILTER_TYPES = [
  { key: "type", label: "type (Entity type/tag)", default: "minecraft:creeper" },
  { key: "distance", label: "distance (Range)", default: "..10" },
  { key: "limit", label: "limit (Max entities)", default: "1" },
  { key: "sort", label: "sort (Ordering)", default: "nearest" },
  { key: "tag", label: "tag (Scoreboard tag)", default: "boss" },
  { key: "gamemode", label: "gamemode (Game Mode)", default: "survival" },
  { key: "team", label: "team (Scoreboard team)", default: "red" },
  { key: "name", label: "name (Custom Name)", default: "MyEntity" },
  { key: "nbt", label: "nbt (NBT Compound)", default: "{NoAI:1b}" },
  { key: "scores", label: "scores (Score criteria)", default: "{points=10..}" },
  { key: "advancements", label: "advancements (Advancement map)", default: "{story/root=true}" },
  { key: "predicate", label: "predicate (Datapack predicate)", default: "custom:check" },
  { key: "level", label: "level (XP Level)", default: "10.." },
  { key: "x", label: "x (Origin X)", default: "0" },
  { key: "y", label: "y (Origin Y)", default: "64" },
  { key: "z", label: "z (Origin Z)", default: "0" },
  { key: "dx", label: "dx (Volume Box X)", default: "5" },
  { key: "dy", label: "dy (Volume Box Y)", default: "5" },
  { key: "dz", label: "dz (Volume Box Z)", default: "5" },
  { key: "x_rotation", label: "x_rotation (Pitch)", default: "-15..15" },
  { key: "y_rotation", label: "y_rotation (Yaw)", default: "-90..90" }
];

let itemsDatabaseList = [
  "minecraft:diamond_sword", "minecraft:netherite_sword", "minecraft:diamond_pickaxe",
  "minecraft:diamond_block", "minecraft:gold_block", "minecraft:stone", "minecraft:grass_block",
  "minecraft:air", "minecraft:golden_apple", "minecraft:enchanted_golden_apple", "minecraft:totem_of_undying"
];

// ==========================================
// 2. REAL-TIME SEARCHABLE AUTOCOMPLETE COMBOBOX ENGINE
// ==========================================
function getComboboxDataset(type) {
  if (type === 'items') {
    const popular = ["minecraft:diamond_sword", "minecraft:netherite_sword", "minecraft:diamond_pickaxe", "minecraft:bow", "minecraft:crossbow", "minecraft:shield", "minecraft:totem_of_undying", "minecraft:golden_apple", "minecraft:elytra"];
    return [
      { value: "*", label: "* (Qualsiasi Item / non vuoto)", group: "⭐ Wildcard", badge: "Any" },
      ...MINECRAFT_ITEM_TAGS.map(t => ({ value: t, label: t, group: "🏷️ Categorie / Tag (#tag)", badge: "Tag" })),
      ...popular.map(p => ({ value: p, label: p.replace('minecraft:', ''), group: "🗡️ Item Popolari", badge: "Item" })),
      ...itemsDatabaseList.map(it => ({ value: it, label: it.replace('minecraft:', ''), group: "📦 Tutti gli Item", badge: "Item" }))
    ];
  } else if (type === 'slots') {
    const results = [];
    MINECRAFT_SLOT_GROUPS.forEach(g => {
      g.slots.forEach(s => {
        results.push({ value: s, label: s, group: g.group, badge: "Slot" });
      });
    });
    return results;
  } else if (type === 'entities') {
    return [
      ...MINECRAFT_ENTITY_TAGS.map(t => ({ value: t, label: t, group: "🏷️ Tag Generici (#tag)", badge: "Tag" })),
      ...MINECRAFT_NEGATIVE_TAGS.map(t => ({ value: t, label: t, group: "🚫 Tag Negativi (!#tag)", badge: "Neg Tag" })),
      ...MINECRAFT_NEGATIVE_ENTITIES.map(e => ({ value: e, label: e, group: "🚫 Entità Negative (!type)", badge: "Neg Entity" })),
      ...MINECRAFT_ENTITIES.map(e => ({ value: e, label: e.replace('minecraft:', ''), group: "👾 Entità Standard", badge: "Mob" }))
    ];
  } else if (type === 'biomes') {
    return MINECRAFT_BIOMES.map(b => ({ value: b, label: b.replace('minecraft:', ''), group: "🌍 Biomi", badge: "Biome" }));
  }
  return [];
}

function renderSearchableComboboxHtml(cardId, fieldName, type, currentValue, width = '180px', placeholder = 'Cerca...') {
  const safeVal = escapeHtml(currentValue || '');
  return `
    <div class="searchable-combobox-wrapper" id="combo_wrap_${cardId}_${fieldName}" style="width: ${width};">
      <input type="text"
             class="cmd-input searchable-input"
             style="width: 100%; font-size: 12px; padding: 5px 26px 5px 8px; color: #ffa600; font-family: 'Consolas', monospace;"
             value="${safeVal}"
             placeholder="${placeholder}"
             autocomplete="off"
             spellcheck="false"
             onfocus="openComboboxPopup('${cardId}', '${fieldName}', '${type}', this)"
             oninput="onComboboxInput('${cardId}', '${fieldName}', '${type}', this)"
             onkeydown="onComboboxKeydown(event, '${cardId}', '${fieldName}', '${type}', this)">
      <button type="button" class="combobox-arrow-btn" tabindex="-1" onclick="toggleComboboxPopup('${cardId}', '${fieldName}', '${type}', this.previousElementSibling)">▼</button>
      <div class="searchable-dropdown-popup" id="popup_${cardId}_${fieldName}" style="display: none;"></div>
    </div>
  `;
}

function openComboboxPopup(cardId, fieldName, type, inputEl) {
  closeAllComboboxPopups();
  const popup = document.getElementById(`popup_${cardId}_${fieldName}`);
  if (!popup) return;

  filterComboboxList(cardId, fieldName, type, inputEl.value.trim(), popup);
  popup.style.display = 'flex';
}

function toggleComboboxPopup(cardId, fieldName, type, inputEl) {
  const popup = document.getElementById(`popup_${cardId}_${fieldName}`);
  if (!popup) return;

  if (popup.style.display === 'flex') {
    popup.style.display = 'none';
  } else {
    inputEl.focus();
    openComboboxPopup(cardId, fieldName, type, inputEl);
  }
}

function onComboboxInput(cardId, fieldName, type, inputEl) {
  const popup = document.getElementById(`popup_${cardId}_${fieldName}`);
  if (popup) {
    filterComboboxList(cardId, fieldName, type, inputEl.value.trim(), popup);
    popup.style.display = 'flex';
  }
  handleParamChange(cardId, fieldName, inputEl.value);
}

function filterComboboxList(cardId, fieldName, type, query, popupEl) {
  const dataset = getComboboxDataset(type);
  const q = query.toLowerCase();

  let filtered = dataset;
  if (q.length > 0) {
    filtered = dataset.filter(item =>
      item.value.toLowerCase().includes(q) ||
      item.label.toLowerCase().includes(q) ||
      item.group.toLowerCase().includes(q)
    );
  }

  // Cap at 80 items for maximum performance
  const displayItems = filtered.slice(0, 80);

  if (displayItems.length === 0) {
    popupEl.innerHTML = `<div class="searchable-item-empty">Nessun risultato per "<strong>${escapeHtml(query)}</strong>"</div>`;
    return;
  }

  // Group items
  const grouped = {};
  displayItems.forEach(item => {
    if (!grouped[item.group]) grouped[item.group] = [];
    grouped[item.group].push(item);
  });

  let html = '';
  Object.keys(grouped).forEach(groupName => {
    html += `<div class="searchable-item-group-title">${groupName}</div>`;
    grouped[groupName].forEach(item => {
      let labelHtml = escapeHtml(item.label);
      if (q.length > 0) {
        const regex = new RegExp(`(${q.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')})`, 'gi');
        labelHtml = labelHtml.replace(regex, '<strong style="color: #ffd900; text-decoration: underline;">$1</strong>');
      }

      html += `
        <div class="searchable-item-option"
             data-val="${escapeHtml(item.value)}"
             onmousedown="selectComboboxOption('${cardId}', '${fieldName}', '${escapeHtml(item.value)}')">
          <span>${labelHtml}</span>
          <span class="searchable-item-badge">${escapeHtml(item.badge || '')}</span>
        </div>
      `;
    });
  });

  if (filtered.length > 80) {
    html += `<div class="searchable-item-empty" style="color: #666; font-size: 11px;">Mostrati primi 80 di ${filtered.length} risultati. Affina la ricerca.</div>`;
  }

  popupEl.innerHTML = html;
}

function selectComboboxOption(cardId, fieldName, value) {
  const wrapper = document.getElementById(`combo_wrap_${cardId}_${fieldName}`);
  if (wrapper) {
    const input = wrapper.querySelector('input');
    if (input) input.value = value;
    const popup = document.getElementById(`popup_${cardId}_${fieldName}`);
    if (popup) popup.style.display = 'none';
  }
  handleParamChange(cardId, fieldName, value);
}

function onComboboxKeydown(event, cardId, fieldName, type, inputEl) {
  const popup = document.getElementById(`popup_${cardId}_${fieldName}`);
  if (!popup || popup.style.display !== 'flex') {
    if (event.key === 'ArrowDown' || event.key === 'Enter') {
      openComboboxPopup(cardId, fieldName, type, inputEl);
    }
    return;
  }

  const options = Array.from(popup.querySelectorAll('.searchable-item-option'));
  if (options.length === 0) return;

  let activeIdx = options.findIndex(o => o.classList.contains('active'));

  if (event.key === 'ArrowDown') {
    event.preventDefault();
    if (activeIdx !== -1) options[activeIdx].classList.remove('active');
    activeIdx = (activeIdx + 1) % options.length;
    options[activeIdx].classList.add('active');
    options[activeIdx].scrollIntoView({ block: 'nearest' });
  } else if (event.key === 'ArrowUp') {
    event.preventDefault();
    if (activeIdx !== -1) options[activeIdx].classList.remove('active');
    activeIdx = (activeIdx - 1 + options.length) % options.length;
    options[activeIdx].classList.add('active');
    options[activeIdx].scrollIntoView({ block: 'nearest' });
  } else if (event.key === 'Enter') {
    event.preventDefault();
    if (activeIdx !== -1) {
      const val = options[activeIdx].getAttribute('data-val');
      selectComboboxOption(cardId, fieldName, val);
    } else if (options.length > 0) {
      const val = options[0].getAttribute('data-val');
      selectComboboxOption(cardId, fieldName, val);
    }
  } else if (event.key === 'Escape') {
    popup.style.display = 'none';
  }
}

function closeAllComboboxPopups() {
  document.querySelectorAll('.searchable-dropdown-popup').forEach(p => {
    p.style.display = 'none';
  });
}

// Global click outside listener
if (typeof document !== 'undefined') {
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.searchable-combobox-wrapper')) {
      closeAllComboboxPopups();
    }
  });
}

// ==========================================
// 3. ADVANCED TARGET SELECTOR COMPONENT
// ==========================================
function renderTargetSelectorHtml(params, onChange, fieldName = 'targets') {
  if (!params.targetBase) {
    if (params[fieldName] === '@s') params.targetBase = '@s';
    else if (params[fieldName] === '@p') params.targetBase = '@p';
    else if (params[fieldName] === '@a') params.targetBase = '@a';
    else if (params[fieldName] === '@r') params.targetBase = '@r';
    else if (params[fieldName] === '@n') params.targetBase = '@n';
    else if (typeof params[fieldName] === 'string' && params[fieldName].startsWith('@e')) {
      params.targetBase = '@e';
    } else {
      params.targetBase = params[fieldName] ? 'custom' : '@s';
      params.customTarget = params[fieldName] || '@s';
    }
  }

  const base = params.targetBase || '@s';
  const filters = params.selectorFilters || {};

  // For @a, @p, @r, type is invalid (they are player-only selectors)
  const isPlayerSelector = (base === '@a' || base === '@p' || base === '@r');
  if (isPlayerSelector && filters.type) {
    delete filters.type;
  }

  const activeKeys = Object.keys(filters);
  const availableFilters = SELECTOR_FILTER_TYPES.filter(f => !activeKeys.includes(f.key) && !(isPlayerSelector && f.key === 'type'));

  return `
    <div class="target-selector-wrapper">
      <div class="selector-top-row">
        <div class="input-pill-group">
          <label>Target:</label>
          <select class="cmd-select" onchange="${onChange}('targetBase', this.value)">
            <option value="@s" ${base === '@s' ? 'selected' : ''}>@s (Self / Executing)</option>
            <option value="@p" ${base === '@p' ? 'selected' : ''}>@p (Nearest Player)</option>
            <option value="@a" ${base === '@a' ? 'selected' : ''}>@a (All Players)</option>
            <option value="@r" ${base === '@r' ? 'selected' : ''}>@r (Random Player)</option>
            <option value="@n" ${base === '@n' ? 'selected' : ''}>@n (Nearest Entity 1.21+)</option>
            <option value="@e" ${base === '@e' ? 'selected' : ''}>@e (Entities / Mobs)</option>
            <option value="custom" ${base === 'custom' ? 'selected' : ''}>Custom / Name</option>
          </select>
        </div>

        ${base === 'custom' ? `
          <div class="input-pill-group">
            <label>Custom Selector:</label>
            <input type="text" class="cmd-input" value="${escapeHtml(params.customTarget || params[fieldName] || '@s')}" oninput="${onChange}('customTarget', this.value)" placeholder="@e[type=zombie], PlayerName">
          </div>
        ` : availableFilters.length > 0 ? `
          <div class="filter-add-bar">
            <select class="cmd-select" style="font-size: 11px; padding: 4px 22px 4px 8px;" id="filterSelect_${params.id || 'temp'}">
              ${availableFilters.map(f => `<option value="${f.key}">${f.label}</option>`).join('')}
            </select>
            <button type="button" class="action-btn btn-gold" style="padding: 4px 8px; font-size: 11px;" onclick="${onChange}('add_filter_action', this.previousElementSibling.value)">
              ➕ Aggiungi Filtro
            </button>
          </div>
        ` : ''}
      </div>

      ${base !== 'custom' && activeKeys.length > 0 ? `
        <div class="selector-filters-container">
          ${activeKeys.map(key => {
            const val = filters[key] || '';
            let inputControl = '';

            if (key === 'type') {
              inputControl = renderSearchableComboboxHtml(params.id || 'sel', 'filter_type', 'entities', val, '190px', 'Cerca mob o #tag...');
            } else if (key === 'sort') {
              inputControl = `
                <select class="cmd-select" style="font-size: 11px; padding: 3px 22px 3px 6px;" onchange="${onChange}('filter_sort', this.value)">
                  <option value="nearest" ${val === 'nearest' ? 'selected' : ''}>nearest</option>
                  <option value="furthest" ${val === 'furthest' ? 'selected' : ''}>furthest</option>
                  <option value="random" ${val === 'random' ? 'selected' : ''}>random</option>
                  <option value="arbitrary" ${val === 'arbitrary' ? 'selected' : ''}>arbitrary</option>
                </select>
              `;
            } else if (key === 'gamemode') {
              inputControl = `
                <select class="cmd-select" style="font-size: 11px; padding: 3px 22px 3px 6px;" onchange="${onChange}('filter_gamemode', this.value)">
                  <option value="survival" ${val === 'survival' ? 'selected' : ''}>survival</option>
                  <option value="creative" ${val === 'creative' ? 'selected' : ''}>creative</option>
                  <option value="adventure" ${val === 'adventure' ? 'selected' : ''}>adventure</option>
                  <option value="spectator" ${val === 'spectator' ? 'selected' : ''}>spectator</option>
                  <option value="!survival" ${val === '!survival' ? 'selected' : ''}>!survival</option>
                  <option value="!creative" ${val === '!creative' ? 'selected' : ''}>!creative</option>
                  <option value="!adventure" ${val === '!adventure' ? 'selected' : ''}>!adventure</option>
                  <option value="!spectator" ${val === '!spectator' ? 'selected' : ''}>!spectator</option>
                </select>
              `;
            } else if (key === 'limit') {
              inputControl = `<input type="number" class="cmd-input" style="width: 60px; font-size: 11px; padding: 3px 6px;" value="${escapeHtml(val)}" oninput="${onChange}('filter_limit', this.value)">`;
            } else if (key === 'nbt') {
              inputControl = `<input type="text" class="cmd-input" list="commonNbtList" style="width: 130px; font-size: 11px; padding: 3px 6px;" value="${escapeHtml(val)}" oninput="${onChange}('filter_nbt', this.value)" placeholder="{NoAI:1b}">`;
            } else {
              inputControl = `<input type="text" class="cmd-input" style="min-width: 75px; font-size: 11px; padding: 3px 6px;" value="${escapeHtml(val)}" oninput="${onChange}('filter_' + '${key}', this.value)">`;
            }

            return `
              <div class="filter-pill">
                <label>${key}=</label>
                ${inputControl}
                <button type="button" class="card-icon-btn btn-del" onclick="${onChange}('remove_filter', '${key}')" title="Remove filter">✕</button>
              </div>
            `;
          }).join('')}
        </div>
      ` : ''}
    </div>
  `;
}

function compileTargetSelector(params, defaultVal = '@s', fieldName = 'targets') {
  const base = params.targetBase || (params[fieldName] ? null : defaultVal);
  if (!base) return params[fieldName] || defaultVal;
  if (base === 'custom') return params.customTarget || params[fieldName] || defaultVal;

  const filters = params.selectorFilters || {};
  const isPlayerSelector = (base === '@a' || base === '@p' || base === '@r');
  const filterEntries = [];

  // Legacy fallback if entityType exists and not yet converted
  if (base === '@e' && params.entityType && params.entityType !== 'all' && !filters.type) {
    filterEntries.push(`type=${params.entityType}`);
  }
  if (base === '@e' && params.selectorLimit === '1' && !filters.limit) {
    filterEntries.push('limit=1');
  }

  // Collect all active filters
  Object.keys(filters).forEach(key => {
    if (isPlayerSelector && key === 'type') return; // Type is never compiled for player selectors

    const val = filters[key];
    if (val !== undefined && val !== null && String(val).trim().length > 0) {
      filterEntries.push(`${key}=${val}`);
    }
  });

  if (filterEntries.length > 0) {
    return `${base}[${filterEntries.join(',')}]`;
  }
  return base;
}

// ==========================================
// 4. SUBCOMMAND DEFINITIONS & SCHEMAS
// ==========================================
const SUBCOMMAND_TYPES = {
  // --- CONTEXT ---
  as: {
    category: "context",
    name: "as <targets>",
    desc: "Changes the executing entity (affects @s, permissions)",
    defaultParams: { targetBase: "@a", selectorFilters: {}, targets: "@a" },
    renderInputs: (params, onChange, item) => renderTargetSelectorHtml(Object.assign({ id: item.id }, params), onChange, 'targets'),
    compile: (params) => `as ${compileTargetSelector(params, '@a', 'targets')}`
  },
  at: {
    category: "context",
    name: "at <targets>",
    desc: "Executes at the position, rotation, and dimension of the target",
    defaultParams: { targetBase: "@s", selectorFilters: {}, targets: "@s" },
    renderInputs: (params, onChange, item) => renderTargetSelectorHtml(Object.assign({ id: item.id }, params), onChange, 'targets'),
    compile: (params) => `at ${compileTargetSelector(params, '@s', 'targets')}`
  },
  in: {
    category: "context",
    name: "in <dimension>",
    desc: "Changes the execution dimension without altering coordinates",
    defaultParams: { dimension: "minecraft:overworld" },
    renderInputs: (params, onChange) => `
      <div class="input-pill-group">
        <label>Dimension:</label>
        <select class="cmd-select" onchange="${onChange}('dimension', this.value)">
          <option value="minecraft:overworld" ${params.dimension === 'minecraft:overworld' ? 'selected' : ''}>minecraft:overworld</option>
          <option value="minecraft:the_nether" ${params.dimension === 'minecraft:the_nether' ? 'selected' : ''}>minecraft:the_nether</option>
          <option value="minecraft:the_end" ${params.dimension === 'minecraft:the_end' ? 'selected' : ''}>minecraft:the_end</option>
        </select>
      </div>
    `,
    compile: (params) => `in ${params.dimension || 'minecraft:overworld'}`
  },
  on: {
    category: "context",
    name: "on <relation>",
    desc: "Changes executing entity to a related entity (Java 1.19.4+)",
    defaultParams: { relation: "attacker" },
    renderInputs: (params, onChange) => `
      <div class="input-pill-group">
        <label>Relation:</label>
        <select class="cmd-select" onchange="${onChange}('relation', this.value)">
          <option value="attacker" ${params.relation === 'attacker' ? 'selected' : ''}>attacker (Last entity that damaged this)</option>
          <option value="controller" ${params.relation === 'controller' ? 'selected' : ''}>controller (Entity controlling this mount)</option>
          <option value="leasher" ${params.relation === 'leasher' ? 'selected' : ''}>leasher (Entity holding the lead)</option>
          <option value="origin" ${params.relation === 'origin' ? 'selected' : ''}>origin (Summoner or shooter of projectile)</option>
          <option value="owner" ${params.relation === 'owner' ? 'selected' : ''}>owner (Tameable animal owner)</option>
          <option value="passengers" ${params.relation === 'passengers' ? 'selected' : ''}>passengers (Entities riding this)</option>
          <option value="target" ${params.relation === 'target' ? 'selected' : ''}>target (Entity mob is attacking)</option>
          <option value="vehicle" ${params.relation === 'vehicle' ? 'selected' : ''}>vehicle (Entity this is riding)</option>
        </select>
      </div>
    `,
    compile: (params) => `on ${params.relation || 'attacker'}`
  },
  summon: {
    category: "context",
    name: "summon <entity>",
    desc: "Spawns a new entity and executes context as it (Java 1.20+)",
    defaultParams: { entity: "minecraft:marker" },
    renderInputs: (params, onChange, item) => `
      <div class="input-pill-group">
        <label>Entity:</label>
        ${renderSearchableComboboxHtml(item.id, 'entity', 'entities', params.entity || 'minecraft:marker', '200px', 'Cerca entità o mob...')}
      </div>
    `,
    compile: (params) => `summon ${params.entity || 'minecraft:marker'}`
  },

  // --- POSITION & ROTATION ---
  positioned: {
    category: "position",
    name: "positioned <pos>",
    desc: "Changes execution position coordinates",
    defaultParams: { mode: "coords", pos: "~ ~1 ~", targetBase: "@s", selectorFilters: {}, targets: "@s", heightmap: "world_surface" },
    renderInputs: (params, onChange, item) => `
      <div class="input-pill-group">
        <label>Mode:</label>
        <select class="cmd-select" onchange="${onChange}('mode', this.value)">
          <option value="coords" ${params.mode === 'coords' ? 'selected' : ''}>Coordinates (~ ~ ~)</option>
          <option value="as" ${params.mode === 'as' ? 'selected' : ''}>as Target</option>
          <option value="over" ${params.mode === 'over' ? 'selected' : ''}>over Heightmap</option>
        </select>
      </div>
      ${params.mode === 'coords' ? `
        <div class="input-pill-group">
          <label>Position:</label>
          <input type="text" class="cmd-input" value="${escapeHtml(params.pos)}" oninput="${onChange}('pos', this.value)" placeholder="~ ~ ~">
        </div>
      ` : params.mode === 'as' ? `
        ${renderTargetSelectorHtml(Object.assign({ id: item.id }, params), onChange, 'targets')}
      ` : `
        <div class="input-pill-group">
          <label>Heightmap:</label>
          <select class="cmd-select" onchange="${onChange}('heightmap', this.value)">
            <option value="world_surface" ${params.heightmap === 'world_surface' ? 'selected' : ''}>world_surface</option>
            <option value="motion_blocking" ${params.heightmap === 'motion_blocking' ? 'selected' : ''}>motion_blocking</option>
            <option value="motion_blocking_no_leaves" ${params.heightmap === 'motion_blocking_no_leaves' ? 'selected' : ''}>motion_blocking_no_leaves</option>
            <option value="ocean_floor" ${params.heightmap === 'ocean_floor' ? 'selected' : ''}>ocean_floor</option>
          </select>
        </div>
      `}
    `,
    compile: (params) => {
      if (params.mode === 'as') return `positioned as ${compileTargetSelector(params, '@s', 'targets')}`;
      if (params.mode === 'over') return `positioned over ${params.heightmap || 'world_surface'}`;
      return `positioned ${params.pos || '~ ~ ~'}`;
    }
  },
  align: {
    category: "position",
    name: "align <axes>",
    desc: "Truncates coordinates to block corners (floors coordinates)",
    defaultParams: { axes: "xyz" },
    renderInputs: (params, onChange) => `
      <div class="input-pill-group">
        <label>Axes to Align:</label>
        <select class="cmd-select" onchange="${onChange}('axes', this.value)">
          <option value="xyz" ${params.axes === 'xyz' ? 'selected' : ''}>xyz (All axes)</option>
          <option value="xz" ${params.axes === 'xz' ? 'selected' : ''}>xz (Horizontal plane)</option>
          <option value="x" ${params.axes === 'x' ? 'selected' : ''}>x</option>
          <option value="y" ${params.axes === 'y' ? 'selected' : ''}>y</option>
          <option value="z" ${params.axes === 'z' ? 'selected' : ''}>z</option>
          <option value="xy" ${params.axes === 'xy' ? 'selected' : ''}>xy</option>
          <option value="yz" ${params.axes === 'yz' ? 'selected' : ''}>yz</option>
        </select>
      </div>
    `,
    compile: (params) => `align ${params.axes || 'xyz'}`
  },
  anchored: {
    category: "position",
    name: "anchored (feet|eyes)",
    desc: "Sets anchor point for facing and raycasting",
    defaultParams: { anchor: "eyes" },
    renderInputs: (params, onChange) => `
      <div class="input-pill-group">
        <label>Anchor:</label>
        <select class="cmd-select" onchange="${onChange}('anchor', this.value)">
          <option value="eyes" ${params.anchor === 'eyes' ? 'selected' : ''}>eyes (Eye height)</option>
          <option value="feet" ${params.anchor === 'feet' ? 'selected' : ''}>feet (Feet position)</option>
        </select>
      </div>
    `,
    compile: (params) => `anchored ${params.anchor || 'eyes'}`
  },
  facing: {
    category: "position",
    name: "facing (<pos> | entity <targets> <anchor>)",
    desc: "Rotates execution towards a coordinate or entity",
    defaultParams: { mode: "pos", pos: "~ ~ ~", targetBase: "@p", selectorFilters: {}, targets: "@p", anchor: "eyes" },
    renderInputs: (params, onChange, item) => `
      <div class="input-pill-group">
        <label>Mode:</label>
        <select class="cmd-select" onchange="${onChange}('mode', this.value)">
          <option value="pos" ${params.mode === 'pos' ? 'selected' : ''}>Coordinate Position</option>
          <option value="entity" ${params.mode === 'entity' ? 'selected' : ''}>Entity</option>
        </select>
      </div>
      ${params.mode === 'pos' ? `
        <div class="input-pill-group">
          <label>Position:</label>
          <input type="text" class="cmd-input" value="${escapeHtml(params.pos)}" oninput="${onChange}('pos', this.value)" placeholder="~ ~ ~">
        </div>
      ` : `
        ${renderTargetSelectorHtml(Object.assign({ id: item.id }, params), onChange, 'targets')}
        <div class="input-pill-group">
          <label>Anchor:</label>
          <select class="cmd-select" onchange="${onChange}('anchor', this.value)">
            <option value="eyes" ${params.anchor === 'eyes' ? 'selected' : ''}>eyes</option>
            <option value="feet" ${params.anchor === 'feet' ? 'selected' : ''}>feet</option>
          </select>
        </div>
      `}
    `,
    compile: (params) => {
      if (params.mode === 'entity') return `facing entity ${compileTargetSelector(params, '@p', 'targets')} ${params.anchor || 'eyes'}`;
      return `facing ${params.pos || '~ ~ ~'}`;
    }
  },
  rotated: {
    category: "position",
    name: "rotated (<rot> | as <targets>)",
    desc: "Sets rotation angles (yaw & pitch) or copies from entity",
    defaultParams: { mode: "as", rot: "~ 0", targetBase: "@p", selectorFilters: {}, targets: "@p" },
    renderInputs: (params, onChange, item) => `
      <div class="input-pill-group">
        <label>Mode:</label>
        <select class="cmd-select" onchange="${onChange}('mode', this.value)">
          <option value="as" ${params.mode === 'as' ? 'selected' : ''}>as Target</option>
          <option value="rot" ${params.mode === 'rot' ? 'selected' : ''}>Angles (~yaw ~pitch)</option>
        </select>
      </div>
      ${params.mode === 'as' ? `
        ${renderTargetSelectorHtml(Object.assign({ id: item.id }, params), onChange, 'targets')}
      ` : `
        <div class="input-pill-group">
          <label>Yaw Pitch:</label>
          <input type="text" class="cmd-input" value="${escapeHtml(params.rot)}" oninput="${onChange}('rot', this.value)" placeholder="~ 0">
        </div>
      `}
    `,
    compile: (params) => {
      if (params.mode === 'rot') return `rotated ${params.rot || '~ 0'}`;
      return `rotated as ${compileTargetSelector(params, '@p', 'targets')}`;
    }
  },

  // --- STORE ---
  store: {
    category: "store",
    name: "store (result|success) ...",
    desc: "Stores command numeric return value into score, NBT, storage, or bossbar",
    defaultParams: {
      mode: "result",
      targetType: "score",
      targetBase: "@s",
      selectorFilters: {},
      target: "@s",
      objective: "my_score",
      pos: "~ ~ ~",
      path: "",
      storage: "custom:data",
      bossbar: "minecraft:custom_bar",
      bossbarMode: "value",
      type: "int",
      scale: "1"
    },
    renderInputs: (params, onChange, item) => `
      <div class="input-pill-group">
        <button type="button" class="toggle-pill ${params.mode === 'result' ? 'active-if' : 'active-unless'}" onclick="${onChange}('mode', '${params.mode === 'result' ? 'success' : 'result'}')">
          ${params.mode.toUpperCase()}
        </button>
      </div>
      <div class="input-pill-group">
        <label>Target Type:</label>
        <select class="cmd-select" onchange="${onChange}('targetType', this.value)">
          <option value="score" ${params.targetType === 'score' ? 'selected' : ''}>score (Scoreboard)</option>
          <option value="entity" ${params.targetType === 'entity' ? 'selected' : ''}>entity (Entity NBT)</option>
          <option value="block" ${params.targetType === 'block' ? 'selected' : ''}>block (Block NBT)</option>
          <option value="storage" ${params.targetType === 'storage' ? 'selected' : ''}>storage (Command Storage)</option>
          <option value="bossbar" ${params.targetType === 'bossbar' ? 'selected' : ''}>bossbar</option>
        </select>
      </div>

      ${params.targetType === 'score' ? `
        ${renderTargetSelectorHtml(Object.assign({ id: item.id }, params), onChange, 'target')}
        <div class="input-pill-group">
          <label>Objective:</label>
          <input type="text" class="cmd-input" value="${escapeHtml(params.objective)}" oninput="${onChange}('objective', this.value)" placeholder="objective_name">
        </div>
      ` : params.targetType === 'entity' ? `
        ${renderTargetSelectorHtml(Object.assign({ id: item.id }, params), onChange, 'target')}
        <div class="input-pill-group">
          <label>NBT Path:</label>
          <input type="text" class="cmd-input" list="commonNbtList" value="${escapeHtml(params.path || '')}" oninput="${onChange}('path', this.value)" placeholder="es. Health, Pos[0], CustomName">
          <button type="button" class="card-icon-btn" style="width: auto; padding: 2px 6px; font-size: 11px; color: var(--color-orange);" onclick="openDataGetModal()" title="View NBT dictionary">📖 NBT</button>
        </div>
        <div class="input-pill-group">
          <label>Type:</label>
          <select class="cmd-select" onchange="${onChange}('type', this.value)">
            <option value="byte" ${params.type === 'byte' ? 'selected' : ''}>byte</option>
            <option value="short" ${params.type === 'short' ? 'selected' : ''}>short</option>
            <option value="int" ${params.type === 'int' ? 'selected' : ''}>int</option>
            <option value="long" ${params.type === 'long' ? 'selected' : ''}>long</option>
            <option value="float" ${params.type === 'float' ? 'selected' : ''}>float</option>
            <option value="double" ${params.type === 'double' ? 'selected' : ''}>double</option>
          </select>
        </div>
        <div class="input-pill-group">
          <label>Scale:</label>
          <input type="text" class="cmd-input" style="width: 50px;" value="${escapeHtml(params.scale)}" oninput="${onChange}('scale', this.value)" placeholder="1">
        </div>
      ` : params.targetType === 'block' ? `
        <div class="input-pill-group">
          <label>Pos:</label>
          <input type="text" class="cmd-input" value="${escapeHtml(params.pos)}" oninput="${onChange}('pos', this.value)" placeholder="~ ~ ~">
        </div>
        <div class="input-pill-group">
          <label>NBT Path:</label>
          <input type="text" class="cmd-input" list="commonNbtList" value="${escapeHtml(params.path || '')}" oninput="${onChange}('path', this.value)" placeholder="es. Items[0].Count, BurnTime">
          <button type="button" class="card-icon-btn" style="width: auto; padding: 2px 6px; font-size: 11px; color: var(--color-orange);" onclick="openDataGetModal()" title="View NBT dictionary">📖 NBT</button>
        </div>
        <div class="input-pill-group">
          <label>Type:</label>
          <select class="cmd-select" onchange="${onChange}('type', this.value)">
            <option value="int" ${params.type === 'int' ? 'selected' : ''}>int</option>
            <option value="float" ${params.type === 'float' ? 'selected' : ''}>float</option>
            <option value="double" ${params.type === 'double' ? 'selected' : ''}>double</option>
          </select>
        </div>
        <div class="input-pill-group">
          <label>Scale:</label>
          <input type="text" class="cmd-input" style="width: 50px;" value="${escapeHtml(params.scale)}" oninput="${onChange}('scale', this.value)" placeholder="1">
        </div>
      ` : params.targetType === 'storage' ? `
        <div class="input-pill-group">
          <label>Storage:</label>
          <input type="text" class="cmd-input" value="${escapeHtml(params.storage)}" oninput="${onChange}('storage', this.value)" placeholder="namespace:key">
        </div>
        <div class="input-pill-group">
          <label>Path:</label>
          <input type="text" class="cmd-input" list="commonNbtList" value="${escapeHtml(params.path || '')}" oninput="${onChange}('path', this.value)" placeholder="es. my.data.count">
          <button type="button" class="card-icon-btn" style="width: auto; padding: 2px 6px; font-size: 11px; color: var(--color-orange);" onclick="openDataGetModal()" title="View NBT dictionary">📖 NBT</button>
        </div>
        <div class="input-pill-group">
          <label>Scale:</label>
          <input type="text" class="cmd-input" style="width: 50px;" value="${escapeHtml(params.scale)}" oninput="${onChange}('scale', this.value)" placeholder="1">
        </div>
      ` : `
        <div class="input-pill-group">
          <label>Bossbar ID:</label>
          <input type="text" class="cmd-input" value="${escapeHtml(params.bossbar)}" oninput="${onChange}('bossbar', this.value)" placeholder="minecraft:custom_bar">
        </div>
        <div class="input-pill-group">
          <label>Mode:</label>
          <select class="cmd-select" onchange="${onChange}('bossbarMode', this.value)">
            <option value="value" ${params.bossbarMode === 'value' ? 'selected' : ''}>value (Current value)</option>
            <option value="max" ${params.bossbarMode === 'max' ? 'selected' : ''}>max (Max value)</option>
          </select>
        </div>
      `}
    `,
    compile: (params) => {
      const mode = params.mode || 'result';
      if (params.targetType === 'score') {
        return `store ${mode} score ${compileTargetSelector(params, '@s', 'target')} ${params.objective || 'score'}`;
      } else if (params.targetType === 'entity') {
        return `store ${mode} entity ${compileTargetSelector(params, '@s', 'target')} ${params.path || 'Health'} ${params.type || 'int'} ${params.scale || '1'}`;
      } else if (params.targetType === 'block') {
        return `store ${mode} block ${params.pos || '~ ~ ~'} ${params.path || 'Items[0].Count'} ${params.type || 'int'} ${params.scale || '1'}`;
      } else if (params.targetType === 'storage') {
        return `store ${mode} storage ${params.storage || 'custom:data'} ${params.path || 'val'} ${params.type || 'int'} ${params.scale || '1'}`;
      } else if (params.targetType === 'bossbar') {
        return `store ${mode} bossbar ${params.bossbar || 'minecraft:custom'} ${params.bossbarMode || 'value'}`;
      }
      return `store ${mode} score @s score`;
    }
  },

  // --- CONDITIONS (if / unless) ---
  condition_block: {
    category: "condition",
    name: "if/unless block <pos> <block>",
    desc: "Checks if a block matches ID/blockstate at coordinates",
    defaultParams: { condition: "if", pos: "~ ~-1 ~", block: "minecraft:diamond_block" },
    renderInputs: (params, onChange, item) => `
      <div class="input-pill-group">
        <button type="button" class="toggle-pill ${params.condition === 'if' ? 'active-if' : 'active-unless'}" onclick="${onChange}('condition', '${params.condition === 'if' ? 'unless' : 'if'}')">
          ${params.condition.toUpperCase()}
        </button>
        <span style="font-weight: bold; color: #ffaa00; font-size: 11px;">BLOCK</span>
      </div>
      <div class="input-pill-group">
        <label>Pos:</label>
        <input type="text" class="cmd-input" value="${escapeHtml(params.pos)}" oninput="${onChange}('pos', this.value)" placeholder="~ ~-1 ~">
      </div>
      <div class="input-pill-group">
        <label>Block ID:</label>
        ${renderSearchableComboboxHtml(item.id, 'block', 'items', params.block || 'minecraft:stone', '190px', 'Cerca blocco...')}
      </div>
    `,
    compile: (params) => `${params.condition || 'if'} block ${params.pos || '~ ~-1 ~'} ${params.block || 'minecraft:stone'}`
  },

  condition_blocks: {
    category: "condition",
    name: "if/unless blocks <start> <end> <dest> (all|masked)",
    desc: "Compares a volume of blocks between start and end with destination",
    defaultParams: { condition: "if", startPos: "~ ~ ~", endPos: "~2 ~2 ~2", destPos: "~ ~3 ~", mode: "all" },
    renderInputs: (params, onChange) => `
      <div class="input-pill-group">
        <button type="button" class="toggle-pill ${params.condition === 'if' ? 'active-if' : 'active-unless'}" onclick="${onChange}('condition', '${params.condition === 'if' ? 'unless' : 'if'}')">
          ${params.condition.toUpperCase()}
        </button>
        <span style="font-weight: bold; color: #ffaa00; font-size: 11px;">BLOCKS (AREA)</span>
      </div>
      <div class="input-pill-group">
        <label>Start:</label>
        <input type="text" class="cmd-input" style="width: 75px;" value="${escapeHtml(params.startPos)}" oninput="${onChange}('startPos', this.value)" placeholder="~ ~ ~">
      </div>
      <div class="input-pill-group">
        <label>End:</label>
        <input type="text" class="cmd-input" style="width: 75px;" value="${escapeHtml(params.endPos)}" oninput="${onChange}('endPos', this.value)" placeholder="~2 ~2 ~2">
      </div>
      <div class="input-pill-group">
        <label>Dest:</label>
        <input type="text" class="cmd-input" style="width: 75px;" value="${escapeHtml(params.destPos)}" oninput="${onChange}('destPos', this.value)" placeholder="~ ~3 ~">
      </div>
      <div class="input-pill-group">
        <label>Mode:</label>
        <select class="cmd-select" onchange="${onChange}('mode', this.value)">
          <option value="all" ${params.mode === 'all' ? 'selected' : ''}>all (All blocks)</option>
          <option value="masked" ${params.mode === 'masked' ? 'selected' : ''}>masked (Ignore source air)</option>
        </select>
      </div>
    `,
    compile: (params) => `${params.condition || 'if'} blocks ${params.startPos || '~ ~ ~'} ${params.endPos || '~ ~ ~'} ${params.destPos || '~ ~ ~'} ${params.mode || 'all'}`
  },

  condition_entity: {
    category: "condition",
    name: "if/unless entity <targets>",
    desc: "Checks if specified entity exists / is matched",
    defaultParams: { condition: "if", targetBase: "@e", selectorFilters: {}, targets: "@e" },
    renderInputs: (params, onChange, item) => `
      <div class="input-pill-group">
        <button type="button" class="toggle-pill ${params.condition === 'if' ? 'active-if' : 'active-unless'}" onclick="${onChange}('condition', '${params.condition === 'if' ? 'unless' : 'if'}')">
          ${params.condition.toUpperCase()}
        </button>
        <span style="font-weight: bold; color: #ffaa00; font-size: 11px;">ENTITY</span>
      </div>
      ${renderTargetSelectorHtml(Object.assign({ id: item.id }, params), onChange, 'targets')}
    `,
    compile: (params) => `${params.condition || 'if'} entity ${compileTargetSelector(params, '@e', 'targets')}`
  },

  condition_score: {
    category: "condition",
    name: "if/unless score ...",
    desc: "Compares scoreboard scores between entities or matches integer range",
    defaultParams: {
      condition: "if",
      mode: "matches",
      targetBase: "@s",
      selectorFilters: {},
      target: "@s",
      objective: "points",
      range: "10..",
      op: ">=",
      source: "#target",
      sourceObjective: "points"
    },
    renderInputs: (params, onChange, item) => `
      <div class="input-pill-group">
        <button type="button" class="toggle-pill ${params.condition === 'if' ? 'active-if' : 'active-unless'}" onclick="${onChange}('condition', '${params.condition === 'if' ? 'unless' : 'if'}')">
          ${params.condition.toUpperCase()}
        </button>
        <label>Mode:</label>
        <select class="cmd-select" onchange="${onChange}('mode', this.value)">
          <option value="matches" ${params.mode === 'matches' ? 'selected' : ''}>matches Range (e.g. 5..10)</option>
          <option value="compare" ${params.mode === 'compare' ? 'selected' : ''}>compare with Score</option>
        </select>
      </div>
      ${renderTargetSelectorHtml(Object.assign({ id: item.id }, params), onChange, 'target')}
      <div class="input-pill-group">
        <label>Objective:</label>
        <input type="text" class="cmd-input" value="${escapeHtml(params.objective)}" oninput="${onChange}('objective', this.value)" placeholder="objective">
      </div>

      ${params.mode === 'matches' ? `
        <div class="input-pill-group">
          <label>Range:</label>
          <input type="text" class="cmd-input" value="${escapeHtml(params.range)}" oninput="${onChange}('range', this.value)" placeholder="10.., 1..5, 0">
        </div>
      ` : `
        <div class="input-pill-group">
          <label>Op:</label>
          <select class="cmd-select" onchange="${onChange}('op', this.value)">
            <option value="=" ${params.op === '=' ? 'selected' : ''}>=</option>
            <option value="<" ${params.op === '<' ? 'selected' : ''}>&lt;</option>
            <option value="<=" ${params.op === '<=' ? 'selected' : ''}>&lt;=</option>
            <option value=">" ${params.op === '>' ? 'selected' : ''}>&gt;</option>
            <option value=">=" ${params.op === '>=' ? 'selected' : ''}>&gt;=</option>
          </select>
        </div>
        <div class="input-pill-group">
          <label>Source Target:</label>
          <input type="text" class="cmd-input" value="${escapeHtml(params.source)}" oninput="${onChange}('source', this.value)" placeholder="#global">
        </div>
        <div class="input-pill-group">
          <label>Source Objective:</label>
          <input type="text" class="cmd-input" value="${escapeHtml(params.sourceObjective)}" oninput="${onChange}('sourceObjective', this.value)" placeholder="objective">
        </div>
      `}
    `,
    compile: (params) => {
      const cond = params.condition || 'if';
      const tgt = compileTargetSelector(params, '@s', 'target');
      if (params.mode === 'compare') {
        return `${cond} score ${tgt} ${params.objective || 'score'} ${params.op || '='} ${params.source || '#source'} ${params.sourceObjective || params.objective || 'score'}`;
      }
      return `${cond} score ${tgt} ${params.objective || 'score'} matches ${params.range || '1..'}`;
    }
  },

  condition_data: {
    category: "condition",
    name: "if/unless data (block|entity|storage)",
    desc: "Checks if an NBT path exists and is not null/empty",
    defaultParams: { condition: "if", type: "entity", targetBase: "@s", selectorFilters: {}, target: "@s", pos: "~ ~ ~", storage: "custom:data", path: "" },
    renderInputs: (params, onChange, item) => `
      <div class="input-pill-group">
        <button type="button" class="toggle-pill ${params.condition === 'if' ? 'active-if' : 'active-unless'}" onclick="${onChange}('condition', '${params.condition === 'if' ? 'unless' : 'if'}')">
          ${params.condition.toUpperCase()}
        </button>
        <label>Data Type:</label>
        <select class="cmd-select" onchange="${onChange}('type', this.value)">
          <option value="entity" ${params.type === 'entity' ? 'selected' : ''}>entity</option>
          <option value="block" ${params.type === 'block' ? 'selected' : ''}>block</option>
          <option value="storage" ${params.type === 'storage' ? 'selected' : ''}>storage</option>
        </select>
      </div>
      ${params.type === 'entity' ? `
        ${renderTargetSelectorHtml(Object.assign({ id: item.id }, params), onChange, 'target')}
      ` : params.type === 'block' ? `
        <div class="input-pill-group">
          <label>Pos:</label>
          <input type="text" class="cmd-input" value="${escapeHtml(params.pos)}" oninput="${onChange}('pos', this.value)" placeholder="~ ~ ~">
        </div>
      ` : `
        <div class="input-pill-group">
          <label>Storage:</label>
          <input type="text" class="cmd-input" value="${escapeHtml(params.storage)}" oninput="${onChange}('storage', this.value)" placeholder="custom:data">
        </div>
      `}
      <div class="input-pill-group">
        <label>NBT Path:</label>
        <input type="text" class="cmd-input" list="commonNbtList" value="${escapeHtml(params.path || '')}" oninput="${onChange}('path', this.value)" placeholder="es. CustomName, SelectedItem, Pos[0]">
        <button type="button" class="card-icon-btn" style="width: auto; padding: 2px 6px; font-size: 11px; color: var(--color-orange);" onclick="openDataGetModal()" title="View NBT dictionary">📖 NBT</button>
      </div>
    `,
    compile: (params) => {
      const cond = params.condition || 'if';
      if (params.type === 'block') return `${cond} data block ${params.pos || '~ ~ ~'} ${params.path || 'Items'}`;
      if (params.type === 'storage') return `${cond} data storage ${params.storage || 'custom:data'} ${params.path || 'val'}`;
      return `${cond} data entity ${compileTargetSelector(params, '@s', 'target')} ${params.path || 'SelectedItem'}`;
    }
  },

  condition_biome: {
    category: "condition",
    name: "if/unless biome <pos> <biome>",
    desc: "Checks if a coordinate is inside a specific biome (Java 1.19+)",
    defaultParams: { condition: "if", pos: "~ ~ ~", biome: "minecraft:plains" },
    renderInputs: (params, onChange, item) => `
      <div class="input-pill-group">
        <button type="button" class="toggle-pill ${params.condition === 'if' ? 'active-if' : 'active-unless'}" onclick="${onChange}('condition', '${params.condition === 'if' ? 'unless' : 'if'}')">
          ${params.condition.toUpperCase()}
        </button>
        <span style="font-weight: bold; color: #ffaa00; font-size: 11px;">BIOME</span>
      </div>
      <div class="input-pill-group">
        <label>Pos:</label>
        <input type="text" class="cmd-input" value="${escapeHtml(params.pos)}" oninput="${onChange}('pos', this.value)" placeholder="~ ~ ~">
      </div>
      <div class="input-pill-group">
        <label>Biome:</label>
        ${renderSearchableComboboxHtml(item.id, 'biome', 'biomes', params.biome || 'minecraft:plains', '190px', 'Cerca bioma...')}
      </div>
    `,
    compile: (params) => `${params.condition || 'if'} biome ${params.pos || '~ ~ ~'} ${params.biome || 'minecraft:plains'}`
  },

  condition_dimension: {
    category: "condition",
    name: "if/unless dimension <dim>",
    desc: "Checks if execution context is inside a dimension (Java 1.19+)",
    defaultParams: { condition: "if", dimension: "minecraft:overworld" },
    renderInputs: (params, onChange) => `
      <div class="input-pill-group">
        <button type="button" class="toggle-pill ${params.condition === 'if' ? 'active-if' : 'active-unless'}" onclick="${onChange}('condition', '${params.condition === 'if' ? 'unless' : 'if'}')">
          ${params.condition.toUpperCase()}
        </button>
        <label>Dimension:</label>
        <select class="cmd-select" onchange="${onChange}('dimension', this.value)">
          <option value="minecraft:overworld" ${params.dimension === 'minecraft:overworld' ? 'selected' : ''}>minecraft:overworld</option>
          <option value="minecraft:the_nether" ${params.dimension === 'minecraft:the_nether' ? 'selected' : ''}>minecraft:the_nether</option>
          <option value="minecraft:the_end" ${params.dimension === 'minecraft:the_end' ? 'selected' : ''}>minecraft:the_end</option>
        </select>
      </div>
    `,
    compile: (params) => `${params.condition || 'if'} dimension ${params.dimension || 'minecraft:overworld'}`
  },

  condition_loaded: {
    category: "condition",
    name: "if/unless loaded <pos>",
    desc: "Checks if the chunk at given coordinates is currently loaded (Java 1.19+)",
    defaultParams: { condition: "if", pos: "~ ~ ~" },
    renderInputs: (params, onChange) => `
      <div class="input-pill-group">
        <button type="button" class="toggle-pill ${params.condition === 'if' ? 'active-if' : 'active-unless'}" onclick="${onChange}('condition', '${params.condition === 'if' ? 'unless' : 'if'}')">
          ${params.condition.toUpperCase()}
        </button>
        <span style="font-weight: bold; color: #ffaa00; font-size: 11px;">LOADED</span>
      </div>
      <div class="input-pill-group">
        <label>Pos:</label>
        <input type="text" class="cmd-input" value="${escapeHtml(params.pos)}" oninput="${onChange}('pos', this.value)" placeholder="~ ~ ~">
      </div>
    `,
    compile: (params) => `${params.condition || 'if'} loaded ${params.pos || '~ ~ ~'}`
  },

  condition_items: {
    category: "condition",
    name: "if/unless items ... (1.20.5+)",
    desc: "Checks item components/type in inventory or container slots",
    defaultParams: { condition: "if", targetType: "entity", targetBase: "@s", selectorFilters: {}, target: "@s", pos: "~ ~ ~", slot: "weapon.mainhand", item: "*" },
    renderInputs: (params, onChange, item) => `
      <div class="input-pill-group">
        <button type="button" class="toggle-pill ${params.condition === 'if' ? 'active-if' : 'active-unless'}" onclick="${onChange}('condition', '${params.condition === 'if' ? 'unless' : 'if'}')">
          ${params.condition.toUpperCase()}
        </button>
      </div>
      <div class="input-pill-group">
        <label>Target Type:</label>
        <select class="cmd-select" onchange="${onChange}('targetType', this.value)">
          <option value="entity" ${params.targetType === 'entity' ? 'selected' : ''}>entity</option>
          <option value="block" ${params.targetType === 'block' ? 'selected' : ''}>block</option>
        </select>
      </div>
      ${params.targetType === 'entity' ? `
        ${renderTargetSelectorHtml(Object.assign({ id: item.id }, params), onChange, 'target')}
      ` : `
        <div class="input-pill-group">
          <label>Pos:</label>
          <input type="text" class="cmd-input" value="${escapeHtml(params.pos)}" oninput="${onChange}('pos', this.value)" placeholder="~ ~ ~">
        </div>
      `}
      <div class="input-pill-group">
        <label>Slot:</label>
        ${renderSearchableComboboxHtml(item.id, 'slot', 'slots', params.slot || 'weapon.mainhand', '180px', 'Cerca slot...') }
      </div>
      <div class="input-pill-group">
        <label>Item / Tag:</label>
        ${renderSearchableComboboxHtml(item.id, 'item', 'items', params.item || '*', '210px', 'Cerca item o #tag...') }
      </div>
    `,
    compile: (params) => {
      const cond = params.condition || 'if';
      const target = params.targetType === 'entity' ? `entity ${compileTargetSelector(params, '@s', 'target')}` : `block ${params.pos || '~ ~ ~'}`;
      return `${cond} items ${target} ${params.slot || 'weapon.mainhand'} ${params.item || '*'}`;
    }
  },

  condition_predicate: {
    category: "condition",
    name: "if/unless predicate <pred>",
    desc: "Evaluates a datapack predicate JSON file",
    defaultParams: { condition: "if", predicate: "custom:is_night" },
    renderInputs: (params, onChange) => `
      <div class="input-pill-group">
        <button type="button" class="toggle-pill ${params.condition === 'if' ? 'active-if' : 'active-unless'}" onclick="${onChange}('condition', '${params.condition === 'if' ? 'unless' : 'if'}')">
          ${params.condition.toUpperCase()}
        </button>
        <span style="font-weight: bold; color: #ffaa00; font-size: 11px;">PREDICATE</span>
      </div>
      <div class="input-pill-group">
        <label>Predicate ID:</label>
        <input type="text" class="cmd-input" value="${escapeHtml(params.predicate)}" oninput="${onChange}('predicate', this.value)" placeholder="namespace:predicate_name">
      </div>
    `,
    compile: (params) => `${params.condition || 'if'} predicate ${params.predicate || 'custom:predicate'}`
  },

  condition_function: {
    category: "condition",
    name: "if/unless function <function> (1.20.2+)",
    desc: "Checks if a function returns a non-zero value or executes successfully",
    defaultParams: { condition: "if", functionName: "custom:check" },
    renderInputs: (params, onChange) => `
      <div class="input-pill-group">
        <button type="button" class="toggle-pill ${params.condition === 'if' ? 'active-if' : 'active-unless'}" onclick="${onChange}('condition', '${params.condition === 'if' ? 'unless' : 'if'}')">
          ${params.condition.toUpperCase()}
        </button>
        <span style="font-weight: bold; color: #ffaa00; font-size: 11px;">FUNCTION</span>
      </div>
      <div class="input-pill-group">
        <label>Function ID:</label>
        <input type="text" class="cmd-input" value="${escapeHtml(params.functionName)}" oninput="${onChange}('functionName', this.value)" placeholder="namespace:function_name">
      </div>
    `,
    compile: (params) => `${params.condition || 'if'} function ${params.functionName || 'custom:check'}`
  },

  // --- EXECUTION ---
  run: {
    category: "execution",
    name: "run <command>",
    desc: "The final command to execute once all context and conditions are met",
    defaultParams: { command: "say Hello World!" },
    renderInputs: (params, onChange) => `
      <div class="input-pill-group" style="flex: 1; min-width: 280px;">
        <label style="color: #ffaa00; font-weight: bold;">Run Command:</label>
        <input type="text" class="cmd-input" style="flex: 1; font-weight: bold; color: #ffa600;" value="${escapeHtml(params.command)}" oninput="${onChange}('command', this.value)" placeholder="say Hello World, give @s diamond 1, setblock ~ ~ ~ stone">
      </div>
    `,
    compile: (params) => {
      const raw = (params.command || 'say Hello World!').trim();
      const clean = raw.replace(/^\/+/, '');
      return `run ${clean}`;
    }
  }
};

// ==========================================
// 5. STATE & PRESETS
// ==========================================
let activePipeline = [
  { id: "c1", type: "as", params: { targetBase: "@a", selectorFilters: {}, targets: "@a" } },
  { id: "c2", type: "at", params: { targetBase: "@s", selectorFilters: {}, targets: "@s" } },
  { id: "c3", type: "condition_block", params: { condition: "if", pos: "~ ~-1 ~", block: "minecraft:diamond_block" } },
  { id: "c4", type: "run", params: { command: "say Standing on a Diamond Block!" } }
];

const PRESETS = [
  {
    title: "Detect Block Underneath Player",
    desc: "Executes command only if the player is standing on a specific block.",
    pipeline: [
      { type: "as", params: { targetBase: "@a", selectorFilters: {}, targets: "@a" } },
      { type: "at", params: { targetBase: "@s", selectorFilters: {}, targets: "@s" } },
      { type: "condition_block", params: { condition: "if", pos: "~ ~-1 ~", block: "minecraft:gold_block" } },
      { type: "run", params: { command: 'title @s subtitle {"text":"Gold Master!","color":"gold"}' } }
    ]
  },
  {
    title: "Store Entity Health into Bossbar",
    desc: "Reads the current Health of the nearest boss and stores it dynamically in a bossbar.",
    pipeline: [
      { type: "as", params: { targetBase: "@e", selectorFilters: { type: "minecraft:wither", limit: "1" }, targets: "@e[type=minecraft:wither,limit=1]" } },
      { type: "store", params: { mode: "result", targetType: "bossbar", bossbar: "minecraft:wither_bar", bossbarMode: "value" } },
      { type: "run", params: { command: "data get entity @s Health" } }
    ]
  },
  {
    title: "Raycast Forward Step",
    desc: "Steps forward incrementally in the direction the player is looking.",
    pipeline: [
      { type: "positioned", params: { mode: "coords", pos: "^ ^ ^0.5" } },
      { type: "condition_block", params: { condition: "if", pos: "~ ~ ~", block: "minecraft:air" } },
      { type: "run", params: { command: "function custom:raycast/step" } }
    ]
  },
  {
    title: "Execute on Attacker (1.19.4+)",
    desc: "Whenever a player takes damage, executes directly on the entity that attacked them.",
    pipeline: [
      { type: "as", params: { targetBase: "@a", selectorFilters: { tag: "damaged" }, targets: "@a[tag=damaged]" } },
      { type: "on", params: { relation: "attacker" } },
      { type: "run", params: { command: "effect give @s glowing 5 1" } }
    ]
  },
  {
    title: "Summon Marker at Highest Surface (1.20+)",
    desc: "Executes positioned over the highest surface block and summons a marker.",
    pipeline: [
      { type: "as", params: { targetBase: "@p", selectorFilters: {}, targets: "@p" } },
      { type: "at", params: { targetBase: "@s", selectorFilters: {}, targets: "@s" } },
      { type: "positioned", params: { mode: "over", heightmap: "world_surface" } },
      { type: "run", params: { command: "summon marker ~ ~ ~ {Tags:[\"surface_point\"]}" } }
    ]
  }
];

// ==========================================
// 6. PIPELINE COMPILER & RENDERER
// ==========================================
function compileFullCommand() {
  if (activePipeline.length === 0) return "/execute";

  const parts = activePipeline.map(item => {
    const def = SUBCOMMAND_TYPES[item.type];
    if (!def) return "";
    return def.compile(item.params);
  }).filter(s => s && s.length > 0);

  return `/execute ${parts.join(' ')}`;
}

function updateCommandPreview() {
  const codePreview = document.getElementById('commandCodeText');
  const statusBadge = document.getElementById('commandStatusBadge');
  const fullCmd = compileFullCommand();

  if (codePreview) {
    codePreview.innerHTML = highlightMinecraftCommand(fullCmd);
  }

  if (statusBadge) {
    const hasRun = activePipeline.some(c => c.type === 'run');
    if (activePipeline.length === 0) {
      statusBadge.textContent = "ℹ️ Empty Chain";
      statusBadge.style.background = "#222222";
      statusBadge.style.color = "#aaaaaa";
      statusBadge.style.borderColor = "#444444";
    } else if (!hasRun) {
      statusBadge.textContent = "⚠️ Missing 'run <cmd>'";
      statusBadge.style.background = "#3d2a00";
      statusBadge.style.color = "#ffff55";
      statusBadge.style.borderColor = "#ffa600";
    } else {
      statusBadge.textContent = "✅ Valid /execute Command";
      statusBadge.style.background = "#142d14";
      statusBadge.style.color = "#55ff55";
      statusBadge.style.borderColor = "#2d6a2d";
    }
  }
}

function renderPipeline() {
  const container = document.getElementById('pipelineContainer');
  updateCommandPreview();

  if (activePipeline.length === 0) {
    container.innerHTML = `
      <div class="empty-pipeline-msg">
        <h4>Your /execute chain is empty</h4>
        <p>Click any subcommand from the right sidebar or load a preset to start building!</p>
      </div>
    `;
    return;
  }

  container.innerHTML = '';
  activePipeline.forEach((item, index) => {
    const def = SUBCOMMAND_TYPES[item.type];
    if (!def) return;

    const card = document.createElement('div');
    card.className = `cmd-card card-${def.category}`;
    card.id = `card-${item.id}`;

    const onChangeFn = `handleParamChange.bind(null, '${item.id}')`;
    const inputsHtml = def.renderInputs(item.params, onChangeFn, item);

    card.innerHTML = `
      <div class="cmd-card-header">
        <div class="cmd-card-title">
          <span class="cmd-category-tag tag-${def.category}">${def.category}</span>
          <span style="font-family: monospace; color: #fff; font-size: 13px;">${escapeHtml(def.name)}</span>
        </div>
        <div class="cmd-card-actions">
          <button class="card-icon-btn" onclick="moveSubcommand(${index}, -1)" title="Move Up" ${index === 0 ? 'disabled style="opacity: 0.3;"' : ''}>▲</button>
          <button class="card-icon-btn" onclick="moveSubcommand(${index}, 1)" title="Move Down" ${index === activePipeline.length - 1 ? 'disabled style="opacity: 0.3;"' : ''}>▼</button>
          <button class="card-icon-btn" onclick="duplicateSubcommand(${index})" title="Duplicate">⎘</button>
          <button class="card-icon-btn btn-del" onclick="deleteSubcommand(${index})" title="Delete">✕</button>
        </div>
      </div>
      <div class="cmd-card-body">
        ${inputsHtml}
      </div>
    `;

    container.appendChild(card);
  });
}

function highlightMinecraftCommand(cmd) {
  return cmd
    .replace(/(\/execute)/g, '<span class="hl-kw">$1</span>')
    .replace(/\b(as|at|in|on|summon|positioned|align|anchored|facing|rotated|store|run)\b/g, '<span class="hl-sub">$1</span>')
    .replace(/\b(if|unless)\b/g, '<span class="hl-cond">$1</span>')
    .replace(/(@[parse]\[.*?\]|@[parse])/g, '<span class="hl-sel">$1</span>')
    .replace(/(~[0-9.-]*|\^[0-9.-]*|\b[0-9]+\b)/g, '<span class="hl-num">$1</span>');
}

// ==========================================
// 7. SUBCOMMAND INTERACTIONS & REAL-TIME REBUILD
// ==========================================
function addSubcommand(type) {
  const def = SUBCOMMAND_TYPES[type];
  if (!def) return;

  const newItem = {
    id: `cmd_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
    type: type,
    params: JSON.parse(JSON.stringify(def.defaultParams))
  };

  const runIndex = activePipeline.findIndex(c => c.type === 'run');
  if (type !== 'run' && runIndex !== -1) {
    activePipeline.splice(runIndex, 0, newItem);
  } else {
    activePipeline.push(newItem);
  }

  renderPipeline();
  showToast(`➕ Added '${def.name}' to chain`);
}

function handleParamChange(id, field, value) {
  const item = activePipeline.find(c => c.id === id);
  if (!item) return;

  if (field === 'targetBase') {
    item.params.targetBase = value;
    if (value === 'custom') {
      if (!item.params.customTarget) item.params.customTarget = '@s';
    }
    // Remove type filter if switching to player-only selector
    if ((value === '@a' || value === '@p' || value === '@r') && item.params.selectorFilters) {
      delete item.params.selectorFilters.type;
    }
    renderPipeline();
  } else if (field === 'add_filter_action') {
    if (!item.params.selectorFilters) item.params.selectorFilters = {};
    const defaultDef = SELECTOR_FILTER_TYPES.find(f => f.key === value);
    item.params.selectorFilters[value] = defaultDef ? defaultDef.default : '';
    renderPipeline();
  } else if (field === 'remove_filter') {
    if (item.params.selectorFilters) {
      delete item.params.selectorFilters[value];
    }
    renderPipeline();
  } else if (field.startsWith('filter_')) {
    const filterKey = field.replace('filter_', '');
    if (!item.params.selectorFilters) item.params.selectorFilters = {};
    item.params.selectorFilters[filterKey] = value;
    updateCommandPreview();
  } else if (field === 'mode' || field === 'type' || field === 'targetType' || field === 'condition' || field === 'relation' || field === 'axes' || field === 'anchor') {
    item.params[field] = value;
    renderPipeline();
  } else {
    item.params[field] = value;
    updateCommandPreview();
  }
}

function moveSubcommand(index, direction) {
  const targetIndex = index + direction;
  if (targetIndex < 0 || targetIndex >= activePipeline.length) return;

  const temp = activePipeline[index];
  activePipeline[index] = activePipeline[targetIndex];
  activePipeline[targetIndex] = temp;
  renderPipeline();
}

function duplicateSubcommand(index) {
  const item = activePipeline[index];
  if (!item) return;

  const copy = {
    id: `cmd_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
    type: item.type,
    params: JSON.parse(JSON.stringify(item.params))
  };

  activePipeline.splice(index + 1, 0, copy);
  renderPipeline();
  showToast("⎘ Duplicated block");
}

function deleteSubcommand(index) {
  activePipeline.splice(index, 1);
  renderPipeline();
}

function clearPipeline() {
  if (confirm("Are you sure you want to clear the entire execute chain?")) {
    activePipeline = [];
    renderPipeline();
    showToast("🧹 Cleared command pipeline");
  }
}

// ==========================================
// 8. REVERSE ENGINEERING (COMMAND PARSER)
// ==========================================
function tokenizeCommand(str) {
  const tokens = [];
  let current = '';
  let inQuotes = false;
  let quoteChar = '';
  let bracketDepth = 0;
  let braceDepth = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if ((char === '"' || char === "'") && !inQuotes) {
      inQuotes = true;
      quoteChar = char;
      current += char;
    } else if (char === quoteChar && inQuotes) {
      inQuotes = false;
      quoteChar = '';
      current += char;
    } else if (char === '[' && !inQuotes) {
      bracketDepth++;
      current += char;
    } else if (char === ']' && !inQuotes && bracketDepth > 0) {
      bracketDepth--;
      current += char;
    } else if (char === '{' && !inQuotes) {
      braceDepth++;
      current += char;
    } else if (char === '}' && !inQuotes && braceDepth > 0) {
      braceDepth--;
      current += char;
    } else if (/\s/.test(char) && !inQuotes && bracketDepth === 0 && braceDepth === 0) {
      if (current.length > 0) {
        tokens.push(current);
        current = '';
      }
    } else {
      current += char;
    }
  }

  if (current.length > 0) {
    tokens.push(current);
  }

  return tokens;
}

function parseSelectorString(rawStr) {
  if (!rawStr) return { targetBase: "@s", selectorFilters: {} };

  const match = rawStr.match(/^(@[a-zA-Z])(\[(.*)\])?$/);
  if (!match) {
    return { targetBase: "custom", customTarget: rawStr, selectorFilters: {} };
  }

  const base = match[1];
  const argsString = match[3];
  const filters = {};

  if (argsString) {
    const argTokens = [];
    let curArg = '';
    let bDepth = 0;
    let brDepth = 0;

    for (let i = 0; i < argsString.length; i++) {
      const c = argsString[i];
      if (c === '[') bDepth++;
      else if (c === ']') bDepth--;
      else if (c === '{') brDepth++;
      else if (c === '}') brDepth--;

      if (c === ',' && bDepth === 0 && brDepth === 0) {
        if (curArg.trim().length > 0) argTokens.push(curArg.trim());
        curArg = '';
      } else {
        curArg += c;
      }
    }
    if (curArg.trim().length > 0) argTokens.push(curArg.trim());

    argTokens.forEach(pair => {
      const eqIdx = pair.indexOf('=');
      if (eqIdx !== -1) {
        const key = pair.substring(0, eqIdx).trim();
        const val = pair.substring(eqIdx + 1).trim();
        filters[key] = val;
      }
    });
  }

  return {
    targetBase: base,
    selectorFilters: filters,
    targets: rawStr
  };
}

function parseExecuteCommand(rawInput) {
  let cleaned = rawInput.trim();
  if (cleaned.startsWith('/')) cleaned = cleaned.substring(1);
  if (cleaned.startsWith('execute ')) cleaned = cleaned.substring(8).trim();

  const tokens = tokenizeCommand(cleaned);
  const newPipeline = [];
  let i = 0;

  while (i < tokens.length) {
    const token = tokens[i];

    if (token === 'as') {
      const targetStr = tokens[++i] || '@a';
      const parsedSel = parseSelectorString(targetStr);
      newPipeline.push({
        id: `cmd_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
        type: 'as',
        params: parsedSel
      });
    } else if (token === 'at') {
      const targetStr = tokens[++i] || '@s';
      const parsedSel = parseSelectorString(targetStr);
      newPipeline.push({
        id: `cmd_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
        type: 'at',
        params: parsedSel
      });
    } else if (token === 'in') {
      const dim = tokens[++i] || 'minecraft:overworld';
      newPipeline.push({
        id: `cmd_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
        type: 'in',
        params: { dimension: dim }
      });
    } else if (token === 'on') {
      const rel = tokens[++i] || 'attacker';
      newPipeline.push({
        id: `cmd_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
        type: 'on',
        params: { relation: rel }
      });
    } else if (token === 'summon') {
      const ent = tokens[++i] || 'minecraft:marker';
      newPipeline.push({
        id: `cmd_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
        type: 'summon',
        params: { entity: ent }
      });
    } else if (token === 'positioned') {
      const next = tokens[++i];
      if (next === 'as') {
        const targetStr = tokens[++i] || '@s';
        const parsedSel = parseSelectorString(targetStr);
        newPipeline.push({
          id: `cmd_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
          type: 'positioned',
          params: Object.assign({ mode: 'as' }, parsedSel)
        });
      } else if (next === 'over') {
        const hm = tokens[++i] || 'world_surface';
        newPipeline.push({
          id: `cmd_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
          type: 'positioned',
          params: { mode: 'over', heightmap: hm }
        });
      } else {
        const x = next || '~';
        const y = tokens[++i] || '~';
        const z = tokens[++i] || '~';
        newPipeline.push({
          id: `cmd_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
          type: 'positioned',
          params: { mode: 'coords', pos: `${x} ${y} ${z}` }
        });
      }
    } else if (token === 'align') {
      const axes = tokens[++i] || 'xyz';
      newPipeline.push({
        id: `cmd_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
        type: 'align',
        params: { axes: axes }
      });
    } else if (token === 'anchored') {
      const anc = tokens[++i] || 'eyes';
      newPipeline.push({
        id: `cmd_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
        type: 'anchored',
        params: { anchor: anc }
      });
    } else if (token === 'facing') {
      const next = tokens[++i];
      if (next === 'entity') {
        const targetStr = tokens[++i] || '@p';
        const anc = tokens[++i] || 'eyes';
        const parsedSel = parseSelectorString(targetStr);
        newPipeline.push({
          id: `cmd_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
          type: 'facing',
          params: Object.assign({ mode: 'entity', anchor: anc }, parsedSel)
        });
      } else {
        const x = next || '~';
        const y = tokens[++i] || '~';
        const z = tokens[++i] || '~';
        newPipeline.push({
          id: `cmd_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
          type: 'facing',
          params: { mode: 'pos', pos: `${x} ${y} ${z}` }
        });
      }
    } else if (token === 'rotated') {
      const next = tokens[++i];
      if (next === 'as') {
        const targetStr = tokens[++i] || '@p';
        const parsedSel = parseSelectorString(targetStr);
        newPipeline.push({
          id: `cmd_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
          type: 'rotated',
          params: Object.assign({ mode: 'as' }, parsedSel)
        });
      } else {
        const yaw = next || '~';
        const pitch = tokens[++i] || '0';
        newPipeline.push({
          id: `cmd_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
          type: 'rotated',
          params: { mode: 'rot', rot: `${yaw} ${pitch}` }
        });
      }
    } else if (token === 'store') {
      const mode = tokens[++i] || 'result';
      const targetType = tokens[++i] || 'score';

      if (targetType === 'score') {
        const targetStr = tokens[++i] || '@s';
        const obj = tokens[++i] || 'score';
        const parsedSel = parseSelectorString(targetStr);
        newPipeline.push({
          id: `cmd_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
          type: 'store',
          params: Object.assign({ mode: mode, targetType: 'score', objective: obj }, parsedSel)
        });
      } else if (targetType === 'entity') {
        const targetStr = tokens[++i] || '@s';
        const path = tokens[++i] || 'Health';
        const t = tokens[++i] || 'int';
        const scale = tokens[++i] || '1';
        const parsedSel = parseSelectorString(targetStr);
        newPipeline.push({
          id: `cmd_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
          type: 'store',
          params: Object.assign({ mode: mode, targetType: 'entity', path: path, type: t, scale: scale }, parsedSel)
        });
      } else if (targetType === 'block') {
        const x = tokens[++i] || '~';
        const y = tokens[++i] || '~';
        const z = tokens[++i] || '~';
        const path = tokens[++i] || 'Items';
        const t = tokens[++i] || 'int';
        const scale = tokens[++i] || '1';
        newPipeline.push({
          id: `cmd_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
          type: 'store',
          params: { mode: mode, targetType: 'block', pos: `${x} ${y} ${z}`, path: path, type: t, scale: scale }
        });
      } else if (targetType === 'storage') {
        const storage = tokens[++i] || 'custom:data';
        const path = tokens[++i] || 'val';
        const t = tokens[++i] || 'int';
        const scale = tokens[++i] || '1';
        newPipeline.push({
          id: `cmd_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
          type: 'store',
          params: { mode: mode, targetType: 'storage', storage: storage, path: path, type: t, scale: scale }
        });
      } else if (targetType === 'bossbar') {
        const bar = tokens[++i] || 'minecraft:custom';
        const bMode = tokens[++i] || 'value';
        newPipeline.push({
          id: `cmd_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
          type: 'store',
          params: { mode: mode, targetType: 'bossbar', bossbar: bar, bossbarMode: bMode }
        });
      }
    } else if (token === 'if' || token === 'unless') {
      const cond = token;
      const condType = tokens[++i];

      if (condType === 'block') {
        const x = tokens[++i] || '~';
        const y = tokens[++i] || '~';
        const z = tokens[++i] || '~';
        const block = tokens[++i] || 'minecraft:stone';
        newPipeline.push({
          id: `cmd_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
          type: 'condition_block',
          params: { condition: cond, pos: `${x} ${y} ${z}`, block: block }
        });
      } else if (condType === 'blocks') {
        const sx = tokens[++i] || '~';
        const sy = tokens[++i] || '~';
        const sz = tokens[++i] || '~';
        const ex = tokens[++i] || '~';
        const ey = tokens[++i] || '~';
        const ez = tokens[++i] || '~';
        const dx = tokens[++i] || '~';
        const dy = tokens[++i] || '~';
        const dz = tokens[++i] || '~';
        const mode = tokens[++i] || 'all';
        newPipeline.push({
          id: `cmd_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
          type: 'condition_blocks',
          params: { condition: cond, startPos: `${sx} ${sy} ${sz}`, endPos: `${ex} ${ey} ${ez}`, destPos: `${dx} ${dy} ${dz}`, mode: mode }
        });
      } else if (condType === 'entity') {
        const targetStr = tokens[++i] || '@e';
        const parsedSel = parseSelectorString(targetStr);
        newPipeline.push({
          id: `cmd_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
          type: 'condition_entity',
          params: Object.assign({ condition: cond }, parsedSel)
        });
      } else if (condType === 'score') {
        const targetStr = tokens[++i] || '@s';
        const obj = tokens[++i] || 'score';
        const parsedSel = parseSelectorString(targetStr);
        const subOp = tokens[++i];

        if (subOp === 'matches') {
          const rng = tokens[++i] || '1..';
          newPipeline.push({
            id: `cmd_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
            type: 'condition_score',
            params: Object.assign({ condition: cond, mode: 'matches', objective: obj, range: rng }, parsedSel)
          });
        } else {
          const op = subOp || '=';
          const src = tokens[++i] || '#source';
          const srcObj = tokens[++i] || obj;
          newPipeline.push({
            id: `cmd_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
            type: 'condition_score',
            params: Object.assign({ condition: cond, mode: 'compare', objective: obj, op: op, source: src, sourceObjective: srcObj }, parsedSel)
          });
        }
      } else if (condType === 'data') {
        const dataType = tokens[++i] || 'entity';
        if (dataType === 'entity') {
          const targetStr = tokens[++i] || '@s';
          const path = tokens[++i] || 'SelectedItem';
          const parsedSel = parseSelectorString(targetStr);
          newPipeline.push({
            id: `cmd_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
            type: 'condition_data',
            params: Object.assign({ condition: cond, type: 'entity', path: path }, parsedSel)
          });
        } else if (dataType === 'block') {
          const x = tokens[++i] || '~';
          const y = tokens[++i] || '~';
          const z = tokens[++i] || '~';
          const path = tokens[++i] || 'Items';
          newPipeline.push({
            id: `cmd_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
            type: 'condition_data',
            params: { condition: cond, type: 'block', pos: `${x} ${y} ${z}`, path: path }
          });
        } else if (dataType === 'storage') {
          const storage = tokens[++i] || 'custom:data';
          const path = tokens[++i] || 'val';
          newPipeline.push({
            id: `cmd_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
            type: 'condition_data',
            params: { condition: cond, type: 'storage', storage: storage, path: path }
          });
        }
      } else if (condType === 'biome') {
        const x = tokens[++i] || '~';
        const y = tokens[++i] || '~';
        const z = tokens[++i] || '~';
        const bio = tokens[++i] || 'minecraft:plains';
        newPipeline.push({
          id: `cmd_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
          type: 'condition_biome',
          params: { condition: cond, pos: `${x} ${y} ${z}`, biome: bio }
        });
      } else if (condType === 'dimension') {
        const dim = tokens[++i] || 'minecraft:overworld';
        newPipeline.push({
          id: `cmd_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
          type: 'condition_dimension',
          params: { condition: cond, dimension: dim }
        });
      } else if (condType === 'loaded') {
        const x = tokens[++i] || '~';
        const y = tokens[++i] || '~';
        const z = tokens[++i] || '~';
        newPipeline.push({
          id: `cmd_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
          type: 'condition_loaded',
          params: { condition: cond, pos: `${x} ${y} ${z}` }
        });
      } else if (condType === 'items') {
        const targetType = tokens[++i] || 'entity';
        if (targetType === 'entity') {
          const targetStr = tokens[++i] || '@s';
          const slot = tokens[++i] || 'weapon.mainhand';
          const item = tokens[++i] || '*';
          const parsedSel = parseSelectorString(targetStr);
          newPipeline.push({
            id: `cmd_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
            type: 'condition_items',
            params: Object.assign({ condition: cond, targetType: 'entity', slot: slot, item: item }, parsedSel)
          });
        } else {
          const x = tokens[++i] || '~';
          const y = tokens[++i] || '~';
          const z = tokens[++i] || '~';
          const slot = tokens[++i] || 'container.0';
          const item = tokens[++i] || '*';
          newPipeline.push({
            id: `cmd_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
            type: 'condition_items',
            params: { condition: cond, targetType: 'block', pos: `${x} ${y} ${z}`, slot: slot, item: item }
          });
        }
      } else if (condType === 'predicate') {
        const pred = tokens[++i] || 'custom:pred';
        newPipeline.push({
          id: `cmd_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
          type: 'condition_predicate',
          params: { condition: cond, predicate: pred }
        });
      } else if (condType === 'function') {
        const fn = tokens[++i] || 'custom:check';
        newPipeline.push({
          id: `cmd_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
          type: 'condition_function',
          params: { condition: cond, functionName: fn }
        });
      }
    } else if (token === 'run') {
      const rest = tokens.slice(i + 1).join(' ');
      newPipeline.push({
        id: `cmd_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
        type: 'run',
        params: { command: rest }
      });
      break;
    }

    i++;
  }

  return newPipeline;
}

function openImportModal() {
  document.getElementById('importModal').classList.add('open');
  const input = document.getElementById('importCommandInput');
  input.value = '';
  input.focus();
}

function closeImportModal() {
  document.getElementById('importModal').classList.remove('open');
}

function submitImportCommand() {
  const input = document.getElementById('importCommandInput').value.trim();
  if (!input) {
    showToast("⚠️ Incolla un comando prima di convertire!");
    return;
  }

  const parsed = parseExecuteCommand(input);
  if (parsed.length === 0) {
    showToast("⚠️ Nessun sottocomando /execute valido trovato.");
    return;
  }

  activePipeline = parsed;
  renderPipeline();
  closeImportModal();
  showToast(`⚡ Reverse engineering completato: ${parsed.length} box generati!`);
}

// ==========================================
// 9. EXPORT & COPY CONTROLLER
// ==========================================
function copyCommand() {
  const cmd = compileFullCommand();
  navigator.clipboard.writeText(cmd).then(() => {
    showToast("📋 Copied /execute command to clipboard!");
  }).catch(() => {
    showToast("⚠️ Failed to copy to clipboard");
  });
}

function exportMcFunction() {
  const cmd = compileFullCommand();
  const cleanCmd = cmd.replace(/^\/+/, ''); // Remove leading slash for vanilla mcfunction format
  const blob = new Blob([`# Generated by BlockEngine Execute Builder\n${cleanCmd}\n`], { type: 'text/plain;charset=utf-8' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'custom_execute.mcfunction';
  a.click();
  showToast("💾 Esportato 'custom_execute.mcfunction' senza slash iniziale!");
}

// ==========================================
// 10. PRESETS CONTROLLER
// ==========================================
function openPresetsModal() {
  const modal = document.getElementById('presetsModal');
  const grid = document.getElementById('presetGrid');
  grid.innerHTML = '';

  PRESETS.forEach(preset => {
    const card = document.createElement('div');
    card.className = 'preset-card';
    card.innerHTML = `
      <h4>${escapeHtml(preset.title)}</h4>
      <p>${escapeHtml(preset.desc)}</p>
    `;
    card.addEventListener('click', () => {
      loadPreset(preset);
      closePresetsModal();
    });
    grid.appendChild(card);
  });

  modal.classList.add('open');
}

function closePresetsModal() {
  document.getElementById('presetsModal').classList.remove('open');
}

function loadPreset(preset) {
  activePipeline = preset.pipeline.map(item => {
    const def = SUBCOMMAND_TYPES[item.type];
    return {
      id: `cmd_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
      type: item.type,
      params: Object.assign({}, def ? def.defaultParams : {}, item.params)
    };
  });
  renderPipeline();
  showToast(`📚 Loaded preset: ${preset.title}`);
}

// ==========================================
// 11. /data get NBT DICTIONARY MODAL
// ==========================================
const DATA_GET_CATEGORIES = {
  entity: {
    title: "👤 Entity & Player NBT Tags",
    items: [
      { name: "Pos", path: "Pos", desc: "Coordinates [X, Y, Z] as doubles", example: "/data get entity @s Pos" },
      { name: "Motion", path: "Motion", desc: "Velocity vector [dx, dy, dz]", example: "/data get entity @s Motion" },
      { name: "Rotation", path: "Rotation", desc: "Angle [Yaw, Pitch] as floats", example: "/data get entity @s Rotation" },
      { name: "Health", path: "Health", desc: "Current health value (float)", example: "/data get entity @s Health" },
      { name: "SelectedItem", path: "SelectedItem", desc: "Item held in player's main hand", example: "/data get entity @s SelectedItem" },
      { name: "Inventory", path: "Inventory", desc: "Full inventory array of player", example: "/data get entity @s Inventory" },
      { name: "ArmorItems", path: "ArmorItems", desc: "Armor slots [Feet, Legs, Chest, Head]", example: "/data get entity @s ArmorItems" },
      { name: "HandItems", path: "HandItems", desc: "Mainhand & Offhand items for mobs", example: "/data get entity @e[type=zombie,limit=1] HandItems" },
      { name: "CustomName", path: "CustomName", desc: "Custom name JSON string", example: "/data get entity @s CustomName" },
      { name: "NoAI / Invulnerable", path: "NoAI", desc: "Entity status flags (1b / 0b)", example: "/data get entity @e[type=villager,limit=1] NoAI" }
    ]
  },
  block: {
    title: "🧱 Block Entity NBT Tags",
    items: [
      { name: "Items", path: "Items", desc: "Container contents (Chests, Barrels, Hoppers)", example: "/data get block ~ ~ ~ Items" },
      { name: "BurnTime / CookTime", path: "BurnTime", desc: "Furnace fuel & cooking ticks progress", example: "/data get block ~ ~ ~ CookTime" },
      { name: "RecordItem", path: "RecordItem", desc: "Music disc inside Jukebox", example: "/data get block ~ ~ ~ RecordItem" },
      { name: "Bees", path: "Bees", desc: "List of bees inside Beehive / Nest", example: "/data get block ~ ~ ~ Bees" },
      { name: "Patterns", path: "Patterns", desc: "Banner design layers list", example: "/data get block ~ ~ ~ Patterns" },
      { name: "Primary / Secondary", path: "primary_effect", desc: "Beacon active status effects", example: "/data get block ~ ~ ~ primary_effect" },
      { name: "Command", path: "Command", desc: "Command string in Command Block", example: "/data get block ~ ~ ~ Command" }
    ]
  },
  storage: {
    title: "💾 Command Storage & Modifiers",
    items: [
      { name: "Virtual Storage", path: "storage", desc: "Custom JSON compound storage for datapacks", example: "/data get storage namespace:data root.score" },
      { name: "Scale Multiplier", path: "scale", desc: "Scale float values into integer scores", example: "/execute store result score @s hp run data get entity @s Health 10" }
    ]
  }
};

function openDataGetModal() {
  const modal = document.getElementById('dataGetModal');
  const body = document.getElementById('dataGetModalBody');
  body.innerHTML = '';

  Object.keys(DATA_GET_CATEGORIES).forEach(key => {
    const cat = DATA_GET_CATEGORIES[key];
    const catEl = document.createElement('div');
    catEl.style.marginBottom = '20px';

    catEl.innerHTML = `
      <h4 style="color: #ffa600; font-size: 14px; margin-bottom: 10px; border-bottom: 1px solid #333; padding-bottom: 4px;">
        ${escapeHtml(cat.title)}
      </h4>
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 10px;">
        ${cat.items.map(item => `
          <div style="background: #181818; border: 1px solid #333; border-radius: 4px; padding: 8px 10px; display: flex; flex-direction: column; gap: 4px;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <strong style="color: #fff; font-size: 12px;">${escapeHtml(item.name)}</strong>
              <code style="font-size: 10px; color: #ffa600;">${item.path}</code>
            </div>
            <span style="font-size: 11px; color: #aaa;">${escapeHtml(item.desc)}</span>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 4px;">
              <code style="font-size: 10px; color: #55ff55; word-break: break-all;">${item.example}</code>
              <button class="action-btn" style="padding: 2px 6px; font-size: 10px;" onclick="copyString('${item.path}')">Copy</button>
            </div>
          </div>
        `).join('')}
      </div>
    `;
    body.appendChild(catEl);
  });

  modal.classList.add('open');
}

function closeDataGetModal() {
  document.getElementById('dataGetModal').classList.remove('open');
}

function copyString(str) {
  navigator.clipboard.writeText(str).then(() => {
    showToast("📋 Copied to clipboard!");
  });
}

// ==========================================
// 12. ACCORDION & TOASTS
// ==========================================
function toggleAccordion(headerEl) {
  const categoryEl = headerEl.closest('.accordion-category');
  if (categoryEl) {
    categoryEl.classList.toggle('open');
  }
}

function showToast(message) {
  const container = document.getElementById('toastContainer') || createToastContainer();
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>${escapeHtml(message)}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function createToastContainer() {
  const div = document.createElement('div');
  div.id = 'toastContainer';
  div.className = 'toast-container';
  document.body.appendChild(div);
  return div;
}

function escapeHtml(str) {
  if (typeof str !== 'string') return str;
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

// ==========================================
// 13. DATALISTS & INITIALIZATION
// ==========================================
async function loadItemsDatabase() {
  try {
    let res = await fetch('../items.json');
    if (!res.ok) res = await fetch('./items.json');
    if (!res.ok) res = await fetch('items.json');
    if (res.ok) {
      const data = await res.json();
      itemsDatabaseList = data.values || itemsDatabaseList;
    }
  } catch (err) {
    console.warn("items.json load failed, fallback active.", err);
  }

  // Populate NBT Datalist
  let nbtDatalist = document.getElementById('commonNbtList');
  if (!nbtDatalist && typeof document !== 'undefined' && document.body) {
    nbtDatalist = document.createElement('datalist');
    nbtDatalist.id = 'commonNbtList';
    document.body.appendChild(nbtDatalist);
    nbtDatalist.innerHTML = COMMON_NBT_TAGS.map(tag => `<option value="${tag}"></option>`).join('');
  }
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    loadItemsDatabase();
    renderPipeline();
  });
}
