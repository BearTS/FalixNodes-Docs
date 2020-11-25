---
id: freeip
title: Custom IP for Your Server
hide_title: false
sidebar_label: Free Custom IP for Your Server
description: Adding a Custom Domain to your Server
hide_table_of_contents: true
---
This guide is for Java and Bedrock, both editions of Minecraft
To make a free custom IP first go to [Freenom](https://freenom.com) then make an account then search for your domain and add it to the cart and you can purchase it for `12 months for 0 cost`.<br/>
now `Checkout` and It'll ask to `Use DNS or Forwarding`, click on `Use DNS`, then Enter your `server's numeric IP`(get it at top of console) without the port into Freenom DNS Management, and click on `Continue`.
<center><img width="50%" height="50%" src={require('../assets/freenom1.png').default} /><br/></center>

After getting the Domain,
- Go to `My domains` in Services and select your Domain
- Click on Manage Domain, Click on Management Tools and select Nameservers
- On Another tab open [Cloudflare](https://dash.cloudflare.com) and make an account or login, then click on add site and enter your domain
- Add your site by copying Cloudflare's nameservers and going back to Freenom and click on `Custom nameservers` and then paste the cloudflare ones there and save them
- After 5 minutes refresh the cloudflare page, and now go to `DNS`
- Click on `New Record` then change it to `SRV`, and enter the subdomain you want for ur server as the name for eg, mc, play, etc. or use ``@`` if you just want to join with the domain name, then set `Priority` to `0` and weight to `0`, and `Port` to your Server's PORT which u get from [GamePanel](https://gp.falixnodes.net) then set Service to _minecraft and target to your domain and click on `Save Changes`
<center><img width="70%" height="70%" src={require('../assets/freenom2.png').default} /><br/></center>
After a minute or two, you can now join with the new Domain
