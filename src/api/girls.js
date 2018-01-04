const girls = [
  {
    "id": "5",
    "name": "ツバキ",
    "stars": 5,
    "nation": "winter_rose",
    "love": "book",
    "obtainBy": "プレミアムガチャ",
    "attribute": "red",
    "images": [
      "http://フラワーナイトガール.攻略wiki.com/index.php?plugin=ref&page=%E2%98%85%E2%98%85%E2%98%85%E2%98%85%E2%98%85%2F%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB&src=%E3%83%84%E3%83%90%E3%82%AD%EF%BD%93.jpg",
      "http://フラワーナイトガール.攻略wiki.com/index.php?plugin=ref&page=%E2%98%85%E2%98%85%E2%98%85%E2%98%85%E2%98%85%2F%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB&src=%E3%83%84%E3%83%90%E3%82%AD2.jpg",
      "http://フラワーナイトガール.攻略wiki.com/index.php?plugin=ref&page=%E2%98%85%E2%98%85%E2%98%85%E2%98%85%E2%98%85%2F%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB&src=%E3%83%84%E3%83%90%E3%82%AD%E9%96%8B%E8%8A%B1.jpg",
    ],
    "originalStats": {
      "hitPoint": 10960,
      "attack": 4820,
      "defense": 1810,
      "speed": 675,
    },
    "bonusStats": {
      "hitPoint": 5484,
      "attack": 2244,
      "defense": 504,
    },
    "skills": {
      "active": {
        "name": "二刀流・雲龍双爪",
        "triggerRate": "発動率20(30)%",
        "description": "敵全体に1.7倍のダメージを与える",
      },
      "passive": [
        "戦闘中、自身を含む2人の攻撃力が25%上昇",
        "パーティメンバーの防御力が15%、防御時のダメージ軽減率が3.0%上昇、自身は確率で3回まで戦闘不能にならずHP1で耐える\n※他アビリティとの組み合わせで軽減率は最大+20％まで上昇可能",
        "戦闘中、自身は2ターンまで75%、以降は40%の確率で敵の攻撃を回避する",
      ]
    },
  },
  {
    "id": "10",
    "name": "オンシジューム",
    "stars": 5,
    "nation": "winter_rose",
    "love": "cake",
    "obtainBy": "プレミアムガチャ",
    "attribute": "red",
    "images": [
      "http://フラワーナイトガール.攻略wiki.com/index.php?plugin=ref&page=%E2%98%85%E2%98%85%E2%98%85%E2%98%85%E2%98%85%2F%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB&src=%E3%82%AA%E3%83%B3%E3%82%B7%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%A0.jpg",
      "http://フラワーナイトガール.攻略wiki.com/index.php?plugin=ref&page=%E2%98%85%E2%98%85%E2%98%85%E2%98%85%E2%98%85%2F%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB&src=%E3%82%AA%E3%83%B3%E3%82%B7%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%A02.jpg",
      "http://フラワーナイトガール.攻略wiki.com/index.php?plugin=ref&page=%E2%98%85%E2%98%85%E2%98%85%E2%98%85%E2%98%85%2F%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB&src=%E3%82%AA%E3%83%B3%E3%82%B7%E9%96%8B%E8%8A%B1.jpg",
    ],
    "originalStats": {
      "hitPoint": 12220,
      "attack": 4900,
      "defense": 1820,
      "speed": 635,
    },
    "bonusStats": {
      "hitPoint": 5652,
      "attack": 2256,
      "defense": 504,
    },
    "skills": {
      "active": {
        "name": "ブラッディマスカレイド",
        "triggerRate": "発動率20(30)%",
        "description": "敵単体に2.3倍のダメージを与え、HPを吸収する",
      },
      "passive": [
        "戦闘中、パーティメンバーの攻撃力が10%上昇",
        "パーティの移動力が100増加",
        "戦闘中、パーティメンバーのスキル発動率がそれぞれの好感度に応じて最大1.2倍に上昇",
      ]
    },
  },
  {
    "id": "11",
    "name": "シンビジューム",
    "stars": 5,
    "nation": "winter_rose",
    "love": "book",
    "obtainBy": "プレミアムガチャ",
    "attribute": "blue",
    "images": [
      "http://フラワーナイトガール.攻略wiki.com/index.php?plugin=ref&page=%E2%98%85%E2%98%85%E2%98%85%E2%98%85%E2%98%85%2F%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB&src=%E3%82%B7%E3%83%B3%E3%83%93%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%A0%E9%80%B2%E5%8C%96%E5%89%8D.jpg",
      "http://フラワーナイトガール.攻略wiki.com/index.php?plugin=ref&page=%E2%98%85%E2%98%85%E2%98%85%E2%98%85%E2%98%85%2F%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB&src=%E3%82%B7%E3%83%B3%E3%83%93%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%A02.jpg",
    ],
    "originalStats": {
      "hitPoint": 10350,
      "attack": 4460,
      "defense": 1880,
      "speed": 340,
    },
    "bonusStats": {
      "hitPoint": 2964,
      "attack": 2196,
      "defense": 924,
    },
    "skills": {
      "active": {
        "name": "華砕拳",
        "triggerRate": "発動率20(30)%",
        "description": "敵3体に1.9倍のダメージを与える",
      },
      "passive": [
        "戦闘中、1ーン目のパーティメンバーの戦闘スキル発動率が2倍になる",
        "パーティメンバーの防御力が15%、防御時のダメージ軽減率が2.2%上昇、自身は確率で3回まで戦闘不能にならずHP1で耐える\n※他アビリティとの組み合わせで軽減率は最大+20%まで上昇可能",
        "戦闘中、パーティメンバーの攻撃力が10%上",
      ]
    },
  },
  {
    "id": "21",
    "name": "スイレン",
    "stars": 5,
    "nation": "banana_ocean",
    "love": "book",
    "obtainBy": "プレミアムガチャ",
    "attribute": "red",
    "images": [
      "http://フラワーナイトガール.攻略wiki.com/index.php?plugin=ref&page=%E2%98%85%E2%98%85%E2%98%85%E2%98%85%E2%98%85%2F%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB&src=%E3%82%B9%E3%82%A4%E3%83%AC%E3%83%B3%E9%80%B2%E5%8C%96%E5%89%8D.jpg",
      "http://フラワーナイトガール.攻略wiki.com/index.php?plugin=ref&page=%E2%98%85%E2%98%85%E2%98%85%E2%98%85%E2%98%85%2F%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB&src=%E3%82%B9%E3%82%A4%E3%83%AC%E3%83%B3%E9%80%B2%E5%8C%96.jpg",
      "http://フラワーナイトガール.攻略wiki.com/index.php?plugin=ref&page=%E2%98%85%E2%98%85%E2%98%85%E2%98%85%E2%98%85%2F%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB&src=%E3%82%B9%E3%82%A4%E3%83%AC%E3%83%B3%E9%96%8B%E8%8A%B1.jpg",
    ],
    "originalStats": {
      "hitPoint": 11100,
      "attack": 4750,
      "defense": 1950,
      "speed": 600,
    },
    "bonusStats": {
      "hitPoint": 4836,
      "attack": 2280,
      "defense": 924,
    },
    "skills": {
      "active": {
        "name": "サウザンドギルティ",
        "triggerRate": "発動率32(37)%",
        "description": "敵単体に2.4倍のダメージを与え、HPを吸収する",
      },
      "passive": [
        "戦闘中、2ターンまで75%、以降は40%の確率で敵の攻撃を回避する",
        "パーティメンバーの防御力が15%、防御時のダメージ軽減率が3.0%上昇、自身は確率で3回まで戦闘不能にならずHP1で耐える\n※他アビリティとの組み合わせで軽減率は最大+20%まで上昇可能",
        "戦闘中、パーティメンバーの攻撃力が12%上昇",
      ]
    },
  },
  {
    "id": "25",
    "name": "ヨルガオ",
    "stars": 5,
    "nation": "banana_ocean",
    "obtainBy": "緊急任務　夜の輝きに感謝を込めて",
    "love": "gemstone",
    "attribute": "purple",
    "images": [
      "http://フラワーナイトガール.攻略wiki.com/index.php?plugin=ref&page=%E2%98%85%E2%98%85%E2%98%85%E2%98%85%E2%98%85%2F%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB&src=%E3%83%A8%E3%83%AB%E3%82%AC%E3%82%AA.jpg",
      "http://フラワーナイトガール.攻略wiki.com/index.php?plugin=ref&page=%E2%98%85%E2%98%85%E2%98%85%E2%98%85%E2%98%85%2F%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB&src=%E3%83%A8%E3%83%AB%E3%82%AC%E3%82%AA%E9%80%B2%E5%8C%96.jpg",
      "http://フラワーナイトガール.攻略wiki.com/index.php?plugin=ref&page=%E2%98%85%E2%98%85%E2%98%85%E2%98%85%E2%98%85%2F%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB&src=%E3%83%A8%E3%83%AB%E3%82%AC%E3%82%AA%E9%96%8B%E8%8A%B1.jpg",
    ],
    "originalStats": {
      "hitPoint": 9600,
      "attack": 3940,
      "defense": 2200,
      "speed": 670,
    },
    "bonusStats": {
      "hitPoint": 2868,
      "attack": 2136,
      "defense": 960,
    },
    "skills": {
      "active": {
        "name": "暗射術・魔時狩",
        "triggerRate": "発動率20(30)%",
        "description": "敵単体に2.3倍のダメージを与える",
      },
      "passive": [
        "戦闘中、パーティメンバーのスキル発動率がそれぞれの好感度に応じて最大1.2倍上昇",
        "戦闘中、ソーラードライブの効果が20%上昇",
        "戦闘中、パーティメンバーのシャインクリスタルのドロップ率が5%上昇\n※他アビリテイとの組み合わせで最大75%まで上昇",
      ]
    },
  },
  {
    "id": "28",
    "name": "ヤマユリ",
    "stars": 5,
    "nation": "banana_ocean",
    "love": "book",
    "obtainBy": "緊急任務　王佐の力を求めて",
    "attribute": "yellow",
    "images": [
      "http://フラワーナイトガール.攻略wiki.com/index.php?plugin=ref&page=%E2%98%85%E2%98%85%E2%98%85%E2%98%85%E2%98%85%2F%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB&src=%E3%83%A4%E3%83%9E%E3%83%A6%E3%83%AA.jpg",
      "http://フラワーナイトガール.攻略wiki.com/index.php?plugin=ref&page=%E2%98%85%E2%98%85%E2%98%85%E2%98%85%E2%98%85%2F%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB&src=%E3%83%A4%E3%83%9E%E3%83%A6%E3%83%AA2.jpg",
      "http://フラワーナイトガール.攻略wiki.com/index.php?plugin=ref&page=%E2%98%85%E2%98%85%E2%98%85%E2%98%85%E2%98%85%2F%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB&src=%E3%83%A4%E3%83%9E%E3%83%A6%E3%83%AA%E9%96%8B%E8%8A%B1.jpg",
    ],
    "originalStats": {
      "hitPoint": 12420,
      "attack": 3950,
      "defense": 1970,
      "speed": 455,
    },
    "bonusStats": {
      "hitPoint": 5676,
      "attack": 1164,
      "defense": 924,
    },
    "skills": {
      "active": {
        "name": "ソレムスレイサー",
        "triggerRate": "発動率15(30)%",
        "description": "敵単体に2.3倍のダメージを与える",
      },
      "passive": [
        "戦闘中、1ターン目のパーティメンバー全員の攻撃力が20%上昇",
        "自身を含む2人の防御力が20%上昇、防御時のダメージ軽減率が3%上昇、\n自身は確率で3回まで戦闘不能にならずHP1で耐える\n※他アビリティとの組み合わせで軽減率は最大+20％まで上昇可能",
        "攻撃を受けた時、80%の確率で防御力の2倍を攻撃力に変換し反撃、\n防御発動時の反撃は超反撃が発動する　※超反撃は通常反撃の2倍のダメージ",
      ]
    },
  },
  {
    "id": "50",
    "name": "ラベンダー",
    "stars": 5,
    "nation": "bergamot_valley",
    "love": "gemstone",
    "obtainBy": "緊急任務　滅びの都市ブレーメン",
    "attribute": "purple",
    "images": [
      "http://フラワーナイトガール.攻略wiki.com/index.php?plugin=ref&page=%E2%98%85%E2%98%85%E2%98%85%E2%98%85%E2%98%85%2F%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB&src=%E3%83%A9%E3%83%99%E3%83%B3%E3%83%80%E3%83%BC.jpg",
      "http://フラワーナイトガール.攻略wiki.com/index.php?plugin=ref&page=%E2%98%85%E2%98%85%E2%98%85%E2%98%85%E2%98%85%2F%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB&src=%E3%83%A9%E3%83%99%E3%83%B3%E3%83%80%E3%83%BC2.jpg",
      "http://フラワーナイトガール.攻略wiki.com/index.php?plugin=ref&page=%E2%98%85%E2%98%85%E2%98%85%E2%98%85%E2%98%85%2F%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB&src=%E3%83%A9%E3%83%99%E3%83%B3%E3%83%80%E3%83%BC%E9%96%8B%E8%8A%B1.jpg",
    ],
    "originalStats": {
      "hitPoint": 12140,
      "attack": 4060,
      "defense": 1740,
      "speed": 235,
    },
    "bonusStats": {
      "hitPoint": 5640,
      "attack": 2148,
      "defense": 492,
    },
    "skills": {
      "active": {
        "name": "静寂の氷結牢",
        "triggerRate": "発動率18(23)%",
        "description": "敵4体に1.8倍のダメージを与える",
      },
      "passive": [
        "パーティの受ける回復パネルの効果が3倍になる",
        "戦闘中、ソーラードライブの効果が20%上昇",
        "戦闘中、自身を含む2人の攻撃力が10%上昇",
      ]
    },
  },
  {
    "id": "98",
    "name": "ハナショウブ",
    "stars": 5,
    "nation": "bergamot_valley",
    "love": "doll",
    "obtainBy": "プレミアムガチャ",
    "attribute": "yellow",
    "images": [
      "http://フラワーナイトガール.攻略wiki.com/index.php?plugin=ref&page=%E2%98%85%E2%98%85%E2%98%85%E2%98%85%E2%98%85%2F%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB&src=%E3%83%8F%E3%83%8A%E3%82%B7%E3%83%A7%E3%82%A6%E3%83%96%E9%80%B2%E5%8C%96%E5%89%8D.png",
      "http://フラワーナイトガール.攻略wiki.com/index.php?plugin=ref&page=%E2%98%85%E2%98%85%E2%98%85%E2%98%85%E2%98%85%2F%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB&src=%E3%83%8F%E3%83%8A%E3%82%B7%E3%83%A7%E3%82%A6%E3%83%96%E9%80%B2%E5%8C%96.jpg",
      "http://フラワーナイトガール.攻略wiki.com/index.php?plugin=ref&page=%E2%98%85%E2%98%85%E2%98%85%E2%98%85%E2%98%85%2F%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB&src=%E3%83%8F%E3%83%8A%E3%82%B7%E3%83%A7%E3%82%A6%E3%83%96%E9%96%8B%E8%8A%B1.jpg",
    ],
    "originalStats": {
      "hitPoint": 10700,
      "attack": 4750,
      "defense": 2490,
      "speed": 700,
    },
    "bonusStats": {
      "hitPoint": 4092,
      "attack": 1344,
      "defense": 1128,
    },
    "skills": {
      "active": {
        "name": "愛染槍雷流奥義・飛雷召陣",
        "triggerRate": "発動率20(30)%",
        "description": "敵3体に2倍のダメージを与える",
      },
      "passive": [
        "移動中にチビ害虫から受けるダメージを50%軽減",
        "戦闘中、パーティメンバーの攻撃力が15%上昇",
        "戦闘中、パーティメンバーのスキル発動率がそれぞれの好感度に応じて最大1.2倍上昇",
      ]
    },
  },
  {
    "id": "106",
    "name": "クチナシ",
    "stars": 5,
    "nation": "banana_ocean",
    "love": "gemstone",
    "obtainBy": "プレミアムガチャ",
    "attribute": "blue",
    "images": [
      "http://フラワーナイトガール.攻略wiki.com/index.php?plugin=ref&page=%E2%98%85%E2%98%85%E2%98%85%E2%98%85%E2%98%85%2F%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB&src=%E3%82%AF%E3%83%81%E3%83%8A%E3%82%B7.jpg",
      "http://フラワーナイトガール.攻略wiki.com/index.php?plugin=ref&page=%E2%98%85%E2%98%85%E2%98%85%E2%98%85%E2%98%85%2F%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB&src=%E3%82%AF%E3%83%81%E3%83%8A%E3%82%B7%E9%80%B2%E5%8C%96.jpg",
      "http://フラワーナイトガール.攻略wiki.com/index.php?plugin=ref&page=%E2%98%85%E2%98%85%E2%98%85%E2%98%85%E2%98%85%2F%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB&src=%E3%82%AF%E3%83%81%E3%83%8A%E3%82%B7%E9%96%8B%E8%8A%B1.jpg",
    ],
    "originalStats": {
      "hitPoint": 10700,
      "attack": 4750,
      "defense": 2250,
      "speed": 600,
    },
    "bonusStats": {
      "hitPoint": 5448,
      "attack": 1968,
      "defense": 564,
    },
    "skills": {
      "active": {
        "name": "熱酔拳・骨芯砕撃",
        "triggerRate": "発動率20(30)%",
        "description": "敵2体に2.1倍のダメージを与える",
      },
      "passive": [
        "キャノンパネルを通過した際、キャノンパネルが砲撃する害虫パネルが一つ増える",
        "戦闘中、パーティメンバーの攻撃力が15%上昇",
        "戦闘中、パーティメンバーのスキル発動率が1.2倍上昇",
      ]
    },
  },
  {
    "id": "114",
    "name": "エピデンドラム",
    "stars": 5,
    "nation": "lilywood",
    "love": "cake",
    "obtainBy": "緊急任務　古洋館と白い影",
    "attribute": "purple",
    "images": [
      "http://フラワーナイトガール.攻略wiki.com/index.php?plugin=ref&page=%E2%98%85%E2%98%85%E2%98%85%E2%98%85%E2%98%85%2F%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB&src=%E3%82%A8%E3%83%94%E3%83%87%E3%83%B3%E3%83%89%E3%83%A9%E3%83%A0.jpg",
      "http://フラワーナイトガール.攻略wiki.com/index.php?plugin=ref&page=%E2%98%85%E2%98%85%E2%98%85%E2%98%85%E2%98%85%2F%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB&src=%E3%82%A8%E3%83%94%E3%83%87%E3%83%B3%E3%83%89%E3%83%A9%E3%83%A0%E9%80%B2%E5%8C%96.jpg",
    ],
    "originalStats": {
      "hitPoint": 11550,
      "attack": 5010,
      "defense": 2070,
      "speed": 470,
    },
    "bonusStats": {
      "hitPoint": 5568,
      "attack": 2004,
      "defense": 912,
    },
    "skills": {
      "active": {
        "name": "オトモ・バレット",
        "triggerRate": "発動率28(33)%",
        "description": "敵単体に2.3倍のダメージを与え、HPを吸収する",
      },
      "passive": [
        "戦闘中、1ターン目の自身の戦闘スキル発動率が1.5倍になる",
        "戦闘中、2ターンまで65%、以降は40%の確率で敵の攻撃を回避する",
        "戦闘中、パーティメンバーの攻撃力が15%上昇",
        "戦闘中、自身のクリティカル攻撃発生率を30%上昇させる\n※他アビリティとの組み合わせで発生率は最大80%まで上昇可能",
      ]
    },
  },
  {
    "id": "116",
    "name": "ギンリョウソウ",
    "stars": 5,
    "nation": "lilywood",
    "love": "doll",
    "obtainBy": "プレミアムガチャ",
    "attribute": "yellow",
    "images": [
      "http://フラワーナイトガール.攻略wiki.com/index.php?plugin=ref&page=%E2%98%85%E2%98%85%E2%98%85%E2%98%85%E2%98%85%2F%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB&src=%E3%82%AE%E3%83%B3%E3%83%AA%E3%83%A7%E3%82%A6%E3%82%BD%E3%82%A6IC.png",
      "http://フラワーナイトガール.攻略wiki.com/index.php?plugin=ref&page=%E2%98%85%E2%98%85%E2%98%85%E2%98%85%E2%98%85%2F%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB&src=%E3%82%AE%E3%83%B3%E3%83%AA%E3%83%A7%E3%82%A6%E3%82%BD%E3%82%A6%E9%80%B2%E5%8C%96.jpg",
    ],
    "originalStats": {
      "hitPoint": 11750,
      "attack": 4360,
      "defense": 1860,
      "speed": 500,
    },
    "bonusStats": {
      "hitPoint": 4236,
      "attack": 1644,
      "defense": 912,
    },
    "skills": {
      "active": {
        "name": "アルギュロス・ドラグニル",
        "triggerRate": "発動率21(30)%",
        "description": "敵単体に2.1倍のダメージを与える",
      },
      "passive": [
        "戦闘中、自身を含む3人の攻撃力が10%上昇",
        "戦闘中、2ターンまで55％、以降は40％の確率で敵の攻撃を回避する",
        "戦闘中、自身のクリティカル攻撃発生率を15％上昇させる\n※他アビリティとの組み合わせで発生率は最大80%まで上昇可能",
      ]
    },
  },
  {
    "id": "117",
    "name": "ツバキ（フォスの花嫁）",
    "stars": 5,
    "nation": "winter_rose",
    "love": "book",
    "obtainBy": "プレミアムガチャ",
    "attribute": "red",
    "images": [
      "http://フラワーナイトガール.攻略wiki.com/index.php?plugin=ref&page=%E2%98%85%E2%98%85%E2%98%85%E2%98%85%E2%98%85%2F%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB&src=%E3%83%84%E3%83%90%E3%82%AD%E8%8A%B1%E5%AB%81.jpg",
      "http://フラワーナイトガール.攻略wiki.com/index.php?plugin=ref&page=%E2%98%85%E2%98%85%E2%98%85%E2%98%85%E2%98%85%2F%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB&src=%E3%83%84%E3%83%90%E3%82%AD%E8%8A%B1%E5%AB%81%E9%80%B2%E5%8C%96.jpg",
    ],
    "originalStats": {
      "hitPoint": 11300,
      "attack": 4650,
      "defense": 1900,
      "speed": 675,
    },
    "bonusStats": {
      "hitPoint": 4716,
      "attack": 2496,
      "defense": 924,
    },
    "skills": {
      "active": {
        "name": "二刀流奥義・紅花舞イ散ル",
        "triggerRate": "発動率28(37)%",
        "description": "敵単体に2.4倍のダメージを与え、HPを吸収する",
      },
      "passive": [
        "戦闘中、パーティメンバーの攻撃力が15%上昇",
        "パーティメンバーがボスに対して与えるダメージが10%増加する",
        "戦闘中、2ターンまで65%、以降は40%の確率で敵の攻撃を回避する",
      ]
    },
  },
  {
    "id": "119",
    "name": "サボテン（フォスの花嫁）",
    "stars": 5,
    "nation": "blossom_hill",
    "love": "doll",
    "obtainBy": "プレミアムガチャ",
    "attribute": "blue",
    "images": [
      "http://フラワーナイトガール.攻略wiki.com/index.php?plugin=ref&page=%E2%98%85%E2%98%85%E2%98%85%E2%98%85%E2%98%85%2F%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB&src=%E3%82%B5%E3%83%9C%E3%83%86%E3%83%B3%E8%8A%B1%E5%AB%81.jpg",
      "http://フラワーナイトガール.攻略wiki.com/index.php?plugin=ref&page=%E2%98%85%E2%98%85%E2%98%85%E2%98%85%E2%98%85%2F%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB&src=%E3%82%B5%E3%83%9C%E3%83%86%E3%83%B3%E8%8A%B1%E5%AB%81%E9%80%B2%E5%8C%96.jpg",
    ],
    "originalStats": {
      "hitPoint": 12900,
      "attack": 4350,
      "defense": 2100,
      "speed": 695,
    },
    "bonusStats": {
      "hitPoint": 3300,
      "attack": 2460,
      "defense": 948,
    },
    "skills": {
      "active": {
        "name": "夢幻乱華掌・剛布",
        "triggerRate": "発動率24(34)%",
        "description": "敵2体に2.1倍のダメージを与える",
      },
      "passive": [
        "戦闘中、1ターン目の自身の戦闘スキル発動率が1.5倍になる",
        "パーティメンバーがボスに対して与えるダメージが10%増加する",
        "戦闘中、1ターン目の自身の攻撃力が10%上昇",
        "戦闘中、パーティメンバーの攻撃力が10%上昇",
      ]
    },
  },
  {
    "id": "121",
    "name": "サンカクサボテン",
    "stars": 5,
    "nation": "bergamot_valley",
    "love": "doll",
    "obtainBy": "プレミアムガチャ",
    "attribute": "yellow",
    "images": [
      "http://フラワーナイトガール.攻略wiki.com/index.php?plugin=ref&page=%E2%98%85%E2%98%85%E2%98%85%E2%98%85%E2%98%85%2F%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB&src=%E3%82%B5%E3%83%B3%E3%82%AB%E3%82%AF%E3%82%B5%E3%83%9C%E3%83%86%E3%83%B3.jpg",
      "http://フラワーナイトガール.攻略wiki.com/index.php?plugin=ref&page=%E2%98%85%E2%98%85%E2%98%85%E2%98%85%E2%98%85%2F%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB&src=%E3%82%B5%E3%83%B3%E3%82%AB%E3%82%AF%E3%82%B5%E3%83%9C%E3%83%86%E3%83%B3%E9%80%B2%E5%8C%96%E5%90%8E_0.jpg",
      "http://フラワーナイトガール.攻略wiki.com/index.php?plugin=ref&page=%E2%98%85%E2%98%85%E2%98%85%E2%98%85%E2%98%85%2F%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB&src=%E3%82%B5%E3%83%B3%E3%82%AB%E3%82%AF%E3%82%B5%E3%83%9C%E3%83%86%E3%83%B3%E9%96%8B%E8%8A%B1.jpg",
    ],
    "originalStats": {
      "hitPoint": 10400,
      "attack": 4330,
      "defense": 2270,
      "speed": 500,
    },
    "bonusStats": {
      "hitPoint": 4596,
      "attack": 2508,
      "defense": 564,
    },
    "skills": {
      "active": {
        "name": "愛染幻槍術・三百連閣",
        "triggerRate": "発動率26(36)%",
        "description": "敵に3回1.3倍のダメージを与える",
      },
      "passive": [
        "敵2体の攻撃力を15%低下させる。\n※他アビリティとの組み合わせで敵の攻撃力は最大70%まで低下可能",
        "戦闘中、パーティメンバーの攻撃力が12%上昇",
        "戦闘中、パーティメンバーのクリティカル攻撃発生率を10%上昇させる\n※他アビリティとの組み合わせで発生率は最大80%まで上昇可能",
      ]
    },
  },
]

function sad() {
  const asd = [
    5, 10, 11, 21, 25, 28, 50, 98, 106, 114, 116, 117, 119, 121
  ]
  return asd
}

sad()

export default girls
