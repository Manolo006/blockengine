/**
 * PARTICLE GENERATOR & 3D REAL-TIME VISUALIZER - MINECRAFT JAVA EDITION
 * Uses 100% Official Minecraft 1.21.4 Particle Textures extracted from game jar,
 * Real-time Animation Frames, Exact Scale, 3D Orbit Camera, and Physics Simulator.
 */

// ==========================================
// 1. VANILLA TEXTURE MAPPINGS (OFFICIAL MINECRAFT ASSETS)
// ==========================================
const VANILLA_TEXTURE_MAP = {
  "minecraft:flame": ["flame.png"],
  "minecraft:soul_fire_flame": ["soul_fire_flame.png"],
  "minecraft:small_flame": ["flame.png"],
  "minecraft:crit": ["critical_hit.png"],
  "minecraft:enchanted_hit": ["enchanted_hit.png"],
  "minecraft:heart": ["heart.png"],
  "minecraft:damage_indicator": ["damage.png"],
  "minecraft:angry_villager": ["angry.png"],
  "minecraft:happy_villager": ["glint.png", "glitter_0.png", "glitter_1.png", "glitter_2.png"],
  "minecraft:totem_of_undying": ["glitter_0.png", "glitter_1.png", "glitter_2.png", "glitter_3.png", "glitter_4.png", "glitter_5.png", "glitter_6.png", "glitter_7.png"],
  "minecraft:sculk_soul": ["sculk_soul_0.png", "sculk_soul_1.png", "sculk_soul_2.png", "sculk_soul_3.png", "sculk_soul_4.png", "sculk_soul_5.png", "sculk_soul_6.png", "sculk_soul_7.png", "sculk_soul_8.png", "sculk_soul_9.png", "sculk_soul_10.png"],
  "minecraft:soul": ["soul_0.png", "soul_1.png", "soul_2.png", "soul_3.png", "soul_4.png", "soul_5.png", "soul_6.png", "soul_7.png", "soul_8.png", "soul_9.png", "soul_10.png"],
  "minecraft:cherry_leaves": ["cherry_0.png", "cherry_1.png", "cherry_2.png", "cherry_3.png", "cherry_4.png", "cherry_5.png", "cherry_6.png", "cherry_7.png", "cherry_8.png", "cherry_9.png", "cherry_10.png", "cherry_11.png"],
  "minecraft:smoke": ["big_smoke_0.png", "big_smoke_1.png", "big_smoke_2.png", "big_smoke_3.png", "big_smoke_4.png", "big_smoke_5.png", "big_smoke_6.png", "big_smoke_7.png", "big_smoke_8.png", "big_smoke_9.png", "big_smoke_10.png", "big_smoke_11.png"],
  "minecraft:large_smoke": ["big_smoke_0.png", "big_smoke_1.png", "big_smoke_2.png", "big_smoke_3.png", "big_smoke_4.png", "big_smoke_5.png", "big_smoke_6.png", "big_smoke_7.png", "big_smoke_8.png", "big_smoke_9.png", "big_smoke_10.png", "big_smoke_11.png"],
  "minecraft:white_smoke": ["big_smoke_0.png", "big_smoke_1.png", "big_smoke_2.png", "big_smoke_3.png", "big_smoke_4.png", "big_smoke_5.png", "big_smoke_6.png", "big_smoke_7.png", "big_smoke_8.png", "big_smoke_9.png", "big_smoke_10.png", "big_smoke_11.png"],
  "minecraft:campfire_cosy_smoke": ["big_smoke_0.png", "big_smoke_1.png", "big_smoke_2.png", "big_smoke_3.png", "big_smoke_4.png", "big_smoke_5.png", "big_smoke_6.png", "big_smoke_7.png", "big_smoke_8.png", "big_smoke_9.png", "big_smoke_10.png", "big_smoke_11.png"],
  "minecraft:campfire_signal_smoke": ["big_smoke_0.png", "big_smoke_1.png", "big_smoke_2.png", "big_smoke_3.png", "big_smoke_4.png", "big_smoke_5.png", "big_smoke_6.png", "big_smoke_7.png", "big_smoke_8.png", "big_smoke_9.png", "big_smoke_10.png", "big_smoke_11.png"],
  "minecraft:cloud": ["generic_0.png", "generic_1.png", "generic_2.png", "generic_3.png", "generic_4.png", "generic_5.png", "generic_6.png", "generic_7.png"],
  "minecraft:poof": ["generic_7.png", "generic_6.png", "generic_5.png", "generic_4.png", "generic_3.png", "generic_2.png", "generic_1.png", "generic_0.png"],
  "minecraft:explosion": ["explosion_0.png", "explosion_1.png", "explosion_2.png", "explosion_3.png", "explosion_4.png", "explosion_5.png", "explosion_6.png", "explosion_7.png", "explosion_8.png", "explosion_9.png", "explosion_10.png", "explosion_11.png", "explosion_12.png", "explosion_13.png", "explosion_14.png", "explosion_15.png"],
  "minecraft:explosion_emitter": ["explosion_0.png", "explosion_1.png", "explosion_2.png", "explosion_3.png", "explosion_4.png", "explosion_5.png", "explosion_6.png", "explosion_7.png", "explosion_8.png", "explosion_9.png", "explosion_10.png", "explosion_11.png", "explosion_12.png", "explosion_13.png", "explosion_14.png", "explosion_15.png"],
  "minecraft:bubble": ["bubble.png"],
  "minecraft:bubble_pop": ["bubble_pop_0.png", "bubble_pop_1.png", "bubble_pop_2.png", "bubble_pop_3.png", "bubble_pop_4.png"],
  "minecraft:bubble_column_up": ["bubble.png"],
  "minecraft:current_down": ["bubble.png"],
  "minecraft:lava": ["lava.png"],
  "minecraft:note": ["note.png"],
  "minecraft:portal": ["generic_0.png", "generic_1.png", "generic_2.png", "generic_3.png", "generic_4.png", "generic_5.png", "generic_6.png", "generic_7.png"],
  "minecraft:reverse_portal": ["generic_7.png", "generic_6.png", "generic_5.png", "generic_4.png", "generic_3.png", "generic_2.png", "generic_1.png", "generic_0.png"],
  "minecraft:enchant": ["sga_a.png", "sga_b.png", "sga_c.png", "sga_d.png", "sga_e.png", "sga_f.png", "sga_g.png", "sga_h.png", "sga_i.png", "sga_j.png", "sga_k.png", "sga_l.png", "sga_m.png", "sga_n.png", "sga_o.png", "sga_p.png", "sga_q.png", "sga_r.png", "sga_s.png", "sga_t.png", "sga_u.png", "sga_v.png", "sga_w.png", "sga_x.png", "sga_y.png", "sga_z.png"],
  "minecraft:gust": ["gust_0.png", "gust_1.png", "gust_2.png", "gust_3.png", "gust_4.png", "gust_5.png", "gust_6.png", "gust_7.png", "gust_8.png", "gust_9.png", "gust_10.png", "gust_11.png"],
  "minecraft:breeze_wind_charge": ["gust_0.png", "gust_1.png", "gust_2.png", "gust_3.png", "gust_4.png", "gust_5.png", "gust_6.png", "gust_7.png", "gust_8.png", "gust_9.png", "gust_10.png", "gust_11.png"],
  "minecraft:small_gust": ["small_gust_0.png", "small_gust_1.png", "small_gust_2.png", "small_gust_3.png", "small_gust_4.png", "small_gust_5.png", "small_gust_6.png"],
  "minecraft:sonic_boom": ["sonic_boom_0.png", "sonic_boom_1.png", "sonic_boom_2.png", "sonic_boom_3.png", "sonic_boom_4.png", "sonic_boom_5.png", "sonic_boom_6.png", "sonic_boom_7.png", "sonic_boom_8.png", "sonic_boom_9.png", "sonic_boom_10.png", "sonic_boom_11.png", "sonic_boom_12.png", "sonic_boom_13.png", "sonic_boom_14.png", "sonic_boom_15.png"],
  "minecraft:sculk_charge": ["sculk_charge_0.png", "sculk_charge_1.png", "sculk_charge_2.png", "sculk_charge_3.png", "sculk_charge_4.png", "sculk_charge_5.png", "sculk_charge_6.png"],
  "minecraft:sculk_charge_pop": ["sculk_charge_pop_0.png", "sculk_charge_pop_1.png", "sculk_charge_pop_2.png", "sculk_charge_pop_3.png"],
  "minecraft:electric_spark": ["spark_0.png", "spark_1.png", "spark_2.png", "spark_3.png", "spark_4.png", "spark_5.png", "spark_6.png", "spark_7.png"],
  "minecraft:firework": ["spark_0.png", "spark_1.png", "spark_2.png", "spark_3.png", "spark_4.png", "spark_5.png", "spark_6.png", "spark_7.png"],
  "minecraft:witch": ["spell_0.png", "spell_1.png", "spell_2.png", "spell_3.png", "spell_4.png", "spell_5.png", "spell_6.png", "spell_7.png"],
  "minecraft:entity_effect": ["effect_0.png", "effect_1.png", "effect_2.png", "effect_3.png", "effect_4.png", "effect_5.png", "effect_6.png", "effect_7.png"],
  "minecraft:ambient_entity_effect": ["effect_0.png", "effect_1.png", "effect_2.png", "effect_3.png", "effect_4.png", "effect_5.png", "effect_6.png", "effect_7.png"],
  "minecraft:instant_effect": ["spell_0.png", "spell_1.png", "spell_2.png", "spell_3.png", "spell_4.png", "spell_5.png", "spell_6.png", "spell_7.png"],
  "minecraft:dust": ["generic_0.png", "generic_1.png", "generic_2.png", "generic_3.png", "generic_4.png", "generic_5.png", "generic_6.png", "generic_7.png"],
  "minecraft:dust_color_transition": ["generic_0.png", "generic_1.png", "generic_2.png", "generic_3.png", "generic_4.png", "generic_5.png", "generic_6.png", "generic_7.png"],
  "minecraft:glow": ["glow.png"],
  "minecraft:nautilus": ["nautilus.png"],
  "minecraft:shriek": ["shriek.png"],
  "minecraft:trial_omen": ["trial_omen.png"],
  "minecraft:raid_omen": ["raid_omen.png"],
  "minecraft:trial_spawner_detection": ["trial_spawner_detection_0.png", "trial_spawner_detection_1.png", "trial_spawner_detection_2.png", "trial_spawner_detection_3.png", "trial_spawner_detection_4.png"],
  "minecraft:trial_spawner_detection_ominous": ["trial_spawner_detection_ominous_0.png", "trial_spawner_detection_ominous_1.png", "trial_spawner_detection_ominous_2.png", "trial_spawner_detection_ominous_3.png", "trial_spawner_detection_ominous_4.png"],
  "minecraft:ominous_spawning": ["ominous_spawning.png"],
  "minecraft:vault_connection": ["vault_connection.png"],
  "minecraft:infested": ["infested.png"],
  "minecraft:flash": ["flash.png"],
  "minecraft:splash": ["splash_0.png", "splash_1.png", "splash_2.png", "splash_3.png"],
  "minecraft:sweep_attack": ["sweep_0.png", "sweep_1.png", "sweep_2.png", "sweep_3.png", "sweep_4.png", "sweep_5.png", "sweep_6.png", "sweep_7.png"],
  "minecraft:dripping_water": ["drip_hang.png"],
  "minecraft:falling_water": ["drip_fall.png"],
  "minecraft:dripping_lava": ["drip_hang.png"],
  "minecraft:falling_lava": ["drip_fall.png"],
  "minecraft:landing_lava": ["drip_land.png"],
  "minecraft:dripping_honey": ["drip_hang.png"],
  "minecraft:falling_honey": ["drip_fall.png"],
  "minecraft:landing_honey": ["drip_land.png"],
  "minecraft:dripping_obsidian_tear": ["drip_hang.png"],
  "minecraft:falling_obsidian_tear": ["drip_fall.png"],
  "minecraft:landing_obsidian_tear": ["drip_land.png"]
};

// ==========================================
// 2. ALL MINECRAFT VANILLA PARTICLES (1.20.5+ / 1.21)
// ==========================================
const MINECRAFT_PARTICLES = [
  // --- FIRE, FLAME & ENERGY ---
  { id: "minecraft:flame", name: "Flame", group: "🔥 Fire & Energy", desc: "Standard torch / furnace flame", type: "standard", baseSize: 0.18 },
  { id: "minecraft:soul_fire_flame", name: "Soul Fire Flame", group: "🔥 Fire & Energy", desc: "Cyan soul fire flame", type: "standard", baseSize: 0.18 },
  { id: "minecraft:small_flame", name: "Small Flame", group: "🔥 Fire & Energy", desc: "Tiny candle flame", type: "standard", baseSize: 0.12 },
  { id: "minecraft:electric_spark", name: "Electric Spark", group: "🔥 Fire & Energy", desc: "Lightning rod / copper electric spark", type: "standard", baseSize: 0.16 },
  { id: "minecraft:firework", name: "Firework Spark", group: "🔥 Fire & Energy", desc: "Spark trailing behind fireworks", type: "standard", baseSize: 0.16 },
  { id: "minecraft:flash", name: "Flash", group: "🔥 Fire & Energy", desc: "Bright white full-screen flash explosion", type: "standard", baseSize: 0.5 },
  { id: "minecraft:end_rod", name: "End Rod", group: "🔥 Fire & Energy", desc: "White glow particles falling from end rod", type: "standard", baseSize: 0.15 },
  { id: "minecraft:glow", name: "Glow", group: "🔥 Fire & Energy", desc: "Glowing ink / glow berries ambient aura", type: "standard", baseSize: 0.18 },
  { id: "minecraft:lava", name: "Lava Spark", group: "🔥 Fire & Energy", desc: "Lava pop and leaping orange spark", type: "standard", baseSize: 0.16 },

  // --- SMOKE, ASH & EXPLOSIONS ---
  { id: "minecraft:smoke", name: "Smoke", group: "💨 Smoke & Explosions", desc: "Black smoke rising", type: "standard", baseSize: 0.22 },
  { id: "minecraft:large_smoke", name: "Large Smoke", group: "💨 Smoke & Explosions", desc: "Large dark smoke cloud", type: "standard", baseSize: 0.35 },
  { id: "minecraft:white_smoke", name: "White Smoke", group: "💨 Smoke & Explosions", desc: "Light white smoke", type: "standard", baseSize: 0.22 },
  { id: "minecraft:campfire_cosy_smoke", name: "Campfire Cozy Smoke", group: "💨 Smoke & Explosions", desc: "Rising campfire smoke puff", type: "standard", baseSize: 0.25 },
  { id: "minecraft:campfire_signal_smoke", name: "Campfire Signal Smoke", group: "💨 Smoke & Explosions", desc: "High rising haystack signal smoke", type: "standard", baseSize: 0.3 },
  { id: "minecraft:cloud", name: "Cloud", group: "💨 Smoke & Explosions", desc: "Puffy white explosion cloud", type: "standard", baseSize: 0.25 },
  { id: "minecraft:explosion", name: "Explosion", group: "💨 Smoke & Explosions", desc: "Small TNT explosion puff", type: "standard", baseSize: 0.4 },
  { id: "minecraft:explosion_emitter", name: "Explosion Emitter (Huge)", group: "💨 Smoke & Explosions", desc: "Massive fireball / wither explosion blast", type: "standard", baseSize: 0.6 },
  { id: "minecraft:poof", name: "Poof", group: "💨 Smoke & Explosions", desc: "Mob despawn / silverfish puff", type: "standard", baseSize: 0.25 },
  { id: "minecraft:ash", name: "Basalt Ash", group: "💨 Smoke & Explosions", desc: "Dark basalt deltas falling ash", type: "standard", baseSize: 0.14 },
  { id: "minecraft:white_ash", name: "White Ash", group: "💨 Smoke & Explosions", desc: "White ash floating in air", type: "standard", baseSize: 0.14 },

  // --- MAGIC, POTIONS & RUNES ---
  { id: "minecraft:enchant", name: "Enchanting Glyphs", group: "✨ Magic & Potions", desc: "Floating galactic runes flying towards table", type: "standard", baseSize: 0.18 },
  { id: "minecraft:enchanted_hit", name: "Enchanted Hit (Sharpness)", group: "✨ Magic & Potions", desc: "Cyan crit stars from enchanted weapons", type: "standard", baseSize: 0.2 },
  { id: "minecraft:crit", name: "Critical Hit", group: "✨ Magic & Potions", desc: "Gold jump attack critical hit stars", type: "standard", baseSize: 0.2 },
  { id: "minecraft:damage_indicator", name: "Damage Indicator (Heart Hit)", group: "✨ Magic & Potions", desc: "Dark broken heart damage indicator", type: "standard", baseSize: 0.22 },
  { id: "minecraft:dragon_breath", name: "Dragon Breath", group: "✨ Magic & Potions", desc: "Purple lingering dragon breath clouds", type: "standard", baseSize: 0.25 },
  { id: "minecraft:entity_effect", name: "Entity Effect (Potion Bubble)", group: "✨ Magic & Potions", desc: "Potion effect swirling bubble", type: "standard", baseSize: 0.18 },
  { id: "minecraft:ambient_entity_effect", name: "Ambient Potion Effect", group: "✨ Magic & Potions", desc: "Beacon ambient potion effect swirl", type: "standard", baseSize: 0.18 },
  { id: "minecraft:instant_effect", name: "Instant Potion Effect", group: "✨ Magic & Potions", desc: "Splash / Instant health effect swirl", type: "standard", baseSize: 0.18 },
  { id: "minecraft:witch", name: "Witch Magic", group: "✨ Magic & Potions", desc: "Purple magic stars from witches", type: "standard", baseSize: 0.18 },
  { id: "minecraft:totem_of_undying", name: "Totem of Undying", group: "✨ Magic & Potions", desc: "Green and yellow glowing totem resurrection sparkles", type: "standard", baseSize: 0.22 },
  { id: "minecraft:portal", name: "Nether Portal", group: "✨ Magic & Potions", desc: "Purple particles being sucked towards portal", type: "standard", baseSize: 0.18 },
  { id: "minecraft:reverse_portal", name: "Reverse Portal", group: "✨ Magic & Potions", desc: "Purple portal particles moving outwards", type: "standard", baseSize: 0.18 },
  { id: "minecraft:nautilus", name: "Conduit Nautilus", group: "✨ Magic & Potions", desc: "Glowing blue runes circling conduit", type: "standard", baseSize: 0.2 },

  // --- DUST & COLOR TRANSITIONS (1.20.5+) ---
  { id: "minecraft:dust", name: "Dust (RGB Color & Scale)", group: "🎨 Dust & Colors", desc: "Redstone dust with custom RGB color and scale", type: "dust", baseSize: 0.16 },
  { id: "minecraft:dust_color_transition", name: "Dust Color Transition", group: "🎨 Dust & Colors", desc: "Dust transitioning between two RGB colors over lifetime", type: "dust_transition", baseSize: 0.16 },
  { id: "minecraft:dust_plume", name: "Dust Plume (1.20.5+)", group: "🎨 Dust & Colors", desc: "Armadillo / brush dust plume", type: "standard", baseSize: 0.22 },
  { id: "minecraft:dust_pillar", name: "Dust Pillar (1.20.5+)", group: "🎨 Dust & Colors", desc: "Pillar of block dust", type: "block", baseSize: 0.2 },

  // --- 1.21 TRIAL CHAMBERS, BREEZE & OMENS ---
  { id: "minecraft:breeze_wind_charge", name: "Breeze Wind Charge", group: "🌀 1.21 Trial Chambers", desc: "Swirling wind projectile swirl", type: "standard", baseSize: 0.28 },
  { id: "minecraft:gust", name: "Gust Wind (1.21)", group: "🌀 1.21 Trial Chambers", desc: "Breeze wind burst particle", type: "standard", baseSize: 0.28 },
  { id: "minecraft:gust_dust", name: "Gust Dust (1.21)", group: "🌀 1.21 Trial Chambers", desc: "Debris kicked up by wind gust", type: "standard", baseSize: 0.2 },
  { id: "minecraft:gust_emitter_large", name: "Gust Emitter Large (1.21)", group: "🌀 1.21 Trial Chambers", desc: "Large wind explosion puff", type: "standard", baseSize: 0.4 },
  { id: "minecraft:gust_emitter_small", name: "Gust Emitter Small (1.21)", group: "🌀 1.21 Trial Chambers", desc: "Small wind burst puff", type: "standard", baseSize: 0.25 },
  { id: "minecraft:small_gust", name: "Small Gust (1.21)", group: "🌀 1.21 Trial Chambers", desc: "Gentle breeze swirl", type: "standard", baseSize: 0.2 },
  { id: "minecraft:trial_omen", name: "Trial Omen (1.21)", group: "🌀 1.21 Trial Chambers", desc: "Floating ominous flame for trial spawner", type: "standard", baseSize: 0.2 },
  { id: "minecraft:raid_omen", name: "Raid Omen (1.21)", group: "🌀 1.21 Trial Chambers", desc: "Red glowing raid omen bottle particle", type: "standard", baseSize: 0.2 },
  { id: "minecraft:trial_spawner_detection", name: "Trial Spawner Detection (1.21)", group: "🌀 1.21 Trial Chambers", desc: "Gold sparks when trial spawner detects player", type: "standard", baseSize: 0.2 },
  { id: "minecraft:trial_spawner_detection_ominous", name: "Ominous Spawner Detection (1.21)", group: "🌀 1.21 Trial Chambers", desc: "Cyan/blue ominous trial spawner detection sparks", type: "standard", baseSize: 0.2 },
  { id: "minecraft:ominous_spawning", name: "Ominous Spawning (1.21)", group: "🌀 1.21 Trial Chambers", desc: "Ominous spawner item drop beam", type: "standard", baseSize: 0.2 },
  { id: "minecraft:vault_connection", name: "Vault Connection (1.21)", group: "🌀 1.21 Trial Chambers", desc: "Energy beam linking key to trial vault", type: "standard", baseSize: 0.2 },
  { id: "minecraft:infested", name: "Infested (1.21)", group: "🌀 1.21 Trial Chambers", desc: "Silverfish green infested potion cloud", type: "standard", baseSize: 0.2 },

  // --- SCULK & DEEP DARK ---
  { id: "minecraft:sculk_soul", name: "Sculk Soul", group: "🌑 Deep Dark & Sculk", desc: "Warden / Sculk catalyst rising cyan soul", type: "standard", baseSize: 0.22 },
  { id: "minecraft:sculk_charge", name: "Sculk Charge", group: "🌑 Deep Dark & Sculk", desc: "Energy charge travelling through sculk veins", type: "sculk_charge", baseSize: 0.2 },
  { id: "minecraft:sculk_charge_pop", name: "Sculk Charge Pop", group: "🌑 Deep Dark & Sculk", desc: "Sculk sensor bubble pop", type: "standard", baseSize: 0.2 },
  { id: "minecraft:shriek", name: "Sculk Shrieker Shockwave", group: "🌑 Deep Dark & Sculk", desc: "Expanding circular acoustic sound ring", type: "shriek", baseSize: 0.35 },
  { id: "minecraft:sonic_boom", name: "Sonic Boom", group: "🌑 Deep Dark & Sculk", desc: "Warden devastating horizontal sonic blast beam", type: "standard", baseSize: 0.4 },
  { id: "minecraft:soul", name: "Soul Sand Soul", group: "🌑 Deep Dark & Sculk", desc: "Soul speed boots blue souls", type: "standard", baseSize: 0.22 },

  // --- ENVIRONMENT, NATURE & WEATHER ---
  { id: "minecraft:cherry_leaves", name: "Cherry Leaves", group: "🌸 Environment & Nature", desc: "Pink cherry blossom petals gently falling", type: "standard", baseSize: 0.18 },
  { id: "minecraft:spore_blossom_air", name: "Spore Blossom Green Dust", group: "🌸 Environment & Nature", desc: "Ambient green spore blossom mist", type: "standard", baseSize: 0.16 },
  { id: "minecraft:falling_spore_blossom", name: "Falling Spore Blossom", group: "🌸 Environment & Nature", desc: "Falling green pollen particle", type: "standard", baseSize: 0.16 },
  { id: "minecraft:crimson_spore", name: "Crimson Spore", group: "🌸 Environment & Nature", desc: "Red nether fungi spores", type: "standard", baseSize: 0.16 },
  { id: "minecraft:warped_spore", name: "Warped Spore", group: "🌸 Environment & Nature", desc: "Teal nether fungi spores", type: "standard", baseSize: 0.16 },
  { id: "minecraft:mycelium", name: "Mycelium Spore", group: "🌸 Environment & Nature", desc: "Grey mushroom island spores", type: "standard", baseSize: 0.16 },
  { id: "minecraft:snowflake", name: "Snowflake", group: "🌸 Environment & Nature", desc: "Powder snow freezing crystal", type: "standard", baseSize: 0.16 },
  { id: "minecraft:rain", name: "Rain Splash", group: "🌸 Environment & Nature", desc: "Water droplet splash on ground", type: "standard", baseSize: 0.18 },

  // --- MOBS & SOCIAL ---
  { id: "minecraft:heart", name: "Heart", group: "❤️ Mobs & Social", desc: "Red love hearts from breeding animals", type: "standard", baseSize: 0.22 },
  { id: "minecraft:angry_villager", name: "Angry Villager", group: "❤️ Mobs & Social", desc: "Thundercloud with lightning bolt", type: "standard", baseSize: 0.22 },
  { id: "minecraft:happy_villager", name: "Happy Villager (Green Stars)", group: "❤️ Mobs & Social", desc: "Green sparkle stars from trading / bonemeal", type: "standard", baseSize: 0.2 },
  { id: "minecraft:note", name: "Note", group: "❤️ Mobs & Social", desc: "Colored musical note from noteblocks", type: "standard", baseSize: 0.2 },
  { id: "minecraft:sneeze", name: "Panda Sneeze", group: "❤️ Mobs & Social", desc: "Panda green snot burst", type: "standard", baseSize: 0.2 },
  { id: "minecraft:spit", name: "Llama Spit", group: "❤️ Mobs & Social", desc: "White projectile spit bubble", type: "standard", baseSize: 0.2 },
  { id: "minecraft:dolphin", name: "Dolphin Grace", group: "❤️ Mobs & Social", desc: "Sea trail behind dolphins", type: "standard", baseSize: 0.2 },
  { id: "minecraft:squid_ink", name: "Squid Ink", group: "❤️ Mobs & Social", desc: "Black squid ink cloud", type: "standard", baseSize: 0.25 },
  { id: "minecraft:glow_squid_ink", name: "Glow Squid Ink", group: "❤️ Mobs & Social", desc: "Cyan glowing squid ink cloud", type: "standard", baseSize: 0.25 },
  { id: "minecraft:wax_on", name: "Wax On (Honeycomb)", group: "❤️ Mobs & Social", desc: "Yellow honeycomb sparkles when waxing copper", type: "standard", baseSize: 0.2 },
  { id: "minecraft:wax_off", name: "Wax Off (Axe)", group: "❤️ Mobs & Social", desc: "White sparkles when scraping wax", type: "standard", baseSize: 0.2 },
  { id: "minecraft:scrape", name: "Scrape Oxidation", group: "❤️ Mobs & Social", desc: "Copper scraping particles", type: "standard", baseSize: 0.2 },
  { id: "minecraft:sweep_attack", name: "Sweep Attack", group: "❤️ Mobs & Social", desc: "Sweeping sword blade arc", type: "standard", baseSize: 0.45 },
  { id: "minecraft:egg_crack", name: "Egg Crack (1.20.5+)", group: "❤️ Mobs & Social", desc: "Sniffer / turtle egg cracking debris", type: "standard", baseSize: 0.16 },

  // --- LIQUIDS & DRIPPING ---
  { id: "minecraft:dripping_water", name: "Dripping Water", group: "💧 Liquids & Droplets", desc: "Water droplet hanging from block", type: "standard", baseSize: 0.16 },
  { id: "minecraft:falling_water", name: "Falling Water", group: "💧 Liquids & Droplets", desc: "Falling water droplet", type: "standard", baseSize: 0.16 },
  { id: "minecraft:splash", name: "Water Splash", group: "💧 Liquids & Droplets", desc: "Splash droplets from entering water", type: "standard", baseSize: 0.18 },
  { id: "minecraft:bubble", name: "Bubble", group: "💧 Liquids & Droplets", desc: "Underwater air bubble", type: "standard", baseSize: 0.16 },
  { id: "minecraft:bubble_pop", name: "Bubble Pop", group: "💧 Liquids & Droplets", desc: "Popping water bubble", type: "standard", baseSize: 0.16 },
  { id: "minecraft:bubble_column_up", name: "Bubble Column Up (Soul Sand)", group: "💧 Liquids & Droplets", desc: "Fast upward soul sand water bubbles", type: "standard", baseSize: 0.16 },
  { id: "minecraft:current_down", name: "Bubble Column Down (Magma)", group: "💧 Liquids & Droplets", desc: "Downward vortex whirlpool bubbles", type: "standard", baseSize: 0.16 },
  { id: "minecraft:underwater", name: "Underwater Ambient", group: "💧 Liquids & Droplets", desc: "Small floating aquatic specs", type: "standard", baseSize: 0.14 },
  { id: "minecraft:dripping_lava", name: "Dripping Lava", group: "💧 Liquids & Droplets", desc: "Lava droplet hanging from block", type: "standard", baseSize: 0.16 },
  { id: "minecraft:falling_lava", name: "Falling Lava", group: "💧 Liquids & Droplets", desc: "Falling lava droplet", type: "standard", baseSize: 0.16 },
  { id: "minecraft:landing_lava", name: "Landing Lava", group: "💧 Liquids & Droplets", desc: "Lava drop popping on floor", type: "standard", baseSize: 0.16 },
  { id: "minecraft:dripping_honey", name: "Dripping Honey", group: "💧 Liquids & Droplets", desc: "Sticky honey droplet hanging", type: "standard", baseSize: 0.16 },
  { id: "minecraft:falling_honey", name: "Falling Honey", group: "💧 Liquids & Droplets", desc: "Falling sticky honey droplet", type: "standard", baseSize: 0.16 },
  { id: "minecraft:landing_honey", name: "Landing Honey", group: "💧 Liquids & Droplets", desc: "Honey splash on ground", type: "standard", baseSize: 0.16 },
  { id: "minecraft:falling_nectar", name: "Falling Nectar", group: "💧 Liquids & Droplets", desc: "Yellow bee pollen nectar droplet", type: "standard", baseSize: 0.16 },
  { id: "minecraft:dripping_obsidian_tear", name: "Dripping Obsidian Tear", group: "💧 Liquids & Droplets", desc: "Purple crying obsidian droplet hanging", type: "standard", baseSize: 0.16 },
  { id: "minecraft:falling_obsidian_tear", name: "Falling Obsidian Tear", group: "💧 Liquids & Droplets", desc: "Falling purple crying obsidian droplet", type: "standard", baseSize: 0.16 },
  { id: "minecraft:landing_obsidian_tear", name: "Landing Obsidian Tear", group: "💧 Liquids & Droplets", desc: "Purple droplet landing pop", type: "standard", baseSize: 0.16 },
  { id: "minecraft:dripping_dripstone_water", name: "Dripping Dripstone Water", group: "💧 Liquids & Droplets", desc: "Water from pointed dripstone stalactite", type: "standard", baseSize: 0.16 },
  { id: "minecraft:falling_dripstone_water", name: "Falling Dripstone Water", group: "💧 Liquids & Droplets", desc: "Falling water from pointed dripstone", type: "standard", baseSize: 0.16 },
  { id: "minecraft:dripping_dripstone_lava", name: "Dripping Dripstone Lava", group: "💧 Liquids & Droplets", desc: "Lava from pointed dripstone stalactite", type: "standard", baseSize: 0.16 },
  { id: "minecraft:falling_dripstone_lava", name: "Falling Dripstone Lava", group: "💧 Liquids & Droplets", desc: "Falling lava from pointed dripstone", type: "standard", baseSize: 0.16 },

  // --- BLOCKS & ITEMS ---
  { id: "minecraft:block", name: "Block Break / Crack", group: "🧱 Blocks & Items", desc: "Particles from breaking a specific block ID", type: "block", baseSize: 0.16 },
  { id: "minecraft:block_marker", name: "Block Marker", group: "🧱 Blocks & Items", desc: "Floating block texture marker", type: "block", baseSize: 0.25 },
  { id: "minecraft:falling_dust", name: "Falling Block Dust", group: "🧱 Blocks & Items", desc: "Falling sand / gravel / concrete dust", type: "block", baseSize: 0.16 },
  { id: "minecraft:item", name: "Item Break / Crack", group: "🧱 Blocks & Items", desc: "Particles from breaking an item stack", type: "item", baseSize: 0.16 },
  { id: "minecraft:item_slime", name: "Slimeball Splat", group: "🧱 Blocks & Items", desc: "Green slime bounce / splat particle", type: "standard", baseSize: 0.18 },
  { id: "minecraft:item_snowball", name: "Snowball Splat", group: "🧱 Blocks & Items", desc: "White snowball impact puff", type: "standard", baseSize: 0.18 },
  { id: "minecraft:item_cobweb", name: "Item Cobweb (1.20.5+)", group: "🧱 Blocks & Items", desc: "Cobweb breaking particle", type: "standard", baseSize: 0.18 }
];

// ==========================================
// 3. IMAGE TEXTURE ASSET LOADER & CACHE
// ==========================================
const IMAGE_CACHE = {};
const TINTED_CANVAS_CACHE = {};

function getTextureImage(filename) {
  if (IMAGE_CACHE[filename]) return IMAGE_CACHE[filename];

  const img = new Image();
  img.src = `../images/particles/${filename}`;
  IMAGE_CACHE[filename] = img;
  return img;
}

function getTintedTexture(img, hexColor) {
  if (!img || !img.complete || img.naturalWidth === 0) return img;

  const key = `${img.src}_${hexColor}`;
  if (TINTED_CANVAS_CACHE[key]) return TINTED_CANVAS_CACHE[key];

  const c = document.createElement('canvas');
  c.width = img.naturalWidth;
  c.height = img.naturalHeight;
  const ctx = c.getContext('2d');

  ctx.drawImage(img, 0, 0);

  // Apply color tint multiply
  ctx.globalCompositeOperation = 'source-in';
  ctx.fillStyle = hexColor;
  ctx.fillRect(0, 0, c.width, c.height);

  TINTED_CANVAS_CACHE[key] = c;
  return c;
}

// Preload common vanilla particle textures
function preloadVanillaTextures() {
  Object.values(VANILLA_TEXTURE_MAP).forEach(fileList => {
    fileList.forEach(file => getTextureImage(file));
  });
}

// ==========================================
// 4. STATE OBJECT
// ==========================================
let currentParticleConfig = {
  particleId: "minecraft:flame",
  pos: "~ ~1 ~",
  dx: "0.2",
  dy: "0.2",
  dz: "0.2",
  speed: "0.05",
  count: "10",
  mode: "normal",
  viewers: "@a",

  // Particle Specific Options
  dustColor: "#ff0000",
  dustScale: "1.0",
  dustFromColor: "#ff0000",
  dustToColor: "#00ffff",
  blockId: "minecraft:stone",
  itemId: "minecraft:diamond",
  sculkRoll: "0.0",
  shriekDelay: "0"
};

// Simulation settings (Calibrated 20 TPS Engine at 1.35x)
let simSettings = {
  isPlaying: true,
  continuous: true,
  spawnInterval: 90,  // 90ms continuous streaming flow
  timeScale: 1.35,    // Calibrated speed (slightly softer than 1.5x)
  showGrid: true,
  showPlayer: true,
  showGizmo: true,
  lastSpawnTime: 0
};

// ==========================================
// 5. 3D CAMERA & PERSPECTIVE ENGINE
// ==========================================
let camYaw = 0.785;   // ~45 deg
let camPitch = 0.45;  // ~25 deg
let camDist = 5.5;    // blocks distance
let camTarget = { x: 0, y: 1.0, z: 0 };

let isDragging = false;
let isRightDrag = false;
let lastMouseX = 0;
let lastMouseY = 0;

function setupCameraControls(canvas) {
  canvas.addEventListener('mousedown', (e) => {
    isDragging = true;
    isRightDrag = (e.button === 2 || e.shiftKey);
    lastMouseX = e.clientX;
    lastMouseY = e.clientY;
    e.preventDefault();
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  canvas.addEventListener('contextmenu', (e) => e.preventDefault());

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const dx = e.clientX - lastMouseX;
    const dy = e.clientY - lastMouseY;
    lastMouseX = e.clientX;
    lastMouseY = e.clientY;

    if (isRightDrag) {
      const cosYaw = Math.cos(camYaw);
      const sinYaw = Math.sin(camYaw);
      const panSpeed = 0.005 * camDist;

      camTarget.x -= (dx * cosYaw) * panSpeed;
      camTarget.z += (dx * sinYaw) * panSpeed;
      camTarget.y += dy * panSpeed;
    } else {
      camYaw += dx * 0.008;
      camPitch += dy * 0.008;
      camPitch = Math.max(-1.45, Math.min(1.45, camPitch));
    }
  });

  canvas.addEventListener('wheel', (e) => {
    e.preventDefault();
    const zoomFactor = e.deltaY > 0 ? 1.1 : 0.9;
    camDist = Math.max(1.5, Math.min(25.0, camDist * zoomFactor));
  }, { passive: false });

  canvas.addEventListener('dblclick', () => {
    reset3DCamera();
  });
}

function reset3DCamera() {
  camYaw = 0.785;
  camPitch = 0.45;
  camDist = 5.5;
  camTarget = { x: 0, y: 1.0, z: 0 };
}

function project3D(x, y, z, width, height) {
  const cosYaw = Math.cos(camYaw);
  const sinYaw = Math.sin(camYaw);
  const cosPitch = Math.cos(camPitch);
  const sinPitch = Math.sin(camPitch);

  const dx = x - camTarget.x;
  const dy = y - camTarget.y;
  const dz = z - camTarget.z;

  const x1 = dx * cosYaw - dz * sinYaw;
  const z1 = dx * sinYaw + dz * cosYaw;

  const y2 = dy * cosPitch - z1 * sinPitch;
  const z2 = dy * sinPitch + z1 * cosPitch;

  const depth = z2 + camDist;
  if (depth <= 0.05) return null;

  const fov = Math.min(width, height) * 0.95;
  const screenX = width / 2 + (x1 / depth) * fov;
  const screenY = height / 2 - (y2 / depth) * fov;

  return { x: screenX, y: screenY, depth: depth, scale: fov / depth };
}

// ==========================================
// 6. SIMULATED PARTICLE (20 TICKS/SEC MINECRAFT ENGINE)
// ==========================================
class SimulatedParticle {
  constructor(x, y, z, vx, vy, vz, config) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.vx = vx;
    this.vy = vy;
    this.vz = vz;

    this.id = config.particleId;
    this.age = 0;
    // Lifetime in exact Minecraft ticks (20 ticks = 1 second)
    this.maxAge = 14 + Math.floor(Math.random() * 8); // ~0.7 to 1.1 seconds lifetime
    this.alpha = 1.0;
    this.rotation = (Math.random() - 0.5) * 0.4;
    this.rotSpeed = (Math.random() - 0.5) * 0.03;

    const def = MINECRAFT_PARTICLES.find(p => p.id === config.particleId);
    this.baseWorldSize = def ? (def.baseSize || 0.18) : 0.18;

    // Dust RGB (Capped strictly at max 4.0 in Minecraft)
    if (config.particleId === "minecraft:dust") {
      this.dustColor = config.dustColor || "#ff0000";
      const scale = Math.max(0.1, Math.min(4.0, parseFloat(config.dustScale || "1.0") || 1.0));
      this.baseWorldSize *= scale;
    } else if (config.particleId === "minecraft:dust_color_transition") {
      this.fromColor = hexToRgb(config.dustFromColor || "#ff0000");
      this.toColor = hexToRgb(config.dustToColor || "#00ffff");
      const scale = Math.max(0.1, Math.min(4.0, parseFloat(config.dustScale || "1.0") || 1.0));
      this.baseWorldSize *= scale;
    }
  }

  tick() {
    this.age++;
    const progress = this.age / this.maxAge;

    // Authentic Minecraft 20 TPS Air Drag (4% per tick)
    this.vx *= 0.96;
    this.vy *= 0.96;
    this.vz *= 0.96;

    if (this.id === "minecraft:flame" || this.id === "minecraft:soul_fire_flame" || this.id === "minecraft:small_flame") {
      this.vy += 0.0005; // Gentle natural flicker per tick
    } else if (this.id === "minecraft:crit" || this.id === "minecraft:enchanted_hit") {
      this.vy -= 0.004; // Gravity per tick
    } else if (this.id === "minecraft:lava" || this.id === "minecraft:landing_lava") {
      this.vy -= 0.008; // Heavy gravity per tick
    } else if (this.id === "minecraft:cherry_leaves") {
      this.vy = -0.01;
      this.vx += Math.sin(this.age * 0.15) * 0.005;
      this.vz += Math.cos(this.age * 0.15) * 0.005;
      this.rotation += this.rotSpeed;
    } else if (this.id === "minecraft:smoke" || this.id === "minecraft:campfire_cosy_smoke") {
      this.vy += 0.003;
      this.baseWorldSize += 0.002;
    } else if (this.id === "minecraft:totem_of_undying") {
      this.vy -= 0.002;
    } else if (this.id === "minecraft:sculk_soul") {
      this.vy += 0.005;
    }

    this.x += this.vx;
    this.y += this.vy;
    this.z += this.vz;

    this.alpha = Math.max(0, 1.0 - Math.pow(progress, 1.3));
  }

  isDead() {
    return this.age >= this.maxAge;
  }

  getTexture() {
    const fileList = VANILLA_TEXTURE_MAP[this.id] || ["flame.png"];
    const frameIndex = Math.min(fileList.length - 1, Math.floor((this.age / this.maxAge) * fileList.length));
    const filename = fileList[frameIndex] || fileList[0];
    const rawImg = getTextureImage(filename);

    if (this.id === "minecraft:dust") {
      return getTintedTexture(rawImg, this.dustColor || "#ff0000");
    } else if (this.id === "minecraft:dust_color_transition") {
      const p = this.age / this.maxAge;
      const r = Math.round(this.fromColor.r + (this.toColor.r - this.fromColor.r) * p);
      const g = Math.round(this.fromColor.g + (this.toColor.g - this.fromColor.g) * p);
      const b = Math.round(this.fromColor.b + (this.toColor.b - this.fromColor.b) * p);
      const hex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
      return getTintedTexture(rawImg, hex);
    }

    return rawImg;
  }
}

let activeParticles = [];

function parsePositionCoords(posStr) {
  const parts = posStr.trim().split(/\s+/);
  let x = 0, y = 1.0, z = 0;

  if (parts.length >= 3) {
    x = parseSingleCoord(parts[0], 0);
    y = parseSingleCoord(parts[1], 1.0);
    z = parseSingleCoord(parts[2], 0);
  }
  return { x, y, z };
}

function parseSingleCoord(str, defaultVal) {
  if (!str) return defaultVal;
  if (str.startsWith('~') || str.startsWith('^')) {
    const num = parseFloat(str.substring(1));
    return defaultVal + (isNaN(num) ? 0 : num);
  }
  const val = parseFloat(str);
  return isNaN(val) ? defaultVal : val;
}

function spawnParticleBatch() {
  const origin = parsePositionCoords(currentParticleConfig.pos);
  const dx = Math.abs(parseFloat(currentParticleConfig.dx) || 0);
  const dy = Math.abs(parseFloat(currentParticleConfig.dy) || 0);
  const dz = Math.abs(parseFloat(currentParticleConfig.dz) || 0);
  const speed = parseFloat(currentParticleConfig.speed) || 0;
  const count = parseInt(currentParticleConfig.count, 10);

  if (isNaN(count) || count < 0) return;

  if (count === 0) {
    const rawDx = parseFloat(currentParticleConfig.dx) || 0;
    const rawDy = parseFloat(currentParticleConfig.dy) || 0;
    const rawDz = parseFloat(currentParticleConfig.dz) || 0;
    const vx = rawDx * speed;
    const vy = rawDy * speed;
    const vz = rawDz * speed;

    activeParticles.push(new SimulatedParticle(origin.x, origin.y, origin.z, vx, vy, vz, currentParticleConfig));
  } else {
    for (let i = 0; i < count; i++) {
      const rx = origin.x + (Math.random() * 2 - 1) * dx;
      const ry = origin.y + (Math.random() * 2 - 1) * dy;
      const rz = origin.z + (Math.random() * 2 - 1) * dz;

      let vx = (Math.random() * 2 - 1) * speed;
      let vy = (Math.random() * 2 - 1) * speed;
      let vz = (Math.random() * 2 - 1) * speed;

      if (currentParticleConfig.particleId.includes("portal")) {
        vx = (origin.x - rx) * 0.05;
        vy = (origin.y - ry) * 0.05;
        vz = (origin.z - rz) * 0.05;
      }

      activeParticles.push(new SimulatedParticle(rx, ry, rz, vx, vy, vz, currentParticleConfig));
    }
  }

  if (activeParticles.length > 2000) {
    activeParticles.splice(0, activeParticles.length - 2000);
  }
}

// ==========================================
// 7. 3D RENDER LOOP WITH FIXED 20 TPS PHYSICS
// ==========================================
let lastFrameTime = performance.now();
let tickAccumulator = 0;
const TICK_DURATION = 50; // 50ms = 20 Ticks Per Second

function render3DView() {
  const canvas = document.getElementById('particle3DCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;

  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
  }

  // Clear background
  ctx.fillStyle = "#080808";
  ctx.fillRect(0, 0, width, height);

  const now = performance.now();
  let dt = now - lastFrameTime;
  if (dt > 250) dt = 250; // Clamp against frame hitching
  lastFrameTime = now;

  if (simSettings.isPlaying) {
    tickAccumulator += dt * (simSettings.timeScale || 1.0);

    // Fixed 20 TPS physics ticks with speed multiplier
    while (tickAccumulator >= TICK_DURATION) {
      tickAccumulator -= TICK_DURATION;

      // Update particle physics per tick
      for (let i = activeParticles.length - 1; i >= 0; i--) {
        activeParticles[i].tick();
        if (activeParticles[i].isDead()) {
          activeParticles.splice(i, 1);
        }
      }
    }

    // Continuous spawn cycle scaled by timeScale
    if (simSettings.continuous) {
      const interval = simSettings.spawnInterval / (simSettings.timeScale || 1.0);
      if (now - simSettings.lastSpawnTime >= interval) {
        spawnParticleBatch();
        simSettings.lastSpawnTime = now;
      }
    }
  }

  const drawList = [];

  // 1. Ground Grid
  if (simSettings.showGrid) {
    drawList.push({
      depth: 9999,
      draw: () => drawGroundGrid(ctx, width, height)
    });
  }

  // 2. Steve Player Reference Dummy (Minecraft 1.8m scale)
  if (simSettings.showPlayer) {
    drawList.push({
      depth: getDepthOfPoint(0, 0.9, 0),
      draw: () => drawStevePlayerDummy(ctx, width, height)
    });
  }

  // 3. Spawn Origin & Bounding Box / Direction Vector
  if (simSettings.showGizmo) {
    const origin = parsePositionCoords(currentParticleConfig.pos);
    drawList.push({
      depth: getDepthOfPoint(origin.x, origin.y, origin.z),
      draw: () => drawSpawnGizmos(ctx, width, height, origin)
    });
  }

  // 4. Real Minecraft Texture Particles
  activeParticles.forEach(p => {
    const proj = project3D(p.x, p.y, p.z, width, height);
    if (proj) {
      drawList.push({
        depth: proj.depth,
        draw: () => drawRealParticleTexture(ctx, p, proj)
      });
    }
  });

  // Sort from back to front
  drawList.sort((a, b) => b.depth - a.depth);

  // Execute draws
  drawList.forEach(item => item.draw());

  // Update counter HUD
  const countBadge = document.getElementById('vpParticleCount');
  if (countBadge) {
    countBadge.textContent = `${activeParticles.length} Attive`;
  }

  requestAnimationFrame(render3DView);
}

function getDepthOfPoint(x, y, z) {
  const cosYaw = Math.cos(camYaw);
  const sinYaw = Math.sin(camYaw);
  const sinPitch = Math.cos(camPitch);
  const cosPitch = Math.sin(camPitch);

  const dx = x - camTarget.x;
  const dy = y - camTarget.y;
  const dz = z - camTarget.z;

  const z1 = dx * sinYaw + dz * cosYaw;
  return dy * sinPitch + z1 * cosPitch + camDist;
}

// ==========================================
// 8. REAL TEXTURE BILLBOARD DRAWING
// ==========================================
function drawRealParticleTexture(ctx, p, proj) {
  const texture = p.getTexture();
  if (!texture) return;

  // Real world size projection (e.g. 0.18 blocks in Minecraft world coordinates)
  const pixelSize = Math.max(3, p.baseWorldSize * proj.scale);

  ctx.save();
  ctx.globalAlpha = p.alpha;
  ctx.imageSmoothingEnabled = false; // Authentic Nearest-Neighbor Pixel Crispness!

  ctx.translate(proj.x, proj.y);
  if (p.rotation) {
    ctx.rotate(p.rotation);
  }

  if (texture.complete && texture.naturalWidth > 0) {
    ctx.drawImage(texture, -pixelSize / 2, -pixelSize / 2, pixelSize, pixelSize);
  } else if (texture.getContext) {
    // Canvas tinted texture
    ctx.drawImage(texture, -pixelSize / 2, -pixelSize / 2, pixelSize, pixelSize);
  }

  ctx.restore();
}

function drawGroundGrid(ctx, width, height) {
  const size = 5;
  ctx.lineWidth = 1;

  for (let i = -size; i <= size; i++) {
    const p1 = project3D(-size, 0, i, width, height);
    const p2 = project3D(size, 0, i, width, height);

    if (p1 && p2) {
      ctx.strokeStyle = (i === 0) ? "rgba(255, 68, 68, 0.6)" : "rgba(50, 50, 50, 0.4)";
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.stroke();
    }

    const p3 = project3D(i, 0, -size, width, height);
    const p4 = project3D(i, 0, size, width, height);

    if (p3 && p4) {
      ctx.strokeStyle = (i === 0) ? "rgba(68, 136, 255, 0.6)" : "rgba(50, 50, 50, 0.4)";
      ctx.beginPath();
      ctx.moveTo(p3.x, p3.y);
      ctx.lineTo(p4.x, p4.y);
      ctx.stroke();
    }
  }

  const y0 = project3D(0, 0, 0, width, height);
  const y1 = project3D(0, 2.5, 0, width, height);
  if (y0 && y1) {
    ctx.strokeStyle = "rgba(68, 255, 68, 0.5)";
    ctx.beginPath();
    ctx.moveTo(y0.x, y0.y);
    ctx.lineTo(y1.x, y1.y);
    ctx.stroke();
  }
}

function drawStevePlayerDummy(ctx, width, height) {
  // Real Minecraft 1.8 blocks high proportions:
  // Legs: 0.6 blocks high, 0.4x0.2
  // Body: 0.6 blocks high (0.6..1.2), 0.4x0.2
  // Head: 0.5 blocks high (1.2..1.7), 0.4x0.4
  draw3DBox(ctx, width, height, 0, 0.3, 0, 0.4, 0.6, 0.2, "rgba(40, 90, 180, 0.8)", "rgba(20, 50, 120, 0.35)");
  draw3DBox(ctx, width, height, 0, 0.9, 0, 0.4, 0.6, 0.2, "rgba(0, 190, 190, 0.8)", "rgba(0, 110, 110, 0.35)");
  draw3DBox(ctx, width, height, 0, 1.45, 0, 0.4, 0.5, 0.4, "rgba(230, 180, 130, 0.85)", "rgba(160, 110, 70, 0.35)");

  // Eyes at ~1.5m
  const eyeL = project3D(-0.08, 1.5, 0.201, width, height);
  const eyeR = project3D(0.08, 1.5, 0.201, width, height);
  if (eyeL && eyeR) {
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(eyeL.x, eyeL.y, Math.max(1.5, eyeL.scale * 0.025), 0, Math.PI * 2);
    ctx.arc(eyeR.x, eyeR.y, Math.max(1.5, eyeR.scale * 0.025), 0, Math.PI * 2);
    ctx.fill();
  }
}

function draw3DBox(ctx, width, height, cx, cy, cz, sx, sy, sz, strokeColor, fillColor) {
  const hx = sx / 2, hy = sy / 2, hz = sz / 2;
  const corners = [
    { x: cx - hx, y: cy - hy, z: cz - hz },
    { x: cx + hx, y: cy - hy, z: cz - hz },
    { x: cx + hx, y: cy - hy, z: cz + hz },
    { x: cx - hx, y: cy - hy, z: cz + hz },
    { x: cx - hx, y: cy + hy, z: cz - hz },
    { x: cx + hx, y: cy + hy, z: cz - hz },
    { x: cx + hx, y: cy + hy, z: cz + hz },
    { x: cx - hx, y: cy + hy, z: cz + hz }
  ].map(c => project3D(c.x, c.y, c.z, width, height));

  if (corners.some(c => c === null)) return;

  const edges = [
    [0,1],[1,2],[2,3],[3,0],
    [4,5],[5,6],[6,7],[7,4],
    [0,4],[1,5],[2,6],[3,7]
  ];

  ctx.strokeStyle = strokeColor;
  ctx.lineWidth = 1.2;
  ctx.beginPath();
  edges.forEach(([i, j]) => {
    ctx.moveTo(corners[i].x, corners[i].y);
    ctx.lineTo(corners[j].x, corners[j].y);
  });
  ctx.stroke();
}

function drawSpawnGizmos(ctx, width, height, origin) {
  const count = parseInt(currentParticleConfig.count, 10);
  const dx = parseFloat(currentParticleConfig.dx) || 0;
  const dy = parseFloat(currentParticleConfig.dy) || 0;
  const dz = parseFloat(currentParticleConfig.dz) || 0;
  const speed = parseFloat(currentParticleConfig.speed) || 0;

  const pOrigin = project3D(origin.x, origin.y, origin.z, width, height);
  if (pOrigin) {
    ctx.strokeStyle = "#ffd900";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(pOrigin.x, pOrigin.y, Math.max(3, pOrigin.scale * 0.08), 0, Math.PI * 2);
    ctx.stroke();
  }

  if (count === 0) {
    const targetX = origin.x + dx * Math.max(speed, 0.5);
    const targetY = origin.y + dy * Math.max(speed, 0.5);
    const targetZ = origin.z + dz * Math.max(speed, 0.5);

    const pTarget = project3D(targetX, targetY, targetZ, width, height);
    if (pOrigin && pTarget) {
      ctx.strokeStyle = "#55ff55";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(pOrigin.x, pOrigin.y);
      ctx.lineTo(pTarget.x, pTarget.y);
      ctx.stroke();

      ctx.fillStyle = "#55ff55";
      ctx.beginPath();
      ctx.arc(pTarget.x, pTarget.y, 4, 0, Math.PI * 2);
      ctx.fill();
    }
  } else if (dx > 0 || dy > 0 || dz > 0) {
    draw3DBox(ctx, width, height, origin.x, origin.y, origin.z, dx * 2, dy * 2, dz * 2, "rgba(255, 166, 0, 0.4)", "rgba(255, 166, 0, 0.05)");
  }
}

// ==========================================
// 9. COMBOBOX & COMMAND BUILDER
// ==========================================
function hexToRgb(hex) {
  hex = hex.replace('#', '');
  if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
  const num = parseInt(hex, 16);
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255
  };
}

function hexToRgb01(hex) {
  const rgb = hexToRgb(hex);
  return [Number((rgb.r / 255).toFixed(2)), Number((rgb.g / 255).toFixed(2)), Number((rgb.b / 255).toFixed(2))];
}

function buildParticleIdString() {
  const def = MINECRAFT_PARTICLES.find(p => p.id === currentParticleConfig.particleId);
  const baseId = currentParticleConfig.particleId || "minecraft:flame";

  if (def && def.type === "dust") {
    const rgb = hexToRgb01(currentParticleConfig.dustColor || "#ff0000");
    const rawScale = parseFloat(currentParticleConfig.dustScale || "1.0") || 1.0;
    const scale = Math.min(4.0, Math.max(0.01, rawScale));
    return `minecraft:dust{color:[${rgb[0]}f,${rgb[1]}f,${rgb[2]}f],scale:${scale}f}`;
  } else if (def && def.type === "dust_transition") {
    const fromRgb = hexToRgb01(currentParticleConfig.dustFromColor || "#ff0000");
    const toRgb = hexToRgb01(currentParticleConfig.dustToColor || "#00ffff");
    const rawScale = parseFloat(currentParticleConfig.dustScale || "1.0") || 1.0;
    const scale = Math.min(4.0, Math.max(0.01, rawScale));
    return `minecraft:dust_color_transition{from_color:[${fromRgb[0]}f,${fromRgb[1]}f,${fromRgb[2]}f],to_color:[${toRgb[0]}f,${toRgb[1]}f,${toRgb[2]}f],scale:${scale}f}`;
  } else if (def && def.type === "block") {
    const block = currentParticleConfig.blockId || "minecraft:stone";
    return `minecraft:block{block_state:"${block}"}`;
  } else if (def && def.type === "item") {
    const item = currentParticleConfig.itemId || "minecraft:diamond";
    return `minecraft:item{item:"${item}"}`;
  } else if (def && def.type === "sculk_charge") {
    const roll = parseFloat(currentParticleConfig.sculkRoll || "0.0") || 0.0;
    return `minecraft:sculk_charge{roll:${roll}f}`;
  } else if (def && def.type === "shriek") {
    const delay = parseInt(currentParticleConfig.shriekDelay || "0", 10) || 0;
    return `minecraft:shriek{delay:${delay}}`;
  }

  return baseId;
}

function compileParticleCommand() {
  const part = buildParticleIdString();
  const pos = currentParticleConfig.pos.trim() || "~ ~ ~";
  const dx = currentParticleConfig.dx.trim() || "0";
  const dy = currentParticleConfig.dy.trim() || "0";
  const dz = currentParticleConfig.dz.trim() || "0";
  const speed = currentParticleConfig.speed.trim() || "0";
  const count = currentParticleConfig.count.trim() || "1";
  const mode = currentParticleConfig.mode || "normal";
  const viewers = currentParticleConfig.viewers.trim() || "@a";

  return `/particle ${part} ${pos} ${dx} ${dy} ${dz} ${speed} ${count} ${mode} ${viewers}`;
}

function updateParticlePreview() {
  const codeEl = document.getElementById('commandCodeText');
  const fullCmd = compileParticleCommand();

  if (codeEl) {
    codeEl.innerHTML = highlightParticleCommand(fullCmd);
  }

  const mechanicsText = document.getElementById('mechanicsExplanation');
  const count = parseInt(currentParticleConfig.count, 10);

  if (mechanicsText) {
    if (count === 0) {
      mechanicsText.innerHTML = `
        <strong>🚀 Modalità Vettore Direzionale (Count = 0):</strong>
        Particella in <code>${escapeHtml(currentParticleConfig.pos)}</code> con Motion Vector <code>(${currentParticleConfig.dx}, ${currentParticleConfig.dy}, ${currentParticleConfig.dz}) &times; ${currentParticleConfig.speed}</code>!
      `;
    } else {
      mechanicsText.innerHTML = `
        <strong>📦 Modalità Diffusione Volume (Count = ${count}):</strong>
        Genera <code>${count}</code> particelle nel volume <code>&plusmn;${currentParticleConfig.dx}X &plusmn;${currentParticleConfig.dy}Y &plusmn;${currentParticleConfig.dz}Z</code> con velocità <code>${currentParticleConfig.speed}</code>.
      `;
    }
  }
}

function highlightParticleCommand(cmd) {
  return cmd
    .replace(/(\/particle)/g, '<span class="hl-kw">$1</span>')
    .replace(/(minecraft:[a-z0-9_{}:,\.\[\]"'-]+)/g, '<span class="hl-part">$1</span>')
    .replace(/(~[0-9.-]*|\^[0-9.-]*)/g, '<span class="hl-pos">$1</span>')
    .replace(/\b(force|normal)\b/g, '<span class="hl-mode">$1</span>')
    .replace(/(@[parse]\[.*?\]|@[parse])/g, '<span class="hl-sel">$1</span>')
    .replace(/(?<![~^])\b([0-9]+(?:\.[0-9]+)?)\b/g, '<span class="hl-num">$1</span>');
}

// ==========================================
// 10. COMBOBOX AUTOCOMPLETE HANDLERS
// ==========================================
function openParticleCombobox(inputEl) {
  closeAllParticleComboboxes();
  const popup = document.getElementById('particleComboboxPopup');
  if (!popup) return;
  filterParticleCombobox(inputEl.value.trim(), popup);
  popup.style.display = 'flex';
}

function toggleParticleCombobox(inputEl) {
  const popup = document.getElementById('particleComboboxPopup');
  if (!popup) return;

  if (popup.style.display === 'flex') {
    popup.style.display = 'none';
  } else {
    inputEl.focus();
    openParticleCombobox(inputEl);
  }
}

function onParticleComboboxInput(inputEl) {
  const popup = document.getElementById('particleComboboxPopup');
  if (popup) {
    filterParticleCombobox(inputEl.value.trim(), popup);
    popup.style.display = 'flex';
  }
  setParticle(inputEl.value.trim());
}

function filterParticleCombobox(query, popupEl) {
  const q = query.toLowerCase();
  let filtered = MINECRAFT_PARTICLES;

  if (q.length > 0) {
    filtered = MINECRAFT_PARTICLES.filter(p =>
      p.id.toLowerCase().includes(q) ||
      p.name.toLowerCase().includes(q) ||
      p.group.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q)
    );
  }

  if (filtered.length === 0) {
    popupEl.innerHTML = `<div class="searchable-item-empty">Nessuna particella trovata per "<strong>${escapeHtml(query)}</strong>"</div>`;
    return;
  }

  const grouped = {};
  filtered.forEach(p => {
    if (!grouped[p.group]) grouped[p.group] = [];
    grouped[p.group].push(p);
  });

  let html = '';
  Object.keys(grouped).forEach(groupName => {
    html += `<div class="searchable-item-group-title">${groupName}</div>`;
    grouped[groupName].forEach(p => {
      let labelHtml = escapeHtml(p.id);
      if (q.length > 0) {
        const regex = new RegExp(`(${q.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')})`, 'gi');
        labelHtml = labelHtml.replace(regex, '<strong style="color: #ffd900; text-decoration: underline;">$1</strong>');
      }

      const fileList = VANILLA_TEXTURE_MAP[p.id] || ["flame.png"];
      const iconSrc = `../images/particles/${fileList[0]}`;

      html += `
        <div class="searchable-item-option"
             data-val="${escapeHtml(p.id)}"
             onmousedown="selectParticleOption('${escapeHtml(p.id)}')">
          <div style="display: flex; align-items: center; gap: 8px;">
            <img src="${iconSrc}" style="width: 16px; height: 16px; image-rendering: pixelated;" onerror="this.style.display='none'">
            <div>
              <div style="font-weight: bold; color: #fff; font-size: 11px;">${escapeHtml(p.name)}</div>
              <div style="font-size: 10px; color: var(--color-orange);">${labelHtml}</div>
            </div>
          </div>
          <span class="searchable-item-badge">${escapeHtml(p.type)}</span>
        </div>
      `;
    });
  });

  popupEl.innerHTML = html;
}

function selectParticleOption(particleId) {
  const input = document.getElementById('particleSearchInput');
  if (input) input.value = particleId;
  closeAllParticleComboboxes();
  setParticle(particleId);
}

function onParticleComboboxKeydown(event, inputEl) {
  const popup = document.getElementById('particleComboboxPopup');
  if (!popup || popup.style.display !== 'flex') {
    if (event.key === 'ArrowDown' || event.key === 'Enter') {
      openParticleCombobox(inputEl);
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
      selectParticleOption(val);
    } else if (options.length > 0) {
      const val = options[0].getAttribute('data-val');
      selectParticleOption(val);
    }
  } else if (event.key === 'Escape') {
    popup.style.display = 'none';
  }
}

function closeAllParticleComboboxes() {
  const popup = document.getElementById('particleComboboxPopup');
  if (popup) popup.style.display = 'none';
}

if (typeof document !== 'undefined') {
  document.addEventListener('click', (e) => {
    if (!e.target.closest('#particleComboWrapper')) {
      closeAllParticleComboboxes();
    }
  });
}

// ==========================================
// 11. UI INTERACTIONS & SIDEBAR
// ==========================================
function setParticle(particleId) {
  currentParticleConfig.particleId = particleId;
  const input = document.getElementById('particleSearchInput');
  if (input && input.value !== particleId) input.value = particleId;

  activeParticles = [];
  renderExtraOptions();
  updateSidebarActiveItem();
  updateParticlePreview();
}

function updateParam(field, val) {
  currentParticleConfig[field] = val;
  updateParticlePreview();
}

function setQuickPreset(type, val) {
  if (type === 'pos') {
    document.getElementById('input_pos').value = val;
    currentParticleConfig.pos = val;
  } else if (type === 'delta') {
    const parts = val.split(' ');
    document.getElementById('input_dx').value = parts[0] || '0';
    document.getElementById('input_dy').value = parts[1] || '0';
    document.getElementById('input_dz').value = parts[2] || '0';
    currentParticleConfig.dx = parts[0] || '0';
    currentParticleConfig.dy = parts[1] || '0';
    currentParticleConfig.dz = parts[2] || '0';
  } else if (type === 'count') {
    document.getElementById('input_count').value = val;
    currentParticleConfig.count = val;
  } else if (type === 'speed') {
    document.getElementById('input_speed').value = val;
    currentParticleConfig.speed = val;
  }
  updateParticlePreview();
}

function triggerBurst() {
  spawnParticleBatch();
}

function togglePlayPause() {
  simSettings.isPlaying = !simSettings.isPlaying;
  const btn = document.getElementById('btnPlayPause');
  if (btn) {
    btn.innerHTML = simSettings.isPlaying ? '⏸️ Pausa' : '▶️ Avvia';
    btn.classList.toggle('active', simSettings.isPlaying);
  }
}

function toggleContinuous() {
  simSettings.continuous = !simSettings.continuous;
  const btn = document.getElementById('btnContinuous');
  if (btn) {
    btn.classList.toggle('active', simSettings.continuous);
  }
}

function toggleGrid() {
  simSettings.showGrid = !simSettings.showGrid;
  const btn = document.getElementById('btnToggleGrid');
  if (btn) btn.classList.toggle('active', simSettings.showGrid);
}

function togglePlayer() {
  simSettings.showPlayer = !simSettings.showPlayer;
  const btn = document.getElementById('btnTogglePlayer');
  if (btn) btn.classList.toggle('active', simSettings.showPlayer);
}

function renderExtraOptions() {
  const container = document.getElementById('specialOptionsContainer');
  if (!container) return;

  const def = MINECRAFT_PARTICLES.find(p => p.id === currentParticleConfig.particleId);
  if (!def || def.type === "standard") {
    container.style.display = "none";
    container.innerHTML = "";
    return;
  }

  container.style.display = "block";

  if (def.type === "dust") {
    container.innerHTML = `
      <div class="particle-card" style="border-color: #ffd900;">
        <div class="particle-card-header">
          <div class="particle-card-title">
            <span class="tag">🎨 1.20.5+ Dust Options</span>
            <span>Colore RGB e Dimensione</span>
          </div>
        </div>
        <div class="particle-form-grid">
          <div class="form-group">
            <label>Colore Polvere (RGB):</label>
            <div style="display: flex; gap: 6px; align-items: center;">
              <input type="color" style="width: 36px; height: 30px; background: transparent; border: 1px solid var(--border-medium); border-radius: 4px; cursor: pointer;"
                     value="${currentParticleConfig.dustColor}"
                     oninput="updateParam('dustColor', this.value); this.nextElementSibling.value = this.value;">
              <input type="text" class="cmd-input" style="flex: 1;"
                     value="${currentParticleConfig.dustColor}"
                     oninput="updateParam('dustColor', this.value); this.previousElementSibling.value = this.value;">
            </div>
          </div>
          <div class="form-group">
            <label>Scala / Dimensione (Max 4.0f):</label>
            <input type="number" step="0.1" min="0.1" max="4.0" class="cmd-input"
                   value="${currentParticleConfig.dustScale}"
                   oninput="updateParam('dustScale', Math.min(4.0, Math.max(0.1, parseFloat(this.value) || 1.0)))">
          </div>
        </div>
      </div>
    `;
  } else if (def.type === "dust_transition") {
    container.innerHTML = `
      <div class="particle-card" style="border-color: #ffd900;">
        <div class="particle-card-header">
          <div class="particle-card-title">
            <span class="tag">🌈 1.20.5+ Color Transition</span>
            <span>Da Colore Iniziale a Finale</span>
          </div>
        </div>
        <div class="particle-form-grid">
          <div class="form-group">
            <label>From Color (Iniziale):</label>
            <div style="display: flex; gap: 6px; align-items: center;">
              <input type="color" style="width: 36px; height: 30px; background: transparent; border: 1px solid var(--border-medium); border-radius: 4px; cursor: pointer;"
                     value="${currentParticleConfig.dustFromColor}"
                     oninput="updateParam('dustFromColor', this.value); this.nextElementSibling.value = this.value;">
              <input type="text" class="cmd-input" style="flex: 1;"
                     value="${currentParticleConfig.dustFromColor}"
                     oninput="updateParam('dustFromColor', this.value); this.previousElementSibling.value = this.value;">
            </div>
          </div>
          <div class="form-group">
            <label>To Color (Finale):</label>
            <div style="display: flex; gap: 6px; align-items: center;">
              <input type="color" style="width: 36px; height: 30px; background: transparent; border: 1px solid var(--border-medium); border-radius: 4px; cursor: pointer;"
                     value="${currentParticleConfig.dustToColor}"
                     oninput="updateParam('dustToColor', this.value); this.nextElementSibling.value = this.value;">
              <input type="text" class="cmd-input" style="flex: 1;"
                     value="${currentParticleConfig.dustToColor}"
                     oninput="updateParam('dustToColor', this.value); this.previousElementSibling.value = this.value;">
            </div>
          </div>
          <div class="form-group">
            <label>Scala (Max 4.0f):</label>
            <input type="number" step="0.1" min="0.1" max="4.0" class="cmd-input"
                   value="${currentParticleConfig.dustScale}"
                   oninput="updateParam('dustScale', Math.min(4.0, Math.max(0.1, parseFloat(this.value) || 1.0)))">
          </div>
        </div>
      </div>
    `;
  } else if (def.type === "block") {
    container.innerHTML = `
      <div class="particle-card" style="border-color: #ffd900;">
        <div class="particle-card-header">
          <div class="particle-card-title">
            <span class="tag">🧱 Block State Parameter</span>
            <span>Tipo di Blocco</span>
          </div>
        </div>
        <div class="particle-form-grid">
          <div class="form-group">
            <label>Block ID:</label>
            <input type="text" class="cmd-input"
                   value="${escapeHtml(currentParticleConfig.blockId)}"
                   placeholder="minecraft:stone, minecraft:obsidian"
                   oninput="updateParam('blockId', this.value)">
          </div>
        </div>
      </div>
    `;
  } else if (def.type === "item") {
    container.innerHTML = `
      <div class="particle-card" style="border-color: #ffd900;">
        <div class="particle-card-header">
          <div class="particle-card-title">
            <span class="tag">🗡️ Item Stack Parameter</span>
            <span>Tipo di Item</span>
          </div>
        </div>
        <div class="particle-form-grid">
          <div class="form-group">
            <label>Item ID:</label>
            <input type="text" class="cmd-input"
                   value="${escapeHtml(currentParticleConfig.itemId)}"
                   placeholder="minecraft:diamond, minecraft:golden_apple"
                   oninput="updateParam('itemId', this.value)">
          </div>
        </div>
      </div>
    `;
  } else if (def.type === "sculk_charge") {
    container.innerHTML = `
      <div class="particle-card" style="border-color: #ffd900;">
        <div class="particle-card-header">
          <div class="particle-card-title">
            <span class="tag">🌑 Sculk Charge Options</span>
            <span>Angolo di Rotazione (Roll)</span>
          </div>
        </div>
        <div class="particle-form-grid">
          <div class="form-group">
            <label>Roll Angle (Radianti):</label>
            <input type="number" step="0.1" class="cmd-input"
                   value="${currentParticleConfig.sculkRoll}"
                   oninput="updateParam('sculkRoll', this.value)">
          </div>
        </div>
      </div>
    `;
  } else if (def.type === "shriek") {
    container.innerHTML = `
      <div class="particle-card" style="border-color: #ffd900;">
        <div class="particle-card-header">
          <div class="particle-card-title">
            <span class="tag">📢 Sculk Shrieker Options</span>
            <span>Ritardo di attivazione (Delay Ticks)</span>
          </div>
        </div>
        <div class="particle-form-grid">
          <div class="form-group">
            <label>Delay in Ticks:</label>
            <input type="number" step="1" min="0" class="cmd-input"
                   value="${currentParticleConfig.shriekDelay}"
                   oninput="updateParam('shriekDelay', this.value)">
          </div>
        </div>
      </div>
    `;
  }
}

function renderSidebarList(filterText = '') {
  const container = document.getElementById('sidebarParticleList');
  if (!container) return;

  const q = filterText.toLowerCase().trim();
  let list = MINECRAFT_PARTICLES;

  if (q.length > 0) {
    list = MINECRAFT_PARTICLES.filter(p =>
      p.id.toLowerCase().includes(q) ||
      p.name.toLowerCase().includes(q) ||
      p.group.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q)
    );
  }

  container.innerHTML = '';
  list.forEach(p => {
    const card = document.createElement('div');
    card.className = `particle-item-card ${p.id === currentParticleConfig.particleId ? 'active' : ''}`;
    card.setAttribute('data-id', p.id);
    card.onclick = () => setParticle(p.id);

    const fileList = VANILLA_TEXTURE_MAP[p.id] || ["flame.png"];
    const iconSrc = `../images/particles/${fileList[0]}`;

    card.innerHTML = `
      <div style="display: flex; align-items: center; gap: 8px;">
        <img src="${iconSrc}" style="width: 18px; height: 18px; image-rendering: pixelated;" onerror="this.style.display='none'">
        <div class="particle-item-info">
          <span class="particle-item-name">${escapeHtml(p.name)}</span>
          <span class="particle-item-cat">${escapeHtml(p.id.replace('minecraft:', ''))} &bull; ${escapeHtml(p.desc)}</span>
        </div>
      </div>
      <span class="particle-badge">${escapeHtml(p.type)}</span>
    `;

    container.appendChild(card);
  });
}

function updateSidebarActiveItem() {
  const cards = document.querySelectorAll('.particle-item-card');
  cards.forEach(card => {
    if (card.getAttribute('data-id') === currentParticleConfig.particleId) {
      card.classList.add('active');
    } else {
      card.classList.remove('active');
    }
  });
}

// ==========================================
// 12. COPY & EXPORT
// ==========================================
function copyParticleCommand() {
  const cmd = compileParticleCommand();
  navigator.clipboard.writeText(cmd).then(() => {
    showToast("📋 Comando /particle copiato negli appunti!");
  }).catch(() => {
    showToast("⚠️ Errore durante la copia");
  });
}

function exportParticleFunction() {
  const cmd = compileParticleCommand();
  const blob = new Blob([`# Generated by BlockEngine Particle Builder\n${cmd}\n`], { type: 'text/plain;charset=utf-8' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'particle_fx.mcfunction';
  a.click();
  showToast("💾 Esportato 'particle_fx.mcfunction'!");
}

function showToast(message) {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>${escapeHtml(message)}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(20px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function escapeHtml(str) {
  if (typeof str !== 'string') return str;
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

// ==========================================
// 13. INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  preloadVanillaTextures();

  const canvas = document.getElementById('particle3DCanvas');
  if (canvas) {
    setupCameraControls(canvas);
  }

  renderSidebarList();
  renderExtraOptions();
  updateParticlePreview();
  render3DView();
});
