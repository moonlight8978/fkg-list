$(document).on("click", ".download", function(event) {
  const $this = $(this)
  const arr = [1, 2, 3, 4]
  var blob = new Blob([JSON.stringify(arr, null, 2)], { type: 'application/json' });
  const url = window.URL.createObjectURL(blob);
  $this.attr('href', url)
  $this.attr('download', 'data.json')
})

$(document).on("change", ".read", function(event) {
  const $this = $(this)
  const file = this.files[0]
  const reader = new FileReader()
  reader.onload = function (evt) {
    $('.read-content').text(evt.target.result)
  }
  reader.onerror = function (evt) {
    $('.read-content').text("error reading file")
  }
  reader.readAsText(file, 'UTF-8')
})

const app = new Vue({
  el: '.app',
  data: {
    id: 140,
    attribute: './img/blue.png',
    name: 'ビオラ',
    image: './img/viola.jpg',
    version: '浴衣',
    stats: {
      hp: 14280 + 5100,
      attack: 4850 + 2796,
      defense: 2000 + 792,
      speed: 570,
      total: 14280 + 5100 + 4850 + 2796 + 2000 + 792
    },
    skill: {
      name: 'びっくり！チビオラ隊',
      triggerRate: '発動率24(34)%',
      description: '敵全体に2.2倍のダメージを与える'
    },
    abilities: [
      '戦闘中、パーティメンバーの攻撃力が15%上昇',
      '自身を含む3人の防御力が25%上昇、防御時のダメージ軽減率が3.7%上昇、\n自身は確率で3回まで戦闘不能にならずHP1で耐える\n※他アビリティとの組み合わせで軽減率は最大+20%まで上昇可能',
      '戦闘中、自身を含む3人が、突属性弱点の敵に弱点(1.5倍ダメージ)が発動\n※突属性以外のメンバーを対象に選び、同じ効果のアビリティは重複しない',
      '戦闘中、1ターン目のパーティメンバーのスキル発動率が1.65倍上昇'
    ],
    love: '宝石',
    obtainBy: 'プレミアムガチャ 0.5%'
  }
})
