package com.ticktimescoreboard.util;

import com.ticktimescoreboard.TickTimeMod;
import net.minecraft.ChatFormatting;
import net.minecraft.network.chat.MutableComponent;
import net.minecraft.network.chat.Style;
import net.minecraft.network.chat.numbers.NumberFormat;
import net.minecraft.network.chat.numbers.NumberFormatType;
import net.minecraft.network.chat.numbers.StyledFormat;

public class TimeNumberFormat implements NumberFormat {
    private final Style style;

    public TimeNumberFormat(Style style) {
        this.style = style != null ? style : Style.EMPTY.withColor(ChatFormatting.RED);
    }

    public Style getStyle() {
        return this.style;
    }

    @Override
    public MutableComponent format(int value) {
        return TickTimeMod.formatTicksToComponent(value, this.style);
    }

    @Override
    public NumberFormatType<? extends NumberFormat> type() {
        return StyledFormat.TYPE;
    }
}
