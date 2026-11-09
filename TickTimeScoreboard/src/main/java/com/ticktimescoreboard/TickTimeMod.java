package com.ticktimescoreboard;

import com.ticktimescoreboard.config.ConfigManager;
import com.ticktimescoreboard.config.ModConfig;
import com.ticktimescoreboard.util.TimeFormatter;
import net.fabricmc.api.ClientModInitializer;
import net.minecraft.ChatFormatting;
import net.minecraft.network.chat.Component;
import net.minecraft.network.chat.MutableComponent;
import net.minecraft.network.chat.Style;
import net.minecraft.world.scores.Objective;

public class TickTimeMod implements ClientModInitializer {
    public static final String MOD_ID = "ticktimescoreboard";
    public static final ThreadLocal<Objective> CURRENT_SIDEBAR_OBJECTIVE = new ThreadLocal<>();

    @Override
    public void onInitializeClient() {
        ConfigManager.init();
        System.out.println("[TickTimeScoreboard] Initialized client mod. Targeting: " + ConfigManager.getConfig().targetScoreboardName);
    }

    public static boolean shouldFormat(Objective objective) {
        if (objective == null) return false;

        ModConfig config = ConfigManager.getConfig();
        String targetRaw = config.targetScoreboardName;
        if (targetRaw == null || targetRaw.isBlank()) return false;

        String internalName = cleanString(objective.getName());
        String displayName = objective.getDisplayName() != null ? objective.getDisplayName().getString() : "";
        String cleanDisplay = cleanString(ChatFormatting.stripFormatting(displayName));

        String[] targets = targetRaw.split(",");
        for (String target : targets) {
            String cleanTarget = cleanString(target);
            if (cleanTarget.isEmpty()) continue;

            // Direct equality check
            if (internalName.equals(cleanTarget) || cleanDisplay.equals(cleanTarget)) {
                return true;
            }

            // Substring containment check (e.g. "time played" matches "Time Played" or "Time")
            if (cleanDisplay.contains(cleanTarget) || cleanTarget.contains(cleanDisplay)) {
                return true;
            }
            if (!internalName.isEmpty() && (internalName.contains(cleanTarget) || cleanTarget.contains(internalName))) {
                return true;
            }
        }

        return false;
    }

    private static String cleanString(String s) {
        if (s == null) return "";
        return ChatFormatting.stripFormatting(s).trim().toLowerCase().replaceAll("\\s+", " ");
    }

    public static MutableComponent formatTicksToComponent(int ticks, Style style) {
        ModConfig config = ConfigManager.getConfig();
        String formatted = TimeFormatter.formatTicks(ticks, config.timeFormat, config.trimLeadingZeroes);
        return Component.literal(formatted).withStyle(style != null ? style : Style.EMPTY.withColor(ChatFormatting.RED));
    }
}
