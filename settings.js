require('dotenv').config({ path: './elisaConfig.env' });
/*
PROJECT: QUEEN ELISA WHATSAPP BOT
VERSION: 4.0.2
OWNER: @darkmakerofc | @MR-NIMA-X
*/

module.exports = {
  SESSION_ID: process.env.SESSION_ID || 'QUEENELISA;;;==QRUV3SGNXQzIlZ2JUYLVVYMZTY4MTOhdkMXZkYul3RzgXYYVWSKJlTtlTOjQVeSRUeFJVVpwd=493834097452',
  ALIVE_REACT: '👋',
  ALIVE_MESSAGE: `*Hello @name I am Alive Now !*

⏰ Now time is @time
📅 Date : @date

🟢 I am online still @uptime
🔄 Response Delay : @ping Ms
💻 Host : @host
🪢 Version : @version

☫ Work Mode : @mode
☫ Work Type : @worktype

Qᴜᴇᴇɴ ᴇʟɪꜱᴀ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ`,
  ALIVE_MEDIA: 'https://telegra.ph/file/a7ca8d4777fa8ad977795.jpg',
  MONGODB_URL: process.env.MONGODB_URL|| 'mongodb+srv://cheekyheroku:elisa1@elisa.sqrwy.mongodb.net/',
  PREFIX: '.',
  LANGUAGE: 'EN',
  PORT: process.env.PORT || 3000,
  BOT_NAME: 'queen elisa',
  OWNER_NAME: 'SVJ...💥💥',
  OWNER_NUMBER: '254790438394',
  SUDO: '254790438394',
  WORK_TYPE: 'private', // ex: public/private
  WORK_MODE: 'all', // ex: all/only_groups/only_pm
  TIME_ZONE: 'Asia/Colombo',
  CAPTION: '© ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ Qᴜᴇᴇɴ ᴇʟɪꜱᴀ ᴍᴅ\nmr-nima.vercell.app',
  STICKER_AUTHOR: 'SVJ...💥💥',
  STICKER_PACK: 'QUEEN ELISA',
  REMOVE_BG_APIKEY: '',
  MAXIMUM_FILESIZE: 90, //size in MB
  OWNER_R_EMOJI: '💻',
  ALIVE_AS_GIF: false,//this only work for short videos
  AUTO_VOICE: false,
  INBOX_BLOCK: false,
  OWNER_REACT: false,
  AUTO_REACT: false,
  ONLY_PM_GROUP_MSG_SEND: true,// you want WORK_MODE message send
  AUTO_SEEN_STATUS: true,
  BOT_OFFLINE: false,// Bot online status
  READ_MESSAGE: false,
  ANTI_MSG_SPAM: false,
  ANTI_BAD_WORD: false,
  ANTI_VIEW_ONES: false, // This not working now !
  ANTI_DELETE: false,
  BANED_USER_MSG_SEND: false,
  BLOCK_CMD_MSG_SEND: false,
  INBOX_BLOCK_MSG_SEND: false,
  CMD_CORRECT: false,
  ANTI_CHANNEL_FORWARD: false,
  ANTI_BOT: false,// disabled
  BUTTON_MESSAGES: true,// Don't change this
  SONG_DOWNLOAD_TYPE: 'selectable', // audio , document
  VIDEO_DOWNLOAD_TYPE: 'selectable', // video
  FB_DOWNLOAD_TYPE: 'selectable', // hdvideo , sdvideo
  TIKTOK_DOWNLOAD_TYPE: 'selectable', // nowmvideo , wmvideo
  MSG: {
    ONLY_GROUP_MSG: 'Bot only Can Use Groups!',
    ONLY_PM_MSG: 'Bot only Can Use Private Chats!',
    BAD_DETECT_MSG: '@user Bad Words Are Disable by Owner!',
    BANED_MSG: "@user You Can't use bot, You are baned by owner!",
    GROUP_LEAVE: '👋 Bye @groupName I am Going.',
    INBOX_BLOCK:
      '❌ My owner has activated auto inbox blocking. So you will be auto blocked after 8 seconds'
  },
  BOT_RULES:
    "*⚖️ 𝚀𝚄𝙴𝙴𝙽 𝙴𝙻𝙸𝚂𝙰 𝙱𝙾𝚃 𝚁𝚄𝙻𝙴𝚂 ⚖️*\n\n☫ Don't spam messages.\n☫ Don't add groups without asking owner.\n"
}
