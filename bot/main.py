# Alright, Lets import all the stuff we need to run the bot.
import json

import discord
import requests
import toml
from discord.ext import commands
from discord.ext.commands import Bot

data = toml.load("config.toml")
client = commands.Bot(command_prefix="n.")
endpoint = data["endpoint"]
shortner = data["shortner"]
client_id = data["client_id"]
supportarea = data["supportarea"]


@client.event
async def on_ready():
    print("done")
    print("Connected to discord as: {0.user}".format(client))
    await client.change_presence(activity=discord.Activity(
        type=discord.ActivityType.watching, name=data["status"]))
    print("I am the following number of servers")
    print({len(client.guilds)})


@client.command(aliases=["s", "shorten"])
async def newurl(ctx, handle, url):
    '''Shortens a url, you can also use "n.s"'''
    try:
        data = {}
        data["vanity"] = handle
        data["newlink"] = url
        # note that you should not use requests, ill change this in the future once i figure out how the fuck to use aiohttp
        r = requests.post(
            endpoint,
            data=json.dumps(data),
            headers={"Content-Type": "application/json"},
        )
        textresult = r.text
        statuscode = r.status_code
        print(f"STATUS CODE LOG: {statuscode}")
        if statuscode == 400:
            await ctx.send(
                "You're URL to shorten is bad. Note that the usage is: 'n.s {handle} {looong url here}''"
            )
        if statuscode == 409:
            await ctx.send("Looks like that vanity is already taken :(")
        if statuscode == 200:
            await ctx.send(f"URL created at: <{shortner}/{handle}>")
    except:
        await ctx.send(
            f"Oh no, **its all gone terribly wrong** (not really, its just dramatic.) Please send a friend request to: {supportarea}"
        )


@client.command(aliases=["i"])
async def invite(ctx):
    """Gives you the bot invite"""
    await ctx.send(
        f"Bot invite: <https://discord.com/oauth2/authorize?client_id={client_id}&scope=bot&permissions=19456>"
    )
    print("BOT INVITE COMMAND RAN")


print("Connecting to discord...")
client.run(data["token"])
