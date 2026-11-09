package com.ticktimescoreboard.config;

import com.google.gson.annotations.SerializedName;

public class ModConfig {
    @SerializedName("target_scoreboard_name")
    public String targetScoreboardName = "Time Played, play_time, playtime";

    @SerializedName("time_format")
    public String timeFormat = "%dd %hh %mm %ss";

    @SerializedName("trim_leading_zeroes")
    public boolean trimLeadingZeroes = true;

    public ModConfig() {}

    public ModConfig(String targetScoreboardName, String timeFormat, boolean trimLeadingZeroes) {
        this.targetScoreboardName = targetScoreboardName;
        this.timeFormat = timeFormat;
        this.trimLeadingZeroes = trimLeadingZeroes;
    }
}
