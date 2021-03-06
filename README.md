# FKG List

[![CircleCI](https://circleci.com/gh/moonlight8978/fkg-list/tree/main.svg?style=svg)](https://circleci.com/gh/moonlight8978/fkg-list/?branch=main)

A simple character list for [Flower Knight Girl](http://pc-play.games.dmm.com/play/flower/) using [React](http://reactjs.org/).

### Folders

- `packages/fkg-list-webapp`: React Webapp.
- `packages/fkg-list-crawler`: Data (JSON) crawler/generator for client.
  ```txt
  Crawler => Parser => Middleware(s) => Output
  ```
- The rest are not important.

### Development

```bash
node -v
# => v14.17.0

yarn -v
# => 1.22.10
```

```bash
cp packages/fkg-list-webapp/.env packages/fkg-list-webapp/.env.production.local
```

```bash
yarn install

yarn start:webapp
open localhost:3000 # For MacOS, or just type http://localhost:3000 on browser

yarn build:webapp
yarn deploy:local
open localhost:5000 # For MacOS, or just type http://localhost:5000 on browser
```

### Links

- Data: Crawl from [Japanese wiki](http://フラワーナイトガール.攻略wiki.com/)
- Game: [here](http://pc-play.games.dmm.com/play/flower/)
