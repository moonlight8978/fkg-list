# Version 1.1.0


* JSON generator for FKGList
* ~~Support 5 and 6 stars only~~ Support 2-6 stars

##### Environment
* OS: Windows 10 Pro Build 16299.309

* Node:
```shell
$ node --version
v8.7.0
```

##### Setup
* `$ yarn install`

```shell
$ mkdir build && mkdir build/items && mkdir build/lists
```

##### In case that the numbers of '昇華' girl increased
* Go to [強化・進化合成](http://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E5%BC%B7%E5%8C%96%E3%83%BB%E9%80%B2%E5%8C%96%E5%90%88%E6%88%90)

* Paste this script to Dev Console (F12)

```js
JSON.stringify(Array.from($('#sortabletable4 td:nth-child(3) a')).map(el => el.href))
```

* Result will be `"[.....]"`

* Copy the array `[....]` without `""` to `crawler.js`

```js
crawl('build/items',
  paste.here
)
```

##### Get the HTML files
* `$ yarn crawl`

##### Build JSON (after crawling the HTMLs)
* `$ yarn build`

##### Download images (Will change to JS soon)
* `$ ruby download.rb`

##### Run test data (after building the JSON file)
* `$ cp ./build/data.json ./test`

* `$ yarn test`

##### Links
* http://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/

* https://medium.com/of-all-things-tech-progress/introduction-to-webcrawling-with-javascript-and-node-js-f5a3798ee8ac

* https://scotch.io/tutorials/scraping-the-web-with-node-js

* http://jonathanmh.com/web-scraping-web-crawling-pages-with-node-js

* https://regex101.com/
