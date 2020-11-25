---
id: bungeecord
title: Creating a BungeeCord Network
hide_title: false
sidebar_label: Creating a BungeeCord Network
description: Guide To make BungeeCord Network
hide_table_of_contents: true
---
To create a BungeeCord Network you can follow the guide below or watch this excellent by [Korbs](https://korbsstudio.com)<br/>
[BungeeCord](https://www.spigotmc.org/wiki/bungeecord/) is used to connect Spigot/Paper/Bukkit servers together so that they can be joined with 1 IP.
To make a BungeeCord server first normally [Create A Server](../McJava/normalmc) with 512 - 1024 MB ram like you did to make a normal server
Then go to [GamePanel](https://gp.falixnodes.net) and select the Server, then start the server and it'll load a list of Options, as `BungeeCord` is a `proxy`, select `7`
<center>
<img src={require('../assets/bungeecordproxy.png').default}/><br />
<font size='2' color='#c75a83'><i>select 7 for proxy and then 7 for bungeecord</i></font></center><br/>

We'll select `7` again then It'll install bungeecord and reboot the server, then you need to link your Spigot/Paper/Bukkit servers with BungeeCord
For doing that, go to your `Spigot/Paper/Bukkit server > File Management > Select spigot.yml` and find `bungeecord` using Ctrl + F, then set `bungeecord` to true and restart your server
<center><img width="40%" height="40%" src={require('../assets/bungeecordsettings.png').default}/><br />
<font size='2' color='#c75a83'><i>set BungeeCord to true</i></font></center><br/>

Then Copy your Spigot/Paper/Bukkit server's IP and go into BungeeCord config and add it as a server under servers
```yml
  servername:
      motd: 'the motd you want'
      address: IP:PORT
      restricted: false
  servername:
      motd: 'the motd you want'
      address: IP:PORT
      restricted: false
```
then change ip-foward to true in bungee config.yml<br/>
Click on `Save Changes` after adding that, and Restart your Bungeecord server then join your BungeeCord server and you should be in the server you marked as default<br/>
If there is still an error please copy the bungeecord server port and in `config.yml` change
```yml
query_port: PORT
host: 0.0.0.0:PORT
```
if Further issues occur please ask for help in [FalixNodes Discord Server](https://discord.gg/FalixNodes) in #public-support
