```bash
npx lerna init
cd packages && mkdir crawler && yarn init
npx lerna create types
yarn lerna exec --scope types -- tsc --init
```
