const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="ogemdidavid1@gmail.com"
global.location="Imo, Nigeria"


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/Dartondave/Suhail-Md-V5";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/Dartondave/Suhail-Md-V5/main/lib/assets/sukuna.jpeg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ℙ𝕆𝕎𝔼ℝ𝔼𝔻 𝔹𝕐 𝔻𝔸ℝ𝕋𝕆ℕ_𝕄𝔻" 


global.devs = "2347038336733" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349131125604";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text"  // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "composing" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_09_09_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDk1LFxuICAgICAgICAyMixcbiAgICAgICAgMTM1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTExLFxuICAgICAgICA3NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTc1LFxuICAgICAgICAxODksXG4gICAgICAgIDU3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTk2LFxuICAgICAgICA2LFxuICAgICAgICA1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDUzLFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDEsXG4gICAgICAgIDkxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTUzLFxuICAgICAgICA3NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDM4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQxLFxuICAgICAgICA1NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTIzLFxuICAgICAgICA4OCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNixcbiAgICAgICAgMjQ3LFxuICAgICAgICA3MyxcbiAgICAgICAgMjMxLFxuICAgICAgICA2OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMjE5LFxuICAgICAgICAxODAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDU1LFxuICAgICAgICAxMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDMwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTIzLFxuICAgICAgICA3MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDYsXG4gICAgICAgIDI1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTk0LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMCxcbiAgICAgICAgMjQzLFxuICAgICAgICAzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDExMixcbiAgICAgICAgOTQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTcyLFxuICAgICAgICA2NyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTAzLFxuICAgICAgICA3NCxcbiAgICAgICAgMjIwLFxuICAgICAgICA5NixcbiAgICAgICAgNTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTE2LFxuICAgICAgICAyMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDUsXG4gICAgICAgIDgwLFxuICAgICAgICAyNixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDQsXG4gICAgICAgIDI1MixcbiAgICAgICAgNzgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTUwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTUxLFxuICAgICAgICAyMzksXG4gICAgICAgIDc0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDg5LFxuICAgICAgICA0MSxcbiAgICAgICAgMjksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDY2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDUyLFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzAsXG4gICAgICAgIDk1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMzMsXG4gICAgICAgIDk4LFxuICAgICAgICAyMDksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjIyLFxuICAgICAgICA2MyxcbiAgICAgICAgMzksXG4gICAgICAgIDk4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDk4LFxuICAgICAgICAzMyxcbiAgICAgICAgMjMxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDg5LFxuICAgICAgICA0OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA3NCxcbiAgICAgICAgMjE4LFxuICAgICAgICA2MixcbiAgICAgICAgNTQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNTksXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDU2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTk3LFxuICAgICAgICA4MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDYxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDgsXG4gICAgICAgIDM1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxODAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxODgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiek5BYURsTlhtZE8zbjA4M01FVEZxLytKQytsdy8yRG1oMWo2R0oydzRvZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MTMxMTI1NjA0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1RkJGMjczNjg0RDhDNDRDQjA5REYyRUZGNzc3QTYyQVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjU5OTUzODRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MTMxMTI1NjA0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyRURGNTkyOTdEMUVDOUI3RTkzNDdEOTBDOEU5RDU2M1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjU5OTUzODRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRmtZaXprNzVSVnVUZlVpR3R5dU5vUVwiLFxuICBcInBob25lSWRcIjogXCIzMDZiZWQ3Yy0zNGIyLTQ2MzctYmQwNi1iNjkwMjg5ZTdlNzFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMSxcbiAgICAgIDIwMSxcbiAgICAgIDEwNSxcbiAgICAgIDEzMSxcbiAgICAgIDI0MyxcbiAgICAgIDI3LFxuICAgICAgOTgsXG4gICAgICAyMTIsXG4gICAgICAyMDUsXG4gICAgICAyMyxcbiAgICAgIDIwOSxcbiAgICAgIDE2LFxuICAgICAgMTc0LFxuICAgICAgMjQsXG4gICAgICAzNixcbiAgICAgIDkyLFxuICAgICAgMjM4LFxuICAgICAgMTQ3LFxuICAgICAgMjQ4LFxuICAgICAgMjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE3LFxuICAgICAgODUsXG4gICAgICAxMzQsXG4gICAgICA3OCxcbiAgICAgIDQ1LFxuICAgICAgMTY0LFxuICAgICAgMTAzLFxuICAgICAgMTE5LFxuICAgICAgMTc5LFxuICAgICAgNjEsXG4gICAgICA1OCxcbiAgICAgIDE0NCxcbiAgICAgIDE2OSxcbiAgICAgIDEyMyxcbiAgICAgIDI0OCxcbiAgICAgIDI0OSxcbiAgICAgIDE1NixcbiAgICAgIDI3LFxuICAgICAgMTMyLFxuICAgICAgMTA2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjRFRUYzWFlNXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTMxMTI1NjA0OjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiSmFtaWxcIixcbiAgICBcImxpZFwiOiBcIjUxMDMzMzU1MDcxNjA5OjE1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1ByK25LZ0ZFUEN5Z3JjR0dBVWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiT2V3bW9lNEN1dThlcnozZHNybTBJTTB1RlNncnpiWjZQRlQ5UmplekxVcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJMRzh3LzJ4U2RIVStmbWkvV1AzeDE1RTVrVzJ2QloxMWRLWlpoNUM5TmNvR0hQZ2d4bnMyODZsNEFRU2kxWEV1aUg1Y0c0YzNuWmcwMWlMU1BCZm9CQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJaTlNvclJVcEo1eXpBcjQ4MUlEODlqOUNncFZiU0JTR0xlZzRpQnZYeU1XZGYzYkRpRUtzb1hlRmJxZVVSNkxMdzJEK05JdzFPSUxSRjFOWUw3MmVCUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTMxMTI1NjA0OjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNzVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNTk5NTM4MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUtlK1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS2UrLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 ℙ𝕆𝕎𝔼ℝ𝔼𝔻 𝔹𝕐 𝔻𝔸ℝ𝕋𝕆ℕ_𝕄𝔻 』```", //*『𝕤ᴜʙ𝕤ᴄʀɪʙᴇ • 𝔻𝔸ℝ𝕋𝕆ℕ 𝕋𝔼ℂℍ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "𝔻𝔸ℝ𝕋𝕆ℕ",
  packname: process.env.PACK_NAME || "𝔻𝔸ℝ𝕋𝕆ℕ_𝕄𝔻",
  botname : process.env.BOT_NAME  || "𝔻𝔸ℝ𝕋𝕆ℕ_𝕄𝔻",
  ownername:process.env.OWNER_NAME|| "𝔻𝔸ℝ𝕋𝕆ℕ",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "𝔻𝔸ℝ𝕋𝕆ℕ"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "https://raw.githubusercontent.com/Dartondave/Suhail-Md-V5/main/lib/assets/sukuna.jpeg?raw=true",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "composing", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
