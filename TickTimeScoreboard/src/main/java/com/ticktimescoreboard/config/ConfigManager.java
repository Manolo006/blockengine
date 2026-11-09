package com.ticktimescoreboard.config;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import net.fabricmc.loader.api.FabricLoader;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.attribute.FileTime;

public class ConfigManager {
    private static final Gson GSON = new GsonBuilder().setPrettyPrinting().create();
    private static final String FILE_NAME = "tick_time_scoreboard.json";

    private static Path configPath;
    private static ModConfig config = new ModConfig();
    private static FileTime lastModifiedTime = null;
    private static long lastCheckTimestamp = 0;

    public static void init() {
        Path configDir = FabricLoader.getInstance().getConfigDir();
        configPath = configDir.resolve(FILE_NAME);

        // Fallback check for config/tick_time_scoreboard/config.json if it exists
        Path subDirConfig = configDir.resolve("tick_time_scoreboard").resolve("config.json");
        if (!Files.exists(configPath) && Files.exists(subDirConfig)) {
            configPath = subDirConfig;
        }

        loadConfig();
    }

    public static ModConfig getConfig() {
        checkAutoReload();
        return config;
    }

    private static void checkAutoReload() {
        long now = System.currentTimeMillis();
        // Check at most every 2 seconds to avoid excessive disk I/O
        if (now - lastCheckTimestamp > 2000) {
            lastCheckTimestamp = now;
            if (configPath != null && Files.exists(configPath)) {
                try {
                    FileTime currentModified = Files.getLastModifiedTime(configPath);
                    if (lastModifiedTime != null && !currentModified.equals(lastModifiedTime)) {
                        loadConfig();
                    }
                } catch (Exception ignored) {
                }
            }
        }
    }

    public static void loadConfig() {
        if (configPath == null) return;

        if (Files.exists(configPath)) {
            try (BufferedReader reader = Files.newBufferedReader(configPath)) {
                ModConfig loaded = GSON.fromJson(reader, ModConfig.class);
                if (loaded != null) {
                    config = loaded;
                    lastModifiedTime = Files.getLastModifiedTime(configPath);
                    return;
                }
            } catch (Exception e) {
                System.err.println("[TickTimeScoreboard] Failed to parse config, using defaults: " + e.getMessage());
            }
        }

        // Create default config file if it does not exist
        saveDefaultConfig();
    }

    public static void saveDefaultConfig() {
        if (configPath == null) return;
        try {
            if (configPath.getParent() != null && !Files.exists(configPath.getParent())) {
                Files.createDirectories(configPath.getParent());
            }
            try (BufferedWriter writer = Files.newBufferedWriter(configPath)) {
                GSON.toJson(config, writer);
            }
            lastModifiedTime = Files.getLastModifiedTime(configPath);
        } catch (Exception e) {
            System.err.println("[TickTimeScoreboard] Failed to save default config: " + e.getMessage());
        }
    }
}
