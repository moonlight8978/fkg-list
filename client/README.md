# FKGList

A simple character list for [Flower Knight Girl](http://pc-play.games.dmm.com/play/flower/) using [React](http://reactjs.org/).

##### Features

* Client-side only, using JSON for data fetching.
* Listing all 2-6 stars characters with paginating.
* Stats are after upgrading, max level, without using Anpuru - アンプルゥ.
* Sorting:
  * By HP, Defense, Attack, Total stats (HP + Defense + Attack), Stars, ...
* Filtering:
  * By stars, attribute, ...
  * Autocomplete search (name)
* Switch stage icon image by clicking them, images are lazyloaded.
* MyList: add/remove/export/import.

##### Requirements

* Connect to Internet
  * To toggle local images/wiki's images, edit the `client/src/components/fkg-item/fkg-item.jsx` (line 46-47) to:

```js
// client/src/components/fkg-item/fkg-item.jsx

// ...codes
<Image src={imageSrc} name={fkg.name} />
{/* <Image src={fkg.images[imageIndex]} name={fkg.name} /> */}
// ...codes
```
  * The first will enable local images, the second will use wiki's images (require Internet).
* Install [Noto Sans CJK JP font](https://noto-website-2.storage.googleapis.com/pkgs/NotoSerifCJKjp-hinted.zip)
* Extract the `client/public/assets/fkg.zip`. Folder structure will be: `client/public/assets/fkg/a_lot_of_images_here`

##### TODO

* More sorting, filtering options.
* Re-master stylesheet.
* Optimize code (FKGList/FKGItem components).
* Infinite-scrolling instead of clicking "Show more" button.
* Mapping unit properties (attribute, nation, ...) to japanese text

##### Setup

* `$ yarn install`

* `$ yarn start`

##### Links

* Data: Crawl from [Japanese wiki](http://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/)
* Game: [here](http://pc-play.games.dmm.com/play/flower/)
