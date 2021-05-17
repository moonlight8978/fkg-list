export namespace Unit {
  export interface Image {
    url: string
  }

  export enum Enhancement {
    twoSteps = 0,
    /**
     * 開花(能力のみ)
     */
    threeSteps = 1,
    /**
     * 開花
     */
    threeStepsWithArt = 2,
  }

  export enum Attribute {
    /**
     * 打
     */
    blue = 1,
    /**
     * 斬
     */
    red = 2,
    /**
     * 突
     */
    yellow = 3,
    /**
     * 魔
     */
    violet = 4,
  }

  export enum Favorite {
    /**
     * ケーキ
     */
    cake = 1,
    /**
     * 本
     */
    book = 2,
    /**
     * ぬいぐるみ
     */
    doll = 3,
    /**
     * 宝石
     */
    jewel = 4,
  }

  export enum Family {
    /**
     * ウィンターローズ
     */
    winterRose = 1,
    /**
     * バナナオーシャン
     */
    bananaOcean = 2,
    /**
     * ブロッサムヒル
     */
    blossomHill = 3,
    /**
     * ベルガモットバレー
     */
    bergamotValley = 4,
    /**
     * リリィウッド
     */
    lilywood = 5,
    /**
     * ロータスレイク
     */
    lotusLake = 6,
  }

  export type Star = 2 | 3 | 4 | 5 | 6

  export interface Simple {
    code: string
    name: string
    images: [Image, Image, Image]
    attribute: Attribute
    star: Star
    hp: number
    attack: number
    defense: number
    favorite: Favorite
  }

  export interface SimpleDetails {
    enhancement: Enhancement
    family: Family
    upgradability: Upgradability
    speed: number
  }

  export enum Upgradability {
    none = 0,
    /**
     * 昇華
     */
    promoteToSixStars = 1,
  }

  export interface Skills {
    skills: string[]
  }

  // export interface Full {
  //   code: string
  //   name: string
  //   images: [Image, Image, Image]
  //   star: Star

  //   enhancement: Enhancement
  //   attribute: Attribute
  //   hp: number
  //   attack: number
  //   defense: number
  //   speed: number
  //   family: string
  //   favorite: Favorite
  //   skills: string[]
  // }
}
