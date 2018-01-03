const girls = [
  {
    "id": "5",
    "name": "ツバキ",
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
];

export default girls;
