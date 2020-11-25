---
id: serverjar
title: Could not find server.jar
hide_title: false
sidebar_label: Could not find server.jar
description: The solution is simple, you just haven't configured startup settings correctly
hide_table_of_contents: true
---

###  Solution for Discord Bot Hosting Users
You can follow This [Video Guide](https://www.youtube.com/watch?v=94keRJ6tQ9E) or check the Instructions Down


- Go to [GamePanel](https://gp.falixnodes.net) , choose your server and to go `STARTUP` in the tab menu.
- Scroll down until you find `DISCORD BOT HOSTING MODE` & `MAIN BOT FILE`
- Enter `index.js/bot.js` (whatever your main bot file is named) in `MAIN BOT FILE`
- In `DISCORD BOT HOSTING MODE`<br/>
Enter `pm2_node` if your bot is made in javascript (nodejs)<br/>
Enter `pm2_python`for python<br/>

:::info Missing Dependencies
if your bot is made in python If you face errors of module/package not being found:<br/>
Enter `pip_install`, start the server and wait till it's done installing the packages if you are using python. Then set it back to `pm2_python`<br/>
Enter `npm_install` , start the server and wait till it's done installing the modules if you are using javascript. Then set it back to `pm2_node`
:::
<br/>
<center>
<img height="80%" width="80%" src={require('../assets/djs.png').default}/><br />
<font size='2' color='#c75a83'><i>Discord.js</i></font><br/><br/>
<img height="80%" width="80%" src={require('../assets/dpython.png').default}/><br />
<font size='2' color='#c75a83'><i>Discord.py</i></font><br/></center>


###  Solutions for Minecraft Server Hosting Users

- Go to [GamePanel](https://gp.falixnodes.net) , choose your server and to go `STARTUP` in the tab menu.
- In `OTHER OPTIONS MODE`,<br/>
Enter `pmmp` if your server is PocketMineMP server<br/>
Enter `bedrock` if your server is a Vanilla Bedrock server<br/>
Enter `bombsquad` if your server is a BombSquad server<br/>
Similarly, you can find rest of the options for your server in the screenshot below<br/>
<center><img src={require('../assets/options.png').default} /></center>
