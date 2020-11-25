---
id: optimize
title: Optimizing your Paper/Spigot server
hide_title: false
sidebar_label: Optimizing your Paper/Spigot server
description: Optimize Your Paper/Spigot Server
hide_table_of_contents: true
---


[Original Thread](https://www.spigotmc.org/threads/guide-server-optimization⚡.283181/)

### Intro
Spigot/Paper offers settings that greatly improve performance. This guide breaks down suggested values that get the most out of your server without compromising gameplay.<br/>

### Guide Updates
- Updated for the latest 1.14/1.15/1.16
- Last Update: Aug-6-2020
- [Change Log](https://pastebin.com/sDVjUQY3)

New server owner? Read this [Lag Guide](https://www.spigotmc.org/threads/⚡-yml-optimization-guide-⚡.283181/#post-2741039) to understand your lag.

### Map Pre-Gen
Map pre-generation is critical to lag removal. Do it before you even touch your server files.
- Get the plugin WorldBorder
- Set a reasonable border distance.
- Command: `/wb fill`
- Wait...this may take hours depending on the map size. Ideally, you do this before the map is live as this will cause lag.
- Leave the border so new chunks never generate (cause lag).

### Server.Properties
**view-distance**
*Def:* 10
*Opt:* 4-8
*Impact:* Heavy

➫ This is a big performance setting as it forcibly reduces the max render distance for players. Open world servers (like Survival) should strive to use 6+, but others on shared hosts, low specs, or huge player counts might consider 4-5 if chunk gen causes lag.

:::warning
See note in mob-spawn-range (spigot.yml) if you set your view distance lower than 7.
:::

**network-compression-threshold**
*Default:* 256
*Optimized:* Standalone(512) BungeeCord(-1)
*Impact:* Minor

➫ This option caps the size of a packet before the server attempts to compress it. Setting it higher can save some resources at the cost of bandwidth, setting it to -1 disables it.

Note: If your server is in a network with the proxy on localhost or the same datacenter (<2 ms ping), disabling this (-1) will be beneficial.

### Per World Setttings
Save precious resources by running/disabling tasks per world!

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  groupId="type"
  defaultValue="bukkitl"
  values={[
    {label: 'Bukkit.yml', value: 'bukkit'},
    {label: 'Spigot.yml', value: 'spigot'},
    {label: 'Paper.yml', value: 'paper'},
  ]
}>
<TabItem value="bukkit">

**spawn-limits**
*Default:* monsters:70, animals:10, water-animals:15, ambient:15
*Optimized:* monsters:50, animals:8, water-animals:3, ambient:1
*Performance Impact:* Medium

➫ While there is more to this than "mobs per player" (explained in PDF), lower values mean less mobs. Avoid going too low or the mob shortages will be noticeable. Subsequent values in the guide will make the reduction less noticeable.

**chunk-gc.period-in-ticks**
*Def:* 600
*Opt:* 400
*Impact:* Medium

➫ This unloads vacant chunks faster. Ticking fewer chunks means less TPS consumption.

**ticks-per.monster-spawns**
*Def:* 1
*Opt:* 4
*Impact:* Medium

➫ This sets how often (in ticks) the server attempts to spawn a monster. Slighty increasing the time between spawns should not impact spawn rates.

Note: Only go higher if you have significant tick loss to the mobSpawn task.

**autosave**
*Def:* 6000 (usually)
*Opt:* 6000
*Impact:* N/A

➫ This enables Bukkit's world saving and how often it runs (in ticks). It should be 6000 by default, just double check it is not 0 (disabled). This is a gradual/queued task (no lag?).

Note: If you use Multicraft or a plugin to run saves, STOP! They just run the very inefficient /save-all command.

**Worldsave Lag:** If you have lag spikes from Worldsave, you might consider Paper's lag-free saving.
</TabItem>


<TabItem value="spigot">

**save-user-cache-on-stop-only**
*Default:* false
*Optimized:* true
Performance *Impact:* Medium

➫ Should the server constantly save user data (false) or delay that task until a stop/restart (true)? This is nice TPS savings on Spigot (less on Paper since it's more efficient).

Note: Take regular backups to avoid data loss in the rare event of a fatal crash.

**max-tick-time**
*Def:* tile:50, entity:50
*Opt:* tile:1000, entity:1000
*Impact:* N/A

➫ The optimized value disables this feature. The small TPS savings is not worth the potential damage. Damage? (click here)

**mob-spawn-range**
*Def:* 8
*Opt:* 6
*Impact:* N/A

➫ This sets the max mob spawn distance (in chunks) from players. After limiting spawns in Bukkit, this will condense mobs to mimic the appearance of normal rates.

:::warning
If your view-distance is 6 or less, set a spawn range 1 below that value. For example, if view-distance is 5, set mob-spawn-range to 4.
:::
**entity-activation-range**
*Def:* animals:32, monsters:32, raiders: 48, misc:16
*Opt:* animals:16, monsters:24, raiders: 48, misc:8
*Impact:* Medium

➫ Entities past this range will be ticked less often. Avoid setting this too low or you might break mob behavior (mob aggro, raids, etc).

**tick-inactive-villagers**
*Def:* true
*Opt:* false
*Impact:* Medium

➫ Enabling this prevents the server from ticking villagers outside the activation range. Villager tasks in 1.14+ are very heavy.

Note: The vanilla behavior would tick all villagers in loaded chunks.

**merge-radius**
*Def:* item:2.5, exp:3.0
*Opt:* item:4.0, exp:6.0
*Impact:* Medium

➫ Merging items means less ground item ticking. Higher values allow more items to be swept into piles.

Note: Merging will lead to the illusion of items disappearing as they merge together. A minor annoyance.

**nerf-spawner-mobs**
*Def:* false
*Opt:* true
*Impact:* Medium

➫ When enabled, mobs from spawners will not have AI (will not swim/attack/move). This is big TPS savings on servers with mob farms, but also messes with their behavior. A farm limiter plugin might be a better solution.

Note: Paper has an option to force nerfed mobs to jump/swim. This fixes water push farms and keeps the TPS savings.

**item-despawn-rate**
*Def:* 6000 (5 minutes)
*Opt:* less?
*Impact:* Situational

➫ The time (in ticks) before a ground item is removed. While the TPS savings can be significant if reduced, it also impacts gameplay on servers where returning to dropped items is critical.

Note: See Paper's alt-item-despawn-rate so you can target trash items (cobblestone) without clearing valuable items (diamonds).

**arrow-despawn-rate**
*Def:* 1200
*Opt:* 300
*Impact:* Minor

➫ Similar to item-despawn-rate, but for fired arrows. Some servers may want to keep arrows on the ground longer, but most will have no complaints from faster removal.

Note: Paper has settings to reduce the gameplay impact of arrow removal. Leave this near default if you use Paper's despawn options.
</TabItem>


<TabItem value="paper">

:::warning
Paper is an unofficial fork and is not supported on Spigot forums. If you have issues related to Paper, report them on Paper's issue tracker, not on Spigot!
:::
**max-auto-save-chunks-per-tick**
*Default:* 24
*Optimized:* 6
*Performace Impact:* Heavy

➫ This slows incremental chunk saving during the world save task. This is incredibly important for 1.13+ servers with how inefficient chunk saving is.

Note: Be sure your save can finish between your autosave interval. Setting this too low might result in unsaved chunks. If you have 40+ players online, you should try to keep this at 8 to be safe.

**optimize-explosions**
*Default:* false
*Optimized:* true
*Impact:* Minor

➫ Paper has a very efficient algorithm for explosions with no impact to gameplay.

**mob-spawner-tick-rate**
*Def:* 1
*Opt:* 2
*Impact:* Minor

➫ This is the delay (in ticks) before an active spawner attempts spawns. Doubling the delay will not impact spawn rates. Only go higher if you have significant tick loss from ticking spawners.

**disable-chest-cat-detection**
*Def:* false
*Opt:* true
*Impact:* Minor

➫ Chests scan for a cat on top of it when opened by a player. While enabling this eliminates vanilla behavior (cats block chests), do you really need this mechanic?

**container-update-tick-rate**
*Def:* 1
*Opt:* 3
*Impact:* Minor

➫ This changes how often (in ticks) inventories are refreshed while open. Do not exceed 4 to avoid visual issues.

**max-entity-collisions (in Spigot.yml in some builds)**
*Def:* 8
*Opt:* 2
*Impact:* Medium

➫ Crammed entities (grinders, farms, etc.) will collide less and consume less TPS in the process.

**grass-spread-tick-rate**
*Def:* 1
*Opt:* 4
*Impact:* Medium

➫ The time (in ticks) before the server tries to spread grass in chunks. This will have no gameplay impact on most game types.

**despawn-ranges**
*Def:* soft: 32, hard: 128
*Opt:* soft: 28, hard: 96
*Impact:* Minor

Soft = The distance (in blocks) from a player where mobs will be periodically removed.
Hard = Distance where mobs are removed instantly.

➫ Lower ranges clear background mobs and allow more to be spawned in areas with player traffic. This further reduces the gameplay impact of reduced spawning (bukkit.yml).

**hopper.disable-move-event**
*Def:* false
*Opt:* true
*Impact:* Heavy

➫ This will significantly reduce hopper lag by preventing InventoryMoveItemEvent being called for EVERY slot in a container.

:::warning
If you have a plugin that listens to InventoryMoveItemEvent, do not enable.
:::

**non-player-arrow-despawn-rate**
*Def:* -1 (uses Spigot arrow-despawn-rate)
*Opt:* 60 (3 seconds)
*Impact:* Minor

➫ Similar to Spigot's arrow-despawn-rate, but targets skeleton-fired arrows. Since players cannot retrieve mob arrows, this is only a cosmetic change.

**creative-arrow-despawn-rate**
*Def:* -1 (Spigot arrow-despawn-rate)
*Opt:* 60 (3 seconds)
*Impact:* Minor

➫ Like the setting above, but for player-fired arrows that cannot be retrieved (infinity bows).

**prevent-moving-into-unloaded-chunks**
*Def:* false
*Opt:* true
*Impact:* Medium

➫ Prevents players from entering an unloaded chunk (due to lag), which causes more lag. The true setting will set them back to a safe location instead.

Note: If you did not pre-generate your world (what's wrong with you?!) this setting is critical.

**use-faster-eigencraft-redstone**
*Def:* false
*Opt:* true
*Impact:* Heavy

➫ This setting reduces redundant redstone updates by as much as 95% without breaking vanilla devices. Empirical testing shows a speedup by as much as 10x!

Note: If you use a plugin to change redstone algorithms, consider replacing them with this option as plugins tend to break redstone behavior.

**armor-stands-tick**
*Def:* true
*Opt:* false
*Impact:* Minor

➫ Some items are viewed as entities (require ticking) since they interact with the world. Unticked armor stands will not get pushed by water (do you care?)

Note: Paper also offsets item frame ticking instead of ticking all frames at once. This is not configurable, just enjoy the TPS savings with no gameplay impact.

**per-player-mob-spawns**
*Def:* false
*Opt:* true
*Impact:* Minor

➫ This implements singleplayer spawning behavior instead of Bukkit's random algorithms. This prevents the actions of others (i.e. Massive farms) from impacting the server's spawn rates.

Note: If you lowered spawn-limits in Bukkit and notice shortages of animals and monsters, consider bumping those back up until you find a happy place.

**alt-item-despawn-rate**
*Def:* false
*Opt:* true
*Impact:* Medium

➫ Remove certain item drops faster (or slower) than the item-despawn-rate set in Spigot. This lets you avoid dedicating resources to ticking massive piles of garbage.

Example of despawning cobblestone and netherrack in 15 seconds:
```
enabled: true
items:
  COBBLESTONE: 300
  NETHERRACK: 300
```
</TabItem>
</Tabs>
