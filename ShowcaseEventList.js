(function () {
    "use strict";

    const eventConfigDefs = {
        // Spring 2019 speculation
        "2019spring-lovecoal0928": {
            baseImgSrc: "/assets/img/ui/spring19-lovecoal0928.png",
            exportFileName: "spring19-lovecoal0928",
            disclaimerHeightOffset: null,
            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
            lvlFontSize: 45,
            maxBoxWidth: 248,
            shipPositions: [
                {"x": 176+249 *0, "y": 375 + 139* 0, "id":  83}, // Akagi
                {"x": 176+249 *1, "y": 375 + 139* 0, "id":  84}, // Kaga
                {"x": 176+249 *2, "y": 375 + 139* 0, "id":  90}, // Souryuu
                {"x": 176+249 *3, "y": 375 + 139* 0, "id":  91}, // Hiryuu
                {"x": 176+249 *4, "y": 375 + 139* 0, "id": 110}, // Shoukaku

                {"x": 176+249 *0, "y": 375 + 139* 1, "id": 111}, // Zuikaku
                {"x": 176+249 *1, "y": 375 + 139* 1, "id":  86}, // Hiei   
                {"x": 176+249 *2, "y": 375 + 139* 1, "id":  85}, // Kirishima
                {"x": 176+249 *3, "y": 375 + 139* 1, "id":  71}, // Tone
                {"x": 176+249 *4, "y": 375 + 139* 1, "id":  72}, // Chikuma

                {"x": 176+249 *0, "y": 375 + 139* 2, "id": 114}, // Abukuma
                {"x": 176+249 *1, "y": 375 + 139* 2, "id":  48}, // Arare
                {"x": 176+249 *2, "y": 375 + 139* 2, "id":  49}, // Kasumi
                {"x": 176+249 *3, "y": 375 + 139* 2, "id":  17}, // Kagerou
                {"x": 176+249 *4, "y": 375 + 139* 2, "id":  18}, // Shiranui

                {"x": 176+249 *0, "y": 375 + 139* 3, "id": 168}, // Urakaze
                {"x": 176+249 *1, "y": 375 + 139* 3, "id": 167}, // Isokaze
                {"x": 176+249 *2, "y": 375 + 139* 3, "id": 170}, // Hamakaze
                {"x": 176+249 *3, "y": 375 + 139* 3, "id": 169}, // Tanikaze
                {"x": 176+249 *4, "y": 375 + 139* 3, "id": 132}, // Akigumo
                
                {"x": 176+249 *0, "y": 470 + 139* 4, "id": 116}, // Zuihou
                {"x": 176+249 *1, "y": 470 + 139* 4, "id":  89}, // Houshou
                {"x": 176+249 *2, "y": 470 + 139* 4, "id":  80}, // Nagato
                {"x": 176+249 *3, "y": 470 + 139* 4, "id":  81}, // Mutsu
                {"x": 176+249 *4, "y": 470 + 139* 4, "id":  77}, // Ise
                
                {"x": 176+249 *0, "y": 470 + 139* 5, "id":  87}, // Hyuuga
                {"x": 176+249 *1, "y": 470 + 139* 5, "id":  26}, // Fusou
                {"x": 176+249 *2, "y": 470 + 139* 5, "id":  27}, // Yamashiro
                {"x": 176+249 *3, "y": 470 + 139* 5, "id":   7}, // Mikazuki
                {"x": 176+249 *4, "y": 470 + 139* 5, "id":  38}, // Hatsuharu
                
                {"x": 176+249 *0, "y": 470 + 139* 6, "id":  39}, // Nenohi
                {"x": 176+249 *1, "y": 470 + 139* 6, "id":  40}, // Wakaba
                {"x": 176+249 *2, "y": 470 + 139* 6, "id":  41}, // Hatsushimo
                {"x": 176+249 *3, "y": 470 + 139* 6, "id":  42}, // Shiratsuyu
                {"x": 176+249 *4, "y": 470 + 139* 6, "id":  43}, // Shigure
                
                {"x": 176+249 *0, "y": 566 + 139* 7, "id": 126}, // I-168
                {"x": 176+249 *1, "y": 566 + 139* 7, "id": 128}, // I-8
                {"x": 176+249 *2, "y": 566 + 139* 7, "id": 191}, // I-19
                
                {"x": 176+249 *0, "y": 824 + 139* 8, "id": 110}, // Shoukaku
                {"x": 176+249 *1, "y": 824 + 139* 8, "id": 111}, // Zuikaku
                {"x": 176+249 *2, "y": 824 + 139* 8, "id":  85}, // Kirishima
                {"x": 176+249 *3, "y": 824 + 139* 8, "id":  94}, // Sazanami
                {"x": 176+249 *4, "y": 824 + 139* 8, "id":  16}, // Ushio
            ],
        },
        // End of Year 2018 map
        "2018winter2-nicohatealpha": {
            baseImgSrc: "/assets/img/ui/winter18-nicohatealpha.png",
            exportFileName: "endofyear18-nicohatealpha",
            disclaimerHeightOffset: null,
            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
            lvlFontSize: 35,
            maxBoxWidth: 200,
            shipPositions: [
                {"x": 118+283*0, "y": 444+97* 0, "id": 137}, // Agano
                {"x": 118+283*1, "y": 444+97* 0, "id": 132}, // Akigumo
                {"x": 118+283*2, "y": 444+97* 0, "id": 413}, // Asagumo
                {"x": 118+283*3, "y": 444+97* 0, "id":  95}, // Asashio

                {"x": 118+283*0, "y": 444+97* 1, "id": 479}, // Amagiri
                {"x": 118+283*1, "y": 444+97* 1, "id": 454}, // Arashi
                {"x": 118+283*2, "y": 444+97* 1, "id":  98}, // Arashio
                {"x": 118+283*3, "y": 444+97* 1, "id": 167}, // Isokaze

                {"x": 118+283*0, "y": 444+97* 2, "id": 165}, // Uzuki
                {"x": 118+283*1, "y": 444+97* 2, "id": 453}, // Kazagumo
                {"x": 118+283*2, "y": 444+97* 2, "id": 459}, // Kawakaze
                {"x": 118+283*3, "y": 444+97* 2, "id":  94}, // Sazanami
                
                {"x": 118+283*0, "y": 444+97* 3, "id":  28}, // Satsuki
                {"x": 118+283*1, "y": 444+97* 3, "id":  46}, // Samidare
                {"x": 118+283*2, "y": 444+97* 3, "id":  14}, // Shikinami
                {"x": 118+283*3, "y": 444+97* 3, "id":  43}, // Shigure
                
                {"x": 118+283*0, "y": 444+97* 4, "id":  92}, // Junyou
                {"x": 118+283*1, "y": 444+97* 4, "id":  42}, // Shiratsuyu
                {"x": 118+283*2, "y": 444+97* 4, "id":  10}, // Shirayuki
                {"x": 118+283*3, "y": 444+97* 4, "id": 111}, // Zuikaku

                {"x": 118+283*0, "y": 444+97* 5, "id": 116}, // Zuihou
                {"x": 118+283*1, "y": 444+97* 5, "id":  54}, // Sendai
                {"x": 118+283*2, "y": 444+97* 5, "id": 186}, // Tokitsukaze
                {"x": 118+283*3, "y": 444+97* 5, "id":   6}, // Nagatsuki

                {"x": 118+283*0, "y": 444+97* 6, "id": 135}, // Naganami
                {"x": 118+283*1, "y": 444+97* 6, "id":  21}, // Nagara
                {"x": 118+283*2, "y": 444+97* 6, "id": 455}, // Hagikaze
                {"x": 118+283*3, "y": 444+97* 6, "id":  65}, // Haguro

                {"x": 118+283*0, "y": 444+97* 7, "id": 190}, // Hatsukaze
                {"x": 118+283*1, "y": 444+97* 7, "id":  32}, // Hatsuyuki
                {"x": 118+283*2, "y": 444+97* 7, "id": 170}, // Hamakaze
                {"x": 118+283*3, "y": 444+97* 7, "id":  75}, // Hiyou

                {"x": 118+283*0, "y": 444+97* 8, "id":  29}, // Fumizuki
                {"x": 118+283*1, "y": 444+97* 8, "id": 474}, // Matsukaze
                {"x": 118+283*2, "y": 444+97* 8, "id":   7}, // Mikazuki
                {"x": 118+283*3, "y": 444+97* 8, "id": 481}, // Minazuki

                {"x": 118+283*0, "y": 444+97* 9, "id":  62}, // Myoukou
                {"x": 118+283*1, "y": 444+97* 9, "id":  44}, // Murasame
                {"x": 118+283*2, "y": 444+97* 9, "id":  31}, // Mochizuki
                {"x": 118+283*3, "y": 444+97* 9, "id": 133}, // Yuugumo

                {"x": 118+283*0, "y": 444+97*10, "id":  20}, // Yukikaze

            ],
        },
        // End of Year 2018 map
        "2018winter2-nishi": {
            baseImgSrc: "/assets/img/ui/winter18-nishisonic.png",
            exportFileName: "endofyear18-nishisonic",
            disclaimerHeightOffset: null,
            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
            lvlFontSize: 55,
            maxBoxWidth: 330,
            shipPositions: [
                // Battle of Villa-Stanmore
                {"x": 241+332*0, "y": 249+179* 0, "id":  44}, // Murasame

                // Battle of Kula Gulf
                {"x": 241+332*0, "y": 500+179* 0, "id":  28}, // Satsuki
                {"x": 241+332*1, "y": 500+179* 0, "id":   6}, // Nagatsuki
                {"x": 241+332*2, "y": 500+179* 0, "id":   7}, // Mikazuki
                {"x": 241+332*3, "y": 500+179* 0, "id":  31}, // Mochizuki
                {"x": 241+332*4, "y": 500+179* 0, "id":  32}, // Hatsuyuki

                {"x": 241+332*0, "y": 500+179* 1, "id": 479}, // Amagiri
                {"x": 241+332*1, "y": 500+179* 1, "id":  47}, // Suzukaze
                {"x": 241+332*2, "y": 500+179* 1, "id": 170}, // Hamakaze
                {"x": 241+332*3, "y": 500+179* 1, "id": 169}, // Tanikaze

                // Battle of Kolombangara
                {"x": 241+332*0, "y": 927+179* 0, "id":  55}, // Jintsuu
                {"x": 241+332*1, "y": 927+179* 0, "id": 474}, // Matsukaze
                {"x": 241+332*2, "y": 927+179* 0, "id":  28}, // Satsuki
                {"x": 241+332*3, "y": 927+179* 0, "id": 481}, // Minazuki
                {"x": 241+332*4, "y": 927+179* 0, "id":   7}, // Mikazuki
                
                {"x": 241+332*0, "y": 927+179* 1, "id":  20}, // Yukikaze
                {"x": 241+332*1, "y": 927+179* 1, "id": 170}, // Hamakaze

                // Sinking of Nisshin: 3rd Fleet
                {"x": 241+332*0, "y":1384+179* 0, "id": 110}, // Shoukaku
                {"x": 241+332*1, "y":1384+179* 0, "id": 111}, // Zuikaku
                {"x": 241+332*2, "y":1384+179* 0, "id": 116}, // Zuihou
                {"x": 241+332*3, "y":1384+179* 0, "id":  70}, // Mogami
                {"x": 241+332*4, "y":1384+179* 0, "id":  71}, // Tone
                
                {"x": 241+332*0, "y":1384+179* 1, "id":  72}, // Chikuma
                {"x": 241+332*1, "y":1384+179* 1, "id": 137}, // Agano
                {"x": 241+332*2, "y":1384+179* 1, "id": 183}, // Ooyodo
                {"x": 241+332*3, "y":1384+179* 1, "id": 532}, // Suzutsuki
                {"x": 241+332*4, "y":1384+179* 1, "id": 423}, // Hatsuzuki

                // Sinking of Nisshin: B unit
                {"x": 241+332*0, "y":1960+179* 0, "id": 454}, // Arashi
                {"x": 241+332*1, "y":1960+179* 0, "id": 455}, // Hagikaze
                {"x": 241+332*2, "y":1960+179* 0, "id": 167}, // Isokaze
                
                // Battle of Vella Gulf
                {"x": 241+332*0, "y":2202+179* 0, "id":  54}, // Sendai
                {"x": 241+332*1, "y":2202+179* 0, "id":  43}, // Shigure
                {"x": 241+332*2, "y":2202+179* 0, "id": 459}, // Kawakaze
                {"x": 241+332*3, "y":2202+179* 0, "id": 454}, // Arashi
                {"x": 241+332*4, "y":2202+179* 0, "id": 455}, // Hagikaze

                // First Battle of Vella Lavella
                {"x": 241+332*0, "y":2444+179* 0, "id":  94}, // Sazanami
                {"x": 241+332*1, "y":2444+179* 0, "id":  43}, // Shigure
                {"x": 241+332*2, "y":2444+179* 0, "id": 167}, // Isokaze
                {"x": 241+332*3, "y":2444+179* 0, "id": 170}, // Hamakaze

                // Second Battle of Vella Lavella
                {"x": 241+332*0, "y":2694+179* 0, "id": 474}, // Matsukaze
                {"x": 241+332*1, "y":2694+179* 0, "id":  29}, // Fumizuki
                {"x": 241+332*2, "y":2694+179* 0, "id":  46}, // Samidare
                {"x": 241+332*3, "y":2694+179* 0, "id":  43}, // Shigure
                {"x": 241+332*4, "y":2694+179* 0, "id": 167}, // Isokaze
                
                {"x": 241+332*0, "y":2694+179* 1, "id": 132}, // Akigumo
                {"x": 241+332*1, "y":2694+179* 1, "id": 133}, // Yuugumo
                {"x": 241+332*2, "y":2694+179* 1, "id": 453}, // Kazagumo

                // Battle of Bougainville Island
                {"x": 241+332*0, "y":3123+179* 0, "id":  62}, // Myoukou
                {"x": 241+332*1, "y":3123+179* 0, "id":  65}, // Haguro
                {"x": 241+332*2, "y":3123+179* 0, "id":  54}, // Sendai
                {"x": 241+332*3, "y":3123+179* 0, "id": 137}, // Agano
                {"x": 241+332*4, "y":3123+179* 0, "id": 165}, // Uzuki
                
                {"x": 241+332*0, "y":3123+179* 1, "id":  29}, // Fumizuki
                {"x": 241+332*1, "y":3123+179* 1, "id": 479}, // Amagiri
                {"x": 241+332*2, "y":3123+179* 1, "id":  42}, // Shiratsuyu
                {"x": 241+332*3, "y":3123+179* 1, "id":  43}, // Shigure
                {"x": 241+332*4, "y":3123+179* 1, "id":  46}, // Samidare
                
                {"x": 241+332*0, "y":3123+179* 2, "id": 190}, // Hatsukaze
                {"x": 241+332*1, "y":3123+179* 2, "id": 135}, // Naganami
            ],
        },
        // Summer 18 event map
        "nicohatealpha": {
            baseImgSrc: "/assets/img/ui/summer18-nicohatealpha.png",
            exportFileName: "nicohatealpha",
            disclaimerHeightOffset: null,
            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
            lvlFontSize: 40,
            maxBoxWidth: 165,
            shipPositions: [
                {"x": 180+217*0, "y": 310+118* 0, "id":  78}, // Kongou
                {"x": 180+217*1, "y": 310+118* 0, "id":  79}, // Haruna
                {"x": 180+217*2, "y": 310+118* 0, "id":  69}, // Choukai
                {"x": 180+217*3, "y": 310+118* 0, "id":  70}, // Mogami
                {"x": 180+217*4, "y": 310+118* 0, "id": 120}, // Mikuma
                {"x": 180+217*5, "y": 310+118* 0, "id": 124}, // Suzuya

                {"x": 180+217*0, "y": 310+118* 1, "id": 125}, // Kumano
                {"x": 180+217*1, "y": 310+118* 1, "id":  67}, // Atago
                {"x": 180+217*2, "y": 310+118* 1, "id":  66}, // Takao
                {"x": 180+217*3, "y": 310+118* 1, "id": 113}, // Kinu
                {"x": 180+217*4, "y": 310+118* 1, "id":  23}, // Yura
                {"x": 180+217*5, "y": 310+118* 1, "id":   9}, // Fubuki

                {"x": 180+217*0, "y": 310+118* 2, "id":  10}, // Shirayuki
                {"x": 180+217*1, "y": 310+118* 2, "id":  32}, // Hatsuyuki
                {"x": 180+217*2, "y": 310+118* 2, "id": 480}, // Sagiri
                {"x": 180+217*3, "y": 310+118* 2, "id": 454}, // Arashi
                {"x": 180+217*4, "y": 310+118* 2, "id": 415}, // Nowaki
                {"x": 180+217*5, "y": 310+118* 2, "id": 455}, // Hagikaze

                {"x": 180+217*0, "y": 310+118* 3, "id": 122}, // Maikaze
                {"x": 180+217*1, "y": 310+118* 3, "id":  35}, // Hibiki
                {"x": 180+217*2, "y": 310+118* 3, "id":  34}, // Akatsuki
                {"x": 180+217*3, "y": 310+118* 3, "id":  96}, // Ooshio
                {"x": 180+217*4, "y": 310+118* 3, "id":  95}, // Asashio
                {"x": 180+217*5, "y": 310+118* 3, "id":  97}, // Michishio

                {"x": 180+217*0, "y": 310+118* 4, "id":  98}, // Arashio
                {"x": 180+217*1, "y": 310+118* 4, "id": 127}, // I-58

                {"x": 180+217*0, "y": 320+118* 5, "id":  83}, // Akagi
                {"x": 180+217*1, "y": 320+118* 5, "id":  91}, // Hiryuu
                {"x": 180+217*2, "y": 320+118* 5, "id":  90}, // Souryuu
                {"x": 180+217*3, "y": 320+118* 5, "id": 110}, // Shoukaku
                {"x": 180+217*4, "y": 320+118* 5, "id": 111}, // Zuikaku
                {"x": 180+217*5, "y": 320+118* 5, "id":  86}, // Hiei

                {"x": 180+217*0, "y": 320+118* 6, "id":  85}, // Kirishima
                {"x": 180+217*1, "y": 320+118* 6, "id":  71}, // Tone
                {"x": 180+217*2, "y": 320+118* 6, "id":  72}, // Chikuma
                {"x": 180+217*3, "y": 320+118* 6, "id": 114}, // Abukuma
                {"x": 180+217*4, "y": 320+118* 6, "id":  49}, // Kasumi
                {"x": 180+217*5, "y": 320+118* 6, "id":  48}, // Arare

                {"x": 180+217*0, "y": 320+118* 7, "id": 169}, // Tanikaze
                {"x": 180+217*1, "y": 320+118* 7, "id": 168}, // Urakaze
                {"x": 180+217*2, "y": 320+118* 7, "id": 170}, // Hamakaze
                {"x": 180+217*3, "y": 320+118* 7, "id": 167}, // Isokaze
                {"x": 180+217*4, "y": 320+118* 7, "id":  17}, // Kagerou
                {"x": 180+217*5, "y": 320+118* 7, "id":  18}, // Shiranui

                {"x": 180+217*0, "y": 330+118* 8, "id":  65}, // Haguro
                {"x": 180+217*1, "y": 330+118* 8, "id":  64}, // Ashigara
                {"x": 180+217*2, "y": 330+118* 8, "id": 471}, // Kamikaze

                {"x": 180+217*0, "y": 340+118* 9, "id": 171}, // Bismarck
                {"x": 180+217*1, "y": 340+118* 9, "id": 432}, // Graf Zeppelin
                {"x": 180+217*2, "y": 340+118* 9, "id": 176}, // Prinz Eugen
                {"x": 180+217*3, "y": 340+118* 9, "id": 174}, // Z1
                {"x": 180+217*4, "y": 340+118* 9, "id": 175}, // Z3
                {"x": 180+217*5, "y": 340+118* 9, "id": 431}, // U-511

                {"x": 180+217*0, "y": 340+118*10, "id": 441}, // Littorio
                {"x": 180+217*1, "y": 340+118*10, "id": 442}, // Roma
                {"x": 180+217*2, "y": 340+118*10, "id": 444}, // Aquila
                {"x": 180+217*3, "y": 340+118*10, "id": 448}, // Zara
                {"x": 180+217*4, "y": 340+118*10, "id": 449}, // Pola
                {"x": 180+217*5, "y": 340+118*10, "id": 443}, // Libeccio

                {"x": 180+217*0, "y": 340+118*11, "id": 535}, // Luigi Torelli
                {"x": 180+217*1, "y": 340+118*11, "id": 439}, // Warspite
                {"x": 180+217*2, "y": 340+118*11, "id": 515}, // Ark Royal
                {"x": 180+217*3, "y": 340+118*11, "id": 519}, // Jervis
                {"x": 180+217*4, "y": 340+118*11, "id": 491}, // Commandant Teste
                {"x": 180+217*5, "y": 340+118*11, "id": 492}, // Richelieu

                {"x": 180+217*0, "y": 340+118*12, "id": 511}, // Gangut
                {"x": 180+217*1, "y": 340+118*12, "id": 516}  // Tashkent
            ],
        },
        // Foreign ships
        "foreignShips": {
            baseImgSrc: "/assets/img/ui/foreign_ships.png",
            exportFileName: "Foreign Ship List",
            disclaimerHeightOffset: null,
            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
            lvlFontSize: 55,
            maxBoxWidth: 215,
            shipPositions: [
                {"x": 672+744*0, "y": 328+148.5* 0, "id": 174}, // Z1
                {"x": 672+744*0, "y": 328+148.5* 1, "id": 175}, // Z3
                {"x": 672+744*0, "y": 328+148.5* 2, "id": 176}, // Prinz Eugen
                {"x": 672+744*0, "y": 328+148.5* 3, "id": 171}, // Bismarck
                {"x": 672+744*0, "y": 328+148.5* 4, "id": 432}, // Graf Zeppelin
                {"x": 672+744*0, "y": 328+148.5* 5, "id": 431}, // U-511

                {"x": 672+744*1, "y": 328+148.5* 0, "id": 575}, // Maestrale
                {"x": 672+744*1, "y": 328+148.5* 1, "id": 443}, // Libeccio
                {"x": 672+744*1, "y": 328+148.5* 2, "id": 614}, // Grecale
                {"x": 672+744*1, "y": 328+148.5* 3, "id": 589}, // Duca degli Abruzzi
                {"x": 672+744*1, "y": 328+148.5* 4, "id": 590}, // G. Garibaldi
                {"x": 672+744*1, "y": 328+148.5* 5, "id": 448}, // Zara
                {"x": 672+744*1, "y": 328+148.5* 6, "id": 449}, // Pola
                {"x": 672+744*1, "y": 328+148.5* 7, "id": 441}, // Littorio
                {"x": 672+744*1, "y": 328+148.5* 8, "id": 442}, // Roma
                {"x": 672+744*1, "y": 328+148.5* 9, "id": 444}, // Aquila
                {"x": 672+744*1, "y": 328+148.5*10, "id": 535}, // Luigi Torelli

                {"x": 672+744*2, "y": 328+148.5* 0, "id": 519}, // Jervis
                {"x": 672+744*2, "y": 328+148.5* 1, "id": 520}, // Janus
                {"x": 672+744*2, "y": 328+148.5* 2, "id": 439}, // Warspite
                {"x": 672+744*2, "y": 328+148.5* 3, "id": 571}, // Nelson
                {"x": 672+744*2, "y": 328+148.5* 4, "id": 515}, // Ark Royal

                {"x": 672+744*3, "y": 328+148.5* 0, "id": 561}, // Samuel B. Roberts
                {"x": 672+744*3, "y": 328+148.5* 1, "id": 596}, // Fletcher
                {"x": 672+744*3, "y": 328+148.5* 2, "id": 562}, // Johnston
                {"x": 672+744*3, "y": 328+148.5* 3, "id": 440}, // Iowa
                {"x": 672+744*3, "y": 328+148.5* 4, "id": 601}, // Colorado
                {"x": 672+744*3, "y": 328+148.5* 5, "id": 544}, // Gambier Bay
                {"x": 672+744*3, "y": 328+148.5* 6, "id": 433}, // Saratoga
                {"x": 672+744*3, "y": 328+148.5* 7, "id": 549}, // Intrepid

                {"x": 672+744*0, "y": 328+148.5* 9, "id": 492}, // Richelieu
                {"x": 672+744*0, "y": 328+148.5*10, "id": 491}, // Comdt. Teste

                {"x": 672+744*2, "y": 328+148.5* 9, "id": 516}, // Tashkent
                {"x": 672+744*2, "y": 328+148.5*10, "id": 511}, // Gangut

                {"x": 672+744*3, "y": 328+148.5*10, "id": 574}, // Gotland

                {"x": 654+744*0, "y": 2112+154*  0, "id": 534}, // Shinyou
                {"x": 654+744*0, "y": 2112+154*  1, "id": 162}, // Kamoi
                {"x": 654+744*1, "y": 2112+154*  0, "id":  78}, // Kongou

                {"x":      2183, "y": 2112+154*  0, "id":  35}  // Hibiki
            ],
        },
        "europeanShips": {
            baseImgSrc: "/assets/img/ui/european_ships.png",
            exportFileName: "European Ship List",
            disclaimerHeightOffset: null,
            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
            lvlFontSize: 36,
            maxBoxWidth: 145,
            shipPositions: [
                {"x": 366, "y": 137+61.5* 0, "id": 491}, // Comdt. Teste
                {"x": 366, "y": 137+61.5* 1, "id": 535}, // Luigi Torelli
                {"x": 366, "y": 137+61.5* 2, "id": 431}, // U-511
                {"x": 366, "y": 137+61.5* 3, "id": 432}, // Graf Zeppelin
                {"x": 366, "y": 137+61.5* 4, "id": 444}, // Aquila
                {"x": 366, "y": 137+61.5* 5, "id": 515}, // Ark Royal
                {"x": 366, "y": 137+61.5* 6, "id": 439}, // Warspite
                {"x": 366, "y": 137+61.5* 7, "id": 571}, // Nelson
                {"x": 366, "y": 137+61.5* 8, "id":  78}, // Kongou
                {"x": 366, "y": 137+61.5* 9, "id": 171}, // Bismarck
                {"x": 366, "y": 137+61.5*10, "id": 441}, // Littorio
                {"x": 366, "y": 137+61.5*11, "id": 442}, // Roma
                {"x": 366, "y": 137+61.5*12, "id": 511}, // Gangut

                {"x": 812, "y": 137+61.5* 0, "id": 492}, // Richelieu
                {"x": 812, "y": 137+61.5* 1, "id": 176}, // Prinz Eugen
                {"x": 812, "y": 137+61.5* 2, "id": 448}, // Zara
                {"x": 812, "y": 137+61.5* 3, "id": 449}, // Pola
                {"x": 812, "y": 137+61.5* 4, "id": 590}, // G. Garibaldi
                {"x": 812, "y": 137+61.5* 5, "id": 574}, // Gotland
                {"x": 812, "y": 137+61.5* 6, "id": 174}, // Z1
                {"x": 812, "y": 137+61.5* 7, "id": 175}, // Z3
                {"x": 812, "y": 137+61.5* 8, "id": 443}, // Libeccio
                {"x": 812, "y": 137+61.5* 9, "id": 575}, // Maestrale
                {"x": 812, "y": 137+61.5*10, "id": 519}, // Jervis
                {"x": 812, "y": 137+61.5*11, "id": 516}, // Tashkent
                {"x": 812, "y": 137+61.5*12, "id": 35}   // Hibiki
            ],
        },
        // Operation ten go/kita
        "operationKitaTenGo": {
            baseImgSrc: "/assets/img/ui/operation_kita_ten-go.png",
            exportFileName: "Operation Kita Ten-Go Ship List",
            disclaimerHeightOffset: 13,
            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
            lvlFontSize: 32,
            maxBoxWidth: 105,
            shipPositions: [
                {"x": 275, "y": 144, "id": 87},  // Hyuuga
                {"x": 275, "y": 209, "id": 77},  // Ise
                {"x": 275, "y": 274, "id": 183}, // Ooyodo
                {"x": 275, "y": 339, "id": 49},  // Kasumi
                {"x": 275, "y": 404, "id": 41},  // Hatsushimo
                {"x": 275, "y": 469, "id": 425}, // Asashimo

                {"x": 646, "y": 144, "id": 131}, // Yamato
                {"x": 646, "y": 209, "id": 139}, // Yahagi
                {"x": 646, "y": 274, "id": 532}, // Suzutsuki
                {"x": 646, "y": 339, "id": 167}, // Isokaze
                {"x": 646, "y": 404, "id": 170}, // Hamakaze
                {"x": 646, "y": 469, "id": 20},  // Yukikaze
                {"x": 646, "y": 534, "id": 425}, // Asashimo
                {"x": 646, "y": 599, "id": 41},  // Hatsushimo
                {"x": 646, "y": 664, "id": 49}   // Kasumi
            ],
        },
        // Potato ships
        "potatoShips": {
            baseImgSrc: "/assets/img/ui/potatoes.png",
            exportFileName: "Potato Ship List",
            disclaimerHeightOffset: null,
            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
            lvlFontSize: 30,
            maxBoxWidth: 84,
            shipPositions: [
                {"x": 174+191*0, "y": 141+60* 0, "id":  77}, // Ise
                {"x": 174+191*0, "y": 141+60* 1, "id":  87}, // Hyuuga
                {"x": 174+191*0, "y": 141+60* 2, "id":  83}, // Akagi
                {"x": 174+191*0, "y": 141+60* 3, "id":  84}, // Kaga
                {"x": 174+191*0, "y": 141+60* 4, "id":  91}, // Hiryuu
                {"x": 174+191*0, "y": 141+60* 5, "id":  90}, // Souryuu
                {"x": 174+191*0, "y": 141+60* 6, "id": 549}, // Intrepid

                {"x": 174+191*1, "y": 141+60* 0, "id":  89}, // Houshou
                {"x": 174+191*1, "y": 141+60* 1, "id": 521}, // Kasugamaru
                {"x": 174+191*1, "y": 141+60* 2, "id":  70}, // Mogami
                {"x": 174+191*1, "y": 141+60* 3, "id": 120}, // Mikuma
                {"x": 174+191*1, "y": 141+60* 4, "id":  25}, // Kitakami
                {"x": 174+191*1, "y": 141+60* 5, "id":  24}, // Ooi

                {"x": 174+191*2, "y": 141+60* 0, "id":   9}, // Fubuki
                {"x": 174+191*2, "y": 141+60* 1, "id":  10}, // Shirayuki
                {"x": 174+191*2, "y": 141+60* 2, "id":  11}, // Miyuki
                {"x": 174+191*2, "y": 141+60* 3, "id":  12}, // Isonami
                {"x": 174+191*2, "y": 141+60* 4, "id":  32}, // Hatsuyuki
                {"x": 174+191*2, "y": 141+60* 5, "id": 486}, // Uranami

                {"x": 174+191*3, "y": 141+60* 0, "id":  13}, // Ayanami
                {"x": 174+191*3, "y": 141+60* 1, "id":  14}, // Shikinami
                {"x": 174+191*3, "y": 141+60* 2, "id": 551}, // Hiburi
                {"x": 174+191*3, "y": 141+60* 3, "id": 552}, // Daitou
                {"x": 174+191*3, "y": 141+60* 4, "id": 493}, // I-400
                {"x": 174+191*3, "y": 141+60* 5, "id": 155}  // I-401
            ],
        },
    };

    class ShowcaseEventList {
        constructor() {
            this.buildSettings = {};
            this.complete = function () {
            };
            this.init();
        }

        init() {
            this.baseImage = new Image();
            this.canvas = document.createElement("CANVAS");
            this.ctx = this.canvas.getContext("2d");
        }

        addShipToImage(shipPos) {
            const {fontFamily, lvlFontSize, maxBoxWidth} = this.eventConfig;
            const ids = [];
            const allShips = KC3Master.all_ships();
            for (const i in allShips) {
                if (!allShips.hasOwnProperty(i))
                    continue;
                const tempShip = KC3Master.ship(i);
                if (tempShip.kc3_bship === shipPos.id) {
                    ids.push(Number(i));
                }
            }

            const ships = KC3ShipManager.find((s) => ids.indexOf(Number(s.masterId)) !== -1 && s.lock !== 0)
                .sort((a, b) => b.level - a.level);
            this.ctx.fillStyle = "#000";

            if (ships.length > 0) {
                let lvlWidth = 0, maxIndex = 0, firstWidth = 0;
                for (let index = 0; index < ships.length; index++) {
                    this.ctx.font = `800 ${index ? lvlFontSize / 2 : lvlFontSize}px ${fontFamily}`;
                    let currentWidth = this.ctx.measureText(ships[index].level).width;

                    if (index != 0) {
                        this.ctx.font = `800 ${lvlFontSize / 2}px ${fontFamily}`;
                        currentWidth += this.ctx.measureText(", ").width;
                    } else {
                        firstWidth = currentWidth;
                    }

                    if (lvlWidth + currentWidth > maxBoxWidth)
                        break;
                    lvlWidth += currentWidth;
                    maxIndex = index + 1;
                }

                // Show kai/kai ni status for highest level ship, this is prob most important one, in other cases it could be messy
                if (KC3Master.ship(ships[0].masterId).api_afterlv !== 0) {
                    this.ctx.shadowBlur = 0;
                    this.ctx.shadowOffsetX = 0;
                    this.ctx.shadowOffsetY = 0;
                    let suffixesList = Object.keys(KC3Meta._shipAffix.suffixes);
                    const name = KC3Master.ship(ships[0].masterId).api_name;
                    const wctf_ship = WhoCallsTheFleetDb.db["s" + ships[0].masterId];
                    const wctf_name = wctf_ship ? wctf_ship.name.ja_jp : "";
                    let suffix = name.substring(wctf_name.length);
                    this.ctx.fillStyle = "#8c0c0c";
                    if (suffix.length) {
                        suffixesList.map((s) => {
                            suffix = suffix.replace(s.trim(), KC3Meta._shipAffix.suffixes[s.trim()]);
                        });
                        suffix = suffix.trim();
                        this.ctx.font = `400 12px ${fontFamily}`;
                        this.ctx.fillText(suffix, shipPos.x - lvlWidth / 2 + firstWidth, shipPos.y - 18);
                    } else {
                        this.ctx.font = `800 18px ${fontFamily}`;
                        this.ctx.fillText("*", shipPos.x - lvlWidth / 2 + firstWidth, shipPos.y - 18);
                    }
                }

                let posOffset = 0, index = 0;
                while (index < ships.length && index < maxIndex) {
                    const ship = ships[index];
                    let text = String(ship.level);

                    if (ship.level > 99) {
                        this.ctx.fillStyle = "#a97417";
                    } else if (ship.level >= 80) {
                        this.ctx.fillStyle = "#107e57";
                    } else if (ship.level >= 50) {
                        this.ctx.fillStyle = "#2ea6bb";
                    } else {
                        this.ctx.fillStyle = "#000";
                    }

                    this.ctx.shadowColor = "#222";
                    if (index === 0) {
                        this.ctx.shadowOffsetX = 2;
                        this.ctx.shadowOffsetY = 2;
                        this.ctx.shadowBlur = 2;
                    } else {
                        this.ctx.shadowOffsetX = 1;
                        this.ctx.shadowOffsetY = 1;
                        this.ctx.shadowBlur = 1;
                    }
                    this.ctx.font = `800 ${index ? lvlFontSize / 2 : lvlFontSize}px ${fontFamily}`;

                    this.ctx.fillText(text, shipPos.x + posOffset - lvlWidth / 2, shipPos.y);
                    posOffset += this.ctx.measureText(text).width;

                    index++;

                    this.ctx.fillStyle = "#333";
                    this.ctx.font = `800 ${lvlFontSize / 3}px ${fontFamily}`;
                    if (index < ships.length && index < maxIndex) {
                        this.ctx.fillText(", ", shipPos.x + posOffset - lvlWidth / 2, shipPos.y);
                        posOffset += this.ctx.measureText(", ").width;
                    } else if (maxIndex !== ships.length) {
                        this.ctx.fillText("...", shipPos.x + posOffset - lvlWidth / 2, shipPos.y);
                    }
                }
            } else {
                this.ctx.font = `800 ${lvlFontSize}px ${fontFamily}`;
                this.ctx.fillText("-", shipPos.x - this.ctx.measureText("-").width / 2, shipPos.y);
            }
        }

        fillShipLvls() {
            const {fontFamily, disclaimerHeightOffset, shipPositions, exportFileName} = this.eventConfig;
            this.canvas.width = this.baseImage.width;
            this.canvas.height = this.baseImage.height;
            this.ctx.drawImage(this.baseImage, 0, 0, this.canvas.width, this.canvas.height);

            let size = 16;
            this.ctx.fillStyle = "#D33";
            this.ctx.font = `800 ${size}px ${fontFamily}`;
            this.ctx.lineWidth = 3;
            this.ctx.strokeStyle = "#fff";
            // Add disclaimer text line if necessary
            if (Number.isInteger(disclaimerHeightOffset)) {
                const text = ["DISCLAIMER: We do not have solid evidence that these",
                    "speculated ships will have special routing next event."];
                for (const line of text) {
                    // size smaller than Chromium minimum font setting will be simply ignored
                    while (this.ctx.measureText(line).width > this.canvas.width && size > 6) {
                        size--;
                        this.ctx.font = `800 ${size}px ${fontFamily}`;
                    }
                }
                let lineCnt = 0;
                for (const line of text) {
                    const x = (this.canvas.width - this.ctx.measureText(line).width) / 2,
                        y = disclaimerHeightOffset + size * lineCnt;
                    lineCnt++;
                    this.ctx.strokeText(line, x, y);
                    this.ctx.fillText(line, x, y);
                }
            }

            KC3ShipManager.load();
            for (const i in shipPositions) {
                if (!shipPositions.hasOwnProperty(i))
                    continue;
                this.addShipToImage(shipPositions[i]);
            }

            new KC3ImageExport(this.canvas, {
                filename: exportFileName + dateFormat(" yyyy-mm-dd"),
                method: this.buildSettings.output,
            }).export((error, result) => {
                this.complete(result || {});
                this.init();
            });
        }

        exportList(configName) {
            this.eventConfig = eventConfigDefs[configName] || eventConfigDefs.europeanShips;
            this.baseImage.onload = this.fillShipLvls.bind(this);
            this.baseImage.src = this.eventConfig.baseImgSrc;
        }
    }

    window.ShowcaseEventList = ShowcaseEventList;
})();