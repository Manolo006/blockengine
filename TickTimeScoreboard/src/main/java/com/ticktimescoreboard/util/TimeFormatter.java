package com.ticktimescoreboard.util;

public class TimeFormatter {

    /**
     * Converts a raw tick count (20 ticks = 1 second) into a human-readable time format.
     * Supported units:
     * - Weeks (%w, %02w)
     * - Days (%d, %02d)
     * - Hours (%h, %02h)
     * - Minutes (%m, %02m)
     * - Seconds (%s, %02s)
     *
     * Example: 12000020 ticks -> "6d 22h 40m 1s"
     */
    public static String formatTicks(long ticks, String pattern, boolean trimLeadingZeroes) {
        if (ticks < 0) {
            ticks = 0;
        }

        long totalSeconds = ticks / 20;
        boolean hasWeeks = pattern != null && pattern.toLowerCase().contains("%w");

        long weeks = 0;
        long days;
        if (hasWeeks) {
            weeks = totalSeconds / 604800L;
            long remAfterWeeks = totalSeconds % 604800L;
            days = remAfterWeeks / 86400L;
        } else {
            days = totalSeconds / 86400L;
        }

        long remAfterDays = totalSeconds % 86400L;
        long hours = remAfterDays / 3600L;
        long remAfterHours = remAfterDays % 3600L;
        long minutes = remAfterHours / 60L;
        long seconds = remAfterHours % 60L;

        if (trimLeadingZeroes) {
            StringBuilder sb = new StringBuilder();
            if (hasWeeks && weeks > 0) {
                sb.append(weeks).append("w ");
            }
            if (days > 0 || (hasWeeks && weeks > 0)) {
                sb.append(days).append("d ");
            }
            if (hours > 0 || days > 0 || (hasWeeks && weeks > 0)) {
                sb.append(hours).append("h ");
            }
            if (minutes > 0 || hours > 0 || days > 0 || (hasWeeks && weeks > 0)) {
                sb.append(minutes).append("m ");
            }
            sb.append(seconds).append("s");
            return sb.toString().trim();
        }

        if (pattern == null || pattern.isBlank()) {
            pattern = "%dd %hh %mm %ss";
        }

        String result = pattern;
        if (hasWeeks) {
            result = result.replace("%02w", String.format("%02d", weeks))
                           .replace("%w", String.valueOf(weeks));
        }

        return result.replace("%02d", String.format("%02d", days))
                     .replace("%d", String.valueOf(days))
                     .replace("%02h", String.format("%02d", hours))
                     .replace("%h", String.valueOf(hours))
                     .replace("%02m", String.format("%02d", minutes))
                     .replace("%m", String.valueOf(minutes))
                     .replace("%02s", String.format("%02d", seconds))
                     .replace("%s", String.valueOf(seconds));
    }
}
