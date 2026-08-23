/**
 * ADVANCEMENT GENERATOR - MISODE & VANILLA JAVA EDITION THEME
 * Full 57 Triggers, Dynamic Customizable Background, Orthogonal Canvas, Data Pack ZIP Export
 */

// ==========================================
// 1. OFFICIAL 57 MINECRAFT JAVA TRIGGERS
// ==========================================
const MINECRAFT_TRIGGERS = [
  { id: "minecraft:impossible", name: "impossible", desc: "Cannot be unlocked naturally; only via commands" },
  { id: "minecraft:inventory_changed", name: "inventory_changed", desc: "Player inventory items changed" },
  { id: "minecraft:recipe_unlocked", name: "recipe_unlocked", desc: "Recipe unlocked in recipe book" },
  { id: "minecraft:recipe_crafted", name: "recipe_crafted", desc: "Recipe crafted by player" },
  { id: "minecraft:crafter_recipe_crafted", name: "crafter_recipe_crafted", desc: "Crafter block crafted recipe" },
  { id: "minecraft:player_killed_entity", name: "player_killed_entity", desc: "Player killed a mob/entity" },
  { id: "minecraft:entity_killed_player", name: "entity_killed_player", desc: "Mob/entity killed the player" },
  { id: "minecraft:player_hurt_entity", name: "player_hurt_entity", desc: "Player damaged an entity" },
  { id: "minecraft:entity_hurt_player", name: "entity_hurt_player", desc: "Entity damaged the player" },
  { id: "minecraft:location", name: "location", desc: "Player location/biome/dimension" },
  { id: "minecraft:tick", name: "tick", desc: "Runs every single game tick" },
  { id: "minecraft:consume_item", name: "consume_item", desc: "Player ate or drank an item" },
  { id: "minecraft:placed_block", name: "placed_block", desc: "Player placed a block" },
  { id: "minecraft:bred_animals", name: "bred_animals", desc: "Player bred two animals" },
  { id: "minecraft:brewed_potion", name: "brewed_potion", desc: "Brewing stand brewed a potion" },
  { id: "minecraft:cured_zombie_villager", name: "cured_zombie_villager", desc: "Player cured a zombie villager" },
  { id: "minecraft:enchanted_item", name: "enchanted_item", desc: "Player enchanted an item" },
  { id: "minecraft:enter_block", name: "enter_block", desc: "Player walked into a block" },
  { id: "minecraft:fall_from_height", name: "fall_from_height", desc: "Player landed after falling" },
  { id: "minecraft:fishing_rod_hooked", name: "fishing_rod_hooked", desc: "Fishing rod caught an item or entity" },
  { id: "minecraft:hero_of_the_village", name: "hero_of_the_village", desc: "Player defeated a raid" },
  { id: "minecraft:item_durability_changed", name: "item_durability_changed", desc: "Item durability decreased/increased" },
  { id: "minecraft:item_used_on_block", name: "item_used_on_block", desc: "Player right clicked a block with item" },
  { id: "minecraft:kill_mob_near_sculk_catalyst", name: "kill_mob_near_sculk_catalyst", desc: "Mob killed near sculk catalyst" },
  { id: "minecraft:levitation", name: "levitation", desc: "Player received levitation effect" },
  { id: "minecraft:lightning_strike", name: "lightning_strike", desc: "Lightning struck near player" },
  { id: "minecraft:nether_travel", name: "nether_travel", desc: "Player traveled through Nether portal" },
  { id: "minecraft:player_generates_container_loot", name: "player_generates_container_loot", desc: "Naturally generated chest opened" },
  { id: "minecraft:player_interacted_with_entity", name: "player_interacted_with_entity", desc: "Player right-clicked an entity" },
  { id: "minecraft:shot_crosshairs", name: "shot_crosshairs", desc: "Projectile hit entity in crosshairs" },
  { id: "minecraft:slept_in_bed", name: "slept_in_bed", desc: "Player slept in a bed" },
  { id: "minecraft:slide_down_block", name: "slide_down_block", desc: "Player slid down a honey block" },
  { id: "minecraft:summoned_entity", name: "summoned_entity", desc: "Spawned Golem or Wither" },
  { id: "minecraft:tame_animal", name: "tame_animal", desc: "Tamed horse, wolf, cat, etc." },
  { id: "minecraft:target_hit", name: "target_hit", desc: "Target block hit with projectile" },
  { id: "minecraft:throw_item", name: "throw_item", desc: "Player threw an item" },
  { id: "minecraft:thrown_item_picked_up_by_entity", name: "thrown_item_picked_up_by_entity", desc: "Entity picked up thrown item" },
  { id: "minecraft:used_ender_eye", name: "used_ender_eye", desc: "Threw an eye of ender" },
  { id: "minecraft:used_totem", name: "used_totem", desc: "Used a Totem of Undying" },
  { id: "minecraft:using_item", name: "using_item", desc: "Continuously using an item" },
  { id: "minecraft:villager_trade", name: "villager_trade", desc: "Traded with a villager" },
  { id: "minecraft:voluntary_exile", name: "voluntary_exile", desc: "Killed a raid captain" },
  { id: "minecraft:allay_drop_item_on_block", name: "allay_drop_item_on_block", desc: "Allay dropped item on block" },
  { id: "minecraft:avoid_vibration", name: "avoid_vibration", desc: "Sneaked to avoid sculk sensor" },
  { id: "minecraft:chiseled_bookshelf_interaction", name: "chiseled_bookshelf_interaction", desc: "Used chiseled bookshelf" },
  { id: "minecraft:construct_beacon", name: "construct_beacon", desc: "Activated a beacon pyramid" },
  { id: "minecraft:effects_changed", name: "effects_changed", desc: "Player status effects changed" },
  { id: "minecraft:fall_after_explosion", name: "fall_after_explosion", desc: "Fell safely after wind burst" },
  { id: "minecraft:default_block_use", name: "default_block_use", desc: "Used block interaction" }
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
  currentBackground: BACKGROUND_PRESETS.adventure,
  bgTileSize: 64,
  bgOpacity: 0.9,
  itemsList: [],
  assetsBaseUrl: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/26.2/assets/minecraft/textures/"
};

// ==========================================
// 4. SAMPLE TREE (EXACTLY MATCHING USER UI)
// ==========================================
const sampleAdvancements = [
  {
    id: "root",
    parent: null,
    x: 80,
    y: 260,
    sends_telemetry_event: false,
    display: {
      title: "Minecraft Questline",
      description: "Begin your adventure",
      icon: "minecraft:nether_star",
      frame: "task",
      show_toast: true,
      announce_to_chat: true,
      hidden: false,
      background: "minecraft:textures/gui/advancements/backgrounds/adventure.png"
    },
    criteria: [
      { id: "requirement", trigger: "minecraft:tick", conditions: {} }
    ],
    requirementsMode: "AND",
    customRequirements: [],
    rewards: { experience: 0, recipes: [], function: "", loot: [] }
  },
  {
    id: "branch_top",
    parent: "root",
    x: 180,
    y: 70,
    sends_telemetry_event: false,
    display: {
      title: "Cauldron Crafts",
      description: "Use a cauldron",
      icon: "minecraft:cauldron",
      frame: "task",
      show_toast: true,
      announce_to_chat: true,
      hidden: false
    },
    criteria: [{ id: "requirement", trigger: "minecraft:impossible", conditions: {} }],
    requirementsMode: "AND",
    rewards: { experience: 10, recipes: [], function: "", loot: [] }
  },
  {
    id: "sub_top_1",
    parent: "branch_top",
    x: 280,
    y: 40,
    sends_telemetry_event: false,
    display: {
      title: "Rare Brew",
      description: "Collect brewing items",
      icon: "minecraft:potion",
      frame: "task",
      show_toast: true,
      announce_to_chat: true,
      hidden: false
    },
    criteria: [{ id: "requirement", trigger: "minecraft:impossible", conditions: {} }],
    requirementsMode: "AND",
    rewards: { experience: 20, recipes: [], function: "", loot: [] }
  },
  {
    id: "sub_top_2",
    parent: "branch_top",
    x: 280,
    y: 100,
    sends_telemetry_event: false,
    display: {
      title: "Soul Light",
      description: "Obtain soul fire",
      icon: "minecraft:soul_lantern",
      frame: "task",
      show_toast: true,
      announce_to_chat: true,
      hidden: false
    },
    criteria: [{ id: "requirement", trigger: "minecraft:impossible", conditions: {} }],
    requirementsMode: "AND",
    rewards: { experience: 20, recipes: [], function: "", loot: [] }
  },
  {
    id: "branch_mid",
    parent: "root",
    x: 180,
    y: 200,
    sends_telemetry_event: false,
    display: {
      title: "Totem Master",
      description: "Find an ancient totem",
      icon: "minecraft:totem_of_undying",
      frame: "task",
      show_toast: true,
      announce_to_chat: true,
      hidden: false
    },
    criteria: [{ id: "requirement", trigger: "minecraft:impossible", conditions: {} }],
    requirementsMode: "AND",
    rewards: { experience: 50, recipes: [], function: "", loot: [] }
  },
  {
    id: "cauldron_node",
    parent: "branch_mid",
    x: 280,
    y: 170,
    sends_telemetry_event: false,
    display: {
      title: "Witch Cauldron",
      description: "Fill the cauldron",
      icon: "minecraft:brewing_stand",
      frame: "task",
      show_toast: true,
      announce_to_chat: true,
      hidden: false
    },
    criteria: [{ id: "requirement", trigger: "minecraft:impossible", conditions: {} }],
    requirementsMode: "AND",
    rewards: { experience: 30, recipes: [], function: "", loot: [] }
  },
  {
    id: "apple_food",
    parent: "cauldron_node",
    x: 370,
    y: 130,
    sends_telemetry_event: false,
    display: {
      title: "Golden Snack",
      description: "Eat golden apple",
      icon: "minecraft:golden_apple",
      frame: "task",
      show_toast: true,
      announce_to_chat: true,
      hidden: false
    },
    criteria: [{ id: "requirement", trigger: "minecraft:impossible", conditions: {} }],
    requirementsMode: "AND",
    rewards: { experience: 30, recipes: [], function: "", loot: [] }
  },
  {
    id: "stew_dish",
    parent: "cauldron_node",
    x: 370,
    y: 180,
    sends_telemetry_event: false,
    display: {
      title: "Suspicious Stew",
      description: "Cook delicious soup",
      icon: "minecraft:suspicious_stew",
      frame: "task",
      show_toast: true,
      announce_to_chat: true,
      hidden: false
    },
    criteria: [{ id: "requirement", trigger: "minecraft:impossible", conditions: {} }],
    requirementsMode: "AND",
    rewards: { experience: 40, recipes: [], function: "", loot: [] }
  },
  {
    id: "beetroot_soup",
    parent: "cauldron_node",
    x: 370,
    y: 230,
    sends_telemetry_event: false,
    display: {
      title: "Beetroot Feast",
      description: "Harvest beetroots",
      icon: "minecraft:beetroot_soup",
      frame: "task",
      show_toast: true,
      announce_to_chat: true,
      hidden: false
    },
    criteria: [{ id: "requirement", trigger: "minecraft:impossible", conditions: {} }],
    requirementsMode: "AND",
    rewards: { experience: 25, recipes: [], function: "", loot: [] }
  },
  {
    id: "soup_bowl",
    parent: "beetroot_soup",
    x: 460,
    y: 230,
    sends_telemetry_event: false,
    display: {
      title: "Master Chef",
      description: "Taste all soups in the game",
      icon: "minecraft:mushroom_stew",
      frame: "goal",
      show_toast: true,
      announce_to_chat: true,
      hidden: false
    },
    criteria: [{ id: "requirement", trigger: "minecraft:impossible", conditions: {} }],
    requirementsMode: "AND",
    rewards: { experience: 100, recipes: [], function: "", loot: [] }
  },
  {
    id: "leather_helm",
    parent: "branch_mid",
    x: 280,
    y: 240,
    sends_telemetry_event: false,
    display: {
      title: "Leather Cap",
      description: "Wear armor",
      icon: "minecraft:leather_helmet",
      frame: "task",
      show_toast: true,
      announce_to_chat: true,
      hidden: false
    },
    criteria: [{ id: "requirement", trigger: "minecraft:impossible", conditions: {} }],
    requirementsMode: "AND",
    rewards: { experience: 15, recipes: [], function: "", loot: [] }
  },
  {
    id: "fancy_armor",
    parent: "branch_mid",
    x: 370,
    y: 300,
    sends_telemetry_event: false,
    display: {
      title: "Ancient Relic Armor",
      description: "Obtain the relic chestplate",
      icon: "minecraft:netherite_chestplate",
      frame: "challenge",
      show_toast: true,
      announce_to_chat: true,
      hidden: false
    },
    criteria: [{ id: "requirement", trigger: "minecraft:impossible", conditions: {} }],
    requirementsMode: "AND",
    rewards: { experience: 500, recipes: ["minecraft:netherite_sword"], function: "", loot: [] }
  },
  {
    id: "crafting_block",
    parent: "root",
    x: 180,
    y: 330,
    sends_telemetry_event: false,
    display: {
      title: "Workbench Master",
      description: "Craft complex items",
      icon: "minecraft:crafting_table",
      frame: "task",
      show_toast: true,
      announce_to_chat: true,
      hidden: false
    },
    criteria: [{ id: "requirement", trigger: "minecraft:impossible", conditions: {} }],
    requirementsMode: "AND",
    rewards: { experience: 20, recipes: [], function: "", loot: [] }
  },
  {
    id: "enchant_book",
    parent: "crafting_block",
    x: 280,
    y: 330,
    sends_telemetry_event: false,
    display: {
      title: "Enchanted Book",
      description: "Find an enchanted book",
      icon: "minecraft:enchanted_book",
      frame: "task",
      show_toast: true,
      announce_to_chat: true,
      hidden: false
    },
    criteria: [{ id: "requirement", trigger: "minecraft:impossible", conditions: {} }],
    requirementsMode: "AND",
    rewards: { experience: 30, recipes: [], function: "", loot: [] }
  },
  {
    id: "diamond_sword",
    parent: "crafting_block",
    x: 370,
    y: 360,
    sends_telemetry_event: false,
    display: {
      title: "Diamond Blade",
      description: "Forge a diamond weapon",
      icon: "minecraft:diamond_sword",
      frame: "task",
      show_toast: true,
      announce_to_chat: true,
      hidden: false
    },
    criteria: [{ id: "requirement", trigger: "minecraft:impossible", conditions: {} }],
    requirementsMode: "AND",
    rewards: { experience: 50, recipes: [], function: "", loot: [] }
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
}

function getItemTextureUrl(itemId) {
  if (!itemId) itemId = "minecraft:grass_block";
  const cleanId = itemId.replace("minecraft:", "");
  return `${state.assetsBaseUrl}item/${cleanId}.png`;
}

function handleImageError(img, itemId) {
  const cleanId = (itemId || "grass_block").replace("minecraft:", "");
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
  const clean = (itemId || "M").replace("minecraft:", "").replace(/[_-]/g, " ");
  const firstLetter = clean.charAt(0).toUpperCase();
  return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><rect width="32" height="32" rx="4" fill="%23222222" stroke="%23ffa600" stroke-width="2"/><text x="16" y="21" fill="%23ffa600" font-family="sans-serif" font-size="14" font-weight="900" text-anchor="middle">${firstLetter}</text></svg>`;
}

// ==========================================
// 6. BACKGROUND ENGINE (CUSTOM & PRESETS)
// ==========================================
function setCanvasBackground(textureUrl) {
  state.currentBackground = textureUrl;
  const bgEl = document.getElementById('advCanvasBg');
  if (bgEl) {
    bgEl.style.backgroundImage = `url('${textureUrl}')`;
    bgEl.style.backgroundSize = `${state.bgTileSize}px ${state.bgTileSize}px`;
    bgEl.style.opacity = state.bgOpacity;
  }
}

function handlePresetBgChange(presetKey) {
  if (presetKey === "custom_url") {
    openCustomBgModal();
  } else if (BACKGROUND_PRESETS[presetKey]) {
    setCanvasBackground(BACKGROUND_PRESETS[presetKey]);
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
    setCanvasBackground(url);
    closeCustomBgModal();
    showToast("✨ Custom background URL applied!");
  }
}

function handleCustomBgFileUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    setCanvasBackground(e.target.result);
    closeCustomBgModal();
    showToast("🖼️ Custom local texture image applied!");
  };
  reader.readAsDataURL(file);
}

// ==========================================
// 7. CANVAS NAVIGATION (PAN & ZOOM)
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
  canvasContainer.addEventListener('mousedown', (e) => {
    closeContextMenu();
    if (e.target === canvasContainer || e.target === canvasBg || e.button === 1) {
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

  window.addEventListener('mousemove', (e) => {
    if (state.isPanning) {
      state.panX = e.clientX - state.startPanX;
      state.panY = e.clientY - state.startPanY;
      updateCanvasTransform();
    }
  });

  window.addEventListener('mouseup', () => {
    if (state.isPanning) {
      state.isPanning = false;
      canvasContainer.classList.remove('panning');
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
    if (e.target === canvasContainer || e.target === canvasBg) {
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

function resetView() {
  state.scale = 1;
  state.panX = 280;
  state.panY = 220;
  updateCanvasTransform();
}

// ==========================================
// 8. TREE RENDERING & AUTOMATIC HIERARCHY
// ==========================================
function computeAutoLayout() {
  // Identify all roots
  const roots = state.advancements.filter(a => !a.parent || !state.advancements.some(p => p.id === a.parent));
  if (roots.length === 0 && state.advancements.length > 0) {
    roots.push(state.advancements[0]);
  }

  let currentY = 100;
  const H_SPACING = 110;
  const V_SPACING = 80;

  function layoutNode(node, depth) {
    node.x = 80 + depth * H_SPACING;
    const children = state.advancements.filter(a => a.parent === node.id);

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
  computeAutoLayout();
  renderNodes();
  renderConnections();
  renderSidebar();
}

function renderNodes() {
  nodesLayer.innerHTML = '';
  state.advancements.forEach(node => {
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
  const iconUrl = getItemTextureUrl(node.display?.icon);
  const isRoot = !node.parent;

  div.innerHTML = `
    <div class="node-card frame-${frameType}">
      <img class="node-item-img" src="${iconUrl}" alt="${node.id}" onerror="handleImageError(this, '${node.display?.icon || ''}')">
      ${isRoot ? '<div class="node-root-badge">ROOT</div>' : ''}
    </div>
  `;

  // Left click: select node
  div.addEventListener('click', (e) => {
    e.stopPropagation();
    closeContextMenu();
    selectAdvancement(node.id);
  });

  // Right Click: open context menu (New Child, New Parent, Delete)
  div.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    e.stopPropagation();
    openContextMenu(node.id, e.clientX, e.clientY);
  });

  return div;
}

// ==========================================
// 9. SOLID ORTHOGONAL STEPPED CONNECTIONS
// ==========================================
function renderConnections() {
  connectionsSvg.innerHTML = '';

  state.advancements.forEach(node => {
    if (!node.parent) return;
    const parentNode = state.advancements.find(a => a.id === node.parent);
    if (!parentNode) return;

    // Connect from right edge of parent to left edge of child
    const x1 = parentNode.x + 26;
    const y1 = parentNode.y;
    const x2 = node.x - 26;
    const y2 = node.y;

    // Right-angle stepped line
    const midX = (x1 + x2) / 2;
    const d = `M ${x1} ${y1} H ${midX} V ${y2} H ${x2}`;
    const isSelected = state.selectedId === node.id || state.selectedId === parentNode.id;

    // Outer dark outline
    const outerPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    outerPath.setAttribute("d", d);
    outerPath.setAttribute("class", "tree-line-outer");
    connectionsSvg.appendChild(outerPath);

    // Inner crisp line
    const innerPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    innerPath.setAttribute("d", d);
    innerPath.setAttribute("class", `tree-line-inner ${isSelected ? 'selected' : ''}`);
    connectionsSvg.appendChild(innerPath);
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
  const newNum = state.advancements.length + 1;
  const newId = `advancement_${newNum}`;
  const parent = parentId !== undefined ? parentId : state.selectedId;

  const newAdv = {
    id: newId,
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
      { id: "requirement", trigger: "minecraft:impossible", conditions: {} }
    ],
    requirementsMode: "AND",
    customRequirements: [],
    rewards: { experience: 10, recipes: [], function: "", loot: [] }
  };

  state.advancements.push(newAdv);
  renderAll();
  selectAdvancement(newId);
  showToast(`✨ Created advancement "${newAdv.id}"`);
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
  state.selectedId = state.advancements.length > 0 ? state.advancements[0].id : null;
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
  const iconUrl = getItemTextureUrl(node.display?.icon);
  if (previewImg) {
    previewImg.src = iconUrl;
    previewImg.onerror = () => handleImageError(previewImg, node.display?.icon);
  }
  if (previewBox) {
    previewBox.onclick = openItemPickerModal;
  }

  // Build Parent Options
  let parentOptionsHtml = `<option value="" ${!node.parent && !node.customParent ? 'selected' : ''}>-- (None / Root) --</option>`;
  state.advancements.forEach(a => {
    if (a.id !== node.id) {
      parentOptionsHtml += `<option value="${a.id}" ${node.parent === a.id ? 'selected' : ''}>${escapeHtml(a.id)} (${escapeHtml(a.display?.title || a.id)})</option>`;
    }
  });

  // Criteria HTML
  let criteriaHtml = '';
  node.criteria.forEach((crit, idx) => {
    let triggerOptionsHtml = '';
    MINECRAFT_TRIGGERS.forEach(trig => {
      triggerOptionsHtml += `<option value="${trig.id}" ${crit.trigger === trig.id ? 'selected' : ''}>${trig.id}</option>`;
    });

    criteriaHtml += `
      <div class="criteria-block">
        <div class="criteria-block-header">
          <input type="text" class="misode-input" style="font-weight: bold; color: var(--accent-gold);" value="${escapeHtml(crit.id)}" onchange="updateCriteriaId(${idx}, this.value)">
          <button class="chest-btn btn-remove" onclick="removeCriteria(${idx})" title="Remove criterion">🗑️</button>
        </div>
        <div class="form-row">
          <label class="form-label">Trigger* <span class="info-icon" title="Trigger that checks when this requirement is met">ⓘ</span></label>
          <div class="input-with-action">
            <select class="misode-select" onchange="updateCriteriaTrigger(${idx}, this.value)">
              ${triggerOptionsHtml}
            </select>
          </div>
        </div>
      </div>
    `;
  });

  // Display Fields
  const displayObj = node.display || {};

  container.innerHTML = `
    <!-- ADVANCEMENT ID -->
    <div class="form-row">
      <label class="form-label">Advancement ID <span class="info-icon" title="Unique ID in data pack namespace">ⓘ</span></label>
      <div class="input-with-action">
        <input type="text" class="misode-input" value="${escapeHtml(node.id)}" onchange="updateAdvancementId(this.value)">
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
            <input type="text" class="misode-input" list="minecraftItemsList" value="${escapeHtml(displayObj.icon || 'minecraft:grass_block')}" oninput="updateDisplayField('icon', this.value)" onchange="updateDisplayField('icon', this.value)">
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
            <label class="form-label">Background <span class="info-icon" title="Background texture for root advancement">ⓘ</span></label>
            <div class="input-with-action">
              <input type="text" class="misode-input" value="${escapeHtml(displayObj.background || 'minecraft:textures/gui/advancements/backgrounds/adventure.png')}" onchange="updateDisplayField('background', this.value)">
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
    json.display = {
      icon: {
        item: node.display.icon || "minecraft:grass_block"
      },
      title: {
        text: node.display.title || node.id
      },
      description: {
        text: node.display.description || ""
      },
      frame: node.display.frame || "task",
      show_toast: node.display.show_toast !== false,
      announce_to_chat: node.display.announce_to_chat !== false,
      hidden: !!node.display.hidden
    };

    if (!node.parent && node.display.background) {
      json.display.background = node.display.background;
    }
  }

  if (node.customParent) {
    json.parent = node.customParent;
  } else if (node.parent) {
    json.parent = `${state.namespace}:${node.parent}`;
  }

  json.criteria = {};
  node.criteria.forEach(crit => {
    json.criteria[crit.id] = {
      trigger: crit.trigger,
      conditions: crit.conditions || {}
    };
  });

  if (node.requirementsMode === "OR" && node.criteria.length > 1) {
    json.requirements = node.criteria.map(c => [c.id]);
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
    zip.addFile(`data/${ns}/advancement/${node.id}.json`, JSON.stringify(json, null, 2));
  });

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
  state.advancements = JSON.parse(JSON.stringify(sampleAdvancements));
  state.selectedId = "fancy_armor"; // Select the relic armor matching user's image!

  setCanvasBackground(BACKGROUND_PRESETS.adventure);
  initCanvasEvents();
  initItemPickerEvents();
  updateCanvasTransform();
  renderAll();
});
