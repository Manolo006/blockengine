package com.ticktimescoreboard.mixin;

import com.ticktimescoreboard.TickTimeMod;
import com.ticktimescoreboard.util.TimeNumberFormat;
import net.minecraft.ChatFormatting;
import net.minecraft.network.chat.Style;
import net.minecraft.network.chat.numbers.NumberFormat;
import net.minecraft.network.chat.numbers.StyledFormat;
import net.minecraft.world.scores.Objective;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable;

@Mixin(Objective.class)
public class ObjectiveMixin {

    @Inject(method = "numberFormatOrDefault", at = @At("HEAD"), cancellable = true)
    private void onNumberFormatOrDefault(NumberFormat defaultFormat, CallbackInfoReturnable<NumberFormat> cir) {
        Objective objective = (Objective) (Object) this;
        Objective currentSidebar = TickTimeMod.CURRENT_SIDEBAR_OBJECTIVE.get();

        if (currentSidebar == objective || defaultFormat == StyledFormat.SIDEBAR_DEFAULT || (currentSidebar != null && currentSidebar.equals(objective))) {
            if (TickTimeMod.shouldFormat(objective)) {
                Style style = Style.EMPTY.withColor(ChatFormatting.RED);
                if (defaultFormat instanceof StyledFormat styled) {
                    style = styled.style();
                } else if (objective.numberFormat() instanceof StyledFormat styledObj) {
                    style = styledObj.style();
                }
                cir.setReturnValue(new TimeNumberFormat(style));
            }
        }
    }
}
