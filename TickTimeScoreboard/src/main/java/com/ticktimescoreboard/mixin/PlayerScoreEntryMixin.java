package com.ticktimescoreboard.mixin;

import com.ticktimescoreboard.TickTimeMod;
import com.ticktimescoreboard.util.TimeNumberFormat;
import net.minecraft.ChatFormatting;
import net.minecraft.network.chat.MutableComponent;
import net.minecraft.network.chat.Style;
import net.minecraft.network.chat.numbers.NumberFormat;
import net.minecraft.network.chat.numbers.StyledFormat;
import net.minecraft.world.scores.Objective;
import net.minecraft.world.scores.PlayerScoreEntry;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable;

@Mixin(PlayerScoreEntry.class)
public class PlayerScoreEntryMixin {

    @Inject(method = "formatValue", at = @At("HEAD"), cancellable = true)
    private void onFormatValue(NumberFormat numberFormat, CallbackInfoReturnable<MutableComponent> cir) {
        PlayerScoreEntry entry = (PlayerScoreEntry) (Object) this;

        // 1. If numberFormat is already TimeNumberFormat (from ObjectiveMixin or previous conversion)
        if (numberFormat instanceof TimeNumberFormat timeFormat) {
            cir.setReturnValue(timeFormat.format(entry.value()));
            return;
        }

        // 2. If actively rendering in sidebar and the active objective matches
        Objective currentObjective = TickTimeMod.CURRENT_SIDEBAR_OBJECTIVE.get();
        if (currentObjective != null && TickTimeMod.shouldFormat(currentObjective)) {
            Style style = Style.EMPTY.withColor(ChatFormatting.RED);
            if (numberFormat instanceof StyledFormat styledFormat) {
                style = styledFormat.style();
            } else if (numberFormat instanceof TimeNumberFormat timeFormat) {
                style = timeFormat.getStyle();
            }
            cir.setReturnValue(TickTimeMod.formatTicksToComponent(entry.value(), style));
        }
    }
}
