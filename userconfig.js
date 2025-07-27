let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

const default_config = {
  overrideStorage: true,
  temperature: {
    location: 'Sloviansk, Donetsk Oblast, Ukraine',
    // location: 'Poltava, Poltava Oblast, Ukraine',
    scale: "C",
  },

  clock: {
    format: "h:i p",
    iconColor: "#ea6962",
  },
  search: {
    engines: {
      g: ["https://google.com/search?q=", "Google"],
      d: ["https://duckduckgo.com/html?q=", "DuckDuckGo"],
      y: ["https://youtube.com/results?search_query=", "Youtube"],
      r: ["https://www.reddit.com/search/?q=", "Reddit"],
      p: ["https://www.pinterest.es/search/pins/?q=", "Pinterest"],
    },
  },
  keybindings: {
    "s": "search-bar",
    "q": "config-tab",
  },
  disabled: [],
  localIcons: false,
  fastlink: "https://claude.ai",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "chi ll",
      background_url: "src/img/banners/vinland-10.jpg",
      categories: [{
        name: "Social Media",
        links: [
          {
            name: "Telegram",
            url: "https://web.telegram.org/a/",
            icon: "brand-telegram",
            icon_color: "#3c8db5",
          },
          {
            name: "Instagram",
            url: "https://www.instagram.com/",
            icon: "brand-instagram",
            icon_color: "#cf3a53",
          },
          {
            name: "TikTok",
            url: "https://www.tiktok.com/?lang=ru-RU",
            icon: "brand-tiktok",
            icon_color: "#ebebeb",
          },
          {
            name: "SoundCloud",
            url: "https://soundcloud.com/discover",
            icon: "brand-soundcloud",
            icon_color: "#c77248",
          },
          {
            name: "Parik24",
            url: "https://parik24.one/",
            icon: "poker-chip",
            icon_color: "#d4ba46",
          },
        ],
      }, {
        name: "Video/Streaming",
        links: [
          {
            name: "Kinogo",
            url: "https://kinogo.inc/",
            icon: "brand-netflix",
            icon_color: "#757575",
          },
          {
            name: "Youtube",
            url: "https://www.youtube.com/",
            icon: "brand-youtube-filled",
            icon_color: "#ea6962",
          },
          {
            name: "Twitch",
            url: "https://www.twitch.tv/",
            icon: "brand-twitch",
            icon_color: "#d3869b",
          },
          {
            name: "Ukraine Judo",
            url: "https://ukrainejudo.com/",
            icon: "olympics",
            icon_color: "#6281c4",
          },
        ],
      }, {
        name: "Game Launcher",
        links: [
          {
            name: "Steam",
            url: "https://store.steampowered.com/?l=russian",
            icon: "brand-steam",
            icon_color: "#ebebeb",
          },
          {
            name: "Epic Games",
            url: "https://store.epicgames.com/ru",
            icon: "device-gamepad-2",
            icon_color: "#63c2cf",
          },
        ],
      },],
    },
    {
      name: "tools",
      background_url: "src/img/banners/vinland-10.jpg",
      categories: [
        {
          name: "AI",
          links: [
            {
              name: "ChatGPT",
              url: "https://chatgpt.com/",
              icon: "brand-openai",
              icon_color: "#ebebeb",
            },
            {
              name: "Deepseek",
              url: "https://chat.deepseek.com/",
              icon: "fish-christianity",
              icon_color: "#656fe0",
            },
            {
              name: "Claude",
              url: "https://claude.ai/",
              icon: "brand-codesandbox",
              icon_color: "#c2814c",
            },
            {
              name: "Hugging Face",
              url: "https://huggingface.co/",
              icon: "mood-happy",
              icon_color: "#e0c365",
            },
          ],
        },
        {
          name: "Google Services",
          links: [
            {
              name: "Google Search",
              url: "https://www.google.com/",
              icon: "brand-google",
              icon_color: "#dbc244",
            },
            {
              name: "Gmail",
              url: "https://uxpro.cc/",
              icon: "mail",
              icon_color: "#db4944",
            },
            {
              name: "Google Drive",
              url: "https://drive.google.com/drive/my-drive?hl=ru",
              icon: "brand-google-drive",
              icon_color: "#4497db",
            },
            {
              name: "Google Photos",
              url: "https://photos.google.com/u/2/",
              icon: "brand-google-photos",
              icon_color: "#7daea3",
            }
          ],
        },
        {
          name: "Other Tools",
          links: [
            {
              name: "Notion",
              url: "https://www.notion.so/",
              icon: "brand-notion",
              icon_color: "#ebebeb",
            },
            {
              name: "DeepL",
              url: "https://calendar.google.com/calendar/u/0/r",
              icon: "world-longitude",
              icon_color: "#5c76cc",
            },
            {
              name: "LanguageTool",
              url: "https://languagetool.org/ru",
              icon: "language",
              icon_color: "#5788c9",
            },
            {
              name: "Y2Mate",
              url: "https://v4.www-y2mate.com/",
              icon: "download",
              icon_color: "#cc5c5e",
            },
            {
              name: "Google Translate",
              url: "https://translate.google.com/",
              icon: "world-longitude",
              icon_color: "#cc785c",
            },
            {
              name: "Google Maps",
              url: "https://www.google.com/maps",
              icon: "brand-google-maps",
              icon_color: "#96cc5c",
            },
            {
              name: "Winstall",
              url: "https://winstall.app/",
              icon: "package",
              icon_color: "#b25ccc",
            },
          ],
        },
      ],
    },
    {
      name: "myself",
      background_url: "src/img/banners/vinland-10.jpg",
      categories: [
        {
          name: "My project",
          links: [
            {
              name: "Website Ukraine Judo",
              url: "https://ukraine-judo.github.io/",
              icon: "sitemap",
              icon_color: "#a0c4de",
            },
            {
              name: "Steam Workshop Downloader",
              url: "https://github.com/motoshfq/Simple-Steam-Workshop-Downloader",
              icon: "download",
              icon_color: "#476aad",
            },
            {
              name: "Old Website FJU",
              url: "http://ukraine-judo.github.io/old-fju",
              icon: "sitemap-off",
              icon_color: "#a0c4de",
            },
            {
              name: "JudoSpirit",
              url: "https://ukraine-judo.github.io/git-judospirit",
              icon: "ghost-3",
              icon_color: "#ad4747",
            },
          ],
        },
        {
          name: "mails",
          links: [
            {
              name: "Google Mail",
              url: "https://mail.google.com/mail/u/0/",
              icon: "brand-gmail",
              icon_color: "#ea6962",
            },
            {
              name: "Proton Mail",
              url: "https://mail.proton.me/u/1/inbox",
              icon: "mail",
              icon_color: "#7a53c2",
            },
          ],
        },
        {
          name: "storage",
          links: [
            {
              name: "Google Drive",
              url: "https://drive.google.com/drive/u/0/my-drive",
              icon: "brand-google-drive",
              icon_color: "#e78a4e",
            },
            {
              name: "Dropbox",
              url: "https://www.dropbox.com/home",
              icon: "box-seam",
              icon_color: "#7daea3",
            },
            {
              name: "Photo",
              url: "https://photos.google.com/u/2/",
              icon: "photo-filled",
              icon_color: "#ea6962",
            },
          ],
        },
        {
          name: "stuff",
          links: [
            {
              name: "linkedin",
              url: "https://www.linkedin.com/feed/",
              icon: "brand-linkedin",
              icon_color: "#7daea3",
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(saved_config ?? default_config);
// const CONFIG = new Config(default_config);

(function() {
  var css = document.createElement('link');
  css.href = 'src/css/tabler-icons.min.css';
  css.rel = 'stylesheet';
  css.type = 'text/css';
  if (!CONFIG.config.localIcons)
    document.getElementsByTagName('head')[0].appendChild(css);
})();
