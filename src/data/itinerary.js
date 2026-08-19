// 瑞士行程資料 - 從原始靜態頁面轉換而來
// 26EC805CX．經典瑞士三峰三火車12日團

export const heroInfo = {
  eyebrow: 'Trip Dossier · Public Edition',
  title: ['經典瑞士三峰三火車', '十二日行程總覽'],
  subtitle: '馬特洪峰．白朗峰．少女峰．黃金景觀列車．冰河國鐵．伯連納列車',
  tags: [
    { text: '純瑞團', strong: true },
    { text: '米蘭進．慕尼黑出' },
    { text: '12天' },
  ],
}

export const privacyNote =
  '此為個資保護公開版本，領隊聯絡電話與參團人姓名已移除，僅保留行程與行前準備資訊。'

export const infoStrip = [
  { label: '集合時間', value: '8/5（三）17:00' },
  { label: '集合地點', value: '桃園機場第一航廈<br>國泰航空團體櫃台', small: true },
  { label: '行程編號', value: '純瑞團．26EC805CX 系列', small: true, mono: true },
]

export const flights = [
  { dir: '去程', code: 'CX531', route: '桃園 08/05 19:55　→　香港 22:00' },
  { dir: '去程', code: 'CX233', route: '香港 08/06 00:50　→　米蘭馬爾彭薩 08:00' },
  { dir: '回程', code: 'CX300', route: '慕尼黑 08/15 13:50　→　香港 08/16 06:50' },
  { dir: '回程', code: 'CX466', route: '香港 08/16 09:00　→　桃園 11:00' },
]

export const flightNote = '行李託運：每人 1 件 23 公斤，手提 7 公斤，不可跟同行者合併秤重。'

export const days = [
  {
    num: 1,
    date: '8/5（三）',
    hotel: '機上過夜',
    desc: '桃園 → 香港轉機',
  },
  {
    num: 2,
    date: '8/6（四）',
    hotel: '科莫 Hotel Cruise',
    desc: '抵米蘭馬爾彭薩機場，米蘭市區觀光、逛街購物（贈義式冰淇淋一份）',
  },
  {
    num: 3,
    date: '8/7（五）',
    hotel: '達沃斯五星飯店',
    desc: '蒂拉諾（搭乘伯連納景觀列車 約2.5hr）→ 聖莫里茲 → 達沃斯',
    playlists: [
      { url: 'https://youtube.com/playlist?list=PLW_HtQsi1COw', title: '伯連納景觀列車．義大利到瑞士 播放清單' },
      { url: 'https://youtube.com/playlist?list=PLD2VBWTVT9hw', title: '聖莫里茲 播放清單' },
    ],
  },
  {
    num: 4,
    date: '8/8（六）',
    hotel: 'Hotel Schweizerhof Saas Fee',
    desc: '庫爾（搭乘冰河國鐵列車 約3.5hr）→ 布里格 → 薩斯菲冰河村',
    flag: '★ 薩斯菲無火車站，於布里格(Brig)站下車轉遊覽車約1小時進村',
    meals: "🍽️ 晚餐：待確認，印象中在 Rudi's Schneebar 隔壁的 Hotel Restaurant Mistral（Gletscherstrasse 1, Saas-Fee），有吃到馬鈴薯料理、南瓜湯、牛排（餐點內容為回憶記錄，尚未逐項核實）",
  },
  {
    num: 5,
    date: '8/9（日）',
    hotel: 'Hotel Holiday Zermatt',
    desc: '薩斯菲尋訪土撥鼠 → 策馬特無煙山城（馬特洪峰登山齒軌火車／葛納葛特觀景台／利菲爾湖）',
    highlight: true,
    flag: '★ 策馬特禁汽車，需準備過夜包單獨攜帶',
    meals: '🍽️ 早餐：薩斯菲飯店內用（Hotel Schweizerhof Saas Fee，餐廳名稱待確認）／午餐：Vivanda（Unique Hotel Post附設義大利餐廳，策馬特）／晚餐：Theodors Stuba',
    playlists: [
      { url: 'https://youtube.com/playlist?list=PLXL1HrdNdjB0', title: '薩斯菲冰河村土撥鼠 播放清單' },
      { url: 'https://youtube.com/playlist?list=PLAyp6YYpc4gM', title: '策馬特 馬特洪峰 登山 觀景台 日出 播放清單' },
    ],
  },
  {
    num: 6,
    date: '8/10（一）',
    hotel: 'Saint Gervais Hotel & Spa',
    desc: '策馬特看日出 → 霞慕尼（白朗峰．南針峰纜車．歐洲最高觀景台）',
    flag: '★ 南針峰纜車若天候關閉，改搭蒙特維冰河列車＋纜車，退票價差',
    meals: '🍽️ 早餐：La Calèche（Hotel Holiday附設餐廳，策馬特）／午餐：雪園餐廳（霞慕尼）',
    playlists: [
      { url: 'https://youtube.com/playlist?list=PLeuyuxBrCVLM', title: '白朗峰 夏慕尼 含纜車 觀景台 播放清單' },
    ],
  },
  {
    num: 7,
    date: '8/11（二）',
    hotel: 'Holiday Inn Bern-Westside',
    desc: '蒙特魯（搭乘黃金景觀列車 約2hr）→ 伯恩',
    meals: '🍽️ 午餐：拜倫咖啡館',
    playlists: [
      { url: 'https://youtube.com/playlist?list=PLaiK0t4ns4z8', title: '蒙特勒西庸城堡．黃金景觀列車 播放清單' },
    ],
  },
  {
    num: 8,
    date: '8/12（三）',
    hotel: 'Sunstar Hotel Grindelwald',
    desc: '格林德瓦（少女峰：艾格纜車快線／登山齒軌火車／冰宮）',
    videos: [
      { embed: '82xyPKrg_ug', title: '少女峰纜車上升段', caption: '🎥 少女峰纜車上升段實況' },
    ],
    playlists: [
      { url: 'https://youtube.com/playlist?list=PLUWF0EnD__IY', title: '少女峰 雪景 及纜車 播放清單' },
    ],
    videosAfterPlaylist: [
      { embed: 'NU-SYUokKu0', title: '格林德瓦當晚慶典', caption: '🎉 當天晚上遇到的格林德瓦慶典' },
    ],
  },
  {
    num: 9,
    date: '8/13（四）',
    hotel: 'Best Western Plus Fuessen',
    desc: '盧森（卡貝爾橋／獅子紀念碑）→ 蘇黎世 → 菲森',
    today: true,
    videos: [
      { embed: 'kem2B3d1eYY', title: '蘇黎世利馬特河湖濱鴨子', caption: '🎥 蘇黎世利馬特河(Limmat)湖濱漫遊．鴨子' },
    ],
  },
  {
    num: 10,
    date: '8/14（五）',
    hotel: 'Holiday Inn Munich City Centre',
    desc: '慕尼黑王宮參觀（專業中文導遊）、市區觀光與自由購物',
  },
  {
    num: 11,
    date: '8/15（六）',
    hotel: '機上過夜',
    desc: '慕尼黑 → 香港',
    flag: '★ 當日遇越南航空跑道事故，機場作業受影響，CX300 延遲起飛（14:50實際起飛，航廈1/A44登機門），08:27抵達香港（原訂06:50，延誤約1小時37分）',
  },
  {
    num: 12,
    date: '8/16（日）',
    hotel: '返抵國門',
    desc: '香港 → 桃園機場',
  },
]

export const itineraryCallout = {
  label: '官方補充：',
  text: '策馬特／薩斯菲若遇飯店客滿，可能拆團分宿或調整同等級飯店，並退價差。',
}

export const checklist = [
  {
    title: '財務與現金',
    open: true,
    items: [
      '信用卡 2–3 張',
      '現金：瑞郎為主（建議 300–500 CHF，視刷卡比例調整）',
      '現金：少量歐元（米蘭、霞慕尼會用到）',
      '小費預算：12 天團約 €144（領隊／導遊／司機），另房間清潔工每房 €1、行李員每件 €1（自行斟酌）',
    ],
  },
  {
    title: '證件',
    items: [
      '護照（效期需 6 個月以上，且本人簽名）',
      '護照影本／電子檔存手機',
      '大頭照 2 張（備用文件）',
      '身分證明文件影本',
    ],
  },
  {
    title: '行李與隨身物品',
    items: [
      '託運行李 1 件（23kg）＋ 手提 1 件（7kg）',
      '8/9 策馬特過夜包（獨立小包，當晚換洗衣物＋盥洗用品，大行李箱由司機／團隊保管）',
      '慢性病藥物／每日保健食品（務必手提，不要託運）',
      '常備藥：感冒藥、止痛藥、暈車藥、高山症藥',
      '轉接插頭（僅轉接無變壓功能，注意每天離開飯店要帶走）',
      '行動電源（歐洲遊覽車多無 Wi-Fi／充電孔）',
      '台灣網卡先買好（當地公共 WiFi 不普及）',
    ],
  },
  {
    title: '衣物與個人用品',
    items: [
      '短袖衣物為主',
      '防寒保暖外套 1 件（山區約 10–15°C，觀景台可能到 -5°C）',
      '好走路防滑鞋（不要穿新鞋）',
      '護唇膏／身體乳（歐洲氣候乾燥）',
      '防曬用品、遮陽帽',
      '折疊小雨傘',
      '牙膏、牙刷、刮鬍刀、拖鞋（多數飯店不提供）',
    ],
  },
  {
    title: '隨身行李安檢規定',
    items: [
      '液態／膏狀／噴霧超過 100ml 需放大行李託運',
      '尖銳物品（剪刀、指甲刀、美工刀、修眉刀）需放大行李託運',
      '折疊自拍棒超過 25cm 需託運',
      '電子煙、防狼噴霧、電擊棒等絕對禁止（含託運）',
      '生鮮蔬果、肉製品、蛋製品（滷蛋、鐵蛋）不可帶入歐盟',
    ],
  },
]

export const otherNotes = [
  { bold: '退稅門檻：', text: '德國單店滿 €50／瑞士單店滿 CHF 300／義大利同店同日滿 €70，瑞士另有 Easy 退稅系統' },
  { bold: '治安：', text: '歐洲扒手猖獗，建議斜背包／腰包／貼身包，貴重物品不要放後背包' },
  { bold: '官方補充：', text: '遊覽車近期竊案頻傳，下車務必攜帶貴重物品，不可留車上過夜', isNew: true },
  { bold: '飯店：', text: '多不提供牙膏、牙刷、刮鬍刀、拖鞋；飯店全面禁菸（違規罰款約 €300–500）' },
  { bold: '官方補充：', text: '瑞士渡假區飯店多無冷氣（環保與當地文化考量）；德瑞部分飯店雙人房為「一大床框兩套床組」', isNew: true },
  { bold: '時差：', text: '台灣時間減 6 小時（歐洲夏令時間）' },
  { bold: '國際電話：', text: '台灣打歐洲＝002＋國碼＋區域號碼(去0)＋電話；歐洲打台灣＝00＋886＋去0電話' },
]

export const faqs = [
  {
    q: '薩斯菲怎麼找土撥鼠？',
    a: '搭 Spielbodenbahn 纜車到 Spielboden（2448m），沿「土撥鼠小徑 Murmeliweg」（約500公尺環狀步道）尋找。最佳時段是清晨與傍晚（土撥鼠日行性，天黑後不會出來），5–9月為活動季。可在遊客中心或山上餐廳購買官方飼料（CHF 5/袋），禁止餵食人類食物。現場團員回饋：土撥鼠洞穴距登山步道約100公尺，清晨較容易看到。',
  },
  {
    q: '策馬特到霞慕尼要多久？',
    a: '遊覽車走山路約2小時20分–2小時30分（約144公里）；火車需在Visp、Martigny、Vallorcine多次轉乘，約3.5–5小時。跟團走遊覽車較快。',
  },
  {
    q: 'Haglöfs等戶外品牌哪裡買比較便宜？',
    a: '瑞士物價全球最高，不建議在瑞士買。德國退稅門檻最低（單筆滿€50），市場competitive，建議留到慕尼黑（Day 10）再買，推薦 Sporthaus Schuster（Rosenstraße 1-5）或 Globetrotter München（Isartorplatz 8-10）。',
  },
  {
    q: '策馬特紀念品（黑鼻羊娃娃）哪裡買？',
    a: '策馬特代表動物是瓦萊黑鼻羊（Valais Blacknose Sheep），官方吉祥物叫「Wolli」。推薦 Matterland Souvenirs（Bahnhofstrasse 24）、Bayard Rosincha（Bahnhofplatz 2，火車站廣場旁）、策馬特旅遊局門市。Täsch轉運站沒有紀念品店，購物請留在策馬特。',
  },
  {
    q: '法國超市買得到植物奶嗎？',
    a: "杏仁奶（lait d'amande）、燕麥奶（lait d'avoine）在E.Leclerc、Carrefour、Auchan等連鎖超市都有，找「laits végétaux」貨架區。超市自有品牌 €1.39–2.79/L，專業品牌（Oatly、Bjorg）€3.00–3.50/L。",
  },
]

export const liveNotesIntro =
  '此區彙整團體現場回饋的實用細節，補充官方行程未提及的時刻表、集合安排與周邊資訊。已去除所有個人識別資訊。'

export const liveNotes = [
  {
    title: '8/5：臺北→香港→米蘭',
    html: 'CX531：登機門B4、19:25登機、航程1.5小時、機上簡餐。<br>CX233：登機門62（易變動）、00:15登機、00:50起飛、航程約13小時、起降前各供餐一次。<br>香港轉機行李轉盤10號。<br>提醒：轉機登機門常最後才確定，請留意廣播。',
  },
  {
    title: '8/6：米蘭市區',
    html: '景點：米蘭大教堂、文藝復興百貨（頂樓有廚房雜貨區，廁所在頂樓手扶梯側，大教堂旁廣場也有廁所）。<br>超市：噴水池附近有小超市（賣水果，比附近家樂福大，步行約6分鐘）；飯店旁商場內超市營業至20:30。',
  },
  {
    title: '8/7：伯連納景觀列車',
    html: '08:30大廳集合；最晚13:10前蒂拉諾車站集合。<br>列車時刻：13:17 Tirano發車 → 15:45 St. Moritz抵達，車程約2.5小時，團體車廂12號。<br>沿途亮點順序：發車後5-10分鐘經過世界遺產布魯西奧螺旋鐵道橋 → 兩段「之」字型爬升鐵道（第二段後海拔超過2000公尺）→ Alp Grüm站（停靠15分鐘可下車拍照）→ Ospizio Bernina站（全線最高點2253公尺，1910年通車，旁有比安科湖Lago Bianco，另一側是皮茲伯連納峰4000公尺級山頭，鐵道命名來源）。<br>蒂拉諾車站周邊推薦：站前義大利麵/披薩餐廳、外帶披薩店、河邊中式餐廳（可合菜或單點）、甜點店（羅馬生乳包推薦）、另一家義麵/餃子/千層麵餐廳。',
    playlists: [
      { url: 'https://youtube.com/playlist?list=PLW_HtQsi1COw', title: '伯連納景觀列車．義大利到瑞士 播放清單' },
      { url: 'https://youtube.com/playlist?list=PLD2VBWTVT9hw', title: '聖莫里茲 播放清單' },
    ],
  },
  {
    title: '8/8：冰河景觀列車＋薩斯菲',
    html: '10:00大廳集合上行李，車程約1小時到庫爾(Chur)。<br>三段冰河國鐵時刻：Chur→Disentis/Mustér（12:55-14:09）→ Andermatt（14:15-15:21）→ Brig（15:37-17:33），前兩段有團體座位，三段都有洗手間，換車間隔僅6-16分鐘，驗票用QR code電子票。<br><b>轉乘提醒：</b>薩斯菲山城本身沒有火車站，抵達布里格(Brig)後轉搭遊覽車約1小時進村（一般大眾交通則是搭511號公車，車程約1小時17-19分）。<br>達沃斯當地是世界經濟論壇會場所在地。飯店泳池6:00開放，附近超市8:00開。<br>提醒：外套一律帶上大巴備用（隔天上山用）；隔日安排07:00早餐/08:30集合找土撥鼠/10:00退房/10:20上車；山路車程約1小時到薩斯菲；當地天氣17-20度、有降雨機會；策馬特住宿需準備過夜包。',
    meals: "🍽️ 晚餐：待確認，印象中在 Rudi's Schneebar 隔壁的 Hotel Restaurant Mistral（Gletscherstrasse 1, Saas-Fee），有吃到馬鈴薯料理、南瓜湯、牛排（餐點內容為回憶記錄，尚未逐項核實）",
  },
  {
    title: '8/9：薩斯菲土撥鼠＋策馬特利菲爾湖',
    html: '土撥鼠洞穴位置距登山步道約100公尺，清晨時段較容易看到。<br>11:35搭乘列車前往策馬特（中途轉乘），約14:33抵達Rotenboden站（海拔2815公尺，歐洲第二高露天鐵路車站），步行約5-10分鐘可達利菲爾湖(Riffelsee)景點（湖泊本身非車站站名，步道名Riffelseeweg／Zermatt Trail 21，黃色方形Wanderweg指標）。<br>山中湖回策馬特班次：17:29後每小時一班，末班20:18。<br>18:50策馬特山下火車站前集合晚餐，21:00安排看策馬特夜景。<br>健行提醒：若選擇健行下山，沿途按指標走，中途會經過Riffelberg站（海拔2582公尺，另一獨立車站，位置在Rotenboden下方），終點設有車站可搭車下山。<br>當晚傍晚有雷雨，建議準備雨具。',
  },
  {
    title: '8/10：策馬特日出＋南針峰白朗峰',
    html: '當日日出時刻：06:22（前一晚下雨，隔天早上晴空萬里）。<br>策馬特當地早晨偶有「羊羊遊行」活動可巧遇。<br>08:30大廳集合步行至火車站，最晚08:50抵達車站。<br><b>健行實測心得：</b>可從Rotenboden站（2815公尺）健行下到Riffelberg站（2582公尺），沿途部分路段沙質、地面較不穩，建議穿好走的鞋。據說途中也有機會看到土撥鼠。<br>南針峰纜車可達3842公尺最高點，可眺望白朗峰（山頭4810公尺）。<br>下山纜車為36號車廂，15:50發車，需依號碼排隊上車。<br>18:00集合晚餐，19:30前回到纜車站前廣場集合。<br>隔日安排：06:30早餐，09:00上車。',
  },
  {
    title: '8/11：蒙特勒西庸城堡＋黃金景觀列車西段',
    html: '中午於拜倫咖啡館用餐後，前往蒙特勒(Montreux)日內瓦湖畔，參觀西庸城堡(Château de Chillon)並沿湖岸拍照，之後13:05前回車上、前往車站上車。<br>黃金景觀列車西段路線：蒙特勒(Montreux，日內瓦湖東岸度假城市) → 西維斯蒙(Zweisimmen)，13:43發車，15:56抵達終點。<br>車上設有洗手間與餐車服務。<br>路線特色：由湖濱一路爬升至高地牧場地形。',
    playlists: [
      { url: 'https://youtube.com/playlist?list=PLaiK0t4ns4z8', title: '蒙特勒西庸城堡．黃金景觀列車 播放清單' },
    ],
  },
  {
    title: '8/12：伯恩熊公園＋瑞士伴手禮採購',
    html: '抵達伯恩(Bern)，於熊公園(Bärenpark)附近集合停車。<br>早餐採桌卡制，領隊會在餐廳大廳對面座位區放置指定顏色桌卡（當團專屬座位，其他桌次為其他團體使用，請勿誤坐）。<br><b>瑞士代表伴手禮參考：</b>',
    list: [
      '阿爾卑斯山土撥鼠藥膏：紅蓋（溫熱款，放鬆肌肉關節痠痛）／藍蓋（冷卻款，適合運動後或剛受傷關節韌帶），純天然無防腐劑，約CHF 26',
      '阿爾卑斯山土撥鼠純精油，可搭配藥膏加強使用效果',
      '運動關節保健凝膠：紅色熱感（緩解運動傷害肌肉關節疼痛）／藍色涼感（運動前暖身伸展），約CHF 26',
      '阿爾卑斯山健胃糖：緩解胃部不適脹氣，鐵盒裝30顆約CHF 12.5',
      '阿爾卑斯山無糖喉糖：緩解口腔喉嚨不適，鐵盒裝30顆約CHF 12',
      '瑞士製水果刀／刨刀：刨皮不易流失果汁，質地與瑞士刀具同源',
      '瑞士Kambly老牌餅乾（甜鹹口味皆有）、傳統巧克力粉／巧克力醬、百年巧克力品牌（奶油餅乾／白巧克力口味）、瑞士蛋白糖霜甜點、玫瑰果醬等',
    ],
    htmlAfterList: '提醒：代購通常僅收現金（或回國後轉帳），一般商店消費滿CHF 300可退稅6%（代購訂單不適用退稅）。',
  },
  {
    title: '8/15：慕尼黑機場跑道事故延誤實記',
    html: '當日原訂航班延誤，起因是慕尼黑機場當天上午發生一起跑道事故：越南航空VN34班機（波音787-9，機身編號VN-A867，原定慕尼黑飛河內）起飛時異常延遲拉機頭(late rotation)，導致機尾擦地(tail strike)並衝出跑道末端，輪胎受損、跑道燈具損毀。機組人員在空中盤旋約1.5-2小時洩油後安全返航慕尼黑，機上人員均平安，事故導致跑道一度關閉，波及後續航班起降時間。<br><b>CX300實際延誤紀錄：</b>原訂13:50自慕尼黑機場（航廈1/A44登機門）起飛，實際延遲約1小時於14:50起飛；原訂06:50抵達香港，實際08:27抵達（航廈1/66登機門），最終延誤約1小時37分，總飛行時間11小時37分鐘。<br>後續改搭09:50 CX450（香港飛台北）銜接轉機返台。',
    sources: [
      { url: 'https://airlive.net/incident/2026/08/15/vietnam-airlines-boeing-787-is-holding-after-very-late-rotation-at-munich-and-possible-damages/', title: 'airlive.net 事故報導' },
      { url: 'https://www.flightradar24.com/data/aircraft/vn-a867', title: 'Flightradar24 機身航跟資料' },
    ],
  },
]

export const liveNotesFooter =
  '<b>跨日通用小提醒：</b>大廳集合時間與實際出發／退房時間通常相差約20分鐘，請提早到；三大景觀列車（伯連納、冰河國鐵、黃金列車）車上均設有洗手間，轉乘停留時間短，建議善用車上洗手間；電子票／QR code建議截圖備份，避免手機沒電或網路不通；歐洲超市多數08:00–20:30營業，週日經常公休；高山地區早晚溫差大，外套建議隨身携帶或放在遊覽車上備用。'

export const footerText = '經典瑞士三峰三火車 12 日 · 公開安全版（已移除個資）'
