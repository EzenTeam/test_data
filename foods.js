import fs from 'fs';

const foodJson= [
    {
      "alltag": "카페,커피,음료,현금결제,카드결제,화장실,무료 WIFI,음료대,아주 어려움",
      "contentsid": "CNTS_000000000018337",
      "contentscd": {
        "value": "c4",
        "label": "음식점",
        "refId": "contentscd>c4"
      },
      "title": "봄날카페",
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
      "address": "제주특별자치도 제주시 애월읍 애월리 2540",
      "roadaddress": "제주특별자치도 제주시 애월읍 애월로1길 25",
      "tag": "카페,커피,음료,음식,콜드브루,아메리카노,바닐라라떼,카페라떼,아인슈페너,카푸치노,카페모카,카라멜마끼아또,아이스티",
      "introduction": "드라마 '맨도롱 또똣'의 주인공이 일하던 카페",
      "readcnt": 62045,
      "likecnt": 45,
      "reviewcnt": 141,
      "markcnt": 620,
      "snssharecnt": 57,
      "schedulecnt": 0,
      "visitcnt": 2,
      "evelpt": 5,
      "latitude": 33.46246,
      "longitude": 126.30959,
      "postcode": "63043",
      "phoneno": "064-799-4999",
      "sbst": "드라마의 주인공이 일하던 카페라서 유명해졌다. ​​​​​​​\n해변을 바라보며 차 한잔의 여유를 즐기기에 좋으며 제주 돌담의 정취를 느낄 수 있다.\n\n카페견 웰시코키 네마리가 반겨주는데 애견인들에게는 반가운 소식이 아닐 수 없다.\n근처 한담해변을 산책하거나 올레길을 걷다가 카페에 들러 휴식을 취할 수 있다.\n",
      "created": "20161006133518",
      "changed": "20220729105532",
      "catemappList": [
        {
          "seq": 26355,
          "contentsid": {
            "value": "CNTS_000000000018337",
            "label": "봄날카페",
            "refId": "CNTS_000000000018337"
          },
          "cate1cd": {
            "value": "cate0000000005",
            "label": "음식점",
            "refId": "contscate>cate0000000005"
          },
          "cate2cd": {
            "value": "cate0000001272",
            "label": "카페",
            "refId": "cate0000000005>cate0000001272"
          },
          "cate3cd": {
            "value": "cate0000001315",
            "label": "카페",
            "refId": "cate0000001272>cate0000001315"
          },
          "created": "20211020103200"
        }
      ],
      "festivalcontents": null,
      "repPhoto": {
        "descseo": "Spring Day Café",
        "photoid": {
          "photoid": 2202,
          "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/88f3b319-b8d8-4618-bc75-7202ba68a578.jpg",
          "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201804/30/cee2e88e-7b94-4fcd-b23b-edbeef415414.jpg"
        }
      },
      "PHOTOSHARECOUNT": 229,
      "reservelink": null
    },
    {
      "alltag": "카페,커피,아메리카노,공용주차장,현금결제,카드결제,화장실,무료 WIFI,음료대,유도 및 안내시설,경보 및 피난시설",
      "contentsid": "CNTS_000000000018357",
      "contentscd": {
        "value": "c4",
        "label": "음식점",
        "refId": "contentscd>c4"
      },
      "title": "서연의집(영화 건축학개론)",
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
      "address": "제주특별자치도 서귀포시 남원읍 위미리 2975",
      "roadaddress": "제주특별자치도 서귀포시 남원읍 위미해안로 86",
      "tag": "카페,커피,아메리카노,음식,디저트,빵,와플,에스프레소,카페모카,한류,k-movie,드라마영화촬영지",
      "introduction": "영화 '건축학개론' 속 서연의 집을 리모델링하여 오픈한 카페&갤러리",
      "readcnt": 39149,
      "likecnt": 14,
      "reviewcnt": 68,
      "markcnt": 242,
      "snssharecnt": 19,
      "schedulecnt": 0,
      "visitcnt": 2,
      "evelpt": 4,
      "latitude": 33.269413,
      "longitude": 126.655876,
      "postcode": "63611",
      "phoneno": "064-764-7894",
      "sbst": "위미 포구 근처 가정을 영화 때문에 리모델링한 세트장이었지만 안전상의 문제로 개보수한 뒤 카페&갤러리에 오픈했다.\n카페 내부 이곳저곳에 영화의 추억을 느낄 수 있는 사진이나 도구가 있다. 첫사랑의 향수를 새삼 느끼고 싶은 이들에게 좋은 추억을 주고 있다.\n\n영화 속의 남자 주인공이 누워서 낮잠을 잤던 2층에는 잔디가 있다.\n그러나 잔디에는 출입을 금지하고 있으며, 영화의 주인공처럼 누워볼 수 없다.\n건물의 바로 앞에 바다가 있어 차 한잔과 함께 아름다운 경치를 즐길 수 있다.",
      "created": "20161006150413",
      "changed": "20220729122957",
      "catemappList": [
        {
          "seq": 26550,
          "contentsid": {
            "value": "CNTS_000000000018357",
            "label": "서연의집(영화 건축학개론)",
            "refId": "CNTS_000000000018357"
          },
          "cate1cd": {
            "value": "cate0000000005",
            "label": "음식점",
            "refId": "contscate>cate0000000005"
          },
          "cate2cd": {
            "value": "cate0000001272",
            "label": "카페",
            "refId": "cate0000000005>cate0000001272"
          },
          "cate3cd": {
            "value": "cate0000001315",
            "label": "카페",
            "refId": "cate0000001272>cate0000001315"
          },
          "created": "20211025135516"
        }
      ],
      "festivalcontents": null,
      "repPhoto": {
        "descseo": "Suyeoneuijip",
        "photoid": {
          "photoid": 2304,
          "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/6ad03b5e-ddb1-466d-b18f-48ee6661c1bd.jpg",
          "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201804/30/743dbc0b-85bf-47f5-bd58-b7228e6917f3.jpg"
        }
      },
      "PHOTOSHARECOUNT": 116,
      "reservelink": null
    },
    {
      "alltag": "전복,돌솥밥,회,공용주차장,현금결제,카드결제,화장실,편의점,음료대,유도 및 안내시설,경보 및 피난시설,아주 어려움",
      "contentsid": "CNTS_000000000020047",
      "contentscd": {
        "value": "c4",
        "label": "음식점",
        "refId": "contentscd>c4"
      },
      "title": "명진전복",
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
      "address": "제주특별자치도 제주시 구좌읍 평대리 515-28",
      "roadaddress": "제주특별자치도 제주시 구좌읍 해맞이해안로 1282",
      "tag": "전복,돌솥밥,회,음식,전복해물탕,전복죽,전복뚝배기,전복버터구이,전복물회",
      "introduction": "제주도 대표 전복요리 전문점 2016 KOREAT JEJU TOP10 선정",
      "readcnt": 47916,
      "likecnt": 31,
      "reviewcnt": 66,
      "markcnt": 616,
      "snssharecnt": 32,
      "schedulecnt": 0,
      "visitcnt": 0,
      "evelpt": 4,
      "latitude": 33.53242,
      "longitude": 126.84985,
      "postcode": "63360",
      "phoneno": "064-782-9944",
      "sbst": "수요미식회 TV프로그램을 통해 소개된 적이 있는 명진전복은 전복돌솥밥, 전복구이, 전복죽 등을 판매하는 인기 맛집이다. 오도독 씹히는 전복 식감에 달짝지근함을 더한 영양만점 전복돌솥밥과 제주산 전복으로 만든 요리의 처음과 끝을 여기서 만날 수 있다.\n바로 옆 양식장에서 키운 전복으로 구이, 죽, 회, 돌솥밥 등을 차린다. 대표 메뉴는 전복돌솥밥과 전복구이. 돌솥밥은 전복 내장인 ‘게웃’을 섞은 밥에 단호박, 고구마, 당근을 올렸다. 밥 위에 전복 살과 고구마를 올려 한 숟갈 먹으면 고소하고 쌉싸래한 게웃의 향과 고구마의 단맛이 절묘하게 어우러진다.",
      "created": "20161104103014",
      "changed": "20220729123522",
      "catemappList": [
        {
          "seq": 20116,
          "contentsid": {
            "value": "CNTS_000000000020047",
            "label": "명진전복",
            "refId": "CNTS_000000000020047"
          },
          "cate1cd": {
            "value": "cate0000000005",
            "label": "음식점",
            "refId": "contscate>cate0000000005"
          },
          "cate2cd": {
            "value": "cate0000001266",
            "label": "한식",
            "refId": "cate0000000005>cate0000001266"
          },
          "cate3cd": {
            "value": "cate0000001310",
            "label": "한식",
            "refId": "cate0000001266>cate0000001310"
          },
          "created": "20191017141119"
        }
      ],
      "festivalcontents": null,
      "repPhoto": {
        "descseo": "Myeongjin Jeonbok",
        "photoid": {
          "photoid": 7155,
          "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/ef12eb59-756e-4e9b-a227-60eb3fbd8cf4.gif",
          "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201804/30/58008d96-a5b2-4bd0-a392-0e753b33267b.gif"
        }
      },
      "PHOTOSHARECOUNT": 88,
      "reservelink": null
    },
    {
      "alltag": "카페,커피,음료,디저트,공용주차장,현금결제,카드결제,화장실,무료 WIFI,음료대,유도 및 안내시설,경보 및 피난시설",
      "contentsid": "CNTS_000000000019253",
      "contentscd": {
        "value": "c4",
        "label": "음식점",
        "refId": "contentscd>c4"
      },
      "title": "몽상드애월(몽상)",
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
      "address": "제주특별자치도 제주시 애월읍 애월리 2546",
      "roadaddress": "제주특별자치도 제주시 애월읍 애월북서길 56-1",
      "tag": "카페,커피,음료,디저트,음식,아메리카노,에스프레소,카페모카,카라멜마끼아또,밀크티,에이드",
      "introduction": "제주 애월 한담에 위치하여 멋진 바다경관을 감상할 수 있는 해안로의 카페",
      "readcnt": 46419,
      "likecnt": 20,
      "reviewcnt": 66,
      "markcnt": 480,
      "snssharecnt": 32,
      "schedulecnt": 0,
      "visitcnt": 1,
      "evelpt": 4,
      "latitude": 33.463326,
      "longitude": 126.309204,
      "postcode": "63043",
      "phoneno": "064-799-0090",
      "sbst": "애월에 위치한 봄날카페와 인접하여 많은 관광객들이 찾으며, ​​​​​​​통유리로 만들어진 벽면으로 따뜻한 제주의 햇살, 푸르른 제주 바다를 전망할 수 있어 인기가 많다.\n젊은이들에게는 SNS인증샷을 찍는 곳으로 유명해서 좋은 자리를 차지하기가 쉽지 않다.\n주차공간이 협소한 편이어서 공용주차장을 이용하고 해안가로 걸어 이동하는 것이 좋다. \n5천원대부터 시작하는 커피 메뉴, 디저트류가 준비되어있다.",
      "created": "20161020151626",
      "changed": "20220729125846",
      "catemappList": [
        {
          "seq": 26356,
          "contentsid": {
            "value": "CNTS_000000000019253",
            "label": "몽상드애월(몽상)",
            "refId": "CNTS_000000000019253"
          },
          "cate1cd": {
            "value": "cate0000000005",
            "label": "음식점",
            "refId": "contscate>cate0000000005"
          },
          "cate2cd": {
            "value": "cate0000001272",
            "label": "카페",
            "refId": "cate0000000005>cate0000001272"
          },
          "cate3cd": {
            "value": "cate0000001315",
            "label": "카페",
            "refId": "cate0000001272>cate0000001315"
          },
          "created": "20211020104816"
        }
      ],
      "festivalcontents": null,
      "repPhoto": {
        "descseo": "몽상드애월",
        "photoid": {
          "photoid": 2019022563006,
          "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201909/30/fd3e8aae-900d-4cfb-8442-d59790e0da13.jpg",
          "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201909/30/b1d99bae-68fe-406a-8871-2bb99f3f968a.jpg"
        }
      },
      "PHOTOSHARECOUNT": 89,
      "reservelink": null
    },
    {
      "alltag": "전복김밥,통전복주먹밥,미역국,공용주차장,현금결제,카드결제,화장실,편의점,음료대,유도 및 안내시설,경보 및 피난시설",
      "contentsid": "CNTS_000000000020072",
      "contentscd": {
        "value": "c4",
        "label": "음식점",
        "refId": "contentscd>c4"
      },
      "title": "제주김만복(만복이네김밥집)",
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
      "address": "제주특별자치도 제주시 오라3동 2250-1",
      "roadaddress": "제주특별자치도 제주시 오라로 41",
      "tag": "전복김밥,통전복주먹밥,미역국,음식,해물라면,라면",
      "introduction": "전복내장으로 만든 김밥, 심플한 메뉴로 많은 여행객들에게 사랑받는 곳",
      "readcnt": 75438,
      "likecnt": 72,
      "reviewcnt": 60,
      "markcnt": 1142,
      "snssharecnt": 119,
      "schedulecnt": 0,
      "visitcnt": 1,
      "evelpt": 4,
      "latitude": 33.4970489,
      "longitude": 126.5087309,
      "postcode": "63167",
      "phoneno": "064-759-8582",
      "sbst": "제주공항과 가까운 전복김밥이 유명한 분식집이다. 본점은 포장만 가능하며 본점에서 멀지 않은 곳에 앉아서 즐길 수 있는 라운지점이 있다. 강정동에 오픈하여 서귀포에서도 방문할 수 있다. 전복김밥은 전복내장을 잘 섞은 밥과 계란지단이 만나 고소하고 달콤한 맛이 특징이다. 전복김밥 이외에도 전복이 통째로 올라간 통전복주먹밥과 미역국 등이 있으며 새콤달콤하게 무쳐낸 오징어 무침과 함께 먹으면 잘 어울린다. 비교적 착한 가격으로 전복김밥을 먹을 수 있다는 점과 전복내장이 주는 고소한 맛의 조화로 많은 관광객의 사랑을 받고 있다.",
      "created": "20161104173359",
      "changed": "20220729132231",
      "catemappList": [
        {
          "seq": 20713,
          "contentsid": {
            "value": "CNTS_000000000020072",
            "label": "제주김만복(만복이네김밥집)",
            "refId": "CNTS_000000000020072"
          },
          "cate1cd": {
            "value": "cate0000000005",
            "label": "음식점",
            "refId": "contscate>cate0000000005"
          },
          "cate2cd": {
            "value": "cate0000001266",
            "label": "한식",
            "refId": "cate0000000005>cate0000001266"
          },
          "cate3cd": {
            "value": "cate0000001310",
            "label": "한식",
            "refId": "cate0000001266>cate0000001310"
          },
          "created": "20191106102937"
        }
      ],
      "festivalcontents": null,
      "repPhoto": {
        "descseo": "제주김만복(만복이네김밥집)",
        "photoid": {
          "photoid": 7292,
          "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/dbd4e45a-3b53-444c-b0dd-740840f9d749.jpg",
          "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201804/30/40ae8c39-9888-4a75-84b7-23be785115a5.jpg"
        }
      },
      "PHOTOSHARECOUNT": 60,
      "reservelink": null
    },
    {
      "alltag": "스페셜망고쉐이크,망고라떼,수제망고코코넛잽,망고코코넛쿠키,카페,망고,공용주차장,현금결제,카드결제,화장실,무료 WIFI,흡연구역,음료대,유도 및 안내시설,경보 및 피난시설,단차없음,어려움,착한가격 업소",
      "contentsid": "CONT_000000000501154",
      "contentscd": {
        "value": "c4",
        "label": "음식점",
        "refId": "contentscd>c4"
      },
      "title": "리치망고",
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
      "address": "제주특별자치도 제주시 애월읍 고내리 474-1",
      "roadaddress": "제주특별자치도 제주시 애월읍 애월해안로 272",
      "tag": "스페셜망고쉐이크,망고라떼,수제망고코코넛잽,망고코코넛쿠키,카페,망고,음식,망고스무디,망고에이드,망고주스",
      "introduction": "제주 애월에 런칭하여 제주 전역으로 확장한 망고음료카페",
      "readcnt": 27857,
      "likecnt": 30,
      "reviewcnt": 59,
      "markcnt": 513,
      "snssharecnt": 21,
      "schedulecnt": 0,
      "visitcnt": 1,
      "evelpt": 4,
      "latitude": 33.4683713,
      "longitude": 126.3402434,
      "postcode": null,
      "phoneno": "070-4243-5959",
      "sbst": "제주에서 런칭한 리치망고는 프렌차이즈로 현재 우도, 모슬포 성산 등 제주전역으로 확장하였다. \n100% 리얼 망고가 들어간 스페셜망고쉐이크는 물론 망고라떼, 수제 망고 코코넛 잼, 망고 코코넛 쿠키 등 망고로 만든 다양한 제품을 만날 수 있다. \n대기자에게 번호표 대신 연예인 이름이 적힌 대기표를 주는 것이 특징이다.",
      "created": "20160530111636",
      "changed": "20220729123205",
      "catemappList": [
        {
          "seq": 26367,
          "contentsid": {
            "value": "CONT_000000000501154",
            "label": "리치망고",
            "refId": "CONT_000000000501154"
          },
          "cate1cd": {
            "value": "cate0000000005",
            "label": "음식점",
            "refId": "contscate>cate0000000005"
          },
          "cate2cd": {
            "value": "cate0000001272",
            "label": "카페",
            "refId": "cate0000000005>cate0000001272"
          },
          "cate3cd": {
            "value": "cate0000001315",
            "label": "카페",
            "refId": "cate0000001272>cate0000001315"
          },
          "created": "20211020150143"
        }
      ],
      "festivalcontents": null,
      "repPhoto": {
        "descseo": "MangoRay",
        "photoid": {
          "photoid": 24133,
          "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/97bd08a9-93ce-43c6-9758-36dff639848a.jpg",
          "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201804/30/303c1c5b-0fef-4fe5-957b-b83f7a2a4f26.jpg"
        }
      },
      "PHOTOSHARECOUNT": 68,
      "reservelink": null
    },
    {
      "alltag": "중국음식,딤섬,북경오리,불도장,음식,오리고기,오리로스,공용주차장,화장실,무료 WIFI,흡연구역,편의점,음료대,유도 및 안내시설,경보 및 피난시설,카드결제,현금결제,단독접근가능,단차없음,청각장애인 접근성,장애인 화장실,승강기,장애인 전용 주차장,수동 휠체어 대여 가능,북경오리 1마리: 138,000 (4인기준), 북경오리 반마리: 78,000 (2인기준),유아의자,유아식기,가능",
      "contentsid": "CNTS_200000000007430",
      "contentscd": {
        "value": "c4",
        "label": "음식점",
        "refId": "contentscd>c4"
      },
      "title": "르 쉬느아 (Le Chinois)",
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
      "address": "제주특별자치도 서귀포시 안덕면 서광리 산 24 메리어트관 제주신화월드 호텔앤리조트 G층",
      "roadaddress": "제주특별자치도 서귀포시 안덕면 신화역사로304번길 38 메리어트관 제주신화월드 호텔앤리조트 G층",
      "tag": "중국음식,딤섬,북경오리,불도장,음식,오리고기,오리로스",
      "introduction": "2018제주 푸드 앤 와인 페스티벌, 고메위크 선정된 제주신화월드 시그니쳐 중식 레스토랑",
      "readcnt": 16855,
      "likecnt": 47,
      "reviewcnt": 53,
      "markcnt": 62,
      "snssharecnt": 15,
      "schedulecnt": 0,
      "visitcnt": 3,
      "evelpt": 5,
      "latitude": 33.30761439413298,
      "longitude": 126.31747001586916,
      "postcode": null,
      "phoneno": "064-908-1240",
      "sbst": null,
      "created": "20180831112502",
      "changed": "20220729132744",
      "catemappList": [
        {
          "seq": 31567,
          "contentsid": {
            "value": "CNTS_200000000007430",
            "label": "르 쉬느아 (Le Chinois)",
            "refId": "CNTS_200000000007430"
          },
          "cate1cd": {
            "value": "cate0000000005",
            "label": "음식점",
            "refId": "contscate>cate0000000005"
          },
          "cate2cd": {
            "value": "cate0000001269",
            "label": "중식",
            "refId": "cate0000000005>cate0000001269"
          },
          "cate3cd": {
            "value": "cate0000001313",
            "label": "중식",
            "refId": "cate0000001269>cate0000001313"
          },
          "created": "20220714103910"
        },
        {
          "seq": 31568,
          "contentsid": {
            "value": "CNTS_200000000007430",
            "label": "르 쉬느아 (Le Chinois)",
            "refId": "CNTS_200000000007430"
          },
          "cate1cd": {
            "value": "cate0000000005",
            "label": "음식점",
            "refId": "contscate>cate0000000005"
          },
          "cate2cd": {
            "value": "cate0000001273",
            "label": "고메위크선정맛집",
            "refId": "cate0000000005>cate0000001273"
          },
          "cate3cd": {
            "value": "cate0000001316",
            "label": "고메위크선정맛집",
            "refId": "cate0000001273>cate0000001316"
          },
          "created": "20220714103910"
        }
      ],
      "festivalcontents": null,
      "repPhoto": {
        "descseo": "르쉬느아 (Le Chnois)",
        "photoid": {
          "photoid": 2019022553727,
          "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201904/01/70136ab8-ea3d-422a-ae1b-7f2157105920.jpg",
          "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201904/01/e5faf72c-be28-45c6-b534-137bc596fc76.jpg"
        }
      },
      "PHOTOSHARECOUNT": 0,
      "reservelink": null
    },
    {
      "alltag": "카페,수제케이크,에이드,제주음료,음식,아메리카노,카페라떼,감귤,주스,청귤차,에스프레소,케이크,공용주차장,현금결제,카드결제,화장실,편의점,음료대,유도 및 안내시설,경보 및 피난시설",
      "contentsid": "CNTS_000000000018312",
      "contentscd": {
        "value": "c4",
        "label": "음식점",
        "refId": "contentscd>c4"
      },
      "title": "카페공작소",
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
      "address": "제주특별자치도 제주시 구좌읍 세화리 1477-4",
      "roadaddress": "제주특별자치도 제주시 구좌읍 해맞이해안로 1446",
      "tag": "카페,수제케이크,에이드,제주음료,음식,아메리카노,카페라떼,감귤,주스,청귤차,에스프레소,케이크",
      "introduction": "아름다운 세화 바다를 바라보면서 커피 한 잔의 여유를 즐길 수 있는 카페",
      "readcnt": 15173,
      "likecnt": 10,
      "reviewcnt": 51,
      "markcnt": 196,
      "snssharecnt": 6,
      "schedulecnt": 0,
      "visitcnt": 0,
      "evelpt": 5,
      "latitude": 33.524647,
      "longitude": 126.85994,
      "postcode": "63361",
      "phoneno": "070-4548-0752",
      "sbst": "​​구좌읍 세화리에 위치한 차와 다양한 제주관련 소품을 함께 판매하는 카페다. ​​​​​북적거리는 분위기 보다는 쉬고 싶은 다른 사람들을 존중하는 분위기가 지배적이다. 메뉴판 위에도 '조용한 힐링카페를 지향한다'는 캘리그라피 문구가 쓰여 있다. 구좌읍 당근으로 만든 수제 케이크와 제주 영귤, 댕유자로 만든 에이드 음료가 있고 따뜻한 차와 커피는 언제든 맛볼 수 있다. 카페 앞 바다에 유명한 포토존이 있어서 반짝이는 에메랄드 바다와 제주 감성의 스냅사진을 찍고 싶다면 들러볼만한 곳이다. \r\n",
      "created": "20161006103728",
      "changed": "20220729102718",
      "catemappList": [
        {
          "seq": 31244,
          "contentsid": {
            "value": "CNTS_000000000018312",
            "label": "카페공작소",
            "refId": "CNTS_000000000018312"
          },
          "cate1cd": {
            "value": "cate0000000005",
            "label": "음식점",
            "refId": "contscate>cate0000000005"
          },
          "cate2cd": {
            "value": "cate0000001272",
            "label": "카페",
            "refId": "cate0000000005>cate0000001272"
          },
          "cate3cd": {
            "value": "cate0000001315",
            "label": "카페",
            "refId": "cate0000001272>cate0000001315"
          },
          "created": "20220615135419"
        }
      ],
      "festivalcontents": null,
      "repPhoto": {
        "descseo": "카페공작소",
        "photoid": {
          "photoid": 2092,
          "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/c321f139-2382-43fe-9cd4-78c109501c50.jpg",
          "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201804/30/73a8adaa-0297-4822-8916-c2cc300dff7a.jpg"
        }
      },
      "PHOTOSHARECOUNT": 109,
      "reservelink": null
    },
    {
      "alltag": "한식,흑돼지,한우,갈치,고소리술,음식,공용주차장,현금결제,카드결제,화장실,무료 WIFI,흡연구역,편의점,음료대,유도 및 안내시설,경보 및 피난시설,카드결제,현금결제,영어,단독접근가능,단차없음,청각장애인 접근성,시각장애인 접근성,장애인 화장실,승강기,수동 휠체어 대여 가능,쉬움,제주膳 한상차림 : 148,000(2인기준), 통 갈치 한상차림 : 158,000(2인기준),  膳 옥돔 구이 반상 84,000,유아의자,가능",
      "contentsid": "CNTS_200000000007431",
      "contentscd": {
        "value": "c4",
        "label": "음식점",
        "refId": "contentscd>c4"
      },
      "title": "濟州膳제주선",
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
      "address": "제주특별자치도 서귀포시 안덕면 서광리 산 24",
      "roadaddress": "제주특별자치도 서귀포시 안덕면 신화역사로304번길 38",
      "tag": "한식,흑돼지,한우,갈치,고소리술,음식",
      "introduction": "메리어트관 제주신화월드에 위치한 한식 전문점",
      "readcnt": 23578,
      "likecnt": 34,
      "reviewcnt": 45,
      "markcnt": 139,
      "snssharecnt": 18,
      "schedulecnt": 0,
      "visitcnt": 9,
      "evelpt": 5,
      "latitude": 33.30761436022692,
      "longitude": 126.31751297987057,
      "postcode": null,
      "phoneno": "064-908-1260",
      "sbst": "메리어트관 제주신화월드 G층, 제주선에서 맛보는 정갈한 제주 한식\r\n\r\n濟州膳제주선에서는 제주의 제철 식재료로 선보이는 정갈한 한식을 제공한다. \r\n\r\n제주 흑돼지와 보들결 한우는 물론, 모슬포 방어 회와 한라산 더덕 구이까지 제주 각 지역의 특산물을 사용한 산해진미는 한 상 가득 제주 자연의 맛을 선사한다.\r\n또한 명인이 직접 빚은 고소리술과 같은 제주 전통주도 함께 만나볼 수 있다.",
      "created": "20180831131138",
      "changed": "20220729132658",
      "catemappList": [
        {
          "seq": 29804,
          "contentsid": {
            "value": "CNTS_200000000007431",
            "label": "濟州膳제주선",
            "refId": "CNTS_200000000007431"
          },
          "cate1cd": {
            "value": "cate0000000005",
            "label": "음식점",
            "refId": "contscate>cate0000000005"
          },
          "cate2cd": {
            "value": "cate0000001266",
            "label": "한식",
            "refId": "cate0000000005>cate0000001266"
          },
          "cate3cd": {
            "value": "cate0000001310",
            "label": "한식",
            "refId": "cate0000001266>cate0000001310"
          },
          "created": "20220222094306"
        }
      ],
      "festivalcontents": null,
      "repPhoto": {
        "descseo": "濟州膳제주선",
        "photoid": {
          "photoid": 2019022553789,
          "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201904/02/3824e44f-69df-488f-87b1-a4ea438c8438.jpg",
          "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201904/02/26cb564f-3c84-4833-aa02-6aafd1cd59ae.jpg"
        }
      },
      "PHOTOSHARECOUNT": 0,
      "reservelink": null
    },
    {
      "alltag": "흑돼지수제버거,수제버거,땅콩아이스크림,공용주차장,현금결제,카드결제,화장실,흡연구역",
      "contentsid": "CNTS_000000000018578",
      "contentscd": {
        "value": "c4",
        "label": "음식점",
        "refId": "contentscd>c4"
      },
      "title": "하하호호(HAHAHOHO)",
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
      "address": "제주특별자치도 제주시 우도면 연평리 859",
      "roadaddress": "제주특별자치도 제주시 우도면 우도해안길 532",
      "tag": "흑돼지수제버거,수제버거,땅콩아이스크림,음식,햄버거,아메리카노,감자튀김,에이드,레몬에이드,아이스크림",
      "introduction": "우도 북쪽, 우도 본연의 분위기가 살아있는 흑돼지 수제 햄버거집",
      "readcnt": 16640,
      "likecnt": 4,
      "reviewcnt": 43,
      "markcnt": 182,
      "snssharecnt": 5,
      "schedulecnt": 0,
      "visitcnt": 0,
      "evelpt": 4,
      "latitude": 33.50332,
      "longitude": 126.95568,
      "postcode": "63365",
      "phoneno": "010-2899-1365",
      "sbst": "하하호호는 하우목동항 북측에 위치한 간이음식점이다.\n두툼한 흑돼지 패티위에 우도 땅콩이나 마늘칩이 뿌린 수제버거가 대표적인 메뉴로 성인남자가 배부를 정도인 1.5인분의 양이다.\n야채 등의 재료를 아낌없이 넣어 양이 푸짐하여 많은 여행객의 호감을 얻고 있다.\n인기메뉴인 제주딱새우버거는 매일 소량만 준비하여 못먹고 오는 경우도 있을 정도다.\n땅콩아이스크림과 마늘아이스크림도 인기가 많다.\n주문한 음식은 실내나 바다가 보이는 야외에서 즐길 수 있다. 우도의 마지막 배시간에 맞춰 마지막 주문 시간이 달라질 수 있다.",
      "created": "20161011130552",
      "changed": "20220729131721",
      "catemappList": [
        {
          "seq": 26372,
          "contentsid": {
            "value": "CNTS_000000000018578",
            "label": "하하호호(HAHAHOHO)",
            "refId": "CNTS_000000000018578"
          },
          "cate1cd": {
            "value": "cate0000000005",
            "label": "음식점",
            "refId": "contscate>cate0000000005"
          },
          "cate2cd": {
            "value": "cate0000001272",
            "label": "카페",
            "refId": "cate0000000005>cate0000001272"
          },
          "cate3cd": {
            "value": "cate0000001315",
            "label": "카페",
            "refId": "cate0000001272>cate0000001315"
          },
          "created": "20211020161503"
        }
      ],
      "festivalcontents": null,
      "repPhoto": {
        "descseo": "Hahahoho",
        "photoid": {
          "photoid": 3308,
          "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/1372a88f-0fe3-4986-8b70-458d7d4fa45f.png",
          "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201804/30/0bd06c2c-900d-4189-a4b4-61e6c568af6c.png"
        }
      },
      "PHOTOSHARECOUNT": 47,
      "reservelink": null
    },
    {
      "alltag": "고기국수,한식,향토음식,현금결제,카드결제,화장실,편의점,음료대,유도 및 안내시설,경보 및 피난시설,아주 어려움",
      "contentsid": "CNTS_000000000020099",
      "contentscd": {
        "value": "c4",
        "label": "음식점",
        "refId": "contentscd>c4"
      },
      "title": "올래국수",
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
      "address": "제주특별자치도 제주시 연동 301-19",
      "roadaddress": "제주특별자치도 제주시 귀아랑길 24 (연동)",
      "tag": "고기국수,한식,향토음식,음식",
      "introduction": "제주 향토 음식인 고기국수 전문점이다. 2016 KOREAT JEJU TOP 10 선정",
      "readcnt": 61760,
      "likecnt": 39,
      "reviewcnt": 42,
      "markcnt": 866,
      "snssharecnt": 83,
      "schedulecnt": 0,
      "visitcnt": 1,
      "evelpt": 4,
      "latitude": 33.4915,
      "longitude": 126.4973,
      "postcode": null,
      "phoneno": "064-742-7355",
      "sbst": "이 집의 메뉴는 단 하나. 두툼한 고기와 도톰한 중면이 구수한 사골국물과 어우러져 고소하고 구수한 맛을 자랑하는 고기 국수다. 맛은 한국의 설렁탕보다는 진하고 일본의 돈코츠 라멘보다는담백하다. 고소하고 깊은 맛이 입소문을 타서 tvN 수요미식회 등 각종 방송에 출연하기도 하였다. (21회 2015.06.17) 웬만한 대식가도 너끈히 배불릴 수 있을 정도로 양이 매우 많은 편이지만, 뜨끈한 감칠맛에 젓가락을 놓을 수가 없다.\n\n인기 덕분에 가게는 08:30 오픈과 동시에 북적이기 시작한다. 그리고 이렇게 항상 손님들이 많기 때문에 식사 주문과 계산은 카운터에서 일괄 진행된다. 다행히 음식은 착석하자마자 거의 동시에 나오는 편. 주차는 어려운 편이다. 근처 호텔 주차장을 사용할 수 있도록 주차권을 발급하고 있으나, 금새 차기 일쑤다.\n\n2016 KOREAT JEJU TOP 10 선정단 한줄평: 돼지 육수에 중면을 만 정통 제주 고기국수 집 중 최고. 투박한 돼지고기를 인심 좋게 듬뿍 넣은 덕분에 국물 맛이 특히 깊다. 제주어로 베지근한 맛.",
      "created": "20161107163100",
      "changed": "20220729132827",
      "catemappList": [
        {
          "seq": 26373,
          "contentsid": {
            "value": "CNTS_000000000020099",
            "label": "올래국수",
            "refId": "CNTS_000000000020099"
          },
          "cate1cd": {
            "value": "cate0000000005",
            "label": "음식점",
            "refId": "contscate>cate0000000005"
          },
          "cate2cd": {
            "value": "cate0000001265",
            "label": "향토음식",
            "refId": "cate0000000005>cate0000001265"
          },
          "cate3cd": {
            "value": "cate0000001280",
            "label": "향토음식",
            "refId": "cate0000001265>cate0000001280"
          },
          "created": "20211020162102"
        }
      ],
      "festivalcontents": null,
      "repPhoto": {
        "descseo": "Olle Guksu",
        "photoid": {
          "photoid": 7373,
          "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/0080b083-ce7c-459d-a78e-5d1b6b87d5ff.jpg",
          "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201804/30/b260b806-c465-44fe-bfcb-feaec817ad53.jpg"
        }
      },
      "PHOTOSHARECOUNT": 35,
      "reservelink": null
    },
    {
      "alltag": "카페,디저트,아이스크림,우유,공용주차장,현금결제,카드결제,화장실,무료 WIFI,음료대,유도 및 안내시설,경보 및 피난시설,아주 어려움",
      "contentsid": "CNTS_000000000018301",
      "contentscd": {
        "value": "c4",
        "label": "음식점",
        "refId": "contentscd>c4"
      },
      "title": "우유부단",
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
      "address": "제주특별자치도 제주시 한림읍 금악리 142-2",
      "roadaddress": "제주특별자치도 제주시 한림읍 금악동길 38",
      "tag": "카페,디저트,아이스크림,우유,음식,눈꽃우유빙수,밀크티",
      "introduction": "이시돌 목장에서 생산된 유기농 우유로 만든 유제품 디저트를 만날 수 있는 곳",
      "readcnt": 20388,
      "likecnt": 11,
      "reviewcnt": 38,
      "markcnt": 242,
      "snssharecnt": 5,
      "schedulecnt": 0,
      "visitcnt": 1,
      "evelpt": 5,
      "latitude": 33.34764,
      "longitude": 126.32826,
      "postcode": "63021",
      "phoneno": "064-796-2033",
      "sbst": "제주도 내 최대 유업목축지 이시돌목장에서 직접 생산된 우유로 만든 유제품 디저트 메뉴를 판매한다.\n대표메뉴는 홍차 밀크티, 컵 또는 콘으로 즐길 수 있는 아이스크림이다.\n밀크티와 유기농 우유를 에쁜 유리병에 담아 제공하여 테이크아웃, 선물로 좋아 제주의 추억을 담아갈 수 있는 기념품으로 그 역할을 톡톡히 한다.\n카페 주변의 우유팩 모양의 예쁜 벤치와 푸른 목초지, 테쉬폰과 같은 조형물을 배경으로 웨딩촬영 등\n기억에 남는 여행사진 촬영을 위해 많은 이들이 방문하고 있다.",
      "created": "20161006095736",
      "changed": "20220729094505",
      "catemappList": [
        {
          "seq": 26375,
          "contentsid": {
            "value": "CNTS_000000000018301",
            "label": "우유부단",
            "refId": "CNTS_000000000018301"
          },
          "cate1cd": {
            "value": "cate0000000005",
            "label": "음식점",
            "refId": "contscate>cate0000000005"
          },
          "cate2cd": {
            "value": "cate0000001272",
            "label": "카페",
            "refId": "cate0000000005>cate0000001272"
          },
          "cate3cd": {
            "value": "cate0000001315",
            "label": "카페",
            "refId": "cate0000001272>cate0000001315"
          },
          "created": "20211020165636"
        }
      ],
      "festivalcontents": null,
      "repPhoto": {
        "descseo": "St. Isidore Milk Cafe (Yooyoubudan Cream Shop)",
        "photoid": {
          "photoid": 1968,
          "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/19b30440-f6bb-4978-a861-6f3e85620083.jpg",
          "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201804/30/3e416add-f614-4ce4-80ce-2a302ffae6f1.jpg"
        }
      },
      "PHOTOSHARECOUNT": 51,
      "reservelink": null
    },

    {
        "alltag": "카페,커피,빙수,음식,아메리카노,에스프레소,카페라떼,젤라또,바닐라라떼,카페모카,공용주차장,현금결제,카드결제,화장실,무료 WIFI,음료대",
        "contentsid": "CNTS_000000000001501",
        "contentscd": {
        "value": "c4",
        "label": "음식점",
        "refId": "contentscd>c4"
        },
        "title": "델문도",
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
        "tag": "카페,커피,빙수,음식,아메리카노,에스프레소,카페라떼,젤라또,바닐라라떼,카페모카",
        "introduction": "함덕 해수욕장 한가운데에 위치한 서우봉과 해변 풍경이 아름다운 카페",
        "readcnt": 22461,
        "likecnt": 17,
        "reviewcnt": 37,
        "markcnt": 290,
        "snssharecnt": 14,
        "schedulecnt": 0,
        "visitcnt": 0,
        "evelpt": 4,
        "latitude": 33.54379,
        "longitude": 126.668846,
        "postcode": "63333",
        "phoneno": "064-702-0007",
        "sbst": "함덕서우봉해변의 가장 대표적인 카페로 TV 예능 프로그램 1박2일의 촬영지로도 소개된 바 있다. 이곳에서는 WBC의 대표 에스프레소 머신인 빅토리아 아르두이노 VA388 Black Eagle 머신으로 만든 맛있는 커피를 제공한다. 특히 델문도에서 보유하고 있는 SEATTLE 버전은 세계 60여대 밖에 없는 리미티드 에디션으로 맛과 향이 소비자에게 고스란히 전해질 수 있도록 배려하려는 주인의 철학이 느껴진다.\r\n",
        "created": "20160822163537",
        "changed": "20220729121913",
        "catemappList": [
        {
            "seq": 31223,
            "contentsid": {
            "value": "CNTS_000000000001501",
            "label": "델문도",
            "refId": "CNTS_000000000001501"
            },
            "cate1cd": {
            "value": "cate0000000005",
            "label": "음식점",
            "refId": "contscate>cate0000000005"
            },
            "cate2cd": {
            "value": "cate0000001272",
            "label": "카페",
            "refId": "cate0000000005>cate0000001272"
            },
            "cate3cd": {
            "value": "cate0000001315",
            "label": "카페",
            "refId": "cate0000001272>cate0000001315"
            },
            "created": "20220615113617"
        }
        ],
        "festivalcontents": null,
        "repPhoto": {
        "descseo": "Del Mundo",
        "photoid": {
            "photoid": 817,
            "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/8577b39c-9ab7-4f8d-a5f1-c09ca6b6b15e.jpg",
            "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201804/30/67745b1a-f5c3-44f9-a6cb-5035776ea075.jpg"
        }
        },
        "PHOTOSHARECOUNT": 49,
        "reservelink": null
    },
    {
        "alltag": "스카이온파이브그릴,스테이크,와인,레스토랑,음식,뷔페,공용주차장,화장실,무료 WIFI,흡연구역,편의점,음료대,유도 및 안내시설,경보 및 피난시설,카드결제,현금결제,Room charge, Shinhwa reward point, Landing casino point, Samsung pay, Union pay, Alipay, Wechat pay, gift card (samsung), Boucher,영어,중국어,단독접근가능,단차없음,시각장애인 접근성,청각장애인 접근성,승강기,장애인 전용 주차장,수동 휠체어 대여 가능,.,유아의자,유아식기",
        "contentsid": "CNTS_200000000007602",
        "contentscd": {
        "value": "c4",
        "label": "음식점",
        "refId": "contentscd>c4"
        },
        "title": "스카이 온 파이브 다이닝 ",
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
        "address": "제주특별자치도 서귀포시 안덕면 신화역사로304번길 38 메리어트관 제주신화월드 호텔앤리조트 5층",
        "roadaddress": "제주특별자치도 서귀포시 안덕면 신화역사로304번길 38 메리어트관 제주신화월드 호텔앤리조트 5층",
        "tag": "스카이온파이브그릴,스테이크,와인,레스토랑,음식,뷔페",
        "introduction": "제주의 아름다움이 스카이뷰와 함께 펼쳐지는 메리어트 다이닝",
        "readcnt": 11103,
        "likecnt": 28,
        "reviewcnt": 35,
        "markcnt": 36,
        "snssharecnt": 7,
        "schedulecnt": 0,
        "visitcnt": 8,
        "evelpt": 5,
        "latitude": 33.3017501,
        "longitude": 126.3206458,
        "postcode": null,
        "phoneno": "064-908-1200",
        "sbst": "",
        "created": "20181012141035",
        "changed": "20220729133242",
        "catemappList": [
        {
            "seq": 31583,
            "contentsid": {
            "value": "CNTS_200000000007602",
            "label": "스카이 온 파이브 다이닝 ",
            "refId": "CNTS_200000000007602"
            },
            "cate1cd": {
            "value": "cate0000000005",
            "label": "음식점",
            "refId": "contscate>cate0000000005"
            },
            "cate2cd": {
            "value": "cate0000001267",
            "label": "양식",
            "refId": "cate0000000005>cate0000001267"
            },
            "cate3cd": {
            "value": "cate0000001311",
            "label": "양식",
            "refId": "cate0000001267>cate0000001311"
            },
            "created": "20220719085333"
        }
        ],
        "festivalcontents": null,
        "repPhoto": {
        "descseo": "스카이 온 파이브 다이닝 ",
        "photoid": {
            "photoid": 2019022577873,
            "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/202012/30/dbde9f49-9938-498f-91b2-9aa4f4faabb6.JPG",
            "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/202012/30/f55a602f-5608-4f46-85e5-9fa5c4282eac.JPG"
        }
        },
        "PHOTOSHARECOUNT": 0,
        "reservelink": null
    },
    {
        "alltag": "해장국,고사리육개장,사골해장국,녹두빈대떡,공용주차장,현금결제,카드결제",
        "contentsid": "CNTS_000000000018375",
        "contentscd": {
        "value": "c4",
        "label": "음식점",
        "refId": "contentscd>c4"
        },
        "title": "우진해장국",
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
        "address": "제주특별자치도 제주시 삼도이동 831",
        "roadaddress": "제주특별자치도 제주시 서사로 11",
        "tag": "해장국,고사리육개장,사골해장국,녹두빈대떡,음식,몸국",
        "introduction": "제주 향토 음식인 고사리 해장국을 만날 수 있는 한식당",
        "readcnt": 21548,
        "likecnt": 17,
        "reviewcnt": 33,
        "markcnt": 305,
        "snssharecnt": 26,
        "schedulecnt": 0,
        "visitcnt": 1,
        "evelpt": 5,
        "latitude": 33.5114884,
        "longitude": 126.5200864,
        "postcode": null,
        "phoneno": "064-757-3393",
        "sbst": null,
        "created": "20161006160549",
        "changed": "20220729130516",
        "catemappList": [
        {
            "seq": 29399,
            "contentsid": {
            "value": "CNTS_000000000018375",
            "label": "우진해장국",
            "refId": "CNTS_000000000018375"
            },
            "cate1cd": {
            "value": "cate0000000005",
            "label": "음식점",
            "refId": "contscate>cate0000000005"
            },
            "cate2cd": {
            "value": "cate0000001266",
            "label": "한식",
            "refId": "cate0000000005>cate0000001266"
            },
            "cate3cd": {
            "value": "cate0000001310",
            "label": "한식",
            "refId": "cate0000001266>cate0000001310"
            },
            "created": "20220110164900"
        }
        ],
        "festivalcontents": null,
        "repPhoto": {
        "descseo": "우진해장국",
        "photoid": {
            "photoid": 2019022584209,
            "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/202110/22/d3315a0a-ccf0-4f0d-93c1-12c804558a71.JPG",
            "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/202110/22/a2f878cb-65ac-4ed8-ae18-c8850c45471a.JPG"
        }
        },
        "PHOTOSHARECOUNT": 22,
        "reservelink": null
    },
    {
        "alltag": "커피,빵,카페,원두,공용주차장,현금결제,카드결제,화장실,무료 WIFI,음료대,유도 및 안내시설,경보 및 피난시설",
        "contentsid": "CNTS_000000000018390",
        "contentscd": {
        "value": "c4",
        "label": "음식점",
        "refId": "contentscd>c4"
        },
        "title": "테라로사",
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
        "address": "제주특별자치도 서귀포시 하효동 1306-1",
        "roadaddress": "제주특별자치도 서귀포시 칠십리로658번길 27-16",
        "tag": "커피,빵,카페,원두,음식,아메리카노,카페라떼,카푸치노,핸드드립커피,에스프레소,디저트",
        "introduction": "커피와 빵으로 유명한 테라로사의 서귀포지점, 쇠소깍근처, 커피용품판매",
        "readcnt": 18537,
        "likecnt": 7,
        "reviewcnt": 31,
        "markcnt": 177,
        "snssharecnt": 9,
        "schedulecnt": 0,
        "visitcnt": 1,
        "evelpt": 5,
        "latitude": 33.24944,
        "longitude": 126.618935,
        "postcode": "63600",
        "phoneno": "033-648-2760",
        "sbst": "품격있는 커피와 빵으로 유명한 테라로사의 서귀포 지점.\n유명한 관광지인 쇠소깍 바로 옆에 위치하고 있다.\n카페가 있을 것 같지 않은 곳에 자리하고 있다는 점도 신선하지만,\n채광이 좋고 탁 트인 공간의 인테리어가 주는 여유로움과 편안함에 많은 여행객들이 찾는다.\n\n커피는 자극적이지 않고 밸런스가 좋다는 평이 대체적이다.\n날이 좋으면 야외테라스에서, 비가 오면 실내에서 창밖으로 보이는 풍경이 모두 운치있다.\n단체석이 구비되어 있으며, 카운터 한쪽엔 드립백, 원두, 프렌치프레스 등의 커피용품도 함께 판매하고 있다.",
        "created": "20161007093556",
        "changed": "20220729130350",
        "catemappList": [
        {
            "seq": 26543,
            "contentsid": {
            "value": "CNTS_000000000018390",
            "label": "테라로사",
            "refId": "CNTS_000000000018390"
            },
            "cate1cd": {
            "value": "cate0000000005",
            "label": "음식점",
            "refId": "contscate>cate0000000005"
            },
            "cate2cd": {
            "value": "cate0000001272",
            "label": "카페",
            "refId": "cate0000000005>cate0000001272"
            },
            "cate3cd": {
            "value": "cate0000001315",
            "label": "카페",
            "refId": "cate0000001272>cate0000001315"
            },
            "created": "20211025131451"
        }
        ],
        "festivalcontents": null,
        "repPhoto": {
        "descseo": "테라로사",
        "photoid": {
            "photoid": 2517,
            "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/a98546be-22b6-4d6a-af9a-aefd312142fd.jpg",
            "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201804/30/a8c2acfe-51e3-4495-bf0c-2c09edcd5a91.jpg"
        }
        },
        "PHOTOSHARECOUNT": 46,
        "reservelink": null
    },
    {
        "alltag": "카페,커피,음료,애프터눈티,음식,아메리카노,바닐라라떼,카페라떼,녹차라떼,돌체라떼,딸기라떼,디저트,빵,에이드,주스,과일주스,공용주차장,현금결제,카드결제,화장실",
        "contentsid": "CNTS_000000000022562",
        "contentscd": {
        "value": "c4",
        "label": "음식점",
        "refId": "contentscd>c4"
        },
        "title": "마노르블랑",
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
        "address": "서귀포시 안덕면 덕수리 2952",
        "roadaddress": "서귀포시 안덕면 일주서로2100번길 46",
        "tag": "카페,커피,음료,애프터눈티,음식,아메리카노,바닐라라떼,카페라떼,녹차라떼,돌체라떼,딸기라떼,디저트,빵,에이드,주스,과일주스",
        "introduction": "산방산과 형제섬의 동쪽으로 한라산이 보이는 분위기 좋은 카페",
        "readcnt": 18807,
        "likecnt": 9,
        "reviewcnt": 30,
        "markcnt": 120,
        "snssharecnt": 18,
        "schedulecnt": 0,
        "visitcnt": 4,
        "evelpt": 5,
        "latitude": 33.254242,
        "longitude": 126.29465,
        "postcode": null,
        "phoneno": "064-794-0999",
        "sbst": "제주의 아름다운 바다와 산방산, 형제섬이 보이는 카페다.\r\n내부에는 영국을 포함한 유럽의 아름다운 티웨어와 각종 피겨린을 감상할 수 있다.\r\n유럽의 귀족문화를 느낄 수 있는 소품과 그릇들이 전시되어 있으며\r\n웅장한 매친토시 오디오와 비비드 스피커에서 흘러나오는 음악을 들으며 차 한 잔의 여유를 만끽할 수 있다.\r\n2000여 평인 정원에는 사계절내내 꽃이 피고 동쪽 잔디정원엔 그랜드피아노가 있어 로맨틱한 분위기를 연출한다.\r\n특히 가을에는 여심을 저격하는 아름다운 핑크뮬리 팜파스글라스 억새가 피어 포토존으로도 사랑받고 있다.​​​​",
        "created": "20170904160746",
        "changed": "20220729114933",
        "catemappList": [
        {
            "seq": 29833,
            "contentsid": {
            "value": "CNTS_000000000022562",
            "label": "마노르블랑",
            "refId": "CNTS_000000000022562"
            },
            "cate1cd": {
            "value": "cate0000000005",
            "label": "음식점",
            "refId": "contscate>cate0000000005"
            },
            "cate2cd": {
            "value": "cate0000001272",
            "label": "카페",
            "refId": "cate0000000005>cate0000001272"
            },
            "cate3cd": {
            "value": "cate0000001315",
            "label": "카페",
            "refId": "cate0000001272>cate0000001315"
            },
            "created": "20220224161421"
        }
        ],
        "festivalcontents": null,
        "repPhoto": {
        "descseo": "Manorblanc",
        "photoid": {
            "photoid": 15344,
            "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/0260eac5-7e18-425a-aa83-7f7fa2902878.jpg",
            "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201804/30/f8853437-8984-495d-b43d-9897917bf4ce.jpg"
        }
        },
        "PHOTOSHARECOUNT": 80,
        "reservelink": null
    },
    {
        "alltag": "고기국수,비빔국수,향토음식,음식,공용주차장,현금결제,카드결제,화장실,음료대,유도 및 안내시설,경보 및 피난시설,무료 WIFI",
        "contentsid": "CNTS_000000000018307",
        "contentscd": {
        "value": "c4",
        "label": "음식점",
        "refId": "contentscd>c4"
        },
        "title": "가시아방",
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
        "address": "제주특별자치도 서귀포시 성산읍 고성리 528-2",
        "roadaddress": "제주특별자치도 서귀포시 성산읍 섭지코지로 10",
        "tag": "고기국수,비빔국수,향토음식,음식",
        "introduction": "제주도 사투리로 장인이라는 뜻의 가시아방은 고기국수와 돔베고기가 유명한 성산읍 맛집",
        "readcnt": 36251,
        "likecnt": 13,
        "reviewcnt": 29,
        "markcnt": 422,
        "snssharecnt": 25,
        "schedulecnt": 0,
        "visitcnt": 0,
        "evelpt": 4,
        "latitude": 33.4242095,
        "longitude": 126.931111,
        "postcode": "63640",
        "phoneno": "064-783-0987",
        "sbst": "곱배기가 아닌데도 불구하고 푸짐한 양의 국물 고기국수, 비빔국수를 맛있게 요리해내는 성산의 향토음식점. 수요미식회와 6시내고향 등의 텔레비전 프로그램에도 로컬 맛집으로 소개된 덕분에, 도착하는 순서대로 대기표를 받고 차례를 기다려야 한다.\r\n돔베고기, 고기국수, 보쌈 외에 반찬으로 제공되는 무절임과 집반찬도 깔끔해 입맛을 돋궈준다.",
        "created": "20161006102215",
        "changed": "20220729133050",
        "catemappList": [
        {
            "seq": 31242,
            "contentsid": {
            "value": "CNTS_000000000018307",
            "label": "가시아방",
            "refId": "CNTS_000000000018307"
            },
            "cate1cd": {
            "value": "cate0000000005",
            "label": "음식점",
            "refId": "contscate>cate0000000005"
            },
            "cate2cd": {
            "value": "cate0000001265",
            "label": "향토음식",
            "refId": "cate0000000005>cate0000001265"
            },
            "cate3cd": {
            "value": "cate0000001280",
            "label": "향토음식",
            "refId": "cate0000001265>cate0000001280"
            },
            "created": "20220615134827"
        }
        ],
        "festivalcontents": null,
        "repPhoto": {
        "descseo": "가시아방",
        "photoid": {
            "photoid": 2018,
            "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/4f60ac3e-9226-4b77-af1e-e75a814ec889.jpeg",
            "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201804/30/ddc8e75e-c2c6-482e-b3eb-3c0468973a88.jpeg"
        }
        },
        "PHOTOSHARECOUNT": 37,
        "reservelink": null
    },
    {
        "alltag": "콜라,체리콕,고르곤졸라피자,커피콕,공용주차장,현금결제,카드결제,화장실,무료 WIFI,유도 및 안내시설,경보 및 피난시설,아주 어려움",
        "contentsid": "CNTS_000000000020027",
        "contentscd": {
        "value": "c4",
        "label": "음식점",
        "refId": "contentscd>c4"
        },
        "title": "카페콜라",
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
        "address": "제주특별자치도 제주시 한림읍 귀덕리 1028",
        "roadaddress": "제주특별자치도 제주시 한림읍 일주서로 5857",
        "tag": "콜라,체리콕,고르곤졸라피자,커피콕,음식,커피,아메리카노,카푸치노,카페라떼,카페모카",
        "introduction": "코카콜라를 주제로 한 수집품 전시&테마 카페 - 커피콕, 체리콕이 대표메뉴",
        "readcnt": 8626,
        "likecnt": 0,
        "reviewcnt": 28,
        "markcnt": 126,
        "snssharecnt": 0,
        "schedulecnt": 0,
        "visitcnt": 0,
        "evelpt": 5,
        "latitude": 33.443314,
        "longitude": 126.29197,
        "postcode": "63024",
        "phoneno": "0507-1408-9969",
        "sbst": "`카페콜라`는 코카콜라 관련 아이템 수집을 계기로 오픈한 코카콜라 테마카페이다.\n코카콜라의 상징인 빨간색을 기본으로 인테리어 되어 내부는 물론 외부에서도 강렬한 빨간색이 이목을 끈다.\n콜라 뿐 아니라 커피와, 다양한 음료를 파는데, 커피와 콜라를 콜라보한 커피콕과 고르곤졸라 피자가 대표메뉴다.\n체리와 콜라를 섞고 살얼음을 동동 띄운 체리콕도 먹어볼만 한 메뉴.\n\n매장 1-2층에는 콜라 박물관을 방불케할 정도의 콜라관련 소품, 상품들이 진열되어 있는데, 마음껏 둘러볼 수 있으며 구매가 가능한 소품도 있다.\n\n\n\n\r\n\r\n​​\n​​\n​",
        "created": "20161101142127",
        "changed": "20220729111605",
        "catemappList": [
        {
            "seq": 26560,
            "contentsid": {
            "value": "CNTS_000000000020027",
            "label": "카페콜라",
            "refId": "CNTS_000000000020027"
            },
            "cate1cd": {
            "value": "cate0000000005",
            "label": "음식점",
            "refId": "contscate>cate0000000005"
            },
            "cate2cd": {
            "value": "cate0000001272",
            "label": "카페",
            "refId": "cate0000000005>cate0000001272"
            },
            "cate3cd": {
            "value": "cate0000001315",
            "label": "카페",
            "refId": "cate0000001272>cate0000001315"
            },
            "created": "20211025155556"
        }
        ],
        "festivalcontents": null,
        "repPhoto": {
        "descseo": "카페콜라",
        "photoid": {
            "photoid": 7021,
            "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/cac0d3e4-d417-4b95-9e79-14b218786957.jpg",
            "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201804/30/022fc229-cced-4818-bdba-086a5d168609.jpg"
        }
        },
        "PHOTOSHARECOUNT": 57,
        "reservelink": null
    },
    {
        "alltag": "카페,파스타,음료,애견동반,핑크뮬리,카드결제",
        "contentsid": "CNTS_000000000019605",
        "contentscd": {
        "value": "c4",
        "label": "음식점",
        "refId": "contentscd>c4"
        },
        "title": "키친오즈",
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
        "address": "제주시 한림읍 협재리 958-1",
        "roadaddress": "제주시 한림읍 협재로 208",
        "tag": "카페,파스타,음료,애견동반,핑크뮬리,음식,피자,크림파스타,빵,디저트,아메리카노",
        "introduction": "가을이면 핑크뮬리로 몽환적인 느낌이 나는 키친카페",
        "readcnt": 7771,
        "likecnt": 2,
        "reviewcnt": 28,
        "markcnt": 48,
        "snssharecnt": 1,
        "schedulecnt": 0,
        "visitcnt": 0,
        "evelpt": 5,
        "latitude": 33.38007,
        "longitude": 126.25113,
        "postcode": null,
        "phoneno": "064-796-7165",
        "sbst": "몽환적인 느낌의 서양억새-핑크뮬리로 유명한 곳이다. 가을이면 분홍색으로 넘실거리는 억새밭을 보기위해 많은 관광객들이 찾고 있다. 들어서면 큰 애완견이 있는 애완동반 가능 카페다. 파스타가 주 메뉴이고 음료도 판매한다.",
        "created": "20161025162500",
        "changed": "20220729085109",
        "catemappList": [
        {
            "seq": 26540,
            "contentsid": {
            "value": "CNTS_000000000019605",
            "label": "키친오즈",
            "refId": "CNTS_000000000019605"
            },
            "cate1cd": {
            "value": "cate0000000005",
            "label": "음식점",
            "refId": "contscate>cate0000000005"
            },
            "cate2cd": {
            "value": "cate0000001272",
            "label": "카페",
            "refId": "cate0000000005>cate0000001272"
            },
            "cate3cd": {
            "value": "cate0000001315",
            "label": "카페",
            "refId": "cate0000001272>cate0000001315"
            },
            "created": "20211025130015"
        }
        ],
        "festivalcontents": null,
        "repPhoto": {
        "descseo": "키친오즈",
        "photoid": {
            "photoid": 5755,
            "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/25159158-fdbe-4859-bde0-328dff15855a.jpg",
            "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201804/30/b19eda58-2466-48d9-aaa1-7a55bb6bf70c.jpg"
        }
        },
        "PHOTOSHARECOUNT": 41,
        "reservelink": null
    },
    {
        "alltag": "근고기,연탄구이,목살,오겹살,흑돼지,공용주차장,현금결제,카드결제,화장실,음료대,유도 및 안내시설,경보 및 피난시설,아주 어려움",
        "contentsid": "CNTS_000000000020104",
        "contentscd": {
        "value": "c4",
        "label": "음식점",
        "refId": "contentscd>c4"
        },
        "title": "돈사돈",
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
        "address": "제주특별자치도 제주시 노형동 3086-3",
        "roadaddress": "제주특별자치도 제주시 우평로 19",
        "tag": "근고기,연탄구이,목살,오겹살,흑돼지,음식,삼겹살",
        "introduction": "제주 흑돼지 근고기 연탄구이집으로, 양질의 고기뿐만 아니라 연예인들의 방문 후기와 TV출연으로도 유명해진 곳, KOREAT JEJU TOP10 선정",
        "readcnt": 40669,
        "likecnt": 26,
        "reviewcnt": 27,
        "markcnt": 509,
        "snssharecnt": 48,
        "schedulecnt": 0,
        "visitcnt": 0,
        "evelpt": 4,
        "latitude": 33.47887,
        "longitude": 126.46408,
        "postcode": "63107",
        "phoneno": "064-746-8989",
        "sbst": "​​2006년 영업을 시작한 제주의 근고기 구이 전문점으로, 평일 낮 시간에도 북적거릴 정도로 인기가 좋다. 현장에서 기다리시는 손님들을 위해 예약은 받지 않는 것이 원칙이다.\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n​​인기의 비결 첫 번째는 역시 신선한 재료다. 이 집에서는 도축장에서 바로 나와 신선한 제주 흑돼지를 쓴다. 메뉴는 단 두 가지.&nbsp;그것도 부위가 아니라 400/600g 근고기 단위로 판매한다. 육즙이 풍부한 목살과 오겹살을 골고루 함께 맛볼 수 있도록 한 배려다. 연탄을 사용하는 것은 마지막 화룡점정이다.&nbsp;특유의 매력적인 불향을 입힐 뿐만 아니라, 숯불구이보다 고기를 부드럽게 만들기 때문이다.\r\n\r\n\r\n\r\n\r\n\r\n\r\n​​돈사돈에서는 흑돼지 목살과 삼겹살의 두툼한 두께에 한 번, 고소한 육즙에 두 번 놀란다. 그렇게 구미가 당긴다고 해서 집게로 성급하게 고기를 구워선 안 된다. 이 집 고기 맛을 좌우하는 것은, 고기의 결을 살려주는&nbsp;스태프들의 능숙한 굽기 실력에서 나오는 것이기 때문이다. 직원분들이 친절하게 고기를 구워 딱 먹기 좋을 때에 접시에 담아주고,&nbsp;먹는 방법까지 설명해주니 최고로 맛있는 제주 흑돼지를 편안하게 맛볼 수 있다. 넘치는 육즙의 돼지고기와 멜젓이 찰떡궁합이며, 식사의 끝에&nbsp;김치찌개까지 맛보면&nbsp;입 안이 깔끔하게 정리된다.\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n​​KOREAT 선정단 한줄평: '제주도는 곧 흑돼지'라고 여기는 여행자 또는 식객에게 꼭 소개하는 식당. 명불허전. 수많은 제주 근고기집 중 단연 최고.",
        "created": "20161108164658",
        "changed": "20220729130525",
        "catemappList": [
        {
            "seq": 4254,
            "contentsid": {
            "value": "CNTS_000000000020104",
            "label": "돈사돈",
            "refId": "CNTS_000000000020104"
            },
            "cate1cd": {
            "value": "cate0000000005",
            "label": "음식점",
            "refId": "contscate>cate0000000005"
            },
            "cate2cd": {
            "value": "cate0000001266",
            "label": "한식",
            "refId": "cate0000000005>cate0000001266"
            },
            "cate3cd": {
            "value": "cate0000001310",
            "label": "한식",
            "refId": "cate0000001266>cate0000001310"
            },
            "created": "20180510134643"
        },
        {
            "seq": 4255,
            "contentsid": {
            "value": "CNTS_000000000020104",
            "label": "돈사돈",
            "refId": "CNTS_000000000020104"
            },
            "cate1cd": {
            "value": "cate0000000005",
            "label": "음식점",
            "refId": "contscate>cate0000000005"
            },
            "cate2cd": {
            "value": "cate0000001273",
            "label": "고메위크선정맛집",
            "refId": "cate0000000005>cate0000001273"
            },
            "cate3cd": {
            "value": "cate0000001316",
            "label": "고메위크선정맛집",
            "refId": "cate0000001273>cate0000001316"
            },
            "created": "20180510134643"
        },
        {
            "seq": 8482,
            "contentsid": {
            "value": "CNTS_000000000020104",
            "label": "돈사돈",
            "refId": "CNTS_000000000020104"
            },
            "cate1cd": {
            "value": "cate0000000005",
            "label": "음식점",
            "refId": "contscate>cate0000000005"
            },
            "cate2cd": {
            "value": "cate0000001273",
            "label": "고메위크선정맛집",
            "refId": "cate0000000005>cate0000001273"
            },
            "cate3cd": {
            "value": "cate0000001316",
            "label": "고메위크선정맛집",
            "refId": "cate0000001273>cate0000001316"
            },
            "created": "20181101162403"
        },
        {
            "seq": 8481,
            "contentsid": {
            "value": "CNTS_000000000020104",
            "label": "돈사돈",
            "refId": "CNTS_000000000020104"
            },
            "cate1cd": {
            "value": "cate0000000005",
            "label": "음식점",
            "refId": "contscate>cate0000000005"
            },
            "cate2cd": {
            "value": "cate0000001266",
            "label": "한식",
            "refId": "cate0000000005>cate0000001266"
            },
            "cate3cd": {
            "value": "cate0000001310",
            "label": "한식",
            "refId": "cate0000001266>cate0000001310"
            },
            "created": "20181101162403"
        },
        {
            "seq": 9271,
            "contentsid": {
            "value": "CNTS_000000000020104",
            "label": "돈사돈",
            "refId": "CNTS_000000000020104"
            },
            "cate1cd": {
            "value": "cate0000000005",
            "label": "음식점",
            "refId": "contscate>cate0000000005"
            },
            "cate2cd": {
            "value": "cate0000001266",
            "label": "한식",
            "refId": "cate0000000005>cate0000001266"
            },
            "cate3cd": {
            "value": "cate0000001310",
            "label": "한식",
            "refId": "cate0000001266>cate0000001310"
            },
            "created": "20181129101603"
        },
        {
            "seq": 9272,
            "contentsid": {
            "value": "CNTS_000000000020104",
            "label": "돈사돈",
            "refId": "CNTS_000000000020104"
            },
            "cate1cd": {
            "value": "cate0000000005",
            "label": "음식점",
            "refId": "contscate>cate0000000005"
            },
            "cate2cd": {
            "value": "cate0000001273",
            "label": "고메위크선정맛집",
            "refId": "cate0000000005>cate0000001273"
            },
            "cate3cd": {
            "value": "cate0000001316",
            "label": "고메위크선정맛집",
            "refId": "cate0000001273>cate0000001316"
            },
            "created": "20181129101603"
        }
        ],
        "festivalcontents": null,
        "repPhoto": {
        "descseo": "돈사돈",
        "photoid": {
            "photoid": 7399,
            "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/64a751af-12ab-49b6-8d52-7d753a0be7ee.gif",
            "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201804/30/9fd347c1-f73d-45fe-80e0-79e714f7c758.gif"
        }
        },
        "PHOTOSHARECOUNT": 26,
        "reservelink": null
    },
    {
        "alltag": "카페,케이크,음료,현금결제,카드결제,화장실,무료 WIFI,음료대,유도 및 안내시설,경보 및 피난시설",
        "contentsid": "CNTS_000000000020098",
        "contentscd": {
        "value": "c4",
        "label": "음식점",
        "refId": "contentscd>c4"
        },
        "title": "구좌상회",
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
        "address": "제주특별자치도 제주시 구좌읍 월정리 417",
        "roadaddress": "제주특별자치도 제주시 구좌읍 월정1길 55",
        "tag": "카페,케이크,음료,음식,디저트,빵,아메리카노",
        "introduction": "여성 여행객들에게 사랑받는 킨포크 느낌의 예쁜 카페, 구좌당근케이크가 유명",
        "readcnt": 17097,
        "likecnt": 6,
        "reviewcnt": 24,
        "markcnt": 172,
        "snssharecnt": 4,
        "schedulecnt": 0,
        "visitcnt": 0,
        "evelpt": 4,
        "latitude": 33.54681,
        "longitude": 126.78381,
        "postcode": "63358",
        "phoneno": "010-6600-6648",
        "sbst": "구좌상회는 제주의 돌담집을 감각적으로 개조하고, 원목위주의 편안한 인테리어에 화사한 플라워 인테리어를 더해\n많은 여성 여행객들에겐 구좌에 가면 가보아야 할 명소 중 하나로 사랑받고 있다.\n\n구좌당근으로 만든 당근케이크와 치즈케이크가 인기메뉴다.\nSBS 백종원의 푸드트럭 78회 #제주도 특집 (2017.03.25)에 방영되어 더 유명해했다.\n\n좁은 골목길에 자리해 주차공간이 따로 없으므로, 마을주차장 및 주변해변가의 주차공간에 주차 후 도보로 이동하는 것이 좋다.",
        "created": "20161107160943",
        "changed": "20220729094750",
        "catemappList": [
        {
            "seq": 20865,
            "contentsid": {
            "value": "CNTS_000000000020098",
            "label": "구좌상회",
            "refId": "CNTS_000000000020098"
            },
            "cate1cd": {
            "value": "cate0000000005",
            "label": "음식점",
            "refId": "contscate>cate0000000005"
            },
            "cate2cd": {
            "value": "cate0000001272",
            "label": "카페",
            "refId": "cate0000000005>cate0000001272"
            },
            "cate3cd": {
            "value": "cate0000001315",
            "label": "카페",
            "refId": "cate0000001272>cate0000001315"
            },
            "created": "20191112165603"
        }
        ],
        "festivalcontents": null,
        "repPhoto": {
        "descseo": "Gujwa Sanghoe",
        "photoid": {
            "photoid": 7361,
            "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/85f430da-9c37-4a50-b9ac-12d575f6acf0.jpg",
            "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201804/30/b779430a-9c24-46fd-9b96-72cd973fff64.jpg"
        }
        },
        "PHOTOSHARECOUNT": 45,
        "reservelink": null
    },
    {
        "alltag": "애월브런치카페, 브런치, 커피,공용주차장,현금결제,카드결제,화장실,무료 WIFI,치즈오믈렛, 생과일프렌치토스트, 브런치, 과일에이드",
        "contentsid": "CNTS_000000000018299",
        "contentscd": {
        "value": "c4",
        "label": "음식점",
        "refId": "contentscd>c4"
        },
        "title": "애월더선셋",
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
        "address": "제주특별자치도 제주시 애월읍 곽지리 1381",
        "roadaddress": "제주특별자치도 제주시 애월읍 일주서로 6111",
        "tag": "카페,커피,브런치,음식,토스트,아메리카노,에이드,과일주스",
        "introduction": "애월에 위치한 애월더선셋은 노을 지는 애월 바다를 감상할 수 있는 오션뷰 브런치 카페로 운치 있는 분위기는 물론이며 맛 좋은 디저트와 음료를 제공하고 있다.",
        "readcnt": 24616,
        "likecnt": 9,
        "reviewcnt": 24,
        "markcnt": 166,
        "snssharecnt": 8,
        "schedulecnt": 0,
        "visitcnt": 2,
        "evelpt": 5,
        "latitude": 33.4560041,
        "longitude": 126.3089078,
        "postcode": null,
        "phoneno": "064-799-7177",
        "sbst": "애월에 위치한 애월더선셋은 노을 지는 애월 바다를 감상할 수 있는 오션뷰 브런치 카페로 운치 있는 분위기는 물론이며 맛 좋은 디저트와 음료를 제공하고 있다. 브런치 카페인만큼 오픈 시간부터 브런치를 즐기는 손님들이 가득하며, 치즈오믈렛 브런치 세트와 생과일프렌치토스트가 대표 메뉴이고 흑돼지떡갈비 브런치 세트 또한 인기다. 브런치 메뉴는 오전 11시부터 오후 4시까지 주문 가능하다. 카페 내부는 깔끔하고 감성적인 인테리어로 아늑하고, 내부 한쪽 면은 답답하지 않도록 폴딩도어를 부착하였다. 통 유리창 너머로 보이는 야외석과 바다는 진풍경을 이루며 눈요기하기 충분한 공간이 되어준다. ",
        "created": "20161006095517",
        "changed": "20220729094758",
        "catemappList": [
        {
            "seq": 29398,
            "contentsid": {
            "value": "CNTS_000000000018299",
            "label": "애월더선셋",
            "refId": "CNTS_000000000018299"
            },
            "cate1cd": {
            "value": "cate0000000005",
            "label": "음식점",
            "refId": "contscate>cate0000000005"
            },
            "cate2cd": {
            "value": "cate0000001272",
            "label": "카페",
            "refId": "cate0000000005>cate0000001272"
            },
            "cate3cd": {
            "value": "cate0000001315",
            "label": "카페",
            "refId": "cate0000001272>cate0000001315"
            },
            "created": "20220110163749"
        }
        ],
        "festivalcontents": null,
        "repPhoto": {
        "descseo": "애월더선셋",
        "photoid": {
            "photoid": 2019022597250,
            "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/202201/10/25d4e1c3-36c5-4a68-83c0-1574de4b40fc.jpg",
            "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/202201/10/a74372ea-32ec-4d24-8c21-b7e16678694e.jpg"
        }
        },
        "PHOTOSHARECOUNT": 46,
        "reservelink": null
    },
    {
        "alltag": "샤베트,아이스크림,우도땅콩아이스크림,카페,공용주차장,현금결제,편의점",
        "contentsid": "CNTS_000000000018350",
        "contentscd": {
        "value": "c4",
        "label": "음식점",
        "refId": "contentscd>c4"
        },
        "title": "지미스",
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
        "address": "제주특별자치도 제주시 우도면 연평리 317-2",
        "roadaddress": "제주특별자치도 제주시 우도면 우도해안길 1132",
        "tag": "샤베트,아이스크림,우도땅콩아이스크림,카페,음식,디저트,우도",
        "introduction": "우도, 땅콩아이스크림이 맛있는 집",
        "readcnt": 4376,
        "likecnt": 2,
        "reviewcnt": 23,
        "markcnt": 62,
        "snssharecnt": 2,
        "schedulecnt": 0,
        "visitcnt": 0,
        "evelpt": 4,
        "latitude": 33.4981207,
        "longitude": 126.9666872,
        "postcode": null,
        "phoneno": "010-9868-8633",
        "sbst": "지미가 직접 만든 원조 수제 아이스크림이라는 문구가 걸려있는 지미스. 우도땅콩을 갈아 만든 우도땅콩아이스크림이 유명하다. 바로 앞에 검멀레해변이 보이는 테이블이 있고, 한라봉&천혜향 샤베트도 판매한다.",
        "created": "20161006144415",
        "changed": "20220729131050",
        "catemappList": [
        {
            "seq": 19598,
            "contentsid": {
            "value": "CNTS_000000000018350",
            "label": "지미스",
            "refId": "CNTS_000000000018350"
            },
            "cate1cd": {
            "value": "cate0000000005",
            "label": "음식점",
            "refId": "contscate>cate0000000005"
            },
            "cate2cd": {
            "value": "cate0000001272",
            "label": "카페",
            "refId": "cate0000000005>cate0000001272"
            },
            "cate3cd": {
            "value": "cate0000001315",
            "label": "카페",
            "refId": "cate0000001272>cate0000001315"
            },
            "created": "20190925141859"
        }
        ],
        "festivalcontents": null,
        "repPhoto": {
        "descseo": "Jimiseu",
        "photoid": {
            "photoid": 2280,
            "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/69351066-2b64-4721-b722-ea42a1fe33ac.jpg",
            "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201804/30/b01309dd-9d0e-462a-90ba-f597f463a896.jpg"
        }
        },
        "PHOTOSHARECOUNT": 17,
        "reservelink": null
    },

    {
        "alltag": "돈까스,우동,일식,현금결제,카드결제,화장실,편의점,음료대,유도 및 안내시설,경보 및 피난시설,아주 어려움",
        "contentsid": "CNTS_000000000020019",
        "contentscd": {
        "value": "c4",
        "label": "음식점",
        "refId": "contentscd>c4"
        },
        "title": "수우동",
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
        "address": "제주특별자치도 제주시 한림읍 협재리 1706-1",
        "roadaddress": "제주특별자치도 제주시 한림읍 협재1길 11",
        "tag": "돈까스,우동,일식,음식,돈가스,감자고로케,김치우동",
        "introduction": "아름다운 협재 바다가 보이는 우동, 돈까스 전문점",
        "readcnt": 13773,
        "likecnt": 8,
        "reviewcnt": 22,
        "markcnt": 198,
        "snssharecnt": 6,
        "schedulecnt": 0,
        "visitcnt": 0,
        "evelpt": 5,
        "latitude": 33.396576,
        "longitude": 126.242516,
        "postcode": "63011",
        "phoneno": "064-796-5830",
        "sbst": "​​\n\r\n\n​​​​​​​수요미식회 맛집으로 소문난 곳이라 사람이 몰리는데 당일 대기예약만 가능하여 미리 가서 예약 후 시간에 맞춰서 방문하면 된다.\n\n오픈시간인 11시가 다가오면 당일 저녁예약시간까지는 사람들로 가득찬다.\n\n바다를 바라보며 먹는 우동 맛은 수고한 보람이 있을 정도라고 하니 돈까스와 우동을 좋아한다면 추천한다.",
        "created": "20161101134611",
        "changed": "20220729094413",
        "catemappList": [
        {
            "seq": 26415,
            "contentsid": {
            "value": "CNTS_000000000020019",
            "label": "수우동",
            "refId": "CNTS_000000000020019"
            },
            "cate1cd": {
            "value": "cate0000000005",
            "label": "음식점",
            "refId": "contscate>cate0000000005"
            },
            "cate2cd": {
            "value": "cate0000001268",
            "label": "일식",
            "refId": "cate0000000005>cate0000001268"
            },
            "cate3cd": {
            "value": "cate0000001312",
            "label": "일식",
            "refId": "cate0000001268>cate0000001312"
            },
            "created": "20211021144028"
        }
        ],
        "festivalcontents": null,
        "repPhoto": {
        "descseo": "수우동",
        "photoid": {
            "photoid": 6997,
            "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/94126a85-a542-4900-a42d-5af282633cd7.jpg",
            "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201804/30/e3cb8f3e-fbcf-45d8-8da5-8a5d414c526a.jpg"
        }
        },
        "PHOTOSHARECOUNT": 31,
        "reservelink": null
    },
    {
        "alltag": "카페,커피,아메리카노,공용주차장,현금결제,카드결제,화장실,무료 WIFI,음료대,아주 어려움",
        "contentsid": "CNTS_000000000018373",
        "contentscd": {
        "value": "c4",
        "label": "음식점",
        "refId": "contentscd>c4"
        },
        "title": "앤트러사이트",
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
        "address": "제주특별자치도 제주시 한림읍 동명리 1715",
        "roadaddress": "제주특별자치도 제주시 한림읍 한림로 564",
        "tag": "카페,커피,아메리카노,음식,디저트,빵,쿠키,과일주스",
        "introduction": "고구마 전분 공장이 카페로 새롭게 태어난 곳",
        "readcnt": 13857,
        "likecnt": 10,
        "reviewcnt": 21,
        "markcnt": 131,
        "snssharecnt": 6,
        "schedulecnt": 0,
        "visitcnt": 0,
        "evelpt": 4,
        "latitude": 33.407646,
        "longitude": 126.25817,
        "postcode": "63013",
        "phoneno": "064-796-7991",
        "sbst": "70년 된 고구마전분공장을 그대로 유지한 카페.\n40여년 동안 공장이 돌아가며 바닥에 낀 기름때는 화산송이를 부어서 마감했고 섀시까지도 예전 그대로의 것에서 칠만 새로 했다고 한다.\n기존에 보던 카페와는 다른 이색적인 분위기를 느낄 수 있다.\n천장 지붕 곳곳이 뚫려있어 자연채광이 내부로 흘러오는 모습을 보고 있으면 한 폭의 그림과 같다.\n외부에 간판이 없으므로 지나치지 않도록 주의해야 한다.\n​\n\n\n\n​",
        "created": "20161006155921",
        "changed": "20220729111009",
        "catemappList": [
        {
            "seq": 26416,
            "contentsid": {
            "value": "CNTS_000000000018373",
            "label": "앤트러사이트",
            "refId": "CNTS_000000000018373"
            },
            "cate1cd": {
            "value": "cate0000000005",
            "label": "음식점",
            "refId": "contscate>cate0000000005"
            },
            "cate2cd": {
            "value": "cate0000001272",
            "label": "카페",
            "refId": "cate0000000005>cate0000001272"
            },
            "cate3cd": {
            "value": "cate0000001315",
            "label": "카페",
            "refId": "cate0000001272>cate0000001315"
            },
            "created": "20211021144614"
        }
        ],
        "festivalcontents": null,
        "repPhoto": {
        "descseo": "앤트러사이트",
        "photoid": {
            "photoid": 2018052308467,
            "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201811/06/b87b4637-7781-44b1-9fc0-3fa618c62673.jpg",
            "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201811/06/9e78b8d9-956a-4646-9806-4d6b947cae26.jpg"
        }
        },
        "PHOTOSHARECOUNT": 28,
        "reservelink": null
    },
    {
        "alltag": "카페,아이스크림,한라봉아이스크림",
        "contentsid": "CNTS_000000000018890",
        "contentscd": {
        "value": "c4",
        "label": "음식점",
        "refId": "contentscd>c4"
        },
        "title": "우도왕자이야기",
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
        "tag": "카페,아이스크림,한라봉아이스크림,음식,우도,디저트",
        "introduction": "서빈백사해변에 있는 우도땅콩아이스크림 가게",
        "readcnt": 3181,
        "likecnt": 1,
        "reviewcnt": 21,
        "markcnt": 24,
        "snssharecnt": 0,
        "schedulecnt": 0,
        "visitcnt": 0,
        "evelpt": 5,
        "latitude": 33.50263,
        "longitude": 126.94384,
        "postcode": null,
        "phoneno": "010-4049-3303",
        "sbst": "​​\n\r\n\n우도 내에 검멀레해변, 서빈백사 등 여러곳의 가게가 있는 우도왕자이야기. 과자를 이용하여 아이스크림을 다양하게 꾸며서 주기도 하는데 그 모습이 200개 이상이라고 한다. 한라봉, 땅콩 2가지 종류가 있고, 그 중에 새콤달콤한 한라봉 아이스크림이 이곳의 별미다. 서빈백사를 가면 사장님이 디제잉하는 모습도 볼 수 있다.",
        "created": "20161017151935",
        "changed": "20220729130809",
        "catemappList": [
        {
            "seq": 26563,
            "contentsid": {
            "value": "CNTS_000000000018890",
            "label": "우도왕자이야기",
            "refId": "CNTS_000000000018890"
            },
            "cate1cd": {
            "value": "cate0000000005",
            "label": "음식점",
            "refId": "contscate>cate0000000005"
            },
            "cate2cd": {
            "value": "cate0000001272",
            "label": "카페",
            "refId": "cate0000000005>cate0000001272"
            },
            "cate3cd": {
            "value": "cate0000001315",
            "label": "카페",
            "refId": "cate0000001272>cate0000001315"
            },
            "created": "20211025162252"
        }
        ],
        "festivalcontents": null,
        "repPhoto": {
        "descseo": "우도왕자이야기",
        "photoid": {
            "photoid": 2019022584479,
            "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/202110/25/6edc06df-63e3-40f3-97ec-574ea002b6c3.jpg",
            "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/202110/25/03872e2b-7f6e-4c3a-bc65-f17a6a87c3d3.jpg"
        }
        },
        "PHOTOSHARECOUNT": 16,
        "reservelink": null
    },
    {
        "alltag": "떡볶이,왕새우튀김,흑돼지튀김,생맥주,짜장떡볶이,음식,화장실,무료 WIFI,아주 어려움,떡볶이, 짜장떡볶이,어린이 출입가능,불가능",
        "contentsid": "CNTS_000000000018400",
        "contentscd": {
        "value": "c4",
        "label": "음식점",
        "refId": "contentscd>c4"
        },
        "title": "명랑스낵",
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
        "address": "제주특별자치도 제주시 한림읍 한림리 1479-4",
        "roadaddress": "제주특별자치도 제주시 한림읍 한림로 585",
        "tag": "떡볶이,왕새우튀김,흑돼지튀김,생맥주,짜장떡볶이,음식",
        "introduction": "제주시 한림읍에 위치한 분식집인 명랑스낵은 아늑한 실내에서도 음식을 즐길 수 있으며 옥상에도 테이블이 있어 넓은 바다와 비양도를 보면서 음식을 즐길 수 있다. ",
        "readcnt": 18455,
        "likecnt": 12,
        "reviewcnt": 20,
        "markcnt": 199,
        "snssharecnt": 8,
        "schedulecnt": 0,
        "visitcnt": 0,
        "evelpt": 4,
        "latitude": 33.409283,
        "longitude": 126.258835,
        "postcode": "63032",
        "phoneno": "070-4121-1110",
        "sbst": "제주시 한림읍에 위치한 분식집인 명랑스낵은 아늑한 실내에서도 음식을 즐길 수 있으며 옥상에도 테이블이 따로 마련되어 있어 넓은 바다와 비양도를 바라보면서 음식을 즐길 수 있다. 이 곳에는 쫀득한 밀떡과 어묵이 들어간 매콤달콤한 기본 떡볶이, 쫀득한 밀떡과 어묵을 짜장소스로 버무려 만들어 낸 짜장떡볶이는 명랑떡볶이의 대표메뉴이며 당면사리 추가는 짜장떡볶이에만 가능하니 참고하면 좋다. 또한 통통한 새우를 튀겨낸 왕새우튀김, 쫄깃한 한치를 튀겨낸 한치튀김 등과 같은 떡볶이와 같이 곁들여 먹을 수 있는 튀김메뉴도 있어 더욱 푸짐하고 다양한 한끼식사를 즐길 수 있다.",
        "created": "20161007101002",
        "changed": "20220729080037",
        "catemappList": [
        {
            "seq": 30069,
            "contentsid": {
            "value": "CNTS_000000000018400",
            "label": "명랑스낵",
            "refId": "CNTS_000000000018400"
            },
            "cate1cd": {
            "value": "cate0000000005",
            "label": "음식점",
            "refId": "contscate>cate0000000005"
            },
            "cate2cd": {
            "value": "cate0000001266",
            "label": "한식",
            "refId": "cate0000000005>cate0000001266"
            },
            "cate3cd": {
            "value": "cate0000001310",
            "label": "한식",
            "refId": "cate0000001266>cate0000001310"
            },
            "created": "20220311151804"
        }
        ],
        "festivalcontents": null,
        "repPhoto": {
        "descseo": "명랑스낵",
        "photoid": {
            "photoid": 2019022599500,
            "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/202203/11/3991da7a-b581-43a7-827d-9b59e66e6ea6.jpg",
            "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/202203/11/daa7e2fc-971e-43b8-865a-1fe943d1aad4.jpg"
        }
        },
        "PHOTOSHARECOUNT": 34,
        "reservelink": null
    },
    {
        "alltag": "음료,칵테일,버거,공용주차장,현금결제,카드결제,화장실,무료 WIFI,흡연구역,편의점,음료대,어려움",
        "contentsid": "CNTS_000000000019250",
        "contentscd": {
        "value": "c4",
        "label": "음식점",
        "refId": "contentscd>c4"
        },
        "title": "바다다",
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
        "address": "제주특별자치도 서귀포시 대포동 2384",
        "roadaddress": "제주특별자치도 서귀포시 대포로 148-15",
        "tag": "음료,칵테일,버거,음식,레몬에이드,커피,쿠키",
        "introduction": "하우스음악과 칵테일 음식 등을 즐길 수 있는 Beach Lounge",
        "readcnt": 14930,
        "likecnt": 8,
        "reviewcnt": 20,
        "markcnt": 152,
        "snssharecnt": 5,
        "schedulecnt": 0,
        "visitcnt": 0,
        "evelpt": 4,
        "latitude": 33.236816,
        "longitude": 126.437065,
        "postcode": "63544",
        "phoneno": "064-738-2882",
        "sbst": "바다다는 바닷가 앞에서 하우스음악과 칵테일, 음식 등을 즐길 수 있는 Beach Lounge 이다.\n조그만 골목길을 따라 들어가면 넓은 주차장이 나오고 건물 한쪽편은 완전히 바닷가와 접해있어 라운지안에서 바로 파도를 볼 수 있다.\n적절한 조명과 라운지 음악의 조화로 분위기가 좋고, 옥상에 마련된 푹신한 의자에 앉아 바다를 보며 맛있는 버거와 음료를 마실 수 있다.",
        "created": "20161020151212",
        "changed": "20220729111705",
        "catemappList": [
        {
            "seq": 19737,
            "contentsid": {
            "value": "CNTS_000000000019250",
            "label": "바다다",
            "refId": "CNTS_000000000019250"
            },
            "cate1cd": {
            "value": "cate0000000005",
            "label": "음식점",
            "refId": "contscate>cate0000000005"
            },
            "cate2cd": {
            "value": "cate0000001272",
            "label": "카페",
            "refId": "cate0000000005>cate0000001272"
            },
            "cate3cd": {
            "value": "cate0000001315",
            "label": "카페",
            "refId": "cate0000001272>cate0000001315"
            },
            "created": "20190930165613"
        }
        ],
        "festivalcontents": null,
        "repPhoto": {
        "descseo": "Jeju Ocean",
        "photoid": {
            "photoid": 4705,
            "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/58f8a2ae-6666-4e69-ade7-93ce61616bef.jpg",
            "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201804/30/9b20bc0a-5c29-4336-b3b3-6a67eaf76996.jpg"
        }
        },
        "PHOTOSHARECOUNT": 37,
        "reservelink": null
    },
    {
        "alltag": "항정상,오겹살,속풀이라면,음식,흑돼지,라면,공용주차장,현금결제,카드결제,화장실,무료 WIFI,흡연구역,편의점,음료대,유도 및 안내시설,경보 및 피난시설,아주 어려움",
        "contentsid": "CONT_000000000501382",
        "contentscd": {
        "value": "c4",
        "label": "음식점",
        "refId": "contentscd>c4"
        },
        "title": "최고집",
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
        "address": "제주특별자치도 서귀포시 서호동 1477-6",
        "roadaddress": "제주특별자치도 서귀포시 김정문화로 71",
        "tag": "항정상,오겹살,속풀이라면,음식,흑돼지,라면",
        "introduction": "1등급 이상의 제주 백돼지를 맛볼 수 있는 곳이다. 항정살과 오겹살에만 집중하여 최고의 맛을 선보인다.",
        "readcnt": 14515,
        "likecnt": 12,
        "reviewcnt": 20,
        "markcnt": 115,
        "snssharecnt": 22,
        "schedulecnt": 0,
        "visitcnt": 0,
        "evelpt": 5,
        "latitude": 33.2507966,
        "longitude": 126.5123065,
        "postcode": null,
        "phoneno": "064-739-4777",
        "sbst": "1등급 이상의 제주 백돼지를 맛볼 수 있는 곳으로, 항정살과 오겹살에만 집중하여 최고의 맛을 선보인다. 오후 6시경부터는 대기자가 발생할 수 있으니 그 전에 방문하거나 예약하는 것이 좋은데, 예약은 7시까지만 받는다. (8시 방문건은 예약 불가) 2007년 오픈 이래 11년째 인기를 끌고 있는 비결은 메뉴의 선택과 집중, 그리고 재료의 질이다.  고기는 1등급 이상의 항정살과 오겹살만 선택하여 저온숙성해 직접 손질하며, 고기뿐만 아니라 고기를 찍어 먹는 멜젓 또한 제주산 최상급을 사용한다. 반찬은 고기의 맛을 해치지 않을 정도의 간단한 것들로 준비한다. \r\n\r\n오겹살과 항정살 고루 인기가 좋지만, 항정살은 물량이 한정돼 있어 테이블당 2인분까지만 주문할 수 있으며 조기 마감되는 경우도 있다. 고기를 다 먹고 난 후 속을 얼큰하게 풀어주는 속풀이 라면을 먹으면 깔끔한 마무리가 된다. 마지막 주문은 10시까지 가능하다. 신제주이마트와 서귀포 해양 경찰서, 법환포구 등이 가까이 있어 찾아가기가 쉽기 때문에 서귀포에 머무를 때 들르기 좋다. 근처에 무료 공영주차장이 있다는 것도 장점이다.",
        "created": "20160530111636",
        "changed": "20220729121801",
        "catemappList": [
        {
            "seq": 31254,
            "contentsid": {
            "value": "CONT_000000000501382",
            "label": "최고집",
            "refId": "CONT_000000000501382"
            },
            "cate1cd": {
            "value": "cate0000000005",
            "label": "음식점",
            "refId": "contscate>cate0000000005"
            },
            "cate2cd": {
            "value": "cate0000001266",
            "label": "한식",
            "refId": "cate0000000005>cate0000001266"
            },
            "cate3cd": {
            "value": "cate0000001310",
            "label": "한식",
            "refId": "cate0000001266>cate0000001310"
            },
            "created": "20220615143601"
        },
        {
            "seq": 31255,
            "contentsid": {
            "value": "CONT_000000000501382",
            "label": "최고집",
            "refId": "CONT_000000000501382"
            },
            "cate1cd": {
            "value": "cate0000000005",
            "label": "음식점",
            "refId": "contscate>cate0000000005"
            },
            "cate2cd": {
            "value": "cate0000001273",
            "label": "고메위크선정맛집",
            "refId": "cate0000000005>cate0000001273"
            },
            "cate3cd": {
            "value": "cate0000001316",
            "label": "고메위크선정맛집",
            "refId": "cate0000001273>cate0000001316"
            },
            "created": "20220615143601"
        }
        ],
        "festivalcontents": null,
        "repPhoto": {
        "descseo": "최고집",
        "photoid": {
            "photoid": 2019022564290,
            "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201910/16/76348757-2736-4d9b-91b5-5cc03006204f.jpg",
            "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201910/16/df026c32-66ce-4af7-89b2-c5b56ec202a2.jpg"
        }
        },
        "PHOTOSHARECOUNT": 4,
        "reservelink": null
    },
    {
        "alltag": "갈치조림,정식,고등어구이,갈치구이,고등어조림,현금결제,카드결제,화장실,음료대,아주 어려움",
        "contentsid": "CNTS_000000000020162",
        "contentscd": {
        "value": "c4",
        "label": "음식점",
        "refId": "contentscd>c4"
        },
        "title": "운정이네",
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
        "address": "제주특별자치도 서귀포시 안덕면 감산리 359-1",
        "roadaddress": "제주특별자치도 서귀포시 안덕면 일주서로 1524",
        "tag": "갈치조림,정식,고등어구이,갈치구이,고등어조림,음식,제주갈치조림,제주갈치구이,생선구이정식,생선조림,전복뚝배기",
        "introduction": "전복, 옥돔, 갈치, 제주의 음식을 한번에 맛보는 운정이네",
        "readcnt": 24711,
        "likecnt": 4,
        "reviewcnt": 19,
        "markcnt": 161,
        "snssharecnt": 5,
        "schedulecnt": 0,
        "visitcnt": 0,
        "evelpt": 4,
        "latitude": 33.258415,
        "longitude": 126.35306,
        "postcode": "63531",
        "phoneno": "064-738-3883",
        "sbst": "제주의 유명 관광지 중 하나인 카멜리아힐 근처에 위치한 운정이네 토속음식점은 고등어조림(갈치조림)과 전복 뚝배기가 기본으로 제공되고, \n옥돔과 고등어구이(갈치구이) 중 하나를 선택할 수 있는 고등어 정식과 갈치 정식이 인기 메뉴이다. \n\n제주도에 오면 꼭 먹어봐야 할 음식 중 하나인 전복, 옥돔, 갈치 등의 요리를 모두 맛 볼 수 있으며, 돈가스, 새우튀김, 오메기 떡 등의 푸짐한 밑반찬이 나온다.\n무료로 제공되는 한라봉 맛, 우도 땅콩 맛 아이스크림이 있어 식사가 끝난 후에도 제주를 담은 맛의 후식으로 가볍게 입가심 할 수 있다. \n\n내부가 넓어서 가족이나 단체로 방문할 수 있고, 아이들을 위한 의자와 수저도 준비되어 있다.\n안덕본점과 중문점을 동시에 운영하고 있다.",
        "created": "20161110163551",
        "changed": "20220729105308",
        "catemappList": [
        {
            "seq": 26431,
            "contentsid": {
            "value": "CNTS_000000000020162",
            "label": "운정이네",
            "refId": "CNTS_000000000020162"
            },
            "cate1cd": {
            "value": "cate0000000005",
            "label": "음식점",
            "refId": "contscate>cate0000000005"
            },
            "cate2cd": {
            "value": "cate0000001266",
            "label": "한식",
            "refId": "cate0000000005>cate0000001266"
            },
            "cate3cd": {
            "value": "cate0000001310",
            "label": "한식",
            "refId": "cate0000001266>cate0000001310"
            },
            "created": "20211021163306"
        }
        ],
        "festivalcontents": null,
        "repPhoto": {
        "descseo": "운정이네",
        "photoid": {
            "photoid": 2019022562990,
            "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201909/30/3ae2e00d-accb-42a5-8605-cf0e73e34dda.jpg",
            "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201909/30/2c6d22ac-0e97-4b01-b981-1e714533bd85.jpg"
        }
        },
        "PHOTOSHARECOUNT": 29,
        "reservelink": null
    },
    {
        "alltag": "망고음료,음료,카페",
        "contentsid": "CNTS_000000000018864",
        "contentscd": {
        "value": "c4",
        "label": "음식점",
        "refId": "contentscd>c4"
        },
        "title": "망고레이",
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
        "address": "제주특별자치도 제주시 우도면 연평리 1747-4",
        "roadaddress": "제주특별자치도 제주시 우도면 우도로 1",
        "tag": "망고음료,음료,카페,음식,우도,아이스크림,망고,망고스무디,망고에이드,망고주스",
        "introduction": "망고주스 프랜차이즈 카페",
        "readcnt": 4798,
        "likecnt": 1,
        "reviewcnt": 18,
        "markcnt": 31,
        "snssharecnt": 0,
        "schedulecnt": 0,
        "visitcnt": 0,
        "evelpt": 5,
        "latitude": 33.5033191,
        "longitude": 126.9556775,
        "postcode": null,
        "phoneno": "064-782-0100",
        "sbst": "국내최초 필리핀망고디저트카페 망고레이는 망고전문 디저트카페로서 전국 단일매장중 생망고를 가장 많이 판매하는 곳이다.",
        "created": "20161017134145",
        "changed": "20220729131201",
        "catemappList": [
        {
            "seq": 20622,
            "contentsid": {
            "value": "CNTS_000000000018864",
            "label": "망고레이",
            "refId": "CNTS_000000000018864"
            },
            "cate1cd": {
            "value": "cate0000000005",
            "label": "음식점",
            "refId": "contscate>cate0000000005"
            },
            "cate2cd": {
            "value": "cate0000001272",
            "label": "카페",
            "refId": "cate0000000005>cate0000001272"
            },
            "cate3cd": {
            "value": "cate0000001315",
            "label": "카페",
            "refId": "cate0000001272>cate0000001315"
            },
            "created": "20191104092459"
        }
        ],
        "festivalcontents": null,
        "repPhoto": {
        "descseo": "Mangoray",
        "photoid": {
            "photoid": 3807,
            "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/51fcc2f2-2555-4cb8-aeef-19257373b443.jpg",
            "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201804/30/e3d5de23-7bf8-4030-8f31-7ea696810acc.jpg"
        }
        },
        "PHOTOSHARECOUNT": 24,
        "reservelink": null
    },
    {
        "alltag": "카페,댕유차,한라봉",
        "contentsid": "CNTS_000000000020326",
        "contentscd": {
        "value": "c4",
        "label": "음식점",
        "refId": "contentscd>c4"
        },
        "title": "바보카페",
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
        "address": "제주특별자치도 제주시 구좌읍 한동리 1339-6",
        "roadaddress": "제주특별자치도 제주시 구좌읍 해맞이해안로 1016",
        "tag": "카페,댕유차,한라봉,음식,아메리카노,카페라떼,카페모카,카푸치노,카라멜마끼아또",
        "introduction": "월정리 해변 앞, 돌담집을 개조해 만든 감성 인테리어 노키즈 카페",
        "readcnt": 11596,
        "likecnt": 3,
        "reviewcnt": 18,
        "markcnt": 90,
        "snssharecnt": 0,
        "schedulecnt": 0,
        "visitcnt": 0,
        "evelpt": 4,
        "latitude": 33.541573,
        "longitude": 126.83128,
        "postcode": "63359",
        "phoneno": "064-783-4847",
        "sbst": "​\n월정리 해안도로에는 자리하고 있으며 통유리로 되어 있어 바다가 보인다.\n내부에는 좌식으로 된 테이블도 마련되어 있고 침대를 개조해 만든 자리나 흰 천이 커튼처럼 쳐져 있는 바깥 테이블 등이 있다.\n메뉴는 커피와 제주의 댕유차, 한라봉 등을 만든 차와 디저트 등이 있다.\n1인 1메뉴 주문이 원칙이고, 기본 테이크아웃 잔에 나오니 유리잔을 원할 경우 미리 요청하여야 한다.\n노키즈 카페여서 13세 이상부터 출입할 수 있다.\n​​​​​​​​​​​​​​​\n​​​​​​​​​\n​​​​​​​​\n​​\n​",
        "created": "20161118105451",
        "changed": "20220729095631",
        "catemappList": [
        {
            "seq": 2159,
            "contentsid": {
            "value": "CNTS_000000000020326",
            "label": "바보카페",
            "refId": "CNTS_000000000020326"
            },
            "cate1cd": {
            "value": "cate0000000005",
            "label": "음식점",
            "refId": "contscate>cate0000000005"
            },
            "cate2cd": {
            "value": "cate0000001272",
            "label": "카페",
            "refId": "cate0000000005>cate0000001272"
            },
            "cate3cd": {
            "value": "cate0000001315",
            "label": "카페",
            "refId": "cate0000001272>cate0000001315"
            },
            "created": "20180410183010"
        }
        ],
        "festivalcontents": null,
        "repPhoto": {
        "descseo": "바보카페",
        "photoid": {
            "photoid": 8342,
            "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/7444f547-b3a5-4b82-b83b-b3ca75cec3d3.jpg",
            "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201804/30/4d6ec4bc-ed0d-4b7f-8d50-9d35d18b1ec7.jpg"
        }
        },
        "PHOTOSHARECOUNT": 30,
        "reservelink": null
    },
    {
        "alltag": "카페,커피,케이크,현금결제,카드결제,화장실",
        "contentsid": "CNTS_000000000020532",
        "contentscd": {
        "value": "c4",
        "label": "음식점",
        "refId": "contentscd>c4"
        },
        "title": "월정리로와",
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
        "address": "제주특별자치도 제주시 구좌읍 월정리 6",
        "roadaddress": "제주특별자치도 제주시 구좌읍 해맞이해안로 472",
        "tag": "카페,커피,케이크,음식,아메리카노,토스트,스무디,딸기스무디",
        "introduction": "월정리 해변에 있는 전망이 좋은 카페",
        "readcnt": 2927,
        "likecnt": 1,
        "reviewcnt": 18,
        "markcnt": 14,
        "snssharecnt": 2,
        "schedulecnt": 0,
        "visitcnt": 0,
        "evelpt": 4,
        "latitude": 33.555107,
        "longitude": 126.79695,
        "postcode": "63358",
        "phoneno": "064-783-2240",
        "sbst": "월정리 해수욕장에 있는 카페 월정리로와. Lowa는 적시다, 스며들다의 뜻이다.\n손님들이 월정리로 자연스럽게 스며들 수 있도록 꾸며졌다.\n외부에는 파라솔을 설치하여 바다를 보며 커피를 즐길 수 있도록 되어 있고, 전면이 유리창으로 되어 있어 내부에서도 바다가 훤히 보인다.\n\n여느카페처럼 기본 물이 준비되어 있는데, 독특하게 과일을 넣어서 상큼한 느낌을 준다. 음료 및 커피들도 깔끔하다.\n월정리 로와는 전면이 유리로 되어 있고, 카페 내부를 통해 뒤로 가면 넓은 공간이 나와서 여유롭게 월정리를 즐길 수 있는 분위기다.",
        "created": "20161123101904",
        "changed": "20220729093625",
        "catemappList": [
        {
            "seq": 20284,
            "contentsid": {
            "value": "CNTS_000000000020532",
            "label": "월정리로와",
            "refId": "CNTS_000000000020532"
            },
            "cate1cd": {
            "value": "cate0000000005",
            "label": "음식점",
            "refId": "contscate>cate0000000005"
            },
            "cate2cd": {
            "value": "cate0000001272",
            "label": "카페",
            "refId": "cate0000000005>cate0000001272"
            },
            "cate3cd": {
            "value": "cate0000001315",
            "label": "카페",
            "refId": "cate0000001272>cate0000001315"
            },
            "created": "20191023171745"
        }
        ],
        "festivalcontents": null,
        "repPhoto": {
        "descseo": "월정리로와",
        "photoid": {
            "photoid": 8874,
            "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/11cf2b9a-d264-4a10-bb09-52c7345187f7.jpg",
            "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201804/30/5c7db362-0c7a-47f0-883b-2a3907d5de50.jpg"
        }
        },
        "PHOTOSHARECOUNT": 32,
        "reservelink": null
    },
    {
        "alltag": "전복물회,성게미역국,해물뚝배기,전복,성게,공용주차장,현금결제,카드결제,화장실,편의점,음료대,유도 및 안내시설,경보 및 피난시설,아주 어려움",
        "contentsid": "CNTS_000000000020103",
        "contentscd": {
        "value": "c4",
        "label": "음식점",
        "refId": "contentscd>c4"
        },
        "title": "순옥이네 명가",
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
        "address": "제주 제주시 도두1동 2615-5",
        "roadaddress": "제주 제주시 도공로 8",
        "tag": "전복물회,성게미역국,해물뚝배기,전복,성게,음식,전복뚝배기",
        "introduction": "도두동에 위치한 전복요리전문집 2016 KOREAT JEJU TOP10 선정",
        "readcnt": 37971,
        "likecnt": 16,
        "reviewcnt": 17,
        "markcnt": 326,
        "snssharecnt": 36,
        "schedulecnt": 0,
        "visitcnt": 1,
        "evelpt": 4,
        "latitude": 33.505558,
        "longitude": 126.465065,
        "postcode": null,
        "phoneno": "064-743-4813",
        "sbst": "​\n\n\n순옥이네 명가는 15년 째 성업 중인 전복물회의 명가다. 해녀가 운영하는 검증된 식당인 데다가 물회는 물론 성게미역국, 해물뚝배기 등 해물의 묵직하면서도 개운한 맛을 찾는 이들로 늘 북적인다.&nbsp;직접 따온 전복, 성게, 오분작 등의 자연산 해산물요리를 제공한다. 관광객들이 많이 찾는 물회 맛집으로 소문나 있다.&nbsp;도두동에 위치하여 제주공항과도 가깝다. 브레이크타임(15:00 ~ 17:00)이 있으니 확인후 방문을 권장한다.\n\n\n​​\n\r\n\r\n\n2016 KOREAT JEJU TOP10 선정단 한줄평: 선도 높은 음식과 합리적인 가격, 제주 토박이들이 즐겨찾는 진정한 제주 맛집. 독특한 된장 소스에 소라, 해삼을 넣은 전복물회와 해물뚝배기는 국물 한 방울도 남길 수가 없다.\n\n​​​​​​​",
        "created": "20161108161216",
        "changed": "20220729131539",
        "catemappList": [
        {
            "seq": 26448,
            "contentsid": {
            "value": "CNTS_000000000020103",
            "label": "순옥이네 명가",
            "refId": "CNTS_000000000020103"
            },
            "cate1cd": {
            "value": "cate0000000005",
            "label": "음식점",
            "refId": "contscate>cate0000000005"
            },
            "cate2cd": {
            "value": "cate0000001265",
            "label": "향토음식",
            "refId": "cate0000000005>cate0000001265"
            },
            "cate3cd": {
            "value": "cate0000001280",
            "label": "향토음식",
            "refId": "cate0000001265>cate0000001280"
            },
            "created": "20211021173214"
        }
        ],
        "festivalcontents": null,
        "repPhoto": {
        "descseo": "순옥이네명가",
        "photoid": {
            "photoid": 7395,
            "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/789bdb61-a9a6-409b-9695-d661d6a12cb5.gif",
            "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201804/30/2b4d1373-58b4-4e82-ab2d-eaf11469c47a.gif"
        }
        },
        "PHOTOSHARECOUNT": 24,
        "reservelink": null
    },
    {
        "alltag": "카페,커피,아메리카노,공용주차장,현금결제,카드결제,화장실,무료 WIFI,음료대,유도 및 안내시설,경보 및 피난시설",
        "contentsid": "CNTS_000000000020069",
        "contentscd": {
        "value": "c4",
        "label": "음식점",
        "refId": "contentscd>c4"
        },
        "title": "카페마니",
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
        "address": "제주특별자치도 제주시 구좌읍 평대리 2033-1",
        "roadaddress": "제주특별자치도 제주시 구좌읍 해맞이해안로 1112",
        "tag": "카페,커피,아메리카노,음식,에스프레소,카페라떼,차,에이드,과일주스",
        "introduction": "빨간 소파에 누워 에메랄드빛 바다를 바라보며 커피한잔을 즐길 수 있는 테마로 유명한 카페",
        "readcnt": 7287,
        "likecnt": 4,
        "reviewcnt": 17,
        "markcnt": 41,
        "snssharecnt": 0,
        "schedulecnt": 0,
        "visitcnt": 0,
        "evelpt": 4,
        "latitude": 33.53737,
        "longitude": 126.83743,
        "postcode": "63360",
        "phoneno": "010-7129-7533",
        "sbst": "월정리 너머 평대리에 위치하며 파티플래너로 오랫동안 일을 해왔던 주인장님이 운영하는 카페이다.\n빨간 의자에 앉아 바다를 느낄 수 있는 곳으로 시간이나 계절에 맞는 이벤트가 열린다.\n해안도로를 따라 차를 타고 달리다 누워서 휴식을 취할 곳을 찾는이들에게 추천할 만한 장소.",
        "created": "20161104164555",
        "changed": "20220729101436",
        "catemappList": [
        {
            "seq": 26532,
            "contentsid": {
            "value": "CNTS_000000000020069",
            "label": "카페마니",
            "refId": "CNTS_000000000020069"
            },
            "cate1cd": {
            "value": "cate0000000005",
            "label": "음식점",
            "refId": "contscate>cate0000000005"
            },
            "cate2cd": {
            "value": "cate0000001272",
            "label": "카페",
            "refId": "cate0000000005>cate0000001272"
            },
            "cate3cd": {
            "value": "cate0000001315",
            "label": "카페",
            "refId": "cate0000001272>cate0000001315"
            },
            "created": "20211025105855"
        }
        ],
        "festivalcontents": null,
        "repPhoto": {
        "descseo": "카페마니",
        "photoid": {
            "photoid": 2019022584349,
            "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/202110/25/dc01f92d-8cb8-498b-823f-1ea943dd1afd.jpg",
            "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/202110/25/15954296-546c-4bc4-818a-6537e29778ea.jpg"
        }
        },
        "PHOTOSHARECOUNT": 24,
        "reservelink": null
    },

    {
        "alltag": "브뤠베,커피,카페,현금결제,카드결제,화장실,무료 WIFI,음료대,아주 어려움,어린이 출입불가",
        "contentsid": "CNTS_000000000019945",
        "contentscd": {
        "value": "c4",
        "label": "음식점",
        "refId": "contentscd>c4"
        },
        "title": "풍림다방",
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
        "address": "제주특별자치도 제주시 구좌읍 송당리 1377-1",
        "roadaddress": "제주특별자치도 제주시 구좌읍 중산간동로 2267-4",
        "tag": "브뤠베,커피,카페,음식,아메리카노,에스프레소,주스,과일주스",
        "introduction": "달달하고 매력적인 브레붸가 유명한 풍림 다방",
        "readcnt": 5750,
        "likecnt": 3,
        "reviewcnt": 17,
        "markcnt": 76,
        "snssharecnt": 5,
        "schedulecnt": 0,
        "visitcnt": 0,
        "evelpt": 5,
        "latitude": 33.4718397,
        "longitude": 126.785755,
        "postcode": "63355",
        "phoneno": "010-5775-7401",
        "sbst": "​​​​​​​수요미식회 20회에 방영된 카페이다.\n대기시간이 길고 마감이 일정하지 않으니 꼭 연락 후 방문하는 것을 권장한다.\n노키즈존이라 13세 이하는 출입이 불가하다.\n시그니쳐 메뉴인 브뤠베를 맛보고 재방문을 원하는 관광객이 많다.\n테이크아웃이 가능한 음료는 제한적이니 방문시 참고.",
        "created": "20161031093412",
        "changed": "20220729020209",
        "catemappList": [
        {
            "seq": 26477,
            "contentsid": {
            "value": "CNTS_000000000019945",
            "label": "풍림다방",
            "refId": "CNTS_000000000019945"
            },
            "cate1cd": {
            "value": "cate0000000005",
            "label": "음식점",
            "refId": "contscate>cate0000000005"
            },
            "cate2cd": {
            "value": "cate0000001272",
            "label": "카페",
            "refId": "cate0000000005>cate0000001272"
            },
            "cate3cd": {
            "value": "cate0000001315",
            "label": "카페",
            "refId": "cate0000001272>cate0000001315"
            },
            "created": "20211022100405"
        }
        ],
        "festivalcontents": null,
        "repPhoto": {
        "descseo": "풍림다방",
        "photoid": {
            "photoid": 6688,
            "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/cdadc90a-1a3d-4ae7-bc49-34ee301c5d9b.jpg",
            "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201804/30/8f04af00-99ba-4cc4-a905-fa17545f824c.jpg"
        }
        },
        "PHOTOSHARECOUNT": 23,
        "reservelink": null
    },
    {
        "alltag": "라면 ,국수,비빔국수,공용주차장,현금결제,카드결제,화장실,음료대,유도 및 안내시설,경보 및 피난시설",
        "contentsid": "CNTS_000000000020026",
        "contentscd": {
        "value": "c4",
        "label": "음식점",
        "refId": "contentscd>c4"
        },
        "title": "고래라면",
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
        "address": "제주특별자치도 서귀포시 성산읍 삼달리 270-4",
        "roadaddress": "제주특별자치도 서귀포시 성산읍 삼달로 104",
        "tag": "라면,국수,비빔국수,음식,해물라면,문어라면",
        "introduction": "라면과 해물의 만남, 문어라면",
        "readcnt": 14936,
        "likecnt": 7,
        "reviewcnt": 16,
        "markcnt": 175,
        "snssharecnt": 7,
        "schedulecnt": 0,
        "visitcnt": 0,
        "evelpt": 5,
        "latitude": 33.37195,
        "longitude": 126.85841,
        "postcode": "63635",
        "phoneno": "064-782-6685",
        "sbst": "​​​​​​​​\n\r\n\n김영갑갤러리 근처에 위치한 아담한 규모의 식당으로, 라면과 국수 종류를 전문으로 판매한다. 외관과 내부가 심플하고 소박한 분위기를 가지고 있다. 고래라면의 대표 메뉴는 오동통하고 싱싱한 문어가 들어가 있는 문어라면이다. 2인분 이상 주문 시 문어 한 마리를 통째로 넣어 주기도 한다. 라면에는 제주도산 해물이 푸짐하게 들어가서 얼큰하고 시원한 국물 맛을 자랑한다. 이외에도 새콤달콤한 문어비빔국수, 부드러운 식감의 성게국수와 성게라면이 있다.\n\n버스를 타고 가려면 제주국제공항에서 120-1 버스를 타고 성읍농협 앞 정류장에서 731-2번으로 환승, 김영갑갤러리두모악 정류장에서 내려 약 2분을 걸어가면 된다. 인근 명소로는 신천목장, 표선해비치, 신천리 벽화마을 등이 있다.\n\n\n\r\n\r\n​\n​​​​​​​​​\n​​​​​​​​",
        "created": "20161101141438",
        "changed": "20220729133155",
        "catemappList": [
        {
            "seq": 667,
            "contentsid": {
            "value": "CNTS_000000000020026",
            "label": "고래라면",
            "refId": "CNTS_000000000020026"
            },
            "cate1cd": {
            "value": "cate0000000005",
            "label": "음식점",
            "refId": "contscate>cate0000000005"
            },
            "cate2cd": {
            "value": "cate0000001266",
            "label": "한식",
            "refId": "cate0000000005>cate0000001266"
            },
            "cate3cd": {
            "value": "cate0000001310",
            "label": "한식",
            "refId": "cate0000001266>cate0000001310"
            },
            "created": "20180410182929"
        },
        {
            "seq": 8316,
            "contentsid": {
            "value": "CNTS_000000000020026",
            "label": "고래라면",
            "refId": "CNTS_000000000020026"
            },
            "cate1cd": {
            "value": "cate0000000005",
            "label": "음식점",
            "refId": "contscate>cate0000000005"
            },
            "cate2cd": {
            "value": "cate0000001266",
            "label": "한식",
            "refId": "cate0000000005>cate0000001266"
            },
            "cate3cd": {
            "value": "cate0000001310",
            "label": "한식",
            "refId": "cate0000001266>cate0000001310"
            },
            "created": "20181030144842"
        },
        {
            "seq": 8339,
            "contentsid": {
            "value": "CNTS_000000000020026",
            "label": "고래라면",
            "refId": "CNTS_000000000020026"
            },
            "cate1cd": {
            "value": "cate0000000005",
            "label": "음식점",
            "refId": "contscate>cate0000000005"
            },
            "cate2cd": {
            "value": "cate0000001266",
            "label": "한식",
            "refId": "cate0000000005>cate0000001266"
            },
            "cate3cd": {
            "value": "cate0000001310",
            "label": "한식",
            "refId": "cate0000001266>cate0000001310"
            },
            "created": "20181030163924"
        }
        ],
        "festivalcontents": null,
        "repPhoto": {
        "descseo": "고래라면",
        "photoid": {
            "photoid": 2018052307868,
            "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201810/30/e79ebbdc-ab46-4260-898b-14ede1e8906b.jpg",
            "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201810/30/4ec7cfc8-2dcb-441a-8fdd-fb681658a6a5.jpg"
        }
        },
        "PHOTOSHARECOUNT": 19,
        "reservelink": null
    },
    {
        "alltag": "카페,크림라떼,케이크,음료,공용주차장,현금결제,카드결제,화장실",
        "contentsid": "CNTS_000000000020064",
        "contentscd": {
        "value": "c4",
        "label": "음식점",
        "refId": "contentscd>c4"
        },
        "title": "블랑로쉐",
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
        "address": "제주특별자치도 제주시 우도면 연평리 712-1",
        "roadaddress": "제주특별자치도 제주시 우도면 우도해안길 783",
        "tag": "카페,크림라떼,케이크,음료,음식,아이스크림,아메리카노,우도",
        "introduction": "우도 하고수동 해변이 보이는 전망 좋은 카페",
        "readcnt": 6997,
        "likecnt": 4,
        "reviewcnt": 16,
        "markcnt": 57,
        "snssharecnt": 6,
        "schedulecnt": 0,
        "visitcnt": 0,
        "evelpt": 5,
        "latitude": 33.515686,
        "longitude": 126.958084,
        "postcode": null,
        "phoneno": "064-782-9154",
        "sbst": "우도 하고수동 해변가에 위치한 카페다. 안에서 파랗게 빛나는 하고수동 해변을 볼 수 있다.\n날이 좋으면 전면이 창으로된 한쪽 벽을 오픈해 시원한 바닷바람을 만끽하며 휴식을 취할 수 있다.\n상큼한 에이드와 여러 음료를 파는데 그중에서도 우도땅콩으로 만든 빙수와 크림라떼가 대표메뉴다.\n땅콩치즈케이크와 제주말차티라미슈 등 지역의 특산품을 녹여낸 다양한 메뉴도 만나볼 수 있다.\n화이트 톤의 실내와 테라스 등의 전경이 예뻐 사진찍기 좋은 곳으로도 알려졌다.",
        "created": "20161104160557",
        "changed": "20220729131535",
        "catemappList": [
        {
            "seq": 26539,
            "contentsid": {
            "value": "CNTS_000000000020064",
            "label": "블랑로쉐",
            "refId": "CNTS_000000000020064"
            },
            "cate1cd": {
            "value": "cate0000000005",
            "label": "음식점",
            "refId": "contscate>cate0000000005"
            },
            "cate2cd": {
            "value": "cate0000001272",
            "label": "카페",
            "refId": "cate0000000005>cate0000001272"
            },
            "cate3cd": {
            "value": "cate0000001315",
            "label": "카페",
            "refId": "cate0000001272>cate0000001315"
            },
            "created": "20211025111429"
        }
        ],
        "festivalcontents": null,
        "repPhoto": {
        "descseo": "블랑로쉐",
        "photoid": {
            "photoid": 7267,
            "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/9607a7be-2bdb-40f1-a872-2d727b8fd65e.jpg",
            "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201804/30/a88cec73-f0e8-4499-ba5b-d8265be18932.jpg"
        }
        },
        "PHOTOSHARECOUNT": 24,
        "reservelink": null
    },
    {
        "alltag": "짬뽕,피자,땅콩아이스크림",
        "contentsid": "CNTS_000000000018630",
        "contentscd": {
        "value": "c4",
        "label": "음식점",
        "refId": "contentscd>c4"
        },
        "title": "섬소나이",
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
        "address": "제주특별자치도 제주시 우도면 연평리 1290-6",
        "roadaddress": "제주특별자치도 제주시 우도면 우도해안길 814",
        "tag": "짬뽕,피자,땅콩아이스크림,음식,해물짬뽕,크림파스타,아이스크림",
        "introduction": "하고수동해수욕장 정류장 바로 앞에 위치, 대표메뉴는 짬뽕과 피자.",
        "readcnt": 12240,
        "likecnt": 14,
        "reviewcnt": 16,
        "markcnt": 62,
        "snssharecnt": 6,
        "schedulecnt": 0,
        "visitcnt": 0,
        "evelpt": 5,
        "latitude": 33.5131507,
        "longitude": 126.9579066,
        "postcode": "63365",
        "phoneno": "064-784-2918",
        "sbst": "​​우도에 위치한 섬소나이는 짬뽕과 피자를 즐길 수 있는 작고 예쁜 식당이다. 메뉴는 간단하다. 짬뽕 세 종류와 피자 두 종류 총 다섯가지다. 이 집 짬뽕 맛의 비결은 한약재 등 10가지 이상의 재료를 사용하여 12시간 동안 푹 끓여낸 육수에서 나온다. 톳을 사용해 면을 만들고 모자반(몸)을 넣어 우도의 맛을 살렸다. 면은 매일 직접 뽑아내고 당일생산 당일소모를 원칙으로 삼는다. 신선하게 내기 위해 주문을 받은 후 한 그릇씩 조리하니 정성이 이만저만이 아니다. 주문 즉시 한 그릇씩 조리를 하기 때문에 대기시간이 좀 있을 수도 있다.\n\n\n\n​\n​​​​​​​짬뽕 중 기본은 우짬인데 빨간 국물의 얼큰한 맛이 일품이다. 불 맛 가득한 풍미가 있고 매운 맛은 강도 조절이 가능하다. 땡짬은 해산물 맛을 살린 개운하고 시원한 맑은 짬뽕이다. 백짬은 크림짬뽕이며 하얀 국물을 기대하면 된다. 여기엔 우도 땅콩이 들어가 매콤하면서도 고소하다. 매콤한 맛이 싫다면 주문 시 이야기 하면 조절해 준다.\n\n피자도우에도 톳이 들어가는 것이 특징이다. 소섬피자엔 토마토와 파인애플이 들어가며 자연산 치즈와 고소한 우도땅콩이 들어가 맛을 더했다. 도새기 피자엔 베이컨과 양파, 어린잎 채소가 들어갔다. 시원한 맥주를 곁들여 가며 우도의 느긋한 여유를 누리기 좋은 공간이다.\n\n파이프를 활용한 모던하면서 인더스트리얼한 인테리어가 독특한 감성을 자아낸다.&nbsp;도의 낭만을 느낄 수 있는 감성 맛집, 섬소나이의 최고 인기자리는 바다를 바라 볼 수 있는 창가자리다. 배가 안 들어오는 날은 휴무다.&nbsp;​​​​​​​​\n​",
        "created": "20161011133904",
        "changed": "20220729130957",
        "catemappList": [
        {
            "seq": 20656,
            "contentsid": {
            "value": "CNTS_000000000018630",
            "label": "섬소나이",
            "refId": "CNTS_000000000018630"
            },
            "cate1cd": {
            "value": "cate0000000005",
            "label": "음식점",
            "refId": "contscate>cate0000000005"
            },
            "cate2cd": {
            "value": "cate0000001267",
            "label": "양식",
            "refId": "cate0000000005>cate0000001267"
            },
            "cate3cd": {
            "value": "cate0000001311",
            "label": "양식",
            "refId": "cate0000001267>cate0000001311"
            },
            "created": "20191104162447"
        },
        {
            "seq": 20657,
            "contentsid": {
            "value": "CNTS_000000000018630",
            "label": "섬소나이",
            "refId": "CNTS_000000000018630"
            },
            "cate1cd": {
            "value": "cate0000000005",
            "label": "음식점",
            "refId": "contscate>cate0000000005"
            },
            "cate2cd": {
            "value": "cate0000001273",
            "label": "고메위크선정맛집",
            "refId": "cate0000000005>cate0000001273"
            },
            "cate3cd": {
            "value": "cate0000001316",
            "label": "고메위크선정맛집",
            "refId": "cate0000001273>cate0000001316"
            },
            "created": "20191104162447"
        }
        ],
        "festivalcontents": null,
        "repPhoto": {
        "descseo": "섬소나이",
        "photoid": {
            "photoid": 2019022588417,
            "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/202111/11/7a8f197f-e23b-43f9-b3e7-ecbcdc74cb8c.jpg",
            "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/202111/11/7d28076c-fabb-43a5-85f5-a2952f3ac810.jpg"
        }
        },
        "PHOTOSHARECOUNT": 5,
        "reservelink": null
    },
    {
        "alltag": "수제버거,햄버거,돈가스,해물짬뽕,공용주차장,현금결제,카드결제,화장실,아주 어려움",
        "contentsid": "CNTS_000000000018364",
        "contentscd": {
        "value": "c4",
        "label": "음식점",
        "refId": "contentscd>c4"
        },
        "title": "요리하는 목수",
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
        "address": "제주특별자치도 제주시 애월읍 구엄리 1229-4",
        "roadaddress": "제주특별자치도 제주시 애월읍 애월해안로 664",
        "tag": "수제버거,햄버거,돈가스,해물짬뽕,음식",
        "introduction": "30cm 높이의 19단 수제 햄버거와 해물짬뽕을 함께 즐길 수 있는 곳",
        "readcnt": 13871,
        "likecnt": 1,
        "reviewcnt": 16,
        "markcnt": 102,
        "snssharecnt": 1,
        "schedulecnt": 0,
        "visitcnt": 0,
        "evelpt": 4,
        "latitude": 33.480564,
        "longitude": 126.37354,
        "postcode": "63049",
        "phoneno": "070-8900-2155",
        "sbst": "'요리하는 목수'는 애월의 아름다운 해안이 한눈에 보이는 곳에 위치하고 있다. 사장님의 직업이 실제로 목수이기 때문에 요리하는 목수라는 이름이 붙었다.\n\n'미친목수버거'라는 이름의 19단 수제 햄버거가 대표 메뉴인데, 햄버거 빵 사이에 베이컨, 토마토, 양상추, 파인애플, 치즈, 감자, 양파 등이 차곡차곡 쌓여 있으며, 긴 꼬챙이 2개가 30cm 높이의 햄버거를 쓰러지지 않게 지탱해준다. 꼬챙이를 뺀 뒤에 한 칸씩 나누어서 먹을 수 있는데, 직원에게 도움을 요청하는 것도 가능하다. 햄버거 외의 안심 돈가스와 해물짬뽕 또한 함께 즐길 수 있다.",
        "created": "20161006154031",
        "changed": "20220729112618",
        "catemappList": [
        {
            "seq": 20750,
            "contentsid": {
            "value": "CNTS_000000000018364",
            "label": "요리하는 목수",
            "refId": "CNTS_000000000018364"
            },
            "cate1cd": {
            "value": "cate0000000005",
            "label": "음식점",
            "refId": "contscate>cate0000000005"
            },
            "cate2cd": {
            "value": "cate0000001267",
            "label": "양식",
            "refId": "cate0000000005>cate0000001267"
            },
            "cate3cd": {
            "value": "cate0000001311",
            "label": "양식",
            "refId": "cate0000001267>cate0000001311"
            },
            "created": "20191107100357"
        }
        ],
        "festivalcontents": null,
        "repPhoto": {
        "descseo": "요리하는 목수",
        "photoid": {
            "photoid": 2355,
            "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/8ec85c58-7868-4268-9363-3b8923befb49.jpg",
            "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201804/30/c8d923f0-5584-4b3e-a443-293067260fb3.jpg"
        }
        },
        "PHOTOSHARECOUNT": 22,
        "reservelink": null
    },
    {
        "alltag": "우럭,우럭조림,우럭매운탕,음식,횔어우럭매운탕,공용주차장,현금결제,카드결제,화장실,무료 WIFI,음료대",
        "contentsid": "CNTS_000000000020143",
        "contentscd": {
        "value": "c4",
        "label": "음식점",
        "refId": "contentscd>c4"
        },
        "title": "고집돌우럭(제주공항점)",
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
        "address": "제주특별자치도 제주시 건입동 1319-124",
        "roadaddress": "제주특별자치도 제주시 임항로 30",
        "tag": "우럭,우럭조림,우럭매운탕,음식,횔어우럭매운탕",
        "introduction": "오직 제주도에서만 먹을 수 있는 탱글탱글한 돌우럭 조림",
        "readcnt": 20162,
        "likecnt": 13,
        "reviewcnt": 15,
        "markcnt": 159,
        "snssharecnt": 15,
        "schedulecnt": 0,
        "visitcnt": 0,
        "evelpt": 4,
        "latitude": 33.5163432,
        "longitude": 126.5281752,
        "postcode": null,
        "phoneno": " 0507-1436-1008",
        "sbst": "고집돌우럭은 주낙배를 직접 운영하여 싱싱한 자연산 돌우럭을 공급하며, 김승년 해녀가 속한 서귀포 위미리 어촌계와 독점계약을 맺어 가장 신선한 해산물을 공급받고 있다. 또한 아무리 고생스러워도 갓 지어낸 밥을 손님에게 대접하는 것이 식당의 기본이라 여겨, 밥맛에 심혈을 기울이고 있다고 한다. 음식을 담는 그릇, 매장의 인테리어까지도 모두 제주가 묻어나는 곳이다.",
        "created": "20161110141310",
        "changed": "20220729104525",
        "catemappList": [
        {
            "seq": 31619,
            "contentsid": {
            "value": "CNTS_000000000020143",
            "label": "고집돌우럭(제주공항점)",
            "refId": "CNTS_000000000020143"
            },
            "cate1cd": {
            "value": "cate0000000005",
            "label": "음식점",
            "refId": "contscate>cate0000000005"
            },
            "cate2cd": {
            "value": "cate0000001266",
            "label": "한식",
            "refId": "cate0000000005>cate0000001266"
            },
            "cate3cd": {
            "value": "cate0000001310",
            "label": "한식",
            "refId": "cate0000001266>cate0000001310"
            },
            "created": "20220720154654"
        }
        ],
        "festivalcontents": null,
        "repPhoto": {
        "descseo": "고집돌우럭(제주공항점)",
        "photoid": {
            "photoid": 7568,
            "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/42361676-13c9-4879-a072-c219d06599c6.jpg",
            "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201804/30/67750d76-be1e-48e0-8ddf-72ac37ef78e1.jpg"
        }
        },
        "PHOTOSHARECOUNT": 5,
        "reservelink": null
    },
    {
        "alltag": "덮밥,톳밥,돌문어,공용주차장,현금결제,카드결제,화장실,무료 WIFI,음료대",
        "contentsid": "CNTS_000000000020150",
        "contentscd": {
        "value": "c4",
        "label": "음식점",
        "refId": "contentscd>c4"
        },
        "title": "벵디",
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
        "address": "제주특별자치도 제주시 구좌읍 평대리 2031-2",
        "roadaddress": "제주특별자치도 제주시 구좌읍 해맞이해안로 1108",
        "tag": "덮밥,톳밥,돌문어,음식,물회,문어물회,돈까스,치즈돈까스",
        "introduction": "돌문어 한마리가 통째로 들어간 덮밥이 유명한 평대리의 맛집",
        "readcnt": 17884,
        "likecnt": 4,
        "reviewcnt": 15,
        "markcnt": 183,
        "snssharecnt": 18,
        "schedulecnt": 0,
        "visitcnt": 0,
        "evelpt": 4,
        "latitude": 33.53775,
        "longitude": 126.83721,
        "postcode": "63359",
        "phoneno": "070-8899-7824",
        "sbst": "벵디는 구좌읍 평대리에 위치한 맛집이다. ‘벵디’의 의미는 제주도 사투리로 '평평하고 넓은 들판'을 뜻해, 한자로 풀이하면 평대리가 된다. 방송 '테이스티 로드'에 소개되어 유명해진 벵디는 돌문어 덮밥과 뿔소라톳밥이 가장 유명하다. 1인당 한 메뉴를 주문해야 하며, 인기 메뉴인 돌문어 덮밥은 2인으로 왔을 경우엔 1명만 주문이 가능하다. 전화예약이 불가하고, 가게 규모가 작아 대기시간이 길다. 준비한 재료가 소진되면 일찍 문을 닫는다.",
        "created": "20161110151425",
        "changed": "20220729131322",
        "catemappList": [
        {
            "seq": 20615,
            "contentsid": {
            "value": "CNTS_000000000020150",
            "label": "벵디",
            "refId": "CNTS_000000000020150"
            },
            "cate1cd": {
            "value": "cate0000000005",
            "label": "음식점",
            "refId": "contscate>cate0000000005"
            },
            "cate2cd": {
            "value": "cate0000001266",
            "label": "한식",
            "refId": "cate0000000005>cate0000001266"
            },
            "cate3cd": {
            "value": "cate0000001310",
            "label": "한식",
            "refId": "cate0000001266>cate0000001310"
            },
            "created": "20191101162338"
        }
        ],
        "festivalcontents": null,
        "repPhoto": {
        "descseo": "벵디",
        "photoid": {
            "photoid": 7616,
            "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/18cf4ab8-9ce0-4acc-847b-3cbdf565e445.jpg",
            "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201804/30/bd90ee5a-140d-49af-b8e6-dde635b0f175.jpg"
        }
        },
        "PHOTOSHARECOUNT": 24,
        "reservelink": null
    },
    {
        "alltag": "커플,혼자,새우,현금결제,아주 어려움",
        "contentsid": "CNTS_000000000018317",
        "contentscd": {
        "value": "c4",
        "label": "음식점",
        "refId": "contentscd>c4"
        },
        "title": "쉬림프박스",
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
        "address": "제주시 구좌읍 평대리 2033-7",
        "roadaddress": "제주시 구좌읍 평대리 2033-7",
        "tag": "커플,혼자,새우,음식,새우버터구이,츄러스",
        "introduction": "하와이안 스타일의 새우 버터구이가 올라간 밥과 수제 츄러스",
        "readcnt": 7903,
        "likecnt": 2,
        "reviewcnt": 15,
        "markcnt": 116,
        "snssharecnt": 0,
        "schedulecnt": 0,
        "visitcnt": 0,
        "evelpt": 4,
        "latitude": 33.499622,
        "longitude": 126.53119,
        "postcode": null,
        "phoneno": "010-4824-0710",
        "sbst": "쉬림프박스의 새우 버터구이는 레몬갈릭과 핫스파이시 두 가지 맛으로 준비되어 있다. 콜라, 스프라이트, 웰치스 등 시원한 탄산음료와 아이스 아메리카노, 생수로 갈증을 해소해보자. 크고 탱글탱글한 새우가 가득한 쉬림프 박스의 새우버터구이 두 메뉴 모두 레몬의 상큼한 맛이 가득 배어 있어 느끼함을 잡아준다. 핫스파이시 새우 버터구이는 맛보면 입안이 제법 얼얼하니 매운맛을 좋아하는 사람에게 추천할 만 하다.",
        "created": "20161006105344",
        "changed": "20220729132622",
        "catemappList": [
        {
            "seq": 26479,
            "contentsid": {
            "value": "CNTS_000000000018317",
            "label": "쉬림프박스",
            "refId": "CNTS_000000000018317"
            },
            "cate1cd": {
            "value": "cate0000000005",
            "label": "음식점",
            "refId": "contscate>cate0000000005"
            },
            "cate2cd": {
            "value": "cate0000001267",
            "label": "양식",
            "refId": "cate0000000005>cate0000001267"
            },
            "cate3cd": {
            "value": "cate0000001311",
            "label": "양식",
            "refId": "cate0000001267>cate0000001311"
            },
            "created": "20211022110039"
        }
        ],
        "festivalcontents": null,
        "repPhoto": {
        "descseo": "쉬림프박스",
        "photoid": {
            "photoid": 2122,
            "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/fd696818-6245-4c54-8156-c1aecf2f0fb3.jpg",
            "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201804/30/481913b2-88ac-4d3d-8cf5-7e8f8c1fb402.jpg"
        }
        },
        "PHOTOSHARECOUNT": 20,
        "reservelink": null
    },
    {
        "alltag": "아이스크림,토끼아이스크림,카페,공용주차장,현금결제,편의점,음료대,유도 및 안내시설",
        "contentsid": "CNTS_000000000020297",
        "contentscd": {
        "value": "c4",
        "label": "음식점",
        "refId": "contentscd>c4"
        },
        "title": "치치퐁",
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
        "address": "제주특별자치도 서귀포시 안덕면 사계리 171-4",
        "roadaddress": "제주특별자치도 서귀포시 안덕면 사계남로216번길 24-62",
        "tag": "아이스크림,토끼아이스크림,카페,음식,디저트",
        "introduction": "제주 산방산 근처에서 즐기는 귀엽고 핫한 토끼 모양의 아이스크림 디저트",
        "readcnt": 8849,
        "likecnt": 5,
        "reviewcnt": 15,
        "markcnt": 90,
        "snssharecnt": 3,
        "schedulecnt": 0,
        "visitcnt": 0,
        "evelpt": 4,
        "latitude": 33.235268,
        "longitude": 126.313446,
        "postcode": "63528",
        "phoneno": "010-9536-1322",
        "sbst": "핫 핑크와 인형으로 가득했던 상점의 내부와 아기자기한 화분으로 만들어 놓은 입구 테라스에는 항상 사진을 찍으려는 관광객으로 가득하다.\n저마다 손에 하나씩 가지고 있는 토끼 모양의 아이스크림이 항상 사진 속의 주인공이 된다.\n\n아이스크림은 월넛(호두)딸기, 초콜릿 크게 세가지 맛으로 판매되는데 그 날 수요에 따라서 빨리 소모되는 종류도 있다.\n아이스크림은 토끼의 얼굴, 초코콘 모양의 과자가 토끼의 두 귀가 된다.\n마지막으로 초콜렛, 스프링클 캔디 등으로 눈, 코, 입이 완성된다.\n\n현금 거래만 가능하다.",
        "created": "20161117143159",
        "changed": "20220729085411",
        "catemappList": [
        {
            "seq": 26828,
            "contentsid": {
            "value": "CNTS_000000000020297",
            "label": "치치퐁",
            "refId": "CNTS_000000000020297"
            },
            "cate1cd": {
            "value": "cate0000000005",
            "label": "음식점",
            "refId": "contscate>cate0000000005"
            },
            "cate2cd": {
            "value": "cate0000001272",
            "label": "카페",
            "refId": "cate0000000005>cate0000001272"
            },
            "cate3cd": {
            "value": "cate0000001315",
            "label": "카페",
            "refId": "cate0000001272>cate0000001315"
            },
            "created": "20211101131411"
        }
        ],
        "festivalcontents": null,
        "repPhoto": {
        "descseo": "치치퐁",
        "photoid": {
            "photoid": 2019022586015,
            "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/202111/01/6cf25f59-00f5-46cc-bd06-9e0e7e9ef3f6.jpg",
            "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/202111/01/776aa763-9061-4751-9f30-9f263f2f68e8.jpg"
        }
        },
        "PHOTOSHARECOUNT": 21,
        "reservelink": null
    },
    {
        "alltag": "흑돼지주물럭,한라산볶음밥,한치해물파전,공용주차장,현금결제,카드결제,화장실,무료 WIFI,흡연구역",
        "contentsid": "CNTS_000000000018331",
        "contentscd": {
        "value": "c4",
        "label": "음식점",
        "refId": "contentscd>c4"
        },
        "title": "로뎀가든",
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
        "address": "제주특별자치도 제주시 우도면 연평리 2515",
        "roadaddress": "제주특별자치도 제주시 우도면 우도해안길 264",
        "tag": "흑돼지주물럭,한라산볶음밥,한치해물파전,음식,한치",
        "introduction": "우도로뎀펜션과 같이 하는 음식점 1층에 위치한 로뎀가든",
        "readcnt": 4840,
        "likecnt": 2,
        "reviewcnt": 13,
        "markcnt": 23,
        "snssharecnt": 1,
        "schedulecnt": 0,
        "visitcnt": 0,
        "evelpt": 4,
        "latitude": 33.50358,
        "longitude": 126.94283,
        "postcode": "63365",
        "phoneno": "064-782-5501",
        "sbst": "흑돼지 주물럭과 한라산볶음밥이 유명하고 스태프가 볶음밥을 만들 때 한라산에 관한 역사 이야기를 재미있게 들려준다. 로뎀가든의 특별함이라면 계절에 따라 한라산볶음밥 위에 올라가는 토핑이 조금씩 다르다는 점!\n",
        "created": "20161006114044",
        "changed": "20220729131703",
        "catemappList": [
        {
            "seq": 26482,
            "contentsid": {
            "value": "CNTS_000000000018331",
            "label": "로뎀가든",
            "refId": "CNTS_000000000018331"
            },
            "cate1cd": {
            "value": "cate0000000005",
            "label": "음식점",
            "refId": "contscate>cate0000000005"
            },
            "cate2cd": {
            "value": "cate0000001266",
            "label": "한식",
            "refId": "cate0000000005>cate0000001266"
            },
            "cate3cd": {
            "value": "cate0000001310",
            "label": "한식",
            "refId": "cate0000001266>cate0000001310"
            },
            "created": "20211022112828"
        }
        ],
        "festivalcontents": null,
        "repPhoto": {
        "descseo": "Rothem Garden",
        "photoid": {
            "photoid": 2155,
            "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/6cae0500-476a-4b7f-bc7a-fb2232efa31d.png",
            "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201804/30/4df17186-b1d6-4b03-ba59-5f0f39908e6e.png"
        }
        },
        "PHOTOSHARECOUNT": 12,
        "reservelink": null
    },
    {
        "alltag": "카페,팬케이크,브런치,공용주차장,무료 WIFI",
        "contentsid": "CNTS_000000000020245",
        "contentscd": {
        "value": "c4",
        "label": "음식점",
        "refId": "contentscd>c4"
        },
        "title": "살롱드라방 SALON de LAVANT",
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
        "address": "제주특별자치도 제주시 애월읍 하가리 1415",
        "roadaddress": "제주특별자치도 제주시 애월읍 하가로 146-9",
        "tag": "카페,팬케이크,브런치,음식,아메리카노,에스프레소,카페라떼,케이크",
        "introduction": "평일에 브런치를 즐기고 싶다면 살롱드라방",
        "readcnt": 6922,
        "likecnt": 7,
        "reviewcnt": 13,
        "markcnt": 72,
        "snssharecnt": 4,
        "schedulecnt": 0,
        "visitcnt": 0,
        "evelpt": 4,
        "latitude": 33.499622,
        "longitude": 126.53119,
        "postcode": "63036",
        "phoneno": "070-7797-3708",
        "sbst": "주말에는 운영을 하지 않기 때문에 방문시 참고해야한다.\n시그니쳐메뉴는 크림치즈애플 토핑 팬케이크이다.\n브런치를 먹기 위해 오픈시간(11:00) 전부터 기다리는 사람들이 종종 있으니 그 전에 미리 주변 정취를 느끼며 느긋하게 기다리는 것도 나쁘지 않다.",
        "created": "20161116152657",
        "changed": "20220729020512",
        "catemappList": [
        {
            "seq": 26538,
            "contentsid": {
            "value": "CNTS_000000000020245",
            "label": "살롱드라방 SALON de LAVANT",
            "refId": "CNTS_000000000020245"
            },
            "cate1cd": {
            "value": "cate0000000005",
            "label": "음식점",
            "refId": "contscate>cate0000000005"
            },
            "cate2cd": {
            "value": "cate0000001272",
            "label": "카페",
            "refId": "cate0000000005>cate0000001272"
            },
            "cate3cd": {
            "value": "cate0000001315",
            "label": "카페",
            "refId": "cate0000001272>cate0000001315"
            },
            "created": "20211025111316"
        }
        ],
        "festivalcontents": null,
        "repPhoto": {
        "descseo": "살롱드라방 SALON de LAVANT",
        "photoid": {
            "photoid": 8033,
            "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/4497e8b9-a673-45ea-be4e-2cff775f9201.jpg",
            "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201804/30/d2b3de9d-dbdf-4583-9632-52406e8c70d8.jpg"
        }
        },
        "PHOTOSHARECOUNT": 20,
        "reservelink": null
    },
    {
        "alltag": "돼지주물럭,한라산볶음밥,한치주물럭,공용주차장,현금결제,카드결제,화장실,흡연구역,편의점",
        "contentsid": "CNTS_000000000018608",
        "contentscd": {
        "value": "c4",
        "label": "음식점",
        "refId": "contentscd>c4"
        },
        "title": "우도 풍원",
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
        "address": "제주특별자치도 제주시 우도면 연평리 2427-1",
        "roadaddress": "제주특별자치도 제주시 우도면 우도해안길 340",
        "tag": "돼지주물럭,한라산볶음밥,한치주물럭,음식,전복죽,한치",
        "introduction": "한치주물럭과 돼지주물럭이 주메뉴인 우도에 위치한 풍원",
        "readcnt": 6131,
        "likecnt": 1,
        "reviewcnt": 13,
        "markcnt": 27,
        "snssharecnt": 2,
        "schedulecnt": 0,
        "visitcnt": 0,
        "evelpt": 4,
        "latitude": 33.50834,
        "longitude": 126.94413,
        "postcode": null,
        "phoneno": "064-784-1894",
        "sbst": "하우목동항 주변에 자리하고 있다. 한치주물럭과 돼지주물럭이 메인이지만 식사 후 먹는 한라산볶음밥으로 명성이 자자한 곳이다.\n한라산볶음밥의 원조로, 한라산과 제주도의 생성 설명을 들으며 식사를 할 수 있다.\n",
        "created": "20161011132536",
        "changed": "20220729130605",
        "catemappList": [
        {
            "seq": 26493,
            "contentsid": {
            "value": "CNTS_000000000018608",
            "label": "우도 풍원",
            "refId": "CNTS_000000000018608"
            },
            "cate1cd": {
            "value": "cate0000000005",
            "label": "음식점",
            "refId": "contscate>cate0000000005"
            },
            "cate2cd": {
            "value": "cate0000001266",
            "label": "한식",
            "refId": "cate0000000005>cate0000001266"
            },
            "cate3cd": {
            "value": "cate0000001310",
            "label": "한식",
            "refId": "cate0000001266>cate0000001310"
            },
            "created": "20211022153121"
        }
        ],
        "festivalcontents": null,
        "repPhoto": {
        "descseo": "Udo Pungwon",
        "photoid": {
            "photoid": 3361,
            "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/a37de9af-1c08-49b6-8fc2-8b41a3137fae.jpg",
            "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201804/30/aa643fb3-d5dd-470b-bd11-ba30174f1a06.jpg"
        }
        },
        "PHOTOSHARECOUNT": 14,
        "reservelink": null
    },

    {
        "alltag": "카페,곡물라떼,보리빵,자몽아이스티",
        "contentsid": "CNTS_000000000018377",
        "contentscd": {
        "value": "c4",
        "label": "음식점",
        "refId": "contentscd>c4"
        },
        "title": "카페세바",
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
        "address": "제주특별자치도 제주시 조천읍 선흘리 1093-1",
        "roadaddress": "제주특별자치도 제주시 조천읍 선흘동2길 20-7",
        "tag": "카페,곡물라떼,보리빵,자몽아이스티,음식,빵,아메리카노,카페라떼,카페모카",
        "introduction": "선흘리 돌집 까페, cafe seba",
        "readcnt": 3640,
        "likecnt": 0,
        "reviewcnt": 13,
        "markcnt": 23,
        "snssharecnt": 0,
        "schedulecnt": 0,
        "visitcnt": 0,
        "evelpt": 4,
        "latitude": 33.513313,
        "longitude": 126.706116,
        "postcode": null,
        "phoneno": "070-4213-1268",
        "sbst": "선흘리 길가에서 카페 세바로 가는 길은 곱다. 옹기종기 모인 낮은 집들 사이에 보이는 돌집 하나. 문을 열고 들어서면 푸른색으로 칠해진 주방과 반대편 끝에 벽의 반을 차지하는 큰 창이 있다. 어디든 자리를 잡고 앉으면 돌집에서 느낄 수 있는 서늘함이 기분 좋게 카페 안의 공기를 감싼다. 높은 천장과 서가에 빼곡히 꽂힌 책을 바라보는 것만으로도 휴가라고 느껴지는 곳이다. 카페 주인이 직접 만든 돌집을 카페로 사용하는 곳으로 메뉴로는 커피, 자몽아이스티, 곡물라떼, 제주 보리빵 등이 있다. 아이스초코가 추천메뉴. 녹음이 가득한 정원이 있으며 매장 내부는 빈티지한 분위기로 채광이 좋은 곳. 주차는 마일진입전 길가에 해야 한다.",
        "created": "20161006161005",
        "changed": "20220729020215",
        "catemappList": [
        {
            "seq": 26487,
            "contentsid": {
            "value": "CNTS_000000000018377",
            "label": "카페세바",
            "refId": "CNTS_000000000018377"
            },
            "cate1cd": {
            "value": "cate0000000005",
            "label": "음식점",
            "refId": "contscate>cate0000000005"
            },
            "cate2cd": {
            "value": "cate0000001272",
            "label": "카페",
            "refId": "cate0000000005>cate0000001272"
            },
            "cate3cd": {
            "value": "cate0000001315",
            "label": "카페",
            "refId": "cate0000001272>cate0000001315"
            },
            "created": "20211022141036"
        }
        ],
        "festivalcontents": null,
        "repPhoto": {
        "descseo": "카페세바",
        "photoid": {
            "photoid": 2416,
            "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/612e8dc0-fcf2-4e9b-9df0-8f974797f95e.jpg",
            "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201804/30/148a6a3f-6c32-450e-9437-c29f164b0628.jpg"
        }
        },
        "PHOTOSHARECOUNT": 18,
        "reservelink": null
    },
    {
        "alltag": "우럭,우럭조림,우럭매운탕,음식,매운탕,횔어우럭매운탕,갈치구이,생선구이정식,공용주차장,현금결제,카드결제,화장실",
        "contentsid": "CNTS_000000000021950",
        "contentscd": {
        "value": "c4",
        "label": "음식점",
        "refId": "contentscd>c4"
        },
        "title": "고집돌우럭(중문)",
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
        "address": "제주특별자치도 서귀포시 색달동 2351",
        "roadaddress": "제주특별자치도 서귀포시 일주서로 879",
        "tag": "우럭,우럭조림,우럭매운탕,음식,매운탕,횔어우럭매운탕,갈치구이,생선구이정식",
        "introduction": "메인메뉴는 탱글탱글 살아있는 식감의 우럭조림",
        "readcnt": 19241,
        "likecnt": 15,
        "reviewcnt": 12,
        "markcnt": 173,
        "snssharecnt": 16,
        "schedulecnt": 0,
        "visitcnt": 1,
        "evelpt": 5,
        "latitude": 33.25799,
        "longitude": 126.41676,
        "postcode": "63534",
        "phoneno": "0507-1408-1540",
        "sbst": "고집돌우럭은 제주공항점과 중문점이 있는데 중문점은 더욱 깔끔하고 세련된 인테리어로 손님을 맞으며 중문관광단지 입구에 위치하여 가까운 관광지 방문시 이동이 편리하다. 고집돌우럭은 주낙배를 직접 운영하여 싱싱한 돌우럭을 공급하며 위미리 어촌계와 독점계약을 맺어 가장 신선한 해산물을 공급 받고 있다. 아침식사가 가능해서 숙소가 근처라면 여행길에 오르기 전 이곳에서 든든하게 속부터 채우는 것도 나쁘지 않다.",
        "created": "20170523091718",
        "changed": "20220729111841",
        "catemappList": [
        {
            "seq": 31618,
            "contentsid": {
            "value": "CNTS_000000000021950",
            "label": "고집돌우럭(중문)",
            "refId": "CNTS_000000000021950"
            },
            "cate1cd": {
            "value": "cate0000000005",
            "label": "음식점",
            "refId": "contscate>cate0000000005"
            },
            "cate2cd": {
            "value": "cate0000001266",
            "label": "한식",
            "refId": "cate0000000005>cate0000001266"
            },
            "cate3cd": {
            "value": "cate0000001310",
            "label": "한식",
            "refId": "cate0000001266>cate0000001310"
            },
            "created": "20220720154555"
        }
        ],
        "festivalcontents": null,
        "repPhoto": {
        "descseo": "고집돌우럭(중문)",
        "photoid": {
            "photoid": 12141,
            "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/4c7cb04a-1511-4342-88c4-f4e94e63183b.jpg",
            "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201804/30/0182741b-8637-4e4a-bd31-7ed8b1bcce98.jpg"
        }
        },
        "PHOTOSHARECOUNT": 9,
        "reservelink": null
    },
    {
        "alltag": "고기국수,보말칼국수,수육,향토음식,한식,공용주차장,현금결제,카드결제,화장실,무료 WIFI,흡연구역,음료대,유도 및 안내시설,경보 및 피난시설,아주 어려움,착한가격 업소",
        "contentsid": "CONT_000000000501172",
        "contentscd": {
        "value": "c4",
        "label": "음식점",
        "refId": "contentscd>c4"
        },
        "title": "국수의전설",
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
        "address": "제주특별자치도 서귀포시 신효동 772",
        "roadaddress": "제주특별자치도 서귀포시 효돈로 108",
        "tag": "고기국수,보말칼국수,수육,향토음식,한식,음식,비빔국수,돔베고기,보말죽,칼국수",
        "introduction": "담백한 고기국수와 새콤달콤한 비빔국수뿐만 아니라 다양한 국수의 진수를 느낄 수 있는 곳",
        "readcnt": 17936,
        "likecnt": 11,
        "reviewcnt": 12,
        "markcnt": 161,
        "snssharecnt": 10,
        "schedulecnt": 0,
        "visitcnt": 3,
        "evelpt": 5,
        "latitude": 33.26347,
        "longitude": 126.61043,
        "postcode": null,
        "phoneno": "064-733-7101",
        "sbst": "서귀포시 신효동에 위치한 국수 전문점이다. 가슴속까지 따뜻해지는 사골육수의 깊은 맛을 느끼고 싶다면 국수의 전설로 향하자. \n고기국수, 보말칼국수, 비빔국수 전문이며 조미료 대신 토판염만을 사용한다. 김치 리필은 무제한이다. 비빔국수나 고기국수에 도톰한 수육을 올려 먹으면 정말 맛있다. \n국수 한 그릇만으로도 사람들을 행복하게 하고, 최고의 명품 국수집이 되도록 끊임없이 연구하는 식당이다.\n\n메뉴는 다음과 같다. 돼지고기 사골을 24시간 고아 만든 국물에 편육을 얹은 향토음식 고기국수와, \n활전복, 보말, 매생이 등이 채소와 어우러져 시원한 국물맛이 일품인 전설칼국수는 꼭 먹어봐야 하는 메뉴들이다. \n그 외에 바닷가에서 잡아온 보말을 삶아 각종 해물과 함께 끓여 바다 내음이 물씬 풍기는 보말칼국수, 타우린이 듬뿍 들어있는 문어와 새콤달콤한 양념이 들어간 문어비빔국수가 있다. \n고소하고 향긋한 성게알을 양껏 즐기고 싶다면 성게칼국수를 추천한다.",
        "created": "20160530111636",
        "changed": "20220729110959",
        "catemappList": [
        {
            "seq": 19958,
            "contentsid": {
            "value": "CONT_000000000501172",
            "label": "국수의전설",
            "refId": "CONT_000000000501172"
            },
            "cate1cd": {
            "value": "cate0000000005",
            "label": "음식점",
            "refId": "contscate>cate0000000005"
            },
            "cate2cd": {
            "value": "cate0000001265",
            "label": "향토음식",
            "refId": "cate0000000005>cate0000001265"
            },
            "cate3cd": {
            "value": "cate0000001280",
            "label": "향토음식",
            "refId": "cate0000001265>cate0000001280"
            },
            "created": "20191011134522"
        }
        ],
        "festivalcontents": null,
        "repPhoto": {
        "descseo": "Guksuui Jeonseol",
        "photoid": {
            "photoid": 24237,
            "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/af071ce8-b320-4dfe-9939-500b74f4d672.jpg",
            "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201804/30/d2d25247-94ef-483d-85dc-abf7cc8f0693.jpg"
        }
        },
        "PHOTOSHARECOUNT": 8,
        "reservelink": null
    },
    {
        "alltag": "한식,갈치조림,고등어조림,공용주차장,현금결제,화장실,음료대,유도 및 안내시설,경보 및 피난시설",
        "contentsid": "CNTS_000000000020853",
        "contentscd": {
        "value": "c4",
        "label": "음식점",
        "refId": "contentscd>c4"
        },
        "title": "맛나식당",
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
        "address": "제주특별자치도 서귀포시 성산읍 고성리 316-1",
        "roadaddress": "제주특별자치도 서귀포시 성산읍 동류암로 43",
        "tag": "한식,갈치조림,고등어조림,음식,갈치,제주갈치조림,고등어,고등어구이,막걸리",
        "introduction": "갈치조림이 유명한 성산일출봉 근처 맛집",
        "readcnt": 13529,
        "likecnt": 5,
        "reviewcnt": 12,
        "markcnt": 155,
        "snssharecnt": 4,
        "schedulecnt": 0,
        "visitcnt": 0,
        "evelpt": 4,
        "latitude": 33.44859,
        "longitude": 126.91591,
        "postcode": "63640",
        "phoneno": "064-782-4771",
        "sbst": "​\r\n​​\r\n\r\n\r\n\r\n성산일출봉 근처 맛집으로 메뉴는 갈치, 고등어조림 두 가지가 전부이며 두 메뉴를 섞어서 주문 가능하다. 더 많은 손님을 들이려 서두르지 않고 먼저 오신 손님들에게 맛있는 음식을 제공하기 위해 힘써서 손님들의 만족도가 높다. 생선을 배부르게 먹고 싶다면 추천할 만한 곳이다. 아침 8시 30분에 영업을 시작해 재료가 소진되면 영업을 조기마감할 수 있다. 식사시간에 방문하면 대기시간이 꽤 길어서 이 점을 염두하면 좋겠다. 주말에는 오후 2시경에 영업이 종료되기도 한다.\r\n\r\n\r\n​​",
        "created": "20161206113404",
        "changed": "20220729130117",
        "catemappList": [
        {
            "seq": 26537,
            "contentsid": {
            "value": "CNTS_000000000020853",
            "label": "맛나식당",
            "refId": "CNTS_000000000020853"
            },
            "cate1cd": {
            "value": "cate0000000005",
            "label": "음식점",
            "refId": "contscate>cate0000000005"
            },
            "cate2cd": {
            "value": "cate0000001266",
            "label": "한식",
            "refId": "cate0000000005>cate0000001266"
            },
            "cate3cd": {
            "value": "cate0000001310",
            "label": "한식",
            "refId": "cate0000001266>cate0000001310"
            },
            "created": "20211025111027"
        }
        ],
        "festivalcontents": null,
        "repPhoto": {
        "descseo": "맛나식당",
        "photoid": {
            "photoid": 9992,
            "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/8231d26f-9054-4514-93d3-bf322c5075f0.jpg",
            "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201804/30/f516b4ef-5682-4314-9412-c8b31b70840f.jpg"
        }
        },
        "PHOTOSHARECOUNT": 9,
        "reservelink": null
    },
    {
        "alltag": "카페,커피,주스,케이크,당근,공용주차장,현금결제,카드결제,화장실,무료 WIFI,아주 어려움",
        "contentsid": "CNTS_000000000020188",
        "contentscd": {
        "value": "c4",
        "label": "음식점",
        "refId": "contentscd>c4"
        },
        "title": "비어라운드(Be around)",
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
        "address": "제주특별자치도 제주시 구좌읍 하도리 907",
        "roadaddress": "제주특별자치도 제주시 구좌읍 하도9길 72",
        "tag": "카페,커피,주스,케이크,당근,음식,티라미수,디저트,빵,아메리카노,에스프레소,카푸치노,카페라떼",
        "introduction": "동쪽 마을 하도리 당근 밭 한 가운데 위치한 비어라운드 카페",
        "readcnt": 3693,
        "likecnt": 3,
        "reviewcnt": 12,
        "markcnt": 19,
        "snssharecnt": 2,
        "schedulecnt": 0,
        "visitcnt": 0,
        "evelpt": 5,
        "latitude": 33.511555,
        "longitude": 126.89074,
        "postcode": "63363",
        "phoneno": "064-784-8216",
        "sbst": "오가닉 팜 카페 컨셉의 ‘Be around’, 카페 밖과 안의 감각적인 디자인에 아름아름 제주도의 핫플레이스로 떠오르고 있다.\n싱싱한 구좌당근으로 만든 당근케잌과 당근쥬스가 인기메뉴인데, \n실내의 넓은 창으로 내려다 보이는 당근밭을 보며 더욱 생동감 있게 혀에 와닿는 구좌당근 쥬스를 맛볼 수 있다. \n카페 내부는 복층으로 되어 있어 방문객의 다양한 취향을 만족시킨다.​​​​​",
        "created": "20161115112259",
        "changed": "20220729103121",
        "catemappList": [
        {
            "seq": 26494,
            "contentsid": {
            "value": "CNTS_000000000020188",
            "label": "비어라운드(Be around)",
            "refId": "CNTS_000000000020188"
            },
            "cate1cd": {
            "value": "cate0000000005",
            "label": "음식점",
            "refId": "contscate>cate0000000005"
            },
            "cate2cd": {
            "value": "cate0000001272",
            "label": "카페",
            "refId": "cate0000000005>cate0000001272"
            },
            "cate3cd": {
            "value": "cate0000001315",
            "label": "카페",
            "refId": "cate0000001272>cate0000001315"
            },
            "created": "20211022153947"
        }
        ],
        "festivalcontents": null,
        "repPhoto": {
        "descseo": "비어라운드(Be around)",
        "photoid": {
            "photoid": 7769,
            "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/739b2259-d907-4ac1-9a61-6bd0b31e4874.jpg",
            "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201804/30/2b73d74a-ae25-4112-8adb-9069356dfaef.jpg"
        }
        },
        "PHOTOSHARECOUNT": 23,
        "reservelink": null
    },
    {
        "alltag": "밀냉면,비빔밀냉면,수육,한식,향토음식,공용주차장,현금결제,카드결제,화장실,무료 WIFI,흡연구역,음료대,유도 및 안내시설,경보 및 피난시설,아주 어려움",
        "contentsid": "CONT_000000000501267",
        "contentscd": {
        "value": "c4",
        "label": "음식점",
        "refId": "contentscd>c4"
        },
        "title": "산방식당(모슬포본점)",
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
        "address": "제주특별자치도 서귀포시 대정읍 하모리 864-3",
        "roadaddress": "제주특별자치도 서귀포시 대정읍 하모이삼로 62",
        "tag": "밀냉면,비빔밀냉면,수육,한식,향토음식,음식,냉면",
        "introduction": "제주식 밀면과 수육 모두 맛있기로 소문난 곳, 2016 KOREAT JEJU TOP10 선정",
        "readcnt": 12727,
        "likecnt": 6,
        "reviewcnt": 12,
        "markcnt": 271,
        "snssharecnt": 5,
        "schedulecnt": 0,
        "visitcnt": 0,
        "evelpt": 4,
        "latitude": 33.223396,
        "longitude": 126.2543,
        "postcode": "63508",
        "phoneno": "064-794-2165",
        "sbst": "부산의 향토 음식 밀면을 제주식으로 풀어낸 집이다. 메뉴는 단 세 가지. 밀냉면과 비빔밀냉면, 그리고 수육이다.제주식 밀면의 특징은 첫 째, 부산의 그것보다 간이 삼삼하다는 것이다. \n소면이 아닌 중면을 사용한다는 것 또한 다른 점이다. 면은 가게에서 직접 반죽하고 뽑아 신선하고 쫄깃하다. 여기에 산방식당은 육수에서도 차별점을&nbsp;더했다. 고기 육수가 아닌 멸치 육수를 사용한 것이다. 식감을 살린 면에 시원한 얼음 육수를 붓는 물냉면 뿐만 아니라, 비빔냉면&nbsp;또한 겨울철에에는 면을 담가 먹을 수 있도록 따뜻한 육수가 함께 나와 맛을 더한다.\n양은 두 종류로 나눠져 있다. 1인분인 小자와 곱배기인 大자다. 둘의 차이가 단돈 천원 밖에 되지 않아 여럿이 왔을 경우 더욱 경제적인 주문 구성이 가능하다는 것도 장점이다. 수육 또한 제주돼지의 뒷다리를 사용해 직접 삶아 내는데, 냄새 없이 야들야들한 맛이 일품이다.&nbsp;수육은 국수에 얹어 나오기도 하지만, 단품으로도 꼭 주문해 볼 것을 추천한다. 산방식당의 수육은 입에 들어가면 살살 녹아 없어지는 오묘한 음식이다.\n제주의 수육은 보통 된장에 찍어먹기 마련이지만 여기는 겨자와 특제 고추장으로 대신하는데, 소스 맛이 특별하여 한 방울까지 닦아 먹게 된다. 그리고 밀면과 수육이 빚어내는 맛에 맘속 깊이서부터 감탄이 일렁이는 순간, 제주 막걸리를 주문하면 된다.\n제주도민에게도 인기가 많거니와 산방산과 올레길 코스, 운진항 등과도 가까워서 개점과 동시에 관광객들도 잔뜩 몰리곤 한다. 특히 여름에는 점심시간 전후로 한 시간 이상 기다려야 하는 일이 빈번하니 여유를 갖고 찾아가는 편이 좋다. 바로 옆에 공영주차장이 있어 주차가 편리한 점이 장점이다. 인기에 힘입어 2012년에는 제주점도 개점했다.\n\n2016 KOREAT JEJU TOP10 선정단 한줄평: 제주밀면의 원조이자 종가집. 제주식 밀면과 돼지수육의 선한 결합!",
        "created": "20160530111636",
        "changed": "20220729111900",
        "catemappList": [
        {
            "seq": 23183,
            "contentsid": {
            "value": "CONT_000000000501267",
            "label": "산방식당(모슬포본점)",
            "refId": "CONT_000000000501267"
            },
            "cate1cd": {
            "value": "cate0000000005",
            "label": "음식점",
            "refId": "contscate>cate0000000005"
            },
            "cate2cd": {
            "value": "cate0000001266",
            "label": "한식",
            "refId": "cate0000000005>cate0000001266"
            },
            "cate3cd": {
            "value": "cate0000001310",
            "label": "한식",
            "refId": "cate0000001266>cate0000001310"
            },
            "created": "20200813131113"
        },
        {
            "seq": 23184,
            "contentsid": {
            "value": "CONT_000000000501267",
            "label": "산방식당(모슬포본점)",
            "refId": "CONT_000000000501267"
            },
            "cate1cd": {
            "value": "cate0000000005",
            "label": "음식점",
            "refId": "contscate>cate0000000005"
            },
            "cate2cd": {
            "value": "cate0000001273",
            "label": "고메위크선정맛집",
            "refId": "cate0000000005>cate0000001273"
            },
            "cate3cd": {
            "value": "cate0000001316",
            "label": "고메위크선정맛집",
            "refId": "cate0000001273>cate0000001316"
            },
            "created": "20200813131113"
        }
        ],
        "festivalcontents": null,
        "repPhoto": {
        "descseo": "Sanbang Restaurant (Moseulpo Branch)",
        "photoid": {
            "photoid": 24793,
            "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/fc815b26-483b-402f-aa45-a57616eceaa7.gif",
            "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201804/30/bd53846e-c045-4e8c-951c-06af681911a8.gif"
        }
        },
        "PHOTOSHARECOUNT": 12,
        "reservelink": null
    },
    {
        "alltag": "볶음밥,파스타,전복밥,퓨전,현금결제,카드결제,화장실,무료 WIFI,음료대,유도 및 안내시설,경보 및 피난시설",
        "contentsid": "CNTS_000000000020133",
        "contentscd": {
        "value": "c4",
        "label": "음식점",
        "refId": "contentscd>c4"
        },
        "title": "성산회관",
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
        "address": "제주특별자치도 서귀포시 성산읍 성산리 167-3",
        "roadaddress": "제주특별자치도 서귀포시 성산읍 성산중앙로 8",
        "tag": "볶음밥,파스타,전복밥,퓨전,음식,크림파스타,오일파스타,커피,전복",
        "introduction": "전복밥이 유명산 감성 맛집",
        "readcnt": 11918,
        "likecnt": 3,
        "reviewcnt": 12,
        "markcnt": 87,
        "snssharecnt": 5,
        "schedulecnt": 0,
        "visitcnt": 2,
        "evelpt": 4,
        "latitude": 33.460884,
        "longitude": 126.93156,
        "postcode": "63643",
        "phoneno": "064-783-8448",
        "sbst": "모짜렐라치즈 위에 전복과 게우(전복내장) 버터볶음밥이 올려진 전복밥이 대표 메뉴이며 김치크림파스타, 한치알리오올리오, 문어면 등 다양한 제주 해산물 퓨전요리를 제공한다. 1인 1메뉴 주문이 기본이다.\n",
        "created": "20161110112109",
        "changed": "20220729110112",
        "catemappList": [
        {
            "seq": 26496,
            "contentsid": {
            "value": "CNTS_000000000020133",
            "label": "성산회관",
            "refId": "CNTS_000000000020133"
            },
            "cate1cd": {
            "value": "cate0000000005",
            "label": "음식점",
            "refId": "contscate>cate0000000005"
            },
            "cate2cd": {
            "value": "cate0000001267",
            "label": "양식",
            "refId": "cate0000000005>cate0000001267"
            },
            "cate3cd": {
            "value": "cate0000001311",
            "label": "양식",
            "refId": "cate0000001267>cate0000001311"
            },
            "created": "20211022155500"
        }
        ],
        "festivalcontents": null,
        "repPhoto": {
        "descseo": "Seongsan Hall",
        "photoid": {
            "photoid": 7527,
            "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/8cba28f6-b89f-4287-b403-dff2c8c12813.jpg",
            "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201804/30/daa65c7b-3a14-4594-9cbd-a6c866343250.jpg"
        }
        },
        "PHOTOSHARECOUNT": 12,
        "reservelink": null
    },
    {
        "alltag": "해산물찜,해산물,딱새우,공용주차장,현금결제,카드결제,무료 WIFI,음료대,아주 어려움",
        "contentsid": "CNTS_000000000020061",
        "contentscd": {
        "value": "c4",
        "label": "음식점",
        "refId": "contentscd>c4"
        },
        "title": "피어22",
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
        "address": "제주특별자치도 제주시 한림읍 금능리 1494-3",
        "roadaddress": "제주특별자치도 제주시 한림읍 금능7길 22",
        "tag": "해산물찜,해산물,딱새우,음식,전복죽,감바스,빵",
        "introduction": "바스켓 가득 랍스터테일, 딱새우, 홍합을 포함 각종 신선한 해산물을 케이준 스타일로 즐길 수 있는 이색맛집",
        "readcnt": 17242,
        "likecnt": 7,
        "reviewcnt": 12,
        "markcnt": 163,
        "snssharecnt": 25,
        "schedulecnt": 0,
        "visitcnt": 0,
        "evelpt": 5,
        "latitude": 33.389317,
        "longitude": 126.22804,
        "postcode": "63010",
        "phoneno": "064-796-7787",
        "sbst": "​\n​\n​\n\r\n\n피어 22는 금능어촌계마을회관 건물을 개조한 식당이다. 이미 맛집으로 자주 소개되어 소문을 듣고 찾는 관광객들의 발길이 끊이지 않고 있다. 태왁이라고 부르는 해산물 찜과, 양념이 잘 배인 해산물과 소시지, 옥수수, 감자를 곁들인 요리가 대표 메뉴다. 취향에 따라 다른 부재료를 추가&nbsp;주문할 수 있으며, 홈메이드 소스에 찍어 먹으면 그 맛이 배가 된다. 작은 랍스터용 우드해머로 직접 손질해 먹는 재미, 같이 간 사람들과 음식을 나눠먹는 재미는 덤이다.\n\n\n\n\n\r\n\r\n​\n​\n​\n​",
        "created": "20161104151958",
        "changed": "20220729103626",
        "catemappList": [
        {
            "seq": 2741,
            "contentsid": {
            "value": "CNTS_000000000020061",
            "label": "피어22",
            "refId": "CNTS_000000000020061"
            },
            "cate1cd": {
            "value": "cate0000000005",
            "label": "음식점",
            "refId": "contscate>cate0000000005"
            },
            "cate2cd": {
            "value": "cate0000001267",
            "label": "양식",
            "refId": "cate0000000005>cate0000001267"
            },
            "cate3cd": {
            "value": "cate0000001311",
            "label": "양식",
            "refId": "cate0000001267>cate0000001311"
            },
            "created": "20180410183026"
        },
        {
            "seq": 8646,
            "contentsid": {
            "value": "CNTS_000000000020061",
            "label": "피어22",
            "refId": "CNTS_000000000020061"
            },
            "cate1cd": {
            "value": "cate0000000005",
            "label": "음식점",
            "refId": "contscate>cate0000000005"
            },
            "cate2cd": {
            "value": "cate0000001267",
            "label": "양식",
            "refId": "cate0000000005>cate0000001267"
            },
            "cate3cd": {
            "value": "cate0000001311",
            "label": "양식",
            "refId": "cate0000001267>cate0000001311"
            },
            "created": "20181105113606"
        },
        {
            "seq": 8648,
            "contentsid": {
            "value": "CNTS_000000000020061",
            "label": "피어22",
            "refId": "CNTS_000000000020061"
            },
            "cate1cd": {
            "value": "cate0000000005",
            "label": "음식점",
            "refId": "contscate>cate0000000005"
            },
            "cate2cd": {
            "value": "cate0000001267",
            "label": "양식",
            "refId": "cate0000000005>cate0000001267"
            },
            "cate3cd": {
            "value": "cate0000001311",
            "label": "양식",
            "refId": "cate0000001267>cate0000001311"
            },
            "created": "20181105113816"
        },
        {
            "seq": 10468,
            "contentsid": {
            "value": "CNTS_000000000020061",
            "label": "피어22",
            "refId": "CNTS_000000000020061"
            },
            "cate1cd": {
            "value": "cate0000000005",
            "label": "음식점",
            "refId": "contscate>cate0000000005"
            },
            "cate2cd": {
            "value": "cate0000001267",
            "label": "양식",
            "refId": "cate0000000005>cate0000001267"
            },
            "cate3cd": {
            "value": "cate0000001311",
            "label": "양식",
            "refId": "cate0000001267>cate0000001311"
            },
            "created": "20181218171025"
        }
        ],
        "festivalcontents": null,
        "repPhoto": {
        "descseo": "피어22",
        "photoid": {
            "photoid": 7246,
            "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/66626ca5-dd47-40ae-8f17-cd8d6f107629.jpg",
            "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201804/30/236d174e-4ce1-44f5-9ef3-6326bb13c4d8.jpg"
        }
        },
        "PHOTOSHARECOUNT": 18,
        "reservelink": null
    },
    {
        "alltag": "분식,떡볶이,튀김,현금결제,카드결제,화장실,음료대,유도 및 안내시설,경보 및 피난시설,아주 어려움",
        "contentsid": "CNTS_000000000020080",
        "contentscd": {
        "value": "c4",
        "label": "음식점",
        "refId": "contentscd>c4"
        },
        "title": "평대스낵",
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
        "address": "제주특별자치도 제주시 구좌읍 평대리 1976-1",
        "roadaddress": "제주특별자치도 제주시 구좌읍 대수길 7",
        "tag": "분식,떡볶이,튀김,음식,새우튀김",
        "introduction": "평대리에서 유명한 분식 전문점",
        "readcnt": 3676,
        "likecnt": 2,
        "reviewcnt": 11,
        "markcnt": 51,
        "snssharecnt": 1,
        "schedulecnt": 0,
        "visitcnt": 0,
        "evelpt": 4,
        "latitude": 33.535458,
        "longitude": 126.839325,
        "postcode": null,
        "phoneno": "--",
        "sbst": "tvN 수요미식회 72회에 방영되어 더욱 유명해진 분식 전문점이다. 메뉴는 분식의 대표주자 떡볶이와 튀김이 있고, 튀김의 종류는 한치튀김과 왕새우튀김 단 두 가지이다. 독특하게 한치튀김을 파는 게 평대분식만의 특징이다. 음료는 생맥주와 콜라, 사이다가 있다. 영업시간이 6시까지이지만 5시에 주문을 마감하니 참고. 2층 옥상에서는 평대리 바다가 보인다. 마을 내부에 주차가 불가하니, 반드시 해안가 공용주차장을 이용하자.",
        "created": "20161107102823",
        "changed": "20220729095951",
        "catemappList": [
        {
            "seq": 26535,
            "contentsid": {
            "value": "CNTS_000000000020080",
            "label": "평대스낵",
            "refId": "CNTS_000000000020080"
            },
            "cate1cd": {
            "value": "cate0000000005",
            "label": "음식점",
            "refId": "contscate>cate0000000005"
            },
            "cate2cd": {
            "value": "cate0000001266",
            "label": "한식",
            "refId": "cate0000000005>cate0000001266"
            },
            "cate3cd": {
            "value": "cate0000001310",
            "label": "한식",
            "refId": "cate0000001266>cate0000001310"
            },
            "created": "20211025110404"
        }
        ],
        "festivalcontents": null,
        "repPhoto": {
        "descseo": "평대스낵",
        "photoid": {
            "photoid": 2019022599547,
            "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/202203/11/10e1ccff-0448-47d7-adf9-6691513c8534.jpg",
            "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/202203/11/0af0cc11-ed59-4ae0-a56c-25565b6d7c60.jpg"
        }
        },
        "PHOTOSHARECOUNT": 9,
        "reservelink": null
    },
    {
        "alltag": "칼국수, 보말, 보말칼국수,공용주차장,현금결제,카드결제,화장실,음료대,아주 어려움",
        "contentsid": "CNTS_000000000018374",
        "contentscd": {
        "value": "c4",
        "label": "음식점",
        "refId": "contentscd>c4"
        },
        "title": "한림칼국수",
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
        "address": "제주특별자치도 제주시 한림읍 한림리 1328-15",
        "roadaddress": "제주특별자치도 제주시 한림읍 한림해안로 141",
        "tag": "칼국수,보말,보말칼국수,음식,닭칼국수,보말죽",
        "introduction": "보말칼국수가 유명한 집",
        "readcnt": 15712,
        "likecnt": 9,
        "reviewcnt": 11,
        "markcnt": 189,
        "snssharecnt": 23,
        "schedulecnt": 0,
        "visitcnt": 0,
        "evelpt": 5,
        "latitude": 33.4155701,
        "longitude": 126.2615642,
        "postcode": null,
        "phoneno": "070-8900-3339",
        "sbst": "한림항에 위치한 한림칼국수는 보말이 들어간 칼국수와 영양보말죽, 매생이보말전 등이 맛있기로 유명하다. 칼국수 면은 24시간 숙성한 반죽을 직접 만들어 사용하고, 보말도 직접 따온 것을 사용하여 정성과 건강이 담긴 한끼를 맛볼 수 있다. 재료 소진시 조기 마감할 수 있다. 한림항에는 비양도로 가는 선착장이 있어 비양도 들어가기 전 후에 따듯한 식사를 챙기기 좋은 곳이다.",
        "created": "20161006160316",
        "changed": "20220729094517",
        "catemappList": [
        {
            "seq": 26530,
            "contentsid": {
            "value": "CNTS_000000000018374",
            "label": "한림칼국수",
            "refId": "CNTS_000000000018374"
            },
            "cate1cd": {
            "value": "cate0000000005",
            "label": "음식점",
            "refId": "contscate>cate0000000005"
            },
            "cate2cd": {
            "value": "cate0000001265",
            "label": "향토음식",
            "refId": "cate0000000005>cate0000001265"
            },
            "cate3cd": {
            "value": "cate0000001280",
            "label": "향토음식",
            "refId": "cate0000001265>cate0000001280"
            },
            "created": "20211025105541"
        }
        ],
        "festivalcontents": null,
        "repPhoto": {
        "descseo": "한림칼국수",
        "photoid": {
            "photoid": 2019022597259,
            "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/202201/10/d8a205f8-2cd9-4c31-a300-becfa2220df6.jpg",
            "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/202201/10/36da0af9-5842-49d9-af2d-0a9b7b29e96f.jpg"
        }
        },
        "PHOTOSHARECOUNT": 13,
        "reservelink": null
    },
    {
        "alltag": "해물라면,전복밥,성게밥,한식,공용주차장,현금결제,카드결제,화장실,음료대,유도 및 안내시설,경보 및 피난시설",
        "contentsid": "CNTS_000000000020423",
        "contentscd": {
        "value": "c4",
        "label": "음식점",
        "refId": "contentscd>c4"
        },
        "title": "경미네집(경미휴게소)",
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
        "address": "제주특별자치도 서귀포시 성산읍 성산리 145-4",
        "roadaddress": "제주특별자치도 서귀포시 성산읍 일출로 259",
        "tag": "해물라면,전복밥,성게밥,한식,음식,전복죽,라면",
        "introduction": "성산일출봉 초입에 있는 조그마한 한식당",
        "readcnt": 8526,
        "likecnt": 2,
        "reviewcnt": 10,
        "markcnt": 50,
        "snssharecnt": 5,
        "schedulecnt": 0,
        "visitcnt": 0,
        "evelpt": 4,
        "latitude": 33.46125,
        "longitude": 126.93347,
        "postcode": "63643",
        "phoneno": "064-782-2671",
        "sbst": "​\r\n\r\n경미네집은 성산일출봉 근처에 위치한 소규모 식당이다. 경미네집에서 가장 유명한 메뉴는 해물라면이다. 문어와 오징어, 조개가 듬뿍 들어간 해물라면이 있고 밥은 무료로 제공한다. 그 외에 전복밥이나 성게밥 등 덮밥류가 있는데 당일 잡은 싱싱한 해산물을 이용한다. 싱싱함 덕분에 비린내도 덜해 평소 날음식을 잘 먹지 못하는 이들도 맛있게 먹을 수 있다. 다만 성게밥 같은 경우, 철이 아닐 때에는 먹기가 어려우니 참고하기 바란다. 이곳의 인기를 입증하듯 낙서로 벽면과 천장이 도배되었다. 외국인들도 많이 찾는 곳이라 외국화폐들이 벽면에 붙여져 있는 것도 새로운 풍경이다. 사람이 많아 주차할 공간이 좁으니 근처 성산일출봉에 주차해서 10분쯤 걸어오는 것을 추천한다.\r\n\r\n\r\n​\r\n​​​​​​​​\r\n​\r\n​​​​​​​​",
        "created": "20161121131800",
        "changed": "20220729105425",
        "catemappList": [
        {
            "seq": 26528,
            "contentsid": {
            "value": "CNTS_000000000020423",
            "label": "경미네집(경미휴게소)",
            "refId": "CNTS_000000000020423"
            },
            "cate1cd": {
            "value": "cate0000000005",
            "label": "음식점",
            "refId": "contscate>cate0000000005"
            },
            "cate2cd": {
            "value": "cate0000001266",
            "label": "한식",
            "refId": "cate0000000005>cate0000001266"
            },
            "cate3cd": {
            "value": "cate0000001310",
            "label": "한식",
            "refId": "cate0000001266>cate0000001310"
            },
            "created": "20211025105115"
        }
        ],
        "festivalcontents": null,
        "repPhoto": {
        "descseo": "경미네집(경미휴게소)",
        "photoid": {
            "photoid": 8589,
            "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/38df09bd-a376-40a9-926b-a359bf6e2652.jpg",
            "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201804/30/0076fc6a-2db6-4baf-b5b6-a42131a17a6e.jpg"
        }
        },
        "PHOTOSHARECOUNT": 9,
        "reservelink": null
    },
    {
        "alltag": "향토음식,고기국수,콩나물국밥,아강발,몸국,현금결제,카드결제,화장실,흡연구역,편의점,음료대,유도 및 안내시설,경보 및 피난시설,아주 어려움",
        "contentsid": "CNTS_000000000019644",
        "contentscd": {
        "value": "c4",
        "label": "음식점",
        "refId": "contentscd>c4"
        },
        "title": "국수마당",
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
        "address": "제주특별자치도 제주시 일도이동 1034-19",
        "roadaddress": "제주특별자치도 제주시 삼성로 65",
        "tag": "향토음식,고기국수,콩나물국밥,아강발,몸국,음식,비빔국수,멸치국수,콩국수,만두",
        "introduction": "신상공원 후문 앞에 국수거리에 있는 국수마당본점",
        "readcnt": 6278,
        "likecnt": 5,
        "reviewcnt": 10,
        "markcnt": 68,
        "snssharecnt": 0,
        "schedulecnt": 0,
        "visitcnt": 0,
        "evelpt": 4,
        "latitude": 33.5080638,
        "longitude": 126.5322532,
        "postcode": null,
        "phoneno": "064-727-6001",
        "sbst": "제주의 토속음식인 고기국수가 유명한 집이다. 고기국수가 유명한 건 말할 것도 없고, 고기국수를 싫어하는 사람도 즐길 수 있게 콩나물국밥, 몸구, 아강발 등 다양한 메뉴가 있다. 새벽 5까지 영업해서 야식으로도 훌륭하다. 고기국수를 찾는 손님들이 점점 늘어나고 있어서 점심시간에는 대기표를 받을 수도 있다. 매월 11일은 국수 - DAY라서 500원이 할인되는 메뉴도 있으니 참고. 주변 관광지로는 제주도민속자연사박물관, 제주삼성혈 등이 있다.",
        "created": "20161026104850",
        "changed": "20220729093832",
        "catemappList": [
        {
            "seq": 26564,
            "contentsid": {
            "value": "CNTS_000000000019644",
            "label": "국수마당",
            "refId": "CNTS_000000000019644"
            },
            "cate1cd": {
            "value": "cate0000000005",
            "label": "음식점",
            "refId": "contscate>cate0000000005"
            },
            "cate2cd": {
            "value": "cate0000001265",
            "label": "향토음식",
            "refId": "cate0000000005>cate0000001265"
            },
            "cate3cd": {
            "value": "cate0000001280",
            "label": "향토음식",
            "refId": "cate0000001265>cate0000001280"
            },
            "created": "20211025162650"
        }
        ],
        "festivalcontents": null,
        "repPhoto": {
        "descseo": "국수마당",
        "photoid": {
            "photoid": 5869,
            "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/7296e573-e753-40ff-b048-81427d0113c9.jpg",
            "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201804/30/e88b1d03-356e-4874-9bed-7c49a65de341.jpg"
        }
        },
        "PHOTOSHARECOUNT": 10,
        "reservelink": null
    }
]


let foods = foodJson.map((v,i)=>{
  return {
    'title':v.title,
    'introduction':v.introduction,
    'sbst': v.sbst,
    'postcode':v.postcode,
    'address':v.address,
    'roadaddress': v.roadaddress,
    'phoneno': v.phoneno,
    'alltag': v.alltag,
    'tag': v.tag,
    'logitude': v.longitude,
    'latitude': v.latitude,
    'image': null,
    'thumbnail': null,
    'reg_date': v.created,
    'edit_date': v.changed
  }
})

foods = JSON.stringify(foods).replace(/\\n/g, "").replace(/\\r/g,"")
// console.log(foods);
fs.writeFileSync('foods.json',foods, 'utf8');
