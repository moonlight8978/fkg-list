require('./src/utils/monkey-patching')
const ListPageParser = require('./src/list-page-parser')

let parser = new ListPageParser('build/lists/★★★★★★.html')

parser.perform()
