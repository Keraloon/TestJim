document.addEventListener("DOMContentLoaded", () => {
  const themeButtons = document.querySelectorAll(
    ".theme-button, .test0-button"
  );
  const randomButton = document.querySelector(".random-button");
  const videoList = document.getElementById("video-list");
  const themeTitle = document.getElementById("theme-title");
  const videosByTheme = {
    Alf: [
      {
        title: "1 hour of UPBEAT video game music",
        url: "https://www.youtube.com/watch?v=8hU2viM8Ezw",
        thumbnail: "https://img.youtube.com/vi/8hU2viM8Ezw/mqdefault.jpg",
      },
      {
        title: "UPBEAT video game music pt. 2 ✨",
        url: "https://www.youtube.com/watch?v=hc8Iys3KKLo",
        thumbnail: "https://img.youtube.com/vi/hc8Iys3KKLo/mqdefault.jpg",
      },
      {
        title: "2 hours of chill video game music 🍹",
        url: "https://www.youtube.com/watch?v=JJis0sld2cM",
        thumbnail: "https://img.youtube.com/vi/JJis0sld2cM/mqdefault.jpg",
      },
      {
        title: "chill video game music pt. 2 🍹🍄",
        url: "https://www.youtube.com/watch?v=VaVAyjFx_3k",
        thumbnail: "https://img.youtube.com/vi/VaVAyjFx_3k/mqdefault.jpg",
      },
      {
        title: "chill video game music pt. 3 🍹🌴🔴",
        url: "https://www.youtube.com/watch?v=pu3SfD4jpkU",
        thumbnail: "https://img.youtube.com/vi/pu3SfD4jpkU/mqdefault.jpg",
      },
      {
        title: "chill video game music pt. 4 ☕🎧🎶",
        url: "https://www.youtube.com/watch?v=_AZKN9sRx2I",
        thumbnail: "https://img.youtube.com/vi/_AZKN9sRx2I/mqdefault.jpg",
      },
      {
        title: "chill video game music pt. 5 🍹🍬☁️",
        url: "https://www.youtube.com/watch?v=kySPF3bwQPE",
        thumbnail: "https://img.youtube.com/vi/kySPF3bwQPE/mqdefault.jpg",
      },
      {
        title: "chill video game music pt. 6 🍹🍉🍓",
        url: "https://www.youtube.com/watch?v=ZIHq06bGHlQ",
        thumbnail: "https://img.youtube.com/vi/ZIHq06bGHlQ/mqdefault.jpg",
      },
      {
        title: "chill video game music pt. 7 🎣🌊☁️",
        url: "https://www.youtube.com/watch?v=b71nXT7RtYg",
        thumbnail: "https://img.youtube.com/vi/b71nXT7RtYg/mqdefault.jpg",
      },
      {
        title: "GOOF HOUSE",
        url: "https://www.youtube.com/watch?v=L64OPz52a1Y",
        thumbnail: "https://img.youtube.com/vi/L64OPz52a1Y/mqdefault.jpg",
      },
      {
        title: "night vibes - relaxing video game music 🌟",
        url: "https://www.youtube.com/watch?v=pGTPhoVtm1M",
        thumbnail: "https://img.youtube.com/vi/pGTPhoVtm1M/mqdefault.jpg",
      },
      {
        title: "1 hour of video game BANGERS 📀✮⋆",
        url: "https://www.youtube.com/watch?v=GPzfpOWNEhs",
        thumbnail: "https://img.youtube.com/vi/GPzfpOWNEhs/mqdefault.jpg",
      },
      {
        title: "video game BANGERS 📀✮⋆",
        url: "https://www.youtube.com/watch?v=CxDR3u5PsFE",
        thumbnail: "https://img.youtube.com/vi/CxDR3u5PsFE/mqdefault.jpg",
      },
      {
        title: "video game BANGERS pt. 2 🎧✮⋆",
        url: "https://www.youtube.com/watch?v=7B2l7M0Q7Uo",
        thumbnail: "https://img.youtube.com/vi/7B2l7M0Q7Uo/mqdefault.jpg",
      },
      {
        title: "video game BANGERS pt. 3 🎧 ✮⋆ MEGAMIX ⋆✮",
        url: "https://www.youtube.com/watch?v=YRz7WMZ7uqo",
        thumbnail: "https://img.youtube.com/vi/YRz7WMZ7uqo/mqdefault.jpg",
      },
      {
        title: "video game BANGERS pt. 4 🎧✮⋆",
        url: "https://www.youtube.com/watch?v=a-alzjXw37o",
        thumbnail: "https://img.youtube.com/vi/a-alzjXw37o/mqdefault.jpg",
      },
      {
        title: "video game BANGERS V ✮ vol. 1",
        url: "https://www.youtube.com/watch?v=ZkxvQPlJ_Xg",
        thumbnail: "https://img.youtube.com/vi/ZkxvQPlJ_Xg/mqdefault.jpg",
      },
      {
        title: "video game BANGERS V ✮ vol. 2",
        url: "https://www.youtube.com/watch?v=H0QWv_bdVWs",
        thumbnail: "https://img.youtube.com/vi/H0QWv_bdVWs/mqdefault.jpg",
      },
      {
        title: "video game BANGERS V ✮ vol. 3 ✮⋆ MEGAMIX ⋆✮",
        url: "https://www.youtube.com/watch?v=yRKAcYptAvk",
        thumbnail: "https://img.youtube.com/vi/yRKAcYptAvk/mqdefault.jpg",
      },
      {
        title: "video game BANGERS pt. 6 🎧✮⋆",
        url: "https://www.youtube.com/watch?v=uR3HgHNtuVM",
        thumbnail: "https://img.youtube.com/vi/uR3HgHNtuVM/mqdefault.jpg",
      },
      {
        title: "SPOOKY jams 🎃 - halloween vgm",
        url: "https://www.youtube.com/watch?v=JD_wD9fPOYU",
        thumbnail: "https://img.youtube.com/vi/JD_wD9fPOYU/mqdefault.jpg",
      },
      {
        title: "SPOOKY jams VOL. 2 🍭 halloween vgm",
        url: "https://www.youtube.com/watch?v=3BOXuWpfRoc",
        thumbnail: "https://img.youtube.com/vi/3BOXuWpfRoc/mqdefault.jpg",
      },
      {
        title: "cool, cool vibes ❄️~ video game music for winter",
        url: "https://www.youtube.com/watch?v=oDDAkRgAIVo",
        thumbnail: "https://img.youtube.com/vi/oDDAkRgAIVo/mqdefault.jpg",
      },
      {
        title: "hi, i'm cozy! 🎄🎁🦌 - christmas & holiday vgm",
        url: "https://www.youtube.com/watch?v=rt9e5id3Il4",
        thumbnail: "https://img.youtube.com/vi/rt9e5id3Il4/mqdefault.jpg",
      },
      {
        title: "chill café - video game music to relax/study/vibe ☕",
        url: "https://www.youtube.com/watch?v=yeY6KYjjh_0",
        thumbnail: "https://img.youtube.com/vi/yeY6KYjjh_0/mqdefault.jpg",
      },
      {
        title: "★ wavy beats to surf on ~ video game dnb mix ★",
        url: "https://www.youtube.com/watch?v=Ln6A9ZEiabw",
        thumbnail: "https://img.youtube.com/vi/Ln6A9ZEiabw/mqdefault.jpg",
      },
      {
        title: "FUNKY GAME JAMS vol. 1",
        url: "https://www.youtube.com/watch?v=NpOxjlDoszQ",
        thumbnail: "https://img.youtube.com/vi/NpOxjlDoszQ/mqdefault.jpg",
      },
      {
        title: "FUNKY GAME JAMS vol. 2",
        url: "https://www.youtube.com/watch?v=A1iacGpKk_Y",
        thumbnail: "https://img.youtube.com/vi/A1iacGpKk_Y/mqdefault.jpg",
      },
      {
        title: "FUNKY GAME JAMS vol. 3",
        url: "https://www.youtube.com/watch?v=utC4p4uHtVQ",
        thumbnail: "https://img.youtube.com/vi/utC4p4uHtVQ/mqdefault.jpg",
      },
      {
        title: "FUNKY GAME JAMS vol. 4",
        url: "https://www.youtube.com/watch?v=_o9OS4kWPaE",
        thumbnail: "https://img.youtube.com/vi/_o9OS4kWPaE/mqdefault.jpg",
      },
      {
        title: "FUNKY GAME JAMS vol. 5 ~ MEGAMIX ~",
        url: "https://www.youtube.com/watch?v=asB34l2Detc",
        thumbnail: "https://img.youtube.com/vi/asB34l2Detc/mqdefault.jpg",
      },
      {
        title: "short & sweet melodies ~ relaxing video game music",
        url: "https://www.youtube.com/watch?v=Kw3yWBxYTpY",
        thumbnail: "https://img.youtube.com/vi/Kw3yWBxYTpY/mqdefault.jpg",
      },
      {
        title: "electro café - frutiger aero mix to relax/study/vibe ✨",
        url: "https://www.youtube.com/watch?v=lqcahfmV6K8",
        thumbnail: "https://img.youtube.com/vi/lqcahfmV6K8/mqdefault.jpg",
      },
      {
        title: "HOT hot summer! ☀️ tropical/chill music mix",
        url: "https://www.youtube.com/watch?v=VWvpmT634I0",
        thumbnail: "https://img.youtube.com/vi/VWvpmT634I0/mqdefault.jpg",
      },
      {
        title: "SPOOKY JAMS ₊⁺⋆☾ MEGA-GHOUL MIX",
        url: "https://www.youtube.com/watch?v=Ha3Ju713eCA",
        thumbnail: "https://img.youtube.com/vi/Ha3Ju713eCA/mqdefault.jpg",
      },
      {
        title: "silly cat café 🐱 playlist to relax/study/vibe",
        url: "https://www.youtube.com/watch?v=A27sq-P6Yxs",
        thumbnail: "https://img.youtube.com/vi/A27sq-P6Yxs/mqdefault.jpg",
      },
      {
        title: "SUPER PERCUSSION 64 🥁 Vol. 1",
        url: "https://www.youtube.com/watch?v=kTFILdhXja4",
        thumbnail: "https://img.youtube.com/vi/kTFILdhXja4/mqdefault.jpg",
      },
      {
        title: "Sonic SUNRISE 🌺🌴 (VAPORWAVE, Barber Beats, Downtempo)",
        url: "https://www.youtube.com/watch?v=EufwZ_DdDDw",
        thumbnail: "https://img.youtube.com/vi/EufwZ_DdDDw/mqdefault.jpg",
      },
      {
        title: "VOCAL video game BANGERS 🎧 ✮⋆",
        url: "https://www.youtube.com/watch?v=KtMuQLBhy8I",
        thumbnail: "https://img.youtube.com/vi/KtMuQLBhy8I/mqdefault.jpg",
      },
      {
        title: "lofi & BASS 🤍 beats to relax/study/vibe",
        url: "https://www.youtube.com/watch?v=yVM070Zs9s8",
        thumbnail: "https://img.youtube.com/vi/yVM070Zs9s8/mqdefault.jpg",
      },
      {
        title: "VOCAL GAME JAMS 🎤💕 vol. 1",
        url: "https://www.youtube.com/watch?v=Oj8b7iBMhO0",
        thumbnail: "https://img.youtube.com/vi/Oj8b7iBMhO0/mqdefault.jpg",
      },
      {
        title: "🌎 FEEL THE COSMOS! 🌟 galactic game music mix",
        url: "https://www.youtube.com/watch?v=zTfdQfQi-lE",
        thumbnail: "https://img.youtube.com/vi/zTfdQfQi-lE/mqdefault.jpg",
      },
    ],
    Airedale: [
      {
        title: "Video Game Music To Jam To While Doing Your Taxes",
        url: "https://www.youtube.com/watch?v=bg5PTc7ylCs",
        thumbnail: "https://img.youtube.com/vi/bg5PTc7ylCs/mqdefault.jpg",
      },
      {
        title: "Video Game Music For Little Guys With Little Brains",
        url: "https://www.youtube.com/watch?v=w_9XZe4HQJY",
        thumbnail: "https://img.youtube.com/vi/w_9XZe4HQJY/mqdefault.jpg",
      },
      {
        title: "Video Game Music For Little Guys With Little Brains Vol 2",
        url: "https://www.youtube.com/watch?v=5a50HHg-t-g",
        thumbnail: "https://img.youtube.com/vi/5a50HHg-t-g/mqdefault.jpg",
      },
      {
        title: "Chill Video Game Music For Taking A Nap",
        url: "https://www.youtube.com/watch?v=A9eO3haCJ0g",
        thumbnail: "https://img.youtube.com/vi/A9eO3haCJ0g/mqdefault.jpg",
      },
      {
        title: "Y2K Aesthetic Video Game Songs To Vibe To",
        url: "https://www.youtube.com/watch?v=-fPHoGko8Rw",
        thumbnail: "https://img.youtube.com/vi/-fPHoGko8Rw/mqdefault.jpg",
      },
      {
        title: "Relaxing Spring Video Game Music",
        url: "https://www.youtube.com/watch?v=clS250II8GY",
        thumbnail: "https://img.youtube.com/vi/clS250II8GY/mqdefault.jpg",
      },
      {
        title: "Video Game Songs To Jam While In Your Wizard Tower",
        url: "https://www.youtube.com/watch?v=tKs95m88WLE",
        thumbnail: "https://img.youtube.com/vi/tKs95m88WLE/mqdefault.jpg",
      },
      {
        title: "Video Game Songs I Think Bugs Would Like",
        url: "https://www.youtube.com/watch?v=A-P6vHKNy6E",
        thumbnail: "https://img.youtube.com/vi/A-P6vHKNy6E/mqdefault.jpg",
      },
      {
        title: "Relaxing Underwater Video Game Themes",
        url: "https://www.youtube.com/watch?v=2K0xEI2sgPM",
        thumbnail: "https://img.youtube.com/vi/2K0xEI2sgPM/mqdefault.jpg",
      },
      {
        title: "Video Game Music to Jam to During Your Grave Shift",
        url: "https://www.youtube.com/watch?v=BfRjKnrbczg",
        thumbnail: "https://img.youtube.com/vi/BfRjKnrbczg/mqdefault.jpg",
      },
      {
        title: "Video Game Elevator Music for Spacing Off",
        url: "https://www.youtube.com/watch?v=JrK2mU3VVz0",
        thumbnail: "https://img.youtube.com/vi/JrK2mU3VVz0/mqdefault.jpg",
      },
      {
        title: "Video Game Music You Could Get Away With Playing Over the Coffee Shop Speakers:",
        url: "https://www.youtube.com/watch?v=l97GOzZItSY",
        thumbnail: "https://img.youtube.com/vi/l97GOzZItSY/mqdefault.jpg",
      },
      {
        title: "Video Game Music to Dissociate To",
        url: "https://www.youtube.com/watch?v=4AYmnzxR13M",
        thumbnail: "https://img.youtube.com/vi/4AYmnzxR13M/mqdefault.jpg",
      },
      {
        title: "Mysterious Video Game Music Mix",
        url: "https://www.youtube.com/watch?v=VVo0sBrhdCU",
        thumbnail: "https://img.youtube.com/vi/VVo0sBrhdCU/mqdefault.jpg",
      },
      {
        title: "Calm/Chill Video Game Music For SLEEPING and NOT WATCHING THE NEWS TONIGHT",
        url: "https://www.youtube.com/watch?v=Ywlumzcs5fc",
        thumbnail: "https://img.youtube.com/vi/Ywlumzcs5fc/mqdefault.jpg",
      },
      {
        title: "Video Game Music With A Peaceful Sleepy Vibe",
        url: "https://www.youtube.com/watch?v=0u1vS-dk9QU",
        thumbnail: "https://img.youtube.com/vi/0u1vS-dk9QU/mqdefault.jpg",
      },
      {
        title: "Save Your Game? An Internet Check Point.",
        url: "https://www.youtube.com/watch?v=_i-mlxUJjCE",
        thumbnail: "https://img.youtube.com/vi/_i-mlxUJjCE/mqdefault.jpg",
      },
      {
        title: "Energizing Video Game Music To Do Your Chores To",
        url: "https://www.youtube.com/watch?v=vvsAyFBqRzM",
        thumbnail: "https://img.youtube.com/vi/vvsAyFBqRzM/mqdefault.jpg",
      },
      {
        title: "Video Game Music For Causing Mischief And Mayhem",
        url: "https://www.youtube.com/watch?v=FjswEfkBJQw",
        thumbnail: "https://img.youtube.com/vi/FjswEfkBJQw/mqdefault.jpg",
      },
      {
        title: "Video Game Music For Commiting Tax Evasion",
        url: "https://www.youtube.com/watch?v=anc1lAmuOpA",
        thumbnail: "https://img.youtube.com/vi/anc1lAmuOpA/mqdefault.jpg",
      },
      {
        title: "Video Game Music For PUMPING IRON and GETTING SWOL",
        url: "https://www.youtube.com/watch?v=sAgo16ZonOc",
        thumbnail: "https://img.youtube.com/vi/sAgo16ZonOc/mqdefault.jpg",
      },
      {
        title: "Video Game Hip Hop Mix",
        url: "https://www.youtube.com/watch?v=34KbnrevTJM",
        thumbnail: "https://img.youtube.com/vi/34KbnrevTJM/mqdefault.jpg",
      },
      {
        title: "Cave Themes for Spelunking",
        url: "https://www.youtube.com/watch?v=aiZOLoWQ0AI",
        thumbnail: "https://img.youtube.com/vi/aiZOLoWQ0AI/mqdefault.jpg",
      },
      {
        title: "Glorpy Video Game Music for Getting Abducted By Aliens",
        url: "https://www.youtube.com/watch?v=ruA5bCriVkk",
        thumbnail: "https://img.youtube.com/vi/ruA5bCriVkk/mqdefault.jpg",
      },
      {
        title: "Boss Music To Play While Working Fast Food/Retail/Customer Service Jobs",
        url: "https://www.youtube.com/watch?v=sLSC1QAjw_I",
        thumbnail: "https://img.youtube.com/vi/sLSC1QAjw_I/mqdefault.jpg",
      },
      {
        title: "Summer Video Game Music for Experiencing This Year’s Record Breaking Temperatures",
        url: "https://www.youtube.com/watch?v=bBwsoD_I-Z4",
        thumbnail: "https://img.youtube.com/vi/bBwsoD_I-Z4/mqdefault.jpg",
      },
      {
        title: "Deep Forest Video Game Themes For Eating Random Berries and Nuts",
        url: "https://www.youtube.com/watch?v=hRmkLX4dXvE",
        thumbnail: "https://img.youtube.com/vi/hRmkLX4dXvE/mqdefault.jpg",
      },
      {
        title: "Video Game Music To Play While You Gamble Away Your Life Savings",
        url: "https://www.youtube.com/watch?v=MZly3lJF9MM",
        thumbnail: "https://img.youtube.com/vi/MZly3lJF9MM/mqdefault.jpg",
      },
      {
        title: "Road Trip Video Game Music For When Your Friend Makes The Mistake Of Passing You The Aux",
        url: "https://www.youtube.com/watch?v=vzOWjKYVry8",
        thumbnail: "https://img.youtube.com/vi/vzOWjKYVry8/mqdefault.jpg",
      },
      {
        title: "Video Game Music For Level 1 Adventurers Starting Their Journey",
        url: "https://www.youtube.com/watch?v=n9482lvcOIw",
        thumbnail: "https://img.youtube.com/vi/n9482lvcOIw/mqdefault.jpg",
      },
      {
        title: "No Theme Just Weird Video Game Music",
        url: "https://www.youtube.com/watch?v=PJP5Aph9DkE",
        thumbnail: "https://img.youtube.com/vi/PJP5Aph9DkE/mqdefault.jpg",
      },
      {
        title: "Songs To Listen To While You Escape To The One Place That Hasn't Been Corrupted by Capitalism",
        url: "https://www.youtube.com/watch?v=LH40vJJPh-o",
        thumbnail: "https://img.youtube.com/vi/LH40vJJPh-o/mqdefault.jpg",
      },
      {
        title: "Silly Spooky Halloween Jams",
        url: "https://www.youtube.com/watch?v=I_2q3mkqaCI",
        thumbnail: "https://img.youtube.com/vi/I_2q3mkqaCI/mqdefault.jpg",
      },
      {
        title: "Shop Themes For Selling Your Wares",
        url: "https://www.youtube.com/watch?v=HV6sYbGqCxI",
        thumbnail: "https://img.youtube.com/vi/HV6sYbGqCxI/mqdefault.jpg",
      },
      {
        title: "Video Game Music For Experiencing The Horrors",
        url: "https://www.youtube.com/watch?v=XcCpcGbntm8",
        thumbnail: "https://img.youtube.com/vi/XcCpcGbntm8/mqdefault.jpg",
      },
      {
        title: "Video Game Music For Encountering A Secret, Magical Nook",
        url: "https://www.youtube.com/watch?v=9zJXGTkNRrI",
        thumbnail: "https://img.youtube.com/vi/9zJXGTkNRrI/mqdefault.jpg",
      },
      {
        title: "Video Game Music For Experiencing the Gift of Giving",
        url: "https://www.youtube.com/watch?v=Y3qxWJSTKUQ",
        thumbnail: "https://img.youtube.com/vi/Y3qxWJSTKUQ/mqdefault.jpg",
      },
      {
        title: "Night Themes For Pondering The Universe And Your Smallness In It",
        url: "https://www.youtube.com/watch?v=zZKrj_57H2U",
        thumbnail: "https://img.youtube.com/vi/zZKrj_57H2U/mqdefault.jpg",
      },
      {
        title: "Video Game Music For Laboring In the Mines and Contracting Black Lung",
        url: "https://www.youtube.com/watch?v=NPDE6glFFQc",
        thumbnail: "https://img.youtube.com/vi/NPDE6glFFQc/mqdefault.jpg",
      },
      {
        title: "Video Game Music For Solving a Murder Mystery (You're the Murderer)",
        url: "https://www.youtube.com/watch?v=P2z8pSwSQ60",
        thumbnail: "https://img.youtube.com/vi/P2z8pSwSQ60/mqdefault.jpg",
      },
      {
        title: "More Video Game Jams for Doing Your Taxes",
        url: "https://www.youtube.com/watch?v=4HfL_EnZhJg",
        thumbnail: "https://img.youtube.com/vi/4HfL_EnZhJg/mqdefault.jpg",
      },
      {
        title: "Video Game Music For Coping Through The Time Warp",
        url: "https://www.youtube.com/watch?v=yCYJGm7WaEc",
        thumbnail: "https://img.youtube.com/vi/yCYJGm7WaEc/mqdefault.jpg",
      },
      {
        title: "Goofy Little Video Game Songs To Listen To While Working Your 40 Hour a Week Desk Job",
        url: "https://www.youtube.com/watch?v=6-HSBWCXPis",
        thumbnail: "https://img.youtube.com/vi/6-HSBWCXPis/mqdefault.jpg",
      },
      {
        title: "Video Game Music for Setting Things That Don’t Belong To You On Fire",
        url: "https://www.youtube.com/watch?v=l6HzzuZCJZg",
        thumbnail: "https://img.youtube.com/vi/l6HzzuZCJZg/mqdefault.jpg",
      },
      {
        title: "Video Game Music For Going on a Grand Adventure",
        url: "https://www.youtube.com/watch?v=vsy0-NUFpDo",
        thumbnail: "https://img.youtube.com/vi/vsy0-NUFpDo/mqdefault.jpg",
      },
      {
        title: "Video Game Music For Driving Fast In A Cool Car",
        url: "https://www.youtube.com/watch?v=8Es51s0KvEM",
        thumbnail: "https://img.youtube.com/vi/8Es51s0KvEM/mqdefault.jpg",
      },
      {
        title: "Video Game Music For Committing Tax Evasion (Again)",
        url: "https://www.youtube.com/watch?v=0I7V4FQNVQw",
        thumbnail: "https://img.youtube.com/vi/0I7V4FQNVQw/mqdefault.jpg",
      },
      {
        title: "Video Game Music To Fail Calculus To",
        url: "https://www.youtube.com/watch?v=6UBFlwOPOb0",
        thumbnail: "https://img.youtube.com/vi/6UBFlwOPOb0/mqdefault.jpg",
      },
      {
        title: "Video Game Music To Fail Calculus To",
        url: "https://www.youtube.com/watch?v=R0bftZCOkp4",
        thumbnail: "https://img.youtube.com/vi/R0bftZCOkp4/mqdefault.jpg",
      },
      {
        title: "Video Game Songs For Surfing The Web on Your Family's Windows XP Desktop",
        url: "https://www.youtube.com/watch?v=nG8yZs3BTh4",
        thumbnail: "https://img.youtube.com/vi/nG8yZs3BTh4/mqdefault.jpg",
      },
      {
        title: "Video Game Music Gaylist To Wave Your Flag To",
        url: "https://www.youtube.com/watch?v=DOnIdY3WObk",
        thumbnail: "https://img.youtube.com/vi/DOnIdY3WObk/mqdefault.jpg",
      },
      {
        title: "Video Game Music For Lording Over The Serfs",
        url: "https://www.youtube.com/watch?v=xhoisoeD3_Y",
        thumbnail: "https://img.youtube.com/vi/xhoisoeD3_Y/mqdefault.jpg",
      },
      {
        title: "Beachy Game Music To Get A Third Degree Sunburn To",
        url: "https://www.youtube.com/watch?v=Fkz7FTiWALQ",
        thumbnail: "https://img.youtube.com/vi/Fkz7FTiWALQ/mqdefault.jpg",
      },
      {
        title: "A Big Video Game Music Playlist For Getting Up To Some Big Mischief",
        url: "https://www.youtube.com/watch?v=ZdLWHkKxDQU",
        thumbnail: "https://img.youtube.com/vi/ZdLWHkKxDQU/mqdefault.jpg",
      },
      {
        title: "Desert Themes For Crawling Through The Sand Until You Become a Thin Piece of Jerky",
        url: "https://www.youtube.com/watch?v=iHtrugOMY7w",
        thumbnail: "https://img.youtube.com/vi/iHtrugOMY7w/mqdefault.jpg",
      },
      {
        title: "Video Game Music For Exploring A Dungeon Containing an Ancient Evil",
        url: "https://www.youtube.com/watch?v=6noFGMbeqTY",
        thumbnail: "https://img.youtube.com/vi/6noFGMbeqTY/mqdefault.jpg",
      },
      {
        title: "Pause Menu Themes to Stop and Consider Your Life Choices To",
        url: "https://www.youtube.com/watch?v=znuQwhpqsz4",
        thumbnail: "https://img.youtube.com/vi/znuQwhpqsz4/mqdefault.jpg",
      },
    ],
    Chill: [
      {
        title: "video game music for your summer break",
        url: "https://www.youtube.com/watch?v=end4JNSRRxs",
        thumbnail: "https://img.youtube.com/vi/end4JNSRRxs/mqdefault.jpg",
      },
      {
        title: "Study With Phoenix! || Ace Attorney Music Playlist to Chill/Relax/Work",
        url: "https://www.youtube.com/watch?v=T2EL26WmgoE",
        thumbnail: "https://img.youtube.com/vi/T2EL26WmgoE/mqdefault.jpg",
      },
      {
        title: "Chilltendo",
        url: "https://www.youtube.com/watch?v=2ed5QQ7exzw",
        thumbnail: "https://img.youtube.com/vi/2ed5QQ7exzw/mqdefault.jpg",
      },
      {
        title: "Mario & Chill",
        url: "https://www.youtube.com/watch?v=p9a-AQQJ8Aw",
        thumbnail: "https://img.youtube.com/vi/p9a-AQQJ8Aw/mqdefault.jpg",
      },
      {
        title: "Zelda & Chill",
        url: "https://www.youtube.com/watch?v=GdzrrWA8e7A",
        thumbnail: "https://img.youtube.com/vi/GdzrrWA8e7A/mqdefault.jpg",
      },
      {
        title: "cyber light music mix ☆",
        url: "https://www.youtube.com/watch?v=kXTgpQM62_0",
        thumbnail: "https://img.youtube.com/vi/kXTgpQM62_0/mqdefault.jpg",
      },
      {
        title: "cyber gaming music mix ✦",
        url: "https://www.youtube.com/watch?v=jfs0Naqvbv4",
        thumbnail: "https://img.youtube.com/vi/jfs0Naqvbv4/mqdefault.jpg",
      },
      {
        title: "Chill Retro Video Game Music To Relax, Vibe, and Study To",
        url: "https://www.youtube.com/watch?v=C4OKWq2X_aM",
        thumbnail: "https://img.youtube.com/vi/C4OKWq2X_aM/mqdefault.jpg",
      },
      {
        title: "Relaxing Retro Video Game Music To Sleep and Study To",
        url: "https://www.youtube.com/watch?v=cybfZkyJsWg",
        thumbnail: "https://img.youtube.com/vi/cybfZkyJsWg/mqdefault.jpg",
      },
      {
        title: "Even More Retro Video Game Music To Relax, Vibe, and Study To",
        url: "https://www.youtube.com/watch?v=5SgFbMHFc00",
        thumbnail: "https://img.youtube.com/vi/5SgFbMHFc00/mqdefault.jpg",
      },
      {
        title: "Chill/Relaxing PSX Playsation 1 Music To Sleep , Relax, Vibe, and Study To",
        url: "https://www.youtube.com/watch?v=alAs4Amk0Vs",
        thumbnail: "https://img.youtube.com/vi/alAs4Amk0Vs/mqdefault.jpg",
      },
      {
        title: "2 Hours of Relaxing/Chill Video Game Music To Sleep, Study, and Relax to (SNES and SEGA Genesis)",
        url: "https://www.youtube.com/watch?v=7knD7AeS0DA",
        thumbnail: "https://img.youtube.com/vi/7knD7AeS0DA/mqdefault.jpg",
      },
      {
        title: "on hold | chill video game elevator music",
        url: "https://www.youtube.com/watch?v=DPu22ik86Fo",
        thumbnail: "https://img.youtube.com/vi/DPu22ik86Fo/mqdefault.jpg",
      },
      {
        title: "next floor | more chill video game elevator music",
        url: "https://www.youtube.com/watch?v=cxFQ0pYDbLw",
        thumbnail: "https://img.youtube.com/vi/cxFQ0pYDbLw/mqdefault.jpg",
      },
      {
        title: "gone fishing | relaxing video game music playlist",
        url: "https://www.youtube.com/watch?v=kFZLeYtvARc",
        thumbnail: "https://img.youtube.com/vi/kFZLeYtvARc/mqdefault.jpg",
      },
      {
        title: "catch of the day | relaxing video game fishing music",
        url: "https://www.youtube.com/watch?v=jNPlWct6AIg",
        thumbnail: "https://img.youtube.com/vi/jNPlWct6AIg/mqdefault.jpg",
      },
      {
        title: "where has the time gone | a nostalgia playlist for me",
        url: "https://www.youtube.com/watch?v=uFBYgZp2Tro",
        thumbnail: "https://img.youtube.com/vi/uFBYgZp2Tro/mqdefault.jpg",
      },
      {
        title: "3 hours of chill mii tunes",
        url: "https://www.youtube.com/watch?v=TmgqHnb5oHo",
        thumbnail: "https://img.youtube.com/vi/TmgqHnb5oHo/mqdefault.jpg",
      },
      {
        title: "Lucid Dreams - Relaxing Video Game Music",
        url: "https://www.youtube.com/watch?v=m5qgOUqrJvs",
        thumbnail: "https://img.youtube.com/vi/m5qgOUqrJvs/mqdefault.jpg",
      },
      {
        title: "Comfy Café - Relaxing Video Game Music",
        url: "https://www.youtube.com/watch?v=HTGRLgioUAA",
        thumbnail: "https://img.youtube.com/vi/HTGRLgioUAA/mqdefault.jpg",
      },
      {
        title: "comfort video game mix ☾",
        url: "https://www.youtube.com/watch?v=zVEIpCpD7hM",
        thumbnail: "https://img.youtube.com/vi/zVEIpCpD7hM/mqdefault.jpg",
      },
      {
        title: "technozen music mix ꩜",
        url: "https://www.youtube.com/watch?v=dKZNRXMY_v0",
        thumbnail: "https://img.youtube.com/vi/dKZNRXMY_v0/mqdefault.jpg",
      },
      {
        title: "valentines playlist to make you feel loved ♡",
        url: "https://www.youtube.com/watch?v=p39H1ThB4xc",
        thumbnail: "https://img.youtube.com/vi/p39H1ThB4xc/mqdefault.jpg",
      },
      {
        title: "video game music to float away to",
        url: "https://www.youtube.com/watch?v=6BBgKWJRx1o",
        thumbnail: "https://img.youtube.com/vi/6BBgKWJRx1o/mqdefault.jpg",
      },
    ],
    Jazz: [
      {
        title: "Racing Game Jazz Fusion (& Funk)",
        url: "https://www.youtube.com/watch?v=1U6X1pK-Pfk",
        thumbnail: "https://img.youtube.com/vi/1U6X1pK-Pfk/mqdefault.jpg",
      },
      {
        title: "Video Game Crime Jazz",
        url: "https://www.youtube.com/watch?v=llBRygYmUCI",
        thumbnail: "https://img.youtube.com/vi/llBRygYmUCI/mqdefault.jpg",
      },
      {
        title: "More Video Game Crime Jazz!",
        url: "https://www.youtube.com/watch?v=EdFaUNE17Fg",
        thumbnail: "https://img.youtube.com/vi/EdFaUNE17Fg/mqdefault.jpg",
      },
      {
        title: "Video Game Lounge Jazz",
        url: "https://www.youtube.com/watch?v=xLHFv2Uhg04",
        thumbnail: "https://img.youtube.com/vi/xLHFv2Uhg04/mqdefault.jpg",
      },
      {
        title: "The jazziest and funkiest Nintendo music",
        url: "https://www.youtube.com/watch?v=m10Z_bKIXQ8",
        thumbnail: "https://img.youtube.com/vi/m10Z_bKIXQ8/mqdefault.jpg",
      },
      {
        title: "𝐧𝐢𝐧𝐭𝐞𝐧𝐝𝐨 𝐣𝐚𝐳𝐳 𝐜𝐥𝐮𝐛",
        url: "https://www.youtube.com/watch?v=diCwNnv7N6Y",
        thumbnail: "https://img.youtube.com/vi/diCwNnv7N6Y/mqdefault.jpg",
      },
      {
        title: "Phoenix Wright Jazz ~ Gyakuten Meets Jazz Soul (Full Album)",
        url: "https://www.youtube.com/watch?v=kXEeyajJvwY",
        thumbnail: "https://img.youtube.com/vi/kXEeyajJvwY/mqdefault.jpg",
      },
      {
        title: "Jazzy Jingles 🎷 ~ Smooth and Jazzy Nintendo Music",
        url: "https://www.youtube.com/watch?v=lq-fRlh8kv4",
        thumbnail: "https://img.youtube.com/vi/lq-fRlh8kv4/mqdefault.jpg",
      },
      {
        title: "Nintendo Jazz/Funk Covers Compilation",
        url: "https://www.youtube.com/watch?v=ti-Qmg91VK0",
        thumbnail: "https://img.youtube.com/vi/ti-Qmg91VK0/mqdefault.jpg",
      },
      {
        title: "Jazz/Funk Nintendo Covers Compilation 2",
        url: "https://www.youtube.com/watch?v=FjrLex11htA",
        thumbnail: "https://img.youtube.com/vi/FjrLex11htA/mqdefault.jpg",
      },
      {
        title: "Big Band Nintendo Jazz Music Playlist",
        url: "https://www.youtube.com/watch?v=CpR-te5qPiU",
        thumbnail: "https://img.youtube.com/vi/CpR-te5qPiU/mqdefault.jpg",
      },
      {
        title: "【JAZZ】SQUARE ENIX JAZZ Mix 🎷 Mixed by DJ JIN (RHYMESTER)【Game Music】",
        url: "https://www.youtube.com/watch?v=RtTe7g6QRmE",
        thumbnail: "https://img.youtube.com/vi/RtTe7g6QRmE/mqdefault.jpg",
      },
      {
        title: "jazz video game study music playlist",
        url: "https://www.youtube.com/watch?v=ZW-9TPnE170",
        thumbnail: "https://img.youtube.com/vi/ZW-9TPnE170/mqdefault.jpg",
      },
      {
        title: "Smooth Jazz Nintendo Music Playlist",
        url: "https://www.youtube.com/watch?v=iN77CPcZds0",
        thumbnail: "https://img.youtube.com/vi/iN77CPcZds0/mqdefault.jpg",
      },
      {
        title: "Relaxing Nintendo Jazz Music",
        url: "https://www.youtube.com/watch?v=VJ-qu7OPyQc",
        thumbnail: "https://img.youtube.com/vi/VJ-qu7OPyQc/mqdefault.jpg",
      },
      {
        title: "Wario's Casino - Nintendo Casino Music (Mario Jazz)",
        url: "https://www.youtube.com/watch?v=x14bF5M1alI",
        thumbnail: "https://img.youtube.com/vi/x14bF5M1alI/mqdefault.jpg",
      },
      {
        title: "Jazzy Video Game Music 🎷(Part 1)",
        url: "https://www.youtube.com/watch?v=PeAV4SiMAPc",
        thumbnail: "https://img.youtube.com/vi/PeAV4SiMAPc/mqdefault.jpg",
      },
      {
        title: "Jazzy Video Game Music 🎹 (Part 2)",
        url: "https://www.youtube.com/watch?v=XCrohK4Xvmc",
        thumbnail: "https://img.youtube.com/vi/XCrohK4Xvmc/mqdefault.jpg",
      },
      {
        title: "35 Minutes of Nintendo Jazz",
        url: "https://www.youtube.com/watch?v=Fp9B8Dp01Ho",
        thumbnail: "https://img.youtube.com/vi/Fp9B8Dp01Ho/mqdefault.jpg",
      },
      {
        title: "90 Minutes of Nintendo Jazz Music to vibe 🎷",
        url: "https://www.youtube.com/watch?v=m1wBzMWn-4Y",
        thumbnail: "https://img.youtube.com/vi/m1wBzMWn-4Y/mqdefault.jpg",
      },
    ],
    Jam: [
      {
        title: "3 hours of video games HARDEST BANGERS | Playlist Yoonns",
        url: "https://www.youtube.com/watch?v=bcf8QXxYZnI",
        thumbnail: "https://img.youtube.com/vi/bcf8QXxYZnI/mqdefault.jpg",
      },
      {
        title: "1 Hour of Unexpected Nintendo Bops",
        url: "https://www.youtube.com/watch?v=nPw2T9EvFIk",
        thumbnail: "https://img.youtube.com/vi/nPw2T9EvFIk/mqdefault.jpg",
      },
      {
        title: "Certified Nintendo Bangers",
        url: "https://www.youtube.com/watch?v=XaWPRdDfjSo",
        thumbnail: "https://img.youtube.com/vi/XaWPRdDfjSo/mqdefault.jpg",
      },
      {
        title: "Over 2 Hours of the Best Fighting Game Music - Fighting Jams",
        url: "https://www.youtube.com/watch?v=0qdWyLdyalI",
        thumbnail: "https://img.youtube.com/vi/0qdWyLdyalI/mqdefault.jpg",
      },
      {
        title: "Upbeat Retro Gaming Music To Game, Vibe, and Study To - UPBEAT BANGERS",
        url: "https://www.youtube.com/watch?v=WlLMSMspssU",
        thumbnail: "https://img.youtube.com/vi/WlLMSMspssU/mqdefault.jpg",
      },
      {
        title: "Over 3 Hours of the Best Modern Fighting Game Music - Modern Exhibition - Music Mix",
        url: "https://www.youtube.com/watch?v=Ibyv-saNEjY",
        thumbnail: "https://img.youtube.com/vi/Ibyv-saNEjY/mqdefault.jpg",
      },
      {
        title: "Funky Nintendo Music Playlist",
        url: "https://www.youtube.com/watch?v=SZ0vHYfxkUY",
        thumbnail: "https://img.youtube.com/vi/SZ0vHYfxkUY/mqdefault.jpg",
      },
      {
        title: "ZELDA FUNK ▸ Hyrule Castle (Joshua Morse Remix)",
        url: "https://www.youtube.com/watch?v=3CbJNKYe2nA",
        thumbnail: "https://img.youtube.com/vi/3CbJNKYe2nA/mqdefault.jpg",
      },
      {
        title: "2h30 of BASS Through VGMs",
        url: "https://www.youtube.com/watch?v=raSWy3RiiKw",
        thumbnail: "https://img.youtube.com/vi/raSWy3RiiKw/mqdefault.jpg",
      },
      {
        title: "2h25 of *more* BASS Through VGMs",
        url: "https://www.youtube.com/watch?v=NGLhfw1rnyE",
        thumbnail: "https://img.youtube.com/vi/NGLhfw1rnyE/mqdefault.jpg",
      },
      {
        title: "2h20 of *even more* BASS Through VGMs",
        url: "https://www.youtube.com/watch?v=uCSFUwoWQH8",
        thumbnail: "https://img.youtube.com/vi/uCSFUwoWQH8/mqdefault.jpg",
      },
      {
        title: "2h30 of Jamming Through VGMs",
        url: "https://youtu.be/MEj_hROnLAo",
        thumbnail: "https://img.youtube.com/vi/MEj_hROnLAo/mqdefault.jpg",
      },
      {
        title: "2 Hours of Jamming Through VGMs (With More Trumpets)",
        url: "https://youtu.be/4W09K9Gxp5w",
        thumbnail: "https://img.youtube.com/vi/4W09K9Gxp5w/mqdefault.jpg",
      },
    ],
    Thèmes: [
      {
        title: "tropical summer video game music mix 🌴",
        url: "https://www.youtube.com/watch?v=SrnC63r2uxM",
        thumbnail: "https://img.youtube.com/vi/SrnC63r2uxM/mqdefault.jpg",
      },
      {
        title: "Racing Game Jazz Fusion (& Funk)",
        url: "https://www.youtube.com/watch?v=1U6X1pK-Pfk",
        thumbnail: "https://img.youtube.com/vi/1U6X1pK-Pfk/mqdefault.jpg",
      },
      {
        title: "6 HOURS of Springtime Video Game Music",
        url: "https://www.youtube.com/watch?v=sN_UfNVF1nI",
        thumbnail: "https://img.youtube.com/vi/sN_UfNVF1nI/mqdefault.jpg",
      },
      {
        title: "12 HOURS of My Favorite and Most Nostalgic Video Game Music",
        url: "https://www.youtube.com/watch?v=5MMJOuEkxRc",
        thumbnail: "https://img.youtube.com/vi/5MMJOuEkxRc/mqdefault.jpg",
      },
      {
        title: "LEGEND OF ZELDA • Creepy & Scary Music 🎃 | Tenpers",
        url: "https://www.youtube.com/watch?v=OGj1Qo6gWbw",
        thumbnail: "https://img.youtube.com/vi/OGj1Qo6gWbw/mqdefault.jpg",
      },
      {
        title: "2 Hours of Unused VGMs",
        url: "https://www.youtube.com/watch?v=OJ_tLju_0BM",
        thumbnail: "https://img.youtube.com/vi/OJ_tLju_0BM/mqdefault.jpg",
      },
      {
        title: "Action Female Lead Retro Video Game Music To Study, Game, and Vibe To",
        url: "https://www.youtube.com/watch?v=78Jai_Dqjsk",
        thumbnail: "https://img.youtube.com/vi/78Jai_Dqjsk/mqdefault.jpg",
      },
      {
        title: "tutorial | nostalgic video game music playlist",
        url: "https://www.youtube.com/watch?v=vIYnZ_FoIPQ",
        thumbnail: "https://img.youtube.com/vi/vIYnZ_FoIPQ/mqdefault.jpg",
      },
      {
        title: "let's cook | upbeat video game music playlist",
        url: "https://www.youtube.com/watch?v=K_I7ZhrRREg",
        thumbnail: "https://img.youtube.com/vi/K_I7ZhrRREg/mqdefault.jpg",
      },
      {
        title: "Beachy Video Game Bossa Nova",
        url: "https://www.youtube.com/watch?v=BNhgKiix_LU",
        thumbnail: "https://img.youtube.com/vi/BNhgKiix_LU/mqdefault.jpg",
      },
      {
        title: "Cozy Video Game Music 🎵 To play boardgames with friends 🎲",
        url: "https://www.youtube.com/watch?v=PHWK3FuMINY",
        thumbnail: "https://img.youtube.com/vi/PHWK3FuMINY/mqdefault.jpg",
      },
      {
        title: "Laidback Fighting Game Music for One Hour",
        url: "https://www.youtube.com/watch?v=_C9v6aQ6xG4",
        thumbnail: "https://img.youtube.com/vi/_C9v6aQ6xG4/mqdefault.jpg",
      },      
      {
        title: "3 Hours of Adventure Through VGMs",
        url: "https://youtu.be/jdWX3UeD5-k",
        thumbnail: "https://img.youtube.com/vi/jdWX3UeD5-k/mqdefault.jpg",
      },
      {
        title: "3 Hours of Adventure Through VGMs : Volume 2",
        url: "https://www.youtube.com/watch?v=Ai3tBIEgahg",
        thumbnail: "https://img.youtube.com/vi/Ai3tBIEgahg/mqdefault.jpg",
      },
      {
        title: "1h45 of VGMs you *probably* never heard before",
        url: "https://www.youtube.com/watch?v=Bi38blshBHc",
        thumbnail: "https://img.youtube.com/vi/Bi38blshBHc/mqdefault.jpg",
      },
      {
        title: "1h25 of VGMs you *probably* heard too much before",
        url: "https://www.youtube.com/watch?v=lRQETO4fTnk",
        thumbnail: "https://img.youtube.com/vi/lRQETO4fTnk/mqdefault.jpg",
      },
      {
        title: "Golf Game Jazz Fusion (& Funk)",
        url: "https://www.youtube.com/watch?v=BBvdzN1nvkY",
        thumbnail: "https://img.youtube.com/vi/BBvdzN1nvkY/mqdefault.jpg",
      },
      {
        title: "Video Game Psychedelia (Playlist)",
        url: "https://www.youtube.com/watch?v=5Cg7n5OCLzg",
        thumbnail: "https://img.youtube.com/vi/5Cg7n5OCLzg/mqdefault.jpg",
      },
      {
        title: "2 Hours of Video Game Music that goes HARD",
        url: "https://www.youtube.com/watch?v=tGC8fozE8_k",
        thumbnail: "https://img.youtube.com/vi/tGC8fozE8_k/mqdefault.jpg",
      },
      {
        title: "2 Hours of Video Game Music that goes even HARDER",
        url: "https://www.youtube.com/watch?v=g9wwdrKRm48",
        thumbnail: "https://img.youtube.com/vi/g9wwdrKRm48/mqdefault.jpg",
      },
      {
        title: "1h40 of Video Game Music to Drink a Little, Gamble a Lot (dans le jeu)",
        url: "https://www.youtube.com/watch?v=kLu_LUkxVT4",
        thumbnail: "https://img.youtube.com/vi/kLu_LUkxVT4/mqdefault.jpg",
      },
    ],
    Game: [
      {
        title: "2 Hours of Underrated Pokemon Music",
        url: "https://www.youtube.com/watch?v=N8mqLn_pIb4",
        thumbnail: "https://img.youtube.com/vi/N8mqLn_pIb4/mqdefault.jpg",
      },
      {
        title: "Best of Xenoblade Chronicles 2 OST",
        url: "https://www.youtube.com/watch?v=3yGcbQwx9JA",
        thumbnail: "https://img.youtube.com/vi/3yGcbQwx9JA/mqdefault.jpg",
      },
      {
        title: "Underrated Music from Xenoblade Chronicles Definitive Edition",
        url: "https://www.youtube.com/watch?v=f4jOj6ymksg",
        thumbnail: "https://img.youtube.com/vi/f4jOj6ymksg/mqdefault.jpg",
      },
      {
        title: "TRIBUTE TO LUIGI 🟢👻 Music Compilation",
        url: "https://www.youtube.com/watch?v=Aux3Z7jtRo0",
        thumbnail: "https://img.youtube.com/vi/Aux3Z7jtRo0/mqdefault.jpg",
      },
      {
        title: "Hype Mario Music (Up to Super Mario RPG)",
        url: "https://www.youtube.com/watch?v=TqCDucdAEII",
        thumbnail: "https://img.youtube.com/vi/TqCDucdAEII/mqdefault.jpg",
      },
      {
        title: "5 HOURS of Upbeat Music from Mario RPGs",
        url: "https://www.youtube.com/watch?v=a7L-lBYW5jQ",
        thumbnail: "https://img.youtube.com/vi/a7L-lBYW5jQ/mqdefault.jpg",
      },
      {
        title: "3 HOURS of Chill and Relaxing Pikmin Music",
        url: "https://www.youtube.com/watch?v=tiTRdduwUZ8",
        thumbnail: "https://img.youtube.com/vi/tiTRdduwUZ8/mqdefault.jpg",
      },
      {
        title: "8 HOURS of Upbeat Kirby Music",
        url: "https://www.youtube.com/watch?v=TF-v6Jdk4zw",
        thumbnail: "https://img.youtube.com/vi/TF-v6Jdk4zw/mqdefault.jpg",
      },
      {
        title: "6 HOURS of Energetic Mario Kart Music",
        url: "https://www.youtube.com/watch?v=XXEHsRHz-l0",
        thumbnail: "https://img.youtube.com/vi/XXEHsRHz-l0/mqdefault.jpg",
      },
      {
        title: "12 HOURS of Upbeat and Iconic Sonic Music",
        url: "https://www.youtube.com/watch?v=ysyr3CycwOs",
        thumbnail: "https://img.youtube.com/vi/ysyr3CycwOs/mqdefault.jpg",
      },
      {
        title: "Zelda music that is underappreciated",
        url: "https://www.youtube.com/watch?v=NH9aF0wpohk",
        thumbnail: "https://img.youtube.com/vi/NH9aF0wpohk/mqdefault.jpg",
      },
      {
        title: "Mario music that is underappreciated 🍄",
        url: "https://www.youtube.com/watch?v=5SZGkmpBgaU",
        thumbnail: "https://img.youtube.com/vi/5SZGkmpBgaU/mqdefault.jpg",
      },
      {
        title: "Kirby music that is underappreciated",
        url: "https://www.youtube.com/watch?v=SMkkquj680Q",
        thumbnail: "https://img.youtube.com/vi/SMkkquj680Q/mqdefault.jpg",
      },
      {
        title: "(Not At All) Relaxing Sonic Playlist",
        url: "https://youtu.be/1eSQj5GsU7s",
        thumbnail: "https://img.youtube.com/vi/1eSQj5GsU7s/mqdefault.jpg",
      },
      {
        title: "(Not At All) Relaxing Sonic Playlist : Act 2",
        url: "https://www.youtube.com/watch?v=YUbC-MHF_kE",
        thumbnail: "https://img.youtube.com/vi/YUbC-MHF_kE/mqdefault.jpg",
      },
      {
        title: "(Not So) Relaxing Dragon Quest Playlist",
        url: "https://www.youtube.com/watch?v=_VOJvqw00Ks",
        thumbnail: "https://img.youtube.com/vi/_VOJvqw00Ks/mqdefault.jpg",
      },
      {
        title: "(Not Really) Relaxing Yu-Gi-Oh! Playlist to Duel People",
        url: "https://www.youtube.com/watch?v=ieBIIbZFuRk",
        thumbnail: "https://img.youtube.com/vi/ieBIIbZFuRk/mqdefault.jpg",
      },
      {
        title: "(Still Not) Relaxing Pokémon Playlist",
        url: "https://www.youtube.com/watch?v=XySTSCG4s7w",
        thumbnail: "https://img.youtube.com/vi/XySTSCG4s7w/mqdefault.jpg",
      },
      {
        title: "(Definitely Not A) Relaxing Castlevania Playlist",
        url: "https://www.youtube.com/watch?v=RHV0iIzWvhY",
        thumbnail: "https://img.youtube.com/vi/RHV0iIzWvhY/mqdefault.jpg",
      },
      {
        title: "drive around the world • Exciting Mario Kart Tour Music🌍",
        url: "https://www.youtube.com/watch?v=klyRWeVm7fw",
        thumbnail: "https://img.youtube.com/vi/klyRWeVm7fw/mqdefault.jpg",
      },
      {
        title: "PAPER MARIO • Epic and Motivating Battle Music Compilation",
        url: "https://www.youtube.com/watch?v=suEs1fUxPGw",
        thumbnail: "https://img.youtube.com/vi/suEs1fUxPGw/mqdefault.jpg",
      },
      {
        title: "Complete Battle Theme Medley V1 - Paper Mario: The Origami King",
        url: "https://www.youtube.com/watch?v=ALxd2CitF5k",
        thumbnail: "https://img.youtube.com/vi/ALxd2CitF5k/mqdefault.jpg",
      },
      {
        title: "LEGO CITY UNDERCOVER • Exciting Music Compilation🚓",
        url: "https://www.youtube.com/watch?v=PATOBnuPH50",
        thumbnail: "https://img.youtube.com/vi/PATOBnuPH50/mqdefault.jpg",
      },
      {
        title: "COFFEE TALK • Calm & Relaxed Music Compilation",
        url: "https://www.youtube.com/watch?v=vXhv42rF8lY",
        thumbnail: "https://img.youtube.com/vi/vXhv42rF8lY/mqdefault.jpg",
      },
      {
        title: "Relaxing/Study Pokemon Sword & Shield Music Compilation",
        url: "https://www.youtube.com/watch?v=a3_ZWTvbqcw",
        thumbnail: "https://img.youtube.com/vi/a3_ZWTvbqcw/mqdefault.jpg",
      },
      {
        title: "Midnight Fight Express - Workout Mix",
        url: "https://www.youtube.com/watch?v=n9qkgHWe17E",
        thumbnail: "https://img.youtube.com/vi/n9qkgHWe17E/mqdefault.jpg",
      },
      {
        title: "Roboquest - Workout Mix (by Noisecream)",
        url: "https://www.youtube.com/watch?v=KSRA6tK6ZW0",
        thumbnail: "https://img.youtube.com/vi/KSRA6tK6ZW0/mqdefault.jpg",
      },
      {
        title: "GTTOD: Get To The Orange Door - Workout Mix",
        url: "https://www.youtube.com/watch?v=3vdJIdsEBTY",
        thumbnail: "https://img.youtube.com/vi/3vdJIdsEBTY/mqdefault.jpg",
      },
      {
        title: "My Friend Pedro - Workout Mix",
        url: "https://www.youtube.com/watch?v=6wCF6l6Xtyg",
        thumbnail: "https://img.youtube.com/vi/6wCF6l6Xtyg/mqdefault.jpg",
      },
      {
        title: "1 Hour of Chill Splatoon Music",
        url: "https://www.youtube.com/watch?v=d6nBRzRMUag",
        thumbnail: "https://img.youtube.com/vi/d6nBRzRMUag/mqdefault.jpg",
      },
      {
        title: "The Best of Splatoon 1, 2 & 3 Music",
        url: "https://www.youtube.com/watch?v=xBp0lXl50Io",
        thumbnail: "https://img.youtube.com/vi/xBp0lXl50Io/mqdefault.jpg",
      },
      {
        title: "SONIC FRONTIERS • Energetic & Epic Music Mix⚡",
        url: "https://www.youtube.com/watch?v=YGG5ICYE3fo",
        thumbnail: "https://img.youtube.com/vi/YGG5ICYE3fo/mqdefault.jpg",
      },
      {
        title: "MARIO KART • Happy & Epic Music Vol 1 | Tenpers",
        url: "https://www.youtube.com/watch?v=2DsCcn2DVXg",
        thumbnail: "https://img.youtube.com/vi/2DsCcn2DVXg/mqdefault.jpg",
      },
      {
        title: "Legend of Zelda • Emotional & Relaxing Music | Tenpers",
        url: "https://www.youtube.com/watch?v=CI4L-oyq2oI",
        thumbnail: "https://img.youtube.com/vi/CI4L-oyq2oI/mqdefault.jpg",
      },
      {
        title: "K K Slider Concert ~ Animal Crossing | Tenpers",
        url: "https://www.youtube.com/watch?v=g1IyHATe3vQ",
        thumbnail: "https://img.youtube.com/vi/g1IyHATe3vQ/mqdefault.jpg",
      },
      {
        title: "Mario Kart Music to Study /Work FAST | Tenpers",
        url: "https://www.youtube.com/watch?v=ctL1r742ETI",
        thumbnail: "https://img.youtube.com/vi/ctL1r742ETI/mqdefault.jpg",
      },
      {
        title: "LEGEND OF ZELDA • Creepy & Scary Music 🎃 | Tenpers",
        url: "https://www.youtube.com/watch?v=OGj1Qo6gWbw",
        thumbnail: "https://img.youtube.com/vi/OGj1Qo6gWbw/mqdefault.jpg",
      },
      {
        title: "Animal Crossing • Relaxing Music with Soft Rain 💧| Tenpers",
        url: "https://www.youtube.com/watch?v=jk8_YHtOhFA",
        thumbnail: "https://img.youtube.com/vi/jk8_YHtOhFA/mqdefault.jpg",
      },
      {
        title: "Just Another Animal Crossing Playlist",
        url: "https://www.youtube.com/watch?v=2Ih_OrvxcK8",
        thumbnail: "https://img.youtube.com/vi/2Ih_OrvxcK8/mqdefault.jpg",
      },
      {
        title: "2 hours of silly Ace Attorney music for an empty head",
        url: "https://www.youtube.com/watch?v=mTvOpbkirGk",
        thumbnail: "https://img.youtube.com/vi/mTvOpbkirGk/mqdefault.jpg",
      },
      {
        title: "Happy and Nostalgic music from the Mario Kart series",
        url: "https://www.youtube.com/watch?v=lr359-SEHkY",
        thumbnail: "https://img.youtube.com/vi/lr359-SEHkY/mqdefault.jpg",
      },
      {
        title: "🎧 persona playlist.:・°☆.:・°",
        url: "https://www.youtube.com/watch?v=UWi72EOzh1U",
        thumbnail: "https://img.youtube.com/vi/UWi72EOzh1U/mqdefault.jpg",
      },
      {
        title: "Ｐｅｒｓｏｎａᵐᵘˢⁱᶜ",
        url: "https://www.youtube.com/watch?v=hhHopWDPRrY",
        thumbnail: "https://img.youtube.com/vi/hhHopWDPRrY/mqdefault.jpg",
      },
      {
        title: "ＤＯＮＫＥＹ ＫＯＮＧ ᵐᵘˢⁱᶜ",
        url: "https://www.youtube.com/watch?v=CUqhSKCkJRc",
        thumbnail: "https://img.youtube.com/vi/CUqhSKCkJRc/mqdefault.jpg",
      },
      {
        title: "ＳＯＮＩＣ ᴛʜᴇ ʜᴇᴅɢᴇʜᴏɢ ᵐᵘˢⁱᶜ",
        url: "https://www.youtube.com/watch?v=bIvZ5WjaSiM",
        thumbnail: "https://img.youtube.com/vi/bIvZ5WjaSiM/mqdefault.jpg",
      },
      {
        title: "ＭＡＲＩＯ ＫＡＲＴ ᵐᵘˢⁱᶜ",
        url: "https://www.youtube.com/watch?v=Dapw3zK4FOs",
        thumbnail: "https://img.youtube.com/vi/Dapw3zK4FOs/mqdefault.jpg",
      },
      {
        title: "Ｋｉｒｂｙ ᵐᵘˢⁱᶜ",
        url: "https://www.youtube.com/watch?v=0tPfWrsJjBU",
        thumbnail: "https://img.youtube.com/vi/0tPfWrsJjBU/mqdefault.jpg",
      },
      {
        title: "Ｇｒａｎ Ｔｕｒｉｓｍｏ ᵐᵘˢⁱᶜ",
        url: "https://www.youtube.com/watch?v=yrDiuSnlwzo",
        thumbnail: "https://img.youtube.com/vi/yrDiuSnlwzo/mqdefault.jpg",
      },
      {
        title: "𝚂̶𝙷̶𝙸̶𝙽̶ 𝙈𝙀𝙂𝘼𝙈𝙄 𝙏𝙀𝙉𝙎𝙀𝙄 ᵐᵘˢⁱᶜ",
        url: "https://www.youtube.com/watch?v=JGBHujOqqBo",
        thumbnail: "https://img.youtube.com/vi/JGBHujOqqBo/mqdefault.jpg",
      },
      {
        title: "𝐏𝐡𝐨𝐞𝐧𝐢𝐱 𝐖𝐫𝐢𝐠𝐡𝐭: ᴀᴄᴇ ᴀᴛᴛᴏʀɴᴇʏ ᵐᵘˢⁱᶜ",
        url: "https://www.youtube.com/watch?v=UGHs8PIokNc",
        thumbnail: "https://img.youtube.com/vi/UGHs8PIokNc/mqdefault.jpg",
      },
      {
        title: "ᴛʜᴇ ʟᴇɢᴇɴᴅ ᴏғ 𝐙𝐄𝐋𝐃𝐀 ᵐᵘˢⁱᶜ",
        url: "https://www.youtube.com/watch?v=7g0bKmyaHBI",
        thumbnail: "https://img.youtube.com/vi/7g0bKmyaHBI/mqdefault.jpg",
      },
      {
        title: "R̲I̲D̲G̲E̲ ̲R̲A̲C̲E̲R̲ ᵐᵘˢⁱᶜ",
        url: "https://www.youtube.com/watch?v=WRPI7E1SBE4",
        thumbnail: "https://img.youtube.com/vi/WRPI7E1SBE4/mqdefault.jpg",
      },
      {
        title: "𝐏𝐄𝐑𝐒𝐎𝐍𝐀 𝟷 + 𝟸 ᵐᵘˢⁱᶜ",
        url: "https://www.youtube.com/watch?v=KPb1fDvNs9o",
        thumbnail: "https://img.youtube.com/vi/KPb1fDvNs9o/mqdefault.jpg",
      },
      {
        title: "ⓈⓊⓅⒺⓇ ⓂⓄⓃⓀⒺⓎ ⒷⒶⓁⓁ ᵐᵘˢⁱᶜ",
        url: "https://www.youtube.com/watch?v=CeLLJg3OjmE",
        thumbnail: "https://img.youtube.com/vi/7g0bKmyaHBI/mqdefault.jpg",
      },
      {
        title: "𝐀𝐩𝐨𝐥𝐥𝐨 𝐉𝐮𝐬𝐭𝐢𝐜𝐞: ᴀᴄᴇ ᴀᴛᴛᴏʀɴᴇʏ ᵐᵘˢⁱᶜ",
        url: "https://www.youtube.com/watch?v=GTaGWJ3ai8Q",
        thumbnail: "https://img.youtube.com/vi/GTaGWJ3ai8Q/mqdefault.jpg",
      },
      {
        title: "𝐏𝐨𝐊𝐞́𝐌𝐨𝐍 ᵐᵘˢⁱᶜ",
        url: "https://www.youtube.com/watch?v=BJgTVRYb99Q",
        thumbnail: "https://img.youtube.com/vi/BJgTVRYb99Q/mqdefault.jpg",
      },
      {
        title: "𝐁𝐀𝐘𝐎𝐍𝐄𝐓𝐓𝐀 ᵐᵘˢⁱᶜ",
        url: "https://www.youtube.com/watch?v=bL-UCAcTKwI",
        thumbnail: "https://img.youtube.com/vi/bL-UCAcTKwI/mqdefault.jpg",
      },
      {
        title: "丅𝘌КК𝘌N ᵐᵘˢⁱᶜ",
        url: "https://www.youtube.com/watch?v=1uFP5L92b_Q",
        thumbnail: "https://img.youtube.com/vi/1uFP5L92b_Q/mqdefault.jpg",
      },
      {
        title: "𝘈𝚃𝙻𝚄𝚂 ᵐᵘˢⁱᶜ",
        url: "https://www.youtube.com/watch?v=Eq9KKPO8v9g",
        thumbnail: "https://img.youtube.com/vi/Eq9KKPO8v9g/mqdefault.jpg",
      },
      {
        title: "ᛕᒪᏫ𝐍Ꮻ𝘼 ᵐᵘˢⁱᶜ",
        url: "https://www.youtube.com/watch?v=a-_XO5CVJ58",
        thumbnail: "https://img.youtube.com/vi/a-_XO5CVJ58/mqdefault.jpg",
      },
      {
        title: "丂𝙏𝙍𝐄𝐄ㄒ ᖴ𝐈𝙶卄𝙏𝐄☈ ᵐᵘˢⁱᶜ",
        url: "https://www.youtube.com/watch?v=S3xgMzPuf7Y",
        thumbnail: "https://img.youtube.com/vi/S3xgMzPuf7Y/mqdefault.jpg",
      },
      {
        title: "𝐀ᑭ𝙴 ᗴ𝚂ᑕᗩᑭᗴ ᵐᵘˢⁱᶜ",
        url: "https://www.youtube.com/watch?v=6pxbN1q2Smc",
        thumbnail: "https://img.youtube.com/vi/6pxbN1q2Smc/mqdefault.jpg",
      },
      {
        title: "ғғxɪ: 𝙿𝚕𝚊𝚢0𝚗𝚕𝚒𝚗𝚎 ᵐᵘˢⁱᶜ",
        url: "https://www.youtube.com/watch?v=VkVInBsnpYY",
        thumbnail: "https://img.youtube.com/vi/VkVInBsnpYY/mqdefault.jpg",
      },
      {
        title: "𝘽𝙊𝙈𝘽𝙀𝙍𝙈𝘼𝙉 𝟔𝟒 ᵐᵘˢⁱᶜ",
        url: "https://www.youtube.com/watch?v=N7SypfuYl-A",
        thumbnail: "https://img.youtube.com/vi/N7SypfuYl-A/mqdefault.jpg",
      },
      {
        title: "𝐊𝐚𝐭𝐚𝐦𝐚𝐫𝐢 ᵐᵘˢⁱᶜ",
        url: "https://www.youtube.com/watch?v=-FuMTR0eMrc",
        thumbnail: "https://img.youtube.com/vi/-FuMTR0eMrc/mqdefault.jpg",
      },
      {
        title: "b̶a̶n̶d̶a̶i̶ 𝐧𝐚𝐦𝐜𝐨 ᵐᵘˢⁱᶜ",
        url: "https://www.youtube.com/watch?v=iYhBwZOtRTk",
        thumbnail: "https://img.youtube.com/vi/iYhBwZOtRTk/mqdefault.jpg",
      },
      {
        title: "𝐓𝐨𝐤𝐲𝐨 𝐗𝐭𝐫𝐞𝐦𝐞 𝐑𝐚𝐜𝐞𝐫 ᵐᵘˢⁱᶜ",
        url: "https://www.youtube.com/watch?v=NI_KC9LlJrU",
        thumbnail: "https://img.youtube.com/vi/NI_KC9LlJrU/mqdefault.jpg",
      },
      {
        title: "ＰＩＫＭＩＮ ᵐᵘˢⁱᶜ",
        url: "https://www.youtube.com/watch?v=OKrNNZbhDSg",
        thumbnail: "https://img.youtube.com/vi/OKrNNZbhDSg/mqdefault.jpg",
      },
      {
        title: "𝐂𝐀𝐏𝐂𝐎𝐌 ᵐᵘˢⁱᶜ",
        url: "https://www.youtube.com/watch?v=FUOGRrnEXzY",
        thumbnail: "https://img.youtube.com/vi/FUOGRrnEXzY/mqdefault.jpg",
      },
      {
        title: "𝙹𝙴𝚃 𝚂𝙴𝚃 𝚁𝙰𝙳𝙸𝙾 𝙵𝚄𝚃𝚄𝚁𝙴 ᵐᵘˢⁱᶜ",
        url: "https://www.youtube.com/watch?v=eSDf-YLihJ0",
        thumbnail: "https://img.youtube.com/vi/eSDf-YLihJ0/mqdefault.jpg",
      },
      {
        title: "ᴛʜᴇ 𝐊𝐈𝐍𝐆 ᴏғ 𝙁𝙄𝙂𝙃𝙏𝙀𝙍𝙎 ᵐᵘˢⁱᶜ",
        url: "https://www.youtube.com/watch?v=WKQmf8G6044",
        thumbnail: "https://img.youtube.com/vi/WKQmf8G6044/mqdefault.jpg",
      },
      {
        title: "𝐀𝐧𝐢𝐦𝐚𝐥 𝐂𝐫𝐨𝐬𝐬𝐢𝐧𝐠 ᵐᵘˢⁱᶜ",
        url: "https://www.youtube.com/watch?v=Bnlrqq8_TTg",
        thumbnail: "https://img.youtube.com/vi/Bnlrqq8_TTg/mqdefault.jpg",
      },
      {
        title: "𝕂𝕆ℕ𝔸𝕄𝕀 ᵐᵘˢⁱᶜ",
        url: "https://www.youtube.com/watch?v=yGaWKPDdlU8",
        thumbnail: "https://img.youtube.com/vi/yGaWKPDdlU8/mqdefault.jpg",
      },
      {
        title: "𝚃𝚑𝚎 𝐒𝓲𝐌𝐬 ᵐᵘˢⁱᶜ",
        url: "https://www.youtube.com/watch?v=fM78-8lO1MA",
        thumbnail: "https://img.youtube.com/vi/fM78-8lO1MA/mqdefault.jpg",
      },
      {
        title: "𝐀𝐂𝐄 𝐂𝐎𝐌𝐁𝐀𝐓 ᵐᵘˢⁱᶜ",
        url: "https://www.youtube.com/watch?v=zc3QVghgGJ8",
        thumbnail: "https://img.youtube.com/vi/zc3QVghgGJ8/mqdefault.jpg",
      },
      {
        title: "𝐊𝐈𝐍𝐆𝐃𝐎𝐌 𝐇𝐄𝐀𝐑𝐓𝐒 ᵐᵘˢⁱᶜ",
        url: "https://www.youtube.com/watch?v=pFoi77MDH1Y",
        thumbnail: "https://img.youtube.com/vi/pFoi77MDH1Y/mqdefault.jpg",
      },
      {
        title: "𝕊𝔼𝔾𝔸 ᵐᵘˢⁱᶜ",
        url: "https://www.youtube.com/watch?v=dx9TyB8cgB0",
        thumbnail: "https://img.youtube.com/vi/dx9TyB8cgB0/mqdefault.jpg",
      },
      {
        title: "𝐒𝐈𝐌𝐂𝐈𝐓𝐘 ᵐᵘˢⁱᶜ",
        url: "https://www.youtube.com/watch?v=2FFRyNHA-G4",
        thumbnail: "https://img.youtube.com/vi/2FFRyNHA-G4/mqdefault.jpg",
      },
      {
        title: "𝙎𝙌𝙐𝘼𝙍𝙀𝙎𝙊𝙁𝙏 ᵐᵘˢⁱᶜ",
        url: "https://www.youtube.com/watch?v=y4ex1rdbeME",
        thumbnail: "https://img.youtube.com/vi/y4ex1rdbeME/mqdefault.jpg",
      },
      {
        title: "𝙈𝙀𝙂𝘼𝙈𝘼𝙉 ᵐᵘˢⁱᶜ",
        url: "https://www.youtube.com/watch?v=LWgqm_il9Wo",
        thumbnail: "https://img.youtube.com/vi/LWgqm_il9Wo/mqdefault.jpg",
      },
      {
        title: "Persona 3 chill vibes - (OST mix to Study/Work/Walk)",
        url: "https://www.youtube.com/watch?v=0pJ4ht46unc",
        thumbnail: "https://img.youtube.com/vi/0pJ4ht46unc/mqdefault.jpg",
      },
      {
        title: "Chill Persona Music to Focus to (Up to Persona 3 Reload)",
        url: "https://www.youtube.com/watch?v=Xp5Pl1-DnR4",
        thumbnail: "https://img.youtube.com/vi/Xp5Pl1-DnR4/mqdefault.jpg",
      },
      {
        title: "Chill Persona Music to Vibe to (Up to Persona 3 Reload)",
        url: "https://www.youtube.com/watch?v=DbWQq8v72Y4",
        thumbnail: "https://img.youtube.com/vi/DbWQq8v72Y4/mqdefault.jpg",
      },
      {
        title: "Relaxing Mario & Luigi music (Up to Brothership)",
        url: "https://www.youtube.com/watch?v=CV7HrNA68zQ",
        thumbnail: "https://img.youtube.com/vi/CV7HrNA68zQ/mqdefault.jpg",
      },
      {
        title: "ATLUS VIDEO GAME MUSIC PLAYLIST",
        url: "https://www.youtube.com/watch?v=MhOPFWqgIqE",
        thumbnail: "https://img.youtube.com/vi/MhOPFWqgIqE/mqdefault.jpg",
      },
    ],
    Console: [
      {
        title: "10 HOURS of Nostalgic GameCube Music",
        url: "https://www.youtube.com/watch?v=Wx5L2-Gf1nI",
        thumbnail: "https://img.youtube.com/vi/Wx5L2-Gf1nI/mqdefault.jpg",
      },
      {
        title: "Relaxing PS1 Music (100 songs) - Part 1",
        url: "https://www.youtube.com/watch?v=6cp-gVPsHWw",
        thumbnail: "https://img.youtube.com/vi/6cp-gVPsHWw/mqdefault.jpg",
      },
      {
        title: "𝐝𝐬 𝐚𝐧𝐝 𝐰𝐢𝐢 𝐞𝐫𝐚 𝐟𝐫𝐮𝐭𝐢𝐠𝐞𝐫 𝐚𝐞𝐫𝐨 - Playlist",
        url: "https://www.youtube.com/watch?v=0yiwxIuXmdk",
        thumbnail: "https://img.youtube.com/vi/0yiwxIuXmdk/mqdefault.jpg",
      },
      {
        title: "hello future!｜gamecube and wii era frutiger aero/y2k & nostalgia mix",
        url: "https://www.youtube.com/watch?v=w9LOF_6qN08",
        thumbnail: "https://img.youtube.com/vi/w9LOF_6qN08/mqdefault.jpg",
      },
      {
        title: "casual DS games music mix",
        url: "https://www.youtube.com/watch?v=f7HwV0rKO2I",
        thumbnail: "https://img.youtube.com/vi/f7HwV0rKO2I/mqdefault.jpg",
      },
      {
        title: "2h30 of Pure NDS Musics",
        url: "https://www.youtube.com/watch?v=bU3YI-epj5g",
        thumbnail: "https://img.youtube.com/vi/bU3YI-epj5g/mqdefault.jpg",
      },
      {
        title: "a nostalgic Nintendo Wii U music mix",
        url: "https://www.youtube.com/watch?v=iGpqLkOu-j0",
        thumbnail: "https://img.youtube.com/vi/iGpqLkOu-j0/mqdefault.jpg",
      },
      {
        title: "playstation 1 music relaxing video game ( HD )",
        url: "https://www.youtube.com/watch?v=bThtCUzFvP0",
        thumbnail: "https://img.youtube.com/vi/bThtCUzFvP0/mqdefault.jpg",
      },
      {
        title: "playstation 1 music relaxing video game ( HD ) 2",
        url: "https://www.youtube.com/watch?v=TWbtbb0x9uU",
        thumbnail: "https://img.youtube.com/vi/TWbtbb0x9uU/mqdefault.jpg",
      },
      {
        title: "Chill/Relaxing PSX Playsation 1 Music To Sleep , Relax, Vibe, and Study To",
        url: "https://www.youtube.com/watch?v=alAs4Amk0Vs",
        thumbnail: "https://img.youtube.com/vi/alAs4Amk0Vs/mqdefault.jpg",
      },
      {
        title: "Playstation Music To Drive, Vibe, or Study To At Night - PSX Night Time Vibes - 1 Hour of PSX Music",
        url: "https://www.youtube.com/watch?v=j9wqUb8ssNs",
        thumbnail: "https://img.youtube.com/vi/j9wqUb8ssNs/mqdefault.jpg",
      },
      {
        title: "2 Hours of Relaxing/Chill Video Game Music To Sleep, Study, and Relax to (SNES and SEGA Genesis)",
        url: "https://www.youtube.com/watch?v=7knD7AeS0DA",
        thumbnail: "https://img.youtube.com/vi/7knD7AeS0DA/mqdefault.jpg",
      },
      {
        title: "Over 2 Hours of SEGA Mega Drive/ Genesis Music For Studying, Gaming, and Vibing To",
        url: "https://www.youtube.com/watch?v=NSyPjaQln5s",
        thumbnail: "https://img.youtube.com/vi/NSyPjaQln5s/mqdefault.jpg",
      },
      {
        title: "☆Nintendo DS Breakcore/House mix☆ (w some crack here and there)",
        url: "https://www.youtube.com/watch?v=DJPZOFeRv_4",
        thumbnail: "https://img.youtube.com/vi/DJPZOFeRv_4/mqdefault.jpg",
      },
      {
        title: "2h45 of Pure PS1 Music",
        url: "https://youtu.be/_GW-BD0WoEk",
        thumbnail: "https://img.youtube.com/vi/_GW-BD0WoEk/mqdefault.jpg",
      },
      {
        title: "✧OBSCURE DS BOPS ONLY ✧ PLAYLIST",
        url: "https://youtu.be/nldnknsOTm4",
        thumbnail: "https://img.youtube.com/vi/nldnknsOTm4/mqdefault.jpg",
      },
      {
        title: "✧ MORE OBSCURE DS BOPS ✧ PLAYLIST #2",
        url: "https://youtu.be/EW-obdl15rc",
        thumbnail: "https://img.youtube.com/vi/EW-obdl15rc/mqdefault.jpg",
      },
    ],
    Nintendo: [
      {
        title: "🏪Relaxing supermarket 🛒 Nintendo music",
        url: "https://www.youtube.com/watch?v=16Wp3yecVio",
        thumbnail: "https://img.youtube.com/vi/16Wp3yecVio/mqdefault.jpg",
      },
      {
        title: "nintendo space & underwater ambience music mix",
        url: "https://www.youtube.com/watch?v=wcoj3qNJRyE",
        thumbnail: "https://img.youtube.com/vi/wcoj3qNJRyE/mqdefault.jpg",
      },
      {
        title: "Nintendo Cafe ~ 1 Hour of Relaxing Nintendo Music and Covers",
        url: "https://www.youtube.com/watch?v=14TwekNJLeA",
        thumbnail: "https://img.youtube.com/vi/14TwekNJLeA/mqdefault.jpg",
      },
      {
        title: "5 HOURS of Chill and Relaxing Nintendo Music",
        url: "https://www.youtube.com/watch?v=5R6RhQZykkY",
        thumbnail: "https://img.youtube.com/vi/5R6RhQZykkY/mqdefault.jpg",
      },
      {
        title: "5 HOURS of Spooky Nintendo Halloween Music",
        url: "https://www.youtube.com/watch?v=52BggXdt_r0",
        thumbnail: "https://img.youtube.com/vi/52BggXdt_r0/mqdefault.jpg",
      },
      {
        title: "80 Minutes of Nintendo Elevator Music",
        url: "https://www.youtube.com/watch?v=6MIEftn1lGg",
        thumbnail: "https://img.youtube.com/vi/6MIEftn1lGg/mqdefault.jpg",
      },
      {
        title: "Beach Day! ~ Nintendo Summer Music ☀️",
        url: "https://www.youtube.com/watch?v=FDNHb0Gr0Ik",
        thumbnail: "https://img.youtube.com/vi/FDNHb0Gr0Ik/mqdefault.jpg",
      },
      {
        title: "2000s nostalgic nintendo music for when you're missing your childhood home",
        url: "https://www.youtube.com/watch?v=zyDNVac00Ys",
        thumbnail: "https://img.youtube.com/vi/zyDNVac00Ys/mqdefault.jpg",
      },
      {
        title: "More Nintendo Music to fight off Winter Depression",
        url: "https://www.youtube.com/watch?v=-KMMTUEl2eE",
        thumbnail: "https://img.youtube.com/vi/-KMMTUEl2eE/mqdefault.jpg",
      },
      {
        title: "1 Hour of Nintendo Cooking Music - Vol. 2 🥣🎵",
        url: "https://www.youtube.com/watch?v=MU54exwbQK8",
        thumbnail: "https://img.youtube.com/vi/MU54exwbQK8/mqdefault.jpg",
      },
       {
        title: "nintendo music that makes your life worth living",
        url: "https://www.youtube.com/watch?v=GY10WVPQHrQ",
        thumbnail: "https://img.youtube.com/vi/GY10WVPQHrQ/mqdefault.jpg",
      },
      {
        title: "nintendo music for when you're working on a deadline",
        url: "https://www.youtube.com/watch?v=8nU46Ws6TZQ",
        thumbnail: "https://img.youtube.com/vi/8nU46Ws6TZQ/mqdefault.jpg",
      },
      {
        title: "connecting... | nostalgic wi-fi music from ds + wii",
        url: "https://www.youtube.com/watch?v=RFVTsO_laNM",
        thumbnail: "https://img.youtube.com/vi/RFVTsO_laNM/mqdefault.jpg",
      },
      {
        title: "🏪Relaxing supermarket 🛒 Nintendo music",
        url: "https://www.youtube.com/watch?v=16Wp3yecVio",
        thumbnail: "https://img.youtube.com/vi/16Wp3yecVio/mqdefault.jpg",
      },
      {
        title: "whimsically EVIL Nintendo music",
        url: "https://www.youtube.com/watch?v=gtVPlIfD_Cs",
        thumbnail: "https://img.youtube.com/vi/gtVPlIfD_Cs/mqdefault.jpg",
      },
      {
        title: "5 HOURS of Happy and Carefree Summer Nintendo Music",
        url: "https://www.youtube.com/watch?v=N0HHbkruZ3E",
        thumbnail: "https://img.youtube.com/vi/N0HHbkruZ3E/mqdefault.jpg",
      },
      {
        title: "Nintendo music that's very Nintendo",
        url: "https://www.youtube.com/watch?v=k7UsX8aQkN4",
        thumbnail: "https://img.youtube.com/vi/k7UsX8aQkN4/mqdefault.jpg",
      },
      {
        title: "Nintendo music that's very Nintendo (Part 2)",
        url: "https://www.youtube.com/watch?v=gHn-ViqzOMw",
        thumbnail: "https://img.youtube.com/vi/gHn-ViqzOMw/mqdefault.jpg",
      },
      {
        title: "The best Nintendo music you've never heard 🎼🎶",
        url: "https://www.youtube.com/watch?v=sA-iwBqheOY",
        thumbnail: "https://img.youtube.com/vi/sA-iwBqheOY/mqdefault.jpg",
      },
      {
        title: "nostalgic Nintendo tunes will make you happy (but also a little sad)",
        url: "https://www.youtube.com/watch?v=ca0yjaWtBBc",
        thumbnail: "https://img.youtube.com/vi/ca0yjaWtBBc/mqdefault.jpg",
      },
      {
        title: "The Best Mysterious Nintendo Music 💫",
        url: "https://www.youtube.com/watch?v=5ll2jiIn9DA",
        thumbnail: "https://img.youtube.com/vi/5ll2jiIn9DA/mqdefault.jpg",
      },
      {
        title: "1 Hour of Obscure Nintendo Music",
        url: "https://www.youtube.com/watch?v=G_ZZAEeDlO8",
        thumbnail: "https://img.youtube.com/vi/G_ZZAEeDlO8/mqdefault.jpg",
      },
      {
        title: "Let the Credits Roll - One Hour of Nintendo Credits Music",
        url: "https://www.youtube.com/watch?v=A-ZTvqYP0V4",
        thumbnail: "https://img.youtube.com/vi/A-ZTvqYP0V4/mqdefault.jpg",
      },
      {
        title: "Upbeat & Chill Nintendo Music To Get You Through The Day",
        url: "https://www.youtube.com/watch?v=VKYUO5ojU3k",
        thumbnail: "https://img.youtube.com/vi/VKYUO5ojU3k/mqdefault.jpg",
      },
      {
        title: "no thoughts, head empty || nintendo music [niche & obscure edition]",
        url: "https://www.youtube.com/watch?v=wiHwfL9BtAg",
        thumbnail: "https://img.youtube.com/vi/wiHwfL9BtAg/mqdefault.jpg",
      },
      {
        title: "niche & obscure ~second edition~ || no thoughts, head empty nintendo music",
        url: "https://www.youtube.com/watch?v=rPZRgNeAtNc",
        thumbnail: "https://img.youtube.com/vi/rPZRgNeAtNc/mqdefault.jpg",
      },
      {
        title: "niche & obscure THE FINAL || no thoughts, head empty nintendo music",
        url: "https://www.youtube.com/watch?v=oq3HSJUYJZg",
        thumbnail: "https://img.youtube.com/vi/oq3HSJUYJZg/mqdefault.jpg",
      },
      {
        title: "Good Night ~ Nintendo Sleep Music Compilation 🌙",
        url: "https://www.youtube.com/watch?v=HL5n-kMQglU",
        thumbnail: "https://img.youtube.com/vi/HL5n-kMQglU/mqdefault.jpg",
      },
      {
        title: "Keep Calm ~ Peaceful & Relaxing Nintendo Music 🎧",
        url: "https://www.youtube.com/watch?v=MVUrRVoE82M",
        thumbnail: "https://img.youtube.com/vi/MVUrRVoE82M/mqdefault.jpg",
      },
      {
        title: "1 Hour of Nintendo Emotional Music ~ Vol. 3 🌟 Try not to cry 💦",
        url: "https://www.youtube.com/watch?v=QBnKgRffZ0M",
        thumbnail: "https://img.youtube.com/vi/QBnKgRffZ0M/mqdefault.jpg",
      },
      {
        title: "Festive Nintendo Christmas Music 🎄 To enjoy your Winter Holidays 🎉",
        url: "https://www.youtube.com/watch?v=Zo5czaceCE0",
        thumbnail: "https://img.youtube.com/vi/Zo5czaceCE0/mqdefault.jpg",
      },
      {
        title: "1 Hour of Nintendo Music for Workout",
        url: "https://www.youtube.com/watch?v=0lfMhV0a2Ks",
        thumbnail: "https://img.youtube.com/vi/0lfMhV0a2Ks/mqdefault.jpg",
      },
    ],
    Pokémon: [
      {
        title: "2 Hours of Underrated Pokemon Music",
        url: "https://www.youtube.com/watch?v=N8mqLn_pIb4",
        thumbnail: "https://img.youtube.com/vi/N8mqLn_pIb4/mqdefault.jpg",
      },
      {
        title: "(Still Not) Relaxing Pokémon Playlist",
        url: "https://www.youtube.com/watch?v=XySTSCG4s7w",
        thumbnail: "https://img.youtube.com/vi/XySTSCG4s7w/mqdefault.jpg",
      },
      {
        title: "Pokemon's best Route Themes, reviewing your journey and adventure.",
        url: "https://www.youtube.com/watch?v=FBkUv1NRIpU",
        thumbnail: "https://img.youtube.com/vi/FBkUv1NRIpU/mqdefault.jpg",
      },
      {
        title: "Relaxing/Study Pokemon Sword & Shield Music Compilation",
        url: "https://www.youtube.com/watch?v=a3_ZWTvbqcw",
        thumbnail: "https://img.youtube.com/vi/a3_ZWTvbqcw/mqdefault.jpg",
      },
      {
        title: "𝑷𝑶𝑲𝑬𝑴𝑶𝑵 𝑯𝒀𝑷𝑬𝑹 𝑴𝑰𝑿 | 𝑩𝑨𝑻𝑻𝑳𝑬 𝑴𝑼𝑺𝑰𝑪",
        url: "https://www.youtube.com/watch?v=tH8q4NR89SA",
        thumbnail: "https://img.youtube.com/vi/tH8q4NR89SA/mqdefault.jpg",
      },
      {
        title: "𝑷𝑶𝑲𝑬𝑴𝑶𝑵 𝑯𝒀𝑷𝑬 𝑴𝑰𝑿 | 𝑩𝑨𝑻𝑻𝑳𝑬 𝑴𝑼𝑺𝑰𝑪",
        url: "https://www.youtube.com/watch?v=i5Cyi_4GIeU",
        thumbnail: "https://img.youtube.com/vi/i5Cyi_4GIeU/mqdefault.jpg",
      },
      {
        title: "𝕡𝕠𝕜𝕖𝕞𝕠𝕟 𝕔𝕠𝕫𝕪 𝕞𝕚𝕩 | 𝕣𝕖𝕝𝕒𝕩𝕚𝕟𝕘 & 𝕔𝕙𝕚𝕝𝕝",
        url: "https://www.youtube.com/watch?v=fB9etqTqbWQ",
        thumbnail: "https://img.youtube.com/vi/fB9etqTqbWQ/mqdefault.jpg",
      },
      {
        title: "Relaxing Pokémon Music Compilation (Vol. 1)",
        url: "https://www.youtube.com/watch?v=-BKfhq_TtcE",
        thumbnail: "https://img.youtube.com/vi/-BKfhq_TtcE/mqdefault.jpg",
      },
      {
        title: "Relaxing Pokémon Music Compilation (Vol.2)",
        url: "https://www.youtube.com/watch?v=U4cFS_Yircg",
        thumbnail: "https://img.youtube.com/vi/U4cFS_Yircg/mqdefault.jpg",
      },
      {
        title: "Relaxing Pokémon Music Compilation (Vol.3)",
        url: "https://www.youtube.com/watch?v=msoaACG940Y",
        thumbnail: "https://img.youtube.com/vi/msoaACG940Y/mqdefault.jpg",
      },
      {
        title: "60 Minutes of Relaxing/Chill 3DS Pokemon Music",
        url: "https://www.youtube.com/watch?v=d2nA4fV6Orc",
        thumbnail: "https://img.youtube.com/vi/d2nA4fV6Orc/mqdefault.jpg",
      },
      {
        title: "Pokemon Mystery Dungeon | 3 Hours of Relaxing Music",
        url: "https://www.youtube.com/watch?v=zFZOwUfD5ds",
        thumbnail: "https://img.youtube.com/vi/zFZOwUfD5ds/mqdefault.jpg",
      },
      {
        title: "Pokemon Omega Ruby/Alpha Sapphire Relaxing Music For 1 Hour",
        url: "https://www.youtube.com/watch?v=jfeGkggqAbc",
        thumbnail: "https://img.youtube.com/vi/jfeGkggqAbc/mqdefault.jpg",
      },
      {
        title: "Happy & Upbeat Pokémon Scarlet/Violet Music",
        url: "https://www.youtube.com/watch?v=ACzoej5Rh-0",
        thumbnail: "https://img.youtube.com/vi/ACzoej5Rh-0/mqdefault.jpg",
      },
      {
        title: "Nostalgic & relaxing Pokémon music you've never forgotten.",
        url: "https://www.youtube.com/watch?v=8Xx0INA66a4",
        thumbnail: "https://img.youtube.com/vi/8Xx0INA66a4/mqdefault.jpg",
      },
      {
        title: "Nostalgia Pokemon Music ⚪ Chill, Study, and Relax in the Pokémon World 🎶",
        url: "https://www.youtube.com/watch?v=IG6bOAi4PUg",
        thumbnail: "https://img.youtube.com/vi/IG6bOAi4PUg/mqdefault.jpg",
      },
      {
        title: "2 Hour of Nostalgic Pokemon Music - Best Pokemon Playlist of 2024",
        url: "https://www.youtube.com/watch?v=efIYDALzVJ4",
        thumbnail: "https://img.youtube.com/vi/efIYDALzVJ4/mqdefault.jpg",
      },
      {
        title: "pokemon videogame music but it's too nostalgic and relax.",
        url: "https://www.youtube.com/watch?v=bvQu3tG3HLs",
        thumbnail: "https://img.youtube.com/vi/bvQu3tG3HLs/mqdefault.jpg",
      },
      {
        title: "An Evolutive Pokémon Playlist",
        url: "https://www.youtube.com/watch?v=m_D04SnTgnM",
        thumbnail: "https://img.youtube.com/vi/m_D04SnTgnM/mqdefault.jpg",
      },
    ],
    Lofi: [
      {
        title: "persona ⁵ ~ lofi hip hop mix",
        url: "https://www.youtube.com/watch?v=BNTHEB_TKiQ",
        thumbnail: "https://img.youtube.com/vi/BNTHEB_TKiQ/mqdefault.jpg",
      },
      {
        title: "𝘽𝙍𝙀𝘼𝙏𝙃 𝙊𝙁 𝙏𝙃𝙀 𝙒𝙄𝙇𝘿 𝘼𝙉𝘿 𝙇𝙊𝙁𝙄 ~ 1 Hour Mix",
        url: "https://www.youtube.com/watch?v=VRREbyz1nsE",
        thumbnail: "https://img.youtube.com/vi/VRREbyz1nsE/mqdefault.jpg",
      },
      {
        title: "Zelda's Lofi Kingdom",
        url: "https://www.youtube.com/watch?v=Z3GA0GQCE2M",
        thumbnail: "https://img.youtube.com/vi/Z3GA0GQCE2M/mqdefault.jpg",
      },
      {
        title: "Super Lofi World 2",
        url: "https://www.youtube.com/watch?v=j5T2Tn38P-U",
        thumbnail: "https://img.youtube.com/vi/j5T2Tn38P-U/mqdefault.jpg",
      },
      {
        title: "Final Fantasy Lofi MEGA MIX",
        url: "https://www.youtube.com/watch?v=GoWS5Ts2Bl0",
        thumbnail: "https://img.youtube.com/vi/GoWS5Ts2Bl0/mqdefault.jpg",
      },
      {
        title: "𝐒𝐐𝐔𝐀𝐑𝐄 𝐄𝐍𝐈𝐗 𝐀𝐍𝐃 𝐂𝐇𝐈𝐋𝐋 ~ 1 Hour Mix (Lofi / Study / Relax)",
        url: "https://www.youtube.com/watch?v=wdokg_A8tOM",
        thumbnail: "https://img.youtube.com/vi/wdokg_A8tOM/mqdefault.jpg",
      },
      {
        title: "animal crossing ~ lofi MEGA mix ☀️🌴",
        url: "https://www.youtube.com/watch?v=574SI3Bo49Y",
        thumbnail: "https://img.youtube.com/vi/574SI3Bo49Y/mqdefault.jpg",
      },
      {
        title: "Ｐｅｒｓｏｎａ　＆　Ｃｈｉｌｌ ~ 1 Hour Lofi Mix",
        url: "https://www.youtube.com/watch?v=veAtNhoIRoQ",
        thumbnail: "https://img.youtube.com/vi/veAtNhoIRoQ/mqdefault.jpg",
      },
      {
        title: "Zelda & Chill [Full Album]",
        url: "https://www.youtube.com/watch?v=icwbu-9douY",
        thumbnail: "https://img.youtube.com/vi/icwbu-9douY/mqdefault.jpg",
      },
      {
        title: "ｎｉｎｔｅｎｄｏ　ａｎｄ　ｌｏｆｉ",
        url: "https://www.youtube.com/watch?v=AvhplYM46Fc",
        thumbnail: "https://img.youtube.com/vi/AvhplYM46Fc/mqdefault.jpg",
      },
      {
        title: "Chill Minecraft Lofi - Beats to Build & Relax To",
        url: "https://www.youtube.com/watch?v=RvLk1pGAEqA",
        thumbnail: "https://img.youtube.com/vi/RvLk1pGAEqA/mqdefault.jpg",
      },
      {
        title: "STARDEW VALLEY [LoFi & Hip Hop Beats]",
        url: "https://www.youtube.com/watch?v=scRoJCsy6dA",
        thumbnail: "https://img.youtube.com/vi/scRoJCsy6dA/mqdefault.jpg",
      },
      {
        title: "ＭＩＮＥＣＲＡＦＴ　＆　ＣＨＩＬＬ 　寛げる 𝟚",
        url: "https://www.youtube.com/watch?v=RoGPaWY2CMw",
        thumbnail: "https://img.youtube.com/vi/RoGPaWY2CMw/mqdefault.jpg",
      },
      {
        title: "【Ｕｎｄｅｒｔａｌｅ　Ｌｏｆｉ　Ｍｅｇａ　Ｍｉｘ】",
        url: "https://www.youtube.com/watch?v=wlZf7bPi24k",
        thumbnail: "https://img.youtube.com/vi/wlZf7bPi24k/mqdefault.jpg",
      },
      {
        title: "ｎｉｎｔｅｎｄｏ　ａｎｄ　ｌｏｆｉ　ＩＶ",
        url: "https://www.youtube.com/watch?v=9W9Wg_bp0ns",
        thumbnail: "https://img.youtube.com/vi/9W9Wg_bp0ns/mqdefault.jpg",
      },
      {
        title: "NINTENDO LOFI MEGAMIX 2021",
        url: "https://www.youtube.com/watch?v=MwyQAA85OXs",
        thumbnail: "https://img.youtube.com/vi/MwyQAA85OXs/mqdefault.jpg",
      },
      {
        title: "Nintendo & Friends 2 ● 2021 Lofi Hip Hop Mix (1,000 SUBS SPECIAL)",
        url: "https://www.youtube.com/watch?v=IJsPVMxOAps",
        thumbnail: "https://img.youtube.com/vi/IJsPVMxOAps/mqdefault.jpg",
      },
      {
        title: "relaxing nintendo lofi II",
        url: "https://www.youtube.com/watch?v=g6TZ9IWKARY",
        thumbnail: "https://img.youtube.com/vi/g6TZ9IWKARY/mqdefault.jpg",
      },
      {
        title: "The Call Of The Mountains 🍂 A Chill Lofi Mix",
        url: "https://www.youtube.com/watch?v=rY0mSSOnkL0",
        thumbnail: "https://img.youtube.com/vi/rY0mSSOnkL0/mqdefault.jpg",
      },
      {
        title: "Nintendo & Friends 3 ● 2022 Lofi Hip Hop Mix",
        url: "https://www.youtube.com/watch?v=jZVmsNrdO6g",
        thumbnail: "https://img.youtube.com/vi/jZVmsNrdO6g/mqdefault.jpg",
      },
      {
        title: "hisui OST but lofi ~ a pokemon legends: arceus lofi mix ~ relaxing chillhop beats to study/relax to",
        url: "https://www.youtube.com/watch?v=QqPhuD0wGKU",
        thumbnail: "https://img.youtube.com/vi/QqPhuD0wGKU/mqdefault.jpg",
      },
      {
        title: "Lofi Video Game Beats",
        url: "https://www.youtube.com/watch?v=QlP3eE9Vlg8",
        thumbnail: "https://img.youtube.com/vi/QlP3eE9Vlg8/mqdefault.jpg",
      },
      {
        title: "Animal Crossing Lofi Beats",
        url: "https://www.youtube.com/watch?v=OPVQMGOuMYI",
        thumbnail: "https://img.youtube.com/vi/OPVQMGOuMYI/mqdefault.jpg",
      },
      {
        title: "Stardew & Chill",
        url: "https://www.youtube.com/watch?v=yEPUhesWICA",
        thumbnail: "https://img.youtube.com/vi/yEPUhesWICA/mqdefault.jpg",
      },
      {
        title: "Ｐｈａｎｔｏｍ ~ [Persona 5 Lo-Fi BeatTape]",
        url: "https://www.youtube.com/watch?v=v_04pUogo1w",
        thumbnail: "https://img.youtube.com/vi/v_04pUogo1w/mqdefault.jpg",
      },
      {
        title: "Ｔｉｍｅ Ｍａｃｈｉｎｅ １９９８ [Lofi Video Game Remixes]",
        url: "https://www.youtube.com/watch?v=8OaE9APur7E",
        thumbnail: "https://img.youtube.com/vi/8OaE9APur7E/mqdefault.jpg",
      },
      {
        title: "G A M E O V E R. - Lofi w/ Video Game Samples",
        url: "https://www.youtube.com/watch?v=KOTr6M4pzsY",
        thumbnail: "https://img.youtube.com/vi/KOTr6M4pzsY/mqdefault.jpg",
      },
      {
        title: "all DRAGON QUEST remixes by walley (2018 - 2021) | video game lofi mix",
        url: "https://www.youtube.com/watch?v=y3aHnoGNdVo",
        thumbnail: "https://img.youtube.com/vi/y3aHnoGNdVo/mqdefault.jpg",
      },
      {
        title: "Lofi Video Game Beats II",
        url: "https://www.youtube.com/watch?v=2SoBFm18SA0",
        thumbnail: "https://img.youtube.com/vi/2SoBFm18SA0/mqdefault.jpg",
      },
      {
        title: "Pokémon Lofi Beats",
        url: "https://www.youtube.com/watch?v=vR60tNCGCIE",
        thumbnail: "https://img.youtube.com/vi/vR60tNCGCIE/mqdefault.jpg",
      },
      {
        title: "Relaxing Digimon World Lo-Fi Music - OST Remix by yoshi_UMR",
        url: "https://www.youtube.com/watch?v=xqM8L6-dCn0",
        thumbnail: "https://img.youtube.com/vi/xqM8L6-dCn0/mqdefault.jpg",
      },
      {
        title: "Relaxing Digimon World Lo-Fi Music (BONUS TRACKS)- OST Remix by yoshi_UMR",
        url: "https://www.youtube.com/watch?v=N3C4cAAyhWA",
        thumbnail: "https://img.youtube.com/vi/N3C4cAAyhWA/mqdefault.jpg",
      },
      {
        title: "pokemon legends: arceus but lofi ~ a nintendo lofi mix ~ relaxing chillhop beats to study/relax to",
        url: "https://www.youtube.com/watch?v=kdiaPmtO2tA",
        thumbnail: "https://img.youtube.com/vi/kdiaPmtO2tA/mqdefault.jpg",
      },
      {
        title: "☀️【﻿ｓｕｐｅｒ　ｍａｒｉｏ　ｓｕｎｓｈｉｎｅ　ｌｏｆｉ　ｍｉｘ】🌴",
        url: "https://www.youtube.com/watch?v=r-rbnlpmpVc",
        thumbnail: "https://img.youtube.com/vi/r-rbnlpmpVc/mqdefault.jpg",
      },
      {
        title: "HARVEST MOON [LoFi & Hip Hop Beats]",
        url: "https://www.youtube.com/watch?v=a0YYFf5iCQg",
        thumbnail: "https://img.youtube.com/vi/a0YYFf5iCQg/mqdefault.jpg",
      },
      {
        title: "DANGANRONPA [LoFi & Hip Hop Beats]",
        url: "https://www.youtube.com/watch?v=0kb8w01NDFk",
        thumbnail: "https://img.youtube.com/vi/0kb8w01NDFk/mqdefault.jpg",
      },
      {
        title: "Relaxing Katamari Music",
        url: "https://www.youtube.com/watch?v=bKId3POvNno",
        thumbnail: "https://img.youtube.com/vi/bKId3POvNno/mqdefault.jpg",
      },
      {
        title: "Minecraft LoFi: Soothing synths for mining blocks​",
        url: "https://www.youtube.com/watch?v=jAS-GKmQ_5o",
        thumbnail: "https://img.youtube.com/vi/jAS-GKmQ_5o/mqdefault.jpg",
      },
      {
        title: "SOULS & CHILL – Elden Ring, Dark Souls, Bloodborne lofi album",
        url: "https://www.youtube.com/watch?v=3ag0EQKvqmc",
        thumbnail: "https://img.youtube.com/vi/3ag0EQKvqmc/mqdefault.jpg",
      },
      {
        title: "Relaxing Digimon World Lo-Fi Music - 2024 OST RE-Remix by yoshi_UMR",
        url: "https://www.youtube.com/watch?v=k6qtIhpJOf8",
        thumbnail: "https://img.youtube.com/vi/k6qtIhpJOf8/mqdefault.jpg",
      },
      
    ],
    Bank: [
      {
        title: "music literally every single youtuber* uses at least once (playlist)",
        url: "https://www.youtube.com/watch?v=ZMuP01GlQi4",
        thumbnail: "https://img.youtube.com/vi/ZMuP01GlQi4/mqdefault.jpg",
      },
      {
        title: "(BONUS PLAYLIST) 1 Hour of Remastered VGMs i kept for myself until now",
        url: "https://www.youtube.com/watch?v=LENnJSex9Z8",
        thumbnail: "https://img.youtube.com/vi/LENnJSex9Z8/mqdefault.jpg",
      },
    ],
  };

  themeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const theme = button.dataset.theme;
      updateVideoList(theme);
    });
  });

  randomButton.addEventListener("click", () => {
    const allVideos = Object.entries(videosByTheme)
        .filter(([theme]) => theme !== "Lofi")
        .flatMap(([_, videos]) => videos);


    const uniqueVideos = Array.from(
        new Map(allVideos.map((video) => [video.url, video])).values()
    );

    const shuffledVideos = uniqueVideos.sort(() => 0.5 - Math.random()); 
    const randomVideos = shuffledVideos.slice(0, 10); 

    videoList.innerHTML = ""; 
    randomVideos.forEach(video => {
        const videoItem = document.createElement("div");
        videoItem.classList.add("video-item");
        videoItem.innerHTML = `
            <a href="${video.url}" target="_blank">
                <img src="${video.thumbnail}" alt="${video.title}">
            </a>
            <p class="video-title">${video.title}</p>
        `;
        videoList.appendChild(videoItem);
    });

    themeTitle.textContent = "Playlists Aléatoires";
});


  function updateVideoList(theme) {
    videoList.innerHTML = "";

    if (theme === "all") {
      const allVideos = Object.values(videosByTheme).flat();
      const uniqueVideos = Array.from(
        new Map(allVideos.map((video) => [video.url, video])).values()
      );

      uniqueVideos.forEach((video) => {
        const videoItem = document.createElement("div");
        videoItem.classList.add("video-item");
        videoItem.innerHTML = `
                <a href="${video.url}" target="_blank">
                    <img src="${video.thumbnail}" alt="${video.title}">
                </a>
                <p class="video-title">${video.title}</p> <!-- Ajout du titre -->
            `;
        videoList.appendChild(videoItem);
      });

      themeTitle.textContent = "Toutes les Playlists";
    } else {
      themeTitle.textContent = `${
        theme.charAt(0).toUpperCase() + theme.slice(1)
      }`;

      if (videosByTheme[theme]) {
        videosByTheme[theme].forEach((video) => {
          const videoItem = document.createElement("div");
          videoItem.classList.add("video-item");
          videoItem.innerHTML = `
                    <a href="${video.url}" target="_blank">
                        <img src="${video.thumbnail}" alt="${video.title}">
                    </a>
                    <p class="video-title">${video.title}</p> <!-- Ajout du titre -->
                `;
          videoList.appendChild(videoItem);
        });
      }
    }
  }

  updateVideoList("all");
});
