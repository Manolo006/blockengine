/**
 * ADVANCEMENT GENERATOR - MISODE & VANILLA JAVA EDITION THEME
 * Full 57 Triggers, Dynamic Customizable Background, Orthogonal Canvas, Data Pack ZIP Export
 */

// ==========================================
// 1. OFFICIAL 57 MINECRAFT JAVA TRIGGERS
// ==========================================
const MINECRAFT_TRIGGERS = [
  { id: "minecraft:allay_drop_item_on_block", name: "allay_drop_item_on_block", desc: "Allay dropped item on block" },
  { id: "minecraft:any_block_use", name: "any_block_use", desc: "Player used/clicked any block" },
  { id: "minecraft:avoid_vibration", name: "avoid_vibration", desc: "Sneaked to avoid sculk sensor vibration" },
  { id: "minecraft:bee_nest_destroyed", name: "bee_nest_destroyed", desc: "Player destroyed a bee nest or beehive" },
  { id: "minecraft:bred_animals", name: "bred_animals", desc: "Player bred two animals" },
  { id: "minecraft:brewed_potion", name: "brewed_potion", desc: "Brewing stand brewed a potion" },
  { id: "minecraft:changed_dimension", name: "changed_dimension", desc: "Player changed dimension (Nether, End, Overworld)" },
  { id: "minecraft:channeled_lightning", name: "channeled_lightning", desc: "Player struck entity with Channeling trident" },
  { id: "minecraft:chiseled_bookshelf_interaction", name: "chiseled_bookshelf_interaction", desc: "Used chiseled bookshelf" },
  { id: "minecraft:construct_beacon", name: "construct_beacon", desc: "Activated a beacon pyramid" },
  { id: "minecraft:consume_item", name: "consume_item", desc: "Player ate or drank an item" },
  { id: "minecraft:crafter_recipe_crafted", name: "crafter_recipe_crafted", desc: "Crafter block crafted a recipe" },
  { id: "minecraft:cured_zombie_villager", name: "cured_zombie_villager", desc: "Player cured a zombie villager" },
  { id: "minecraft:default_block_use", name: "default_block_use", desc: "Used default block interaction" },
  { id: "minecraft:effects_changed", name: "effects_changed", desc: "Player status effects changed" },
  { id: "minecraft:enchanted_item", name: "enchanted_item", desc: "Player enchanted an item" },
  { id: "minecraft:enter_block", name: "enter_block", desc: "Player walked into a block" },
  { id: "minecraft:entity_hurt_player", name: "entity_hurt_player", desc: "Entity damaged the player" },
  { id: "minecraft:entity_killed_player", name: "entity_killed_player", desc: "Mob/entity killed the player" },
  { id: "minecraft:fall_after_explosion", name: "fall_after_explosion", desc: "Fell safely after wind burst" },
  { id: "minecraft:fall_from_height", name: "fall_from_height", desc: "Player landed after falling" },
  { id: "minecraft:filled_bucket", name: "filled_bucket", desc: "Player filled a bucket with liquid/entity" },
  { id: "minecraft:fishing_rod_hooked", name: "fishing_rod_hooked", desc: "Fishing rod caught an item or entity" },
  { id: "minecraft:hero_of_the_village", name: "hero_of_the_village", desc: "Player defeated a raid" },
  { id: "minecraft:impossible", name: "impossible", desc: "Cannot be unlocked naturally; only via commands" },
  { id: "minecraft:inventory_changed", name: "inventory_changed", desc: "Player inventory items changed" },
  { id: "minecraft:item_durability_changed", name: "item_durability_changed", desc: "Item durability decreased/increased" },
  { id: "minecraft:item_used_on_block", name: "item_used_on_block", desc: "Player right clicked a block with item" },
  { id: "minecraft:kill_mob_near_sculk_catalyst", name: "kill_mob_near_sculk_catalyst", desc: "Mob killed near sculk catalyst" },
  { id: "minecraft:killed_by_arrow", name: "killed_by_arrow", desc: "Killed an entity using a crossbow/bow arrow" },
  { id: "minecraft:levitation", name: "levitation", desc: "Player received levitation effect" },
  { id: "minecraft:lightning_strike", name: "lightning_strike", desc: "Lightning struck near player" },
  { id: "minecraft:location", name: "location", desc: "Player location/biome/dimension/structure" },
  { id: "minecraft:nether_travel", name: "nether_travel", desc: "Player traveled through Nether portal" },
  { id: "minecraft:placed_block", name: "placed_block", desc: "Player placed a block" },
  { id: "minecraft:player_generates_container_loot", name: "player_generates_container_loot", desc: "Naturally generated chest opened" },
  { id: "minecraft:player_hurt_entity", name: "player_hurt_entity", desc: "Player damaged an entity" },
  { id: "minecraft:player_interacted_with_entity", name: "player_interacted_with_entity", desc: "Player right-clicked an entity" },
  { id: "minecraft:player_killed_entity", name: "player_killed_entity", desc: "Player killed a mob/entity" },
  { id: "minecraft:player_sheared_equipment", name: "player_sheared_equipment", desc: "Player sheared wolf armor or sheep" },
  { id: "minecraft:recipe_crafted", name: "recipe_crafted", desc: "Recipe crafted by player" },
  { id: "minecraft:recipe_unlocked", name: "recipe_unlocked", desc: "Recipe unlocked in recipe book" },
  { id: "minecraft:ride_entity_in_lava", name: "ride_entity_in_lava", desc: "Player rode a strider on lava" },
  { id: "minecraft:shot_crossbow", name: "shot_crossbow", desc: "Player shot a loaded crossbow" },
  { id: "minecraft:slept_in_bed", name: "slept_in_bed", desc: "Player slept in a bed" },
  { id: "minecraft:slide_down_block", name: "slide_down_block", desc: "Player slid down a honey block" },
  { id: "minecraft:spear_mobs", name: "spear_mobs", desc: "Player speared multiple mobs with trident" },
  { id: "minecraft:started_riding", name: "started_riding", desc: "Player started riding an entity or vehicle" },
  { id: "minecraft:summoned_entity", name: "summoned_entity", desc: "Spawned Golem, Wither, or Warden" },
  { id: "minecraft:tame_animal", name: "tame_animal", desc: "Tamed horse, wolf, cat, parrot, etc." },
  { id: "minecraft:target_hit", name: "target_hit", desc: "Target block hit with projectile" },
  { id: "minecraft:thrown_item_picked_up_by_entity", name: "thrown_item_picked_up_by_entity", desc: "Entity picked up thrown item" },
  { id: "minecraft:thrown_item_picked_up_by_player", name: "thrown_item_picked_up_by_player", desc: "Player picked up thrown item" },
  { id: "minecraft:tick", name: "tick", desc: "Runs every single game tick (unconditional)" },
  { id: "minecraft:used_ender_eye", name: "used_ender_eye", desc: "Threw an eye of ender" },
  { id: "minecraft:used_totem", name: "used_totem", desc: "Used a Totem of Undying" },
  { id: "minecraft:using_item", name: "using_item", desc: "Continuously using an item" },
  { id: "minecraft:villager_trade", name: "villager_trade", desc: "Traded with a villager" },
  { id: "minecraft:voluntary_exile", name: "voluntary_exile", desc: "Killed a raid captain" }
];

// ==========================================
// 1.1 MINECRAFT PRESET DATASETS FOR CONDITIONS
// ==========================================
const DATA_ENTITIES = [
  "minecraft:allay", "minecraft:armadillo", "minecraft:axolotl", "minecraft:bat", "minecraft:bee", "minecraft:blaze", "minecraft:bogged", "minecraft:breeze", "minecraft:camel", "minecraft:cat", "minecraft:cave_spider", "minecraft:chicken", "minecraft:cod", "minecraft:cow", "minecraft:creeper", "minecraft:dolphin", "minecraft:donkey", "minecraft:drowned", "minecraft:elder_guardian", "minecraft:ender_dragon", "minecraft:enderman", "minecraft:endermite", "minecraft:evoker", "minecraft:fox", "minecraft:frog", "minecraft:ghast", "minecraft:glow_squid", "minecraft:goat", "minecraft:guardian", "minecraft:hoglin", "minecraft:horse", "minecraft:husk", "minecraft:iron_golem", "minecraft:llama", "minecraft:magma_cube", "minecraft:mule", "minecraft:mooshroom", "minecraft:ocelot", "minecraft:panda", "minecraft:parrot", "minecraft:phantom", "minecraft:pig", "minecraft:piglin", "minecraft:piglin_brute", "minecraft:pillager", "minecraft:polar_bear", "minecraft:pufferfish", "minecraft:rabbit", "minecraft:ravager", "minecraft:salmon", "minecraft:sheep", "minecraft:shulker", "minecraft:silverfish", "minecraft:skeleton", "minecraft:skeleton_horse", "minecraft:slime", "minecraft:sniffer", "minecraft:snow_golem", "minecraft:spider", "minecraft:squid", "minecraft:stray", "minecraft:strider", "minecraft:tadpole", "minecraft:trader_llama", "minecraft:turtle", "minecraft:vex", "minecraft:villager", "minecraft:vindicator", "minecraft:wandering_trader", "minecraft:warden", "minecraft:witch", "minecraft:wither", "minecraft:wither_skeleton", "minecraft:wolf", "minecraft:zoglin", "minecraft:zombie", "minecraft:zombie_horse", "minecraft:zombie_villager", "minecraft:zombified_piglin",
  "#minecraft:skeletons", "#minecraft:raiders", "#minecraft:undead", "#minecraft:illager", "#minecraft:axolotl_hunt_targets", "#minecraft:beehive_inhabitors", "#minecraft:freeze_hurts_extra_types", "#minecraft:frog_food"
];

const DATA_BIOMES = [
  "minecraft:badlands", "minecraft:bamboo_jungle", "minecraft:birch_forest", "minecraft:cherry_grove", "minecraft:dark_forest", "minecraft:deep_dark", "minecraft:deep_frozen_ocean", "minecraft:deep_lukewarm_ocean", "minecraft:deep_ocean", "minecraft:desert", "minecraft:dripstone_caves", "minecraft:eroded_badlands", "minecraft:flower_forest", "minecraft:frozen_ocean", "minecraft:frozen_peaks", "minecraft:frozen_river", "minecraft:grove", "minecraft:ice_spikes", "minecraft:jagged_peaks", "minecraft:jungle", "minecraft:lukewarm_ocean", "minecraft:lush_caves", "minecraft:mangrove_swamp", "minecraft:meadow", "minecraft:mushroom_fields", "minecraft:nether_wastes", "minecraft:ocean", "minecraft:old_growth_birch_forest", "minecraft:old_growth_pine_taiga", "minecraft:old_growth_spruce_taiga", "minecraft:plains", "minecraft:river", "minecraft:savanna", "minecraft:savanna_plateau", "minecraft:snowy_beach", "minecraft:snowy_plains", "minecraft:snowy_slopes", "minecraft:snowy_taiga", "minecraft:soul_sand_valley", "minecraft:sparse_jungle", "minecraft:stony_peaks", "minecraft:stony_shore", "minecraft:sunflower_plains", "minecraft:swamp", "minecraft:taiga", "minecraft:the_end", "minecraft:the_void", "minecraft:warm_ocean", "minecraft:warped_forest", "minecraft:windswept_forest", "minecraft:windswept_gravelly_hills", "minecraft:windswept_hills", "minecraft:windswept_savanna", "minecraft:wooded_badlands"
];

const DATA_STRUCTURES = [
  "minecraft:ancient_city", "minecraft:bastion_remnant", "minecraft:buried_treasure", "minecraft:desert_pyramid", "minecraft:end_city", "minecraft:fortress", "minecraft:igloo", "minecraft:jungle_pyramid", "minecraft:mansion", "minecraft:mineshaft", "minecraft:monument", "minecraft:nether_fossil", "minecraft:ocean_ruin_cold", "minecraft:ocean_ruin_warm", "minecraft:pillager_outpost", "minecraft:ruined_portal", "minecraft:shipwreck", "minecraft:stronghold", "minecraft:swamp_hut", "minecraft:trial_chambers", "minecraft:village_desert", "minecraft:village_plains", "minecraft:village_savanna", "minecraft:village_snowy", "minecraft:village_taiga"
];

const DATA_POTIONS = [
  "minecraft:awkward", "minecraft:fire_resistance", "minecraft:harming", "minecraft:healing", "minecraft:invisibility", "minecraft:leaping", "minecraft:luck", "minecraft:night_vision", "minecraft:poison", "minecraft:regeneration", "minecraft:slow_falling", "minecraft:slowness", "minecraft:strength", "minecraft:swiftness", "minecraft:turtle_master", "minecraft:water_breathing", "minecraft:weakness", "minecraft:wind_charged", "minecraft:weaving", "minecraft:oozing", "minecraft:infested"
];

const DATA_EFFECTS = [
  "minecraft:speed", "minecraft:slowness", "minecraft:haste", "minecraft:mining_fatigue", "minecraft:strength", "minecraft:instant_health", "minecraft:instant_damage", "minecraft:jump_boost", "minecraft:nausea", "minecraft:regeneration", "minecraft:resistance", "minecraft:fire_resistance", "minecraft:water_breathing", "minecraft:invisibility", "minecraft:blindness", "minecraft:night_vision", "minecraft:hunger", "minecraft:weakness", "minecraft:poison", "minecraft:wither", "minecraft:health_boost", "minecraft:absorption", "minecraft:saturation", "minecraft:glowing", "minecraft:levitation", "minecraft:luck", "minecraft:unluck", "minecraft:slow_falling", "minecraft:conduit_power", "minecraft:dolphins_grace", "minecraft:bad_omen", "minecraft:hero_of_the_village", "minecraft:darkness", "minecraft:trial_omen", "minecraft:raid_omen", "minecraft:wind_charged", "minecraft:weaving", "minecraft:oozing", "minecraft:infested"
];

const DATA_BLOCKS = [
  "minecraft:stone", "minecraft:granite", "minecraft:diorite", "minecraft:andesite", "minecraft:deepslate", "minecraft:dirt", "minecraft:grass_block", "minecraft:cobblestone", "minecraft:oak_planks", "minecraft:spruce_planks", "minecraft:birch_planks", "minecraft:jungle_planks", "minecraft:acacia_planks", "minecraft:dark_oak_planks", "minecraft:mangrove_planks", "minecraft:cherry_planks", "minecraft:bamboo_planks", "minecraft:crimson_planks", "minecraft:warped_planks", "minecraft:bedrock", "minecraft:sand", "minecraft:gravel", "minecraft:gold_ore", "minecraft:iron_ore", "minecraft:coal_ore", "minecraft:diamond_ore", "minecraft:lapis_ore", "minecraft:emerald_ore", "minecraft:ancient_debris", "minecraft:crafting_table", "minecraft:furnace", "minecraft:blast_furnace", "minecraft:smoker", "minecraft:chest", "minecraft:trapped_chest", "minecraft:ender_chest", "minecraft:barrel", "minecraft:beacon", "minecraft:anvil", "minecraft:enchanting_table", "minecraft:brewing_stand", "minecraft:cauldron", "minecraft:lava_cauldron", "minecraft:water_cauldron", "minecraft:powder_snow_cauldron", "minecraft:tnt", "minecraft:bookshelf", "minecraft:chiseled_bookshelf", "minecraft:obsidian", "minecraft:crying_obsidian", "minecraft:respawn_anchor", "minecraft:target", "minecraft:honey_block", "minecraft:slime_block", "minecraft:sculk", "minecraft:sculk_catalyst", "minecraft:sculk_sensor", "minecraft:sculk_shrieker", "minecraft:crafter", "minecraft:vault", "minecraft:trial_spawner"
];

// ==========================================
// 2. BACKGROUND PRESETS
// ==========================================
const BACKGROUND_PRESETS = {
  adventure: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/26.2/assets/minecraft/textures/gui/advancements/backgrounds/adventure.png",
  stone: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/26.2/assets/minecraft/textures/block/stone.png",
  dirt: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/26.2/assets/minecraft/textures/block/dirt.png",
  bedrock: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/26.2/assets/minecraft/textures/block/bedrock.png",
  netherrack: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/26.2/assets/minecraft/textures/block/netherrack.png",
  end_stone: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/26.2/assets/minecraft/textures/block/end_stone.png",
  deepslate: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/26.2/assets/minecraft/textures/block/deepslate.png",
  oak_planks: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/26.2/assets/minecraft/textures/block/oak_planks.png",
  dark_prismarine: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/26.2/assets/minecraft/textures/block/dark_prismarine.png",
  crying_obsidian: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/26.2/assets/minecraft/textures/block/crying_obsidian.png"
};

// ==========================================
// 3. STATE
// ==========================================
const state = {
  namespace: "custom",
  activeFolder: "story",
  advancements: [],
  selectedId: null,
  scale: 1,
  panX: 280,
  panY: 220,
  isPanning: false,
  startPanX: 0,
  startPanY: 0,
  dragNodeId: null,
  dragStartX: 0,
  dragStartY: 0,
  dragNodeInitialX: 0,
  dragNodeInitialY: 0,
  isDraggingNode: false,
  currentBackground: BACKGROUND_PRESETS.stone,
  bgTileSize: 64,
  bgOpacity: 0.9,
  itemsList: [],
  customFunctions: {},
  customTextures: {},
  assetsBaseUrl: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/26.2/assets/minecraft/textures/"
};

// ==========================================
// 4. INITIAL BLANK ROOT ADVANCEMENT
// ==========================================
const initialAdvancements = [
  {
    id: "root",
    folder: "story",
    parent: null,
    x: 80,
    y: 200,
    sends_telemetry_event: false,
    display: {
      title: "",
      description: "",
      icon: "",
      frame: "task",
      show_toast: true,
      announce_to_chat: true,
      hidden: false,
      background: "minecraft:block/stone"
    },
    criteria: [
      { id: "trigger", trigger: "minecraft:tick", conditions: {} }
    ],
    requirementsMode: "AND",
    customRequirements: [],
    rewards: { experience: 0, recipes: [], function: "", loot: [] }
  }
];

// ==========================================
// 5. ITEM & TEXTURE ASSET MANAGER
// ==========================================
async function loadItemsDatabase() {
  try {
    let res = await fetch('../items.json');
    if (!res.ok) res = await fetch('./items.json');
    if (!res.ok) res = await fetch('items.json');
    if (res.ok) {
      const data = await res.json();
      state.itemsList = data.values || [];
    }
  } catch (err) {
    console.warn("items.json fallback list used.", err);
    state.itemsList = [
      "minecraft:nether_star", "minecraft:diamond_sword", "minecraft:netherite_chestplate",
      "minecraft:golden_apple", "minecraft:cauldron", "minecraft:brewing_stand",
      "minecraft:totem_of_undying", "minecraft:suspicious_stew", "minecraft:beetroot_soup",
      "minecraft:mushroom_stew", "minecraft:leather_helmet", "minecraft:enchanted_book",
      "minecraft:crafting_table", "minecraft:potion", "minecraft:soul_lantern",
      "minecraft:diamond", "minecraft:iron_ingot", "minecraft:elytra"
    ];
  }

  // Populate Datalist for instant browser drop-bar
  let datalist = document.getElementById('minecraftItemsList');
  if (!datalist) {
    datalist = document.createElement('datalist');
    datalist.id = 'minecraftItemsList';
    document.body.appendChild(datalist);
  }
  datalist.innerHTML = state.itemsList.map(item => `<option value="${item}"></option>`).join('');
  createOrUpdateDatalists();
}

function getItemTextureUrl(itemId) {
  if (!itemId || !itemId.trim() || itemId === "minecraft:air") return "";
  const cleanId = itemId.replace("minecraft:", "").trim();
  if (!cleanId) return "";
  return `${state.assetsBaseUrl}item/${cleanId}.png`;
}

function handleImageError(img, itemId) {
  if (!itemId || !itemId.trim() || itemId === "minecraft:air") {
    img.style.display = "none";
    return;
  }
  const cleanId = itemId.replace("minecraft:", "").trim();
  const step = parseInt(img.dataset.fallbackStep || "0");

  if (step === 0) {
    img.dataset.fallbackStep = "1";
    img.src = `${state.assetsBaseUrl}block/${cleanId}.png`;
  } else if (step === 1) {
    img.dataset.fallbackStep = "2";
    img.src = `https://raw.githubusercontent.com/PrismarineJS/minecraft-assets/master/data/1.20.4/items/${cleanId}.png`;
  } else if (step === 2) {
    img.dataset.fallbackStep = "3";
    img.src = `https://raw.githubusercontent.com/PrismarineJS/minecraft-assets/master/data/1.20.4/blocks/${cleanId}.png`;
  } else if (step === 3) {
    img.dataset.fallbackStep = "4";
    img.src = createFallbackIcon(itemId);
  }
}

function createFallbackIcon(itemId) {
  if (!itemId || !itemId.trim()) return "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32'/>";
  const clean = (itemId || "M").replace("minecraft:", "").replace(/[_-]/g, " ");
  const firstLetter = clean.charAt(0).toUpperCase();
  return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><rect width="32" height="32" rx="4" fill="%23222222" stroke="%23ffa600" stroke-width="2"/><text x="16" y="21" fill="%23ffa600" font-family="sans-serif" font-size="14" font-weight="900" text-anchor="middle">${firstLetter}</text></svg>`;
}

// ==========================================
// 6. BACKGROUND ENGINE (CUSTOM & PRESETS)
// ==========================================
function resolveMinecraftTextureUrl(val) {
  if (!val) return BACKGROUND_PRESETS.stone;
  val = val.trim();
  if (val.startsWith('http://') || val.startsWith('https://') || val.startsWith('data:')) {
    return val;
  }
  if (BACKGROUND_PRESETS[val]) {
    return BACKGROUND_PRESETS[val];
  }
  if (val.startsWith('minecraft:block/')) {
    const name = val.replace('minecraft:block/', '');
    return `${state.assetsBaseUrl}block/${name}.png`;
  }
  if (val.startsWith('minecraft:item/')) {
    const name = val.replace('minecraft:item/', '');
    return `${state.assetsBaseUrl}item/${name}.png`;
  }
  if (val.startsWith('minecraft:textures/')) {
    const path = val.replace('minecraft:textures/', '');
    return `${state.assetsBaseUrl}${path}`;
  }
  if (state.customTextures && state.customTextures[val]) {
    return state.customTextures[val];
  }
  return `${state.assetsBaseUrl}block/${val}.png`;
}

function setCanvasBackground(textureUrl) {
  state.currentBackground = textureUrl;
  const bgEl = document.getElementById('advCanvasBg');
  if (bgEl) {
    bgEl.style.backgroundImage = `url('${textureUrl}')`;
    bgEl.style.backgroundSize = `${state.bgTileSize}px ${state.bgTileSize}px`;
    bgEl.style.opacity = state.bgOpacity;
  }
}

function updateRootBackground(val) {
  const node = state.advancements.find(a => a.id === state.selectedId);
  if (node) {
    if (!node.display) node.display = {};
    node.display.background = val;
  }
  const texUrl = resolveMinecraftTextureUrl(val);
  setCanvasBackground(texUrl);
}

function handlePresetBgChange(presetKey) {
  if (presetKey === "custom_url") {
    openCustomBgModal();
  } else if (BACKGROUND_PRESETS[presetKey]) {
    setCanvasBackground(BACKGROUND_PRESETS[presetKey]);
    const root = state.advancements.find(a => !a.parent);
    if (root && root.display) {
      root.display.background = presetKey === "adventure" 
        ? "minecraft:textures/gui/advancements/backgrounds/adventure.png"
        : `minecraft:block/${presetKey}`;
    }
    showToast(`🖼️ Canvas background: ${presetKey}`);
  }
}

function openCustomBgModal() {
  document.getElementById('customBgModal').classList.add('open');
}

function closeCustomBgModal() {
  document.getElementById('customBgModal').classList.remove('open');
}

function applyCustomBgUrl() {
  const url = document.getElementById('customBgUrlInput').value.trim();
  if (url) {
    updateRootBackground(url);
    closeCustomBgModal();
    showToast("✨ Custom background applied!");
  }
}

function handleCustomBgFileUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    state.customTextures[file.name] = e.target.result;
    updateRootBackground(file.name);
    closeCustomBgModal();
    showToast("🖼️ Custom local texture image applied!");
  };
  reader.readAsDataURL(file);
}

// ==========================================
// 7. CANVAS NAVIGATION (PAN, DRAG & ZOOM)
// ==========================================
const canvasContainer = document.getElementById('advCanvasContainer');
const canvasSpace = document.getElementById('advCanvasSpace');
const nodesLayer = document.getElementById('advNodesLayer');
const connectionsSvg = document.getElementById('advConnectionsSvg');
const canvasBg = document.getElementById('advCanvasBg');

function updateCanvasTransform() {
  canvasSpace.style.transform = `translate(${state.panX}px, ${state.panY}px) scale(${state.scale})`;
  if (canvasBg) {
    canvasBg.style.transform = `translate(${state.panX % state.bgTileSize}px, ${state.panY % state.bgTileSize}px) scale(${state.scale})`;
  }
}

function initCanvasEvents() {
  // Panning on canvas container
  canvasContainer.addEventListener('mousedown', (e) => {
    closeContextMenu();
    const onInteractive = e.target.closest('.misode-node') || e.target.closest('.bg-customizer-bar') || e.target.closest('.canvas-toolbar') || e.target.closest('.misode-sidebar') || e.target.closest('.modal-box');
    if (!onInteractive && (e.button === 0 || e.button === 1)) {
      state.isPanning = true;
      state.startPanX = e.clientX - state.panX;
      state.startPanY = e.clientY - state.panY;
      canvasContainer.classList.add('panning');
      e.preventDefault();
    }
  });

  window.addEventListener('click', (e) => {
    if (!e.target.closest('#nodeContextMenu')) {
      closeContextMenu();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeContextMenu();
      closeActionModal();
      closeDatapackFilesModal();
      closeCustomBgModal();
    }
  });

  const inputNew = document.getElementById('actionModalInputNew');
  if (inputNew) {
    inputNew.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        submitActionModal();
      }
    });
  }

  // Mouse Move: Pan or Node Drag
  window.addEventListener('mousemove', (e) => {
    if (state.isPanning) {
      state.panX = e.clientX - state.startPanX;
      state.panY = e.clientY - state.startPanY;
      updateCanvasTransform();
    } else if (state.isDraggingNode && state.dragNodeId) {
      const node = state.advancements.find(a => a.id === state.dragNodeId);
      if (node) {
        const dx = (e.clientX - state.dragStartX) / state.scale;
        const dy = (e.clientY - state.dragStartY) / state.scale;
        node.x = Math.round(state.dragNodeInitialX + dx);
        node.y = Math.round(state.dragNodeInitialY + dy);
        const el = document.getElementById(`node-${node.id}`);
        if (el) {
          el.style.left = `${node.x}px`;
          el.style.top = `${node.y}px`;
        }
        renderConnections();
      }
    }
  });

  // Mouse Up: Stop Pan or Drop Node
  window.addEventListener('mouseup', (e) => {
    if (state.isPanning) {
      state.isPanning = false;
      canvasContainer.classList.remove('panning');
    }
    if (state.isDraggingNode) {
      const draggedNodeId = state.dragNodeId;
      const el = document.getElementById(`node-${draggedNodeId}`);
      if (el) el.classList.remove('dragging');

      const dist = Math.hypot(e.clientX - state.dragStartX, e.clientY - state.dragStartY);
      if (dist < 6) {
        selectAdvancement(draggedNodeId);
      } else {
        checkSiblingOrderSwap(draggedNodeId);
      }

      state.isDraggingNode = false;
      state.dragNodeId = null;
    }
  });

  // Wheel Zoom centered on cursor
  canvasContainer.addEventListener('wheel', (e) => {
    e.preventDefault();
    closeContextMenu();
    const factor = e.deltaY < 0 ? 1.12 : 0.88;
    const newScale = Math.min(Math.max(state.scale * factor, 0.3), 2.5);

    const rect = canvasContainer.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    state.panX = mouseX - (mouseX - state.panX) * (newScale / state.scale);
    state.panY = mouseY - (mouseY - state.panY) * (newScale / state.scale);
    state.scale = newScale;
    updateCanvasTransform();
  }, { passive: false });

  // Double Click on empty canvas to create a new advancement root/node
  canvasContainer.addEventListener('dblclick', (e) => {
    const onInteractive = e.target.closest('.misode-node') || e.target.closest('.bg-customizer-bar') || e.target.closest('.canvas-toolbar');
    if (!onInteractive) {
      createNewAdvancement();
    }
  });
}

function zoomIn() {
  state.scale = Math.min(state.scale * 1.2, 2.5);
  updateCanvasTransform();
}

function zoomOut() {
  state.scale = Math.max(state.scale / 1.2, 0.3);
  updateCanvasTransform();
}

function resetCanvasTransform() {
  state.scale = 1;
  state.panX = 220;
  state.panY = 160;
  updateCanvasTransform();
  showToast("🎯 Vista centrata.");
}

function autoLayoutTree() {
  computeAutoLayout();
  renderAll();
  showToast("🌳 Albero riorganizzato con spaziatura ottimale!");
}

// ==========================================
// 8. TREE RENDERING, SUBFOLDERS & AUTO-LAYOUT
// ==========================================
function getActiveFolderAdvancements() {
  const currentFolder = state.activeFolder || "story";
  return state.advancements.filter(a => (a.folder || "story") === currentFolder);
}

function getAvailableFolders() {
  const set = new Set();
  state.advancements.forEach(a => {
    set.add(a.folder || "story");
  });
  if (set.size === 0) set.add(state.activeFolder || "story");
  return Array.from(set);
}

function renderFolderTabs() {
  const container = document.getElementById('folderTabsList');
  if (!container) return;

  const folders = getAvailableFolders();
  if (!folders.includes(state.activeFolder) && folders.length > 0) {
    state.activeFolder = folders[0];
  }

  container.innerHTML = `
    ${folders.map(f => {
      const count = state.advancements.filter(a => (a.folder || 'story') === f).length;
      return `
        <button class="folder-tab-btn ${f === state.activeFolder ? 'active' : ''}" onclick="switchActiveFolder('${escapeHtml(f)}')">
          📁 ${escapeHtml(f)} <span style="font-size: 10px; opacity: 0.7;">(${count})</span>
        </button>
      `;
    }).join('')}
    <button class="folder-tab-add-btn" onclick="promptAddNewFolderCategory()">➕ Nuova Scheda</button>
  `;
}

function switchActiveFolder(folderName) {
  state.activeFolder = folderName;
  const inFolder = getActiveFolderAdvancements();
  if (inFolder.length > 0) {
    state.selectedId = inFolder[0].id;
    const root = inFolder.find(a => !a.parent);
    if (root && root.display && root.display.background) {
      updateRootBackground(root.display.background);
    }
  } else {
    state.selectedId = null;
  }
  computeAutoLayout();
  renderAll();
  showToast(`📂 Aperta sottocartella: "${folderName}"`);
}

function promptAddNewFolderCategory() {
  const name = prompt("Inserisci il nome della nuova sottocartella / categoria di advancement (es. nether, end, custom_quests):", "");
  if (!name) return;
  const cleanName = name.trim().toLowerCase().replace(/[^a-z0-9_.-]/g, '_');
  if (!cleanName) return;

  const newRoot = {
    id: "root",
    folder: cleanName,
    parent: null,
    x: 80,
    y: 200,
    display: {
      title: `${cleanName.charAt(0).toUpperCase() + cleanName.slice(1)} Root`,
      description: "Begin quests in this category",
      icon: "minecraft:grass_block",
      frame: "task",
      show_toast: true,
      announce_to_chat: true,
      hidden: false,
      background: "minecraft:textures/gui/advancements/backgrounds/adventure.png"
    },
    criteria: [
      { id: "trigger", trigger: "minecraft:tick", conditions: {} }
    ]
  };

  state.advancements.push(newRoot);
  state.activeFolder = cleanName;
  state.selectedId = "root";
  computeAutoLayout();
  renderAll();
  showToast(`✨ Creata nuova sottocartella "${cleanName}" con advancement root!`);
}

function updateNodeFolder(newFolder) {
  const node = state.advancements.find(a => a.id === state.selectedId);
  if (node) {
    node.folder = (newFolder || "story").trim().toLowerCase().replace(/[^a-z0-9_.-]/g, '_');
    renderAll();
  }
}

function computeAutoLayout() {
  const activeNodes = getActiveFolderAdvancements();
  const roots = activeNodes.filter(a => !a.parent || !activeNodes.some(p => p.id === a.parent));
  if (roots.length === 0 && activeNodes.length > 0) {
    roots.push(activeNodes[0]);
  }

  let currentY = 100;
  const H_SPACING = 110;
  const V_SPACING = 80;

  function layoutNode(node, depth) {
    node.x = 80 + depth * H_SPACING;
    const children = activeNodes.filter(a => a.parent === node.id);

    if (children.length === 0) {
      node.y = currentY;
      currentY += V_SPACING;
      return;
    }

    children.forEach(child => {
      layoutNode(child, depth + 1);
    });

    const firstY = children[0].y;
    const lastY = children[children.length - 1].y;
    node.y = Math.round((firstY + lastY) / 2);
  }

  roots.forEach(root => {
    layoutNode(root, 0);
    currentY += 40;
  });
}

function renderAll() {
  renderFolderTabs();
  renderNodes();
  renderConnections();
  renderSidebar();
  updateFooterButtonsUI();
}

function renderNodes() {
  nodesLayer.innerHTML = '';
  const activeNodes = getActiveFolderAdvancements();
  activeNodes.forEach(node => {
    const el = createNodeElement(node);
    nodesLayer.appendChild(el);
  });
}

function createNodeElement(node) {
  const div = document.createElement('div');
  div.id = `node-${node.id}`;
  div.className = `misode-node ${state.selectedId === node.id ? 'selected' : ''}`;
  div.style.left = `${node.x}px`;
  div.style.top = `${node.y}px`;

  const frameType = node.display?.frame || 'task';
  const iconId = node.display?.icon ? node.display.icon.trim() : "";
  const iconUrl = getItemTextureUrl(iconId);
  const isRoot = !node.parent;

  const iconHtml = iconUrl 
    ? `<img class="node-item-img" src="${iconUrl}" alt="${node.id}" onerror="handleImageError(this, '${iconId}')">`
    : `<div class="node-empty-icon" style="width: 32px; height: 32px;"></div>`;

  div.innerHTML = `
    <div class="node-card frame-${frameType}">
      ${iconHtml}
      ${isRoot ? '<div class="node-root-badge">ROOT</div>' : ''}
    </div>
  `;

  // Mousedown for node dragging
  div.addEventListener('mousedown', (e) => {
    if (e.button !== 0) return;
    e.stopPropagation();
    closeContextMenu();

    state.isDraggingNode = true;
    state.dragNodeId = node.id;
    state.dragStartX = e.clientX;
    state.dragStartY = e.clientY;
    state.dragNodeInitialX = node.x;
    state.dragNodeInitialY = node.y;
    div.classList.add('dragging');
  });

  // Right Click: open context menu
  div.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    e.stopPropagation();
    openContextMenu(node.id, e.clientX, e.clientY);
  });

  return div;
}

// Check if dragging node vertically changed sibling sequence
function checkSiblingOrderSwap(draggedNodeId) {
  const node = state.advancements.find(a => a.id === draggedNodeId);
  if (!node) return;

  const currentFolder = node.folder || "story";
  const siblings = state.advancements.filter(a => (a.folder || "story") === currentFolder && a.parent === node.parent);
  if (siblings.length <= 1) return;

  const sorted = [...siblings].sort((a, b) => a.y - b.y);

  let orderChanged = false;
  for (let i = 0; i < siblings.length; i++) {
    if (siblings[i].id !== sorted[i].id) {
      orderChanged = true;
      break;
    }
  }

  if (orderChanged) {
    const otherNodes = state.advancements.filter(a => !((a.folder || "story") === currentFolder && a.parent === node.parent));
    state.advancements = [...otherNodes, ...sorted];
    computeAutoLayout();
    renderAll();
    showToast(`🔄 Sequenza rami aggiornata!`);
  }
}

// Move branch Up or Down among siblings
function moveNodeSiblingOrder(nodeId, direction) {
  const node = state.advancements.find(a => a.id === nodeId);
  if (!node) return;

  const currentFolder = node.folder || "story";
  const siblings = state.advancements.filter(a => (a.folder || "story") === currentFolder && a.parent === node.parent);
  const currIdx = siblings.findIndex(a => a.id === node.id);
  const targetIdx = currIdx + direction;

  if (targetIdx < 0 || targetIdx >= siblings.length) {
    showToast(direction < 0 ? "ℹ️ Questo ramo è già il primo (più in alto)" : "ℹ️ Questo ramo è già l'ultimo (più in basso)");
    return;
  }

  const otherNode = siblings[targetIdx];
  const idxA = state.advancements.indexOf(node);
  const idxB = state.advancements.indexOf(otherNode);

  state.advancements[idxA] = otherNode;
  state.advancements[idxB] = node;

  computeAutoLayout();
  renderAll();
  selectAdvancement(node.id);
  showToast(direction < 0 ? `⬆️ Ramo "${node.id}" spostato SOPRA a "${otherNode.id}"` : `⬇️ Ramo "${node.id}" spostato SOTTO a "${otherNode.id}"`);
}

// ==========================================
// 9. SOLID ORTHOGONAL STEPPED CONNECTIONS
// ==========================================
function renderConnections() {
  connectionsSvg.innerHTML = '';
  const activeNodes = getActiveFolderAdvancements();

  activeNodes.forEach(node => {
    if (!node.parent) return;
    const parentNode = activeNodes.find(a => a.id === node.parent);
    if (!parentNode) return;

    const x1 = parentNode.x + 26;
    const y1 = parentNode.y;
    const x2 = node.x - 26;
    const y2 = node.y;

    const midX = (x1 + x2) / 2;
    const d = `M ${x1} ${y1} H ${midX} V ${y2} H ${x2}`;
    const isSelected = state.selectedId === node.id || state.selectedId === parentNode.id;

    const outerPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    outerPath.setAttribute("d", d);
    outerPath.setAttribute("class", "tree-line-outer");
    connectionsSvg.appendChild(outerPath);

    const innerPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    innerPath.setAttribute("d", d);
    innerPath.setAttribute("class", `tree-line-inner ${isSelected ? 'selected' : ''}`);
    connectionsSvg.appendChild(innerPath);
  });
}

// ==========================================
// 10. LOCAL FOLDER & DATAPACK FILE MANAGER
// ==========================================
function openDatapackFilesModal() {
  updateDatapackFilesModalUI();
  const modal = document.getElementById('datapackFilesModal');
  if (modal) modal.classList.add('open');
}

function closeDatapackFilesModal() {
  const modal = document.getElementById('datapackFilesModal');
  if (modal) modal.classList.remove('open');
}

function updateDatapackFilesModalUI() {
  const funcList = document.getElementById('mcfunctionList');
  if (funcList) {
    const funcKeys = Object.keys(state.customFunctions || {});
    if (funcKeys.length === 0) {
      funcList.innerHTML = '<em>Nessun file .mcfunction caricato.</em>';
    } else {
      funcList.innerHTML = funcKeys.map(k => `
        <div style="display: flex; justify-content: space-between; align-items: center; background: #1a1a1a; padding: 6px 10px; border-radius: 4px; margin-bottom: 3px;">
          <span>📜 <strong>${escapeHtml(k)}.mcfunction</strong> (${(state.customFunctions[k] || '').split('\n').length} righe)</span>
          <button class="chest-btn btn-remove" onclick="deleteMcfunctionFile('${escapeHtml(k)}')">🗑️</button>
        </div>
      `).join('');
    }
  }

  const texList = document.getElementById('customTexturesList');
  if (texList) {
    const texKeys = Object.keys(state.customTextures || {});
    if (texKeys.length === 0) {
      texList.innerHTML = '<em>Nessuna texture personalizzata caricata.</em>';
    } else {
      texList.innerHTML = texKeys.map(k => `
        <div style="display: flex; flex-direction: column; align-items: center; background: #1a1a1a; padding: 6px; border-radius: 4px; width: 70px; text-align: center;">
          <img src="${state.customTextures[k]}" style="width: 36px; height: 36px; object-fit: contain; image-rendering: pixelated;" alt="${k}">
          <span style="font-size: 10px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; width: 100%; margin-top: 3px;">${escapeHtml(k)}</span>
        </div>
      `).join('');
    }
  }
}

function addNewMcfunctionFile() {
  const input = document.getElementById('newMcfunctionNameInput');
  const name = (input.value || '').trim().replace(/[^a-z0-9_.-]/gi, '');
  if (!name) {
    showToast("⚠️ Inserisci un nome per la funzione");
    return;
  }
  state.customFunctions[name] = `# Minecraft Function: ${name}\ntitle @a title {"text":"Quest Completed!","color":"gold"}\n`;
  input.value = "";
  updateDatapackFilesModalUI();
  showToast(`📜 Creata funzione "${name}.mcfunction"!`);
}

function deleteMcfunctionFile(name) {
  delete state.customFunctions[name];
  updateDatapackFilesModalUI();
  showToast(`🗑️ Rimossa funzione "${name}.mcfunction"`);
}

async function handleImportLocalFiles(event) {
  const files = Array.from(event.target.files || []);
  if (files.length === 0) return;

  // Clear previous advancements so imported datapack populates clean new tabs
  state.advancements = [];
  state.customFunctions = {};
  state.customTextures = {};

  let jsonCount = 0;
  let funcCount = 0;
  let texCount = 0;
  let dirName = "datapack";
  let dirPath = "";

  if (files.length > 0 && files[0].webkitRelativePath) {
    const rel = files[0].webkitRelativePath;
    const parts = rel.split(/[\/\\]/);
    dirName = parts[0] || "datapack";
    dirPath = parts.slice(0, Math.min(parts.length - 1, 3)).join('/');

    const dataIdx = parts.findIndex(p => p.toLowerCase() === 'data');
    if (dataIdx >= 0 && parts.length > dataIdx + 1) {
      state.namespace = parts[dataIdx + 1].toLowerCase().replace(/[^a-z0-9_.-]/g, '');
    }
  }

  for (const file of files) {
    const name = file.name;
    const lowerName = name.toLowerCase();
    const relPath = file.webkitRelativePath || name;

    if (lowerName.endsWith('.json')) {
      if (lowerName === 'pack.mcmeta') continue; // skip metadata
      try {
        const text = await file.text();
        const parsed = JSON.parse(text);

        if (parsed.advancements && Array.isArray(parsed.advancements)) {
          state.advancements = parsed.advancements;
          if (parsed.namespace) state.namespace = parsed.namespace;
          jsonCount += parsed.advancements.length;
        } else if (parsed.criteria || parsed.display) {
          const advId = name.replace(/\.json$/i, '');
          
          // Determine folder from relative path (e.g. datapack/data/ns/advancement/story/root.json -> story)
          let folder = "story";
          if (relPath) {
            const parts = relPath.split(/[\/\\]/);
            const advIdx = parts.findIndex(p => p.toLowerCase() === 'advancement' || p.toLowerCase() === 'advancements');
            if (advIdx >= 0 && parts.length > advIdx + 2) {
              folder = parts[advIdx + 1];
            } else if (parts.length > 2) {
              folder = parts[parts.length - 2];
            }
          }

          const newAdv = {
            id: advId,
            folder: folder,
            parent: parsed.parent ? parsed.parent.replace(`${state.namespace}:`, '').replace('custom:', '').replace(`${folder}/`, '') : null,
            x: 80,
            y: 200,
            sends_telemetry_event: !!parsed.sends_telemetry_event,
            display: parsed.display ? {
              title: typeof parsed.display.title === 'object' ? (parsed.display.title.text || "") : (parsed.display.title || ""),
              description: typeof parsed.display.description === 'object' ? (parsed.display.description.text || "") : (parsed.display.description || ""),
              icon: parsed.display.icon ? (parsed.display.icon.id || parsed.display.icon.item || parsed.display.icon) : "",
              frame: parsed.display.frame || "task",
              show_toast: parsed.display.show_toast !== false,
              announce_to_chat: parsed.display.announce_to_chat !== false,
              hidden: !!parsed.display.hidden,
              background: parsed.display.background || "minecraft:block/stone"
            } : null,
            criteria: []
          };

          if (parsed.criteria) {
            Object.keys(parsed.criteria).forEach(critKey => {
              const critObj = parsed.criteria[critKey];
              newAdv.criteria.push({
                id: critKey,
                trigger: critObj.trigger || "minecraft:impossible",
                conditions: critObj.conditions || {}
              });
            });
          }

          state.advancements.push(newAdv);
          jsonCount++;
        }
      } catch (err) {
        console.warn("Error parsing JSON file:", name, err);
      }
    } else if (lowerName.endsWith('.png') || lowerName.endsWith('.jpg') || lowerName.endsWith('.webp')) {
      const dataUrl = await readFileAsDataUrl(file);
      state.customTextures[name] = dataUrl;
      texCount++;
    } else if (lowerName.endsWith('.mcfunction')) {
      const text = await file.text();
      const funcName = name.replace(/\.mcfunction$/i, '');
      state.customFunctions[funcName] = text;
      funcCount++;
    }
  }

  // If no advancements were loaded, add a blank root
  if (state.advancements.length === 0) {
    state.advancements = JSON.parse(JSON.stringify(initialAdvancements));
  }

  const folders = getAvailableFolders();
  if (folders.length > 0) {
    state.activeFolder = folders[0];
    const inFolder = getActiveFolderAdvancements();
    if (inFolder.length > 0) state.selectedId = inFolder[0].id;
  }

  // Set loaded datapack info
  state.loadedDatapack = {
    name: dirName,
    path: dirPath || dirName,
    countAdv: jsonCount,
    foldersCount: folders.length,
    countFunc: funcCount,
    countTex: texCount,
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  };

  computeAutoLayout();
  renderAll();
  updateDatapackFilesModalUI();
  showToast(`✅ Datapack "${dirName}" caricato con successo (${jsonCount} advancement in ${folders.length} schede)!`);
}

function openDatapackFolderPicker() {
  const input = document.getElementById('directDatapackFolderInput');
  if (input) {
    input.value = "";
    input.click();
  }
}

function unloadDatapack() {
  state.loadedDatapack = null;
  state.activeFolder = "story";
  state.advancements = JSON.parse(JSON.stringify(initialAdvancements));
  state.selectedId = "root";
  state.customFunctions = {};
  state.customTextures = {};
  computeAutoLayout();
  renderAll();
  showToast("🧹 Datapack chiuso. Ripristinato advancement root vuoto.");
}

function updateFooterButtonsUI() {
  const statusContainer = document.getElementById('datapackStatusContainer');
  const buttonsContainer = document.getElementById('footerActionButtons');

  if (statusContainer) {
    if (state.loadedDatapack) {
      statusContainer.innerHTML = `
        <div class="datapack-status-card active">
          <div class="datapack-status-header active">
            <span>✅ DATAPACK ATTIVO</span>
            <span style="font-size: 10px; opacity: 0.85;">⏰ ${escapeHtml(state.loadedDatapack.time)}</span>
          </div>
          <div class="datapack-status-path" title="Cartella sorgente caricata">
            📁 ${escapeHtml(state.loadedDatapack.path || state.loadedDatapack.name)}
          </div>
          <div class="datapack-status-meta">
            <strong>${state.loadedDatapack.countAdv}</strong> Advancement • <strong>${state.loadedDatapack.foldersCount}</strong> Schede • <strong>${state.loadedDatapack.countFunc}</strong> Funzioni
          </div>
        </div>
      `;
    } else {
      statusContainer.innerHTML = `
        <div class="datapack-status-card">
          <div class="datapack-status-header">
            <span>📦 NESSUN DATAPACK CARICATO</span>
          </div>
          <div class="datapack-status-meta">
            Importa la cartella di un datapack per visualizzare ed editare le sue schede di advancement.
          </div>
        </div>
      `;
    }
  }

  if (buttonsContainer) {
    if (state.loadedDatapack) {
      buttonsContainer.innerHTML = `
        <div class="footer-btn-row" style="margin-bottom: 6px;">
          <button class="action-btn btn-primary" onclick="downloadDataPackZip()" title="Esporta datapack aggiornato in .ZIP">
            📦 Esporta ZIP
          </button>
          <button class="action-btn btn-gold" onclick="openJsonModal()" title="Visualizza JSON dell'advancement">
            📜 JSON View
          </button>
        </div>
        <div class="footer-btn-row">
          <button class="action-btn" onclick="openDatapackFolderPicker()" title="Ricarica o seleziona un'altra cartella">
            🔄 Cambia Datapack
          </button>
          <button class="action-btn" onclick="openDatapackFilesModal()" title="Gestione file e funzioni .mcfunction">
            📁 File & Funzioni
          </button>
        </div>
        <div class="footer-btn-row" style="margin-top: 6px;">
          <button class="action-btn" onclick="saveProjectFile()" title="Salva progetto JSON">
            💾 Salva
          </button>
          <button class="action-btn" onclick="unloadDatapack()" style="color: #ffaa55; border-color: #553311; background: #241a10;" title="Chiudi datapack e torna alla tela pulita">
            ❌ Chiudi Datapack
          </button>
        </div>
      `;
    } else {
      buttonsContainer.innerHTML = `
        <div class="footer-btn-row" style="margin-bottom: 6px;">
          <button class="action-btn btn-primary" onclick="downloadDataPackZip()" title="Download complete Data Pack as .ZIP">
            📦 Export ZIP
          </button>
          <button class="action-btn btn-gold" onclick="openJsonModal()" title="View full JSON">
            📜 JSON View
          </button>
        </div>
        <div class="footer-btn-row">
          <button class="action-btn" onclick="saveProjectFile()" title="Save project to .json">
            💾 Salva
          </button>
          <label class="action-btn" style="cursor: pointer;">
            📂 Carica JSON
            <input type="file" accept=".json" style="display: none;" onchange="loadProjectFile(event)">
          </label>
        </div>
        <div style="margin-top: 6px;">
          <button class="action-btn btn-primary" onclick="openDatapackFolderPicker()" style="width: 100%; justify-content: center; font-size: 13px;" title="Carica cartella datapack dal PC">
            📁 Importa Datapack
          </button>
        </div>
      `;
    }
  }
}

function readFileAsDataUrl(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => resolve(e.target.result);
    reader.readAsDataURL(file);
  });
}

// ==========================================
// 11. ADVANCEMENT SELECTION & CRUD
// ==========================================
function selectAdvancement(id) {
  state.selectedId = id;
  document.querySelectorAll('.misode-node').forEach(el => {
    el.classList.toggle('selected', el.id === `node-${id}`);
  });
  renderConnections();
  renderSidebar();
}

function createNewAdvancement(x, y, parentId) {
  const currentFolder = state.activeFolder || "story";
  const inFolder = state.advancements.filter(a => (a.folder || "story") === currentFolder);
  const newNum = inFolder.length + 1;
  const newId = `advancement_${newNum}`;
  const parent = parentId !== undefined ? parentId : state.selectedId;

  const newAdv = {
    id: newId,
    folder: currentFolder,
    parent: parent || null,
    x: Math.round(x !== undefined ? x : 300),
    y: Math.round(y !== undefined ? y : 200),
    sends_telemetry_event: false,
    display: {
      title: `Advancement ${newNum}`,
      description: "Unlock this quest by fulfilling the criteria.",
      icon: "minecraft:diamond_sword",
      frame: "task",
      show_toast: true,
      announce_to_chat: true,
      hidden: false
    },
    criteria: [
      { id: "trigger", trigger: "minecraft:impossible", conditions: {} }
    ],
    requirementsMode: "AND",
    customRequirements: [],
    rewards: { experience: 10, recipes: [], function: "", loot: [] }
  };

  state.advancements.push(newAdv);
  computeAutoLayout();
  renderAll();
  selectAdvancement(newId);
  showToast(`✨ Created advancement "${newAdv.id}" in folder "${currentFolder}"`);
}

function deleteCurrentAdvancement() {
  if (!state.selectedId) return;
  deleteAdvancementById(state.selectedId);
}

function deleteAdvancementById(idToDelete) {
  const nodeToDelete = state.advancements.find(a => a.id === idToDelete);
  const grandParent = nodeToDelete ? nodeToDelete.parent : null;

  state.advancements.forEach(a => {
    if (a.parent === idToDelete) a.parent = grandParent;
  });

  state.advancements = state.advancements.filter(a => a.id !== idToDelete);
  const inFolder = getActiveFolderAdvancements();
  state.selectedId = inFolder.length > 0 ? inFolder[0].id : null;
  computeAutoLayout();
  renderAll();
  showToast("🗑️ Advancement removed.");
}

// ==========================================
// CONTEXT MENU CONTROLLER (RIGHT CLICK)
// ==========================================
function openContextMenu(nodeId, clientX, clientY) {
  state.contextMenuTargetId = nodeId;
  selectAdvancement(nodeId);

  const menu = document.getElementById('nodeContextMenu');
  if (!menu) return;

  menu.innerHTML = `
    <div class="context-menu-item" onclick="contextMenuAction('child')">➕ New Child</div>
    <div class="context-menu-item" onclick="contextMenuAction('parent')">📦 New Parent</div>
    <div class="context-menu-divider"></div>
    <div class="context-menu-item" onclick="contextMenuAction('moveUp')">⬆️ Sposta Ramo Sopra</div>
    <div class="context-menu-item" onclick="contextMenuAction('moveDown')">⬇️ Sposta Ramo Sotto</div>
    <div class="context-menu-divider"></div>
    <div class="context-menu-item danger" onclick="contextMenuAction('delete')">🗑️ Delete</div>
  `;

  menu.classList.add('open');
  const rect = menu.getBoundingClientRect();
  let x = clientX;
  let y = clientY;

  if (x + rect.width > window.innerWidth - 10) {
    x = window.innerWidth - rect.width - 10;
  }
  if (y + rect.height > window.innerHeight - 10) {
    y = window.innerHeight - rect.height - 10;
  }

  menu.style.left = `${x}px`;
  menu.style.top = `${y}px`;
}

function closeContextMenu() {
  const menu = document.getElementById('nodeContextMenu');
  if (menu) menu.classList.remove('open');
  state.contextMenuTargetId = null;
}

function contextMenuAction(action) {
  const targetId = state.contextMenuTargetId || state.selectedId;
  const targetNode = state.advancements.find(a => a.id === targetId);
  closeContextMenu();
  if (!targetNode) return;

  if (action === 'child') {
    openActionModal('child', targetNode);
  } else if (action === 'parent') {
    openActionModal('parent', targetNode);
  } else if (action === 'moveUp') {
    moveNodeSiblingOrder(targetNode.id, -1);
  } else if (action === 'moveDown') {
    moveNodeSiblingOrder(targetNode.id, 1);
  } else if (action === 'delete') {
    deleteAdvancementById(targetNode.id);
  }
}

// ==========================================
// PARENT / CHILD MODAL CONTROLLER (MISODE STYLE)
// ==========================================
function openActionModal(mode, targetNode) {
  state.actionModalMode = mode;
  state.actionModalTargetNode = targetNode;

  const modal = document.getElementById('nodeActionModal');
  const title = document.getElementById('actionModalTitle');
  const labelRef = document.getElementById('actionModalLabelRef');
  const inputRef = document.getElementById('actionModalInputRef');
  const inputNew = document.getElementById('actionModalInputNew');
  const submitBtn = document.getElementById('actionModalSubmitBtn');

  if (!modal) return;

  const fullTargetId = `${state.namespace}:${targetNode.id}`;
  inputRef.value = fullTargetId;

  if (mode === 'parent') {
    title.textContent = "New Parent Advancement";
    labelRef.textContent = "Child Advancement";
    inputNew.value = `${state.namespace}:${targetNode.id}_parent`;
    submitBtn.textContent = "Create Parent";
  } else {
    title.textContent = "New Child Advancement";
    labelRef.textContent = "Parent Advancement";
    inputNew.value = `${state.namespace}:${targetNode.id}_child`;
    submitBtn.textContent = "Create Child";
  }

  modal.classList.add('open');
  setTimeout(() => {
    inputNew.focus();
    inputNew.select();
  }, 50);
}

function closeActionModal() {
  const modal = document.getElementById('nodeActionModal');
  if (modal) modal.classList.remove('open');
  state.actionModalTargetNode = null;
}

function submitActionModal() {
  const rawVal = (document.getElementById('actionModalInputNew').value || "").trim();
  const targetNode = state.actionModalTargetNode || state.advancements.find(a => a.id === state.selectedId);
  closeActionModal();

  if (!targetNode || !rawVal) return;

  let newNamespace = state.namespace;
  let newId = rawVal;

  if (rawVal.includes(':')) {
    const parts = rawVal.split(':');
    newNamespace = parts[0].trim();
    newId = parts.slice(1).join(':').trim();
  }

  newId = newId.replace(/\s+/g, '_').toLowerCase();
  state.namespace = newNamespace;

  // Collision check
  if (state.advancements.some(a => a.id === newId)) {
    newId = `${newId}_${Date.now().toString().slice(-4)}`;
  }

  if (state.actionModalMode === 'parent') {
    createParentAdvancement(targetNode, newId);
  } else {
    createChildAdvancement(targetNode, newId);
  }
}

function createChildAdvancement(parentNode, customId) {
  const newNum = state.advancements.length + 1;
  const newId = customId || `advancement_${newNum}`;
  const newChild = {
    id: newId,
    parent: parentNode.id,
    x: parentNode.x + 110,
    y: parentNode.y + 20,
    sends_telemetry_event: false,
    display: {
      title: formatTitleFromId(newId),
      description: "Unlock this quest by fulfilling criteria.",
      icon: "minecraft:iron_sword",
      frame: "task",
      show_toast: true,
      announce_to_chat: true,
      hidden: false
    },
    criteria: [{ id: "requirement", trigger: "minecraft:impossible", conditions: {} }],
    requirementsMode: "AND",
    customRequirements: [],
    rewards: { experience: 10, recipes: [], function: "", loot: [] }
  };

  state.advancements.push(newChild);
  renderAll();
  selectAdvancement(newId);
  showToast(`✨ Created child "${newId}" for "${parentNode.id}"`);
}

function createParentAdvancement(childNode, customId) {
  const newNum = state.advancements.length + 1;
  const newParentId = customId || `parent_${newNum}`;
  const oldParent = childNode.parent;

  const newParent = {
    id: newParentId,
    parent: oldParent,
    x: Math.max(childNode.x - 110, 40),
    y: childNode.y,
    sends_telemetry_event: false,
    display: {
      title: formatTitleFromId(newParentId),
      description: "Prerequisite quest",
      icon: "minecraft:book",
      frame: "task",
      show_toast: true,
      announce_to_chat: true,
      hidden: false
    },
    criteria: [{ id: "requirement", trigger: "minecraft:impossible", conditions: {} }],
    requirementsMode: "AND",
    customRequirements: [],
    rewards: { experience: 10, recipes: [], function: "", loot: [] }
  };

  childNode.parent = newParentId;
  state.advancements.push(newParent);
  renderAll();
  selectAdvancement(newParentId);
  showToast(`✨ Created parent "${newParentId}" for "${childNode.id}"`);
}

function formatTitleFromId(id) {
  return id
    .replace(/[_-]/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase());
}

// ==========================================
// 11.5 DATALISTS INITIALIZER FOR CONDITIONS
// ==========================================
function createOrUpdateDatalists() {
  let dlContainer = document.getElementById('advDatalistsContainer');
  if (!dlContainer) {
    dlContainer = document.createElement('div');
    dlContainer.id = 'advDatalistsContainer';
    dlContainer.style.display = 'none';
    document.body.appendChild(dlContainer);
  }

  // Items datalist
  const itemOptions = (state.itemsList && state.itemsList.length > 0)
    ? state.itemsList.map(it => `<option value="${it.id}">${it.name || it.id}</option>`).join('')
    : DATA_BLOCKS.map(b => `<option value="${b}">${b}</option>`).join('');

  dlContainer.innerHTML = `
    <datalist id="itemsDatalist">${itemOptions}</datalist>
    <datalist id="entitiesDatalist">${DATA_ENTITIES.map(e => `<option value="${e}">${e}</option>`).join('')}</datalist>
    <datalist id="biomesDatalist">${DATA_BIOMES.map(b => `<option value="${b}">${b}</option>`).join('')}</datalist>
    <datalist id="structuresDatalist">${DATA_STRUCTURES.map(s => `<option value="${s}">${s}</option>`).join('')}</datalist>
    <datalist id="potionsDatalist">${DATA_POTIONS.map(p => `<option value="${p}">${p}</option>`).join('')}</datalist>
    <datalist id="effectsDatalist">${DATA_EFFECTS.map(ef => `<option value="${ef}">${ef}</option>`).join('')}</datalist>
    <datalist id="blocksDatalist">${DATA_BLOCKS.map(bl => `<option value="${bl}">${bl}</option>`).join('')}</datalist>
    <datalist id="backgroundPresetsList">
      <option value="minecraft:block/allium">Allium Flower Block</option>
      <option value="minecraft:block/stone">Stone</option>
      <option value="minecraft:block/dirt">Dirt</option>
      <option value="minecraft:block/deepslate">Deepslate</option>
      <option value="minecraft:block/crying_obsidian">Crying Obsidian</option>
      <option value="minecraft:block/oak_planks">Oak Planks</option>
      <option value="minecraft:block/dark_prismarine">Dark Prismarine</option>
      <option value="minecraft:block/bedrock">Bedrock</option>
      <option value="minecraft:block/netherrack">Netherrack</option>
      <option value="minecraft:block/end_stone">End Stone</option>
      <option value="minecraft:textures/gui/advancements/backgrounds/adventure.png">Adventure GUI</option>
      <option value="minecraft:textures/gui/advancements/backgrounds/stone.png">Stone GUI</option>
      <option value="minecraft:textures/gui/advancements/backgrounds/nether.png">Nether GUI</option>
      <option value="minecraft:textures/gui/advancements/backgrounds/end.png">End GUI</option>
      <option value="minecraft:textures/gui/advancements/backgrounds/husbandry.png">Husbandry GUI</option>
    </datalist>
  `;
}

function getDefaultConditionsForTrigger(trigger) {
  if (trigger === "minecraft:inventory_changed") return { item: "minecraft:diamond", minCount: "1" };
  if (trigger === "minecraft:recipe_crafted" || trigger === "minecraft:recipe_unlocked" || trigger === "minecraft:crafter_recipe_crafted") return { recipe: "minecraft:crafting_table" };
  if (trigger === "minecraft:player_killed_entity" || trigger === "minecraft:entity_killed_player" || trigger === "minecraft:player_hurt_entity" || trigger === "minecraft:entity_hurt_player" || trigger === "minecraft:player_interacted_with_entity" || trigger === "minecraft:summoned_entity" || trigger === "minecraft:tame_animal" || trigger === "minecraft:kill_mob_near_sculk_catalyst") return { entity: "minecraft:zombie" };
  if (trigger === "minecraft:consume_item" || trigger === "minecraft:throw_item" || trigger === "minecraft:using_item") return { item: "minecraft:golden_apple" };
  if (trigger === "minecraft:placed_block" || trigger === "minecraft:slide_down_block" || trigger === "minecraft:enter_block" || trigger === "minecraft:default_block_use") return { block: "minecraft:tnt" };
  if (trigger === "minecraft:item_used_on_block") return { block: "minecraft:respawn_anchor", item: "minecraft:glowstone" };
  if (trigger === "minecraft:location" || trigger === "minecraft:slept_in_bed" || trigger === "minecraft:hero_of_the_village" || trigger === "minecraft:voluntary_exile") return { biome: "minecraft:deep_dark", dimension: "minecraft:overworld" };
  if (trigger === "minecraft:bred_animals") return { parent: "minecraft:horse" };
  if (trigger === "minecraft:brewed_potion") return { potion: "minecraft:invisibility" };
  if (trigger === "minecraft:enchanted_item") return { item: "minecraft:diamond_sword", levels: "30" };
  if (trigger === "minecraft:fall_from_height") return { distance: "30" };
  if (trigger === "minecraft:nether_travel") return { distance: "7000" };
  if (trigger === "minecraft:levitation") return { distance: "50" };
  if (trigger === "minecraft:fishing_rod_hooked") return { item: "minecraft:enchanted_book" };
  if (trigger === "minecraft:item_durability_changed") return { item: "minecraft:elytra", durabilityMin: "0", delta: "-1" };
  if (trigger === "minecraft:construct_beacon") return { level: "4" };
  if (trigger === "minecraft:target_hit") return { signalStrength: "15" };
  if (trigger === "minecraft:villager_trade") return { item: "minecraft:emerald" };
  if (trigger === "minecraft:effects_changed") return { effect: "minecraft:speed" };
  return {};
}

function renderCriteriaConditionEditor(crit, idx) {
  const trigger = crit.trigger || "minecraft:impossible";
  const cond = crit.conditions || {};
  const trigDef = MINECRAFT_TRIGGERS.find(t => t.id === trigger);
  const desc = trigDef ? trigDef.desc : "Trigger di gioco";

  let specificFieldsHtml = "";

  if (trigger === "minecraft:inventory_changed") {
    specificFieldsHtml = `
      <div class="condition-builder-panel">
        <div class="condition-builder-title">
          <span>📦 Condizione Inventario</span>
          <span class="condition-badge">items: [${escapeHtml(cond.item || '*')}]</span>
        </div>
        <div class="form-row">
          <label class="form-label">Oggetto / Tag (Item ID o #tag):</label>
          <div class="input-with-action">
            <input type="text" list="itemsDatalist" class="misode-input" value="${escapeHtml(cond.item || '')}" placeholder="es. minecraft:diamond, #minecraft:swords, * per qualsiasi" oninput="updateCriteriaConditionField(${idx}, 'item', this.value)">
          </div>
        </div>
        <div class="condition-subgrid">
          <div class="form-row">
            <label class="form-label">Quantità Minima:</label>
            <input type="number" min="1" class="misode-input" value="${escapeHtml(cond.minCount !== undefined ? cond.minCount : '1')}" placeholder="1" oninput="updateCriteriaConditionField(${idx}, 'minCount', this.value)">
          </div>
          <div class="form-row">
            <label class="form-label">Quantità Massima (opz.):</label>
            <input type="number" min="1" class="misode-input" value="${escapeHtml(cond.maxCount || '')}" placeholder="Nessun limite" oninput="updateCriteriaConditionField(${idx}, 'maxCount', this.value)">
          </div>
        </div>
      </div>
    `;
  } else if (trigger === "minecraft:player_killed_entity" || trigger === "minecraft:entity_killed_player" || trigger === "minecraft:player_hurt_entity" || trigger === "minecraft:entity_hurt_player" || trigger === "minecraft:player_interacted_with_entity" || trigger === "minecraft:summoned_entity" || trigger === "minecraft:tame_animal" || trigger === "minecraft:kill_mob_near_sculk_catalyst") {
    specificFieldsHtml = `
      <div class="condition-builder-panel">
        <div class="condition-builder-title">
          <span>👾 Condizione Entità / Mob</span>
          <span class="condition-badge">type: ${escapeHtml(cond.entity || 'qualsiasi')}</span>
        </div>
        <div class="form-row">
          <label class="form-label">Tipo Entità (Entity ID o #tag):</label>
          <div class="input-with-action">
            <input type="text" list="entitiesDatalist" class="misode-input" value="${escapeHtml(cond.entity || '')}" placeholder="es. minecraft:ender_dragon, #minecraft:skeletons" oninput="updateCriteriaConditionField(${idx}, 'entity', this.value)">
          </div>
        </div>
      </div>
    `;
  } else if (trigger === "minecraft:recipe_crafted" || trigger === "minecraft:recipe_unlocked" || trigger === "minecraft:crafter_recipe_crafted") {
    specificFieldsHtml = `
      <div class="condition-builder-panel">
        <div class="condition-builder-title">
          <span>📜 Condizione Ricetta</span>
          <span class="condition-badge">recipe: ${escapeHtml(cond.recipe || 'qualsiasi')}</span>
        </div>
        <div class="form-row">
          <label class="form-label">ID Ricetta (Recipe ID):</label>
          <div class="input-with-action">
            <input type="text" list="itemsDatalist" class="misode-input" value="${escapeHtml(cond.recipe || '')}" placeholder="es. minecraft:crafting_table, minecraft:diamond_sword" oninput="updateCriteriaConditionField(${idx}, 'recipe', this.value)">
          </div>
        </div>
      </div>
    `;
  } else if (trigger === "minecraft:consume_item" || trigger === "minecraft:throw_item" || trigger === "minecraft:using_item") {
    specificFieldsHtml = `
      <div class="condition-builder-panel">
        <div class="condition-builder-title">
          <span>🍎 Condizione Oggetto Usato</span>
          <span class="condition-badge">item: ${escapeHtml(cond.item || 'qualsiasi')}</span>
        </div>
        <div class="form-row">
          <label class="form-label">Oggetto (Item ID o #tag):</label>
          <div class="input-with-action">
            <input type="text" list="itemsDatalist" class="misode-input" value="${escapeHtml(cond.item || '')}" placeholder="es. minecraft:enchanted_golden_apple, minecraft:potion" oninput="updateCriteriaConditionField(${idx}, 'item', this.value)">
          </div>
        </div>
      </div>
    `;
  } else if (trigger === "minecraft:placed_block" || trigger === "minecraft:slide_down_block" || trigger === "minecraft:enter_block" || trigger === "minecraft:default_block_use") {
    specificFieldsHtml = `
      <div class="condition-builder-panel">
        <div class="condition-builder-title">
          <span>🧱 Condizione Blocco</span>
          <span class="condition-badge">block: ${escapeHtml(cond.block || 'qualsiasi')}</span>
        </div>
        <div class="form-row">
          <label class="form-label">Blocco (Block ID):</label>
          <div class="input-with-action">
            <input type="text" list="blocksDatalist" class="misode-input" value="${escapeHtml(cond.block || '')}" placeholder="es. minecraft:tnt, minecraft:honey_block" oninput="updateCriteriaConditionField(${idx}, 'block', this.value)">
          </div>
        </div>
      </div>
    `;
  } else if (trigger === "minecraft:item_used_on_block") {
    specificFieldsHtml = `
      <div class="condition-builder-panel">
        <div class="condition-builder-title">
          <span>🔧 Condizione Blocco & Oggetto</span>
        </div>
        <div class="form-row">
          <label class="form-label">Blocco Bersaglio (Block ID):</label>
          <input type="text" list="blocksDatalist" class="misode-input" value="${escapeHtml(cond.block || '')}" placeholder="es. minecraft:respawn_anchor" oninput="updateCriteriaConditionField(${idx}, 'block', this.value)">
        </div>
        <div class="form-row">
          <label class="form-label">Oggetto Usato (Item ID):</label>
          <input type="text" list="itemsDatalist" class="misode-input" value="${escapeHtml(cond.item || '')}" placeholder="es. minecraft:glowstone" oninput="updateCriteriaConditionField(${idx}, 'item', this.value)">
        </div>
      </div>
    `;
  } else if (trigger === "minecraft:location" || trigger === "minecraft:slept_in_bed" || trigger === "minecraft:hero_of_the_village" || trigger === "minecraft:voluntary_exile") {
    specificFieldsHtml = `
      <div class="condition-builder-panel">
        <div class="condition-builder-title">
          <span>🌍 Posizione & Bioma</span>
          <span class="condition-badge">${escapeHtml(cond.biome || cond.dimension || 'qualsiasi')}</span>
        </div>
        <div class="form-row">
          <label class="form-label">Bioma (Biome ID):</label>
          <input type="text" list="biomesDatalist" class="misode-input" value="${escapeHtml(cond.biome || '')}" placeholder="es. minecraft:deep_dark, minecraft:cherry_grove" oninput="updateCriteriaConditionField(${idx}, 'biome', this.value)">
        </div>
        <div class="condition-subgrid">
          <div class="form-row">
            <label class="form-label">Dimensione:</label>
            <select class="misode-select" onchange="updateCriteriaConditionField(${idx}, 'dimension', this.value)">
              <option value="" ${!cond.dimension ? 'selected' : ''}>-- Qualsiasi --</option>
              <option value="minecraft:overworld" ${cond.dimension === 'minecraft:overworld' ? 'selected' : ''}>Overworld</option>
              <option value="minecraft:the_nether" ${cond.dimension === 'minecraft:the_nether' ? 'selected' : ''}>The Nether</option>
              <option value="minecraft:the_end" ${cond.dimension === 'minecraft:the_end' ? 'selected' : ''}>The End</option>
            </select>
          </div>
          <div class="form-row">
            <label class="form-label">Struttura (opz.):</label>
            <input type="text" list="structuresDatalist" class="misode-input" value="${escapeHtml(cond.structure || '')}" placeholder="es. minecraft:ancient_city" oninput="updateCriteriaConditionField(${idx}, 'structure', this.value)">
          </div>
        </div>
        <div class="condition-subgrid">
          <div class="form-row">
            <label class="form-label">Altezza Y Min:</label>
            <input type="number" class="misode-input" value="${escapeHtml(cond.yMin !== undefined ? cond.yMin : '')}" placeholder="es. -64" oninput="updateCriteriaConditionField(${idx}, 'yMin', this.value)">
          </div>
          <div class="form-row">
            <label class="form-label">Altezza Y Max:</label>
            <input type="number" class="misode-input" value="${escapeHtml(cond.yMax !== undefined ? cond.yMax : '')}" placeholder="es. 0" oninput="updateCriteriaConditionField(${idx}, 'yMax', this.value)">
          </div>
        </div>
      </div>
    `;
  } else if (trigger === "minecraft:bred_animals") {
    specificFieldsHtml = `
      <div class="condition-builder-panel">
        <div class="condition-builder-title">
          <span>🐾 Accoppiamento Animali</span>
        </div>
        <div class="form-row">
          <label class="form-label">Tipo Animale Genitore:</label>
          <input type="text" list="entitiesDatalist" class="misode-input" value="${escapeHtml(cond.parent || '')}" placeholder="es. minecraft:horse, minecraft:wolf" oninput="updateCriteriaConditionField(${idx}, 'parent', this.value)">
        </div>
        <div class="form-row">
          <label class="form-label">Tipo Figlio (opz.):</label>
          <input type="text" list="entitiesDatalist" class="misode-input" value="${escapeHtml(cond.child || '')}" placeholder="es. minecraft:horse" oninput="updateCriteriaConditionField(${idx}, 'child', this.value)">
        </div>
      </div>
    `;
  } else if (trigger === "minecraft:brewed_potion") {
    specificFieldsHtml = `
      <div class="condition-builder-panel">
        <div class="condition-builder-title">
          <span>🧪 Tipo di Pozione Creata</span>
        </div>
        <div class="form-row">
          <label class="form-label">ID Pozione (Potion ID):</label>
          <input type="text" list="potionsDatalist" class="misode-input" value="${escapeHtml(cond.potion || '')}" placeholder="es. minecraft:invisibility, minecraft:healing" oninput="updateCriteriaConditionField(${idx}, 'potion', this.value)">
        </div>
      </div>
    `;
  } else if (trigger === "minecraft:enchanted_item") {
    specificFieldsHtml = `
      <div class="condition-builder-panel">
        <div class="condition-builder-title">
          <span>✨ Incantamento Oggetto</span>
        </div>
        <div class="form-row">
          <label class="form-label">Oggetto Incantato (Item ID):</label>
          <input type="text" list="itemsDatalist" class="misode-input" value="${escapeHtml(cond.item || '')}" placeholder="es. minecraft:diamond_sword" oninput="updateCriteriaConditionField(${idx}, 'item', this.value)">
        </div>
        <div class="form-row">
          <label class="form-label">Livelli Minimi Spesi (Levels):</label>
          <input type="number" min="1" max="30" class="misode-input" value="${escapeHtml(cond.levels || '30')}" placeholder="30" oninput="updateCriteriaConditionField(${idx}, 'levels', this.value)">
        </div>
      </div>
    `;
  } else if (trigger === "minecraft:fall_from_height" || trigger === "minecraft:nether_travel" || trigger === "minecraft:levitation") {
    specificFieldsHtml = `
      <div class="condition-builder-panel">
        <div class="condition-builder-title">
          <span>📏 Distanza Percorsa</span>
        </div>
        <div class="form-row">
          <label class="form-label">Distanza Minima (Blocchi):</label>
          <input type="number" min="1" class="misode-input" value="${escapeHtml(cond.distance || (trigger.includes('nether') ? '7000' : '30'))}" placeholder="es. 30 o 7000" oninput="updateCriteriaConditionField(${idx}, 'distance', this.value)">
        </div>
      </div>
    `;
  } else if (trigger === "minecraft:fishing_rod_hooked") {
    specificFieldsHtml = `
      <div class="condition-builder-panel">
        <div class="condition-builder-title">
          <span>🎣 Oggetto o Pesce Pescato</span>
        </div>
        <div class="form-row">
          <label class="form-label">Oggetto Pescato (Item ID):</label>
          <input type="text" list="itemsDatalist" class="misode-input" value="${escapeHtml(cond.item || '')}" placeholder="es. minecraft:enchanted_book, minecraft:nautilus_shell" oninput="updateCriteriaConditionField(${idx}, 'item', this.value)">
        </div>
      </div>
    `;
  } else if (trigger === "minecraft:item_durability_changed") {
    specificFieldsHtml = `
      <div class="condition-builder-panel">
        <div class="condition-builder-title">
          <span>🛡️ Durabilità Oggetto</span>
        </div>
        <div class="form-row">
          <label class="form-label">Oggetto (Item ID):</label>
          <input type="text" list="itemsDatalist" class="misode-input" value="${escapeHtml(cond.item || '')}" placeholder="es. minecraft:elytra" oninput="updateCriteriaConditionField(${idx}, 'item', this.value)">
        </div>
        <div class="condition-subgrid">
          <div class="form-row">
            <label class="form-label">Durabilità Min:</label>
            <input type="number" class="misode-input" value="${escapeHtml(cond.durabilityMin || '')}" placeholder="es. 0" oninput="updateCriteriaConditionField(${idx}, 'durabilityMin', this.value)">
          </div>
          <div class="form-row">
            <label class="form-label">Delta Variazione:</label>
            <input type="number" class="misode-input" value="${escapeHtml(cond.delta || '')}" placeholder="es. -1" oninput="updateCriteriaConditionField(${idx}, 'delta', this.value)">
          </div>
        </div>
      </div>
    `;
  } else if (trigger === "minecraft:construct_beacon") {
    specificFieldsHtml = `
      <div class="condition-builder-panel">
        <div class="condition-builder-title">
          <span>🗼 Livello Piramide Beacon</span>
        </div>
        <div class="form-row">
          <label class="form-label">Livello Base Piramide:</label>
          <select class="misode-select" onchange="updateCriteriaConditionField(${idx}, 'level', this.value)">
            <option value="1" ${cond.level === '1' ? 'selected' : ''}>Livello 1 (3x3)</option>
            <option value="2" ${cond.level === '2' ? 'selected' : ''}>Livello 2 (5x5)</option>
            <option value="3" ${cond.level === '3' ? 'selected' : ''}>Livello 3 (7x7)</option>
            <option value="4" ${cond.level === '4' || !cond.level ? 'selected' : ''}>Livello 4 (9x9 - Massimo)</option>
          </select>
        </div>
      </div>
    `;
  } else if (trigger === "minecraft:target_hit") {
    specificFieldsHtml = `
      <div class="condition-builder-panel">
        <div class="condition-builder-title">
          <span>🎯 Precisione Bersaglio Target</span>
        </div>
        <div class="form-row">
          <label class="form-label">Potenza Segnale Redstone (1-15):</label>
          <input type="number" min="1" max="15" class="misode-input" value="${escapeHtml(cond.signalStrength || '15')}" placeholder="15 (Bullseye / Centro)" oninput="updateCriteriaConditionField(${idx}, 'signalStrength', this.value)">
        </div>
      </div>
    `;
  } else if (trigger === "minecraft:villager_trade") {
    specificFieldsHtml = `
      <div class="condition-builder-panel">
        <div class="condition-builder-title">
          <span>💰 Scambio con Villico</span>
        </div>
        <div class="form-row">
          <label class="form-label">Oggetto Acquistato (Item ID):</label>
          <input type="text" list="itemsDatalist" class="misode-input" value="${escapeHtml(cond.item || '')}" placeholder="es. minecraft:emerald, minecraft:mending" oninput="updateCriteriaConditionField(${idx}, 'item', this.value)">
        </div>
      </div>
    `;
  } else if (trigger === "minecraft:effects_changed") {
    specificFieldsHtml = `
      <div class="condition-builder-panel">
        <div class="condition-builder-title">
          <span>🧪 Effetto di Stato Applicato</span>
        </div>
        <div class="form-row">
          <label class="form-label">Effetto (Effect ID):</label>
          <input type="text" list="effectsDatalist" class="misode-input" value="${escapeHtml(cond.effect || '')}" placeholder="es. minecraft:speed, minecraft:bad_omen" oninput="updateCriteriaConditionField(${idx}, 'effect', this.value)">
        </div>
      </div>
    `;
  } else if (trigger === "minecraft:impossible") {
    specificFieldsHtml = `
      <div class="trigger-desc-box">
        <span>🔒 <strong>Nessuna condizione richiesta:</strong> Viene concesso unicamente tramite comando o datapack (<code>/advancement grant ...</code>).</span>
      </div>
    `;
  } else if (trigger === "minecraft:tick") {
    specificFieldsHtml = `
      <div class="trigger-desc-box">
        <span>⚡ <strong>Nessuna condizione richiesta:</strong> Si attiva incondizionatamente ad ogni tick del server.</span>
      </div>
    `;
  } else {
    specificFieldsHtml = `
      <div class="trigger-desc-box">
        <span>⚙️ <em>${escapeHtml(desc)}</em></span>
      </div>
    `;
  }

  return `
    <div class="trigger-desc-box" style="margin-top: 4px; margin-bottom: 6px;">
      <span>💡 ${escapeHtml(desc)}</span>
    </div>
    ${specificFieldsHtml}
    <div style="display: flex; justify-content: flex-end; margin-top: 6px;">
      <button type="button" class="condition-btn-raw" onclick="openCriteriaJsonModal(${idx})">
        🔧 Modifica JSON Condizioni
      </button>
    </div>
  `;
}

function updateCriteriaConditionField(critIdx, field, val) {
  const node = state.advancements.find(a => a.id === state.selectedId);
  if (node && node.criteria[critIdx]) {
    if (!node.criteria[critIdx].conditions) node.criteria[critIdx].conditions = {};
    node.criteria[critIdx].conditions[field] = val;
  }
}

// Modal JSON Raw Editor
let activeCriteriaModalIdx = null;

function openCriteriaJsonModal(critIdx) {
  const node = state.advancements.find(a => a.id === state.selectedId);
  if (!node || !node.criteria[critIdx]) return;

  activeCriteriaModalIdx = critIdx;
  const crit = node.criteria[critIdx];
  const modal = document.getElementById('criteriaJsonModal');
  const textarea = document.getElementById('criteriaJsonTextarea');

  const cleanCond = buildCleanConditions(crit);
  textarea.value = JSON.stringify(cleanCond, null, 2);
  modal.classList.add('open');
}

function closeCriteriaJsonModal() {
  const modal = document.getElementById('criteriaJsonModal');
  if (modal) modal.classList.remove('open');
  activeCriteriaModalIdx = null;
}

function saveCriteriaJsonModal() {
  const node = state.advancements.find(a => a.id === state.selectedId);
  if (!node || activeCriteriaModalIdx === null || !node.criteria[activeCriteriaModalIdx]) return;

  const textarea = document.getElementById('criteriaJsonTextarea');
  try {
    const parsed = JSON.parse(textarea.value);
    node.criteria[activeCriteriaModalIdx].conditions = { customJson: parsed };
    closeCriteriaJsonModal();
    renderSidebar();
    showToast("💾 Condizioni JSON salvate con successo!");
  } catch (err) {
    alert("❌ Errore Sintassi JSON: " + err.message);
  }
}

function buildCleanConditions(crit) {
  if (!crit || !crit.trigger) return {};
  const trigger = crit.trigger;
  const c = crit.conditions || {};

  if (c.customJson) {
    return c.customJson;
  }

  if (trigger === "minecraft:inventory_changed") {
    const res = {};
    if (c.item && c.item.trim().length > 0) {
      const itemObj = {};
      const itemStr = c.item.trim();
      if (itemStr.startsWith('#')) {
        itemObj.tag = itemStr.substring(1);
      } else if (itemStr !== '*') {
        itemObj.items = [itemStr];
      }
      const minC = parseInt(c.minCount, 10);
      const maxC = parseInt(c.maxCount, 10);
      if (!isNaN(minC) || !isNaN(maxC)) {
        itemObj.count = {};
        if (!isNaN(minC)) itemObj.count.min = minC;
        if (!isNaN(maxC)) itemObj.count.max = maxC;
      }
      res.items = [itemObj];
    }
    return res;
  }

  if (trigger === "minecraft:player_killed_entity" || trigger === "minecraft:entity_killed_player" || trigger === "minecraft:player_hurt_entity" || trigger === "minecraft:entity_hurt_player" || trigger === "minecraft:player_interacted_with_entity" || trigger === "minecraft:summoned_entity" || trigger === "minecraft:tame_animal" || trigger === "minecraft:kill_mob_near_sculk_catalyst") {
    if (c.entity && c.entity.trim().length > 0) {
      return { entity: { type: c.entity.trim() } };
    }
    return {};
  }

  if (trigger === "minecraft:recipe_crafted" || trigger === "minecraft:crafter_recipe_crafted") {
    if (c.recipe && c.recipe.trim().length > 0) {
      return { recipe_id: c.recipe.trim() };
    }
    return {};
  }

  if (trigger === "minecraft:recipe_unlocked") {
    if (c.recipe && c.recipe.trim().length > 0) {
      return { recipe: c.recipe.trim() };
    }
    return {};
  }

  if (trigger === "minecraft:consume_item" || trigger === "minecraft:throw_item" || trigger === "minecraft:using_item") {
    if (c.item && c.item.trim().length > 0) {
      const itemStr = c.item.trim();
      if (itemStr.startsWith('#')) return { item: { tag: itemStr.substring(1) } };
      return { item: { items: [itemStr] } };
    }
    return {};
  }

  if (trigger === "minecraft:placed_block" || trigger === "minecraft:slide_down_block" || trigger === "minecraft:enter_block" || trigger === "minecraft:default_block_use") {
    const res = {};
    if (c.block && c.block.trim().length > 0) res.block = c.block.trim();
    if (c.item && c.item.trim().length > 0) {
      const itemStr = c.item.trim();
      if (itemStr.startsWith('#')) res.item = { tag: itemStr.substring(1) };
      else res.item = { items: [itemStr] };
    }
    return res;
  }

  if (trigger === "minecraft:item_used_on_block") {
    const res = {};
    if (c.block && c.block.trim().length > 0) {
      res.location = { block: { blocks: [c.block.trim()] } };
    }
    if (c.item && c.item.trim().length > 0) {
      const itemStr = c.item.trim();
      if (itemStr.startsWith('#')) res.item = { tag: itemStr.substring(1) };
      else res.item = { items: [itemStr] };
    }
    return res;
  }

  if (trigger === "minecraft:location" || trigger === "minecraft:slept_in_bed" || trigger === "minecraft:hero_of_the_village" || trigger === "minecraft:voluntary_exile") {
    const loc = {};
    if (c.biome && c.biome.trim().length > 0) loc.biomes = c.biome.trim();
    if (c.dimension && c.dimension.trim().length > 0) loc.dimension = c.dimension.trim();
    if (c.structure && c.structure.trim().length > 0) loc.structures = c.structure.trim();
    if ((c.yMin !== undefined && c.yMin !== "") || (c.yMax !== undefined && c.yMax !== "")) {
      loc.position = { y: {} };
      if (c.yMin !== undefined && c.yMin !== "") loc.position.y.min = parseFloat(c.yMin);
      if (c.yMax !== undefined && c.yMax !== "") loc.position.y.max = parseFloat(c.yMax);
    }
    if (Object.keys(loc).length > 0) return { location: loc };
    return {};
  }

  if (trigger === "minecraft:bred_animals") {
    const res = {};
    if (c.parent && c.parent.trim().length > 0) res.parent = { type: c.parent.trim() };
    if (c.child && c.child.trim().length > 0) res.child = { type: c.child.trim() };
    return res;
  }

  if (trigger === "minecraft:brewed_potion") {
    if (c.potion && c.potion.trim().length > 0) return { potion: c.potion.trim() };
    return {};
  }

  if (trigger === "minecraft:enchanted_item") {
    const res = {};
    if (c.item && c.item.trim().length > 0) {
      const itemStr = c.item.trim();
      if (itemStr.startsWith('#')) res.item = { tag: itemStr.substring(1) };
      else res.item = { items: [itemStr] };
    }
    if (c.levels) res.levels = { min: parseInt(c.levels, 10) };
    return res;
  }

  if (trigger === "minecraft:fall_from_height" || trigger === "minecraft:nether_travel" || trigger === "minecraft:levitation") {
    if (c.distance) {
      return { distance: { absolute: { min: parseFloat(c.distance) } } };
    }
    return {};
  }

  if (trigger === "minecraft:fishing_rod_hooked") {
    const res = {};
    if (c.item && c.item.trim().length > 0) {
      const itemStr = c.item.trim();
      if (itemStr.startsWith('#')) res.item = { tag: itemStr.substring(1) };
      else res.item = { items: [itemStr] };
    }
    if (c.entity && c.entity.trim().length > 0) res.entity = { type: c.entity.trim() };
    return res;
  }

  if (trigger === "minecraft:item_durability_changed") {
    const res = {};
    if (c.item && c.item.trim().length > 0) {
      const itemStr = c.item.trim();
      if (itemStr.startsWith('#')) res.item = { tag: itemStr.substring(1) };
      else res.item = { items: [itemStr] };
    }
    if (c.durabilityMin !== undefined && c.durabilityMin !== "") {
      res.durability = res.durability || {};
      res.durability.min = parseInt(c.durabilityMin, 10);
    }
    if (c.delta !== undefined && c.delta !== "") {
      res.delta = { max: parseInt(c.delta, 10) };
    }
    return res;
  }

  if (trigger === "minecraft:construct_beacon") {
    if (c.level) return { level: { min: parseInt(c.level, 10) } };
    return {};
  }

  if (trigger === "minecraft:target_hit") {
    if (c.signalStrength) return { signal_strength: parseInt(c.signalStrength, 10) };
    return {};
  }

  if (trigger === "minecraft:villager_trade") {
    if (c.item && c.item.trim().length > 0) {
      const itemStr = c.item.trim();
      if (itemStr.startsWith('#')) return { item: { tag: itemStr.substring(1) } };
      return { item: { items: [itemStr] } };
    }
    return {};
  }

  if (trigger === "minecraft:effects_changed") {
    if (c.effect && c.effect.trim().length > 0) {
      return { effects: { [c.effect.trim()]: {} } };
    }
    return {};
  }

  return typeof c === 'object' ? c : {};
}

// ==========================================
// 12. SIDEBAR RENDERER (EXACT MISODE UI)
// ==========================================
function renderSidebar() {
  const container = document.getElementById('sidebarScrollArea');
  const previewImg = document.getElementById('largeIconImg');
  const previewBox = document.getElementById('largeIconCard');

  const node = state.advancements.find(a => a.id === state.selectedId);
  if (!node) {
    if (previewImg) previewImg.src = getItemTextureUrl("minecraft:barrier");
    if (container) {
      container.innerHTML = `
        <div style="text-align: center; color: var(--text-muted); margin-top: 40px; font-size: 13px;">
          <p>No advancement selected.</p>
          <p style="font-size: 11px; margin-top: 6px;">Click a node on canvas or double-click to create one.</p>
        </div>
      `;
    }
    return;
  }

  // Update top large preview box
  const iconId = node.display?.icon ? node.display.icon.trim() : "";
  const iconUrl = getItemTextureUrl(iconId);
  if (previewImg) {
    if (iconUrl) {
      previewImg.src = iconUrl;
      previewImg.style.opacity = "1";
      previewImg.onerror = () => handleImageError(previewImg, iconId);
    } else {
      previewImg.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32'/>";
      previewImg.style.opacity = "0.2";
    }
  }
  if (previewBox) {
    previewBox.onclick = openItemPickerModal;
  }

  // Build Parent Options for Current Folder
  const activeNodes = getActiveFolderAdvancements();
  let parentOptionsHtml = `<option value="" ${!node.parent && !node.customParent ? 'selected' : ''}>-- (None / Root) --</option>`;
  activeNodes.forEach(a => {
    if (a.id !== node.id) {
      parentOptionsHtml += `<option value="${a.id}" ${node.parent === a.id ? 'selected' : ''}>${escapeHtml(a.id)} (${escapeHtml(a.display?.title || a.id)})</option>`;
    }
  });

  // Criteria HTML with Rich Condition Builder
  let criteriaHtml = '';
  node.criteria.forEach((crit, idx) => {
    let triggerOptionsHtml = '';
    MINECRAFT_TRIGGERS.forEach(trig => {
      triggerOptionsHtml += `<option value="${trig.id}" ${crit.trigger === trig.id ? 'selected' : ''}>${trig.id}</option>`;
    });

    const conditionFieldsHtml = renderCriteriaConditionEditor(crit, idx);

    criteriaHtml += `
      <div class="criteria-block">
        <div class="criteria-block-header">
          <input type="text" class="misode-input" style="font-weight: bold; color: var(--accent-gold); flex: 1; margin-right: 8px;" value="${escapeHtml(crit.id)}" onchange="updateCriteriaId(${idx}, this.value)">
          <button class="chest-btn btn-remove" onclick="removeCriteria(${idx})" title="Rimuovi criterio">🗑️</button>
        </div>
        <div class="form-row">
          <label class="form-label">Trigger* <span class="info-icon" title="Trigger di Minecraft che controlla quando questo requisito viene soddisfatto">ⓘ</span></label>
          <div class="input-with-action">
            <select class="misode-select" onchange="updateCriteriaTrigger(${idx}, this.value)">
              ${triggerOptionsHtml}
            </select>
          </div>
        </div>
        ${conditionFieldsHtml}
      </div>
    `;
  });

  // Display Fields
  const displayObj = node.display || {};

  container.innerHTML = `
    <!-- ADVANCEMENT ID & SIBLING BRANCH ORDER -->
    <div class="form-row">
      <label class="form-label">Advancement ID <span class="info-icon" title="Unique ID in data pack namespace">ⓘ</span></label>
      <div class="input-with-action">
        <input type="text" class="misode-input" value="${escapeHtml(node.id)}" onchange="updateAdvancementId(this.value)">
        <button class="chest-btn" onclick="moveNodeSiblingOrder('${node.id}', -1)" title="Sposta questo ramo SOPRA il fratello">⬆️</button>
        <button class="chest-btn" onclick="moveNodeSiblingOrder('${node.id}', 1)" title="Sposta questo ramo SOTTO il fratello">⬇️</button>
      </div>
    </div>

    <!-- SOTTOCARTELLA / SCHEDA -->
    <div class="form-row">
      <label class="form-label">Sottocartella / Scheda <span class="info-icon" title="Cartella in data/namespace/advancement/ (es. story, nether, end, custom)">ⓘ</span></label>
      <div class="input-with-action">
        <input type="text" class="misode-input" value="${escapeHtml(node.folder || state.activeFolder || 'story')}" onchange="updateNodeFolder(this.value)">
      </div>
    </div>

    <!-- PARENT -->
    <div class="form-row">
      <label class="form-label">Parent <span class="info-icon" title="Parent advancement ID or path (e.g. custom:root or minecraft:story/root)">ⓘ</span></label>
      <div class="input-with-action">
        <select class="misode-select" onchange="updateParent(this.value)">
          ${parentOptionsHtml}
        </select>
        <button class="chest-btn" onclick="updateParent('')" title="Clear Parent">📦</button>
      </div>
    </div>

    <!-- SENDS TELEMETRY EVENT -->
    <div class="form-row">
      <label class="form-label">Sends Telemetry Event <span class="info-icon" title="Whether this advancement sends telemetry event to Minecraft">ⓘ</span></label>
      <div class="input-with-action">
        <select class="misode-select" onchange="updateSelectedField('sends_telemetry_event', this.value === 'true')">
          <option value="false" ${node.sends_telemetry_event !== true ? 'selected' : ''}>false</option>
          <option value="true" ${node.sends_telemetry_event === true ? 'selected' : ''}>true</option>
        </select>
        <button class="chest-btn" title="Default">📦</button>
      </div>
    </div>

    <!-- CRITERIA ACCORDION -->
    <div class="misode-accordion open" id="accordionCriteria">
      <div class="accordion-title-bar" onclick="toggleAccordion('accordionCriteria')">
        <div class="title-left">
          <span class="arrow-icon">▶</span>
          <span>Criteria* <span class="info-icon" title="List of criteria required to unlock advancement">ⓘ</span></span>
        </div>
        <span style="font-size: 11px; color: var(--text-muted);">${node.criteria.length} item(s)</span>
      </div>
      <div class="accordion-content">
        ${criteriaHtml}
        <div class="input-with-action" style="max-width: 100%; margin-top: 6px;">
          <input type="text" id="newCritIdInput" class="misode-input" placeholder="New criterion key (e.g. item_crafted)...">
          <button class="chest-btn btn-add" onclick="addNewCriteriaFromInput()" title="Add criterion">➕</button>
        </div>
      </div>
    </div>

    <!-- DISPLAY ACCORDION -->
    <div class="misode-accordion open" id="accordionDisplay">
      <div class="accordion-title-bar" onclick="toggleAccordion('accordionDisplay')">
        <div class="title-left">
          <span class="arrow-icon">▶</span>
          <span>> Display <span class="info-icon" title="Visual appearance in the in-game advancement GUI">ⓘ</span></span>
        </div>
      </div>
      <div class="accordion-content">
        <div class="form-row">
          <label class="form-label">Icon (Item) <span class="info-icon" title="Item icon displayed on the advancement frame">ⓘ</span></label>
          <div class="input-with-action">
            <input type="text" class="misode-input" list="minecraftItemsList" value="${escapeHtml(displayObj.icon || '')}" placeholder="minecraft:item_name..." oninput="updateDisplayField('icon', this.value)" onchange="updateDisplayField('icon', this.value)">
            <button class="chest-btn" onclick="openItemPickerModal()" title="Search Items">🔍</button>
          </div>
        </div>

        <div class="form-row">
          <label class="form-label">Title <span class="info-icon" title="Title displayed in GUI and chat">ⓘ</span></label>
          <div class="input-with-action">
            <input type="text" class="misode-input" value="${escapeHtml(displayObj.title || '')}" oninput="updateDisplayField('title', this.value)">
          </div>
        </div>

        <div class="form-row">
          <label class="form-label">Description <span class="info-icon" title="Description hover text">ⓘ</span></label>
          <div class="input-with-action">
            <input type="text" class="misode-input" value="${escapeHtml(displayObj.description || '')}" oninput="updateDisplayField('description', this.value)">
          </div>
        </div>

        <div class="form-row">
          <label class="form-label">Frame <span class="info-icon" title="Task (square), Goal (rounded), Challenge (diamond)">ⓘ</span></label>
          <div class="input-with-action">
            <select class="misode-select" onchange="updateDisplayField('frame', this.value)">
              <option value="task" ${displayObj.frame === 'task' ? 'selected' : ''}>task (Square)</option>
              <option value="goal" ${displayObj.frame === 'goal' ? 'selected' : ''}>goal (Rounded)</option>
              <option value="challenge" ${displayObj.frame === 'challenge' ? 'selected' : ''}>challenge (Diamond)</option>
            </select>
          </div>
        </div>

        <div class="form-row">
          <label class="form-label">Show Toast <span class="info-icon" title="Show notification popup top-right">ⓘ</span></label>
          <div class="input-with-action">
            <select class="misode-select" onchange="updateDisplayField('show_toast', this.value === 'true')">
              <option value="true" ${displayObj.show_toast !== false ? 'selected' : ''}>true</option>
              <option value="false" ${displayObj.show_toast === false ? 'selected' : ''}>false</option>
            </select>
          </div>
        </div>

        <div class="form-row">
          <label class="form-label">Announce to Chat <span class="info-icon" title="Broadcast in chat when unlocked">ⓘ</span></label>
          <div class="input-with-action">
            <select class="misode-select" onchange="updateDisplayField('announce_to_chat', this.value === 'true')">
              <option value="true" ${displayObj.announce_to_chat !== false ? 'selected' : ''}>true</option>
              <option value="false" ${displayObj.announce_to_chat === false ? 'selected' : ''}>false</option>
            </select>
          </div>
        </div>

        <div class="form-row">
          <label class="form-label">Hidden <span class="info-icon" title="Hidden until unlocked in GUI">ⓘ</span></label>
          <div class="input-with-action">
            <select class="misode-select" onchange="updateDisplayField('hidden', this.value === 'true')">
              <option value="false" ${!displayObj.hidden ? 'selected' : ''}>false</option>
              <option value="true" ${displayObj.hidden ? 'selected' : ''}>true</option>
            </select>
          </div>
        </div>

        ${!node.parent ? `
          <div class="form-row">
            <label class="form-label">Background Texture <span class="info-icon" title="Minecraft texture path or block format (e.g. minecraft:block/allium, minecraft:block/stone, or textures/gui/advancements/backgrounds/adventure.png)">ⓘ</span></label>
            <div class="input-with-action">
              <input type="text" list="backgroundPresetsList" class="misode-input" value="${escapeHtml(displayObj.background || 'minecraft:block/allium')}" placeholder="minecraft:block/allium" oninput="updateRootBackground(this.value)" onchange="updateRootBackground(this.value)">
            </div>
          </div>
        ` : ''}
      </div>
    </div>

    <!-- REQUIREMENTS ACCORDION -->
    <div class="misode-accordion" id="accordionRequirements">
      <div class="accordion-title-bar" onclick="toggleAccordion('accordionRequirements')">
        <div class="title-left">
          <span class="arrow-icon">▶</span>
          <span>> Requirements <span class="info-icon" title="AND / OR condition combinations">ⓘ</span></span>
        </div>
      </div>
      <div class="accordion-content">
        <div class="form-row">
          <label class="form-label">Logic Mode:</label>
          <div class="input-with-action">
            <select class="misode-select" onchange="updateRequirementsMode(this.value)">
              <option value="AND" ${node.requirementsMode === 'AND' ? 'selected' : ''}>AND (All criteria required)</option>
              <option value="OR" ${node.requirementsMode === 'OR' ? 'selected' : ''}>OR (Any single criterion unlocks)</option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <!-- REWARDS ACCORDION -->
    <div class="misode-accordion" id="accordionRewards">
      <div class="accordion-title-bar" onclick="toggleAccordion('accordionRewards')">
        <div class="title-left">
          <span class="arrow-icon">▶</span>
          <span>> Rewards <span class="info-icon" title="Rewards granted to player on unlock">ⓘ</span></span>
        </div>
      </div>
      <div class="accordion-content">
        <div class="form-row">
          <label class="form-label">Experience (XP):</label>
          <div class="input-with-action">
            <input type="number" class="misode-input" value="${node.rewards?.experience || 0}" onchange="updateRewardField('experience', parseInt(this.value) || 0)">
          </div>
        </div>
        <div class="form-row">
          <label class="form-label">Recipes (comma list):</label>
          <div class="input-with-action">
            <input type="text" class="misode-input" placeholder="minecraft:diamond_sword" value="${escapeHtml((node.rewards?.recipes || []).join(', '))}" onchange="updateRewardRecipes(this.value)">
          </div>
        </div>
        <div class="form-row">
          <label class="form-label">Function (.mcfunction):</label>
          <div class="input-with-action">
            <input type="text" class="misode-input" placeholder="namespace:quest/reward" value="${escapeHtml(node.rewards?.function || '')}" onchange="updateRewardField('function', this.value)">
          </div>
        </div>
      </div>
    </div>
  `;
}

// Toggle accordion
function toggleAccordion(id) {
  const el = document.getElementById(id);
  if (el) el.classList.toggle('open');
}

// Field updates
function updateAdvancementId(newId) {
  const cleanId = newId.trim().replace(/\s+/g, '_').toLowerCase();
  const node = state.advancements.find(a => a.id === state.selectedId);
  if (!node || !cleanId) return;

  if (state.advancements.some(a => a.id === cleanId && a !== node)) {
    showToast("⚠️ ID already exists! Please pick a unique ID.");
    return;
  }

  const oldId = node.id;
  node.id = cleanId;
  state.selectedId = cleanId;

  // Update children
  state.advancements.forEach(a => {
    if (a.parent === oldId) a.parent = cleanId;
  });

  renderAll();
}

function updateParent(parentId) {
  const node = state.advancements.find(a => a.id === state.selectedId);
  if (!node) return;
  node.parent = parentId || null;
  renderAll();
}

function updateSelectedField(field, val) {
  const node = state.advancements.find(a => a.id === state.selectedId);
  if (node) {
    node[field] = val;
  }
}

function updateDisplayField(field, val) {
  const node = state.advancements.find(a => a.id === state.selectedId);
  if (!node) return;
  if (!node.display) node.display = {};
  node.display[field] = val;

  if (field === 'icon') {
    const previewImg = document.getElementById('largeIconImg');
    if (previewImg) {
      previewImg.dataset.fallbackStep = "0";
      previewImg.src = getItemTextureUrl(val);
    }
    const nodeEl = document.getElementById(`node-${node.id}`);
    if (nodeEl) {
      const img = nodeEl.querySelector('.node-item-img');
      if (img) {
        img.dataset.fallbackStep = "0";
        img.src = getItemTextureUrl(val);
      }
    }
  } else if (field === 'frame') {
    const nodeEl = document.getElementById(`node-${node.id}`);
    if (nodeEl) {
      const cardEl = nodeEl.querySelector('.node-card');
      if (cardEl) {
        cardEl.className = `node-card frame-${val}`;
      }
    }
  }
}

function updateRequirementsMode(mode) {
  const node = state.advancements.find(a => a.id === state.selectedId);
  if (node) node.requirementsMode = mode;
}

function updateRewardField(field, val) {
  const node = state.advancements.find(a => a.id === state.selectedId);
  if (node) {
    if (!node.rewards) node.rewards = {};
    node.rewards[field] = val;
  }
}

function updateRewardRecipes(str) {
  const node = state.advancements.find(a => a.id === state.selectedId);
  if (node) {
    if (!node.rewards) node.rewards = {};
    node.rewards.recipes = str.split(',').map(s => s.trim()).filter(s => s.length > 0);
  }
}

// Criteria updates
function addNewCriteriaFromInput() {
  const input = document.getElementById('newCritIdInput');
  const node = state.advancements.find(a => a.id === state.selectedId);
  if (!node) return;

  const key = (input.value || `requirement_${node.criteria.length + 1}`).trim();
  node.criteria.push({
    id: key,
    trigger: "minecraft:impossible",
    conditions: {}
  });

  input.value = "";
  renderSidebar();
  showToast(`➕ Added criterion '${key}'`);
}

function removeCriteria(idx) {
  const node = state.advancements.find(a => a.id === state.selectedId);
  if (!node) return;
  if (node.criteria.length <= 1) {
    showToast("⚠️ At least 1 criterion is required!");
    return;
  }
  node.criteria.splice(idx, 1);
  renderSidebar();
}

function updateCriteriaId(idx, val) {
  const node = state.advancements.find(a => a.id === state.selectedId);
  if (node && node.criteria[idx]) {
    node.criteria[idx].id = val.trim();
  }
}

function updateCriteriaTrigger(idx, val) {
  const node = state.advancements.find(a => a.id === state.selectedId);
  if (node && node.criteria[idx]) {
    node.criteria[idx].trigger = val;
    node.criteria[idx].conditions = getDefaultConditionsForTrigger(val);
    renderSidebar();
  }
}

// ==========================================
// 13. ITEM PICKER MODAL
// ==========================================
let itemSearchQuery = "";

function openItemPickerModal() {
  const modal = document.getElementById('itemPickerModal');
  const searchInput = document.getElementById('itemSearchInput');
  modal.classList.add('open');
  searchInput.value = "";
  itemSearchQuery = "";
  renderItemPickerGrid();
  searchInput.focus();
}

function closeItemPickerModal() {
  document.getElementById('itemPickerModal').classList.remove('open');
}

function filterItemsCategory(cat) {
  const searchInput = document.getElementById('itemSearchInput');
  searchInput.value = cat;
  itemSearchQuery = cat;
  renderItemPickerGrid();
  searchInput.focus();
}

function renderItemPickerGrid() {
  const grid = document.getElementById('itemGrid');
  grid.innerHTML = '';

  const filter = itemSearchQuery.toLowerCase().trim();
  const matched = state.itemsList.filter(item => item.toLowerCase().includes(filter)).slice(0, 400);

  matched.forEach(itemId => {
    const slot = document.createElement('div');
    slot.className = 'item-picker-slot';
    slot.title = itemId;
    const url = getItemTextureUrl(itemId);

    slot.innerHTML = `<img src="${url}" alt="${itemId}" onerror="handleImageError(this, '${itemId}')">`;
    slot.addEventListener('click', () => {
      updateDisplayField('icon', itemId);
      closeItemPickerModal();
    });

    grid.appendChild(slot);
  });
}

function initItemPickerEvents() {
  const searchInput = document.getElementById('itemSearchInput');
  searchInput.addEventListener('input', (e) => {
    itemSearchQuery = e.target.value;
    renderItemPickerGrid();
  });
}

// ==========================================
// 14. JSON BUILDER & INSPECTOR
// ==========================================
function generateAdvancementJson(node) {
  const json = {};

  if (node.display) {
    const disp = {
      icon: {
        id: node.display.icon || "minecraft:diamond"
      },
      title: node.display.title || node.id,
      description: node.display.description || ""
    };

    if (!node.parent) {
      disp.background = node.display.background || "minecraft:block/allium";
    }

    if (node.display.frame && node.display.frame !== "task") {
      disp.frame = node.display.frame;
    }
    if (node.display.show_toast === false) {
      disp.show_toast = false;
    }
    if (node.display.announce_to_chat === false) {
      disp.announce_to_chat = false;
    }
    if (node.display.hidden) {
      disp.hidden = true;
    }

    json.display = disp;
  }

  if (node.customParent) {
    json.parent = node.customParent;
  } else if (node.parent) {
    const folderPrefix = node.folder ? `${node.folder}/` : '';
    json.parent = `${state.namespace}:${folderPrefix}${node.parent}`;
  }

  json.criteria = {};
  node.criteria.forEach((crit, idx) => {
    let critKey = (crit.id || "").trim();
    if (!critKey || critKey === "requirement") {
      critKey = "trigger";
    }
    const critObj = {
      trigger: crit.trigger
    };
    const cleanConditions = buildCleanConditions(crit);
    if (cleanConditions && Object.keys(cleanConditions).length > 0) {
      critObj.conditions = cleanConditions;
    }
    json.criteria[critKey] = critObj;
  });

  if (node.requirementsMode === "OR" && node.criteria.length > 1) {
    json.requirements = node.criteria.map(c => [(c.id === "requirement" ? "trigger" : c.id)]);
  } else if (node.customRequirements && node.customRequirements.length > 0) {
    json.requirements = node.customRequirements;
  }

  if (node.rewards) {
    const rewards = {};
    if (node.rewards.experience > 0) rewards.experience = node.rewards.experience;
    if (node.rewards.recipes && node.rewards.recipes.length > 0) rewards.recipes = node.rewards.recipes;
    if (node.rewards.function && node.rewards.function.trim().length > 0) rewards.function = node.rewards.function.trim();
    if (node.rewards.loot && node.rewards.loot.length > 0) rewards.loot = node.rewards.loot;

    if (Object.keys(rewards).length > 0) {
      json.rewards = rewards;
    }
  }

  if (node.sends_telemetry_event) {
    json.sends_telemetry_event = true;
  }

  return json;
}

function openJsonModal() {
  const modal = document.getElementById('jsonPreviewModal');
  const codeViewer = document.getElementById('jsonCodeViewer');
  const node = state.advancements.find(a => a.id === state.selectedId) || state.advancements[0];

  if (!node) {
    codeViewer.textContent = "No advancement selected.";
    return;
  }

  const json = generateAdvancementJson(node);
  codeViewer.textContent = JSON.stringify(json, null, 2);
  modal.classList.add('open');
}

function closeJsonModal() {
  document.getElementById('jsonPreviewModal').classList.remove('open');
}

function copyJsonToClipboard() {
  const codeViewer = document.getElementById('jsonCodeViewer');
  navigator.clipboard.writeText(codeViewer.textContent).then(() => {
    showToast("📋 JSON copied to clipboard!");
  });
}

// ==========================================
// 15. DATA PACK ZIP EXPORTER
// ==========================================
class SimpleZip {
  constructor() { this.files = []; }
  addFile(name, content) {
    const encoder = new TextEncoder();
    const data = typeof content === 'string' ? encoder.encode(content) : content;
    this.files.push({ name, data });
  }
  generateBlob() {
    let localHeaders = [];
    let centralHeaders = [];
    let offset = 0;

    this.files.forEach(file => {
      const nameBytes = new TextEncoder().encode(file.name);
      const crc = this.crc32(file.data);
      const size = file.data.length;

      const localHeader = new Uint8Array(30 + nameBytes.length);
      const view = new DataView(localHeader.buffer);
      view.setUint32(0, 0x04034b50, true);
      view.setUint16(4, 20, true);
      view.setUint16(6, 0, true);
      view.setUint16(8, 0, true);
      view.setUint16(10, 0, true);
      view.setUint16(12, 0, true);
      view.setUint32(14, crc, true);
      view.setUint32(18, size, true);
      view.setUint32(22, size, true);
      view.setUint16(26, nameBytes.length, true);
      view.setUint16(28, 0, true);
      localHeader.set(nameBytes, 30);

      const centralHeader = new Uint8Array(46 + nameBytes.length);
      const cView = new DataView(centralHeader.buffer);
      cView.setUint32(0, 0x02014b50, true);
      cView.setUint16(4, 20, true);
      cView.setUint16(6, 20, true);
      cView.setUint16(8, 0, true);
      cView.setUint16(10, 0, true);
      cView.setUint16(12, 0, true);
      cView.setUint16(14, 0, true);
      cView.setUint32(16, crc, true);
      cView.setUint32(20, size, true);
      cView.setUint32(24, size, true);
      cView.setUint16(28, nameBytes.length, true);
      cView.setUint16(30, 0, true);
      cView.setUint16(32, 0, true);
      cView.setUint16(34, 0, true);
      cView.setUint16(36, 0, true);
      cView.setUint32(38, 0, true);
      cView.setUint32(42, offset, true);
      centralHeader.set(nameBytes, 46);

      localHeaders.push(localHeader, file.data);
      centralHeaders.push(centralHeader);
      offset += localHeader.length + file.data.length;
    });

    const centralDirOffset = offset;
    let centralDirSize = 0;
    centralHeaders.forEach(c => centralDirSize += c.length);

    const eocd = new Uint8Array(22);
    const eView = new DataView(eocd.buffer);
    eView.setUint32(0, 0x06054b50, true);
    eView.setUint16(4, 0, true);
    eView.setUint16(6, 0, true);
    eView.setUint16(8, this.files.length, true);
    eView.setUint16(10, this.files.length, true);
    eView.setUint32(12, centralDirSize, true);
    eView.setUint32(16, centralDirOffset, true);
    eView.setUint16(20, 0, true);

    return new Blob([...localHeaders, ...centralHeaders, eocd], { type: 'application/zip' });
  }

  crc32(data) {
    let crc = 0 ^ (-1);
    for (let i = 0; i < data.length; i++) {
      crc = (crc >>> 8) ^ this.crcTable[(crc ^ data[i]) & 0xFF];
    }
    return (crc ^ (-1)) >>> 0;
  }
}

SimpleZip.prototype.crcTable = (() => {
  let c, table = [];
  for (let n = 0; n < 256; n++) {
    c = n;
    for (let k = 0; k < 8; k++) {
      c = ((c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1));
    }
    table[n] = c;
  }
  return table;
})();

async function downloadDataPackZip() {
  const ns = (state.namespace || "custom").trim().toLowerCase().replace(/[^a-z0-9_.-]/g, '');
  const zip = new SimpleZip();

  const mcmeta = {
    pack: {
      pack_format: 48,
      description: "Advancement Data Pack created with BlockEngine"
    }
  };
  zip.addFile("pack.mcmeta", JSON.stringify(mcmeta, null, 2));

  state.advancements.forEach(node => {
    const json = generateAdvancementJson(node);
    const folderPath = node.folder ? `${node.folder}/` : '';
    zip.addFile(`data/${ns}/advancement/${folderPath}${node.id}.json`, JSON.stringify(json, null, 2));
  });

  if (state.customFunctions) {
    Object.keys(state.customFunctions).forEach(funcName => {
      const content = state.customFunctions[funcName];
      zip.addFile(`data/${ns}/function/${funcName}.mcfunction`, content);
    });
  }

  const blob = zip.generateBlob();
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${ns}_datapack.zip`;
  a.click();
  URL.revokeObjectURL(url);

  showToast(`📦 Downloaded "${ns}_datapack.zip"!`);
}

function saveProjectFile() {
  const project = {
    version: "2.0",
    namespace: state.namespace,
    background: state.currentBackground,
    advancements: state.advancements
  };

  const blob = new Blob([JSON.stringify(project, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `advancement_tree_${state.namespace}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast("💾 Project saved to JSON!");
}

function loadProjectFile(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      if (data.advancements && Array.isArray(data.advancements)) {
        state.namespace = data.namespace || "custom";
        state.advancements = data.advancements;
        if (data.background) setCanvasBackground(data.background);
        state.selectedId = state.advancements.length > 0 ? state.advancements[0].id : null;
        renderAll();
        showToast("📂 Project loaded successfully!");
      }
    } catch (err) {
      showToast("❌ Invalid JSON file!");
    }
  };
  reader.readAsText(file);
  event.target.value = "";
}

// ==========================================
// 16. TOAST & UTILS
// ==========================================
function showToast(msg) {
  let container = document.getElementById('toastWrap');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastWrap';
    container.className = 'toast-wrap';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'app-toast';
  toast.innerHTML = `<span>${escapeHtml(msg)}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

function escapeHtml(str) {
  if (typeof str !== 'string') return str;
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

// ==========================================
// 17. INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', async () => {
  await loadItemsDatabase();
  createOrUpdateDatalists();
  state.advancements = JSON.parse(JSON.stringify(initialAdvancements));
  state.selectedId = "root";

  setCanvasBackground(BACKGROUND_PRESETS.stone);
  const bgSelect = document.getElementById('bgPresetSelect');
  if (bgSelect) bgSelect.value = "stone";

  initCanvasEvents();
  initItemPickerEvents();
  updateCanvasTransform();
  renderAll();
});
