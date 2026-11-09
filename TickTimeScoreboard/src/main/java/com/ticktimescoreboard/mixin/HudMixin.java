package com.ticktimescoreboard.mixin;

import com.ticktimescoreboard.TickTimeMod;
import net.minecraft.client.gui.GuiGraphicsExtractor;
import net.minecraft.client.gui.Hud;
import net.minecraft.world.scores.Objective;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.Unique;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfo;

@Mixin(Hud.class)
public class HudMixin {

    @Unique
    private static String lastLoggedObjective = "";

    @Inject(method = "displayScoreboardSidebar", at = @At("HEAD"))
    private void onSidebarHead(GuiGraphicsExtractor extractor, Objective objective, CallbackInfo ci) {
        TickTimeMod.CURRENT_SIDEBAR_OBJECTIVE.set(objective);

        if (objective != null) {
            String id = objective.getName();
            String display = objective.getDisplayName() != null ? objective.getDisplayName().getString() : "";
            String key = id + "::" + display;
            if (!key.equals(lastLoggedObjective)) {
                lastLoggedObjective = key;
                boolean match = TickTimeMod.shouldFormat(objective);
                System.out.println("[TickTimeScoreboard] Sidebar active: id='" + id + "', display='" + display + "' -> shouldFormat=" + match);
            }
        }
    }

    @Inject(method = "displayScoreboardSidebar", at = @At("RETURN"))
    private void onSidebarReturn(GuiGraphicsExtractor extractor, Objective objective, CallbackInfo ci) {
        TickTimeMod.CURRENT_SIDEBAR_OBJECTIVE.set(null);
    }
}
