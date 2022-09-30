import fs from 'fs';
import Axios from 'axios';
import download from 'image-downloader';
import { mkdirs } from './FileHelper.js';


const placesJson=[
  {
    "alltag": "일출,오름,경관/포토,부모,자연경관,포토스팟,유네스코,공용주차장,현금결제,카드결제,화장실,무료 WIFI,편의점,음료대,유도 및 안내시설,경보 및 피난시설,임산부 휴게시설,장애인 화장실,장애인 전용 주차장,아주 어려움,UNESCO 세계자연유산,UNESCO 세계지질공원,실외,상,등산,산책로. 올레코스. 오름,1시간 미만",
    "contentsid": "CONT_000000000500349",
    "contentscd": {
      "value": "c1",
      "label": "관광지",
      "refId": "contentscd>c1"
    },
    "title": "성산일출봉(UNESCO 세계자연유산)",
    "region1cd": {
      "value": "region2",
      "label": "서귀포시",
      "refId": "region>region2"
    },
    "region2cd": {
      "value": "17",
      "label": "성산",
      "refId": "region2>17"
    },
    "address": "제주특별자치도 서귀포시 성산읍 성산리 1",
    "roadaddress": "제주특별자치도 서귀포시 성산읍 일출로 284-12",
    "tag": "일출,오름,경관/포토,부모,자연경관,포토스팟,유네스코",
    "introduction": "바다위에 우뚝 솟아난 수성화산·유네스코 세계자연유산, 천연기념물 제420호, 올레1코스",
    "readcnt": 551092,
    "likecnt": 273,
    "reviewcnt": 590,
    "markcnt": 3450,
    "snssharecnt": 670,
    "schedulecnt": 0,
    "visitcnt": 21,
    "evelpt": 5,
    "latitude": 33.462147,
    "longitude": 126.936424,
    "postcode": "63643",
    "phoneno": "064-783-0959",
    "sbst": "성산일출봉은 제주도의 다른 오름들과는 달리 마그마가 물속에서 분출하면서 만들어진 수성화산체다. 화산활동시 분출된 뜨거운 마그마가 차가운 바닷물과 만나면서 화산재가 습기를 많이 머금어 끈끈한 성질을 띄게 되었고, 이것이 층을 이루면서 쌓인 것이 성산일출봉이다.\r\n\r\n바다 근처의 퇴적층은 파도와 해류에 의해 침식되면서 지금처럼 경사가 가파른 모습을 띄게 되었다. 생성 당시엔 제주 본토와 떨어진 섬이었는데, 주변에 모래와 자갈등이 쌓이면서 간조 때면 본토와 이어지는 길이 생겼고, 1940년엔 이곳에 도로가 생기면서 현재는 육지와 완벽하게 연결되어 있다. 정상에 오르면 너비가 8만여 평에 이르는 분화구를 볼 수 있는데, 그릇처럼 오목한 형태로 안에는 억새 등의 풀이 자라고 있다. 분화구 둘레에는 99개의 고만고만한 봉우리(암석)이 자리하고 있다. 이 모습이 거대한 성과 같다고 해서 '성산(城山)', 해가 뜨는 모습이 장관이라 하여 '일출봉(日出峰)'이라는 이름이 붙었다. \r\n\r\n전설에 의하면 성산일출봉의 봉오리가 100이었다면, 제주에도 호랑이.사자 같은 맹수가 날 것인데, 하나가 모자라 아흔 아홉이기 때문에 호랑이도 사자도 아니 난다고 한다. \r\n성산일출봉에는 제주의 아픈역사도 간직하고 있다. 1943년에는 일본군이 이곳을 요새화 하기 위해 일출봉 해안절벽에 24개의 굴을 팠다. 굴속에 폭탄과 어뢰등을 감춰두고 일전에 대비했지만 제대로 사용하지 못하고 패전하였다. 이 굴은 이후 잠녀의 탈의장으로 사용되기도 했다. 성산일출봉과 본토를 잇는 길목은 간조때 길이 터진다 하면 터진목이라 불렀는데, 이곳과 일출봉의 우뭇개 일대에서 4·3항쟁 당시 많은 민간인이 토벌대에 의해 목숨을 잃었다.\r\n\r\n성산일출봉 정상에 이르는 가파른 계단 길은 숨이 가쁘나, 넉넉히 20분이면 꼭대기에 다다른다. 정상에서는 너른 분화구와 그 뒤로 펼쳐지는 바다의 풍경은, 제주의 다른 오름과는 전혀 다른 웅장한 느낌을 준다. 예부터 이곳 정상에서 바라보는 일출광경은 영주10경(제주의 경승지)중에서 으뜸이라 하였고, 이에 매년 12월 31일에는 성산일출축제가 열린다. \r\n\r\n성산일출봉은 지방기념물로 관리하다 2000년 7월 19일 천연기념물로 지정되었으며, 빼어난 경관과 지질학적 가치를 인정받아 2007년 7월 2일 UNESCO 세계자연유산에 등재되었다. 또한 2010년 10월에는 UNESCO 세계지질공원에 인증되었고, 2011년도 대한민국 자연생태관광 으뜸명소, 2012년 12월 한국관광 기네스 12선에도 선정되었다.\r\n\r\n",
    "created": "20160530111636",
    "changed": "20220801015725",
    "catemappList": [
      {
        "seq": 30478,
        "contentsid": {
          "value": "CONT_000000000500349",
          "label": "성산일출봉(UNESCO 세계자연유산)",
          "refId": "CONT_000000000500349"
        },
        "cate1cd": {
          "value": "cate0000000002",
          "label": "관광지",
          "refId": "contscate>cate0000000002"
        },
        "cate2cd": {
          "value": "cate0000000009",
          "label": "자연",
          "refId": "cate0000000002>cate0000000009"
        },
        "cate3cd": {
          "value": "cate0000000035",
          "label": "오름",
          "refId": "cate0000000009>cate0000000035"
        },
        "created": "20220317092423"
      }
    ],
    "festivalcontents": null,
    "repPhoto": {
      "descseo": "성산일출봉(UNESCO 세계자연유산)",
      "photoid": {
        "photoid": 2018052306801,
        "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201810/17/c072ee1a-2a02-4be7-b0cd-62f4daf2f847.gif",
        "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201810/17/e798d53c-1c8a-4d44-a8ab-111beae96db4.gif"
      }
    },
    "PHOTOSHARECOUNT": 978,
    "reservelink": null
  },
  {
    "alltag": "섬속의섬,경관/포토,아이,맑음,자연경관,포토스팟,어린이,봄꽃,유채꽃,유네스코,공용주차장,화장실,편의점,음료대,장애인 전용 주차장,아주 어려움,UNESCO 세계지질공원,실내+실외,상,체험,포토스팟,기타,등산,물놀이,우도 관광,1~2시간",
    "contentsid": "CONT_000000000500477",
    "contentscd": {
      "value": "c1",
      "label": "관광지",
      "refId": "contentscd>c1"
    },
    "title": "우도(해양도립공원)",
    "region1cd": {
      "value": "region3",
      "label": "섬 속의 섬",
      "refId": "region>region3"
    },
    "region2cd": {
      "value": "31",
      "label": "우도",
      "refId": "region3>31"
    },
    "address": "제주특별자치도 제주시 우도면 연평리 904-1",
    "roadaddress": "제주특별자치도 제주시 우도면 삼양고수물길 1",
    "tag": "섬속의섬,경관/포토,아이,맑음,자연경관,포토스팟,어린이,봄꽃,유채꽃,유네스코",
    "introduction": "소가 누워있는 형상을 하고 있는 제주의 가장 큰 부속섬",
    "readcnt": 631613,
    "likecnt": 172,
    "reviewcnt": 590,
    "markcnt": 2073,
    "snssharecnt": 872,
    "schedulecnt": 0,
    "visitcnt": 5,
    "evelpt": 5,
    "latitude": 33.51949,
    "longitude": 126.95109,
    "postcode": "63365",
    "phoneno": "064-728-1527",
    "sbst": "우도는 소가 누워있는 모양을 닮았다고 해서 일찍부터 소섬 또는 쉐섬으로 불리웠다. 완만한 경사와 옥토, 풍부한 어장, 우도팔경 등 천혜의 자연조건을 갖춘 관광지로써 한해 약 200만 명의 관광객이 찾는 제주의 대표적인 부속섬이다. 성산항과 종달항에서 우도가는 배를 탈 수 있는데 어디서 출발하든 15분 정도 소요된다. 섬의 길이는 3.8km, 둘레는 17km. 쉬지 않고 걸으면 3~4시간 걸리는 거리지만, 대부분의 관광객은 버스나 자전거, 미니 전기차를 타고 유명한 관광지 위주로 돌아본다. \r\n검멀레해변이나 우도봉, 홍조단괴해변, 하고수동해변 등 유명한 관광지 1-2개를 둘러보고, 카페나 음식점에서 휴식을 즐겨도 대략 3-4시간 정도 소요된다. \r\n여유있게 우도를 즐기고 싶다면 오전 아침배를 타고 들어가 오후 배를 타고 나와 하루종일 우도에 머물러 보는것도 좋다. 단, 기상에 따라 배 운항여부가 달라질수 있으니 우도 여행일정을 짜는데는 기상조건을 필히 확인해야한다. \r\n우도를 찾는 관광객은 홍조단괴해변, 우도봉, 검멀레 해변을 주로 찾는다. 홍조단괴해변은 산호해변으로도 불렸는데, 백사장을 이룬 하얀 알갱이가 산호가 아닌 홍조류가 딱딱하게 굳어 알갱이처럼 부서지면서 만들어진 것이 밝혀지면서 홍조단괴해변으로 부르며, 홍조류로 이뤄진 백사장은 세계에서 드물어 보호하고 있다. \r\n\r\n너른 백사장과 아름다운 바다색으로 유명한 하고수동해수욕장도 있다. 경사가 완만한 천진동 코스와 경치가 멋진검멀레 해안코스가 있으며, 우도봉에 올라 우도의 전경을 바라볼 수도 있다. 자연 절경 이외에도 바다낚시, 자전거 하이킹, 잠수함과 유람선 등을 통해 여행의 재미를 더하고 있다. \r\n\r\n※ 우도 외부차량(렌터카, 전세버스) 반입 제한 조치는 2022년 7월 31일까지로 연장되었다.\r\n(단, 1~3급 장애인과 만 65세 이상 노약자, 임산부, 만 6세 미만의 영유아를 동반하는 경우와 우도에 숙박하는 관광객이 탄 렌터카는 반입 가능하다.)",
    "created": "20160530111636",
    "changed": "20220801020057",
    "catemappList": [
      {
        "seq": 29822,
        "contentsid": {
          "value": "CONT_000000000500477",
          "label": "우도(해양도립공원)",
          "refId": "CONT_000000000500477"
        },
        "cate1cd": {
          "value": "cate0000000002",
          "label": "관광지",
          "refId": "contscate>cate0000000002"
        },
        "cate2cd": {
          "value": "cate0000001257",
          "label": "섬속의 섬",
          "refId": "cate0000000002>cate0000001257"
        },
        "cate3cd": {
          "value": "cate0000001258",
          "label": "섬속의 섬",
          "refId": "cate0000001257>cate0000001258"
        },
        "created": "20220224160011"
      }
    ],
    "festivalcontents": null,
    "repPhoto": {
      "descseo": "Udo Maritime Park",
      "photoid": {
        "photoid": 19203,
        "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/dd51e08a-a970-466a-972e-f47f405ca644.jpg",
        "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201804/30/e1c2f9e4-bf4c-488c-884c-5674f8d8b119.jpg"
      }
    },
    "PHOTOSHARECOUNT": 1263,
    "reservelink": null
  },
  {
    "alltag": "숲길,걷기/등산,친구,커플,흐림,봄,자연경관,도보여행,도보,숲,단풍,화장실,어려움",
    "contentsid": "CONT_000000000500281",
    "contentscd": {
      "value": "c1",
      "label": "관광지",
      "refId": "contentscd>c1"
    },
    "title": "사려니숲길",
    "region1cd": {
      "value": "region1",
      "label": "제주시",
      "refId": "region>region1"
    },
    "region2cd": {
      "value": "15",
      "label": "조천",
      "refId": "region1>15"
    },
    "address": "제주특별자치도 제주시 조천읍 교래리 산 137-1",
    "roadaddress": "제주특별자치도 제주시 조천읍 교래리 산 137-1",
    "tag": "숲길,걷기/등산,친구,커플,흐림,봄,자연경관,도보여행,도보,숲,단풍",
    "introduction": "제주 숨은 비경 31, 삼나무 향기에 취하며 걷는 아름답고 청정한 숲길",
    "readcnt": 680886,
    "likecnt": 195,
    "reviewcnt": 502,
    "markcnt": 2829,
    "snssharecnt": 1096,
    "schedulecnt": 0,
    "visitcnt": 10,
    "evelpt": 5,
    "latitude": 33.40845,
    "longitude": 126.63976,
    "postcode": null,
    "phoneno": "064-900-8800",
    "sbst": "사려니숲길은 제주의 숨은 비경 31곳 중 하나로, 비자림로를 시작으로 물찻오름과 사려니 오름을 거쳐가는 삼나무가 우거진 숲길이다. 사려니오름까지 이어지는 숲길이기 때문에 사려니숲길이라고 불린다. ‘사려니’는 ‘신성한 숲’ 혹은 ‘실 따위를 흩어지지 않게 동그랗게 포개어 감다’라는 뜻으로 숲길을 거닐면 상쾌한 삼나무 향에 포개진 듯한 느낌을 받을 수 있다. 빽빽한 삼나무뿐만 아니라 졸참나무, 서어나무, 때죽나무, 편백나무 등 다양한 수종이 서식하고 있다. 다양한 수종이 서식하기 때문에 오소리와 제주족제비를 비롯한 포유류, 팔색조와 참매를 비롯한 조류, 쇠살모사를 비롯한 파충류 등의 보금자리가 되기도 한다.\r\n\r\n사려니숲길은 본래 숲의 모습이 많이 훼손되지 않아 트래킹을 좋아하는 여행자들이 즐겨 찾는다. 지난 2002년 유네스코가 지정한 제주 생물권 보전지역(Biosphere Resev)이기도 하다. 숲보호를 위해 자연휴식년제로 '물찻오름'은 탐방을 제한했었으나, 한시적으로 이곳을 개방하는 <사려니숲 에코힐링(Eco-Healing)> 행사가 열리기도 했다. 사려니숲길을 걷다가 위를 올려다보면 하늘을 향해 시원하게 쭉쭉 뻗은 삼나무가 그늘을 만들어주고 그 사이로 햇살이 비춘다. 여름에는 제아무리 무더운 날에도 숲길 사이로 부는 시원한 바람을 느낄 수 있다. 제주에서 청정한 공기를 마시며 몸과 마음을 치유받고 싶다면 방문하기 좋다. 붉은 화산송이 길과 빼곡한 삼나무 숲길을 만끽하고 싶다면 사려니 입출구보다는 붉은오름 입출구 쪽으로 가야 한다.\r\n\r\n□ 사려니숲길 탐방방법\r\n♧ 자가용 이용자가 걸어서 탐방을 원할 경우\r\n     ☞ 사려니숲주차장→조릿대숲길→숲길입구(비자림로변)→물찻오름에서 돌아오기\r\n         (소요시간/3시간∼ 3시간 30분 가량)\r\n         ※ 조릿대 숲길은 노면상태가 나쁘고, 고저차가 있으므로 노약자나 유모차를 끌고온 경우 남조로변 입구 이용\r\n     ☞ 남조로변 사려니숲길 입구 주차 → 물찻오름에서 돌아오기(소요시간/2시간∼2시간 30분)\r\n♧ 대중교통 이용자가 걸어서 탐방을 원할 경우\r\n    ☞ 사려니숲길입구 하차(비자림로변, 붉은오름)\r\n       → 물찻오름 입구에서 돌아오거나 숲길입구로 이동 대중교통 이용(소요시간/2시간 정도)\r\n♧ 단순 탐방(2시간 이내, 관광목적)을 원할 경우\r\n    ☞ 비자림로변 사려니숲길 주변에는 주차 공간 없으므로 남조로변(붉은오름 남쪽) 숲길 주변 주차후 탐방",
    "created": "20160530111636",
    "changed": "20220801020101",
    "catemappList": [
      {
        "seq": 30636,
        "contentsid": {
          "value": "CONT_000000000500281",
          "label": "사려니숲길",
          "refId": "CONT_000000000500281"
        },
        "cate1cd": {
          "value": "cate0000000002",
          "label": "관광지",
          "refId": "contscate>cate0000000002"
        },
        "cate2cd": {
          "value": "cate0000001320",
          "label": "도보",
          "refId": "cate0000000002>cate0000001320"
        },
        "cate3cd": {
          "value": "cate0000001411",
          "label": "생태·숲길",
          "refId": "cate0000001320>cate0000001411"
        },
        "created": "20220418154320"
      },
      {
        "seq": 30637,
        "contentsid": {
          "value": "CONT_000000000500281",
          "label": "사려니숲길",
          "refId": "CONT_000000000500281"
        },
        "cate1cd": {
          "value": "cate0000000002",
          "label": "관광지",
          "refId": "contscate>cate0000000002"
        },
        "cate2cd": {
          "value": "cate0000000009",
          "label": "자연",
          "refId": "cate0000000002>cate0000000009"
        },
        "cate3cd": {
          "value": "cate0000001321",
          "label": "그외",
          "refId": "cate0000000009>cate0000001321"
        },
        "created": "20220418154320"
      }
    ],
    "festivalcontents": null,
    "repPhoto": {
      "descseo": "Saryeoni Forest Path",
      "photoid": {
        "photoid": 18168,
        "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/552458b3-55a3-4589-b2e7-d8f29d1ca277.jpg",
        "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201804/30/c9c42359-f82f-43a4-919e-03ecd197a2eb.jpg"
      }
    },
    "PHOTOSHARECOUNT": 859,
    "reservelink": null
  },
  {
    "alltag": "경관/포토,커플,아이,맑음,겨울,힐링,자연경관,포토스팟,어린이,어트랙션,동백,수국,공용주차장,현금결제,카드결제,화장실,단독접근가능,단차없음,장애인 화장실,장애인 전용 주차장,수동 휠체어 대여 가능,아주 어려움,실외,중,공연/전시,포토스팟,2~3시간",
    "contentsid": "CNTS_000000000001195",
    "contentscd": {
      "value": "c1",
      "label": "관광지",
      "refId": "contentscd>c1"
    },
    "title": "카멜리아힐",
    "region1cd": {
      "value": "region2",
      "label": "서귀포시",
      "refId": "region>region2"
    },
    "region2cd": {
      "value": "23",
      "label": "안덕",
      "refId": "region2>23"
    },
    "address": "제주특별자치도 서귀포시 안덕면 상창리 271",
    "roadaddress": "제주 서귀포시 안덕면 병악로 166",
    "tag": "경관/포토,커플,아이,맑음,겨울,힐링,자연경관,포토스팟,어린이,어트랙션,동백,수국",
    "introduction": "카멜리아힐은 동양에서 가장 큰 동백 수목원으로 토종 동백부터 아기 동백, 유럽 동백 등 80여 개국 500여 품종의 수많은 동백꽃을 만날 수 있다. 수목원 안에 아기자기한 포토 스폿이 많아 연인과 가족 단위 관광객에게 특히 인기가 높다. 동백꽃이 피는 계절이면 흐드러지게 피어난 동백꽃을 배경으로 멋진 인생 사진을 남기기 위해 찾아드는 발걸음이 끊이지 않는다.",
    "readcnt": 204204,
    "likecnt": 150,
    "reviewcnt": 473,
    "markcnt": 2851,
    "snssharecnt": 190,
    "schedulecnt": 0,
    "visitcnt": 14,
    "evelpt": 5,
    "latitude": 33.289135,
    "longitude": 126.37011,
    "postcode": null,
    "phoneno": "064-792-0088",
    "sbst": "태교 여행의 순간을 아름답게 남기고 싶다면 카멜리아힐을 방문해보자. 카멜리아힐은 동양에서 가장 큰 동백 수목원으로 토종 동백부터 아기 동백, 유럽 동백 등 80여 개국 500여 품종의 수많은 동백꽃을 만날 수 있다. 수목원 안에 아기자기한 포토 스폿이 많아 연인과 가족 단위 관광객에게 특히 인기가 높다. 동백꽃이 피는 계절이면 흐드러지게 피어난 동백꽃을 배경으로 멋진 인생 사진을 남기기 위해 찾아드는 발걸음이 끊이지 않는다. 어디 동백꽃뿐이랴. 여름이 시작되면 파란 하늘을 닮은 수국 꽃이 관람객들을 맞이하고 가을에는 억새와 핑크뮬리가 가을 정원을 가득 채운다. 계절마다 새롭게 옷을 갈아입는 덕분에 어느 때에 방문해도 인생샷 100%의 성공률을 자랑한다. \r\n\r\n곳곳에 걸린 센스 넘치는 가렌더 역시 인생샷 스팟에 한몫 더한다. 다양한 문구들이 적힌 가렌더는 별다른 소품 없이도 여행하는 기분을 맘껏 느끼게 한다. 이니스프리 CF의 배경으로 알려진 새소리 바람소리길은 물론 제주의 돌담이 이어진 전통 올레길과 노란 전구들이 반짝반짝 빛나는 감성적인 숲길도 사진에 꼭 담아 가야 할 촬영 포인트이다. 카멜리아힐을 한 바퀴 둘러볼 경우 대략 40분~1시간20분 정도 소요가 된다. 구석구석 탐나는 포토존이 많아 여기저기 사진을 찍다 보면 시간 가는 줄 모른다. 관람 시간을 넉넉히 잡고 방문하기를 권한다. \r\n",
    "created": "20160818110859",
    "changed": "20220801015653",
    "catemappList": [
      {
        "seq": 31190,
        "contentsid": {
          "value": "CNTS_000000000001195",
          "label": "카멜리아힐",
          "refId": "CNTS_000000000001195"
        },
        "cate1cd": {
          "value": "cate0000000002",
          "label": "관광지",
          "refId": "contscate>cate0000000002"
        },
        "cate2cd": {
          "value": "cate0000001251",
          "label": "테마관광지",
          "refId": "cate0000000002>cate0000001251"
        },
        "cate3cd": {
          "value": "cate0000000058",
          "label": "테마공원",
          "refId": "cate0000001251>cate0000000058"
        },
        "created": "20220615103520"
      }
    ],
    "festivalcontents": null,
    "repPhoto": {
      "descseo": "카멜리아힐",
      "photoid": {
        "photoid": 2019022583487,
        "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/202110/20/fb0a5c04-e09e-4dee-8d9e-68c4ad774388.JPG",
        "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/202110/20/b06b8d55-0f87-4efd-8a9f-a682a48a4868.JPG"
      }
    },
    "PHOTOSHARECOUNT": 1038,
    "reservelink": null
  },
  {
    "alltag": "일몰,해수욕장,액티비티,아이,맑음,여름,공용주차장,화장실,편의점,음료대,유도 및 안내시설,경보 및 피난시설,아주 어려움,실외,물놀이,1~2시간",
    "contentsid": "CONT_000000000500697",
    "contentscd": {
      "value": "c1",
      "label": "관광지",
      "refId": "contentscd>c1"
    },
    "title": "협재해수욕장",
    "region1cd": {
      "value": "region1",
      "label": "제주시",
      "refId": "region>region1"
    },
    "region2cd": {
      "value": "13",
      "label": "한림",
      "refId": "region1>13"
    },
    "address": "제주특별자치도 제주시 한림읍 협재리 2447",
    "roadaddress": "제주특별자치도 제주시 한림읍 한림로 329-10",
    "tag": "일몰,해수욕장,액티비티,아이,맑음,여름,자연경관,체험,레저/체험,해변,물놀이,어린이,수상레저",
    "introduction": "비양도, 은모래, 바다가 그려낸 그림같이 아름다운 해변",
    "readcnt": 241967,
    "likecnt": 148,
    "reviewcnt": 452,
    "markcnt": 2482,
    "snssharecnt": 231,
    "schedulecnt": 0,
    "visitcnt": 12,
    "evelpt": 5,
    "latitude": 33.393845,
    "longitude": 126.239716,
    "postcode": "63011",
    "phoneno": "064-728-3981",
    "sbst": "​제주도 서쪽에 가볼만한 해수욕장을 꼽으라 하면 단연 1,2위로 꼽아 추천하는 곳이 협재해수욕장이다.\n제주시 한림읍에 자리하며, 제주올레 14코스의 일부다. 금능해수욕장과 이웃하고 있는 쌍둥이해수욕장이기도 하다. 투명한 물에 에메랄드빛 물감을 서서히 풀어놓은 듯한 바다빛은 보는 것만으로도 힐링이 된다. 썰물 때면 조개껍질이 많이 섞인 은모래빛 백사장이 끝없이 이어진다.​​​​​​​\n바다 앞에는 어린 왕자 속 보아뱀을 삼킨 코끼리 그림 모양의 ‘비양도’가 있다. 비양도와 바다 위로 떨어지는 석양은 이곳에서 놓칠 수 없는 또 하나의 장관이다. 여름에는 야간개장도 하니 야자나무 아래에서 제주도 푸른 밤을 만끽할 수 있다.\n협재해수욕장은 경사가 완만해 수심이 얕고, 소나무 숲도 있어서 어린이가 있는 가족 단위 여행객의 휴가지로 좋다. 주위에는 다양한 카페와 맛집, 숙소들이 있고, 주변 관광지로는 한림공원, 금능해수욕장, 금능석물원, 월령선인장자생지 등이 있다.",
    "created": "20160530111636",
    "changed": "20220801020004",
    "catemappList": [
      {
        "seq": 26524,
        "contentsid": {
          "value": "CONT_000000000500697",
          "label": "협재해수욕장",
          "refId": "CONT_000000000500697"
        },
        "cate1cd": {
          "value": "cate0000000002",
          "label": "관광지",
          "refId": "contscate>cate0000000002"
        },
        "cate2cd": {
          "value": "cate0000000009",
          "label": "자연",
          "refId": "cate0000000002>cate0000000009"
        },
        "cate3cd": {
          "value": "cate0000000037",
          "label": "해변",
          "refId": "cate0000000009>cate0000000037"
        },
        "created": "20211025092055"
      }
    ],
    "festivalcontents": null,
    "repPhoto": {
      "descseo": "협재해수욕장",
      "photoid": {
        "photoid": 2019022583476,
        "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/202110/20/32ec3ee6-fad9-440d-95ea-628ff6453a48.jpg",
        "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/202110/20/99fd2f85-ed17-4184-966d-f81cd5eabf31.jpg"
      }
    },
    "PHOTOSHARECOUNT": 764,
    "reservelink": null
  },
  {
    "alltag": "해변,경관/포토,커플,여름,자연경관,포토스팟,공용주차장,화장실,편의점,음료대,유도 및 안내시설,아주 어려움",
    "contentsid": "CONT_000000000500496",
    "contentscd": {
      "value": "c1",
      "label": "관광지",
      "refId": "contentscd>c1"
    },
    "title": "월정리해변",
    "region1cd": {
      "value": "region1",
      "label": "제주시",
      "refId": "region>region1"
    },
    "region2cd": {
      "value": "16",
      "label": "구좌",
      "refId": "region1>16"
    },
    "address": "제주특별자치도 제주시 구좌읍 월정리 33",
    "roadaddress": "제주특별자치도 제주시 구좌읍 월정리 33-3",
    "tag": "해변,경관/포토,커플,여름,자연경관,포토스팟",
    "introduction": "'달이 머물다 가는’ 제주도의 아름다운 해변",
    "readcnt": 170854,
    "likecnt": 96,
    "reviewcnt": 441,
    "markcnt": 2258,
    "snssharecnt": 121,
    "schedulecnt": 0,
    "visitcnt": 2,
    "evelpt": 5,
    "latitude": 33.555809408904416,
    "longitude": 126.79662397696836,
    "postcode": "63358",
    "phoneno": "064-783-5798",
    "sbst": "제주도의 동쪽에 위치하고 있는 마을인 '월정리'는 '달이 머문다'는 뜻의 이름을 가진 서정적인 풍경의 마을이다. 아름다운 에메랄드빛 바다가 한 폭의 그림처럼 펼쳐져 있고, 그 위에는 밝은 달이 비친다. 풍경화처럼 아름다운 월정리 해변을 방문한 여행객들은 저마다 다양한 방법으로 해변의 경치를 만끽한다. 특히 수심이 얕은 편이기 때문에 아이를 동반한 가족들이 물놀이를 즐기기 좋다. 월정리의 아름다운 풍광이 여행객들 사이에서 점점 유명해질수록 월정리의 해변을 방문하는 사람들이 더욱 늘어났고, 그에 맞춰 다양한 식당과 카페, 숙박시설 등이 많이 들어서 있다. 몇몇 카페는 사람들이 바다를 보며 쉬어갈 수 있도록 의자를 두었는데, 이 의자에 앉아 찍은 사진이 유명해 지면서 하나의 포토스팟이 되기도 했다. 월정리엔 카메라를 들고 제주도 여행의 추억을 담는 사람들의 모습을 쉽게 볼 수 있다. 그 밖에 서핑, 스노클링, 카약 등 다양한 수상레포츠를 즐기며 보다 더 역동적으로 해변에서의 즐거움을 만끽하는 사람들도 있다. 월정리 해변은 일정한 높이의 파도가 지속적으로 들어오기 때문에 서핑을 하기에 좋아 서퍼들이 즐겨찾는다.  제주도 올레길 20코스 '김녕-하도 올레'와 ‘김녕-월정 지질트레일 코스’의 일부여서,  뚜벅이 여행객들이 걷다가 바다의 아름다운 풍경과 시원한 바다 내음을 맡으며 쉴수 있는 아름다운 해변이다. ",
    "created": "20160530111636",
    "changed": "20220801015038",
    "catemappList": [
      {
        "seq": 31552,
        "contentsid": {
          "value": "CONT_000000000500496",
          "label": "월정리해변",
          "refId": "CONT_000000000500496"
        },
        "cate1cd": {
          "value": "cate0000000002",
          "label": "관광지",
          "refId": "contscate>cate0000000002"
        },
        "cate2cd": {
          "value": "cate0000000009",
          "label": "자연",
          "refId": "cate0000000002>cate0000000009"
        },
        "cate3cd": {
          "value": "cate0000000037",
          "label": "해변",
          "refId": "cate0000000009>cate0000000037"
        },
        "created": "20220712164047"
      }
    ],
    "festivalcontents": null,
    "repPhoto": {
      "descseo": "Woljeong-ri Beach",
      "photoid": {
        "photoid": 19274,
        "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/ec362343-4c4b-4da2-905d-1d4be8b26d44.jpg",
        "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201804/30/d218b9b6-a3d2-4f64-8f93-fafcb4f9278b.jpg"
      }
    },
    "PHOTOSHARECOUNT": 747,
    "reservelink": null
  },
  {
    "alltag": "해수욕장,액티비티,아이,맑음,여름,공용주차장,화장실,편의점,음료대,유도 및 안내시설,경보 및 피난시설,단차없음,장애인 화장실,장애인 전용 주차장,어려움,실외,1~2시간",
    "contentsid": "CONT_000000000500693",
    "contentscd": {
      "value": "c1",
      "label": "관광지",
      "refId": "contentscd>c1"
    },
    "title": "함덕해수욕장",
    "region1cd": {
      "value": "region1",
      "label": "제주시",
      "refId": "region>region1"
    },
    "region2cd": {
      "value": "15",
      "label": "조천",
      "refId": "region1>15"
    },
    "address": "제주특별자치도 제주시 조천읍 함덕리 1008-1",
    "roadaddress": "제주특별자치도 제주시 조천읍 조함해안로 519-10",
    "tag": "해수욕장,액티비티,아이,맑음,여름,자연경관,체험,레저/체험,해변,물놀이,어린이,수상레저",
    "introduction": "에매랄드처럼 빛나는 '한국의 몰디브'",
    "readcnt": 194813,
    "likecnt": 48,
    "reviewcnt": 431,
    "markcnt": 1380,
    "snssharecnt": 226,
    "schedulecnt": 0,
    "visitcnt": 13,
    "evelpt": 5,
    "latitude": 33.54379,
    "longitude": 126.668846,
    "postcode": "63333",
    "phoneno": "064-728-3989",
    "sbst": "제주올레 19코스를 걷다 보면 에메랄드빛 보석을 품고 있는 함덕해수욕장을 만날 수 있다. 제주시 조천읍 함덕리에 자리한 함덕해수욕장은 해수욕장 바로 옆에 우뚝선 오름(서우봉) 덕분에 ‘함덕서우봉해변’이라고도 불린다. 제주공항에서 불과 20km 떨어졌지만, 이곳에 도착하는 순간 다른 나라에 온 것 같은 기분이 든다. 입구부터 환영해주는 키 큰 야자수들, 하얀 모래와 대조를 이루는 에메랄드빛 바다, ​​​​​​​ 모래와 미역마저 투명하게 비춰주는 맑은 물과 하얀 파도가 그러하다. \n\n제주도 수많은 해수욕장 중에서도, 바다색이 가장 예쁜 3곳을 꼽는다면 단연 협재, 김녕, 그리고 함덕해수욕장이다. 물이 맑고 수심이 얕아서 가족단위 피서지로도 좋다. 해수욕장 서쪽은 구름다리로 연결되어 있어 바다 위를 걷는 듯한 경험을 할 수 있다. 피크닉 하기 좋은 잔디밭, 밤에도 안심하고 바다를 즐길 수 있는 산책로가 매력이어서 사계절 찾는 이들의 발길이 끊이지 않는다. 특히 여름에는 야간개장도 하고 있어 제주의 푸른 밤을 바다에서 즐길 수 있다. \n\n바로 옆에 자리한 서우봉은 봄이 되면 노란 유채꽃으로 여름엔 초록빛으로 계절마다 그림 같은 풍경을 선사한다. 서우봉에 오르면 함덕해수욕장을 한눈에 담을 수 있는 호사를 누릴 수 있다. ​​​​​​​날씨가 좋으면 한라산과 동쪽 오름들도 내려다볼 수 있는 최고의 전망포인트이다. \n주변 관광지로는 북촌 돌하르방공원, 너븐숭이4.3기념관, 조천만세동산, 김녕해수욕장, 만장굴 등이 있다.",
    "created": "20160530111636",
    "changed": "20220801014848",
    "catemappList": [
      {
        "seq": 26366,
        "contentsid": {
          "value": "CONT_000000000500693",
          "label": "함덕해수욕장",
          "refId": "CONT_000000000500693"
        },
        "cate1cd": {
          "value": "cate0000000002",
          "label": "관광지",
          "refId": "contscate>cate0000000002"
        },
        "cate2cd": {
          "value": "cate0000000009",
          "label": "자연",
          "refId": "cate0000000002>cate0000000009"
        },
        "cate3cd": {
          "value": "cate0000000037",
          "label": "해변",
          "refId": "cate0000000009>cate0000000037"
        },
        "created": "20211020143312"
      }
    ],
    "festivalcontents": null,
    "repPhoto": {
      "descseo": "함덕해수욕장",
      "photoid": {
        "photoid": 2019022561221,
        "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201908/29/6fa8ac92-91b1-4314-a05e-0c962f9ab2f8.jpg",
        "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201908/29/eebc954b-bfb0-4dda-a593-45427c1e6711.jpg"
      }
    },
    "PHOTOSHARECOUNT": 710,
    "reservelink": null
  },
  {
    "alltag": "오름,걷기/등산,친구,맑음,가을,우수관광사업체,공용주차장,현금결제,카드결제,화장실,편의점,음료대,단독접근가능,단차없음,장애인 화장실,장애인 전용 주차장,수동 휠체어 대여 가능,어려움,우수관광사업체,실외,상,등산,산책로, 등산로,1~2시간",
    "contentsid": "CONT_000000000500283",
    "contentscd": {
      "value": "c1",
      "label": "관광지",
      "refId": "contentscd>c1"
    },
    "title": "산굼부리",
    "region1cd": {
      "value": "region1",
      "label": "제주시",
      "refId": "region>region1"
    },
    "region2cd": {
      "value": "15",
      "label": "조천",
      "refId": "region1>15"
    },
    "address": "제주특별자치도 제주시 조천읍 교래리 342-2",
    "roadaddress": "제주특별자치도 제주시 조천읍 비자림로 768",
    "tag": "오름,걷기/등산,친구,맑음,가을,우수관광사업체,자연경관,억새",
    "introduction": "사계절마다 다른풍경의 '분화구 식물원', 국가지정 문화재 천연기념물 263호",
    "readcnt": 116178,
    "likecnt": 39,
    "reviewcnt": 355,
    "markcnt": 1066,
    "snssharecnt": 48,
    "schedulecnt": 0,
    "visitcnt": 14,
    "evelpt": 5,
    "latitude": 33.4316207,
    "longitude": 126.6900058,
    "postcode": null,
    "phoneno": "064-783-9900",
    "sbst": "산굼부리는 제주특별자치도의 천연기념물 제263호로 지정된 분화구이다. '굼부리'는 화산체의 분화구를 일컫는 제주말이다. 360여개의 한라산 기생화산 중의 하나이지만, 다른 기생화산들과는 달리 커다란 분화구를 가지고 있는데, 산체에 비해서 화구의 크기가 비교적 큰 편이라는 점에서 특이하다.\r\n\r\n이곳은 다양한 희귀식물들이 한 공간에 존재하는 '분화구 식물원'이기도 하다. 산굼부리의 식생은 한라산 동부의 원식생을 유추할 수 있는 중요한 단서가 되기 때문에 보호되고 있기도 하다. 지질학적 가치 또한 높아 여러 방면에서 학문적 가치가 상당한 곳이라고 할 수 있다.\r\n\r\n가파르지 않은 길을 쭉 올라가다 보면 금세 정상에 닿게 되는데, 정상에 비치되어 있는 망원경으로 주변의 성산일출봉과 오름들을 비롯한 다양한 경관을 좀 더 자세하게 눈에 담을 수 있다.\r\n가을의 산굼부리에는 바람을 맞으며 억새밭에 서서 제주의 가을을 만끽하는 사람들로 붐빈다. 가득 피어난 억새가 이루는 은빛 물결이 푸른 하늘과 어우러지며 멋진 경관을 연출해낸다. 그러나 가을뿐만 아니라 모든 계절마다 각자의 계절을 맞은 다양한 식물들이 피어나며 사계절 내내 새로운 풍경이 펼쳐지기 때문에, 사계절 중 어느 계절에 방문하든 멋진 경관이 눈앞에 펼쳐질 것이다.",
    "created": "20160530111636",
    "changed": "20220801012624",
    "catemappList": [
      {
        "seq": 29622,
        "contentsid": {
          "value": "CONT_000000000500283",
          "label": "산굼부리",
          "refId": "CONT_000000000500283"
        },
        "cate1cd": {
          "value": "cate0000000002",
          "label": "관광지",
          "refId": "contscate>cate0000000002"
        },
        "cate2cd": {
          "value": "cate0000000009",
          "label": "자연",
          "refId": "cate0000000002>cate0000000009"
        },
        "cate3cd": {
          "value": "cate0000000035",
          "label": "오름",
          "refId": "cate0000000009>cate0000000035"
        },
        "created": "20220128094340"
      }
    ],
    "festivalcontents": null,
    "repPhoto": {
      "descseo": "Sangumburi Crater",
      "photoid": {
        "photoid": 18173,
        "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/c44bb372-4717-4e89-ad89-2c5dba285168.jpg",
        "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201804/30/a7b4a973-40e9-44e6-87d9-46a4c4f3b367.jpg"
      }
    },
    "PHOTOSHARECOUNT": 698,
    "reservelink": null
  },
  {
    "alltag": "일몰,밤,오름,걷기/등산,아이,봄,공용주차장,화장실,유도 및 안내시설,아주 어려움,실외,1시간 미만",
    "contentsid": "CONT_000000000500309",
    "contentscd": {
      "value": "c1",
      "label": "관광지",
      "refId": "contentscd>c1"
    },
    "title": "새별오름",
    "region1cd": {
      "value": "region1",
      "label": "제주시",
      "refId": "region>region1"
    },
    "region2cd": {
      "value": "12",
      "label": "애월",
      "refId": "region1>12"
    },
    "address": "제주특별자치도 제주시 애월읍 봉성리 산 59-8",
    "roadaddress": "제주특별자치도 제주시 애월읍 봉성리 산 59-8",
    "tag": "일몰,밤,오름,걷기/등산,아이,봄,자연경관,도보여행,도보,어린이,억새",
    "introduction": "제주 서부 애월에 위치해 있으며 억새가 아름다운 오름",
    "readcnt": 244427,
    "likecnt": 48,
    "reviewcnt": 345,
    "markcnt": 974,
    "snssharecnt": 248,
    "schedulecnt": 0,
    "visitcnt": 17,
    "evelpt": 5,
    "latitude": 33.36723,
    "longitude": 126.35711,
    "postcode": "63040",
    "phoneno": "064-728-2752",
    "sbst": "새별오름은 바리메오름·누운오름·당오름·금오름 등 많은 오름이 있는 밀집해있는 서부 중산간 오름지대 중에서 으뜸가는 서부의 대표오름이다. 저녁하늘에 샛별과 같이 외롭게 서있다 하여 붙여진 이름이라한다. 풍경이 아름답고, 성이시돌목장, 왕따나무가 근처에 있어 관광객이 많이 찾는 오름 중 하나다.\n​​​​​​​​경사가 약간 있으나 높이는 해발 519.3m(정상까지 소요시간은 30분 내외)로 그리 높지 않다. 정상에 오르면 제주도 서쪽 아름다운 해변과 비양도가 보인다. 남봉을 정점으로 남서, 북서, 북동 방향으로 등성이가 있으며, 등성이마다 봉우리가 있다. 서쪽은 삼태기 모양으로 넓게 열려 있고, 북쪽은 우묵하게 파여 있으며, 마치 별표처럼 둥그런 표창 같은 5개의 봉우리가 존재한다. 전체적으로 풀밭을 이루나 북쪽 사면에 일부 잡목이 형성되어 있고, 서북쪽 사면에 공동묘지가 조성되어 있다.\n​​​​​​​​새별오름에서는 매년 정월대보름을 전후하여 제주도를 대표하는 축제인 들불축제가 열린다. 제주도에서는 오래전부터 농한기에 소를 방목하기 위해 묵은 풀과 해충을 없애는 불놓기 문화가 있었다. 새별오름 들불축제는 이러한 목축문화를 계승한 축제로, 오름 전체가 불타오르는 모습이 장관이다. 1997년부터 시작하여, 2015년에는 문화체육관광부로부터 우수축제로 지정되었다. 가을에는 억새가 만발하여 장관을 연출한다. 사시사철 찾는 관광객이 많아 ​​​​​​​인근에 주차장이 잘 정비되어있다.",
    "created": "20160530111636",
    "changed": "20220801014850",
    "catemappList": [
      {
        "seq": 28131,
        "contentsid": {
          "value": "CONT_000000000500309",
          "label": "새별오름",
          "refId": "CONT_000000000500309"
        },
        "cate1cd": {
          "value": "cate0000000002",
          "label": "관광지",
          "refId": "contscate>cate0000000002"
        },
        "cate2cd": {
          "value": "cate0000000009",
          "label": "자연",
          "refId": "cate0000000002>cate0000000009"
        },
        "cate3cd": {
          "value": "cate0000000035",
          "label": "오름",
          "refId": "cate0000000009>cate0000000035"
        },
        "created": "20211214152601"
      }
    ],
    "festivalcontents": null,
    "repPhoto": {
      "descseo": "새별오름",
      "photoid": {
        "photoid": 2019022583537,
        "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/202110/20/380f2ed7-9680-4f51-a5f7-1c52771d3c11.jpg",
        "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/202110/20/44ef8fe0-fd1b-4638-a01c-df4ee5a005e9.jpg"
      }
    },
    "PHOTOSHARECOUNT": 660,
    "reservelink": null
  },
  {
    "alltag": "일출,해변,경관/포토,커플,맑음,가을,공용주차장,현금결제,카드결제,화장실,편의점,음료대,저상버스 접근 가능,장애인 화장실,장애인 전용 주차장,어려움,실외,상,등산,기타,산책로,1시간 미만",
    "contentsid": "CONT_000000000500343",
    "contentscd": {
      "value": "c1",
      "label": "관광지",
      "refId": "contentscd>c1"
    },
    "title": "섭지코지",
    "region1cd": {
      "value": "region2",
      "label": "서귀포시",
      "refId": "region>region2"
    },
    "region2cd": {
      "value": "17",
      "label": "성산",
      "refId": "region2>17"
    },
    "address": "제주특별자치도 서귀포시 성산읍 고성리 127-2",
    "roadaddress": "제주특별자치도 서귀포시 성산읍 섭지코지로 107",
    "tag": "일출,해변,경관/포토,커플,맑음,가을,자연경관,포토스팟,봄꽃,유채꽃",
    "introduction": "아름다운 해안이 일품인 섭지",
    "readcnt": 217317,
    "likecnt": 101,
    "reviewcnt": 338,
    "markcnt": 2599,
    "snssharecnt": 77,
    "schedulecnt": 0,
    "visitcnt": 10,
    "evelpt": 5,
    "latitude": 33.4305782,
    "longitude": 126.9277688,
    "postcode": null,
    "phoneno": "064-740-6000",
    "sbst": "제주 동부해안에 볼록 튀어나온 섭지코지는 성산 일출봉을 배경으로한 해안풍경이 일품이다. 들머리의 신양해변백사장, 끝머리 언덕위 평원에 드리워진 유채밭, 여유롭게 풀을 뜯는 제주조랑말들, 바위로 둘러친 해안절벽과 우뚝 치솟은 전설어린 선바위 등은 전형적인 제주의 아름다움을 만날 수 있다. 특히 제주의 다른 해안과는 달리 송이라는 붉은 화산재로 되어 있고, 밀물과 썰물에 따라 물속에 잠겼다가 일어서는 기암괴석들은 어디에서도 볼 수 없는 자연의 수석전시회를 연출한다.\n\n섭지코지의 섭지란, 재사(才士)가 많이 배출되는 지세라는 뜻이며, 코지는 육지에서 바다로 톡 튀어나온 '곶'을 뜻하는 제주방언이다.역사나 과학의 배경지식을 갖고 보면 섭지코지를 더욱 풍부하게 관망할 수 있는데, 먼저, 화산송이 언덕 등대 근처에선, 조선시대 왜구의 침입을 알리던 봉수대를 볼 수 있다. 높이 4m, 가로세로 길이 약 9m의 봉수대는 그 모양이 거의 원형에 가깝게 보존되어 있어, 이를 사용해야 했을 조선시대의 위급상황을 떠올려보며 역사의 발자취를 떠올려 볼 수 있다. 과학적인 시각에서 보면 화산폭발시 마그마가 분출되던 분화구의 중심부를 관찰 할 수 있는 훌륭한 자연학습의 장이기도 하다. 섭지코지는 바로 이 화도에서 분출된 스코리아(분석)가 쌓인 것이며, 선돌바위는 그 화도에 있던 마그마가 굳어져 형성된 암경(volcanic neck)으로 섭지코지에서는 스코리아와 암겸 관찰을 통해 화산폭발시 육지의 형성과정을 간접적으로 상상해볼수 있다. \n\n반면, 선돌바위에는 아래와 같은 슬픈 전설도 전해내려온다. 하늘에서 내려온 선녀에게 반한 동해 용왕신의 막내 아들은 100일 정성이 부족하여 선녀와의 혼인을 이루지 못하게 되었다. 슬픔에 빠진 그는 하늘에서 선녀가 내려와 주기만을 기다리고 기다리다 그 자리에 선채로 돌이 되어 버렸다 한다. 사랑을 이루지 못한 용왕신의 아들의 애틋한 마음때문인지 선돌 앞에서 사랑의 맹세를 하고 혼인을 하면 훌륭한 자녀를 얻을 수 있다는 전설이 전해진다. ",
    "created": "20160530111636",
    "changed": "20220801014840",
    "catemappList": [
      {
        "seq": 26380,
        "contentsid": {
          "value": "CONT_000000000500343",
          "label": "섭지코지",
          "refId": "CONT_000000000500343"
        },
        "cate1cd": {
          "value": "cate0000000002",
          "label": "관광지",
          "refId": "contscate>cate0000000002"
        },
        "cate2cd": {
          "value": "cate0000000009",
          "label": "자연",
          "refId": "cate0000000002>cate0000000009"
        },
        "cate3cd": {
          "value": "cate0000000037",
          "label": "해변",
          "refId": "cate0000000009>cate0000000037"
        },
        "created": "20211020171025"
      }
    ],
    "festivalcontents": null,
    "repPhoto": {
      "descseo": "섭지코지",
      "photoid": {
        "photoid": 2019022561200,
        "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201908/29/83d7988d-9df2-4540-acbe-23d8b3550bfe.jpg",
        "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201908/29/5e753684-1bfd-4a01-bd60-61d10df8b14b.jpg"
      }
    },
    "PHOTOSHARECOUNT": 552,
    "reservelink": null
  },
  {
    "alltag": "테마공원,커플,친구,부모,아이,혼자,맑음,휴식/힐링,녹차,실내관광지,어트랙션,공용주차장,현금결제,카드결제,화장실,무료 WIFI,편의점,음료대,유도 및 안내시설,경보 및 피난시설,엘리베이터,단독접근가능,단차없음,시각장애인 접근성,장애인 화장실,승강기,장애인 전용 주차장,수동 휠체어 대여 가능,어려움,실외,중,포토스팟,1시간 미만",
    "contentsid": "CONT_000000000500457",
    "contentscd": {
      "value": "c1",
      "label": "관광지",
      "refId": "contentscd>c1"
    },
    "title": "오설록티뮤지엄",
    "region1cd": {
      "value": "region2",
      "label": "서귀포시",
      "refId": "region>region2"
    },
    "region2cd": {
      "value": "23",
      "label": "안덕",
      "refId": "region2>23"
    },
    "address": "제주특별자치도 서귀포시 안덕면 서광리 1235-1",
    "roadaddress": "제주특별자치도 서귀포시 안덕면 신화역사로 15",
    "tag": "테마공원,커플,친구,부모,아이,혼자,맑음,휴식/힐링,녹차,실내관광지,어트랙션",
    "introduction": "제주녹차문화의 중심, 차박물관과 카페테리아, 2016 KOREAT JEJU TOP 30 선정",
    "readcnt": 106889,
    "likecnt": 75,
    "reviewcnt": 309,
    "markcnt": 2180,
    "snssharecnt": 60,
    "schedulecnt": 0,
    "visitcnt": 10,
    "evelpt": 5,
    "latitude": 33.3063942,
    "longitude": 126.2905203,
    "postcode": null,
    "phoneno": "064-794-5312",
    "sbst": "2001년 9월 개관한 오설록티뮤지엄은 국내외 차 관련 물품과 박물관이며, 푸른 녹차밭이 펼쳐지는 제주도 서광다원 입구에 위치하고 있다. 동서양 전통과 현대가 조화를 이룬 문화의 공간이자, 자연 친화적인 휴식공간으로, 건물 전체가 녹차잔을 형상화하여 만들어졌다. 녹차와 한국 전통 차문화를 이해할 수 있는 학습공간으로 설록차의 모든 것을 체험해 볼 수 있는 곳이다.\r\n​​​​​​​오설록의 ‘오’는 경쾌한 감탄의 의미와 함께, origin of sulloc, only sulloc, of sulloc cha의 의미를 가지고 있다. ​​​​실내에 가득한 녹차향과 통유리 너머로 보이는 푸른 녹차밭이 마음을 편하게 만들어줘, 제주를 찾는 많은 관광객이 한번쯤은 들르는 명소가 되었다. 티 하우스에서는 티 마스터가 직접 볶은 따뜻한 차와 오설록 녹차로 만든 음료 아이스크림, 롤케익크 등을 즐길 수 있다. 특히 진한 녹색의 그린티 롤케익크은 많이 달지 않아 어른들에게도 환영을 받는다.",
    "created": "20160530111636",
    "changed": "20220801020001",
    "catemappList": [
      {
        "seq": 31114,
        "contentsid": {
          "value": "CONT_000000000500457",
          "label": "오설록티뮤지엄",
          "refId": "CONT_000000000500457"
        },
        "cate1cd": {
          "value": "cate0000000002",
          "label": "관광지",
          "refId": "contscate>cate0000000002"
        },
        "cate2cd": {
          "value": "cate0000001251",
          "label": "테마관광지",
          "refId": "cate0000000002>cate0000001251"
        },
        "cate3cd": {
          "value": "cate0000000053",
          "label": "박물관",
          "refId": "cate0000001251>cate0000000053"
        },
        "created": "20220610165152"
      }
    ],
    "festivalcontents": null,
    "repPhoto": {
      "descseo": "오설록티뮤지엄",
      "photoid": {
        "photoid": 2019022559246,
        "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201908/06/c3b686e5-4d17-46f4-9e96-1de49d6af809.jpg",
        "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201908/06/ace38f9a-36db-491f-9ef6-4978d60e3da4.jpg"
      }
    },
    "PHOTOSHARECOUNT": 461,
    "reservelink": null
  },
  {
    "alltag": "산,걷기/등산,경관/포토,친구,사계절,자연경관,포토스팟,한라산,언택트,단풍,유네스코,공용주차장,화장실,편의점,음료대,저상버스 접근 가능,장애인 화장실,장애인 전용 주차장,아주 어려움,UNESCO 생물권보전지역,UNESCO 세계자연유산,UNESCO 세계지질공원",
    "contentsid": "CONT_000000000500685",
    "contentscd": {
      "value": "c1",
      "label": "관광지",
      "refId": "contentscd>c1"
    },
    "title": "한라산국립공원",
    "region1cd": {
      "value": "region1",
      "label": "제주시",
      "refId": "region>region1"
    },
    "region2cd": {
      "value": "11",
      "label": "제주시내",
      "refId": "region1>11"
    },
    "address": "제주특별자치도 제주시 1100로 2070-61",
    "roadaddress": "제주특별자치도 제주시 1100로 2070-61",
    "tag": "산,걷기/등산,경관/포토,친구,사계절,자연경관,포토스팟,한라산,언택트,단풍,유네스코",
    "introduction": "한반도 3대 영산 중 하나, 유네스코가 지정한 \r\n· 세계생물권보존지역\r\n· 세계자연유산\r\n· 세계지질공원",
    "readcnt": 164314,
    "likecnt": 93,
    "reviewcnt": 305,
    "markcnt": 952,
    "snssharecnt": 105,
    "schedulecnt": 0,
    "visitcnt": 5,
    "evelpt": 5,
    "latitude": 33.36132,
    "longitude": 126.54195,
    "postcode": null,
    "phoneno": "064-713-9950",
    "sbst": "​지리산, 북한의 금강산과 함께 한반도의 3대 영산에 속하는 한라산은 한반도의 최남단에 위치하고 있으며, 높이 해발 1,950m로 남한에서 가장 높다.다양한 식생 분포를 이뤄 학술적 가치가 매우 높고 동식물의 보고로서, 1966년 10월 12일 천연기념물 제182호인 한라산천연보호구역으로 지정보호되고 있다.1970년 3월 24일 국립공원으로 지정되었고, 2002년 12월에는 UNESCO 생물권 보전지역으로 지정되었다. 신생대 제4기의 젊은 화산섬인 한라산은 지금으로부터 2만 5천년 전까지 화산분화 활동을 하였으며, 한라산 주변에는 360여 개의 오름들이 분포되어 있어 특이한 경관을 창출하고 있다. 섬 중앙에 우뚝 솟은 한라산의 웅장한 자태는 자애로우면서도 강인한 기상을 가슴에 품고 있는 듯하다. 천자만홍에 덮인 가을의 만산홍엽은 빼놓을 수 없는 경관이며, 유독 눈 속에 잠긴 설경의 한라는 절경 중의 절경으로 꼽힌다. 철 따라 어김없이 바뀌는 형형색색의 자연경관은 찾는 이로 하여금 절로 탄성을 자아내게 한다. 태고의 신비를 그대로 간직한 한라산과 아름다운 땅 제주는 신이 우리에게 선물한 최고의 보물이자 세계인이 함께 가꾸어야 할 소중한 유산으로 인정받아 2007년 6월 27일 제주 화산섬과 용암동굴이 우리나라 최초의 유네스코 세계자연유산으로 등재되었고, 2010년 10월 4일 세계지질공원으로 인증받았다. \r\n[등산코스 안내 ]※ 청정 한라산 보전을 위해 일회용 도시락 반입 금지(김밥, 햄버거는 허용)\r\n한라산 등산 코스는 총 5개 코스로 이루어져 있다. 현재 정상부인 백록담 등반은 성판악~관음사코스로만 등반이 가능하며 영실, 어리목, 돈내코에서 등반할 수 있는 백록담 남벽 코스는 현재&nbsp;낙석으로인한 사고위험으로 통제되어있다. \r\n전설\r\n옛날 옛적에 몸집이 아주 큰 설문대 할망이 있었다. 설문대 할망은 힘 또한 장사였는데, 어느 날 치마폭에 흙을 가득 퍼 날라다 넓디넓은 푸른 바다 ",
    "created": "20160530111636",
    "changed": "20220801011321",
    "catemappList": [
      {
        "seq": 30902,
        "contentsid": {
          "value": "CONT_000000000500685",
          "label": "한라산국립공원",
          "refId": "CONT_000000000500685"
        },
        "cate1cd": {
          "value": "cate0000000002",
          "label": "관광지",
          "refId": "contscate>cate0000000002"
        },
        "cate2cd": {
          "value": "cate0000000009",
          "label": "자연",
          "refId": "cate0000000002>cate0000000009"
        },
        "cate3cd": {
          "value": "cate0000000033",
          "label": "산",
          "refId": "cate0000000009>cate0000000033"
        },
        "created": "20220524101911"
      }
    ],
    "festivalcontents": null,
    "repPhoto": {
      "descseo": "Hallasan Mountain",
      "photoid": {
        "photoid": 20255,
        "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/661b71dc-cdec-4eee-8ad4-240285460226.jpg",
        "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201804/30/e9cb50d3-bb50-4f68-b6ae-05887ec8715d.jpg"
      }
    },
    "PHOTOSHARECOUNT": 586,
    "reservelink": null
  },
  {
      "alltag": "테마공원,부모,커플,혼자,친구,아이,맑음,흐림,미술/박물관,실내,공용주차장,화장실,무료 WIFI,음료대,유도 및 안내시설,경보 및 피난시설,임산부 휴게시설,엘리베이터,단독접근가능,단차없음,시각장애인 접근성,장애인 화장실,승강기,장애인 전용 주차장,수동 휠체어 대여 가능,쉬움,실내+실외",
      "contentsid": "CONT_000000000500535",
      "contentscd": {
      "value": "c1",
      "label": "관광지",
      "refId": "contentscd>c1"
      },
      "title": "제주4.3평화공원",
      "region1cd": {
      "value": "region1",
      "label": "제주시",
      "refId": "region>region1"
      },
      "region2cd": {
      "value": "11",
      "label": "제주시내",
      "refId": "region1>11"
      },
      "address": "제주특별자치도 제주시 봉개동 237-2",
      "roadaddress": "제주특별자치도 제주시 명림로 430",
      "tag": "테마공원,부모,커플,혼자,친구,아이,맑음,흐림,미술/박물관,실내,실내관광지,어트랙션,봄꽃,벚꽃",
      "introduction": "반드시 기억해야 할 우리 제주의 역사가 담긴 제주 4.3 평화공원",
      "readcnt": 61161,
      "likecnt": 46,
      "reviewcnt": 269,
      "markcnt": 247,
      "snssharecnt": 44,
      "schedulecnt": 0,
      "visitcnt": 1,
      "evelpt": 5,
      "latitude": 33.45058,
      "longitude": 126.61812,
      "postcode": "63313",
      "phoneno": "064-723-4344",
      "sbst": " 제주시 봉개동에 위치한 제주 4.3 평화공원은 4.3 사건 당시의 희생자들을 기리기 위한 공간이다. 공원 안에는 제주 4.3 평화기념관, 위령제단, 위령탑, 봉안관 등이 이곳을 지키고 있다. 위령제단은 연중 4.3 희생자에 대해 참배를 진행하는 곳이며, 그들을 모시고 있는 위패봉안실이 따로 마련되어있다.  봉안관은 4.3 유해발굴사업시기에 발굴된 396기의 유해 봉안이 있는데 각 비원에는 희생자의 성명과 성별, 당시 연령 등을 기록해 두었다.\n제4.3 평화기념관에는 총 6개의 특별 전시관이 있다. 제1관에서는 주민들의 피신처로 활용되었다는 천연동굴을 주제로 한 역사관이 있으며, 제2관에서는 해방과 좌절이라는 주제로 해방 후 3.1절 기념행사에서 사망한 6명의 민간인의 이야기를 담아내고 있다. 제3관에서는 무장봉기와 분단 거부라는 주제로 1948년 4월 3일에 일어난 무장봉기에 대한 이야기가 있고 제4관에서는 학살에 관한 내용을 다루고 있다. ​​​​​​마지막으로 5관과 6관에서는 진상 규명 운동으로 상처를 극복해내는 과정과 관람 후의 소감문이 걸려 있다. ",
      "created": "20160530111636",
      "changed": "20220731234448",
      "catemappList": [
      {
          "seq": 26400,
          "contentsid": {
          "value": "CONT_000000000500535",
          "label": "제주4.3평화공원",
          "refId": "CONT_000000000500535"
          },
          "cate1cd": {
          "value": "cate0000000002",
          "label": "관광지",
          "refId": "contscate>cate0000000002"
          },
          "cate2cd": {
          "value": "cate0000001251",
          "label": "테마관광지",
          "refId": "cate0000000002>cate0000001251"
          },
          "cate3cd": {
          "value": "cate0000000058",
          "label": "테마공원",
          "refId": "cate0000001251>cate0000000058"
          },
          "created": "20211021102052"
      },
      {
          "seq": 26401,
          "contentsid": {
          "value": "CONT_000000000500535",
          "label": "제주4.3평화공원",
          "refId": "CONT_000000000500535"
          },
          "cate1cd": {
          "value": "cate0000000002",
          "label": "관광지",
          "refId": "contscate>cate0000000002"
          },
          "cate2cd": {
          "value": "cate0000001374",
          "label": "제주 4·3",
          "refId": "cate0000000002>cate0000001374"
          },
          "cate3cd": {
          "value": "cate0000002374",
          "label": "제주 4·3",
          "refId": "cate0000001374>cate0000002374"
          },
          "created": "20211021102052"
      }
      ],
      "festivalcontents": null,
      "repPhoto": {
      "descseo": "제주4.3평화공원",
      "photoid": {
          "photoid": 2019022581739,
          "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/202108/10/cd2d8fb9-4397-4838-9782-d4bdcf831b73.jpg",
          "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/202108/10/4e944e27-520c-42e6-bfa0-005337c08f92.jpg"
      }
      },
      "PHOTOSHARECOUNT": 187,
      "reservelink": null
  },
  {
      "alltag": "테마공원,아이,맑음,봄,가을,겨울,실내관광지,어린이,어트랙션,공용주차장,현금결제,카드결제,화장실,무료 WIFI,편의점,음료대,유도 및 안내시설,경보 및 피난시설,임산부 휴게시설,시각장애인 접근성,장애인 화장실,장애인 전용 주차장,수동 휠체어 대여 가능,아주 어려움,실외,상,체험,포토스팟,공연/전시,기타,1~2시간",
      "contentsid": "CONT_000000000500438",
      "contentscd": {
      "value": "c1",
      "label": "관광지",
      "refId": "contentscd>c1"
      },
      "title": "에코랜드 테마파크",
      "region1cd": {
      "value": "region1",
      "label": "제주시",
      "refId": "region>region1"
      },
      "region2cd": {
      "value": "15",
      "label": "조천",
      "refId": "region1>15"
      },
      "address": "제주특별자치도 제주시 조천읍 대흘리 1221-1",
      "roadaddress": "제주특별자치도 제주시 조천읍 번영로 1278-169",
      "tag": "테마공원,아이,맑음,봄,가을,겨울,실내관광지,어린이,어트랙션",
      "introduction": "기차를 타고 감상하는 곶자왈, 원시림 테마공원",
      "readcnt": 121601,
      "likecnt": 56,
      "reviewcnt": 243,
      "markcnt": 1609,
      "snssharecnt": 95,
      "schedulecnt": 0,
      "visitcnt": 11,
      "evelpt": 5,
      "latitude": 33.4555296,
      "longitude": 126.6681873,
      "postcode": null,
      "phoneno": "064-802-8000",
      "sbst": "에코랜드는 1800년대 증기기관차인 볼드윈 기종 모델의 기차를 타고, 약 4.5km 거리의 곶자왈을 체험하는 테마파크이다.\r\n\r\n곶자왈은 숲이라는 뜻의 '곶'과 돌밭이라는 뜻의 '자왈'이 합쳐진 제주말로, 화산이 분출할 때 용암이 덩어리로 쪼개져 요철 지형이 만들어지면서 형성된 독특한 숲을 일컫는다. 보온과 보습 효과가 높아 다양한 기후대의 식물이 공존하여 학술적으로 가치가 높고, 생명력과 신비로움을 관찰할수 있는 독특한 분위기를 가진 곳이다.\r\n\r\n에코랜드는 각기 다른 테마를 가진 역들로 나뉘어 있는데, 메인역은 편의시설을 이용할 수 있고, 에코브리지역은 규모가 큰 호수와 수상데크가 있으며, 레이크사이드역에는 풍차와 목초지가 주는 이국적인 풍경을 감상할 수 있다. 피크닉가든역은 어린이들이 뛰놀 수 있는 키즈타운과 곶자왈 숲길인 에코로드를 볼 수 있고, 라벤더, 그린티&로즈가든역에는 허브, 장미, 녹차가 어우러진 유럽식 정원을 볼 수 있다.\r\n\r\n에코랜드는 사계절 내내 다른 분위기를 띄고 있는데, 봄과 여름에는 푸른 녹음과 따뜻한 햇살을, 가을에는 알록달록 피어난 코스모스와 억새 물결을, 그리고 겨울에는 새하얀 설경을 볼 수 있다.",
      "created": "20160530111636",
      "changed": "20220801020000",
      "catemappList": [
      {
          "seq": 31085,
          "contentsid": {
          "value": "CONT_000000000500438",
          "label": "에코랜드 테마파크",
          "refId": "CONT_000000000500438"
          },
          "cate1cd": {
          "value": "cate0000000002",
          "label": "관광지",
          "refId": "contscate>cate0000000002"
          },
          "cate2cd": {
          "value": "cate0000001251",
          "label": "테마관광지",
          "refId": "cate0000000002>cate0000001251"
          },
          "cate3cd": {
          "value": "cate0000000058",
          "label": "테마공원",
          "refId": "cate0000001251>cate0000000058"
          },
          "created": "20220609084000"
      }
      ],
      "festivalcontents": null,
      "repPhoto": {
      "descseo": "에코랜드 테마파크",
      "photoid": {
          "photoid": 2019022583654,
          "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/202110/21/ccba6a29-76b5-476c-b855-0473deb03e0e.png",
          "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/202110/21/40916b0e-7ce7-4c3f-8ad1-59aeef46d4c6.png"
      }
      },
      "PHOTOSHARECOUNT": 435,
      "reservelink": null
  },
  {
      "alltag": "일출,밤,오름,걷기/등산,친구,가을",
      "contentsid": "CONT_000000000500466",
      "contentscd": {
      "value": "c1",
      "label": "관광지",
      "refId": "contentscd>c1"
      },
      "title": "용눈이오름",
      "region1cd": {
      "value": "region1",
      "label": "제주시",
      "refId": "region>region1"
      },
      "region2cd": {
      "value": "16",
      "label": "구좌",
      "refId": "region1>16"
      },
      "address": "제주특별자치도 제주시 구좌읍 종달논길",
      "roadaddress": "제주특별자치도 제주시 구좌읍 종달논길",
      "tag": "일출,밤,오름,걷기/등산,친구,가을,자연경관,도보여행,도보",
      "introduction": "능선의 아름다움을 뽐내는 오름, 김영갑 작가가 사랑한 오름",
      "readcnt": 94297,
      "likecnt": 22,
      "reviewcnt": 232,
      "markcnt": 694,
      "snssharecnt": 21,
      "schedulecnt": 0,
      "visitcnt": 5,
      "evelpt": 5,
      "latitude": 33.45993,
      "longitude": 126.831635,
      "postcode": null,
      "phoneno": null,
      "sbst": "구좌읍에 위치한 용눈이 오름은 해발 247.8m, 높이 88m, 둘레 2,685m 정도 되는 오름으로 360여개의 오름들 중 유일하게 분화구가 3개이다. 봄, 여름에는 잔디가 가을, 겨울에는 억새가 덮이며 계절마다 옷을 갈아입는다. 인체의 곡선처럼 부드러운 능선이 유독 아름다워 많은 사진작가들이 찾는다. 한 가운데가 움푹 패어있어 용이 누웠던 자리 같다는 뜻을 담아 용와악(龍臥岳), 용이 놀았던 자리라는 뜻은 담아 용유악(龍遊岳), 용의 얼굴같다 하여 용안악(龍眼岳) 등으로 표기되었는데, 실제로 위에서 내려다보면 화구의 모습이 용의 눈 처럼 보이기도 한다. \n용눈이오름은 다른 오름과 달리 세 개의 능선으로 이어져 전체적으로 부드럽다는 인상이 강하다. \n​​​​​​​15분이면 정상에 오르며, 경사도가 완만해서 남녀노소 누구나 걷기에 편하다. 위치상 동쪽 끝에 있어서 좋은 날씨에는 멀리 성산일출봉과 우도까지 전망이 가능하며 주변의 다랑쉬오름과 지미봉도 볼 수 있다. 세 개의 분화구를 중심에 두고 오름 한바퀴 산책을 하는데 걸리는 시간도 1시간 내외로 주변 풍경을 즐기기에 최적의 조건이다. ​​​​​​​\n억새가 피는 가을에는 스몰 웨딩 사진 촬영지로도 잘 알려져 있다.",
      "created": "20160530111636",
      "changed": "20220801020011",
      "catemappList": [
      {
          "seq": 26407,
          "contentsid": {
          "value": "CONT_000000000500466",
          "label": "용눈이오름",
          "refId": "CONT_000000000500466"
          },
          "cate1cd": {
          "value": "cate0000000002",
          "label": "관광지",
          "refId": "contscate>cate0000000002"
          },
          "cate2cd": {
          "value": "cate0000000009",
          "label": "자연",
          "refId": "cate0000000002>cate0000000009"
          },
          "cate3cd": {
          "value": "cate0000000035",
          "label": "오름",
          "refId": "cate0000000009>cate0000000035"
          },
          "created": "20211021135007"
      }
      ],
      "festivalcontents": null,
      "repPhoto": {
      "descseo": "용눈이오름",
      "photoid": {
          "photoid": 2019022583687,
          "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/202110/21/05e48ec9-c59b-4a4e-90bc-4a540e6d0700.jpg",
          "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/202110/21/0d54e8b8-0c7e-44b0-9a62-fb77a847f132.jpg"
      }
      },
      "PHOTOSHARECOUNT": 475,
      "reservelink": null
  },
  {
      "alltag": "걷기/등산,아이,흐림,여름,힐링,자연경관,어린이,수국,공용주차장,현금결제,카드결제,화장실,무료 WIFI,단독접근가능,단차없음,장애인 화장실,장애인 전용 주차장,수동 휠체어 대여 가능,어려움,실외,중,기타,산책로,1시간 미만",
      "contentsid": "CONT_000000000500270",
      "contentscd": {
      "value": "c1",
      "label": "관광지",
      "refId": "contentscd>c1"
      },
      "title": "비자림",
      "region1cd": {
      "value": "region1",
      "label": "제주시",
      "refId": "region>region1"
      },
      "region2cd": {
      "value": "16",
      "label": "구좌",
      "refId": "region1>16"
      },
      "address": "제주특별자치도 제주시 구좌읍 평대리 3161-1",
      "roadaddress": "제주특별자치도 제주시 구좌읍 비자숲길 55",
      "tag": "걷기/등산,아이,흐림,여름,힐링,자연경관,어린이,수국",
      "introduction": "천년의 세월이 녹아든 신비로움 가득한 비자림은 500~800년생 비자나무들이 자생하는 세계적으로도 희귀한 장소다. 벼락 맞은 나무부터 긴 세월이 느껴지는 아름드리 나무까지 다양한 비자나무를 만날 수 있다. ",
      "readcnt": 499666,
      "likecnt": 75,
      "reviewcnt": 214,
      "markcnt": 1869,
      "snssharecnt": 657,
      "schedulecnt": 0,
      "visitcnt": 10,
      "evelpt": 5,
      "latitude": 33.491318,
      "longitude": 126.811386,
      "postcode": "63351",
      "phoneno": "064-710-7912",
      "sbst": "아이와 함께 천천히 걸으며 숲속의 신비로움에 빠지고 싶다면 비자림을 추천한다. 천년의 세월이 녹아든 신비로움 가득한 비자림은 500~800년생 비자나무들이 자생하는 세계적으로도 희귀한 장소다. 벼락 맞은 나무부터 긴 세월이 느껴지는 아름드리 나무까지 다양한 비자나무를 만날 수 있다. 비자나무 외에도 단풍나무, 후박나무 등 다양한 수종이 숲을 메우고 있다. 덕분에 숲 입구에서부터 기분 좋은 향기가 퍼져 나온다. 피톤치드를 머금은 상쾌한 산책길을 따라 자박자박 걷다 보면 자연스레 산림욕의 매력에 빠지게 된다.\r\n\r\n비자림 산책로는 A, B코스로 나뉜다. 어느 코스를 걸어도 좋지만 B코스는 다소 거친 돌멩이길이 포함되어 있다. 만삭의 산모와 초보 부모에게는 A코스 이용을 추천한다. A, B코스는 숲 안에 형성된 사거리 기준으로 나뉘며 A코스 거리가 2.2km로 대략 40분 정도 소요된다. 대부분 화산송이가 깔린 평지로 이루어져 있어 유모차 이용도 가능하다. A, B 코스 모두 숲길 안쪽에 위치한 새천년 비자나무와 연리목이 연결되어 있다.\r\n\r\n비자나무의 매력을 충분히 눈에 담았다면 잠시 길 아래쪽으로 시선을 돌려보자. 비자림에는 풍란, 콩짜개란, 비자란 등 희귀난과 식물이 자생하고 있다. 울창한 숲이 주는 웅장함 외에 아기자기한 모습도 엿볼 수 있다. 숲 속 이야기가 궁금하다면 탐방해설사 프로그램에 참여해보자. 10시부터 15시까지 매정각시간마다 (10시, 11시, 12시, 13시, 14시, 15시) 입구에 있는 탐방해설 대기 장소에서 출발한다. 비자림에 자라는 다양한 식물과 숨은 이야기를 들을 수 있다. 해설 프로그램은 무료이며 1시간 이상 소요된다.",
      "created": "20160530111636",
      "changed": "20220801015306",
      "catemappList": [
      {
          "seq": 30662,
          "contentsid": {
          "value": "CONT_000000000500270",
          "label": "비자림",
          "refId": "CONT_000000000500270"
          },
          "cate1cd": {
          "value": "cate0000000002",
          "label": "관광지",
          "refId": "contscate>cate0000000002"
          },
          "cate2cd": {
          "value": "cate0000000009",
          "label": "자연",
          "refId": "cate0000000002>cate0000000009"
          },
          "cate3cd": {
          "value": "cate0000000043",
          "label": "휴양림",
          "refId": "cate0000000009>cate0000000043"
          },
          "created": "20220422133519"
      }
      ],
      "festivalcontents": null,
      "repPhoto": {
      "descseo": "비자림",
      "photoid": {
          "photoid": 2019022569712,
          "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/202002/26/ec450675-3426-4159-b3da-d3c62d7a2273.jpg",
          "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/202002/26/a3124542-e5c6-4665-9766-a8a5746ed15c.jpg"
      }
      },
      "PHOTOSHARECOUNT": 310,
      "reservelink": null
  },
  {
      "alltag": "폭포, 밤, 경관/포토, 부모, 맑음, 여름,공용주차장,현금결제,카드결제,화장실,음료대,유도 및 안내시설,경보 및 피난시설,단독접근가능,단차없음,시각장애인 접근성,장애인 화장실,장애인 전용 주차장,수동 휠체어 대여 가능,어려움,UNESCO 세계지질공원,실외,중,1시간 미만",
      "contentsid": "CONT_000000000500618",
      "contentscd": {
      "value": "c1",
      "label": "관광지",
      "refId": "contentscd>c1"
      },
      "title": "천지연폭포",
      "region1cd": {
      "value": "region2",
      "label": "서귀포시",
      "refId": "region>region2"
      },
      "region2cd": {
      "value": "21",
      "label": "서귀포시내",
      "refId": "region2>21"
      },
      "address": "제주특별자치도 서귀포시 서홍동 666-1",
      "roadaddress": "제주특별자치도 서귀포시 남성중로 2-15",
      "tag": "폭포,밤,경관/포토,부모,맑음,여름,자연경관,포토스팟,유네스코",
      "introduction": "하늘과 땅이 만나서 이룬 연못, \r\n· 천연기념물 제163호\r\n· 천연기념물 제27호\r\n· 올레6코스",
      "readcnt": 342427,
      "likecnt": 76,
      "reviewcnt": 200,
      "markcnt": 1996,
      "snssharecnt": 269,
      "schedulecnt": 0,
      "visitcnt": 7,
      "evelpt": 5,
      "latitude": 33.2447173,
      "longitude": 126.5598201,
      "postcode": null,
      "phoneno": "064-733-1528",
      "sbst": "서귀포는 다른 지역에 용천수가 많이 솟고, 지하층에 물이 잘 스며들지 않는 수성응회암이 널리 분포하여 다른 지역보다 상대적으로 폭포가 많다.\r\n그런 서귀포 폭포 중에서도 규모나 경관 면에서 단연 으뜸으로 관광객의 발길이 머무는 곳이 있으니, 천지연 폭포가 바로 그곳이다.\r\n천지연은 하늘과 땅이 만나 이루어진 연못이라는 의미를 담고 있는데, 폭포의 길이 22m, 그 아래 못의 깊이가 20m로, 가히 하늘과 땅이 만나는 연못이라 불린다.\r\n \r\n천지연 폭포 서남쪽에는 구실잣밤나무, 동백나무 등 상록수와 난종류가 울창하게 우거져 난대림을 이루는데, 한여름에도 시원하며, 현무암으로 산책로가 잘 조성되어 있어 남녀노소 모두 편안히 자연을 감상하며 걸을 수 있다. 이 숲에 자생하는 담팔수나무는 이곳이 그 북방한계선으로써 천연기념물 163호로 지정되었고, 난대림 자체도 천연기념물 379호로 지정, 보호되고 있어, 벌목, 식물채집, 야생동물 포획이 엄격히 금해진다.\r\n\r\n폭포가 떨어지는 깊이 20m의 못 속에는 무태장어가 서식하는 것으로도 유명한데, 무태장어는 바다에서 산란하고 하천이나 호수로 돌아오는 회유성 어류이다. 낮에는 하천이나 호수의 깊은 곳에 숨어 있다가 밤에는 얕은 곳으로 나와 먹이를 잡아먹는데, 큰 것은 길이가 2m, 무게가 20㎏에 이른다. 천지연 폭포가 무태장어 서식분포의 북방한계선이기 때문에 천연기념물 27호로 지정되었다. 이쯤이면 천지연폭포는 '천연기념물의 보고'라고 부를 법하다.\r\n\r\n산책로 끝에 위치한 천지연폭포는 오후 10시까지 야간개장을 하는데, 밤에 보는 폭포의 모습도 장관이다.\r\n\r\n천지연 폭포에는 다음과 같은 전설도 전해 내려온다.\r\n「옛날 이조 중엽쯤 일이다. 이 마을에 얼굴이 어여쁘고 마음이 고우며 행실이 얌전하다고 소문이 난 한 여자가 살고 있었다. 그녀의 이름은 순천이었는데 동네 총각들은 그녀를 마음에 두고 있었다. 그러한 총각 중에 명문이도 끼어 있었다. 그러나 순천이는 열아홉 살이 되자 부모님이 정해준 대로 이웃 마을 법환리 강씨 댁으로 시집을 가버리고 말았다. 마을 총각들은 서운해 했고 그중 명문이는 그 후로부터 형편없는 생활을 하였다. 한편 시집을 간 순천은 요조숙녀로서 여자의 도리를 다하는 가운데 화락한 결혼생활을 하고 있었다.\r\n어느 가을 순천은 술과 떡을 마련하고 친정나들이를 떠났다. 그 모습을 본 명문이가 서귀포에서 법환으로 이르는 천지연 입구에서 그녀가 돌아가는 것을 기다렸다. 날이 어두워질 쯤 순천이는 친정집을 나서 천지연 폭포 바로 위에 이르렀을 때 명문이가 불쑥 나타나 순천의 손을 잡으며 같이 살자고 한다. 순천은 사태의 급박함을 느끼고 소리친다고 했지만 명문은 누구라도 이 일을 방해한다면 같이 폭포를 뛰어내려 죽겠다고 했다. 그때 우르릉 소리와 함께 바로 아래 천지연 물에서 교룡이 솟구쳐 올라오더니 순식간에 명문이를 낚아채고는 하늘로 솟아오르는 것이었다. 순천은 순식간에 일어난 일이라 깜빡 정신을 잃었다가 다시 깨어났다. 교룡의 모습을 바라보던 그녀가 다시 정신을 차리고 눈을 자기 주위로 돌렸을 때, 자신의 발밑에 있는 여의주를 발견하였다. 그녀는 그 여의주를 가지고 밤길을 걸어 시집으로 돌아왔다. 여의주를 몰래 간직하고 있는 그녀는 모든 일이 잘되기만 하였다. 모들 일이 형통하자 그 집안에서나 일가에서는 이 모든 일이 며느리 덕이라고 칭송이 자자했다.」\r\n",
      "created": "20160530111636",
      "changed": "20220801011400",
      "catemappList": [
      {
          "seq": 29623,
          "contentsid": {
          "value": "CONT_000000000500618",
          "label": "천지연폭포",
          "refId": "CONT_000000000500618"
          },
          "cate1cd": {
          "value": "cate0000000002",
          "label": "관광지",
          "refId": "contscate>cate0000000002"
          },
          "cate2cd": {
          "value": "cate0000000009",
          "label": "자연",
          "refId": "cate0000000002>cate0000000009"
          },
          "cate3cd": {
          "value": "cate0000000041",
          "label": "폭포",
          "refId": "cate0000000009>cate0000000041"
          },
          "created": "20220128094621"
      }
      ],
      "festivalcontents": null,
      "repPhoto": {
      "descseo": "천지연폭포",
      "photoid": {
          "photoid": 2019022557647,
          "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201907/11/7142cf44-ac03-420f-b07d-b83e06e8bfb9.jpg",
          "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201907/11/3dad325d-b992-425e-9355-8d625d562574.jpg"
      }
      },
      "PHOTOSHARECOUNT": 294,
      "reservelink": null
  },
  {
      "alltag": "해변,휴식/힐링,커플,맑음,여름,공용주차장,화장실,편의점,음료대,유도 및 안내시설,아주 어려움",
      "contentsid": "CONT_000000000500361",
      "contentscd": {
      "value": "c1",
      "label": "관광지",
      "refId": "contentscd>c1"
      },
      "title": "세화해변",
      "region1cd": {
      "value": "region1",
      "label": "제주시",
      "refId": "region>region1"
      },
      "region2cd": {
      "value": "16",
      "label": "구좌",
      "refId": "region1>16"
      },
      "address": "제주특별자치도 제주시 구좌읍 세화리 1-1",
      "roadaddress": "제주특별자치도 제주시 구좌읍 해녀박물관길 27",
      "tag": "해변,휴식/힐링,커플,맑음,여름,자연경관",
      "introduction": "인생 사진을 남길 수 있는 인생 바다",
      "readcnt": 67808,
      "likecnt": 32,
      "reviewcnt": 183,
      "markcnt": 1071,
      "snssharecnt": 43,
      "schedulecnt": 0,
      "visitcnt": 3,
      "evelpt": 5,
      "latitude": 33.52530490304795,
      "longitude": 126.86127604404146,
      "postcode": null,
      "phoneno": "064-728-7783",
      "sbst": "제주올레 20코스를 걷다 보면 세화민속오일장과 해녀박물관 사이에 작은 해변 하나를 만날 수 있다.\n구좌읍 세화리에 위치한 이 해변은 정식 해수욕장도 아니고 규모도 크지 않지만, 눈이 시리게 맑고 파란 바다를 선물해준다.\n물이 빠지면 드러나는 하얀 모래와 검은 현무암이 에메랄드빛 바다와 아름다운 조화를 이루는 곳이다.\n\n제주의 많은 해변 중에서도 작은 세화해변이 널리 알려진 것은 벨롱장과 세화민속오일장 덕분이다.\n동부지역에서 가장 규모가 큰 오일장이자 바닷가 바로 옆에서 열리는 이 오일장엔 매5일마다 도민들의 삶을 엿볼 수 있는 풍경이 펼쳐진다.\n제주 프리마켓의 원조인 벨롱장도 끊임없이 관광객을 유혹하고 있다. \n최근에는 의자에 앉아 예쁜 바다를 배경으로 인생사진을 남길 수 있는 곳으로 많은 사랑을 받고 있다.\n\n주변 관광지로는 제주해녀의 삶과 문화를 보여주는 ‘제주해녀박물관’, 우리나라 유일의 문주란 자생지 ‘토끼섬’\n외세 침입에 대비해 쌓은 성곽 ‘별방진’, 여름에는 종달리 수국길, 천년비자나무 숲 ‘비자림’ 등이 있다.\n\n김녕해수욕장~월정리~평대리~세화리~하도리~종달리~성산항까지 이어지는 해안도로에서의 드라이브도 추천할만 하다. \n세화해변은 세화리정류장이나 해녀박물관정류장에서 도보 10여분 거리에 있다.",
      "created": "20160530111636",
      "changed": "20220801015852",
      "catemappList": [
      {
          "seq": 26427,
          "contentsid": {
          "value": "CONT_000000000500361",
          "label": "세화해변",
          "refId": "CONT_000000000500361"
          },
          "cate1cd": {
          "value": "cate0000000002",
          "label": "관광지",
          "refId": "contscate>cate0000000002"
          },
          "cate2cd": {
          "value": "cate0000000009",
          "label": "자연",
          "refId": "cate0000000002>cate0000000009"
          },
          "cate3cd": {
          "value": "cate0000000037",
          "label": "해변",
          "refId": "cate0000000009>cate0000000037"
          },
          "created": "20211021160847"
      }
      ],
      "festivalcontents": null,
      "repPhoto": {
      "descseo": "Sehwa Beach",
      "photoid": {
          "photoid": 18558,
          "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/b9bc001a-345f-4622-9388-89c6d741084a.jpg",
          "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201804/30/28506c6b-cbb7-476a-a0f1-94fa3dfc78be.jpg"
      }
      },
      "PHOTOSHARECOUNT": 296,
      "reservelink": null
  },
  {
      "alltag": "일몰,해변,경관/포토,커플,맑음,여름,공용주차장,화장실,편의점,음료대,아주 어려움",
      "contentsid": "CONT_000000000500474",
      "contentscd": {
      "value": "c1",
      "label": "관광지",
      "refId": "contentscd>c1"
      },
      "title": "우도산호해변 홍조단괴 서빈백사",
      "region1cd": {
      "value": "region3",
      "label": "섬 속의 섬",
      "refId": "region>region3"
      },
      "region2cd": {
      "value": "31",
      "label": "우도",
      "refId": "region3>31"
      },
      "address": "제주특별자치도 제주시 우도면 연평리 2516-2",
      "roadaddress": "제주특별자치도 제주시 우도면 우도해안길 252",
      "tag": "일몰,해변,경관/포토,커플,맑음,여름,자연경관,포토스팟",
      "introduction": "세계적으로 드문 홍조단괴로 이뤄진 해변, 천연기념물 438호, 우도8경",
      "readcnt": 32193,
      "likecnt": 15,
      "reviewcnt": 183,
      "markcnt": 395,
      "snssharecnt": 3,
      "schedulecnt": 0,
      "visitcnt": 6,
      "evelpt": 5,
      "latitude": 33.5023047941127,
      "longitude": 126.94323412076267,
      "postcode": null,
      "phoneno": "064-728-3394",
      "sbst": "에메랄드빛으로 부서지는 햇살 아래 하얗다 못해 푸른빛이 감도는 서빈백사해변. 우도 서쪽의 하얀모래해변이라 하여 서빈백사로 불린다. 이곳의 모래는 해양조류 중 하나인 홍조가 해안으로 쓸려와 퇴적된 것으로, 홍조단괴 산호해변으로도 불린다.\n수심에 따라 바다 빛깔이 달라 남태평양이나 지중해의 어느 바다와 비교해도 손색이 없다. \n\n홍조단괴란 홍조류가 생리과정에서 탄산칼슘을 축적하여 돌처럼 단단하게 굳어져 버린 상태를 말한다. 홍조단괴로 이루어진 해변은 세계에서도 몇곳 없어 학술적으로도 희소가치를 지닌다. 우리나라에서도 천연기념물 제438호로 지정하여, 반출을 금지하고, 보호하고 있다. \n\n여름에는 해수욕장으로, 봄, 가을에는 사진찍기 좋은 곳으로 인기가 많으며, 인근에는 우도땅콩을 넣은 아이스크림, 수제버거 등 식당과 아기자기한 카페들이 많이 들어서 있다. ",
      "created": "20160530111636",
      "changed": "20220801001758",
      "catemappList": [
      {
          "seq": 26536,
          "contentsid": {
          "value": "CONT_000000000500474",
          "label": "우도산호해변 홍조단괴 서빈백사",
          "refId": "CONT_000000000500474"
          },
          "cate1cd": {
          "value": "cate0000000002",
          "label": "관광지",
          "refId": "contscate>cate0000000002"
          },
          "cate2cd": {
          "value": "cate0000000009",
          "label": "자연",
          "refId": "cate0000000002>cate0000000009"
          },
          "cate3cd": {
          "value": "cate0000000037",
          "label": "해변",
          "refId": "cate0000000009>cate0000000037"
          },
          "created": "20211025110409"
      }
      ],
      "festivalcontents": null,
      "repPhoto": {
      "descseo": "우도산호해변 홍조단괴 서빈백사",
      "photoid": {
          "photoid": 2019022583798,
          "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/202110/21/cebd9b74-fd3f-432e-8bce-489b86eec5c5.JPG",
          "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/202110/21/4ad079e6-6bf8-436b-95ef-799ae6f51507.JPG"
      }
      },
      "PHOTOSHARECOUNT": 261,
      "reservelink": null
  },
  {
      "alltag": "일출,해변,경관/포토,흐림,봄,공용주차장,단독접근가능,단차없음,장애인 화장실,장애인 전용 주차장,아주 어려움",
      "contentsid": "CNTS_000000000018413",
      "contentscd": {
      "value": "c1",
      "label": "관광지",
      "refId": "contentscd>c1"
      },
      "title": "광치기해변",
      "region1cd": {
      "value": "region2",
      "label": "서귀포시",
      "refId": "region>region2"
      },
      "region2cd": {
      "value": "17",
      "label": "성산",
      "refId": "region2>17"
      },
      "address": "제주특별자치도 서귀포시 성산읍 고성리 224-18",
      "roadaddress": "제주특별자치도 서귀포시 성산읍 섭지코지로 63",
      "tag": "일출,해변,경관/포토,흐림,봄,자연경관,포토스팟,봄꽃,유채꽃",
      "introduction": "성산일출봉과 독특한 해안지형이 어우러져 이색적인 풍광을 간직한 곳",
      "readcnt": 65176,
      "likecnt": 31,
      "reviewcnt": 180,
      "markcnt": 842,
      "snssharecnt": 41,
      "schedulecnt": 0,
      "visitcnt": 3,
      "evelpt": 5,
      "latitude": 33.452452755358465,
      "longitude": 126.92458139419557,
      "postcode": null,
      "phoneno": "--",
      "sbst": "​​​​​​​​성산일출봉에서 섭지코지로 향하는 길목에 있는 광치기 해변은 제주올레 1코스의 마지막이자 2코스가 시작되는 곳이다.\n펄펄끓던 용암이 바다와 만나 빠르게 굳어지며 형성된 지질구조가 특징이며, 특히 썰물때는 바닷물에 가려있던 비경들이 속속들이 들어나 숨은 비경을 선사한다.\n용암 지질과 녹색 이끼가 연출하는 장관은 ​​​​​​​전 세계 어디서도 볼 수 없는 풍경을 자아내어 많은 사진작가들이 찾는 사진명소이기도 하다.\n특히 성산일출봉 옆으로 뜨는 일출을 한 프레임에 담을 수 있어 연말연시에 많은 사람들이 찾는다.\n​​​​​​​광치기 해변의 모래는 현무암의 풍화작용으로 오랜 세월에 걸쳐 만들어진 입자로, 검은 색을 띄는 것이 특징이다.\n​​​​​​",
      "created": "20161007105840",
      "changed": "20220801015958",
      "catemappList": [
      {
          "seq": 26447,
          "contentsid": {
          "value": "CNTS_000000000018413",
          "label": "광치기해변",
          "refId": "CNTS_000000000018413"
          },
          "cate1cd": {
          "value": "cate0000000002",
          "label": "관광지",
          "refId": "contscate>cate0000000002"
          },
          "cate2cd": {
          "value": "cate0000000009",
          "label": "자연",
          "refId": "cate0000000002>cate0000000009"
          },
          "cate3cd": {
          "value": "cate0000000037",
          "label": "해변",
          "refId": "cate0000000009>cate0000000037"
          },
          "created": "20211021171124"
      }
      ],
      "festivalcontents": null,
      "repPhoto": {
      "descseo": "Gwangchigi Beach",
      "photoid": {
          "photoid": 2708,
          "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/315ce1af-1c6c-4977-8668-4710321df6a1.jpg",
          "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201804/30/d5b7e9a3-8cfb-41cf-9623-9b15651d4c55.jpg"
      }
      },
      "PHOTOSHARECOUNT": 277,
      "reservelink": null
  },
  {
      "alltag": "해수욕장,액티비티,아이,맑음,여름,공용주차장,화장실,흡연구역,편의점,음료대,유도 및 안내시설,아주 어려움",
      "contentsid": "CONT_000000000500083",
      "contentscd": {
      "value": "c1",
      "label": "관광지",
      "refId": "contentscd>c1"
      },
      "title": "김녕해수욕장",
      "region1cd": {
      "value": "region1",
      "label": "제주시",
      "refId": "region>region1"
      },
      "region2cd": {
      "value": "16",
      "label": "구좌",
      "refId": "region1>16"
      },
      "address": "제주특별자치도 제주시 구좌읍 김녕리 4330",
      "roadaddress": "제주특별자치도 제주시 구좌읍 구좌해안로 237",
      "tag": "해수욕장,액티비티,아이,맑음,여름,자연경관,체험,레저/체험,해변,물놀이,어린이,수상레저",
      "introduction": "너럭바위 위에 생긴 김녕해수욕장",
      "readcnt": 100460,
      "likecnt": 20,
      "reviewcnt": 179,
      "markcnt": 772,
      "snssharecnt": 60,
      "schedulecnt": 0,
      "visitcnt": 1,
      "evelpt": 5,
      "latitude": 33.557926,
      "longitude": 126.75998,
      "postcode": "63348",
      "phoneno": "064-728-3987",
      "sbst": "​하늘에서 바라본 모습이 한문 평(平) 자를 이룬 모양을 하고 있어 ‘김녕’이라고 불리는, 김녕마을에 있는 해수욕장이다.\n​​​​​​​거대한 너럭바위 용암 위에 모래가 쌓여 만들어졌으며, 성세기는 외세의 침략을 막기 위한 작은 성이라는 뜻이 담겨 있다.\n하얀 모래에 부서지는 파도들이 시원한 소리를 내고, 코발트빛 바다 풍경이 제주 자연의 아름다움을 새삼 느끼게 해주는 곳이다.\n\n해변가를 걷다 보면 제주의 바람으로 돌아가는 김녕풍력발전기들을 관찰할 수 있다.\n인근에는 갓돔과 노래미 돔이 잘 잡히는 갯바위 낚시터가 낚시꾼들에게 인기 명소이며, 용천동굴, 당처물 동굴, 만장굴 등 다양한 굴이 근처에 위치해 있어 여름에 시원하게 피서를 즐길 수 있다.\n\n김녕해수욕장은 특이한 지형으로 인해 지질트레일도 조성이 되어 있는데, 지질트레일은 유네스코 세계지질공원을 활용해 각 지역의 지질자원과 마을의 역사 및 문화와 어울려진 도보길이다.\n",
      "created": "20160530111636",
      "changed": "20220801015640",
      "catemappList": [
      {
          "seq": 26525,
          "contentsid": {
          "value": "CONT_000000000500083",
          "label": "김녕해수욕장",
          "refId": "CONT_000000000500083"
          },
          "cate1cd": {
          "value": "cate0000000002",
          "label": "관광지",
          "refId": "contscate>cate0000000002"
          },
          "cate2cd": {
          "value": "cate0000000009",
          "label": "자연",
          "refId": "cate0000000002>cate0000000009"
          },
          "cate3cd": {
          "value": "cate0000000037",
          "label": "해변",
          "refId": "cate0000000009>cate0000000037"
          },
          "created": "20211025092827"
      }
      ],
      "festivalcontents": null,
      "repPhoto": {
      "descseo": "Gimnyeong Seonsegi Beach",
      "photoid": {
          "photoid": 17248,
          "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/a2c0bcf1-f5fa-4d5b-83c4-64b52e0f196b.jpg",
          "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201804/30/ed045041-3685-4d5f-87e2-107a3c0ca225.jpg"
      }
      },
      "PHOTOSHARECOUNT": 346,
      "reservelink": null
  },
  {
      "alltag": "실내,테마공원,아이,비.눈,사계절,우수관광사업체,실내관광지,어린이,어트랙션,어린이동물농장,안전여행스탬프,공용주차장,현금결제,카드결제,화장실,무료 WIFI,편의점,음료대,유도 및 안내시설,경보 및 피난시설,엘리베이터,단독접근가능,단차없음,시각장애인 접근성,장애인 화장실,승강기,장애인 전용 주차장,수동 휠체어 대여 가능,쉬움,우수관광사업체,실내,하,공연/전시,2~3시간",
      "contentsid": "CONT_000000000500565",
      "contentscd": {
      "value": "c1",
      "label": "관광지",
      "refId": "contentscd>c1"
      },
      "title": "아쿠아플라넷 제주",
      "region1cd": {
      "value": "region2",
      "label": "서귀포시",
      "refId": "region>region2"
      },
      "region2cd": {
      "value": "17",
      "label": "성산",
      "refId": "region2>17"
      },
      "address": "제주특별자치도 서귀포시 성산읍 고성리 127-3",
      "roadaddress": "제주특별자치도 서귀포시 성산읍 섭지코지로 95",
      "tag": "실내,테마공원,아이,비.눈,사계절,우수관광사업체,실내관광지,어린이,어트랙션,어린이동물농장,안전여행스탬프",
      "introduction": "450여종의 바다생명체가 있는 아시아 최대 수족관",
      "readcnt": 87898,
      "likecnt": 37,
      "reviewcnt": 165,
      "markcnt": 1402,
      "snssharecnt": 54,
      "schedulecnt": 0,
      "visitcnt": 3,
      "evelpt": 5,
      "latitude": 33.43237,
      "longitude": 126.928215,
      "postcode": "63642",
      "phoneno": "1833-7001",
      "sbst": "아쿠아플라넷 제주는 아시아 최대 규모(연면적 2만5600m², 1만800톤)를 자랑하는 아쿠아리움이다. 이는 63 씨월드의 약 11배에 달하는 규모로, 단일 수조로는 세계 최대급을 보유하고 있다. 500여종 4만8000마리의 전시생물 또한 세계 top10안에 든다. ‘교육과 문화, 엔터테인먼트’를 동시에 즐길 수 있는 ‘어뮤즈먼트 테마파크’를 표방한 <아쿠아 플라넷 제주>는 ​​​​​​​제주의 앞 바다를 재현한 초대형 수조 '제주의 바다'를 비롯해 ‘해양과학 체험관’, ‘대형 해양공연장’ 등을 운영하고 있어 다양한 컨텐츠를 접할 수 있다. ",
      "created": "20160530111636",
      "changed": "20220801020057",
      "catemappList": [
      {
          "seq": 30995,
          "contentsid": {
          "value": "CONT_000000000500565",
          "label": "아쿠아플라넷 제주",
          "refId": "CONT_000000000500565"
          },
          "cate1cd": {
          "value": "cate0000000002",
          "label": "관광지",
          "refId": "contscate>cate0000000002"
          },
          "cate2cd": {
          "value": "cate0000001251",
          "label": "테마관광지",
          "refId": "cate0000000002>cate0000001251"
          },
          "cate3cd": {
          "value": "cate0000000058",
          "label": "테마공원",
          "refId": "cate0000001251>cate0000000058"
          },
          "created": "20220530163901"
      }
      ],
      "festivalcontents": null,
      "repPhoto": {
      "descseo": "아쿠아플라넷 제주",
      "photoid": {
          "photoid": 2019022601113,
          "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/202205/30/cdffe2fb-16d6-4464-aef7-90c599034bb1.jpg",
          "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/202205/30/0fd26cbb-6620-4119-a4c8-e945a0ec5beb.jpg"
      }
      },
      "PHOTOSHARECOUNT": 279,
      "reservelink": null
  },
  {
      "alltag": "일몰,일출,산,해변,걷기/등산,친구,커플,맑음,가을,공용주차장,화장실,편의점,음료대,유도 및 안내시설,장애인 전용 주차장,아주 어려움,실외,상,등산,1~2시간",
      "contentsid": "CONT_000000000500378",
      "contentscd": {
      "value": "c1",
      "label": "관광지",
      "refId": "contentscd>c1"
      },
      "title": "송악산",
      "region1cd": {
      "value": "region2",
      "label": "서귀포시",
      "refId": "region>region2"
      },
      "region2cd": {
      "value": "22",
      "label": "대정",
      "refId": "region2>22"
      },
      "address": "제주특별자치도 서귀포시 대정읍 상모리 131",
      "roadaddress": "제주특별자치도 서귀포시 대정읍 송악관광로 421-1",
      "tag": "일몰,일출,산,해변,걷기/등산,친구,커플,맑음,가을,자연경관,수국",
      "introduction": "서남부의 절경을 선사하는 산방산의 이웃산",
      "readcnt": 58799,
      "likecnt": 17,
      "reviewcnt": 163,
      "markcnt": 539,
      "snssharecnt": 28,
      "schedulecnt": 0,
      "visitcnt": 9,
      "evelpt": 5,
      "latitude": 33.207714,
      "longitude": 126.29099,
      "postcode": "63512",
      "phoneno": "--",
      "sbst": "산방산의 남쪽, 가파도가 손에 잡힐 듯 보이는 바닷가에 불끈 솟은 산이 송악산이다. 99개의 작은 봉우리가 모여있어 일명 99봉이라고도 한다. 세계적으로 유례가 드문 이중분화구-1차 폭발로 형성된 제1분화구 안에 2차 폭발이 일어나 2개의 분화구가 존재-의 화산지형 이기도 하다. 제주올레 10코스를 따라 이어지는 송악산 둘레길을 걷다 보면 방목해 놓은 말을 가까이에서 볼 수 있다. 완만한 길을 따라 오르다 보면 형제섬과 가파도, 멀리 마라도까지 볼수 있다. 주변에 막힘이 없어 날이 좋다면 꽤나 장관을 볼 수 있다. 길이 험하지 않아 누구나 쉽게 오를 수 있지만, 바람이 많은 편이다. 바람이 특히나 센 날에는 제주의 삼다(三多)중 하나인 '바람'을 온몸으로 체험할 수 있다. \n송악산은 일제강점기 일본군의 군사기지를 만들기 위해 강제동원된 제주사람들의 고통과 참상을 돌아보는 다크투어 현장으로도 활용될 수 있다. 예전엔 그 이름만큼 소나무와 동백, 후박, 느릅나무 등이 무성했다고 하는데, 일제시기 군사기지를 만드느라 불태워져 지금은 일부 구간을 제외하면 풀만 무성할 뿐이다. 송악산의 해안가 절벽에는 2차 세계대전 당시 일본군이 제주사람들을 동원해 뚫어놓은 인공동굴 15개가 있다.",
      "created": "20160530111636",
      "changed": "20220801010734",
      "catemappList": [
      {
          "seq": 26531,
          "contentsid": {
          "value": "CONT_000000000500378",
          "label": "송악산",
          "refId": "CONT_000000000500378"
          },
          "cate1cd": {
          "value": "cate0000000002",
          "label": "관광지",
          "refId": "contscate>cate0000000002"
          },
          "cate2cd": {
          "value": "cate0000000009",
          "label": "자연",
          "refId": "cate0000000002>cate0000000009"
          },
          "cate3cd": {
          "value": "cate0000000033",
          "label": "산",
          "refId": "cate0000000009>cate0000000033"
          },
          "created": "20211025105634"
      }
      ],
      "festivalcontents": null,
      "repPhoto": {
      "descseo": "송악산",
      "photoid": {
          "photoid": 2019022573129,
          "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/202008/21/a8ee7cef-10ef-42a1-b1f7-d5730021f0dc.jpg",
          "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/202008/21/c0635c84-2f2a-4681-823f-c21203ae28d3.jpg"
      }
      },
      "PHOTOSHARECOUNT": 304,
      "reservelink": null
  },
  {
      "alltag": "계곡,휴식/힐링,액티비티,커플,맑음,여름,자연경관,체험,레저/체험,수상레저,어트랙션,물놀이,공용주차장,화장실,편의점,음료대,유도 및 안내시설,아주 어려움,UNESCO 생물권보전지역,실외,체험",
      "contentsid": "CONT_000000000500384",
      "contentscd": {
      "value": "c1",
      "label": "관광지",
      "refId": "contentscd>c1"
      },
      "title": "쇠소깍",
      "region1cd": {
      "value": "region2",
      "label": "서귀포시",
      "refId": "region>region2"
      },
      "region2cd": {
      "value": "21",
      "label": "서귀포시내",
      "refId": "region2>21"
      },
      "address": "제주특별자치도 서귀포시 하효동 995",
      "roadaddress": "제주특별자치도 서귀포시 쇠소깍로 128",
      "tag": "계곡,휴식/힐링,액티비티,커플,맑음,여름,자연경관,체험,레저/체험,수상레저,어트랙션,물놀이",
      "introduction": "제주 올레 5코스의 끝이자 6코스의 시작인 바닷물과 민물이 만나는 비밀스런 계곡",
      "readcnt": 149911,
      "likecnt": 57,
      "reviewcnt": 143,
      "markcnt": 1727,
      "snssharecnt": 91,
      "schedulecnt": 0,
      "visitcnt": 4,
      "evelpt": 4,
      "latitude": 33.2522055,
      "longitude": 126.6231188,
      "postcode": "63600",
      "phoneno": "064-732-1562",
      "sbst": "쇠소깍은 한라산에서 흘러내려온 물줄기가 제주도 남쪽으로 흐른다는 효돈천의 끝자락에 위치하고 있다. 효돈천의 담수와 해수가 만나 생긴 깊은 웅덩이가 바로 쇠소깍이다. '쇠소'는 '소가 누워 있는 모습의 연못'을 '깍'은 '마지막 끝'을 의미한다. 쇠소깍은 양벽에 기암괴석이 병풍처럼 둘러서 있고, 그 위로 숲이 우거져 신비한 계곡에 온 기분을 느낄 수 있다. 예전에는 가뭄을 해소하는 기우제를 지내는 신성한 땅이라하여 함부로 돌을 전지거나 물놀이를 하지 못했다. 계곡의 입구를 막아 천일염을 만들기도 했고 포구로 사용하기도 했다.\r\n쇠소깍의 바위에 비추는 민물은 유난히 푸르고 맑아 짙회색의 기암괴석과 절경을 이룬다. 전에는 투명카약, 테우체험 등 수상레저를 운영했지만 자연경관 보존을 위해 현재는 시행하지 않고 있다. 다만 제주올레 5코스와 6코스를 연결하는 곳이어서 올레꾼들이 많이 찾는다. \r\n산책로를 따라 계속 내려가면 검은 모래로 유명한 하효 쇠소깍 해변에 이른다. 7~8월 사이에 쇠소깍 축제가 열려 맨손 고기잡기, 다우렁길 걷기 등의 다양한 행사를 체험할 수 있다. 쇠소깍에는 애틋한 전설이 전해오는데 지금으로부터 약350여 년 전 이효마을에 어느 부잣집 귀여운 무남독녀와 그 집 머슴의 동갑내기 아들이 신분상 서로의 사랑을 꽃 피우지 못하였다. 이에 비관한 총각은 쇠소깍 상류에 있는 남내소에 몸을 던져 자살을 하였다. 이를 뒤 늦게 안 처녀는 남자의 죽음을 슬퍼하며 시신이라도 수습하게 해달라며 쇠소깍 기원바위에서 100일 동안 기도를 드렸는데 마침 큰비가 내려 총각의 시신이 냇물에 떠 내려오자 처녀는 시신을 부둥켜 안고 울다가 기원바위로 올라가서 사랑하는 님을 따라 ´쇠소´에 몸을 던져 죽고 말았다. 그 후 하효마을에서는 주민들이 가련한 처녀총각의 넋을 위로하기 위해 마을 동쪽에 있는 응지동산에 당을 마련해 영혼을 모시고 마을의 무사안녕과 번영을 지켜주도록 기원을 드리게 되었는데 지금에는 할망당 또는 여드레당이라 불려지고 있다. ",
      "created": "20160530111636",
      "changed": "20220801020101",
      "catemappList": [
      {
          "seq": 31040,
          "contentsid": {
          "value": "CONT_000000000500384",
          "label": "쇠소깍",
          "refId": "CONT_000000000500384"
          },
          "cate1cd": {
          "value": "cate0000000002",
          "label": "관광지",
          "refId": "contscate>cate0000000002"
          },
          "cate2cd": {
          "value": "cate0000000009",
          "label": "자연",
          "refId": "cate0000000002>cate0000000009"
          },
          "cate3cd": {
          "value": "cate0000000038",
          "label": "계곡",
          "refId": "cate0000000009>cate0000000038"
          },
          "created": "20220602083708"
      }
      ],
      "festivalcontents": null,
      "repPhoto": {
      "descseo": "쇠소깍",
      "photoid": {
          "photoid": 2019022584386,
          "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/202110/25/fdb6ffc6-f7b2-4d00-81aa-dd7f26bb2081.JPG",
          "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/202110/25/c725ba8d-6837-4d07-904a-0df9f56b1ff5.JPG"
      }
      },
      "PHOTOSHARECOUNT": 232,
      "reservelink": null
  },

  {
      "alltag": "일몰,해수욕장,액티비티,아이,맑음,여름,공용주차장,화장실,편의점,음료대,유도 및 안내시설,아주 어려움",
      "contentsid": "CONT_000000000500079",
      "contentscd": {
      "value": "c1",
      "label": "관광지",
      "refId": "contentscd>c1"
      },
      "title": "금능해수욕장",
      "region1cd": {
      "value": "region1",
      "label": "제주시",
      "refId": "region>region1"
      },
      "region2cd": {
      "value": "13",
      "label": "한림",
      "refId": "region1>13"
      },
      "address": "제주특별자치도 제주시 한림읍 금능리 2036-1",
      "roadaddress": "제주특별자치도 제주시 한림읍 금능길 119-10",
      "tag": "일몰,해수욕장,액티비티,아이,맑음,여름,자연경관,체험,레저/체험,해변,물놀이,어린이,수상레저",
      "introduction": "제주시 한림읍에 위치한 금능해수욕장은 서쪽의 인기 명소인 협재해수욕장과 바로 이어져 있다. 파란 물감을 풀어놓은 것 같은 바다부터 생김새가 귀여운 비양도, 촉감이 보슬거리는 모래사장까지 이웃한 해변과 비슷한 풍경을 품고 있지만 그보다 사람이 붐비지 않아 여유로운 것이 매력이다. ",
      "readcnt": 83463,
      "likecnt": 21,
      "reviewcnt": 140,
      "markcnt": 498,
      "snssharecnt": 92,
      "schedulecnt": 0,
      "visitcnt": 4,
      "evelpt": 5,
      "latitude": 33.390003,
      "longitude": 126.23591,
      "postcode": "63010",
      "phoneno": "064-728-3983",
      "sbst": "바닥이 훤히 비치는 투명한 물빛과 바닷물이 찰박거리는 얕은 수심, 물놀이 후 따뜻하게 즐기는 온수 샤워까지. 아이들과 다녀오기에 최적의 조건을 갖춘 해수욕장을 찾는다면 금능해수욕장이 제격이다. \n\n제주시 한림읍에 위치한 금능해수욕장은 서쪽의 인기 명소인 협재해수욕장과 바로 이어져 있다. 파란 물감을 풀어놓은 것 같은 바다부터 생김새가 귀여운 비양도, 촉감이 보슬거리는 모래사장까지 이웃한 해변과 비슷한 풍경을 품고 있지만 그보다 사람이 붐비지 않아 여유로운 것이 매력이다. 더구나 주차장과 해변이 바로 연결되어 있어 짐을 옮길 때도 부담이 없다. 새로 신축된 샤워실은 온수 샤워가 가능해 해수욕장 이용에 편리함을 갖췄다. \n\n이곳을 방문할 땐 물이 빠지는 간조 시간에 맞춰 가기를 추천한다. 바닷물이 멀리까지 빠지면 넓고 고운 모래사장이 드러난다. 곳곳에 수심이 얕고 어린 아이도 놀기 좋은 천연 풀장이 만들어진다. 빠져나간 바닷물이 남겨 놓은 해조류나 작은 보말 등은 자연스럽게 아이들의 장난감이 된다. 덕분에 아무런 준비 없이 찾아도 재미있게 즐길 수 있다. 단, 해변 입구에 작게 부서진 조개껍질이 모래와 섞여 있어 되도록 아쿠아슈즈 착용을 권한다. 물놀이 후에는 일몰을 기다려보자. 비양도부터 서서히 물들어가는 노을은 순식간에 파란 하늘을 노란빛으로 바꿔놓으며 아이와의 첫 여행에 잊지 못할 황홀함을 선사한다.",
      "created": "20160530111636",
      "changed": "20220801020153",
      "catemappList": [
      {
          "seq": 26551,
          "contentsid": {
          "value": "CONT_000000000500079",
          "label": "금능해수욕장",
          "refId": "CONT_000000000500079"
          },
          "cate1cd": {
          "value": "cate0000000002",
          "label": "관광지",
          "refId": "contscate>cate0000000002"
          },
          "cate2cd": {
          "value": "cate0000000009",
          "label": "자연",
          "refId": "cate0000000002>cate0000000009"
          },
          "cate3cd": {
          "value": "cate0000000037",
          "label": "해변",
          "refId": "cate0000000009>cate0000000037"
          },
          "created": "20211025141228"
      }
      ],
      "festivalcontents": null,
      "repPhoto": {
      "descseo": "금능해수욕장",
      "photoid": {
          "photoid": 2019022584399,
          "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/202110/25/37a29724-f256-403b-ac0e-3f6207fae2e1.JPG",
          "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/202110/25/120296bb-0959-4579-ad37-c559e95b434c.JPG"
      }
      },
      "PHOTOSHARECOUNT": 223,
      "reservelink": null
  },
  {
      "alltag": "섬속의섬,휴식/힐링,부모,아이,맑음,가을,자연경관,어린이,화장실,편의점,아주 어려움",
      "contentsid": "CONT_000000000500171",
      "contentscd": {
      "value": "c1",
      "label": "관광지",
      "refId": "contentscd>c1"
      },
      "title": "마라도(마라해양도립공원)",
      "region1cd": {
      "value": "region2",
      "label": "서귀포시",
      "refId": "region>region2"
      },
      "region2cd": {
      "value": "22",
      "label": "대정",
      "refId": "region2>22"
      },
      "address": "제주특별자치도 서귀포시 대정읍 가파리 600",
      "roadaddress": "제주특별자치도 서귀포시 대정읍 마라로101번길 46",
      "tag": "섬속의섬,휴식/힐링,부모,아이,맑음,가을,자연경관,어린이",
      "introduction": "난대성 해양 동식물이 풍부하고 경관이 아름다운 유인도 중에 국토 최남단인 섬, 천연기념물 제423호",
      "readcnt": 62560,
      "likecnt": 19,
      "reviewcnt": 139,
      "markcnt": 394,
      "snssharecnt": 22,
      "schedulecnt": 0,
      "visitcnt": 6,
      "evelpt": 5,
      "latitude": 33.1170928491147,
      "longitude": 126.26747322880556,
      "postcode": null,
      "phoneno": "064-760-4014",
      "sbst": "한국 최남단의 섬으로 면적 약 9만평, 최장길이 약 1.3km, 모슬포에서 남쪽으로 11km 해상에 위치한다.\n운진항에서 배를 타고 30분정도 소요되는데, 정기여객선과 관광유람선이 하루 수 차례씩 왕복 운항하고 있다. \n\n마라도는 위에서 보면 고구마 형태를 띠고 있으며, 전체적으로 평평하나, 등대가 있는 동쪽으로는 해풍의 영향으로 기암절벽을 이룬다.\n등대가 있는 가장 높은 곳이 약 해발39m다. 서쪽해안은 해식동굴이 발달되어 있으며 섬 중앙에서 서쪽 기슭에 마을이 자리잡고 있다.\n주민들은 약 130여명(2015년 기준)으로, 주로 어업에 종사하나, 관광객이 늘어나면 민박을 겸하는 주민들이 많다. \n\n마라도에 원래 사람이 살지 않았으나, 영세농어민 4,5세대가 당시 제주목사로부터 개간허가를 얻어 화전을 시작하면서부터 사람이 이주했다고 한다.\n《탐라순력도》(1702)의 麻羅島(마라도:칡넝쿨이 우거진 섬)라는 표현에서도 알 수 있듯이 마라도는 본래 원시림이 울창한 숲이었는데,\n화전민 개간으로 숲이 모두 불태워져 지금은 섬 전체가 낮은 풀로 덮혀있다.\n푸르른 초원 군데군데 작은 건물이 서있으며, 가을에는 억새가 만발하는 장관을 볼 수 있다.\n\n마라도의 가장 높은 지대에 자리한 마라도등대는 전 세계 해도에 꼭 기재되는 중요한 등대로\n이 지역을 항해하는 국제 선박 및 어선들에게 안내자의 역할을 한다.\n등대 주변으로는 태양광발전시설과 전세계 유명 등대를 모형으로 만들어 놓은 볼거리가 있다. \n\n마라도는 섬 전체가 가파르지 않아 남녀노소 부담없이 거닐 수 있다.\n섬 한바퀴를 다 도는데는 1-2시간이면 충분하다.\n마라도에서는 무엇이건 모두 최남단이라는 수식어가 붙는데, 마라도성당과 기원정사 등 종교시설과 분교, 짜장면집까지 있다.\n마라도의 남쪽끝에는 최남단비가 있어 인증사진을 찍는 사람들의 발길이 끊기지 않는다.\n\n마라도에 도착해 섬의 시계 반대방향으로 한바퀴 돌 때,\n제일 먼저 만나는 것은 ‘할망당’ ‘처녀당’ ‘비바리당’ 등으로 불리는 마라도의 본향당(本鄕堂) 당이 있다.\n당이래야 돌담을 둥그렇게 쌓아두고 그 안에 제단을 마련한 것이 전부지만,\n이곳에는 마라도의 잠녀들의 안녕을 지키고 뱃길을 무사히 열어주는 본향신이 모셔져 있다.\n마을사람들은 지금도 당이 있는 바위에 올라서면 바람이 세게 분다 하여 이를 금기 또는 신성시하고 있다.\n'아기업게당' 으로도 불리는 이 본향당에는 다음과 같은 전설이 전해내려온다.\n\n옛날 마라도에 사람이 살고 있지 않을 적에 마라도에는 해산물이 풍부하여 모슬포 잠녀들이 배에 식량을 싣고 와서 며칠씩 물질을 하였다.\n어느 해인가 모슬포 잠녀들이 아기와 아기를 돌보는 ‘애기업개’를 데리고 배로 마라도에 바다 일을 하러 왔다.\n며칠간의 바다 일을 마치고 돌아가려니까 바람이 세게 불고 파도가 거세어 삼사일간 나갈 수가 없어 굶어 죽을 판이 되었다.\n그 날 밤 상군 잠녀의 꿈에 누군가 나타나 이르기를 애기업개를 놔두고 떠나야 섬을 무사히 빠져나갈 수 있다는 것이었다.\n꿈이 사실인지 아닌지 모르지만 모두 굶어 죽을 판이라 사람들이 의논하여 꿈에 들은대로 하기로 하였다.\n애기업개를 어떻게 떼어 놓을까 하다가 모두 배에 타고서 애기업개에게 아기 옷을 두고 왔다고 하여, 가서 가져오라고 하였다.\n애기업개가 배에서 내리자 바람이 잦아들어 배는 순조롭게 돌아올 수 있었다.\n같이 데려가 달라며 손을 흔들고 발버둥을 치는 애기업개를 두고 온 사람들은 내내 마음에 애기업개를 담고 살아야만 했다.\n애기업개의 애원을 뒤로 하고 돌아온 사람들이 해가 바뀌어 다시 마라도에 바릇잡이를 가보니 애기업개는 돌 엉덕(언덕)에 뼈만 앙상하게 남아 있었다.\n애기업개에 대한 미안한 마음이 컸던 사람들은 그녀의 넋을 위로하기 위하여 고사를 지냈다.\n그로부터 마라도를 찾는 잠녀들은 그 자리에 ‘애기업개당’을 짓고 해마다 당제를 지내게 되었다.\n애기업개인 자신만을 두고 가서 굶어 죽게 한 사람들에게 원한이 있으련만, 원혼을 위로하는 제를 지내고,\n해마다 당제를 지내니 마을의 본향당으로 자리를 잡아 마라도의 생활을 관장하는 당신(堂神)이 된 것이다.",
      "created": "20160530111636",
      "changed": "20220801020130",
      "catemappList": [
      {
          "seq": 30709,
          "contentsid": {
          "value": "CONT_000000000500171",
          "label": "마라도(마라해양도립공원)",
          "refId": "CONT_000000000500171"
          },
          "cate1cd": {
          "value": "cate0000000002",
          "label": "관광지",
          "refId": "contscate>cate0000000002"
          },
          "cate2cd": {
          "value": "cate0000001257",
          "label": "섬속의 섬",
          "refId": "cate0000000002>cate0000001257"
          },
          "cate3cd": {
          "value": "cate0000001258",
          "label": "섬속의 섬",
          "refId": "cate0000001257>cate0000001258"
          },
          "created": "20220502164426"
      }
      ],
      "festivalcontents": null,
      "repPhoto": {
      "descseo": "Marado Island (Mara Ocean Park)",
      "photoid": {
          "photoid": 17618,
          "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/c88bc373-ce5d-418f-9635-b6afb4dbb394.jpg",
          "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201804/30/0c267f62-8261-4cc7-bca9-99aa4f446365.jpg"
      }
      },
      "PHOTOSHARECOUNT": 287,
      "reservelink": null
  },
  {
      "alltag": "일몰,해변,드라이브,커플,맑음,여름,공용주차장,화장실,편의점,음료대,유도 및 안내시설,아주 어려움,실외,드라이브, 사이클, 산책",
      "contentsid": "CONT_000000000500425",
      "contentscd": {
      "value": "c1",
      "label": "관광지",
      "refId": "contentscd>c1"
      },
      "title": "애월해안도로",
      "region1cd": {
      "value": "region1",
      "label": "제주시",
      "refId": "region>region1"
      },
      "region2cd": {
      "value": "12",
      "label": "애월",
      "refId": "region1>12"
      },
      "address": "제주특별자치도 제주시 애월읍 애월해안로",
      "roadaddress": "제주특별자치도 제주시 애월읍 애월해안로",
      "tag": "일몰,해변,드라이브,커플,맑음,여름,자연경관",
      "introduction": "도보, 자전거, 자동차 뭐든 좋은 서부해안도로",
      "readcnt": 60083,
      "likecnt": 47,
      "reviewcnt": 136,
      "markcnt": 1314,
      "snssharecnt": 42,
      "schedulecnt": 0,
      "visitcnt": 5,
      "evelpt": 5,
      "latitude": 33.47822,
      "longitude": 126.36656,
      "postcode": null,
      "phoneno": "064-728-3394",
      "sbst": "​북서부의 해안선을 따라서 이어진 애월해안도로는 빼어난 제주의&nbsp;바다 풍경을 감상할 수 있는 약 9km의 드라이브 코스이다. 자전거 전용도로와 도보길도 잘 갖추어져 있어 드라이브 외에도 사이클링과 산책 등의 방법으로 다양하게 즐길 수 있다.&nbsp;특히, '제주환상 자전거길' 위에 있어 자전거 여행자들의 사랑은 받는다. 해안길과 숲길을 모두 경험할 수 있는 제주올레길 16코스 '고내-광령 올레'의 일부이기도 하다. 지그재그로 이어지는 애월해안로를 따라서 가다 보면 일몰이 아름다운 소금마을 구엄리의 돌염전 등 다채로운 볼거리들이 기다리고 있다. 다양한 맛집들과 카페, 숙박시설 등이 많이 있어 여행객들의 제주 여행 코스로서도 인기가 많다.\n",
      "created": "20160530111636",
      "changed": "20220801020142",
      "catemappList": [
      {
          "seq": 26567,
          "contentsid": {
          "value": "CONT_000000000500425",
          "label": "애월해안도로",
          "refId": "CONT_000000000500425"
          },
          "cate1cd": {
          "value": "cate0000000002",
          "label": "관광지",
          "refId": "contscate>cate0000000002"
          },
          "cate2cd": {
          "value": "cate0000000009",
          "label": "자연",
          "refId": "cate0000000002>cate0000000009"
          },
          "cate3cd": {
          "value": "cate0000000037",
          "label": "해변",
          "refId": "cate0000000009>cate0000000037"
          },
          "created": "20211025165811"
      }
      ],
      "festivalcontents": null,
      "repPhoto": {
      "descseo": "애월해안도로",
      "photoid": {
          "photoid": 2019022584519,
          "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/202110/25/acaf6312-55e6-4443-9a50-cdf8c68bf458.JPG",
          "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/202110/25/08f0e41c-8741-4820-9969-77261804192d.JPG"
      }
      },
      "PHOTOSHARECOUNT": 189,
      "reservelink": null
  },
  {
      "alltag": "일몰,해수욕장,액티비티,아이,맑음,여름,공용주차장,화장실,편의점,음료대,유도 및 안내시설,아주 어려움",
      "contentsid": "CONT_000000000500056",
      "contentscd": {
      "value": "c1",
      "label": "관광지",
      "refId": "contentscd>c1"
      },
      "title": "곽지해수욕장",
      "region1cd": {
      "value": "region1",
      "label": "제주시",
      "refId": "region>region1"
      },
      "region2cd": {
      "value": "12",
      "label": "애월",
      "refId": "region1>12"
      },
      "address": "제주특별자치도 제주시 애월읍 애월원당길 (곽지리)",
      "roadaddress": "제주특별자치도 제주시 애월읍 애월원당길 (곽지리)",
      "tag": "일몰,해수욕장,액티비티,아이,맑음,여름,자연경관,체험,레저/체험,해변,물놀이,어린이,수상레저",
      "introduction": "시원한 용천수를 뿜어내는 노천탕이 있는 곳",
      "readcnt": 88801,
      "likecnt": 27,
      "reviewcnt": 131,
      "markcnt": 455,
      "snssharecnt": 84,
      "schedulecnt": 0,
      "visitcnt": 2,
      "evelpt": 5,
      "latitude": 33.45122,
      "longitude": 126.3058,
      "postcode": null,
      "phoneno": "064-728-3985",
      "sbst": "​​곽지해수욕장은 길이 350m, 너비 70m의 백사장과 평균수심 1.5m, 경사도 5~8도의 좋은 조건을 갖춘 해수욕장이다. 이러한 조건때문에 청소년 수련장이 설치되고 단체 피서객이 많이 찾는다. 곽지리는 선사시대의 패총이 발견되었을 정도로 유서가 깊은 마을이다. ​​​​​​​지금의 곽지해수욕장은 옛날에 마을이 들어서 있던 곳이었으나, 어느날 갑자기 모래에 파묻혔다는 전설이 전해온다.\n​\n​​",
      "created": "20160530111636",
      "changed": "20220801020253",
      "catemappList": [
      {
          "seq": 26571,
          "contentsid": {
          "value": "CONT_000000000500056",
          "label": "곽지해수욕장",
          "refId": "CONT_000000000500056"
          },
          "cate1cd": {
          "value": "cate0000000002",
          "label": "관광지",
          "refId": "contscate>cate0000000002"
          },
          "cate2cd": {
          "value": "cate0000000009",
          "label": "자연",
          "refId": "cate0000000002>cate0000000009"
          },
          "cate3cd": {
          "value": "cate0000000037",
          "label": "해변",
          "refId": "cate0000000009>cate0000000037"
          },
          "created": "20211025173206"
      }
      ],
      "festivalcontents": null,
      "repPhoto": {
      "descseo": "곽지해수욕장",
      "photoid": {
          "photoid": 2019022584564,
          "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/202110/25/4e19a935-3794-4891-94a2-7e89759e14b3.jpg",
          "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/202110/25/51ef76f8-3171-4261-8423-a58df63d40aa.jpg"
      }
      },
      "PHOTOSHARECOUNT": 252,
      "reservelink": null
  },
  {
      "alltag": "해변,휴식/힐링,부모,커플,맑음,봄,공용주차장,화장실,유도 및 안내시설,장애인 화장실,장애인 전용 주차장,아주 어려움,UNESCO 세계지질공원",
      "contentsid": "CONT_000000000500471",
      "contentscd": {
      "value": "c1",
      "label": "관광지",
      "refId": "contentscd>c1"
      },
      "title": "용머리해안",
      "region1cd": {
      "value": "region2",
      "label": "서귀포시",
      "refId": "region>region2"
      },
      "region2cd": {
      "value": "23",
      "label": "안덕",
      "refId": "region2>23"
      },
      "address": "제주특별자치도 서귀포시 안덕면 사계리",
      "roadaddress": "제주특별자치도 서귀포시 안덕면 사계리",
      "tag": "해변,휴식/힐링,부모,커플,맑음,봄,자연경관,유네스코",
      "introduction": "시간이 보여주는 위대함 속으로\r\n· 천연기념물 제526호\r\n· 올레10코스",
      "readcnt": 114642,
      "likecnt": 28,
      "reviewcnt": 127,
      "markcnt": 995,
      "snssharecnt": 180,
      "schedulecnt": 0,
      "visitcnt": 4,
      "evelpt": 5,
      "latitude": 33.2334272,
      "longitude": 126.313741,
      "postcode": "63528",
      "phoneno": "064-794-2940",
      "sbst": "용머리 해안은 산방산 자락에서 해안가로 뻗어나가는 곳에 위치한다. 마치 바다속으로 들어가는 용의 머리를 닮았다 해서 용머리해안으로 불린다. \r\n수천만년 동안 층층이 쌓인 사암층 암벽이 파도에 깍여 기묘한 절벽을 이루고 있다.\r\n파도의 치여 비밀의 방처럼 움푹 패인 굴방이나 암벽이 간직하고 있는 파도의 흔적은 장황한 역사와 마주할때의 웅장감을 느끼게 한다. \r\n길이 30~50m의 절벽이 굽이치듯 이어지는 장관은 CF와 영화의 배경으로도 촬영된 바 있다.\r\n\r\n해식애 앞쪽으로 좁지만 평탄한 파식대가 발달되어 용머리해안을 일주할 수 있는 탐방로 역할을 하고 있다. \r\n한바퀴 돌아보는데 30분 정도가 소요되는데, 기상악화나 만조때에는 위험성이 높아 출입을 금하니 방문전 미리 관람가능시간을 확인하고 가는것이 좋다. \r\n사암층을 따라 걷다 보면 나오는 해안가 일대에서는 해녀들이 좌판을 깔아 놓고 해산물을 판매하고 있다.\r\n\r\n근처에는 네덜란드 선인 하멜의 선박이 난파되어 이곳에 표착했던 것을 기념하는 하멜표류기념비가 서있다. \r\n하멜은 조선에서 13년동안 억류되었다가 네덜란드로 돌아간 뒤 서구사회에 조선이라는 나라는 알린 인물로, \r\n기념비는 1980년 한국국제문화협회와 주한네덜란드대사관이 공동으로 세운 것이다.\r\n\r\n용머리해안에는 다음과 같은 유명한 전설이 전해내려온다.\r\n\r\n용머리의 기세는 제주에 천하를 호령할 제왕이 태어날 기운을 갖고 있었다한다. 중국의 진나라 진시황제는 일지감치 이를 알아채고 풍수사 호종단을 보내어 제주도의 이런 맥을 끊어놓고 오라고 제주도에 보낸다. 이에 호종단은 제주의 구좌읍 종달리로 들어와 지형지세를 보니 과연 왕이 날 지세라 여겨 제주의 지맥 혈을 찾아 끊기 시작했다. 호종단이 용머리에 닿았는데 막 바다로 뻗어 나가려는 용의 머리를 보고 그는 칼로 용의 꼬리를 먼저 자르고, 얼른 용의 등으로 올라타 잔등을 칼로 쳤다. 그리고 더 앞으로 달려 용의 머리를 끊으려는 순간 시뻘건 피가 솟으며 산방산이 울음을 토했고 몇날 며칠을 천둥번개가 쳤다고 한다. 그렇게 제주의 왕이 날 기세를 꺾이고 이를 지켜보던 산도 바다도 오랫동안 사납게 울어대더라고 전한다.\r\n\r\n조수간만의 영향과 기상악화로 인한 안전문제로 출입통제가 될 수 있으니, 관람당일 입장 통제시간 미리 확인 필요(064-794-2940)",
      "created": "20160530111636",
      "changed": "20220801020101",
      "catemappList": [
      {
          "seq": 29627,
          "contentsid": {
          "value": "CONT_000000000500471",
          "label": "용머리해안",
          "refId": "CONT_000000000500471"
          },
          "cate1cd": {
          "value": "cate0000000002",
          "label": "관광지",
          "refId": "contscate>cate0000000002"
          },
          "cate2cd": {
          "value": "cate0000000009",
          "label": "자연",
          "refId": "cate0000000002>cate0000000009"
          },
          "cate3cd": {
          "value": "cate0000000037",
          "label": "해변",
          "refId": "cate0000000009>cate0000000037"
          },
          "created": "20220128095045"
      }
      ],
      "festivalcontents": null,
      "repPhoto": {
      "descseo": "Yongmeori Beach",
      "photoid": {
          "photoid": 19158,
          "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/60805d7f-b139-48e1-9174-03c688d7ba31.jpg",
          "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201804/30/5e8a2789-4812-418b-a542-ee68632f8565.jpg"
      }
      },
      "PHOTOSHARECOUNT": 182,
      "reservelink": null
  },
  {
      "alltag": "부모,커플,혼자,친구,경관/포토,오름,사계절,실외,3시간 이상",
      "contentsid": "CNTS_000000000019973",
      "contentscd": {
      "value": "c1",
      "label": "관광지",
      "refId": "contentscd>c1"
      },
      "title": "한라산영실코스",
      "region1cd": {
      "value": "region2",
      "label": "서귀포시",
      "refId": "region>region2"
      },
      "region2cd": {
      "value": "21",
      "label": "서귀포시내",
      "refId": "region2>21"
      },
      "address": "제주특별자치도 서귀포시 하원동 산 1-1",
      "roadaddress": "제주특별자치도 서귀포시 영실로 246",
      "tag": "부모,커플,혼자,친구,경관/포토,오름,사계절,자연경관,체험,포토스팟,한라산,언택트,어트랙션,단풍",
      "introduction": "가장 짧지만 가장 아름다운, 한라산 등산코스",
      "readcnt": 96720,
      "likecnt": 28,
      "reviewcnt": 125,
      "markcnt": 428,
      "snssharecnt": 82,
      "schedulecnt": 0,
      "visitcnt": 8,
      "evelpt": 5,
      "latitude": 33.3402,
      "longitude": 126.47921,
      "postcode": "63554",
      "phoneno": "064-747-9950",
      "sbst": "​영실 등산로는 길이 5.8km, 2시간 30분이 소요되는 코스로, 한라산 코스 중 가장 짧으면서도 가장 아름다운 구간으로 꼽힌다. \n\n차로 등산로 앞, 1280m 고지까지 올라갈수 있다. \n\n백록담 밑에 남벽분기점까지 가는 영실탐방로는 그나마 수월하게 오를 수 있어  초보자들에게도 추천하는 코스다. \n\n백록담까지의 구간은 안전상의 문제로 통제되어 갈 수 없지만, 영실기암과 울창한 숲, 오백나한, ‘돌이 있는 자갈평지’라는 의미의 선작지왓, ‘위에 있는 세개의 오름’​​​​​​​이란 뜻을 가진 윗세오름까지 볼거리는 무궁무진하다. \n\n​​​​​​​버스나 택시를 타고 왔다면, 내려갈때는 어리목, 돈내코로 내려가며 다양한 풍경을 감상 할 수 있다. \n",
      "created": "20161031112049",
      "changed": "20220801003641",
      "catemappList": [
      {
          "seq": 26584,
          "contentsid": {
          "value": "CNTS_000000000019973",
          "label": "한라산영실코스",
          "refId": "CNTS_000000000019973"
          },
          "cate1cd": {
          "value": "cate0000000002",
          "label": "관광지",
          "refId": "contscate>cate0000000002"
          },
          "cate2cd": {
          "value": "cate0000001320",
          "label": "도보",
          "refId": "cate0000000002>cate0000001320"
          },
          "cate3cd": {
          "value": "cate0000001414",
          "label": "그외",
          "refId": "cate0000001320>cate0000001414"
          },
          "created": "20211026101754"
      }
      ],
      "festivalcontents": null,
      "repPhoto": {
      "descseo": "한라산영실코스",
      "photoid": {
          "photoid": 2019022584603,
          "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/202110/26/616ce943-7b6c-45c9-afdd-3958fda0530d.jpg",
          "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/202110/26/eaf38b55-60a6-4b5a-af34-994a413137ec.jpg"
      }
      },
      "PHOTOSHARECOUNT": 295,
      "reservelink": null
  },
  {
      "alltag": "폭포,경관/포토,커플,여름,자연경관,포토스팟,공용주차장,현금결제,카드결제,화장실,편의점,음료대,유도 및 안내시설,경보 및 피난시설,아주 어려움,실외,상,포토스팟,기타,전망 관람,1시간 미만",
      "contentsid": "CONT_000000000500531",
      "contentscd": {
      "value": "c1",
      "label": "관광지",
      "refId": "contentscd>c1"
      },
      "title": "정방폭포",
      "region1cd": {
      "value": "region2",
      "label": "서귀포시",
      "refId": "region>region2"
      },
      "region2cd": {
      "value": "21",
      "label": "서귀포시내",
      "refId": "region2>21"
      },
      "address": "제주특별자치도 서귀포시 동홍동 278",
      "roadaddress": "제주특별자치도 서귀포시 칠십리로214번길 37",
      "tag": "폭포,경관/포토,커플,여름,자연경관,포토스팟",
      "introduction": "높은곳에서 바다로 떨어지는 물줄기의 시원함\r\n· 명승 제43호\r\n· 올레6코스",
      "readcnt": 127320,
      "likecnt": 27,
      "reviewcnt": 122,
      "markcnt": 1120,
      "snssharecnt": 82,
      "schedulecnt": 0,
      "visitcnt": 7,
      "evelpt": 5,
      "latitude": 33.244854,
      "longitude": 126.5718,
      "postcode": "63599",
      "phoneno": "064-733-1530",
      "sbst": "정방폭포는 천제연폭포, 천지연폭포와 더불어 제주도 3대 폭포라고 불린다. 높이 23m, 너비 8m에 깊이 5m에 달하며,\r\n국내에선 유일한 뭍에서 바다로 직접 떨어지는 폭포다. 서귀포 시내에서 버스로 15분 거리에 있다.\r\n입구의 매표소에서 표를 구매하고 소나무가 있는 계단을 따라 5분 정도 내려오면, 햇빛이 비쳐 은하수 빛깔로 변하는 정방폭포를 볼 수 있다.\r\n\r\n정방폭포는 멀리서도 시원한 폭포 소리가 들리고, 폭포 양쪽으로 주상절리가 잘 발달한 수직 암벽도 볼 수 있다.\r\n한라산에서 내려와 서귀포 시내를 관통하고, 바다앞으로 하얗게 떨지는 정방폭포의 모습은, 서양의 거대폭포처럼 웅장하진 않지만,\r\n자연과 조화롭게 어울리며 단정하게 떨어지는 모습이 전통 수묵화를 감상하는 느낌을 준다. \r\n\r\n​​​​​​​1995년 제주기념물 제44호로 지정되었다가 2008년 국가 명승 제43호로 승격되었다. ​​​​​​​\r\n\r\n정방폭포의 한쪽 석벽에는 '서불과차'라는 글이 새겨져 있는데, 이에 관해서는 다음과 다음 전설이 전해 내려온다.\r\n\r\n​​​​​​​아주 옛날 중국 진시황은 세상을 모두 자기의 손아귀에 넣고 권세를 누리며 부러울 것 없이 살았다.\r\n그런데 그 부러울 것 없는 진시황에게도 어쩌지 못하는 고민이 있었으니, 그건 자신의 나이를 부정할 수는 없는 것이었다.\r\n왕으로서의 위엄이나 왜적을 막아내는 장수로서의 용맹스러움은 나무랄 데 없었으나\r\n점점 늙고 쇠약해져가는 자신의 모습은 스스로도 어쩔 수 없음에 늘 진시황은 고민하였다.\r\n늙지 않고 영생을 누리고 싶었던 진시황이 하루는 모든 신하를 불러 놓고 명을 내렸다.\r\n\r\n“이 세상에서 불로장생 할 수 있는 방법을 아는 자가 없느냐?”\r\n\r\n서불이라는 꾀 많은 신하는 진시황의 앞으로 나서서 또박또박 그 물에 대답을 하였다.\r\n“소인이 듣기로는 저 동쪽 나라 작은 섬 영주라는 곳에는 영산이 있는데 그곳에 가면 불로초가 있다고 합니다. 제가 그곳에 가서 그 불로초를 캐오겠습니다.”\r\n자신의 큰 소원이 이루어지게 된 진시황은 서불이 원하는 동남동녀 각 500명을 뽑아주고, 큰 배와 먹을 것을 잔뜩 내려주었다.\r\n동쪽의 거친 바다를 건너오던 서불 일행은 깊은 바다 속 큰 용을 만나 큰 위기를 맞으나 서불의 쩌렁쩌렁한 호령으로 금방 물리쳤다.\r\n제주에 도착하자 서불은 데리고 온 동남동녀 500쌍에게 제주의 영산 한라산에 가서 불로초를 캐오라고 명한다.\r\n동남동녀 500쌍은 한라산에서 불로초를 찾아 온 산을 헤매었지만 결국 불로초를 찾지 못하고,\r\n한라산의 특이한 식물 시로미를 캔 뒤 정방폭포 서쪽 절벽에 ‘서불과지’라는 마애각을 남기고 서쪽으로 돌아갔다.\r\n\r\n한편, 정방폭포 ‘소남머리’는 4.3사건 당시 정보과에서 취조 받은 주민들 중, 즉결처형 대상자들 대부분이 희생당한 곳이기도 하다.\r\n흔히 정방폭포에서 희생당했다고 하는 희생자 대부분이 정방폭포 상당과 이어지는 이곳에서 총살당했다.\r\n‘소남머리’는 동산에 소나무가 많다고 붙여진 이름이다.\r\n\r\n당시 서귀중학교 학생이었던 송세종씨는\r\n\"그때 당시 어디 여자인지는 모르지만, 도망가다가 절벽으로 떨어졌는데 노송에 걸렸어.\r\n그 여자가 임신을 하고 있었지. 떨어지니까 군인들이, 이건 하늘이 도운 사람이라 해가지고 살려줬어.\r\n사람 두 번 죽인다는 것이 없으니까. 나도 직접 눈으로 본 건 아니지만\" 이라고 회고했다.\r\n\r\n서귀리 및 서귀면, 중문면 일대뿐만 아니라 남원면, 안덕면, 대정면, 표선면 주민에 이르기까지, 정방폭포 희생자들은 삼남 지역 전체에 이른다.\r\n\r\n<출처: 제주4·3연구소, 「4·3유적 Ⅱ」(2008)>",
      "created": "20160530111636",
      "changed": "20220801020004",
      "catemappList": [
      {
          "seq": 30482,
          "contentsid": {
          "value": "CONT_000000000500531",
          "label": "정방폭포",
          "refId": "CONT_000000000500531"
          },
          "cate1cd": {
          "value": "cate0000000002",
          "label": "관광지",
          "refId": "contscate>cate0000000002"
          },
          "cate2cd": {
          "value": "cate0000000009",
          "label": "자연",
          "refId": "cate0000000002>cate0000000009"
          },
          "cate3cd": {
          "value": "cate0000000041",
          "label": "폭포",
          "refId": "cate0000000009>cate0000000041"
          },
          "created": "20220317093734"
      }
      ],
      "festivalcontents": null,
      "repPhoto": {
      "descseo": "정방폭포",
      "photoid": {
          "photoid": 2019022584638,
          "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/202110/26/b77e1b21-7e4c-407f-9fa7-6d0a08ab250f.jpg",
          "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/202110/26/9247b36c-c3fe-4201-884f-a32947dd7488.jpg"
      }
      },
      "PHOTOSHARECOUNT": 158,
      "reservelink": null
  },
  {
      "alltag": "일출,해변,경관/포토,맑음,공용주차장,화장실,음료대,장애인 화장실,어려움,실외,상,기타,포토스팟,전망 관람,1시간 미만",
      "contentsid": "CONT_000000000500469",
      "contentscd": {
      "value": "c1",
      "label": "관광지",
      "refId": "contentscd>c1"
      },
      "title": "용두암",
      "region1cd": {
      "value": "region1",
      "label": "제주시",
      "refId": "region>region1"
      },
      "region2cd": {
      "value": "11",
      "label": "제주시내",
      "refId": "region1>11"
      },
      "address": "제주특별자치도 제주시 용담이동 483",
      "roadaddress": "제주특별자치도 제주시 용두암길 15",
      "tag": "일출,해변,경관/포토,맑음,자연경관,포토스팟",
      "introduction": "용이 승천하려다 뜻을 이루지 못했다는 전설을 담고 있는 곳\r\n· 제주도기념물 제57호\r\n· 올레17코스",
      "readcnt": 77318,
      "likecnt": 38,
      "reviewcnt": 121,
      "markcnt": 972,
      "snssharecnt": 48,
      "schedulecnt": 0,
      "visitcnt": 2,
      "evelpt": 5,
      "latitude": 33.5149624,
      "longitude": 126.5116869,
      "postcode": null,
      "phoneno": null,
      "sbst": "용담2동, 공항 북동쪽 해안에 있는 용두암은 제주관광의 상징과도 같은 곳이다. 공항과 가장 가까운 관광지로 해외여행자나 단체여행객들이 자주 찾는 관광지다.  용이 포요하며 바다에서 솟구쳐 오르는 형상을 따 용두암이라 이름지어졌다. 전설에 의하면 인근 계곡 용연에서 살던 용이 승천하려다가 돌로 굳어졌다고 한다. 겉으로 드러난 부분의 높이가 10m, 바다 속에 잠긴 몸의 길이가 30m 쯤 된다고 하니, 괴암을 응시하고 있자면, 정말로 용이 꿈틀거리는 것 같은 상상을 할법도 하다. \n\n\n이 용두암을 제대로 감상하려면 서쪽으로 100m 쯤 떨어진 곳이 적당하며, 바다가 잔잔한 날보다 파도가 심하게 몰아치는 날이 적격이다. 마치 천지개벽이 이루어지는 것 같기도 하고 신의 노여움 속에 용이 '으르르' 울부짖으며 바다 속에서 솟구쳐 오르는 듯 하기도 하다.\n\n용두암에서 도두항까지 이어지는 용담-도두해안도로에는 다양한 카페와 맛집이 있어 눈과 입이 즐거운 드라이브도 즐길 수 있다. \n\n\n용두암의 전설에 관해서는 아래와 같은 이야기가 전해내려온다. 제주 용담동 바다 깊은 곳에 용이 되고 싶은 이무기가 살고 있었다. 긴 세월 용이 되고 싶은 꿈만을 키우며 어둠을 이겨내고 있었던 것이다. 어둠에서 이겨내야 하는 세월이 천년이라던가? 이무기는 그저 꿈틀거리는 자신의 모습을 비관하며 번쩍번쩍 빛나는 비늘과 날카로운 발, 그리고 멋진 수염과 커다란 눈을 가진 용을 부러워했다. 이무기는 용이 되어 하늘로 오르고 싶었던 것이다. 바람이 얼마나 간절하던지 천년이란 세월도, 빛을 볼 수 없는 어둠도 모두 이겨내었던 것이다. 그런데 그 승천하던 날. 드디어 번쩍이는 푸른빛 비늘과 길다란 수염, 그리고 날카로운 발을 치켜들고 하늘로 기세등등 승천하는데 그만 한라산신이 쏜 화살에 맞아 다시 바다로 떨어지고 만 것이다. 바다에 떨어지던 용은 긴 세월 참고 참은 바람이 물거품이 됨에 억울하여 차마 죽지 못하고 머리를 바다위로 지켜들어 포효를 하다 바위가 되고 말았다. 그래서 아직도 억울한 울음을 우는지 입은 크게 벌리고 눈은 하늘을 쳐다보고 있다. 바다도 용의 안타까움을 아는지 유독 이곳의 바다는 잔잔하게 숨죽이고 있다.",
      "created": "20160530111636",
      "changed": "20220801015719",
      "catemappList": [
      {
          "seq": 27236,
          "contentsid": {
          "value": "CONT_000000000500469",
          "label": "용두암",
          "refId": "CONT_000000000500469"
          },
          "cate1cd": {
          "value": "cate0000000002",
          "label": "관광지",
          "refId": "contscate>cate0000000002"
          },
          "cate2cd": {
          "value": "cate0000000009",
          "label": "자연",
          "refId": "cate0000000002>cate0000000009"
          },
          "cate3cd": {
          "value": "cate0000000037",
          "label": "해변",
          "refId": "cate0000000009>cate0000000037"
          },
          "created": "20211112163556"
      }
      ],
      "festivalcontents": null,
      "repPhoto": {
      "descseo": "Yongduam Rock",
      "photoid": {
          "photoid": 19151,
          "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/1ba2e146-ef7a-4281-b27a-2a474b5705d4.jpg",
          "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201804/30/39fa654e-5805-4d29-9dfc-e8950f29292a.jpg"
      }
      },
      "PHOTOSHARECOUNT": 151,
      "reservelink": null
  },
  {
      "alltag": "휴양림,걷기/등산,휴식/힐링,친구,커플,흐림,여름,공용주차장,현금결제,카드결제,화장실,무료 WIFI,유도 및 안내시설,경보 및 피난시설,단독접근가능,단차없음,청각장애인 접근성,시각장애인 접근성,저상버스 접근 가능,장애인 화장실,장애인 전용 주차장,수동 휠체어 대여 가능,전동 휠체어 대여 가능,쉬움,실외,상,기타,산책로, 휴양림,1~2시간",
      "contentsid": "CONT_000000000500570",
      "contentscd": {
      "value": "c1",
      "label": "관광지",
      "refId": "contentscd>c1"
      },
      "title": "제주절물자연휴양림",
      "region1cd": {
      "value": "region1",
      "label": "제주시",
      "refId": "region>region1"
      },
      "region2cd": {
      "value": "11",
      "label": "제주시내",
      "refId": "region1>11"
      },
      "address": "제주특별자치도 제주시 봉개동 산 78-1",
      "roadaddress": "제주특별자치도 제주시 명림로 584",
      "tag": "휴양림,걷기/등산,휴식/힐링,친구,커플,흐림,여름,자연경관,수국",
      "introduction": "삼나무 숲에서 즐기는 산림욕",
      "readcnt": 82788,
      "likecnt": 50,
      "reviewcnt": 117,
      "markcnt": 982,
      "snssharecnt": 95,
      "schedulecnt": 0,
      "visitcnt": 4,
      "evelpt": 5,
      "latitude": 33.439373,
      "longitude": 126.62845,
      "postcode": "63313",
      "phoneno": "064-728-1510",
      "sbst": "절물자연휴양림은 쭉쭉 뻗어올라간 삼나무가 한눈에도 시원하고, 청정한 공기과 숲이 주는 힐링감이 좋아 많은 관광객이 즐겨찾는 제주시 명소다. 안개가 끼면 몽환적인 분위기를 연출해서 비가 오는 날씨에도 절물자연휴양림을 찾는 관광객이 많다. 절물자연휴양림의 산책로는 경사가 낮고 완만해서 어린이, 노약자, 장애인도 이용하기 편리하다.\n\n봉개동 중산간에 위치하여 시내에서 차로 20여분 소요된다. 천연림 100㏊, 인공림 200㏊로 약 300ha에 이르는 삼나무 숲에는 삼나무 이외에도 소나무와 산뽕나무, 까마귀와 노루 등의 동물도 서식하고 있다.\n\n절물이라는 이름은 근처에 약효가 좋은 물이 난다하여 유래되었다. 이전에 가뭄때도 마르지 않아 주민들이 식수로 이용했다 할 정도로 수량이 풍부하며, 신경통 및 위장병에 특효가 있다고 전해진다. 현재도 제주도에서 정기적으로 수질조사를 진행하고 있다. \n\n근처에는 절물오름이 유명한데 큰대나오름과 족은대나오름, 두 개의 오름을 끼고 있으며 오름 옆구리에 둥근 화구가 남아 있는 특이한 유형을 가지고 있다. 절물오름은 해발 697m이며, 정상까지는 1시간 정도면 충분히 왕복이 가능하다. \n\n휴양림에는 전망대, 등산로, 야영장 등의 편의시설과 체력단련시설, 어린이놀이터, 야외교실, 자연관찰원 등의 교육시설이 갖추어져 있으며 주변에 가볼만한 곳으로는 노루생태관찰원, 교래자연휴양림, 돌문화공원, 에코랜드테마파크 등이 있다.",
      "created": "20160530111636",
      "changed": "20220801020005",
      "catemappList": [
      {
          "seq": 26593,
          "contentsid": {
          "value": "CONT_000000000500570",
          "label": "제주절물자연휴양림",
          "refId": "CONT_000000000500570"
          },
          "cate1cd": {
          "value": "cate0000000002",
          "label": "관광지",
          "refId": "contscate>cate0000000002"
          },
          "cate2cd": {
          "value": "cate0000000009",
          "label": "자연",
          "refId": "cate0000000002>cate0000000009"
          },
          "cate3cd": {
          "value": "cate0000000043",
          "label": "휴양림",
          "refId": "cate0000000009>cate0000000043"
          },
          "created": "20211026134757"
      }
      ],
      "festivalcontents": null,
      "repPhoto": {
      "descseo": "제주절물자연휴양림",
      "photoid": {
          "photoid": 2019022584724,
          "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/202110/26/a95f545a-5102-4163-aafe-9719dda9ffd9.jpg",
          "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/202110/26/89b27cdc-25c1-4f37-b8d7-aa76012c01cb.jpg"
      }
      },
      "PHOTOSHARECOUNT": 165,
      "reservelink": null
  },
  {
      "alltag": "지질트레일,산,걷기/등산,맑음,가을,공용주차장,장애인 화장실,장애인 전용 주차장,아주 어려움",
      "contentsid": "CONT_000000000500285",
      "contentscd": {
      "value": "c1",
      "label": "관광지",
      "refId": "contentscd>c1"
      },
      "title": "산방산",
      "region1cd": {
      "value": "region2",
      "label": "서귀포시",
      "refId": "region>region2"
      },
      "region2cd": {
      "value": "23",
      "label": "안덕",
      "refId": "region2>23"
      },
      "address": "제주특별자치도 서귀포시 안덕면 사계리 산 16",
      "roadaddress": "제주특별자치도 서귀포시 안덕면 사계리 산 16",
      "tag": "지질트레일,산,걷기/등산,맑음,가을,자연경관,봄꽃,유채꽃,유네스코",
      "introduction": "설문대할망이 한라산 꼭대기를 뽑아 던져놓았다는 산방산 \r\n· 명승 제77호\r\n· 천연기념물 제376호\r\n· 올레10코스",
      "readcnt": 61647,
      "likecnt": 12,
      "reviewcnt": 115,
      "markcnt": 575,
      "snssharecnt": 16,
      "schedulecnt": 0,
      "visitcnt": 1,
      "evelpt": 5,
      "latitude": 33.236614,
      "longitude": 126.31289,
      "postcode": null,
      "phoneno": "064-794-2940",
      "sbst": "제주 서남부 지역을 달리다 보면, 안덕면 사계리 랜드마크인 산방산을 볼 수 있는데, 거대한 조각 작품을 보는 듯한 웅장함을 자랑한다. 산방산은 서남부 왠만한 곳에서는 보일만큼 큰데, 비교적 평탄한 지역에 홀로 우뚝 솟아있어 더욱 눈에 띈다.\r\n\r\n‘산방’은 굴이 있는 산을 의미하는데 샨방산 아래에 작은 굴에서는 부처를 모시고 있어 이곳을 ‘산방굴사’라고 한다. 이곳에는 날과 관계없이 낙숫물이 떨어지는데 이를 산방산의 여신인 “산방덕”의 눈물이라고도 한다. 넓은 바다와 아름답고 웅장한 산방산 속 푸른 자연과 어우러진 이곳의 절에서 마음의 안정과 여유를 찾을 수 있다.\r\n\r\n산방산 바로 앞에는 용머리 해안이 있는데 전망용 망원경이 있어 용머리 해안의 전망을 쉽게 눈에 담을 수 있다. 날이 좋다면, 용머리 바위, 형제섬 등 주변 경치를 더 생생하게 즐길 수 있는 유람선을 타는 것도 권할만 하다. 가끔 구름이 산방산 꼭대기를 둘러싼 모습을 볼 수 있는데 그림 속 풍경을 보는 듯한 신비한 느낌을 준다.\r\n\r\n봄에는 유채꽃이 빽빽하게 만발하기 때문에 노란빛과 어우러진 산방산의 경치를 보러 많은 사람들이 찾는다. 이런 자연이 주는 볼거리들과 함께 하멜전시관도 함께 들러봄직 하다. ‘하멜 표류기’로 알려져 있는, 하멜은 네덜란드 동인도 회사의 선원으로 난파를 겪어 제주도에 봉착했으며, 1652년부터 1666년까지 조선에 살았다. 하멜이 제주도에서 겪은 이야기들을 담은 하멜 상선 전시관이 산방산 바로 아래 자락에 위치하고 있다. ",
      "created": "20160530111636",
      "changed": "20220801020134",
      "catemappList": [
      {
          "seq": 29625,
          "contentsid": {
          "value": "CONT_000000000500285",
          "label": "산방산",
          "refId": "CONT_000000000500285"
          },
          "cate1cd": {
          "value": "cate0000000002",
          "label": "관광지",
          "refId": "contscate>cate0000000002"
          },
          "cate2cd": {
          "value": "cate0000000009",
          "label": "자연",
          "refId": "cate0000000002>cate0000000009"
          },
          "cate3cd": {
          "value": "cate0000000033",
          "label": "산",
          "refId": "cate0000000009>cate0000000033"
          },
          "created": "20220128094910"
      }
      ],
      "festivalcontents": null,
      "repPhoto": {
      "descseo": "산방산",
      "photoid": {
          "photoid": 2019022584767,
          "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/202110/26/49527805-363a-4061-b86e-8c32cbe66fc6.jpg",
          "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/202110/26/87031c98-90dc-4345-98a1-bbef42bd76b3.jpg"
      }
      },
      "PHOTOSHARECOUNT": 165,
      "reservelink": null
  },
  {
      "alltag": "일출,밤,오름,걷기/등산,친구,가을,힐링,자연경관,도보여행,도보,억새,실외,등산",
      "contentsid": "CONT_000000000500118",
      "contentscd": {
      "value": "c1",
      "label": "관광지",
      "refId": "contentscd>c1"
      },
      "title": "다랑쉬오름(월랑봉)",
      "region1cd": {
      "value": "region1",
      "label": "제주시",
      "refId": "region>region1"
      },
      "region2cd": {
      "value": "16",
      "label": "구좌",
      "refId": "region1>16"
      },
      "address": "제주특별자치도 제주시 구좌읍 세화리 산6",
      "roadaddress": "제주특별자치도 제주시 구좌읍 세화리 2705",
      "tag": "일출,밤,오름,걷기/등산,친구,가을,힐링,자연경관,도보여행,도보,억새",
      "introduction": "4계절 색채가 뚜렷한 오름의 여왕",
      "readcnt": 54796,
      "likecnt": 11,
      "reviewcnt": 104,
      "markcnt": 221,
      "snssharecnt": 29,
      "schedulecnt": 0,
      "visitcnt": 3,
      "evelpt": 5,
      "latitude": 33.474778404305006,
      "longitude": 126.82626013411866,
      "postcode": null,
      "phoneno": null,
      "sbst": "다랑쉬 오름은, 산봉우리의 분화구가 마치 달처럼 둥글게 보인다 하여 다랑쉬(도랑쉬, 달랑쉬)라 불렸다는 설과, 높다는 뜻의 '달'에 봉우리의 뜻을 가진 '수리(쉬)'가 합쳐져 불려진 이름이라는 주장이 있다. 유래의 진위 여부를 떠나, 다랑쉬의 모습은 두가지 설을 다 만족시킬만한 매력적인 외풍을 가지고 있다. 꼭대기의 분화구는 쟁반처럼 둥글게 패여 달을 떠올릴만 하며, 송당 일대 어디서나 보이는 솟은 봉우리와 균형미는 오름의 여왕이라고 불릴만한 위엄과 아름다움을 가지고 있다. 실제 둥근 굼부리에서 보름달이 솟아오르는 모습은 송당리가 아니면 볼 수 없는 광경이라 하여, 마을의 자랑거리로도 여겨진다. 지도상 원형을 띄는 다랑쉬오름의 밑지름은 1,013m, 전체 둘레가 3,391m로 비교적 큰 몸집을 가지고 있다. 사면은 돌아가며 어느 쪽으로나 비탈진 급경사를 이루고 있다. 산정부에는 크고 깊은 깔대기모양의 원형 분화구가 움푹 패어있는데, 이 화구의 바깥둘레는 약1,500m에 가깝고 화구의 깊이는 한라산 백록담의 깊이와 똑같은 115m라 한다. 제주 설화에 의하면, 설문대 할망이 치마로 흙을 나르면서 한 줌씩 놓은것이 제주의 오름인데, 다랑쉬 오름은 흙을 높자 너무 두두러져서 손으로 탁 쳐서 패이게 한 것이 지금의 분화구라고 한다. 아름다운 다랑쉬오름에서도 제주의 아픈 역사를 찾아볼 수 있는데, 다랑쉬 오름 아래 있던 다랑쉬마을(월랑동)이 4·3사건 때 토벌대에 의해 마을 전체가 초토화 된 사건이 그것이다. 다랑쉬오름에서 조금 떨어진 평지에는 다랑쉬굴이라는 곳이 있는데, 그리 피난갔던 마을 사람들도 모두 토벌대가 굴 입구에서 피운 불에 질식사 하였다. 1992년 44년만에 이들의 주검이 발견되었는데, 당시 굴 속 바닥에는 어린이부터 성인까지 민간인 시신 11구와 그릇, 항아리 등 생활용품이 널려 있었다. 이들은 모두 당국에 의해 화장되어 바다에 뿌려졌으며, 현재 다랑쉬 굴의 입구는 폐쇄되어 있다.",
      "created": "20160530111636",
      "changed": "20220801020001",
      "catemappList": [
      {
          "seq": 31419,
          "contentsid": {
          "value": "CONT_000000000500118",
          "label": "다랑쉬오름(월랑봉)",
          "refId": "CONT_000000000500118"
          },
          "cate1cd": {
          "value": "cate0000000002",
          "label": "관광지",
          "refId": "contscate>cate0000000002"
          },
          "cate2cd": {
          "value": "cate0000000009",
          "label": "자연",
          "refId": "cate0000000002>cate0000000009"
          },
          "cate3cd": {
          "value": "cate0000000035",
          "label": "오름",
          "refId": "cate0000000009>cate0000000035"
          },
          "created": "20220628165527"
      },
      {
          "seq": 31420,
          "contentsid": {
          "value": "CONT_000000000500118",
          "label": "다랑쉬오름(월랑봉)",
          "refId": "CONT_000000000500118"
          },
          "cate1cd": {
          "value": "cate0000000002",
          "label": "관광지",
          "refId": "contscate>cate0000000002"
          },
          "cate2cd": {
          "value": "cate0000001374",
          "label": "제주 4·3",
          "refId": "cate0000000002>cate0000001374"
          },
          "cate3cd": {
          "value": "cate0000002374",
          "label": "제주 4·3",
          "refId": "cate0000001374>cate0000002374"
          },
          "created": "20220628165527"
      }
      ],
      "festivalcontents": null,
      "repPhoto": {
      "descseo": "Darangswi Oreum Volcanic Cone (Wollangbong)",
      "photoid": {
          "photoid": 17326,
          "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/21ead729-dd07-42e8-be6b-e272828c7317.jpg",
          "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201804/30/60df4e71-fe8d-4fd6-84db-eb078af1be07.jpg"
      }
      },
      "PHOTOSHARECOUNT": 153,
      "reservelink": null
  },
  {
      "alltag": "휴식/힐링,테마공원,아이,맑음,봄,우수관광사업체,동굴,어린이,매화,수국,안전여행스탬프,공용주차장,현금결제,카드결제,화장실,무료 WIFI,흡연구역,편의점,음료대,유도 및 안내시설,단독접근가능,단차없음,장애인 화장실,장애인 전용 주차장,어려움,우수관광사업체,실내+실외,하,포토스팟,기타,1~2시간",
      "contentsid": "CONT_000000000500690",
      "contentscd": {
      "value": "c1",
      "label": "관광지",
      "refId": "contentscd>c1"
      },
      "title": "한림공원",
      "region1cd": {
      "value": "region1",
      "label": "제주시",
      "refId": "region>region1"
      },
      "region2cd": {
      "value": "13",
      "label": "한림",
      "refId": "region1>13"
      },
      "address": "제주특별자치도 제주시 한림읍 협재리 2487",
      "roadaddress": "제주특별자치도 제주시 한림읍 한림로 300",
      "tag": "휴식/힐링,테마공원,아이,맑음,봄,우수관광사업체,동굴,어린이,매화,수국,안전여행스탬프",
      "introduction": "10만 평 대지 위에 펼쳐지는 환상적인 10가지 테마파크.",
      "readcnt": 86485,
      "likecnt": 32,
      "reviewcnt": 103,
      "markcnt": 917,
      "snssharecnt": 34,
      "schedulecnt": 0,
      "visitcnt": 2,
      "evelpt": 5,
      "latitude": 33.3879944,
      "longitude": 126.2397837,
      "postcode": null,
      "phoneno": "064-796-0001",
      "sbst": null,
      "created": "20160530111636",
      "changed": "20220801015537",
      "catemappList": [
      {
          "seq": 31566,
          "contentsid": {
          "value": "CONT_000000000500690",
          "label": "한림공원",
          "refId": "CONT_000000000500690"
          },
          "cate1cd": {
          "value": "cate0000000002",
          "label": "관광지",
          "refId": "contscate>cate0000000002"
          },
          "cate2cd": {
          "value": "cate0000001251",
          "label": "테마관광지",
          "refId": "cate0000000002>cate0000001251"
          },
          "cate3cd": {
          "value": "cate0000000058",
          "label": "테마공원",
          "refId": "cate0000001251>cate0000000058"
          },
          "created": "20220713164711"
      }
      ],
      "festivalcontents": null,
      "repPhoto": {
      "descseo": "한림공원",
      "photoid": {
          "photoid": 2019022601118,
          "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/202205/30/e0145d42-16eb-4055-873c-ba683a16dede.jpg",
          "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/202205/30/58ce2ef7-c996-462e-aa99-eb613c01e95a.jpg"
      }
      },
      "PHOTOSHARECOUNT": 216,
      "reservelink": null
  },

  {
      "alltag": "경관/포토,커플,아이,맑음,봄,화장실,단독접근가능,단차없음,어려움",
      "contentsid": "CNTS_000000000018248",
      "contentscd": {
      "value": "c1",
      "label": "관광지",
      "refId": "contentscd>c1"
      },
      "title": "더럭초등학교(구, 더럭분교)",
      "region1cd": {
      "value": "region1",
      "label": "제주시",
      "refId": "region>region1"
      },
      "region2cd": {
      "value": "12",
      "label": "애월",
      "refId": "region1>12"
      },
      "address": "제주특별자치도 제주시 애월읍 하가리 1580-1",
      "roadaddress": "제주특별자치도 제주시 애월읍 하가로 195",
      "tag": "경관/포토,커플,아이,맑음,봄,포토스팟,어린이,봄꽃,벚꽃",
      "introduction": "알록달록 조용한 애월의 작은 초등학교(구, 분교)",
      "readcnt": 39354,
      "likecnt": 16,
      "reviewcnt": 101,
      "markcnt": 427,
      "snssharecnt": 16,
      "schedulecnt": 0,
      "visitcnt": 4,
      "evelpt": 5,
      "latitude": 33.453457,
      "longitude": 126.345276,
      "postcode": "63036",
      "phoneno": "064-797-7200",
      "sbst": "세계적인 색채디자이너, 장필립 랑클로(Jean Phiilippe Lenclos)가 디자인했다. \n\n다양한 색채가 아름다워 많은 이들이 포토스팟으로 찾고 있지만 관광지가 아닌 학교를 \n지역사회와 함께한다는 취지로 개방한 만큼 관람매너가 필수적이다. \n\n교육활동이 이루어지는 시간을 피해 방문하며, \n교실안으로 불쑥 들어가거나 기웃거리는 행동은 삼가해야 한다. \n\n야외화장실이나 주차공간은 따로 없으며 동물이나 음식물 반입이 불가하다. \n\n​​​​​​​\n<학교탐방로 이용안내 숙지사항>\n​​​​​​​\n1.개방시간이 아닌 18:00 까지는 탐방로를 이용\n2.학생들의 교육활동에 방해되지 않게하기\n3.학생들과 사진찍거나 찍어달라고 하지않기\n4.지나친 애정표현이나 언행 삼가하기\n5.가져온 쓰레기는 되가져가기",
      "created": "20161004160032",
      "changed": "20220801003924",
      "catemappList": [
      {
          "seq": 26607,
          "contentsid": {
          "value": "CNTS_000000000018248",
          "label": "더럭초등학교(구, 더럭분교)",
          "refId": "CNTS_000000000018248"
          },
          "cate1cd": {
          "value": "cate0000000002",
          "label": "관광지",
          "refId": "contscate>cate0000000002"
          },
          "cate2cd": {
          "value": "cate0000000010",
          "label": "문화관광",
          "refId": "cate0000000002>cate0000000010"
          },
          "cate3cd": {
          "value": "cate0000000080",
          "label": "그외",
          "refId": "cate0000000010>cate0000000080"
          },
          "created": "20211026164615"
      }
      ],
      "festivalcontents": null,
      "repPhoto": {
      "descseo": "Deoreokbungyo",
      "photoid": {
          "photoid": 1808,
          "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/4346a48e-46dc-4867-a500-52fe34939bf8.gif",
          "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201804/30/8b050ed1-a4f9-468b-bac5-a29aab9ada34.gif"
      }
      },
      "PHOTOSHARECOUNT": 131,
      "reservelink": null
  },
  {
      "alltag": "일출,해변,경관/포토,휴식/힐링,맑음,가을,공용주차장,화장실,아주 어려움",
      "contentsid": "CNTS_000000000018409",
      "contentscd": {
      "value": "c1",
      "label": "관광지",
      "refId": "contentscd>c1"
      },
      "title": "외돌개",
      "region1cd": {
      "value": "region2",
      "label": "서귀포시",
      "refId": "region>region2"
      },
      "region2cd": {
      "value": "21",
      "label": "서귀포시내",
      "refId": "region2>21"
      },
      "address": "제주특별자치도 서귀포시 서홍동 791",
      "roadaddress": "제주특별자치도 서귀포시 서홍동 791",
      "tag": "일출,해변,경관/포토,휴식/힐링,맑음,가을,자연경관,포토스팟",
      "introduction": "바다위에 홀로 우뚝, 우직한 외돌개\r\n· 명승 제79호\r\n· 올레7코스",
      "readcnt": 67271,
      "likecnt": 20,
      "reviewcnt": 96,
      "markcnt": 496,
      "snssharecnt": 39,
      "schedulecnt": 0,
      "visitcnt": 1,
      "evelpt": 5,
      "latitude": 33.240063,
      "longitude": 126.54573,
      "postcode": null,
      "phoneno": "064-760-3192",
      "sbst": "​\r\n\r\n제주 올레길 7코스의 시작점인 외돌개는 바다에서 20m높이로 솟아난 형상의 돌기둥이다. 바다 위에 홀로 우뚝 서있어 ‘외돌개’라는 이름이 붙여졌다.\r\n'장군석’, ‘할망 바위’라는 이름으로도 불리는데, 최영장군이 원나라와 싸울때, 이 바위를 장군처럼 꾸며놓아 적군을 자멸하게 했다는 설화가 있다. '할망바위'라는 이름의 유래에 대해서는 아래의 전설을 읽어보자. 눈에 보이는 암석뿐만 아니라 바다사람을 기다리던 제주 사람들의 생활상도 엿볼 수 있다.\r\n\r\n\r\n​​\r\n\r\n​​​​​​​이 돌기둥은 약 150만년전 화산이 폭발할때 생성되었을것으로 추정된다. 주변의 암석이 파도에 의해 침식되고 이렇게 강한 암석만 남아 있는 굴뚝 형태의 돌기둥을 과학용어로는 시스텍 (sea stack)이라 한다. 외돌개의 꼭대기에는 소나무들이 자생하고 있어 한 폭의 그림 같은 인상을 준다. 보는 방향에 따라 다른 모습을 보여, 자연의 아름다움을 느낄 수 있다.&nbsp;\r\n\r\n\r\n​\r\n\r\n​주변에 산책로가 잘 조성되어있어 멋진 경관을 눈에 담으며 걸을 수 있다. 제주에서만 볼수있는 풍경의 여운을 진하게 남기는 곳이다.\r\n넓은 바다 위에 홀로 서 있지만, 우직하면서도 조화로운 느낌을 주는 외돌개는 제주를 여행하며 한번쯤을 꼭 들러볼만 한곳으로 추천된다.&nbsp;\r\n\r\n\r\n​​​​​​​​\r\n\r\n​​​​​​​외돌개에는 다음과 같은 전설도 전해내려온다.\r\n옛날 서귀포에는 바닷일로 하루하루를 살아가는 사이좋은 한 노부부가 살았다. 거친 바다를 마다않고 노부부는 나가서 일을 했다. 하루는 바다도 잔잔한 것이 배를 띄우기에 적당한 날이었다.\r\n“하르방, 바당에 강 하영 잡앙 옵써예.” “경허주. 오늘은 날도 좋으난 고기 하영 잡히커라.”\r\n이렇게 할아버지는 채비를 마치고 바다로 나갔다. 바다에 나가니 아닌 게 아니라 고기가 떼로 다니는 게 아닌가? 할아버지는 흥겹게 고기를 끌어 올렸다. 돌아가서 할머니에게 많은 고기를 자랑할 생각에 신이 나서 일을 하다 오랜만에 만난 만선이 너무 기뻐 돌아오는 시간을 살짝 넘기고 말았다. 할아버지",
      "created": "20161007104747",
      "changed": "20220801020004",
      "catemappList": [
      {
          "seq": 26611,
          "contentsid": {
          "value": "CNTS_000000000018409",
          "label": "외돌개",
          "refId": "CNTS_000000000018409"
          },
          "cate1cd": {
          "value": "cate0000000002",
          "label": "관광지",
          "refId": "contscate>cate0000000002"
          },
          "cate2cd": {
          "value": "cate0000000009",
          "label": "자연",
          "refId": "cate0000000002>cate0000000009"
          },
          "cate3cd": {
          "value": "cate0000000037",
          "label": "해변",
          "refId": "cate0000000009>cate0000000037"
          },
          "created": "20211026173747"
      }
      ],
      "festivalcontents": null,
      "repPhoto": {
      "descseo": "외돌개",
      "photoid": {
          "photoid": 2019022584864,
          "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/202110/26/a434d9b2-a595-485f-89d6-1423bd989912.jpg",
          "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/202110/26/364e4579-cc5f-4e38-a520-36cde0e0ef17.jpg"
      }
      },
      "PHOTOSHARECOUNT": 155,
      "reservelink": null
  },
  {
      "alltag": "폭포,경관/포토,커플,아이,맑음,여름,공용주차장,현금결제,카드결제,화장실,장애인 화장실,장애인 전용 주차장,어려움,실외",
      "contentsid": "CNTS_000000000019331",
      "contentscd": {
      "value": "c1",
      "label": "관광지",
      "refId": "contentscd>c1"
      },
      "title": "천제연폭포",
      "region1cd": {
      "value": "region2",
      "label": "서귀포시",
      "refId": "region>region2"
      },
      "region2cd": {
      "value": "24",
      "label": "중문",
      "refId": "region2>24"
      },
      "address": "제주특별자치도 서귀포시 중문동 2232",
      "roadaddress": "제주특별자치도 서귀포시 천제연로 132(중문동)",
      "tag": "폭포,경관/포토,커플,아이,맑음,여름,포토스팟,어린이,봄꽃,벚꽃",
      "introduction": "칠선녀가 목욕을 하다 간다는 전설이 있는 폭포\r\n· 서귀포시 중문동\r\n· 천연기념물 제378호\r\n· 올레8코스",
      "readcnt": 117979,
      "likecnt": 41,
      "reviewcnt": 91,
      "markcnt": 1111,
      "snssharecnt": 51,
      "schedulecnt": 0,
      "visitcnt": 2,
      "evelpt": 5,
      "latitude": 33.25099,
      "longitude": 126.41689,
      "postcode": null,
      "phoneno": "064-760-6331",
      "sbst": "​​​​​​​​천제연 폭포는 한라산에서 시작된 중문천이 바다로 흐르면서 형성된 폭포로, 중문관광단지 내에 있다. 천제연폭포는 3개의 폭포로 나뉘어 지는데, 주상절리 절벽에서 천제연(못)으로 떨어지는 것이 제1폭포, 천제연의 물이 더 아래로 흐르면서 형성된 제2,3폭포가 있다. 제1폭포는 높이22m, 천제연 수심21m로 건기에는 폭포수가 떨어지지 않지만 주상절리형의 암벽과 에매랄드 빛의 연못이 굉장히 아름다워 내외국인을 불문하고 카메라를 꺼내들지 않는이가 없다. 제1폭포 근처에 있는 암석동굴 천정에는 이가 시리도로 차가운 물이 쏟아져 백중, ​​​​​​​처서에 이물을 맞으면 모든 병이 사라진다는 설이 있었으나 지금은 수영이 금지되어 진입할 수 없다. 제2폭포에서는 푸른 상록수 사이로 수묵화를 그리듯 떨어지는 폭포를, 3단에서는 절벽에서 시원하게 쏟아지는 폭포를 볼 수 있다. 2단과 3단 폭포 사이에는 선임교라는 아치형의 다리가 있는데, 옥황상제를 모시던 칠선녀가 옥피리를 불며 내려와 노닐다 올라갔다고 하는 전설이 있어 칠선녀다리로도 불린다.천제연(天帝淵)이라는 이름도 칠선녀가 모시던 '하나님'의 몫에서 유래됬다는 설이다. 칠선녀 다리에는 양쪽에 칠선녀조각상이 있으며, 야간에는 석등을 비춰 아름답고 신비로운 느낌을 준다. ​​​​​​​'천제루'라 불리는 누각도 주변 경관을 한층 돋보이게 한다. ​​​​​​폭포 양쪽으로는 천연기념물 제378호로 지정된 난대림이 형성되어 있는데, 국내에서는 보기 드문 송엽란(松葉蘭) ·담팔수(膽八樹) 등이 자생하며, 여러 가지 상록수와 덩굴식물 ·관목류가 무성하게 어우러져있다. ​​​​​​특히 이 계곡의 담팔수는 지방기념물 제14호로 지정되어 있다. 천제연에는 인근마을에 선한 영향력을 끼친 한 청년에 대한 전설이 전해내려온다. 중문에 사는 농부는 결혼을 한 지 십여년이 지나도 자식이 없어 무척 걱정을 하였다. 그래서 부부는 천제연에 밤이면 밤마다 찾아와서 깨끗한 물에 목욕하고 정성을 다하여 기도를 드렸다. 두어 달 후에 부인에게 태기가 있어 부부는 하늘에 감사하면서 기뻐하였다. 열달 후에 옥동자를 낳았는데, 재주가 비상하고 행실이 얌전하며 부모에 대한 효성도 지극하였다. 그런데 불행히도 그 아들이 17세가 되던 해에 아버지가 세상을 떠나고 스무 두살이 되던해에 과거에 응시하였으나 낙방하였다. 그는 낙심하지 않고 글읽기를 계속하였으나, 그에게 불행이 따라 어머니가 이상한 병으로 실명을 하고 말았다. 그는 글공부를 그만두고 천제연으로 가서 3년동안 계속 기도를 하였다. 어느날 하늘에서, \"\"네 정성이 하도 갸륵하여 내가 네 어미의 병을 낫게 하겠노라. 이로써 모든 사람들의 네 효심을 본받아 세상의 풍습을 아름답게 이루기를 바라노라. 이는 네가 과거를 보고 벼슬을 하여 백성들을 다스리는 일보다 더욱 소중한 일이니라.\"\"하는 것이었다. 집에 돌아와보니 어머니가 자리에서 일어나 부엌에서 아침을 준비하고 있었다. 아들은 아까 천제연에서 들었던 모든 이야기를 어머님께 말씀 드렸다. 청년은 과거를 보려던 글공부를 그만두고 몸소 착한 일을 찾아 하면서 살기 시작하였다. ​​​​​​그래서 마을 사람들은 누구나 그를 따르게 되었고, 마을에는 차차 아름다운 미풍양속이 곁들여지게 되었다.",
      "created": "20161021140751",
      "changed": "20220801020008",
      "catemappList": [
      {
          "seq": 29628,
          "contentsid": {
          "value": "CNTS_000000000019331",
          "label": "천제연폭포",
          "refId": "CNTS_000000000019331"
          },
          "cate1cd": {
          "value": "cate0000000002",
          "label": "관광지",
          "refId": "contscate>cate0000000002"
          },
          "cate2cd": {
          "value": "cate0000000009",
          "label": "자연",
          "refId": "cate0000000002>cate0000000009"
          },
          "cate3cd": {
          "value": "cate0000000041",
          "label": "폭포",
          "refId": "cate0000000009>cate0000000041"
          },
          "created": "20220128095238"
      }
      ],
      "festivalcontents": null,
      "repPhoto": {
      "descseo": "천제연폭포",
      "photoid": {
          "photoid": 2019022584901,
          "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/202110/26/1e88b507-377d-49b0-9d26-9aa7fc1004ed.jpg",
          "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/202110/26/70a2e08c-24d9-4dbd-8898-b1cb6ea7933c.jpg"
      }
      },
      "PHOTOSHARECOUNT": 141,
      "reservelink": null
  },
  {
      "alltag": "부모,커플,친구,아이,맑음,사계절,공용주차장,유도 및 안내시설,경보 및 피난시설,장애인 화장실,장애인 전용 주차장,아주 어려움,실내+실외,포토스팟,종교시설, 건축물",
      "contentsid": "CNTS_000000000018384",
      "contentscd": {
      "value": "c1",
      "label": "관광지",
      "refId": "contentscd>c1"
      },
      "title": "방주교회",
      "region1cd": {
      "value": "region2",
      "label": "서귀포시",
      "refId": "region>region2"
      },
      "region2cd": {
      "value": "23",
      "label": "안덕",
      "refId": "region2>23"
      },
      "address": "제주특별자치도 서귀포시 안덕면 상천리 427",
      "roadaddress": "제주특별자치도 서귀포시 안덕면 산록남로762번길 113",
      "tag": "부모,커플,친구,아이,맑음,사계절,문화관광,어린이,어트랙션",
      "introduction": "건축가 이타미 준이 설계한 노아의 방주를 본 따 만든 성전 건축물",
      "readcnt": 50775,
      "likecnt": 11,
      "reviewcnt": 87,
      "markcnt": 455,
      "snssharecnt": 36,
      "schedulecnt": 0,
      "visitcnt": 2,
      "evelpt": 5,
      "latitude": 33.305073,
      "longitude": 126.387665,
      "postcode": "63525",
      "phoneno": "064-794-0611",
      "sbst": "세계적인 건축가 이타미 준이 노아의 방주를 모티브로 설계한 교회건축물로, 아름다운 건축물로 유명하다.\n인공 수조를 조성해 건물이 물위에 떠있는 듯한 느낌을 주며, 그 모습이 푸른 잔디밭, 파란 하늘과 잘 어울려 건축물과 자연의 조화로움을 뽐낸다.\n사진촬영 명소로 알려져 많은 사람들이 찾고 있지만, 종교적인 장소인 만큼 주의가 필요하다. ",
      "created": "20161006165950",
      "changed": "20220801020000",
      "catemappList": [
      {
          "seq": 28248,
          "contentsid": {
          "value": "CNTS_000000000018384",
          "label": "방주교회",
          "refId": "CNTS_000000000018384"
          },
          "cate1cd": {
          "value": "cate0000000002",
          "label": "관광지",
          "refId": "contscate>cate0000000002"
          },
          "cate2cd": {
          "value": "cate0000000010",
          "label": "문화관광",
          "refId": "cate0000000002>cate0000000010"
          },
          "cate3cd": {
          "value": "cate0000000080",
          "label": "그외",
          "refId": "cate0000000010>cate0000000080"
          },
          "created": "20211220171434"
      }
      ],
      "festivalcontents": null,
      "repPhoto": {
      "descseo": "방주교회",
      "photoid": {
          "photoid": 2019022584918,
          "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/202110/27/402eb059-b3f4-4858-ad8b-037531858461.JPG",
          "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/202110/27/2a07265e-4fe8-4b52-a41b-5ab23afc7012.JPG"
      }
      },
      "PHOTOSHARECOUNT": 123,
      "reservelink": null
  },
  {
      "alltag": "섬속의섬,경관/포토,휴식/힐링,친구,커플,맑음,봄",
      "contentsid": "CNTS_000000000018432",
      "contentscd": {
      "value": "c1",
      "label": "관광지",
      "refId": "contentscd>c1"
      },
      "title": "가파도",
      "region1cd": {
      "value": "region3",
      "label": "섬 속의 섬",
      "refId": "region>region3"
      },
      "region2cd": {
      "value": "36",
      "label": "가파도",
      "refId": "region3>36"
      },
      "address": "제주특별자치도 서귀포시 대정읍 가파리",
      "roadaddress": "제주특별자치도 서귀포시 대정읍 가파리",
      "tag": "섬속의섬,경관/포토,휴식/힐링,친구,커플,맑음,봄,자연경관,포토스팟,언택트",
      "introduction": "돌담과 바다가 어우러지면서 아름다운 풍경을 자아내는 가파도 청보리",
      "readcnt": 46795,
      "likecnt": 12,
      "reviewcnt": 84,
      "markcnt": 213,
      "snssharecnt": 27,
      "schedulecnt": 0,
      "visitcnt": 2,
      "evelpt": 5,
      "latitude": 33.170017,
      "longitude": 126.271515,
      "postcode": null,
      "phoneno": "064-794-7130",
      "sbst": "제주도 부속섬 중 4번째로 큰 섬 가파도는 위에서 내려다보면, 바다를 헤엄쳐 가는 가오리 모양을 하고 있다.\n이름은 가오리(가파리)를 닮아 가파도가 되었다는 설과, 덮개 모양을 닮아 '개도(蓋島)'로 부르던 것이 가파도라 굳어졌다는 설 등이 있다.\n상동과 하동으로 나뉘어진 자그만한 섬에는 93세대 177명 정도가 거주하고 있다.\n포구 근처에 자전거를 대여하는 곳도 있지만, 오르막길이 없고, 1-2시간이면 다 걸을 수 있어 도보로 둘러보는데 부담이 없다. \n\n1751년(영조27)에 제주목사 정연유가 소 방목을 허가하면서 사람이 들어와 살았다고 전해지는데,\n많은 섬의 역사가 약탈이나 공도정책 등으로 인해 끊기고 이어지듯이 가파도도 그런 역사를 가지고 있다.\n선사시대 유적인 고인돌이 많이 남아있는것을 보아서, 가파도에 실제로 사람이 살기 시작한 것은 신석기시대까지 거슬러 올라간다.\n제주도에 있는 180여기의 고인돌 중 135기가 가파도에 남아있다. \n조선시대, 본섬과의 뱃길이 활발하지 않은 시절에 가파도 주민들은 봉화를 피워 본섬의 모슬포와 신호를 주고 받았다.\n물과 식량이 부족하면 봉화 하나, 물과 식량이 다 떨어지고 위급환자가 발생하면 봉화 두개, 사람이 죽거나 죽을 위험에 처하면 셋을 올렸고,\n모슬포에서는 이를 보고 필요한 배와 물자를 가파도에 보냈다고 한다. \n​​​​\n전에는 최남단 섬 마라도에 밀려 관광지로는 상대적으로 오지에 속하는 섬이었으나,\n청보리 관광과 올레길이 조성되면서 하루에도 정기적으로 3-4회의 여객선이 왕복운항하는 섬이 되었다.\n가파도는 상동(윗마을)과 하동(아랫마을)으로 나뉘는데, 전에는 유일한 항구였던 하동의 파포구를 중심으로 마을이 번성하였지만,\n지금은 상동포구 근처에도 주민들이 많이 거주하고 있다.\n올레길은 해안가를 따라서 가파도의 둘레를 걷거나, 중심을 가로질러 마을과 청보리 밭을 보는 코스가 있다.\n가파도 하면 빼놓을수 없는 것이 ‘청보리’이다.\n바닷일에 바빠 농사일에 신경쓸 새가 없었던 주민들은 씨만 뿌려 놓으면 잘 자라는 보리농사를 지어 밭을 놀렸다.\n가파도의 보리는 재배종으로 키가 1m를 훌쩍넘는다. 바람이 조금만 불어도 파도 너울같은 보리물결이 넘실댄다.\n일손이 없어 심어놨던 가파도의 보리는, 돌담과 바다가 어우러지면서 아름다운 풍경을 자아내면서 지금은 유명한 관광자원이 되었다.\n매년 4월 초-5월 초에 가파도 청보리 축제가 열리는데, 청보리 밭 걷기, 올레길 보물찾기, 야외 공연 등 다양한 행사가 열린다. ",
      "created": "20161007132431",
      "changed": "20220801020003",
      "catemappList": [
      {
          "seq": 26626,
          "contentsid": {
          "value": "CNTS_000000000018432",
          "label": "가파도",
          "refId": "CNTS_000000000018432"
          },
          "cate1cd": {
          "value": "cate0000000002",
          "label": "관광지",
          "refId": "contscate>cate0000000002"
          },
          "cate2cd": {
          "value": "cate0000001257",
          "label": "섬속의 섬",
          "refId": "cate0000000002>cate0000001257"
          },
          "cate3cd": {
          "value": "cate0000001258",
          "label": "섬속의 섬",
          "refId": "cate0000001257>cate0000001258"
          },
          "created": "20211027105544"
      }
      ],
      "festivalcontents": null,
      "repPhoto": {
      "descseo": "가파도",
      "photoid": {
          "photoid": 2019022584976,
          "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/202110/27/ea7a59c0-ea4d-4a11-bd54-55e231b78ba3.jpg",
          "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/202110/27/dda1f901-cf1a-4e6b-b453-89371a056609.jpg"
      }
      },
      "PHOTOSHARECOUNT": 183,
      "reservelink": null
  },
  {
      "alltag": "등대,일몰,경관/포토,커플,맑음,가을,포토스팟,산책",
      "contentsid": "CNTS_000000000019997",
      "contentscd": {
      "value": "c1",
      "label": "관광지",
      "refId": "contentscd>c1"
      },
      "title": "이호테우말등대",
      "region1cd": {
      "value": "region1",
      "label": "제주시",
      "refId": "region>region1"
      },
      "region2cd": {
      "value": "11",
      "label": "제주시내",
      "refId": "region1>11"
      },
      "address": "제주특별자치도 제주시 이호일동 374",
      "roadaddress": "제주특별자치도 제주시 서해안로 58",
      "tag": "등대,일몰,경관/포토,커플,맑음,가을,포토스팟",
      "introduction": "이호테우해변의 랜드마크, 말등대",
      "readcnt": 72169,
      "likecnt": 49,
      "reviewcnt": 83,
      "markcnt": 1156,
      "snssharecnt": 48,
      "schedulecnt": 0,
      "visitcnt": 11,
      "evelpt": 5,
      "latitude": 33.5021596,
      "longitude": 126.4564505,
      "postcode": "63108",
      "phoneno": "--",
      "sbst": "제주의 조랑말을 형상화해서 만든 등대로, 빨간말과 하얀말이 두마리가 각각 이호항의 안쪽 방파제와 바깥 방파제에 한마리씩 자리를 잡고 있다.\n이 등대는 푸른 바다 배경과 잘 어울려 많은 사람들이 제주의 풍경과 추억사진을 찍기 좋은 곳으로 즐겨찾고 있다.\n​​​​​​​꽤나 먼곳에서도 보이는 이 두 말 등대는 이호태우해변의 랜드마크로 자리잡았다. ",
      "created": "20161031144723",
      "changed": "20220801015848",
      "catemappList": [
      {
          "seq": 26648,
          "contentsid": {
          "value": "CNTS_000000000019997",
          "label": "이호테우말등대",
          "refId": "CNTS_000000000019997"
          },
          "cate1cd": {
          "value": "cate0000000002",
          "label": "관광지",
          "refId": "contscate>cate0000000002"
          },
          "cate2cd": {
          "value": "cate0000000009",
          "label": "자연",
          "refId": "cate0000000002>cate0000000009"
          },
          "cate3cd": {
          "value": "cate0000000037",
          "label": "해변",
          "refId": "cate0000000009>cate0000000037"
          },
          "created": "20211027114059"
      }
      ],
      "festivalcontents": null,
      "repPhoto": {
      "descseo": "이호테우말등대",
      "photoid": {
          "photoid": 2019022585027,
          "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/202110/27/82e2c2ee-3c94-48ca-9890-56a075107602.jpg",
          "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/202110/27/90be9bec-a700-4fb1-b27f-8ff59a62d4df.jpg"
      }
      },
      "PHOTOSHARECOUNT": 113,
      "reservelink": null
  },
  {
      "alltag": "해수욕장,액티비티,친구,맑음,여름,자연경관,체험,레저/체험,해변,물놀이,수상레저,공용주차장,화장실,편의점,음료대,유도 및 안내시설,경보 및 피난시설,아주 어려움",
      "contentsid": "CONT_000000000500604",
      "contentscd": {
      "value": "c1",
      "label": "관광지",
      "refId": "contentscd>c1"
      },
      "title": "중문색달해수욕장",
      "region1cd": {
      "value": "region2",
      "label": "서귀포시",
      "refId": "region>region2"
      },
      "region2cd": {
      "value": "24",
      "label": "중문",
      "refId": "region2>24"
      },
      "address": "제주특별자치도 서귀포시 색달동 3039",
      "roadaddress": "제주특별자치도 서귀포시 중문관광로72번길 29-51",
      "tag": "해수욕장,액티비티,친구,맑음,여름,자연경관,체험,레저/체험,해변,물놀이,수상레저",
      "introduction": "제주올레 8코스, 여유롭고 이국적인 해수욕장",
      "readcnt": 66117,
      "likecnt": 4,
      "reviewcnt": 81,
      "markcnt": 264,
      "snssharecnt": 89,
      "schedulecnt": 0,
      "visitcnt": 5,
      "evelpt": 5,
      "latitude": 33.24499,
      "longitude": 126.41159,
      "postcode": null,
      "phoneno": "064-739-4993",
      "sbst": "중문색달해수욕장은 아름다운 해안 풍경과 야자수의 이국적인 모습으로 중문관광단지에서 시작해 천제연폭포와 대포주상절리와 이어지는 곳에 위치하고 있다. \r\n해마다 100만 명이 넘는 사람들이 다양한 해양스포츠를 즐기기 위해 몰려든다. 본래는 진모살이라는 이라 불렸는데 긴 모래해변이라는 뜻이다. 이곳의 모래는 흑색, 회색, 적색, 백색 4가지가 섞여 있어 해가 비추는 방향에 따라 모래해변의 색깔이 달라 보인다.\r\n\r\n다른 해수욕장보다 파도가 잦고, 높은 편이라 서퍼들에게 인기가 많고, 국내의 가장 큰 규모의 국제 서핑대회가 개최가 매년 6월에 개최된다.\r\n 1999년 환경운동연합이 실시한 ‘수질환경성’조사 결과 전국 44개 해수욕장 가운데 최고의 청정 해수욕장으로 꼽히기도 했다. 천제연폭포로 가는 길 쪽 계단으로 내려오면 나오는 중문색달해수욕장에는 해녀상을 통해 제주도 해녀의 모습을 한눈에 살펴볼 수 있다.",
      "created": "20160530111636",
      "changed": "20220801015928",
      "catemappList": [
      {
          "seq": 31532,
          "contentsid": {
          "value": "CONT_000000000500604",
          "label": "중문색달해수욕장",
          "refId": "CONT_000000000500604"
          },
          "cate1cd": {
          "value": "cate0000000002",
          "label": "관광지",
          "refId": "contscate>cate0000000002"
          },
          "cate2cd": {
          "value": "cate0000000009",
          "label": "자연",
          "refId": "cate0000000002>cate0000000009"
          },
          "cate3cd": {
          "value": "cate0000000037",
          "label": "해변",
          "refId": "cate0000000009>cate0000000037"
          },
          "created": "20220711130953"
      }
      ],
      "festivalcontents": null,
      "repPhoto": {
      "descseo": "중문색달해수욕장",
      "photoid": {
          "photoid": 2019022585315,
          "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/202110/27/e304944c-29c1-44a1-b0a1-76386e7376fe.jpg",
          "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/202110/27/c236faf1-d6d9-42df-b1d5-364b016241ef.jpg"
      }
      },
      "PHOTOSHARECOUNT": 138,
      "reservelink": null
  },
  {
      "alltag": "일몰,드라이브,커플,맑음,가을,화장실,편의점,음료대,유도 및 안내시설,단독접근가능,단차없음,쉬움",
      "contentsid": "CONT_000000000500403",
      "contentscd": {
      "value": "c1",
      "label": "관광지",
      "refId": "contentscd>c1"
      },
      "title": "신창~차귀해안도로",
      "region1cd": {
      "value": "region1",
      "label": "제주시",
      "refId": "region>region1"
      },
      "region2cd": {
      "value": "14",
      "label": "한경",
      "refId": "region1>14"
      },
      "address": "제주특별자치도 제주시 한경면 신창리 1353-1",
      "roadaddress": "제주특별자치도 제주시 한경면 한경해안로 470",
      "tag": "일몰,드라이브,커플,맑음,가을,자연경관",
      "introduction": "붉은 낙조에 물든 해안을 볼수 있는 제주 일몰명소",
      "readcnt": 28783,
      "likecnt": 22,
      "reviewcnt": 80,
      "markcnt": 531,
      "snssharecnt": 25,
      "schedulecnt": 0,
      "visitcnt": 2,
      "evelpt": 5,
      "latitude": 33.33567,
      "longitude": 126.16328,
      "postcode": "63002",
      "phoneno": "--",
      "sbst": "제주도 서쪽 끝을 따라 연결된 해안도로로, 제주시 한경면 신창리에서 고산리까지 이어진다. \n6km정도의 해안도로를 따라 구불구불 드라이브를 하다 보면 제주도에서 가장 큰 무인도인 차귀도를 눈 앞에서 감상할 수 있다. \n날씨가 좋을 때면 차귀도가 눈앞에 있는 것처럼 떠 있고, \n구불구불한 해안선을 따라 세워져있는 풍력발전기의 모습은 다른 해안도로와는 또 다른 풍경을 선물한다. \n제주도 서쪽에 위치해 있기에 일몰 시간에 맞춘 드라이브도 추천할만 하다. 용수리 선착장에서 보는 일몰의 광경, 빨갛게 물든 바다도 정말 아름답다.",
      "created": "20160530111636",
      "changed": "20220731225834",
      "catemappList": [
      {
          "seq": 21126,
          "contentsid": {
          "value": "CONT_000000000500403",
          "label": "신창~차귀해안도로",
          "refId": "CONT_000000000500403"
          },
          "cate1cd": {
          "value": "cate0000000002",
          "label": "관광지",
          "refId": "contscate>cate0000000002"
          },
          "cate2cd": {
          "value": "cate0000000009",
          "label": "자연",
          "refId": "cate0000000002>cate0000000009"
          },
          "cate3cd": {
          "value": "cate0000000037",
          "label": "해변",
          "refId": "cate0000000009>cate0000000037"
          },
          "created": "20191128175220"
      }
      ],
      "festivalcontents": null,
      "repPhoto": {
      "descseo": "Sinchang - Chagwi Coastal Road",
      "photoid": {
          "photoid": 18826,
          "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/16e93d32-005e-48c0-a4f0-896c16e2c9e6.jpg",
          "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201804/30/8d283833-b6a4-42ac-a7d5-67b7351a6c5a.jpg"
      }
      },
      "PHOTOSHARECOUNT": 134,
      "reservelink": null
  },
  {
      "alltag": "테마공원,아이,맑음,봄,우수관광사업체,공용주차장,현금결제,카드결제,화장실,무료 WIFI,흡연구역,편의점,음료대,장애인 화장실,장애인 전용 주차장,수동 휠체어 대여 가능,어려움,우수관광사업체,실외,하,포토스팟,기타,산책로,1시간 미만",
      "contentsid": "CONT_000000000500005",
      "contentscd": {
      "value": "c1",
      "label": "관광지",
      "refId": "contentscd>c1"
      },
      "title": "제주김녕미로공원",
      "region1cd": {
      "value": "region1",
      "label": "제주시",
      "refId": "region>region1"
      },
      "region2cd": {
      "value": "16",
      "label": "구좌",
      "refId": "region1>16"
      },
      "address": "제주특별자치도 제주시 구좌읍 김녕리 산 16",
      "roadaddress": "제주특별자치도 제주시 구좌읍 만장굴길 122",
      "tag": "테마공원,아이,맑음,봄,우수관광사업체,자연경관,어린이",
      "introduction": "사계절 푸르른 랠란디나무로 이루어진 우리나라 최초의 미로공원",
      "readcnt": 69865,
      "likecnt": 42,
      "reviewcnt": 78,
      "markcnt": 729,
      "snssharecnt": 63,
      "schedulecnt": 0,
      "visitcnt": 8,
      "evelpt": 5,
      "latitude": 33.53653,
      "longitude": 126.77213,
      "postcode": "63348",
      "phoneno": "064-782-9266",
      "sbst": "김녕미로공원은 사계절 푸르름을 유지하는 상록수 랠란디(Leylandii)가 수벽을 이루고 있는 우리나라 최초의 미로공원이다. 랠란디 나무 특유의 향기와, 공원 바닥내 화산석 ‘송이’는 헛갈리는 미로를 헤매다 나온 여행자들에게 한결 맑은 기운을 느끼게 만든다. 연인은 물론 남녀노소 누구나가 즐거워하는 김녕미로공원은 가족들에게 특히 인기가 많은 코스이며, 제주도민이 가장 사랑하는 명소로 꼽히기도 했다. 또한 30년 전, 제주를 사랑한 미국인 더스틴 교수의 아이디어로 개발되어 운영 수익금을 매년 제주대학교를 비롯한 지역사회로 환원하고 있다.사람 키보다 훨씬 높은 3미터 높이의 나무가 빼곡하게 이어진 길은 종착점을 찾아가는 데 알쏭달쏭할 만큼 정리가 잘되어 있다. 정말 길을 찾기 쉽지 않을 정도로 흥미진진한 나무 숲 미로다. 또 공원 이곳저곳에 50여 마리의 고양이들이 자유롭게 살아가는 김녕미로공원은 우리나라 최초의 고양이공원으로 알려질 만큼 어여쁜 고양이들을 구석구석에서 만날 수 있는 곳이다. 처음 공원을 조성할 때부터 주변 자연을 그대로 유지하는 것을 중요히 여겼고 숲과 마을을 오가며 살아 온 고양이들도 그런 의미에서 ‘있는 그대로 둔 것’이 지금에 이른 것이다.150년 넘는 역사를 자랑하는 프랑스의 지베르니 모네 정원처럼 오래도록 제주인과 함께 상생하는 공원이 되길 희망하는 김녕미로공원에서 답답한 요즘 생활의 출구를 찾아보는 건 어떨까. 직접 경험해보면 진정한 미로찾기의 희열을 맛 볼 수 있을 것이다. ",
      "created": "20160530111636",
      "changed": "20220801020156",
      "catemappList": [
      {
          "seq": 26707,
          "contentsid": {
          "value": "CONT_000000000500005",
          "label": "제주김녕미로공원",
          "refId": "CONT_000000000500005"
          },
          "cate1cd": {
          "value": "cate0000000002",
          "label": "관광지",
          "refId": "contscate>cate0000000002"
          },
          "cate2cd": {
          "value": "cate0000001251",
          "label": "테마관광지",
          "refId": "cate0000000002>cate0000001251"
          },
          "cate3cd": {
          "value": "cate0000000058",
          "label": "테마공원",
          "refId": "cate0000001251>cate0000000058"
          },
          "created": "20211027175522"
      }
      ],
      "festivalcontents": null,
      "repPhoto": {
      "descseo": "Kimnyoung Maze Park",
      "photoid": {
          "photoid": 16933,
          "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/1ce09b4f-b5d5-4669-a953-2c2e238170fc.gif",
          "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201804/30/928e3894-81a4-4d38-b72f-67d3c5fd6f72.gif"
      }
      },
      "PHOTOSHARECOUNT": 130,
      "reservelink": null
  },
  {
      "alltag": "섬속의섬,일몰,휴식/힐링,아이,맑음,여름,공용주차장,현금결제,카드결제,화장실,편의점,음료대,유도 및 안내시설,아주 어려움,UNESCO 세계지질공원,1~2시간",
      "contentsid": "CONT_000000000500267",
      "contentscd": {
      "value": "c1",
      "label": "관광지",
      "refId": "contentscd>c1"
      },
      "title": "비양도",
      "region1cd": {
      "value": "region3",
      "label": "섬 속의 섬",
      "refId": "region>region3"
      },
      "region2cd": {
      "value": "34",
      "label": "비양도",
      "refId": "region3>34"
      },
      "address": "제주특별자치도 제주시 한림읍 협재리",
      "roadaddress": "제주특별자치도 제주시 한림읍 협재리",
      "tag": "섬속의섬,일몰,휴식/힐링,아이,맑음,여름,자연경관,어린이,언택트,유네스코",
      "introduction": "천 년의 시간을 간직한 섬\r\n· 천연기념물 제439호\r\n· 제주도기념물 제48호\r\n· 올레15코스",
      "readcnt": 45274,
      "likecnt": 7,
      "reviewcnt": 77,
      "markcnt": 141,
      "snssharecnt": 21,
      "schedulecnt": 0,
      "visitcnt": 3,
      "evelpt": 5,
      "latitude": 33.408838708596456,
      "longitude": 126.22785712460939,
      "postcode": "63032",
      "phoneno": "064-796-3515",
      "sbst": "​비양도는 제주도 서쪽 한림읍에 위치한 섬으로, 근처 협재해수욕장에서도 보이는 섬이다.\n제주도에서는 4개의 섬 중에 가장 나중에 생기는 섬으로, 탄생의 기록이 남아있다고 한다.\n면적은 0.5km인 작은 섬으로 2~3시간 정도이면 충분히 둘러볼 수 있는 규모다. \n\n해안도로를 따라 걷다보면 기암괴석을 볼 수 있는데, 애기 업은 돌과 코끼리 바위가 대표적이다.\n또 뭍에서는 보기 드문,  바닷물로된 염습지 ‘필랑못’이 있다.\n바닷물이 드나들어 염분 변화가 큰 습지이다. 비양봉 전망대는 조금 더 오르면 하얀 등대가 있다.\n그 곳에 제주도의 모습을 한눈에 볼 수 있는 전망대가 있다.\n\n비양도에 관해서는 다음과 같은 전설이 전해내려온다.\n한림읍 협재리 앞바다에 떠있는 비양도는 고려시대 중국에서 날아와서 생겼다.\n중국에 있는 한 오름이 어느 날 갑자기 날아와서 지금의 위치에 들어 앉아 있다는 것이다.\n이 때문에 중국에 있던 그 오름이 없다고 한다.\n날이 떨친 오름이라는 비양도는 오름이 갑자기 날아와 협재리 앞바다에 들어앉자 바닷속에 있던 모래가 넘쳐 올라서 협재리 해안가를 덮쳤다.\n안에 있는 집들이 모래에 덮혀 버렸던 것이다.\n지금도 모래 밑을 파다보면 사람뼈, 그릇들이 나오고, 아주 부드러운 밭흙이 나타난다고 한다.\n또한 비양도 오름이 날아오다 잘못 왔다고 해서 확 돌아 앉으니 그만 그 자리에 멈추게 되었고, 그래서 비양도 오름이 돌아앉은 형체라 한다.",
      "created": "20160530111636",
      "changed": "20220801020059",
      "catemappList": [
      {
          "seq": 26712,
          "contentsid": {
          "value": "CONT_000000000500267",
          "label": "비양도",
          "refId": "CONT_000000000500267"
          },
          "cate1cd": {
          "value": "cate0000000002",
          "label": "관광지",
          "refId": "contscate>cate0000000002"
          },
          "cate2cd": {
          "value": "cate0000001257",
          "label": "섬속의 섬",
          "refId": "cate0000000002>cate0000001257"
          },
          "cate3cd": {
          "value": "cate0000001258",
          "label": "섬속의 섬",
          "refId": "cate0000001257>cate0000001258"
          },
          "created": "20211028105309"
      }
      ],
      "festivalcontents": null,
      "repPhoto": {
      "descseo": "비양도",
      "photoid": {
          "photoid": 2019022585406,
          "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/202110/28/48db5516-8a2f-4208-81d6-9eeb657e992d.jpg",
          "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/202110/28/e3eb3186-1bbe-4671-93bc-124e3d4c7a2c.jpg"
      }
      },
      "PHOTOSHARECOUNT": 129,
      "reservelink": null
  },
  {
      "alltag": "목장,경관/포토,커플,우유,공용주차장",
      "contentsid": "CNTS_200000000008053",
      "contentscd": {
      "value": "c1",
      "label": "관광지",
      "refId": "contentscd>c1"
      },
      "title": "성이시돌목장",
      "region1cd": {
      "value": "region1",
      "label": "제주시",
      "refId": "region>region1"
      },
      "region2cd": {
      "value": "13",
      "label": "한림",
      "refId": "region1>13"
      },
      "address": "제주특별자치도 제주시 한림읍 금악리 116",
      "roadaddress": "제주특별자치도 제주시 한림읍 산록남로 53",
      "tag": "목장,경관/포토,커플,우유,자연경관,포토스팟",
      "introduction": "아름다운 풍경이 있는 목장",
      "readcnt": 28514,
      "likecnt": 8,
      "reviewcnt": 77,
      "markcnt": 226,
      "snssharecnt": 22,
      "schedulecnt": 0,
      "visitcnt": 1,
      "evelpt": 5,
      "latitude": 33.3529941,
      "longitude": 126.3139406,
      "postcode": null,
      "phoneno": "064-796-0396",
      "sbst": "성이시돌 목장은 한림읍 금악리에 있는 목장으로 아름다운 경관과 독특한 건축물인 테쉬폰을 볼 수 있는 곳이다.\r\n성이시돌 목장 내 테쉬폰은 이라크 바그다드 지역 인근 테쉬폰(Cteshphon)이라 불리는 곳에서 처음 건축 양식이 시작되어 건축물 이름이 테쉬폰이 되었다. 우리나라에서는 유일하게 성이시돌목장에만 있는 귀한 건축물이다. 테쉬폰과 성이시돌 목장은 스냅 및 웨딩촬영의 명소이기도 하다.\r\n\r\n성이시돌 목장은 1954년 성골롬반외방선교회 선교사로 제주에 온 맥그린치 신부가 황무지였던 목장 주변을 개간해 경작하고 새로운 농업기술을 소개하며 생겨났다. 맥스린치 신부는 제주의 가난을 타개하기 위해 한라산 중산간 개간을 통해 목축업 활성화를 위해 성이시돌 목장을 설립하였다. 성이시돌 목장 안에는 우유부단 카페가 있으며 기념품 숍도 운영되고 있다. 기념품 숍에서는 미니어처 테쉬폰 제품과 목장에서 직접 만든 우유와 치즈 등을 구매할 수 있다.",
      "created": "20181221154630",
      "changed": "20220801020257",
      "catemappList": [
      {
          "seq": 29524,
          "contentsid": {
          "value": "CNTS_200000000008053",
          "label": "성이시돌목장",
          "refId": "CNTS_200000000008053"
          },
          "cate1cd": {
          "value": "cate0000000002",
          "label": "관광지",
          "refId": "contscate>cate0000000002"
          },
          "cate2cd": {
          "value": "cate0000000009",
          "label": "자연",
          "refId": "cate0000000002>cate0000000009"
          },
          "cate3cd": {
          "value": "cate0000001321",
          "label": "그외",
          "refId": "cate0000000009>cate0000001321"
          },
          "created": "20220121094203"
      }
      ],
      "festivalcontents": null,
      "repPhoto": {
      "descseo": "성이시돌목장",
      "photoid": {
          "photoid": 2019022585435,
          "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/202110/28/f2223296-ce4a-4352-86fe-8e2b85f5edd3.jpg",
          "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/202110/28/1a7cc09a-6afc-4433-8cfb-779c659bc94c.jpg"
      }
      },
      "PHOTOSHARECOUNT": 0,
      "reservelink": null
  },
  {
      "alltag": "휴식/힐링,아이,맑음,봄,우수관광사업체,자연경관,어린이,동백,매화,수국,공용주차장,현금결제,카드결제,화장실,무료 WIFI,편의점,음료대,유도 및 안내시설,경보 및 피난시설,임산부 휴게시설,단독접근가능,단차없음,저상버스 접근 가능,장애인 화장실,장애인 전용 주차장,수동 휠체어 대여 가능,쉬움,우수관광사업체,실내+실외,하,체험,공연/전시,포토스팟,1~2시간",
      "contentsid": "CONT_000000000500707",
      "contentscd": {
      "value": "c1",
      "label": "관광지",
      "refId": "contentscd>c1"
      },
      "title": "휴애리 자연생활공원",
      "region1cd": {
      "value": "region2",
      "label": "서귀포시",
      "refId": "region>region2"
      },
      "region2cd": {
      "value": "25",
      "label": "남원",
      "refId": "region2>25"
      },
      "address": "제주특별자치도 서귀포시 남원읍 신례리 2081",
      "roadaddress": "제주특별자치도 서귀포시 남원읍 신례동로 256 (신례리, 휴애리)",
      "tag": "휴식/힐링,아이,맑음,봄,우수관광사업체,자연경관,어린이,동백,매화,수국,안전여행스탬프",
      "introduction": "자연속 동·식물들과 교감이 있는 체험형 자연생활공원",
      "readcnt": 73168,
      "likecnt": 26,
      "reviewcnt": 77,
      "markcnt": 923,
      "snssharecnt": 54,
      "schedulecnt": 0,
      "visitcnt": 1,
      "evelpt": 5,
      "latitude": 33.30854,
      "longitude": 126.63448,
      "postcode": null,
      "phoneno": "064-732-2114",
      "sbst": "휴애리는 서귀포시 남원읍 신례리 한라산 자락에 있는 자연생활 체험공원이다.\r\n\r\n제주를 대표하는 계절 체험으로 감귤 체험이 있다. 감귤 맛이 좋기로 소문난 휴애리 감귤 체험에서 8월 ~ 9월에는 어린이 교육용으로 감귤 체험을 진행하고 있다. 감귤밭에서 감귤이 자라는 과정을 직접 눈으로 보며 직접 딴 풋귤(청귤)은 가져가서 청귤청 등으로 활용할 수 있으며, 사진 찍기 좋게 꾸며진 다양한 감귤 포토존에서 인생사진을 남겨보자. 10월 ~ 2월까지 전 연령이 직접 체험하면서 따서 먹어보고 체험해본 귤을 가져갈 수 있다.\r\n\r\n또한, 휴애리 대표 축제로는 2월 ~ 3월 제주에서 봄을 가장 먼저 알리는 매화축제를 시작으로 4월 ~ 7월까지 공원 곳곳에서 수국과 산수국을 함께 볼 수 있는 수국축제 9월 ~ 11월까지 가을 제주를 찾는 사람들에게 핑크핑크한 제주를 선물하는 핑크뮬리축제 11월 ~ 1월까지 겨울 제주를 대표하는 동백축제가 열리는 등 다양한 볼거리를 제공한다. 공원 안에는 다양하고 예쁜 포토존들이 구성되어 있고, 축제 외에도 동물교감 체험 등 다양한 체험 프로그램이 준비되어 있어 커플이나 가족단위 관광객들에게 추천하는 관광지이다. 매시간 정각, 인기 절정 흑돼지야 놀자 공연이 펼쳐지는데, 공연 30분 전에 공원을 입장하면 원활하게 공연을 관람할 수 있고 흑돼지와 거위의 공연을 보고 난후 또 다른 재미인 먹이주기 체험을 할 수 있다. 이 외에도 어미 흑돼지와 함께 있는 아기 흑돼지를 직접 보고 만지면서 교감을 할 수 있으며, 흑돼지뿐만 아니라 토끼, 제주마, 송아지, 염소 등 다양한 동물들에게 직접 먹이를 주며 가까이서 관찰할 수 있는 먹이주기 체험도 할 수 있다.\r\n\r\n곤충테마관에서는 토종 곤충과 장수풍뎅이, 사슴벌레, 수중 생물 등 제주도에 서식하는 여러 곤충들을 관찰할 수 있고 최근 인기 급부상 중인 귀뚜라미의 생활하는 모습과 울음소리 등을 감상해 볼 수 있어서 더욱 좋은 시간을 보낼 수 있다.\r\n\r\n4계절 축제 테마와 다양한 체험거리가 있는 인생사진 명소 제주도 휴애리에서 즐겁고 행복한 추억을 만들어 보자.",
      "created": "20160530111636",
      "changed": "20220801020245",
      "catemappList": [
      {
          "seq": 31484,
          "contentsid": {
          "value": "CONT_000000000500707",
          "label": "휴애리 자연생활공원",
          "refId": "CONT_000000000500707"
          },
          "cate1cd": {
          "value": "cate0000000002",
          "label": "관광지",
          "refId": "contscate>cate0000000002"
          },
          "cate2cd": {
          "value": "cate0000001251",
          "label": "테마관광지",
          "refId": "cate0000000002>cate0000001251"
          },
          "cate3cd": {
          "value": "cate0000000058",
          "label": "테마공원",
          "refId": "cate0000001251>cate0000000058"
          },
          "created": "20220706153046"
      }
      ],
      "festivalcontents": null,
      "repPhoto": {
      "descseo": "휴애리 자연생활공원",
      "photoid": {
          "photoid": 2019022602467,
          "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/202207/06/527f9db3-d92c-48dc-a680-67c75f03d078.jpg",
          "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/202207/06/abde9ced-7689-4666-87e4-48336325ef20.jpg"
      }
      },
      "PHOTOSHARECOUNT": 156,
      "reservelink": null
  },

  {
      "alltag": "해변,경관/포토,친구,커플,맑음,자연경관,포토스팟,유네스코,공용주차장,현금결제,카드결제,편의점,음료대,유도 및 안내시설,경보 및 피난시설,장애인 화장실,장애인 전용 주차장,어려움,실외,중,공연/전시,기타,전망 관람,1시간 미만",
      "contentsid": "CNTS_000000000020476",
      "contentscd": {
      "value": "c1",
      "label": "관광지",
      "refId": "contentscd>c1"
      },
      "title": "주상절리대(중문대포해안)",
      "region1cd": {
      "value": "region2",
      "label": "서귀포시",
      "refId": "region>region2"
      },
      "region2cd": {
      "value": "24",
      "label": "중문",
      "refId": "region2>24"
      },
      "address": "제주특별자치도 서귀포시 중문동 2768-1",
      "roadaddress": "제주특별자치도 서귀포시 이어도로 36-30",
      "tag": "해변,경관/포토,친구,커플,맑음,자연경관,포토스팟,유네스코",
      "introduction": "자연의 신비가 주는 웅장함에 압도되다",
      "readcnt": 147434,
      "likecnt": 51,
      "reviewcnt": 72,
      "markcnt": 1634,
      "snssharecnt": 71,
      "schedulecnt": 0,
      "visitcnt": 5,
      "evelpt": 4,
      "latitude": 33.23834,
      "longitude": 126.42586,
      "postcode": "63547",
      "phoneno": "064-738-1521",
      "sbst": "주상절리는 마치 예리한 조각칼로 섬세하게 깎아낸 듯한 4~6각형 형태의 기둥으로, 현무암질 용암류에 나타나는 수직절리를 말한다. 두꺼운 용암이 화구로부터 흘러나와 급격히 식으면서 발생하는 수축작용의 결과로 형성되었다. 마치 계단을 쌓은 듯 겹겹이 서 있는 육모꼴의 돌기둥이 병풍처럼 둘러쳐져 있어 자연의 신비로움을 만끽할 수 있다. 그 기둥에 부딪히는 파도 또한 마음을 뺏기는 볼거리인데, 심할 때는 높이 20m 이상 치솟는 ‘쇼’가 펼쳐지기도 해서 보는이의 넋을 빼앗는다. 중문·대포해안 주상절리대는 높이가 30~40m, 폭이 약 1㎞ 정도로 우리나라 최대 규모를 자랑하며, 제주도 천연기념물 제443호로 지정돼 있다.",
      "created": "20161122130916",
      "changed": "20220801020246",
      "catemappList": [
      {
          "seq": 31528,
          "contentsid": {
          "value": "CNTS_000000000020476",
          "label": "주상절리대(중문대포해안)",
          "refId": "CNTS_000000000020476"
          },
          "cate1cd": {
          "value": "cate0000000002",
          "label": "관광지",
          "refId": "contscate>cate0000000002"
          },
          "cate2cd": {
          "value": "cate0000000009",
          "label": "자연",
          "refId": "cate0000000002>cate0000000009"
          },
          "cate3cd": {
          "value": "cate0000000037",
          "label": "해변",
          "refId": "cate0000000009>cate0000000037"
          },
          "created": "20220708142707"
      }
      ],
      "festivalcontents": null,
      "repPhoto": {
      "descseo": "주상절리대(중문대포해안)",
      "photoid": {
          "photoid": 2019022585522,
          "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/202110/28/90f5c4dd-e3f7-4445-b1b4-eb9ddb307bcd.JPG",
          "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/202110/28/d8d6b8d3-af3c-40a5-b6c6-aba30415b243.JPG"
      }
      },
      "PHOTOSHARECOUNT": 104,
      "reservelink": null
  },
  {
      "alltag": "해변,경관/포토,커플,맑음,여름,편의점,아주 어려움",
      "contentsid": "CONT_000000000500046",
      "contentscd": {
      "value": "c1",
      "label": "관광지",
      "refId": "contentscd>c1"
      },
      "title": "검멀레해변",
      "region1cd": {
      "value": "region3",
      "label": "섬 속의 섬",
      "refId": "region>region3"
      },
      "region2cd": {
      "value": "31",
      "label": "우도",
      "refId": "region3>31"
      },
      "address": "제주특별자치도 제주시 우도면 우도해안길",
      "roadaddress": "제주특별자치도 제주시 우도면 우도해안길",
      "tag": "해변,경관/포토,커플,맑음,여름,자연경관,포토스팟,k-drama",
      "introduction": "검은모래가 매력적인 우도에서 빠질 수 없는 명소",
      "readcnt": 29517,
      "likecnt": 17,
      "reviewcnt": 66,
      "markcnt": 370,
      "snssharecnt": 9,
      "schedulecnt": 0,
      "visitcnt": 1,
      "evelpt": 5,
      "latitude": 33.49698480960003,
      "longitude": 126.96860272497565,
      "postcode": null,
      "phoneno": "064-728-3394",
      "sbst": "검멀레 해수욕장은 우도봉 아래에 협곡 속에 숨어있다. 폭 1백여 미터의 작은 해변이지만 모래찜질을 겸한 해수욕을 할 수 있는 장소이다. 도로에서 해변은 계단으로 연결되어 있다. 검멀레의 '검'은 '검다', '멀레'는 '모래'라는 뜻으로, 검은모래 해변을 뜻한다. 해변 끝에는 고래가 살았다는 전설이 전해지는 동굴이 있다. \n이 동굴은 소의 코구멍을 닮았다 하며, '검은코꾸망'이라 불리는데, 밀물때는 동굴의 윗부분만 보이지만, 썰물에는 동굴전체가 드러나 동굴안으로 접근 할수 있다. 동굴 내부는 관광객들이 쌓아올린 작은 돌탑등이 있으며, 안에서 작은 음악회가 열렸을 정도로 꽤 큰 규모다. 검은 코꾸망을 지나면 또하나의 동굴이 나타나는데, 내부가 온통 붉어 '붉은코꾸망'이라 불린다. 동안경굴(東岸鯨窟)이라고도 하는데 우도팔경 중 하나이다.\n바다쪽에서 우도의 비경을 보고 싶다면, 보트를 타고 검멀레 주변 한바퀴를 돌아보는 것도 좋다. ",
      "created": "20160530111636",
      "changed": "20220731230658",
      "catemappList": [
      {
          "seq": 26736,
          "contentsid": {
          "value": "CONT_000000000500046",
          "label": "검멀레해변",
          "refId": "CONT_000000000500046"
          },
          "cate1cd": {
          "value": "cate0000000002",
          "label": "관광지",
          "refId": "contscate>cate0000000002"
          },
          "cate2cd": {
          "value": "cate0000000009",
          "label": "자연",
          "refId": "cate0000000002>cate0000000009"
          },
          "cate3cd": {
          "value": "cate0000000037",
          "label": "해변",
          "refId": "cate0000000009>cate0000000037"
          },
          "created": "20211028161501"
      }
      ],
      "festivalcontents": null,
      "repPhoto": {
      "descseo": "검멀레해변",
      "photoid": {
          "photoid": 2019022558272,
          "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201907/25/a30bb3ff-c287-4de2-80d0-428e3281e8c0.jpg",
          "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201907/25/dffe0d39-0899-4db3-9dc7-1efb930f3005.jpg"
      }
      },
      "PHOTOSHARECOUNT": 100,
      "reservelink": null
  },
  {
      "alltag": "동굴,경관/포토,아이,흐림,여름,자연경관,포토스팟,어린이,유네스코,공용주차장,현금결제,카드결제,화장실,무료 WIFI,편의점,음료대,아주 어려움,UNESCO 세계지질공원",
      "contentsid": "CONT_000000000500182",
      "contentscd": {
      "value": "c1",
      "label": "관광지",
      "refId": "contentscd>c1"
      },
      "title": "만장굴",
      "region1cd": {
      "value": "region1",
      "label": "제주시",
      "refId": "region>region1"
      },
      "region2cd": {
      "value": "16",
      "label": "구좌",
      "refId": "region1>16"
      },
      "address": "제주특별자치도 제주시 구좌읍 월정리 산 41-5",
      "roadaddress": "제주특별자치도 제주시 구좌읍 만장굴길 182",
      "tag": "동굴,경관/포토,아이,흐림,여름,자연경관,포토스팟,어린이,유네스코",
      "introduction": "세계적인 규모의 용암동굴, 유네스코 지정 세계자연유산",
      "readcnt": 340760,
      "likecnt": 55,
      "reviewcnt": 61,
      "markcnt": 1483,
      "snssharecnt": 354,
      "schedulecnt": 0,
      "visitcnt": 1,
      "evelpt": 4,
      "latitude": 33.5548185,
      "longitude": 126.7969015,
      "postcode": null,
      "phoneno": "064-710-7903",
      "sbst": "제주말로 '아주 깊다'는 의미에서 '만쟁이거머리굴'로 불려온 만장굴은 약10만년전~30만년전에 생성, 제주도는 180만년전에 형성된 것으로 추정되지만, 1958년에야 당시 김녕초등학교 교사였던 부종휴씨에 의해 발견되어 세상에 알려지게 되었다. 만장굴은 총 길이가 약 7.4km에 이르며, 부분적으로 다층구조를 지니는 용암동굴이다. 인근에 있는, 김녕사굴, 밭굴, 개우젯굴과 애초에 모두 연결되어 있었으나 천장이 붕괴되면서 분리된 것으로 여겨진다. 만장굴의 주 통로는 폭이 18m, 높이가 23m에 이르러, 세계적으로도 큰 규모의 용암동굴이다. 전 세계에는 많은 용암동굴이 분포하지만 만장굴과 같이 수십만 년 전에 형성된 동굴로서 내부의 형태와 지형이 잘 보존되어 있는 용암동굴은 드물어서 학술적, 보전적 가치가 매우 크다.\r\n\r\n만장굴은 동굴 중간 부분의 천장이 함몰되어 3개의 입구가 형성되어 있는데, 현재 일반인이 출입할 수 있는 입구는 제2입구이며, 1km만 탐방이 가능하다. 만장굴 내에는 용암종유, 용암석순, 용암유석, 용암유선, 용암선반, 용암표석 등의 다양한 용암동굴생성물이 발달하며, 특히 개방구간 끝에서 볼 수 있는 약 7.6m 높이의 용암석주는 세계에서 가장 큰 규모로 알려져 있다.\r\n\r\n만장굴에는 우리나라 박쥐의 대표종인 제주관박쥐와 긴가락박쥐가 수천마리씩 거주하고 있다. 박쥐는 모리, 파리 등의 해충을 1시간동안 100마리 이상 잡아먹는 훌륭한 구충제인데 도시화로 인해 개체수가 많이 줄고, 현재는 세계적으로도 멸종위기에 놓여있어 국내 박쥐최대서식지인 만장굴의 생태학적 가치는 날로 높아질 전망이다. 다만 만장굴의 입장 가능 구간은 제2입구에서 약 1km 뿐이어서, 일반인들이 굴 깊숙한 곳에 사는 박쥐를 만나기는 어렵다. ",
      "created": "20160530111636",
      "changed": "20220801015724",
      "catemappList": [
      {
          "seq": 30613,
          "contentsid": {
          "value": "CONT_000000000500182",
          "label": "만장굴",
          "refId": "CONT_000000000500182"
          },
          "cate1cd": {
          "value": "cate0000000002",
          "label": "관광지",
          "refId": "contscate>cate0000000002"
          },
          "cate2cd": {
          "value": "cate0000000009",
          "label": "자연",
          "refId": "cate0000000002>cate0000000009"
          },
          "cate3cd": {
          "value": "cate0000000045",
          "label": "동굴",
          "refId": "cate0000000009>cate0000000045"
          },
          "created": "20220408163952"
      }
      ],
      "festivalcontents": null,
      "repPhoto": {
      "descseo": "만장굴",
      "photoid": {
          "photoid": 2019022585545,
          "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/202110/28/fd081f64-29a7-4a48-a4fa-cdc69e3552a2.JPG",
          "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/202110/28/76256df3-14d8-4aed-9977-393a41655854.JPG"
      }
      },
      "PHOTOSHARECOUNT": 80,
      "reservelink": null
  },
  {
      "alltag": "해변,걷기/등산,친구,맑음,유채꽃",
      "contentsid": "CNTS_000000000020159",
      "contentscd": {
      "value": "c1",
      "label": "관광지",
      "refId": "contentscd>c1"
      },
      "title": "애월한담해안산책로",
      "region1cd": {
      "value": "region1",
      "label": "제주시",
      "refId": "region>region1"
      },
      "region2cd": {
      "value": "12",
      "label": "애월",
      "refId": "region1>12"
      },
      "address": "제주특별자치도 제주시 애월읍 곽지리 1359",
      "roadaddress": "제주특별자치도 제주시 애월읍 곽지리 1359",
      "tag": "해변,걷기/등산,친구,맑음,유채꽃,자연경관,봄꽃",
      "introduction": "해안선을 따라 걷는 구불구불 해안길.",
      "readcnt": 119971,
      "likecnt": 45,
      "reviewcnt": 60,
      "markcnt": 1172,
      "snssharecnt": 219,
      "schedulecnt": 0,
      "visitcnt": 1,
      "evelpt": 5,
      "latitude": 33.45906,
      "longitude": 126.3106,
      "postcode": null,
      "phoneno": null,
      "sbst": "'곽금올레길'이라고도 부르는 한담해안산책로는 애월항에서 곽지과물해변까지 해안을 따라서 조성된 산책로이다.\n주변 경관과 조화를 이루고 있어 아름답다. 총 길이는 1.2km이며, 바로 옆에 파도가 참방거리는 해안길을 따라 걸을 수 있다.",
      "created": "20161110161143",
      "changed": "20220801010314",
      "catemappList": [
      {
          "seq": 26753,
          "contentsid": {
          "value": "CNTS_000000000020159",
          "label": "애월한담해안산책로",
          "refId": "CNTS_000000000020159"
          },
          "cate1cd": {
          "value": "cate0000000002",
          "label": "관광지",
          "refId": "contscate>cate0000000002"
          },
          "cate2cd": {
          "value": "cate0000000009",
          "label": "자연",
          "refId": "cate0000000002>cate0000000009"
          },
          "cate3cd": {
          "value": "cate0000000037",
          "label": "해변",
          "refId": "cate0000000009>cate0000000037"
          },
          "created": "20211028175120"
      }
      ],
      "festivalcontents": null,
      "repPhoto": {
      "descseo": "Aewol Handam Coastal Trail",
      "photoid": {
          "photoid": 7691,
          "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/0de42691-8c5a-43e8-9f0e-ca0115322bca.jpg",
          "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201804/30/f1bd503b-f934-47b5-8e0c-63f282240843.jpg"
      }
      },
      "PHOTOSHARECOUNT": 99,
      "reservelink": null
  },
  {
      "alltag": "해변,경관/포토,액티비티,친구,커플,맑음,여름",
      "contentsid": "CNTS_000000000018383",
      "contentscd": {
      "value": "c1",
      "label": "관광지",
      "refId": "contentscd>c1"
      },
      "title": "황우지해안",
      "region1cd": {
      "value": "region2",
      "label": "서귀포시",
      "refId": "region>region2"
      },
      "region2cd": {
      "value": "21",
      "label": "서귀포시내",
      "refId": "region2>21"
      },
      "address": "제주특별자치도 서귀포시 서홍동 766-1",
      "roadaddress": "제주특별자치도 서귀포시 서홍동 766-1",
      "tag": "해변,경관/포토,액티비티,친구,커플,맑음,여름,자연경관,체험,레저/체험,포토스팟,수상레저,어트랙션",
      "introduction": "선녀가 물놀이 했다는 전설이 있는 자연형성 풀장",
      "readcnt": 112959,
      "likecnt": 21,
      "reviewcnt": 60,
      "markcnt": 962,
      "snssharecnt": 158,
      "schedulecnt": 0,
      "visitcnt": 1,
      "evelpt": 5,
      "latitude": 33.241566,
      "longitude": 126.54981,
      "postcode": null,
      "phoneno": "064-760-4601",
      "sbst": "황우지해안은 제주도의 대표적인 관광명소인 외돌개에서 도보로 5분이면 닿는 거리에 있다. \n평소에도 수많은 관광객이 들락거리지만 검은 현무암이 요새처럼 둘러쳐진 황우지해안은 \n마음먹고 찾지 않는 이상 쉽게 눈에 띄지 않는다. \n올레 7코스 시작점 표식 사이로 난 길을 따라 내려가면 황우지해안 전적비가 서 있는 바닷가 절벽에 닿는다.\n\n\n황우지해안은 완만한 만 형태를 이루고 있고, 중간에 돌기둥처럼 선 바위섬이 파도를 막아주고 있는 형태다. \n암석 아래쪽으로 바닷물이 순환되면서 맑은 물이 유지되어 여러모로 물놀이를 즐기기 좋은 환경을 갖추고 있다. \n이런 환경 덕분에 황우지해안이 스노쿨링 하기 좋은 장소로 알려지면서 \n해마다 많은 사람들이 물놀이를 하기 위해 찾고 있다. \n외돌개를 중심으로 한 산책로 조성도 잘 되어 있어서 피서를 보내기 좋은 여건을 갖추고 있다.  ",
      "created": "20161006165119",
      "changed": "20220801015121",
      "catemappList": [
      {
          "seq": 26762,
          "contentsid": {
          "value": "CNTS_000000000018383",
          "label": "황우지해안",
          "refId": "CNTS_000000000018383"
          },
          "cate1cd": {
          "value": "cate0000000002",
          "label": "관광지",
          "refId": "contscate>cate0000000002"
          },
          "cate2cd": {
          "value": "cate0000000009",
          "label": "자연",
          "refId": "cate0000000002>cate0000000009"
          },
          "cate3cd": {
          "value": "cate0000000037",
          "label": "해변",
          "refId": "cate0000000009>cate0000000037"
          },
          "created": "20211029095657"
      }
      ],
      "festivalcontents": null,
      "repPhoto": {
      "descseo": "Hwanguji Coast",
      "photoid": {
          "photoid": 2472,
          "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/0071520b-9cd5-4f07-8a83-4612ac077975.jpg",
          "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201804/30/26238495-a107-4236-9ec9-279cda7120a4.jpg"
      }
      },
      "PHOTOSHARECOUNT": 92,
      "reservelink": null
  },
  {
      "alltag": "경관/포토,테마공원,커플,맑음,봄,공용주차장,현금결제,카드결제,화장실,음료대,유도 및 안내시설,경보 및 피난시설,실내+실외,하,포토스팟,산책,1~2시간",
      "contentsid": "CNTS_000000000018415",
      "contentscd": {
      "value": "c1",
      "label": "관광지",
      "refId": "contentscd>c1"
      },
      "title": "노리매공원",
      "region1cd": {
      "value": "region2",
      "label": "서귀포시",
      "refId": "region>region2"
      },
      "region2cd": {
      "value": "22",
      "label": "대정",
      "refId": "region2>22"
      },
      "address": "제주특별자치도 서귀포시 대정읍 구억리 654-1",
      "roadaddress": "제주특별자치도 서귀포시 대정읍 중산간서로 2260-15",
      "tag": "경관/포토,테마공원,커플,맑음,봄,자연경관,포토스팟,매화",
      "introduction": "자연속에서 현대적 감성을 즐길수 있는, 매화 테마공원",
      "readcnt": 33849,
      "likecnt": 1,
      "reviewcnt": 58,
      "markcnt": 246,
      "snssharecnt": 14,
      "schedulecnt": 0,
      "visitcnt": 0,
      "evelpt": 5,
      "latitude": 33.28257,
      "longitude": 126.287544,
      "postcode": "63519",
      "phoneno": "064-792-8211",
      "sbst": "노리매는 순 우리말 '놀이'외 매화의 '매'가 합쳐져 만들어진 이름으로 자연속에서 현대적 감성을 즐길 수 있는 자연공원이다. \r\n수선화, 매화, 목련, 작약, 동백, 조찹 나무 등 다양한 꽃과나무들이 사시사철 화사한 자연을 만끽할 수 있고, \r\n투박한 제주의 돌과 인공폭포, 인공호수 등은 자연과 인공미가 어떻게 조화롭게 어우러질 수 있는지 보여준다.\r\n\r\n인공연못 한가운데는 해담 홍완표 대목장이 지은 정자가 우뚝 솟아있는데, 특히 저녁시간에는 석양과 어우러져 신비스러운 분위기를 연출한다. \r\n이밖에도 자연의 이미지를 현대적으로 해석한 360도 서클비전과 3D영상전시장이 있어 자연과 현대가 공존하는 독특함을 즐길 수 있다. \r\n산책로 곳곳에 생기발랄한 포토존이 잘 조성되어 있어 사진찍기 좋아하는 젊은층과 가족단위 여행객이 즐겨 찾는다.",
      "created": "20161007110945",
      "changed": "20220731211415",
      "catemappList": [
      {
          "seq": 29483,
          "contentsid": {
          "value": "CNTS_000000000018415",
          "label": "노리매공원",
          "refId": "CNTS_000000000018415"
          },
          "cate1cd": {
          "value": "cate0000000002",
          "label": "관광지",
          "refId": "contscate>cate0000000002"
          },
          "cate2cd": {
          "value": "cate0000001251",
          "label": "테마관광지",
          "refId": "cate0000000002>cate0000001251"
          },
          "cate3cd": {
          "value": "cate0000000058",
          "label": "테마공원",
          "refId": "cate0000001251>cate0000000058"
          },
          "created": "20220112164359"
      }
      ],
      "festivalcontents": null,
      "repPhoto": {
      "descseo": "노리매공원",
      "photoid": {
          "photoid": 2019022585624,
          "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/202110/29/b234c86a-0ea4-4890-ad47-3397cedaa3a7.jpg",
          "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/202110/29/8e31175c-5613-4784-9a9e-3ccd9502add8.jpg"
      }
      },
      "PHOTOSHARECOUNT": 172,
      "reservelink": null
  },
  {
      "alltag": "일출,오름,걷기/등산,친구,커플,겨울,자연경관,도보여행,도보",
      "contentsid": "CONT_000000000500232",
      "contentscd": {
      "value": "c1",
      "label": "관광지",
      "refId": "contentscd>c1"
      },
      "title": "백약이오름",
      "region1cd": {
      "value": "region2",
      "label": "서귀포시",
      "refId": "region>region2"
      },
      "region2cd": {
      "value": "26",
      "label": "표선",
      "refId": "region2>26"
      },
      "address": "제주특별자치도 서귀포시 표선면 성읍리 산 1",
      "roadaddress": "제주특별자치도 서귀포시 표선면 성읍리 산 1",
      "tag": "일출,오름,걷기/등산,친구,커플,겨울,자연경관,도보여행,도보",
      "introduction": "하늘로 향하는 길, 백약이오름",
      "readcnt": 66917,
      "likecnt": 5,
      "reviewcnt": 57,
      "markcnt": 261,
      "snssharecnt": 35,
      "schedulecnt": 0,
      "visitcnt": 1,
      "evelpt": 5,
      "latitude": 33.437283,
      "longitude": 126.79018,
      "postcode": null,
      "phoneno": "064-760-4451",
      "sbst": "백약이오름은 표선면 성읍2리 입구에서 북동쪽 약 3.5km 지점에 위치하고 있다. 구좌읍 송당리와의 접경에 위치한 오름으로, 예로부터 약초가 많이 자생하고 있다고하여 백약이오름(百藥岳)이라 불리운다. 둥굴넙적한 분화구(굼부리)형태를 띠고 있으며, 안에는 층층이꽃·향유·쑥·방아풀·꿀풀·쇠무릎 등 약초가 자생하고 있다.\r\n백약이오름을 답사하려면 제주시에서 동부산업도로를 40분 정도 달려 성읍2리 성읍목장 입구에 이르게 된다. 목장안으로 들어 서면 좌측에 보초병처럼 개오름이 서 있고, 목장관리사, 사료 저장 사이로우 등을 지나면 사거리가 나타나는데, 좌측으로 곧게 뻗은 시멘트포장길을 따라 조금 들어가면 길이 끊기면서 목부들의 쉼터인 독립가옥에 이르게 된다. 그집 너머의 오름이 백약이오름이다. 조금 안쪽에 위치한 방목 소들의 음수대 옆으로 30분 정도 오르면 산정부에 도달할 수 있으며, 원형경기장을 연상케 하는 움푹패인 굼부리가 눈앞에 나타난다.\r\n정상에서는 트랙모양의 산정부를 따라 주변의 다양한 오름들을 조망할 수 있는데 동쪽에 좌보미와 그앞에 암설류의 언덕들, 동북쪽으로 동거미오름 그 옆으로 이어진 문석이오름, 그 뒤편에서 위용을 자랑하는 높은오름, 북쪽으로 넓게 패인 굼부리인 아부오름, 서쪽에 민오름, 비치미, 남서쪽에 개오름, 남쪽에 멀리보이는 영주산 등을 감상할 수 있다.",
      "created": "20160530111636",
      "changed": "20220801020154",
      "catemappList": [
      {
          "seq": 30506,
          "contentsid": {
          "value": "CONT_000000000500232",
          "label": "백약이오름",
          "refId": "CONT_000000000500232"
          },
          "cate1cd": {
          "value": "cate0000000002",
          "label": "관광지",
          "refId": "contscate>cate0000000002"
          },
          "cate2cd": {
          "value": "cate0000000009",
          "label": "자연",
          "refId": "cate0000000002>cate0000000009"
          },
          "cate3cd": {
          "value": "cate0000000035",
          "label": "오름",
          "refId": "cate0000000009>cate0000000035"
          },
          "created": "20220323103650"
      }
      ],
      "festivalcontents": null,
      "repPhoto": {
      "descseo": "백약이오름",
      "photoid": {
          "photoid": 2019022585640,
          "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/202110/29/de4fff5a-1277-4dba-abdd-285de85762a3.jpg",
          "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/202110/29/04c34a3a-2b00-404f-add0-fe137b583a2d.jpg"
      }
      },
      "PHOTOSHARECOUNT": 109,
      "reservelink": null
  },
  {
      "alltag": "경관/포토,휴식/힐링,친구,커플,맑음,봄,여름,가을,자연경관,포토스팟,수국,공용주차장,무료 WIFI,현금결제,카드결제",
      "contentsid": "CNTS_000000000020050",
      "contentscd": {
      "value": "c1",
      "label": "관광지",
      "refId": "contentscd>c1"
      },
      "title": "보롬왓",
      "region1cd": {
      "value": "region2",
      "label": "서귀포시",
      "refId": "region>region2"
      },
      "region2cd": {
      "value": "26",
      "label": "표선",
      "refId": "region2>26"
      },
      "address": "제주특별자치도 서귀포시 표선면 성읍리 3229-4",
      "roadaddress": "제주특별자치도 서귀포시 표선면 번영로 2350-104",
      "tag": "경관/포토,휴식/힐링,친구,커플,맑음,봄,여름,가을,자연경관,포토스팟,수국",
      "introduction": "아름다운 꽃을 배경으로 사진 찍을  수 있는 곳이다.",
      "readcnt": 81144,
      "likecnt": 23,
      "reviewcnt": 57,
      "markcnt": 816,
      "snssharecnt": 98,
      "schedulecnt": 0,
      "visitcnt": 7,
      "evelpt": 5,
      "latitude": 33.41367,
      "longitude": 126.75351,
      "postcode": "63624",
      "phoneno": "064-742-8181",
      "sbst": null,
      "created": "20161104111220",
      "changed": "20220801020013",
      "catemappList": [
      {
          "seq": 31533,
          "contentsid": {
          "value": "CNTS_000000000020050",
          "label": "보롬왓",
          "refId": "CNTS_000000000020050"
          },
          "cate1cd": {
          "value": "cate0000000002",
          "label": "관광지",
          "refId": "contscate>cate0000000002"
          },
          "cate2cd": {
          "value": "cate0000000009",
          "label": "자연",
          "refId": "cate0000000002>cate0000000009"
          },
          "cate3cd": {
          "value": "cate0000001321",
          "label": "그외",
          "refId": "cate0000000009>cate0000001321"
          },
          "created": "20220711133557"
      }
      ],
      "festivalcontents": null,
      "repPhoto": {
      "descseo": "보롬왓",
      "photoid": {
          "photoid": 2019022585677,
          "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/202110/29/e478e6c4-4a5f-40ec-9ded-36da33da5d9b.JPG",
          "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/202110/29/f3b7c9d2-6a3b-407b-9025-18ef2fed1fee.JPG"
      }
      },
      "PHOTOSHARECOUNT": 126,
      "reservelink": null
  },
  {
      "alltag": "문화유적지,부모,커플,혼자,친구,아이,사계절,4.3,공용주차장,화장실,유도 및 안내시설,아주 어려움",
      "contentsid": "CONT_000000000500057",
      "contentscd": {
      "value": "c1",
      "label": "관광지",
      "refId": "contentscd>c1"
      },
      "title": "관덕정",
      "region1cd": {
      "value": "region1",
      "label": "제주시",
      "refId": "region>region1"
      },
      "region2cd": {
      "value": "11",
      "label": "제주시내",
      "refId": "region1>11"
      },
      "address": "제주특별자치도 제주시 삼도2동 983-1",
      "roadaddress": "제주특별자치도 제주시 관덕로 19",
      "tag": "문화유적지,부모,커플,혼자,친구,아이,사계절,4.3,실내관광지,제주4.3,역사유적,어린이,어트랙션",
      "introduction": "국가지정 보물 제 322호로 제주에 현존하는 건물 중 가장 오래된 건물\r\n· 제주시 삼도2동\r\n· 보물 제322호\r\n· 올레17코스\r\n· 4·3 유적지",
      "readcnt": 38757,
      "likecnt": 12,
      "reviewcnt": 55,
      "markcnt": 100,
      "snssharecnt": 24,
      "schedulecnt": 0,
      "visitcnt": 0,
      "evelpt": 5,
      "latitude": 33.513355,
      "longitude": 126.52145,
      "postcode": "63166",
      "phoneno": "064-710-6711",
      "sbst": "​제주 시내 한가운데 있는 관덕정은 많은 사람들의 만남의 장소가 되고 또는 길을 가르쳐 주는 이정표 역할을 하는 등 제주 사람들에게는 가장 익숙하고 친근한 국가지정 보물 제 322호다. 조선시대 세종때인 1448년 제주 목사 신숙청은 사졸들을 훈련시키고 상무 정신을 함양할 목적으로 이 건물을 세웠다. 제주에 현존하는 건물 중 가장 오래된 건물이다.\n​\n관덕정이란 이름은 '사이관덕'이란 문구에서 나온 것으로 활을 쏘는 것은 평화시에는 심신을 연마하고 유사시에는 나라를 지키는 까닭에, 이를 보는 것이 덕행이라는 의미로 지어진 것이다. 대들보에는 십장생도, 적벽대첩도, 대수렵도 등의 격조높은 벽화가 그려져 있고, 편액은 안평대군의 친필로 전해오고 있다.\n​​​\n한편, 관덕정에는 다음과 같은 전설이 전해내려온다. 관덕정을 지으려고 할 때 목사는 전국에서 유명한 목수들을 불러들였다. 그러나, 정자(관덕정)는 다 지으면 쓰러지고, 다시 지으면 쓰러지곤 하였다. 일류 목수들이지만 그 이유를 알 수가 없었다. 어느 날 어떤 중이 이곳을 지나다가 또 쓰러지겠다고 중얼거리자 목수들이 화가 나서 중을 내쫒았다. 정자가 다시 완공이 되자마자 다시 쓰러지고 말았다. 그제야 전번 중의 이야기가 생각나 수소문 끝에 중을 찾아가 도움을 간청하였다. 중은 상량식을 닭이나 돼지가 아닌 사람으로 인상량식을 해야 한다고 하자 목수들은 난색을 표하였다. 이에 중은 상량식때 상량이라고 큰소리를 외치면 지나가던 솥장수가 죽을 것이라고 말하니\n이치에 닿지 않는 말이지만 중의 말대로 다시 공사를 하고 상량식 준비를 진행하였다. 이 때 솥장수가 큰 솥을 머리에 이고 정자쪽으로 오고 있어 관덕정 앞 마당까지 이르자 모여있던 군중들은 상량하고 큰소리로 외쳤다. 이에 솥장수는 깜짝놀라 머리를 들어 쳐다보려고 했으나 솥이 너무 무거워 넘어지면서 솥의 언저리에 목이 깔려 죽고 말았다. 중의 말대로 목수들은 솥장수를 희생으로 상량식을 치르게 되어 관덕정은 다시 쓰러지지 않고 완공이 되었다고 한다.\n\n제주도 역사의 앞마당, 관덕정 광장\n\n○ 관덕정 광장은 제주 역사의 산 증인이다. \n조선시대인 1448년 세워진 이래 제주 역사의 굴곡을 말없이 지켜보며 침묵으로 증언해주는 곳이 관덕정이요, 이 광장이다.\n\n관덕정은 제주목 관아의 부속 건물로 세종 30년(1448년) 신숙청(辛淑晴) 목사에 의해 창건되었다.\n관덕(觀德)이란 ‘사자소이관성덕야(射者所以觀盛德也)’ 즉, ‘활을 쏘는 것은 높고 훌륭한 덕을 보는 것이다’라는 《예기》의 글귀에서 유래했다.\n이름 그대로 이곳에선 군사들의 활쏘기 장소로 또는 과거시험, 각종 진상을 위한 봉진행사 등이 이루어졌으며,\n매년 입춘에는 춘경이 치러져 문화축제의 장이 되기도 했다.\n\n○ 지금은 도시발전으로 제주시가 크게 확장돼 각종 행정, 사법기관들이 다른 곳으로 옮겨졌지만,\n관덕정과 그 주변은 조선시대 때부터 일제강점기를 거쳐 현대에 이르기까지 주요 행정관청이 모여 있어 제주의 정치, 행정, 문화의 중심지 역할을 해왔다.\n제주에서 큰 행사와 각종 기념식, 집회와 역사적인 사건 모두 이곳, 관덕정 광장에서 일어났다.\n\n○ 제주에서 최초로 5일장이 열린 곳도 이곳이고, 조선말의 빈번했던 민란의 최종 종착지도 이곳이어서\n이재수의 난 당시에는 300여인의 교인척살이 이루어진 피의 현장이기도 하다.\n특히 4.3발발의 도화선이라는 1947년 3.1집회 역시 북국민학교에서 시작되어 이곳에서 사건화된다.\n4.3의 와중에서는 무장대사령관 이덕구의 시신이 전시되는 등 격동의 공간이었다.\n4·3 이후 제주지역의 시민과 학생들이 끊임없이 전개한 민주화운동과 4·3진상규명 운동도 관덕정 광장에서 시작됐고,\n단절되었던 춘경의 보구언도 80년만에 이곳에서 복원되어 탐라입춘굿으로 매년 치러지고 있다.\n무슨 큰일이 일어나면 제주민들은 약속이나 한 듯이 자연스럽게 관덕정으로 모여들었다.\n\n제주 역사의 중심지, 제주의 심장 같은 공간.\n하지만 번영의 역사보다는 오히려 세찬 바닷바람에 상처 입은 섬 사람들의 삶의 역사를 더 많이 보아온 곳.\n바로 이 곳, 관덕정 광장이다.",
      "created": "20160530111636",
      "changed": "20220801020111",
      "catemappList": [
      {
          "seq": 26773,
          "contentsid": {
          "value": "CONT_000000000500057",
          "label": "관덕정",
          "refId": "CONT_000000000500057"
          },
          "cate1cd": {
          "value": "cate0000000002",
          "label": "관광지",
          "refId": "contscate>cate0000000002"
          },
          "cate2cd": {
          "value": "cate0000000010",
          "label": "문화관광",
          "refId": "cate0000000002>cate0000000010"
          },
          "cate3cd": {
          "value": "cate0000001252",
          "label": "문화재",
          "refId": "cate0000000010>cate0000001252"
          },
          "created": "20211029141701"
      },
      {
          "seq": 26774,
          "contentsid": {
          "value": "CONT_000000000500057",
          "label": "관덕정",
          "refId": "CONT_000000000500057"
          },
          "cate1cd": {
          "value": "cate0000000002",
          "label": "관광지",
          "refId": "contscate>cate0000000002"
          },
          "cate2cd": {
          "value": "cate0000001374",
          "label": "제주 4·3",
          "refId": "cate0000000002>cate0000001374"
          },
          "cate3cd": {
          "value": "cate0000002374",
          "label": "제주 4·3",
          "refId": "cate0000001374>cate0000002374"
          },
          "created": "20211029141701"
      }
      ],
      "festivalcontents": null,
      "repPhoto": {
      "descseo": "관덕정",
      "photoid": {
          "photoid": 2019022559712,
          "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201908/16/3752d151-dad4-4199-8227-0e5d96e56d8e.jpg",
          "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201908/16/d6bf6deb-efc5-493d-a2ba-ed3e13b4dbc6.jpg"
      }
      },
      "PHOTOSHARECOUNT": 53,
      "reservelink": null
  },
  {
      "alltag": "부모,아이,테마공원,미술/박물관,경관/포토,전시와 행사,우수관광사업체,공용주차장,현금결제,카드결제,화장실,무료 WIFI,흡연구역,편의점,음료대,유도 및 안내시설,경보 및 피난시설,임산부 휴게시설,단차없음,장애인 화장실,장애인 전용 주차장,수동 휠체어 대여 가능,전동 휠체어 대여 가능,쉬움,우수관광사업체,실내+실외,하,공연/전시,2~3시간",
      "contentsid": "CNTS_000000000001158",
      "contentscd": {
      "value": "c1",
      "label": "관광지",
      "refId": "contentscd>c1"
      },
      "title": "메이즈랜드",
      "region1cd": {
      "value": "region1",
      "label": "제주시",
      "refId": "region>region1"
      },
      "region2cd": {
      "value": "16",
      "label": "구좌",
      "refId": "region1>16"
      },
      "address": "제주특별자치도 제주시 구좌읍 평대리 3322",
      "roadaddress": "제주특별자치도 제주시 구좌읍 비자림로 2134-47",
      "tag": "부모,아이,테마공원,미술/박물관,경관/포토,전시와 행사,우수관광사업체,실내관광지,포토스팟,어린이,어트랙션",
      "introduction": "돌, 바람, 여자, 제주의 삼다를 녹인 미로공원",
      "readcnt": 84714,
      "likecnt": 18,
      "reviewcnt": 54,
      "markcnt": 797,
      "snssharecnt": 39,
      "schedulecnt": 0,
      "visitcnt": 1,
      "evelpt": 5,
      "latitude": 33.48875,
      "longitude": 126.80093,
      "postcode": "63351",
      "phoneno": "064-784-3838",
      "sbst": "메이즈랜드는 바람, 물, 여자라는 제주도의 삼다(三多)를 테마로 조성한 세계 최장의 석축 미로공원이다. 바람미로에는 미측백나무 2,709그루 심어져 있어 피톤치드가 풍부하며, 여자미로에는 겨울이면 붉은 꽃이 피는 애기동백나무와 랠란디가 2,922그루 심어져있다. 마지막 난이도의 돌 미로는 짐짓 마법사가 튀어나와도 어색하지 않을듯한 신비로운 분위기를 간직하고 있다. 조각동산에선 제주 신화와 관련된 조각상을 관람할 수 있다.\n\n이외에도 미노타우로스 3D 영상관, 전시실, 퍼즐 갤러리와 체험관, 야유회나 체험학습장으로 이용 가능한 넓은 잔디광장이 있다. ​​전망대에 오르면 다랑쉬와 돝오름이 둘러싼 메이즈랜드의 풍경을 바라볼 수 있다. 또 메이즈랜드에는 이곳이 직접 운영하는 뷔페식 웰빙 한식당이 있어 미로 체험 뒤 식사를 해결하는데도 편의를 제공한다. \n계절과 날짜에 따라 매표시간과 관람시간이 변동되기 때문에 방문전 홈페이지를 통해서 확인하거나 직접 문의하는 것이 좋다.\n",
      "created": "20160818095917",
      "changed": "20220801020241",
      "catemappList": [
      {
          "seq": 26776,
          "contentsid": {
          "value": "CNTS_000000000001158",
          "label": "메이즈랜드",
          "refId": "CNTS_000000000001158"
          },
          "cate1cd": {
          "value": "cate0000000002",
          "label": "관광지",
          "refId": "contscate>cate0000000002"
          },
          "cate2cd": {
          "value": "cate0000001251",
          "label": "테마관광지",
          "refId": "cate0000000002>cate0000001251"
          },
          "cate3cd": {
          "value": "cate0000000058",
          "label": "테마공원",
          "refId": "cate0000001251>cate0000000058"
          },
          "created": "20211029145449"
      }
      ],
      "festivalcontents": null,
      "repPhoto": {
      "descseo": "Mazeland",
      "photoid": {
          "photoid": 566,
          "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/7c3de5cb-b470-4518-be3f-a9904593b20f.jpg",
          "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201804/30/24e937c2-2f4d-45ef-90c7-4e16c3153076.jpg"
      }
      },
      "PHOTOSHARECOUNT": 105,
      "reservelink": null
  },
  {
      "alltag": "밤,경관/포토,커플,맑음,포토스팟,공용주차장,화장실,편의점,음료대,유도 및 안내시설,단독접근가능,단차없음,장애인 화장실,장애인 전용 주차장,어려움",
      "contentsid": "CONT_000000000500312",
      "contentscd": {
      "value": "c1",
      "label": "관광지",
      "refId": "contentscd>c1"
      },
      "title": "새연교",
      "region1cd": {
      "value": "region2",
      "label": "서귀포시",
      "refId": "region>region2"
      },
      "region2cd": {
      "value": "21",
      "label": "서귀포시내",
      "refId": "region2>21"
      },
      "address": "제주특별자치도 서귀포시 서홍동 707-4",
      "roadaddress": "제주특별자치도 서귀포시 서홍동 707-4",
      "tag": "밤,경관/포토,커플,맑음,포토스팟",
      "introduction": "새섬으로 가는 통로, '새'로운 인'연'을 만들어가는 다리",
      "readcnt": 49716,
      "likecnt": 12,
      "reviewcnt": 54,
      "markcnt": 400,
      "snssharecnt": 36,
      "schedulecnt": 0,
      "visitcnt": 0,
      "evelpt": 5,
      "latitude": 33.238186,
      "longitude": 126.55907,
      "postcode": null,
      "phoneno": "064-760-2654",
      "sbst": "‘새로운 인연을 만들어가는 다리’로 유명한 새연교는 서귀포항과 새섬을 연결하는 다리로서 서귀포와 새섬을 찾는 관광객들의 좋은 인연을 아름답게 맺어보자는 취지가 있다. 새연교는 서귀포 관광 미항의 랜드마크이며 최장 보도교로 차량은 출입이 불가하다. \r\n\r\n주변에는 보행 산책로와 새섬 산책로, 뮤직 벤치 등이 설치되어 있어 관광을 하며 산책하기 좋다. 제주 올레길 6코스에 포함된 이후로도 방문객이 증가하고 있고 각종 이벤트와 공연 행사 또한 이루어지고 있어 새연교를 방문하는 관광객들에게 즐길 거리를 제공하고 있다. 왼쪽으로 선착장, 오른쪽으로는 아름답고 펼쳐진 바다가 마주하고 있어 제주만의 시원한 바람과 파도를 느낄 수 있다. 새섬은 사람이 살지 않는 무인도로, 조성된 길을 따라 여유로운 산책을 즐길 수 있다.\r\n",
      "created": "20160530111636",
      "changed": "20220801020007",
      "catemappList": [
      {
          "seq": 30590,
          "contentsid": {
          "value": "CONT_000000000500312",
          "label": "새연교",
          "refId": "CONT_000000000500312"
          },
          "cate1cd": {
          "value": "cate0000000002",
          "label": "관광지",
          "refId": "contscate>cate0000000002"
          },
          "cate2cd": {
          "value": "cate0000000010",
          "label": "문화관광",
          "refId": "cate0000000002>cate0000000010"
          },
          "cate3cd": {
          "value": "cate0000000080",
          "label": "그외",
          "refId": "cate0000000010>cate0000000080"
          },
          "created": "20220404162714"
      }
      ],
      "festivalcontents": null,
      "repPhoto": {
      "descseo": "Saeyeongyo Bridge",
      "photoid": {
          "photoid": 18340,
          "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/9f1410ca-8feb-4857-a55c-78eaa995a11b.jpg",
          "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201804/30/5a0e11cb-20ab-43b5-8cba-8fe0bd3e530a.jpg"
      }
      },
      "PHOTOSHARECOUNT": 75,
      "reservelink": null
  },
  {
      "alltag": "해수욕장,액티비티,커플,맑음,여름,화장실,음료대,유도 및 안내시설,경보 및 피난시설,단독접근가능,단차없음,장애인 화장실,쉬움",
      "contentsid": "CNTS_000000000001196",
      "contentscd": {
      "value": "c1",
      "label": "관광지",
      "refId": "contentscd>c1"
      },
      "title": "표선해수욕장",
      "region1cd": {
      "value": "region2",
      "label": "서귀포시",
      "refId": "region>region2"
      },
      "region2cd": {
      "value": "26",
      "label": "표선",
      "refId": "region2>26"
      },
      "address": "제주특별자치도 서귀포시 표선면 표선리",
      "roadaddress": "제주특별자치도 서귀포시 표선면 표선리",
      "tag": "해수욕장,액티비티,커플,맑음,여름,자연경관,체험,레저/체험,해변,물놀이,수상레저",
      "introduction": "너른 백사장이 매력적인 서귀포 동남부 해수욕장",
      "readcnt": 24959,
      "likecnt": 1,
      "reviewcnt": 54,
      "markcnt": 145,
      "snssharecnt": 11,
      "schedulecnt": 0,
      "visitcnt": 1,
      "evelpt": 5,
      "latitude": 33.32723069299215,
      "longitude": 126.83810144720462,
      "postcode": null,
      "phoneno": "064-760-4992",
      "sbst": "총 면적 25만제곱미터, 백사장 16만 제곱미터에 이르는 표선해수욕장은 백사장이 아름다운 해수욕장으로 유명하다. 표선해수욕장의 넓은 모래콥은 썰물시엔 둥근 백사장처럼, 밀물시엔 수심이 낮은 애매랄드빛 원형 호수처럼 보여 경관이 아름답다. 뿐만 아니라 낮은 수심때문에 아이들과 물놀이를 즐기기에도 좋은 해수장이다. 인근 관광지로는 100m거리의 제주민속촌과 차로 5분 거리의 제주허브동산이 있다.",
      "created": "20160818141109",
      "changed": "20220801020343",
      "catemappList": [
      {
          "seq": 26779,
          "contentsid": {
          "value": "CNTS_000000000001196",
          "label": "표선해수욕장",
          "refId": "CNTS_000000000001196"
          },
          "cate1cd": {
          "value": "cate0000000002",
          "label": "관광지",
          "refId": "contscate>cate0000000002"
          },
          "cate2cd": {
          "value": "cate0000000009",
          "label": "자연",
          "refId": "cate0000000002>cate0000000009"
          },
          "cate3cd": {
          "value": "cate0000000037",
          "label": "해변",
          "refId": "cate0000000009>cate0000000037"
          },
          "created": "20211029153436"
      }
      ],
      "festivalcontents": null,
      "repPhoto": {
      "descseo": "표선해수욕장",
      "photoid": {
          "photoid": 2019022585792,
          "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/202110/29/f839045d-a0e5-4f28-a980-c29b57406d4a.jpg",
          "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/202110/29/75201e85-e5f0-498a-986a-043dac98d1fb.jpg"
      }
      },
      "PHOTOSHARECOUNT": 115,
      "reservelink": null
  }
]

let imageURL = placesJson.map((v,i)=>{
  return v.repPhoto.photoid.imgpath;
})
console.log(imageURL)

async function downloadImage(url, filepath) {
    const response = await Axios({
        url,
        method: 'GET',
        responseType: 'stream'
    });
    return new Promise((resolve, reject) => {
        response.data.pipe(fs.createWriteStream(filepath))
            .on('error', reject)
            .once('close', () => resolve(filepath)); 
    });
}

// for(const item of imageURL){
  // downloadImage(image,'C:\\Workspace\\Ezen\\test_data\\test.jpeg');
// }

// const url = 'https://api.cdn.visitjeju.net/photomng/imgpath/201810/17/c072ee1a-2a02-4be7-b0cd-62f4daf2f847.gif';
// const filepath = 'C:\\Workspace\\Ezen\\test_data\\test1.jpeg'
function downloadImage2(url, filepath) {
  return download.image({
     url,
     dest: filepath 
  });
}

let count = 1;
for(const item of imageURL){
  // mkdirs(`C:\\Workspace\\Ezen\\test_data\\test${count}.jpeg`);
  const filepath = `C:\\Workspace\\Ezen\\test_data\\place${count}.jpeg`;

  downloadImage2(item,filepath);
  count++;
}
