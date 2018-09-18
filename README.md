# veah.github.io

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### github pages
> github pages 只会读取/ 或者 /docs 文件夹下的index.html
因此，为了适应 github pages 的读取规则，在 vue.config.js 中添加了两项规则，更改 build 的目标路径
其中，baseUrl 可以设置为 './'（相对路径） 或者 '/blogs/'（子域名绝对路径）
```
baseUrl: process.env.NODE_ENV === 'production'
        ? './'
        : '/',
outputDir: 'docs'
```

同时,在 package.json 中对 build 的命令做了改动，在 build 的时候更改 NODE_ENV
```
"build": "NODE_ENV=production && vue-cli-service build"
```
