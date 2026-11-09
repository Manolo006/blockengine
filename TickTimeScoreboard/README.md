# TickTimeScoreboard (Fabric Mod)

A lightweight, purely **client-side** Fabric mod that converts raw Minecraft ticks (20 ticks = 1 second) in scoreboard sidebars into formatted human-readable time strings (e.g. `12000020` -> `6d 22h 40m 1s`), **strictly for specified scoreboard objectives**.

---

## Features

- **100% Client-Side:** No server installation required. Operates completely in your client during sidebar rendering.
- **Precision Objective Filtering:** Targets objectives by either internal ID (e.g., `play_time`) or display name (e.g., `Time Played`), ignoring color codes.
- **Untouched Scores:** All other scoreboards (kills, money, ping, player health) remain untouched with their standard numbers.
- **Auto Live-Reload Config:** Editing the config file takes effect within 2 seconds in-game without needing to restart Minecraft!
- **Flexible Formatting:** Support for weeks (`%w`), days (`%d`), hours (`%h`), minutes (`%m`), and seconds (`%s`).

---

## Configuration

Located at:
`.minecraft/config/tick_time_scoreboard.json`

```json
{
  "target_scoreboard_name": "play_time",
  "time_format": "%dd %hh %mm %ss",
  "trim_leading_zeroes": true
}
```

### Options:
- `target_scoreboard_name`: The internal objective name (e.g. `"play_time"`) or display title (e.g. `"Time Played"`). Multiple objectives can be specified separated by commas (e.g. `"play_time, Time Played, Tempo"`).
- `time_format`: Formatting tokens:
  - `%w` / `%02w`: Weeks
  - `%d` / `%02d`: Days
  - `%h` / `%02h`: Hours
  - `%m` / `%02m`: Minutes
  - `%s` / `%02s`: Seconds
- `trim_leading_zeroes`: When `true`, hides zero leading units (e.g. shows `40m 1s` instead of `0d 0h 40m 1s`). When `false`, always follows the explicit string replacement.
